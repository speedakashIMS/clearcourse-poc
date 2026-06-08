import { jsx as t, jsxs as b } from "react/jsx-runtime";
import * as v from "react";
import D from "lottie-react";
const W = ({
  text: r = "Button",
  href: s = void 0,
  variant: a = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: i = "btn-md",
  // btn-sm , btn-md
  className: f = "",
  disabled: g = !1,
  onClick: o = void 0,
  attributes: c = {},
  ...l
}) => {
  const n = (e) => {
    switch (e) {
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
  }, d = (e) => {
    switch (e) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, u = `btn ${n(a)} ${d(i)} ${f}`.trim();
  return s ? /* @__PURE__ */ t(
    "a",
    {
      href: s,
      className: u,
      onClick: o,
      ...l,
      ...c ?? {},
      children: r
    }
  ) : /* @__PURE__ */ t(
    "button",
    {
      type: l.type || "button",
      className: u,
      disabled: g,
      onClick: o,
      ...l,
      ...c ?? {},
      children: r
    }
  );
};
function F({
  title: r,
  titleId: s,
  ...a
}, i) {
  return /* @__PURE__ */ v.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: i,
    "aria-labelledby": s
  }, a), r ? /* @__PURE__ */ v.createElement("title", {
    id: s
  }, r) : null, /* @__PURE__ */ v.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const R = /* @__PURE__ */ v.forwardRef(F), V = ({
  text: r = "Link",
  href: s = "#",
  variant: a = "dark",
  // dark, light
  icon: i,
  className: f = "",
  ...g
}) => {
  const o = "text-link", c = (n) => {
    switch (n) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, l = i || R, h = `${o} ${c(a)} ${f}`.trim();
  return /* @__PURE__ */ b(
    "a",
    {
      href: s,
      className: h,
      ...g,
      children: [
        /* @__PURE__ */ t("span", { children: r }),
        /* @__PURE__ */ t(l, { className: "text-link-icon" })
      ]
    }
  );
}, B = ({
  media: r = "image",
  // 'image' | 'video' | 'lottie' | 'iframe'
  aspect: s = "default",
  // 'default' | 'rectangle' | 'square'
  imageUrl: a,
  videoUrl: i,
  lottieUrl: f,
  lottieData: g,
  iframeUrl: o,
  title: c,
  className: l = ""
}) => {
  var m;
  const n = `relative w-full h-full ${s === "square" ? "aspect-square" : s === "rectangle" ? "aspect-[4/3]" : r === "video" ? "aspect-video" : ""}`.trim(), d = s === "default" ? `w-full h-full ${l}`.trim() : `absolute inset-0 w-full h-full ${l}`.trim(), u = "w-full h-full", e = s === "default" ? `min-h-[220px] md:min-h-[360px] ${d}`.trim() : d;
  switch (r) {
    case "image":
      if (a)
        return /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t(
          "img",
          {
            src: a,
            alt: c || "Media image",
            className: `object-cover ${d}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (i) {
        let p = i;
        return (i.includes("youtube.com/watch") || i.includes("youtu.be/")) && (p = `https://www.youtube.com/embed/${i.includes("youtu.be/") ? i.split("youtu.be/")[1].split("?")[0] : (m = i.split("v=")[1]) == null ? void 0 : m.split("&")[0]}`), /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t(
          "iframe",
          {
            src: p,
            title: c || "Video player",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: d
          }
        ) });
      }
      break;
    case "lottie":
      if (g)
        return /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t("div", { className: `${d} overflow-hidden`.trim(), children: /* @__PURE__ */ t(
          D,
          {
            animationData: g,
            loop: !0,
            autoplay: !0,
            className: u,
            style: { width: "100%", height: "100%" },
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
          }
        ) }) });
      if (f)
        return /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (o)
        return /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t(
          "iframe",
          {
            src: o,
            title: c || "Iframe content",
            frameBorder: "0",
            className: e
          }
        ) });
      break;
  }
  return /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${s === "default" ? "" : "absolute inset-0"}`.trim(), children: r ? `${r.charAt(0).toUpperCase() + r.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, T = ({
  stacked: r = !0,
  // true = vertical stack, false = horizontal side-by-side
  imagePosition: s = "left",
  // 'left' or 'right' (only applies when stacked = false)
  variant: a = "flushed",
  // 'flushed' | 'framed' | 'circle' - flushed = full width, framed = square aspect ratio, circle = 100px x 100px circular
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: f,
  // URL for image
  videoUrl: g,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: o,
  // URL to Lottie animation JSON file
  lottieData: c,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: l,
  // URL for iframe
  title: h,
  description: n,
  buttonText: d,
  buttonHref: u,
  buttonVariant: e = "light",
  buttonType: m = "button",
  // button | link
  linkVariant: p,
  buttonOnClick: x,
  className: C = "",
  attributes: y = {}
}) => {
  const N = `
    flex
    bg-grey-500
    flex-col
    ${r ? "" : "md:flex-row"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${C}
  `.trim().replace(/\s+/g, " "), $ = `
    w-full
    ${r ? "" : a === "framed" ? "md:w-1/4" : a === "circle" ? "md:w-auto" : "md:w-1/2"}
    ${a === "circle" ? "" : "p-cards-image--padding-y"}
    flex
    items-center
    justify-center
    overflow-hidden
    ${a === "framed" && r ? "rounded-t-[var(--spacing-cards-br)]" : ""}
    ${a === "framed" && !r && s === "left" ? "md:rounded-l-[var(--spacing-cards-br)]" : ""}
    ${a === "framed" && !r && s === "right" ? "md:rounded-r-[var(--spacing-cards-br)]" : ""}
  `.trim().replace(/\s+/g, " "), k = `
    ${a === "circle" ? "w-[100px] h-[100px]" : a === "framed" ? "w-full aspect-square" : "w-full"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${a === "circle" ? "rounded-full" : a === "framed" ? "rounded-[var(--spacing-cards-image--br)]" : r ? "rounded-t-[var(--spacing-cards-image--br)]" : s === "left" ? "rounded-l-[var(--spacing-cards-image--br)]" : "rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), M = `
    w-full
    ${r ? "aspect-[441/269]" : "md:w-1/2"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${r ? "rounded-t-[var(--spacing-cards-image--br)]" : s === "left" ? "md:rounded-l-[var(--spacing-cards-image--br)]" : "md:rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), w = `
    w-full
    ${r ? "" : a === "framed" ? "md:w-3/4" : a === "circle" ? "md:flex-1" : "md:w-1/2"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex
    flex-col
    gap-textmedia-btn-text--spacing-y
    ${r ? "rounded-b-[var(--spacing-cards-image--br)]" : s === "left" ? "md:rounded-r-[var(--spacing-cards-image--br)]" : "md:rounded-l-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), U = /* @__PURE__ */ t(
    B,
    {
      media: i,
      aspect: "default",
      imageUrl: f,
      videoUrl: g,
      lottieUrl: o,
      lottieData: c,
      iframeUrl: l,
      title: h,
      className: ""
    }
  ), I = r || s === "left", L = () => a === "framed" || a === "circle" ? /* @__PURE__ */ t("div", { className: $, children: /* @__PURE__ */ t("div", { className: k, children: U }) }) : /* @__PURE__ */ t("div", { className: M, children: U });
  return /* @__PURE__ */ b("div", { className: N, ...y ?? {}, children: [
    I && L(),
    /* @__PURE__ */ b("div", { className: w, children: [
      /* @__PURE__ */ b("div", { className: "space-y-textmedia-text--spacing-y", children: [
        h && /* @__PURE__ */ t("h3", { className: "text-headings-h3 font-semibold text-white", children: h }),
        n && /* @__PURE__ */ t("p", { className: "text-body-default text-white", children: n })
      ] }),
      d && /* @__PURE__ */ t("div", { className: "mt-auto", children: m === "link" ? /* @__PURE__ */ t(
        V,
        {
          text: d,
          href: u,
          variant: p || (e.includes("light") ? "light" : "dark"),
          onClick: x
        }
      ) : /* @__PURE__ */ t(
        W,
        {
          text: d,
          href: u,
          variant: e,
          onClick: x
        }
      ) })
    ] }),
    !I && L()
  ] });
}, q = ({
  stacked: r = !0,
  // true = vertical stack, false = horizontal side-by-side
  iconPosition: s = "left",
  // 'left' or 'right' (only applies when stacked = false)
  media: a = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: i,
  // URL for image
  videoUrl: f,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: g,
  // URL to Lottie animation JSON file
  lottieData: o,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: c,
  // URL for iframe
  title: l,
  description: h,
  buttonText: n,
  buttonHref: d,
  buttonVariant: u = "light",
  buttonType: e = "button",
  // button | link
  linkVariant: m,
  buttonOnClick: p,
  className: x = "",
  attributes: C = {}
}) => {
  const y = `
    flex
    bg-grey-500
    ${r ? "flex-col" : "flex-row items-start"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${x}
  `.trim().replace(/\s+/g, " "), N = `
    ${r ? "w-full" : "w-auto"}
    flex
    items-center
    justify-center
    overflow-hidden
    py-cards-icon--padding-y
    px-cards-icon--padding-x
  `.trim().replace(/\s+/g, " "), $ = `
    w-[94px]
    h-[100px]
    bg-grey-200
    flex
    items-center
    justify-center
    aspect-square
    rounded-24
    overflow-hidden
  `.trim().replace(/\s+/g, " "), k = `
    ${r ? "w-full" : "flex-1"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex
    flex-col
    gap-textmedia-btn-text--spacing-y
    ${r ? "rounded-b-cards-br" : s === "left" ? "rounded-r-cards-br" : "rounded-l-cards-br"}
  `.trim().replace(/\s+/g, " "), M = /* @__PURE__ */ t(
    B,
    {
      media: a,
      aspect: "default",
      imageUrl: i,
      videoUrl: f,
      lottieUrl: g,
      lottieData: o,
      iframeUrl: c,
      title: l,
      className: ""
    }
  ), w = r || s === "left", j = () => /* @__PURE__ */ t("div", { className: N, children: /* @__PURE__ */ t("div", { className: $, children: M }) });
  return /* @__PURE__ */ b("div", { className: y, ...C ?? {}, children: [
    w && j(),
    /* @__PURE__ */ b("div", { className: k, children: [
      /* @__PURE__ */ b("div", { className: "space-y-textmedia-text--spacing-y", children: [
        l && /* @__PURE__ */ t("h3", { className: "text-headings-h3 font-semibold text-white", children: l }),
        h && /* @__PURE__ */ t("p", { className: "text-body-default text-white", children: h })
      ] }),
      n && /* @__PURE__ */ t("div", { className: "mt-auto", children: e === "link" ? /* @__PURE__ */ t(
        V,
        {
          text: n,
          href: d,
          variant: m || (u.includes("light") ? "light" : "dark"),
          onClick: p
        }
      ) : /* @__PURE__ */ t(
        W,
        {
          text: n,
          href: d,
          variant: u,
          onClick: p
        }
      ) })
    ] }),
    !w && j()
  ] });
}, H = ({
  type: r = "image",
  // 'image' | 'icon' - determines which card molecule to use
  columns: s = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: a = [],
  // Array of card data objects
  buttonType: i = "button",
  linkVariant: f,
  className: g = "",
  ...o
}) => {
  const c = () => "flex flex-wrap gap-y-section-spacing-y justify-center", l = () => {
    const h = (e) => {
      const m = e.stacked !== void 0 ? e.stacked : !0;
      return r === "icon" ? s > 4 ? 3 : Math.min(s, 4) : m ? Math.min(s, 2) : 1;
    }, n = (e) => {
      switch (h(e)) {
        case 1:
          return "md:w-full";
        case 2:
          return "md:w-1/2";
        case 3:
          return "md:w-1/3";
        case 4:
          return "md:w-1/4";
        default:
          return "md:w-1/2";
      }
    }, d = () => {
      switch (s) {
        case 1:
          return "lg:w-full";
        case 2:
          return "lg:w-1/2";
        case 3:
          return "lg:w-1/3";
        case 4:
          return "lg:w-1/4";
        case 5:
          return "lg:w-1/3 xl:w-1/5";
        case 6:
          return "lg:w-1/3 xl:w-1/6";
        default:
          return "lg:w-1/3";
      }
    }, u = (e) => `px-[calc(var(--spacing-section-spacing-x)/2)] w-full ${n(e)} ${d()}`;
    return r === "icon" ? a.map((e, m) => /* @__PURE__ */ t("div", { className: u(e), children: /* @__PURE__ */ t(
      q,
      {
        stacked: e.stacked !== void 0 ? e.stacked : !0,
        iconPosition: e.iconPosition || "left",
        media: e.media || "image",
        imageUrl: e.imageUrl,
        videoUrl: e.videoUrl,
        lottieUrl: e.lottieUrl,
        lottieData: e.lottieData,
        iframeUrl: e.iframeUrl,
        title: e.title,
        description: e.description,
        buttonText: e.buttonText,
        buttonHref: e.buttonHref,
        buttonVariant: e.buttonVariant || "light",
        buttonType: e.buttonType || i,
        linkVariant: e.linkVariant || f,
        buttonOnClick: e.buttonOnClick,
        attributes: e.attributes
      }
    ) }, m)) : a.map((e, m) => /* @__PURE__ */ t("div", { className: u(e), children: /* @__PURE__ */ t(
      T,
      {
        stacked: e.stacked !== void 0 ? e.stacked : !0,
        imagePosition: e.imagePosition || "left",
        variant: e.variant || "flushed",
        media: e.media || "image",
        imageUrl: e.imageUrl,
        videoUrl: e.videoUrl,
        lottieUrl: e.lottieUrl,
        lottieData: e.lottieData,
        iframeUrl: e.iframeUrl,
        title: e.title,
        description: e.description,
        buttonText: e.buttonText,
        buttonHref: e.buttonHref,
        buttonVariant: e.buttonVariant || "light",
        buttonType: e.buttonType || i,
        linkVariant: e.linkVariant || f,
        buttonOnClick: e.buttonOnClick,
        attributes: e.attributes
      }
    ) }, m));
  };
  return /* @__PURE__ */ t("div", { className: g, ...o, children: /* @__PURE__ */ t("div", { className: `${c()}`, children: l() }) });
};
export {
  H as default
};
