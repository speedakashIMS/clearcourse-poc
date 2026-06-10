import { jsx as e, jsxs as M } from "react/jsx-runtime";
import * as F from "react";
import { lazy as z, Suspense as _, useId as H, useState as L, useRef as Y, useEffect as O, useCallback as W, forwardRef as q } from "react";
import G from "lottie-react";
const U = ({
  text: t = "Button",
  href: s = void 0,
  variant: o = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: m = "btn-md",
  // btn-sm , btn-md
  className: a = "",
  disabled: h = !1,
  onClick: p = void 0,
  attributes: b = {},
  ...d
}) => {
  const f = (n) => {
    switch (n) {
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
  }, x = (n) => {
    switch (n) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, r = `btn ${f(o)} ${x(m)} ${a}`.trim();
  return s ? /* @__PURE__ */ e(
    "a",
    {
      href: s,
      className: r,
      onClick: p,
      ...d,
      ...b ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: d.type || "button",
      className: r,
      disabled: h,
      onClick: p,
      ...d,
      ...b ?? {},
      children: t
    }
  );
};
function X({
  title: t,
  titleId: s,
  ...o
}, m) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: m,
    "aria-labelledby": s
  }, o), t ? /* @__PURE__ */ F.createElement("title", {
    id: s
  }, t) : null, /* @__PURE__ */ F.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
  }));
}
const J = /* @__PURE__ */ F.forwardRef(X), K = ({
  text: t = "Link",
  href: s = "#",
  variant: o = "dark",
  // dark, light
  icon: m,
  className: a = "",
  ...h
}) => {
  const p = "text-link", b = (f) => {
    switch (f) {
      case "light":
        return "link-light";
      case "dark":
        return "link-dark";
      default:
        return "link-dark";
    }
  }, d = m || J, i = `${p} ${b(o)} ${a}`.trim();
  return /* @__PURE__ */ M(
    "a",
    {
      href: s,
      className: i,
      ...h,
      children: [
        /* @__PURE__ */ e("span", { children: t }),
        /* @__PURE__ */ e(d, { className: "text-link-icon" })
      ]
    }
  );
}, Q = z(() => Promise.resolve().then(() => ie)), Z = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: s = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: o = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: a,
  lottieUrl: h,
  lottieData: p,
  iframeUrl: b,
  flipbookUrl: d,
  title: i,
  className: f = ""
}) => {
  var c;
  const x = typeof window < "u" && window.location.origin.indexOf("author") > -1, r = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, u = `relative w-full h-full ${s === "square" ? "aspect-square" : s === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), g = s === "default" ? `w-full h-full ${f}`.trim() : `absolute inset-0 w-full h-full ${f}`.trim(), v = "w-full h-full", w = s === "default" ? `${g}`.trim() : g, $ = o === "contain" ? "object-contain" : "object-cover", j = o === "contain" ? "xMidYMid meet" : "xMidYMid slice", l = `relative w-full ${f}`.trim(), y = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (m)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e(
          "img",
          {
            src: m,
            alt: i || "Media image",
            className: `${$} ${g}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (a) {
        const N = a.includes("youtube.com/watch") || a.includes("youtu.be/");
        let C = a;
        N && (C = `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1].split("?")[0] : (c = a.split("v=")[1]) == null ? void 0 : c.split("&")[0]}`);
        const T = (() => {
          if (!N) return C;
          try {
            const k = new URL(C);
            return k.searchParams.set("autoplay", "0"), k.searchParams.set("mute", "0"), k.searchParams.set("playsinline", "1"), k.searchParams.set("controls", "1"), k.searchParams.set("rel", "0"), k.toString();
          } catch {
            return C.includes("?") ? C.includes("autoplay=") ? C : `${C}&autoplay=0` : `${C}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: u, children: N ? /* @__PURE__ */ e(
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
        return x ? /* @__PURE__ */ e("div", { className: u, role: "img", "aria-label": i || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${g}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: u,
            role: "img",
            "aria-label": i || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${g} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              G,
              {
                animationData: p,
                loop: !r,
                autoplay: !r,
                className: v,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: j }
              }
            ) })
          }
        );
      if (h)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (b)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: b,
            title: i || "Iframe content",
            frameBorder: "0",
            className: `${w} ${$}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (d)
        return x ? /* @__PURE__ */ e("div", { className: l, role: "img", "aria-label": i || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${y}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: l, children: /* @__PURE__ */ e("div", { className: y, children: /* @__PURE__ */ e(_, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(Q, { pdfUrl: d, title: i, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${s === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, ee = ({
  stacked: t = !0,
  // true = vertical stack, false = horizontal side-by-side
  iconPosition: s = "left",
  // 'left' or 'right' (only applies when stacked = false)
  media: o = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl: m,
  // URL for image
  videoUrl: a,
  // URL for video (YouTube embed URL or direct video URL)
  lottieUrl: h,
  // URL to Lottie animation JSON file
  lottieData: p,
  // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl: b,
  // URL for iframe
  mediaAltTitle: d,
  // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title: i,
  description: f,
  buttonText: x,
  buttonHref: r,
  buttonVariant: n = "light",
  buttonType: u = "button",
  // button | link
  linkVariant: g,
  buttonOnClick: v,
  backgroundVariant: w = "default",
  // default | primary | secondary | tertiary
  className: $ = "",
  attributes: j = {},
  textAlign: l = "left"
  // 'left' | 'center' (only applies when stacked = true)
}) => {
  console.log("CardWithIconMolecule props:", {
    stacked: t,
    iconPosition: s,
    textAlign: l
  });
  const y = {
    default: "bg-grey-500 text-grey-950",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-grey-950",
    tertiary: "bg-tertiary text-grey-950",
    light: "bg-light text-grey-950"
  }, c = {
    default: "text-white",
    primary: "text-white",
    secondary: "text-grey-950",
    tertiary: "text-grey-950",
    light: "text-grey-950"
  }, N = y[w] || y.default, C = H(), T = `
    flex
    w-full
    ${N}
    ${t ? "flex-col" : "flex-row items-start"}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${$}
  `.trim().replace(/\s+/g, " "), k = `
    ${t ? "w-full" : "w-auto"}
    flex
    items-center
    justify-center
    overflow-hidden
    py-cards-icon--padding-y
    px-cards-icon--padding-x
  `.trim().replace(/\s+/g, " "), D = `
    w-[94px]
    h-[100px]
    flex
    items-center
    justify-center
    aspect-square
    overflow-hidden
  `.trim().replace(/\s+/g, " "), V = `
    ${t ? "w-full" : "flex-1"}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex
    flex-col
    flex-grow-1
    gap-textmedia-btn-text--spacing-y
    ${l === "center" ? "items-center text-center" : "items-start text-left"}
    ${t ? "rounded-b-cards-br" : s === "left" ? "rounded-r-cards-br" : "rounded-l-cards-br"}
  `.trim().replace(/\s+/g, " "), E = /* @__PURE__ */ e(
    Z,
    {
      media: o,
      aspect: "default",
      imageUrl: m,
      videoUrl: a,
      lottieUrl: h,
      lottieData: p,
      iframeUrl: b,
      objectFit: "contain",
      title: d ?? i,
      className: ""
    }
  ), A = t || s === "left", I = () => /* @__PURE__ */ e("div", { className: k, children: /* @__PURE__ */ e("div", { className: D, children: E }) });
  return /* @__PURE__ */ M(
    "article",
    {
      className: T,
      ...i ? { "aria-labelledby": C } : { "aria-label": "Card" },
      ...j ?? {},
      children: [
        A && I(),
        /* @__PURE__ */ M("div", { className: V, children: [
          /* @__PURE__ */ M("div", { className: "space-y-textmedia-text--spacing-y flex-grow-1", children: [
            i && /* @__PURE__ */ e("h3", { id: C, className: `text-headings-h3 font-semibold ${c[w]}`, children: i }),
            f && /* @__PURE__ */ e("p", { className: `text-body-default ${c[w]}`, children: f })
          ] }),
          x && /* @__PURE__ */ e("div", { className: "mt-auto", children: u === "link" ? /* @__PURE__ */ e(
            K,
            {
              text: x,
              href: r,
              variant: g || (n.includes("light") ? "light" : "dark"),
              onClick: v
            }
          ) : /* @__PURE__ */ e(
            U,
            {
              text: x,
              href: r,
              variant: n,
              onClick: v
            }
          ) })
        ] }),
        !A && I()
      ]
    }
  );
}, ce = ({
  columns: t = 3,
  // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data: s = [],
  // Array of card data objects
  buttonType: o = "button",
  linkVariant: m,
  stacked: a = !0,
  iconPosition: h = "left",
  itemBackgroundVariant: p = "default",
  textAlign: b = "left",
  // 'left' | 'center' (only applies when stacked = true)
  className: d = "",
  ...i
}) => {
  const f = () => {
    const u = "container grid grid-cols-1 gap-x-section-spacing-x gap-y-section-spacing-y justify-items-center";
    if (a) {
      const w = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-3",
        5: "md:grid-cols-3",
        6: "md:grid-cols-3"
      }, $ = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
        5: "lg:grid-cols-5",
        6: "lg:grid-cols-6"
      }, j = w[t] ?? w[3], l = $[t] ?? $[3];
      return `${u} ${j} ${l}`;
    }
    const g = {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3"
    }, v = Math.min(t, 3);
    return `${u} ${g[v]}`;
  }, x = (r) => {
    const n = "min-w-0 w-full flex items-stretch";
    return a && s.length === 3 && r === 2 && t === 2 ? `${n} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none` : n;
  };
  return /* @__PURE__ */ e("div", { className: d, ...i, children: /* @__PURE__ */ e("div", { className: f(), children: s.map((r, n) => /* @__PURE__ */ e("div", { className: x(n), children: /* @__PURE__ */ e(
    ee,
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
      buttonType: r.buttonType || o,
      linkVariant: r.linkVariant || m,
      buttonOnClick: r.buttonOnClick,
      backgroundVariant: p,
      attributes: r.attributes,
      textAlign: b,
      className: "h-full w-full"
    }
  ) }, n)) }) });
};
let R, B, S, P;
const te = async () => {
  if (!P) {
    const t = await import("react-pdf");
    P = t.pdfjs, B = t.Document, S = t.Page, P.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${P.version}/build/pdf.worker.min.mjs`;
  }
}, re = async () => {
  R || (R = (await import("react-pageflip")).default);
}, se = q(({ children: t }, s) => /* @__PURE__ */ e("div", { ref: s, className: "w-full h-full overflow-hidden", children: t })), ae = ({ pdfUrl: t, title: s, width: o = 280, height: m = 280, className: a = "" }) => {
  const [h, p] = L(0), [b, d] = L(null), [i, f] = L(!0), [x, r] = L(m / o), [n, u] = L(0), g = Y(null);
  O(() => {
    Promise.all([te(), re()]).then(() => f(!1)).catch(() => {
      d("Failed to load flipbook");
    });
  }, []), O(() => {
    const l = g.current;
    if (!l) return;
    const y = new ResizeObserver(([c]) => {
      const N = Math.floor(c.contentRect.width);
      N > 0 && u(N);
    });
    return y.observe(l), () => y.disconnect();
  }, [i]);
  const v = n > 0 ? Math.floor(n / 2) : Math.floor(o / 2), w = Math.round(v * x), $ = W(async (l) => {
    try {
      const c = (await l.getPage(1)).getViewport({ scale: 1 });
      c != null && c.width && (c != null && c.height) && r(c.height / c.width);
    } catch {
    }
    p(l.numPages || 0);
  }, []), j = W((l) => {
    d((l == null ? void 0 : l.message) || "Failed to load PDF");
  }, []);
  return b ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : i ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: g, className: `w-full ${a}`.trim(), children: /* @__PURE__ */ M(
    B,
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
            style: { minHeight: `${w}px` },
            children: /* @__PURE__ */ e(S, { pageNumber: 1, width: o, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        h > 1 && /* @__PURE__ */ e(
          R,
          {
            width: v,
            height: w,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": s || "Flipbook",
            children: Array.from({ length: h }, (l, y) => /* @__PURE__ */ e(se, { children: /* @__PURE__ */ e(S, { pageNumber: y + 1, width: v, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, y))
          },
          `${v}-${w}`
        )
      ]
    }
  ) });
}, ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ae
}, Symbol.toStringTag, { value: "Module" }));
export {
  ce as default
};
