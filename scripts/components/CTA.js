import { jsx as e, jsxs as L } from "react/jsx-runtime";
import * as A from "react";
import { lazy as E, Suspense as z, useState as P, useRef as B, useEffect as S, useCallback as T, forwardRef as D } from "react";
import I from "lottie-react";
const V = E(() => Promise.resolve().then(() => X)), H = ({
  media: r = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: a = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: n = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: d,
  videoUrl: s,
  lottieUrl: l,
  lottieData: f,
  iframeUrl: m,
  flipbookUrl: t,
  title: i,
  className: p = ""
}) => {
  var c;
  const y = typeof window < "u" && window.location.origin.indexOf("author") > -1, b = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, h = `relative w-full h-full ${a === "square" ? "aspect-square" : a === "rectangle" ? "aspect-[4/3]" : r === "video" ? "aspect-video" : ""}`.trim(), u = a === "default" ? `w-full h-full ${p}`.trim() : `absolute inset-0 w-full h-full ${p}`.trim(), N = "w-full h-full", C = a === "default" ? `${u}`.trim() : u, $ = n === "contain" ? "object-contain" : "object-cover", F = n === "contain" ? "xMidYMid meet" : "xMidYMid slice", o = `relative w-full ${p}`.trim(), g = "w-full min-h-[280px]";
  switch (r) {
    case "image":
      if (d)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(
          "img",
          {
            src: d,
            alt: i || "Media image",
            className: `${$} ${u}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (s) {
        const k = s.includes("youtube.com/watch") || s.includes("youtu.be/");
        let v = s;
        k && (v = `https://www.youtube.com/embed/${s.includes("youtu.be/") ? s.split("youtu.be/")[1].split("?")[0] : (c = s.split("v=")[1]) == null ? void 0 : c.split("&")[0]}`);
        const _ = (() => {
          if (!k) return v;
          try {
            const x = new URL(v);
            return x.searchParams.set("autoplay", "0"), x.searchParams.set("mute", "0"), x.searchParams.set("playsinline", "1"), x.searchParams.set("controls", "1"), x.searchParams.set("rel", "0"), x.toString();
          } catch {
            return v.includes("?") ? v.includes("autoplay=") ? v : `${v}&autoplay=0` : `${v}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: h, children: k ? /* @__PURE__ */ e(
          "iframe",
          {
            src: _,
            title: i || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${u} ${$}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${u} ${$}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: i || "Video player",
            children: /* @__PURE__ */ e("source", { src: s })
          }
        ) });
      }
      break;
    case "lottie":
      if (f)
        return y ? /* @__PURE__ */ e("div", { className: h, role: "img", "aria-label": i || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${u}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: h,
            role: "img",
            "aria-label": i || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${u} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              I,
              {
                animationData: f,
                loop: !b,
                autoplay: !b,
                className: N,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: F }
              }
            ) })
          }
        );
      if (l)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (m)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: m,
            title: i || "Iframe content",
            frameBorder: "0",
            className: `${C} ${$}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (t)
        return y ? /* @__PURE__ */ e("div", { className: o, role: "img", "aria-label": i || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${g}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(z, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(V, { pdfUrl: t, title: i, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${a === "default" ? "" : "absolute inset-0"}`.trim(), children: r ? `${r.charAt(0).toUpperCase() + r.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, W = ({
  text: r = "Button",
  href: a = void 0,
  variant: n = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: d = "btn-md",
  // btn-sm , btn-md
  className: s = "",
  disabled: l = !1,
  onClick: f = void 0,
  attributes: m = {},
  ...t
}) => {
  const p = (w) => {
    switch (w) {
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
  }, y = (w) => {
    switch (w) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, b = `btn ${p(n)} ${y(d)} ${s}`.trim();
  return a ? /* @__PURE__ */ e(
    "a",
    {
      href: a,
      className: b,
      onClick: f,
      ...t,
      ...m ?? {},
      children: r
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: t.type || "button",
      className: b,
      disabled: l,
      onClick: f,
      ...t,
      ...m ?? {},
      children: r
    }
  );
};
function G({
  title: r,
  titleId: a,
  ...n
}, d) {
  return /* @__PURE__ */ A.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: d,
    "aria-labelledby": a
  }, n), r ? /* @__PURE__ */ A.createElement("title", {
    id: a
  }, r) : null, /* @__PURE__ */ A.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Y = /* @__PURE__ */ A.forwardRef(G), q = ({
  heading: r,
  paragraph: a,
  imageUrl: n,
  imageAlt: d = "CTA image",
  list: s = [],
  textAlign: l = "left",
  // 'left' | 'center' | 'right'
  buttonText: f,
  buttonHref: m,
  buttonVariant: t = "dark",
  buttonOnClick: i,
  className: p = "",
  attributes: y,
  ...b
}) => /* @__PURE__ */ L("div", { className: `w-full space-y-textmedia-btn-text--spacing-y py-textmedia-text--padding-y px-textmedia-text--padding-x ${l === "center" ? "text-center" : l === "right" ? "text-right" : "text-left"} ${p}`.trim(), ...b, ...y, children: [
  n && /* @__PURE__ */ e("div", { className: "inline-block overflow-hidden rounded-[var(--spacing-textmedia-image--br)] aspect-[4/3]", children: /* @__PURE__ */ e(
    "img",
    {
      src: n,
      alt: d,
      className: "w-full h-full object-cover"
    }
  ) }),
  /* @__PURE__ */ L("div", { className: "space-y-textmedia-text--spacing-y", children: [
    r && /* @__PURE__ */ e("h2", { className: "text-headings-h3 font-bold", children: r }),
    a && /* @__PURE__ */ e("p", { className: "text-body-default", children: a })
  ] }),
  Array.isArray(s) && s.length > 0 && /* @__PURE__ */ e("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 text-body-default", children: s.map((h, u) => /* @__PURE__ */ L("li", { className: `flex ${l === "center" ? "justify-center" : l === "right" ? "justify-end" : "justify-start"} gap-textmedia-value--spacing-y`, children: [
    /* @__PURE__ */ e(Y, { className: "h-16 w-16 shrink-0 mt-1" }),
    h
  ] }, u)) }),
  f && /* @__PURE__ */ e("div", { className: "pt-8", children: /* @__PURE__ */ e(
    W,
    {
      text: f,
      href: m,
      variant: t,
      onClick: i
    }
  ) })
] }), re = ({
  columns: r = 2,
  // 1 | 2
  gridType: a = "50-50",
  // '50-50' | '75-25' | '25-75'
  items: n = [],
  // [{ type: 'text'|'media', ctaText molecule fields, mediaProps }]
  className: d = "",
  attributes: s,
  ...l
}) => {
  const m = (() => {
    if (r === 1)
      return "grid grid-cols-1";
    switch (a) {
      case "75-25":
        return "grid grid-cols-1 lg:grid-cols-[3fr_1fr]";
      case "25-75":
        return "grid grid-cols-1 lg:grid-cols-[1fr_3fr]";
      case "50-50":
      default:
        return "grid grid-cols-1 lg:grid-cols-2";
    }
  })();
  return /* @__PURE__ */ e("div", { className: `container ${d}`, ...l, ...s, children: /* @__PURE__ */ e("div", { className: `items-center ${m}`, children: n.map((t, i) => t.type === "media" ? /* @__PURE__ */ e("div", { className: "w-full overflow-hidden rounded-[var(--spacing-textmedia-image--br)]", ...t.attributes || {}, children: /* @__PURE__ */ e(H, { ...t.mediaProps || {} }) }, i) : /* @__PURE__ */ e(
    q,
    {
      heading: t.heading,
      paragraph: t.paragraph,
      imageUrl: t.imageUrl,
      imageAlt: t.imageAlt,
      list: t.list,
      textAlign: t.textAlign,
      buttonText: t.buttonText,
      buttonHref: t.buttonHref,
      buttonVariant: t.buttonVariant,
      buttonOnClick: t.buttonOnClick,
      ...t.attributes || {}
    },
    i
  )) }) });
};
let M, O, R, j;
const Z = async () => {
  if (!j) {
    const r = await import("react-pdf");
    j = r.pdfjs, O = r.Document, R = r.Page, j.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${j.version}/build/pdf.worker.min.mjs`;
  }
}, J = async () => {
  M || (M = (await import("react-pageflip")).default);
}, K = D(({ children: r }, a) => /* @__PURE__ */ e("div", { ref: a, className: "w-full h-full overflow-hidden", children: r })), Q = ({ pdfUrl: r, title: a, width: n = 280, height: d = 280, className: s = "" }) => {
  const [l, f] = P(0), [m, t] = P(null), [i, p] = P(!0), [y, b] = P(d / n), [w, h] = P(0), u = B(null);
  S(() => {
    Promise.all([Z(), J()]).then(() => p(!1)).catch(() => {
      t("Failed to load flipbook");
    });
  }, []), S(() => {
    const o = u.current;
    if (!o) return;
    const g = new ResizeObserver(([c]) => {
      const k = Math.floor(c.contentRect.width);
      k > 0 && h(k);
    });
    return g.observe(o), () => g.disconnect();
  }, [i]);
  const N = w > 0 ? Math.floor(w / 2) : Math.floor(n / 2), C = Math.round(N * y), $ = T(async (o) => {
    try {
      const c = (await o.getPage(1)).getViewport({ scale: 1 });
      c != null && c.width && (c != null && c.height) && b(c.height / c.width);
    } catch {
    }
    f(o.numPages || 0);
  }, []), F = T((o) => {
    t((o == null ? void 0 : o.message) || "Failed to load PDF");
  }, []);
  return m ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : i ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: u, className: `w-full ${s}`.trim(), children: /* @__PURE__ */ L(
    O,
    {
      file: r,
      onLoadSuccess: $,
      onLoadError: F,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        l === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${s}`.trim(),
            style: { minHeight: `${C}px` },
            children: /* @__PURE__ */ e(R, { pageNumber: 1, width: n, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        l > 1 && /* @__PURE__ */ e(
          M,
          {
            width: N,
            height: C,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": a || "Flipbook",
            children: Array.from({ length: l }, (o, g) => /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(R, { pageNumber: g + 1, width: N, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, g))
          },
          `${N}-${C}`
        )
      ]
    }
  ) });
}, X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q
}, Symbol.toStringTag, { value: "Module" }));
export {
  re as default
};
