import { jsx as e, jsxs as M } from "react/jsx-runtime";
import * as F from "react";
import { lazy as G, Suspense as J, useId as _, useState as A, useEffect as B, useRef as K, useCallback as U, forwardRef as Q } from "react";
import Z from "lottie-react";
function ee({
  tab: t = {},
  // { text: string, image: string, imageAlt: string }
  isActive: a = !1,
  onClick: i = () => {
  },
  index: c = 0,
  className: n = "",
  largeImage: d = !1
  // if true, set image size to 48x48 even to mobile
}) {
  return t ? /* @__PURE__ */ e("div", { className: n, children: /* @__PURE__ */ M(
    "button",
    {
      onClick: i,
      className: `inline-flex justify-center items-center gap-4 xl:gap-10 rounded-full border transition-all duration-300 p-tabbed-loz--padding cursor-pointer hover:bg-grey-600 hover:text-white focus-visible:bg-grey-600 focus-visible:text-white min-w-[110px] ${a ? "border-grey-600 bg-grey-600 text-white" : "border-grey-600 bg-grey-100 text-grey-950"}`,
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
function te({
  tab: t = {},
  isActive: a = !1,
  onClick: i = () => {
  },
  index: c = 0,
  className: n = ""
}) {
  return t ? /* @__PURE__ */ e(
    "button",
    {
      onClick: i,
      className: `h-44px flex flex-row justify-start items-center gap-10 self-stretch border-b border-x transition-all duration-300  p-tabbed-row--padding cursor-pointer hover:bg-grey-300 focus-visible:bg-grey-300 ${a ? "border-grey-400 bg-grey-300" : "border-grey-400 bg-white"}
      ${c === 0 ? "border-t" : ""}
      ${n}`,
      children: t.text && /* @__PURE__ */ e("span", { className: "text-body-default", children: t.text })
    }
  ) : null;
}
const H = ({
  text: t = "Button",
  href: a = void 0,
  variant: i = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: c = "btn-md",
  // btn-sm , btn-md
  className: n = "",
  disabled: d = !1,
  onClick: v = void 0,
  attributes: C = {},
  ...$
}) => {
  const y = (p) => {
    switch (p) {
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
  }, N = (p) => {
    switch (p) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, o = `btn ${y(i)} ${N(c)} ${n}`.trim();
  return a ? /* @__PURE__ */ e(
    "a",
    {
      href: a,
      className: o,
      onClick: v,
      ...$,
      ...C ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: $.type || "button",
      className: o,
      disabled: d,
      onClick: v,
      ...$,
      ...C ?? {},
      children: t
    }
  );
};
function re({
  title: t,
  titleId: a,
  ...i
}, c) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: c,
    "aria-labelledby": a
  }, i), t ? /* @__PURE__ */ F.createElement("title", {
    id: a
  }, t) : null, /* @__PURE__ */ F.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const se = /* @__PURE__ */ F.forwardRef(re), Y = ({
  text: t = "Link",
  href: a = "#",
  variant: i = "dark",
  // dark, light
  icon: c,
  className: n = "",
  ...d
}) => {
  const v = "text-link", C = (y) => {
    switch (y) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, $ = c || se, u = `${v} ${C(i)} ${n}`.trim();
  return /* @__PURE__ */ M(
    "a",
    {
      href: a,
      className: u,
      ...d,
      children: [
        /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e($, { className: "text-link-icon" })
      ]
    }
  );
}, ie = G(() => Promise.resolve().then(() => fe)), q = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: a = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: i = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: c,
  videoUrl: n,
  lottieUrl: d,
  lottieData: v,
  iframeUrl: C,
  flipbookUrl: $,
  title: u,
  className: y = ""
}) => {
  var x;
  const N = typeof window < "u" && window.location.origin.indexOf("author") > -1, o = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, l = `relative w-full h-full ${a === "square" ? "aspect-square" : a === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), m = a === "default" ? `w-full h-full ${y}`.trim() : `absolute inset-0 w-full h-full ${y}`.trim(), s = "w-full h-full", r = a === "default" ? `${m}`.trim() : m, f = i === "contain" ? "object-contain" : "object-cover", h = i === "contain" ? "xMidYMid meet" : "xMidYMid slice", g = `relative w-full ${y}`.trim(), w = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (c)
        return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e(
          "img",
          {
            src: c,
            alt: u || "Media image",
            className: `${f} ${m}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (n) {
        const b = n.includes("youtube.com/watch") || n.includes("youtu.be/");
        let k = n;
        b && (k = `https://www.youtube.com/embed/${n.includes("youtu.be/") ? n.split("youtu.be/")[1].split("?")[0] : (x = n.split("v=")[1]) == null ? void 0 : x.split("&")[0]}`);
        const T = (() => {
          if (!b) return k;
          try {
            const j = new URL(k);
            return j.searchParams.set("autoplay", "0"), j.searchParams.set("mute", "0"), j.searchParams.set("playsinline", "1"), j.searchParams.set("controls", "1"), j.searchParams.set("rel", "0"), j.toString();
          } catch {
            return k.includes("?") ? k.includes("autoplay=") ? k : `${k}&autoplay=0` : `${k}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: l, children: b ? /* @__PURE__ */ e(
          "iframe",
          {
            src: T,
            title: u || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${m} ${f}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${m} ${f}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: u || "Video player",
            children: /* @__PURE__ */ e("source", { src: n })
          }
        ) });
      }
      break;
    case "lottie":
      if (v)
        return N ? /* @__PURE__ */ e("div", { className: l, role: "img", "aria-label": u || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${m}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: l,
            role: "img",
            "aria-label": u || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${m} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              Z,
              {
                animationData: v,
                loop: !o,
                autoplay: !o,
                className: s,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: h }
              }
            ) })
          }
        );
      if (d)
        return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (C)
        return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: C,
            title: u || "Iframe content",
            frameBorder: "0",
            className: `${r} ${f}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if ($)
        return N ? /* @__PURE__ */ e("div", { className: g, role: "img", "aria-label": u || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${w}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e("div", { className: w, children: /* @__PURE__ */ e(J, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(ie, { pdfUrl: $, title: u, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${a === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, le = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  imagePosition: a = "left",
  // 'left' or 'right' (only applies when stacked = false)
  variant: i = "flushed",
  // 'flushed' | 'framed' | 'circle' - flushed = full width, framed = square aspect ratio, circle = 100px x 100px circular
  media: c = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: n,
  // URL for image
  videoUrl: d,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: v,
  // URL to Lottie animation JSON file
  lottieData: C,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: $,
  // URL for iframe
  mediaAltTitle: u,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: y,
  description: N,
  descriptionRichText: o,
  // optional HTML from CMS; when set, rendered with .wysiwyg instead of plain `description`
  buttonText: p,
  buttonHref: l,
  buttonVariant: m = "light",
  buttonType: s = "button",
  // button | link
  linkVariant: r,
  buttonOnClick: f,
  backgroundVariant: h = "default",
  // default | primary | secondary | tertiary | quaternary
  className: g = "",
  attributes: w = {}
}) => {
  const x = typeof o == "string" && o.trim().length > 0, b = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    tertiary: "bg-tertiary text-white",
    quaternary: "bg-quaternary text-grey-900",
    default: "bg-white text-grey-900"
  }, k = b[h] || b.default, T = _(), j = `
    flex
    w-full
    ${k}
    flex-col
    ${t ? "" : "md:flex-row"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${g}
  `.trim().replace(/\s+/g, " "), I = `
    w-full
    ${t ? "" : i === "framed" ? "md:w-1/2 lg:min-w-[calc(200px+var(--spacing-cards-image--padding-y))]" : i === "circle" ? "md:w-auto" : "md:w-1/2"}
    ${i === "circle" ? "" : "p-cards-image--padding-y"}
    flex
    items-center
    justify-center
    overflow-hidden
    ${i === "framed" && t ? "rounded-t-[var(--spacing-cards-br)]" : ""}
    ${i === "framed" && !t && a === "left" ? "md:rounded-l-[var(--spacing-cards-br)]" : ""}
    ${i === "framed" && !t && a === "right" ? "md:rounded-r-[var(--spacing-cards-br)]" : ""}
  `.trim().replace(/\s+/g, " "), S = `
    ${i === "circle" ? "w-[100px] h-[100px]" : i === "framed" ? "w-full aspect-square" : "w-full"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${i === "circle" ? "rounded-full" : i === "framed" ? "rounded-[var(--spacing-cards-image--br)]" : t ? "rounded-t-[var(--spacing-cards-image--br)]" : a === "left" ? "rounded-l-[var(--spacing-cards-image--br)]" : "rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), R = `
    w-full
    ${t ? "aspect-[441/269]" : "md:w-1/2"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${t ? "rounded-t-[var(--spacing-cards-image--br)]" : a === "left" ? "md:rounded-l-[var(--spacing-cards-image--br)]" : "md:rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), L = `
    w-full
    ${t ? "" : i === "framed" ? "md:w-3/4" : i === "circle" ? "md:flex-1" : "md:w-1/2"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex-grow-1
    flex
    flex-col
    gap-textmedia-btn-text--spacing-y
    ${t ? "rounded-b-[var(--spacing-cards-image--br)]" : a === "left" ? "md:rounded-r-[var(--spacing-cards-image--br)]" : "md:rounded-l-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), D = /* @__PURE__ */ e(
    q,
    {
      media: c,
      aspect: "default",
      imageUrl: n,
      videoUrl: d,
      lottieUrl: v,
      lottieData: C,
      iframeUrl: $,
      title: u ?? y,
      className: ""
    }
  ), E = t || a === "left", z = () => i === "framed" || i === "circle" ? /* @__PURE__ */ e("div", { className: I, children: /* @__PURE__ */ e("div", { className: S, children: D }) }) : /* @__PURE__ */ e("div", { className: R, children: D });
  return /* @__PURE__ */ M(
    "article",
    {
      className: j,
      ...y ? { "aria-labelledby": T } : { "aria-label": "Card" },
      ...w ?? {},
      children: [
        E && z(),
        /* @__PURE__ */ M("div", { className: L, children: [
          /* @__PURE__ */ M("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            y && /* @__PURE__ */ e("h3", { id: T, className: "text-headings-h3 font-semibold", children: y }),
            x ? /* @__PURE__ */ e(
              "div",
              {
                className: "wysiwyg text-body-default",
                dangerouslySetInnerHTML: { __html: o }
              }
            ) : N && /* @__PURE__ */ e("p", { className: "text-body-default", children: N })
          ] }),
          p && /* @__PURE__ */ e("div", { className: "mt-auto", children: s === "link" ? /* @__PURE__ */ e(
            Y,
            {
              text: p,
              href: l,
              variant: r || (m.includes("light") ? "light" : "dark"),
              onClick: f
            }
          ) : /* @__PURE__ */ e(
            H,
            {
              text: p,
              href: l,
              variant: m,
              onClick: f
            }
          ) })
        ] }),
        !E && z()
      ]
    }
  );
}, ae = ({
  columns: t = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: a = [],
  // Array of card data objects
  buttonType: i = "button",
  linkVariant: c,
  stacked: n = !0,
  imagePosition: d = "left",
  variant: v = "flushed",
  itemBackgroundVariant: C = "default",
  className: $ = "",
  shadowCards: u = !1,
  ...y
}) => {
  const N = () => !n && v === "framed" ? Math.min(t, 2) : t, o = () => {
    const s = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (n) {
      const h = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, g = N(), w = h[g] ?? h[3];
      return `${s} md:grid-cols-2 ${w}`;
    }
    const r = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, f = Math.min(N(), 3);
    return `${s} ${r[f]}`;
  }, p = (l) => {
    const m = `min-w-0 w-full flex items-stretch${u ? " box-shadow" : ""}`;
    return n && a.length === 3 && l === 2 ? `${m} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : m;
  };
  return /* @__PURE__ */ e("div", { className: $, ...y, children: /* @__PURE__ */ e("div", { className: o(), children: a.map((l, m) => /* @__PURE__ */ e("div", { className: p(m), children: /* @__PURE__ */ e(
    le,
    {
      stacked: n,
      imagePosition: d,
      variant: v,
      media: l.media || "image",
      imageUrl: l.imageUrl,
      videoUrl: l.videoUrl,
      lottieUrl: l.lottieUrl,
      lottieData: l.lottieData,
      iframeUrl: l.iframeUrl,
      mediaAltTitle: l.mediaAltTitle,
      title: l.title,
      description: l.description,
      descriptionRichText: l.descriptionRichText,
      buttonText: l.buttonText,
      buttonHref: l.buttonHref,
      buttonVariant: l.buttonVariant || "light",
      buttonType: l.buttonType || i,
      linkVariant: l.linkVariant || c,
      buttonOnClick: l.buttonOnClick,
      backgroundVariant: C,
      attributes: l.attributes,
      className: "h-full w-full"
    }
  ) }, m)) }) });
}, ne = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  iconPosition: a = "left",
  // 'left' or 'right' (only applies when stacked = false)
  media: i = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: c,
  // URL for image
  videoUrl: n,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: d,
  // URL to Lottie animation JSON file
  lottieData: v,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: C,
  // URL for iframe
  mediaAltTitle: $,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: u,
  description: y,
  buttonText: N,
  buttonHref: o,
  buttonVariant: p = "light",
  buttonType: l = "button",
  // button | link
  linkVariant: m,
  buttonOnClick: s,
  backgroundVariant: r = "default",
  // default | primary | secondary | tertiary
  className: f = "",
  attributes: h = {},
  textAlign: g = "left"
  // 'left' | 'center' (only applies when stacked = true)
}) => {
  console.log("CardWithIconMolecule props:", {
    stacked: t,
    iconPosition: a,
    textAlign: g
  });
  const w = {
    default: "bg-grey-500 text-grey-950",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-grey-950",
    tertiary: "bg-tertiary text-grey-950",
    light: "bg-light text-grey-950"
  }, x = {
    default: "text-white",
    primary: "text-white",
    secondary: "text-grey-950",
    tertiary: "text-grey-950",
    light: "text-grey-950"
  }, b = w[r] || w.default, k = _(), T = `
    flex
    w-full
    ${b}
    ${t ? "flex-col" : "flex-row items-start"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${f}
  `.trim().replace(/\s+/g, " "), j = `
    ${t ? "w-full" : "w-auto"}
    flex
    items-center
    justify-center
    overflow-hidden
    py-cards-icon--padding-y
    px-cards-icon--padding-x
  `.trim().replace(/\s+/g, " "), I = `
    w-[94px]
    h-[100px]
    flex
    items-center
    justify-center
    aspect-square
    overflow-hidden
  `.trim().replace(/\s+/g, " "), S = `
    ${t ? "w-full" : "flex-1"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex
    flex-col
    flex-grow-1
    gap-textmedia-btn-text--spacing-y
    ${g === "center" ? "items-center text-center" : "items-start text-left"}
    ${t ? "rounded-b-cards-br" : a === "left" ? "rounded-r-cards-br" : "rounded-l-cards-br"}
  `.trim().replace(/\s+/g, " "), R = /* @__PURE__ */ e(
    q,
    {
      media: i,
      aspect: "default",
      imageUrl: c,
      videoUrl: n,
      lottieUrl: d,
      lottieData: v,
      iframeUrl: C,
      objectFit: "contain",
      title: $ ?? u,
      className: ""
    }
  ), L = t || a === "left", O = () => /* @__PURE__ */ e("div", { className: j, children: /* @__PURE__ */ e("div", { className: I, children: R }) });
  return /* @__PURE__ */ M(
    "article",
    {
      className: T,
      ...u ? { "aria-labelledby": k } : { "aria-label": "Card" },
      ...h ?? {},
      children: [
        L && O(),
        /* @__PURE__ */ M("div", { className: S, children: [
          /* @__PURE__ */ M("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            u && /* @__PURE__ */ e("h3", { id: k, className: `text-headings-h3 font-semibold ${x[r]}`, children: u }),
            y && /* @__PURE__ */ e("p", { className: `text-body-default ${x[r]}`, children: y })
          ] }),
          N && /* @__PURE__ */ e("div", { className: "mt-auto", children: l === "link" ? /* @__PURE__ */ e(
            Y,
            {
              text: N,
              href: o,
              variant: m || (p.includes("light") ? "light" : "dark"),
              onClick: s
            }
          ) : /* @__PURE__ */ e(
            H,
            {
              text: N,
              href: o,
              variant: p,
              onClick: s
            }
          ) })
        ] }),
        !L && O()
      ]
    }
  );
}, oe = ({
  columns: t = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: a = [],
  // Array of card data objects
  buttonType: i = "button",
  linkVariant: c,
  stacked: n = !0,
  iconPosition: d = "left",
  itemBackgroundVariant: v = "default",
  textAlign: C = "left",
  // 'left' | 'center' (only applies when stacked = true)
  className: $ = "",
  ...u
}) => {
  const y = () => {
    const l = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (n) {
      const r = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-3",
        5: "md:grid-cols-3",
        6: "md:grid-cols-3"
      }, f = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, h = r[t] ?? r[3], g = f[t] ?? f[3];
      return `${l} ${h} ${g}`;
    }
    const m = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, s = Math.min(t, 3);
    return `${l} ${m[s]}`;
  }, N = (o) => {
    const p = "min-w-0 w-full flex items-stretch";
    return n && a.length === 3 && o === 2 && t === 2 ? `${p} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : p;
  };
  return /* @__PURE__ */ e("div", { className: $, ...u, children: /* @__PURE__ */ e("div", { className: y(), children: a.map((o, p) => /* @__PURE__ */ e("div", { className: N(p), children: /* @__PURE__ */ e(
    ne,
    {
      stacked: n,
      iconPosition: d,
      media: o.media || "image",
      imageUrl: o.imageUrl,
      videoUrl: o.videoUrl,
      lottieUrl: o.lottieUrl,
      lottieData: o.lottieData,
      iframeUrl: o.iframeUrl,
      mediaAltTitle: o.mediaAltTitle,
      title: o.title,
      description: o.description,
      buttonText: o.buttonText,
      buttonHref: o.buttonHref,
      buttonVariant: o.buttonVariant || "light",
      buttonType: o.buttonType || i,
      linkVariant: o.linkVariant || c,
      buttonOnClick: o.buttonOnClick,
      backgroundVariant: v,
      attributes: o.attributes,
      textAlign: C,
      className: "h-full w-full"
    }
  ) }, p)) }) });
}, ce = ({
  items: t = [],
  // [{ label, href, onClick, isActive, isEllipsis }]
  className: a = "",
  ...i
}) => /* @__PURE__ */ e("nav", { className: a, "aria-label": "Pagination", ...i, children: /* @__PURE__ */ e("ul", { className: "flex items-center justify-center gap-archive-spacing-x", children: t.map((c, n) => {
  if (c.isEllipsis)
    return /* @__PURE__ */ e("li", { className: "p-tabbed-loz--padding", children: c.label || "..." }, `ellipsis-${n}`);
  const d = "inline-flex items-center justify-center p-10 rounded-full border transition-colors", v = c.isActive ? "bg-grey-600 text-white border-grey-600" : "bg-grey-100 border-grey-400 hover:border-grey-600 hover:bg-grey-600 hover:text-white focus-visible:border-grey-600 focus-visible:bg-grey-600 focus-visible:text-white", C = /* @__PURE__ */ e("span", { className: `${d} ${v}`, children: c.label });
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
  ) }, `${c.label}-${n}`);
}) }) }), ye = ({
  tabs: t = [],
  // [{ text, key, cardType, columns, itemsPerPage, cards }]
  tabType: a = "tab-top",
  // 'tab-top' | 'tab-aside' 
  defaultActiveIndex: i = 0,
  className: c = "",
  ...n
}) => {
  var m;
  const [d, v] = A(i), [C, $] = A(() => t.map(() => 1)), [u, y] = A(!1);
  if (B(() => {
    $(t.map(() => 1)), v(i);
  }, [t, i]), !t || t.length === 0) return null;
  const N = (s) => {
    v(s);
  }, o = (s, r) => {
    $((f) => {
      const h = [...f];
      return h[s] = r, h;
    });
  }, p = (s, r, f) => {
    if (r <= 1) return [];
    const h = [], g = (b) => {
      h.push({
        label: String(b),
        isActive: b === s,
        onClick: () => f(b)
      });
    };
    if (g(1), r <= 7) {
      for (let b = 2; b <= r; b += 1) g(b);
      return h;
    }
    const w = Math.max(2, s - 1), x = Math.min(r - 1, s + 1);
    w > 2 && h.push({ isEllipsis: !0, label: "..." });
    for (let b = w; b <= x; b += 1) g(b);
    return x < r - 1 && h.push({ isEllipsis: !0, label: "..." }), g(r), h;
  }, l = (s, r) => {
    const f = s.cards || [], h = s.itemsPerPage || 6, g = Math.ceil(f.length / h) || 1, w = C[r] || 1, x = (w - 1) * h, b = f.slice(x, x + h), k = p(w, g, (T) => o(r, T));
    return /* @__PURE__ */ M("div", { className: "space-y-24", children: [
      (() => {
        const T = s.cardType === "icon" ? oe : ae;
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
      k.length > 0 && /* @__PURE__ */ e(ce, { items: k })
    ] });
  };
  return a === "tab-aside" ? /* @__PURE__ */ M("div", { className: `container ${c}`, ...n, children: [
    /* @__PURE__ */ M("div", { className: "hidden md:flex md:flex-row gap-20", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col min-w-[267px]", children: t.map((s, r) => /* @__PURE__ */ e(
        te,
        {
          tab: s,
          isActive: d === r,
          onClick: () => N(r),
          index: r
        },
        s.key || r
      )) }),
      /* @__PURE__ */ e("div", { className: "flex-1 relative min-h-[200px]", children: t.map((s, r) => /* @__PURE__ */ e(
        "div",
        {
          className: `transition-opacity duration-300 ${d === r ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
          children: l(s, r)
        },
        s.key || r
      )) })
    ] }),
    /* @__PURE__ */ M("div", { className: "md:hidden relative", children: [
      /* @__PURE__ */ M(
        "button",
        {
          onClick: () => y(!u),
          className: "w-full h-11 flex items-center justify-between px-3 rounded-lg border border-grey-900 bg-white",
          children: [
            /* @__PURE__ */ e("span", { className: "text-body-default", children: ((m = t[d]) == null ? void 0 : m.text) || "Select tab" }),
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
            N(r), y(!1);
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
          children: l(s, r)
        },
        s.key || r
      )) })
    ] })
  ] }) : /* @__PURE__ */ M("div", { className: `container ${c}`, ...n, children: [
    /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-10", children: t.map((s, r) => /* @__PURE__ */ e(
      ee,
      {
        tab: s,
        isActive: d === r,
        onClick: () => N(r),
        index: r
      },
      s.key || r
    )) }),
    /* @__PURE__ */ e("div", { className: "mt-20 relative min-h-100", children: t.map((s, r) => /* @__PURE__ */ e(
      "div",
      {
        className: `transition-opacity duration-300 ${d === r ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`,
        children: l(s, r)
      },
      s.key || r
    )) })
  ] });
};
let V, X, W, P;
const de = async () => {
  if (!P) {
    const t = await import("react-pdf");
    P = t.pdfjs, X = t.Document, W = t.Page, P.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${P.version}/build/pdf.worker.min.mjs`;
  }
}, ue = async () => {
  V || (V = (await import("react-pageflip")).default);
}, ge = Q(({ children: t }, a) => /* @__PURE__ */ e("div", { ref: a, className: "w-full h-full overflow-hidden", children: t })), me = ({ pdfUrl: t, title: a, width: i = 280, height: c = 280, className: n = "" }) => {
  const [d, v] = A(0), [C, $] = A(null), [u, y] = A(!0), [N, o] = A(c / i), [p, l] = A(0), m = K(null);
  B(() => {
    Promise.all([de(), ue()]).then(() => y(!1)).catch(() => {
      $("Failed to load flipbook");
    });
  }, []), B(() => {
    const g = m.current;
    if (!g) return;
    const w = new ResizeObserver(([x]) => {
      const b = Math.floor(x.contentRect.width);
      b > 0 && l(b);
    });
    return w.observe(g), () => w.disconnect();
  }, [u]);
  const s = p > 0 ? Math.floor(p / 2) : Math.floor(i / 2), r = Math.round(s * N), f = U(async (g) => {
    try {
      const x = (await g.getPage(1)).getViewport({ scale: 1 });
      x != null && x.width && (x != null && x.height) && o(x.height / x.width);
    } catch {
    }
    v(g.numPages || 0);
  }, []), h = U((g) => {
    $((g == null ? void 0 : g.message) || "Failed to load PDF");
  }, []);
  return C ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : u ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: m, className: `w-full ${n}`.trim(), children: /* @__PURE__ */ M(
    X,
    {
      file: t,
      onLoadSuccess: f,
      onLoadError: h,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        d === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${n}`.trim(),
            style: { minHeight: `${r}px` },
            children: /* @__PURE__ */ e(W, { pageNumber: 1, width: i, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        d > 1 && /* @__PURE__ */ e(
          V,
          {
            width: s,
            height: r,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": a || "Flipbook",
            children: Array.from({ length: d }, (g, w) => /* @__PURE__ */ e(ge, { children: /* @__PURE__ */ e(W, { pageNumber: w + 1, width: s, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, w))
          },
          `${s}-${r}`
        )
      ]
    }
  ) });
}, fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: me
}, Symbol.toStringTag, { value: "Module" }));
export {
  ye as default
};
