import { jsx as a, jsxs as g } from "react/jsx-runtime";
import * as s from "react";
function m({
  title: e,
  titleId: t,
  ...r
}, l) {
  return /* @__PURE__ */ s.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: l,
    "aria-labelledby": t
  }, r), e ? /* @__PURE__ */ s.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ s.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  }));
}
const f = /* @__PURE__ */ s.forwardRef(m), b = ({
  items: e = [],
  // [{ text, href }]
  align: t = "left",
  // 'left' | 'center' | 'right'
  variant: r = "dark",
  // 'dark' | 'light'
  className: l = "",
  ...o
}) => {
  if (!e || e.length === 0) return null;
  const c = t === "center" ? "justify-center" : t === "right" ? "justify-end" : "justify-start", d = r === "light" ? "text-white" : "text-body-default text-grey-600", h = r === "light" ? "text-white hover:text-white/80 focus-visible:text-white/80" : "text-grey-600 hover:text-grey-950 focus-visible:text-grey-950", u = r === "light" ? "text-white" : "text-grey-400";
  return /* @__PURE__ */ a("nav", { className: l, "aria-label": "Breadcrumbs", ...o, children: /* @__PURE__ */ a("ol", { className: `w-full max-w-[1600px] mx-auto pl-nav-padding-l pr-nav-padding-r flex items-center gap-breadcrumb-menu--spacing-x text-body-small pt-breadcrumb-padding-t pb-breadcrumb-padding-b ${c}`.trim(), children: e.map((n, i) => {
    const x = i === e.length - 1;
    return /* @__PURE__ */ g("li", { className: `flex items-center gap-12 ${d}`.trim(), children: [
      i > 0 && /* @__PURE__ */ a(f, { className: `h-16 w-16 ${u}`.trim() }),
      x ? /* @__PURE__ */ a("span", { children: n.text }) : /* @__PURE__ */ a(
        "a",
        {
          href: n.href || "#",
          className: `${h} transition-colors`.trim(),
          children: n.text
        }
      )
    ] }, `${n.text}-${i}`);
  }) }) });
};
export {
  b as default
};
