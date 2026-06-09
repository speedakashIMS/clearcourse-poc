import { jsx as e, jsxs as _ } from "react/jsx-runtime";
import { lazy as z, Suspense as O, useState as P, useRef as T, useEffect as S, useCallback as R, forwardRef as W } from "react";
import E from "lottie-react";
const V = z(() => Promise.resolve().then(() => J)), B = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: l = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: d = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: g,
  videoUrl: a,
  lottieUrl: m,
  lottieData: b,
  iframeUrl: y,
  flipbookUrl: p,
  title: r,
  className: h = ""
}) => {
  var s;
  const w = typeof window < "u" && window.location.origin.indexOf("author") > -1, x = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, c = `relative w-full h-full ${l === "square" ? "aspect-square" : l === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), n = l === "default" ? `w-full h-full ${h}`.trim() : `absolute inset-0 w-full h-full ${h}`.trim(), v = "w-full h-full", k = l === "default" ? `${n}`.trim() : n, N = d === "contain" ? "object-contain" : "object-cover", C = d === "contain" ? "xMidYMid meet" : "xMidYMid slice", i = `relative w-full ${h}`.trim(), o = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (g)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
          "img",
          {
            src: g,
            alt: r || "Media image",
            className: `${N} ${n}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (a) {
        const $ = a.includes("youtube.com/watch") || a.includes("youtu.be/");
        let u = a;
        $ && (u = `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1].split("?")[0] : (s = a.split("v=")[1]) == null ? void 0 : s.split("&")[0]}`);
        const I = (() => {
          if (!$) return u;
          try {
            const f = new URL(u);
            return f.searchParams.set("autoplay", "0"), f.searchParams.set("mute", "0"), f.searchParams.set("playsinline", "1"), f.searchParams.set("controls", "1"), f.searchParams.set("rel", "0"), f.toString();
          } catch {
            return u.includes("?") ? u.includes("autoplay=") ? u : `${u}&autoplay=0` : `${u}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: c, children: $ ? /* @__PURE__ */ e(
          "iframe",
          {
            src: I,
            title: r || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${n} ${N}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${n} ${N}`.trim(),
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
        return w ? /* @__PURE__ */ e("div", { className: c, role: "img", "aria-label": r || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${n}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: c,
            role: "img",
            "aria-label": r || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${n} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              E,
              {
                animationData: b,
                loop: !x,
                autoplay: !x,
                className: v,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: C }
              }
            ) })
          }
        );
      if (m)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (y)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: y,
            title: r || "Iframe content",
            frameBorder: "0",
            className: `${k} ${N}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (p)
        return w ? /* @__PURE__ */ e("div", { className: i, role: "img", "aria-label": r || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${o}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: i, children: /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e(O, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(V, { pdfUrl: p, title: r, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${l === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, A = {
  large: "w-full flex justify-center",
  medium: "w-full max-w-4xl mx-auto flex justify-center px-[var(--container-padding)]",
  small: "w-full max-w-xs mx-auto flex justify-center px-[var(--container-padding)]"
}, Z = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: l = "default",
  // 'default' | 'rectangle' | 'square'
  containerSize: d = "large",
  // 'large' | 'medium' | 'small'
  imageUrl: g,
  videoUrl: a,
  lottieUrl: m,
  lottieData: b,
  iframeUrl: y,
  flipbookUrl: p,
  title: r,
  className: h = "",
  ...w
}) => {
  const x = A[d] ?? A.large;
  return /* @__PURE__ */ e("div", { className: h.trim() || void 0, ...w, children: /* @__PURE__ */ e("div", { className: x, children: /* @__PURE__ */ e(
    B,
    {
      media: t,
      aspect: l,
      imageUrl: g,
      videoUrl: a,
      lottieUrl: m,
      lottieData: b,
      iframeUrl: y,
      flipbookUrl: p,
      title: r
    }
  ) }) });
};
let M, D, F, j;
const H = async () => {
  if (!j) {
    const t = await import("react-pdf");
    j = t.pdfjs, D = t.Document, F = t.Page, j.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${j.version}/build/pdf.worker.min.mjs`;
  }
}, Y = async () => {
  M || (M = (await import("react-pageflip")).default);
}, q = W(({ children: t }, l) => /* @__PURE__ */ e("div", { ref: l, className: "w-full h-full overflow-hidden", children: t })), G = ({ pdfUrl: t, title: l, width: d = 280, height: g = 280, className: a = "" }) => {
  const [m, b] = P(0), [y, p] = P(null), [r, h] = P(!0), [w, x] = P(g / d), [L, c] = P(0), n = T(null);
  S(() => {
    Promise.all([H(), Y()]).then(() => h(!1)).catch(() => {
      p("Failed to load flipbook");
    });
  }, []), S(() => {
    const i = n.current;
    if (!i) return;
    const o = new ResizeObserver(([s]) => {
      const $ = Math.floor(s.contentRect.width);
      $ > 0 && c($);
    });
    return o.observe(i), () => o.disconnect();
  }, [r]);
  const v = L > 0 ? Math.floor(L / 2) : Math.floor(d / 2), k = Math.round(v * w), N = R(async (i) => {
    try {
      const s = (await i.getPage(1)).getViewport({ scale: 1 });
      s != null && s.width && (s != null && s.height) && x(s.height / s.width);
    } catch {
    }
    b(i.numPages || 0);
  }, []), C = R((i) => {
    p((i == null ? void 0 : i.message) || "Failed to load PDF");
  }, []);
  return y ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : r ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: n, className: `w-full ${a}`.trim(), children: /* @__PURE__ */ _(
    D,
    {
      file: t,
      onLoadSuccess: N,
      onLoadError: C,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        m === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${a}`.trim(),
            style: { minHeight: `${k}px` },
            children: /* @__PURE__ */ e(F, { pageNumber: 1, width: d, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        m > 1 && /* @__PURE__ */ e(
          M,
          {
            width: v,
            height: k,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": l || "Flipbook",
            children: Array.from({ length: m }, (i, o) => /* @__PURE__ */ e(q, { children: /* @__PURE__ */ e(F, { pageNumber: o + 1, width: v, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, o))
          },
          `${v}-${k}`
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
