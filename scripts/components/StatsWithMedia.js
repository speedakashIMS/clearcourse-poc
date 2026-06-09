import { jsx as e, jsxs as F } from "react/jsx-runtime";
import { lazy as I, Suspense as T, useState as j, useRef as W, useEffect as A, useCallback as R, forwardRef as _ } from "react";
import E from "lottie-react";
const O = I(() => Promise.resolve().then(() => J)), U = ({
  media: l = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: n = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: f = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: g,
  videoUrl: r,
  lottieUrl: y,
  lottieData: x,
  iframeUrl: w,
  flipbookUrl: m,
  title: s,
  className: h = ""
}) => {
  var u;
  const t = typeof window < "u" && window.location.origin.indexOf("author") > -1, i = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, a = `relative w-full h-full ${n === "square" ? "aspect-square" : n === "rectangle" ? "aspect-[4/3]" : l === "video" ? "aspect-video" : ""}`.trim(), c = n === "default" ? `w-full h-full ${h}`.trim() : `absolute inset-0 w-full h-full ${h}`.trim(), b = "w-full h-full", v = n === "default" ? `${c}`.trim() : c, k = f === "contain" ? "object-contain" : "object-cover", S = f === "contain" ? "xMidYMid meet" : "xMidYMid slice", d = `relative w-full ${h}`.trim(), p = "w-full min-h-[280px]";
  switch (l) {
    case "image":
      if (g)
        return /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e(
          "img",
          {
            src: g,
            alt: s || "Media image",
            className: `${k} ${c}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (r) {
        const M = r.includes("youtube.com/watch") || r.includes("youtu.be/");
        let N = r;
        M && (N = `https://www.youtube.com/embed/${r.includes("youtu.be/") ? r.split("youtu.be/")[1].split("?")[0] : (u = r.split("v=")[1]) == null ? void 0 : u.split("&")[0]}`);
        const B = (() => {
          if (!M) return N;
          try {
            const $ = new URL(N);
            return $.searchParams.set("autoplay", "0"), $.searchParams.set("mute", "0"), $.searchParams.set("playsinline", "1"), $.searchParams.set("controls", "1"), $.searchParams.set("rel", "0"), $.toString();
          } catch {
            return N.includes("?") ? N.includes("autoplay=") ? N : `${N}&autoplay=0` : `${N}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: a, children: M ? /* @__PURE__ */ e(
          "iframe",
          {
            src: B,
            title: s || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${c} ${k}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${c} ${k}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: s || "Video player",
            children: /* @__PURE__ */ e("source", { src: r })
          }
        ) });
      }
      break;
    case "lottie":
      if (x)
        return t ? /* @__PURE__ */ e("div", { className: a, role: "img", "aria-label": s || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${c}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: a,
            role: "img",
            "aria-label": s || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${c} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              E,
              {
                animationData: x,
                loop: !i,
                autoplay: !i,
                className: b,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: S }
              }
            ) })
          }
        );
      if (y)
        return /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (w)
        return /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: w,
            title: s || "Iframe content",
            frameBorder: "0",
            className: `${v} ${k}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (m)
        return t ? /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": s || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${p}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(T, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(O, { pdfUrl: m, title: s, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${n === "default" ? "" : "absolute inset-0"}`.trim(), children: l ? `${l.charAt(0).toUpperCase() + l.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function V({
  media: l,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: n,
  description: f,
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: g = "center",
  // 'center' | 'left' | 'right'
  fontSize: r = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const y = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, x = {
    left: "start",
    right: "end",
    center: "center"
  }, w = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, m = ["center", "left", "right"].includes(g) ? g : "center", s = ["sm", "md", "lg", "xl"].includes(r) ? r : "sm", h = y[s], t = x[m], i = w[m], o = l ? {
    media: l.media || "image",
    aspect: l.aspect || "square",
    imageUrl: l.imageUrl,
    videoUrl: l.videoUrl,
    lottieUrl: l.lottieUrl,
    lottieData: l.lottieData,
    iframeUrl: l.iframeUrl,
    title: l.title || f || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ F(
    "div",
    {
      className: `flex flex-col items-${t} justify-center gap-stats-spacing-y`,
      style: { textAlign: m },
      children: [
        l && o && /* @__PURE__ */ e("div", { className: `flex flex-col items-${t} justify-${t}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${i}`, children: /* @__PURE__ */ e(U, { ...o }) }) }),
        n && /* @__PURE__ */ e("div", { className: `${h} font-normal`, children: n }),
        f && /* @__PURE__ */ e("p", { children: f })
      ]
    }
  );
}
function Z({
  stats: l = [],
  statTextAlign: n = "center",
  // 'left' | 'center' | 'right'
  statFontSize: f = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  order: g = "stat-first",
  // 'stat-first' | 'media-first'
  id: r = "",
  className: y = ""
}) {
  const x = (t, i, o) => i.includes(t) ? t : o, w = (t) => {
    const { statAlign: i = "left" } = t;
    return x(i, ["left", "right"], "left");
  }, m = (t) => {
    const { media: i, statMedia: o, ...a } = t;
    return {
      ...a,
      media: o,
      textAlign: t.textAlign || n,
      fontSize: t.fontSize || f
    };
  }, s = (t, i) => /* @__PURE__ */ e("div", { className: `flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${i}`, children: /* @__PURE__ */ e(V, { ...m(t) }) }), h = (t, i = "") => t ? /* @__PURE__ */ e("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden bg-[#C8D4FE]", children: /* @__PURE__ */ e("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ e(
    U,
    {
      media: t.type || t.media || "image",
      aspect: "default",
      imageUrl: t.imageUrl,
      videoUrl: t.videoUrl,
      lottieUrl: t.lottieUrl,
      lottieData: t.lottieData,
      iframeUrl: t.iframeUrl,
      title: t.title || i,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null;
  return !l || l.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${y}`, id: r, children: l.map((t, i) => {
    const o = t.media, a = !!o, c = `${a ? "xl:w-1/2" : "w-full"}`, b = w(t) === "left", v = g === "media-first";
    return /* @__PURE__ */ e("div", { ...t.attributes ?? {}, children: /* @__PURE__ */ F("div", { className: "flex flex-col xl:flex-row items-stretch", children: [
      v && a && /* @__PURE__ */ e("div", { className: "w-full xl:w-1/2", children: h(o, t.description || "") }),
      b && s(t, c),
      !v && a && /* @__PURE__ */ e("div", { className: "w-full xl:w-1/2", children: h(o, t.description || "") }),
      !b && s(t, c)
    ] }) }, i);
  }) });
}
let L, z, C, P;
const q = async () => {
  if (!P) {
    const l = await import("react-pdf");
    P = l.pdfjs, z = l.Document, C = l.Page, P.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${P.version}/build/pdf.worker.min.mjs`;
  }
}, H = async () => {
  L || (L = (await import("react-pageflip")).default);
}, Y = _(({ children: l }, n) => /* @__PURE__ */ e("div", { ref: n, className: "w-full h-full overflow-hidden", children: l })), G = ({ pdfUrl: l, title: n, width: f = 280, height: g = 280, className: r = "" }) => {
  const [y, x] = j(0), [w, m] = j(null), [s, h] = j(!0), [t, i] = j(g / f), [o, a] = j(0), c = W(null);
  A(() => {
    Promise.all([q(), H()]).then(() => h(!1)).catch(() => {
      m("Failed to load flipbook");
    });
  }, []), A(() => {
    const d = c.current;
    if (!d) return;
    const p = new ResizeObserver(([u]) => {
      const M = Math.floor(u.contentRect.width);
      M > 0 && a(M);
    });
    return p.observe(d), () => p.disconnect();
  }, [s]);
  const b = o > 0 ? Math.floor(o / 2) : Math.floor(f / 2), v = Math.round(b * t), k = R(async (d) => {
    try {
      const u = (await d.getPage(1)).getViewport({ scale: 1 });
      u != null && u.width && (u != null && u.height) && i(u.height / u.width);
    } catch {
    }
    x(d.numPages || 0);
  }, []), S = R((d) => {
    m((d == null ? void 0 : d.message) || "Failed to load PDF");
  }, []);
  return w ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : s ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: c, className: `w-full ${r}`.trim(), children: /* @__PURE__ */ F(
    z,
    {
      file: l,
      onLoadSuccess: k,
      onLoadError: S,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        y === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${r}`.trim(),
            style: { minHeight: `${v}px` },
            children: /* @__PURE__ */ e(C, { pageNumber: 1, width: f, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        y > 1 && /* @__PURE__ */ e(
          L,
          {
            width: b,
            height: v,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": n || "Flipbook",
            children: Array.from({ length: y }, (d, p) => /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(C, { pageNumber: p + 1, width: b, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, p))
          },
          `${b}-${v}`
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
