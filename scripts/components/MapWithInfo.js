import { jsx as t, jsxs as p } from "react/jsx-runtime";
import * as f from "react";
const w = ({
  text: s = "Button",
  href: e = void 0,
  variant: l = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: c = "btn-md",
  // btn-sm , btn-md
  className: m = "",
  disabled: u = !1,
  onClick: r = void 0,
  attributes: i = {},
  ...o
}) => {
  const x = (a) => {
    switch (a) {
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
  }, h = (a) => {
    switch (a) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, n = `btn ${x(l)} ${h(c)} ${m}`.trim();
  return e ? /* @__PURE__ */ t(
    "a",
    {
      href: e,
      className: n,
      onClick: r,
      ...o,
      ...i ?? {},
      children: s
    }
  ) : /* @__PURE__ */ t(
    "button",
    {
      type: o.type || "button",
      className: n,
      disabled: u,
      onClick: r,
      ...o,
      ...i ?? {},
      children: s
    }
  );
};
function N({
  title: s,
  titleId: e,
  ...l
}, c) {
  return /* @__PURE__ */ f.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: c,
    "aria-labelledby": e
  }, l), s ? /* @__PURE__ */ f.createElement("title", {
    id: e
  }, s) : null, /* @__PURE__ */ f.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const k = /* @__PURE__ */ f.forwardRef(N), b = ({
  text: s,
  useIcon: e = !0,
  number: l,
  stacked: c = !1,
  size: m = "medium",
  // 'small' | 'medium' | 'large'
  className: u = "",
  attributes: r = {}
}) => {
  const i = !!c, d = { small: 16, medium: 24, large: 32 }[m] || 24, x = { width: `${d}px`, height: `${d}px` }, h = i ? "flex-col items-start" : "flex-row items-start", n = i ? "gap-8" : "gap-12", a = i ? "" : "mt-4", y = e ? /* @__PURE__ */ t(k, { className: `flex-shrink-0 ${a}`.trim(), style: x }) : /* @__PURE__ */ t(
    "span",
    {
      className: `font-semibold flex-shrink-0 leading-none ${a}`.trim(),
      style: { fontSize: `${d}px` },
      children: l
    }
  ), g = /* @__PURE__ */ p("div", { className: `flex ${h} ${n} ${u}`.trim(), children: [
    y,
    /* @__PURE__ */ t("span", { className: "text-body-large", children: s })
  ] });
  return e ? /* @__PURE__ */ t("li", { ...r || {}, children: g }) : /* @__PURE__ */ t("div", { ...r || {}, children: g });
}, $ = ({
  richText: s = "",
  valueList: e = null,
  // { items: [text, number?][], stacked, size: 'small'|'medium'|'large', useIcon }
  buttonText: l,
  buttonHref: c,
  buttonVariant: m = "dark",
  buttonOnClick: u,
  mapImageUrl: r,
  mapImageAlt: i = "Map",
  mapIframeUrl: o,
  className: d = "",
  ...x
}) => /* @__PURE__ */ t("div", { className: `space-y-section-spacing-y ${d}`, ...x, children: /* @__PURE__ */ p("div", { className: "relative w-full xl:aspect-[1512/522] xl:flex xl:items-center xl:justify-center", children: [
  o ? /* @__PURE__ */ t(
    "iframe",
    {
      src: o,
      title: "Map",
      className: "xl:absolute xl:inset-0 w-full h-full aspect-[4/3] xl:aspect-auto",
      allowFullScreen: !0,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
    }
  ) : r && /* @__PURE__ */ t(
    "img",
    {
      src: r,
      alt: i,
      className: "xl:absolute xl:inset-0 w-full h-full xl:object-cover xl:z-10 aspect-[4/3] xl:aspect-auto"
    }
  ),
  /* @__PURE__ */ t("div", { className: "xl:container xl:px-0", children: /* @__PURE__ */ t("div", { className: "w-full xl:max-w-[364px] ms-auto relative z-10 bg-white p-textmedia-text--padding-x p-textmedia-text--padding-y space-y-24", children: /* @__PURE__ */ p("div", { className: "space-y-textmedia-btn-text--spacing-y", children: [
    /* @__PURE__ */ p("div", { className: "space-y-20", children: [
      s && /* @__PURE__ */ t("div", { dangerouslySetInnerHTML: { __html: s }, className: "wysiwyg space-y-textmedia-text--spacing-y pb-textmedia-text--spacing-y" }),
      e && Array.isArray(e.items) && e.items.length > 0 && (e.useIcon !== !1 ? /* @__PURE__ */ t("ul", { className: "space-y-12", children: e.items.map((n, a) => /* @__PURE__ */ t(
        b,
        {
          text: n.text,
          useIcon: !0,
          number: n.number,
          stacked: e.stacked,
          size: e.size
        },
        a
      )) }) : /* @__PURE__ */ t("div", { className: "mt-24 space-y-12", children: e.items.map((n, a) => /* @__PURE__ */ t(
        b,
        {
          text: n.text,
          useIcon: !1,
          number: n.number,
          stacked: e.stacked,
          size: e.size
        },
        a
      )) }))
    ] }),
    l && /* @__PURE__ */ t(
      w,
      {
        text: l,
        href: c,
        variant: m,
        onClick: u
      }
    )
  ] }) }) })
] }) });
export {
  $ as default
};
