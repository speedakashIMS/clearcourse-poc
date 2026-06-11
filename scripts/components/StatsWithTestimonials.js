import { jsx as e, jsxs as j, Fragment as _ } from "react/jsx-runtime";
import * as L from "react";
import { lazy as z, Suspense as I, useState as P, useRef as W, useEffect as A, useCallback as T, forwardRef as O } from "react";
import H from "lottie-react";
const q = z(() => Promise.resolve().then(() => le)), V = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: a = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: i = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: r,
  videoUrl: s,
  lottieUrl: p,
  lottieData: g,
  iframeUrl: b,
  flipbookUrl: x,
  title: l,
  className: m = ""
}) => {
  var f;
  const o = typeof window < "u" && window.location.origin.indexOf("author") > -1, n = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, d = `relative w-full h-full ${a === "square" ? "aspect-square" : a === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), c = a === "default" ? `w-full h-full ${m}`.trim() : `absolute inset-0 w-full h-full ${m}`.trim(), y = "w-full h-full", N = a === "default" ? `${c}`.trim() : c, w = i === "contain" ? "object-contain" : "object-cover", $ = i === "contain" ? "xMidYMid meet" : "xMidYMid slice", u = `relative w-full ${m}`.trim(), h = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (r)
        return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e(
          "img",
          {
            src: r,
            alt: l || "Media image",
            className: `${w} ${c}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (s) {
        const C = s.includes("youtube.com/watch") || s.includes("youtu.be/");
        let k = s;
        C && (k = `https://www.youtube.com/embed/${s.includes("youtu.be/") ? s.split("youtu.be/")[1].split("?")[0] : (f = s.split("v=")[1]) == null ? void 0 : f.split("&")[0]}`);
        const E = (() => {
          if (!C) return k;
          try {
            const M = new URL(k);
            return M.searchParams.set("autoplay", "0"), M.searchParams.set("mute", "0"), M.searchParams.set("playsinline", "1"), M.searchParams.set("controls", "1"), M.searchParams.set("rel", "0"), M.toString();
          } catch {
            return k.includes("?") ? k.includes("autoplay=") ? k : `${k}&autoplay=0` : `${k}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: d, children: C ? /* @__PURE__ */ e(
          "iframe",
          {
            src: E,
            title: l || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${c} ${w}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${c} ${w}`.trim(),
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
      if (g)
        return o ? /* @__PURE__ */ e("div", { className: d, role: "img", "aria-label": l || "Animation", children: /* @__PURE__ */ e(
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
            "aria-label": l || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${c} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              H,
              {
                animationData: g,
                loop: !n,
                autoplay: !n,
                className: y,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: $ }
              }
            ) })
          }
        );
      if (p)
        return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (b)
        return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: b,
            title: l || "Iframe content",
            frameBorder: "0",
            className: `${N} ${w}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (x)
        return o ? /* @__PURE__ */ e("div", { className: u, role: "img", "aria-label": l || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${h}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(I, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(q, { pdfUrl: x, title: l, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${a === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function U({
  media: t,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: a,
  description: i,
  source: r,
  // optional small caption/source line shown under the description (e.g. "Giftpro Client Survey")
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: s = "center",
  // 'center' | 'left' | 'right'
  fontSize: p = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const g = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, b = {
    left: "start",
    right: "end",
    center: "center"
  }, x = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, l = ["center", "left", "right"].includes(s) ? s : "center", m = ["sm", "md", "lg", "xl"].includes(p) ? p : "sm", o = g[m], n = b[l], v = x[l], d = t ? {
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
  return /* @__PURE__ */ j(
    "div",
    {
      className: `flex flex-col items-${n} justify-center gap-stats-spacing-y`,
      style: { textAlign: l },
      children: [
        t && d && /* @__PURE__ */ e("div", { className: `flex flex-col items-${n} justify-${n}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${v}`, children: /* @__PURE__ */ e(V, { ...d }) }) }),
        a && /* @__PURE__ */ e("div", { className: `${o} font-normal`, children: a }),
        (i || r) && /* @__PURE__ */ j("div", { className: "flex flex-col gap-[var(--spacing-16)] w-full", children: [
          i && /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: i } }),
          r && /* @__PURE__ */ e("p", { className: "text-ui-label-small font-normal m-0", children: r })
        ] })
      ]
    }
  );
}
function Y({
  title: t,
  titleId: a,
  ...i
}, r) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": a
  }, i), t ? /* @__PURE__ */ L.createElement("title", {
    id: a
  }, t) : null, /* @__PURE__ */ L.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const G = /* @__PURE__ */ L.forwardRef(Y);
function Z({
  title: t,
  titleId: a,
  ...i
}, r) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": a
  }, i), t ? /* @__PURE__ */ L.createElement("title", {
    id: a
  }, t) : null, /* @__PURE__ */ L.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const J = /* @__PURE__ */ L.forwardRef(Z);
function K({ rating: t, textAlign: a = "left" }) {
  if (!t || t < 1 || t > 5) return null;
  const i = a === "center" ? "flex justify-center" : a === "right" ? "flex justify-end" : "flex justify-start", r = [];
  for (let s = 1; s <= 5; s++)
    s <= t ? r.push(
      /* @__PURE__ */ e(G, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    ) : r.push(
      /* @__PURE__ */ e(J, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    );
  return /* @__PURE__ */ e("div", { className: `${i} gap-4`, role: "img", "aria-label": `Rating: ${t} out of 5 stars`, children: r });
}
function Q({
  testimonial: t,
  name: a,
  role: i,
  rating: r = null,
  // number | null (1-5)
  imageUrl: s,
  logoUrl: p,
  mediaPosition: g = "top",
  // 'top' | 'bottom' | 'with-name'
  align: b = "left",
  // 'left' | 'center'
  withPadding: x = !1,
  // boolean
  className: l = "",
  ...m
}) {
  const o = r !== null && r >= 1 && r <= 5 ? Math.floor(r) : null, n = b === "center", v = `w-full ${x ? "p-testimonial-padding" : ""} ${l}`.trim(), d = n ? "text-center items-center" : "text-left items-start", c = [
    p ? /* @__PURE__ */ e(
      "img",
      {
        src: p,
        alt: a || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    s ? /* @__PURE__ */ e(
      "img",
      {
        src: s,
        alt: a || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), y = c.length > 0, N = y && g === "top", w = y && g === "bottom", $ = y && g === "with-name";
  return /* @__PURE__ */ e("figure", { className: v, ...m, ...m.attributes || {}, children: /* @__PURE__ */ j("div", { className: `flex flex-col gap-testimonial-spacing-y ${d}`, children: [
    N && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${n ? "justify-center" : "justify-start"}`, children: c }),
    o && /* @__PURE__ */ e(K, { rating: o, textAlign: n ? "center" : "left" }),
    t && /* @__PURE__ */ e("blockquote", { className: "m-0", children: /* @__PURE__ */ e("p", { className: "text-body-default", dangerouslySetInnerHTML: { __html: t } }) }),
    (a || i || $) && /* @__PURE__ */ j(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${n ? "items-center" : "items-start"}`,
        children: [
          $ && /* @__PURE__ */ j("div", { className: `flex items-center gap-10 ${n ? "justify-center" : "justify-start"}`, children: [
            c,
            /* @__PURE__ */ j("div", { className: `flex flex-col ${n ? "items-center" : "items-start"}`, children: [
              a && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: a }),
              i && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: i })
            ] })
          ] }),
          !$ && /* @__PURE__ */ j(_, { children: [
            a && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: a }),
            i && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: i })
          ] })
        ]
      }
    ),
    w && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${n ? "justify-center" : "justify-start"}`, children: c })
  ] }) });
}
function re({
  stats: t = [],
  statTextAlign: a = "center",
  // 'left' | 'center' | 'right'
  statFontSize: i = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  order: r = "stat-first",
  // 'testimonial-first' | 'stat-first'
  id: s = "",
  className: p = ""
}) {
  const g = {
    secondary: "bg-secondary text-white",
    primary: "bg-primary text-white",
    tertiary: "bg-tertiary text-white",
    dark: "bg-grey-950 text-white",
    white: "bg-white text-black"
  }, b = (l) => {
    const { media: m, statMedia: o, ...n } = l;
    return {
      ...n,
      media: o,
      textAlign: l.textAlign || a,
      fontSize: l.fontSize || i
    };
  }, x = (l, m) => {
    console.log("Rendering StatMolecule with data:", l);
    let o = l.statBackgroundColor;
    return o = g[o] || "bg-transparent text-black", /* @__PURE__ */ e("div", { className: `flex flex-col justify-center p-testimonial-padding-wide gap-[var(--spacing-stats-spacing-y)] min-h-[220px] ${m} ${o}`, children: /* @__PURE__ */ e(U, { ...b(l) }) });
  };
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${p}`, id: s, children: t.map((l, m) => {
    const {
      testimonial: o,
      rating: n,
      mediaPosition: v,
      align: d,
      withPadding: c,
      logoUrl: y
    } = l, N = l.name ?? l.author, w = l.role ?? l.authorTitle, $ = l.imageUrl ?? l.authorImage, u = !!o, h = `min-h-auto! ${u ? "xl:w-1/2" : "w-full"}`, f = r === "testimonial-first";
    return /* @__PURE__ */ e("div", { ...l.attributes ?? {}, children: /* @__PURE__ */ j("div", { className: "flex flex-col items-stretch xl:flex-row rounded-[var(--radius-8)] border shadow-testimonial-with-stats gap-0 xl:gap-4 b-radius-8", children: [
      !f && x(l, h),
      u && /* @__PURE__ */ e("div", { className: `flex items-center bg-transparent p-testimonial-padding-wide gap-[var(--spacing-testimonial-spacing-y)] text-grey-950 justify-center ${h}`, children: /* @__PURE__ */ e(
        Q,
        {
          testimonial: o,
          name: N,
          role: w,
          imageUrl: $,
          logoUrl: y,
          rating: n,
          mediaPosition: v,
          align: d,
          withPadding: c
        }
      ) }),
      f && x(l, h)
    ] }) }, m);
  }) });
}
let R, B, F, S;
const X = async () => {
  if (!S) {
    const t = await import("react-pdf");
    S = t.pdfjs, B = t.Document, F = t.Page, S.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${S.version}/build/pdf.worker.min.mjs`;
  }
}, D = async () => {
  R || (R = (await import("react-pageflip")).default);
}, ee = O(({ children: t }, a) => /* @__PURE__ */ e("div", { ref: a, className: "w-full h-full overflow-hidden", children: t })), te = ({ pdfUrl: t, title: a, width: i = 280, height: r = 280, className: s = "" }) => {
  const [p, g] = P(0), [b, x] = P(null), [l, m] = P(!0), [o, n] = P(r / i), [v, d] = P(0), c = W(null);
  A(() => {
    Promise.all([X(), D()]).then(() => m(!1)).catch(() => {
      x("Failed to load flipbook");
    });
  }, []), A(() => {
    const u = c.current;
    if (!u) return;
    const h = new ResizeObserver(([f]) => {
      const C = Math.floor(f.contentRect.width);
      C > 0 && d(C);
    });
    return h.observe(u), () => h.disconnect();
  }, [l]);
  const y = v > 0 ? Math.floor(v / 2) : Math.floor(i / 2), N = Math.round(y * o), w = T(async (u) => {
    try {
      const f = (await u.getPage(1)).getViewport({ scale: 1 });
      f != null && f.width && (f != null && f.height) && n(f.height / f.width);
    } catch {
    }
    g(u.numPages || 0);
  }, []), $ = T((u) => {
    x((u == null ? void 0 : u.message) || "Failed to load PDF");
  }, []);
  return b ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : l ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: c, className: `w-full ${s}`.trim(), children: /* @__PURE__ */ j(
    B,
    {
      file: t,
      onLoadSuccess: w,
      onLoadError: $,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        p === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${s}`.trim(),
            style: { minHeight: `${N}px` },
            children: /* @__PURE__ */ e(F, { pageNumber: 1, width: i, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        p > 1 && /* @__PURE__ */ e(
          R,
          {
            width: y,
            height: N,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": a || "Flipbook",
            children: Array.from({ length: p }, (u, h) => /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e(F, { pageNumber: h + 1, width: y, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, h))
          },
          `${y}-${N}`
        )
      ]
    }
  ) });
}, le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: te
}, Symbol.toStringTag, { value: "Module" }));
export {
  re as default
};
