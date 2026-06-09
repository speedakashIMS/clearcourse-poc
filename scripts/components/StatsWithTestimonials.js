import { jsx as e, jsxs as k, Fragment as B } from "react/jsx-runtime";
import * as L from "react";
import { lazy as W, Suspense as I, useState as C, useRef as O, useEffect as A, useCallback as T, forwardRef as _ } from "react";
import q from "lottie-react";
const V = W(() => Promise.resolve().then(() => le)), H = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: l = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: r = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: a,
  videoUrl: i,
  lottieUrl: g,
  lottieData: x,
  iframeUrl: b,
  flipbookUrl: s,
  title: n,
  className: u = ""
}) => {
  var p;
  const f = typeof window < "u" && window.location.origin.indexOf("author") > -1, d = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, m = `relative w-full h-full ${l === "square" ? "aspect-square" : l === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), o = l === "default" ? `w-full h-full ${u}`.trim() : `absolute inset-0 w-full h-full ${u}`.trim(), y = "w-full h-full", $ = l === "default" ? `${o}`.trim() : o, v = r === "contain" ? "object-contain" : "object-cover", N = r === "contain" ? "xMidYMid meet" : "xMidYMid slice", c = `relative w-full ${u}`.trim(), h = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (a)
        return /* @__PURE__ */ e("div", { className: m, children: /* @__PURE__ */ e(
          "img",
          {
            src: a,
            alt: n || "Media image",
            className: `${v} ${o}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (i) {
        const P = i.includes("youtube.com/watch") || i.includes("youtu.be/");
        let j = i;
        P && (j = `https://www.youtube.com/embed/${i.includes("youtu.be/") ? i.split("youtu.be/")[1].split("?")[0] : (p = i.split("v=")[1]) == null ? void 0 : p.split("&")[0]}`);
        const z = (() => {
          if (!P) return j;
          try {
            const M = new URL(j);
            return M.searchParams.set("autoplay", "0"), M.searchParams.set("mute", "0"), M.searchParams.set("playsinline", "1"), M.searchParams.set("controls", "1"), M.searchParams.set("rel", "0"), M.toString();
          } catch {
            return j.includes("?") ? j.includes("autoplay=") ? j : `${j}&autoplay=0` : `${j}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: m, children: P ? /* @__PURE__ */ e(
          "iframe",
          {
            src: z,
            title: n || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${o} ${v}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${o} ${v}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: n || "Video player",
            children: /* @__PURE__ */ e("source", { src: i })
          }
        ) });
      }
      break;
    case "lottie":
      if (x)
        return f ? /* @__PURE__ */ e("div", { className: m, role: "img", "aria-label": n || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${o}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: m,
            role: "img",
            "aria-label": n || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${o} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              q,
              {
                animationData: x,
                loop: !d,
                autoplay: !d,
                className: y,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: N }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ e("div", { className: m, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (b)
        return /* @__PURE__ */ e("div", { className: m, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: b,
            title: n || "Iframe content",
            frameBorder: "0",
            className: `${$} ${v}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (s)
        return f ? /* @__PURE__ */ e("div", { className: c, role: "img", "aria-label": n || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${h}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e(I, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(V, { pdfUrl: s, title: n, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: m, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${l === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function U({
  media: t,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: l,
  description: r,
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: a = "center",
  // 'center' | 'left' | 'right'
  fontSize: i = "sm"
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
  }, s = ["center", "left", "right"].includes(a) ? a : "center", n = ["sm", "md", "lg", "xl"].includes(i) ? i : "sm", u = g[n], f = x[s], d = b[s], w = t ? {
    media: t.media || "image",
    aspect: t.aspect || "square",
    imageUrl: t.imageUrl,
    videoUrl: t.videoUrl,
    lottieUrl: t.lottieUrl,
    lottieData: t.lottieData,
    iframeUrl: t.iframeUrl,
    title: t.title || r || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ k(
    "div",
    {
      className: `flex flex-col items-${f} justify-center gap-stats-spacing-y`,
      style: { textAlign: s },
      children: [
        t && w && /* @__PURE__ */ e("div", { className: `flex flex-col items-${f} justify-${f}`, children: /* @__PURE__ */ e("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${d}`, children: /* @__PURE__ */ e(H, { ...w }) }) }),
        l && /* @__PURE__ */ e("div", { className: `${u} font-normal`, children: l }),
        r && /* @__PURE__ */ e("p", { children: r })
      ]
    }
  );
}
function Y({
  title: t,
  titleId: l,
  ...r
}, a) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: a,
    "aria-labelledby": l
  }, r), t ? /* @__PURE__ */ L.createElement("title", {
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
  ...r
}, a) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: a,
    "aria-labelledby": l
  }, r), t ? /* @__PURE__ */ L.createElement("title", {
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
  const r = l === "center" ? "flex justify-center" : l === "right" ? "flex justify-end" : "flex justify-start", a = [];
  for (let i = 1; i <= 5; i++)
    i <= t ? a.push(
      /* @__PURE__ */ e(Z, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, i)
    ) : a.push(
      /* @__PURE__ */ e(J, { className: "w-24 h-24 text-grey-800", "aria-hidden": "true" }, i)
    );
  return /* @__PURE__ */ e("div", { className: `${r} gap-4`, role: "img", "aria-label": `Rating: ${t} out of 5 stars`, children: a });
}
function Q({
  testimonial: t,
  name: l,
  role: r,
  rating: a = null,
  // number | null (1-5)
  imageUrl: i,
  logoUrl: g,
  mediaPosition: x = "top",
  // 'top' | 'bottom' | 'with-name'
  align: b = "left",
  // 'left' | 'center'
  withPadding: s = !1,
  // boolean
  className: n = "",
  ...u
}) {
  const f = a !== null && a >= 1 && a <= 5 ? Math.floor(a) : null, d = b === "center", w = `w-full ${s ? "p-testimonial-padding" : ""} ${n}`.trim(), m = d ? "text-center items-center" : "text-left items-start", o = [
    g ? /* @__PURE__ */ e(
      "img",
      {
        src: g,
        alt: l || "Logo",
        className: "h-40 w-auto"
      },
      "logo"
    ) : null,
    i ? /* @__PURE__ */ e(
      "img",
      {
        src: i,
        alt: l || "Profile",
        className: "h-48 w-48 rounded-full object-cover"
      },
      "image"
    ) : null
  ].filter(Boolean), y = o.length > 0, $ = y && x === "top", v = y && x === "bottom", N = y && x === "with-name";
  return /* @__PURE__ */ e("figure", { className: w, ...u, ...u.attributes || {}, children: /* @__PURE__ */ k("div", { className: `flex flex-col gap-testimonial-spacing-y ${m}`, children: [
    $ && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${d ? "justify-center" : "justify-start"}`, children: o }),
    f && /* @__PURE__ */ e(K, { rating: f, textAlign: d ? "center" : "left" }),
    t && /* @__PURE__ */ e("blockquote", { className: "m-0", children: /* @__PURE__ */ e("p", { className: "text-body-default", children: t }) }),
    (l || r || N) && /* @__PURE__ */ k(
      "figcaption",
      {
        className: `flex flex-col gap-6 ${d ? "items-center" : "items-start"}`,
        children: [
          N && /* @__PURE__ */ k("div", { className: `flex items-center gap-10 ${d ? "justify-center" : "justify-start"}`, children: [
            o,
            /* @__PURE__ */ k("div", { className: `flex flex-col ${d ? "items-center" : "items-start"}`, children: [
              l && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: l }),
              r && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: r })
            ] })
          ] }),
          !N && /* @__PURE__ */ k(B, { children: [
            l && /* @__PURE__ */ e("cite", { className: "text-ui-label-small not-italic", children: l }),
            r && /* @__PURE__ */ e("p", { className: "text-ui-label-small", children: r })
          ] })
        ]
      }
    ),
    v && /* @__PURE__ */ e("div", { className: `flex items-center gap-10 ${d ? "justify-center" : "justify-start"}`, children: o })
  ] }) });
}
function ae({
  stats: t = [],
  statTextAlign: l = "center",
  // 'left' | 'center' | 'right'
  statFontSize: r = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  order: a = "stat-first",
  // 'testimonial-first' | 'stat-first'
  id: i = "",
  className: g = ""
}) {
  const x = (s) => {
    const { media: n, statMedia: u, ...f } = s;
    return {
      ...f,
      media: u,
      textAlign: s.textAlign || l,
      fontSize: s.fontSize || r
    };
  }, b = (s, n) => /* @__PURE__ */ e("div", { className: `flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${n}`, children: /* @__PURE__ */ e(U, { ...x(s) }) });
  return !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: `container ${g}`, id: i, children: t.map((s, n) => {
    const {
      testimonial: u,
      rating: f,
      mediaPosition: d,
      align: w,
      withPadding: m,
      logoUrl: o
    } = s, y = s.name ?? s.author, $ = s.role ?? s.authorTitle, v = s.imageUrl ?? s.authorImage, N = !!u, c = `min-h-auto! ${N ? "xl:w-1/2" : "w-full"}`, h = a === "testimonial-first";
    return /* @__PURE__ */ e("div", { ...s.attributes ?? {}, children: /* @__PURE__ */ k("div", { className: "flex flex-col items-stretch xl:flex-row", children: [
      !h && b(s, c),
      N && /* @__PURE__ */ e("div", { className: `flex items-center bg-grey-100 text-grey-950 justify-center ${c}`, children: /* @__PURE__ */ e(
        Q,
        {
          testimonial: u,
          name: y,
          role: $,
          imageUrl: v,
          logoUrl: o,
          rating: f,
          mediaPosition: d,
          align: w,
          withPadding: m
        }
      ) }),
      h && b(s, c)
    ] }) }, n);
  }) });
}
let F, E, R, S;
const X = async () => {
  if (!S) {
    const t = await import("react-pdf");
    S = t.pdfjs, E = t.Document, R = t.Page, S.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${S.version}/build/pdf.worker.min.mjs`;
  }
}, D = async () => {
  F || (F = (await import("react-pageflip")).default);
}, ee = _(({ children: t }, l) => /* @__PURE__ */ e("div", { ref: l, className: "w-full h-full overflow-hidden", children: t })), te = ({ pdfUrl: t, title: l, width: r = 280, height: a = 280, className: i = "" }) => {
  const [g, x] = C(0), [b, s] = C(null), [n, u] = C(!0), [f, d] = C(a / r), [w, m] = C(0), o = O(null);
  A(() => {
    Promise.all([X(), D()]).then(() => u(!1)).catch(() => {
      s("Failed to load flipbook");
    });
  }, []), A(() => {
    const c = o.current;
    if (!c) return;
    const h = new ResizeObserver(([p]) => {
      const P = Math.floor(p.contentRect.width);
      P > 0 && m(P);
    });
    return h.observe(c), () => h.disconnect();
  }, [n]);
  const y = w > 0 ? Math.floor(w / 2) : Math.floor(r / 2), $ = Math.round(y * f), v = T(async (c) => {
    try {
      const p = (await c.getPage(1)).getViewport({ scale: 1 });
      p != null && p.width && (p != null && p.height) && d(p.height / p.width);
    } catch {
    }
    x(c.numPages || 0);
  }, []), N = T((c) => {
    s((c == null ? void 0 : c.message) || "Failed to load PDF");
  }, []);
  return b ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : n ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: o, className: `w-full ${i}`.trim(), children: /* @__PURE__ */ k(
    E,
    {
      file: t,
      onLoadSuccess: v,
      onLoadError: N,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${i}`.trim(),
            style: { minHeight: `${$}px` },
            children: /* @__PURE__ */ e(R, { pageNumber: 1, width: r, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ e(
          F,
          {
            width: y,
            height: $,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": l || "Flipbook",
            children: Array.from({ length: g }, (c, h) => /* @__PURE__ */ e(ee, { children: /* @__PURE__ */ e(R, { pageNumber: h + 1, width: y, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, h))
          },
          `${y}-${$}`
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
