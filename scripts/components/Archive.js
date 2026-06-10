import { jsx as e, jsxs as M } from "react/jsx-runtime";
import * as S from "react";
import { lazy as X, Suspense as G, useId as z, useState as A, useEffect as R, useRef as J, useCallback as E, forwardRef as K } from "react";
import Q from "lottie-react";
function Z({
  tab: t = {},
  // { text: string, image: string, imageAlt: string }
  isActive: l = !1,
  onClick: i = () => {
  },
  index: c = 0,
  className: o = "",
  largeImage: d = !1
  // if true, set image size to 48x48 even to mobile
}) {
  return t ? /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ M(
    "button",
    {
      onClick: i,
      className: `inline-flex justify-center items-center gap-4 xl:gap-10 rounded-full border transition-all duration-300 p-tabbed-loz--padding cursor-pointer hover:bg-grey-600 hover:text-white focus-visible:bg-grey-600 focus-visible:text-white min-w-[110px] ${l ? "border-grey-600 bg-grey-600 text-white" : "border-grey-600 bg-grey-100 text-grey-950"}`,
      children: [
        t.image && /* @__PURE__ */ e(
          "img",
          {
            src: t.image,
            alt: t.imageAlt || "",
            className: `rounded-full object-cover ${d ? "w-48 h-48" : "w-24 h-24 xl:w-48 xl:h-48"}`
          }
        ),
        t.text && /* @__PURE__ */ e("span", { className: "text-body-default", children: t.text })
      ]
    }
  ) }, c) : null;
}
function ee({
  tab: t = {},
  isActive: l = !1,
  onClick: i = () => {
  },
  index: c = 0,
  className: o = ""
}) {
  return t ? /* @__PURE__ */ e(
    "button",
    {
      onClick: i,
      className: `h-44px flex flex-row justify-start items-center gap-10 self-stretch border-b border-x transition-all duration-300  p-tabbed-row--padding cursor-pointer hover:bg-grey-300 focus-visible:bg-grey-300 ${l ? "border-grey-400 bg-grey-300" : "border-grey-400 bg-white"}
      ${c === 0 ? "border-t" : ""}
      ${o}`,
      children: t.text && /* @__PURE__ */ e("span", { className: "text-body-default", children: t.text })
    }
  ) : null;
}
const U = ({
  text: t = "Button",
  href: l = void 0,
  variant: i = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: c = "btn-md",
  // btn-sm , btn-md
  className: o = "",
  disabled: d = !1,
  onClick: w = void 0,
  attributes: C = {},
  ...$
}) => {
  const p = (a) => {
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
  }, n = (a) => {
    switch (a) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, h = `btn ${p(i)} ${n(c)} ${o}`.trim();
  return l ? /* @__PURE__ */ e(
    "a",
    {
      href: l,
      className: h,
      onClick: w,
      ...$,
      ...C ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: $.type || "button",
      className: h,
      disabled: d,
      onClick: w,
      ...$,
      ...C ?? {},
      children: t
    }
  );
};
function te({
  title: t,
  titleId: l,
  ...i
}, c) {
  return /* @__PURE__ */ S.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: c,
    "aria-labelledby": l
  }, i), t ? /* @__PURE__ */ S.createElement("title", {
    id: l
  }, t) : null, /* @__PURE__ */ S.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const re = /* @__PURE__ */ S.forwardRef(te), _ = ({
  text: t = "Link",
  href: l = "#",
  variant: i = "dark",
  // dark, light
  icon: c,
  className: o = "",
  ...d
}) => {
  const w = "text-link", C = (p) => {
    switch (p) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, $ = c || re, u = `${w} ${C(i)} ${o}`.trim();
  return /* @__PURE__ */ M(
    "a",
    {
      href: l,
      className: u,
      ...d,
      children: [
        /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e($, { className: "text-link-icon" })
      ]
    }
  );
}, se = X(() => Promise.resolve().then(() => me)), H = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: l = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: i = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: c,
  videoUrl: o,
  lottieUrl: d,
  lottieData: w,
  iframeUrl: C,
  flipbookUrl: $,
  title: u,
  className: p = ""
}) => {
  var v;
  const n = typeof window < "u" && window.location.origin.indexOf("author") > -1, h = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, g = `relative w-full h-full ${l === "square" ? "aspect-square" : l === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), y = l === "default" ? `w-full h-full ${p}`.trim() : `absolute inset-0 w-full h-full ${p}`.trim(), s = "w-full h-full", r = l === "default" ? `${y}`.trim() : y, m = i === "contain" ? "object-contain" : "object-cover", x = i === "contain" ? "xMidYMid meet" : "xMidYMid slice", f = `relative w-full ${p}`.trim(), N = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (c)
        return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(
          "img",
          {
            src: c,
            alt: u || "Media image",
            className: `${m} ${y}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (o) {
        const b = o.includes("youtube.com/watch") || o.includes("youtu.be/");
        let k = o;
        b && (k = `https://www.youtube.com/embed/${o.includes("youtu.be/") ? o.split("youtu.be/")[1].split("?")[0] : (v = o.split("v=")[1]) == null ? void 0 : v.split("&")[0]}`);
        const T = (() => {
          if (!b) return k;
          try {
            const j = new URL(k);
            return j.searchParams.set("autoplay", "0"), j.searchParams.set("mute", "0"), j.searchParams.set("playsinline", "1"), j.searchParams.set("controls", "1"), j.searchParams.set("rel", "0"), j.toString();
          } catch {
            return k.includes("?") ? k.includes("autoplay=") ? k : `${k}&autoplay=0` : `${k}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: g, children: b ? /* @__PURE__ */ e(
          "iframe",
          {
            src: T,
            title: u || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${y} ${m}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${y} ${m}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: u || "Video player",
            children: /* @__PURE__ */ e("source", { src: o })
          }
        ) });
      }
      break;
    case "lottie":
      if (w)
        return n ? /* @__PURE__ */ e("div", { className: g, role: "img", "aria-label": u || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${y}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: g,
            role: "img",
            "aria-label": u || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${y} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              Q,
              {
                animationData: w,
                loop: !h,
                autoplay: !h,
                className: s,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: x }
              }
            ) })
          }
        );
      if (d)
        return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (C)
        return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: C,
            title: u || "Iframe content",
            frameBorder: "0",
            className: `${r} ${m}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if ($)
        return n ? /* @__PURE__ */ e("div", { className: f, role: "img", "aria-label": u || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${N}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e("div", { className: N, children: /* @__PURE__ */ e(G, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(se, { pdfUrl: $, title: u, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${l === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, ie = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  imagePosition: l = "left",
  // 'left' or 'right' (only applies when stacked = false)
  variant: i = "flushed",
  // 'flushed' | 'framed' | 'circle' - flushed = full width, framed = square aspect ratio, circle = 100px x 100px circular
  media: c = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: o,
  // URL for image
  videoUrl: d,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: w,
  // URL to Lottie animation JSON file
  lottieData: C,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: $,
  // URL for iframe
  mediaAltTitle: u,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: p,
  description: n,
  descriptionRichText: h,
  // optional HTML from CMS; when set, rendered with .wysiwyg instead of plain `description`
  buttonText: a,
  buttonHref: g,
  buttonVariant: y = "light",
  buttonType: s = "button",
  // button | link
  linkVariant: r,
  buttonOnClick: m,
  backgroundVariant: x = "default",
  // default | primary | secondary | tertiary
  className: f = "",
  attributes: N = {}
}) => {
  const v = typeof h == "string" && h.trim().length > 0, b = {
    default: "bg-grey-500 text-grey-950",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-grey-950",
    tertiary: "bg-tertiary text-grey-950"
  }, k = b[x] || b.default, T = z(), j = `
    flex
    w-full
    ${k}
    flex-col
    ${t ? "" : "md:flex-row"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${f}
  `.trim().replace(/\s+/g, " "), I = `
    w-full
    ${t ? "" : i === "framed" ? "md:w-1/2 lg:min-w-[calc(200px+var(--spacing-cards-image--padding-y))]" : i === "circle" ? "md:w-auto" : "md:w-1/2"}
    ${i === "circle" ? "" : "p-cards-image--padding-y"}
    flex
    items-center
    justify-center
    overflow-hidden
    ${i === "framed" && t ? "rounded-t-[var(--spacing-cards-br)]" : ""}
    ${i === "framed" && !t && l === "left" ? "md:rounded-l-[var(--spacing-cards-br)]" : ""}
    ${i === "framed" && !t && l === "right" ? "md:rounded-r-[var(--spacing-cards-br)]" : ""}
  `.trim().replace(/\s+/g, " "), P = `
    ${i === "circle" ? "w-[100px] h-[100px]" : i === "framed" ? "w-full aspect-square" : "w-full"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${i === "circle" ? "rounded-full" : i === "framed" ? "rounded-[var(--spacing-cards-image--br)]" : t ? "rounded-t-[var(--spacing-cards-image--br)]" : l === "left" ? "rounded-l-[var(--spacing-cards-image--br)]" : "rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), L = `
    w-full
    ${t ? "aspect-[441/269]" : "md:w-1/2"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${t ? "rounded-t-[var(--spacing-cards-image--br)]" : l === "left" ? "md:rounded-l-[var(--spacing-cards-image--br)]" : "md:rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), q = `
    w-full
    ${t ? "" : i === "framed" ? "md:w-3/4" : i === "circle" ? "md:flex-1" : "md:w-1/2"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex-grow-1
    flex
    flex-col
    gap-textmedia-btn-text--spacing-y
    ${t ? "rounded-b-[var(--spacing-cards-image--br)]" : l === "left" ? "md:rounded-r-[var(--spacing-cards-image--br)]" : "md:rounded-l-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), B = /* @__PURE__ */ e(
    H,
    {
      media: c,
      aspect: "default",
      imageUrl: o,
      videoUrl: d,
      lottieUrl: w,
      lottieData: C,
      iframeUrl: $,
      title: u ?? p,
      className: ""
    }
  ), W = t || l === "left", D = () => i === "framed" || i === "circle" ? /* @__PURE__ */ e("div", { className: I, children: /* @__PURE__ */ e("div", { className: P, children: B }) }) : /* @__PURE__ */ e("div", { className: L, children: B });
  return /* @__PURE__ */ M(
    "article",
    {
      className: j,
      ...p ? { "aria-labelledby": T } : { "aria-label": "Card" },
      ...N ?? {},
      children: [
        W && D(),
        /* @__PURE__ */ M("div", { className: q, children: [
          /* @__PURE__ */ M("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            p && /* @__PURE__ */ e("h3", { id: T, className: "text-headings-h3 font-semibold text-white", children: p }),
            v ? /* @__PURE__ */ e(
              "div",
              {
                className: "wysiwyg text-body-default text-white",
                dangerouslySetInnerHTML: { __html: h }
              }
            ) : n && /* @__PURE__ */ e("p", { className: "text-body-default text-white", children: n })
          ] }),
          a && /* @__PURE__ */ e("div", { className: "mt-auto", children: s === "link" ? /* @__PURE__ */ e(
            _,
            {
              text: a,
              href: g,
              variant: r || (y.includes("light") ? "light" : "dark"),
              onClick: m
            }
          ) : /* @__PURE__ */ e(
            U,
            {
              text: a,
              href: g,
              variant: y,
              onClick: m
            }
          ) })
        ] }),
        !W && D()
      ]
    }
  );
}, le = ({
  columns: t = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: l = [],
  // Array of card data objects
  buttonType: i = "button",
  linkVariant: c,
  stacked: o = !0,
  imagePosition: d = "left",
  variant: w = "flushed",
  itemBackgroundVariant: C = "default",
  className: $ = "",
  ...u
}) => {
  const p = () => !o && w === "framed" ? Math.min(t, 2) : t, n = () => {
    const y = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (o) {
      const m = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, x = p(), f = m[x] ?? m[3];
      return `${y} md:grid-cols-2 ${f}`;
    }
    const s = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, r = Math.min(p(), 3);
    return `${y} ${s[r]}`;
  }, h = (a) => {
    const g = "min-w-0 w-full flex items-stretch";
    return o && l.length === 3 && a === 2 ? `${g} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : g;
  };
  return /* @__PURE__ */ e("div", { className: $, ...u, children: /* @__PURE__ */ e("div", { className: n(), children: l.map((a, g) => /* @__PURE__ */ e("div", { className: h(g), children: /* @__PURE__ */ e(
    ie,
    {
      stacked: o,
      imagePosition: d,
      variant: w,
      media: a.media || "image",
      imageUrl: a.imageUrl,
      videoUrl: a.videoUrl,
      lottieUrl: a.lottieUrl,
      lottieData: a.lottieData,
      iframeUrl: a.iframeUrl,
      mediaAltTitle: a.mediaAltTitle,
      title: a.title,
      description: a.description,
      descriptionRichText: a.descriptionRichText,
      buttonText: a.buttonText,
      buttonHref: a.buttonHref,
      buttonVariant: a.buttonVariant || "light",
      buttonType: a.buttonType || i,
      linkVariant: a.linkVariant || c,
      buttonOnClick: a.buttonOnClick,
      backgroundVariant: C,
      attributes: a.attributes,
      className: "h-full w-full"
    }
  ) }, g)) }) });
}, ae = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  iconPosition: l = "left",
  // 'left' or 'right' (only applies when stacked = false)
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: c,
  // URL for image
  videoUrl: o,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: d,
  // URL to Lottie animation JSON file
  lottieData: w,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: C,
  // URL for iframe
  mediaAltTitle: $,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: u,
  description: p,
  buttonText: n,
  buttonHref: h,
  buttonVariant: a = "light",
  buttonType: g = "button",
  // button | link
  linkVariant: y,
  buttonOnClick: s,
  backgroundVariant: r = "default",
  // default | primary | secondary | tertiary
  className: m = "",
  attributes: x = {}
}) => {
  const f = {
    default: "bg-grey-500 text-grey-950",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-grey-950",
    tertiary: "bg-tertiary text-grey-950",
    light: "bg-light text-grey-950"
  }, N = f[r] || f.default, v = z(), b = `
    flex
    w-full
    ${N}
    ${t ? "flex-col" : "flex-row items-start"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${m}
  `.trim().replace(/\s+/g, " "), k = `
    ${t ? "w-full" : "w-auto"}
    flex
    items-center
    justify-center
    overflow-hidden
    py-cards-icon--padding-y
    px-cards-icon--padding-x
  `.trim().replace(/\s+/g, " "), T = `
    w-[94px]
    h-[100px]
    bg-grey-200
    flex
    items-center
    justify-center
    aspect-square
    rounded-24
    overflow-hidden
  `.trim().replace(/\s+/g, " "), j = `
    ${t ? "w-full" : "flex-1"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex
    flex-col
    flex-grow-1
    gap-textmedia-btn-text--spacing-y
    ${t ? "rounded-b-cards-br" : l === "left" ? "rounded-r-cards-br" : "rounded-l-cards-br"}
  `.trim().replace(/\s+/g, " "), I = /* @__PURE__ */ e(
    H,
    {
      media: i,
      aspect: "default",
      imageUrl: c,
      videoUrl: o,
      lottieUrl: d,
      lottieData: w,
      iframeUrl: C,
      title: $ ?? u,
      className: ""
    }
  ), P = t || l === "left", L = () => /* @__PURE__ */ e("div", { className: k, children: /* @__PURE__ */ e("div", { className: T, children: I }) });
  return /* @__PURE__ */ M(
    "article",
    {
      className: b,
      ...u ? { "aria-labelledby": v } : { "aria-label": "Card" },
      ...x ?? {},
      children: [
        P && L(),
        /* @__PURE__ */ M("div", { className: j, children: [
          /* @__PURE__ */ M("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            u && /* @__PURE__ */ e("h3", { id: v, className: "text-headings-h3 font-semibold text-white", children: u }),
            p && /* @__PURE__ */ e("p", { className: "text-body-default text-white", children: p })
          ] }),
          n && /* @__PURE__ */ e("div", { className: "mt-auto", children: g === "link" ? /* @__PURE__ */ e(
            _,
            {
              text: n,
              href: h,
              variant: y || (a.includes("light") ? "light" : "dark"),
              onClick: s
            }
          ) : /* @__PURE__ */ e(
            U,
            {
              text: n,
              href: h,
              variant: a,
              onClick: s
            }
          ) })
        ] }),
        !P && L()
      ]
    }
  );
}, ne = ({
  columns: t = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: l = [],
  // Array of card data objects
  buttonType: i = "button",
  linkVariant: c,
  stacked: o = !0,
  iconPosition: d = "left",
  itemBackgroundVariant: w = "default",
  className: C = "",
  ...$
}) => {
  const u = () => {
    const a = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (o) {
      const s = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-3",
        5: "md:grid-cols-3",
        6: "md:grid-cols-3"
      }, r = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, m = s[t] ?? s[3], x = r[t] ?? r[3];
      return `${a} ${m} ${x}`;
    }
    const g = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, y = Math.min(t, 3);
    return `${a} ${g[y]}`;
  }, p = (n) => {
    const h = "min-w-0 w-full flex items-stretch";
    return o && l.length === 3 && n === 2 && t === 2 ? `${h} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : h;
  };
  return /* @__PURE__ */ e("div", { className: C, ...$, children: /* @__PURE__ */ e("div", { className: u(), children: l.map((n, h) => /* @__PURE__ */ e("div", { className: p(h), children: /* @__PURE__ */ e(
    ae,
    {
      stacked: o,
      iconPosition: d,
      media: n.media || "image",
      imageUrl: n.imageUrl,
      videoUrl: n.videoUrl,
      lottieUrl: n.lottieUrl,
      lottieData: n.lottieData,
      iframeUrl: n.iframeUrl,
      mediaAltTitle: n.mediaAltTitle,
      title: n.title,
      description: n.description,
      buttonText: n.buttonText,
      buttonHref: n.buttonHref,
      buttonVariant: n.buttonVariant || "light",
      buttonType: n.buttonType || i,
      linkVariant: n.linkVariant || c,
      buttonOnClick: n.buttonOnClick,
      backgroundVariant: w,
      attributes: n.attributes,
      className: "h-full w-full"
    }
  ) }, h)) }) });
}, oe = ({
  items: t = [],
  // [{ label, href, onClick, isActive, isEllipsis }]
  className: l = "",
  ...i
}) => /* @__PURE__ */ e("nav", { className: l, "aria-label": "Pagination", ...i, children: /* @__PURE__ */ e("ul", { className: "flex items-center justify-center gap-archive-spacing-x", children: t.map((c, o) => {
  if (c.isEllipsis)
    return /* @__PURE__ */ e("li", { className: "p-tabbed-loz--padding", children: c.label || "..." }, `ellipsis-${o}`);
  const d = "inline-flex items-center justify-center p-10 rounded-full border transition-colors", w = c.isActive ? "bg-grey-600 text-white border-grey-600" : "bg-grey-100 border-grey-400 hover:border-grey-600 hover:bg-grey-600 hover:text-white focus-visible:border-grey-600 focus-visible:bg-grey-600 focus-visible:text-white", C = /* @__PURE__ */ e("span", { className: `${d} ${w}`, children: c.label });
  return /* @__PURE__ */ e("li", { children: c.href ? /* @__PURE__ */ e(
    "a",
    {
      href: c.href,
      "aria-current": c.isActive ? "page" : void 0,
      children: C
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: c.onClick,
      "aria-current": c.isActive ? "page" : void 0,
      children: C
    }
  ) }, `${c.label}-${o}`);
}) }) }), ye = ({
  tabs: t = [],
  // [{ text, key, cardType, columns, itemsPerPage, cards }]
  tabType: l = "tab-top",
  // 'tab-top' | 'tab-aside' 
  defaultActiveIndex: i = 0,
  className: c = "",
  ...o
}) => {
  var y;
  const [d, w] = A(i), [C, $] = A(() => t.map(() => 1)), [u, p] = A(!1);
  if (R(() => {
    $(t.map(() => 1)), w(i);
  }, [t, i]), !t || t.length === 0) return null;
  const n = (s) => {
    w(s);
  }, h = (s, r) => {
    $((m) => {
      const x = [...m];
      return x[s] = r, x;
    });
  }, a = (s, r, m) => {
    if (r <= 1) return [];
    const x = [], f = (b) => {
      x.push({
        label: String(b),
        isActive: b === s,
        onClick: () => m(b)
      });
    };
    if (f(1), r <= 7) {
      for (let b = 2; b <= r; b += 1) f(b);
      return x;
    }
    const N = Math.max(2, s - 1), v = Math.min(r - 1, s + 1);
    N > 2 && x.push({ isEllipsis: !0, label: "..." });
    for (let b = N; b <= v; b += 1) f(b);
    return v < r - 1 && x.push({ isEllipsis: !0, label: "..." }), f(r), x;
  }, g = (s, r) => {
    const m = s.cards || [], x = s.itemsPerPage || 6, f = Math.ceil(m.length / x) || 1, N = C[r] || 1, v = (N - 1) * x, b = m.slice(v, v + x), k = a(N, f, (T) => h(r, T));
    return /* @__PURE__ */ M("div", { className: "space-y-24", children: [
      (() => {
        const T = s.cardType === "icon" ? ne : le;
        return /* @__PURE__ */ e(
          T,
          {
            columns: s.columns || 3,
            data: b,
            linkVariant: "light",
            buttonType: "link"
          }
        );
      })(),
      k.length > 0 && /* @__PURE__ */ e(oe, { items: k })
    ] });
  };
  return l === "tab-aside" ? /* @__PURE__ */ M("div", { className: `container ${c}`, ...o, children: [
    /* @__PURE__ */ M("div", { className: "hidden md:flex md:flex-row gap-20", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col min-w-[267px]", children: t.map((s, r) => /* @__PURE__ */ e(
        ee,
        {
          tab: s,
          isActive: d === r,
          onClick: () => n(r),
          index: r
        },
        s.key || r
      )) }),
      /* @__PURE__ */ e("div", { className: "flex-1 relative min-h-[200px]", children: t.map((s, r) => /* @__PURE__ */ e(
        "div",
        {
          className: `transition-opacity duration-300 ${d === r ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
          children: g(s, r)
        },
        s.key || r
      )) })
    ] }),
    /* @__PURE__ */ M("div", { className: "md:hidden relative", children: [
      /* @__PURE__ */ M(
        "button",
        {
          onClick: () => p(!u),
          className: "w-full h-11 flex items-center justify-between px-3 rounded-lg border border-grey-900 bg-white",
          children: [
            /* @__PURE__ */ e("span", { className: "text-body-default", children: ((y = t[d]) == null ? void 0 : y.text) || "Select tab" }),
            /* @__PURE__ */ e(
              "svg",
              {
                className: `w-5 h-5 transition-transform ${u ? "rotate-180" : ""}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ]
        }
      ),
      u && /* @__PURE__ */ e("div", { className: "absolute top-[44px] left-0 right-0 mt-1 rounded-lg border border-grey-900 bg-white z-10 shadow-lg", children: t.map((s, r) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => {
            n(r), p(!1);
          },
          className: `w-full text-left px-12 py-10 border-b border-grey-200 last:border-b-0 transition-colors ${d === r ? "bg-grey-100" : "hover:bg-grey-50 focus-visible:bg-grey-50"}`,
          children: /* @__PURE__ */ e("span", { className: "text-body-default", children: s.text })
        },
        s.key || r
      )) }),
      /* @__PURE__ */ e("div", { className: "mt-20 relative min-h-[200px]", children: t.map((s, r) => /* @__PURE__ */ e(
        "div",
        {
          className: `transition-opacity duration-300 ${d === r ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
          children: g(s, r)
        },
        s.key || r
      )) })
    ] })
  ] }) : /* @__PURE__ */ M("div", { className: `container ${c}`, ...o, children: [
    /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-10", children: t.map((s, r) => /* @__PURE__ */ e(
      Z,
      {
        tab: s,
        isActive: d === r,
        onClick: () => n(r),
        index: r
      },
      s.key || r
    )) }),
    /* @__PURE__ */ e("div", { className: "mt-20 relative min-h-100", children: t.map((s, r) => /* @__PURE__ */ e(
      "div",
      {
        className: `transition-opacity duration-300 ${d === r ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
        children: g(s, r)
      },
      s.key || r
    )) })
  ] });
};
let O, Y, V, F;
const ce = async () => {
  if (!F) {
    const t = await import("react-pdf");
    F = t.pdfjs, Y = t.Document, V = t.Page, F.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${F.version}/build/pdf.worker.min.mjs`;
  }
}, de = async () => {
  O || (O = (await import("react-pageflip")).default);
}, ue = K(({ children: t }, l) => /* @__PURE__ */ e("div", { ref: l, className: "w-full h-full overflow-hidden", children: t })), ge = ({ pdfUrl: t, title: l, width: i = 280, height: c = 280, className: o = "" }) => {
  const [d, w] = A(0), [C, $] = A(null), [u, p] = A(!0), [n, h] = A(c / i), [a, g] = A(0), y = J(null);
  R(() => {
    Promise.all([ce(), de()]).then(() => p(!1)).catch(() => {
      $("Failed to load flipbook");
    });
  }, []), R(() => {
    const f = y.current;
    if (!f) return;
    const N = new ResizeObserver(([v]) => {
      const b = Math.floor(v.contentRect.width);
      b > 0 && g(b);
    });
    return N.observe(f), () => N.disconnect();
  }, [u]);
  const s = a > 0 ? Math.floor(a / 2) : Math.floor(i / 2), r = Math.round(s * n), m = E(async (f) => {
    try {
      const v = (await f.getPage(1)).getViewport({ scale: 1 });
      v != null && v.width && (v != null && v.height) && h(v.height / v.width);
    } catch {
    }
    w(f.numPages || 0);
  }, []), x = E((f) => {
    $((f == null ? void 0 : f.message) || "Failed to load PDF");
  }, []);
  return C ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : u ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: y, className: `w-full ${o}`.trim(), children: /* @__PURE__ */ M(
    Y,
    {
      file: t,
      onLoadSuccess: m,
      onLoadError: x,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        d === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${o}`.trim(),
            style: { minHeight: `${r}px` },
            children: /* @__PURE__ */ e(V, { pageNumber: 1, width: i, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        d > 1 && /* @__PURE__ */ e(
          O,
          {
            width: s,
            height: r,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": l || "Flipbook",
            children: Array.from({ length: d }, (f, N) => /* @__PURE__ */ e(ue, { children: /* @__PURE__ */ e(V, { pageNumber: N + 1, width: s, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, N))
          },
          `${s}-${r}`
        )
      ]
    }
  ) });
}, me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ge
}, Symbol.toStringTag, { value: "Module" }));
export {
  ye as default
};
