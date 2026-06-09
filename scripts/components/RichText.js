import { jsx as r } from "react/jsx-runtime";
const i = ({
  content: e = "",
  size: s = "normal",
  // small | normal | large
  className: t = "",
  ...a
}) => e ? /* @__PURE__ */ r("div", { className: "container", children: /* @__PURE__ */ r(
  "div",
  {
    className: `wysiwyg ${(() => {
      switch (s) {
        case "small":
          return "text-body-small";
        case "large":
          return "text-body-large";
        case "normal":
        default:
          return "text-body-default";
      }
    })()} ${t}`.trim(),
    dangerouslySetInnerHTML: { __html: e },
    ...a
  }
) }) : null;
export {
  i as default
};
