import { jsxs as R, jsx as e } from "react/jsx-runtime";
import * as P from "react";
import { useState as C, useRef as F, useEffect as S, lazy as H, Suspense as T, useCallback as O, forwardRef as W } from "react";
import z from "lottie-react";
function B({
  title: t,
  titleId: r,
  ...s
}, n) {
  return /* @__PURE__ */ P.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, s), t ? /* @__PURE__ */ P.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ P.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const D = /* @__PURE__ */ P.forwardRef(B);
function V({
  title: t = "",
  content: r = "",
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in an `Accordion` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  colorVariant: s = "dark",
  // 'dark' | 'light'
  className: n = "",
  iconPosition: l = "left",
  // 'left' | 'right'
  hasIcon: p = !0,
  index: h = 0,
  attributes: y = {},
  // Ignore anything in the props, it should not be part of the integration
  ...g
}) {
  const [a, c] = C(!1), [x, v] = C(0), k = F(null), o = F(null), i = g.rotateIcon ?? !0, d = g.icon ?? null, m = {
    text: s === "dark" ? "grey-950" : "white",
    border: s === "dark" ? "grey-300" : "grey-200"
  }, b = () => {
    c(!a);
  };
  return S(() => {
    if (o.current)
      if (a) {
        const j = o.current.scrollHeight;
        v(j);
      } else
        v(0);
  }, [a]), /* @__PURE__ */ R(
    "div",
    {
      className: `accordion-item ${n} text-${m.text}`,
      ...y ?? {},
      children: [
        /* @__PURE__ */ R(
          "button",
          {
            id: `accordion-trigger-${h}`,
            className: "flex w-full p-accordion-header--padding justify-between items-center rounded-none cursor-pointer text-left focus:outline-none text-body-large",
            onClick: b,
            "aria-expanded": a,
            "aria-controls": `accordion-content-${h}`,
            children: [
              l === "left" && p && /* @__PURE__ */ e("div", { className: "mr-10 shrink-0", children: d || /* @__PURE__ */ e(
                D,
                {
                  className: `w-5 h-5 transition-transform duration-200 ${a && i ? "rotate-180" : ""}`
                }
              ) }),
              /* @__PURE__ */ e("div", { className: "flex items-center gap-10 flex-1 min-w-0", children: /* @__PURE__ */ e("span", { className: "flex-1", children: t }) }),
              l === "right" && p && /* @__PURE__ */ e("div", { className: "ml-10 shrink-0", children: d || /* @__PURE__ */ e(
                D,
                {
                  className: `w-5 h-5 transition-transform duration-200 ${a && i ? "rotate-180" : ""}`
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: k,
            id: `accordion-content-${h}`,
            role: "region",
            "aria-labelledby": `accordion-trigger-${h}`,
            "aria-hidden": !a,
            className: `text-body-default overflow-hidden transition-[height] duration-300 ease-in-out border-b border-${m.border}`,
            style: {
              height: `${x}px`
            },
            children: /* @__PURE__ */ e(
              "div",
              {
                ref: o,
                className: "accordion-content-inner wysiwyg p-10",
                children: typeof r == "string" ? /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: r } }) : /* @__PURE__ */ e("div", { children: r })
              }
            )
          }
        )
      ]
    }
  );
}
const Y = H(() => Promise.resolve().then(() => K)), q = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: r = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: s = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: n,
  videoUrl: l,
  lottieUrl: p,
  lottieData: h,
  iframeUrl: y,
  flipbookUrl: g,
  title: a,
  className: c = ""
}) => {
  var f;
  const x = typeof window < "u" && window.location.origin.indexOf("author") > -1, v = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = `relative w-full h-full ${r === "square" ? "aspect-square" : r === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), i = r === "default" ? `w-full h-full ${c}`.trim() : `absolute inset-0 w-full h-full ${c}`.trim(), d = "w-full h-full", m = r === "default" ? `${i}`.trim() : i, b = s === "contain" ? "object-contain" : "object-cover", j = s === "contain" ? "xMidYMid meet" : "xMidYMid slice", u = `relative w-full ${c}`.trim(), w = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (n)
        return /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e(
          "img",
          {
            src: n,
            alt: a || "Media image",
            className: `${b} ${i}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (l) {
        const L = l.includes("youtube.com/watch") || l.includes("youtu.be/");
        let $ = l;
        L && ($ = `https://www.youtube.com/embed/${l.includes("youtu.be/") ? l.split("youtu.be/")[1].split("?")[0] : (f = l.split("v=")[1]) == null ? void 0 : f.split("&")[0]}`);
        const E = (() => {
          if (!L) return $;
          try {
            const N = new URL($);
            return N.searchParams.set("autoplay", "0"), N.searchParams.set("mute", "0"), N.searchParams.set("playsinline", "1"), N.searchParams.set("controls", "1"), N.searchParams.set("rel", "0"), N.toString();
          } catch {
            return $.includes("?") ? $.includes("autoplay=") ? $ : `${$}&autoplay=0` : `${$}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: o, children: L ? /* @__PURE__ */ e(
          "iframe",
          {
            src: E,
            title: a || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${i} ${b}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${i} ${b}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: a || "Video player",
            children: /* @__PURE__ */ e("source", { src: l })
          }
        ) });
      }
      break;
    case "lottie":
      if (h)
        return x ? /* @__PURE__ */ e("div", { className: o, role: "img", "aria-label": a || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${i}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: o,
            role: "img",
            "aria-label": a || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${i} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              z,
              {
                animationData: h,
                loop: !v,
                autoplay: !v,
                className: d,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: j }
              }
            ) })
          }
        );
      if (p)
        return /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (y)
        return /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: y,
            title: a || "Iframe content",
            frameBorder: "0",
            className: `${m} ${b}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (g)
        return x ? /* @__PURE__ */ e("div", { className: u, role: "img", "aria-label": a || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${w}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: u, children: /* @__PURE__ */ e("div", { className: w, children: /* @__PURE__ */ e(T, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(Y, { pdfUrl: g, title: a, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${r === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function te({
  list: t = [],
  columns: r = 1,
  // 1 | 2
  width: s = "full",
  // 'full' | 'constrained' *only applies when columns is 1
  media: n = null,
  // enable if 2 columns - object with { type: 'image' | 'video' | 'lottie' | 'iframe', imageUrl?, videoUrl?, lottieUrl?, lottieData?, iframeUrl?, title? }
  mediaPosition: l = "left",
  // 'left' | 'right'
  iconPosition: p = "left",
  colorVariant: h = "dark",
  // 'dark' | 'light'
  className: y = "",
  id: g = "",
  ...a
}) {
  if (!t || t.length === 0)
    return null;
  const c = !!n && r === 2, x = a.hasIcon ?? !0, v = () => r === 1 && s === "constrained" ? "max-w-[600px] mx-auto" : "", k = c && l === "right" ? "lg:order-1" : c && l === "left" ? "lg:order-2" : "", o = c && l === "right" ? "lg:order-2" : c && l === "left" ? "lg:order-1" : "", i = () => /* @__PURE__ */ e(
    "div",
    {
      className: `${r === 2 ? "w-full lg:w-1/2" : "w-full"} ${v()} ${k}`,
      children: t.map((m, b) => /* @__PURE__ */ e(
        V,
        {
          title: m.title,
          content: m.content,
          hasIcon: x,
          iconPosition: p,
          attributes: m.attributes,
          colorVariant: h
        },
        b
      ))
    }
  ), d = () => c ? /* @__PURE__ */ e(
    "div",
    {
      className: `w-full lg:w-1/2 ${o} min-h-[220px] self-start`,
      children: /* @__PURE__ */ e(
        q,
        {
          media: n.type || "image",
          imageUrl: n.imageUrl,
          videoUrl: n.videoUrl,
          lottieUrl: n.lottieUrl,
          lottieData: n.lottieData,
          iframeUrl: n.iframeUrl,
          title: n.title || "",
          className: "w-full"
        }
      )
    }
  ) : null;
  return r === 1 ? /* @__PURE__ */ e("div", { className: `container ${y}`, children: /* @__PURE__ */ e(i, {}) }) : /* @__PURE__ */ R("div", { id: g, className: `container ${y} flex flex-col lg:flex-row lg:items-start gap-section-spacing-x`, children: [
    /* @__PURE__ */ e(i, {}),
    /* @__PURE__ */ e(d, {})
  ] });
}
let A, _, I, M;
const U = async () => {
  if (!M) {
    const t = await import("react-pdf");
    M = t.pdfjs, _ = t.Document, I = t.Page, M.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${M.version}/build/pdf.worker.min.mjs`;
  }
}, G = async () => {
  A || (A = (await import("react-pageflip")).default);
}, J = W(({ children: t }, r) => /* @__PURE__ */ e("div", { ref: r, className: "w-full h-full overflow-hidden", children: t })), Z = ({ pdfUrl: t, title: r, width: s = 280, height: n = 280, className: l = "" }) => {
  const [p, h] = C(0), [y, g] = C(null), [a, c] = C(!0), [x, v] = C(n / s), [k, o] = C(0), i = F(null);
  S(() => {
    Promise.all([U(), G()]).then(() => c(!1)).catch(() => {
      g("Failed to load flipbook");
    });
  }, []), S(() => {
    const u = i.current;
    if (!u) return;
    const w = new ResizeObserver(([f]) => {
      const L = Math.floor(f.contentRect.width);
      L > 0 && o(L);
    });
    return w.observe(u), () => w.disconnect();
  }, [a]);
  const d = k > 0 ? Math.floor(k / 2) : Math.floor(s / 2), m = Math.round(d * x), b = O(async (u) => {
    try {
      const f = (await u.getPage(1)).getViewport({ scale: 1 });
      f != null && f.width && (f != null && f.height) && v(f.height / f.width);
    } catch {
    }
    h(u.numPages || 0);
  }, []), j = O((u) => {
    g((u == null ? void 0 : u.message) || "Failed to load PDF");
  }, []);
  return y ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : a ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: i, className: `w-full ${l}`.trim(), children: /* @__PURE__ */ R(
    _,
    {
      file: t,
      onLoadSuccess: b,
      onLoadError: j,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        p === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${l}`.trim(),
            style: { minHeight: `${m}px` },
            children: /* @__PURE__ */ e(I, { pageNumber: 1, width: s, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        p > 1 && /* @__PURE__ */ e(
          A,
          {
            width: d,
            height: m,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": r || "Flipbook",
            children: Array.from({ length: p }, (u, w) => /* @__PURE__ */ e(J, { children: /* @__PURE__ */ e(I, { pageNumber: w + 1, width: d, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, w))
          },
          `${d}-${m}`
        )
      ]
    }
  ) });
}, K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z
}, Symbol.toStringTag, { value: "Module" }));
export {
  te as default
};
