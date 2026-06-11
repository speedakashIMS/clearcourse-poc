import { jsx as e, jsxs as R } from "react/jsx-runtime";
import { lazy as I, Suspense as T, useState as k, useRef as D, useEffect as F, useCallback as A, forwardRef as W } from "react";
import O from "lottie-react";
const E = I(() => Promise.resolve().then(() => G)), H = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: a = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: n = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: l,
  lottieUrl: p,
  lottieData: h,
  iframeUrl: y,
  flipbookUrl: c,
  title: s,
  className: o = ""
}) => {
  var r;
  const d = typeof window < "u" && window.location.origin.indexOf("author") > -1, b = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, g = `relative w-full h-full ${a === "square" ? "aspect-square" : a === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), u = a === "default" ? `w-full h-full ${o}`.trim() : `absolute inset-0 w-full h-full ${o}`.trim(), N = "w-full h-full", j = a === "default" ? `${u}`.trim() : u, $ = n === "contain" ? "object-contain" : "object-cover", L = n === "contain" ? "xMidYMid meet" : "xMidYMid slice", i = `relative w-full ${o}`.trim(), f = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (m)
        return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(
          "img",
          {
            src: m,
            alt: s || "Media image",
            className: `${$} ${u}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (l) {
        const P = l.includes("youtube.com/watch") || l.includes("youtu.be/");
        let x = l;
        P && (x = `https://www.youtube.com/embed/${l.includes("youtu.be/") ? l.split("youtu.be/")[1].split("?")[0] : (r = l.split("v=")[1]) == null ? void 0 : r.split("&")[0]}`);
        const _ = (() => {
          if (!P) return x;
          try {
            const w = new URL(x);
            return w.searchParams.set("autoplay", "0"), w.searchParams.set("mute", "0"), w.searchParams.set("playsinline", "1"), w.searchParams.set("controls", "1"), w.searchParams.set("rel", "0"), w.toString();
          } catch {
            return x.includes("?") ? x.includes("autoplay=") ? x : `${x}&autoplay=0` : `${x}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: g, children: P ? /* @__PURE__ */ e(
          "iframe",
          {
            src: _,
            title: s || "Video player",
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
            title: s || "Video player",
            children: /* @__PURE__ */ e("source", { src: l })
          }
        ) });
      }
      break;
    case "lottie":
      if (h)
        return d ? /* @__PURE__ */ e("div", { className: g, role: "img", "aria-label": s || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${u}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: g,
            role: "img",
            "aria-label": s || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${u} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              O,
              {
                animationData: h,
                loop: !b,
                autoplay: !b,
                className: N,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: L }
              }
            ) })
          }
        );
      if (p)
        return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (y)
        return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: y,
            title: s || "Iframe content",
            frameBorder: "0",
            className: `${j} ${$}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (c)
        return d ? /* @__PURE__ */ e("div", { className: i, role: "img", "aria-label": s || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${f}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: i, children: /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e(T, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(E, { pdfUrl: c, title: s, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${a === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function V({
  media: t,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: a,
  description: n,
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: m = "center",
  // 'center' | 'left' | 'right'
  fontSize: l = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const p = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, h = {
    left: "start",
    right: "end",
    center: "center"
  }, y = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, c = ["center", "left", "right"].includes(m) ? m : "center", s = ["sm", "md", "lg", "xl"].includes(l) ? l : "sm", o = p[s], d = h[c], b = y[c], v = t ? {
    media: t.media || "image",
    aspect: t.aspect || "square",
    imageUrl: t.imageUrl,
    videoUrl: t.videoUrl,
    lottieUrl: t.lottieUrl,
    lottieData: t.lottieData,
    iframeUrl: t.iframeUrl,
    title: t.title || n || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ R(
    "div",
    {
      className: `flex flex-col items-${d} justify-center gap-stats-spacing-y`,
      style: { textAlign: c },
      children: [
        t && v && /* @__PURE__ */ e("div", { className: `flex flex-col items-${d} justify-${d}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${b}`, children: /* @__PURE__ */ e(H, { ...v }) }) }),
        a && /* @__PURE__ */ e("div", { className: `${o} font-normal`, children: a }),
        n && /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: n } })
      ]
    }
  );
}
function X({
  stats: t = [],
  statTextAlign: a = "center",
  // 'left' | 'center' | 'right'
  statFontSize: n = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  id: m = "",
  className: l = ""
}) {
  const p = (s) => {
    const { media: o, statMedia: d, ...b } = s;
    return {
      ...b,
      media: d,
      textAlign: s.textAlign || a,
      fontSize: s.fontSize || n
    };
  };
  if (!t || t.length === 0)
    return null;
  const h = t.slice(0, 4), y = Math.min(h.length, 4), c = {
    1: "w-full",
    2: "w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)]",
    3: "w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:w-[calc((100%-2*var(--spacing-section-spacing-x))/3)]",
    4: "w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:w-[calc((100%-3*var(--spacing-section-spacing-x))/4)]"
  }[y];
  return /* @__PURE__ */ e("div", { className: "container", id: m, children: /* @__PURE__ */ e(
    "div",
    {
      className: `flex flex-wrap justify-center gap-section-spacing-x ${l}`.trim(),
      children: h.map((s, o) => /* @__PURE__ */ e(
        "div",
        {
          className: `p-stats-padding ${c}`,
          ...s.attributes ?? {},
          children: /* @__PURE__ */ e(V, { ...p(s) })
        },
        o
      ))
    }
  ) });
}
let S, z, C, M;
const q = async () => {
  if (!M) {
    const t = await import("react-pdf");
    M = t.pdfjs, z = t.Document, C = t.Page, M.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${M.version}/build/pdf.worker.min.mjs`;
  }
}, B = async () => {
  S || (S = (await import("react-pageflip")).default);
}, Y = W(({ children: t }, a) => /* @__PURE__ */ e("div", { ref: a, className: "w-full h-full overflow-hidden", children: t })), U = ({ pdfUrl: t, title: a, width: n = 280, height: m = 280, className: l = "" }) => {
  const [p, h] = k(0), [y, c] = k(null), [s, o] = k(!0), [d, b] = k(m / n), [v, g] = k(0), u = D(null);
  F(() => {
    Promise.all([q(), B()]).then(() => o(!1)).catch(() => {
      c("Failed to load flipbook");
    });
  }, []), F(() => {
    const i = u.current;
    if (!i) return;
    const f = new ResizeObserver(([r]) => {
      const P = Math.floor(r.contentRect.width);
      P > 0 && g(P);
    });
    return f.observe(i), () => f.disconnect();
  }, [s]);
  const N = v > 0 ? Math.floor(v / 2) : Math.floor(n / 2), j = Math.round(N * d), $ = A(async (i) => {
    try {
      const r = (await i.getPage(1)).getViewport({ scale: 1 });
      r != null && r.width && (r != null && r.height) && b(r.height / r.width);
    } catch {
    }
    h(i.numPages || 0);
  }, []), L = A((i) => {
    c((i == null ? void 0 : i.message) || "Failed to load PDF");
  }, []);
  return y ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : s ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: u, className: `w-full ${l}`.trim(), children: /* @__PURE__ */ R(
    z,
    {
      file: t,
      onLoadSuccess: $,
      onLoadError: L,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        p === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${l}`.trim(),
            style: { minHeight: `${j}px` },
            children: /* @__PURE__ */ e(C, { pageNumber: 1, width: n, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        p > 1 && /* @__PURE__ */ e(
          S,
          {
            width: N,
            height: j,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": a || "Flipbook",
            children: Array.from({ length: p }, (i, f) => /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(C, { pageNumber: f + 1, width: N, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, f))
          },
          `${N}-${j}`
        )
      ]
    }
  ) });
}, G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U
}, Symbol.toStringTag, { value: "Module" }));
export {
  X as default
};
