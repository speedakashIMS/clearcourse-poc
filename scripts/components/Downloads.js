import { jsx as e, jsxs as j, Fragment as H } from "react/jsx-runtime";
import * as R from "react";
import { lazy as V, Suspense as _, useState as C, useRef as F, useEffect as S, useCallback as z, forwardRef as E } from "react";
import T from "lottie-react";
const W = V(() => Promise.resolve().then(() => ee)), Y = ({
  media: l = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: t = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: s = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: a,
  videoUrl: i,
  lottieUrl: d,
  lottieData: n,
  iframeUrl: p,
  flipbookUrl: u,
  title: r,
  className: g = ""
}) => {
  var v;
  const c = typeof window < "u" && window.location.origin.indexOf("author") > -1, m = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, f = `relative w-full h-full ${t === "square" ? "aspect-square" : t === "rectangle" ? "aspect-[4/3]" : l === "video" ? "aspect-video" : ""}`.trim(), h = t === "default" ? `w-full h-full ${g}`.trim() : `absolute inset-0 w-full h-full ${g}`.trim(), o = "w-full h-full", w = t === "default" ? `${h}`.trim() : h, N = s === "contain" ? "object-contain" : "object-cover", P = s === "contain" ? "xMidYMid meet" : "xMidYMid slice", x = `relative w-full ${g}`.trim(), y = "w-full min-h-[280px]";
  switch (l) {
    case "image":
      if (a)
        return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e(
          "img",
          {
            src: a,
            alt: r || "Media image",
            className: `${N} ${h}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (i) {
        const L = i.includes("youtube.com/watch") || i.includes("youtu.be/");
        let $ = i;
        L && ($ = `https://www.youtube.com/embed/${i.includes("youtu.be/") ? i.split("youtu.be/")[1].split("?")[0] : (v = i.split("v=")[1]) == null ? void 0 : v.split("&")[0]}`);
        const O = (() => {
          if (!L) return $;
          try {
            const k = new URL($);
            return k.searchParams.set("autoplay", "0"), k.searchParams.set("mute", "0"), k.searchParams.set("playsinline", "1"), k.searchParams.set("controls", "1"), k.searchParams.set("rel", "0"), k.toString();
          } catch {
            return $.includes("?") ? $.includes("autoplay=") ? $ : `${$}&autoplay=0` : `${$}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: f, children: L ? /* @__PURE__ */ e(
          "iframe",
          {
            src: O,
            title: r || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${h} ${N}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${h} ${N}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: r || "Video player",
            children: /* @__PURE__ */ e("source", { src: i })
          }
        ) });
      }
      break;
    case "lottie":
      if (n)
        return c ? /* @__PURE__ */ e("div", { className: f, role: "img", "aria-label": r || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${h}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: f,
            role: "img",
            "aria-label": r || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${h} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              T,
              {
                animationData: n,
                loop: !m,
                autoplay: !m,
                className: o,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: P }
              }
            ) })
          }
        );
      if (d)
        return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (p)
        return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: p,
            title: r || "Iframe content",
            frameBorder: "0",
            className: `${w} ${N}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (u)
        return c ? /* @__PURE__ */ e("div", { className: x, role: "img", "aria-label": r || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${y}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: x, children: /* @__PURE__ */ e("div", { className: y, children: /* @__PURE__ */ e(_, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(W, { pdfUrl: u, title: r, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${t === "default" ? "" : "absolute inset-0"}`.trim(), children: l ? `${l.charAt(0).toUpperCase() + l.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, q = ({
  text: l = "Button",
  href: t = void 0,
  variant: s = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: a = "btn-md",
  // btn-sm , btn-md
  className: i = "",
  disabled: d = !1,
  onClick: n = void 0,
  attributes: p = {},
  ...u
}) => {
  const g = (b) => {
    switch (b) {
      case "light":
        return "btn-light";
      case "dark":
        return "btn-dark";
      case "light-outlined":
        return "btn-light-outlined";
      case "dark-outlined":
        return "btn-dark-outlined";
      case "light-no-outline":
        return "btn-light-no-outline";
      case "dark-no-outline":
        return "btn-dark-no-outline";
      default:
        return "btn-light";
    }
  }, c = (b) => {
    switch (b) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, m = `btn ${g(s)} ${c(a)} ${i}`.trim();
  return t ? /* @__PURE__ */ e(
    "a",
    {
      href: t,
      className: m,
      onClick: n,
      ...u,
      ...p ?? {},
      children: l
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: u.type || "button",
      className: m,
      disabled: d,
      onClick: n,
      ...u,
      ...p ?? {},
      children: l
    }
  );
};
function G({
  title: l,
  titleId: t,
  ...s
}, a) {
  return /* @__PURE__ */ R.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: a,
    "aria-labelledby": t
  }, s), l ? /* @__PURE__ */ R.createElement("title", {
    id: t
  }, l) : null, /* @__PURE__ */ R.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const D = /* @__PURE__ */ R.forwardRef(G);
function J({
  title: l = "",
  content: t = "",
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in an `Accordion` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  colorVariant: s = "dark",
  // 'dark' | 'light'
  className: a = "",
  iconPosition: i = "left",
  // 'left' | 'right'
  hasIcon: d = !0,
  index: n = 0,
  attributes: p = {},
  // Ignore anything in the props, it should not be part of the integration
  ...u
}) {
  const [r, g] = C(!1), [c, m] = C(0), b = F(null), f = F(null), h = u.rotateIcon ?? !0, o = u.icon ?? null, w = {
    text: s === "dark" ? "grey-950" : "white",
    border: s === "dark" ? "grey-300" : "grey-200"
  }, N = () => {
    g(!r);
  };
  return S(() => {
    if (f.current)
      if (r) {
        const P = f.current.scrollHeight;
        m(P);
      } else
        m(0);
  }, [r]), /* @__PURE__ */ j(
    "div",
    {
      className: `accordion-item ${a} text-${w.text}`,
      ...p ?? {},
      children: [
        /* @__PURE__ */ j(
          "button",
          {
            id: `accordion-trigger-${n}`,
            className: "flex w-full p-accordion-header--padding justify-between items-center rounded-none cursor-pointer text-left focus:outline-none text-body-large",
            onClick: N,
            "aria-expanded": r,
            "aria-controls": `accordion-content-${n}`,
            children: [
              i === "left" && d && /* @__PURE__ */ e("div", { className: "mr-10 shrink-0", children: o || /* @__PURE__ */ e(
                D,
                {
                  className: `w-5 h-5 transition-transform duration-200 ${r && h ? "rotate-180" : ""}`
                }
              ) }),
              /* @__PURE__ */ e("div", { className: "flex items-center gap-10 flex-1 min-w-0", children: /* @__PURE__ */ e("span", { className: "flex-1", children: l }) }),
              i === "right" && d && /* @__PURE__ */ e("div", { className: "ml-10 shrink-0", children: o || /* @__PURE__ */ e(
                D,
                {
                  className: `w-5 h-5 transition-transform duration-200 ${r && h ? "rotate-180" : ""}`
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: b,
            id: `accordion-content-${n}`,
            role: "region",
            "aria-labelledby": `accordion-trigger-${n}`,
            "aria-hidden": !r,
            className: `text-body-default overflow-hidden transition-[height] duration-300 ease-in-out border-b border-${w.border}`,
            style: {
              height: `${c}px`
            },
            children: /* @__PURE__ */ e(
              "div",
              {
                ref: f,
                className: "accordion-content-inner wysiwyg p-10",
                children: typeof t == "string" ? /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ e("div", { children: t })
              }
            )
          }
        )
      ]
    }
  );
}
function U({
  variant: l = "vertical",
  // 'vertical' | 'horizontal'
  media: t = null,
  // Media props: { media, imageUrl, videoUrl, aspect, title, ... }
  logoUrl: s = null,
  // Logo URL
  title: a = "",
  description: i = "",
  buttons: d = [],
  // [{ text, href, variant, size, onClick }]
  accordions: n = [],
  // [{ title, content }]
  className: p = "",
  ...u
}) {
  const r = l === "vertical", g = l === "horizontal", c = [
    "flex bg-white overflow-hidden rounded-16 text-white h-full",
    r ? "flex-col" : "flex-col xl:flex-row",
    p
  ].filter(Boolean).join(" "), m = [
    "w-full flex-shrink-0 aspect-[16/9]",
    r ? "h-[269px]" : "h-[269px] xl:w-1/2 xl:min-h-0 xl:h-auto"
  ].filter(Boolean).join(" "), b = [
    "w-full flex flex-col flex-1 gap-downloads-spacing-y p-downloads-padding-x p-downloads-padding-y bg-grey-600",
    g ? "xl:w-1/2" : ""
  ].filter(Boolean).join(" "), f = /* @__PURE__ */ j(H, { children: [
    /* @__PURE__ */ j("div", { children: [
      a && /* @__PURE__ */ e("h3", { className: "text-headings-h3 font-semibold m-0", children: a }),
      i && /* @__PURE__ */ e("p", { className: "text-body-default m-0 mt-10", children: i })
    ] }),
    d && d.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-8", children: d.map((o, w) => /* @__PURE__ */ e(
      q,
      {
        text: o.text,
        href: o.href,
        variant: o.variant || "light",
        size: o.size || "btn-md",
        onClick: o.onClick
      },
      w
    )) }),
    n && n.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-col gap-0", children: n.map((o, w) => /* @__PURE__ */ e(
      J,
      {
        title: o.title,
        content: o.content,
        iconPosition: "left",
        index: w,
        colorVariant: "light"
      },
      w
    )) })
  ] }), h = t && /* @__PURE__ */ j("div", { className: `${m} relative`, children: [
    /* @__PURE__ */ e(
      Y,
      {
        media: t.media || "image",
        aspect: t.aspect || "default",
        imageUrl: t.imageUrl,
        videoUrl: t.videoUrl,
        lottieUrl: t.lottieUrl,
        lottieData: t.lottieData,
        iframeUrl: t.iframeUrl,
        title: t.title || a,
        className: "w-full h-full object-cover"
      }
    ),
    s && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2  p-downloads-logo--padding ", children: /* @__PURE__ */ e(
      "img",
      {
        src: s,
        alt: `${a} logo`,
        className: "object-contain h-[48px] border-2 border-grey-600 rounded-10"
      }
    ) })
  ] });
  return /* @__PURE__ */ j("div", { className: c, ...u, ...u.attributes || {}, children: [
    h,
    /* @__PURE__ */ e("div", { className: b, children: f })
  ] });
}
function ae({
  id: l,
  variant: t = "vertical",
  columns: s = 1,
  items: a = [],
  className: i = ""
}) {
  const d = ["vertical", "horizontal"].includes(t) ? t : "vertical", n = d === "vertical";
  if (!a || a.length === 0)
    return null;
  const p = n ? Math.max(1, Math.min(4, Number(s) || 1)) : 1, u = n ? {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4"
  }[p] || "xl:grid-cols-1" : "", r = [
    "container grid grid-cols-1 gap-section-spacing-x items-stretch",
    n && a.length > 1 ? "md:grid-cols-2" : "",
    n ? u : "",
    i
  ].filter(Boolean).join(" "), g = n && a.length > 1 && a.length % 2 === 1;
  return /* @__PURE__ */ e("div", { ...l && { id: l }, className: r, children: a.map((c, m) => {
    const b = m === a.length - 1;
    return /* @__PURE__ */ e("div", { className: `h-full ${g && b ? "md:col-span-2 xl:col-span-1" : ""}`.trim(), children: /* @__PURE__ */ e(
      U,
      {
        variant: d,
        media: c.media,
        title: c.title,
        description: c.description,
        buttons: c.buttons,
        accordions: c.accordions,
        className: "h-full",
        ...c
      }
    ) }, c.key ?? m);
  }) });
}
let B, I, A, M;
const Z = async () => {
  if (!M) {
    const l = await import("react-pdf");
    M = l.pdfjs, I = l.Document, A = l.Page, M.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${M.version}/build/pdf.worker.min.mjs`;
  }
}, K = async () => {
  B || (B = (await import("react-pageflip")).default);
}, Q = E(({ children: l }, t) => /* @__PURE__ */ e("div", { ref: t, className: "w-full h-full overflow-hidden", children: l })), X = ({ pdfUrl: l, title: t, width: s = 280, height: a = 280, className: i = "" }) => {
  const [d, n] = C(0), [p, u] = C(null), [r, g] = C(!0), [c, m] = C(a / s), [b, f] = C(0), h = F(null);
  S(() => {
    Promise.all([Z(), K()]).then(() => g(!1)).catch(() => {
      u("Failed to load flipbook");
    });
  }, []), S(() => {
    const x = h.current;
    if (!x) return;
    const y = new ResizeObserver(([v]) => {
      const L = Math.floor(v.contentRect.width);
      L > 0 && f(L);
    });
    return y.observe(x), () => y.disconnect();
  }, [r]);
  const o = b > 0 ? Math.floor(b / 2) : Math.floor(s / 2), w = Math.round(o * c), N = z(async (x) => {
    try {
      const v = (await x.getPage(1)).getViewport({ scale: 1 });
      v != null && v.width && (v != null && v.height) && m(v.height / v.width);
    } catch {
    }
    n(x.numPages || 0);
  }, []), P = z((x) => {
    u((x == null ? void 0 : x.message) || "Failed to load PDF");
  }, []);
  return p ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : r ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: h, className: `w-full ${i}`.trim(), children: /* @__PURE__ */ j(
    I,
    {
      file: l,
      onLoadSuccess: N,
      onLoadError: P,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        d === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${i}`.trim(),
            style: { minHeight: `${w}px` },
            children: /* @__PURE__ */ e(A, { pageNumber: 1, width: s, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        d > 1 && /* @__PURE__ */ e(
          B,
          {
            width: o,
            height: w,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": t || "Flipbook",
            children: Array.from({ length: d }, (x, y) => /* @__PURE__ */ e(Q, { children: /* @__PURE__ */ e(A, { pageNumber: y + 1, width: o, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, y))
          },
          `${o}-${w}`
        )
      ]
    }
  ) });
}, ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X
}, Symbol.toStringTag, { value: "Module" }));
export {
  ae as default
};
