import { jsx as s } from "react/jsx-runtime";
const b = ({
  text: e = "Button",
  href: n = void 0,
  variant: r = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
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
  }, o = `btn ${m(r)} ${h(a)} ${t}`.trim();
  return n ? /* @__PURE__ */ s(
    "a",
    {
      href: n,
      className: o,
      onClick: u,
      ...l,
      ...d ?? {},
      children: e
    }
  ) : /* @__PURE__ */ s(
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
  className: r = "flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap justify-center items-center gap-10",
  ...a
}) => !e || e.length === 0 ? null : /* @__PURE__ */ s("div", { className: `container ${r}`, ...a, children: e.map((t, i) => /* @__PURE__ */ s(
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
