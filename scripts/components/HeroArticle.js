import { jsx as e, jsxs as L } from "react/jsx-runtime";
import { lazy as _, Suspense as z, useState as C, useRef as O, useEffect as R, useCallback as A, forwardRef as B } from "react";
import W from "lottie-react";
const E = _(() => Promise.resolve().then(() => I));
function Z({
  className: l = "",
  imagePosition: i = "bottom",
  // 'top' | 'bottom'
  title: u = "",
  description: w = "",
  date: t = "",
  categories: m = [],
  backgroundImage: f = "",
  media: s = null,
  // `Media` component object
  id: v = "",
  // Ignore anything in the props, it should not be part of the integration
  ...n
}) {
  const p = () => i && ["top", "bottom"].includes(i) ? i : "bottom", N = () => p() === "top", j = () => p() === "bottom", P = [
    "hero-article relative w-full h-auto",
    l
  ].filter(Boolean).join(" "), d = "relative max-w-full z-2 gap-0", c = "w-full max-w-[1000px] flex flex-col gap-hero-text--spacing-y px-hero-padding-x py-hero-padding-y relative z-2 max-[600px]:max-w-full", h = "font-normal m-0 text-display-xl leading-display-xl", $ = "m-0 max-w-[600px] font-normal text-body-large leading-body-large", b = "flex flex-wrap gap-10 font-normal text-sm list-none p-0 m-0", k = typeof t == "string" && /^\d{4}-\d{2}-\d{2}$/.test(t), a = () => [
    "relative w-full aspect-[1392/566] p-hero-image--padding max-[600px]:aspect-[313/310]",
    (N(), "")
  ].filter(Boolean).join(" "), o = () => (s || f) && /* @__PURE__ */ e("div", { className: a(), children: s ? /* @__PURE__ */ e(z, { fallback: null, children: /* @__PURE__ */ e(
    E,
    {
      media: s.type || "image",
      aspect: "default",
      imageUrl: s.imageUrl || f,
      videoUrl: s.videoUrl,
      lottieUrl: s.lottieUrl,
      lottieData: s.lottieData,
      iframeUrl: s.iframeUrl,
      title: s.title || f || "",
      className: "w-full h-full min-h-auto! object-cover object-center block rounded-20"
    }
  ) }) : /* @__PURE__ */ e("img", { src: f, alt: u || f, className: "w-full h-full object-cover object-center block rounded-20" }) });
  return /* @__PURE__ */ e("article", { className: P, id: v, children: /* @__PURE__ */ L("div", { children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: "absolute inset-0 z-0"
      }
    ),
    /* @__PURE__ */ L("div", { className: d, children: [
      N() && /* @__PURE__ */ e(o, {}),
      /* @__PURE__ */ L("div", { className: c, children: [
        u && /* @__PURE__ */ e("h1", { className: h, children: u }),
        w && /* @__PURE__ */ e("p", { className: $, children: w }),
        t && (k ? /* @__PURE__ */ e("time", { className: "font-normal text-sm", dateTime: t, children: t }) : /* @__PURE__ */ e("p", { className: "font-normal text-sm", children: t })),
        m && m.length > 0 && /* @__PURE__ */ e("ul", { "aria-label": "Categories", className: b, children: m.map((r, g) => /* @__PURE__ */ e("li", { children: r }, g)) })
      ] }),
      j() && /* @__PURE__ */ e(o, {})
    ] })
  ] }) });
}
const H = _(() => Promise.resolve().then(() => J)), V = ({
  media: l = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: i = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: u = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: w,
  videoUrl: t,
  lottieUrl: m,
  lottieData: f,
  iframeUrl: s,
  flipbookUrl: v,
  title: n,
  className: p = ""
}) => {
  var r;
  const N = typeof window < "u" && window.location.origin.indexOf("author") > -1, j = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, d = `relative w-full h-full ${i === "square" ? "aspect-square" : i === "rectangle" ? "aspect-[4/3]" : l === "video" ? "aspect-video" : ""}`.trim(), c = i === "default" ? `w-full h-full ${p}`.trim() : `absolute inset-0 w-full h-full ${p}`.trim(), h = "w-full h-full", $ = i === "default" ? `${c}`.trim() : c, b = u === "contain" ? "object-contain" : "object-cover", k = u === "contain" ? "xMidYMid meet" : "xMidYMid slice", a = `relative w-full ${p}`.trim(), o = "w-full min-h-[280px]";
  switch (l) {
    case "image":
      if (w)
        return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e(
          "img",
          {
            src: w,
            alt: n || "Media image",
            className: `${b} ${c}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (t) {
        const g = t.includes("youtube.com/watch") || t.includes("youtu.be/");
        let y = t;
        g && (y = `https://www.youtube.com/embed/${t.includes("youtu.be/") ? t.split("youtu.be/")[1].split("?")[0] : (r = t.split("v=")[1]) == null ? void 0 : r.split("&")[0]}`);
        const T = (() => {
          if (!g) return y;
          try {
            const x = new URL(y);
            return x.searchParams.set("autoplay", "0"), x.searchParams.set("mute", "0"), x.searchParams.set("playsinline", "1"), x.searchParams.set("controls", "1"), x.searchParams.set("rel", "0"), x.toString();
          } catch {
            return y.includes("?") ? y.includes("autoplay=") ? y : `${y}&autoplay=0` : `${y}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: d, children: g ? /* @__PURE__ */ e(
          "iframe",
          {
            src: T,
            title: n || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${c} ${b}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${c} ${b}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: n || "Video player",
            children: /* @__PURE__ */ e("source", { src: t })
          }
        ) });
      }
      break;
    case "lottie":
      if (f)
        return N ? /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": n || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${c}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: d,
            role: "img",
            "aria-label": n || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${c} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              W,
              {
                animationData: f,
                loop: !j,
                autoplay: !j,
                className: h,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: k }
              }
            ) })
          }
        );
      if (m)
        return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (s)
        return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: s,
            title: n || "Iframe content",
            frameBorder: "0",
            className: `${$} ${b}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (v)
        return N ? /* @__PURE__ */ e("div", { className: a, role: "img", "aria-label": n || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${o}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e(z, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(H, { pdfUrl: v, title: n, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${i === "default" ? "" : "absolute inset-0"}`.trim(), children: l ? `${l.charAt(0).toUpperCase() + l.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: V
}, Symbol.toStringTag, { value: "Module" }));
let F, D, S, M;
const Y = async () => {
  if (!M) {
    const l = await import("react-pdf");
    M = l.pdfjs, D = l.Document, S = l.Page, M.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${M.version}/build/pdf.worker.min.mjs`;
  }
}, q = async () => {
  F || (F = (await import("react-pageflip")).default);
}, U = B(({ children: l }, i) => /* @__PURE__ */ e("div", { ref: i, className: "w-full h-full overflow-hidden", children: l })), G = ({ pdfUrl: l, title: i, width: u = 280, height: w = 280, className: t = "" }) => {
  const [m, f] = C(0), [s, v] = C(null), [n, p] = C(!0), [N, j] = C(w / u), [P, d] = C(0), c = O(null);
  R(() => {
    Promise.all([Y(), q()]).then(() => p(!1)).catch(() => {
      v("Failed to load flipbook");
    });
  }, []), R(() => {
    const a = c.current;
    if (!a) return;
    const o = new ResizeObserver(([r]) => {
      const g = Math.floor(r.contentRect.width);
      g > 0 && d(g);
    });
    return o.observe(a), () => o.disconnect();
  }, [n]);
  const h = P > 0 ? Math.floor(P / 2) : Math.floor(u / 2), $ = Math.round(h * N), b = A(async (a) => {
    try {
      const r = (await a.getPage(1)).getViewport({ scale: 1 });
      r != null && r.width && (r != null && r.height) && j(r.height / r.width);
    } catch {
    }
    f(a.numPages || 0);
  }, []), k = A((a) => {
    v((a == null ? void 0 : a.message) || "Failed to load PDF");
  }, []);
  return s ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : n ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: c, className: `w-full ${t}`.trim(), children: /* @__PURE__ */ L(
    D,
    {
      file: l,
      onLoadSuccess: b,
      onLoadError: k,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        m === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${t}`.trim(),
            style: { minHeight: `${$}px` },
            children: /* @__PURE__ */ e(S, { pageNumber: 1, width: u, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        m > 1 && /* @__PURE__ */ e(
          F,
          {
            width: h,
            height: $,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": i || "Flipbook",
            children: Array.from({ length: m }, (a, o) => /* @__PURE__ */ e(U, { children: /* @__PURE__ */ e(S, { pageNumber: o + 1, width: h, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, o))
          },
          `${h}-${$}`
        )
      ]
    }
  ) });
}, J = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G
}, Symbol.toStringTag, { value: "Module" }));
export {
  Z as default
};
