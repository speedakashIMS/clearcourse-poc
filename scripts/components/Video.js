import { jsx as e, jsxs as D } from "react/jsx-runtime";
import { lazy as I, Suspense as _, useState as x, useRef as z, useEffect as S, useCallback as R, forwardRef as O } from "react";
import T from "lottie-react";
const W = I(() => Promise.resolve().then(() => G)), E = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: i = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: d = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: m,
  videoUrl: s,
  lottieUrl: p,
  lottieData: N,
  iframeUrl: $,
  flipbookUrl: g,
  title: l,
  className: w = ""
}) => {
  var r;
  const k = typeof window < "u" && window.location.origin.indexOf("author") > -1, P = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, c = `relative w-full h-full ${i === "square" ? "aspect-square" : i === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), o = i === "default" ? `w-full h-full ${w}`.trim() : `absolute inset-0 w-full h-full ${w}`.trim(), h = "w-full h-full", v = i === "default" ? `${o}`.trim() : o, b = d === "contain" ? "object-contain" : "object-cover", C = d === "contain" ? "xMidYMid meet" : "xMidYMid slice", a = `relative w-full ${w}`.trim(), n = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (m)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
          "img",
          {
            src: m,
            alt: l || "Media image",
            className: `${b} ${o}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (s) {
        const y = s.includes("youtube.com/watch") || s.includes("youtu.be/");
        let u = s;
        y && (u = `https://www.youtube.com/embed/${s.includes("youtu.be/") ? s.split("youtu.be/")[1].split("?")[0] : (r = s.split("v=")[1]) == null ? void 0 : r.split("&")[0]}`);
        const V = (() => {
          if (!y) return u;
          try {
            const f = new URL(u);
            return f.searchParams.set("autoplay", "0"), f.searchParams.set("mute", "0"), f.searchParams.set("playsinline", "1"), f.searchParams.set("controls", "1"), f.searchParams.set("rel", "0"), f.toString();
          } catch {
            return u.includes("?") ? u.includes("autoplay=") ? u : `${u}&autoplay=0` : `${u}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: c, children: y ? /* @__PURE__ */ e(
          "iframe",
          {
            src: V,
            title: l || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${o} ${b}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${o} ${b}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: l || "Video player",
            children: /* @__PURE__ */ e("source", { src: s })
          }
        ) });
      }
      break;
    case "lottie":
      if (N)
        return k ? /* @__PURE__ */ e("div", { className: c, role: "img", "aria-label": l || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${o}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: c,
            role: "img",
            "aria-label": l || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${o} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              T,
              {
                animationData: N,
                loop: !P,
                autoplay: !P,
                className: h,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: C }
              }
            ) })
          }
        );
      if (p)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if ($)
        return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: $,
            title: l || "Iframe content",
            frameBorder: "0",
            className: `${v} ${b}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (g)
        return k ? /* @__PURE__ */ e("div", { className: a, role: "img", "aria-label": l || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${n}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e("div", { className: n, children: /* @__PURE__ */ e(_, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(W, { pdfUrl: g, title: l, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${i === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, X = ({
  videoUrl: t,
  title: i,
  className: d = "",
  ...m
}) => /* @__PURE__ */ e("div", { className: `container ${d}`.trim(), ...m, children: /* @__PURE__ */ e("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ e("div", { className: "relative w-full h-full aspect-video", children: t ? /* @__PURE__ */ e(
  E,
  {
    media: "video",
    videoUrl: t,
    title: i || "Video player",
    className: "absolute inset-0 w-full h-full"
  }
) : /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-grey-900 text-body-default text-center p-40", children: "Video placeholder" }) }) }) });
let F, A, M, j;
const B = async () => {
  if (!j) {
    const t = await import("react-pdf");
    j = t.pdfjs, A = t.Document, M = t.Page, j.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${j.version}/build/pdf.worker.min.mjs`;
  }
}, H = async () => {
  F || (F = (await import("react-pageflip")).default);
}, Y = O(({ children: t }, i) => /* @__PURE__ */ e("div", { ref: i, className: "w-full h-full overflow-hidden", children: t })), q = ({ pdfUrl: t, title: i, width: d = 280, height: m = 280, className: s = "" }) => {
  const [p, N] = x(0), [$, g] = x(null), [l, w] = x(!0), [k, P] = x(m / d), [L, c] = x(0), o = z(null);
  S(() => {
    Promise.all([B(), H()]).then(() => w(!1)).catch(() => {
      g("Failed to load flipbook");
    });
  }, []), S(() => {
    const a = o.current;
    if (!a) return;
    const n = new ResizeObserver(([r]) => {
      const y = Math.floor(r.contentRect.width);
      y > 0 && c(y);
    });
    return n.observe(a), () => n.disconnect();
  }, [l]);
  const h = L > 0 ? Math.floor(L / 2) : Math.floor(d / 2), v = Math.round(h * k), b = R(async (a) => {
    try {
      const r = (await a.getPage(1)).getViewport({ scale: 1 });
      r != null && r.width && (r != null && r.height) && P(r.height / r.width);
    } catch {
    }
    N(a.numPages || 0);
  }, []), C = R((a) => {
    g((a == null ? void 0 : a.message) || "Failed to load PDF");
  }, []);
  return $ ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : l ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: o, className: `w-full ${s}`.trim(), children: /* @__PURE__ */ D(
    A,
    {
      file: t,
      onLoadSuccess: b,
      onLoadError: C,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        p === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${s}`.trim(),
            style: { minHeight: `${v}px` },
            children: /* @__PURE__ */ e(M, { pageNumber: 1, width: d, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        p > 1 && /* @__PURE__ */ e(
          F,
          {
            width: h,
            height: v,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": i || "Flipbook",
            children: Array.from({ length: p }, (a, n) => /* @__PURE__ */ e(Y, { children: /* @__PURE__ */ e(M, { pageNumber: n + 1, width: h, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, n))
          },
          `${h}-${v}`
        )
      ]
    }
  ) });
}, G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q
}, Symbol.toStringTag, { value: "Module" }));
export {
  X as default
};
