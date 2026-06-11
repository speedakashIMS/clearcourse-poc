import { jsx as e, jsxs as M, Fragment as _ } from "react/jsx-runtime";
import * as L from "react";
import { lazy as z, Suspense as I, useState as P, useRef as W, useEffect as A, useCallback as T, forwardRef as O } from "react";
import H from "lottie-react";
const q = z(() => Promise.resolve().then(() => le)), V = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: r = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: i = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: n,
  videoUrl: s,
  lottieUrl: g,
  lottieData: x,
  iframeUrl: b,
  flipbookUrl: m,
  title: l,
  className: a = ""
}) => {
  var f;
  const d = typeof window < "u" && window.location.origin.indexOf("author") > -1, o = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, p = `relative w-full h-full ${r === "square" ? "aspect-square" : r === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), c = r === "default" ? `w-full h-full ${a}`.trim() : `absolute inset-0 w-full h-full ${a}`.trim(), y = "w-full h-full", N = r === "default" ? `${c}`.trim() : c, v = i === "contain" ? "object-contain" : "object-cover", $ = i === "contain" ? "xMidYMid meet" : "xMidYMid slice", u = `relative w-full ${a}`.trim(), h = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (n)
        return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(
          "img",
          {
            src: n,
            alt: l || "Media image",
            className: `${v} ${c}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (s) {
        const C = s.includes("youtube.com/watch") || s.includes("youtu.be/");
        let j = s;
        C && (j = `https://www.youtube.com/embed/${s.includes("youtu.be/") ? s.split("youtu.be/")[1].split("?")[0] : (f = s.split("v=")[1]) == null ? void 0 : f.split("&")[0]}`);
        const E = (() => {
          if (!C) return j;
          try {
            const k = new URL(j);
            return k.searchParams.set("autoplay", "0"), k.searchParams.set("mute", "0"), k.searchParams.set("playsinline", "1"), k.searchParams.set("controls", "1"), k.searchParams.set("rel", "0"), k.toString();
          } catch {
            return j.includes("?") ? j.includes("autoplay=") ? j : `${j}&autoplay=0` : `${j}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: p, children: C ? /* @__PURE__ */ e(
          "iframe",
          {
            src: E,
            title: l || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${c} ${v}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${c} ${v}`.trim(),
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
      if (x)
        return d ? /* @__PURE__ */ e("div", { className: p, role: "img", "aria-label": l || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${c}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: p,
            role: "img",
            "aria-label": l || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${c} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              H,
              {
                animationData: x,
                loop: !o,
                autoplay: !o,
                className: y,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: $ }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (b)
        return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: b,
            title: l || "Iframe content",
            frameBorder: "0",
            className: `${N} ${v}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (m)
        return d ? /* @__PURE__ */ e("div", { className: u, role: "img", "aria-label": l || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${h}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(I, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(q, { pdfUrl: m, title: l, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${r === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function U({
  media: t,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: r,
  description: i,
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: n = "center",
  // 'center' | 'left' | 'right'
  fontSize: s = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const g = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, x = {
    left: "start",
    right: "end",
    center: "center"
  }, b = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, m = ["center", "left", "right"].includes(n) ? n : "center", l = ["sm", "md", "lg", "xl"].includes(s) ? s : "sm", a = g[l], d = x[m], o = b[m], w = t ? {
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
  return /* @__PURE__ */ M(
    "div",
    {
      className: `flex flex-col items-${d} justify-center gap-stats-spacing-y`,
      style: { textAlign: m },
      children: [
        t && w && /* @__PURE__ */ e("div", { className: `flex flex-col items-${d} justify-${d}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${o}`, children: /* @__PURE__ */ e(V, { ...w }) }) }),
        r && /* @__PURE__ */ e("div", { className: `${a} font-normal`, children: r }),
        i && /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: i } })
      ]
    }
  );
}
function Y({
  title: t,
  titleId: r,
  ...i
}, n) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, i), t ? /* @__PURE__ */ L.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ L.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const Z = /* @__PURE__ */ L.forwardRef(Y);
function G({
  title: t,
  titleId: r,
  ...i
}, n) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, i), t ? /* @__PURE__ */ L.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ L.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const J = /* @__PURE__ */ L.forwardRef(G);
function K({ rating: t, textAlign: r = "left" }) {
  if (!t || t < 1 || t > 5) return null;
  const i = r === "center" ? "flex justify-center" : r === "right" ? "flex justify-end" : "flex justify-start", n = [];
  for (let s = 1; s <= 5; s++)
    s <= t ? n.push(
      /* @__PURE__ */ e(Z, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    ) : n.push(
      /* @__PURE__ */ e(J, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    );
  return /* @__PURE__ */ e("div", { className: `${i} gap-4`, role: "img", "aria-label": `Rating: ${t} out of 5 stars`, children: n });
}
function Q({
  testimonial: t,
  name: r,
  role: i,
  rating: n = null,
  // number | null (1-5)
  imageUrl: s,
  logoUrl: g,
  mediaPosition: x = "top",
  // 'top' | 'bottom' | 'with-name'
  align: b = "left",
  // 'left' | 'center'
  withPadding: m = !1,
  // boolean
  className: l = "",
  ...a
}) {
  const d = n !== null && n >= 1 && n <= 5 ? Math.floor(n) : null, o = b === "center", w = `w-full ${m ? "p-testimonial-padding" : ""} ${l}`.trim(), p = o ? "text-center items-center" : "text-left items-start", c = [
    g ? /* @__PURE__ */ e(
      "img",
      {
        src: g,
        alt: r || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    s ? /* @__PURE__ */ e(
      "img",
      {
        src: s,
        alt: r || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), y = c.length > 0, N = y && x === "top", v = y && x === "bottom", $ = y && x === "with-name";
  return /* @__PURE__ */ e("figure", { className: w, ...a, ...a.attributes || {}, children: /* @__PURE__ */ M("div", { className: `flex flex-col gap-testimonial-spacing-y ${p}`, children: [
    N && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${o ? "justify-center" : "justify-start"}`, children: c }),
    d && /* @__PURE__ */ e(K, { rating: d, textAlign: o ? "center" : "left" }),
    t && /* @__PURE__ */ e("blockquote", { className: "m-0", children: /* @__PURE__ */ e("p", { className: "text-body-default", dangerouslySetInnerHTML: { __html: t } }) }),
    (r || i || $) && /* @__PURE__ */ M(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${o ? "items-center" : "items-start"}`,
        children: [
          $ && /* @__PURE__ */ M("div", { className: `flex items-center gap-10 ${o ? "justify-center" : "justify-start"}`, children: [
            c,
            /* @__PURE__ */ M("div", { className: `flex flex-col ${o ? "items-center" : "items-start"}`, children: [
              r && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: r }),
              i && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: i })
            ] })
          ] }),
          !$ && /* @__PURE__ */ M(_, { children: [
            r && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: r }),
            i && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: i })
          ] })
        ]
      }
    ),
    v && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${o ? "justify-center" : "justify-start"}`, children: c })
  ] }) });
}
function ae({
  stats: t = [],
  statTextAlign: r = "center",
  // 'left' | 'center' | 'right'
  statFontSize: i = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  order: n = "stat-first",
  // 'testimonial-first' | 'stat-first'
  id: s = "",
  className: g = ""
}) {
  const x = (l) => {
    const { media: a, statMedia: d, ...o } = l;
    return {
      ...o,
      media: d,
      textAlign: l.textAlign || r,
      fontSize: l.fontSize || i
    };
  }, b = (l) => {
    let a = l.statBackgroundColor;
    return a = a === "secondary" ? "bg-secondary text-white" : a === "primary" ? "bg-primary text-white" : a === "tertiary" ? "bg-tertiary text-white" : a === "dark" ? "bg-grey-950 text-white" : a === "white" ? "bg-white text-black" : "bg-transparent text-black", a;
  }, m = (l, a) => /* @__PURE__ */ e("div", { className: `flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${a} ${b(l)}`, children: /* @__PURE__ */ e(U, { ...x(l) }) });
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${g}`, id: s, children: t.map((l, a) => {
    const {
      testimonial: d,
      rating: o,
      mediaPosition: w,
      align: p,
      withPadding: c,
      logoUrl: y
    } = l, N = l.name ?? l.author, v = l.role ?? l.authorTitle, $ = l.imageUrl ?? l.authorImage, u = !!d, h = `min-h-auto! ${u ? "xl:w-1/2" : "w-full"}`, f = n === "testimonial-first";
    return /* @__PURE__ */ e("div", { ...l.attributes ?? {}, children: /* @__PURE__ */ M("div", { className: "flex flex-col items-stretch xl:flex-row", children: [
      !f && m(l, h),
      u && /* @__PURE__ */ e("div", { className: `flex items-center bg-grey-100 text-grey-950 justify-center ${h}`, children: /* @__PURE__ */ e(
        Q,
        {
          testimonial: d,
          name: N,
          role: v,
          imageUrl: $,
          logoUrl: y,
          rating: o,
          mediaPosition: w,
          align: p,
          withPadding: c
        }
      ) }),
      f && m(l, h)
    ] }) }, a);
  }) });
}
let F, B, R, S;
const X = async () => {
  if (!S) {
    const t = await import("react-pdf");
    S = t.pdfjs, B = t.Document, R = t.Page, S.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${S.version}/build/pdf.worker.min.mjs`;
  }
}, D = async () => {
  F || (F = (await import("react-pageflip")).default);
}, ee = O(({ children: t }, r) => /* @__PURE__ */ e("div", { ref: r, className: "w-full h-full overflow-hidden", children: t })), te = ({ pdfUrl: t, title: r, width: i = 280, height: n = 280, className: s = "" }) => {
  const [g, x] = P(0), [b, m] = P(null), [l, a] = P(!0), [d, o] = P(n / i), [w, p] = P(0), c = W(null);
  A(() => {
    Promise.all([X(), D()]).then(() => a(!1)).catch(() => {
      m("Failed to load flipbook");
    });
  }, []), A(() => {
    const u = c.current;
    if (!u) return;
    const h = new ResizeObserver(([f]) => {
      const C = Math.floor(f.contentRect.width);
      C > 0 && p(C);
    });
    return h.observe(u), () => h.disconnect();
  }, [l]);
  const y = w > 0 ? Math.floor(w / 2) : Math.floor(i / 2), N = Math.round(y * d), v = T(async (u) => {
    try {
      const f = (await u.getPage(1)).getViewport({ scale: 1 });
      f != null && f.width && (f != null && f.height) && o(f.height / f.width);
    } catch {
    }
    x(u.numPages || 0);
  }, []), $ = T((u) => {
    m((u == null ? void 0 : u.message) || "Failed to load PDF");
  }, []);
  return b ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : l ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: c, className: `w-full ${s}`.trim(), children: /* @__PURE__ */ M(
    B,
    {
      file: t,
      onLoadSuccess: v,
      onLoadError: $,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${s}`.trim(),
            style: { minHeight: `${N}px` },
            children: /* @__PURE__ */ e(R, { pageNumber: 1, width: i, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ e(
          F,
          {
            width: y,
            height: N,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": r || "Flipbook",
            children: Array.from({ length: g }, (u, h) => /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e(R, { pageNumber: h + 1, width: y, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, h))
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
  ae as default
};
