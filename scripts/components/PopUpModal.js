import { jsx as e, jsxs as _ } from "react/jsx-runtime";
import * as A from "react";
import { lazy as q, useId as V, useRef as B, useState as M, useCallback as I, useEffect as z, Suspense as K, forwardRef as J } from "react";
import X from "lottie-react";
function Q({
  title: t,
  titleId: r,
  ...d
}, b) {
  return /* @__PURE__ */ A.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: b,
    "aria-labelledby": r
  }, d), t ? /* @__PURE__ */ A.createElement("title", {
    id: r
  }, t) : null, /* @__PURE__ */ A.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const Z = /* @__PURE__ */ A.forwardRef(Q), ee = ({
  text: t = "Button",
  href: r = void 0,
  variant: d = "light",
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: b = "btn-md",
  // btn-sm , btn-md
  className: i = "",
  disabled: g = !1,
  onClick: l = void 0,
  attributes: u = {},
  ...n
}) => {
  const y = (P) => {
    switch (P) {
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
  }, L = (P) => {
    switch (P) {
      case "btn-sm":
        return "btn-sm";
      case "btn-md":
        return "btn-md";
      default:
        return "btn-md";
    }
  }, $ = `btn ${y(d)} ${L(b)} ${i}`.trim();
  return r ? /* @__PURE__ */ e(
    "a",
    {
      href: r,
      className: $,
      onClick: l,
      ...n,
      ...u ?? {},
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: n.type || "button",
      className: $,
      disabled: g,
      onClick: l,
      ...n,
      ...u ?? {},
      children: t
    }
  );
}, te = q(() => Promise.resolve().then(() => se)), re = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
function he({
  isOpen: t = !1,
  // ignored when trigger === 'exit-popup' (open/close driven by exit intent + internal dismiss)
  onClose: r,
  trigger: d = "manual",
  // 'manual' | 'exit-popup' — exit-popup: pointer leaves page toward browser chrome (top edge)
  exitIntentEdgePx: b = 48,
  // max clientY (distance from top of viewport) still counted as “toward tabs / URL bar”
  placement: i = "center",
  // 'center' | 'bottom-right' — bottom-right: no backdrop overlay, panel docked to corner
  backgroundImage: g,
  title: l = "",
  subtitle: u = "",
  media: n,
  buttons: o = [],
  closeLabel: y = "Close dialog",
  closeOnBackdrop: L = !0,
  className: $ = "",
  children: P
}) {
  const f = V(), c = V(), j = B(null), v = B(null), [w, R] = M(!1), [s, m] = M(!1), a = i === "center", p = d === "exit-popup", h = p ? w && !s : t, C = I(() => {
    p && m(!0), r == null || r();
  }, [p, r]);
  if (z(() => {
    if (!p || w || s || typeof document > "u")
      return;
    const N = (E) => {
      E.relatedTarget == null && typeof E.clientY == "number" && (E.clientY > b || R(!0));
    };
    return document.documentElement.addEventListener("mouseout", N), () => {
      document.documentElement.removeEventListener("mouseout", N);
    };
  }, [p, w, s, b]), z(() => {
    var D;
    if (!h)
      return;
    let N = "";
    a && (N = document.body.style.overflow, document.body.style.overflow = "hidden"), (D = j.current) == null || D.focus();
    const E = (k) => {
      if (k.key === "Escape") {
        k.preventDefault(), C();
        return;
      }
      if (k.key !== "Tab" || !v.current)
        return;
      const S = Array.from(
        v.current.querySelectorAll(re)
      );
      if (!S.length)
        return;
      const F = S[0], U = S[S.length - 1], T = document.activeElement;
      if (k.shiftKey) {
        (T === F || !v.current.contains(T)) && (k.preventDefault(), U.focus());
        return;
      }
      T === U && (k.preventDefault(), F.focus());
    };
    return document.addEventListener("keydown", E), () => {
      a && (document.body.style.overflow = N), document.removeEventListener("keydown", E);
    };
  }, [h, a, C]), !h)
    return null;
  const x = g ? {
    backgroundImage: `url(${g})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  } : void 0, Y = n ? {
    media: n.media ?? "image",
    aspect: n.aspect ?? "rectangle",
    imageUrl: n.imageUrl,
    videoUrl: n.videoUrl,
    lottieUrl: n.lottieUrl,
    lottieData: n.lottieData,
    iframeUrl: n.iframeUrl,
    title: n.title ?? l
  } : null;
  return /* @__PURE__ */ _("div", { className: a ? "fixed inset-0 z-50 flex items-center justify-center p-16 sm:p-24" : "fixed bottom-16 right-16 z-50 w-[min(600px,calc(100vw-32px))] sm:bottom-24 sm:right-24", children: [
    a && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "absolute inset-0 bg-secondary/60 backdrop-blur-[2px]",
        "aria-label": y,
        onClick: L ? C : void 0
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        ref: v,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": l ? f : void 0,
        "aria-describedby": u ? c : void 0,
        className: `relative z-10 w-full max-h-[90vh] overflow-hidden rounded-[32px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${a ? "max-w-[600px] " : "border-2 border-tertiary "}${$}`.trim(),
        style: x,
        children: /* @__PURE__ */ _("div", { className: "relative z-10 overflow-y-auto max-h-[90vh] px-20 pb-32 pt-20 sm:px-40 sm:pb-40 sm:pt-24", children: [
          /* @__PURE__ */ e("div", { className: "flex justify-end", children: /* @__PURE__ */ e(
            "button",
            {
              ref: j,
              type: "button",
              "aria-label": y,
              onClick: C,
              className: "inline-flex h-[33px] w-[33px] items-center justify-center rounded-full bg-secondary-100 text-secondary transition-colors hover:bg-secondary-200 cursor-pointer",
              children: /* @__PURE__ */ e(Z, { className: "h-20 w-20" })
            }
          ) }),
          /* @__PURE__ */ _("div", { className: "mx-auto space-y-[var(--spacing-section-spacing-y)] text-center", children: [
            (l || u) && /* @__PURE__ */ _("div", { className: "space-y-10", children: [
              l && /* @__PURE__ */ e("h2", { id: f, className: "text-headings-h1 text-secondary", children: l }),
              u && /* @__PURE__ */ e("p", { id: c, className: "text-secondary-700", children: u })
            ] }),
            P,
            Y && /* @__PURE__ */ e("div", { className: "w-full overflow-hidden rounded-[20px]", children: /* @__PURE__ */ e(K, { fallback: /* @__PURE__ */ e("div", { className: "bg-grey-100 h-48" }), children: /* @__PURE__ */ e(
              te,
              {
                ...Y,
                className: "h-full w-full object-cover"
              }
            ) }) }),
            o.length > 0 && /* @__PURE__ */ e("div", { className: "flex w-full flex-col items-center justify-center gap-10 sm:w-auto sm:flex-row sm:flex-wrap", children: o.map((N, E) => {
              const { closeOnClick: D = !1, onClick: k, ...S } = N;
              return /* @__PURE__ */ e(
                ee,
                {
                  ...S,
                  onClick: (F) => {
                    k == null || k(F), !F.defaultPrevented && D && C();
                  },
                  className: `max-sm:w-full ${N.className ?? ""}`.trim()
                },
                N.key ?? `${N.text ?? "button"}-${E}`
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
}
const ae = q(() => Promise.resolve().then(() => de)), ne = ({
  media: t = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: r = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: d = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: b,
  videoUrl: i,
  lottieUrl: g,
  lottieData: l,
  iframeUrl: u,
  flipbookUrl: n,
  title: o,
  className: y = ""
}) => {
  var a;
  const L = typeof window < "u" && window.location.origin.indexOf("author") > -1, $ = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, f = `relative w-full h-full ${r === "square" ? "aspect-square" : r === "rectangle" ? "aspect-[4/3]" : t === "video" ? "aspect-video" : ""}`.trim(), c = r === "default" ? `w-full h-full ${y}`.trim() : `absolute inset-0 w-full h-full ${y}`.trim(), j = "w-full h-full", v = r === "default" ? `${c}`.trim() : c, w = d === "contain" ? "object-contain" : "object-cover", R = d === "contain" ? "xMidYMid meet" : "xMidYMid slice", s = `relative w-full ${y}`.trim(), m = "w-full min-h-[280px]";
  switch (t) {
    case "image":
      if (b)
        return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e(
          "img",
          {
            src: b,
            alt: o || "Media image",
            className: `${w} ${c}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (i) {
        const p = i.includes("youtube.com/watch") || i.includes("youtu.be/");
        let h = i;
        p && (h = `https://www.youtube.com/embed/${i.includes("youtu.be/") ? i.split("youtu.be/")[1].split("?")[0] : (a = i.split("v=")[1]) == null ? void 0 : a.split("&")[0]}`);
        const C = (() => {
          if (!p) return h;
          try {
            const x = new URL(h);
            return x.searchParams.set("autoplay", "0"), x.searchParams.set("mute", "0"), x.searchParams.set("playsinline", "1"), x.searchParams.set("controls", "1"), x.searchParams.set("rel", "0"), x.toString();
          } catch {
            return h.includes("?") ? h.includes("autoplay=") ? h : `${h}&autoplay=0` : `${h}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ e("div", { className: f, children: p ? /* @__PURE__ */ e(
          "iframe",
          {
            src: C,
            title: o || "Video player",
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
            title: o || "Video player",
            children: /* @__PURE__ */ e("source", { src: i })
          }
        ) });
      }
      break;
    case "lottie":
      if (l)
        return L ? /* @__PURE__ */ e("div", { className: f, role: "img", "aria-label": o || "Animation", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${c}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ e(
          "div",
          {
            className: f,
            role: "img",
            "aria-label": o || "Animation",
            children: /* @__PURE__ */ e("div", { className: `${c} overflow-hidden`.trim(), children: /* @__PURE__ */ e(
              X,
              {
                animationData: l,
                loop: !$,
                autoplay: !$,
                className: j,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: R }
              }
            ) })
          }
        );
      if (g)
        return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (u)
        return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e(
          "iframe",
          {
            src: u,
            title: o || "Iframe content",
            frameBorder: "0",
            className: `${v} ${w}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (n)
        return L ? /* @__PURE__ */ e("div", { className: s, role: "img", "aria-label": o || "Flipbook", children: /* @__PURE__ */ e(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${m}`.trim(),
            children: /* @__PURE__ */ e("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("div", { className: m, children: /* @__PURE__ */ e(K, { fallback: /* @__PURE__ */ e("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ e(ae, { pdfUrl: n, title: o, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ e("div", { className: f, children: /* @__PURE__ */ e("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${r === "default" ? "" : "absolute inset-0"}`.trim(), children: t ? `${t.charAt(0).toUpperCase() + t.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
}, se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ne
}, Symbol.toStringTag, { value: "Module" }));
let W, G, H, O;
const ie = async () => {
  if (!O) {
    const t = await import("react-pdf");
    O = t.pdfjs, G = t.Document, H = t.Page, O.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${O.version}/build/pdf.worker.min.mjs`;
  }
}, oe = async () => {
  W || (W = (await import("react-pageflip")).default);
}, le = J(({ children: t }, r) => /* @__PURE__ */ e("div", { ref: r, className: "w-full h-full overflow-hidden", children: t })), ce = ({ pdfUrl: t, title: r, width: d = 280, height: b = 280, className: i = "" }) => {
  const [g, l] = M(0), [u, n] = M(null), [o, y] = M(!0), [L, $] = M(b / d), [P, f] = M(0), c = B(null);
  z(() => {
    Promise.all([ie(), oe()]).then(() => y(!1)).catch(() => {
      n("Failed to load flipbook");
    });
  }, []), z(() => {
    const s = c.current;
    if (!s) return;
    const m = new ResizeObserver(([a]) => {
      const p = Math.floor(a.contentRect.width);
      p > 0 && f(p);
    });
    return m.observe(s), () => m.disconnect();
  }, [o]);
  const j = P > 0 ? Math.floor(P / 2) : Math.floor(d / 2), v = Math.round(j * L), w = I(async (s) => {
    try {
      const a = (await s.getPage(1)).getViewport({ scale: 1 });
      a != null && a.width && (a != null && a.height) && $(a.height / a.width);
    } catch {
    }
    l(s.numPages || 0);
  }, []), R = I((s) => {
    n((s == null ? void 0 : s.message) || "Failed to load PDF");
  }, []);
  return u ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : o ? /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ e("div", { ref: c, className: `w-full ${i}`.trim(), children: /* @__PURE__ */ _(
    G,
    {
      file: t,
      onLoadSuccess: w,
      onLoadError: R,
      loading: /* @__PURE__ */ e("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        g === 1 && /* @__PURE__ */ e(
          "div",
          {
            className: `w-full flex justify-center items-center ${i}`.trim(),
            style: { minHeight: `${v}px` },
            children: /* @__PURE__ */ e(H, { pageNumber: 1, width: d, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        g > 1 && /* @__PURE__ */ e(
          W,
          {
            width: j,
            height: v,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": r || "Flipbook",
            children: Array.from({ length: g }, (s, m) => /* @__PURE__ */ e(le, { children: /* @__PURE__ */ e(H, { pageNumber: m + 1, width: j, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, m))
          },
          `${j}-${v}`
        )
      ]
    }
  ) });
}, de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" }));
export {
  he as default
};
