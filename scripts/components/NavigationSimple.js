import { jsx as e, jsxs as d } from "react/jsx-runtime";
import * as r from "react";
import { useState as j, useId as E } from "react";
function L({
  title: n,
  titleId: t,
  ...s
}, i) {
  return /* @__PURE__ */ r.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, s), n ? /* @__PURE__ */ r.createElement("title", {
    id: t
  }, n) : null, /* @__PURE__ */ r.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
const M = /* @__PURE__ */ r.forwardRef(L);
function B({
  title: n,
  titleId: t,
  ...s
}, i) {
  return /* @__PURE__ */ r.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, s), n ? /* @__PURE__ */ r.createElement("title", {
    id: t
  }, n) : null, /* @__PURE__ */ r.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const R = /* @__PURE__ */ r.forwardRef(B);
function O({
  title: n,
  titleId: t,
  ...s
}, i) {
  return /* @__PURE__ */ r.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": t
  }, s), n ? /* @__PURE__ */ r.createElement("title", {
    id: t
  }, n) : null, /* @__PURE__ */ r.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const z = /* @__PURE__ */ r.forwardRef(O), S = ({
  text: n = "Button",
  href: t = void 0,
  variant: s = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: i = "btn-md",
  // btn-sm , btn-md
  className: a = "",
  disabled: h = !1,
  onClick: f = void 0,
  attributes: b = {},
  ...u
}) => {
  const x = (g) => {
    switch (g) {
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
  }, m = (g) => {
    switch (g) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, o = `btn ${x(s)} ${m(i)} ${a}`.trim();
  return t ? /* @__PURE__ */ e(
    "a",
    {
      href: t,
      className: o,
      onClick: f,
      ...u,
      ...b ?? {},
      children: n
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: u.type || "button",
      className: o,
      disabled: h,
      onClick: f,
      ...u,
      ...b ?? {},
      children: n
    }
  );
}, F = ({
  buttons: n = [],
  // Array of button objects: [{ text, variant, size, href, onClick }]
  size: t = "btn-md",
  className: s = "flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap justify-center items-center gap-10",
  ...i
}) => !n || n.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${s}`, ...i, children: n.map((a, h) => /* @__PURE__ */ e(
  S,
  {
    text: a.text,
    variant: a.variant,
    size: a.size || t,
    href: a.href,
    onClick: a.onClick,
    attributes: a.attributes
  },
  h
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
function D({
  fullWidth: n = !1,
  logo: t,
  navItems: s = [],
  // [{ label, submenu: [{ title, subtitle, icon, href }] }]
  buttons: i = [],
  alignNavRight: a = !0,
  variant: h = "gradient",
  skipLinkText: f = "Skip navigation",
  className: b = "",
  ...u
}) {
  const [w, x] = j(!1), m = E(), o = y[h] ?? y.dark, g = `w-full ${o.bar} relative`, k = [
    "flex items-center gap-nav-spacing-x pt-nav-padding-t pb-nav-padding-b pl-nav-padding-l pr-nav-padding-r",
    n ? "w-full max-w-[1600px] mx-auto" : "container"
  ].filter(Boolean).join(" "), N = a ? "ml-auto" : "flex-1 justify-center";
  return /* @__PURE__ */ d(
    "nav",
    {
      className: `${g} ${b}`.trim(),
      ...u,
      children: [
        /* @__PURE__ */ e(
          "a",
          {
            href: `#${m}`,
            className: "sr-only focus:not-sr-only focus:absolute focus:left-20 focus:top-20 focus:z-20 focus:inline-flex focus:rounded-8 focus:bg-white focus:px-16 focus:py-10 focus:text-body-default focus:text-grey-950",
            children: f
          }
        ),
        /* @__PURE__ */ d("div", { className: k, children: [
          /* @__PURE__ */ e("div", { className: "flex items-center", children: t && /* @__PURE__ */ e(
            "a",
            {
              href: "/",
              className: "inline-flex shrink-0 items-center",
              "aria-label": "Home",
              children: typeof t == "string" ? /* @__PURE__ */ e(
                "img",
                {
                  src: t,
                  alt: "",
                  className: "h-auto min-h-32 max-h-32"
                }
              ) : t
            }
          ) }),
          /* @__PURE__ */ e(
            "div",
            {
              className: `hidden lg:flex items-center gap-24 ${N}`.trim(),
              children: s.map((l, $) => {
                var v, p;
                return /* @__PURE__ */ d(
                  "div",
                  {
                    className: "relative group",
                    children: [
                      /* @__PURE__ */ d(
                        "a",
                        {
                          href: l.href || "#",
                          className: `inline-flex items-center gap-10 text-body-default transition-colors ${o.link}`,
                          children: [
                            l.label,
                            ((v = l.submenu) == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e(
                              R,
                              {
                                className: "w-16 h-16 shrink-0",
                                "aria-hidden": !0
                              }
                            )
                          ]
                        }
                      ),
                      ((p = l.submenu) == null ? void 0 : p.length) > 0 && /* @__PURE__ */ e("div", { className: "hidden lg:absolute lg:left-0 lg:top-full lg:pt-12 lg:group-hover:block lg:z-50", children: /* @__PURE__ */ e(
                        "ul",
                        {
                          className: `min-w-[320px] lg:rounded-8 p-nav-dd--padding ${o.dropdown}`,
                          children: l.submenu.map((c, C) => /* @__PURE__ */ e(
                            "li",
                            {
                              children: /* @__PURE__ */ d(
                                "a",
                                {
                                  href: c.href || "#",
                                  className: `flex items-start gap-12 p-12 transition-colors ${o.dropdownLink}`,
                                  children: [
                                    c.icon && /* @__PURE__ */ e(
                                      "img",
                                      {
                                        src: c.icon,
                                        alt: "",
                                        className: "w-24 h-24 shrink-0 mt-2"
                                      }
                                    ),
                                    /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
                                      /* @__PURE__ */ e("span", { className: "font-medium", children: c.title }),
                                      c.subtitle && /* @__PURE__ */ e("span", { className: "text-sm opacity-75", children: c.subtitle })
                                    ] })
                                  ]
                                }
                              )
                            },
                            `${l.label}-submenu-${C}`
                          ))
                        }
                      ) })
                    ]
                  },
                  `${l.label}-${$}`
                );
              })
            }
          ),
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
              className: `lg:hidden inline-flex items-center justify-center w-40 h-40 ms-auto rounded-8 border transition-colors ${o.hamburger}`,
              "aria-label": "Open menu",
              "aria-expanded": w,
              onClick: () => x((l) => !l),
              children: w ? /* @__PURE__ */ e(z, { className: "w-20 h-20" }) : /* @__PURE__ */ e(M, { className: "w-20 h-20" })
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            id: m,
            tabIndex: -1,
            className: "sr-only outline-none",
            children: "End of navigation"
          }
        )
      ]
    }
  );
}
export {
  D as default
};
