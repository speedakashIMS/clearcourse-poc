import { jsx as e, jsxs as M } from "react/jsx-runtime";
import * as R from "react";
import { lazy as H, Suspense as Y, useId as q, useState as L, useRef as G, useEffect as O, useCallback as V, forwardRef as U } from "react";
import X from "lottie-react";
const J = ({
  text: t = "Button",
  href: a = void 0,
  variant: s = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: f = "btn-md",
  // btn-sm , btn-md
  className: i = "",
  disabled: h = !1,
  onClick: g = void 0,
  attributes: p = {},
  ...u
}) => {
  const o = (r) => {
    switch (r) {
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
  }, x = (r) => {
    switch (r) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, b = `btn ${o(s)} ${x(f)} ${i}`.trim();
  return a ? /* @__PURE__ */ e(
    "a",
    {
      href: a,
      className: b,
      onClick: g,
      ...u,
      ...p ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: u.type || "button",
      className: b,
      disabled: h,
      onClick: g,
      ...u,
      ...p ?? {},
      children: t
    }
  );
};
function K({
  title: t,
  titleId: a,
  ...s
}, f) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: f,
    "aria-labelledby": a
  }, s), t ? /* @__PURE__ */ R.createElement("title", {
    id: a
  }, t) : null, /* @__PURE__ */ R.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const Q = /* @__PURE__ */ R.forwardRef(K), Z = ({
  text: t = "Link",
  href: a = "#",
  variant: s = "dark",
  // dark, light
  icon: f,
  className: i = "",
  ...h
}) => {
  const g = "text-link", p = (o) => {
    switch (o) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, u = f || Q, n = `${g} ${p(s)} ${i}`.trim();
  return /* @__PURE__ */ M(
    "a",
    {
      href: a,
      className: n,
      ...h,
      children: [
        /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(u, { className: "text-link-icon" })
      ]
    }
  );
}, ee = H(() => Promise.resolve().then(() => ne)), te = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: a = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: s = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: f,
  videoUrl: i,
  lottieUrl: h,
  lottieData: g,
  iframeUrl: p,
  flipbookUrl: u,
  title: n,
  className: o = ""
}) => {
  var m;
  const x = typeof window < "u" && window.location.origin.indexOf("author") > -1, b = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, l = `relative w-full h-full ${a === "square" ? "aspect-square" : a === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), c = a === "default" ? `w-full h-full ${o}`.trim() : `absolute inset-0 w-full h-full ${o}`.trim(), v = "w-full h-full", N = a === "default" ? `${c}`.trim() : c, y = s === "contain" ? "object-contain" : "object-cover", j = s === "contain" ? "xMidYMid meet" : "xMidYMid slice", d = `relative w-full ${o}`.trim(), w = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (f)
        return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e(
          "img",
          {
            src: f,
            alt: n || "Media image",
            className: `${y} ${c}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (i) {
        const k = i.includes("youtube.com/watch") || i.includes("youtu.be/");
        let $ = i;
        k && ($ = `https://www.youtube.com/embed/${i.includes("youtu.be/") ? i.split("youtu.be/")[1].split("?")[0] : (m = i.split("v=")[1]) == null ? void 0 : m.split("&")[0]}`);
        const P = (() => {
          if (!k) return $;
          try {
            const C = new URL($);
            return C.searchParams.set("autoplay", "0"), C.searchParams.set("mute", "0"), C.searchParams.set("playsinline", "1"), C.searchParams.set("controls", "1"), C.searchParams.set("rel", "0"), C.toString();
          } catch {
            return $.includes("?") ? $.includes("autoplay=") ? $ : `${$}&autoplay=0` : `${$}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: l, children: k ? /* @__PURE__ */ e(
          "iframe",
          {
            src: P,
            title: n || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${c} ${y}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${c} ${y}`.trim(),
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
      if (g)
        return x ? /* @__PURE__ */ e("div", { className: l, role: "img", "aria-label": n || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${c}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: l,
            role: "img",
            "aria-label": n || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${c} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              X,
              {
                animationData: g,
                loop: !b,
                autoplay: !b,
                className: v,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: j }
              }
            ) })
          }
        );
      if (h)
        return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (p)
        return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: p,
            title: n || "Iframe content",
            frameBorder: "0",
            className: `${N} ${y}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (u)
        return x ? /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": n || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${w}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e("div", { className: w, children: /* @__PURE__ */ e(Y, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(ee, { pdfUrl: u, title: n, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${a === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, re = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  imagePosition: a = "left",
  // 'left' or 'right' (only applies when stacked = false)
  variant: s = "flushed",
  // 'flushed' | 'framed' | 'circle' - flushed = full width, framed = square aspect ratio, circle = 100px x 100px circular
  media: f = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: i,
  // URL for image
  videoUrl: h,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: g,
  // URL to Lottie animation JSON file
  lottieData: p,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: u,
  // URL for iframe
  mediaAltTitle: n,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: o,
  description: x,
  descriptionRichText: b,
  // optional HTML from CMS; when set, rendered with .wysiwyg instead of plain `description`
  buttonText: r,
  buttonHref: l,
  buttonVariant: c = "light",
  buttonType: v = "button",
  // button | link
  linkVariant: N,
  buttonOnClick: y,
  backgroundVariant: j = "default",
  // default | primary | secondary | tertiary
  className: d = "",
  attributes: w = {}
}) => {
  const m = typeof b == "string" && b.trim().length > 0, k = {
    default: "bg-grey-500 text-grey-950",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-grey-950",
    tertiary: "bg-tertiary text-grey-950"
  }, $ = k[j] || k.default, P = q(), C = `
    flex
    w-full
    ${$}
    flex-col
    ${t ? "" : "md:flex-row"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${d}
  `.trim().replace(/\s+/g, " "), B = `
    w-full
    ${t ? "" : s === "framed" ? "md:w-1/2 lg:min-w-[calc(200px+var(--spacing-cards-image--padding-y))]" : s === "circle" ? "md:w-auto" : "md:w-1/2"}
    ${s === "circle" ? "" : "p-cards-image--padding-y"}
    flex
    items-center
    justify-center
    overflow-hidden
    ${s === "framed" && t ? "rounded-t-[var(--spacing-cards-br)]" : ""}
    ${s === "framed" && !t && a === "left" ? "md:rounded-l-[var(--spacing-cards-br)]" : ""}
    ${s === "framed" && !t && a === "right" ? "md:rounded-r-[var(--spacing-cards-br)]" : ""}
  `.trim().replace(/\s+/g, " "), E = `
    ${s === "circle" ? "w-[100px] h-[100px]" : s === "framed" ? "w-full aspect-square" : "w-full"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${s === "circle" ? "rounded-full" : s === "framed" ? "rounded-[var(--spacing-cards-image--br)]" : t ? "rounded-t-[var(--spacing-cards-image--br)]" : a === "left" ? "rounded-l-[var(--spacing-cards-image--br)]" : "rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), _ = `
    w-full
    ${t ? "aspect-[441/269]" : "md:w-1/2"}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${t ? "rounded-t-[var(--spacing-cards-image--br)]" : a === "left" ? "md:rounded-l-[var(--spacing-cards-image--br)]" : "md:rounded-r-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), z = `
    w-full
    ${t ? "" : s === "framed" ? "md:w-3/4" : s === "circle" ? "md:flex-1" : "md:w-1/2"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex-grow-1
    flex
    flex-col
    gap-textmedia-btn-text--spacing-y
    ${t ? "rounded-b-[var(--spacing-cards-image--br)]" : a === "left" ? "md:rounded-r-[var(--spacing-cards-image--br)]" : "md:rounded-l-[var(--spacing-cards-image--br)]"}
  `.trim().replace(/\s+/g, " "), A = /* @__PURE__ */ e(
    te,
    {
      media: f,
      aspect: "default",
      imageUrl: i,
      videoUrl: h,
      lottieUrl: g,
      lottieData: p,
      iframeUrl: u,
      title: n ?? o,
      className: ""
    }
  ), I = t || a === "left", D = () => s === "framed" || s === "circle" ? /* @__PURE__ */ e("div", { className: B, children: /* @__PURE__ */ e("div", { className: E, children: A }) }) : /* @__PURE__ */ e("div", { className: _, children: A });
  return /* @__PURE__ */ M(
    "article",
    {
      className: C,
      ...o ? { "aria-labelledby": P } : { "aria-label": "Card" },
      ...w ?? {},
      children: [
        I && D(),
        /* @__PURE__ */ M("div", { className: z, children: [
          /* @__PURE__ */ M("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            o && /* @__PURE__ */ e("h3", { id: P, className: "text-headings-h3 font-semibold text-white", children: o }),
            m ? /* @__PURE__ */ e(
              "div",
              {
                className: "wysiwyg text-body-default text-white",
                dangerouslySetInnerHTML: { __html: b }
              }
            ) : x && /* @__PURE__ */ e("p", { className: "text-body-default text-white", children: x })
          ] }),
          r && /* @__PURE__ */ e("div", { className: "mt-auto", children: v === "link" ? /* @__PURE__ */ e(
            Z,
            {
              text: r,
              href: l,
              variant: N || (c.includes("light") ? "light" : "dark"),
              onClick: y
            }
          ) : /* @__PURE__ */ e(
            J,
            {
              text: r,
              href: l,
              variant: c,
              onClick: y
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
  data: a = [],
  // Array of card data objects
  buttonType: s = "button",
  linkVariant: f,
  stacked: i = !0,
  imagePosition: h = "left",
  variant: g = "flushed",
  itemBackgroundVariant: p = "default",
  className: u = "",
  ...n
}) => {
  const o = () => !i && g === "framed" ? Math.min(t, 2) : t, x = () => {
    const c = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (i) {
      const y = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, j = o(), d = y[j] ?? y[3];
      return `${c} md:grid-cols-2 ${d}`;
    }
    const v = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, N = Math.min(o(), 3);
    return `${c} ${v[N]}`;
  }, b = (r) => {
    const l = "min-w-0 w-full flex items-stretch";
    return i && a.length === 3 && r === 2 ? `${l} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : l;
  };
  return /* @__PURE__ */ e("div", { className: u, ...n, children: /* @__PURE__ */ e("div", { className: x(), children: a.map((r, l) => /* @__PURE__ */ e("div", { className: b(l), children: /* @__PURE__ */ e(
    re,
    {
      stacked: i,
      imagePosition: h,
      variant: g,
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
      buttonType: r.buttonType || s,
      linkVariant: r.linkVariant || f,
      buttonOnClick: r.buttonOnClick,
      backgroundVariant: p,
      attributes: r.attributes,
      className: "h-full w-full"
    }
  ) }, l)) }) });
};
let S, W, T, F;
const se = async () => {
  if (!F) {
    const t = await import("react-pdf");
    F = t.pdfjs, W = t.Document, T = t.Page, F.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${F.version}/build/pdf.worker.min.mjs`;
  }
}, ae = async () => {
  S || (S = (await import("react-pageflip")).default);
}, ie = U(({ children: t }, a) => /* @__PURE__ */ e("div", { ref: a, className: "w-full h-full overflow-hidden", children: t })), le = ({ pdfUrl: t, title: a, width: s = 280, height: f = 280, className: i = "" }) => {
  const [h, g] = L(0), [p, u] = L(null), [n, o] = L(!0), [x, b] = L(f / s), [r, l] = L(0), c = G(null);
  O(() => {
    Promise.all([se(), ae()]).then(() => o(!1)).catch(() => {
      u("Failed to load flipbook");
    });
  }, []), O(() => {
    const d = c.current;
    if (!d) return;
    const w = new ResizeObserver(([m]) => {
      const k = Math.floor(m.contentRect.width);
      k > 0 && l(k);
    });
    return w.observe(d), () => w.disconnect();
  }, [n]);
  const v = r > 0 ? Math.floor(r / 2) : Math.floor(s / 2), N = Math.round(v * x), y = V(async (d) => {
    try {
      const m = (await d.getPage(1)).getViewport({ scale: 1 });
      m != null && m.width && (m != null && m.height) && b(m.height / m.width);
    } catch {
    }
    g(d.numPages || 0);
  }, []), j = V((d) => {
    u((d == null ? void 0 : d.message) || "Failed to load PDF");
  }, []);
  return p ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : n ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: c, className: `w-full ${i}`.trim(), children: /* @__PURE__ */ M(
    W,
    {
      file: t,
      onLoadSuccess: y,
      onLoadError: j,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        h === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${i}`.trim(),
            style: { minHeight: `${N}px` },
            children: /* @__PURE__ */ e(T, { pageNumber: 1, width: s, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        h > 1 && /* @__PURE__ */ e(
          S,
          {
            width: v,
            height: N,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": a || "Flipbook",
            children: Array.from({ length: h }, (d, w) => /* @__PURE__ */ e(ie, { children: /* @__PURE__ */ e(T, { pageNumber: w + 1, width: v, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, w))
          },
          `${v}-${N}`
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
