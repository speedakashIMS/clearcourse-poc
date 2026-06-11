import { jsx as e, jsxs as m } from "react/jsx-runtime";
import * as n from "react";
import { useState as j, useId as M } from "react";
function E({
  title: r,
  titleId: t,
  ...s
}, i) {
  return /* @__PURE__ */ n.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, s), r ? /* @__PURE__ */ n.createElement("title", {
    id: t
  }, r) : null, /* @__PURE__ */ n.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
const L = /* @__PURE__ */ n.forwardRef(E);
function B({
  title: r,
  titleId: t,
  ...s
}, i) {
  return /* @__PURE__ */ n.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, s), r ? /* @__PURE__ */ n.createElement("title", {
    id: t
  }, r) : null, /* @__PURE__ */ n.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const R = /* @__PURE__ */ n.forwardRef(B);
function z({
  title: r,
  titleId: t,
  ...s
}, i) {
  return /* @__PURE__ */ n.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, s), r ? /* @__PURE__ */ n.createElement("title", {
    id: t
  }, r) : null, /* @__PURE__ */ n.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const O = /* @__PURE__ */ n.forwardRef(z), S = ({
  text: r = "Button",
  href: t = void 0,
  variant: s = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: i = "btn-md",
  // btn-sm , btn-md
  className: a = "",
  disabled: c = !1,
  onClick: u = void 0,
  attributes: g = {},
  ...d
}) => {
  const w = (h) => {
    switch (h) {
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
      case "secondary":
        return "btn-primary";
      default:
        return "btn-light";
    }
  }, f = (h) => {
    switch (h) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, l = `btn ${w(s)} ${f(i)} ${a}`.trim();
  return t ? /* @__PURE__ */ e(
    "a",
    {
      href: t,
      className: l,
      onClick: u,
      ...d,
      ...g ?? {},
      children: r
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: d.type || "button",
      className: l,
      disabled: c,
      onClick: u,
      ...d,
      ...g ?? {},
      children: r
    }
  );
}, F = ({
  buttons: r = [],
  // Array of button objects: [{ text, variant, size, href, onClick }]
  size: t = "btn-md",
  className: s = "flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap justify-center items-center gap-10",
  ...i
}) => !r || r.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${s}`, ...i, children: r.map((a, c) => /* @__PURE__ */ e(
  S,
  {
    text: a.text,
    variant: a.variant,
    size: a.size || t,
    href: a.href,
    onClick: a.onClick,
    attributes: a.attributes
  },
  c
)) }), y = {
  dark: {
    bar: "bg-secondary",
    link: "text-white hover:text-white/80 focus-visible:text-white/80 lg:text-white lg:hover:text-white/80 lg:focus-visible:text-white/80",
    dropdown: "bg-secondary-800 lg:bg-white lg:shadow-lg",
    dropdownLink: "text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600",
    mobileMenu: "bg-secondary",
    hamburger: "border-white text-white hover:text-white/80 hover:border-white/80 focus-visible:text-white/80 focus-visible:border-white/80"
  },
  light: {
    bar: "bg-white",
    link: "text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600",
    dropdown: "bg-secondary-800 lg:bg-white lg:shadow-lg",
    dropdownLink: "text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600",
    mobileMenu: "bg-secondary lg:bg-white",
    hamburger: "border-secondary text-secondary hover:text-secondary-600 hover:border-secondary-400 focus-visible:text-secondary-600 focus-visible:border-secondary-400"
  },
  gradient: {
    bar: "bg-gradient-header",
    link: "text-white hover:text-white/80 focus-visible:text-white/80 lg:text-white lg:hover:text-white/80 lg:focus-visible:text-white/80",
    dropdown: "bg-secondary-800 lg:bg-white lg:shadow-lg",
    dropdownLink: "text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600",
    mobileMenu: "bg-secondary lg:bg-gradient-to-b lg:from-secondary lg:to-transparent",
    hamburger: "border-white text-white hover:text-white/80 hover:border-white/80 focus-visible:text-white/80 focus-visible:border-white/80"
  }
};
function A({
  fullWidth: r = !1,
  logo: t,
  navItems: s = [],
  // [{ label, href, submenu: [{ label, href }] }]
  buttons: i = [],
  // [{ text, variant, size, href, onClick }]
  alignNavRight: a = !0,
  variant: c = "gradient",
  // 'dark' | 'light' | 'gradient' |
  skipLinkText: u = "Skip navigation",
  className: g = "",
  ...d
}) {
  const [b, w] = j(!1), f = M(), l = y[c] ?? y.dark, h = `w-full ${l.bar} relative`.trim(), k = [
    "flex items-center gap-nav-spacing-x pt-nav-padding-t pb-nav-padding-b pl-nav-padding-l pr-nav-padding-r",
    r ? "w-full max-w-[1600px] mx-auto" : "container"
  ].filter(Boolean).join(" "), N = a ? "ml-auto" : "flex-1 justify-center";
  return /* @__PURE__ */ m("nav", { className: `${h} ${g}`.trim(), ...d, children: [
    /* @__PURE__ */ e(
      "a",
      {
        href: `#${f}`,
        className: "sr-only focus:not-sr-only focus:absolute focus:left-20 focus:top-20 focus:z-20 focus:inline-flex focus:rounded-8 focus:bg-white focus:px-16 focus:py-10 focus:text-body-default focus:text-grey-950",
        children: u
      }
    ),
    /* @__PURE__ */ m("div", { className: k, children: [
      /* @__PURE__ */ e("div", { className: "flex items-center", children: t && /* @__PURE__ */ e("a", { href: "/", className: "inline-flex shrink-0 items-center", "aria-label": "Home", children: typeof t == "string" ? /* @__PURE__ */ e("img", { src: t, alt: "", className: "h-auto min-h-32 max-h-32" }) : t }) }),
      /* @__PURE__ */ e("div", { className: `hidden lg:flex items-center gap-24 ${b ? `!block absolute top-[100%] left-0 w-full ${l.mobileMenu} z-10 px-20 space-y-12 lg:space-y-0 py-10` : "hidden"} ${N}`.trim(), children: s.map((o, $) => {
        var x, v;
        return /* @__PURE__ */ m("div", { className: "relative group", children: [
          /* @__PURE__ */ m(
            "a",
            {
              href: o.href || "#",
              className: `inline-flex items-center gap-10 text-body-default transition-colors ${l.link}`.trim(),
              children: [
                o.label,
                ((x = o.submenu) == null ? void 0 : x.length) > 0 && /* @__PURE__ */ e(R, { className: "w-16 h-16 shrink-0", "aria-hidden": !0 })
              ]
            }
          ),
          ((v = o.submenu) == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e("div", { className: "block lg:absolute lg:left-0 lg:top-full lg:pt-12 lg:hidden lg:group-hover:block lg:z-50", children: /* @__PURE__ */ e("ul", { className: `min-w-[180px] lg:rounded-8 p-nav-dd--padding ${l.dropdown}`, children: o.submenu.map((p, C) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
            "a",
            {
              href: p.href || "#",
              className: `block p-10 text-body-default transition-colors ${l.dropdownLink}`,
              children: p.label
            }
          ) }, `${o.label}-submenu-${C}`)) }) })
        ] }, `${o.label}-${$}`);
      }) }),
      /* @__PURE__ */ e("div", { className: "hidden lg:flex nav-buttons", children: /* @__PURE__ */ e(
        F,
        {
          buttons: i,
          className: "flex items-center gap-10"
        }
      ) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: `lg:hidden inline-flex items-center justify-center w-40 h-40 ms-auto rounded-8 border transition-colors ${l.hamburger}`,
          "aria-label": "Open menu",
          "aria-expanded": b,
          onClick: () => w((o) => !o),
          children: b ? /* @__PURE__ */ e(O, { className: "w-20 h-20" }) : /* @__PURE__ */ e(L, { className: "w-20 h-20" })
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { id: f, tabIndex: -1, className: "sr-only outline-none", children: "End of navigation" })
  ] });
}
export {
  A as default
};
