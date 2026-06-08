import { jsx as s } from "react/jsx-runtime";
const f = ({
  logos: c = [],
  // Array of { src, alt, href }
  className: i = "",
  ...l
}) => {
  const n = "w-full flex flex-wrap justify-center gap-16", r = "flex items-center justify-center shrink-0 w-[215px] h-[215px] p-[40px] bg-white border border-gray-200 overflow-hidden";
  return /* @__PURE__ */ s("div", { className: `py-logos-padding-y ${i}`, ...l, children: /* @__PURE__ */ s("div", { className: n, children: c.map((e, a) => {
    const t = /* @__PURE__ */ s(
      "img",
      {
        src: e.src,
        alt: e.alt || "Logo",
        className: "w-full h-full object-contain p-2"
      }
    );
    return e.href ? /* @__PURE__ */ s(
      "a",
      {
        href: e.href,
        className: r,
        ...e.attributes ?? {},
        children: t
      },
      a
    ) : /* @__PURE__ */ s(
      "div",
      {
        className: r,
        ...e.attributes ?? {},
        children: t
      },
      a
    );
  }) }) });
};
export {
  f as default
};
