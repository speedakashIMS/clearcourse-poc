import { jsxs as f, jsx as t } from "react/jsx-runtime";
import * as b from "react";
function M({
  title: s,
  titleId: n,
  ...l
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": n
  }, l), s ? /* @__PURE__ */ b.createElement("title", {
    id: n
  }, s) : null, /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const R = /* @__PURE__ */ b.forwardRef(M), j = ({
  text: s = "Link",
  href: n = "#",
  variant: l = "dark",
  // dark, light
  icon: r,
  className: d = "",
  ...o
}) => {
  const g = "text-link", c = (a) => {
    switch (a) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, e = r || R, i = `${g} ${c(l)} ${d}`.trim();
  return /* @__PURE__ */ f(
    "a",
    {
      href: n,
      className: i,
      ...o,
      children: [
        /* @__PURE__ */ t("span", { children: s }),
        /* @__PURE__ */ t(e, { className: "text-link-icon" })
      ]
    }
  );
}, E = ({
  text: s = "Button",
  href: n = void 0,
  variant: l = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: r = "btn-md",
  // btn-sm , btn-md
  className: d = "",
  disabled: o = !1,
  onClick: g = void 0,
  attributes: c = {},
  ...e
}) => {
  const a = (u) => {
    switch (u) {
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
  }, h = (u) => {
    switch (u) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, p = `btn ${a(l)} ${h(r)} ${d}`.trim();
  return n ? /* @__PURE__ */ t(
    "a",
    {
      href: n,
      className: p,
      onClick: g,
      ...e,
      ...c ?? {},
      children: s
    }
  ) : /* @__PURE__ */ t(
    "button",
    {
      type: e.type || "button",
      className: p,
      disabled: o,
      onClick: g,
      ...e,
      ...c ?? {},
      children: s
    }
  );
};
function L({
  title: s,
  titleId: n,
  ...l
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": n
  }, l), s ? /* @__PURE__ */ b.createElement("title", {
    id: n
  }, s) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const G = /* @__PURE__ */ b.forwardRef(L), S = ({
  text: s,
  useIcon: n = !0,
  number: l,
  stacked: r = !1,
  size: d = "medium",
  // 'small' | 'medium' | 'large'
  className: o = "",
  attributes: g = {}
}) => {
  const c = !!r, i = { small: 16, medium: 24, large: 32 }[d] || 24, a = { width: `${i}px`, height: `${i}px` }, h = c ? "flex-col items-start" : "flex-row items-start", p = c ? "gap-8" : "gap-12", u = c ? "" : "mt-4", w = n ? /* @__PURE__ */ t(G, { className: `flex-shrink-0 ${u}`.trim(), style: a }) : /* @__PURE__ */ t(
    "span",
    {
      className: `font-semibold flex-shrink-0 leading-none ${u}`.trim(),
      style: { fontSize: `${i}px` },
      children: l
    }
  ), y = /* @__PURE__ */ f("div", { className: `flex ${h} ${p} ${o}`.trim(), children: [
    w,
    /* @__PURE__ */ t("span", { className: "text-body-large", children: s })
  ] });
  return n ? /* @__PURE__ */ t("li", { ...g || {}, children: y }) : /* @__PURE__ */ t("div", { ...g || {}, children: y });
}, I = ({
  title: s,
  description: n,
  richText: l,
  valueList: r = null,
  // { items: [{ text, number?, attributes? }], stacked, size, useIcon }
  buttonText: d,
  buttonHref: o,
  buttonOnClick: g,
  buttonType: c = "link",
  // 'link' | 'button'
  backgroundImage: e,
  backgroundColor: i = "primary",
  // 'primary' | 'secondary' | 'tertiary' | 'white'
  className: a = "",
  attributes: h = {}
}) => {
  const p = (i || "primary").toLowerCase(), u = {
    primary: "bg-primary text-white border-white",
    secondary: "bg-secondary text-white border-white",
    tertiary: "bg-tertiary text-secondary border-secondary-300",
    white: "bg-white text-secondary border-secondary-300"
  }, y = `
    relative
    overflow-hidden
    border-2
    px-textmedia-text--padding-x py-textmedia-text--padding-y
    ${u[p] || u.primary}
    ${a}
  `.trim().replace(/\s+/g, " "), z = e ? {
    backgroundImage: `url(${e})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  } : void 0, C = typeof o == "string" ? o.trim().length > 0 : !!o, k = (m) => typeof m == "string" && m.trim().length > 0, $ = r && Array.isArray(r.items) && r.items.length > 0, B = k(s) || k(n) || k(l) || $, v = c === "link" && k(d) && C, N = c === "button" && k(d) && C;
  return /* @__PURE__ */ f(
    "div",
    {
      className: y,
      style: z,
      ...h ?? {},
      children: [
        !!e && (B || v || N) && /* @__PURE__ */ t(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 75%)"
            },
            "aria-hidden": !0
          }
        ),
        /* @__PURE__ */ f("div", { className: "relative z-10 max-w-[520px] min-h-[280px] flex flex-col items-start justify-end", children: [
          /* @__PURE__ */ f("div", { className: "space-y-textmedia-text--spacing-y", children: [
            s && /* @__PURE__ */ t("h3", { className: "text-headings-h3 font-semibold", children: s }),
            n && /* @__PURE__ */ t("p", { className: "text-body-default", children: n }),
            l && /* @__PURE__ */ t(
              "div",
              {
                dangerouslySetInnerHTML: { __html: l },
                className: "wysiwyg"
              }
            ),
            $ && (r.useIcon !== !1 ? /* @__PURE__ */ t("ul", { className: "mt-24 space-y-12", children: r.items.map((m, x) => /* @__PURE__ */ t(
              S,
              {
                text: m.text,
                useIcon: !0,
                number: m.number,
                stacked: r.stacked,
                size: r.size,
                attributes: m.attributes
              },
              x
            )) }) : /* @__PURE__ */ t("div", { className: "mt-24 space-y-12", children: r.items.map((m, x) => /* @__PURE__ */ t(
              S,
              {
                text: m.text,
                useIcon: !1,
                number: m.number,
                stacked: r.stacked,
                size: r.size,
                attributes: m.attributes
              },
              x
            )) }))
          ] }),
          (v || N) && (c === "button" ? /* @__PURE__ */ t(
            E,
            {
              text: d,
              href: o,
              variant: "light",
              onClick: g,
              className: "mt-10"
            }
          ) : /* @__PURE__ */ t(
            j,
            {
              text: d,
              href: o,
              variant: "dark",
              onClick: g
            }
          ))
        ] })
      ]
    }
  );
}, A = ({
  columns: s = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  gridVariant: n = "contained",
  // 'contained' | 'full'
  data: l = [],
  // Array of tile data objects
  className: r = "",
  ...d
}) => {
  const o = () => {
    const e = n === "full" ? "gap-0" : "gap-24", a = [3, 5, 6].includes(s) ? "lg:grid-cols-6" : `lg:grid-cols-${s}`;
    switch (s) {
      case 1:
        return `grid grid-cols-1 ${e}`;
      case 2:
        return `grid grid-cols-1 md:grid-cols-2 ${e}`;
      case 3:
        return `grid grid-cols-1 md:grid-cols-2 ${a} ${e}`;
      case 4:
        return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${e}`;
      case 5:
        return `grid grid-cols-1 md:grid-cols-2 ${a} xl:grid-cols-5 ${e}`;
      case 6:
        return `grid grid-cols-1 md:grid-cols-2 ${a} xl:grid-cols-6 ${e}`;
      default:
        return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${e}`;
    }
  }, g = (e, i) => {
    const a = [], h = e === i - 1, p = e === i - 2;
    if (s >= 2 && i % 2 === 1 && h && a.push("md:col-span-2"), [3, 5, 6].includes(s)) {
      const u = i % 3;
      u === 1 && h ? a.push("lg:col-span-6") : u === 2 && (p || h) ? a.push("lg:col-span-3") : a.push("lg:col-span-2");
    }
    return s >= 5 && a.push("xl:col-span-1"), a.join(" ");
  };
  return /* @__PURE__ */ t("div", { className: r, ...d, children: /* @__PURE__ */ t("div", { className: n === "contained" ? "container" : "", children: /* @__PURE__ */ t("div", { className: o(), children: l.map((e, i) => /* @__PURE__ */ t(
    I,
    {
      title: e.title,
      description: e.description,
      buttonText: e.buttonText,
      buttonHref: e.buttonHref,
      buttonType: e.buttonType || "link",
      buttonOnClick: e.buttonOnClick,
      backgroundImage: e.backgroundImage,
      backgroundColor: e.backgroundColor || "primary",
      richText: e.richText,
      valueList: e.valueList,
      className: `${n === "contained" ? "rounded-[var(--spacing-tiles-br)]" : "rounded-none"} ${g(i, l.length)} ${e.className || ""}`.trim(),
      attributes: e.attributes
    },
    i
  )) }) }) });
};
export {
  A as default
};
