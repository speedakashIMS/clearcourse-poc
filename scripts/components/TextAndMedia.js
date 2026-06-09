import { jsx as e, jsxs as j } from "react/jsx-runtime";
import * as F from "react";
import { lazy as O, Suspense as T, useState as P, useRef as D, useEffect as L, useCallback as z, forwardRef as V } from "react";
import W from "lottie-react";
const H = ({
  text: t = "Button",
  href: s = void 0,
  variant: c = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: m = "btn-md",
  // btn-sm , btn-md
  className: n = "",
  disabled: p = !1,
  onClick: f = void 0,
  attributes: d = {},
  ...g
}) => {
  const b = (y) => {
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
      default:
        return "btn-light";
    }
  }, r = (y) => {
    switch (y) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, x = `btn ${b(c)} ${r(m)} ${n}`.trim();
  return s ? /* @__PURE__ */ e(
    "a",
    {
      href: s,
      className: x,
      onClick: f,
      ...g,
      ...d ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: g.type || "button",
      className: x,
      disabled: p,
      onClick: f,
      ...g,
      ...d ?? {},
      children: t
    }
  );
}, Y = O(() => Promise.resolve().then(() => X)), I = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: s = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: c = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: n,
  lottieUrl: p,
  lottieData: f,
  iframeUrl: d,
  flipbookUrl: g,
  title: a,
  className: b = ""
}) => {
  var l;
  const r = typeof window < "u" && window.location.origin.indexOf("author") > -1, x = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, h = `relative w-full h-full ${s === "square" ? "aspect-square" : s === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), o = s === "default" ? `w-full h-full ${b}`.trim() : `absolute inset-0 w-full h-full ${b}`.trim(), w = "w-full h-full", k = s === "default" ? `${o}`.trim() : o, v = c === "contain" ? "object-contain" : "object-cover", M = c === "contain" ? "xMidYMid meet" : "xMidYMid slice", u = `relative w-full ${b}`.trim(), i = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (m)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(
          "img",
          {
            src: m,
            alt: a || "Media image",
            className: `${v} ${o}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (n) {
        const C = n.includes("youtube.com/watch") || n.includes("youtu.be/");
        let N = n;
        C && (N = `https://www.youtube.com/embed/${n.includes("youtu.be/") ? n.split("youtu.be/")[1].split("?")[0] : (l = n.split("v=")[1]) == null ? void 0 : l.split("&")[0]}`);
        const E = (() => {
          if (!C) return N;
          try {
            const $ = new URL(N);
            return $.searchParams.set("autoplay", "0"), $.searchParams.set("mute", "0"), $.searchParams.set("playsinline", "1"), $.searchParams.set("controls", "1"), $.searchParams.set("rel", "0"), $.toString();
          } catch {
            return N.includes("?") ? N.includes("autoplay=") ? N : `${N}&autoplay=0` : `${N}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: h, children: C ? /* @__PURE__ */ e(
          "iframe",
          {
            src: E,
            title: a || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${o} ${v}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${o} ${v}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: a || "Video player",
            children: /* @__PURE__ */ e("source", { src: n })
          }
        ) });
      }
      break;
    case "lottie":
      if (f)
        return r ? /* @__PURE__ */ e("div", { className: h, role: "img", "aria-label": a || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${o}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: h,
            role: "img",
            "aria-label": a || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${o} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              W,
              {
                animationData: f,
                loop: !x,
                autoplay: !x,
                className: w,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: M }
              }
            ) })
          }
        );
      if (p)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (d)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: d,
            title: a || "Iframe content",
            frameBorder: "0",
            className: `${k} ${v}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (g)
        return r ? /* @__PURE__ */ e("div", { className: u, role: "img", "aria-label": a || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${i}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: i, children: /* @__PURE__ */ e(T, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(Y, { pdfUrl: g, title: a, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${s === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function q({
  title: t,
  titleId: s,
  ...c
}, m) {
  return /* @__PURE__ */ F.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: m,
    "aria-labelledby": s
  }, c), t ? /* @__PURE__ */ F.createElement("title", {
    id: s
  }, t) : null, /* @__PURE__ */ F.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const Z = /* @__PURE__ */ F.forwardRef(q), _ = ({
  text: t,
  useIcon: s = !0,
  number: c,
  stacked: m = !1,
  size: n = "medium",
  // 'small' | 'medium' | 'large'
  className: p = "",
  attributes: f = {}
}) => {
  const d = !!m, a = { small: 16, medium: 24, large: 32 }[n] || 24, b = { width: `${a}px`, height: `${a}px` }, r = d ? "flex-col items-start" : "flex-row items-start", x = d ? "gap-8" : "gap-12", y = d ? "" : "mt-4", h = s ? /* @__PURE__ */ e(Z, { className: `flex-shrink-0 ${y}`.trim(), style: b }) : /* @__PURE__ */ e(
    "span",
    {
      className: `font-semibold flex-shrink-0 leading-none ${y}`.trim(),
      style: { fontSize: `${a}px` },
      children: c
    }
  ), o = /* @__PURE__ */ j("div", { className: `flex ${r} ${x} ${p}`.trim(), children: [
    h,
    /* @__PURE__ */ e("span", { className: "text-body-large", children: t })
  ] });
  return s ? /* @__PURE__ */ e("li", { ...f || {}, children: o }) : /* @__PURE__ */ e("div", { ...f || {}, children: o });
}, se = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  imageUrl: s,
  videoUrl: c,
  lottieUrl: m,
  lottieData: n,
  iframeUrl: p,
  /** When true, media sits in a fixed aspect frame and uses object-contain so it fits without cropping. */
  mediaFramed: f = !1,
  flipbookUrl: d,
  mediaPosition: g = "right",
  // 'left' | 'right'
  richText: a = "",
  richTextAlign: b = "left",
  // 'left' | 'center' | 'right'
  valueList: r = null,
  // { items: [text, number?][], stacked, size: 'small'|'medium'|'large', useIcon }
  buttonText: x,
  buttonHref: y,
  buttonVariant: h = "dark",
  buttonOnClick: o,
  className: w = "",
  ...k
}) => {
  const v = `
    container
    flex
    flex-col
    gap-[var(--spacing-section-spacing-x)]
    flex-col-reverse
    xl:flex-row
    xl:items-center
    ${g === "left" ? "xl:flex-row-reverse" : ""}
    ${w}
  `.trim().replace(/\s+/g, " ");
  return /* @__PURE__ */ j("div", { className: v, ...k, children: [
    /* @__PURE__ */ e("div", { className: "w-full xl:w-1/2 flex items-center", children: /* @__PURE__ */ j("div", { className: "px-textmedia-text--padding-x py-textmedia-text--padding-y space-y-textmedia-btn-text--spacing-y", children: [
      /* @__PURE__ */ j("div", { children: [
        /* @__PURE__ */ e("div", { className: "", children: a && /* @__PURE__ */ e(
          "div",
          {
            dangerouslySetInnerHTML: { __html: a },
            className: `wysiwyg pb-textmedia-text--spacing-y ${b === "center" ? "text-center" : b === "right" ? "text-right" : "text-left"}`.trim()
          }
        ) }),
        r && Array.isArray(r.items) && r.items.length > 0 && (r.useIcon !== !1 ? /* @__PURE__ */ e("ul", { className: "mt-24 space-y-12", children: r.items.map((i, l) => /* @__PURE__ */ e(
          _,
          {
            text: i.text,
            useIcon: !0,
            number: i.number,
            stacked: r.stacked,
            size: r.size,
            attributes: i.attributes
          },
          l
        )) }) : /* @__PURE__ */ e("div", { className: "mt-24 space-y-12", children: r.items.map((i, l) => /* @__PURE__ */ e(
          _,
          {
            text: i.text,
            useIcon: !1,
            number: i.number,
            stacked: r.stacked,
            size: r.size,
            attributes: i.attributes
          },
          l
        )) }))
      ] }),
      x && /* @__PURE__ */ e("div", { className: "mt-24", children: /* @__PURE__ */ e(
        H,
        {
          text: x,
          href: y,
          variant: h,
          onClick: o
        }
      ) })
    ] }) }),
    /* @__PURE__ */ e(
      "div",
      {
        className: f ? "w-full xl:w-1/2 flex items-center justify-center" : "w-full xl:w-1/2 flex items-center",
        children: f ? /* @__PURE__ */ e("div", { className: "w-full max-w-full max-h-[min(70vh,560px)] xl:max-h-[520px] overflow-hidden rounded-[var(--spacing-textmedia-image--br)]", children: /* @__PURE__ */ e(
          I,
          {
            media: t,
            aspect: "rectangle",
            objectFit: "contain",
            imageUrl: s,
            videoUrl: c,
            lottieUrl: m,
            lottieData: n,
            iframeUrl: p,
            flipbookUrl: d
          }
        ) }) : /* @__PURE__ */ e(
          I,
          {
            media: t,
            imageUrl: s,
            videoUrl: c,
            lottieUrl: m,
            lottieData: n,
            iframeUrl: p,
            flipbookUrl: d
          }
        )
      }
    )
  ] });
};
let R, B, A, S;
const G = async () => {
  if (!S) {
    const t = await import("react-pdf");
    S = t.pdfjs, B = t.Document, A = t.Page, S.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${S.version}/build/pdf.worker.min.mjs`;
  }
}, J = async () => {
  R || (R = (await import("react-pageflip")).default);
}, K = V(({ children: t }, s) => /* @__PURE__ */ e("div", { ref: s, className: "w-full h-full overflow-hidden", children: t })), Q = ({ pdfUrl: t, title: s, width: c = 280, height: m = 280, className: n = "" }) => {
  const [p, f] = P(0), [d, g] = P(null), [a, b] = P(!0), [r, x] = P(m / c), [y, h] = P(0), o = D(null);
  L(() => {
    Promise.all([G(), J()]).then(() => b(!1)).catch(() => {
      g("Failed to load flipbook");
    });
  }, []), L(() => {
    const u = o.current;
    if (!u) return;
    const i = new ResizeObserver(([l]) => {
      const C = Math.floor(l.contentRect.width);
      C > 0 && h(C);
    });
    return i.observe(u), () => i.disconnect();
  }, [a]);
  const w = y > 0 ? Math.floor(y / 2) : Math.floor(c / 2), k = Math.round(w * r), v = z(async (u) => {
    try {
      const l = (await u.getPage(1)).getViewport({ scale: 1 });
      l != null && l.width && (l != null && l.height) && x(l.height / l.width);
    } catch {
    }
    f(u.numPages || 0);
  }, []), M = z((u) => {
    g((u == null ? void 0 : u.message) || "Failed to load PDF");
  }, []);
  return d ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : a ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: o, className: `w-full ${n}`.trim(), children: /* @__PURE__ */ j(
    B,
    {
      file: t,
      onLoadSuccess: v,
      onLoadError: M,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        p === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${n}`.trim(),
            style: { minHeight: `${k}px` },
            children: /* @__PURE__ */ e(A, { pageNumber: 1, width: c, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        p > 1 && /* @__PURE__ */ e(
          R,
          {
            width: w,
            height: k,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": s || "Flipbook",
            children: Array.from({ length: p }, (u, i) => /* @__PURE__ */ e(K, { children: /* @__PURE__ */ e(A, { pageNumber: i + 1, width: w, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, i))
          },
          `${w}-${k}`
        )
      ]
    }
  ) });
}, X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Q
}, Symbol.toStringTag, { value: "Module" }));
export {
  se as default
};
