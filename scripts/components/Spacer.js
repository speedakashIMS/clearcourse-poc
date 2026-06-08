import { jsx as r } from "react/jsx-runtime";
const d = ({
  mode: o = "preset",
  // 'preset' | 'number'
  height: s,
  presetDesktop: a = "sm",
  // xs | sm | md | lg | xl
  presetMobile: n = "sm",
  // xs | sm | md | lg | xl
  className: l = "",
  ...e
}) => {
  const t = {
    xs: "h-10",
    sm: "h-20",
    md: "h-32",
    lg: "h-48",
    xl: "h-60"
  }, m = {
    xs: "lg:h-10",
    sm: "lg:h-20",
    md: "lg:h-32",
    lg: "lg:h-48",
    xl: "lg:h-60"
  };
  if (o === "number") {
    const c = typeof s == "number" ? `${s}px` : s;
    return /* @__PURE__ */ r(
      "div",
      {
        className: `w-full ${l}`,
        style: { height: c },
        ...e
      }
    );
  }
  const h = t[n] || t.sm, p = m[a] || m.sm;
  return /* @__PURE__ */ r("div", { className: `w-full ${h} ${p} ${l}`, ...e });
};
export {
  d as default
};
