import { jsxs as M, jsx as e } from "react/jsx-runtime";
import * as c from "react";
import { lazy as U, Suspense as z, useState as j, useRef as C, useEffect as S, useCallback as _, forwardRef as V } from "react";
import W from "lottie-react";
const Z = ({
  variant: t = "form-only",
  form: r,
  content: l,
  formAlignment: n = "left"
}) => {
  const a = ["form-only", "form-media", "form-text", "form-accordion"].includes(t) ? t : "form-only", s = ["left", "right"].includes(n) ? n : "left", o = () => a === "form-only" ? "w-full xl:w-1/2 xl:mx-auto" : "w-full xl:w-1/2", i = () => a === "form-only" ? "w-full" : `
        w-full flex flex-col gap-section-spacing-y xl:flex-row xl:container
        ${a !== "form-media" ? "max-xl:container" : ""}
      `, m = () => a === "form-only" ? "" : `
     max-xl:container 
     ${t !== "form-media" ? "max-xl:px-0!" : ""}
      ${s === "left" ? "order-1" : "order-2"}
    `, d = () => a === "form-only" ? "" : s === "left" ? "order-2" : "order-1", u = i(), y = `${o()} ${m()}`, g = `${o()} ${d()}`;
  return /* @__PURE__ */ M("div", { className: u, children: [
    /* @__PURE__ */ e("div", { className: y, children: r }),
    a !== "form-only" && l && /* @__PURE__ */ e("div", { className: g, children: l })
  ] });
}, Y = U(() => Promise.resolve().then(() => ue)), D = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: r = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: l = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: n,
  videoUrl: a,
  lottieUrl: s,
  lottieData: o,
  iframeUrl: i,
  flipbookUrl: m,
  title: d,
  className: u = ""
}) => {
  var p;
  const y = typeof window < "u" && window.location.origin.indexOf("author") > -1, g = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, b = `relative w-full h-full ${r === "square" ? "aspect-square" : r === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), f = r === "default" ? `w-full h-full ${u}`.trim() : `absolute inset-0 w-full h-full ${u}`.trim(), x = "w-full h-full", N = r === "default" ? `${f}`.trim() : f, k = l === "contain" ? "object-contain" : "object-cover", F = l === "contain" ? "xMidYMid meet" : "xMidYMid slice", h = `relative w-full ${u}`.trim(), w = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (n)
        return /* @__PURE__ */ e("div", { className: b, children: /* @__PURE__ */ e(
          "img",
          {
            src: n,
            alt: d || "Media image",
            className: `${k} ${f}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (a) {
        const R = a.includes("youtube.com/watch") || a.includes("youtu.be/");
        let $ = a;
        R && ($ = `https://www.youtube.com/embed/${a.includes("youtu.be/") ? a.split("youtu.be/")[1].split("?")[0] : (p = a.split("v=")[1]) == null ? void 0 : p.split("&")[0]}`);
        const B = (() => {
          if (!R) return $;
          try {
            const L = new URL($);
            return L.searchParams.set("autoplay", "0"), L.searchParams.set("mute", "0"), L.searchParams.set("playsinline", "1"), L.searchParams.set("controls", "1"), L.searchParams.set("rel", "0"), L.toString();
          } catch {
            return $.includes("?") ? $.includes("autoplay=") ? $ : `${$}&autoplay=0` : `${$}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: b, children: R ? /* @__PURE__ */ e(
          "iframe",
          {
            src: B,
            title: d || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${f} ${k}`.trim()
          }
        ) : /* @__PURE__ */ e(
          "video",
          {
            className: `${f} ${k}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: d || "Video player",
            children: /* @__PURE__ */ e("source", { src: a })
          }
        ) });
      }
      break;
    case "lottie":
      if (o)
        return y ? /* @__PURE__ */ e("div", { className: b, role: "img", "aria-label": d || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${f}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: b,
            role: "img",
            "aria-label": d || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${f} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              W,
              {
                animationData: o,
                loop: !g,
                autoplay: !g,
                className: x,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: F }
              }
            ) })
          }
        );
      if (s)
        return /* @__PURE__ */ e("div", { className: b, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (i)
        return /* @__PURE__ */ e("div", { className: b, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: i,
            title: d || "Iframe content",
            frameBorder: "0",
            className: `${N} ${k}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (m)
        return y ? /* @__PURE__ */ e("div", { className: h, role: "img", "aria-label": d || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${w}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: h, children: /* @__PURE__ */ e("div", { className: w, children: /* @__PURE__ */ e(z, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(Y, { pdfUrl: m, title: d, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: b, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${r === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function q({
  title: t,
  titleId: r,
  ...l
}, n) {
  return /* @__PURE__ */ c.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, l), t ? /* @__PURE__ */ c.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ c.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",
    clipRule: "evenodd"
  }));
}
const G = /* @__PURE__ */ c.forwardRef(q);
function J({
  title: t,
  titleId: r,
  ...l
}, n) {
  return /* @__PURE__ */ c.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, l), t ? /* @__PURE__ */ c.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ c.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const O = /* @__PURE__ */ c.forwardRef(J);
function K({
  title: t,
  titleId: r,
  ...l
}, n) {
  return /* @__PURE__ */ c.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, l), t ? /* @__PURE__ */ c.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ c.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
  }));
}
const Q = /* @__PURE__ */ c.forwardRef(K);
function X({
  title: t,
  titleId: r,
  ...l
}, n) {
  return /* @__PURE__ */ c.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, l), t ? /* @__PURE__ */ c.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ c.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }), /* @__PURE__ */ c.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  }));
}
const ee = /* @__PURE__ */ c.forwardRef(X);
function te({
  title: t,
  titleId: r,
  ...l
}, n) {
  return /* @__PURE__ */ c.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: n,
    "aria-labelledby": r
  }, l), t ? /* @__PURE__ */ c.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ c.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
  }));
}
const re = /* @__PURE__ */ c.forwardRef(te);
function le({
  title: t = "",
  content: r = "",
  media: l = null,
  // (optional) `Media` molecule props { media, imageUrl, videoUrl, etc. }
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in an `Accordion` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  colorVariant: n = "dark",
  // 'dark' | 'light'
  className: a = "",
  iconPosition: s = "left",
  // 'left' | 'right'
  hasIcon: o = !0,
  index: i = 0,
  attributes: m = {},
  ...d
}) {
  const [u, y] = j(!1), [g, v] = j(0), b = C(null), f = C(null), x = d.rotateIcon ?? !0, N = {
    text: n === "dark" ? "grey-950" : "white",
    border: n === "dark" ? "grey-300" : "grey-200"
  }, k = () => {
    y(!u);
  };
  return S(() => {
    if (f.current)
      if (u) {
        const F = f.current.scrollHeight;
        v(F);
      } else
        v(0);
  }, [u]), /* @__PURE__ */ M(
    "div",
    {
      className: `accordion-item ${a} text-${N.text}`,
      ...m ?? {},
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            id: `accordion-trigger-${i}`,
            className: "flex w-full p-accordion-header--padding justify-between items-center rounded-none cursor-pointer text-left focus:outline-none text-body-large",
            onClick: k,
            "aria-expanded": u,
            "aria-controls": `accordion-content-${i}`,
            children: [
              s === "left" && o && /* @__PURE__ */ e(
                O,
                {
                  className: `w-5 h-5 mr-10 transition-transform duration-200 shrink-0 ${u && x ? "rotate-180" : ""}`
                }
              ),
              /* @__PURE__ */ M("div", { className: "flex items-center gap-10 flex-1 min-w-0", children: [
                l && /* @__PURE__ */ e("div", { className: "max-w-[138px] max-h-[62px] shrink-0", children: /* @__PURE__ */ e(
                  D,
                  {
                    media: l.media || "image",
                    aspect: "default",
                    imageUrl: l.imageUrl,
                    videoUrl: l.videoUrl,
                    lottieUrl: l.lottieUrl,
                    lottieData: l.lottieData,
                    iframeUrl: l.iframeUrl,
                    title: l.title || t,
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ e("span", { className: "flex-1", children: t })
              ] }),
              s === "right" && o && /* @__PURE__ */ e(
                O,
                {
                  className: `w-5 h-5 ml-10 transition-transform duration-200 shrink-0 ${u && x ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            ref: b,
            id: `accordion-content-${i}`,
            role: "region",
            "aria-labelledby": `accordion-trigger-${i}`,
            "aria-hidden": !u,
            className: `text-body-default overflow-hidden transition-[height] duration-300 ease-in-out border-b border-${N.border}`,
            style: {
              height: `${g}px`
            },
            children: /* @__PURE__ */ e(
              "div",
              {
                ref: f,
                className: "accordion-content-inner wysiwyg p-10 min-h-[120px]",
                children: typeof r == "string" ? /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: r } }) : /* @__PURE__ */ e("div", { children: r })
              }
            )
          }
        )
      ]
    }
  );
}
const ae = ({
  text: t = "Button",
  href: r = void 0,
  variant: l = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size: n = "btn-md",
  // btn-sm , btn-md
  className: a = "",
  disabled: s = !1,
  onClick: o = void 0,
  attributes: i = {},
  ...m
}) => {
  const u = (v) => {
    switch (v) {
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
      case "secondary":
        return "btn-primary";
      default:
        return "btn-light";
    }
  }, y = (v) => {
    switch (v) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, g = `btn ${u(l)} ${y(n)} ${a}`.trim();
  return r ? /* @__PURE__ */ e(
    "a",
    {
      href: r,
      className: g,
      onClick: o,
      ...m,
      ...i ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: m.type || "button",
      className: g,
      disabled: s,
      onClick: o,
      ...m,
      ...i ?? {},
      children: t
    }
  );
}, A = {
  primary: "text-grey-950",
  secondary: "text-grey-700",
  tertiary: "text-grey-500"
}, T = {
  address: ee,
  phone: re,
  email: Q
}, ne = (t) => t && typeof t == "string" && T[t] ? T[t] : null, se = (t) => {
  var n;
  if (!t) return null;
  const r = t.contactItems ?? t.addressItems;
  return /* @__PURE__ */ M("div", { className: "space-y-4 text-grey-950 xl:p-24", children: [
    (() => {
      var a;
      return (a = t.titleItems) != null && a.length ? /* @__PURE__ */ e("h3", { className: "text-headings-h3 font-semibold leading-tight", children: t.titleItems.map((s, o) => {
        const i = s.fontStyle === "accent" ? "font-accent" : "", m = A[s.color] ?? A.primary;
        return /* @__PURE__ */ e("span", { className: `${i} ${m}`.trim(), children: s.text }, o);
      }) }) : t.title ? /* @__PURE__ */ e("h3", { className: "text-headings-h3 font-semibold", children: t.title }) : null;
    })(),
    t.text && /* @__PURE__ */ e("div", { className: "text-body-default mt-10", children: t.text }),
    t.description && /* @__PURE__ */ e("p", { className: "text-body-default mt-10", children: t.description }),
    t.html && /* @__PURE__ */ e(
      "div",
      {
        className: "text-body-default mt-10 [&_a]:underline",
        dangerouslySetInnerHTML: { __html: t.html }
      }
    ),
    t.checkItems && /* @__PURE__ */ e("ul", { className: "space-y-10 mt-20", children: t.checkItems.map((a, s) => /* @__PURE__ */ M("li", { className: "flex items-start gap-10 text-body-large", children: [
      /* @__PURE__ */ e(G, { className: "w-5 h-5 text-grey-950 shrink-0 mt-1" }),
      /* @__PURE__ */ e("span", { children: a })
    ] }, s)) }),
    (r == null ? void 0 : r.length) > 0 && /* @__PURE__ */ e("ul", { className: "space-y-10 mt-20", children: r.map((a, s) => {
      const o = ne(a.icon);
      let i;
      return a.html ? i = a.href ? /* @__PURE__ */ e(
        "a",
        {
          href: a.href,
          className: "text-body-large text-grey-950 underline hover:opacity-80",
          dangerouslySetInnerHTML: { __html: a.html }
        }
      ) : /* @__PURE__ */ e(
        "span",
        {
          className: "text-body-large [&_a]:underline",
          dangerouslySetInnerHTML: { __html: a.html }
        }
      ) : a.href ? i = /* @__PURE__ */ e(
        "a",
        {
          href: a.href,
          className: "text-body-large text-grey-950 underline hover:opacity-80",
          children: a.text
        }
      ) : i = /* @__PURE__ */ e("span", { className: "text-body-large", children: a.text }), /* @__PURE__ */ M("li", { className: "flex items-start gap-10", children: [
        o && /* @__PURE__ */ e(o, { className: "w-5 h-5 text-grey-950 shrink-0 mt-1", "aria-hidden": !0 }),
        /* @__PURE__ */ e("div", { children: i })
      ] }, s);
    }) }),
    ((n = t.button) == null ? void 0 : n.text) && /* @__PURE__ */ e("div", { className: "mt-20", children: /* @__PURE__ */ e(
      ae,
      {
        text: t.button.text,
        href: t.button.href,
        variant: t.button.variant ?? "dark",
        size: t.button.size ?? "btn-md",
        className: t.button.className ?? "",
        onClick: t.button.onClick,
        attributes: t.button.attributes ?? {}
      }
    ) })
  ] });
}, pe = ({
  variant: t = "form-only",
  formAlignment: r = "left",
  media: l,
  accordions: n = [],
  textContent: a,
  form: s = null
}) => {
  const o = ["form-only", "form-media", "form-text", "form-accordion"].includes(t) ? t : "form-only", i = ["left", "right"].includes(r) ? r : "left";
  return /* @__PURE__ */ e(
    Z,
    {
      variant: o,
      formAlignment: i,
      form: s,
      content: (() => {
        switch (o) {
          case "form-media":
            return l ? /* @__PURE__ */ e("div", { className: "h-auto", children: /* @__PURE__ */ e(
              D,
              {
                media: l.media || "image",
                aspect: l.aspect || "default",
                imageUrl: l.imageUrl,
                videoUrl: l.videoUrl,
                lottieUrl: l.lottieUrl,
                lottieData: l.lottieData,
                iframeUrl: l.iframeUrl,
                title: l.title
              }
            ) }) : null;
          case "form-text":
            return se(a);
          case "form-accordion":
            return n.length > 0 ? /* @__PURE__ */ e("div", { children: n.map((d, u) => /* @__PURE__ */ e(
              le,
              {
                title: d.title,
                content: d.content,
                index: u,
                iconPosition: "right",
                ...d
              },
              u
            )) }) : null;
          case "form-only":
          default:
            return null;
        }
      })()
    }
  );
};
let E, H, I, P;
const ie = async () => {
  if (!P) {
    const t = await import("react-pdf");
    P = t.pdfjs, H = t.Document, I = t.Page, P.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${P.version}/build/pdf.worker.min.mjs`;
  }
}, oe = async () => {
  E || (E = (await import("react-pageflip")).default);
}, ce = V(({ children: t }, r) => /* @__PURE__ */ e("div", { ref: r, className: "w-full h-full overflow-hidden", children: t })), de = ({ pdfUrl: t, title: r, width: l = 280, height: n = 280, className: a = "" }) => {
  const [s, o] = j(0), [i, m] = j(null), [d, u] = j(!0), [y, g] = j(n / l), [v, b] = j(0), f = C(null);
  S(() => {
    Promise.all([ie(), oe()]).then(() => u(!1)).catch(() => {
      m("Failed to load flipbook");
    });
  }, []), S(() => {
    const h = f.current;
    if (!h) return;
    const w = new ResizeObserver(([p]) => {
      const R = Math.floor(p.contentRect.width);
      R > 0 && b(R);
    });
    return w.observe(h), () => w.disconnect();
  }, [d]);
  const x = v > 0 ? Math.floor(v / 2) : Math.floor(l / 2), N = Math.round(x * y), k = _(async (h) => {
    try {
      const p = (await h.getPage(1)).getViewport({ scale: 1 });
      p != null && p.width && (p != null && p.height) && g(p.height / p.width);
    } catch {
    }
    o(h.numPages || 0);
  }, []), F = _((h) => {
    m((h == null ? void 0 : h.message) || "Failed to load PDF");
  }, []);
  return i ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : d ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: f, className: `w-full ${a}`.trim(), children: /* @__PURE__ */ M(
    H,
    {
      file: t,
      onLoadSuccess: k,
      onLoadError: F,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        s === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${a}`.trim(),
            style: { minHeight: `${N}px` },
            children: /* @__PURE__ */ e(I, { pageNumber: 1, width: l, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        s > 1 && /* @__PURE__ */ e(
          E,
          {
            width: x,
            height: N,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": r || "Flipbook",
            children: Array.from({ length: s }, (h, w) => /* @__PURE__ */ e(ce, { children: /* @__PURE__ */ e(I, { pageNumber: w + 1, width: x, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, w))
          },
          `${x}-${N}`
        )
      ]
    }
  ) });
}, ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: de
}, Symbol.toStringTag, { value: "Module" }));
export {
  pe as default
};
