import { jsx as e, jsxs as S } from "react/jsx-runtime";
import { lazy as I, Suspense as T, useState as k, useRef as D, useEffect as A, useCallback as R, forwardRef as W } from "react";
import O from "lottie-react";
const E = I(() => Promise.resolve().then(() => G)), H = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: s = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: i = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: o,
  videoUrl: a,
  lottieUrl: d,
  lottieData: h,
  iframeUrl: y,
  flipbookUrl: g,
  title: l,
  className: u = ""
}) => {
  var n;
  const x = typeof window < "u" && window.location.origin.indexOf("author") > -1, f = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, c = `relative w-full h-full ${s === "square" ? "aspect-square" : s === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), m = s === "default" ? `w-full h-full ${u}`.trim() : `absolute inset-0 w-full h-full ${u}`.trim(), v = "w-full h-full", j = s === "default" ? `${m}`.trim() : m, N = i === "contain" ? "object-contain" : "object-cover", L = i === "contain" ? "xMidYMid meet" : "xMidYMid slice", r = `relative w-full ${u}`.trim(), p = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (o)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
          "img",
          {
            src: o,
            alt: l || "Media image",
            className: `${N} ${m}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (a) {
        const $ = a.includes("youtube.com/watch") || a.includes("youtu.be/");
        let b = a;
        $ && (b = `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1].split("?")[0] : (n = a.split("v=")[1]) == null ? void 0 : n.split("&")[0]}`);
        const _ = (() => {
          if (!$) return b;
          try {
            const w = new URL(b);
            return w.searchParams.set("autoplay", "0"), w.searchParams.set("mute", "0"), w.searchParams.set("playsinline", "1"), w.searchParams.set("controls", "1"), w.searchParams.set("rel", "0"), w.toString();
          } catch {
            return b.includes("?") ? b.includes("autoplay=") ? b : `${b}&autoplay=0` : `${b}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: c, children: $ ? /* @__PURE__ */ e(
          "iframe",
          {
            src: _,
            title: l || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${m} ${N}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${m} ${N}`.trim(),
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
      if (h)
        return x ? /* @__PURE__ */ e("div", { className: c, role: "img", "aria-label": l || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${m}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: c,
            role: "img",
            "aria-label": l || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${m} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              O,
              {
                animationData: h,
                loop: !f,
                autoplay: !f,
                className: v,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: L }
              }
            ) })
          }
        );
      if (d)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (y)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: y,
            title: l || "Iframe content",
            frameBorder: "0",
            className: `${j} ${N}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (g)
        return x ? /* @__PURE__ */ e("div", { className: r, role: "img", "aria-label": l || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${p}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: r, children: /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(T, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(E, { pdfUrl: g, title: l, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${s === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function V({
  media: t,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: s,
  description: i,
  source: o,
  // optional small caption/source line shown under the description (e.g. "Giftpro Client Survey")
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: a = "center",
  // 'center' | 'left' | 'right'
  fontSize: d = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const h = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, y = {
    left: "start",
    right: "end",
    center: "center"
  }, g = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, l = ["center", "left", "right"].includes(a) ? a : "center", u = ["sm", "md", "lg", "xl"].includes(d) ? d : "sm", x = h[u], f = y[l], P = g[l], c = t ? {
    media: t.media || "image",
    aspect: t.aspect || "square",
    imageUrl: t.imageUrl,
    videoUrl: t.videoUrl,
    lottieUrl: t.lottieUrl,
    lottieData: t.lottieData,
    iframeUrl: t.iframeUrl,
    title: t.title || i || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ S(
    "div",
    {
      className: `flex flex-col items-${f} justify-center gap-stats-spacing-y`,
      style: { textAlign: l },
      children: [
        t && c && /* @__PURE__ */ e("div", { className: `flex flex-col items-${f} justify-${f}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${P}`, children: /* @__PURE__ */ e(H, { ...c }) }) }),
        s && /* @__PURE__ */ e("div", { className: `${x} font-normal`, children: s }),
        (i || o) && /* @__PURE__ */ S("div", { className: "flex flex-col gap-[var(--spacing-16)] w-full", children: [
          i && /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: i } }),
          o && /* @__PURE__ */ e("p", { className: "text-ui-label-small font-normal m-0", children: o })
        ] })
      ]
    }
  );
}
function X({
  stats: t = [],
  statTextAlign: s = "center",
  // 'left' | 'center' | 'right'
  statFontSize: i = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  id: o = "",
  className: a = ""
}) {
  const d = (l) => {
    const { media: u, statMedia: x, ...f } = l;
    return {
      ...f,
      media: x,
      textAlign: l.textAlign || s,
      fontSize: l.fontSize || i
    };
  };
  if (!t || t.length === 0)
    return null;
  const h = t.slice(0, 4), y = Math.min(h.length, 4), g = {
    1: "w-full",
    2: "w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)]",
    3: "w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:w-[calc((100%-2*var(--spacing-section-spacing-x))/3)]",
    4: "w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:w-[calc((100%-3*var(--spacing-section-spacing-x))/4)]"
  }[y];
  return /* @__PURE__ */ e("div", { className: "container", id: o, children: /* @__PURE__ */ e(
    "div",
    {
      className: `flex flex-wrap justify-center gap-section-spacing-x ${a}`.trim(),
      children: h.map((l, u) => /* @__PURE__ */ e(
        "div",
        {
          className: `p-stats-padding ${g}`,
          ...l.attributes ?? {},
          children: /* @__PURE__ */ e(V, { ...d(l) })
        },
        u
      ))
    }
  ) });
}
let C, z, F, M;
const q = async () => {
  if (!M) {
    const t = await import("react-pdf");
    M = t.pdfjs, z = t.Document, F = t.Page, M.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${M.version}/build/pdf.worker.min.mjs`;
  }
}, B = async () => {
  C || (C = (await import("react-pageflip")).default);
}, Y = W(({ children: t }, s) => /* @__PURE__ */ e("div", { ref: s, className: "w-full h-full overflow-hidden", children: t })), U = ({ pdfUrl: t, title: s, width: i = 280, height: o = 280, className: a = "" }) => {
  const [d, h] = k(0), [y, g] = k(null), [l, u] = k(!0), [x, f] = k(o / i), [P, c] = k(0), m = D(null);
  A(() => {
    Promise.all([q(), B()]).then(() => u(!1)).catch(() => {
      g("Failed to load flipbook");
    });
  }, []), A(() => {
    const r = m.current;
    if (!r) return;
    const p = new ResizeObserver(([n]) => {
      const $ = Math.floor(n.contentRect.width);
      $ > 0 && c($);
    });
    return p.observe(r), () => p.disconnect();
  }, [l]);
  const v = P > 0 ? Math.floor(P / 2) : Math.floor(i / 2), j = Math.round(v * x), N = R(async (r) => {
    try {
      const n = (await r.getPage(1)).getViewport({ scale: 1 });
      n != null && n.width && (n != null && n.height) && f(n.height / n.width);
    } catch {
    }
    h(r.numPages || 0);
  }, []), L = R((r) => {
    g((r == null ? void 0 : r.message) || "Failed to load PDF");
  }, []);
  return y ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : l ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: m, className: `w-full ${a}`.trim(), children: /* @__PURE__ */ S(
    z,
    {
      file: t,
      onLoadSuccess: N,
      onLoadError: L,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        d === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${a}`.trim(),
            style: { minHeight: `${j}px` },
            children: /* @__PURE__ */ e(F, { pageNumber: 1, width: i, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        d > 1 && /* @__PURE__ */ e(
          C,
          {
            width: v,
            height: j,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": s || "Flipbook",
            children: Array.from({ length: d }, (r, p) => /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(F, { pageNumber: p + 1, width: v, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, p))
          },
          `${v}-${j}`
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
