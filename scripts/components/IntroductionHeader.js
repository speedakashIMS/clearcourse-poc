import { jsxs as i, jsx as a } from "react/jsx-runtime";
const f = ({
  title: e,
  titleHeaderType: r = "h2",
  // 'h2' | 'h3'
  titleAccent: l = !1,
  alignment: t = "left",
  // 'left' | 'centre' | 'center' | 'right'
  description: s,
  descriptionSize: c = "normal",
  // 'small' | 'normal' | 'large'
  className: o = "",
  ...h
}) => {
  if (!e && !s) return null;
  const n = `
    ${r === "h2" ? "text-headings-h2" : "text-headings-h3"}
    font-bold
    ${l ? "font-accent" : ""}
  `.trim().replace(/\s+/g, " "), d = (() => {
    switch (c) {
      case "small":
        return "text-body-small";
      case "large":
        return "text-body-large";
      case "normal":
      default:
        return "text-body-default";
    }
  })();
  return /* @__PURE__ */ i("div", { className: `container mx-auto ${t === "right" ? "text-right" : t === "centre" || t === "center" ? "text-center" : "text-left"} ${o}`, ...h, children: [
    e && (r === "h2" ? /* @__PURE__ */ a("h2", { className: n, children: e }) : /* @__PURE__ */ a("h3", { className: n, children: e })),
    s && /* @__PURE__ */ a("div", { className: `${d} mt-10`, children: s })
  ] });
};
export {
  f as default
};
