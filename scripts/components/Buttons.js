import { jsx as r } from "react/jsx-runtime";
const b = ({
  text: e = "Button",
  href: n = void 0,
  variant: s = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: a = "btn-md",
  // btn-sm , btn-md
  className: t = "",
  disabled: i = !1,
  onClick: u = void 0,
  attributes: d = {},
  ...l
}) => {
  const m = (c) => {
    switch (c) {
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
  }, h = (c) => {
    switch (c) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, o = `btn ${m(s)} ${h(a)} ${t}`.trim();
  return n ? /* @__PURE__ */ r(
    "a",
    {
      href: n,
      className: o,
      onClick: u,
      ...l,
      ...d ?? {},
      children: e
    }
  ) : /* @__PURE__ */ r(
    "button",
    {
      type: l.type || "button",
      className: o,
      disabled: i,
      onClick: u,
      ...l,
      ...d ?? {},
      children: e
    }
  );
}, k = ({
  buttons: e = [],
  // Array of button objects: [{ text, variant, size, href, onClick }]
  size: n = "btn-md",
  className: s = "flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap justify-center items-center gap-10",
  ...a
}) => !e || e.length === 0 ? null : /* @__PURE__ */ r("div", { className: `container ${s}`, ...a, children: e.map((t, i) => /* @__PURE__ */ r(
  b,
  {
    text: t.text,
    variant: t.variant,
    size: t.size || n,
    href: t.href,
    onClick: t.onClick,
    attributes: t.attributes
  },
  i
)) });
export {
  k as default
};
