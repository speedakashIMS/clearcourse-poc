import { jsx as e, jsxs as I } from "react/jsx-runtime";
import { lazy as _, Suspense as z, useState as v, useRef as O, useEffect as S, useCallback as A, forwardRef as T } from "react";
import W from "lottie-react";
const E = _(() => Promise.resolve().then(() => J)), V = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: r = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: o = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: n,
  videoUrl: a,
  lottieUrl: y,
  lottieData: N,
  iframeUrl: $,
  flipbookUrl: g,
  title: l,
  className: w = ""
}) => {
  var i;
  const k = typeof window < "u" && window.location.origin.indexOf("author") > -1, P = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, u = `relative w-full h-full ${r === "square" ? "aspect-square" : r === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), c = r === "default" ? `w-full h-full ${w}`.trim() : `absolute inset-0 w-full h-full ${w}`.trim(), p = "w-full h-full", x = r === "default" ? `${c}`.trim() : c, h = o === "contain" ? "object-contain" : "object-cover", M = o === "contain" ? "xMidYMid meet" : "xMidYMid slice", s = `relative w-full ${w}`.trim(), d = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (n)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e(
          "img",
          {
            src: n,
            alt: l || "Media image",
            className: `${h} ${c}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (a) {
        const b = a.includes("youtube.com/watch") || a.includes("youtu.be/");
        let f = a;
        b && (f = `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1].split("?")[0] : (i = a.split("v=")[1]) == null ? void 0 : i.split("&")[0]}`);
        const D = (() => {
          if (!b) return f;
          try {
            const m = new URL(f);
            return m.searchParams.set("autoplay", "0"), m.searchParams.set("mute", "0"), m.searchParams.set("playsinline", "1"), m.searchParams.set("controls", "1"), m.searchParams.set("rel", "0"), m.toString();
          } catch {
            return f.includes("?") ? f.includes("autoplay=") ? f : `${f}&autoplay=0` : `${f}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: u, children: b ? /* @__PURE__ */ e(
          "iframe",
          {
            src: D,
            title: l || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${c} ${h}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${c} ${h}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: l || "Video player",
            children: /* @__PURE__ */ e("source", { src: a })
          }
        ) });
      }
      break;
    case "lottie":
      if (N)
        return k ? /* @__PURE__ */ e("div", { className: u, role: "img", "aria-label": l || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${c}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: u,
            role: "img",
            "aria-label": l || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${c} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              W,
              {
                animationData: N,
                loop: !P,
                autoplay: !P,
                className: p,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: M }
              }
            ) })
          }
        );
      if (y)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if ($)
        return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: $,
            title: l || "Iframe content",
            frameBorder: "0",
            className: `${x} ${h}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (g)
        return k ? /* @__PURE__ */ e("div", { className: s, role: "img", "aria-label": l || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${d}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e(z, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(E, { pdfUrl: g, title: l, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${r === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, B = ({
  mediaProps: t = {},
  // props for Media molecule
  className: r = "",
  attributes: o = {},
  ...n
}) => /* @__PURE__ */ e("div", { className: `${r} w-full`, ...n, ...o ?? {}, children: /* @__PURE__ */ e(V, { ...t }) }), Z = ({
  items: t = [],
  // [{ mediaProps }]
  className: r = "",
  ...o
}) => /* @__PURE__ */ e("div", { className: `container ${r}`, ...o, children: /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-section-spacing-x", children: t.map((n, a) => /* @__PURE__ */ e(
  "div",
  {
    className: "basis-[160px] lg:basis-[180px] xl:basis-[200px] flex items-center justify-center",
    ...n.attributes,
    children: /* @__PURE__ */ e(B, { mediaProps: n.mediaProps })
  },
  n.key ?? a
)) }) });
let F, R, C, j;
const H = async () => {
  if (!j) {
    const t = await import("react-pdf");
    j = t.pdfjs, R = t.Document, C = t.Page, j.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${j.version}/build/pdf.worker.min.mjs`;
  }
}, Y = async () => {
  F || (F = (await import("react-pageflip")).default);
}, q = T(({ children: t }, r) => /* @__PURE__ */ e("div", { ref: r, className: "w-full h-full overflow-hidden", children: t })), G = ({ pdfUrl: t, title: r, width: o = 280, height: n = 280, className: a = "" }) => {
  const [y, N] = v(0), [$, g] = v(null), [l, w] = v(!0), [k, P] = v(n / o), [L, u] = v(0), c = O(null);
  S(() => {
    Promise.all([H(), Y()]).then(() => w(!1)).catch(() => {
      g("Failed to load flipbook");
    });
  }, []), S(() => {
    const s = c.current;
    if (!s) return;
    const d = new ResizeObserver(([i]) => {
      const b = Math.floor(i.contentRect.width);
      b > 0 && u(b);
    });
    return d.observe(s), () => d.disconnect();
  }, [l]);
  const p = L > 0 ? Math.floor(L / 2) : Math.floor(o / 2), x = Math.round(p * k), h = A(async (s) => {
    try {
      const i = (await s.getPage(1)).getViewport({ scale: 1 });
      i != null && i.width && (i != null && i.height) && P(i.height / i.width);
    } catch {
    }
    N(s.numPages || 0);
  }, []), M = A((s) => {
    g((s == null ? void 0 : s.message) || "Failed to load PDF");
  }, []);
  return $ ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : l ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: c, className: `w-full ${a}`.trim(), children: /* @__PURE__ */ I(
    R,
    {
      file: t,
      onLoadSuccess: h,
      onLoadError: M,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        y === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${a}`.trim(),
            style: { minHeight: `${x}px` },
            children: /* @__PURE__ */ e(C, { pageNumber: 1, width: o, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        y > 1 && /* @__PURE__ */ e(
          F,
          {
            width: p,
            height: x,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": r || "Flipbook",
            children: Array.from({ length: y }, (s, d) => /* @__PURE__ */ e(q, { children: /* @__PURE__ */ e(C, { pageNumber: d + 1, width: p, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, d))
          },
          `${p}-${x}`
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
