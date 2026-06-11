import { jsx as e, jsxs as P } from "react/jsx-runtime";
import * as F from "react";
import { lazy as E, Suspense as z, useId as _, useState as L, useRef as H, useEffect as O, useCallback as B, forwardRef as Y } from "react";
import q from "lottie-react";
const G = ({
  text: t = "Button",
  href: s = void 0,
  variant: n = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: u = "btn-md",
  // btn-sm , btn-md
  className: a = "",
  disabled: h = !1,
  onClick: p = void 0,
  attributes: b = {},
  ...c
}) => {
  const m = (f) => {
    switch (f) {
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
  }, r = (f) => {
    switch (f) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, l = `btn ${m(n)} ${r(u)} ${a}`.trim();
  return s ? /* @__PURE__ */ e(
    "a",
    {
      href: s,
      className: l,
      onClick: p,
      ...c,
      ...b ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: c.type || "button",
      className: l,
      disabled: h,
      onClick: p,
      ...c,
      ...b ?? {},
      children: t
    }
  );
};
function U({
  title: t,
  titleId: s,
  ...n
}, u) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: u,
    "aria-labelledby": s
  }, n), t ? /* @__PURE__ */ F.createElement("title", {
    id: s
  }, t) : null, /* @__PURE__ */ F.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const X = /* @__PURE__ */ F.forwardRef(U), J = ({
  text: t = "Link",
  href: s = "#",
  variant: n = "dark",
  // dark, light
  icon: u,
  className: a = "",
  ...h
}) => {
  const p = "text-link", b = (m) => {
    switch (m) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, c = u || X, i = `${p} ${b(n)} ${a}`.trim();
  return /* @__PURE__ */ P(
    "a",
    {
      href: s,
      className: i,
      ...h,
      children: [
        /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(c, { className: "text-link-icon" })
      ]
    }
  );
}, K = E(() => Promise.resolve().then(() => ae)), Q = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: s = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: n = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: u,
  videoUrl: a,
  lottieUrl: h,
  lottieData: p,
  iframeUrl: b,
  flipbookUrl: c,
  title: i,
  className: m = ""
}) => {
  var d;
  const r = typeof window < "u" && window.location.origin.indexOf("author") > -1, l = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, y = `relative w-full h-full ${s === "square" ? "aspect-square" : s === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), g = s === "default" ? `w-full h-full ${m}`.trim() : `absolute inset-0 w-full h-full ${m}`.trim(), w = "w-full h-full", v = s === "default" ? `${g}`.trim() : g, $ = n === "contain" ? "object-contain" : "object-cover", j = n === "contain" ? "xMidYMid meet" : "xMidYMid slice", o = `relative w-full ${m}`.trim(), x = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (u)
        return /* @__PURE__ */ e("div", { className: y, children: /* @__PURE__ */ e(
          "img",
          {
            src: u,
            alt: i || "Media image",
            className: `${$} ${g}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (a) {
        const N = a.includes("youtube.com/watch") || a.includes("youtu.be/");
        let k = a;
        N && (k = `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1].split("?")[0] : (d = a.split("v=")[1]) == null ? void 0 : d.split("&")[0]}`);
        const T = (() => {
          if (!N) return k;
          try {
            const C = new URL(k);
            return C.searchParams.set("autoplay", "0"), C.searchParams.set("mute", "0"), C.searchParams.set("playsinline", "1"), C.searchParams.set("controls", "1"), C.searchParams.set("rel", "0"), C.toString();
          } catch {
            return k.includes("?") ? k.includes("autoplay=") ? k : `${k}&autoplay=0` : `${k}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: y, children: N ? /* @__PURE__ */ e(
          "iframe",
          {
            src: T,
            title: i || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${g} ${$}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${g} ${$}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: i || "Video player",
            children: /* @__PURE__ */ e("source", { src: a })
          }
        ) });
      }
      break;
    case "lottie":
      if (p)
        return r ? /* @__PURE__ */ e("div", { className: y, role: "img", "aria-label": i || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${g}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: y,
            role: "img",
            "aria-label": i || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${g} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              q,
              {
                animationData: p,
                loop: !l,
                autoplay: !l,
                className: w,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: j }
              }
            ) })
          }
        );
      if (h)
        return /* @__PURE__ */ e("div", { className: y, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (b)
        return /* @__PURE__ */ e("div", { className: y, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: b,
            title: i || "Iframe content",
            frameBorder: "0",
            className: `${v} ${$}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (c)
        return r ? /* @__PURE__ */ e("div", { className: o, role: "img", "aria-label": i || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${x}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e("div", { className: x, children: /* @__PURE__ */ e(z, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(K, { pdfUrl: c, title: i, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: y, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${s === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, Z = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  iconPosition: s = "left",
  // 'left' or 'right' (only applies when stacked = false)
  media: n = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: u,
  // URL for image
  videoUrl: a,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: h,
  // URL to Lottie animation JSON file
  lottieData: p,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: b,
  // URL for iframe
  mediaAltTitle: c,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: i,
  description: m,
  buttonText: r,
  buttonHref: l,
  buttonVariant: f = "light",
  buttonType: y = "button",
  // button | link
  linkVariant: g,
  buttonOnClick: w,
  backgroundVariant: v = "default",
  // default | primary | secondary | tertiary
  className: $ = "",
  attributes: j = {}
}) => {
  const o = {
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
  }, d = o[v] || o.default, N = _(), k = `
    flex
    w-full
    ${d}
    ${t ? "flex-col" : "flex-row items-start"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${$}
  `.trim().replace(/\s+/g, " "), T = `
    ${t ? "w-full" : "w-auto"}
    flex
    items-center
    justify-center
    overflow-hidden
    py-cards-icon--padding-y
    px-cards-icon--padding-x
  `.trim().replace(/\s+/g, " "), C = `
    w-[94px]
    h-[100px]
    bg-grey-200
    flex
    items-center
    justify-center
    aspect-square
    rounded-24
    overflow-hidden
  `.trim().replace(/\s+/g, " "), D = `
    ${t ? "w-full" : "flex-1"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex
    flex-col
    flex-grow-1
    gap-textmedia-btn-text--spacing-y
    ${t ? "rounded-b-cards-br" : s === "left" ? "rounded-r-cards-br" : "rounded-l-cards-br"}
  `.trim().replace(/\s+/g, " "), V = /* @__PURE__ */ e(
    Q,
    {
      media: n,
      aspect: "default",
      imageUrl: u,
      videoUrl: a,
      lottieUrl: h,
      lottieData: p,
      iframeUrl: b,
      title: c ?? i,
      className: ""
    }
  ), A = t || s === "left", I = () => /* @__PURE__ */ e("div", { className: T, children: /* @__PURE__ */ e("div", { className: C, children: V }) });
  return /* @__PURE__ */ P(
    "article",
    {
      className: k,
      ...i ? { "aria-labelledby": N } : { "aria-label": "Card" },
      ...j ?? {},
      children: [
        A && I(),
        /* @__PURE__ */ P("div", { className: D, children: [
          /* @__PURE__ */ P("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            i && /* @__PURE__ */ e("h3", { id: N, className: `text-headings-h3 font-semibold ${x[v]}`, children: i }),
            m && /* @__PURE__ */ e("p", { className: `text-body-default ${x[v]}`, children: m })
          ] }),
          r && /* @__PURE__ */ e("div", { className: "mt-auto", children: y === "link" ? /* @__PURE__ */ e(
            J,
            {
              text: r,
              href: l,
              variant: g || (f.includes("light") ? "light" : "dark"),
              onClick: w
            }
          ) : /* @__PURE__ */ e(
            G,
            {
              text: r,
              href: l,
              variant: f,
              onClick: w
            }
          ) })
        ] }),
        !A && I()
      ]
    }
  );
}, oe = ({
  columns: t = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: s = [],
  // Array of card data objects
  buttonType: n = "button",
  linkVariant: u,
  stacked: a = !0,
  iconPosition: h = "left",
  itemBackgroundVariant: p = "default",
  className: b = "",
  ...c
}) => {
  const i = () => {
    const f = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (a) {
      const w = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-3",
        5: "md:grid-cols-3",
        6: "md:grid-cols-3"
      }, v = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, $ = w[t] ?? w[3], j = v[t] ?? v[3];
      return `${f} ${$} ${j}`;
    }
    const y = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, g = Math.min(t, 3);
    return `${f} ${y[g]}`;
  }, m = (r) => {
    const l = "min-w-0 w-full flex items-stretch";
    return a && s.length === 3 && r === 2 && t === 2 ? `${l} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : l;
  };
  return /* @__PURE__ */ e("div", { className: b, ...c, children: /* @__PURE__ */ e("div", { className: i(), children: s.map((r, l) => /* @__PURE__ */ e("div", { className: m(l), children: /* @__PURE__ */ e(
    Z,
    {
      stacked: a,
      iconPosition: h,
      media: r.media || "image",
      imageUrl: r.imageUrl,
      videoUrl: r.videoUrl,
      lottieUrl: r.lottieUrl,
      lottieData: r.lottieData,
      iframeUrl: r.iframeUrl,
      mediaAltTitle: r.mediaAltTitle,
      title: r.title,
      description: r.description,
      buttonText: r.buttonText,
      buttonHref: r.buttonHref,
      buttonVariant: r.buttonVariant || "light",
      buttonType: r.buttonType || n,
      linkVariant: r.linkVariant || u,
      buttonOnClick: r.buttonOnClick,
      backgroundVariant: p,
      attributes: r.attributes,
      className: "h-full w-full"
    }
  ) }, l)) }) });
};
let R, W, S, M;
const ee = async () => {
  if (!M) {
    const t = await import("react-pdf");
    M = t.pdfjs, W = t.Document, S = t.Page, M.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${M.version}/build/pdf.worker.min.mjs`;
  }
}, te = async () => {
  R || (R = (await import("react-pageflip")).default);
}, re = Y(({ children: t }, s) => /* @__PURE__ */ e("div", { ref: s, className: "w-full h-full overflow-hidden", children: t })), se = ({ pdfUrl: t, title: s, width: n = 280, height: u = 280, className: a = "" }) => {
  const [h, p] = L(0), [b, c] = L(null), [i, m] = L(!0), [r, l] = L(u / n), [f, y] = L(0), g = H(null);
  O(() => {
    Promise.all([ee(), te()]).then(() => m(!1)).catch(() => {
      c("Failed to load flipbook");
    });
  }, []), O(() => {
    const o = g.current;
    if (!o) return;
    const x = new ResizeObserver(([d]) => {
      const N = Math.floor(d.contentRect.width);
      N > 0 && y(N);
    });
    return x.observe(o), () => x.disconnect();
  }, [i]);
  const w = f > 0 ? Math.floor(f / 2) : Math.floor(n / 2), v = Math.round(w * r), $ = B(async (o) => {
    try {
      const d = (await o.getPage(1)).getViewport({ scale: 1 });
      d != null && d.width && (d != null && d.height) && l(d.height / d.width);
    } catch {
    }
    p(o.numPages || 0);
  }, []), j = B((o) => {
    c((o == null ? void 0 : o.message) || "Failed to load PDF");
  }, []);
  return b ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : i ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: g, className: `w-full ${a}`.trim(), children: /* @__PURE__ */ P(
    W,
    {
      file: t,
      onLoadSuccess: $,
      onLoadError: j,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        h === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${a}`.trim(),
            style: { minHeight: `${v}px` },
            children: /* @__PURE__ */ e(S, { pageNumber: 1, width: n, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        h > 1 && /* @__PURE__ */ e(
          R,
          {
            width: w,
            height: v,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": s || "Flipbook",
            children: Array.from({ length: h }, (o, x) => /* @__PURE__ */ e(re, { children: /* @__PURE__ */ e(S, { pageNumber: x + 1, width: w, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, x))
          },
          `${w}-${v}`
        )
      ]
    }
  ) });
}, ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: se
}, Symbol.toStringTag, { value: "Module" }));
export {
  oe as default
};
