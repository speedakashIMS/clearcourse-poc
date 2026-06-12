import { jsx as e, jsxs as S } from "react/jsx-runtime";
import { lazy as I, Suspense as T, useState as j, useRef as B, useEffect as A, useCallback as R, forwardRef as W } from "react";
import E from "lottie-react";
const O = I(() => Promise.resolve().then(() => J)), U = ({
  media: l = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: n = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: o = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: a,
  lottieUrl: h,
  lottieData: b,
  iframeUrl: v,
  flipbookUrl: y,
  title: r,
  className: p = ""
}) => {
  var u;
  const t = typeof window < "u" && window.location.origin.indexOf("author") > -1, i = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, s = `relative w-full h-full ${n === "square" ? "aspect-square" : n === "rectangle" ? "aspect-[4/3]" : l === "video" ? "aspect-video" : ""}`.trim(), d = n === "default" ? `w-full h-full ${p}`.trim() : `absolute inset-0 w-full h-full ${p}`.trim(), x = "w-full h-full", w = n === "default" ? `${d}`.trim() : d, M = o === "contain" ? "object-contain" : "object-cover", L = o === "contain" ? "xMidYMid meet" : "xMidYMid slice", f = `relative w-full ${p}`.trim(), g = "w-full min-h-[280px]";
  switch (l) {
    case "image":
      if (m)
        return /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e(
          "img",
          {
            src: m,
            alt: r || "Media image",
            className: `${M} ${d}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (a) {
        const k = a.includes("youtube.com/watch") || a.includes("youtu.be/");
        let N = a;
        k && (N = `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1].split("?")[0] : (u = a.split("v=")[1]) == null ? void 0 : u.split("&")[0]}`);
        const _ = (() => {
          if (!k) return N;
          try {
            const $ = new URL(N);
            return $.searchParams.set("autoplay", "0"), $.searchParams.set("mute", "0"), $.searchParams.set("playsinline", "1"), $.searchParams.set("controls", "1"), $.searchParams.set("rel", "0"), $.toString();
          } catch {
            return N.includes("?") ? N.includes("autoplay=") ? N : `${N}&autoplay=0` : `${N}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: s, children: k ? /* @__PURE__ */ e(
          "iframe",
          {
            src: _,
            title: r || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${d} ${M}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${d} ${M}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: r || "Video player",
            children: /* @__PURE__ */ e("source", { src: a })
          }
        ) });
      }
      break;
    case "lottie":
      if (b)
        return t ? /* @__PURE__ */ e("div", { className: s, role: "img", "aria-label": r || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${d}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: s,
            role: "img",
            "aria-label": r || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${d} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              E,
              {
                animationData: b,
                loop: !i,
                autoplay: !i,
                className: x,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: L }
              }
            ) })
          }
        );
      if (h)
        return /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (v)
        return /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: v,
            title: r || "Iframe content",
            frameBorder: "0",
            className: `${w} ${M}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (y)
        return t ? /* @__PURE__ */ e("div", { className: f, role: "img", "aria-label": r || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${g}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e("div", { className: g, children: /* @__PURE__ */ e(T, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(O, { pdfUrl: y, title: r, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${n === "default" ? "" : "absolute inset-0"}`.trim(), children: l ? `${l.charAt(0).toUpperCase() + l.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function V({
  media: l,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: n,
  description: o,
  source: m,
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
  fontSize: h = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const b = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, v = {
    left: "start",
    right: "end",
    center: "center"
  }, y = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, r = ["center", "left", "right"].includes(a) ? a : "center", p = ["sm", "md", "lg", "xl"].includes(h) ? h : "sm", t = b[p], i = v[r], c = y[r], s = l ? {
    media: l.media || "image",
    aspect: l.aspect || "square",
    imageUrl: l.imageUrl,
    videoUrl: l.videoUrl,
    lottieUrl: l.lottieUrl,
    lottieData: l.lottieData,
    iframeUrl: l.iframeUrl,
    title: l.title || o || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ S(
    "div",
    {
      className: `flex flex-col items-${i} justify-center gap-stats-spacing-y`,
      style: { textAlign: r },
      children: [
        l && s && /* @__PURE__ */ e("div", { className: `flex flex-col items-${i} justify-${i}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${c}`, children: /* @__PURE__ */ e(U, { ...s }) }) }),
        n && /* @__PURE__ */ e("div", { className: `${t} font-normal`, children: n }),
        (o || m) && /* @__PURE__ */ S("div", { className: "flex flex-col gap-[var(--spacing-16)] w-full", children: [
          o && /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: o } }),
          m && /* @__PURE__ */ e("p", { className: "text-ui-label-small font-normal m-0", children: m })
        ] })
      ]
    }
  );
}
function Z({
  stats: l = [],
  statTextAlign: n = "center",
  // 'left' | 'center' | 'right'
  statFontSize: o = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  order: m = "stat-first",
  // 'stat-first' | 'media-first'
  id: a = "",
  className: h = ""
}) {
  const b = (t, i, c) => i.includes(t) ? t : c, v = (t) => {
    const { statAlign: i = "left" } = t;
    return b(i, ["left", "right"], "left");
  }, y = (t) => {
    const { media: i, statMedia: c, ...s } = t;
    return {
      ...s,
      media: c,
      textAlign: t.textAlign || n,
      fontSize: t.fontSize || o
    };
  }, r = (t, i) => /* @__PURE__ */ e("div", { className: `flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${i}`, children: /* @__PURE__ */ e(V, { ...y(t) }) }), p = (t, i = "") => t ? /* @__PURE__ */ e("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden bg-[#C8D4FE]", children: /* @__PURE__ */ e("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ e(
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
  return !l || l.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${h}`, id: a, children: l.map((t, i) => {
    const c = t.media, s = !!c, d = `${s ? "xl:w-1/2" : "w-full"}`, x = v(t) === "left", w = m === "media-first";
    return /* @__PURE__ */ e("div", { ...t.attributes ?? {}, children: /* @__PURE__ */ S("div", { className: "flex flex-col xl:flex-row items-stretch", children: [
      w && s && /* @__PURE__ */ e("div", { className: "w-full xl:w-1/2", children: p(c, t.description || "") }),
      x && r(t, d),
      !w && s && /* @__PURE__ */ e("div", { className: "w-full xl:w-1/2", children: p(c, t.description || "") }),
      !x && r(t, d)
    ] }) }, i);
  }) });
}
let C, z, F, P;
const H = async () => {
  if (!P) {
    const l = await import("react-pdf");
    P = l.pdfjs, z = l.Document, F = l.Page, P.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${P.version}/build/pdf.worker.min.mjs`;
  }
}, q = async () => {
  C || (C = (await import("react-pageflip")).default);
}, Y = W(({ children: l }, n) => /* @__PURE__ */ e("div", { ref: n, className: "w-full h-full overflow-hidden", children: l })), G = ({ pdfUrl: l, title: n, width: o = 280, height: m = 280, className: a = "" }) => {
  const [h, b] = j(0), [v, y] = j(null), [r, p] = j(!0), [t, i] = j(m / o), [c, s] = j(0), d = B(null);
  A(() => {
    Promise.all([H(), q()]).then(() => p(!1)).catch(() => {
      y("Failed to load flipbook");
    });
  }, []), A(() => {
    const f = d.current;
    if (!f) return;
    const g = new ResizeObserver(([u]) => {
      const k = Math.floor(u.contentRect.width);
      k > 0 && s(k);
    });
    return g.observe(f), () => g.disconnect();
  }, [r]);
  const x = c > 0 ? Math.floor(c / 2) : Math.floor(o / 2), w = Math.round(x * t), M = R(async (f) => {
    try {
      const u = (await f.getPage(1)).getViewport({ scale: 1 });
      u != null && u.width && (u != null && u.height) && i(u.height / u.width);
    } catch {
    }
    b(f.numPages || 0);
  }, []), L = R((f) => {
    y((f == null ? void 0 : f.message) || "Failed to load PDF");
  }, []);
  return v ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : r ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: d, className: `w-full ${a}`.trim(), children: /* @__PURE__ */ S(
    z,
    {
      file: l,
      onLoadSuccess: M,
      onLoadError: L,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        h === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${a}`.trim(),
            style: { minHeight: `${w}px` },
            children: /* @__PURE__ */ e(F, { pageNumber: 1, width: o, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        h > 1 && /* @__PURE__ */ e(
          C,
          {
            width: x,
            height: w,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": n || "Flipbook",
            children: Array.from({ length: h }, (f, g) => /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(F, { pageNumber: g + 1, width: x, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, g))
          },
          `${x}-${w}`
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
