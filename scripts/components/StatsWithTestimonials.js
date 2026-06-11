import { jsx as e, jsxs as C, Fragment as z } from "react/jsx-runtime";
import * as L from "react";
import { lazy as W, Suspense as I, useState as P, useRef as O, useEffect as A, useCallback as B, forwardRef as _ } from "react";
import q from "lottie-react";
const V = W(() => Promise.resolve().then(() => le)), H = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: l = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: a = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: n,
  videoUrl: s,
  lottieUrl: g,
  lottieData: x,
  iframeUrl: v,
  flipbookUrl: m,
  title: c,
  className: r = ""
}) => {
  var u;
  const i = typeof window < "u" && window.location.origin.indexOf("author") > -1, o = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, h = `relative w-full h-full ${l === "square" ? "aspect-square" : l === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), d = l === "default" ? `w-full h-full ${r}`.trim() : `absolute inset-0 w-full h-full ${r}`.trim(), b = "w-full h-full", N = l === "default" ? `${d}`.trim() : d, w = a === "contain" ? "object-contain" : "object-cover", $ = a === "contain" ? "xMidYMid meet" : "xMidYMid slice", f = `relative w-full ${r}`.trim(), p = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (n)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(
          "img",
          {
            src: n,
            alt: c || "Media image",
            className: `${w} ${d}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (s) {
        const j = s.includes("youtube.com/watch") || s.includes("youtu.be/");
        let k = s;
        j && (k = `https://www.youtube.com/embed/${s.includes("youtu.be/") ? s.split("youtu.be/")[1].split("?")[0] : (u = s.split("v=")[1]) == null ? void 0 : u.split("&")[0]}`);
        const E = (() => {
          if (!j) return k;
          try {
            const M = new URL(k);
            return M.searchParams.set("autoplay", "0"), M.searchParams.set("mute", "0"), M.searchParams.set("playsinline", "1"), M.searchParams.set("controls", "1"), M.searchParams.set("rel", "0"), M.toString();
          } catch {
            return k.includes("?") ? k.includes("autoplay=") ? k : `${k}&autoplay=0` : `${k}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: h, children: j ? /* @__PURE__ */ e(
          "iframe",
          {
            src: E,
            title: c || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${d} ${w}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${d} ${w}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: c || "Video player",
            children: /* @__PURE__ */ e("source", { src: s })
          }
        ) });
      }
      break;
    case "lottie":
      if (x)
        return i ? /* @__PURE__ */ e("div", { className: h, role: "img", "aria-label": c || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${d}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: h,
            role: "img",
            "aria-label": c || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${d} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              q,
              {
                animationData: x,
                loop: !o,
                autoplay: !o,
                className: b,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: $ }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (v)
        return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: v,
            title: c || "Iframe content",
            frameBorder: "0",
            className: `${N} ${w}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (m)
        return i ? /* @__PURE__ */ e("div", { className: f, role: "img", "aria-label": c || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${p}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(I, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(V, { pdfUrl: m, title: c, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${l === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function U({
  media: t,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: l,
  description: a,
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
  }, v = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, m = ["center", "left", "right"].includes(n) ? n : "center", c = ["sm", "md", "lg", "xl"].includes(s) ? s : "sm", r = g[c], i = x[m], o = v[m], y = t ? {
    media: t.media || "image",
    aspect: t.aspect || "square",
    imageUrl: t.imageUrl,
    videoUrl: t.videoUrl,
    lottieUrl: t.lottieUrl,
    lottieData: t.lottieData,
    iframeUrl: t.iframeUrl,
    title: t.title || a || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ C(
    "div",
    {
      className: `flex flex-col items-${i} justify-center gap-stats-spacing-y`,
      style: { textAlign: m },
      children: [
        t && y && /* @__PURE__ */ e("div", { className: `flex flex-col items-${i} justify-${i}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${o}`, children: /* @__PURE__ */ e(H, { ...y }) }) }),
        l && /* @__PURE__ */ e("div", { className: `${r} font-normal`, children: l }),
        a && /* @__PURE__ */ e("p", { children: a })
      ]
    }
  );
}
function Y({
  title: t,
  titleId: l,
  ...a
}, n) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": l
  }, a), t ? /* @__PURE__ */ L.createElement("title", {
    id: l
  }, t) : null, /* @__PURE__ */ L.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
    clipRule: "evenodd"
  }));
}
const Z = /* @__PURE__ */ L.forwardRef(Y);
function G({
  title: t,
  titleId: l,
  ...a
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
    "aria-labelledby": l
  }, a), t ? /* @__PURE__ */ L.createElement("title", {
    id: l
  }, t) : null, /* @__PURE__ */ L.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const J = /* @__PURE__ */ L.forwardRef(G);
function K({ rating: t, textAlign: l = "left" }) {
  if (!t || t < 1 || t > 5) return null;
  const a = l === "center" ? "flex justify-center" : l === "right" ? "flex justify-end" : "flex justify-start", n = [];
  for (let s = 1; s <= 5; s++)
    s <= t ? n.push(
      /* @__PURE__ */ e(Z, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    ) : n.push(
      /* @__PURE__ */ e(J, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, s)
    );
  return /* @__PURE__ */ e("div", { className: `${a} gap-4`, role: "img", "aria-label": `Rating: ${t} out of 5 stars`, children: n });
}
function Q({
  testimonial: t,
  name: l,
  role: a,
  rating: n = null,
  // number | null (1-5)
  imageUrl: s,
  logoUrl: g,
  mediaPosition: x = "top",
  // 'top' | 'bottom' | 'with-name'
  align: v = "left",
  // 'left' | 'center'
  withPadding: m = !1,
  // boolean
  className: c = "",
  ...r
}) {
  const i = n !== null && n >= 1 && n <= 5 ? Math.floor(n) : null, o = v === "center", y = `w-full ${m ? "p-testimonial-padding" : ""} ${c}`.trim(), h = o ? "text-center items-center" : "text-left items-start", d = [
    g ? /* @__PURE__ */ e(
      "img",
      {
        src: g,
        alt: l || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    s ? /* @__PURE__ */ e(
      "img",
      {
        src: s,
        alt: l || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), b = d.length > 0, N = b && x === "top", w = b && x === "bottom", $ = b && x === "with-name";
  return /* @__PURE__ */ e("figure", { className: y, ...r, ...r.attributes || {}, children: /* @__PURE__ */ C("div", { className: `flex flex-col gap-testimonial-spacing-y ${h}`, children: [
    N && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${o ? "justify-center" : "justify-start"}`, children: d }),
    i && /* @__PURE__ */ e(K, { rating: i, textAlign: o ? "center" : "left" }),
    t && /* @__PURE__ */ e("blockquote", { className: "m-0", children: /* @__PURE__ */ e("p", { className: "text-body-default", children: t }) }),
    (l || a || $) && /* @__PURE__ */ C(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${o ? "items-center" : "items-start"}`,
        children: [
          $ && /* @__PURE__ */ C("div", { className: `flex items-center gap-10 ${o ? "justify-center" : "justify-start"}`, children: [
            d,
            /* @__PURE__ */ C("div", { className: `flex flex-col ${o ? "items-center" : "items-start"}`, children: [
              l && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: l }),
              a && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: a })
            ] })
          ] }),
          !$ && /* @__PURE__ */ C(z, { children: [
            l && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: l }),
            a && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: a })
          ] })
        ]
      }
    ),
    w && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${o ? "justify-center" : "justify-start"}`, children: d })
  ] }) });
}
function ie({
  stats: t = [],
  statTextAlign: l = "center",
  // 'left' | 'center' | 'right'
  statFontSize: a = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  order: n = "stat-first",
  // 'testimonial-first' | 'stat-first'
  id: s = "",
  className: g = ""
}) {
  const x = (r) => {
    const { media: i, statMedia: o, ...y } = r;
    return {
      ...y,
      media: o,
      textAlign: r.textAlign || l,
      fontSize: r.fontSize || a
    };
  }, m = ((r) => {
    let i = r.statBackgroundColor;
    return i = i === "secondary" ? "bg-secondary text-white" : i === "primary" ? "bg-primary text-white" : i === "tertiary" ? "bg-tertiary text-white" : i === "white" ? "bg-white text-black" : "bg-transparent text-black", i;
  })(), c = (r, i) => /* @__PURE__ */ e("div", { className: `flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${i} ${m}`, children: /* @__PURE__ */ e(U, { ...x(r) }) });
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${g}`, id: s, children: t.map((r, i) => {
    const {
      testimonial: o,
      rating: y,
      mediaPosition: h,
      align: d,
      withPadding: b,
      logoUrl: N
    } = r, w = r.name ?? r.author, $ = r.role ?? r.authorTitle, f = r.imageUrl ?? r.authorImage, p = !!o, u = `min-h-auto! ${p ? "xl:w-1/2" : "w-full"}`, j = n === "testimonial-first";
    return /* @__PURE__ */ e("div", { ...r.attributes ?? {}, children: /* @__PURE__ */ C("div", { className: "flex flex-col items-stretch xl:flex-row", children: [
      !j && c(r, u),
      p && /* @__PURE__ */ e("div", { className: `flex items-center bg-grey-100 text-grey-950 justify-center ${u}`, children: /* @__PURE__ */ e(
        Q,
        {
          testimonial: o,
          name: w,
          role: $,
          imageUrl: f,
          logoUrl: N,
          rating: y,
          mediaPosition: h,
          align: d,
          withPadding: b
        }
      ) }),
      j && c(r, u)
    ] }) }, i);
  }) });
}
let F, T, R, S;
const X = async () => {
  if (!S) {
    const t = await import("react-pdf");
    S = t.pdfjs, T = t.Document, R = t.Page, S.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${S.version}/build/pdf.worker.min.mjs`;
  }
}, D = async () => {
  F || (F = (await import("react-pageflip")).default);
}, ee = _(({ children: t }, l) => /* @__PURE__ */ e("div", { ref: l, className: "w-full h-full overflow-hidden", children: t })), te = ({ pdfUrl: t, title: l, width: a = 280, height: n = 280, className: s = "" }) => {
  const [g, x] = P(0), [v, m] = P(null), [c, r] = P(!0), [i, o] = P(n / a), [y, h] = P(0), d = O(null);
  A(() => {
    Promise.all([X(), D()]).then(() => r(!1)).catch(() => {
      m("Failed to load flipbook");
    });
  }, []), A(() => {
    const f = d.current;
    if (!f) return;
    const p = new ResizeObserver(([u]) => {
      const j = Math.floor(u.contentRect.width);
      j > 0 && h(j);
    });
    return p.observe(f), () => p.disconnect();
  }, [c]);
  const b = y > 0 ? Math.floor(y / 2) : Math.floor(a / 2), N = Math.round(b * i), w = B(async (f) => {
    try {
      const u = (await f.getPage(1)).getViewport({ scale: 1 });
      u != null && u.width && (u != null && u.height) && o(u.height / u.width);
    } catch {
    }
    x(f.numPages || 0);
  }, []), $ = B((f) => {
    m((f == null ? void 0 : f.message) || "Failed to load PDF");
  }, []);
  return v ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : c ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: d, className: `w-full ${s}`.trim(), children: /* @__PURE__ */ C(
    T,
    {
      file: t,
      onLoadSuccess: w,
      onLoadError: $,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${s}`.trim(),
            style: { minHeight: `${N}px` },
            children: /* @__PURE__ */ e(R, { pageNumber: 1, width: a, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ e(
          F,
          {
            width: b,
            height: N,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": l || "Flipbook",
            children: Array.from({ length: g }, (f, p) => /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e(R, { pageNumber: p + 1, width: b, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, p))
          },
          `${b}-${N}`
        )
      ]
    }
  ) });
}, le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: te
}, Symbol.toStringTag, { value: "Module" }));
export {
  ie as default
};
