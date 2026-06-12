import { jsx as e, jsxs as M } from "react/jsx-runtime";
import * as R from "react";
import { lazy as H, Suspense as q, useId as Y, useState as L, useRef as G, useEffect as O, useCallback as V, forwardRef as U } from "react";
import X from "lottie-react";
const J = ({
  text: t = "Button",
  href: s = void 0,
  variant: a = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: m = "btn-md",
  // btn-sm , btn-md
  className: i = "",
  disabled: h = !1,
  onClick: f = void 0,
  attributes: p = {},
  ...d
}) => {
  const c = (y) => {
    switch (y) {
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
  }, w = (y) => {
    switch (y) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, b = `btn ${c(a)} ${w(m)} ${i}`.trim();
  return s ? /* @__PURE__ */ e(
    "a",
    {
      href: s,
      className: b,
      onClick: f,
      ...d,
      ...p ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: d.type || "button",
      className: b,
      disabled: h,
      onClick: f,
      ...d,
      ...p ?? {},
      children: t
    }
  );
};
function K({
  title: t,
  titleId: s,
  ...a
}, m) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: m,
    "aria-labelledby": s
  }, a), t ? /* @__PURE__ */ R.createElement("title", {
    id: s
  }, t) : null, /* @__PURE__ */ R.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Q = /* @__PURE__ */ R.forwardRef(K), Z = ({
  text: t = "Link",
  href: s = "#",
  variant: a = "dark",
  // dark, light
  icon: m,
  className: i = "",
  ...h
}) => {
  const f = "text-link", p = (c) => {
    switch (c) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, d = m || Q, n = `${f} ${p(a)} ${i}`.trim();
  return /* @__PURE__ */ M(
    "a",
    {
      href: s,
      className: n,
      ...h,
      children: [
        /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(d, { className: "text-link-icon" })
      ]
    }
  );
}, ee = H(() => Promise.resolve().then(() => ne)), te = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: s = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: a = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: i,
  lottieUrl: h,
  lottieData: f,
  iframeUrl: p,
  flipbookUrl: d,
  title: n,
  className: c = ""
}) => {
  var u;
  const w = typeof window < "u" && window.location.origin.indexOf("author") > -1, b = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, r = `relative w-full h-full ${s === "square" ? "aspect-square" : s === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), l = s === "default" ? `w-full h-full ${c}`.trim() : `absolute inset-0 w-full h-full ${c}`.trim(), x = "w-full h-full", N = s === "default" ? `${l}`.trim() : l, v = a === "contain" ? "object-contain" : "object-cover", j = a === "contain" ? "xMidYMid meet" : "xMidYMid slice", o = `relative w-full ${c}`.trim(), g = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (m)
        return /* @__PURE__ */ e("div", { className: r, children: /* @__PURE__ */ e(
          "img",
          {
            src: m,
            alt: n || "Media image",
            className: `${v} ${l}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (i) {
        const k = i.includes("youtube.com/watch") || i.includes("youtu.be/");
        let $ = i;
        k && ($ = `https://www.youtube.com/embed/${i.includes("youtu.be/") ? i.split("youtu.be/")[1].split("?")[0] : (u = i.split("v=")[1]) == null ? void 0 : u.split("&")[0]}`);
        const P = (() => {
          if (!k) return $;
          try {
            const C = new URL($);
            return C.searchParams.set("autoplay", "0"), C.searchParams.set("mute", "0"), C.searchParams.set("playsinline", "1"), C.searchParams.set("controls", "1"), C.searchParams.set("rel", "0"), C.toString();
          } catch {
            return $.includes("?") ? $.includes("autoplay=") ? $ : `${$}&autoplay=0` : `${$}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: r, children: k ? /* @__PURE__ */ e(
          "iframe",
          {
            src: P,
            title: n || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${l} ${v}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${l} ${v}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: n || "Video player",
            children: /* @__PURE__ */ e("source", { src: i })
          }
        ) });
      }
      break;
    case "lottie":
      if (f)
        return w ? /* @__PURE__ */ e("div", { className: r, role: "img", "aria-label": n || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${l}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: r,
            role: "img",
            "aria-label": n || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${l} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              X,
              {
                animationData: f,
                loop: !b,
                autoplay: !b,
                className: x,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: j }
              }
            ) })
          }
        );
      if (h)
        return /* @__PURE__ */ e("div", { className: r, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (p)
        return /* @__PURE__ */ e("div", { className: r, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: p,
            title: n || "Iframe content",
            frameBorder: "0",
            className: `${N} ${v}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (d)
        return w ? /* @__PURE__ */ e("div", { className: o, role: "img", "aria-label": n || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${g}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(q, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(ee, { pdfUrl: d, title: n, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: r, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${s === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, re = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  imagePosition: s = "left",
  // 'left' or 'right' (only applies when stacked = false)
  variant: a = "flushed",
  // 'flushed' | 'framed' | 'circle' - flushed = full width, framed = square aspect ratio, circle = 100px x 100px circular
  media: m = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: i,
  // URL for image
  videoUrl: h,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: f,
  // URL to Lottie animation JSON file
  lottieData: p,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: d,
  // URL for iframe
  mediaAltTitle: n,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: c,
  description: w,
  descriptionRichText: b,
  // optional HTML from CMS; when set, rendered with .wysiwyg instead of plain `description`
  buttonText: y,
  buttonHref: r,
  buttonVariant: l = "light",
  buttonType: x = "button",
  // button | link
  linkVariant: N,
  buttonOnClick: v,
  backgroundVariant: j = "default",
  // default | primary | secondary | tertiary | quaternary
  className: o = "",
  attributes: g = {}
}) => {
  const u = typeof b == "string" && b.trim().length > 0, k = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    tertiary: "bg-tertiary text-white",
    quaternary: "bg-quaternary text-grey-900",
    default: "bg-white text-grey-900"
  }, $ = k[j] || k.default, P = Y(), C = `
    flex
    w-full
    ${$}
    flex-col
    ${t ? "" : "md:flex-row"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${o}
  `.trim().replace(/\s+/g, " "), B = `
    w-full
    ${t ? "" : a === "framed" ? "md:w-1/2 lg:min-w-[calc(200px+var(--spacing-cards-image--padding-y))]" : a === "circle" ? "md:w-auto" : "md:w-1/2"}
    ${a === "circle" ? "" : "p-cards-image--padding-y"}
    flex
    items-center
    justify-center
    overflow-hidden
    ${a === "framed" && t ? "rounded-t-[var(--spacing-cards-br)]" : ""}
    ${a === "framed" && !t && s === "left" ? "md:rounded-l-[var(--spacing-cards-br)]" : ""}
    ${a === "framed" && !t && s === "right" ? "md:rounded-r-[var(--spacing-cards-br)]" : ""}
  `.trim().replace(/\s+/g, " "), E = `
    ${a === "circle" ? "w-[100px] h-[100px]" : a === "framed" ? "w-full aspect-square" : "w-full"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${a === "circle" ? "rounded-full" : a === "framed" ? "rounded-[var(--spacing-cards-image--br)]" : t ? "rounded-t-[var(--spacing-cards-image--br)]" : s === "left" ? "rounded-l-[var(--spacing-cards-image--br)]" : "rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), _ = `
    w-full
    ${t ? "aspect-[441/269]" : "md:w-1/2"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${t ? "rounded-t-[var(--spacing-cards-image--br)]" : s === "left" ? "md:rounded-l-[var(--spacing-cards-image--br)]" : "md:rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), z = `
    w-full
    ${t ? "" : a === "framed" ? "md:w-3/4" : a === "circle" ? "md:flex-1" : "md:w-1/2"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex-grow-1
    flex
    flex-col
    gap-textmedia-btn-text--spacing-y
    ${t ? "rounded-b-[var(--spacing-cards-image--br)]" : s === "left" ? "md:rounded-r-[var(--spacing-cards-image--br)]" : "md:rounded-l-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), A = /* @__PURE__ */ e(
    te,
    {
      media: m,
      aspect: "default",
      imageUrl: i,
      videoUrl: h,
      lottieUrl: f,
      lottieData: p,
      iframeUrl: d,
      title: n ?? c,
      className: ""
    }
  ), I = t || s === "left", D = () => a === "framed" || a === "circle" ? /* @__PURE__ */ e("div", { className: B, children: /* @__PURE__ */ e("div", { className: E, children: A }) }) : /* @__PURE__ */ e("div", { className: _, children: A });
  return /* @__PURE__ */ M(
    "article",
    {
      className: C,
      ...c ? { "aria-labelledby": P } : { "aria-label": "Card" },
      ...g ?? {},
      children: [
        I && D(),
        /* @__PURE__ */ M("div", { className: z, children: [
          /* @__PURE__ */ M("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            c && /* @__PURE__ */ e("h3", { id: P, className: "text-headings-h3 font-semibold", children: c }),
            u ? /* @__PURE__ */ e(
              "div",
              {
                className: "wysiwyg text-body-default",
                dangerouslySetInnerHTML: { __html: b }
              }
            ) : w && /* @__PURE__ */ e("p", { className: "text-body-default", children: w })
          ] }),
          y && /* @__PURE__ */ e("div", { className: "mt-auto", children: x === "link" ? /* @__PURE__ */ e(
            Z,
            {
              text: y,
              href: r,
              variant: N || (l.includes("light") ? "light" : "dark"),
              onClick: v
            }
          ) : /* @__PURE__ */ e(
            J,
            {
              text: y,
              href: r,
              variant: l,
              onClick: v
            }
          ) })
        ] }),
        !I && D()
      ]
    }
  );
}, me = ({
  columns: t = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: s = [],
  // Array of card data objects
  buttonType: a = "button",
  linkVariant: m,
  stacked: i = !0,
  imagePosition: h = "left",
  variant: f = "flushed",
  itemBackgroundVariant: p = "default",
  className: d = "",
  shadowCards: n = !1,
  ...c
}) => {
  const w = () => !i && f === "framed" ? Math.min(t, 2) : t, b = () => {
    const x = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (i) {
      const j = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, o = w(), g = j[o] ?? j[3];
      return `${x} md:grid-cols-2 ${g}`;
    }
    const N = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, v = Math.min(w(), 3);
    return `${x} ${N[v]}`;
  }, y = (r) => {
    const l = `min-w-0 w-full flex items-stretch${n ? " box-shadow" : ""}`;
    return i && s.length === 3 && r === 2 ? `${l} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : l;
  };
  return /* @__PURE__ */ e("div", { className: d, ...c, children: /* @__PURE__ */ e("div", { className: b(), children: s.map((r, l) => /* @__PURE__ */ e("div", { className: y(l), children: /* @__PURE__ */ e(
    re,
    {
      stacked: i,
      imagePosition: h,
      variant: f,
      media: r.media || "image",
      imageUrl: r.imageUrl,
      videoUrl: r.videoUrl,
      lottieUrl: r.lottieUrl,
      lottieData: r.lottieData,
      iframeUrl: r.iframeUrl,
      mediaAltTitle: r.mediaAltTitle,
      title: r.title,
      description: r.description,
      descriptionRichText: r.descriptionRichText,
      buttonText: r.buttonText,
      buttonHref: r.buttonHref,
      buttonVariant: r.buttonVariant || "light",
      buttonType: r.buttonType || a,
      linkVariant: r.linkVariant || m,
      buttonOnClick: r.buttonOnClick,
      backgroundVariant: p,
      attributes: r.attributes,
      className: "h-full w-full"
    }
  ) }, l)) }) });
};
let S, W, T, F;
const ae = async () => {
  if (!F) {
    const t = await import("react-pdf");
    F = t.pdfjs, W = t.Document, T = t.Page, F.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${F.version}/build/pdf.worker.min.mjs`;
  }
}, se = async () => {
  S || (S = (await import("react-pageflip")).default);
}, ie = U(({ children: t }, s) => /* @__PURE__ */ e("div", { ref: s, className: "w-full h-full overflow-hidden", children: t })), le = ({ pdfUrl: t, title: s, width: a = 280, height: m = 280, className: i = "" }) => {
  const [h, f] = L(0), [p, d] = L(null), [n, c] = L(!0), [w, b] = L(m / a), [y, r] = L(0), l = G(null);
  O(() => {
    Promise.all([ae(), se()]).then(() => c(!1)).catch(() => {
      d("Failed to load flipbook");
    });
  }, []), O(() => {
    const o = l.current;
    if (!o) return;
    const g = new ResizeObserver(([u]) => {
      const k = Math.floor(u.contentRect.width);
      k > 0 && r(k);
    });
    return g.observe(o), () => g.disconnect();
  }, [n]);
  const x = y > 0 ? Math.floor(y / 2) : Math.floor(a / 2), N = Math.round(x * w), v = V(async (o) => {
    try {
      const u = (await o.getPage(1)).getViewport({ scale: 1 });
      u != null && u.width && (u != null && u.height) && b(u.height / u.width);
    } catch {
    }
    f(o.numPages || 0);
  }, []), j = V((o) => {
    d((o == null ? void 0 : o.message) || "Failed to load PDF");
  }, []);
  return p ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : n ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: l, className: `w-full ${i}`.trim(), children: /* @__PURE__ */ M(
    W,
    {
      file: t,
      onLoadSuccess: v,
      onLoadError: j,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        h === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${i}`.trim(),
            style: { minHeight: `${N}px` },
            children: /* @__PURE__ */ e(T, { pageNumber: 1, width: a, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        h > 1 && /* @__PURE__ */ e(
          S,
          {
            width: x,
            height: N,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": s || "Flipbook",
            children: Array.from({ length: h }, (o, g) => /* @__PURE__ */ e(ie, { children: /* @__PURE__ */ e(T, { pageNumber: g + 1, width: x, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, g))
          },
          `${x}-${N}`
        )
      ]
    }
  ) });
}, ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" }));
export {
  me as default
};
