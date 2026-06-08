var Ny = Object.defineProperty;
var hg = (c) => {
  throw TypeError(c);
};
var Oy = (c, t, e) => t in c ? Ny(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var D = (c, t, e) => Oy(c, typeof t != "symbol" ? t + "" : t, e), tf = (c, t, e) => t.has(c) || hg("Cannot " + e);
var n = (c, t, e) => (tf(c, t, "read from private field"), e ? e.call(c) : t.get(c)), b = (c, t, e) => t.has(c) ? hg("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(c) : t.set(c, e), g = (c, t, e, i) => (tf(c, t, "write to private field"), i ? i.call(c, e) : t.set(c, e), e), w = (c, t, e) => (tf(c, t, "access private method"), e);
var Kt = (c, t, e, i) => ({
  set _(s) {
    g(c, t, s, e);
  },
  get _() {
    return n(c, t, i);
  }
});
import { jsx as O, jsxs as zu } from "react/jsx-runtime";
import th, { lazy as By, Suspense as Hy, useState as eo, useRef as Ai, useEffect as xt, useCallback as Is, forwardRef as Xg, createContext as Yg, useReducer as $y, useImperativeHandle as Kg, useMemo as is, useContext as Jg, useLayoutEffect as Uy } from "react";
import zy from "lottie-react";
const Gy = By(() => Promise.resolve().then(() => Yy)), Qg = ({
  media: c = "image",
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: t = "default",
  // 'default' | 'rectangle' | 'square'
  objectFit: e = "cover",
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: i,
  videoUrl: s,
  lottieUrl: r,
  lottieData: a,
  iframeUrl: o,
  flipbookUrl: l,
  title: h,
  className: d = ""
}) => {
  var A;
  const u = typeof window < "u" && window.location.origin.indexOf("author") > -1, p = typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, S = `relative w-full h-full ${t === "square" ? "aspect-square" : t === "rectangle" ? "aspect-[4/3]" : c === "video" ? "aspect-video" : ""}`.trim(), v = t === "default" ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(), E = "w-full h-full", x = t === "default" ? `${v}`.trim() : v, T = e === "contain" ? "object-contain" : "object-cover", _ = e === "contain" ? "xMidYMid meet" : "xMidYMid slice", f = `relative w-full ${d}`.trim(), m = "w-full min-h-[280px]";
  switch (c) {
    case "image":
      if (i)
        return /* @__PURE__ */ O("div", { className: S, children: /* @__PURE__ */ O(
          "img",
          {
            src: i,
            alt: h || "Media image",
            className: `${T} ${v}`.trim(),
            loading: "lazy"
          }
        ) });
      break;
    case "video":
      if (s) {
        const C = s.includes("youtube.com/watch") || s.includes("youtu.be/");
        let P = s;
        C && (P = `https://www.youtube.com/embed/${s.includes("youtu.be/") ? s.split("youtu.be/")[1].split("?")[0] : (A = s.split("v=")[1]) == null ? void 0 : A.split("&")[0]}`);
        const R = (() => {
          if (!C) return P;
          try {
            const M = new URL(P);
            return M.searchParams.set("autoplay", "0"), M.searchParams.set("mute", "0"), M.searchParams.set("playsinline", "1"), M.searchParams.set("controls", "1"), M.searchParams.set("rel", "0"), M.toString();
          } catch {
            return P.includes("?") ? P.includes("autoplay=") ? P : `${P}&autoplay=0` : `${P}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ O("div", { className: S, children: C ? /* @__PURE__ */ O(
          "iframe",
          {
            src: R,
            title: h || "Video player",
            frameBorder: "0",
            allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: !0,
            className: `${v} ${T}`.trim()
          }
        ) : /* @__PURE__ */ O(
          "video",
          {
            className: `${v} ${T}`.trim(),
            autoPlay: !1,
            controls: !0,
            playsInline: !0,
            preload: "metadata",
            title: h || "Video player",
            children: /* @__PURE__ */ O("source", { src: s })
          }
        ) });
      }
      break;
    case "lottie":
      if (a)
        return u ? /* @__PURE__ */ O("div", { className: S, role: "img", "aria-label": h || "Animation", children: /* @__PURE__ */ O(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${v}`.trim(),
            children: /* @__PURE__ */ O("div", { className: "text-center", children: "Lottie preview" })
          }
        ) }) : /* @__PURE__ */ O(
          "div",
          {
            className: S,
            role: "img",
            "aria-label": h || "Animation",
            children: /* @__PURE__ */ O("div", { className: `${v} overflow-hidden`.trim(), children: /* @__PURE__ */ O(
              zy,
              {
                animationData: a,
                loop: !p,
                autoplay: !p,
                className: E,
                style: { width: "100%", height: "100%" },
                rendererSettings: { preserveAspectRatio: _ }
              }
            ) })
          }
        );
      if (r)
        return /* @__PURE__ */ O("div", { className: S, children: /* @__PURE__ */ O("div", { className: "absolute inset-0 flex items-center justify-center text-body-default text-center p-40", children: "Loading Lottie animation..." }) });
      break;
    case "iframe":
      if (o)
        return /* @__PURE__ */ O("div", { className: S, children: /* @__PURE__ */ O(
          "iframe",
          {
            src: o,
            title: h || "Iframe content",
            frameBorder: "0",
            className: `${x} ${T}`.trim()
          }
        ) });
      break;
    case "flipbook":
      if (l)
        return u ? /* @__PURE__ */ O("div", { className: f, role: "img", "aria-label": h || "Flipbook", children: /* @__PURE__ */ O(
          "div",
          {
            className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${m}`.trim(),
            children: /* @__PURE__ */ O("div", { className: "text-center", children: "Flipbook preview" })
          }
        ) }) : /* @__PURE__ */ O("div", { className: f, children: /* @__PURE__ */ O("div", { className: m, children: /* @__PURE__ */ O(Hy, { fallback: /* @__PURE__ */ O("div", { children: "Loading PDF..." }), children: /* @__PURE__ */ O(Gy, { pdfUrl: l, title: h, className: "w-full" }) }) }) });
      break;
  }
  return /* @__PURE__ */ O("div", { className: S, children: /* @__PURE__ */ O("div", { className: `flex items-center justify-center text-body-default text-center p-40 ${t === "default" ? "" : "absolute inset-0"}`.trim(), children: c ? `${c.charAt(0).toUpperCase() + c.slice(1)} placeholder` : "Image/Video/Lottie/iframe" }) });
};
function Wy({
  media: c,
  // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat: t,
  description: e,
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign: i = "center",
  // 'center' | 'left' | 'right'
  fontSize: s = "sm"
  // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const r = {
    sm: "text-display-s",
    md: "text-display-m",
    lg: "text-display-l",
    xl: "text-display-xl"
  }, a = {
    left: "start",
    right: "end",
    center: "center"
  }, o = {
    left: "mr-auto",
    right: "ml-auto",
    center: "mx-auto"
  }, l = ["center", "left", "right"].includes(i) ? i : "center", h = ["sm", "md", "lg", "xl"].includes(s) ? s : "sm", d = r[h], u = a[l], p = o[l], y = c ? {
    media: c.media || "image",
    aspect: c.aspect || "square",
    imageUrl: c.imageUrl,
    videoUrl: c.videoUrl,
    lottieUrl: c.lottieUrl,
    lottieData: c.lottieData,
    iframeUrl: c.iframeUrl,
    title: c.title || e || "",
    className: "w-full h-full object-cover"
  } : null;
  return /* @__PURE__ */ zu(
    "div",
    {
      className: `flex flex-col items-${u} justify-center gap-stats-spacing-y`,
      style: { textAlign: l },
      children: [
        c && y && /* @__PURE__ */ O("div", { className: `flex flex-col items-${u} justify-${u}`, children: /* @__PURE__ */ O("div", { className: `w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${p}`, children: /* @__PURE__ */ O(Qg, { ...y }) }) }),
        t && /* @__PURE__ */ O("div", { className: `${d} font-normal`, children: t }),
        e && /* @__PURE__ */ O("p", { children: e })
      ]
    }
  );
}
function jA({
  stats: c = [],
  statTextAlign: t = "center",
  // 'left' | 'center' | 'right'
  statFontSize: e = "sm",
  // 'sm' | 'md' | 'lg' | 'xl'
  order: i = "stat-first",
  // 'stat-first' | 'media-first'
  id: s = "",
  className: r = ""
}) {
  const a = (u, p, y) => p.includes(u) ? u : y, o = (u) => {
    const { statAlign: p = "left" } = u;
    return a(p, ["left", "right"], "left");
  }, l = (u) => {
    const { media: p, statMedia: y, ...S } = u;
    return {
      ...S,
      media: y,
      textAlign: u.textAlign || t,
      fontSize: u.fontSize || e
    };
  }, h = (u, p) => /* @__PURE__ */ O("div", { className: `flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${p}`, children: /* @__PURE__ */ O(Wy, { ...l(u) }) }), d = (u, p = "") => u ? /* @__PURE__ */ O("div", { className: "relative w-full h-full min-h-[220px] overflow-hidden bg-[#C8D4FE]", children: /* @__PURE__ */ O("div", { className: "absolute inset-0 w-full h-full", children: /* @__PURE__ */ O(
    Qg,
    {
      media: u.type || u.media || "image",
      aspect: "default",
      imageUrl: u.imageUrl,
      videoUrl: u.videoUrl,
      lottieUrl: u.lottieUrl,
      lottieData: u.lottieData,
      iframeUrl: u.iframeUrl,
      title: u.title || p,
      className: "w-full h-full object-cover"
    }
  ) }) }) : null;
  return !c || c.length === 0 ? null : /* @__PURE__ */ O("div", { className: `container ${r}`, id: s, children: c.map((u, p) => {
    const y = u.media, S = !!y, v = `${S ? "xl:w-1/2" : "w-full"}`, E = o(u) === "left", x = i === "media-first";
    return /* @__PURE__ */ O("div", { ...u.attributes ?? {}, children: /* @__PURE__ */ zu("div", { className: "flex flex-col xl:flex-row items-stretch", children: [
      x && S && /* @__PURE__ */ O("div", { className: "w-full xl:w-1/2", children: d(y, u.description || "") }),
      E && h(u, v),
      !x && S && /* @__PURE__ */ O("div", { className: "w-full xl:w-1/2", children: d(y, u.description || "") }),
      !E && h(u, v)
    ] }) }, p);
  }) });
}
let uf, Zg, ff, Sd;
const jy = async () => {
  if (!Sd) {
    const c = await Promise.resolve().then(() => IA);
    Sd = c.pdfjs, Zg = c.Document, ff = c.Page, Sd.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Sd.version}/build/pdf.worker.min.mjs`;
  }
}, Vy = async () => {
  uf || (uf = (await Promise.resolve().then(() => $A)).default);
}, qy = Xg(({ children: c }, t) => /* @__PURE__ */ O("div", { ref: t, className: "w-full h-full overflow-hidden", children: c })), Xy = ({ pdfUrl: c, title: t, width: e = 280, height: i = 280, className: s = "" }) => {
  const [r, a] = eo(0), [o, l] = eo(null), [h, d] = eo(!0), [u, p] = eo(i / e), [y, S] = eo(0), v = Ai(null);
  xt(() => {
    Promise.all([jy(), Vy()]).then(() => d(!1)).catch(() => {
      l("Failed to load flipbook");
    });
  }, []), xt(() => {
    const f = v.current;
    if (!f) return;
    const m = new ResizeObserver(([A]) => {
      const C = Math.floor(A.contentRect.width);
      C > 0 && S(C);
    });
    return m.observe(f), () => m.disconnect();
  }, [h]);
  const E = y > 0 ? Math.floor(y / 2) : Math.floor(e / 2), x = Math.round(E * u), T = Is(async (f) => {
    try {
      const A = (await f.getPage(1)).getViewport({ scale: 1 });
      A != null && A.width && (A != null && A.height) && p(A.height / A.width);
    } catch {
    }
    a(f.numPages || 0);
  }, []), _ = Is((f) => {
    l((f == null ? void 0 : f.message) || "Failed to load PDF");
  }, []);
  return o ? /* @__PURE__ */ O("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Failed to load flipbook" }) : h ? /* @__PURE__ */ O("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }) : /* @__PURE__ */ O("div", { ref: v, className: `w-full ${s}`.trim(), children: /* @__PURE__ */ zu(
    Zg,
    {
      file: c,
      onLoadSuccess: T,
      onLoadError: _,
      loading: /* @__PURE__ */ O("div", { className: "flex items-center justify-center text-body-default text-center p-40", children: "Loading flipbook..." }),
      children: [
        r === 1 && /* @__PURE__ */ O(
          "div",
          {
            className: `w-full flex justify-center items-center ${s}`.trim(),
            style: { minHeight: `${x}px` },
            children: /* @__PURE__ */ O(ff, { pageNumber: 1, width: e, renderTextLayer: !1, renderAnnotationLayer: !1 })
          }
        ),
        r > 1 && /* @__PURE__ */ O(
          uf,
          {
            width: E,
            height: x,
            size: "stretch",
            showCover: !0,
            mobileScrollSupport: !1,
            "aria-label": t || "Flipbook",
            children: Array.from({ length: r }, (f, m) => /* @__PURE__ */ O(qy, { children: /* @__PURE__ */ O(ff, { pageNumber: m + 1, width: E, renderTextLayer: !1, renderAnnotationLayer: !1 }) }, m))
          },
          `${E}-${x}`
        )
      ]
    }
  ) });
}, Yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xy
}, Symbol.toStringTag, { value: "Module" })), Be = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), pf = [1e-3, 0, 0, 1e-3, 0, 0], ef = 1.35, bi = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Ds = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Eh = "pdfjs_internal_editor_", q = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
}, it = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
}, tm = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, ue = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, xh = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Gt = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, io = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, ud = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, jl = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
}, xd = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3
}, em = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Gu = ud.WARNINGS;
function Ky(c) {
  Number.isInteger(c) && (Gu = c);
}
function Jy() {
  return Gu;
}
function Wu(c) {
  Gu >= ud.INFOS && console.info(`Info: ${c}`);
}
function X(c) {
  Gu >= ud.WARNINGS && console.warn(`Warning: ${c}`);
}
function Et(c) {
  throw new Error(c);
}
function nt(c, t) {
  c || Et(t);
}
function Qy(c) {
  switch (c == null ? void 0 : c.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function Up(c, t = null, e = null) {
  if (!c)
    return null;
  if (e && typeof c == "string") {
    if (e.addDefaultProtocol && c.startsWith("www.")) {
      const s = c.match(/\./g);
      (s == null ? void 0 : s.length) >= 2 && (c = `http://${c}`);
    }
    if (e.tryConvertEncoding)
      try {
        c = sw(c);
      } catch {
      }
  }
  const i = t ? URL.parse(c, t) : URL.parse(c);
  return Qy(i) ? i : null;
}
function zp(c, t, e = !1) {
  const i = URL.parse(c);
  return i ? (i.hash = t, i.href) : e && Up(c, "http://example.com") ? c.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function J(c, t, e, i = !1) {
  return Object.defineProperty(c, t, {
    value: e,
    enumerable: !i,
    configurable: !0,
    writable: !1
  }), e;
}
const Ja = (function() {
  function t(e, i) {
    this.message = e, this.name = i;
  }
  return t.prototype = new Error(), t.constructor = t, t;
})();
class cg extends Ja {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class sf extends Ja {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class du extends Ja {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class _h extends Ja {
  constructor(t, e, i) {
    super(t, "ResponseException"), this.status = e, this.missing = i;
  }
}
class Zy extends Ja {
  constructor(t) {
    super(t, "FormatError");
  }
}
class _n extends Ja {
  constructor(t) {
    super(t, "AbortException");
  }
}
function im(c) {
  (typeof c != "object" || (c == null ? void 0 : c.length) === void 0) && Et("Invalid argument for bytesToString");
  const t = c.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, c);
  const i = [];
  for (let s = 0; s < t; s += e) {
    const r = Math.min(s + e, t), a = c.subarray(s, r);
    i.push(String.fromCharCode.apply(null, a));
  }
  return i.join("");
}
function fd(c) {
  typeof c != "string" && Et("Invalid argument for stringToBytes");
  const t = c.length, e = new Uint8Array(t);
  for (let i = 0; i < t; ++i)
    e[i] = c.charCodeAt(i) & 255;
  return e;
}
function tw(c) {
  return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
}
function ew() {
  const c = new Uint8Array(4);
  return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
}
function iw() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class ce {
  static get isLittleEndian() {
    return J(this, "isLittleEndian", ew());
  }
  static get isEvalSupported() {
    return J(this, "isEvalSupported", iw());
  }
  static get isOffscreenCanvasSupported() {
    return J(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return J(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return J(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    var t, e;
    return J(this, "isCSSRoundSupported", (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, "width: round(1.5px, 1px)"));
  }
}
const nf = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, "0"));
var xn, Ld, gf;
class z {
  static makeHexColor(t, e, i) {
    return `#${nf[t]}${nf[e]}${nf[i]}`;
  }
  static domMatrixToTransform(t) {
    return [t.a, t.b, t.c, t.d, t.e, t.f];
  }
  static scaleMinMax(t, e) {
    let i;
    t[0] ? (t[0] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[3], e[3] *= t[3]) : (i = e[0], e[0] = e[1], e[1] = i, i = e[2], e[2] = e[3], e[3] = i, t[1] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, i = 0) {
    const s = t[i], r = t[i + 1];
    t[i] = s * e[0] + r * e[2] + e[4], t[i + 1] = s * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, i = 0) {
    const s = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5];
    for (let d = 0; d < 6; d += 2) {
      const u = t[i + d], p = t[i + d + 1];
      t[i + d] = u * s + p * a + l, t[i + d + 1] = u * r + p * o + h;
    }
  }
  static applyInverseTransform(t, e) {
    const i = t[0], s = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, i) {
    const s = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5], d = t[0], u = t[1], p = t[2], y = t[3];
    let S = s * d + l, v = S, E = s * p + l, x = E, T = o * u + h, _ = T, f = o * y + h, m = f;
    if (r !== 0 || a !== 0) {
      const A = r * d, C = r * p, P = a * u, R = a * y;
      S += P, x += P, E += R, v += R, T += A, m += A, f += C, _ += C;
    }
    i[0] = Math.min(i[0], S, E, v, x), i[1] = Math.min(i[1], T, f, _, m), i[2] = Math.max(i[2], S, E, v, x), i[3] = Math.max(i[3], T, f, _, m);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const i = t[0], s = t[1], r = t[2], a = t[3], o = i ** 2 + s ** 2, l = i * r + s * a, h = r ** 2 + a ** 2, d = (o + h) / 2, u = Math.sqrt(d ** 2 - (o * h - l ** 2));
    e[0] = Math.sqrt(d + u || 1), e[1] = Math.sqrt(d - u || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > s)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [i, r, s, a];
  }
  static pointBoundingBox(t, e, i) {
    i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
  }
  static rectBoundingBox(t, e, i, s, r) {
    r[0] = Math.min(r[0], t, i), r[1] = Math.min(r[1], e, s), r[2] = Math.max(r[2], t, i), r[3] = Math.max(r[3], e, s);
  }
  static bezierBoundingBox(t, e, i, s, r, a, o, l, h) {
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), w(this, xn, gf).call(this, t, i, r, o, e, s, a, l, 3 * (-t + 3 * (i - r) + o), 6 * (t - 2 * i + r), 3 * (i - t), h), w(this, xn, gf).call(this, t, i, r, o, e, s, a, l, 3 * (-e + 3 * (s - a) + l), 6 * (e - 2 * s + a), 3 * (s - e), h);
  }
}
xn = new WeakSet(), Ld = function(t, e, i, s, r, a, o, l, h, d) {
  if (h <= 0 || h >= 1)
    return;
  const u = 1 - h, p = h * h, y = p * h, S = u * (u * (u * t + 3 * h * e) + 3 * p * i) + y * s, v = u * (u * (u * r + 3 * h * a) + 3 * p * o) + y * l;
  d[0] = Math.min(d[0], S), d[1] = Math.min(d[1], v), d[2] = Math.max(d[2], S), d[3] = Math.max(d[3], v);
}, gf = function(t, e, i, s, r, a, o, l, h, d, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(d) >= 1e-12 && w(this, xn, Ld).call(this, t, e, i, s, r, a, o, l, -u / d, p);
    return;
  }
  const y = d ** 2 - 4 * u * h;
  if (y < 0)
    return;
  const S = Math.sqrt(y), v = 2 * h;
  w(this, xn, Ld).call(this, t, e, i, s, r, a, o, l, (-d + S) / v, p), w(this, xn, Ld).call(this, t, e, i, s, r, a, o, l, (-d - S) / v, p);
}, b(z, xn);
function sw(c) {
  return decodeURIComponent(escape(c));
}
let rf = null, dg = null;
function sm(c) {
  return rf || (rf = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, dg = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), c.replaceAll(rf, (t, e, i) => e ? e.normalize("NFKC") : dg.get(i));
}
function Gp() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const c = new Uint8Array(32);
  return crypto.getRandomValues(c), im(c);
}
const Wp = "pdfjs_internal_id_";
function nw(c, t, e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [i, s, ...r] = e;
  if (!c(i) && !Number.isInteger(i) || !t(s))
    return !1;
  const a = r.length;
  let o = !0;
  switch (s.name) {
    case "XYZ":
      if (a < 2 || a > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return a === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a > 1)
        return !1;
      break;
    case "FitR":
      if (a !== 4)
        return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const l of r)
    if (!(typeof l == "number" || o && l === null))
      return !1;
  return !0;
}
function Me(c, t, e) {
  return Math.min(Math.max(c, t), e);
}
function nm(c) {
  return Uint8Array.prototype.toBase64 ? c.toBase64() : btoa(im(c));
}
function rw(c) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(c) : fd(atob(c));
}
typeof Promise.try != "function" && (Promise.try = function(c, ...t) {
  return new Promise((e) => {
    e(c(...t));
  });
});
typeof Math.sumPrecise != "function" && (Math.sumPrecise = function(c) {
  return c.reduce((t, e) => t + e, 0);
});
class Ch {
  static textContent(t) {
    const e = [], i = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function s(r) {
      var l;
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if (Ch.shouldBuildText(o))
        (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const h of r.children)
          s(h);
    }
    return s(t), i;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
class jp {
  static setupStorage(t, e, i, s, r) {
    const a = s.getValue(e, {
      value: null
    });
    switch (i.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          s.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (i.attributes.type === "radio" || i.attributes.type === "checkbox") {
          if (a.value === i.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === i.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            s.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            s.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of i.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty("selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          s.setValue(e, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: i = null,
    intent: s,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${s}`);
    for (const [l, h] of Object.entries(a))
      if (h != null)
        switch (l) {
          case "class":
            h.length && t.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", h);
            break;
          case "style":
            Object.assign(t.style, h);
            break;
          case "textContent":
            t.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
        }
    o && r.addLinkAttributes(t, a.href, a.newWindow), i && a.dataId && this.setupStorage(t, a.dataId, e, i);
  }
  static render(t) {
    var u, p;
    const e = t.annotationStorage, i = t.linkService, s = t.xfaHtml, r = t.intent || "display", a = document.createElement(s.name);
    s.attributes && this.setAttributes({
      html: a,
      element: s,
      intent: r,
      linkService: i
    });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const y = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = y;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (s.children.length === 0) {
      if (s.value) {
        const y = document.createTextNode(s.value);
        a.append(y), o && Ch.shouldBuildText(s.name) && h.push(y);
      }
      return {
        textDivs: h
      };
    }
    const d = [[s, -1, a]];
    for (; d.length > 0; ) {
      const [y, S, v] = d.at(-1);
      if (S + 1 === y.children.length) {
        d.pop();
        continue;
      }
      const E = y.children[++d.at(-1)[1]];
      if (E === null)
        continue;
      const {
        name: x
      } = E;
      if (x === "#text") {
        const _ = document.createTextNode(E.value);
        h.push(_), v.append(_);
        continue;
      }
      const T = (u = E == null ? void 0 : E.attributes) != null && u.xmlns ? document.createElementNS(E.attributes.xmlns, x) : document.createElement(x);
      if (v.append(T), E.attributes && this.setAttributes({
        html: T,
        element: E,
        storage: e,
        intent: r,
        linkService: i
      }), ((p = E.children) == null ? void 0 : p.length) > 0)
        d.push([E, -1, T]);
      else if (E.value) {
        const _ = document.createTextNode(E.value);
        o && Ch.shouldBuildText(x) && h.push(_), T.append(_);
      }
    }
    for (const y of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      y.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Os = "http://www.w3.org/2000/svg", Ir = class Ir {
};
D(Ir, "CSS", 96), D(Ir, "PDF", 72), D(Ir, "PDF_TO_CSS_UNITS", Ir.CSS / Ir.PDF);
let Cn = Ir;
async function Xl(c, t = "text") {
  if (eh(c, document.baseURI)) {
    const e = await fetch(c);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, i) => {
    const s = new XMLHttpRequest();
    s.open("GET", c, !0), s.responseType = t, s.onreadystatechange = () => {
      if (s.readyState === XMLHttpRequest.DONE) {
        if (s.status === 200 || s.status === 0) {
          switch (t) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(s.response);
              return;
          }
          e(s.responseText);
          return;
        }
        i(new Error(s.statusText));
      }
    }, s.send(null);
  });
}
class pd {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: i,
    rotation: s,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = i, this.rotation = s, this.offsetX = r, this.offsetY = a, i *= e;
    const l = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let d, u, p, y;
    switch (s %= 360, s < 0 && (s += 360), s) {
      case 180:
        d = -1, u = 0, p = 0, y = 1;
        break;
      case 90:
        d = 0, u = 1, p = 1, y = 0;
        break;
      case 270:
        d = 0, u = -1, p = -1, y = 0;
        break;
      case 0:
        d = 1, u = 0, p = 0, y = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (p = -p, y = -y);
    let S, v, E, x;
    d === 0 ? (S = Math.abs(h - t[1]) * i + r, v = Math.abs(l - t[0]) * i + a, E = (t[3] - t[1]) * i, x = (t[2] - t[0]) * i) : (S = Math.abs(l - t[0]) * i + r, v = Math.abs(h - t[1]) * i + a, E = (t[2] - t[0]) * i, x = (t[3] - t[1]) * i), this.transform = [d * i, u * i, p * i, y * i, S - d * i * l - p * i * h, v - u * i * l - y * i * h], this.width = E, this.height = x;
  }
  get rawDims() {
    const t = this.viewBox;
    return J(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: i = this.offsetX,
    offsetY: s = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new pd({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    const i = [t, e];
    return z.applyTransform(i, this.transform), i;
  }
  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    z.applyTransform(e, this.transform);
    const i = [t[2], t[3]];
    return z.applyTransform(i, this.transform), [e[0], e[1], i[0], i[1]];
  }
  convertToPdfPoint(t, e) {
    const i = [t, e];
    return z.applyInverseTransform(i, this.transform), i;
  }
}
class ju extends Ja {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function gd(c) {
  const t = c.length;
  let e = 0;
  for (; e < t && c[e].trim() === ""; )
    e++;
  return c.substring(e, e + 5).toLowerCase() === "data:";
}
function Vu(c) {
  return typeof c == "string" && /\.pdf$/i.test(c);
}
function rm(c) {
  return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf("/") + 1);
}
function am(c, t = "document.pdf") {
  if (typeof c != "string")
    return t;
  if (gd(c))
    return X('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const i = ((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(o), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  })(c);
  if (!i)
    return t;
  const s = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes("/") ? (l = l.split("/").at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }, r = /\.pdf$/i, a = i.pathname.split("/").at(-1);
  if (r.test(a))
    return s(a);
  if (i.searchParams.size > 0) {
    const o = Array.from(i.searchParams.values()).reverse();
    for (const h of o)
      if (r.test(h))
        return s(h);
    const l = Array.from(i.searchParams.keys()).reverse();
    for (const h of l)
      if (r.test(h))
        return s(h);
  }
  if (i.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
    if (l)
      return s(l[0]);
  }
  return t;
}
class ug {
  constructor() {
    D(this, "started", /* @__PURE__ */ Object.create(null));
    D(this, "times", []);
  }
  time(t) {
    t in this.started && X(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }
  timeEnd(t) {
    t in this.started || X(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now()
    }), delete this.started[t];
  }
  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: i
    } of this.times)
      e = Math.max(i.length, e);
    for (const {
      name: i,
      start: s,
      end: r
    } of this.times)
      t.push(`${i.padEnd(e)} ${r - s}ms
`);
    return t.join("");
  }
}
function eh(c, t) {
  const e = t ? URL.parse(c, t) : URL.parse(c);
  return (e == null ? void 0 : e.protocol) === "http:" || (e == null ? void 0 : e.protocol) === "https:";
}
function Si(c) {
  c.preventDefault();
}
function Nt(c) {
  c.preventDefault(), c.stopPropagation();
}
function aw(c) {
  console.log("Deprecated API usage: " + c);
}
var Dh;
class Th {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    n(this, Dh) || g(this, Dh, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Dh).exec(t);
    if (!e)
      return null;
    const i = parseInt(e[1], 10);
    let s = parseInt(e[2], 10);
    s = s >= 1 && s <= 12 ? s - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let d = parseInt(e[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === "-" ? (a += d, o += u) : h === "+" && (a -= d, o -= u), new Date(Date.UTC(i, s, r, a, o, l));
  }
}
Dh = new WeakMap(), b(Th, Dh);
function om(c, {
  scale: t = 1,
  rotation: e = 0
}) {
  const {
    width: i,
    height: s
  } = c.attributes.style, r = [0, 0, parseInt(i), parseInt(s)];
  return new pd({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e
  });
}
function Yl(c) {
  if (c.startsWith("#")) {
    const t = parseInt(c.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return c.startsWith("rgb(") ? c.slice(4, -1).split(",").map((t) => parseInt(t)) : c.startsWith("rgba(") ? c.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (X(`Not a valid color format: "${c}"`), [0, 0, 0]);
}
function ow(c) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of c.keys()) {
    t.style.color = e;
    const i = window.getComputedStyle(t).color;
    c.set(e, Yl(i));
  }
  t.remove();
}
function Ft(c) {
  const {
    a: t,
    b: e,
    c: i,
    d: s,
    e: r,
    f: a
  } = c.getTransform();
  return [t, e, i, s, r, a];
}
function as(c) {
  const {
    a: t,
    b: e,
    c: i,
    d: s,
    e: r,
    f: a
  } = c.getTransform().invertSelf();
  return [t, e, i, s, r, a];
}
function Cr(c, t, e = !1, i = !0) {
  if (t instanceof pd) {
    const {
      pageWidth: s,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = c, o = ce.isCSSRoundSupported, l = `var(--total-scale-factor) * ${s}px`, h = `var(--total-scale-factor) * ${r}px`, d = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`, u = o ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = d, a.height = u) : (a.width = u, a.height = d);
  }
  i && c.setAttribute("data-main-rotation", t.rotation);
}
class ss {
  constructor() {
    const {
      pixelRatio: t
    } = ss;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, i, s, r = -1) {
    let a = 1 / 0, o = 1 / 0, l = 1 / 0;
    i = ss.capPixels(i, r), i > 0 && (a = Math.sqrt(i / (t * e))), s !== -1 && (o = s / t, l = s / e);
    const h = Math.min(a, o, l);
    return this.sx > h || this.sy > h ? (this.sx = h, this.sy = h, !0) : !1;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const i = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, i) : i;
    }
    return t;
  }
}
const uu = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class lw {
  static get isDarkMode() {
    var t;
    return J(this, "isDarkMode", !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, "(prefers-color-scheme: dark)").matches));
  }
}
class lm {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const {
      style: e
    } = t;
    e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
    const {
      color: i
    } = window.getComputedStyle(t);
    return t.remove(), J(this, "commentForegroundColor", Yl(i));
  }
}
function hm(c, t, e, i) {
  i = Math.min(Math.max(i ?? 1, 0), 1);
  const s = 255 * (1 - i);
  return c = Math.round(c * i + s), t = Math.round(t * i + s), e = Math.round(e * i + s), [c, t, e];
}
function fg(c, t) {
  const e = c[0] / 255, i = c[1] / 255, s = c[2] / 255, r = Math.max(e, i, s), a = Math.min(e, i, s), o = (r + a) / 2;
  if (r === a)
    t[0] = t[1] = 0;
  else {
    const l = r - a;
    switch (t[1] = o < 0.5 ? l / (r + a) : l / (2 - r - a), r) {
      case e:
        t[0] = ((i - s) / l + (i < s ? 6 : 0)) * 60;
        break;
      case i:
        t[0] = ((s - e) / l + 2) * 60;
        break;
      case s:
        t[0] = ((e - i) / l + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function mf(c, t) {
  const e = c[0], i = c[1], s = c[2], r = (1 - Math.abs(2 * s - 1)) * i, a = r * (1 - Math.abs(e / 60 % 2 - 1)), o = s - r / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = r + o, t[1] = a + o, t[2] = o;
      break;
    case 1:
      t[0] = a + o, t[1] = r + o, t[2] = o;
      break;
    case 2:
      t[0] = o, t[1] = r + o, t[2] = a + o;
      break;
    case 3:
      t[0] = o, t[1] = a + o, t[2] = r + o;
      break;
    case 4:
      t[0] = a + o, t[1] = o, t[2] = r + o;
      break;
    case 5:
    case 6:
      t[0] = r + o, t[1] = o, t[2] = a + o;
      break;
  }
}
function pg(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function gg(c, t, e) {
  mf(c, e), e.map(pg);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  mf(t, e), e.map(pg);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
}
const mg = /* @__PURE__ */ new Map();
function cm(c, t) {
  const e = c[0] + c[1] * 256 + c[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let i = mg.get(e);
  if (i)
    return i;
  const s = new Float32Array(9), r = s.subarray(0, 3), a = s.subarray(3, 6);
  fg(c, a);
  const o = s.subarray(6, 9);
  fg(t, o);
  const l = o[2] < 0.5, h = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), gg(a, o, r) < h) {
    let d, u;
    l ? (d = a[2], u = 1) : (d = 0, u = a[2]);
    const p = 5e-3;
    for (; u - d > p; ) {
      const y = a[2] = (d + u) / 2;
      l === gg(a, o, r) < h ? d = y : u = y;
    }
    a[2] = l ? u : d;
  }
  return mf(a, r), i = z.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), mg.set(e, i), i;
}
function Vp({
  html: c,
  dir: t,
  className: e
}, i) {
  const s = document.createDocumentFragment();
  if (typeof c == "string") {
    const r = document.createElement("p");
    r.dir = t || "auto";
    const a = c.split(/(?:\r\n?|\n)/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const h = a[o];
      r.append(document.createTextNode(h)), o < l - 1 && r.append(document.createElement("br"));
    }
    s.append(r);
  } else
    jp.render({
      xfaHtml: c,
      div: s,
      intent: "richText"
    });
  s.firstChild.classList.add("richText", e), i.append(s);
}
var Dn, Ln, _i, Ci, Lh, In, wo, Ao, Ih, xu, dm, Ae, um, fm, so, ih;
const $s = class $s {
  constructor(t) {
    b(this, Ae);
    b(this, Dn, null);
    b(this, Ln, null);
    b(this, _i);
    b(this, Ci, null);
    b(this, Lh, null);
    b(this, In, null);
    b(this, wo, null);
    b(this, Ao, null);
    g(this, _i, t), n($s, Ih) || g($s, Ih, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = g(this, Dn, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, _i)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", Si, {
      signal: e
    }), t.addEventListener("pointerdown", w($s, xu, dm), {
      signal: e
    }));
    const i = g(this, Ci, document.createElement("div"));
    i.className = "buttons", t.append(i);
    const s = n(this, _i).toolbarPosition;
    if (s) {
      const {
        style: r
      } = t, a = n(this, _i)._uiManager.direction === "ltr" ? 1 - s[0] : s[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return n(this, Dn);
  }
  hide() {
    var t;
    n(this, Dn).classList.add("hidden"), (t = n(this, Ln)) == null || t.hideDropdown();
  }
  show() {
    var t, e;
    n(this, Dn).classList.remove("hidden"), (t = n(this, Lh)) == null || t.shown(), (e = n(this, In)) == null || e.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = n(this, _i), i = document.createElement("button");
    i.classList.add("basic", "deleteButton"), i.tabIndex = 0, i.setAttribute("data-l10n-id", n($s, Ih)[t]), w(this, Ae, so).call(this, i) && i.addEventListener("click", (s) => {
      e.delete();
    }, {
      signal: e._signal
    }), n(this, Ci).append(i);
  }
  async addAltText(t) {
    const e = await t.render();
    w(this, Ae, so).call(this, e), n(this, Ci).append(e, n(this, Ae, ih)), g(this, Lh, t);
  }
  addComment(t, e = null) {
    if (n(this, In))
      return;
    const i = t.renderForToolbar();
    if (!i)
      return;
    w(this, Ae, so).call(this, i);
    const s = g(this, wo, n(this, Ae, ih));
    e ? (n(this, Ci).insertBefore(i, e), n(this, Ci).insertBefore(s, e)) : n(this, Ci).append(i, s), g(this, In, t), t.toolbar = this;
  }
  addColorPicker(t) {
    if (n(this, Ln))
      return;
    g(this, Ln, t);
    const e = t.renderButton();
    w(this, Ae, so).call(this, e), n(this, Ci).append(e, n(this, Ae, ih));
  }
  async addEditSignatureButton(t) {
    const e = g(this, Ao, await t.renderEditButton(n(this, _i)));
    w(this, Ae, so).call(this, e), n(this, Ci).append(e, n(this, Ae, ih));
  }
  removeButton(t) {
    var e, i;
    switch (t) {
      case "comment":
        (e = n(this, In)) == null || e.removeToolbarCommentButton(), g(this, In, null), (i = n(this, wo)) == null || i.remove(), g(this, wo, null);
        break;
    }
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        this.addColorPicker(e);
        break;
      case "altText":
        await this.addAltText(e);
        break;
      case "editSignature":
        await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        this.addComment(e);
        break;
    }
  }
  async addButtonBefore(t, e, i) {
    const s = n(this, Ci).querySelector(i);
    s && t === "comment" && this.addComment(e, s);
  }
  updateEditSignatureButton(t) {
    n(this, Ao) && (n(this, Ao).title = t);
  }
  remove() {
    var t;
    n(this, Dn).remove(), (t = n(this, Ln)) == null || t.destroy(), g(this, Ln, null);
  }
};
Dn = new WeakMap(), Ln = new WeakMap(), _i = new WeakMap(), Ci = new WeakMap(), Lh = new WeakMap(), In = new WeakMap(), wo = new WeakMap(), Ao = new WeakMap(), Ih = new WeakMap(), xu = new WeakSet(), dm = function(t) {
  t.stopPropagation();
}, Ae = new WeakSet(), um = function(t) {
  n(this, _i)._focusEventsAllowed = !1, Nt(t);
}, fm = function(t) {
  n(this, _i)._focusEventsAllowed = !0, Nt(t);
}, so = function(t) {
  const e = n(this, _i)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener("focusin", w(this, Ae, um).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", w(this, Ae, fm).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Si, {
    signal: e
  }), !0);
}, ih = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, b($s, xu), b($s, Ih, null);
let bf = $s;
var Fh, Or, zs, Tn, pm, gm, yf;
class hw {
  constructor(t) {
    b(this, Tn);
    b(this, Fh, null);
    b(this, Or, null);
    b(this, zs);
    g(this, zs, t);
  }
  show(t, e, i) {
    const [s, r] = w(this, Tn, gm).call(this, e, i), {
      style: a
    } = n(this, Or) || g(this, Or, w(this, Tn, pm).call(this));
    t.append(n(this, Or)), a.insetInlineEnd = `${100 * s}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, Or).remove();
  }
}
Fh = new WeakMap(), Or = new WeakMap(), zs = new WeakMap(), Tn = new WeakSet(), pm = function() {
  const t = g(this, Or, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar");
  const e = n(this, zs)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", Si, {
    signal: e
  });
  const i = g(this, Fh, document.createElement("div"));
  return i.className = "buttons", t.append(i), n(this, zs).hasCommentManager() && w(this, Tn, yf).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    n(this, zs).commentSelection("floating_button");
  }), w(this, Tn, yf).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    n(this, zs).highlightSelection("floating_button");
  }), t;
}, gm = function(t, e) {
  let i = 0, s = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < i)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > i) {
      s = o, i = a;
      continue;
    }
    e ? o > s && (s = o) : o < s && (s = o);
  }
  return [e ? 1 - s : s, i];
}, yf = function(t, e, i, s) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", i);
  const o = n(this, zs)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", Si, {
    signal: o
  }), r.addEventListener("click", s, {
    signal: o
  })), n(this, Fh).append(r);
};
function mm(c, t, e) {
  for (const i of e)
    t.addEventListener(i, c[i].bind(c));
}
var Eu;
class cw {
  constructor() {
    b(this, Eu, 0);
  }
  get id() {
    return `${Eh}${Kt(this, Eu)._++}`;
  }
}
Eu = new WeakMap();
var vo, Nh, Ee, So, Id;
const ng = class ng {
  constructor() {
    b(this, So);
    b(this, vo, Gp());
    b(this, Nh, 0);
    b(this, Ee, null);
  }
  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', i = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), s = new Image();
    s.src = t;
    const r = s.decode().then(() => (i.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return J(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: i,
      size: s,
      type: r
    } = t;
    return w(this, So, Id).call(this, `${e}_${i}_${s}_${r}`, t);
  }
  async getFromUrl(t) {
    return w(this, So, Id).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const i = await e;
    return w(this, So, Id).call(this, t, i);
  }
  async getFromId(t) {
    n(this, Ee) || g(this, Ee, /* @__PURE__ */ new Map());
    const e = n(this, Ee).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: i
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, i);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    n(this, Ee) || g(this, Ee, /* @__PURE__ */ new Map());
    let i = n(this, Ee).get(t);
    if (i != null && i.bitmap)
      return i.refCounter += 1, i;
    const s = new OffscreenCanvas(e.width, e.height);
    return s.getContext("2d").drawImage(e, 0, 0), i = {
      bitmap: s.transferToImageBitmap(),
      id: `image_${n(this, vo)}_${Kt(this, Nh)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, Ee).set(t, i), n(this, Ee).set(i.id, i), i;
  }
  getSvgUrl(t) {
    const e = n(this, Ee).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var s;
    n(this, Ee) || g(this, Ee, /* @__PURE__ */ new Map());
    const e = n(this, Ee).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: i
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(i.width, i.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(i), e.blobPromise = r.convertToBlob();
    }
    (s = i.close) == null || s.call(i), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, vo)}_`);
  }
};
vo = new WeakMap(), Nh = new WeakMap(), Ee = new WeakMap(), So = new WeakSet(), Id = async function(t, e) {
  n(this, Ee) || g(this, Ee, /* @__PURE__ */ new Map());
  let i = n(this, Ee).get(t);
  if (i === null)
    return null;
  if (i != null && i.bitmap)
    return i.refCounter += 1, i;
  try {
    i || (i = {
      bitmap: null,
      id: `image_${n(this, vo)}_${Kt(this, Nh)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let s;
    if (typeof e == "string" ? (i.url = e, s = await Xl(e, "blob")) : e instanceof File ? s = i.file = e : e instanceof Blob && (s = e), s.type === "image/svg+xml") {
      const r = ng._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, d) => {
        o.onload = () => {
          i.bitmap = o, i.isSvg = !0, h();
        }, a.onload = async () => {
          const u = i.svgUrl = a.result;
          o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
        }, o.onerror = a.onerror = d;
      });
      a.readAsDataURL(s), await l;
    } else
      i.bitmap = await createImageBitmap(s);
    i.refCounter = 1;
  } catch (s) {
    X(s), i = null;
  }
  return n(this, Ee).set(t, i), i && n(this, Ee).set(i.id, i), i;
};
let wf = ng;
var Wt, Fn, Oh, It;
class dw {
  constructor(t = 128) {
    b(this, Wt, []);
    b(this, Fn, !1);
    b(this, Oh);
    b(this, It, -1);
    g(this, Oh, t);
  }
  add({
    cmd: t,
    undo: e,
    post: i,
    mustExec: s,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (s && t(), n(this, Fn))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: i,
      type: r
    };
    if (n(this, It) === -1) {
      n(this, Wt).length > 0 && (n(this, Wt).length = 0), g(this, It, 0), n(this, Wt).push(l);
      return;
    }
    if (a && n(this, Wt)[n(this, It)].type === r) {
      o && (l.undo = n(this, Wt)[n(this, It)].undo), n(this, Wt)[n(this, It)] = l;
      return;
    }
    const h = n(this, It) + 1;
    h === n(this, Oh) ? n(this, Wt).splice(0, 1) : (g(this, It, h), h < n(this, Wt).length && n(this, Wt).splice(h)), n(this, Wt).push(l);
  }
  undo() {
    if (n(this, It) === -1)
      return;
    g(this, Fn, !0);
    const {
      undo: t,
      post: e
    } = n(this, Wt)[n(this, It)];
    t(), e == null || e(), g(this, Fn, !1), g(this, It, n(this, It) - 1);
  }
  redo() {
    if (n(this, It) < n(this, Wt).length - 1) {
      g(this, It, n(this, It) + 1), g(this, Fn, !0);
      const {
        cmd: t,
        post: e
      } = n(this, Wt)[n(this, It)];
      t(), e == null || e(), g(this, Fn, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, It) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, It) < n(this, Wt).length - 1;
  }
  cleanType(t) {
    if (n(this, It) !== -1) {
      for (let e = n(this, It); e >= 0; e--)
        if (n(this, Wt)[e].type !== t) {
          n(this, Wt).splice(e + 1, n(this, It) - e), g(this, It, e);
          return;
        }
      n(this, Wt).length = 0, g(this, It, -1);
    }
  }
  destroy() {
    g(this, Wt, null);
  }
}
Wt = new WeakMap(), Fn = new WeakMap(), Oh = new WeakMap(), It = new WeakMap();
var _u, bm;
class md {
  constructor(t) {
    b(this, _u);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = ce.platform;
    for (const [i, s, r = {}] of t)
      for (const a of i) {
        const o = a.startsWith("mac+");
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: s,
          options: r
        }), this.allKeys.add(a.split("+").at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: s,
          options: r
        }), this.allKeys.add(a.split("+").at(-1)));
      }
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key))
      return;
    const i = this.callbacks.get(w(this, _u, bm).call(this, e));
    if (!i)
      return;
    const {
      callback: s,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null
      }
    } = i;
    o && !o(t, e) || (s.bind(t, ...a, e)(), r || Nt(e));
  }
}
_u = new WeakSet(), bm = function(t) {
  t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Cu = class Cu {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return ow(t), J(this, "_colors", t);
  }
  convert(t) {
    const e = Yl(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [i, s] of this._colors)
      if (s.every((r, a) => r === e[a]))
        return Cu._colorsMapping.get(i);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? z.makeHexColor(...e) : t;
  }
};
D(Cu, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Af = Cu;
var xo, ti, Eo, Bt, Qt, _o, Ti, Co, Pi, _e, Nn, On, To, Bn, hs, Ri, Br, Bh, Hh, Po, $h, cs, Hn, Ro, $n, ds, Tu, Un, Mo, Uh, zn, Hr, ko, Gn, zh, qt, dt, Gs, Wn, jn, Gh, Do, Wh, Vn, us, Ws, jh, Vh, Mi, F, Fd, vf, ym, wm, sh, Am, vm, Sm, Sf, xm, xf, Ef, Em, Le, Bs, _m, Cm, _f, Tm, nh, Cf;
const uo = class uo {
  constructor(t, e, i, s, r, a, o, l, h, d, u, p, y, S, v, E) {
    b(this, F);
    b(this, xo, new AbortController());
    b(this, ti, null);
    b(this, Eo, null);
    b(this, Bt, /* @__PURE__ */ new Map());
    b(this, Qt, /* @__PURE__ */ new Map());
    b(this, _o, null);
    b(this, Ti, null);
    b(this, Co, null);
    b(this, Pi, new dw());
    b(this, _e, null);
    b(this, Nn, null);
    b(this, On, null);
    b(this, To, 0);
    b(this, Bn, /* @__PURE__ */ new Set());
    b(this, hs, null);
    b(this, Ri, null);
    b(this, Br, /* @__PURE__ */ new Set());
    D(this, "_editorUndoBar", null);
    b(this, Bh, !1);
    b(this, Hh, !1);
    b(this, Po, !1);
    b(this, $h, null);
    b(this, cs, null);
    b(this, Hn, null);
    b(this, Ro, null);
    b(this, $n, !1);
    b(this, ds, null);
    b(this, Tu, new cw());
    b(this, Un, !1);
    b(this, Mo, !1);
    b(this, Uh, !1);
    b(this, zn, null);
    b(this, Hr, null);
    b(this, ko, null);
    b(this, Gn, null);
    b(this, zh, null);
    b(this, qt, q.NONE);
    b(this, dt, /* @__PURE__ */ new Set());
    b(this, Gs, null);
    b(this, Wn, null);
    b(this, jn, null);
    b(this, Gh, null);
    b(this, Do, null);
    b(this, Wh, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    b(this, Vn, [0, 0]);
    b(this, us, null);
    b(this, Ws, null);
    b(this, jh, null);
    b(this, Vh, null);
    b(this, Mi, null);
    const x = this._signal = n(this, xo).signal;
    g(this, Ws, t), g(this, jh, e), g(this, Vh, i), g(this, _o, s), g(this, _e, r), g(this, Wn, a), g(this, Do, l), this._eventBus = o, o._on("editingaction", this.onEditingAction.bind(this), {
      signal: x
    }), o._on("pagechanging", this.onPageChanging.bind(this), {
      signal: x
    }), o._on("scalechanging", this.onScaleChanging.bind(this), {
      signal: x
    }), o._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal: x
    }), o._on("setpreference", this.onSetPreference.bind(this), {
      signal: x
    }), o._on("switchannotationeditorparams", (T) => this.updateParams(T.type, T.value), {
      signal: x
    }), window.addEventListener("pointerdown", () => {
      g(this, Mo, !0);
    }, {
      capture: !0,
      signal: x
    }), window.addEventListener("pointerup", () => {
      g(this, Mo, !1);
    }, {
      capture: !0,
      signal: x
    }), w(this, F, Am).call(this), w(this, F, Em).call(this), w(this, F, Sf).call(this), g(this, Ti, l.annotationStorage), g(this, $h, l.filterFactory), g(this, jn, h), g(this, Ro, d || null), g(this, Bh, u), g(this, Hh, p), g(this, Po, y), g(this, zh, S || null), this.viewParameters = {
      realScale: Cn.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = v || null, this._supportsPinchToZoom = E !== !1, r == null || r.setSidebarUiManager(this);
  }
  static get _keyboardManager() {
    const t = uo.prototype, e = (a) => n(a, Ws).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), i = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, s = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return J(this, "_keyboardManager", new md([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: i
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: i
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: i
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: i
    }], [["Enter", "mac+Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Ws).contains(o) && !a.isEnterHandled
    }], [[" ", "mac+ "], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, Ws).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], t.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], t.translateSelectedEditors, {
      args: [-s, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], t.translateSelectedEditors, {
      args: [s, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -s],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], t.translateSelectedEditors, {
      args: [0, s],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, i, s, r, a, o, l, h;
    (t = n(this, Mi)) == null || t.resolve(), g(this, Mi, null), (e = n(this, xo)) == null || e.abort(), g(this, xo, null), this._signal = null;
    for (const d of n(this, Qt).values())
      d.destroy();
    n(this, Qt).clear(), n(this, Bt).clear(), n(this, Br).clear(), (i = n(this, Gn)) == null || i.clear(), g(this, ti, null), n(this, dt).clear(), n(this, Pi).destroy(), (s = n(this, _o)) == null || s.destroy(), (r = n(this, _e)) == null || r.destroy(), (a = n(this, Wn)) == null || a.destroy(), (o = n(this, ds)) == null || o.hide(), g(this, ds, null), (l = n(this, ko)) == null || l.destroy(), g(this, ko, null), g(this, Eo, null), n(this, cs) && (clearTimeout(n(this, cs)), g(this, cs, null)), n(this, us) && (clearTimeout(n(this, us)), g(this, us, null)), (h = this._editorUndoBar) == null || h.destroy(), g(this, Do, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, zh);
  }
  get useNewAltTextFlow() {
    return n(this, Hh);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, Po);
  }
  get hcmFilter() {
    return J(this, "hcmFilter", n(this, jn) ? n(this, $h).addHCMFilter(n(this, jn).foreground, n(this, jn).background) : "none");
  }
  get direction() {
    return J(this, "direction", getComputedStyle(n(this, Ws)).direction);
  }
  get _highlightColors() {
    return J(this, "_highlightColors", n(this, Ro) ? new Map(n(this, Ro).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return J(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), i = !!n(this, jn);
    for (const [s, r] of t) {
      const a = s.endsWith("_HCM");
      if (i && a) {
        e.set(s.replace("_HCM", ""), r);
        continue;
      }
      !i && !a && e.set(s, r);
    }
    return J(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return J(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors)
      return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), g(this, On, t);
  }
  setMainHighlightColorPicker(t) {
    g(this, ko, t);
  }
  editAltText(t, e = !1) {
    var i;
    (i = n(this, _o)) == null || i.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!n(this, _e);
  }
  editComment(t, e, i, s) {
    var r;
    (r = n(this, _e)) == null || r.showDialog(this, t, e, i, s);
  }
  selectComment(t, e) {
    const i = n(this, Qt).get(t), s = i == null ? void 0 : i.getEditorByUID(e);
    s == null || s.toggleComment(!0, !0);
  }
  updateComment(t) {
    var e;
    (e = n(this, _e)) == null || e.updateComment(t.getData());
  }
  updatePopupColor(t) {
    var e;
    (e = n(this, _e)) == null || e.updatePopupColor(t);
  }
  removeComment(t) {
    var e;
    (e = n(this, _e)) == null || e.removeComments([t.uid]);
  }
  toggleComment(t, e, i = void 0) {
    var s;
    (s = n(this, _e)) == null || s.toggleCommentPopup(t, e, i);
  }
  makeCommentColor(t, e) {
    var i;
    return t && ((i = n(this, _e)) == null ? void 0 : i.makeCommentColor(t, e)) || null;
  }
  getCommentDialogElement() {
    var t;
    return ((t = n(this, _e)) == null ? void 0 : t.dialogElement) || null;
  }
  async waitForEditorsRendered(t) {
    if (n(this, Qt).has(t - 1))
      return;
    const {
      resolve: e,
      promise: i
    } = Promise.withResolvers(), s = (r) => {
      r.pageNumber === t && (this._eventBus._off("editorsrendered", s), e());
    };
    this._eventBus.on("editorsrendered", s), await i;
  }
  getSignature(t) {
    var e;
    (e = n(this, Wn)) == null || e.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return n(this, Wn);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        g(this, Po, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    g(this, To, t - 1);
  }
  focusMainContainer() {
    n(this, Ws).focus();
  }
  findParent(t, e) {
    for (const i of n(this, Qt).values()) {
      const {
        x: s,
        y: r,
        width: a,
        height: o
      } = i.div.getBoundingClientRect();
      if (t >= s && t <= s + a && e >= r && e <= r + o)
        return i;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    n(this, jh).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, Br).add(t);
  }
  removeShouldRescale(t) {
    n(this, Br).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Cn.PDF_TO_CSS_UNITS;
    for (const i of n(this, Br))
      i.onScaleChanging();
    (e = n(this, On)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "", e = !1) {
    const i = document.getSelection();
    if (!i || i.isCollapsed)
      return;
    const {
      anchorNode: s,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o
    } = i, l = i.toString(), d = w(this, F, Fd).call(this, i).closest(".textLayer"), u = this.getSelectionBoxes(d);
    if (!u)
      return;
    i.empty();
    const p = w(this, F, vf).call(this, d), y = n(this, qt) === q.NONE, S = () => {
      const v = p == null ? void 0 : p.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: u,
        anchorNode: s,
        anchorOffset: r,
        focusNode: a,
        focusOffset: o,
        text: l
      });
      y && this.showAllEditors("highlight", !0, !0), e && (v == null || v.editComment());
    };
    if (y) {
      this.switchToMode(q.HIGHLIGHT, S);
      return;
    }
    S();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!n(this, Ti))
      return null;
    const e = `${Eh}${t}`, i = n(this, Ti).getRawValue(e);
    return i && n(this, Ti).remove(e), i;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Ti) && !n(this, Ti).has(t.id) && n(this, Ti).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const i = n(this, Vh);
    i && (i.setAttribute("data-l10n-id", t), e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, $n) && (g(this, $n, !1), w(this, F, sh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, dt))
      if (e.div.contains(t)) {
        g(this, Hr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, Hr))
      return;
    const [t, e] = n(this, Hr);
    g(this, Hr, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    w(this, F, Sf).call(this), w(this, F, xf).call(this);
  }
  removeEditListeners() {
    w(this, F, xm).call(this), w(this, F, Ef).call(this);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const i of n(this, Ri))
        if (i.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const i of n(this, Ri))
        if (i.isHandlingMimeForPasting(e.type)) {
          i.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var i;
    if (t.preventDefault(), (i = n(this, ti)) == null || i.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const s of n(this, dt)) {
      const r = s.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of n(this, Ri))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let i = e.getData("application/pdfjs");
    if (!i)
      return;
    try {
      i = JSON.parse(i);
    } catch (r) {
      X(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(i))
      return;
    this.unselectAll();
    const s = this.currentLayer;
    try {
      const r = [];
      for (const l of i) {
        const h = await s.deserialize(l);
        if (!h)
          return;
        r.push(h);
      }
      const a = () => {
        for (const l of r)
          w(this, F, _f).call(this, l);
        w(this, F, Cf).call(this, r);
      }, o = () => {
        for (const l of r)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (r) {
      X(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, qt) !== q.NONE && !this.isEditorHandlingKeyboard && uo._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, $n) && (g(this, $n, !1), w(this, F, sh).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  setEditingState(t) {
    t ? (w(this, F, vm).call(this), w(this, F, xf).call(this), w(this, F, Le).call(this, {
      isEditing: n(this, qt) !== q.NONE,
      isEmpty: w(this, F, nh).call(this),
      hasSomethingToUndo: n(this, Pi).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Pi).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (w(this, F, Sm).call(this), w(this, F, Ef).call(this), w(this, F, Le).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, Ri)) {
      g(this, Ri, t);
      for (const e of n(this, Ri))
        w(this, F, Bs).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, Tu).id;
  }
  get currentLayer() {
    return n(this, Qt).get(n(this, To));
  }
  getLayer(t) {
    return n(this, Qt).get(t);
  }
  get currentPageIndex() {
    return n(this, To);
  }
  addLayer(t) {
    n(this, Qt).set(t.pageIndex, t), n(this, Un) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, Qt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, i = !1, s = !1, r = !1) {
    var a, o, l, h, d, u;
    if (n(this, qt) !== t && !(n(this, Mi) && (await n(this, Mi).promise, !n(this, Mi)))) {
      if (g(this, Mi, Promise.withResolvers()), (a = n(this, On)) == null || a.commitOrRemove(), n(this, qt) === q.POPUP && ((o = n(this, _e)) == null || o.hideSidebar()), (l = n(this, _e)) == null || l.destroyPopup(), g(this, qt, t), t === q.NONE) {
        this.setEditingState(!1), w(this, F, Cm).call(this);
        for (const p of n(this, Bt).values())
          p.hideStandaloneCommentButton();
        (h = this._editorUndoBar) == null || h.hide(), this.toggleComment(null), n(this, Mi).resolve();
        return;
      }
      for (const p of n(this, Bt).values())
        p.addStandaloneCommentButton();
      t === q.SIGNATURE && await ((d = n(this, Wn)) == null ? void 0 : d.loadSignatures()), this.setEditingState(!0), await w(this, F, _m).call(this), this.unselectAll();
      for (const p of n(this, Qt).values())
        p.updateMode(t);
      if (t === q.POPUP) {
        n(this, Eo) || g(this, Eo, await n(this, Do).getAnnotationsByType(new Set(n(this, Ri).map((S) => S._editorType))));
        const p = /* @__PURE__ */ new Set(), y = [];
        for (const S of n(this, Bt).values()) {
          const {
            annotationElementId: v,
            hasComment: E,
            deleted: x
          } = S;
          v && p.add(v), E && !x && y.push(S.getData());
        }
        for (const S of n(this, Eo)) {
          const {
            id: v,
            popupRef: E,
            contentsObj: x
          } = S;
          E && (x != null && x.str) && !p.has(v) && !n(this, Bn).has(v) && y.push(S);
        }
        (u = n(this, _e)) == null || u.showSidebar(y);
      }
      if (!e) {
        i && this.addNewEditorFromKeyboard(), n(this, Mi).resolve();
        return;
      }
      for (const p of n(this, Bt).values())
        p.uid === e ? (this.setSelected(p), r ? p.editComment() : s ? p.enterInEditMode() : p.focus()) : p.unselect();
      n(this, Mi).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== n(this, qt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (n(this, Ri)) {
      switch (t) {
        case it.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case it.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, Gh) || g(this, Gh, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const i of n(this, dt))
          i.updateParams(t, e);
      else
        for (const i of n(this, Ri))
          i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, i = !1) {
    var r;
    for (const a of n(this, Bt).values())
      a.editorType === t && a.show(e);
    (((r = n(this, Gh)) == null ? void 0 : r.get(it.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && w(this, F, Bs).call(this, [[it.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, Uh) !== t) {
      g(this, Uh, t);
      for (const e of n(this, Qt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  *getEditors(t) {
    for (const e of n(this, Bt).values())
      e.pageIndex === t && (yield e);
  }
  getEditor(t) {
    return n(this, Bt).get(t);
  }
  addEditor(t) {
    n(this, Bt).set(t.id, t);
  }
  removeEditor(t) {
    var e, i;
    t.div.contains(document.activeElement) && (n(this, cs) && clearTimeout(n(this, cs)), g(this, cs, setTimeout(() => {
      this.focusMainContainer(), g(this, cs, null);
    }, 0))), n(this, Bt).delete(t.id), t.annotationElementId && ((e = n(this, Gn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Bn).has(t.annotationElementId)) && ((i = n(this, Ti)) == null || i.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, Bn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, Bn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, Bn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, ti) !== t && (g(this, ti, t), t && w(this, F, Bs).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, F, Tm) === t && w(this, F, Bs).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    w(this, F, Bs).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, dt).has(t)) {
      n(this, dt).delete(t), t.unselect(), w(this, F, Le).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, dt).add(t), t.select(), w(this, F, Bs).call(this, t.propertiesToUpdate), w(this, F, Le).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id
    }), (e = n(this, On)) == null || e.commitOrRemove();
    for (const i of n(this, dt))
      i !== t && i.unselect();
    n(this, dt).clear(), n(this, dt).add(t), t.select(), w(this, F, Bs).call(this, t.propertiesToUpdate), w(this, F, Le).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(t) {
    return n(this, dt).has(t);
  }
  get firstSelectedEditor() {
    return n(this, dt).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, dt).delete(t), w(this, F, Le).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, dt).size !== 0;
  }
  get isEnterHandled() {
    return n(this, dt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, Pi).undo(), w(this, F, Le).call(this, {
      hasSomethingToUndo: n(this, Pi).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: w(this, F, nh).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, Pi).redo(), w(this, F, Le).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Pi).hasSomethingToRedo(),
      isEmpty: w(this, F, nh).call(this)
    });
  }
  addCommands(t) {
    n(this, Pi).add(t), w(this, F, Le).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: w(this, F, nh).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, Pi).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, dt)], i = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(s, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, s = () => {
      for (const a of e)
        w(this, F, _f).call(this, a);
    };
    this.addCommands({
      cmd: i,
      undo: s,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, ti)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, ti) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, dt))
      t.commit();
    w(this, F, Cf).call(this, n(this, Bt).values());
  }
  unselectAll() {
    var t;
    if (!(n(this, ti) && (n(this, ti).commitOrRemove(), n(this, qt) !== q.NONE)) && !((t = n(this, On)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, dt))
        e.unselect();
      n(this, dt).clear(), w(this, F, Le).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, i = !1) {
    if (i || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, Vn)[0] += t, n(this, Vn)[1] += e;
    const [s, r] = n(this, Vn), a = [...n(this, dt)], o = 1e3;
    n(this, us) && clearTimeout(n(this, us)), g(this, us, setTimeout(() => {
      g(this, us, null), n(this, Vn)[0] = n(this, Vn)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, Bt).has(l.id) && (l.translateInPage(s, r), l.translationDone());
        },
        undo: () => {
          for (const l of a)
            n(this, Bt).has(l.id) && (l.translateInPage(-s, -r), l.translationDone());
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), g(this, hs, /* @__PURE__ */ new Map());
      for (const t of n(this, dt))
        n(this, hs).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!n(this, hs))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, hs);
    g(this, hs, null);
    let e = !1;
    for (const [{
      x: s,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = s, o.newY = r, o.newPageIndex = a, e || (e = s !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const i = (s, r, a, o) => {
      if (n(this, Bt).has(s.id)) {
        const l = n(this, Qt).get(o);
        l ? s._setParentAndPosition(l, r, a) : (s.pageIndex = o, s.x = r, s.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [s, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          i(s, r, a, o);
      },
      undo: () => {
        for (const [s, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          i(s, r, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (n(this, hs))
      for (const i of n(this, hs).keys())
        i.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, dt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, ti) === t;
  }
  getActive() {
    return n(this, ti);
  }
  getMode() {
    return n(this, qt);
  }
  isEditingMode() {
    return n(this, qt) !== q.NONE;
  }
  get imageManager() {
    return J(this, "imageManager", new wf());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let h = 0, d = e.rangeCount; h < d; h++)
      if (!t.contains(e.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: i,
      y: s,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, d, u, p) => ({
          x: (d - s) / a,
          y: 1 - (h + u - i) / r,
          width: p / a,
          height: u / r
        });
        break;
      case "180":
        o = (h, d, u, p) => ({
          x: 1 - (h + u - i) / r,
          y: 1 - (d + p - s) / a,
          width: u / r,
          height: p / a
        });
        break;
      case "270":
        o = (h, d, u, p) => ({
          x: 1 - (d + p - s) / a,
          y: (h - i) / r,
          width: p / a,
          height: u / r
        });
        break;
      default:
        o = (h, d, u, p) => ({
          x: (h - i) / r,
          y: (d - s) / a,
          width: u / r,
          height: p / a
        });
        break;
    }
    const l = [];
    for (let h = 0, d = e.rangeCount; h < d; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed)
        for (const {
          x: p,
          y,
          width: S,
          height: v
        } of u.getClientRects())
          S === 0 || v === 0 || l.push(o(p, y, S, v));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, Co) || g(this, Co, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, Co)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var s;
    const e = (s = n(this, Co)) == null ? void 0 : s.get(t.data.id);
    if (!e)
      return;
    const i = n(this, Ti).getRawValue(e);
    i && (n(this, qt) === q.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, i) {
    var r;
    const s = (r = n(this, Gn)) == null ? void 0 : r.get(t);
    s && (s.setCanvas(e, i), n(this, Gn).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, Gn) || g(this, Gn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
xo = new WeakMap(), ti = new WeakMap(), Eo = new WeakMap(), Bt = new WeakMap(), Qt = new WeakMap(), _o = new WeakMap(), Ti = new WeakMap(), Co = new WeakMap(), Pi = new WeakMap(), _e = new WeakMap(), Nn = new WeakMap(), On = new WeakMap(), To = new WeakMap(), Bn = new WeakMap(), hs = new WeakMap(), Ri = new WeakMap(), Br = new WeakMap(), Bh = new WeakMap(), Hh = new WeakMap(), Po = new WeakMap(), $h = new WeakMap(), cs = new WeakMap(), Hn = new WeakMap(), Ro = new WeakMap(), $n = new WeakMap(), ds = new WeakMap(), Tu = new WeakMap(), Un = new WeakMap(), Mo = new WeakMap(), Uh = new WeakMap(), zn = new WeakMap(), Hr = new WeakMap(), ko = new WeakMap(), Gn = new WeakMap(), zh = new WeakMap(), qt = new WeakMap(), dt = new WeakMap(), Gs = new WeakMap(), Wn = new WeakMap(), jn = new WeakMap(), Gh = new WeakMap(), Do = new WeakMap(), Wh = new WeakMap(), Vn = new WeakMap(), us = new WeakMap(), Ws = new WeakMap(), jh = new WeakMap(), Vh = new WeakMap(), Mi = new WeakMap(), F = new WeakSet(), Fd = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, vf = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const i of n(this, Qt).values())
    if (i.hasTextLayer(t))
      return i;
  return null;
}, ym = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const i = w(this, F, Fd).call(this, t).closest(".textLayer"), s = this.getSelectionBoxes(i);
  s && (n(this, ds) || g(this, ds, new hw(this)), n(this, ds).show(i, s, this.direction === "ltr"));
}, wm = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, Gs) && ((r = n(this, ds)) == null || r.hide(), g(this, Gs, null), w(this, F, Le).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, Gs))
    return;
  const s = w(this, F, Fd).call(this, t).closest(".textLayer");
  if (!s) {
    n(this, Gs) && ((a = n(this, ds)) == null || a.hide(), g(this, Gs, null), w(this, F, Le).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, ds)) == null || o.hide(), g(this, Gs, e), w(this, F, Le).call(this, {
    hasSelectedText: !0
  }), !(n(this, qt) !== q.HIGHLIGHT && n(this, qt) !== q.NONE) && (n(this, qt) === q.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), g(this, $n, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, qt) === q.HIGHLIGHT ? w(this, F, vf).call(this, s) : null;
    if (l == null || l.toggleDrawing(), n(this, Mo)) {
      const h = new AbortController(), d = this.combinedSignal(h), u = (p) => {
        p.type === "pointerup" && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === "pointerup" && w(this, F, sh).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", u, {
        signal: d
      }), window.addEventListener("blur", u, {
        signal: d
      });
    } else
      l == null || l.toggleDrawing(!0), w(this, F, sh).call(this, "main_toolbar");
  }
}, sh = function(t = "") {
  n(this, qt) === q.HIGHLIGHT ? this.highlightSelection(t) : n(this, Bh) && w(this, F, ym).call(this);
}, Am = function() {
  document.addEventListener("selectionchange", w(this, F, wm).bind(this), {
    signal: this._signal
  });
}, vm = function() {
  if (n(this, Hn))
    return;
  g(this, Hn, new AbortController());
  const t = this.combinedSignal(n(this, Hn));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Sm = function() {
  var t;
  (t = n(this, Hn)) == null || t.abort(), g(this, Hn, null);
}, Sf = function() {
  if (n(this, zn))
    return;
  g(this, zn, new AbortController());
  const t = this.combinedSignal(n(this, zn));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, xm = function() {
  var t;
  (t = n(this, zn)) == null || t.abort(), g(this, zn, null);
}, xf = function() {
  if (n(this, Nn))
    return;
  g(this, Nn, new AbortController());
  const t = this.combinedSignal(n(this, Nn));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, Ef = function() {
  var t;
  (t = n(this, Nn)) == null || t.abort(), g(this, Nn, null);
}, Em = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, Le = function(t) {
  Object.entries(t).some(([i, s]) => n(this, Wh)[i] !== s) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(n(this, Wh), t)
  }), n(this, qt) === q.HIGHLIGHT && t.hasSelectedEditor === !1 && w(this, F, Bs).call(this, [[it.HIGHLIGHT_FREE, !0]]));
}, Bs = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, _m = async function() {
  if (!n(this, Un)) {
    g(this, Un, !0);
    const t = [];
    for (const e of n(this, Qt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Bt).values())
      e.enable();
  }
}, Cm = function() {
  if (this.unselectAll(), n(this, Un)) {
    g(this, Un, !1);
    for (const t of n(this, Qt).values())
      t.disable();
    for (const t of n(this, Bt).values())
      t.disable();
  }
}, _f = function(t) {
  const e = n(this, Qt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Tm = function() {
  let t = null;
  for (t of n(this, dt))
    ;
  return t;
}, nh = function() {
  if (n(this, Bt).size === 0)
    return !0;
  if (n(this, Bt).size === 1)
    for (const t of n(this, Bt).values())
      return t.isEmpty();
  return !1;
}, Cf = function(t) {
  for (const e of n(this, dt))
    e.unselect();
  n(this, dt).clear();
  for (const e of t)
    e.isEmpty() || (n(this, dt).add(e), e.select());
  w(this, F, Le).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, D(uo, "TRANSLATE_SMALL", 1), D(uo, "TRANSLATE_BIG", 10);
let Tr = uo;
var se, fs, zi, Lo, ps, ei, Io, gs, Ge, js, $r, ms, qn, es, rh, Nd;
const Ie = class Ie {
  constructor(t) {
    b(this, es);
    b(this, se, null);
    b(this, fs, !1);
    b(this, zi, null);
    b(this, Lo, null);
    b(this, ps, null);
    b(this, ei, null);
    b(this, Io, !1);
    b(this, gs, null);
    b(this, Ge, null);
    b(this, js, null);
    b(this, $r, null);
    b(this, ms, !1);
    g(this, Ge, t), g(this, ms, t._uiManager.useNewAltTextFlow), n(Ie, qn) || g(Ie, qn, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    Ie._l10n ?? (Ie._l10n = t);
  }
  async render() {
    const t = g(this, zi, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = g(this, Lo, document.createElement("span"));
    t.append(e), n(this, ms) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(Ie, qn).missing), e.setAttribute("data-l10n-id", n(Ie, qn)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const i = n(this, Ge)._uiManager._signal;
    t.addEventListener("contextmenu", Si, {
      signal: i
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: i
    });
    const s = (r) => {
      r.preventDefault(), n(this, Ge)._uiManager.editAltText(n(this, Ge)), n(this, ms) && n(this, Ge)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, es, rh)
        }
      });
    };
    return t.addEventListener("click", s, {
      capture: !0,
      signal: i
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (g(this, Io, !0), s(r));
    }, {
      signal: i
    }), await w(this, es, Nd).call(this), t;
  }
  finish() {
    n(this, zi) && (n(this, zi).focus({
      focusVisible: n(this, Io)
    }), g(this, Io, !1));
  }
  isEmpty() {
    return n(this, ms) ? n(this, se) === null : !n(this, se) && !n(this, fs);
  }
  hasData() {
    return n(this, ms) ? n(this, se) !== null || !!n(this, js) : this.isEmpty();
  }
  get guessedText() {
    return n(this, js);
  }
  async setGuessedText(t) {
    n(this, se) === null && (g(this, js, t), g(this, $r, await Ie._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), w(this, es, Nd).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, ms) || n(this, se)) {
      (e = n(this, gs)) == null || e.remove(), g(this, gs, null);
      return;
    }
    if (!n(this, gs)) {
      const i = g(this, gs, document.createElement("div"));
      i.className = "noAltTextBadge", n(this, Ge).div.append(i);
    }
    n(this, gs).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, se);
    return !t && n(this, js) === e && (e = n(this, $r)), {
      altText: e,
      decorative: n(this, fs),
      guessedText: n(this, js),
      textWithDisclaimer: n(this, $r)
    };
  }
  get data() {
    return {
      altText: n(this, se),
      decorative: n(this, fs)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: i,
    textWithDisclaimer: s,
    cancel: r = !1
  }) {
    i && (g(this, js, i), g(this, $r, s)), !(n(this, se) === t && n(this, fs) === e) && (r || (g(this, se, t), g(this, fs, e)), w(this, es, Nd).call(this));
  }
  toggle(t = !1) {
    n(this, zi) && (!t && n(this, ei) && (clearTimeout(n(this, ei)), g(this, ei, null)), n(this, zi).disabled = !t);
  }
  shown() {
    n(this, Ge)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, es, rh)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, zi)) == null || t.remove(), g(this, zi, null), g(this, Lo, null), g(this, ps, null), (e = n(this, gs)) == null || e.remove(), g(this, gs, null);
  }
};
se = new WeakMap(), fs = new WeakMap(), zi = new WeakMap(), Lo = new WeakMap(), ps = new WeakMap(), ei = new WeakMap(), Io = new WeakMap(), gs = new WeakMap(), Ge = new WeakMap(), js = new WeakMap(), $r = new WeakMap(), ms = new WeakMap(), qn = new WeakMap(), es = new WeakSet(), rh = function() {
  return n(this, se) && "added" || n(this, se) === null && this.guessedText && "review" || "missing";
}, Nd = async function() {
  var s, r, a;
  const t = n(this, zi);
  if (!t)
    return;
  if (n(this, ms)) {
    if (t.classList.toggle("done", !!n(this, se)), t.setAttribute("data-l10n-id", n(Ie, qn)[n(this, es, rh)]), (s = n(this, Lo)) == null || s.setAttribute("data-l10n-id", n(Ie, qn)[`${n(this, es, rh)}-label`]), !n(this, se)) {
      (r = n(this, ps)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, se) && !n(this, fs)) {
      t.classList.remove("done"), (a = n(this, ps)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, ps);
  if (!e) {
    g(this, ps, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, Ge).id}`;
    const o = 100, l = n(this, Ge)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, ei)), g(this, ei, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      g(this, ei, setTimeout(() => {
        g(this, ei, null), n(this, ps).classList.add("show"), n(this, Ge)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, ei) && (clearTimeout(n(this, ei)), g(this, ei, null)), (h = n(this, ps)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, fs) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, se)), e.parentNode || t.append(e);
  const i = n(this, Ge).getElementForAltText();
  i == null || i.setAttribute("aria-describedby", e.id);
}, b(Ie, qn, null), D(Ie, "_l10n", null);
let fu = Ie;
var fe, ki, Ur, _t, qh, zr, Gi, Gr, Wr, jr, Xh, Tf;
class Ed {
  constructor(t) {
    b(this, Xh);
    b(this, fe, null);
    b(this, ki, null);
    b(this, Ur, !1);
    b(this, _t, null);
    b(this, qh, null);
    b(this, zr, null);
    b(this, Gi, null);
    b(this, Gr, null);
    b(this, Wr, !1);
    b(this, jr, null);
    g(this, _t, t);
  }
  renderForToolbar() {
    const t = g(this, ki, document.createElement("button"));
    return t.className = "comment", w(this, Xh, Tf).call(this, t, !1);
  }
  renderForStandalone() {
    const t = g(this, fe, document.createElement("button"));
    t.className = "annotationCommentButton";
    const e = n(this, _t).commentButtonPosition;
    if (e) {
      const {
        style: i
      } = t;
      i.insetInlineEnd = `calc(${100 * (n(this, _t)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const s = n(this, _t).commentButtonColor;
      s && (i.backgroundColor = s);
    }
    return w(this, Xh, Tf).call(this, t, !0);
  }
  focusButton() {
    setTimeout(() => {
      var t;
      (t = n(this, fe) ?? n(this, ki)) == null || t.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!n(this, fe))
      return;
    const t = n(this, _t).commentButtonColor;
    t && (n(this, fe).style.backgroundColor = t), n(this, _t)._uiManager.updatePopupColor(n(this, _t));
  }
  get commentButtonWidth() {
    var t;
    return (((t = n(this, fe)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, _t).parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (n(this, jr))
      return n(this, jr);
    if (!n(this, fe))
      return null;
    const {
      x: t,
      y: e,
      height: i
    } = n(this, fe).getBoundingClientRect(), {
      x: s,
      y: r,
      width: a,
      height: o
    } = n(this, _t).parent.boundingClientRect;
    return [(t - s) / a, (e + i - r) / o];
  }
  set commentPopupPositionInLayer(t) {
    g(this, jr, t);
  }
  hasDefaultPopupPosition() {
    return n(this, jr) === null;
  }
  removeStandaloneCommentButton() {
    var t;
    (t = n(this, fe)) == null || t.remove(), g(this, fe, null);
  }
  removeToolbarCommentButton() {
    var t;
    (t = n(this, ki)) == null || t.remove(), g(this, ki, null);
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, fe) && (n(this, fe).classList.toggle("selected", t), n(this, fe).ariaExpanded = e);
  }
  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let i, s;
    if (e)
      [i, s] = e;
    else {
      [i, s] = n(this, _t).commentButtonPosition;
      const {
        width: d,
        height: u,
        x: p,
        y
      } = n(this, _t);
      i = p + i * d, s = y + s * u;
    }
    const r = n(this, _t).parent.boundingClientRect, {
      x: a,
      y: o,
      width: l,
      height: h
    } = r;
    n(this, _t)._uiManager.editComment(n(this, _t), a + i * l, o + s * h, {
      ...t,
      parentDimensions: r
    });
  }
  finish() {
    n(this, ki) && (n(this, ki).focus({
      focusVisible: n(this, Ur)
    }), g(this, Ur, !1));
  }
  isDeleted() {
    return n(this, Wr) || n(this, Gi) === "";
  }
  isEmpty() {
    return n(this, Gi) === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || n(this, Gi) !== n(this, qh);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: n(this, Gi),
      richText: n(this, zr),
      date: n(this, Gr),
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== n(this, Gi) && g(this, zr, null), t === null) {
      g(this, Gi, ""), g(this, Wr, !0);
      return;
    }
    g(this, Gi, t), g(this, Gr, /* @__PURE__ */ new Date()), g(this, Wr, !1);
  }
  setInitialText(t, e = null) {
    g(this, qh, t), this.data = t, g(this, Gr, null), g(this, zr, e);
  }
  shown() {
  }
  destroy() {
    var t, e;
    (t = n(this, ki)) == null || t.remove(), g(this, ki, null), (e = n(this, fe)) == null || e.remove(), g(this, fe, null), g(this, Gi, ""), g(this, zr, null), g(this, Gr, null), g(this, _t, null), g(this, Ur, !1), g(this, Wr, !1);
  }
}
fe = new WeakMap(), ki = new WeakMap(), Ur = new WeakMap(), _t = new WeakMap(), qh = new WeakMap(), zr = new WeakMap(), Gi = new WeakMap(), Gr = new WeakMap(), Wr = new WeakMap(), jr = new WeakMap(), Xh = new WeakSet(), Tf = function(t, e) {
  if (!n(this, _t)._uiManager.hasCommentManager())
    return null;
  t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [n(this, _t)._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button"));
  const i = n(this, _t)._uiManager._signal;
  if (!(i instanceof AbortSignal) || i.aborted)
    return t;
  t.addEventListener("contextmenu", Si, {
    signal: i
  }), e && (t.addEventListener("focusin", (r) => {
    n(this, _t)._focusEventsAllowed = !1, Nt(r);
  }, {
    capture: !0,
    signal: i
  }), t.addEventListener("focusout", (r) => {
    n(this, _t)._focusEventsAllowed = !0, Nt(r);
  }, {
    capture: !0,
    signal: i
  })), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
    signal: i
  });
  const s = (r) => {
    r.preventDefault(), t === n(this, ki) ? this.edit() : n(this, _t).toggleComment(!0);
  };
  return t.addEventListener("click", s, {
    capture: !0,
    signal: i
  }), t.addEventListener("keydown", (r) => {
    r.target === t && r.key === "Enter" && (g(this, Ur, !0), s(r));
  }, {
    signal: i
  }), t.addEventListener("pointerenter", () => {
    n(this, _t).toggleComment(!1, !0);
  }, {
    signal: i
  }), t.addEventListener("pointerleave", () => {
    n(this, _t).toggleComment(!1, !1);
  }, {
    signal: i
  }), t;
};
var Fo, Vr, Yh, Kh, Jh, Qh, Zh, Vs, qr, qs, Xr, Xs, Pr, Pm, Rm, Mm;
const rg = class rg {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: i = null,
    onPinchStart: s = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o
  }) {
    b(this, Pr);
    b(this, Fo);
    b(this, Vr, !1);
    b(this, Yh, null);
    b(this, Kh);
    b(this, Jh);
    b(this, Qh);
    b(this, Zh);
    b(this, Vs, null);
    b(this, qr);
    b(this, qs, null);
    b(this, Xr);
    b(this, Xs, null);
    g(this, Fo, t), g(this, Yh, i), g(this, Kh, e), g(this, Jh, s), g(this, Qh, r), g(this, Zh, a), g(this, Xr, new AbortController()), g(this, qr, AbortSignal.any([o, n(this, Xr).signal])), t.addEventListener("touchstart", w(this, Pr, Pm).bind(this), {
      passive: !1,
      signal: n(this, qr)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / ss.pixelRatio;
  }
  destroy() {
    var t, e;
    (t = n(this, Xr)) == null || t.abort(), g(this, Xr, null), (e = n(this, Vs)) == null || e.abort(), g(this, Vs, null);
  }
};
Fo = new WeakMap(), Vr = new WeakMap(), Yh = new WeakMap(), Kh = new WeakMap(), Jh = new WeakMap(), Qh = new WeakMap(), Zh = new WeakMap(), Vs = new WeakMap(), qr = new WeakMap(), qs = new WeakMap(), Xr = new WeakMap(), Xs = new WeakMap(), Pr = new WeakSet(), Pm = function(t) {
  var s, r, a;
  if ((s = n(this, Kh)) != null && s.call(this))
    return;
  if (t.touches.length === 1) {
    if (n(this, Vs))
      return;
    const o = g(this, Vs, new AbortController()), l = AbortSignal.any([n(this, qr), o.signal]), h = n(this, Fo), d = {
      capture: !0,
      signal: l,
      passive: !1
    }, u = (p) => {
      var y;
      p.pointerType === "touch" && ((y = n(this, Vs)) == null || y.abort(), g(this, Vs, null));
    };
    h.addEventListener("pointerdown", (p) => {
      p.pointerType === "touch" && (Nt(p), u(p));
    }, d), h.addEventListener("pointerup", u, d), h.addEventListener("pointercancel", u, d);
    return;
  }
  if (!n(this, Xs)) {
    g(this, Xs, new AbortController());
    const o = AbortSignal.any([n(this, qr), n(this, Xs).signal]), l = n(this, Fo), h = {
      signal: o,
      capture: !1,
      passive: !1
    };
    l.addEventListener("touchmove", w(this, Pr, Rm).bind(this), h);
    const d = w(this, Pr, Mm).bind(this);
    l.addEventListener("touchend", d, h), l.addEventListener("touchcancel", d, h), h.capture = !0, l.addEventListener("pointerdown", Nt, h), l.addEventListener("pointermove", Nt, h), l.addEventListener("pointercancel", Nt, h), l.addEventListener("pointerup", Nt, h), (r = n(this, Jh)) == null || r.call(this);
  }
  if (Nt(t), t.touches.length !== 2 || (a = n(this, Yh)) != null && a.call(this)) {
    g(this, qs, null);
    return;
  }
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]), g(this, qs, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: i.screenX,
    touch1Y: i.screenY
  });
}, Rm = function(t) {
  var f;
  if (!n(this, qs) || t.touches.length !== 2)
    return;
  Nt(t);
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]);
  const {
    screenX: s,
    screenY: r
  } = e, {
    screenX: a,
    screenY: o
  } = i, l = n(this, qs), {
    touch0X: h,
    touch0Y: d,
    touch1X: u,
    touch1Y: p
  } = l, y = u - h, S = p - d, v = a - s, E = o - r, x = Math.hypot(v, E) || 1, T = Math.hypot(y, S) || 1;
  if (!n(this, Vr) && Math.abs(T - x) <= rg.MIN_TOUCH_DISTANCE_TO_PINCH)
    return;
  if (l.touch0X = s, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, Vr)) {
    g(this, Vr, !0);
    return;
  }
  const _ = [(s + a) / 2, (r + o) / 2];
  (f = n(this, Qh)) == null || f.call(this, _, T, x);
}, Mm = function(t) {
  var e;
  t.touches.length >= 2 || (n(this, Xs) && (n(this, Xs).abort(), g(this, Xs, null), (e = n(this, Zh)) == null || e.call(this)), n(this, qs) && (Nt(t), g(this, qs, null), g(this, Vr, !1)));
};
let Ph = rg;
var Yr, Wi, kt, wt, Ys, No, Xn, tc, pe, Kr, Ks, bs, Yn, ec, Jr, ii, ic, Qr, Js, ys, Oo, Bo, Di, Zr, sc, Pu, V, Pf, nc, Rf, Od, km, Dm, Mf, Bd, kf, Lm, Im, Fm, Df, Nm, Lf, Om, Bm, Hm, If, ah;
const Y = class Y {
  constructor(t) {
    b(this, V);
    b(this, Yr, null);
    b(this, Wi, null);
    b(this, kt, null);
    b(this, wt, null);
    b(this, Ys, null);
    b(this, No, !1);
    b(this, Xn, null);
    b(this, tc, "");
    b(this, pe, null);
    b(this, Kr, null);
    b(this, Ks, null);
    b(this, bs, null);
    b(this, Yn, null);
    b(this, ec, "");
    b(this, Jr, !1);
    b(this, ii, null);
    b(this, ic, !1);
    b(this, Qr, !1);
    b(this, Js, !1);
    b(this, ys, null);
    b(this, Oo, 0);
    b(this, Bo, 0);
    b(this, Di, null);
    b(this, Zr, null);
    D(this, "isSelected", !1);
    D(this, "_isCopy", !1);
    D(this, "_editToolbar", null);
    D(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    D(this, "_initialData", null);
    D(this, "_isVisible", !0);
    D(this, "_uiManager", null);
    D(this, "_focusEventsAllowed", !0);
    b(this, sc, !1);
    b(this, Pu, Y._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: i,
        pageHeight: s,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, s], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = Y.prototype._resizeWithKeyboard, e = Tr.TRANSLATE_SMALL, i = Tr.TRANSLATE_BIG;
    return J(this, "_resizerKeyboardManager", new md([[["ArrowLeft", "mac+ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-i, 0]
    }], [["ArrowRight", "mac+ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [i, 0]
    }], [["ArrowUp", "mac+ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -i]
    }], [["ArrowDown", "mac+ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, i]
    }], [["Escape", "mac+Escape"], Y.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return J(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new uw({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (Y._l10n ?? (Y._l10n = t), Y._l10nResizer || (Y._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), Y._borderLineWidth !== -1)
      return;
    const i = getComputedStyle(document.documentElement);
    Y._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    Et("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, sc);
  }
  set _isDraggable(t) {
    var e;
    g(this, sc, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = n(this, Pu);
  }
  setParent(t) {
    var e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (w(this, V, ah).call(this), (e = n(this, bs)) == null || e.remove(), g(this, bs, null)), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, Jr) ? g(this, Jr, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var i;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (i = this.parent) != null && i.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, i, s) {
    const [r, a] = this.parentDimensions;
    [i, s] = this.screenToPageTranslation(i, s), this.x = (t + i) / r, this.y = (e + s) / a, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    const [i, s] = this.parentDimensions;
    this.setAt(t * i, e * s, this.width * i, this.height * s), this._onTranslated();
  }
  translate(t, e) {
    w(this, V, Pf).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, ii) || g(this, ii, [this.x, this.y, this.width, this.height]), w(this, V, Pf).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, ii) || g(this, ii, [this.x, this.y, this.width, this.height]);
    const {
      div: i,
      parentDimensions: [s, r]
    } = this;
    if (this.x += t / s, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: p
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
    const {
      style: d
    } = i;
    d.left = `${(100 * a).toFixed(2)}%`, d.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), i.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!n(this, ii) && (n(this, ii)[0] !== this.x || n(this, ii)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, ii) && (n(this, ii)[2] !== this.width || n(this, ii)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: i
    } = Y, s = i / t, r = i / e;
    switch (this.rotation) {
      case 90:
        return [-s, r];
      case 180:
        return [s, r];
      case 270:
        return [s, -r];
      default:
        return [-s, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [i, s]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= i, l *= s, r *= i, a *= s, this._mustFixPosition)
      switch (t) {
        case 0:
          r = Me(r, 0, i - o), a = Me(a, 0, s - l);
          break;
        case 90:
          r = Me(r, 0, i - l), a = Me(a, o, s);
          break;
        case 180:
          r = Me(r, o, i), a = Me(a, l, s);
          break;
        case 270:
          r = Me(r, l, i), a = Me(a, 0, s - o);
          break;
      }
    this.x = r /= i, this.y = a /= s;
    const [h, d] = this.getBaseTranslation();
    r += h, a += d, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var i;
    return w(i = Y, nc, Rf).call(i, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var i;
    return w(i = Y, nc, Rf).call(i, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, i]
    } = this;
    return [e * t, i * t];
  }
  setDims() {
    const {
      div: {
        style: t
      },
      width: e,
      height: i
    } = this;
    t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * i).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = n(this, kt)) == null || t.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || n(this, Qr))
      return this._editToolbar;
    this._editToolbar = new bf(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [e, i] of t)
        await this._editToolbar.addButton(e, i);
    return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  addCommentButtonInToolbar() {
    var t;
    (t = this._editToolbar) == null || t.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    var t;
    (t = this._editToolbar) == null || t.removeButton("comment");
  }
  removeEditToolbar() {
    var t, e;
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, kt)) == null || e.destroy();
  }
  addContainer(t) {
    var i;
    const e = (i = this._editToolbar) == null ? void 0 : i.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return n(this, kt) || (fu.initialize(Y._l10n), g(this, kt, new fu(this)), n(this, Yr) && (n(this, kt).data = n(this, Yr), g(this, Yr, null))), n(this, kt);
  }
  get altTextData() {
    var t;
    return (t = n(this, kt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, kt) && (n(this, kt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, kt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, kt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, kt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, kt) && !n(this, kt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, kt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  focusCommentButton() {
    var t;
    (t = n(this, wt)) == null || t.focusButton();
  }
  addCommentButton() {
    return n(this, wt) || g(this, wt, new Ed(this));
  }
  addStandaloneCommentButton() {
    if (n(this, Ys)) {
      this._uiManager.isEditingMode() && n(this, Ys).classList.remove("hidden");
      return;
    }
    this.hasComment && (g(this, Ys, n(this, wt).renderForStandalone()), this.div.append(n(this, Ys)));
  }
  removeStandaloneCommentButton() {
    n(this, wt).removeStandaloneCommentButton(), g(this, Ys, null);
  }
  hideStandaloneCommentButton() {
    var t;
    (t = n(this, Ys)) == null || t.classList.add("hidden");
  }
  get comment() {
    const {
      data: {
        richText: t,
        text: e,
        date: i,
        deleted: s
      }
    } = n(this, wt);
    return {
      text: e,
      richText: t,
      date: i,
      deleted: s,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(t) {
    n(this, wt) || g(this, wt, new Ed(this)), n(this, wt).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({
    comment: t,
    popupRef: e,
    richText: i
  }) {
    if (!e || (n(this, wt) || g(this, wt, new Ed(this)), n(this, wt).setInitialText(t, i), !this.annotationElementId))
      return;
    const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    s && this.updateFromAnnotationLayer(s);
  }
  get hasEditedComment() {
    var t;
    return (t = n(this, wt)) == null ? void 0 : t.hasBeenEdited();
  }
  get hasDeletedComment() {
    var t;
    return (t = n(this, wt)) == null ? void 0 : t.isDeleted();
  }
  get hasComment() {
    return !!n(this, wt) && !n(this, wt).isEmpty() && !n(this, wt).isDeleted();
  }
  async editComment(t) {
    n(this, wt) || g(this, wt, new Ed(this)), n(this, wt).edit(t);
  }
  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }
  setSelectedCommentButton(t) {
    n(this, wt).setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , s] = t.rect, [r] = this.pageDimensions, [a] = this.pageTranslation, o = a + r + 1, l = s - 100, h = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, h, s]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e
    }
  }) {
    n(this, wt).data = e ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, No) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), w(this, V, Lf).call(this);
    const [e, i] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
    const [s, r] = this.getInitialTranslation();
    return this.translate(s, r), mm(this, t, ["keydown", "pointerdown", "dblclick"]), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, Zr) || g(this, Zr, new Ph({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: w(this, V, Lm).bind(this),
      onPinching: w(this, V, Im).bind(this),
      onPinchEnd: w(this, V, Fm).bind(this),
      signal: this._uiManager._signal
    }))), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (g(this, Jr, !0), this._isDraggable) {
      w(this, V, Nm).call(this, t);
      return;
    }
    w(this, V, Df).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, ys) && clearTimeout(n(this, ys)), g(this, ys, setTimeout(() => {
      var t;
      g(this, ys, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, i) {
    t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, i = this.rotation) {
    const s = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / s, d = e / s, u = this.x * r, p = this.y * a, y = this.width * r, S = this.height * a;
    switch (i) {
      case 0:
        return [u + h + o, a - p - d - S + l, u + h + y + o, a - p - d + l];
      case 90:
        return [u + d + o, a - p + h + l, u + d + S + o, a - p + h + y + l];
      case 180:
        return [u - h - y + o, a - p + d + l, u - h + o, a - p + d + S + l];
      case 270:
        return [u - d - S + o, a - p - h - y + l, u - d + o, a - p - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [i, s, r, a] = t, o = r - i, l = a - s;
    switch (this.rotation) {
      case 0:
        return [i, e - a, o, l];
      case 90:
        return [i, e - s, l, o];
      case 180:
        return [r, e - s, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && Y._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    var t;
    (t = n(this, wt)) == null || t.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: t,
        color: e,
        date: i,
        opacity: s,
        deleted: r,
        richText: a
      },
      uid: o,
      pageIndex: l,
      creationDate: h,
      modificationDate: d
    } = this;
    return {
      id: o,
      pageIndex: l,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t
      },
      creationDate: h,
      modificationDate: i || d,
      popupRef: !r,
      color: e,
      opacity: s
    };
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), g(this, Qr, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), g(this, Qr, !1), !0) : !1;
  }
  isInEditMode() {
    return n(this, Qr);
  }
  shouldGetKeyboardEvents() {
    return n(this, Js);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: i,
      right: s
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && s > 0 && t < r && i > 0;
  }
  rebuild() {
    w(this, V, Lf).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    var i;
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: ((i = this._initialData) == null ? void 0 : i.popupRef) || ""
    };
  }
  static async deserialize(t, e, i) {
    const s = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: i,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    s.rotation = t.rotation, g(s, Yr, t.accessibilityData), s._isCopy = t.isCopy || !1;
    const [r, a] = s.pageDimensions, [o, l, h, d] = s.getRectInCurrentCoords(t.rect, a);
    return s.x = o / r, s.y = l / a, s.width = h / r, s.height = d / a, s;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e;
    if ((t = n(this, Yn)) == null || t.abort(), g(this, Yn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, ys) && (clearTimeout(n(this, ys)), g(this, ys, null)), w(this, V, ah).call(this), this.removeEditToolbar(), n(this, Di)) {
      for (const i of n(this, Di).values())
        clearTimeout(i);
      g(this, Di, null);
    }
    this.parent = null, (e = n(this, Zr)) == null || e.destroy(), g(this, Zr, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (w(this, V, km).call(this), n(this, pe).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e]
    } = this, [i, s, r, a] = this.getPDFRect();
    return [Y._round(i + (r - i) * t), Y._round(s + (a - s) * (1 - e))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return n(this, wt).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    n(this, wt).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return n(this, wt).hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return n(this, wt).commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    n(this, wt).setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), g(this, Ks, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, pe).children;
    if (!n(this, Wi)) {
      g(this, Wi, Array.from(e));
      const a = w(this, V, Om).bind(this), o = w(this, V, Bm).bind(this), l = this._uiManager._signal;
      for (const h of n(this, Wi)) {
        const d = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", w(this, V, Hm).bind(this, d), {
          signal: l
        }), h.setAttribute("data-l10n-id", Y._l10nResizer[d]);
      }
    }
    const i = n(this, Wi)[0];
    let s = 0;
    for (const a of e) {
      if (a === i)
        break;
      s++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Wi).length / 4);
    if (r !== s) {
      if (r < s)
        for (let o = 0; o < s - r; o++)
          n(this, pe).append(n(this, pe).firstChild);
      else if (r > s)
        for (let o = 0; o < r - s; o++)
          n(this, pe).firstChild.before(n(this, pe).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, Wi)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", Y._l10nResizer[h]);
      }
    }
    w(this, V, If).call(this, 0), g(this, Js, !0), n(this, pe).firstChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, Js) && w(this, V, kf).call(this, n(this, ec), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    w(this, V, ah).call(this), this.div.focus();
  }
  select() {
    var t, e, i;
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var s, r;
        (s = this.div) != null && s.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (i = n(this, kt)) == null || i.toggleAltTextBadge(!1);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
      var t;
      return (t = this.div) == null ? void 0 : t.focus({
        preventScroll: !0
      });
    }, 0);
  }
  unselect() {
    var t, e, i, s, r;
    this.isSelected && (this.isSelected = !1, (t = n(this, pe)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (i = this.div) != null && i.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (s = this._editToolbar) == null || s.hide(), (r = n(this, kt)) == null || r.toggleAltTextBadge(!0), this.hasComment && this._uiManager.toggleComment(this, !1, !1));
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return !1;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.id
    }));
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, ic);
  }
  set isEditing(t) {
    g(this, ic, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, Di) || g(this, Di, /* @__PURE__ */ new Map());
      const {
        action: i
      } = t;
      let s = n(this, Di).get(i);
      s && clearTimeout(s), s = setTimeout(() => {
        this._reportTelemetry(t), n(this, Di).delete(i), n(this, Di).size === 0 && g(this, Di, null);
      }, Y._telemetryTimeout), n(this, Di).set(i, s);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), g(this, No, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), g(this, No, !0);
  }
  updateFakeAnnotationElement(t) {
    if (!n(this, bs) && !this.deleted) {
      g(this, bs, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      n(this, bs).remove(), g(this, bs, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && n(this, bs).updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const i = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), i.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
Yr = new WeakMap(), Wi = new WeakMap(), kt = new WeakMap(), wt = new WeakMap(), Ys = new WeakMap(), No = new WeakMap(), Xn = new WeakMap(), tc = new WeakMap(), pe = new WeakMap(), Kr = new WeakMap(), Ks = new WeakMap(), bs = new WeakMap(), Yn = new WeakMap(), ec = new WeakMap(), Jr = new WeakMap(), ii = new WeakMap(), ic = new WeakMap(), Qr = new WeakMap(), Js = new WeakMap(), ys = new WeakMap(), Oo = new WeakMap(), Bo = new WeakMap(), Di = new WeakMap(), Zr = new WeakMap(), sc = new WeakMap(), Pu = new WeakMap(), V = new WeakSet(), Pf = function([t, e], i, s) {
  [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, nc = new WeakSet(), Rf = function(t, e, i) {
  switch (i) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Od = function(t) {
  switch (t) {
    case 90: {
      const [e, i] = this.pageDimensions;
      return [0, -e / i, i / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, i] = this.pageDimensions;
      return [0, e / i, -i / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, km = function() {
  if (n(this, pe))
    return;
  g(this, pe, document.createElement("div")), n(this, pe).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const i of t) {
    const s = document.createElement("div");
    n(this, pe).append(s), s.classList.add("resizer", i), s.setAttribute("data-resizer-name", i), s.addEventListener("pointerdown", w(this, V, Dm).bind(this, i), {
      signal: e
    }), s.addEventListener("contextmenu", Si, {
      signal: e
    }), s.tabIndex = -1;
  }
  this.div.prepend(n(this, pe));
}, Dm = function(t, e) {
  var d;
  e.preventDefault();
  const {
    isMac: i
  } = ce.platform;
  if (e.button !== 0 || e.ctrlKey && i)
    return;
  (d = n(this, kt)) == null || d.toggle(!1);
  const s = this._isDraggable;
  this._isDraggable = !1, g(this, Kr, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", w(this, V, kf).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Nt, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", Si, {
    signal: a
  }), g(this, Ks, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, kt)) == null || u.toggle(!0), this._isDraggable = s, this.parent.div.style.cursor = o, this.div.style.cursor = l, w(this, V, Bd).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, Mf = function(t, e, i, s) {
  this.width = i, this.height = s, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, Bd = function() {
  if (!n(this, Ks))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: i,
    savedHeight: s
  } = n(this, Ks);
  g(this, Ks, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === i && l === s || this.addCommands({
    cmd: w(this, V, Mf).bind(this, r, a, o, l),
    undo: w(this, V, Mf).bind(this, t, e, i, s),
    mustExec: !0
  });
}, kf = function(t, e) {
  const [i, s] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = Y.MIN_SIZE / i, d = Y.MIN_SIZE / s, u = w(this, V, Od).call(this, this.rotation), p = (H, B) => [u[0] * H + u[2] * B, u[1] * H + u[3] * B], y = w(this, V, Od).call(this, 360 - this.rotation), S = (H, B) => [y[0] * H + y[2] * B, y[1] * H + y[3] * B];
  let v, E, x = !1, T = !1;
  switch (t) {
    case "topLeft":
      x = !0, v = (H, B) => [0, 0], E = (H, B) => [H, B];
      break;
    case "topMiddle":
      v = (H, B) => [H / 2, 0], E = (H, B) => [H / 2, B];
      break;
    case "topRight":
      x = !0, v = (H, B) => [H, 0], E = (H, B) => [0, B];
      break;
    case "middleRight":
      T = !0, v = (H, B) => [H, B / 2], E = (H, B) => [0, B / 2];
      break;
    case "bottomRight":
      x = !0, v = (H, B) => [H, B], E = (H, B) => [0, 0];
      break;
    case "bottomMiddle":
      v = (H, B) => [H / 2, B], E = (H, B) => [H / 2, 0];
      break;
    case "bottomLeft":
      x = !0, v = (H, B) => [0, B], E = (H, B) => [H, 0];
      break;
    case "middleLeft":
      T = !0, v = (H, B) => [0, B / 2], E = (H, B) => [H, B / 2];
      break;
  }
  const _ = v(o, l), f = E(o, l);
  let m = p(...f);
  const A = Y._round(r + m[0]), C = Y._round(a + m[1]);
  let P = 1, R = 1, M, k;
  if (e.fromKeyboard)
    ({
      deltaX: M,
      deltaY: k
    } = e);
  else {
    const {
      screenX: H,
      screenY: B
    } = e, [tt, st] = n(this, Kr);
    [M, k] = this.screenToPageTranslation(H - tt, B - st), n(this, Kr)[0] = H, n(this, Kr)[1] = B;
  }
  if ([M, k] = S(M / i, k / s), x) {
    const H = Math.hypot(o, l);
    P = R = Math.max(Math.min(Math.hypot(f[0] - _[0] - M, f[1] - _[1] - k) / H, 1 / o, 1 / l), h / o, d / l);
  } else T ? P = Me(Math.abs(f[0] - _[0] - M), h, 1) / o : R = Me(Math.abs(f[1] - _[1] - k), d, 1) / l;
  const L = Y._round(o * P), N = Y._round(l * R);
  m = p(...E(L, N));
  const I = A - m[0], j = C - m[1];
  n(this, ii) || g(this, ii, [this.x, this.y, this.width, this.height]), this.width = L, this.height = N, this.x = I, this.y = j, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Lm = function() {
  var t;
  g(this, Ks, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, kt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Im = function(t, e, i) {
  let r = 0.7 * (i / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = w(this, V, Od).call(this, this.rotation), o = (A, C) => [a[0] * A + a[2] * C, a[1] * A + a[3] * C], [l, h] = this.parentDimensions, d = this.x, u = this.y, p = this.width, y = this.height, S = Y.MIN_SIZE / l, v = Y.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / p, 1 / y), S / p, v / y);
  const E = Y._round(p * r), x = Y._round(y * r);
  if (E === p && x === y)
    return;
  n(this, ii) || g(this, ii, [d, u, p, y]);
  const T = o(p / 2, y / 2), _ = Y._round(d + T[0]), f = Y._round(u + T[1]), m = o(E / 2, x / 2);
  this.x = _ - m[0], this.y = f - m[1], this.width = E, this.height = x, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Fm = function() {
  var t;
  (t = n(this, kt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), w(this, V, Bd).call(this);
}, Df = function(t) {
  const {
    isMac: e
  } = ce.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Nm = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let i = !1;
  const s = new AbortController(), r = this._uiManager.combinedSignal(s), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = (h) => {
    s.abort(), g(this, Xn, null), g(this, Jr, !1), this._uiManager.endDragSession() || w(this, V, Df).call(this, h), i && this._onStopDragging();
  };
  e && (g(this, Oo, t.clientX), g(this, Bo, t.clientY), g(this, Xn, t.pointerId), g(this, tc, t.pointerType), window.addEventListener("pointermove", (h) => {
    i || (i = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: p
    } = h;
    if (p !== n(this, Xn)) {
      Nt(h);
      return;
    }
    const [y, S] = this.screenToPageTranslation(d - n(this, Oo), u - n(this, Bo));
    g(this, Oo, d), g(this, Bo, u), this._uiManager.dragSelectedEditors(y, S);
  }, a), window.addEventListener("touchmove", Nt, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, tc) && (n(this, Zr) || h.isPrimary) && o(h), Nt(h);
  }, a));
  const l = (h) => {
    if (!n(this, Xn) || n(this, Xn) === h.pointerId) {
      o(h);
      return;
    }
    Nt(h);
  };
  window.addEventListener("pointerup", l, {
    signal: r
  }), window.addEventListener("blur", l, {
    signal: r
  });
}, Lf = function() {
  if (n(this, Yn) || !this.div)
    return;
  g(this, Yn, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Yn));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Om = function(t) {
  Y._resizerKeyboardManager.exec(this, t);
}, Bm = function(t) {
  var e;
  n(this, Js) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, pe) && w(this, V, ah).call(this);
}, Hm = function(t) {
  g(this, ec, n(this, Js) ? t : "");
}, If = function(t) {
  if (n(this, Wi))
    for (const e of n(this, Wi))
      e.tabIndex = t;
}, ah = function() {
  g(this, Js, !1), w(this, V, If).call(this, -1), w(this, V, Bd).call(this);
}, b(Y, nc), D(Y, "_l10n", null), D(Y, "_l10nResizer", null), D(Y, "_borderLineWidth", -1), D(Y, "_colorManager", new Af()), D(Y, "_zIndex", 1), D(Y, "_telemetryTimeout", 1e3);
let Ct = Y;
class uw extends Ct {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const bg = 3285377520, xi = 4294901760, os = 65535;
class $m {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : bg, this.h2 = t ? t & 4294967295 : bg;
  }
  update(t) {
    let e, i;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), i = 0;
      for (let v = 0, E = t.length; v < E; v++) {
        const x = t.charCodeAt(v);
        x <= 255 ? e[i++] = x : (e[i++] = x >>> 8, e[i++] = x & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), i = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const s = i >> 2, r = i - s * 4, a = new Uint32Array(e.buffer, 0, s);
    let o = 0, l = 0, h = this.h1, d = this.h2;
    const u = 3432918353, p = 461845907, y = u & os, S = p & os;
    for (let v = 0; v < s; v++)
      v & 1 ? (o = a[v], o = o * u & xi | o * y & os, o = o << 15 | o >>> 17, o = o * p & xi | o * S & os, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[v], l = l * u & xi | l * y & os, l = l << 15 | l >>> 17, l = l * p & xi | l * S & os, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[s * 4 + 2] << 16;
      case 2:
        o ^= e[s * 4 + 1] << 8;
      case 1:
        o ^= e[s * 4], o = o * u & xi | o * y & os, o = o << 15 | o >>> 17, o = o * p & xi | o * S & os, s & 1 ? h ^= o : d ^= o;
    }
    this.h1 = h, this.h2 = d;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & xi | t * 36045 & os, e = e * 4283543511 & xi | ((e << 16 | t >>> 16) * 2950163797 & xi) >>> 16, t ^= e >>> 1, t = t * 444984403 & xi | t * 60499 & os, e = e * 3301882366 & xi | ((e << 16 | t >>> 16) * 3120437893 & xi) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Ff = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var ta, ea, Qs, ge, Ru, Um;
class qp {
  constructor() {
    b(this, Ru);
    b(this, ta, !1);
    b(this, ea, null);
    b(this, Qs, null);
    b(this, ge, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(t, e) {
    const i = n(this, ge).get(t);
    return i === void 0 ? e : Object.assign(e, i);
  }
  getRawValue(t) {
    return n(this, ge).get(t);
  }
  remove(t) {
    const e = n(this, ge).get(t);
    if (e !== void 0 && (e instanceof Ct && n(this, Qs).delete(e.annotationElementId), n(this, ge).delete(t), n(this, ge).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function")) {
      for (const i of n(this, ge).values())
        if (i instanceof Ct)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const i = n(this, ge).get(t);
    let s = !1;
    if (i !== void 0)
      for (const [r, a] of Object.entries(e))
        i[r] !== a && (s = !0, i[r] = a);
    else
      s = !0, n(this, ge).set(t, e);
    s && w(this, Ru, Um).call(this), e instanceof Ct && ((n(this, Qs) || g(this, Qs, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type));
  }
  has(t) {
    return n(this, ge).has(t);
  }
  get size() {
    return n(this, ge).size;
  }
  resetModified() {
    n(this, ta) && (g(this, ta, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new zm(this);
  }
  get serializable() {
    if (n(this, ge).size === 0)
      return Ff;
    const t = /* @__PURE__ */ new Map(), e = new $m(), i = [], s = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, ge)) {
      const l = o instanceof Ct ? o.serialize(!1, s) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && i.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: i
    } : Ff;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let i = 0, s = 0;
    for (const r of n(this, ge).values()) {
      if (!(r instanceof Ct)) {
        r.popup && (r.popup.deleted ? s += 1 : i += 1);
        continue;
      }
      r.isCommentDeleted ? s += 1 : r.hasEditedComment && (i += 1);
      const a = r.telemetryFinalData;
      if (!a)
        continue;
      const {
        type: o
      } = a;
      e.has(o) || e.set(o, Object.getPrototypeOf(r).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const l = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [h, d] of Object.entries(a)) {
        if (h === "type")
          continue;
        let u = l.get(h);
        u || (u = /* @__PURE__ */ new Map(), l.set(h, u));
        const p = u.get(d) ?? 0;
        u.set(d, p + 1);
      }
    }
    if ((s > 0 || i > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
      deleted: s,
      edited: i
    }), !t)
      return null;
    for (const [r, a] of e)
      t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }
  resetModifiedIds() {
    g(this, ea, null);
  }
  updateEditor(t, e) {
    var s;
    const i = (s = n(this, Qs)) == null ? void 0 : s.get(t);
    return i ? (i.updateFromAnnotationLayer(e), !0) : !1;
  }
  getEditor(t) {
    var e;
    return ((e = n(this, Qs)) == null ? void 0 : e.get(t)) || null;
  }
  get modifiedIds() {
    if (n(this, ea))
      return n(this, ea);
    const t = [];
    if (n(this, Qs))
      for (const e of n(this, Qs).values())
        e.serialize() && t.push(e.annotationElementId);
    return g(this, ea, {
      ids: new Set(t),
      hash: t.join(",")
    });
  }
  [Symbol.iterator]() {
    return n(this, ge).entries();
  }
}
ta = new WeakMap(), ea = new WeakMap(), Qs = new WeakMap(), ge = new WeakMap(), Ru = new WeakSet(), Um = function() {
  n(this, ta) || (g(this, ta, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var rc;
class zm extends qp {
  constructor(e) {
    super();
    b(this, rc);
    const {
      map: i,
      hash: s,
      transfer: r
    } = e.serializable, a = structuredClone(i, r ? {
      transfer: r
    } : null);
    g(this, rc, {
      map: a,
      hash: s,
      transfer: r
    });
  }
  get print() {
    Et("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, rc);
  }
  get modifiedIds() {
    return J(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
rc = new WeakMap();
var Ho;
class fw {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    b(this, Ho, /* @__PURE__ */ new Set());
    this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    this.nativeFontFaces.add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces)
      this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Ho).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: i
  }) {
    if (!(!t || n(this, Ho).has(t.loadedName))) {
      if (nt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: r,
          style: a
        } = t, o = new FontFace(s, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Ho).add(s), i == null || i(t);
        } catch {
          X(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      Et("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const i = t.createNativeFontFace();
      if (i) {
        this.addNativeFontFace(i);
        try {
          await i.loaded;
        } catch (s) {
          throw X(`Failed to load font '${i.family}': '${s}'.`), t.disableFontFace = !0, s;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((i) => {
        const s = this._queueLoadingCallback(i);
        this._prepareFontLoadEvent(t, s);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const t = !!((e = this._document) != null && e.fonts);
    return J(this, "isFontLoadingAPISupported", t);
  }
  get isSyncFontLoadingSupported() {
    return J(this, "isSyncFontLoadingSupported", Be || ce.platform.isFirefox);
  }
  _queueLoadingCallback(t) {
    function e() {
      for (nt(!s.done, "completeRequest() cannot be called twice."), s.done = !0; i.length > 0 && i[0].done; ) {
        const r = i.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: i
    } = this, s = {
      done: !1,
      complete: e,
      callback: t
    };
    return i.push(s), s;
  }
  get _loadTestFont() {
    const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return J(this, "_loadTestFont", t);
  }
  _prepareFontLoadEvent(t, e) {
    function i(f, m) {
      return f.charCodeAt(m) << 24 | f.charCodeAt(m + 1) << 16 | f.charCodeAt(m + 2) << 8 | f.charCodeAt(m + 3) & 255;
    }
    function s(f, m, A, C) {
      const P = f.substring(0, m), R = f.substring(m + A);
      return P + C + R;
    }
    let r, a;
    const o = this._document.createElement("canvas");
    o.width = 1, o.height = 1;
    const l = o.getContext("2d");
    let h = 0;
    function d(f, m) {
      if (++h > 30) {
        X("Load test font never loaded."), m();
        return;
      }
      if (l.font = "30px " + f, l.fillText(".", 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
        m();
        return;
      }
      setTimeout(d.bind(null, f, m));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = s(p, 976, u.length, u);
    const S = 16, v = 1482184792;
    let E = i(p, S);
    for (r = 0, a = u.length - 3; r < a; r += 4)
      E = E - v + i(u, r) | 0;
    r < u.length && (E = E - v + i(u + "XXX", r) | 0), p = s(p, S, 4, tw(E));
    const x = `url(data:font/opentype;base64,${btoa(p)});`, T = `@font-face {font-family:"${u}";src:${x}}`;
    this.insertRule(T);
    const _ = this._document.createElement("div");
    _.style.visibility = "hidden", _.style.width = _.style.height = "10px", _.style.position = "absolute", _.style.top = _.style.left = "0px";
    for (const f of [t.loadedName, u]) {
      const m = this._document.createElement("span");
      m.textContent = "Hi", m.style.fontFamily = f, _.append(m);
    }
    this._document.body.append(_), d(u, () => {
      _.remove(), e.complete();
    });
  }
}
Ho = new WeakMap();
var ft;
class pw {
  constructor(t, e = null, i, s) {
    b(this, ft);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), g(this, ft, t), this._inspectFont = e, i && Object.assign(this, i), s && (this.charProcOperatorList = s);
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let t;
    if (!this.cssFontInfo)
      t = new FontFace(this.loadedName, this.data, {});
    else {
      const i = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (i.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, i);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }
  createFontFaceRule() {
    var i;
    if (!this.data || this.disableFontFace)
      return null;
    const t = `url(data:${this.mimetype};base64,${nm(this.data)});`;
    let e;
    if (!this.cssFontInfo)
      e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${t}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, t), e;
  }
  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    const i = this.loadedName + "_path_" + e;
    let s;
    try {
      s = t.get(i);
    } catch (a) {
      X(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(s || "");
    return this.fontExtraProperties || t.delete(i), this.compiledGlyphs[e] = r;
  }
  get black() {
    return n(this, ft).black;
  }
  get bold() {
    return n(this, ft).bold;
  }
  get disableFontFace() {
    return n(this, ft).disableFontFace ?? !1;
  }
  get fontExtraProperties() {
    return n(this, ft).fontExtraProperties ?? !1;
  }
  get isInvalidPDFjsFont() {
    return n(this, ft).isInvalidPDFjsFont;
  }
  get isType3Font() {
    return n(this, ft).isType3Font;
  }
  get italic() {
    return n(this, ft).italic;
  }
  get missingFile() {
    return n(this, ft).missingFile;
  }
  get remeasure() {
    return n(this, ft).remeasure;
  }
  get vertical() {
    return n(this, ft).vertical;
  }
  get ascent() {
    return n(this, ft).ascent;
  }
  get defaultWidth() {
    return n(this, ft).defaultWidth;
  }
  get descent() {
    return n(this, ft).descent;
  }
  get bbox() {
    return n(this, ft).bbox;
  }
  get fontMatrix() {
    return n(this, ft).fontMatrix;
  }
  get fallbackName() {
    return n(this, ft).fallbackName;
  }
  get loadedName() {
    return n(this, ft).loadedName;
  }
  get mimetype() {
    return n(this, ft).mimetype;
  }
  get name() {
    return n(this, ft).name;
  }
  get data() {
    return n(this, ft).data;
  }
  clearData() {
    n(this, ft).clearData();
  }
  get cssFontInfo() {
    return n(this, ft).cssFontInfo;
  }
  get systemFontInfo() {
    return n(this, ft).systemFontInfo;
  }
  get defaultVMetrics() {
    return n(this, ft).defaultVMetrics;
  }
}
ft = new WeakMap();
function gw(c) {
  if (c instanceof URL)
    return c.href;
  if (typeof c == "string") {
    if (Be)
      return c;
    const t = URL.parse(c, window.location);
    if (t)
      return t.href;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function mw(c) {
  if (Be && typeof Buffer < "u" && c instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength)
    return c;
  if (typeof c == "string")
    return fd(c);
  if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c == "object" && !isNaN(c == null ? void 0 : c.length))
    return new Uint8Array(c);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function _d(c) {
  if (typeof c != "string")
    return null;
  if (c.endsWith("/"))
    return c;
  throw new Error(`Invalid factory url: "${c}" must include trailing slash.`);
}
const Nf = (c) => typeof c == "object" && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0, bw = (c) => typeof c == "object" && typeof (c == null ? void 0 : c.name) == "string", Gm = nw.bind(null, Nf, bw);
var Zs, Mu;
class yw {
  constructor() {
    b(this, Zs, /* @__PURE__ */ new Map());
    b(this, Mu, Promise.resolve());
  }
  postMessage(t, e) {
    const i = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, Mu).then(() => {
      for (const [s] of n(this, Zs))
        s.call(this, i);
    });
  }
  addEventListener(t, e, i = null) {
    let s = null;
    if ((i == null ? void 0 : i.signal) instanceof AbortSignal) {
      const {
        signal: r
      } = i;
      if (r.aborted) {
        X("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      s = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, Zs).set(e, s);
  }
  removeEventListener(t, e) {
    const i = n(this, Zs).get(e);
    i == null || i(), n(this, Zs).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, Zs))
      t == null || t();
    n(this, Zs).clear();
  }
}
Zs = new WeakMap(), Mu = new WeakMap();
const Cd = {
  DATA: 1,
  ERROR: 2
}, Vt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function yg() {
}
function Ue(c) {
  if (c instanceof _n || c instanceof du || c instanceof cg || c instanceof _h || c instanceof sf)
    return c;
  switch (c instanceof Error || typeof c == "object" && c !== null || Et('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
    case "AbortException":
      return new _n(c.message);
    case "InvalidPDFException":
      return new du(c.message);
    case "PasswordException":
      return new cg(c.message, c.code);
    case "ResponseException":
      return new _h(c.message, c.status, c.missing);
    case "UnknownErrorException":
      return new sf(c.message, c.details);
  }
  return new sf(c.message, c.toString());
}
var $o, Oi, Wm, jm, Vm, Hd;
class oh {
  constructor(t, e, i) {
    b(this, Oi);
    b(this, $o, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener("message", w(this, Oi, Wm).bind(this), {
      signal: n(this, $o).signal
    });
  }
  on(t, e) {
    const i = this.actionHandler;
    if (i[t])
      throw new Error(`There is already an actionName called "${t}"`);
    i[t] = e;
  }
  send(t, e, i) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e
    }, i);
  }
  sendWithPromise(t, e, i) {
    const s = this.callbackId++, r = Promise.withResolvers();
    this.callbackCapabilities[s] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: s,
        data: e
      }, i);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, i, s) {
    const r = this.streamId++, a = this.sourceName, o = this.targetName, l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: h,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: h.desiredSize
        }, s), d.promise;
      },
      pull: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r].pullCall = d, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: Vt.PULL,
          streamId: r,
          desiredSize: h.desiredSize
        }), d.promise;
      },
      cancel: (h) => {
        nt(h instanceof Error, "cancel must have a valid reason");
        const d = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = d, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: Vt.CANCEL,
          streamId: r,
          reason: Ue(h)
        }), d.promise;
      }
    }, i);
  }
  destroy() {
    var t;
    (t = n(this, $o)) == null || t.abort(), g(this, $o, null);
  }
}
$o = new WeakMap(), Oi = new WeakSet(), Wm = function({
  data: t
}) {
  if (t.targetName !== this.sourceName)
    return;
  if (t.stream) {
    w(this, Oi, Vm).call(this, t);
    return;
  }
  if (t.callback) {
    const i = t.callbackId, s = this.callbackCapabilities[i];
    if (!s)
      throw new Error(`Cannot resolve callback ${i}`);
    if (delete this.callbackCapabilities[i], t.callback === Cd.DATA)
      s.resolve(t.data);
    else if (t.callback === Cd.ERROR)
      s.reject(Ue(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const i = this.sourceName, s = t.sourceName, r = this.comObj;
    Promise.try(e, t.data).then(function(a) {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: Cd.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, function(a) {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: Cd.ERROR,
        callbackId: t.callbackId,
        reason: Ue(a)
      });
    });
    return;
  }
  if (t.streamId) {
    w(this, Oi, jm).call(this, t);
    return;
  }
  e(t.data);
}, jm = function(t) {
  const e = t.streamId, i = this.sourceName, s = t.sourceName, r = this.comObj, a = this, o = this.actionHandler[t.action], l = {
    enqueue(h, d = 1, u) {
      if (this.isCancelled)
        return;
      const p = this.desiredSize;
      this.desiredSize -= d, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: i,
        targetName: s,
        stream: Vt.ENQUEUE,
        streamId: e,
        chunk: h
      }, u);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: i,
        targetName: s,
        stream: Vt.CLOSE,
        streamId: e
      }), delete a.streamSinks[e]);
    },
    error(h) {
      nt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: i,
        targetName: s,
        stream: Vt.ERROR,
        streamId: e,
        reason: Ue(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(function() {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: Vt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(h) {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: Vt.START_COMPLETE,
      streamId: e,
      reason: Ue(h)
    });
  });
}, Vm = function(t) {
  const e = t.streamId, i = this.sourceName, s = t.sourceName, r = this.comObj, a = this.streamControllers[e], o = this.streamSinks[e];
  switch (t.stream) {
    case Vt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Ue(t.reason));
      break;
    case Vt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Ue(t.reason));
      break;
    case Vt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || yg).then(function() {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          reason: Ue(h)
        });
      });
      break;
    case Vt.ENQUEUE:
      if (nt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case Vt.CLOSE:
      if (nt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), w(this, Oi, Hd).call(this, a, e);
      break;
    case Vt.ERROR:
      nt(a, "error should have stream controller"), a.controller.error(Ue(t.reason)), w(this, Oi, Hd).call(this, a, e);
      break;
    case Vt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Ue(t.reason)), w(this, Oi, Hd).call(this, a, e);
      break;
    case Vt.CANCEL:
      if (!o)
        break;
      const l = Ue(t.reason);
      Promise.try(o.onCancel || yg, l).then(function() {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(h) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.CANCEL_COMPLETE,
          streamId: e,
          reason: Ue(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Hd = async function(t, e) {
  var i, s, r;
  await Promise.allSettled([(i = t.startCall) == null ? void 0 : i.promise, (s = t.pullCall) == null ? void 0 : s.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
var ac;
class qm {
  constructor({
    enableHWA: t = !1
  }) {
    b(this, ac, !1);
    g(this, ac, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext("2d", {
        willReadFrequently: !n(this, ac)
      })
    };
  }
  reset(t, e, i) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || i <= 0)
      throw new Error("Invalid canvas size");
    t.canvas.width = e, t.canvas.height = i;
  }
  destroy(t) {
    if (!t.canvas)
      throw new Error("Canvas is not specified");
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    Et("Abstract method `_createCanvas` called.");
  }
}
ac = new WeakMap();
class ww extends qm {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const i = this._document.createElement("canvas");
    return i.width = t, i.height = e, i;
  }
}
class Xm {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }
  async fetch({
    name: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
    if (!t)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e).then((i) => ({
      cMapData: i,
      isCompressed: this.isCompressed
    })).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  async _fetch(t) {
    Et("Abstract method `_fetch` called.");
  }
}
class wg extends Xm {
  async _fetch(t) {
    const e = await Xl(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : fd(e);
  }
}
class Ym {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, i, s, r) {
    return "none";
  }
  destroy(t = !1) {
  }
}
var ia, Uo, tn, en, Ce, sa, na, $, xe, lh, no, $d, ro, Km, Of, ao, hh, ch, Bf, dh;
class Aw extends Ym {
  constructor({
    docId: e,
    ownerDocument: i = globalThis.document
  }) {
    super();
    b(this, $);
    b(this, ia);
    b(this, Uo);
    b(this, tn);
    b(this, en);
    b(this, Ce);
    b(this, sa);
    b(this, na, 0);
    g(this, en, e), g(this, Ce, i);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let i = n(this, $, xe).get(e);
    if (i)
      return i;
    const [s, r, a] = w(this, $, $d).call(this, e), o = e.length === 1 ? s : `${s}${r}${a}`;
    if (i = n(this, $, xe).get(o), i)
      return n(this, $, xe).set(e, i), i;
    const l = `g_${n(this, en)}_transfer_map_${Kt(this, na)._++}`, h = w(this, $, ro).call(this, l);
    n(this, $, xe).set(e, h), n(this, $, xe).set(o, h);
    const d = w(this, $, ao).call(this, l);
    return w(this, $, ch).call(this, s, r, a, d), h;
  }
  addHCMFilter(e, i) {
    var S;
    const s = `${e}-${i}`, r = "base";
    let a = n(this, $, lh).get(r);
    if ((a == null ? void 0 : a.key) === s || (a ? ((S = a.filter) == null || S.remove(), a.key = s, a.url = "none", a.filter = null) : (a = {
      key: s,
      url: "none",
      filter: null
    }, n(this, $, lh).set(r, a)), !e || !i))
      return a.url;
    const o = w(this, $, dh).call(this, e);
    e = z.makeHexColor(...o);
    const l = w(this, $, dh).call(this, i);
    if (i = z.makeHexColor(...l), n(this, $, no).style.color = "", e === "#000000" && i === "#ffffff" || e === i)
      return a.url;
    const h = new Array(256);
    for (let v = 0; v <= 255; v++) {
      const E = v / 255;
      h[v] = E <= 0.03928 ? E / 12.92 : ((E + 0.055) / 1.055) ** 2.4;
    }
    const d = h.join(","), u = `g_${n(this, en)}_hcm_filter`, p = a.filter = w(this, $, ao).call(this, u);
    w(this, $, ch).call(this, d, d, d, p), w(this, $, Of).call(this, p);
    const y = (v, E) => {
      const x = o[v] / 255, T = l[v] / 255, _ = new Array(E + 1);
      for (let f = 0; f <= E; f++)
        _[f] = x + f / E * (T - x);
      return _.join(",");
    };
    return w(this, $, ch).call(this, y(0, 5), y(1, 5), y(2, 5), p), a.url = w(this, $, ro).call(this, u), a.url;
  }
  addAlphaFilter(e) {
    let i = n(this, $, xe).get(e);
    if (i)
      return i;
    const [s] = w(this, $, $d).call(this, [e]), r = `alpha_${s}`;
    if (i = n(this, $, xe).get(r), i)
      return n(this, $, xe).set(e, i), i;
    const a = `g_${n(this, en)}_alpha_map_${Kt(this, na)._++}`, o = w(this, $, ro).call(this, a);
    n(this, $, xe).set(e, o), n(this, $, xe).set(r, o);
    const l = w(this, $, ao).call(this, a);
    return w(this, $, Bf).call(this, s, l), o;
  }
  addLuminosityFilter(e) {
    let i = n(this, $, xe).get(e || "luminosity");
    if (i)
      return i;
    let s, r;
    if (e ? ([s] = w(this, $, $d).call(this, [e]), r = `luminosity_${s}`) : r = "luminosity", i = n(this, $, xe).get(r), i)
      return n(this, $, xe).set(e, i), i;
    const a = `g_${n(this, en)}_luminosity_map_${Kt(this, na)._++}`, o = w(this, $, ro).call(this, a);
    n(this, $, xe).set(e, o), n(this, $, xe).set(r, o);
    const l = w(this, $, ao).call(this, a);
    return w(this, $, Km).call(this, l), e && w(this, $, Bf).call(this, s, l), o;
  }
  addHighlightHCMFilter(e, i, s, r, a) {
    var T;
    const o = `${i}-${s}-${r}-${a}`;
    let l = n(this, $, lh).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((T = l.filter) == null || T.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, $, lh).set(e, l)), !i || !s))
      return l.url;
    const [h, d] = [i, s].map(w(this, $, dh).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), p = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]), [y, S] = [r, a].map(w(this, $, dh).bind(this));
    p < u && ([u, p, y, S] = [p, u, S, y]), n(this, $, no).style.color = "";
    const v = (_, f, m) => {
      const A = new Array(256), C = (p - u) / m, P = _ / 255, R = (f - _) / (255 * m);
      let M = 0;
      for (let k = 0; k <= m; k++) {
        const L = Math.round(u + k * C), N = P + k * R;
        for (let I = M; I <= L; I++)
          A[I] = N;
        M = L + 1;
      }
      for (let k = M; k < 256; k++)
        A[k] = A[M - 1];
      return A.join(",");
    }, E = `g_${n(this, en)}_hcm_${e}_filter`, x = l.filter = w(this, $, ao).call(this, E);
    return w(this, $, Of).call(this, x), w(this, $, ch).call(this, v(y[0], S[0], 5), v(y[1], S[1], 5), v(y[2], S[2], 5), x), l.url = w(this, $, ro).call(this, E), l.url;
  }
  destroy(e = !1) {
    var i, s, r, a;
    e && ((i = n(this, sa)) != null && i.size) || ((s = n(this, tn)) == null || s.parentNode.parentNode.remove(), g(this, tn, null), (r = n(this, Uo)) == null || r.clear(), g(this, Uo, null), (a = n(this, sa)) == null || a.clear(), g(this, sa, null), g(this, na, 0));
  }
}
ia = new WeakMap(), Uo = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), Ce = new WeakMap(), sa = new WeakMap(), na = new WeakMap(), $ = new WeakSet(), xe = function() {
  return n(this, Uo) || g(this, Uo, /* @__PURE__ */ new Map());
}, lh = function() {
  return n(this, sa) || g(this, sa, /* @__PURE__ */ new Map());
}, no = function() {
  if (!n(this, tn)) {
    const e = n(this, Ce).createElement("div"), {
      style: i
    } = e;
    i.visibility = "hidden", i.contain = "strict", i.width = i.height = 0, i.position = "absolute", i.top = i.left = 0, i.zIndex = -1;
    const s = n(this, Ce).createElementNS(Os, "svg");
    s.setAttribute("width", 0), s.setAttribute("height", 0), g(this, tn, n(this, Ce).createElementNS(Os, "defs")), e.append(s), s.append(n(this, tn)), n(this, Ce).body.append(e);
  }
  return n(this, tn);
}, $d = function(e) {
  if (e.length === 1) {
    const h = e[0], d = new Array(256);
    for (let p = 0; p < 256; p++)
      d[p] = h[p] / 255;
    const u = d.join(",");
    return [u, u, u];
  }
  const [i, s, r] = e, a = new Array(256), o = new Array(256), l = new Array(256);
  for (let h = 0; h < 256; h++)
    a[h] = i[h] / 255, o[h] = s[h] / 255, l[h] = r[h] / 255;
  return [a.join(","), o.join(","), l.join(",")];
}, ro = function(e) {
  if (n(this, ia) === void 0) {
    g(this, ia, "");
    const i = n(this, Ce).URL;
    i !== n(this, Ce).baseURI && (gd(i) ? X('#createUrl: ignore "data:"-URL for performance reasons.') : g(this, ia, zp(i, "")));
  }
  return `url(${n(this, ia)}#${e})`;
}, Km = function(e) {
  const i = n(this, Ce).createElementNS(Os, "feColorMatrix");
  i.setAttribute("type", "matrix"), i.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(i);
}, Of = function(e) {
  const i = n(this, Ce).createElementNS(Os, "feColorMatrix");
  i.setAttribute("type", "matrix"), i.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(i);
}, ao = function(e) {
  const i = n(this, Ce).createElementNS(Os, "filter");
  return i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("id", e), n(this, $, no).append(i), i;
}, hh = function(e, i, s) {
  const r = n(this, Ce).createElementNS(Os, i);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", s), e.append(r);
}, ch = function(e, i, s, r) {
  const a = n(this, Ce).createElementNS(Os, "feComponentTransfer");
  r.append(a), w(this, $, hh).call(this, a, "feFuncR", e), w(this, $, hh).call(this, a, "feFuncG", i), w(this, $, hh).call(this, a, "feFuncB", s);
}, Bf = function(e, i) {
  const s = n(this, Ce).createElementNS(Os, "feComponentTransfer");
  i.append(s), w(this, $, hh).call(this, s, "feFuncA", e);
}, dh = function(e) {
  return n(this, $, no).style.color = e, Yl(getComputedStyle(n(this, $, no)).getPropertyValue("color"));
};
class Jm {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
    if (!t)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    Et("Abstract method `_fetch` called.");
  }
}
class Ag extends Jm {
  async _fetch(t) {
    const e = await Xl(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
class Qm {
  constructor({
    baseUrl: t = null
  }) {
    this.baseUrl = t;
  }
  async fetch({
    filename: t
  }) {
    if (!this.baseUrl)
      throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
    if (!t)
      throw new Error("Wasm filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }
  async _fetch(t) {
    Et("Abstract method `_fetch` called.");
  }
}
class vg extends Qm {
  async _fetch(t) {
    const e = await Xl(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
Be && X("Please use the `legacy` build in Node.js environments.");
async function Xp(c) {
  const e = await process.getBuiltinModule("fs").promises.readFile(c);
  return new Uint8Array(e);
}
class vw extends Ym {
}
class Sw extends qm {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class xw extends Xm {
  async _fetch(t) {
    return Xp(t);
  }
}
class Ew extends Jm {
  async _fetch(t) {
    return Xp(t);
  }
}
class _w extends Qm {
  async _fetch(t) {
    return Xp(t);
  }
}
const to = "__forcedDependency", {
  floor: Sg,
  ceil: xg
} = Math;
function Td(c, t, e, i, s, r) {
  c[t * 4 + 0] = Math.min(c[t * 4 + 0], e), c[t * 4 + 1] = Math.min(c[t * 4 + 1], i), c[t * 4 + 2] = Math.max(c[t * 4 + 2], s), c[t * 4 + 3] = Math.max(c[t * 4 + 3], r);
}
const Hf = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
var zo, Kn;
class Cw {
  constructor(t, e) {
    b(this, zo);
    b(this, Kn);
    g(this, zo, t), g(this, Kn, e);
  }
  get length() {
    return n(this, zo).length;
  }
  isEmpty(t) {
    return n(this, zo)[t] === Hf;
  }
  minX(t) {
    return n(this, Kn)[t * 4 + 0] / 256;
  }
  minY(t) {
    return n(this, Kn)[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (n(this, Kn)[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (n(this, Kn)[t * 4 + 3] + 1) / 256;
  }
}
zo = new WeakMap(), Kn = new WeakMap();
const Pd = (c, t) => {
  if (!c)
    return;
  let e = c.get(t);
  return e || (e = {
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: !1
  }, c.set(t, e)), e;
};
var We, je, ra, ji, aa, sn, ut, pt, nn, Ve, oc, Go, oa, la, rn, Te, ws, lc, $f;
class Tw {
  constructor(t, e, i = !1) {
    b(this, lc);
    b(this, We, {
      __proto__: null
    });
    b(this, je, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [to]: []
    });
    b(this, ra, /* @__PURE__ */ new Map());
    b(this, ji, []);
    b(this, aa, []);
    b(this, sn, [[1, 0, 0, 1, 0, 0]]);
    b(this, ut, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    b(this, pt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    b(this, nn, -1);
    b(this, Ve, /* @__PURE__ */ new Set());
    b(this, oc, /* @__PURE__ */ new Map());
    b(this, Go, /* @__PURE__ */ new Map());
    b(this, oa);
    b(this, la);
    b(this, rn);
    b(this, Te);
    b(this, ws);
    g(this, oa, t.width), g(this, la, t.height), w(this, lc, $f).call(this, e), i && g(this, ws, /* @__PURE__ */ new Map());
  }
  growOperationsCount(t) {
    t >= n(this, Te).length && w(this, lc, $f).call(this, t, n(this, Te));
  }
  save(t) {
    return g(this, We, {
      __proto__: n(this, We)
    }), g(this, je, {
      __proto__: n(this, je),
      transform: {
        __proto__: n(this, je).transform
      },
      moveText: {
        __proto__: n(this, je).moveText
      },
      sameLineText: {
        __proto__: n(this, je).sameLineText
      },
      [to]: {
        __proto__: n(this, je)[to]
      }
    }), g(this, ut, {
      __proto__: n(this, ut)
    }), n(this, ji).push(t), this;
  }
  restore(t) {
    var s;
    const e = Object.getPrototypeOf(n(this, We));
    if (e === null)
      return this;
    g(this, We, e), g(this, je, Object.getPrototypeOf(n(this, je))), g(this, ut, Object.getPrototypeOf(n(this, ut)));
    const i = n(this, ji).pop();
    return i !== void 0 && ((s = Pd(n(this, ws), t)) == null || s.dependencies.add(i), n(this, Te)[t] = n(this, Te)[i]), this;
  }
  recordOpenMarker(t) {
    return n(this, ji).push(t), this;
  }
  getOpenMarker() {
    return n(this, ji).length === 0 ? null : n(this, ji).at(-1);
  }
  recordCloseMarker(t) {
    var i;
    const e = n(this, ji).pop();
    return e !== void 0 && ((i = Pd(n(this, ws), t)) == null || i.dependencies.add(e), n(this, Te)[t] = n(this, Te)[e]), this;
  }
  beginMarkedContent(t) {
    return n(this, aa).push(t), this;
  }
  endMarkedContent(t) {
    var i;
    const e = n(this, aa).pop();
    return e !== void 0 && ((i = Pd(n(this, ws), t)) == null || i.dependencies.add(e), n(this, Te)[t] = n(this, Te)[e]), this;
  }
  pushBaseTransform(t) {
    return n(this, sn).push(z.multiplyByDOMMatrix(n(this, sn).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return n(this, sn).length > 1 && n(this, sn).pop(), this;
  }
  recordSimpleData(t, e) {
    return n(this, We)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return n(this, je)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return n(this, je)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return n(this, ra).set(t, e), this;
  }
  recordSimpleDataFromNamed(t, e, i) {
    n(this, We)[t] = n(this, ra).get(e) ?? i;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(to, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t)
      e in n(this, We) && this.recordFutureForcedDependency(e, n(this, We)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, Ve))
      this.recordFutureForcedDependency(to, t);
    return this;
  }
  resetBBox(t) {
    return n(this, nn) !== t && (g(this, nn, t), n(this, pt)[0] = 1 / 0, n(this, pt)[1] = 1 / 0, n(this, pt)[2] = -1 / 0, n(this, pt)[3] = -1 / 0), this;
  }
  recordClipBox(t, e, i, s, r, a) {
    const o = z.multiplyByDOMMatrix(n(this, sn).at(-1), e.getTransform()), l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    z.axialAlignedBoundingBox([i, r, s, a], o, l);
    const h = z.intersect(n(this, ut), l);
    return h ? (n(this, ut)[0] = h[0], n(this, ut)[1] = h[1], n(this, ut)[2] = h[2], n(this, ut)[3] = h[3]) : (n(this, ut)[0] = n(this, ut)[1] = 1 / 0, n(this, ut)[2] = n(this, ut)[3] = -1 / 0), this;
  }
  recordBBox(t, e, i, s, r, a) {
    const o = n(this, ut);
    if (o[0] === 1 / 0)
      return this;
    const l = z.multiplyByDOMMatrix(n(this, sn).at(-1), e.getTransform());
    if (o[0] === -1 / 0)
      return z.axialAlignedBoundingBox([i, r, s, a], l, n(this, pt)), this;
    const h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return z.axialAlignedBoundingBox([i, r, s, a], l, h), n(this, pt)[0] = Math.min(n(this, pt)[0], Math.max(h[0], o[0])), n(this, pt)[1] = Math.min(n(this, pt)[1], Math.max(h[1], o[1])), n(this, pt)[2] = Math.max(n(this, pt)[2], Math.min(h[2], o[2])), n(this, pt)[3] = Math.max(n(this, pt)[3], Math.min(h[3], o[3])), this;
  }
  recordCharacterBBox(t, e, i, s = 1, r = 0, a = 0, o) {
    const l = i.bbox;
    let h, d;
    if (l && (h = l[2] !== l[0] && l[3] !== l[1] && n(this, Go).get(i), h !== !1 && (d = [0, 0, 0, 0], z.axialAlignedBoundingBox(l, i.fontMatrix, d), (s !== 1 || r !== 0 || a !== 0) && z.scaleMinMax([s, 0, 0, -s, r, a], d), h)))
      return this.recordBBox(t, e, d[0], d[2], d[1], d[3]);
    if (!o)
      return this.recordFullPageBBox(t);
    const u = o();
    return l && d && h === void 0 && (h = d[0] <= r - u.actualBoundingBoxLeft && d[2] >= r + u.actualBoundingBoxRight && d[1] <= a - u.actualBoundingBoxAscent && d[3] >= a + u.actualBoundingBoxDescent, n(this, Go).set(i, h), h) ? this.recordBBox(t, e, d[0], d[2], d[1], d[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return n(this, pt)[0] = Math.max(0, n(this, ut)[0]), n(this, pt)[1] = Math.max(0, n(this, ut)[1]), n(this, pt)[2] = Math.min(n(this, oa), n(this, ut)[2]), n(this, pt)[3] = Math.min(n(this, la), n(this, ut)[3]), this;
  }
  getSimpleIndex(t) {
    return n(this, We)[t];
  }
  recordDependencies(t, e) {
    const i = n(this, Ve), s = n(this, We), r = n(this, je);
    for (const a of e)
      a in n(this, We) ? i.add(s[a]) : a in r && r[a].forEach(i.add, i);
    return this;
  }
  recordNamedDependency(t, e) {
    return n(this, ra).has(e) && n(this, Ve).add(n(this, ra).get(e)), this;
  }
  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [to]), n(this, ws)) {
      const i = Pd(n(this, ws), t), {
        dependencies: s
      } = i;
      n(this, Ve).forEach(s.add, s), n(this, ji).forEach(s.add, s), n(this, aa).forEach(s.add, s), s.delete(t), i.isRenderingOperation = !0;
    }
    if (n(this, nn) === t) {
      const i = Sg(n(this, pt)[0] * 256 / n(this, oa)), s = Sg(n(this, pt)[1] * 256 / n(this, la)), r = xg(n(this, pt)[2] * 256 / n(this, oa)), a = xg(n(this, pt)[3] * 256 / n(this, la));
      Td(n(this, rn), t, i, s, r, a);
      for (const o of n(this, Ve))
        o !== t && Td(n(this, rn), o, i, s, r, a);
      for (const o of n(this, ji))
        o !== t && Td(n(this, rn), o, i, s, r, a);
      for (const o of n(this, aa))
        o !== t && Td(n(this, rn), o, i, s, r, a);
      e || (n(this, Ve).clear(), g(this, nn, -1));
    }
    return this;
  }
  recordShowTextOperation(t, e = !1) {
    const i = Array.from(n(this, Ve));
    this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
    for (const s of i)
      this.recordIncrementalData("sameLineText", s);
    return this;
  }
  bboxToClipBoxDropOperation(t, e = !1) {
    return n(this, nn) === t && (g(this, nn, -1), n(this, ut)[0] = Math.max(n(this, ut)[0], n(this, pt)[0]), n(this, ut)[1] = Math.max(n(this, ut)[1], n(this, pt)[1]), n(this, ut)[2] = Math.min(n(this, ut)[2], n(this, pt)[2]), n(this, ut)[3] = Math.min(n(this, ut)[3], n(this, pt)[3]), e || n(this, Ve).clear()), this;
  }
  _takePendingDependencies() {
    const t = n(this, Ve);
    return g(this, Ve, /* @__PURE__ */ new Set()), t;
  }
  _extractOperation(t) {
    const e = n(this, oc).get(t);
    return n(this, oc).delete(t), e;
  }
  _pushPendingDependencies(t) {
    for (const e of t)
      n(this, Ve).add(e);
  }
  take() {
    return n(this, Go).clear(), new Cw(n(this, Te), n(this, rn));
  }
  takeDebugMetadata() {
    return n(this, ws);
  }
}
We = new WeakMap(), je = new WeakMap(), ra = new WeakMap(), ji = new WeakMap(), aa = new WeakMap(), sn = new WeakMap(), ut = new WeakMap(), pt = new WeakMap(), nn = new WeakMap(), Ve = new WeakMap(), oc = new WeakMap(), Go = new WeakMap(), oa = new WeakMap(), la = new WeakMap(), rn = new WeakMap(), Te = new WeakMap(), ws = new WeakMap(), lc = new WeakSet(), $f = function(t, e) {
  const i = new ArrayBuffer(t * 4);
  g(this, rn, new Uint8ClampedArray(i)), g(this, Te, new Uint32Array(i)), e && e.length > 0 ? (n(this, Te).set(e), n(this, Te).fill(Hf, e.length)) : n(this, Te).fill(Hf);
};
var At, Ht, Vi, Wo, jo;
const ag = class ag {
  constructor(t, e, i) {
    b(this, At);
    b(this, Ht);
    b(this, Vi);
    b(this, Wo, 0);
    b(this, jo, 0);
    if (t instanceof ag && n(t, Vi) === !!i)
      return t;
    g(this, At, t), g(this, Ht, e), g(this, Vi, !!i);
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return Kt(this, jo)._++, n(this, At).save(n(this, Ht)), this;
  }
  restore(t) {
    return n(this, jo) > 0 && (n(this, At).restore(n(this, Ht)), Kt(this, jo)._--), this;
  }
  recordOpenMarker(t) {
    return Kt(this, Wo)._++, this;
  }
  getOpenMarker() {
    return n(this, Wo) > 0 ? n(this, Ht) : n(this, At).getOpenMarker();
  }
  recordCloseMarker(t) {
    return Kt(this, Wo)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return n(this, At).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return n(this, At).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return n(this, At).recordSimpleData(t, n(this, Ht)), this;
  }
  recordIncrementalData(t, e) {
    return n(this, At).recordIncrementalData(t, n(this, Ht)), this;
  }
  resetIncrementalData(t, e) {
    return n(this, At).resetIncrementalData(t, n(this, Ht)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, i) {
    return n(this, At).recordSimpleDataFromNamed(t, e, n(this, Ht)), this;
  }
  recordFutureForcedDependency(t, e) {
    return n(this, At).recordFutureForcedDependency(t, n(this, Ht)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, At).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, At).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return n(this, Vi) || n(this, At).resetBBox(n(this, Ht)), this;
  }
  recordClipBox(t, e, i, s, r, a) {
    return n(this, Vi) || n(this, At).recordClipBox(n(this, Ht), e, i, s, r, a), this;
  }
  recordBBox(t, e, i, s, r, a) {
    return n(this, Vi) || n(this, At).recordBBox(n(this, Ht), e, i, s, r, a), this;
  }
  recordCharacterBBox(t, e, i, s, r, a, o) {
    return n(this, Vi) || n(this, At).recordCharacterBBox(n(this, Ht), e, i, s, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return n(this, Vi) || n(this, At).recordFullPageBBox(n(this, Ht)), this;
  }
  getSimpleIndex(t) {
    return n(this, At).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return n(this, At).recordDependencies(n(this, Ht), e), this;
  }
  recordNamedDependency(t, e) {
    return n(this, At).recordNamedDependency(n(this, Ht), e), this;
  }
  recordOperation(t) {
    return n(this, At).recordOperation(n(this, Ht), !0), this;
  }
  recordShowTextOperation(t) {
    return n(this, At).recordShowTextOperation(n(this, Ht), !0), this;
  }
  bboxToClipBoxDropOperation(t) {
    return n(this, Vi) || n(this, At).bboxToClipBoxDropOperation(n(this, Ht), !0), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
};
At = new WeakMap(), Ht = new WeakMap(), Vi = new WeakMap(), Wo = new WeakMap(), jo = new WeakMap();
let pu = ag;
const Ei = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "fillColor"]
}, ye = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Uf(c, t) {
  if (!t)
    return;
  const e = t[2] - t[0], i = t[3] - t[1], s = new Path2D();
  s.rect(t[0], t[1], e, i), c.clip(s);
}
class Yp {
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    Et("Abstract method `getPattern` called.");
  }
}
class Pw extends Yp {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }
  _createGradient(t) {
    let e;
    this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const i of this._colorStops)
      e.addColorStop(i[0], i[1]);
    return e;
  }
  getPattern(t, e, i, s) {
    let r;
    if (s === ye.STROKE || s === ye.FILL) {
      const a = e.current.getClippedPathBoundingBox(s, Ft(t)) || [0, 0, 0, 0], o = Math.ceil(a[2] - a[0]) || 1, l = Math.ceil(a[3] - a[1]) || 1, h = e.cachedCanvases.getCanvas("pattern", o, l), d = h.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-a[0], -a[1]), i = z.transform(i, [1, 0, 0, 1, a[0], a[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), Uf(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), r = t.createPattern(h.canvas, "no-repeat");
      const u = new DOMMatrix(i);
      r.setTransform(u);
    } else
      Uf(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function af(c, t, e, i, s, r, a, o) {
  const l = t.coords, h = t.colors, d = c.data, u = c.width * 4;
  let p;
  l[e + 1] > l[i + 1] && (p = e, e = i, i = p, p = r, r = a, a = p), l[i + 1] > l[s + 1] && (p = i, i = s, s = p, p = a, a = o, o = p), l[e + 1] > l[i + 1] && (p = e, e = i, i = p, p = r, r = a, a = p);
  const y = (l[e] + t.offsetX) * t.scaleX, S = (l[e + 1] + t.offsetY) * t.scaleY, v = (l[i] + t.offsetX) * t.scaleX, E = (l[i + 1] + t.offsetY) * t.scaleY, x = (l[s] + t.offsetX) * t.scaleX, T = (l[s + 1] + t.offsetY) * t.scaleY;
  if (S >= T)
    return;
  const _ = h[r], f = h[r + 1], m = h[r + 2], A = h[a], C = h[a + 1], P = h[a + 2], R = h[o], M = h[o + 1], k = h[o + 2], L = Math.round(S), N = Math.round(T);
  let I, j, H, B, tt, st, ee, Je;
  for (let rt = L; rt <= N; rt++) {
    if (rt < E) {
      const yt = rt < S ? 0 : (S - rt) / (S - E);
      I = y - (y - v) * yt, j = _ - (_ - A) * yt, H = f - (f - C) * yt, B = m - (m - P) * yt;
    } else {
      let yt;
      rt > T ? yt = 1 : E === T ? yt = 0 : yt = (E - rt) / (E - T), I = v - (v - x) * yt, j = A - (A - R) * yt, H = C - (C - M) * yt, B = P - (P - k) * yt;
    }
    let lt;
    rt < S ? lt = 0 : rt > T ? lt = 1 : lt = (S - rt) / (S - T), tt = y - (y - x) * lt, st = _ - (_ - R) * lt, ee = f - (f - M) * lt, Je = m - (m - k) * lt;
    const ie = Math.round(Math.min(I, tt)), de = Math.round(Math.max(I, tt));
    let ve = u * rt + ie * 4;
    for (let yt = ie; yt <= de; yt++)
      lt = (I - yt) / (I - tt), lt < 0 ? lt = 0 : lt > 1 && (lt = 1), d[ve++] = j - (j - st) * lt | 0, d[ve++] = H - (H - ee) * lt | 0, d[ve++] = B - (B - Je) * lt | 0, d[ve++] = 255;
  }
}
function Rw(c, t, e) {
  const i = t.coords, s = t.colors;
  let r, a;
  switch (t.type) {
    case "lattice":
      const o = t.verticesPerRow, l = Math.floor(i.length / o) - 1, h = o - 1;
      for (r = 0; r < l; r++) {
        let d = r * o;
        for (let u = 0; u < h; u++, d++)
          af(c, e, i[d], i[d + 1], i[d + o], s[d], s[d + 1], s[d + o]), af(c, e, i[d + o + 1], i[d + 1], i[d + o], s[d + o + 1], s[d + 1], s[d + o]);
      }
      break;
    case "triangles":
      for (r = 0, a = i.length; r < a; r += 3)
        af(c, e, i[r], i[r + 1], i[r + 2], s[r], s[r + 1], s[r + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Mw extends Yp {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }
  _createMeshCanvas(t, e, i) {
    const o = Math.floor(this._bounds[0]), l = Math.floor(this._bounds[1]), h = Math.ceil(this._bounds[2]) - o, d = Math.ceil(this._bounds[3]) - l, u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3), p = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3), y = h / u, S = d / p, v = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / y,
      scaleY: 1 / S
    }, E = u + 4, x = p + 4, T = i.getCanvas("mesh", E, x), _ = T.context, f = _.createImageData(u, p);
    if (e) {
      const A = f.data;
      for (let C = 0, P = A.length; C < P; C += 4)
        A[C] = e[0], A[C + 1] = e[1], A[C + 2] = e[2], A[C + 3] = 255;
    }
    for (const A of this._figures)
      Rw(f, A, v);
    return _.putImageData(f, 2, 2), {
      canvas: T.canvas,
      offsetX: o - 2 * y,
      offsetY: l - 2 * S,
      scaleX: y,
      scaleY: S
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, i, s) {
    Uf(t, this._bbox);
    const r = new Float32Array(2);
    if (s === ye.SHADING)
      z.singularValueDecompose2dScale(Ft(t), r);
    else if (this.matrix) {
      z.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      z.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else
      z.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, s === ye.SHADING ? null : this._background, e.cachedCanvases);
    return s !== ye.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, "no-repeat");
  }
}
class kw extends Yp {
  getPattern() {
    return "hotpink";
  }
}
function Dw(c) {
  switch (c[0]) {
    case "RadialAxial":
      return new Pw(c);
    case "Mesh":
      return new Mw(c);
    case "Dummy":
      return new kw();
  }
  throw new Error(`Unknown IR type: ${c[0]}`);
}
const Eg = {
  COLORED: 1,
  UNCOLORED: 2
}, ku = class ku {
  constructor(t, e, i, s) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s;
  }
  createPatternCanvas(t, e) {
    var st, ee;
    const {
      bbox: i,
      operatorList: s,
      paintType: r,
      tilingType: a,
      color: o,
      canvasGraphicsFactory: l
    } = this;
    let {
      xstep: h,
      ystep: d
    } = this;
    h = Math.abs(h), d = Math.abs(d), Wu("TilingType: " + a);
    const u = i[0], p = i[1], y = i[2], S = i[3], v = y - u, E = S - p, x = new Float32Array(2);
    z.singularValueDecompose2dScale(this.matrix, x);
    const [T, _] = x;
    z.singularValueDecompose2dScale(this.baseTransform, x);
    const f = T * x[0], m = _ * x[1];
    let A = v, C = E, P = !1, R = !1;
    const M = Math.ceil(h * f), k = Math.ceil(d * m), L = Math.ceil(v * f), N = Math.ceil(E * m);
    M >= L ? A = h : P = !0, k >= N ? C = d : R = !0;
    const I = this.getSizeAndScale(A, this.ctx.canvas.width, f), j = this.getSizeAndScale(C, this.ctx.canvas.height, m), H = t.cachedCanvases.getCanvas("pattern", I.size, j.size), B = H.context, tt = l.createCanvasGraphics(B, e);
    if (tt.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(tt, r, o), B.translate(-I.scale * u, -j.scale * p), tt.transform(0, I.scale, 0, 0, j.scale, 0, 0), B.save(), (st = tt.dependencyTracker) == null || st.save(), this.clipBbox(tt, u, p, y, S), tt.baseTransform = Ft(tt.ctx), tt.executeOperatorList(s), tt.endDrawing(), (ee = tt.dependencyTracker) == null || ee.restore(), B.restore(), P || R) {
      const Je = H.canvas;
      P && (A = h), R && (C = d);
      const rt = this.getSizeAndScale(A, this.ctx.canvas.width, f), lt = this.getSizeAndScale(C, this.ctx.canvas.height, m), ie = rt.size, de = lt.size, ve = t.cachedCanvases.getCanvas("pattern-workaround", ie, de), yt = ve.context, Bi = P ? Math.floor(v / h) : 0, rs = R ? Math.floor(E / d) : 0;
      for (let Ns = 0; Ns <= Bi; Ns++)
        for (let De = 0; De <= rs; De++)
          yt.drawImage(Je, ie * Ns, de * De, ie, de, 0, 0, ie, de);
      return {
        canvas: ve.canvas,
        scaleX: rt.scale,
        scaleY: lt.scale,
        offsetX: u,
        offsetY: p
      };
    }
    return {
      canvas: H.canvas,
      scaleX: I.scale,
      scaleY: j.scale,
      offsetX: u,
      offsetY: p
    };
  }
  getSizeAndScale(t, e, i) {
    const s = Math.max(ku.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * i);
    return r >= s ? r = s : i = r / t, {
      scale: i,
      size: r
    };
  }
  clipBbox(t, e, i, s, r) {
    const a = s - e, o = r - i;
    t.ctx.rect(e, i, a, o), z.axialAlignedBoundingBox([e, i, s, r], Ft(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }
  setFillAndStrokeStyleToContext(t, e, i) {
    const s = t.ctx, r = t.current;
    switch (e) {
      case Eg.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o
        } = this.ctx;
        s.fillStyle = r.fillColor = a, s.strokeStyle = r.strokeColor = o;
        break;
      case Eg.UNCOLORED:
        s.fillStyle = s.strokeStyle = i, r.fillColor = r.strokeColor = i;
        break;
      default:
        throw new Zy(`Unsupported paint type: ${e}`);
    }
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, i, s, r) {
    let a = i;
    s !== ye.SHADING && (a = z.transform(a, e.baseTransform), this.matrix && (a = z.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const h = t.createPattern(o.canvas, "repeat");
    return h.setTransform(l), h;
  }
};
D(ku, "MAX_PATTERN_SIZE", 3e3);
let zf = ku;
function Lw({
  src: c,
  srcPos: t = 0,
  dest: e,
  width: i,
  height: s,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = ce.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], d = i >> 3, u = i & 7, p = c.length;
  e = new Uint32Array(e.buffer);
  let y = 0;
  for (let S = 0; S < s; S++) {
    for (const E = t + d; t < E; t++) {
      const x = t < p ? c[t] : 255;
      e[y++] = x & 128 ? h : l, e[y++] = x & 64 ? h : l, e[y++] = x & 32 ? h : l, e[y++] = x & 16 ? h : l, e[y++] = x & 8 ? h : l, e[y++] = x & 4 ? h : l, e[y++] = x & 2 ? h : l, e[y++] = x & 1 ? h : l;
    }
    if (u === 0)
      continue;
    const v = t < p ? c[t++] : 255;
    for (let E = 0; E < u; E++)
      e[y++] = v & 1 << 7 - E ? h : l;
  }
  return {
    srcPos: t,
    destPos: y
  };
}
const _g = 16, Cg = 100, Iw = 15, Tg = 10, Ke = 16, of = new DOMMatrix(), yi = new Float32Array(2), co = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function Fw(c, t) {
  if (c._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  c.__originalSave = c.save, c.__originalRestore = c.restore, c.__originalRotate = c.rotate, c.__originalScale = c.scale, c.__originalTranslate = c.translate, c.__originalTransform = c.transform, c.__originalSetTransform = c.setTransform, c.__originalResetTransform = c.resetTransform, c.__originalClip = c.clip, c.__originalMoveTo = c.moveTo, c.__originalLineTo = c.lineTo, c.__originalBezierCurveTo = c.bezierCurveTo, c.__originalRect = c.rect, c.__originalClosePath = c.closePath, c.__originalBeginPath = c.beginPath, c._removeMirroring = () => {
    c.save = c.__originalSave, c.restore = c.__originalRestore, c.rotate = c.__originalRotate, c.scale = c.__originalScale, c.translate = c.__originalTranslate, c.transform = c.__originalTransform, c.setTransform = c.__originalSetTransform, c.resetTransform = c.__originalResetTransform, c.clip = c.__originalClip, c.moveTo = c.__originalMoveTo, c.lineTo = c.__originalLineTo, c.bezierCurveTo = c.__originalBezierCurveTo, c.rect = c.__originalRect, c.closePath = c.__originalClosePath, c.beginPath = c.__originalBeginPath, delete c._removeMirroring;
  }, c.save = function() {
    t.save(), this.__originalSave();
  }, c.restore = function() {
    t.restore(), this.__originalRestore();
  }, c.translate = function(e, i) {
    t.translate(e, i), this.__originalTranslate(e, i);
  }, c.scale = function(e, i) {
    t.scale(e, i), this.__originalScale(e, i);
  }, c.transform = function(e, i, s, r, a, o) {
    t.transform(e, i, s, r, a, o), this.__originalTransform(e, i, s, r, a, o);
  }, c.setTransform = function(e, i, s, r, a, o) {
    t.setTransform(e, i, s, r, a, o), this.__originalSetTransform(e, i, s, r, a, o);
  }, c.resetTransform = function() {
    t.resetTransform(), this.__originalResetTransform();
  }, c.rotate = function(e) {
    t.rotate(e), this.__originalRotate(e);
  }, c.clip = function(e) {
    t.clip(e), this.__originalClip(e);
  }, c.moveTo = function(e, i) {
    t.moveTo(e, i), this.__originalMoveTo(e, i);
  }, c.lineTo = function(e, i) {
    t.lineTo(e, i), this.__originalLineTo(e, i);
  }, c.bezierCurveTo = function(e, i, s, r, a, o) {
    t.bezierCurveTo(e, i, s, r, a, o), this.__originalBezierCurveTo(e, i, s, r, a, o);
  }, c.rect = function(e, i, s, r) {
    t.rect(e, i, s, r), this.__originalRect(e, i, s, r);
  }, c.closePath = function() {
    t.closePath(), this.__originalClosePath();
  }, c.beginPath = function() {
    t.beginPath(), this.__originalBeginPath();
  };
}
class Nw {
  constructor(t) {
    this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(t, e, i) {
    let s;
    return this.cache[t] !== void 0 ? (s = this.cache[t], this.canvasFactory.reset(s, e, i)) : (s = this.canvasFactory.create(e, i), this.cache[t] = s), s;
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      this.canvasFactory.destroy(e), delete this.cache[t];
    }
  }
}
function Rd(c, t, e, i, s, r, a, o, l, h) {
  const [d, u, p, y, S, v] = Ft(c);
  if (u === 0 && p === 0) {
    const T = a * d + S, _ = Math.round(T), f = o * y + v, m = Math.round(f), A = (a + l) * d + S, C = Math.abs(Math.round(A) - _) || 1, P = (o + h) * y + v, R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(Math.sign(d), 0, 0, Math.sign(y), _, m), c.drawImage(t, e, i, s, r, 0, 0, C, R), c.setTransform(d, u, p, y, S, v), [C, R];
  }
  if (d === 0 && y === 0) {
    const T = o * p + S, _ = Math.round(T), f = a * u + v, m = Math.round(f), A = (o + h) * p + S, C = Math.abs(Math.round(A) - _) || 1, P = (a + l) * u + v, R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(0, Math.sign(u), Math.sign(p), 0, _, m), c.drawImage(t, e, i, s, r, 0, 0, R, C), c.setTransform(d, u, p, y, S, v), [R, C];
  }
  c.drawImage(t, e, i, s, r, a, o, l, h);
  const E = Math.hypot(d, u), x = Math.hypot(p, y);
  return [E * l, x * h];
}
class Pg {
  constructor(t, e, i) {
    D(this, "alphaIsShape", !1);
    D(this, "fontSize", 0);
    D(this, "fontSizeScale", 1);
    D(this, "textMatrix", null);
    D(this, "textMatrixScale", 1);
    D(this, "fontMatrix", pf);
    D(this, "leading", 0);
    D(this, "x", 0);
    D(this, "y", 0);
    D(this, "lineX", 0);
    D(this, "lineY", 0);
    D(this, "charSpacing", 0);
    D(this, "wordSpacing", 0);
    D(this, "textHScale", 1);
    D(this, "textRenderingMode", ue.FILL);
    D(this, "textRise", 0);
    D(this, "fillColor", "#000000");
    D(this, "strokeColor", "#000000");
    D(this, "patternFill", !1);
    D(this, "patternStroke", !1);
    D(this, "fillAlpha", 1);
    D(this, "strokeAlpha", 1);
    D(this, "lineWidth", 1);
    D(this, "activeSMask", null);
    D(this, "transferMaps", "none");
    i == null || i(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = co.slice();
  }
  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }
  getPathBoundingBox(t = ye.FILL, e = null) {
    const i = this.minMax.slice();
    if (t === ye.STROKE) {
      e || Et("Stroke bounding box must include transform."), z.singularValueDecompose2dScale(e, yi);
      const s = yi[0] * this.lineWidth / 2, r = yi[1] * this.lineWidth / 2;
      i[0] -= s, i[1] -= r, i[2] += s, i[3] += r;
    }
    return i;
  }
  updateClipFromPath() {
    const t = z.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(co, 0);
  }
  getClippedPathBoundingBox(t = ye.FILL, e = null) {
    return z.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Rg(c, t) {
  if (t instanceof ImageData) {
    c.putImageData(t, 0, 0);
    return;
  }
  const e = t.height, i = t.width, s = e % Ke, r = (e - s) / Ke, a = s === 0 ? r : r + 1, o = c.createImageData(i, Ke);
  let l = 0, h;
  const d = t.data, u = o.data;
  let p, y, S, v;
  if (t.kind === xh.GRAYSCALE_1BPP) {
    const E = d.byteLength, x = new Uint32Array(u.buffer, 0, u.byteLength >> 2), T = x.length, _ = i + 7 >> 3, f = 4294967295, m = ce.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (S = p < r ? Ke : s, h = 0, y = 0; y < S; y++) {
        const A = E - l;
        let C = 0;
        const P = A > _ ? i : A * 8 - 7, R = P & -8;
        let M = 0, k = 0;
        for (; C < R; C += 8)
          k = d[l++], x[h++] = k & 128 ? f : m, x[h++] = k & 64 ? f : m, x[h++] = k & 32 ? f : m, x[h++] = k & 16 ? f : m, x[h++] = k & 8 ? f : m, x[h++] = k & 4 ? f : m, x[h++] = k & 2 ? f : m, x[h++] = k & 1 ? f : m;
        for (; C < P; C++)
          M === 0 && (k = d[l++], M = 128), x[h++] = k & M ? f : m, M >>= 1;
      }
      for (; h < T; )
        x[h++] = 0;
      c.putImageData(o, 0, p * Ke);
    }
  } else if (t.kind === xh.RGBA_32BPP) {
    for (y = 0, v = i * Ke * 4, p = 0; p < r; p++)
      u.set(d.subarray(l, l + v)), l += v, c.putImageData(o, 0, y), y += Ke;
    p < a && (v = i * s * 4, u.set(d.subarray(l, l + v)), c.putImageData(o, 0, y));
  } else if (t.kind === xh.RGB_24BPP)
    for (S = Ke, v = i * S, p = 0; p < a; p++) {
      for (p >= r && (S = s, v = i * S), h = 0, y = v; y--; )
        u[h++] = d[l++], u[h++] = d[l++], u[h++] = d[l++], u[h++] = 255;
      c.putImageData(o, 0, p * Ke);
    }
  else
    throw new Error(`bad image kind: ${t.kind}`);
}
function Mg(c, t) {
  if (t.bitmap) {
    c.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height, i = t.width, s = e % Ke, r = (e - s) / Ke, a = s === 0 ? r : r + 1, o = c.createImageData(i, Ke);
  let l = 0;
  const h = t.data, d = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < r ? Ke : s;
    ({
      srcPos: l
    } = Lw({
      src: h,
      srcPos: l,
      dest: d,
      width: i,
      height: p,
      nonBlackColor: 0
    })), c.putImageData(o, 0, u * Ke);
  }
}
function Kl(c, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const i of e)
    c[i] !== void 0 && (t[i] = c[i]);
  c.setLineDash !== void 0 && (t.setLineDash(c.getLineDash()), t.lineDashOffset = c.lineDashOffset);
}
function Md(c) {
  c.strokeStyle = c.fillStyle = "#000000", c.fillRule = "nonzero", c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = "butt", c.lineJoin = "miter", c.miterLimit = 10, c.globalCompositeOperation = "source-over", c.font = "10px sans-serif", c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0);
  const {
    filter: t
  } = c;
  t !== "none" && t !== "" && (c.filter = "none");
}
function kg(c, t) {
  if (t)
    return !0;
  z.singularValueDecompose2dScale(c, yi);
  const e = Math.fround(ss.pixelRatio * Cn.PDF_TO_CSS_UNITS);
  return yi[0] <= e && yi[1] <= e;
}
const Ow = ["butt", "round", "square"], Bw = ["miter", "round", "bevel"], Hw = {}, Dg = {};
var ns, Gf, Wf, jf;
const og = class og {
  constructor(t, e, i, s, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h, d) {
    b(this, ns);
    this.ctx = t, this.current = new Pg(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Nw(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = d ?? null;
  }
  getObject(t, e, i = null) {
    var s;
    return typeof e == "string" ? ((s = this.dependencyTracker) == null || s.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : i;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: i = !1,
    background: s = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, i) {
      const l = this.cachedCanvases.getCanvas("transparent", r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Ft(this.compositeCtx));
    }
    this.ctx.save(), Md(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Ft(this.ctx);
  }
  executeOperatorList(t, e, i, s, r) {
    var x;
    const a = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const h = a.length;
    if (h === l)
      return l;
    const d = h - l > Tg && typeof i == "function", u = d ? Date.now() + Iw : 0;
    let p = 0;
    const y = this.commonObjs, S = this.objs;
    let v, E;
    for (; ; ) {
      if (s !== void 0 && l === s.nextBreakPoint)
        return s.breakIt(l, i), l;
      if (!r || r(l))
        if (v = o[l], E = a[l] ?? null, v !== jl.dependency)
          E === null ? this[v](l) : this[v](l, ...E);
        else
          for (const T of E) {
            (x = this.dependencyTracker) == null || x.recordNamedData(T, l);
            const _ = T.startsWith("g_") ? y : S;
            if (!_.has(T))
              return _.get(T, i), l;
          }
      if (l++, l === h)
        return l;
      if (d && ++p > Tg) {
        if (Date.now() > u)
          return i(), l;
        p = 0;
      }
    }
  }
  endDrawing() {
    w(this, ns, Gf).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), w(this, ns, Wf).call(this);
  }
  _scaleImage(t, e) {
    const i = t.width ?? t.displayWidth, s = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = i, l = s, h = "prescale1", d, u;
    for (; r > 2 && o > 1 || a > 2 && l > 1; ) {
      let p = o, y = l;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && l > 1 && (y = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / y), d = this.cachedCanvases.getCanvas(h, p, y), u = d.context, u.clearRect(0, 0, p, y), u.drawImage(t, 0, 0, o, l, 0, 0, p, y), t = d.canvas, o = p, l = y, h = h === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l
    };
  }
  _createMaskCanvas(t, e) {
    var M, k;
    const i = this.ctx, {
      width: s,
      height: r
    } = e, a = this.current.fillColor, o = this.current.patternFill, l = Ft(i);
    let h, d, u, p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const L = e.bitmap || e.data.buffer;
      d = JSON.stringify(o ? l : [l.slice(0, 4), a]), h = this._cachedBitmapsMap.get(L), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(L, h));
      const N = h.get(d);
      if (N && !o) {
        const I = Math.round(Math.min(l[0], l[2]) + l[4]), j = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (M = this.dependencyTracker) == null || M.recordDependencies(t, Ei.transformAndFill), {
          canvas: N,
          offsetX: I,
          offsetY: j
        };
      }
      u = N;
    }
    u || (p = this.cachedCanvases.getCanvas("maskCanvas", s, r), Mg(p.context, e));
    let y = z.transform(l, [1 / s, 0, 0, -1 / r, 0, 0]);
    y = z.transform(y, [1, 0, 0, 1, 0, -r]);
    const S = co.slice();
    z.axialAlignedBoundingBox([0, 0, s, r], y, S);
    const [v, E, x, T] = S, _ = Math.round(x - v) || 1, f = Math.round(T - E) || 1, m = this.cachedCanvases.getCanvas("fillCanvas", _, f), A = m.context, C = v, P = E;
    A.translate(-C, -P), A.transform(...y), u || (u = this._scaleImage(p.canvas, as(A)), u = u.img, h && o && h.set(d, u)), A.imageSmoothingEnabled = kg(Ft(A), e.interpolate), Rd(A, u, 0, 0, u.width, u.height, 0, 0, s, r), A.globalCompositeOperation = "source-in";
    const R = z.transform(as(A), [1, 0, 0, 1, -C, -P]);
    return A.fillStyle = o ? a.getPattern(i, this, R, ye.FILL, t) : a, A.fillRect(0, 0, s, r), h && !o && (this.cachedCanvases.delete("fillCanvas"), h.set(d, m.canvas)), (k = this.dependencyTracker) == null || k.recordDependencies(t, Ei.transformAndFill), {
      canvas: m.canvas,
      offsetX: Math.round(C),
      offsetY: Math.round(P)
    };
  }
  setLineWidth(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("lineCap", t), this.ctx.lineCap = Ow[e];
  }
  setLineJoin(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("lineJoin", t), this.ctx.lineJoin = Bw[e];
  }
  setMiterLimit(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
  }
  setDash(t, e, i) {
    var r;
    (r = this.dependencyTracker) == null || r.recordSimpleData("dash", t);
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = i);
  }
  setRenderingIntent(t, e) {
  }
  setFlatness(t, e) {
  }
  setGState(t, e) {
    var i, s, r, a, o;
    for (const [l, h] of e)
      switch (l) {
        case "LW":
          this.setLineWidth(t, h);
          break;
        case "LC":
          this.setLineCap(t, h);
          break;
        case "LJ":
          this.setLineJoin(t, h);
          break;
        case "ML":
          this.setMiterLimit(t, h);
          break;
        case "D":
          this.setDash(t, h[0], h[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, h);
          break;
        case "FL":
          this.setFlatness(t, h);
          break;
        case "Font":
          this.setFont(t, h[0], h[1]);
          break;
        case "CA":
          (i = this.dependencyTracker) == null || i.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = h;
          break;
        case "ca":
          (s = this.dependencyTracker) == null || s.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = h;
          break;
        case "BM":
          (r = this.dependencyTracker) == null || r.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = h;
          break;
        case "SMask":
          (a = this.dependencyTracker) == null || a.recordSimpleData("SMask", t), this.current.activeSMask = h ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          (o = this.dependencyTracker) == null || o.recordSimpleData("filter", t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(h);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const e = this.ctx.canvas.width, i = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, r = this.cachedCanvases.getCanvas(s, e, i);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), Kl(this.suspendedCtx, a), Fw(a, this.suspendedCtx), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Kl(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, i = this.suspendedCtx;
    this.composeSMask(i, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(t, e, i, s) {
    const r = s[0], a = s[1], o = s[2] - r, l = s[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, i, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
  }
  genericComposeSMask(t, e, i, s, r, a, o, l, h, d, u) {
    let p = t.canvas, y = l - d, S = h - u;
    if (a)
      if (y < 0 || S < 0 || y + i > p.width || S + s > p.height) {
        const E = this.cachedCanvases.getCanvas("maskExtension", i, s), x = E.context;
        x.drawImage(p, -y, -S), x.globalCompositeOperation = "destination-atop", x.fillStyle = a, x.fillRect(0, 0, i, s), x.globalCompositeOperation = "source-over", p = E.canvas, y = S = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const E = new Path2D();
        E.rect(y, S, i, s), t.clip(E), t.globalCompositeOperation = "destination-atop", t.fillStyle = a, t.fillRect(y, S, i, s), t.restore();
      }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === "Alpha" && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const v = new Path2D();
    v.rect(l, h, i, s), e.clip(v), e.globalCompositeOperation = "destination-in", e.drawImage(p, y, S, i, s, l, h, i, s), e.restore();
  }
  save(t) {
    var i;
    this.inSMaskMode && Kl(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (i = this.dependencyTracker) == null || i.save(t);
  }
  restore(t) {
    var e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Kl(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  transform(t, e, i, s, r, a, o) {
    var l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData("transform", t), this.ctx.transform(e, i, s, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(t, e, i, s) {
    let [r] = i;
    if (!s) {
      r || (r = i[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === jl.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, s[0] - a, s[2] + a, s[1] - a, s[3] + a).recordDependencies(t, ["transform"]);
    }
    if (!(r instanceof Path2D)) {
      const a = i[0] = new Path2D();
      for (let o = 0, l = r.length; o < l; )
        switch (r[o++]) {
          case xd.moveTo:
            a.moveTo(r[o++], r[o++]);
            break;
          case xd.lineTo:
            a.lineTo(r[o++], r[o++]);
            break;
          case xd.curveTo:
            a.bezierCurveTo(r[o++], r[o++], r[o++], r[o++], r[o++], r[o++]);
            break;
          case xd.closePath:
            a.closePath();
            break;
          default:
            X(`Unrecognized drawing path operator: ${r[o - 1]}`);
            break;
        }
      r = a;
    }
    z.axialAlignedBoundingBox(s, Ft(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, i = !0) {
    var a;
    const s = this.ctx, r = this.current.strokeColor;
    if (s.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof r == "object" && (r != null && r.getPattern)) {
        const o = r.isModifyingCurrentTransform() ? s.getTransform() : null;
        if (s.save(), s.strokeStyle = r.getPattern(s, this, as(s), ye.STROKE, t), o) {
          const l = new Path2D();
          l.addPath(e, s.getTransform().invertSelf().multiplySelf(o)), e = l;
        }
        this.rescaleAndStroke(e, !1), s.restore();
      } else
        this.rescaleAndStroke(e, !0);
    (a = this.dependencyTracker) == null || a.recordDependencies(t, Ei.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(ye.STROKE, Ft(this.ctx))), s.globalAlpha = this.current.fillAlpha;
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, i = !0) {
    var h, d, u;
    const s = this.ctx, r = this.current.fillColor, a = this.current.patternFill;
    let o = !1;
    if (a) {
      const p = r.isModifyingCurrentTransform() ? s.getTransform() : null;
      if ((h = this.dependencyTracker) == null || h.save(t), s.save(), s.fillStyle = r.getPattern(s, this, as(s), ye.FILL, t), p) {
        const y = new Path2D();
        y.addPath(e, s.getTransform().invertSelf().multiplySelf(p)), e = y;
      }
      o = !0;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (s.fill(e, "evenodd"), this.pendingEOFill = !1) : s.fill(e)), (d = this.dependencyTracker) == null || d.recordDependencies(t, Ei.fill), o && (s.restore(), (u = this.dependencyTracker) == null || u.restore(t)), i && this.consumePath(t, e, l);
  }
  eoFill(t, e) {
    this.pendingEOFill = !0, this.fill(t, e);
  }
  fillStroke(t, e) {
    this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    var i;
    this.ctx.fill(e), (i = this.dependencyTracker) == null || i.recordDependencies(t, Ei.rawFillPath).recordOperation(t);
  }
  clip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = Hw;
  }
  eoClip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = Dg;
  }
  beginText(t) {
    var e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const e = this.pendingTextPaths, i = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: s
      } = this;
      e !== void 0 && s.recordFutureForcedDependency("textClip", s.getOpenMarker()).recordFutureForcedDependency("textClip", t), s.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const s = new Path2D(), r = i.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: l,
        fontSize: h,
        path: d
      } of e)
        d && s.addPath(d, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(h, -h));
      i.clip(s);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("leading", t), this.current.leading = -e;
  }
  setFont(t, e, i) {
    var u, p;
    (u = this.dependencyTracker) == null || u.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const s = this.commonObjs.get(e), r = this.current;
    if (!s)
      throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = s.fontMatrix || pf, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && X("Invalid font matrix for font " + e), i < 0 ? (i = -i, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font)
      return;
    const a = s.loadedName || "sans-serif", o = ((p = s.systemFontInfo) == null ? void 0 : p.css) || `"${a}", ${s.fallbackName}`;
    let l = "normal";
    s.black ? l = "900" : s.bold && (l = "bold");
    const h = s.italic ? "italic" : "normal";
    let d = i;
    i < _g ? d = _g : i > Cg && (d = Cg), this.current.fontSizeScale = i / d, this.ctx.font = `${h} ${l} ${d}px ${o}`;
  }
  setTextRenderingMode(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("textRise", t), this.current.textRise = e;
  }
  moveText(t, e, i) {
    var s;
    (s = this.dependencyTracker) == null || s.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
  }
  setLeadingMoveText(t, e, i) {
    this.setLeading(t, -i), this.moveText(t, e, i);
  }
  setTextMatrix(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textMatrix", t);
    const {
      current: i
    } = this;
    i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
  }
  nextLine(t) {
    var e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  paintChar(t, e, i, s, r, a) {
    var x, T, _, f;
    const o = this.ctx, l = this.current, h = l.font, d = l.textRenderingMode, u = l.fontSize / l.fontSizeScale, p = d & ue.FILL_STROKE_MASK, y = !!(d & ue.ADD_TO_PATH_FLAG), S = l.patternFill && !h.missingFile, v = l.patternStroke && !h.missingFile;
    let E;
    if ((h.disableFontFace || y || S || v) && !h.missingFile && (E = h.getPathGenerator(this.commonObjs, e)), E && (h.disableFontFace || S || v)) {
      o.save(), o.translate(i, s), o.scale(u, -u), (x = this.dependencyTracker) == null || x.recordCharacterBBox(t, o, h);
      let m;
      if (p === ue.FILL || p === ue.FILL_STROKE)
        if (r) {
          m = o.getTransform(), o.setTransform(...r);
          const A = w(this, ns, jf).call(this, E, m, r);
          o.fill(A);
        } else
          o.fill(E);
      if (p === ue.STROKE || p === ue.FILL_STROKE)
        if (a) {
          m || (m = o.getTransform()), o.setTransform(...a);
          const {
            a: A,
            b: C,
            c: P,
            d: R
          } = m, M = z.inverseTransform(a), k = z.transform([A, C, P, R, 0, 0], M);
          z.singularValueDecompose2dScale(k, yi), o.lineWidth *= Math.max(yi[0], yi[1]) / u, o.stroke(w(this, ns, jf).call(this, E, m, a));
        } else
          o.lineWidth /= u, o.stroke(E);
      o.restore();
    } else
      (p === ue.FILL || p === ue.FILL_STROKE) && (o.fillText(e, i, s), (T = this.dependencyTracker) == null || T.recordCharacterBBox(t, o, h, u, i, s, () => o.measureText(e))), (p === ue.STROKE || p === ue.FILL_STROKE) && (this.dependencyTracker && ((_ = this.dependencyTracker) == null || _.recordCharacterBBox(t, o, h, u, i, s, () => o.measureText(e)).recordDependencies(t, Ei.stroke)), o.strokeText(e, i, s));
    y && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Ft(o),
      x: i,
      y: s,
      fontSize: u,
      path: E
    }), (f = this.dependencyTracker) == null || f.recordCharacterBBox(t, o, h, u, i, s));
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: t
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    t.scale(1.5, 1), t.fillText("I", 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let i = !1;
    for (let s = 3; s < e.length; s += 4)
      if (e[s] > 0 && e[s] < 255) {
        i = !0;
        break;
      }
    return J(this, "isFontSubpixelAAEnabled", i);
  }
  showText(t, e) {
    var P, R, M, k;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Ei.showText).resetBBox(t), this.current.textRenderingMode & ue.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const i = this.current, s = i.font;
    if (s.isType3Font) {
      this.showType3Text(t, e), (P = this.dependencyTracker) == null || P.recordShowTextOperation(t);
      return;
    }
    const r = i.fontSize;
    if (r === 0) {
      (R = this.dependencyTracker) == null || R.recordOperation(t);
      return;
    }
    const a = this.ctx, o = i.fontSizeScale, l = i.charSpacing, h = i.wordSpacing, d = i.fontDirection, u = i.textHScale * d, p = e.length, y = s.vertical, S = y ? 1 : -1, v = s.defaultVMetrics, E = r * i.fontMatrix[0], x = i.textRenderingMode === ue.FILL && !s.disableFontFace && !i.patternFill;
    a.save(), i.textMatrix && a.transform(...i.textMatrix), a.translate(i.x, i.y + i.textRise), d > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let T, _;
    if (i.patternFill) {
      a.save();
      const L = i.fillColor.getPattern(a, this, as(a), ye.FILL, t);
      T = Ft(a), a.restore(), a.fillStyle = L;
    }
    if (i.patternStroke) {
      a.save();
      const L = i.strokeColor.getPattern(a, this, as(a), ye.STROKE, t);
      _ = Ft(a), a.restore(), a.strokeStyle = L;
    }
    let f = i.lineWidth;
    const m = i.textMatrixScale;
    if (m === 0 || f === 0) {
      const L = i.textRenderingMode & ue.FILL_STROKE_MASK;
      (L === ue.STROKE || L === ue.FILL_STROKE) && (f = this.getSinglePixelWidth());
    } else
      f /= m;
    if (o !== 1 && (a.scale(o, o), f /= o), a.lineWidth = f, s.isInvalidPDFjsFont) {
      const L = [];
      let N = 0;
      for (const j of e)
        L.push(j.unicode), N += j.width;
      const I = L.join("");
      if (a.fillText(I, 0, 0), this.dependencyTracker !== null) {
        const j = a.measureText(I);
        this.dependencyTracker.recordBBox(t, this.ctx, -j.actualBoundingBoxLeft, j.actualBoundingBoxRight, -j.actualBoundingBoxAscent, j.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      i.x += N * E * u, a.restore(), this.compose();
      return;
    }
    let A = 0, C;
    for (C = 0; C < p; ++C) {
      const L = e[C];
      if (typeof L == "number") {
        A += S * L * r / 1e3;
        continue;
      }
      let N = !1;
      const I = (L.isSpace ? h : 0) + l, j = L.fontChar, H = L.accent;
      let B, tt, st = L.width;
      if (y) {
        const rt = L.vmetric || v, lt = -(L.vmetric ? rt[1] : st * 0.5) * E, ie = rt[2] * E;
        st = rt ? -rt[0] : st, B = lt / o, tt = (A + ie) / o;
      } else
        B = A / o, tt = 0;
      let ee;
      if (s.remeasure && st > 0) {
        ee = a.measureText(j);
        const rt = ee.width * 1e3 / r * o;
        if (st < rt && this.isFontSubpixelAAEnabled) {
          const lt = st / rt;
          N = !0, a.save(), a.scale(lt, 1), B /= lt;
        } else st !== rt && (B += (st - rt) / 2e3 * r / o);
      }
      if (this.contentVisible && (L.isInFont || s.missingFile)) {
        if (x && !H)
          a.fillText(j, B, tt), (M = this.dependencyTracker) == null || M.recordCharacterBBox(t, a, ee ? {
            bbox: null
          } : s, r / o, B, tt, () => ee ?? a.measureText(j));
        else if (this.paintChar(t, j, B, tt, T, _), H) {
          const rt = B + r * H.offset.x / o, lt = tt - r * H.offset.y / o;
          this.paintChar(t, H.fontChar, rt, lt, T, _);
        }
      }
      const Je = y ? st * E - I * d : st * E + I * d;
      A += Je, N && a.restore();
    }
    y ? i.y -= A : i.x += A * u, a.restore(), this.compose(), (k = this.dependencyTracker) == null || k.recordShowTextOperation(t);
  }
  showType3Text(t, e) {
    const i = this.ctx, s = this.current, r = s.font, a = s.fontSize, o = s.fontDirection, l = r.vertical ? 1 : -1, h = s.charSpacing, d = s.wordSpacing, u = s.textHScale * o, p = s.fontMatrix || pf, y = e.length, S = s.textRenderingMode === ue.INVISIBLE;
    let v, E, x, T;
    if (S || a === 0)
      return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(u, o);
    const _ = this.dependencyTracker;
    for (this.dependencyTracker = _ ? new pu(_, t) : null, v = 0; v < y; ++v) {
      if (E = e[v], typeof E == "number") {
        T = l * E * a / 1e3, this.ctx.translate(T, 0), s.x += T * u;
        continue;
      }
      const f = (E.isSpace ? d : 0) + h, m = r.charProcOperatorList[E.operatorListId];
      m ? this.contentVisible && (this.save(), i.scale(a, a), i.transform(...p), this.executeOperatorList(m), this.restore()) : X(`Type3 character "${E.operatorListId}" is not available.`);
      const A = [E.width, 0];
      z.applyTransform(A, p), x = A[0] * a + f, i.translate(x, 0), s.x += x * u;
    }
    i.restore(), _ && (this.dependencyTracker = _);
  }
  setCharWidth(t, e, i) {
  }
  setCharWidthAndBounds(t, e, i, s, r, a, o) {
    var h;
    const l = new Path2D();
    l.rect(s, r, a - s, o - r), this.ctx.clip(l), (h = this.dependencyTracker) == null || h.recordBBox(t, this.ctx, s, a, r, o).recordClipBox(t, this.ctx, s, a, r, o), this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let i;
    if (e[0] === "TilingPattern") {
      const s = this.baseTransform || Ft(this.ctx), r = {
        createCanvasGraphics: (a, o) => new og(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new pu(this.dependencyTracker, o, !0) : null)
      };
      i = new zf(e, this.ctx, r, s);
    } else
      i = this._getPattern(t, e[1], e[2]);
    return i;
  }
  setStrokeColorN(t, ...e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }
  setFillColorN(t, ...e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("fillColor", t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = !0;
  }
  setStrokeRGBColor(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
  }
  setStrokeTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
  }
  setFillTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
  }
  _getPattern(t, e, i = null) {
    let s;
    return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = Dw(this.getObject(t, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
  }
  shadingFill(t, e) {
    var a;
    if (!this.contentVisible)
      return;
    const i = this.ctx;
    this.save(t);
    const s = this._getPattern(t, e);
    i.fillStyle = s.getPattern(i, this, as(i), ye.SHADING, t);
    const r = as(i);
    if (r) {
      const {
        width: o,
        height: l
      } = i.canvas, h = co.slice();
      z.axialAlignedBoundingBox([0, 0, o, l], r, h);
      const [d, u, p, y] = h;
      this.ctx.fillRect(d, u, p - d, y - u);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Ei.transform).recordDependencies(t, Ei.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }
  beginInlineImage() {
    Et("Should not call beginInlineImage");
  }
  beginImageData() {
    Et("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, i) {
    var s;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Ft(this.ctx), i)) {
      z.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = i, h = new Path2D();
      h.rect(r, a, o - r, l - a), this.ctx.clip(h), (s = this.dependencyTracker) == null || s.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, e) {
    var _;
    if (!this.contentVisible)
      return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const i = this.ctx;
    e.isolated || Wu("TODO: Support non-isolated groups."), e.knockout && X("Knockout groups not supported.");
    const s = Ft(i);
    if (e.matrix && i.transform(...e.matrix), !e.bbox)
      throw new Error("Bounding box is required.");
    let r = co.slice();
    z.axialAlignedBoundingBox(e.bbox, Ft(i), r);
    const a = [0, 0, i.canvas.width, i.canvas.height];
    r = z.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]), l = Math.floor(r[1]), h = Math.max(Math.ceil(r[2]) - o, 1), d = Math.max(Math.ceil(r[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, h, d]);
    let u = "groupAt" + this.groupLevel;
    e.smask && (u += "_smask_" + this.smaskCounter++ % 2);
    const p = this.cachedCanvases.getCanvas(u, h, d), y = p.context;
    y.translate(-o, -l), y.transform(...s);
    let S = new Path2D();
    const [v, E, x, T] = e.bbox;
    if (S.rect(v, E, x - v, T - E), e.matrix) {
      const f = new Path2D();
      f.addPath(S, new DOMMatrix(e.matrix)), S = f;
    }
    y.clip(S), e.smask && this.smaskStack.push({
      canvas: p.canvas,
      context: y,
      offsetX: o,
      offsetY: l,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null
    }), (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(o, l), i.save()), Kl(i, y), this.ctx = y, (_ = this.dependencyTracker) == null || _.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(i), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(i), this.groupLevel++;
  }
  endGroup(t, e) {
    var r;
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const i = this.ctx, s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = Ft(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = co.slice();
      z.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], a, o), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }
  beginAnnotation(t, e, i, s, r, a) {
    if (w(this, ns, Gf).call(this), Md(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
      const o = i[2] - i[0], l = i[3] - i[1];
      if (a && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= i[0], s[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = o, i[3] = l, z.singularValueDecompose2dScale(Ft(this.ctx), yi);
        const {
          viewportScale: h
        } = this, d = Math.ceil(o * this.outputScaleX * h), u = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(d, u);
        const {
          canvas: p,
          context: y
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(yi[0], 0, 0, -yi[1], 0, l * yi[1]), Md(this.ctx);
      } else {
        Md(this.ctx), this.endPath(t);
        const h = new Path2D();
        h.rect(i[0], i[1], o, l), this.ctx.clip(h);
      }
    }
    this.current = new Pg(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...s), this.transform(t, ...r);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), w(this, ns, Wf).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(t, e) {
    var o;
    if (!this.contentVisible)
      return;
    const i = e.count;
    e = this.getObject(t, e.data, e), e.count = i;
    const s = this.ctx, r = this._createMaskCanvas(t, e), a = r.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), s.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(t, e, i, s = 0, r = 0, a, o) {
    var u, p, y;
    if (!this.contentVisible)
      return;
    e = this.getObject(t, e.data, e);
    const l = this.ctx;
    l.save();
    const h = Ft(l);
    l.transform(i, s, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, d.offsetX - h[4], d.offsetY - h[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let S = 0, v = o.length; S < v; S += 2) {
      const E = z.transform(h, [i, s, r, a, o[S], o[S + 1]]);
      l.drawImage(d.canvas, E[4], E[5]), (p = this.dependencyTracker) == null || p.recordBBox(t, this.ctx, E[4], E[4] + d.canvas.width, E[5], E[5] + d.canvas.height);
    }
    l.restore(), this.compose(), (y = this.dependencyTracker) == null || y.recordOperation(t);
  }
  paintImageMaskXObjectGroup(t, e) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const i = this.ctx, s = this.current.fillColor, r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, Ei.transformAndFill);
    for (const h of e) {
      const {
        data: d,
        width: u,
        height: p,
        transform: y
      } = h, S = this.cachedCanvases.getCanvas("maskCanvas", u, p), v = S.context;
      v.save();
      const E = this.getObject(t, d, h);
      Mg(v, E), v.globalCompositeOperation = "source-in", v.fillStyle = r ? s.getPattern(v, this, as(i), ye.FILL, t) : s, v.fillRect(0, 0, u, p), v.restore(), i.save(), i.transform(...y), i.scale(1, -1), Rd(i, S.canvas, 0, 0, u, p, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, u, 0, p), i.restore();
    }
    this.compose(), (l = this.dependencyTracker) == null || l.recordOperation(t);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const i = this.getObject(t, e);
    if (!i) {
      X("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, i);
  }
  paintImageXObjectRepeat(t, e, i, s, r) {
    if (!this.contentVisible)
      return;
    const a = this.getObject(t, e);
    if (!a) {
      X("Dependent image isn't ready yet");
      return;
    }
    const o = a.width, l = a.height, h = [];
    for (let d = 0, u = r.length; d < u; d += 2)
      h.push({
        transform: [i, 0, 0, s, r[d], r[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l
      });
    this.paintInlineImageXObjectGroup(t, a, h);
  }
  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === "none")
      return t.bitmap;
    const {
      bitmap: e,
      width: i,
      height: s
    } = t, r = this.cachedCanvases.getCanvas("inlineImage", i, s), a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = "none", r.canvas;
  }
  paintInlineImageXObject(t, e) {
    var h;
    if (!this.contentVisible)
      return;
    const i = e.width, s = e.height, r = this.ctx;
    this.save(t);
    const {
      filter: a
    } = r;
    a !== "none" && a !== "" && (r.filter = "none"), r.scale(1 / i, -1 / s);
    let o;
    if (e.bitmap)
      o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
      o = e;
    else {
      const u = this.cachedCanvases.getCanvas("inlineImage", i, s).context;
      Rg(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, as(r));
    r.imageSmoothingEnabled = kg(Ft(r), e.interpolate), (h = this.dependencyTracker) == null || h.resetBBox(t).recordBBox(t, r, 0, i, -s, 0).recordDependencies(t, Ei.imageXObject).recordOperation(t), Rd(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -s, i, s), this.compose(), this.restore(t);
  }
  paintInlineImageXObjectGroup(t, e, i) {
    var a, o, l;
    if (!this.contentVisible)
      return;
    const s = this.ctx;
    let r;
    if (e.bitmap)
      r = e.bitmap;
    else {
      const h = e.width, d = e.height, p = this.cachedCanvases.getCanvas("inlineImage", h, d).context;
      Rg(p, e), r = this.applyTransferMapsToCanvas(p);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const h of i)
      s.save(), s.transform(...h.transform), s.scale(1, -1), Rd(s, r, h.x, h.y, h.w, h.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, 1, -1, 0), s.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }
  paintSolidColorImageMask(t) {
    var e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Ei.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t, e) {
  }
  markPointProps(t, e, i) {
  }
  beginMarkedContent(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e, i) {
    var s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(i)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, e, i) {
    var a, o;
    const s = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
    const r = this.ctx;
    this.pendingClip ? (s || (this.pendingClip === Dg ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Ft(this.ctx);
      if (t[1] === 0 && t[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]), i = Math.hypot(t[0], t[2]), s = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: i,
        c: s,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (i === 0 && s === 0) {
        const l = Math.abs(e), h = Math.abs(r);
        if (l === h)
          if (t === 0)
            a = o = 1 / l;
          else {
            const d = l * t;
            a = o = d < 1 ? 1 / d : 1;
          }
        else if (t === 0)
          a = 1 / l, o = 1 / h;
        else {
          const d = l * t, u = h * t;
          a = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * r - i * s), h = Math.hypot(e, i), d = Math.hypot(s, r);
        if (t === 0)
          a = d / l, o = h / l;
        else {
          const u = t * l;
          a = d > u ? d / u : 1, o = h > u ? h / u : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const {
      ctx: i,
      current: {
        lineWidth: s
      }
    } = this, [r, a] = this.getScaleForStroking();
    if (r === a) {
      i.lineWidth = (s || 1) * r, i.stroke(t);
      return;
    }
    const o = i.getLineDash();
    e && i.save(), i.scale(r, a), of.a = 1 / r, of.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, of), o.length > 0) {
      const h = Math.max(r, a);
      i.setLineDash(o.map((d) => d / h)), i.lineDashOffset /= h;
    }
    i.lineWidth = s || 1, i.stroke(l), e && i.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
ns = new WeakSet(), Gf = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Wf = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, jf = function(t, e, i) {
  const s = new Path2D();
  return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
};
let mo = og;
for (const c in jl)
  mo.prototype[c] !== void 0 && (mo.prototype[jl[c]] = mo.prototype[c]);
var Vo, qo, hc, Xo, Ud;
const fo = class fo {
  constructor(t) {
    b(this, Xo);
    b(this, Vo);
    b(this, qo);
    b(this, hc);
    g(this, Vo, t), g(this, qo, new DataView(n(this, Vo))), g(this, hc, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), i = {};
    let s = 0;
    for (const h of fo.strings) {
      const d = e.encode(t[h]);
      i[h] = d, s += 4 + d.length;
    }
    const r = new ArrayBuffer(s), a = new Uint8Array(r), o = new DataView(r);
    let l = 0;
    for (const h of fo.strings) {
      const d = i[h], u = d.length;
      o.setUint32(l, u), a.set(d, l + 4), l += 4 + u;
    }
    return nt(l === r.byteLength, "CssFontInfo.write: Buffer overflow"), r;
  }
  get fontFamily() {
    return w(this, Xo, Ud).call(this, 0);
  }
  get fontWeight() {
    return w(this, Xo, Ud).call(this, 1);
  }
  get italicAngle() {
    return w(this, Xo, Ud).call(this, 2);
  }
};
Vo = new WeakMap(), qo = new WeakMap(), hc = new WeakMap(), Xo = new WeakSet(), Ud = function(t) {
  nt(t < fo.strings.length, "Invalid string index");
  let e = 0;
  for (let s = 0; s < t; s++)
    e += n(this, qo).getUint32(e) + 4;
  const i = n(this, qo).getUint32(e);
  return n(this, hc).decode(new Uint8Array(n(this, Vo), e + 4, i));
}, D(fo, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
let gu = fo;
var Jn, As, ha, ca, uh;
const po = class po {
  constructor(t) {
    b(this, ca);
    b(this, Jn);
    b(this, As);
    b(this, ha);
    g(this, Jn, t), g(this, As, new DataView(n(this, Jn))), g(this, ha, new TextDecoder());
  }
  static write(t) {
    const e = new TextEncoder(), i = {};
    let s = 0;
    for (const p of po.strings) {
      const y = e.encode(t[p]);
      i[p] = y, s += 4 + y.length;
    }
    s += 4;
    let r, a, o = 1 + s;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const l = new ArrayBuffer(o), h = new Uint8Array(l), d = new DataView(l);
    let u = 0;
    d.setUint8(u++, t.guessFallback ? 1 : 0), d.setUint32(u, 0), u += 4, s = 0;
    for (const p of po.strings) {
      const y = i[p], S = y.length;
      s += 4 + S, d.setUint32(u, S), h.set(y, u + 4), u += 4 + S;
    }
    return d.setUint32(u - s - 4, s), t.style && (d.setUint32(u, r.length), h.set(r, u + 4), u += 4 + r.length, d.setUint32(u, a.length), h.set(a, u + 4), u += 4 + a.length), nt(u <= l.byteLength, "SubstitionInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
  get guessFallback() {
    return n(this, As).getUint8(0) !== 0;
  }
  get css() {
    return w(this, ca, uh).call(this, 0);
  }
  get loadedName() {
    return w(this, ca, uh).call(this, 1);
  }
  get baseFontName() {
    return w(this, ca, uh).call(this, 2);
  }
  get src() {
    return w(this, ca, uh).call(this, 3);
  }
  get style() {
    let t = 1;
    t += 4 + n(this, As).getUint32(t);
    const e = n(this, As).getUint32(t), i = n(this, ha).decode(new Uint8Array(n(this, Jn), t + 4, e));
    t += 4 + e;
    const s = n(this, As).getUint32(t), r = n(this, ha).decode(new Uint8Array(n(this, Jn), t + 4, s));
    return {
      style: i,
      weight: r
    };
  }
};
Jn = new WeakMap(), As = new WeakMap(), ha = new WeakMap(), ca = new WeakSet(), uh = function(t) {
  nt(t < po.strings.length, "Invalid string index");
  let e = 5;
  for (let s = 0; s < t; s++)
    e += n(this, As).getUint32(e) + 4;
  const i = n(this, As).getUint32(e);
  return n(this, ha).decode(new Uint8Array(n(this, Jn), e + 4, i));
}, D(po, "strings", ["css", "loadedName", "baseFontName", "src"]);
let mu = po;
var Yo, Ko, Jo, Qo, si, vs, cc, gt, zt, $i, zd, fh;
const K = class K {
  constructor({
    data: t,
    extra: e
  }) {
    b(this, zt);
    b(this, vs);
    b(this, cc);
    b(this, gt);
    g(this, vs, t), g(this, cc, new TextDecoder()), g(this, gt, new DataView(n(this, vs))), e && Object.assign(this, e);
  }
  get black() {
    return w(this, zt, $i).call(this, 0);
  }
  get bold() {
    return w(this, zt, $i).call(this, 1);
  }
  get disableFontFace() {
    return w(this, zt, $i).call(this, 2);
  }
  get fontExtraProperties() {
    return w(this, zt, $i).call(this, 3);
  }
  get isInvalidPDFjsFont() {
    return w(this, zt, $i).call(this, 4);
  }
  get isType3Font() {
    return w(this, zt, $i).call(this, 5);
  }
  get italic() {
    return w(this, zt, $i).call(this, 6);
  }
  get missingFile() {
    return w(this, zt, $i).call(this, 7);
  }
  get remeasure() {
    return w(this, zt, $i).call(this, 8);
  }
  get vertical() {
    return w(this, zt, $i).call(this, 9);
  }
  get ascent() {
    return w(this, zt, zd).call(this, 0);
  }
  get defaultWidth() {
    return w(this, zt, zd).call(this, 1);
  }
  get descent() {
    return w(this, zt, zd).call(this, 2);
  }
  get bbox() {
    let t = n(K, Ko);
    if (n(this, gt).getUint8(t) === 0)
      return;
    t += 1;
    const i = [];
    for (let s = 0; s < 4; s++)
      i.push(n(this, gt).getInt16(t, !0)), t += 2;
    return i;
  }
  get fontMatrix() {
    let t = n(K, Jo);
    if (n(this, gt).getUint8(t) === 0)
      return;
    t += 1;
    const i = [];
    for (let s = 0; s < 6; s++)
      i.push(n(this, gt).getFloat64(t, !0)), t += 8;
    return i;
  }
  get defaultVMetrics() {
    let t = n(K, Qo);
    if (n(this, gt).getUint8(t) === 0)
      return;
    t += 1;
    const i = [];
    for (let s = 0; s < 3; s++)
      i.push(n(this, gt).getInt16(t, !0)), t += 2;
    return i;
  }
  get fallbackName() {
    return w(this, zt, fh).call(this, 0);
  }
  get loadedName() {
    return w(this, zt, fh).call(this, 1);
  }
  get mimetype() {
    return w(this, zt, fh).call(this, 2);
  }
  get name() {
    return w(this, zt, fh).call(this, 3);
  }
  get data() {
    let t = n(K, si);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    t += 4 + i;
    const s = n(this, gt).getUint32(t);
    t += 4 + s;
    const r = n(this, gt).getUint32(t);
    if (r !== 0)
      return new Uint8Array(n(this, vs), t + 4, r);
  }
  clearData() {
    let t = n(K, si);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    t += 4 + i;
    const s = n(this, gt).getUint32(t);
    t += 4 + s;
    const r = n(this, gt).getUint32(t);
    new Uint8Array(n(this, vs), t + 4, r).fill(0), n(this, gt).setUint32(t, 0);
  }
  get cssFontInfo() {
    let t = n(K, si);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    t += 4 + i;
    const s = n(this, gt).getUint32(t);
    if (s === 0)
      return null;
    const r = new Uint8Array(s);
    return r.set(new Uint8Array(n(this, vs), t + 4, s)), new gu(r.buffer);
  }
  get systemFontInfo() {
    let t = n(K, si);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    if (i === 0)
      return null;
    const s = new Uint8Array(i);
    return s.set(new Uint8Array(n(this, vs), t + 4, i)), new mu(s.buffer);
  }
  static write(t) {
    const e = t.systemFontInfo ? mu.write(t.systemFontInfo) : null, i = t.cssFontInfo ? gu.write(t.cssFontInfo) : null, s = new TextEncoder(), r = {};
    let a = 0;
    for (const v of K.strings)
      r[v] = s.encode(t[v]), a += 4 + r[v].length;
    const o = n(K, si) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t.data ? t.data.length : 0), l = new ArrayBuffer(o), h = new Uint8Array(l), d = new DataView(l);
    let u = 0;
    const p = K.bools.length;
    let y = 0, S = 0;
    for (let v = 0; v < p; v++) {
      const E = t[K.bools[v]];
      y |= (E === void 0 ? 0 : E ? 2 : 1) << S, S += 2, (S === 8 || v === p - 1) && (d.setUint8(u++, y), y = 0, S = 0);
    }
    nt(u === n(K, Yo), "FontInfo.write: Boolean properties offset mismatch");
    for (const v of K.numbers)
      d.setFloat64(u, t[v]), u += 8;
    if (nt(u === n(K, Ko), "FontInfo.write: Number properties offset mismatch"), t.bbox) {
      d.setUint8(u++, 4);
      for (const v of t.bbox)
        d.setInt16(u, v, !0), u += 2;
    } else
      d.setUint8(u++, 0), u += 8;
    if (nt(u === n(K, Jo), "FontInfo.write: BBox properties offset mismatch"), t.fontMatrix) {
      d.setUint8(u++, 6);
      for (const v of t.fontMatrix)
        d.setFloat64(u, v, !0), u += 8;
    } else
      d.setUint8(u++, 0), u += 48;
    if (nt(u === n(K, Qo), "FontInfo.write: FontMatrix properties offset mismatch"), t.defaultVMetrics) {
      d.setUint8(u++, 1);
      for (const v of t.defaultVMetrics)
        d.setInt16(u, v, !0), u += 2;
    } else
      d.setUint8(u++, 0), u += 6;
    nt(u === n(K, si), "FontInfo.write: DefaultVMetrics properties offset mismatch"), d.setUint32(n(K, si), 0), u += 4;
    for (const v of K.strings) {
      const E = r[v], x = E.length;
      d.setUint32(u, x), h.set(E, u + 4), u += 4 + x;
    }
    if (d.setUint32(n(K, si), u - n(K, si) - 4), !e)
      d.setUint32(u, 0), u += 4;
    else {
      const v = e.byteLength;
      d.setUint32(u, v), nt(u + 4 + v <= l.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), h.set(new Uint8Array(e), u + 4), u += 4 + v;
    }
    if (!i)
      d.setUint32(u, 0), u += 4;
    else {
      const v = i.byteLength;
      d.setUint32(u, v), nt(u + 4 + v <= l.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), h.set(new Uint8Array(i), u + 4), u += 4 + v;
    }
    return t.data === void 0 ? (d.setUint32(u, 0), u += 4) : (d.setUint32(u, t.data.length), h.set(t.data, u + 4), u += 4 + t.data.length), nt(u <= l.byteLength, "FontInfo.write: Buffer overflow"), l.transferToFixedLength(u);
  }
};
Yo = new WeakMap(), Ko = new WeakMap(), Jo = new WeakMap(), Qo = new WeakMap(), si = new WeakMap(), vs = new WeakMap(), cc = new WeakMap(), gt = new WeakMap(), zt = new WeakSet(), $i = function(t) {
  nt(t < K.bools.length, "Invalid boolean index");
  const e = Math.floor(t / 4), i = t * 2 % 8, s = n(this, gt).getUint8(e) >> i & 3;
  return s === 0 ? void 0 : s === 2;
}, zd = function(t) {
  return nt(t < K.numbers.length, "Invalid number index"), n(this, gt).getFloat64(n(K, Yo) + t * 8);
}, fh = function(t) {
  nt(t < K.strings.length, "Invalid string index");
  let e = n(K, si) + 4;
  for (let r = 0; r < t; r++)
    e += n(this, gt).getUint32(e) + 4;
  const i = n(this, gt).getUint32(e), s = new Uint8Array(i);
  return s.set(new Uint8Array(n(this, vs), e + 4, i)), n(this, cc).decode(s);
}, D(K, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]), D(K, "numbers", ["ascent", "defaultWidth", "descent"]), D(K, "strings", ["fallbackName", "loadedName", "mimetype", "name"]), b(K, Yo, Math.ceil(K.bools.length * 2 / 8)), b(K, Ko, n(K, Yo) + K.numbers.length * 8), b(K, Jo, n(K, Ko) + 1 + 8), b(K, Qo, n(K, Jo) + 1 + 48), b(K, si, n(K, Qo) + 1 + 6);
let Vf = K;
var dc, uc;
class ts {
  static get workerPort() {
    return n(this, dc);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    g(this, dc, t);
  }
  static get workerSrc() {
    return n(this, uc);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    g(this, uc, t);
  }
}
dc = new WeakMap(), uc = new WeakMap(), b(ts, dc, null), b(ts, uc, "");
var Zo, fc;
class $w {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    b(this, Zo);
    b(this, fc);
    g(this, Zo, t), g(this, fc, e);
  }
  getRaw() {
    return n(this, fc);
  }
  get(t) {
    return n(this, Zo).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, Zo).entries();
  }
}
Zo = new WeakMap(), fc = new WeakMap();
const oo = Symbol("INTERNAL");
var pc, gc, mc, tl;
class Uw {
  constructor(t, {
    name: e,
    intent: i,
    usage: s,
    rbGroups: r
  }) {
    b(this, pc, !1);
    b(this, gc, !1);
    b(this, mc, !1);
    b(this, tl, !0);
    g(this, pc, !!(t & bi.DISPLAY)), g(this, gc, !!(t & bi.PRINT)), this.name = e, this.intent = i, this.usage = s, this.rbGroups = r;
  }
  get visible() {
    if (n(this, mc))
      return n(this, tl);
    if (!n(this, tl))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, pc) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, gc) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, i = !1) {
    t !== oo && Et("Internal method `_setVisible` called."), g(this, mc, i), g(this, tl, e);
  }
}
pc = new WeakMap(), gc = new WeakMap(), mc = new WeakMap(), tl = new WeakMap();
var Qn, mt, el, il, bc, qf;
class zw {
  constructor(t, e = bi.DISPLAY) {
    b(this, bc);
    b(this, Qn, null);
    b(this, mt, /* @__PURE__ */ new Map());
    b(this, el, null);
    b(this, il, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, g(this, il, t.order);
      for (const i of t.groups)
        n(this, mt).set(i.id, new Uw(e, i));
      if (t.baseState === "OFF")
        for (const i of n(this, mt).values())
          i._setVisible(oo, !1);
      for (const i of t.on)
        n(this, mt).get(i)._setVisible(oo, !0);
      for (const i of t.off)
        n(this, mt).get(i)._setVisible(oo, !1);
      g(this, el, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, mt).size === 0)
      return !0;
    if (!t)
      return Wu("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, mt).has(t.id) ? n(this, mt).get(t.id).visible : (X(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return w(this, bc, qf).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, mt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (n(this, mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, mt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (!n(this, mt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, mt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (!n(this, mt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, mt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (n(this, mt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return X(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return X(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, i = !0) {
    var r;
    const s = n(this, mt).get(t);
    if (!s) {
      X(`Optional content group not found: ${t}`);
      return;
    }
    if (i && e && s.rbGroups.length)
      for (const a of s.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, mt).get(o)) == null || r._setVisible(oo, !1, !0));
    s._setVisible(oo, !!e, !0), g(this, Qn, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let i;
    for (const s of t) {
      switch (s) {
        case "ON":
        case "OFF":
        case "Toggle":
          i = s;
          continue;
      }
      const r = n(this, mt).get(s);
      if (r)
        switch (i) {
          case "ON":
            this.setVisibility(s, !0, e);
            break;
          case "OFF":
            this.setVisibility(s, !1, e);
            break;
          case "Toggle":
            this.setVisibility(s, !r.visible, e);
            break;
        }
    }
    g(this, Qn, null);
  }
  get hasInitialVisibility() {
    return n(this, el) === null || this.getHash() === n(this, el);
  }
  getOrder() {
    return n(this, mt).size ? n(this, il) ? n(this, il).slice() : [...n(this, mt).keys()] : null;
  }
  getGroup(t) {
    return n(this, mt).get(t) || null;
  }
  getHash() {
    if (n(this, Qn) !== null)
      return n(this, Qn);
    const t = new $m();
    for (const [e, i] of n(this, mt))
      t.update(`${e}:${i.visible}`);
    return g(this, Qn, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, mt).entries();
  }
}
Qn = new WeakMap(), mt = new WeakMap(), el = new WeakMap(), il = new WeakMap(), bc = new WeakSet(), qf = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const i = t[0];
  for (let s = 1; s < e; s++) {
    const r = t[s];
    let a;
    if (Array.isArray(r))
      a = w(this, bc, qf).call(this, r);
    else if (n(this, mt).has(r))
      a = n(this, mt).get(r).visible;
    else
      return X(`Optional content group not found: ${r}`), !0;
    switch (i) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return i === "And";
};
class Gw {
  constructor(t, {
    disableRange: e = !1,
    disableStream: i = !1
  }) {
    nt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: s,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h
      });
    }), t.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }
  _onReceiveData({
    begin: t,
    chunk: e
  }) {
    const i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
    else {
      const s = this._rangeReaders.some(function(r) {
        return r._begin !== t ? !1 : (r._enqueue(i), !0);
      });
      nt(s, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  _onProgress(t) {
    var e, i, s, r;
    t.total === void 0 ? (i = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || i.call(e, {
      loaded: t.loaded
    }) : (r = (s = this._fullRequestReader) == null ? void 0 : s.onProgress) == null || r.call(s, {
      loaded: t.loaded,
      total: t.total
    });
  }
  _onProgressiveDone() {
    var t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    nt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const t = this._queuedChunks;
    return this._queuedChunks = null, new Ww(this, t, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new jw(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeReaders.slice(0))
      i.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class Ww {
  constructor(t, e, i = !1, s = null) {
    this._stream = t, this._done = i || !1, this._filename = Vu(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks)
      this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1
    }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class jw {
  constructor(t, e, i) {
    this._stream = t, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1
        });
        for (const i of this._requests)
          i.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Vw(c) {
  let t = !0, e = i("filename\\*", "i").exec(c);
  if (e) {
    e = e[1];
    let d = o(e);
    return d = unescape(d), d = l(d), d = h(d), r(d);
  }
  if (e = a(c), e) {
    const d = h(e);
    return r(d);
  }
  if (e = i("filename", "i").exec(c), e) {
    e = e[1];
    let d = o(e);
    return d = h(d), r(d);
  }
  function i(d, u) {
    return new RegExp("(?:^|;)\\s*" + d + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
  }
  function s(d, u) {
    if (d) {
      if (!/^[\x00-\xFF]+$/.test(u))
        return u;
      try {
        const p = new TextDecoder(d, {
          fatal: !0
        }), y = fd(u);
        u = p.decode(y), t = !1;
      } catch {
      }
    }
    return u;
  }
  function r(d) {
    return t && /[\x80-\xff]/.test(d) && (d = s("utf-8", d), t && (d = s("iso-8859-1", d))), d;
  }
  function a(d) {
    const u = [];
    let p;
    const y = i("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (p = y.exec(d)) !== null; ) {
      let [, v, E, x] = p;
      if (v = parseInt(v, 10), v in u) {
        if (v === 0)
          break;
        continue;
      }
      u[v] = [E, x];
    }
    const S = [];
    for (let v = 0; v < u.length && v in u; ++v) {
      let [E, x] = u[v];
      x = o(x), E && (x = unescape(x), v === 0 && (x = l(x))), S.push(x);
    }
    return S.join("");
  }
  function o(d) {
    if (d.startsWith('"')) {
      const u = d.slice(1).split('\\"');
      for (let p = 0; p < u.length; ++p) {
        const y = u[p].indexOf('"');
        y !== -1 && (u[p] = u[p].slice(0, y), u.length = p + 1), u[p] = u[p].replaceAll(/\\(.)/g, "$1");
      }
      d = u.join('"');
    }
    return d;
  }
  function l(d) {
    const u = d.indexOf("'");
    if (u === -1)
      return d;
    const p = d.slice(0, u), S = d.slice(u + 1).replace(/^[^']*'/, "");
    return s(p, S);
  }
  function h(d) {
    return !d.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, p, y, S) {
      if (y === "q" || y === "Q")
        return S = S.replaceAll("_", " "), S = S.replaceAll(/=([0-9a-fA-F]{2})/g, function(v, E) {
          return String.fromCharCode(parseInt(E, 16));
        }), s(p, S);
      try {
        S = atob(S);
      } catch {
      }
      return s(p, S);
    });
  }
  return "";
}
function Zm(c, t) {
  const e = new Headers();
  if (!c || !t || typeof t != "object")
    return e;
  for (const i in t) {
    const s = t[i];
    s !== void 0 && e.append(i, s);
  }
  return e;
}
function qu(c) {
  var t;
  return ((t = URL.parse(c)) == null ? void 0 : t.origin) ?? null;
}
function tb({
  responseHeaders: c,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: i
}) {
  const s = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, r = parseInt(c.get("Content-Length"), 10);
  return !Number.isInteger(r) || (s.suggestedLength = r, r <= 2 * e) || i || !t || c.get("Accept-Ranges") !== "bytes" || (c.get("Content-Encoding") || "identity") !== "identity" || (s.allowRangeRequests = !0), s;
}
function eb(c) {
  const t = c.get("Content-Disposition");
  if (t) {
    let e = Vw(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Vu(e))
      return e;
  }
  return null;
}
function bd(c, t) {
  return new _h(`Unexpected server response (${c}) while retrieving PDF "${t}".`, c, c === 404 || c === 0 && t.startsWith("file:"));
}
function ib(c) {
  return c === 200 || c === 206;
}
function sb(c, t, e) {
  return {
    method: "GET",
    headers: c,
    signal: e.signal,
    mode: "cors",
    credentials: t ? "include" : "same-origin",
    redirect: "follow"
  };
}
function nb(c) {
  return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (X(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
}
class qw {
  constructor(t) {
    D(this, "_responseOrigin", null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Zm(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return nt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Xw(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new Yw(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class Xw {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const i = new Headers(t.headers), s = e.url;
    fetch(s, sb(i, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = qu(r.url), !ib(r.status))
        throw bd(r.status, s);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers, {
        allowRangeRequests: o,
        suggestedLength: l
      } = tb({
        responseHeaders: a,
        isHttp: t.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = eb(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new _n("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: nb(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class Yw {
  constructor(t, e, i) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const s = t.source;
    this._withCredentials = s.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append("Range", `bytes=${e}-${i - 1}`);
    const a = s.url;
    fetch(a, sb(r, this._withCredentials, this._abortController)).then((o) => {
      const l = qu(o.url);
      if (l !== t._responseOrigin)
        throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!ib(o.status))
        throw bd(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    await this._readCapability.promise;
    const {
      value: t,
      done: e
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded
    }), {
      value: nb(t),
      done: !1
    });
  }
  cancel(t) {
    var e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const lf = 200, hf = 206;
function Kw(c) {
  const t = c.response;
  return typeof t != "string" ? t : fd(t).buffer;
}
class Jw {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: i
  }) {
    D(this, "_responseOrigin", null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Zm(this.isHttp, e), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  request(t) {
    const e = new XMLHttpRequest(), i = this.currXhrId++, s = this.pendingRequests[i] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers)
      e.setRequestHeader(r, a);
    return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), s.expectedStatus = hf) : s.expectedStatus = lf, e.responseType = "arraybuffer", nt(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), s.onHeadersReceived = t.onHeadersReceived, s.onDone = t.onDone, s.onError = t.onError, s.onProgress = t.onProgress, e.send(null), i;
  }
  onProgress(t, e) {
    var s;
    const i = this.pendingRequests[t];
    i && ((s = i.onProgress) == null || s.call(i, e));
  }
  onStateChange(t, e) {
    const i = this.pendingRequests[t];
    if (!i)
      return;
    const s = i.xhr;
    if (s.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), s.readyState !== 4 || !(t in this.pendingRequests))
      return;
    if (delete this.pendingRequests[t], s.status === 0 && this.isHttp) {
      i.onError(s.status);
      return;
    }
    const r = s.status || lf;
    if (!(r === lf && i.expectedStatus === hf) && r !== i.expectedStatus) {
      i.onError(s.status);
      return;
    }
    const o = Kw(s);
    if (r === hf) {
      const l = s.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? i.onDone({
        begin: parseInt(h[1], 10),
        chunk: o
      }) : (X('Missing or invalid "Content-Range" header.'), i.onError(0));
    } else o ? i.onDone({
      begin: 0,
      chunk: o
    }) : i.onError(s.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    delete this.pendingRequests[t], e.abort();
  }
}
class Qw {
  constructor(t) {
    this._source = t, this._manager = new Jw(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return nt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Zw(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    const i = new t0(this._manager, t, e);
    return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class Zw {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = qu(e.responseURL);
    const i = e.getAllResponseHeaders(), s = new Headers(i ? i.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(": ");
      return [l, h.join(": ")];
    }) : []), {
      allowRangeRequests: r,
      suggestedLength: a
    } = tb({
      responseHeaders: s,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = eb(s), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }
  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    this._storedError = bd(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(t) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class t0 {
  constructor(t, e, i) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: i,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _onHeadersReceived() {
    var e;
    const t = qu((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }
  _close() {
    var t;
    (t = this.onClosed) == null || t.call(this, this);
  }
  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const i of this._requests)
      i.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(t) {
    this._storedError ?? (this._storedError = bd(t, this._url));
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(t) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }
  cancel(t) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const e0 = /^[a-z][a-z0-9\-+.]+:/i;
function i0(c) {
  if (e0.test(c))
    return new URL(c);
  const t = process.getBuiltinModule("url");
  return new URL(t.pathToFileURL(c));
}
class s0 {
  constructor(t) {
    this.source = t, this.url = i0(t.url), nt(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return nt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new n0(this), this._fullRequestReader;
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const i = new r0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0))
      i.cancel(t);
  }
}
class n0 {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const i = process.getBuiltinModule("fs");
    i.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(i.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === "ENOENT" && (s = bd(0, this._url.href)), this._storedError = s, this._headersCapability.reject(s);
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new _n("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class r0 {
  constructor(t, e, i) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const s = t.source;
    this._isStreamingSupported = !s.disableStream;
    const r = process.getBuiltinModule("fs");
    this._setReadableStream(r.createReadStream(this._url, {
      start: e,
      end: i - 1
    }));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var i;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(t).buffer,
      done: !1
    });
  }
  cancel(t) {
    if (!this._readableStream) {
      this._error(t);
      return;
    }
    this._readableStream.destroy(t);
  }
  _error(t) {
    this._storedError = t, this._readCapability.resolve();
  }
  _setReadableStream(t) {
    this._readableStream = t, t.on("readable", () => {
      this._readCapability.resolve();
    }), t.on("end", () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const Jl = Symbol("INITIAL_DATA");
var ni, yc, Xf;
class rb {
  constructor() {
    b(this, yc);
    b(this, ni, /* @__PURE__ */ Object.create(null));
  }
  get(t, e = null) {
    if (e) {
      const s = w(this, yc, Xf).call(this, t);
      return s.promise.then(() => e(s.data)), null;
    }
    const i = n(this, ni)[t];
    if (!i || i.data === Jl)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }
  has(t) {
    const e = n(this, ni)[t];
    return !!e && e.data !== Jl;
  }
  delete(t) {
    const e = n(this, ni)[t];
    return !e || e.data === Jl ? !1 : (delete n(this, ni)[t], !0);
  }
  resolve(t, e = null) {
    const i = w(this, yc, Xf).call(this, t);
    i.data = e, i.resolve();
  }
  clear() {
    var t;
    for (const e in n(this, ni)) {
      const {
        data: i
      } = n(this, ni)[e];
      (t = i == null ? void 0 : i.bitmap) == null || t.close();
    }
    g(this, ni, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const t in n(this, ni)) {
      const {
        data: e
      } = n(this, ni)[t];
      e !== Jl && (yield [t, e]);
    }
  }
}
ni = new WeakMap(), yc = new WeakSet(), Xf = function(t) {
  var e;
  return (e = n(this, ni))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Jl
  });
};
const a0 = 1e5, Lg = 30;
var Vg, Zn, qe, wc, Ac, da, an, vc, Sc, ua, sl, nl, tr, rl, xc, al, fa, Ec, _c, Ut, ol, pa, Cc, er, ll, Pn, ab, ob, Yf, vi, Gd, Kf, lb, hb;
let Rh = (Ut = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: i
  }) {
    b(this, Pn);
    b(this, Zn, Promise.withResolvers());
    b(this, qe, null);
    b(this, wc, !1);
    b(this, Ac, !!((Vg = globalThis.FontInspector) != null && Vg.enabled));
    b(this, da, null);
    b(this, an, null);
    b(this, vc, 0);
    b(this, Sc, 0);
    b(this, ua, null);
    b(this, sl, null);
    b(this, nl, 0);
    b(this, tr, 0);
    b(this, rl, /* @__PURE__ */ Object.create(null));
    b(this, xc, []);
    b(this, al, null);
    b(this, fa, []);
    b(this, Ec, /* @__PURE__ */ new WeakMap());
    b(this, _c, null);
    var l;
    if (t instanceof ReadableStream)
      g(this, al, t);
    else if (typeof t == "object")
      g(this, al, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    g(this, qe, g(this, sl, e)), g(this, tr, i.scale * ss.pixelRatio), g(this, nl, i.rotation), g(this, an, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: s,
      pageHeight: r,
      pageX: a,
      pageY: o
    } = i.rawDims;
    g(this, _c, [1, 0, 0, -1, -a, o + r]), g(this, Sc, s), g(this, vc, r), w(l = Ut, vi, lb).call(l), Cr(e, i), n(this, Zn).promise.finally(() => {
      n(Ut, ll).delete(this), g(this, an, null), g(this, rl, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = ce.platform;
    return J(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    const t = () => {
      n(this, ua).read().then(({
        value: e,
        done: i
      }) => {
        if (i) {
          n(this, Zn).resolve();
          return;
        }
        n(this, da) ?? g(this, da, e.lang), Object.assign(n(this, rl), e.styles), w(this, Pn, ab).call(this, e.items), t();
      }, n(this, Zn).reject);
    };
    return g(this, ua, n(this, al).getReader()), n(Ut, ll).add(this), t(), n(this, Zn).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const i = t.scale * ss.pixelRatio, s = t.rotation;
    if (s !== n(this, nl) && (e == null || e(), g(this, nl, s), Cr(n(this, sl), {
      rotation: s
    })), i !== n(this, tr)) {
      e == null || e(), g(this, tr, i);
      const a = {
        div: null,
        properties: null,
        ctx: w(r = Ut, vi, Gd).call(r, n(this, da))
      };
      for (const o of n(this, fa))
        a.properties = n(this, Ec).get(o), a.div = o, w(this, Pn, Yf).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new _n("TextLayer task cancelled.");
    (e = n(this, ua)) == null || e.cancel(t).catch(() => {
    }), g(this, ua, null), n(this, Zn).reject(t);
  }
  get textDivs() {
    return n(this, fa);
  }
  get textContentItemsStr() {
    return n(this, xc);
  }
  static cleanup() {
    if (!(n(this, ll).size > 0)) {
      n(this, ol).clear();
      for (const {
        canvas: t
      } of n(this, pa).values())
        t.remove();
      n(this, pa).clear();
    }
  }
}, Zn = new WeakMap(), qe = new WeakMap(), wc = new WeakMap(), Ac = new WeakMap(), da = new WeakMap(), an = new WeakMap(), vc = new WeakMap(), Sc = new WeakMap(), ua = new WeakMap(), sl = new WeakMap(), nl = new WeakMap(), tr = new WeakMap(), rl = new WeakMap(), xc = new WeakMap(), al = new WeakMap(), fa = new WeakMap(), Ec = new WeakMap(), _c = new WeakMap(), ol = new WeakMap(), pa = new WeakMap(), Cc = new WeakMap(), er = new WeakMap(), ll = new WeakMap(), Pn = new WeakSet(), ab = function(t) {
  var s, r;
  if (n(this, wc))
    return;
  (r = n(this, an)).ctx ?? (r.ctx = w(s = Ut, vi, Gd).call(s, n(this, da)));
  const e = n(this, fa), i = n(this, xc);
  for (const a of t) {
    if (e.length > a0) {
      X("Ignoring additional textDivs for performance reasons."), g(this, wc, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, qe);
        g(this, qe, document.createElement("span")), n(this, qe).classList.add("markedContent"), a.id && n(this, qe).setAttribute("id", `${a.id}`), o.append(n(this, qe));
      } else a.type === "endMarkedContent" && g(this, qe, n(this, qe).parentNode);
      continue;
    }
    i.push(a.str), w(this, Pn, ob).call(this, a);
  }
}, ob = function(t) {
  var v;
  const e = document.createElement("span"), i = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, fa).push(e);
  const s = z.transform(n(this, _c), t.transform);
  let r = Math.atan2(s[1], s[0]);
  const a = n(this, rl)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Ac) && a.fontSubstitution || a.fontFamily;
  o = Ut.fontFamilyMap.get(o) || o;
  const l = Math.hypot(s[2], s[3]), h = l * w(v = Ut, vi, hb).call(v, o, a, n(this, da));
  let d, u;
  r === 0 ? (d = s[4], u = s[5] - h) : (d = s[4] + h * Math.sin(r), u = s[5] - h * Math.cos(r));
  const p = "calc(var(--total-scale-factor) *", y = e.style;
  n(this, qe) === n(this, sl) ? (y.left = `${(100 * d / n(this, Sc)).toFixed(2)}%`, y.top = `${(100 * u / n(this, vc)).toFixed(2)}%`) : (y.left = `${p}${d.toFixed(2)}px)`, y.top = `${p}${u.toFixed(2)}px)`), y.fontSize = `${p}${(n(Ut, er) * l).toFixed(2)}px)`, y.fontFamily = o, i.fontSize = l, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, Ac) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (i.angle = r * (180 / Math.PI));
  let S = !1;
  if (t.str.length > 1)
    S = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const E = Math.abs(t.transform[0]), x = Math.abs(t.transform[3]);
    E !== x && Math.max(E, x) / Math.min(E, x) > 1.5 && (S = !0);
  }
  if (S && (i.canvasWidth = a.vertical ? t.height : t.width), n(this, Ec).set(e, i), n(this, an).div = e, n(this, an).properties = i, w(this, Pn, Yf).call(this, n(this, an)), i.hasText && n(this, qe).append(e), i.hasEOL) {
    const E = document.createElement("br");
    E.setAttribute("role", "presentation"), n(this, qe).append(E);
  }
}, Yf = function(t) {
  var o;
  const {
    div: e,
    properties: i,
    ctx: s
  } = t, {
    style: r
  } = e;
  let a = "";
  if (n(Ut, er) > 1 && (a = `scale(${1 / n(Ut, er)})`), i.canvasWidth !== 0 && i.hasText) {
    const {
      fontFamily: l
    } = r, {
      canvasWidth: h,
      fontSize: d
    } = i;
    w(o = Ut, vi, Kf).call(o, s, d * n(this, tr), l);
    const {
      width: u
    } = s.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * n(this, tr) / u}) ${a}`);
  }
  i.angle !== 0 && (a = `rotate(${i.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, vi = new WeakSet(), Gd = function(t = null) {
  let e = n(this, pa).get(t || (t = ""));
  if (!e) {
    const i = document.createElement("canvas");
    i.className = "hiddenCanvasElement", i.lang = t, document.body.append(i), e = i.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, pa).set(t, e), n(this, Cc).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, Kf = function(t, e, i) {
  const s = n(this, Cc).get(t);
  e === s.size && i === s.family || (t.font = `${e}px ${i}`, s.size = e, s.family = i);
}, lb = function() {
  if (n(this, er) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), g(this, er, t.getBoundingClientRect().height), t.remove();
}, hb = function(t, e, i) {
  const s = n(this, ol).get(t);
  if (s)
    return s;
  const r = w(this, vi, Gd).call(this, i);
  r.canvas.width = r.canvas.height = Lg, w(this, vi, Kf).call(this, r, Lg, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let h = 0.8;
  return o ? h = o / (o + l) : (ce.platform.isFirefox && X("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, ol).set(t, h), h;
}, b(Ut, vi), b(Ut, ol, /* @__PURE__ */ new Map()), b(Ut, pa, /* @__PURE__ */ new Map()), b(Ut, Cc, /* @__PURE__ */ new WeakMap()), b(Ut, er, null), b(Ut, ll, /* @__PURE__ */ new Set()), Ut);
const o0 = 100;
function Kp(c = {}) {
  typeof c == "string" || c instanceof URL ? c = {
    url: c
  } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
    data: c
  });
  const t = new Jf(), {
    docId: e
  } = t, i = c.url ? gw(c.url) : null, s = c.data ? mw(c.data) : null, r = c.httpHeaders || null, a = c.withCredentials === !0, o = c.password ?? null, l = c.range instanceof Jp ? c.range : null, h = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : 2 ** 16;
  let d = c.worker instanceof Vl ? c.worker : null;
  const u = c.verbosity, p = typeof c.docBaseUrl == "string" && !gd(c.docBaseUrl) ? c.docBaseUrl : null, y = _d(c.cMapUrl), S = c.cMapPacked !== !1, v = c.CMapReaderFactory || (Be ? xw : wg), E = _d(c.iccUrl), x = _d(c.standardFontDataUrl), T = c.StandardFontDataFactory || (Be ? Ew : Ag), _ = _d(c.wasmUrl), f = c.WasmFactory || (Be ? _w : vg), m = c.stopAtErrors !== !0, A = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1, C = c.isEvalSupported !== !1, P = typeof c.isOffscreenCanvasSupported == "boolean" ? c.isOffscreenCanvasSupported : !Be, R = typeof c.isImageDecoderSupported == "boolean" ? c.isImageDecoderSupported : !Be && (ce.platform.isFirefox || !globalThis.chrome), M = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1, k = typeof c.disableFontFace == "boolean" ? c.disableFontFace : Be, L = c.fontExtraProperties === !0, N = c.enableXfa === !0, I = c.ownerDocument || globalThis.document, j = c.disableRange === !0, H = c.disableStream === !0, B = c.disableAutoFetch === !0, tt = c.pdfBug === !0, st = c.CanvasFactory || (Be ? Sw : ww), ee = c.FilterFactory || (Be ? vw : Aw), Je = c.enableHWA === !0, rt = c.useWasm !== !1, lt = l ? l.length : c.length ?? NaN, ie = typeof c.useSystemFonts == "boolean" ? c.useSystemFonts : !Be && !k, de = typeof c.useWorkerFetch == "boolean" ? c.useWorkerFetch : !!(v === wg && T === Ag && f === vg && y && x && _ && eh(y, document.baseURI) && eh(x, document.baseURI) && eh(_, document.baseURI)), ve = null;
  Ky(u);
  const yt = {
    canvasFactory: new st({
      ownerDocument: I,
      enableHWA: Je
    }),
    filterFactory: new ee({
      docId: e,
      ownerDocument: I
    }),
    cMapReaderFactory: de ? null : new v({
      baseUrl: y,
      isCompressed: S
    }),
    standardFontDataFactory: de ? null : new T({
      baseUrl: x
    }),
    wasmFactory: de ? null : new f({
      baseUrl: _
    })
  };
  d || (d = Vl.create({
    verbosity: u,
    port: ts.workerPort
  }), t._worker = d);
  const Bi = {
    docId: e,
    apiVersion: "5.4.296",
    data: s,
    password: o,
    disableAutoFetch: B,
    rangeChunkSize: h,
    length: lt,
    docBaseUrl: p,
    enableXfa: N,
    evaluatorOptions: {
      maxImageSize: A,
      disableFontFace: k,
      ignoreErrors: m,
      isEvalSupported: C,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: R,
      canvasMaxAreaInBytes: M,
      fontExtraProperties: L,
      useSystemFonts: ie,
      useWasm: rt,
      useWorkerFetch: de,
      cMapUrl: y,
      iccUrl: E,
      standardFontDataUrl: x,
      wasmUrl: _
    }
  }, rs = {
    ownerDocument: I,
    pdfBug: tt,
    styleElement: ve,
    loadingParams: {
      disableAutoFetch: B,
      enableXfa: N
    }
  };
  return d.promise.then(function() {
    if (t.destroyed)
      throw new Error("Loading aborted");
    if (d.destroyed)
      throw new Error("Worker was destroyed");
    const Ns = d.messageHandler.sendWithPromise("GetDocRequest", Bi, s ? [s.buffer] : null);
    let De;
    if (l)
      De = new Gw(l, {
        disableRange: j,
        disableStream: H
      });
    else if (!s) {
      if (!i)
        throw new Error("getDocument - no `url` parameter provided.");
      const Tt = eh(i) ? qw : Be ? s0 : Qw;
      De = new Tt({
        url: i,
        length: lt,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: j,
        disableStream: H
      });
    }
    return Ns.then((Tt) => {
      if (t.destroyed)
        throw new Error("Loading aborted");
      if (d.destroyed)
        throw new Error("Worker was destroyed");
      const Rt = new oh(e, Tt, d.port), Yt = new c0(Rt, t, De, rs, yt, Je);
      t._transport = Yt, Rt.send("Ready", null);
    });
  }).catch(t._capability.reject), t;
}
var Du;
const Lu = class Lu {
  constructor() {
    D(this, "_capability", Promise.withResolvers());
    D(this, "_transport", null);
    D(this, "_worker", null);
    D(this, "docId", `d${Kt(Lu, Du)._++}`);
    D(this, "destroyed", !1);
    D(this, "onPassword", null);
    D(this, "onProgress", null);
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, i, s;
    this.destroyed = !0;
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (i = this._worker) != null && i.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (s = this._worker) == null || s.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
};
Du = new WeakMap(), b(Lu, Du, 0);
let Jf = Lu;
var ga, Tc, Pc, Rc, Mc, qg;
let Jp = (qg = class {
  constructor(t, e, i = !1, s = null) {
    b(this, ga, Promise.withResolvers());
    b(this, Tc, []);
    b(this, Pc, []);
    b(this, Rc, []);
    b(this, Mc, []);
    this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s;
  }
  addRangeListener(t) {
    n(this, Mc).push(t);
  }
  addProgressListener(t) {
    n(this, Rc).push(t);
  }
  addProgressiveReadListener(t) {
    n(this, Pc).push(t);
  }
  addProgressiveDoneListener(t) {
    n(this, Tc).push(t);
  }
  onDataRange(t, e) {
    for (const i of n(this, Mc))
      i(t, e);
  }
  onDataProgress(t, e) {
    n(this, ga).promise.then(() => {
      for (const i of n(this, Rc))
        i(t, e);
    });
  }
  onDataProgressiveRead(t) {
    n(this, ga).promise.then(() => {
      for (const e of n(this, Pc))
        e(t);
    });
  }
  onDataProgressiveDone() {
    n(this, ga).promise.then(() => {
      for (const t of n(this, Tc))
        t();
    });
  }
  transportReady() {
    n(this, ga).resolve();
  }
  requestDataRange(t, e) {
    Et("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}, ga = new WeakMap(), Tc = new WeakMap(), Pc = new WeakMap(), Rc = new WeakMap(), Mc = new WeakMap(), qg);
class l0 {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return J(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var on, ma, ph;
class h0 {
  constructor(t, e, i, s = !1) {
    b(this, ma);
    b(this, on, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = s ? new ug() : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new rb(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: i = 0,
    offsetY: s = 0,
    dontFlip: r = !1
  } = {}) {
    return new pd({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return J(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: i,
    intent: s = "display",
    annotationMode: r = Ds.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: h = null,
    pageColors: d = null,
    printAnnotationStorage: u = null,
    isEditing: p = !1,
    recordOperations: y = !1,
    operationsFilter: S = null
  }) {
    var R, M, k;
    (R = this._stats) == null || R.time("Overall");
    const v = this._transport.getRenderingIntent(s, r, u, p), {
      renderingIntent: E,
      cacheKey: x
    } = v;
    g(this, on, !1), l || (l = this._transport.getOptionalContentConfig(E));
    let T = this._intentStates.get(x);
    T || (T = /* @__PURE__ */ Object.create(null), this._intentStates.set(x, T)), T.streamReaderCancelTimeout && (clearTimeout(T.streamReaderCancelTimeout), T.streamReaderCancelTimeout = null);
    const _ = !!(E & bi.PRINT);
    T.displayReadyCapability || (T.displayReadyCapability = Promise.withResolvers(), T.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (M = this._stats) == null || M.time("Page Request"), this._pumpOperatorList(v));
    const f = !!(this._pdfBug && ((k = globalThis.StepperManager) != null && k.enabled)), m = !this.recordedBBoxes && (y || f), A = (L) => {
      var N, I;
      if (T.renderTasks.delete(C), m) {
        const j = (N = C.gfx) == null ? void 0 : N.dependencyTracker.take();
        j && (C.stepper && C.stepper.setOperatorBBoxes(j, C.gfx.dependencyTracker.takeDebugMetadata()), y && (this.recordedBBoxes = j));
      }
      _ && g(this, on, !0), w(this, ma, ph).call(this), L ? (C.capability.reject(L), this._abortOperatorList({
        intentState: T,
        reason: L instanceof Error ? L : new Error(L)
      })) : C.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (I = globalThis.Stats) != null && I.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, C = new Qf({
      callback: A,
      params: {
        canvas: e,
        canvasContext: t,
        dependencyTracker: m ? new Tw(e, T.operatorList.length, f) : null,
        viewport: i,
        transform: a,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: h,
      operatorList: T.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !_,
      pdfBug: this._pdfBug,
      pageColors: d,
      enableHWA: this._transport.enableHWA,
      operationsFilter: S
    });
    (T.renderTasks || (T.renderTasks = /* @__PURE__ */ new Set())).add(C);
    const P = C.task;
    return Promise.all([T.displayReadyCapability.promise, l]).then(([L, N]) => {
      var I;
      if (this.destroyed) {
        A();
        return;
      }
      if ((I = this._stats) == null || I.time("Rendering"), !(N.renderingIntent & E))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      C.initializeGraphics({
        transparency: L,
        optionalContentConfig: N
      }), C.operatorListChanged();
    }).catch(A), P;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Ds.ENABLE,
    printAnnotationStorage: i = null,
    isEditing: s = !1
  } = {}) {
    var h;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, i, s, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(s) {
        return s.items.length;
      }
    });
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((i) => Ch.textContent(i));
    const e = this.streamTextContent(t);
    return new Promise(function(i, s) {
      function r() {
        a.read().then(function({
          value: l,
          done: h
        }) {
          if (h) {
            i(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
        }, s);
      }
      const a = e.getReader(), o = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      r();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const i of e.renderTasks)
          t.push(i.completed), i.cancel();
    return this.objs.clear(), g(this, on, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    g(this, on, !0);
    const e = w(this, ma, ph).call(this);
    return t && e && this._stats && (this._stats = new ug()), e;
  }
  _startRenderPage(t, e) {
    var s, r;
    const i = this._intentStates.get(e);
    i && ((s = this._stats) == null || s.timeEnd("Page Request"), (r = i.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let i = 0, s = t.length; i < s; i++)
      e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const i of e.renderTasks)
      i.operatorListChanged();
    t.lastChunk && w(this, ma, ph).call(this);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: i,
    modifiedIds: s
  }) {
    const {
      map: r,
      transfer: a
    } = i, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: s
    }, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const d = () => {
      l.read().then(({
        value: u,
        done: p
      }) => {
        if (p) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, h), d());
      }, (u) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const p of h.renderTasks)
              p.operatorListChanged();
            w(this, ma, ph).call(this);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(u);
          else
            throw u;
        }
      });
    };
    d();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: i = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof ju) {
          let s = o0;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (s += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, s);
          return;
        }
      }
      if (t.streamReader.cancel(new _n(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [s, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(s);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
on = new WeakMap(), ma = new WeakSet(), ph = function() {
  if (!n(this, on) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), g(this, on, !1), !0;
};
var ir, qi, ln, ba, Iu, ya, wa, He, Wd, cb, db, gh, hl, jd;
const Mt = class Mt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: i = Jy()
  } = {}) {
    b(this, He);
    b(this, ir, Promise.withResolvers());
    b(this, qi, null);
    b(this, ln, null);
    b(this, ba, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = i, e) {
      if (n(Mt, wa).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      n(Mt, wa).set(e, this), w(this, He, cb).call(this, e);
    } else
      w(this, He, db).call(this);
  }
  get promise() {
    return n(this, ir).promise;
  }
  get port() {
    return n(this, ln);
  }
  get messageHandler() {
    return n(this, qi);
  }
  destroy() {
    var t, e;
    this.destroyed = !0, (t = n(this, ba)) == null || t.terminate(), g(this, ba, null), n(Mt, wa).delete(n(this, ln)), g(this, ln, null), (e = n(this, qi)) == null || e.destroy(), g(this, qi, null);
  }
  static create(t) {
    const e = n(this, wa).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Mt(t);
  }
  static get workerSrc() {
    if (ts.workerSrc)
      return ts.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return J(this, "_setupFakeWorkerGlobal", (async () => n(this, hl, jd) ? n(this, hl, jd) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
ir = new WeakMap(), qi = new WeakMap(), ln = new WeakMap(), ba = new WeakMap(), Iu = new WeakMap(), ya = new WeakMap(), wa = new WeakMap(), He = new WeakSet(), Wd = function() {
  n(this, ir).resolve(), n(this, qi).send("configure", {
    verbosity: this.verbosity
  });
}, cb = function(t) {
  g(this, ln, t), g(this, qi, new oh("main", "worker", t)), n(this, qi).on("ready", () => {
  }), w(this, He, Wd).call(this);
}, db = function() {
  if (n(Mt, ya) || n(Mt, hl, jd)) {
    w(this, He, gh).call(this);
    return;
  }
  let {
    workerSrc: t
  } = Mt;
  try {
    Mt._isSameOrigin(window.location, t) || (t = Mt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), i = new oh("main", "worker", e), s = () => {
      r.abort(), i.destroy(), e.terminate(), this.destroyed ? n(this, ir).reject(new Error("Worker was destroyed")) : w(this, He, gh).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, ba) || s();
    }, {
      signal: r.signal
    }), i.on("test", (o) => {
      if (r.abort(), this.destroyed || !o) {
        s();
        return;
      }
      g(this, qi, i), g(this, ln, e), g(this, ba, e), w(this, He, Wd).call(this);
    }), i.on("ready", (o) => {
      if (r.abort(), this.destroyed) {
        s();
        return;
      }
      try {
        a();
      } catch {
        w(this, He, gh).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      i.send("test", o, [o.buffer]);
    };
    a();
    return;
  } catch {
    Wu("The worker has been disabled.");
  }
  w(this, He, gh).call(this);
}, gh = function() {
  n(Mt, ya) || (X("Setting up fake worker."), g(Mt, ya, !0)), Mt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, ir).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new yw();
    g(this, ln, e);
    const i = `fake${Kt(Mt, Iu)._++}`, s = new oh(i + "_worker", i, e);
    t.setup(s, e), g(this, qi, new oh(i, i + "_worker", e)), w(this, He, Wd).call(this);
  }).catch((t) => {
    n(this, ir).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, hl = new WeakSet(), jd = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(Mt, hl), b(Mt, Iu, 0), b(Mt, ya, !1), b(Mt, wa, /* @__PURE__ */ new WeakMap()), Be && (g(Mt, ya, !0), ts.workerSrc || (ts.workerSrc = "./pdf.worker.mjs")), Mt._isSameOrigin = (t, e) => {
  const i = URL.parse(t);
  if (!(i != null && i.origin) || i.origin === "null")
    return !1;
  const s = new URL(e, i);
  return i.origin === s.origin;
}, Mt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
}, Mt.fromPort = (t) => {
  if (aw("`PDFWorker.fromPort` - please use `PDFWorker.create` instead."), !(t != null && t.port))
    throw new Error("PDFWorker.fromPort - invalid method signature.");
  return Mt.create(t);
};
let Vl = Mt;
var hn, Ss, cl, dl, cn, Aa, mh;
class c0 {
  constructor(t, e, i, s, r, a) {
    b(this, Aa);
    b(this, hn, /* @__PURE__ */ new Map());
    b(this, Ss, /* @__PURE__ */ new Map());
    b(this, cl, /* @__PURE__ */ new Map());
    b(this, dl, /* @__PURE__ */ new Map());
    b(this, cn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new rb(), this.fontLoader = new fw({
      ownerDocument: s.ownerDocument,
      styleElement: s.styleElement
    }), this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }
  get annotationStorage() {
    return J(this, "annotationStorage", new qp());
  }
  getRenderingIntent(t, e = Ds.ENABLE, i = null, s = !1, r = !1) {
    let a = bi.DISPLAY, o = Ff;
    switch (t) {
      case "any":
        a = bi.ANY;
        break;
      case "display":
        break;
      case "print":
        a = bi.PRINT;
        break;
      default:
        X(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & bi.PRINT && i instanceof zm ? i : this.annotationStorage;
    switch (e) {
      case Ds.DISABLE:
        a += bi.ANNOTATIONS_DISABLE;
        break;
      case Ds.ENABLE:
        break;
      case Ds.ENABLE_FORMS:
        a += bi.ANNOTATIONS_FORMS;
        break;
      case Ds.ENABLE_STORAGE:
        a += bi.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        X(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    s && (a += bi.IS_EDITING), r && (a += bi.OPLIST);
    const {
      ids: h,
      hash: d
    } = l.modifiedIds, u = [a, o.hash, d];
    return {
      renderingIntent: a,
      cacheKey: u.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var i;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (i = n(this, cn)) == null || i.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const s of n(this, Ss).values())
      t.push(s._destroy());
    n(this, Ss).clear(), n(this, cl).clear(), n(this, dl).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var s, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, hn).clear(), this.filterFactory.destroy(), Rh.cleanup(), (s = this._networkStream) == null || s.cancelAllRequests(new _n("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (i, s) => {
      nt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total
        };
      }, s.onPull = () => {
        this._fullReader.read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            s.close();
            return;
          }
          nt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          s.error(r);
        });
      }, s.onCancel = (r) => {
        this._fullReader.cancel(r), s.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (i) => {
      var o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a
      } = this._fullReader;
      return (!s || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        var h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total
        });
      }), {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (i, s) => {
      nt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const r = this._networkStream.getRangeReader(i.begin, i.end);
      if (!r) {
        s.close();
        return;
      }
      s.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            s.close();
            return;
          }
          nt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), s.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          s.error(a);
        });
      }, s.onCancel = (a) => {
        r.cancel(a), s.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: i
    }) => {
      this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new l0(i, this));
    }), t.on("DocException", (i) => {
      e._capability.reject(Ue(i));
    }), t.on("PasswordRequest", (i) => {
      g(this, cn, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Ue(i);
        const s = (r) => {
          r instanceof Error ? n(this, cn).reject(r) : n(this, cn).resolve({
            password: r
          });
        };
        e.onPassword(s, i.code);
      } catch (s) {
        n(this, cn).reject(s);
      }
      return n(this, cn).promise;
    }), t.on("DataLoaded", (i) => {
      var s;
      (s = e.onProgress) == null || s.call(e, {
        loaded: i.length,
        total: i.length
      }), this.downloadInfoCapability.resolve(i);
    }), t.on("StartRenderPage", (i) => {
      if (this.destroyed)
        return;
      n(this, Ss).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
    }), t.on("commonobj", ([i, s, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(i))
        return null;
      switch (s) {
        case "Font":
          if ("error" in r) {
            const u = r.error;
            X(`Error during font loading: ${u}`), this.commonObjs.resolve(i, u);
            break;
          }
          const o = new Vf(r), l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, p) => globalThis.FontInspector.fontAdded(u, p) : null, h = new pw(o, l, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(h).catch(() => t.sendWithPromise("FontFallback", {
            id: i
          })).finally(() => {
            !h.fontExtraProperties && h.data && h.clearData(), this.commonObjs.resolve(i, h);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: d
          } = r;
          nt(d, "The imageRef must be defined.");
          for (const u of n(this, Ss).values())
            for (const [, p] of u.objs)
              if ((p == null ? void 0 : p.ref) === d)
                return p.dataLen ? (this.commonObjs.resolve(i, structuredClone(p)), p.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(i, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${s}`);
      }
      return null;
    }), t.on("obj", ([i, s, r, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = n(this, Ss).get(s);
      if (!o.objs.has(i)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case "Image":
          case "Pattern":
            o.objs.resolve(i, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (i) => {
      var s;
      this.destroyed || (s = e.onProgress) == null || s.call(e, {
        loaded: i.loaded,
        total: i.total
      });
    }), t.on("FetchBinaryData", async (i) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      const s = this[i.type];
      if (!s)
        throw new Error(`${i.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return s.fetch(i);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var i;
    this.annotationStorage.size <= 0 && X("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: t,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((i = this._fullReader) == null ? void 0 : i.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, i = n(this, cl).get(e);
    if (i)
      return i;
    const s = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((r) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      r.refStr && n(this, dl).set(r.refStr, t);
      const a = new h0(e, r, this, this._params.pdfBug);
      return n(this, Ss).set(e, a), a;
    });
    return n(this, cl).set(e, s), s;
  }
  getPageIndex(t) {
    return Nf(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e
    });
  }
  getFieldObjects() {
    return w(this, Aa, mh).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return w(this, Aa, mh).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: e
    });
  }
  getDocJSActions() {
    return w(this, Aa, mh).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return w(this, Aa, mh).call(this, "GetOptionalContentConfig").then((e) => new zw(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata", e = n(this, hn).get(t);
    if (e)
      return e;
    const i = this.messageHandler.sendWithPromise(t, null).then((s) => {
      var r, a;
      return {
        info: s[0],
        metadata: s[1] ? new $w(s[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null
      };
    });
    return n(this, hn).set(t, i), i;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, Ss).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, hn).clear(), this.filterFactory.destroy(!0), Rh.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!Nf(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, dl).get(e) ?? null;
  }
}
hn = new WeakMap(), Ss = new WeakMap(), cl = new WeakMap(), dl = new WeakMap(), cn = new WeakMap(), Aa = new WeakSet(), mh = function(t, e = null) {
  const i = n(this, hn).get(t);
  if (i)
    return i;
  const s = this.messageHandler.sendWithPromise(t, e);
  return n(this, hn).set(t, s), s;
};
var sr;
class d0 {
  constructor(t) {
    b(this, sr, null);
    D(this, "onContinue", null);
    D(this, "onError", null);
    g(this, sr, t);
  }
  get promise() {
    return n(this, sr).capability.promise;
  }
  cancel(t = 0) {
    n(this, sr).cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = n(this, sr).operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = n(this, sr);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
sr = new WeakMap();
var nr, va;
const Fr = class Fr {
  constructor({
    callback: t,
    params: e,
    objs: i,
    commonObjs: s,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: p = null,
    enableHWA: y = !1,
    operationsFilter: S = null
  }) {
    b(this, nr, null);
    this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new d0(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = y, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = S;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var l, h;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (n(Fr, va).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(Fr, va).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: i,
      transform: s,
      background: r,
      dependencyTracker: a
    } = this.params, o = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new mo(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: s,
      viewport: i,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (h = this.graphicsReadyCallback) == null || h.call(this);
  }
  cancel(t = null, e = 0) {
    var i, s, r;
    this.running = !1, this.cancelled = !0, (i = this.gfx) == null || i.endDrawing(), n(this, nr) && (window.cancelAnimationFrame(n(this, nr)), g(this, nr, null)), n(Fr, va).delete(this._canvas), t || (t = new ju(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (s = this.task).onError) == null || r.call(s, t);
  }
  operatorListChanged() {
    var t, e;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.gfx.dependencyTracker) == null || t.growOperationsCount(this.operatorList.fnArray.length), (e = this.stepper) == null || e.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? g(this, nr, window.requestAnimationFrame(() => {
      g(this, nr, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Fr, va).delete(this._canvas), this.callback())));
  }
};
nr = new WeakMap(), va = new WeakMap(), b(Fr, va, /* @__PURE__ */ new WeakSet());
let Qf = Fr;
const ub = "5.4.296", fb = "f56dc8601";
var ri, Sa, ul, Zt, kc, fl, dn, Dc, rr, Xi, Lc, bt, Zf, tp, ep, kr, pb, kn;
const ze = class ze {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    b(this, bt);
    b(this, ri, null);
    b(this, Sa, null);
    b(this, ul);
    b(this, Zt, null);
    b(this, kc, !1);
    b(this, fl, !1);
    b(this, dn, null);
    b(this, Dc);
    b(this, rr, null);
    b(this, Xi, null);
    var i, s;
    t ? (g(this, fl, !1), g(this, dn, t)) : g(this, fl, !0), g(this, Xi, (t == null ? void 0 : t._uiManager) || e), g(this, Dc, n(this, Xi)._eventBus), g(this, ul, ((i = t == null ? void 0 : t.color) == null ? void 0 : i.toUpperCase()) || ((s = n(this, Xi)) == null ? void 0 : s.highlightColors.values().next().value) || "#FFFF98"), n(ze, Lc) || g(ze, Lc, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return J(this, "_keyboardManager", new md([[["Escape", "mac+Escape"], ze.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], ze.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], ze.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], ze.prototype._moveToPrevious], [["Home", "mac+Home"], ze.prototype._moveToBeginning], [["End", "mac+End"], ze.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = g(this, ri, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", n(this, dn) && (t.ariaControls = `${n(this, dn).id}_colorpicker_dropdown`);
    const e = n(this, Xi)._signal;
    t.addEventListener("click", w(this, bt, kr).bind(this), {
      signal: e
    }), t.addEventListener("keydown", w(this, bt, ep).bind(this), {
      signal: e
    });
    const i = g(this, Sa, document.createElement("span"));
    return i.className = "swatch", i.ariaHidden = "true", i.style.backgroundColor = n(this, ul), t.append(i), t;
  }
  renderMainDropdown() {
    const t = g(this, Zt, w(this, bt, Zf).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, ri)) {
      w(this, bt, kr).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && w(this, bt, tp).call(this, e, t);
  }
  _moveToNext(t) {
    var e, i;
    if (!n(this, bt, kn)) {
      w(this, bt, kr).call(this, t);
      return;
    }
    if (t.target === n(this, ri)) {
      (e = n(this, Zt).firstChild) == null || e.focus();
      return;
    }
    (i = t.target.nextSibling) == null || i.focus();
  }
  _moveToPrevious(t) {
    var e, i;
    if (t.target === ((e = n(this, Zt)) == null ? void 0 : e.firstChild) || t.target === n(this, ri)) {
      n(this, bt, kn) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, bt, kn) || w(this, bt, kr).call(this, t), (i = t.target.previousSibling) == null || i.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, bt, kn)) {
      w(this, bt, kr).call(this, t);
      return;
    }
    (e = n(this, Zt).firstChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, bt, kn)) {
      w(this, bt, kr).call(this, t);
      return;
    }
    (e = n(this, Zt).lastChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, Zt)) == null || t.classList.add("hidden"), n(this, ri).ariaExpanded = "false", (e = n(this, rr)) == null || e.abort(), g(this, rr, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, fl)) {
      if (!n(this, bt, kn)) {
        (t = n(this, dn)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, ri).focus({
        preventScroll: !0,
        focusVisible: n(this, kc)
      });
    }
  }
  updateColor(t) {
    if (n(this, Sa) && (n(this, Sa).style.backgroundColor = t), !n(this, Zt))
      return;
    const e = n(this, Xi).highlightColors.values();
    for (const i of n(this, Zt).children)
      i.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    var t, e;
    (t = n(this, ri)) == null || t.remove(), g(this, ri, null), g(this, Sa, null), (e = n(this, Zt)) == null || e.remove(), g(this, Zt, null);
  }
};
ri = new WeakMap(), Sa = new WeakMap(), ul = new WeakMap(), Zt = new WeakMap(), kc = new WeakMap(), fl = new WeakMap(), dn = new WeakMap(), Dc = new WeakMap(), rr = new WeakMap(), Xi = new WeakMap(), Lc = new WeakMap(), bt = new WeakSet(), Zf = function() {
  const t = document.createElement("div"), e = n(this, Xi)._signal;
  t.addEventListener("contextmenu", Si, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), n(this, dn) && (t.id = `${n(this, dn).id}_colorpicker_dropdown`);
  for (const [i, s] of n(this, Xi).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", s), r.title = i, r.setAttribute("data-l10n-id", n(ze, Lc)[i]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = s, r.ariaSelected = s === n(this, ul), r.addEventListener("click", w(this, bt, tp).bind(this, s), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", w(this, bt, ep).bind(this), {
    signal: e
  }), t;
}, tp = function(t, e) {
  e.stopPropagation(), n(this, Dc).dispatch("switchannotationeditorparams", {
    source: this,
    type: it.HIGHLIGHT_COLOR,
    value: t
  }), this.updateColor(t);
}, ep = function(t) {
  ze._keyboardManager.exec(this, t);
}, kr = function(t) {
  if (n(this, bt, kn)) {
    this.hideDropdown();
    return;
  }
  if (g(this, kc, t.detail === 0), n(this, rr) || (g(this, rr, new AbortController()), window.addEventListener("pointerdown", w(this, bt, pb).bind(this), {
    signal: n(this, Xi).combinedSignal(n(this, rr))
  })), n(this, ri).ariaExpanded = "true", n(this, Zt)) {
    n(this, Zt).classList.remove("hidden");
    return;
  }
  const e = g(this, Zt, w(this, bt, Zf).call(this));
  n(this, ri).append(e);
}, pb = function(t) {
  var e;
  (e = n(this, Zt)) != null && e.contains(t.target) || this.hideDropdown();
}, kn = function() {
  return n(this, Zt) && !n(this, Zt).classList.contains("hidden");
}, b(ze, Lc, null);
let Mh = ze;
var xs, Ic, pl, Fc;
const Nr = class Nr {
  constructor(t) {
    b(this, xs, null);
    b(this, Ic, null);
    b(this, pl, null);
    g(this, Ic, t), g(this, pl, t._uiManager), n(Nr, Fc) || g(Nr, Fc, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (n(this, xs))
      return n(this, xs);
    const {
      editorType: t,
      colorType: e,
      colorValue: i
    } = n(this, Ic), s = g(this, xs, document.createElement("input"));
    return s.type = "color", s.value = i || "#000000", s.className = "basicColorPicker", s.tabIndex = 0, s.setAttribute("data-l10n-id", n(Nr, Fc)[t]), s.addEventListener("input", () => {
      n(this, pl).updateParams(e, s.value);
    }, {
      signal: n(this, pl)._signal
    }), s;
  }
  update(t) {
    n(this, xs) && (n(this, xs).value = t);
  }
  destroy() {
    var t;
    (t = n(this, xs)) == null || t.remove(), g(this, xs, null);
  }
  hideDropdown() {
  }
};
xs = new WeakMap(), Ic = new WeakMap(), pl = new WeakMap(), Fc = new WeakMap(), b(Nr, Fc, null);
let bu = Nr;
function Ig(c) {
  return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, "0");
}
function Ql(c) {
  return Math.max(0, Math.min(255, 255 * c));
}
class Fg {
  static CMYK_G([t, e, i, s]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Ql(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = Ig(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, i]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * i];
  }
  static RGB_rgb(t) {
    return t.map(Ql);
  }
  static RGB_HTML(t) {
    return `#${t.map(Ig).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, i, s]) {
    return ["RGB", 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)];
  }
  static CMYK_rgb([t, e, i, s]) {
    return [Ql(1 - Math.min(1, t + s)), Ql(1 - Math.min(1, i + s)), Ql(1 - Math.min(1, e + s))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, i]) {
    const s = 1 - t, r = 1 - e, a = 1 - i, o = Math.min(s, r, a);
    return ["CMYK", s, r, a, o];
  }
}
class u0 {
  create(t, e, i = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const s = this._createSVG("svg:svg");
    return s.setAttribute("version", "1.1"), i || (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)), s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("viewBox", `0 0 ${t} ${e}`), s;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    Et("Abstract method `_createSVG` called.");
  }
}
class kh extends u0 {
  _createSVG(t) {
    return document.createElementNS(Os, t);
  }
}
const f0 = 9, Ya = /* @__PURE__ */ new WeakSet(), p0 = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Ng {
  static create(t) {
    switch (t.data.annotationType) {
      case Gt.LINK:
        return new Qp(t);
      case Gt.TEXT:
        return new m0(t);
      case Gt.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new b0(t);
          case "Btn":
            return t.data.radioButton ? new bb(t) : t.data.checkBox ? new w0(t) : new A0(t);
          case "Ch":
            return new v0(t);
          case "Sig":
            return new y0(t);
        }
        return new Qa(t);
      case Gt.POPUP:
        return new sp(t);
      case Gt.FREETEXT:
        return new Sb(t);
      case Gt.LINE:
        return new x0(t);
      case Gt.SQUARE:
        return new E0(t);
      case Gt.CIRCLE:
        return new _0(t);
      case Gt.POLYLINE:
        return new xb(t);
      case Gt.CARET:
        return new T0(t);
      case Gt.INK:
        return new Zp(t);
      case Gt.POLYGON:
        return new C0(t);
      case Gt.HIGHLIGHT:
        return new Eb(t);
      case Gt.UNDERLINE:
        return new P0(t);
      case Gt.SQUIGGLY:
        return new R0(t);
      case Gt.STRIKEOUT:
        return new M0(t);
      case Gt.STAMP:
        return new _b(t);
      case Gt.FILEATTACHMENT:
        return new k0(t);
      default:
        return new Ot(t);
    }
  }
}
var xa, gl, Li, Nc, ip;
const lg = class lg {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: i = !1,
    createQuadrilaterals: s = !1
  } = {}) {
    b(this, Nc);
    b(this, xa, null);
    b(this, gl, !1);
    b(this, Li, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(i)), s && this._createQuadrilaterals();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: e
  }) {
    return !!(t != null && t.str || e != null && e.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return lg._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    var i;
    const {
      data: t
    } = this, e = (i = this.annotationStorage) == null ? void 0 : i.getEditor(t.id);
    return e ? e.getData() : t;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    var o;
    const t = (o = this.annotationStorage) == null ? void 0 : o.getEditor(this.data.id);
    if (t)
      return t.commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: i,
      rect: s
    } = this.data;
    let r = -1 / 0, a = -1 / 0;
    if ((e == null ? void 0 : e.length) >= 8) {
      for (let l = 0; l < e.length; l += 8)
        e[l + 1] > a ? (a = e[l + 1], r = e[l + 2]) : e[l + 1] === a && (r = Math.max(r, e[l + 2]));
      return [r, a];
    }
    if ((i == null ? void 0 : i.length) >= 1) {
      for (const l of i)
        for (let h = 0, d = l.length; h < d; h += 2)
          l[h + 1] > a ? (a = l[h + 1], r = l[h]) : l[h + 1] === a && (r = Math.max(r, l[h]));
      if (r !== 1 / 0)
        return [r, a];
    }
    return s ? [s[2], s[3]] : null;
  }
  _normalizePoint(t) {
    const {
      page: {
        view: e
      },
      viewport: {
        rawDims: {
          pageWidth: i,
          pageHeight: s,
          pageX: r,
          pageY: a
        }
      }
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / i, t[1] = 100 * (t[1] - a) / s, t;
  }
  get commentText() {
    var e, i, s;
    const {
      data: t
    } = this;
    return ((i = (e = this.annotationStorage.getRawValue(`${Eh}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : i.contents) || ((s = t.contentsObj) == null ? void 0 : s.str) || "";
  }
  set commentText(t) {
    const {
      data: e
    } = this, i = {
      deleted: !t,
      contents: t || ""
    };
    this.annotationStorage.updateEditor(e.id, {
      popup: i
    }) || this.annotationStorage.setValue(`${Eh}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      pageIndex: this.parent.page._pageIndex,
      popup: i,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date()
    }), t || this.removePopup();
  }
  removePopup() {
    var t, e;
    (e = ((t = n(this, Li)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), g(this, Li, this.popup = null);
  }
  updateEdited(t) {
    var r;
    if (!this.container)
      return;
    t.rect && (n(this, xa) || g(this, xa, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: i
    } = t;
    e && w(this, Nc, ip).call(this, e);
    let s = ((r = n(this, Li)) == null ? void 0 : r.popup) || this.popup;
    !s && (i != null && i.text) && (this._createPopup(i), s = n(this, Li).popup), s && (s.updateEdited(t), i != null && i.deleted && (s.remove(), g(this, Li, null), this.popup = null));
  }
  resetEdited() {
    var t;
    n(this, xa) && (w(this, Nc, ip).call(this, n(this, xa).rect), (t = n(this, Li)) == null || t.popup.resetEdited(), g(this, xa, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: i,
        viewport: s
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof Qa) && !(this instanceof Qp) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof sp) {
      const {
        rotation: v
      } = e;
      return !e.hasOwnCanvas && v !== 0 && this.setRotation(v, r), r;
    }
    const {
      width: o,
      height: l
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const v = e.borderStyle.horizontalCornerRadius, E = e.borderStyle.verticalCornerRadius;
      if (v > 0 || E > 0) {
        const T = `calc(${v}px * var(--total-scale-factor)) / calc(${E}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      } else if (this instanceof bb) {
        const T = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      }
      switch (e.borderStyle.style) {
        case io.SOLID:
          a.borderStyle = "solid";
          break;
        case io.DASHED:
          a.borderStyle = "dashed";
          break;
        case io.BEVELED:
          X("Unimplemented border style: beveled");
          break;
        case io.INSET:
          X("Unimplemented border style: inset");
          break;
        case io.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const x = e.borderColor || null;
      x ? (g(this, gl, !0), a.borderColor = z.makeHexColor(x[0] | 0, x[1] | 0, x[2] | 0)) : a.borderWidth = 0;
    }
    const h = z.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]), {
      pageWidth: d,
      pageHeight: u,
      pageX: p,
      pageY: y
    } = s.rawDims;
    a.left = `${100 * (h[0] - p) / d}%`, a.top = `${100 * (h[1] - y) / u}%`;
    const {
      rotation: S
    } = e;
    return e.hasOwnCanvas || S === 0 ? (a.width = `${100 * o / d}%`, a.height = `${100 * l / u}%`) : this.setRotation(S, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: i,
      pageHeight: s
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / i}%`, e.style.height = `${100 * a / s}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, i, s) => {
      const r = s.detail[e], a = r[0], o = r.slice(1);
      s.target.style[i] = Fg[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [i]: Fg[`${a}_rgb`](o)
      });
    };
    return J(this, "_commonActions", {
      display: (e) => {
        const {
          display: i
        } = e.detail, s = i % 2 === 1;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: s,
          noPrint: i === 1 || i === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: i
        } = e.detail;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: i,
          noView: i
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const i = e.detail.rotation;
        this.setRotation(i), this.annotationStorage.setValue(this.data.id, {
          rotation: i
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const i = this._commonActions;
    for (const s of Object.keys(e.detail)) {
      const r = t[s] || i[s];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const i = this._commonActions;
    for (const [s, r] of Object.entries(e)) {
      const a = i[s];
      if (a) {
        const o = {
          detail: {
            [s]: r
          },
          target: t
        };
        a(o), delete e[s];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, i, s, r] = this.data.rect.map((v) => Math.fround(v));
    if (t.length === 8) {
      const [v, E, x, T] = t.subarray(2, 6);
      if (s === v && r === E && e === x && i === T)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, gl)) {
      const {
        borderColor: v,
        borderWidth: E
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${v}" stroke-width="${E}">`], this.container.classList.add("hasBorder");
    }
    const l = s - e, h = r - i, {
      svgFactory: d
    } = this, u = d.createElement("svg");
    u.classList.add("quadrilateralsContainer"), u.setAttribute("width", 0), u.setAttribute("height", 0), u.role = "none";
    const p = d.createElement("defs");
    u.append(p);
    const y = d.createElement("clipPath"), S = `clippath_${this.data.id}`;
    y.setAttribute("id", S), y.setAttribute("clipPathUnits", "objectBoundingBox"), p.append(y);
    for (let v = 2, E = t.length; v < E; v += 8) {
      const x = t[v], T = t[v + 1], _ = t[v + 2], f = t[v + 3], m = d.createElement("rect"), A = (_ - e) / l, C = (r - T) / h, P = (x - _) / l, R = (T - f) / h;
      m.setAttribute("x", A), m.setAttribute("y", C), m.setAttribute("width", P), m.setAttribute("height", R), y.append(m), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${A}" y="${C}" width="${P}" height="${R}"/>`);
    }
    n(this, gl) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(u), this.container.style.clipPath = `url(#${S})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let i, s;
    t ? (i = {
      str: t.text
    }, s = t.date) : (i = e.contentsObj, s = e.modificationDate);
    const r = g(this, Li, new sp({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: s,
        contentsObj: i,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation,
        noRotate: !0
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    }));
    this.parent._commentManager || this.parent.div.append(r.render());
  }
  get hasPopupElement() {
    return !!(n(this, Li) || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return n(this, Li);
  }
  render() {
    Et("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const i = [];
    if (this._fieldObjects) {
      const s = this._fieldObjects[t];
      if (s)
        for (const {
          page: r,
          id: a,
          exportValues: o
        } of s) {
          if (r === -1 || a === e)
            continue;
          const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
          if (h && !Ya.has(h)) {
            X(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          i.push({
            id: a,
            exportValue: l,
            domElement: h
          });
        }
      return i;
    }
    for (const s of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = s, a = s.getAttribute("data-element-id");
      a !== e && Ya.has(s) && i.push({
        id: a,
        exportValue: r,
        domElement: s
      });
    }
    return i;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var i;
      (i = this.linkService.eventBus) == null || i.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0
      });
    });
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
};
xa = new WeakMap(), gl = new WeakMap(), Li = new WeakMap(), Nc = new WeakSet(), ip = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: i,
      rotation: s
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  i == null || i.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, s === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(s);
};
let Ot = lg;
class g0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.editor = t.editor;
  }
  render() {
    return this.container.className = "editorAnnotation", this.container;
  }
  createOrUpdatePopup() {
    const {
      editor: t
    } = this;
    t.hasComment && (this._createPopup(t.comment), this.extraPopupElement.popup.renderCommentButton());
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.container.remove(), this.container = null, this.removePopup();
  }
}
var wi, Dr, gb, mb;
class Qp extends Ot {
  constructor(e, i = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(i != null && i.ignoreBorder),
      createQuadrilaterals: !0
    });
    b(this, wi);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: i
    } = this, s = document.createElement("a");
    s.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (i.addLinkAttributes(s, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(s, e.action, e.overlaidText), r = !0) : e.attachment ? (w(this, wi, gb).call(this, s, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (w(this, wi, mb).call(this, s, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(s, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, e), r = !0), e.resetForm ? (this._bindResetFormAction(s, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(s, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && this.container.append(s), this.container;
  }
  _bindLink(e, i, s = "") {
    e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === "") && w(this, wi, Dr).call(this), s && (e.title = s);
  }
  _bindNamedAction(e, i, s = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(i), !1), s && (e.title = s), w(this, wi, Dr).call(this);
  }
  _bindJSAction(e, i) {
    e.href = this.linkService.getAnchorUrl("");
    const s = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const r of Object.keys(i.actions)) {
      const a = s.get(r);
      a && (e[a] = () => {
        var o;
        return (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: i.id,
            name: r
          }
        }), !1;
      });
    }
    i.overlaidText && (e.title = i.overlaidText), e.onclick || (e.onclick = () => !1), w(this, wi, Dr).call(this);
  }
  _bindResetFormAction(e, i) {
    const s = e.onclick;
    if (s || (e.href = this.linkService.getAnchorUrl("")), w(this, wi, Dr).call(this), !this._fieldObjects) {
      X('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var u;
      s == null || s();
      const {
        fields: r,
        refs: a,
        include: o
      } = i, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const p = new Set(a);
        for (const y of r) {
          const S = this._fieldObjects[y] || [];
          for (const {
            id: v
          } of S)
            p.add(v);
        }
        for (const y of Object.values(this._fieldObjects))
          for (const S of y)
            p.has(S.id) === o && l.push(S);
      } else
        for (const p of Object.values(this._fieldObjects))
          l.push(...p);
      const h = this.annotationStorage, d = [];
      for (const p of l) {
        const {
          id: y
        } = p;
        switch (d.push(y), p.type) {
          case "text": {
            const v = p.defaultValue || "";
            h.setValue(y, {
              value: v
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const v = p.defaultValue === p.exportValues;
            h.setValue(y, {
              value: v
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const v = p.defaultValue || "";
            h.setValue(y, {
              value: v
            });
            break;
          }
          default:
            continue;
        }
        const S = document.querySelector(`[data-element-id="${y}"]`);
        if (S) {
          if (!Ya.has(S)) {
            X(`_bindResetFormAction - element not allowed: ${y}`);
            continue;
          }
        } else continue;
        S.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: d,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
wi = new WeakSet(), Dr = function() {
  this.container.setAttribute("data-internal-link", "");
}, gb = function(e, i, s = "", r = null) {
  e.href = this.linkService.getAnchorUrl(""), i.description ? e.title = i.description : s && (e.title = s), e.onclick = () => {
    var a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(i.content, i.filename, r), !1;
  }, w(this, wi, Dr).call(this);
}, mb = function(e, i, s = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(i), !1), s && (e.title = s), w(this, wi, Dr).call(this);
};
class m0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class Qa extends Ot {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    var e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (t.previousSibling.hidden = !0), t.hidden = !1);
  }
  _getKeyModifier(t) {
    return ce.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, i, s, r) {
    i.includes("mouse") ? t.addEventListener(i, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(i, (a) => {
      var o;
      if (i === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (i === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, i, s) {
    var r, a, o;
    for (const [l, h] of i)
      (h === "Action" || (r = this.data.actions) != null && r[h]) && ((h === "Focus" || h === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, l, h, s), h === "Focus" && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : h === "Blur" && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : z.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: i
    } = this.data.defaultAppearanceData, s = this.data.defaultAppearanceData.fontSize || f0, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), d = Math.round(h / (ef * s)) || 1, u = h / d;
      a = Math.min(s, l(u / ef));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(s, l(h / ef));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = z.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class b0 extends Qa {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, i, s) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = i), r.setValue(a.id, {
        [s]: i
      });
  }
  render() {
    var s, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let i = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((s = this.data.textContent) == null ? void 0 : s.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const d = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (i = document.createElement("textarea"), i.textContent = h ?? o, this.data.doNotScroll && (i.style.overflowY = "hidden")) : (i = document.createElement("input"), i.type = this.data.password ? "password" : "text", i.setAttribute("value", h ?? o), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i.hidden = !0), Ya.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: p,
        timeStep: y
      } = this.data, S = !!p && this.enableScripting;
      u && (i.title = u), this._setRequired(i, this.data.required), l && (i.maxLength = l), i.addEventListener("input", (E) => {
        t.setValue(e, {
          value: E.target.value
        }), this.setPropertyOnSiblings(i, "value", E.target.value, "value"), d.formattedValue = null;
      }), i.addEventListener("resetform", (E) => {
        const x = this.data.defaultFieldValue ?? "";
        i.value = d.userValue = x, d.formattedValue = null;
      });
      let v = (E) => {
        const {
          formattedValue: x
        } = d;
        x != null && (E.target.value = x), E.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i.addEventListener("focus", (x) => {
          var _;
          if (d.focused)
            return;
          const {
            target: T
          } = x;
          if (S && (T.type = p, y && (T.step = y)), d.userValue) {
            const f = d.userValue;
            if (S)
              if (p === "time") {
                const m = new Date(f), A = [m.getHours(), m.getMinutes(), m.getSeconds()];
                T.value = A.map((C) => C.toString().padStart(2, "0")).join(":");
              } else
                T.value = new Date(f - p0).toISOString().split(p === "date" ? "T" : ".", 1)[0];
            else
              T.value = f;
          }
          d.lastCommittedValue = T.value, d.commitKey = 1, (_ = this.data.actions) != null && _.Focus || (d.focused = !0);
        }), i.addEventListener("updatefromsandbox", (x) => {
          this.showElementAndHideCanvas(x.target);
          const T = {
            value(_) {
              d.userValue = _.detail.value ?? "", S || t.setValue(e, {
                value: d.userValue.toString()
              }), _.target.value = d.userValue;
            },
            formattedValue(_) {
              const {
                formattedValue: f
              } = _.detail;
              d.formattedValue = f, f != null && _.target !== document.activeElement && (_.target.value = f);
              const m = {
                formattedValue: f
              };
              S && (m.value = f), t.setValue(e, m);
            },
            selRange(_) {
              _.target.setSelectionRange(..._.detail.selRange);
            },
            charLimit: (_) => {
              var C;
              const {
                charLimit: f
              } = _.detail, {
                target: m
              } = _;
              if (f === 0) {
                m.removeAttribute("maxLength");
                return;
              }
              m.setAttribute("maxLength", f);
              let A = d.userValue;
              !A || A.length <= f || (A = A.slice(0, f), m.value = d.userValue = A, t.setValue(e, {
                value: A
              }), (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: A,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: m.selectionStart,
                  selEnd: m.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(T, x);
        }), i.addEventListener("keydown", (x) => {
          var f;
          d.commitKey = 1;
          let T = -1;
          if (x.key === "Escape" ? T = 0 : x.key === "Enter" && !this.data.multiLine ? T = 2 : x.key === "Tab" && (d.commitKey = 3), T === -1)
            return;
          const {
            value: _
          } = x.target;
          d.lastCommittedValue !== _ && (d.lastCommittedValue = _, d.userValue = _, (f = this.linkService.eventBus) == null || f.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: T,
              selStart: x.target.selectionStart,
              selEnd: x.target.selectionEnd
            }
          }));
        });
        const E = v;
        v = null, i.addEventListener("blur", (x) => {
          var f, m;
          if (!d.focused || !x.relatedTarget)
            return;
          (f = this.data.actions) != null && f.Blur || (d.focused = !1);
          const {
            target: T
          } = x;
          let {
            value: _
          } = T;
          if (S) {
            if (_ && p === "time") {
              const A = _.split(":").map((C) => parseInt(C, 10));
              _ = new Date(2e3, 0, 1, A[0], A[1], A[2] || 0).valueOf(), T.step = "";
            } else
              _.includes("T") || (_ = `${_}T00:00`), _ = new Date(_).valueOf();
            T.type = "text";
          }
          d.userValue = _, d.lastCommittedValue !== _ && ((m = this.linkService.eventBus) == null || m.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: _,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: x.target.selectionStart,
              selEnd: x.target.selectionEnd
            }
          })), E(x);
        }), (r = this.data.actions) != null && r.Keystroke && i.addEventListener("beforeinput", (x) => {
          var R;
          d.lastCommittedValue = null;
          const {
            data: T,
            target: _
          } = x, {
            value: f,
            selectionStart: m,
            selectionEnd: A
          } = _;
          let C = m, P = A;
          switch (x.inputType) {
            case "deleteWordBackward": {
              const M = f.substring(0, m).match(/\w*[^\w]*$/);
              M && (C -= M[0].length);
              break;
            }
            case "deleteWordForward": {
              const M = f.substring(m).match(/^[^\w]*\w*/);
              M && (P += M[0].length);
              break;
            }
            case "deleteContentBackward":
              m === A && (C -= 1);
              break;
            case "deleteContentForward":
              m === A && (P += 1);
              break;
          }
          x.preventDefault(), (R = this.linkService.eventBus) == null || R.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: f,
              change: T || "",
              willCommit: !1,
              selStart: C,
              selEnd: P
            }
          });
        }), this._setEventListeners(i, d, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (x) => x.target.value);
      }
      if (v && i.addEventListener("blur", v), this.data.comb) {
        const x = (this.data.rect[2] - this.data.rect[0]) / l;
        i.classList.add("comb"), i.style.letterSpacing = `calc(${x}px * var(--total-scale-factor) - 1ch)`;
      }
    } else
      i = document.createElement("div"), i.textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell", this.data.hasOwnCanvas && (i.hidden = !0);
    return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class y0 extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class w0 extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, i = e.id;
    let s = t.getValue(i, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof s == "string" && (s = s !== "Off", t.setValue(i, {
      value: s
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return Ya.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, i)) {
        const d = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = d), t.setValue(h.id, {
          value: d
        });
      }
      t.setValue(i, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(i, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class bb extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, i = e.id;
    let s = t.getValue(i, {
      value: e.fieldValue === e.buttonValue
    }).value;
    if (typeof s == "string" && (s = s !== e.buttonValue, t.setValue(i, {
      value: s
    })), s)
      for (const a of this._getElementsByName(e.fieldName, i))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (Ya.add(r), r.setAttribute("data-element-id", i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, s && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, i))
        t.setValue(h.id, {
          value: !1
        });
      t.setValue(i, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const d = a === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const p = d && u.id === i;
              u.domElement && (u.domElement.checked = p), t.setValue(u.id, {
                value: p
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class A0 extends Qp {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (i) => {
      this._dispatchEventFromSandbox({}, i);
    })), t;
  }
}
class v0 extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, i = t.getValue(e, {
      value: this.data.fieldValue
    }), s = document.createElement("select");
    Ya.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = !0)), s.addEventListener("resetform", (d) => {
      const u = this.data.defaultFieldValue;
      for (const p of s.options)
        p.selected = p.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement("option");
      u.textContent = d.displayValue, u.value = d.exportValue, i.value.includes(d.exportValue) && (u.setAttribute("selected", !0), r = !1), s.append(u);
    }
    let a = null;
    if (r) {
      const d = document.createElement("option");
      d.value = " ", d.setAttribute("hidden", !0), d.setAttribute("selected", !0), s.prepend(d), a = () => {
        d.remove(), s.removeEventListener("input", a), a = null;
      }, s.addEventListener("input", a);
    }
    const o = (d) => {
      const u = d ? "value" : "textContent", {
        options: p,
        multiple: y
      } = s;
      return y ? Array.prototype.filter.call(p, (S) => S.selected).map((S) => S[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
    };
    let l = o(!1);
    const h = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (s.addEventListener("updatefromsandbox", (d) => {
      const u = {
        value(p) {
          a == null || a();
          const y = p.detail.value, S = new Set(Array.isArray(y) ? y : [y]);
          for (const v of s.options)
            v.selected = S.has(v.value);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        multipleSelection(p) {
          s.multiple = !0;
        },
        remove(p) {
          const y = s.options, S = p.detail.remove;
          y[S].selected = !1, s.remove(S), y.length > 0 && Array.prototype.findIndex.call(y, (E) => E.selected) === -1 && (y[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        clear(p) {
          for (; s.length !== 0; )
            s.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), l = o(!1);
        },
        insert(p) {
          const {
            index: y,
            displayValue: S,
            exportValue: v
          } = p.detail.insert, E = s.children[y], x = document.createElement("option");
          x.textContent = S, x.value = v, E ? E.before(x) : s.append(x), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        items(p) {
          const {
            items: y
          } = p.detail;
          for (; s.length !== 0; )
            s.remove(0);
          for (const S of y) {
            const {
              displayValue: v,
              exportValue: E
            } = S, x = document.createElement("option");
            x.textContent = v, x.value = E, s.append(x);
          }
          s.options.length > 0 && (s.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p)
          }), l = o(!1);
        },
        indices(p) {
          const y = new Set(p.detail.indices);
          for (const S of p.target.options)
            S.selected = y.has(S.index);
          t.setValue(e, {
            value: o(!0)
          }), l = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(u, d);
    }), s.addEventListener("input", (d) => {
      var y;
      const u = o(!0), p = o(!1);
      t.setValue(e, {
        value: u
      }), d.preventDefault(), (y = this.linkService.eventBus) == null || y.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: l,
          change: p,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(s, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (d) => d.target.value)) : s.addEventListener("input", function(d) {
      t.setValue(e, {
        value: o(!0)
      });
    }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
var Oc, np;
class sp extends Ot {
  constructor(e) {
    const {
      data: i,
      elements: s,
      parent: r
    } = e, a = !!r._commentManager;
    super(e, {
      isRenderable: !a && Ot._hasPopupData(i)
    });
    b(this, Oc);
    if (this.elements = s, a && Ot._hasPopupData(i)) {
      const o = this.popup = w(this, Oc, np).call(this);
      for (const l of s)
        l.popup = o;
    } else
      this.popup = null;
  }
  render() {
    const {
      container: e
    } = this;
    e.classList.add("popupAnnotation"), e.role = "comment";
    const i = this.popup = w(this, Oc, np).call(this), s = [];
    for (const r of this.elements)
      r.popup = i, r.container.ariaHasPopup = "dialog", s.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", s.map((r) => `${Wp}${r}`).join(",")), this.container;
  }
}
Oc = new WeakSet(), np = function() {
  return new S0({
    container: this.container,
    color: this.data.color,
    titleObj: this.data.titleObj,
    modificationDate: this.data.modificationDate || this.data.creationDate,
    contentsObj: this.data.contentsObj,
    richText: this.data.richText,
    rect: this.data.rect,
    parentRect: this.data.parentRect || null,
    parent: this.parent,
    elements: this.elements,
    open: this.data.open,
    commentManager: this.parent._commentManager
  });
};
var ai, ar, Fu, Nu, ml, bl, $t, Es, or, Ea, yl, wl, _s, oi, un, fn, ne, pn, lr, Bc, gn, Al, _a, hr, Pe, cr, Z, Vd, rp, ap, op, qd, lp, yb, wb, Ab, vb, Xd, Yd, hp;
class S0 {
  constructor({
    container: t,
    color: e,
    elements: i,
    titleObj: s,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: h,
    parentRect: d,
    open: u,
    commentManager: p = null
  }) {
    b(this, Z);
    b(this, ai, null);
    b(this, ar, w(this, Z, Ab).bind(this));
    b(this, Fu, w(this, Z, hp).bind(this));
    b(this, Nu, w(this, Z, Yd).bind(this));
    b(this, ml, w(this, Z, Xd).bind(this));
    b(this, bl, null);
    b(this, $t, null);
    b(this, Es, null);
    b(this, or, null);
    b(this, Ea, null);
    b(this, yl, null);
    b(this, wl, null);
    b(this, _s, !1);
    b(this, oi, null);
    b(this, un, null);
    b(this, fn, null);
    b(this, ne, null);
    b(this, pn, null);
    b(this, lr, null);
    b(this, Bc, null);
    b(this, gn, null);
    b(this, Al, null);
    b(this, _a, null);
    b(this, hr, !1);
    b(this, Pe, null);
    b(this, cr, null);
    g(this, $t, t), g(this, Al, s), g(this, Es, a), g(this, gn, o), g(this, yl, l), g(this, bl, e), g(this, Bc, h), g(this, wl, d), g(this, Ea, i), g(this, ai, p), g(this, Pe, i[0]), g(this, or, Th.toDateObject(r)), this.trigger = i.flatMap((y) => y.getElementsToTriggerPopup()), p ? this.renderCommentButton() : (w(this, Z, Vd).call(this), n(this, $t).hidden = !0, u && w(this, Z, Xd).call(this));
  }
  renderCommentButton() {
    if (n(this, ne) || (n(this, pn) || w(this, Z, rp).call(this), !n(this, pn)))
      return;
    const {
      signal: t
    } = g(this, un, new AbortController()), e = !!n(this, Pe).extraPopupElement, i = () => {
      n(this, ai).toggleCommentPopup(this, !0, void 0, !e);
    }, s = () => {
      n(this, ai).toggleCommentPopup(this, !1, !0, !e);
    }, r = () => {
      n(this, ai).toggleCommentPopup(this, !1, !1);
    };
    if (e) {
      g(this, ne, n(this, Pe).container);
      for (const a of this.trigger)
        a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.addEventListener("keydown", n(this, ar), {
          signal: t
        }), a.addEventListener("click", i, {
          signal: t
        }), a.addEventListener("pointerenter", s, {
          signal: t
        }), a.addEventListener("pointerleave", r, {
          signal: t
        }), a.classList.add("popupTriggerArea");
    } else {
      const a = g(this, ne, document.createElement("button"));
      a.className = "annotationCommentButton";
      const o = n(this, Pe).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), w(this, Z, op).call(this), w(this, Z, ap).call(this), a.addEventListener("keydown", n(this, ar), {
        signal: t
      }), a.addEventListener("click", i, {
        signal: t
      }), a.addEventListener("pointerenter", s, {
        signal: t
      }), a.addEventListener("pointerleave", r, {
        signal: t
      }), o.after(a);
    }
  }
  get commentButtonColor() {
    const {
      color: t,
      opacity: e
    } = n(this, Pe).commentData;
    return t ? n(this, yl)._commentManager.makeCommentColor(t, e) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      var t;
      (t = n(this, ne)) == null || t.focus();
    }, 0);
  }
  getData() {
    const {
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r
    } = n(this, Pe).commentData;
    return {
      contentsObj: {
        str: this.comment
      },
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r
    };
  }
  get elementBeforePopup() {
    return n(this, ne);
  }
  get comment() {
    return n(this, cr) || g(this, cr, n(this, Pe).commentText), n(this, cr);
  }
  set comment(t) {
    t !== this.comment && (n(this, Pe).commentText = g(this, cr, t));
  }
  get parentBoundingClientRect() {
    return n(this, Pe).layer.getBoundingClientRect();
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, ne) && (n(this, ne).classList.toggle("selected", t), n(this, ne).ariaExpanded = e);
  }
  setSelectedCommentButton(t) {
    n(this, ne).classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (n(this, lr))
      return n(this, lr);
    const {
      x: t,
      y: e,
      height: i
    } = n(this, ne).getBoundingClientRect(), {
      x: s,
      y: r,
      width: a,
      height: o
    } = n(this, Pe).layer.getBoundingClientRect();
    return [(t - s) / a, (e + i - r) / o];
  }
  set commentPopupPosition(t) {
    g(this, lr, t);
  }
  hasDefaultPopupPosition() {
    return n(this, lr) === null;
  }
  get commentButtonPosition() {
    return n(this, pn);
  }
  get commentButtonWidth() {
    return n(this, ne).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, i] = n(this, lr) || this.commentButtonPosition.map((h) => h / 100), s = this.parentBoundingClientRect, {
      x: r,
      y: a,
      width: o,
      height: l
    } = s;
    n(this, ai).showDialog(null, this, r + e * o, a + i * l, {
      ...t,
      parentDimensions: s
    });
  }
  render() {
    var i, s;
    if (n(this, oi))
      return;
    const t = g(this, oi, document.createElement("div"));
    if (t.className = "popup", n(this, bl)) {
      const r = t.style.outlineColor = z.makeHexColor(...n(this, bl));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", (i = n(this, Al)) != null && i.str) {
      const r = document.createElement("span");
      r.className = "title", e.append(r), {
        dir: r.dir,
        str: r.textContent
      } = n(this, Al);
    }
    if (t.append(e), n(this, or)) {
      const r = document.createElement("time");
      r.className = "popupDate", r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, or).valueOf()
      })), r.dateTime = n(this, or).toISOString(), e.append(r);
    }
    Vp({
      html: n(this, Z, qd) || n(this, Es).str,
      dir: (s = n(this, Es)) == null ? void 0 : s.dir,
      className: "popupContent"
    }, t), n(this, $t).append(t);
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: i
  }) {
    var s;
    if (n(this, ai)) {
      i ? (this.remove(), g(this, cr, null)) : e && (e.deleted ? this.remove() : (w(this, Z, op).call(this), g(this, cr, e.text))), t && (g(this, pn, null), w(this, Z, rp).call(this), w(this, Z, ap).call(this));
      return;
    }
    if (i || e != null && e.deleted) {
      this.remove();
      return;
    }
    w(this, Z, Vd).call(this), n(this, _a) || g(this, _a, {
      contentsObj: n(this, Es),
      richText: n(this, gn)
    }), t && g(this, fn, null), e && e.text && (g(this, gn, w(this, Z, wb).call(this, e.text)), g(this, or, Th.toDateObject(e.date)), g(this, Es, null)), (s = n(this, oi)) == null || s.remove(), g(this, oi, null);
  }
  resetEdited() {
    var t;
    n(this, _a) && ({
      contentsObj: Kt(this, Es)._,
      richText: Kt(this, gn)._
    } = n(this, _a), g(this, _a, null), (t = n(this, oi)) == null || t.remove(), g(this, oi, null), g(this, fn, null));
  }
  remove() {
    var t, e, i;
    if ((t = n(this, un)) == null || t.abort(), g(this, un, null), (e = n(this, oi)) == null || e.remove(), g(this, oi, null), g(this, hr, !1), g(this, _s, !1), (i = n(this, ne)) == null || i.remove(), g(this, ne, null), this.trigger)
      for (const s of this.trigger)
        s.classList.remove("popupTriggerArea");
  }
  forceHide() {
    g(this, hr, this.isVisible), n(this, hr) && (n(this, $t).hidden = !0);
  }
  maybeShow() {
    n(this, ai) || (w(this, Z, Vd).call(this), n(this, hr) && (n(this, oi) || w(this, Z, Yd).call(this), g(this, hr, !1), n(this, $t).hidden = !1));
  }
  get isVisible() {
    return n(this, ai) ? !1 : n(this, $t).hidden === !1;
  }
}
ai = new WeakMap(), ar = new WeakMap(), Fu = new WeakMap(), Nu = new WeakMap(), ml = new WeakMap(), bl = new WeakMap(), $t = new WeakMap(), Es = new WeakMap(), or = new WeakMap(), Ea = new WeakMap(), yl = new WeakMap(), wl = new WeakMap(), _s = new WeakMap(), oi = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), ne = new WeakMap(), pn = new WeakMap(), lr = new WeakMap(), Bc = new WeakMap(), gn = new WeakMap(), Al = new WeakMap(), _a = new WeakMap(), hr = new WeakMap(), Pe = new WeakMap(), cr = new WeakMap(), Z = new WeakSet(), Vd = function() {
  var e;
  if (n(this, un))
    return;
  g(this, un, new AbortController());
  const {
    signal: t
  } = n(this, un);
  for (const i of this.trigger)
    i.addEventListener("click", n(this, ml), {
      signal: t
    }), i.addEventListener("pointerenter", n(this, Nu), {
      signal: t
    }), i.addEventListener("pointerleave", n(this, Fu), {
      signal: t
    }), i.classList.add("popupTriggerArea");
  for (const i of n(this, Ea))
    (e = i.container) == null || e.addEventListener("keydown", n(this, ar), {
      signal: t
    });
}, rp = function() {
  const t = n(this, Ea).find((e) => e.hasCommentButton);
  t && g(this, pn, t._normalizePoint(t.commentButtonPosition));
}, ap = function() {
  if (n(this, Pe).extraPopupElement && !n(this, Pe).editor)
    return;
  this.renderCommentButton();
  const [t, e] = n(this, pn), {
    style: i
  } = n(this, ne);
  i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
}, op = function() {
  n(this, Pe).extraPopupElement || (this.renderCommentButton(), n(this, ne).style.backgroundColor = this.commentButtonColor || "");
}, qd = function() {
  const t = n(this, gn), e = n(this, Es);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, gn).html || null;
}, lp = function() {
  var t, e, i;
  return ((i = (e = (t = n(this, Z, qd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.fontSize) || 0;
}, yb = function() {
  var t, e, i;
  return ((i = (e = (t = n(this, Z, qd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.color) || null;
}, wb = function(t) {
  const e = [], i = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, s = {
    style: {
      color: n(this, Z, yb),
      fontSize: n(this, Z, lp) ? `calc(${n(this, Z, lp)}px * var(--total-scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: s
    });
  return i;
}, Ab = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, _s)) && w(this, Z, Xd).call(this);
}, vb = function() {
  if (n(this, fn) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: i,
        pageX: s,
        pageY: r
      }
    }
  } = n(this, yl);
  let a = !!n(this, wl), o = a ? n(this, wl) : n(this, Bc);
  for (const S of n(this, Ea))
    if (!o || z.intersect(S.data.rect, o) !== null) {
      o = S.data.rect, a = !0;
      break;
    }
  const l = z.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), d = a ? o[2] - o[0] + 5 : 0, u = l[0] + d, p = l[1];
  g(this, fn, [100 * (u - s) / e, 100 * (p - r) / i]);
  const {
    style: y
  } = n(this, $t);
  y.left = `${n(this, fn)[0]}%`, y.top = `${n(this, fn)[1]}%`;
}, Xd = function() {
  if (n(this, ai)) {
    n(this, ai).toggleCommentPopup(this, !1);
    return;
  }
  g(this, _s, !n(this, _s)), n(this, _s) ? (w(this, Z, Yd).call(this), n(this, $t).addEventListener("click", n(this, ml)), n(this, $t).addEventListener("keydown", n(this, ar))) : (w(this, Z, hp).call(this), n(this, $t).removeEventListener("click", n(this, ml)), n(this, $t).removeEventListener("keydown", n(this, ar)));
}, Yd = function() {
  n(this, oi) || this.render(), this.isVisible ? n(this, _s) && n(this, $t).classList.add("focused") : (w(this, Z, vb).call(this), n(this, $t).hidden = !1, n(this, $t).style.zIndex = parseInt(n(this, $t).style.zIndex) + 1e3);
}, hp = function() {
  n(this, $t).classList.remove("focused"), !(n(this, _s) || !this.isVisible) && (n(this, $t).hidden = !0, n(this, $t).style.zIndex = parseInt(n(this, $t).style.zIndex) - 1e3);
};
class Sb extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = q.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const i = document.createElement("span");
        i.textContent = e, t.append(i);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var Hc;
class x0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, Hc, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: i,
      height: s
    } = this, r = this.svgFactory.create(i, s, !0), a = g(this, Hc, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Hc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Hc = new WeakMap();
var $c;
class E0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, $c, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: i,
      height: s
    } = this, r = this.svgFactory.create(i, s, !0), a = e.borderStyle.width, o = g(this, $c, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", i - a), o.setAttribute("height", s - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, $c);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
$c = new WeakMap();
var Uc;
class _0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, Uc, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: i,
      height: s
    } = this, r = this.svgFactory.create(i, s, !0), a = e.borderStyle.width, o = g(this, Uc, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", i / 2), o.setAttribute("cy", s / 2), o.setAttribute("rx", i / 2 - a / 2), o.setAttribute("ry", s / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Uc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Uc = new WeakMap();
var zc;
class xb extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, zc, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: i,
        borderStyle: s,
        popupRef: r
      },
      width: a,
      height: o
    } = this;
    if (!i)
      return this.container;
    const l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, p = i.length; u < p; u += 2) {
      const y = i[u] - e[0], S = e[3] - i[u + 1];
      h.push(`${y},${S}`);
    }
    h = h.join(" ");
    const d = g(this, zc, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute("points", h), d.setAttribute("stroke-width", s.width || 1), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), l.append(d), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, zc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
zc = new WeakMap();
class C0 extends xb {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class T0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
var Gc, Ca, Wc, cp;
class Zp extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    b(this, Wc);
    b(this, Gc, null);
    b(this, Ca, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? q.HIGHLIGHT : q.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: i,
        inkLists: s,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = w(this, Wc, cp).call(this, i, e), d = this.svgFactory.create(l, h, !0), u = g(this, Gc, this.svgFactory.createElement("svg:g"));
    d.append(u), u.setAttribute("stroke-width", r.width || 1), u.setAttribute("stroke-linecap", "round"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", 10), u.setAttribute("stroke", "transparent"), u.setAttribute("fill", "transparent"), u.setAttribute("transform", o);
    for (let p = 0, y = s.length; p < y; p++) {
      const S = this.svgFactory.createElement(this.svgElementName);
      n(this, Ca).push(S), S.setAttribute("points", s[p].join(",")), u.append(S);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(d), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: i,
      points: s,
      rect: r
    } = e, a = n(this, Gc);
    if (i >= 0 && a.setAttribute("stroke-width", i || 1), s)
      for (let o = 0, l = n(this, Ca).length; o < l; o++)
        n(this, Ca)[o].setAttribute("points", s[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h
      } = w(this, Wc, cp).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, Ca);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Gc = new WeakMap(), Ca = new WeakMap(), Wc = new WeakSet(), cp = function(e, i) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-i[0]},${i[1]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-i[2]},${i[1]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-i[2]},${i[3]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0]
      };
    default:
      return {
        transform: `translate(${-i[0]},${i[3]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1]
      };
  }
};
class Eb extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = q.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const i = document.createElement("mark");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class P0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), t) {
      const i = document.createElement("u");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class R0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), t) {
      const i = document.createElement("u");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class M0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), t) {
      const i = document.createElement("s");
      i.classList.add("overlaidText"), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class _b extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = q.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
var jc, Vc, dp;
class k0 extends Ot {
  constructor(e) {
    var s;
    super(e, {
      isRenderable: !0
    });
    b(this, Vc);
    b(this, jc, null);
    const {
      file: i
    } = this.data;
    this.filename = i.filename, this.content = i.content, (s = this.linkService.eventBus) == null || s.dispatch("fileattachmentannotation", {
      source: this,
      ...i
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: i
    } = this;
    let s;
    i.hasAppearance || i.fillAlpha === 0 ? s = document.createElement("div") : (s = document.createElement("img"), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? "paperclip" : "pushpin"}.svg`, i.fillAlpha && i.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(i.fillAlpha * 100)}%);`)), s.addEventListener("dblclick", w(this, Vc, dp).bind(this)), g(this, jc, s);
    const {
      isMac: r
    } = ce.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && w(this, Vc, dp).call(this);
    }), !i.popupRef && this.hasPopupData ? this._createPopup() : s.classList.add("popupTriggerArea"), e.append(s), e;
  }
  getElementsToTriggerPopup() {
    return n(this, jc);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
jc = new WeakMap(), Vc = new WeakSet(), dp = function() {
  var e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
var vl, Ta, Sl, dr, qc, Pa, Rr, up, fp, xl;
let tg = (xl = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: i,
    annotationEditorUIManager: s,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: l,
    linkService: h,
    annotationStorage: d
  }) {
    b(this, Rr);
    b(this, vl, null);
    b(this, Ta, null);
    b(this, Sl, null);
    b(this, dr, /* @__PURE__ */ new Map());
    b(this, qc, null);
    b(this, Pa, null);
    this.div = t, g(this, vl, e), g(this, Ta, i), g(this, qc, o || null), g(this, Pa, h || null), g(this, Sl, d || new qp()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = s, this._commentManager = l || null;
  }
  hasEditableAnnotations() {
    return n(this, dr).size > 0;
  }
  async render(t) {
    var a, o, l;
    const {
      annotations: e
    } = t, i = this.div;
    Cr(i, this.viewport);
    const s = /* @__PURE__ */ new Map(), r = {
      data: null,
      layer: i,
      linkService: n(this, Pa),
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new kh(),
      annotationStorage: n(this, Sl),
      enableComment: t.enableComment === !0,
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const h of e) {
      if (h.noHTML)
        continue;
      const d = h.annotationType === Gt.POPUP;
      if (d) {
        const y = s.get(h.id);
        if (!y)
          continue;
        r.elements = y;
      } else if (h.rect[2] === h.rect[0] || h.rect[3] === h.rect[1])
        continue;
      r.data = h;
      const u = Ng.create(r);
      if (!u.isRenderable)
        continue;
      if (!d && h.popupRef) {
        const y = s.get(h.popupRef);
        y ? y.push(u) : s.set(h.popupRef, [u]);
      }
      const p = u.render();
      h.hidden && (p.style.visibility = "hidden"), await w(this, Rr, up).call(this, p, h.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (n(this, dr).set(u.data.id, u), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(u));
    }
    w(this, Rr, fp).call(this);
  }
  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: n(this, Pa),
      svgFactory: new kh(),
      parent: this
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = xl._defaultBorderStyle), e.data = i;
      const s = Ng.create(e);
      if (!s.isRenderable)
        continue;
      const r = s.render();
      await w(this, Rr, up).call(this, r, i.id, null);
    }
  }
  update({
    viewport: t
  }) {
    const e = this.div;
    this.viewport = t, Cr(e, {
      rotation: t.rotation
    }), w(this, Rr, fp).call(this), e.hidden = !1;
  }
  getEditableAnnotations() {
    return Array.from(n(this, dr).values());
  }
  getEditableAnnotation(t) {
    return n(this, dr).get(t);
  }
  addFakeAnnotation(t) {
    var o;
    const {
      div: e
    } = this, {
      id: i,
      rotation: s
    } = t, r = new g0({
      data: {
        id: i,
        rect: t.getPDFRect(),
        rotation: s
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: n(this, Pa),
      annotationStorage: n(this, Sl)
    }), a = r.render();
    return e.append(a), (o = n(this, vl)) == null || o.moveElementInDOM(e, a, a, !1), r.createOrUpdatePopup(), r;
  }
  static get _defaultBorderStyle() {
    return J(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: io.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}, vl = new WeakMap(), Ta = new WeakMap(), Sl = new WeakMap(), dr = new WeakMap(), qc = new WeakMap(), Pa = new WeakMap(), Rr = new WeakSet(), up = async function(t, e, i) {
  var o, l;
  const s = t.firstChild || t, r = s.id = `${Wp}${e}`, a = await ((o = n(this, qc)) == null ? void 0 : o.getAriaAttributes(r));
  if (a)
    for (const [h, d] of a)
      s.setAttribute(h, d);
  i ? i.at(-1).container.after(t) : (this.div.append(t), (l = n(this, vl)) == null || l.moveElementInDOM(this.div, t, s, !1));
}, fp = function() {
  var e;
  if (!n(this, Ta))
    return;
  const t = this.div;
  for (const [i, s] of n(this, Ta)) {
    const r = t.querySelector(`[data-annotation-id="${i}"]`);
    if (!r)
      continue;
    s.className = "annotationContent";
    const {
      firstChild: a
    } = r;
    a ? a.nodeName === "CANVAS" ? a.replaceWith(s) : a.classList.contains("annotationContent") ? a.after(s) : a.before(s) : r.append(s);
    const o = n(this, dr).get(i);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(i, r.id, s), o._hasNoCanvas = !1) : o.canvas = s);
  }
  n(this, Ta).clear();
}, xl);
const kd = /\r\n?|\n/g;
var li, Xc, Ra, hi, Xt, Cb, Tb, Pb, Kd, En, Jd, Qd, Rb, gp, Mb;
const Pt = class Pt extends Ct {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    b(this, Xt);
    b(this, li, "");
    b(this, Xc, `${this.id}-editor`);
    b(this, Ra, null);
    b(this, hi);
    D(this, "_colorPicker", null);
    this.color = e.color || Pt._defaultColor || Ct._defaultLineColor, g(this, hi, e.fontSize || Pt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
  }
  static get _keyboardManager() {
    const e = Pt.prototype, i = (a) => a.isEmpty(), s = Tr.TRANSLATE_SMALL, r = Tr.TRANSLATE_BIG;
    return J(this, "_keyboardManager", new md([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
      args: [-s, 0],
      checker: i
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: i
    }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
      args: [s, 0],
      checker: i
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: i
    }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
      args: [0, -s],
      checker: i
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: i
    }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
      args: [0, s],
      checker: i
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: i
    }]]));
  }
  static initialize(e, i) {
    Ct.initialize(e, i);
    const s = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(s.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, i) {
    switch (e) {
      case it.FREETEXT_SIZE:
        Pt._defaultFontSize = i;
        break;
      case it.FREETEXT_COLOR:
        Pt._defaultColor = i;
        break;
    }
  }
  updateParams(e, i) {
    switch (e) {
      case it.FREETEXT_SIZE:
        w(this, Xt, Cb).call(this, i);
        break;
      case it.FREETEXT_COLOR:
        w(this, Xt, Tb).call(this, i);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[it.FREETEXT_SIZE, Pt._defaultFontSize], [it.FREETEXT_COLOR, Pt._defaultColor || Ct._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[it.FREETEXT_SIZE, n(this, hi)], [it.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new bu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return it.FREETEXT_COLOR;
  }
  onUpdatedColor() {
    var e;
    this.editorDiv.style.color = this.color, (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _translateEmpty(e, i) {
    this._uiManager.translateSelectedEditors(e, i, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-Pt._internalPadding * e, -(Pt._internalPadding + n(this, hi)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), g(this, Ra, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, Ra));
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    }), !0;
  }
  disableEditMode() {
    var e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, Xc)), this._isDraggable = !0, (e = n(this, Ra)) == null || e.abort(), g(this, Ra, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0) : !1;
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var i;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (i = this._initialOptions) != null && i.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = n(this, li), i = g(this, li, w(this, Xt, Pb).call(this).trimEnd());
    if (e === i)
      return;
    const s = (r) => {
      if (g(this, li, r), !r) {
        this.remove();
        return;
      }
      w(this, Xt, Qd).call(this), this._uiManager.rebuild(this), w(this, Xt, Kd).call(this);
    };
    this.addCommands({
      cmd: () => {
        s(i);
      },
      undo: () => {
        s(e);
      },
      mustExec: !1
    }), w(this, Xt, Kd).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    Pt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  get canChangeContent() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    (this._isCopy || this.annotationElementId) && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, Xc)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: s
    } = this.editorDiv;
    if (s.fontSize = `calc(${n(this, hi)}px * var(--total-scale-factor))`, s.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [d, u] = this.pageDimensions, [p, y] = this.pageTranslation;
        let S, v;
        switch (this.rotation) {
          case 0:
            S = e + (o[0] - p) / d, v = i + this.height - (o[1] - y) / u;
            break;
          case 90:
            S = e + (o[0] - p) / d, v = i - (o[1] - y) / u, [l, h] = [h, -l];
            break;
          case 180:
            S = e - this.width + (o[0] - p) / d, v = i - (o[1] - y) / u, [l, h] = [-l, -h];
            break;
          case 270:
            S = e + (o[0] - p - this.height * u) / d, v = i + (o[1] - y - this.width * d) / u, [l, h] = [-h, l];
            break;
        }
        this.setAt(S * r, v * a, l, h);
      } else
        this._moveAfterPaste(e, i);
      w(this, Xt, Qd).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var S, v, E;
    const i = e.clipboardData || window.clipboardData, {
      types: s
    } = i;
    if (s.length === 1 && s[0] === "text/plain")
      return;
    e.preventDefault();
    const r = w(S = Pt, En, gp).call(S, i.getData("text") || "").replaceAll(kd, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, d = [], u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const x = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(kd, "")), x !== this.editorDiv) {
        let T = d;
        for (const _ of this.editorDiv.childNodes) {
          if (_ === x) {
            T = u;
            continue;
          }
          T.push(w(v = Pt, En, Jd).call(v, _));
        }
      }
      d.push(l.nodeValue.slice(0, h).replaceAll(kd, ""));
    } else if (l === this.editorDiv) {
      let x = d, T = 0;
      for (const _ of this.editorDiv.childNodes)
        T++ === h && (x = u), x.push(w(E = Pt, En, Jd).call(E, _));
    }
    g(this, li, `${d.join(`
`)}${r}${u.join(`
`)}`), w(this, Xt, Qd).call(this);
    const p = new Range();
    let y = Math.sumPrecise(d.map((x) => x.length));
    for (const {
      firstChild: x
    } of this.editorDiv.childNodes)
      if (x.nodeType === Node.TEXT_NODE) {
        const T = x.nodeValue.length;
        if (y <= T) {
          p.setStart(x, y), p.setEnd(x, y);
          break;
        }
        y -= T;
      }
    a.removeAllRanges(), a.addRange(p);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = Pt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, i, s) {
    var o;
    let r = null;
    if (e instanceof Sb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: d,
          rotation: u,
          id: p,
          popupRef: y,
          richText: S,
          contentsObj: v,
          creationDate: E,
          modificationDate: x
        },
        textContent: T,
        textPosition: _,
        parent: {
          page: {
            pageNumber: f
          }
        }
      } = e;
      if (!T || T.length === 0)
        return null;
      r = e = {
        annotationType: q.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: T.join(`
`),
        position: _,
        pageIndex: f - 1,
        rect: d.slice(0),
        rotation: u,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: y,
        comment: (v == null ? void 0 : v.str) || null,
        richText: S,
        creationDate: E,
        modificationDate: x
      };
    }
    const a = await super.deserialize(e, i, s);
    return g(a, hi, e.fontSize), a.color = z.makeHexColor(...e.color), g(a, li, w(o = Pt, En, gp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = Ct._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), s = Object.assign(super.serialize(e), {
      color: i,
      fontSize: n(this, hi),
      value: w(this, Xt, Rb).call(this)
    });
    return this.addComment(s), e ? (s.isCopy = !0, s) : this.annotationElementId && !w(this, Xt, Mb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }
  renderAnnotationElement(e) {
    const i = super.renderAnnotationElement(e);
    if (!i)
      return null;
    const {
      style: s
    } = i;
    s.fontSize = `calc(${n(this, hi)}px * var(--total-scale-factor))`, s.color = this.color, i.replaceChildren();
    for (const r of n(this, li).split(`
`)) {
      const a = document.createElement("div");
      a.append(r ? document.createTextNode(r) : document.createElement("br")), i.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: n(this, li)
      }
    }), i;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
li = new WeakMap(), Xc = new WeakMap(), Ra = new WeakMap(), hi = new WeakMap(), Xt = new WeakSet(), Cb = function(e) {
  const i = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, hi)) * this.parentScale), g(this, hi, r), w(this, Xt, Kd).call(this);
  }, s = n(this, hi);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Tb = function(e) {
  const i = (r) => {
    this.color = r, this.onUpdatedColor();
  }, s = this.color;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, Pb = function() {
  var s;
  const e = [];
  this.editorDiv.normalize();
  let i = null;
  for (const r of this.editorDiv.childNodes)
    (i == null ? void 0 : i.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(w(s = Pt, En, Jd).call(s, r)), i = r);
  return e.join(`
`);
}, Kd = function() {
  const [e, i] = this.parentDimensions;
  let s;
  if (this.isAttachedToDOM)
    s = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), s = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = s.width / e, this.height = s.height / i) : (this.width = s.height / e, this.height = s.width / i), this.fixAndSetPosition();
}, En = new WeakSet(), Jd = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(kd, "");
}, Qd = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, li))
    for (const e of n(this, li).split(`
`)) {
      const i = document.createElement("div");
      i.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(i);
    }
}, Rb = function() {
  return n(this, li).replaceAll(" ", " ");
}, gp = function(e) {
  return e.replaceAll(" ", " ");
}, Mb = function(e) {
  const {
    value: i,
    fontSize: s,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== i || e.fontSize !== s || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, b(Pt, En), D(Pt, "_freeTextDefaultContent", ""), D(Pt, "_internalPadding", 0), D(Pt, "_defaultColor", null), D(Pt, "_defaultFontSize", 10), D(Pt, "_type", "freetext"), D(Pt, "_editorType", q.FREETEXT);
let pp = Pt;
class U {
  toSVGPath() {
    Et("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    Et("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    Et("Abstract method `serialize` must be implemented.");
  }
  static _rescale(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * s, a[o + 1] = i + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * s, a[o + 1] = i + t[o] * r;
    return a;
  }
  static _translate(t, e, i, s) {
    s || (s = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2)
      s[r] = e + t[r], s[r + 1] = i + t[r + 1];
    return s;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, i, s, r) {
    switch (r) {
      case 90:
        return [1 - e / i, t / s];
      case 180:
        return [1 - t / i, 1 - e / s];
      case 270:
        return [e / i, 1 - t / s];
      default:
        return [t / i, e / s];
    }
  }
  static _normalizePagePoint(t, e, i) {
    switch (i) {
      case 90:
        return [1 - e, t];
      case 180:
        return [1 - t, 1 - e];
      case 270:
        return [e, 1 - t];
      default:
        return [t, e];
    }
  }
  static createBezierPoints(t, e, i, s, r, a) {
    return [(t + 5 * i) / 6, (e + 5 * s) / 6, (5 * i + r) / 6, (5 * s + a) / 6, (i + r) / 2, (s + a) / 2];
  }
}
D(U, "PRECISION", 1e-4);
var ci, Yi, El, _l, Cs, et, Ma, ka, Yc, Kc, Cl, Tl, ur, Jc, Ou, Bu, te, bh, kb, Db, Lb, Ib, Fb, Nb;
const Us = class Us {
  constructor({
    x: t,
    y: e
  }, i, s, r, a, o = 0) {
    b(this, te);
    b(this, ci);
    b(this, Yi, []);
    b(this, El);
    b(this, _l);
    b(this, Cs, []);
    b(this, et, new Float32Array(18));
    b(this, Ma);
    b(this, ka);
    b(this, Yc);
    b(this, Kc);
    b(this, Cl);
    b(this, Tl);
    b(this, ur, []);
    g(this, ci, i), g(this, Tl, r * s), g(this, _l, a), n(this, et).set([NaN, NaN, NaN, NaN, t, e], 6), g(this, El, o), g(this, Kc, n(Us, Jc) * s), g(this, Yc, n(Us, Bu) * s), g(this, Cl, s), n(this, ur).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, et)[8]);
  }
  add({
    x: t,
    y: e
  }) {
    var R;
    g(this, Ma, t), g(this, ka, e);
    const [i, s, r, a] = n(this, ci);
    let [o, l, h, d] = n(this, et).subarray(8, 12);
    const u = t - h, p = e - d, y = Math.hypot(u, p);
    if (y < n(this, Yc))
      return !1;
    const S = y - n(this, Kc), v = S / y, E = v * u, x = v * p;
    let T = o, _ = l;
    o = h, l = d, h += E, d += x, (R = n(this, ur)) == null || R.push(t, e);
    const f = -x / S, m = E / S, A = f * n(this, Tl), C = m * n(this, Tl);
    return n(this, et).set(n(this, et).subarray(2, 8), 0), n(this, et).set([h + A, d + C], 4), n(this, et).set(n(this, et).subarray(14, 18), 12), n(this, et).set([h - A, d - C], 16), isNaN(n(this, et)[6]) ? (n(this, Cs).length === 0 && (n(this, et).set([o + A, l + C], 2), n(this, Cs).push(NaN, NaN, NaN, NaN, (o + A - i) / r, (l + C - s) / a), n(this, et).set([o - A, l - C], 14), n(this, Yi).push(NaN, NaN, NaN, NaN, (o - A - i) / r, (l - C - s) / a)), n(this, et).set([T, _, o, l, h, d], 6), !this.isEmpty()) : (n(this, et).set([T, _, o, l, h, d], 6), Math.abs(Math.atan2(_ - l, T - o) - Math.atan2(x, E)) < Math.PI / 2 ? ([o, l, h, d] = n(this, et).subarray(2, 6), n(this, Cs).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - i) / r, ((l + d) / 2 - s) / a), [o, l, T, _] = n(this, et).subarray(14, 18), n(this, Yi).push(NaN, NaN, NaN, NaN, ((T + o) / 2 - i) / r, ((_ + l) / 2 - s) / a), !0) : ([T, _, o, l, h, d] = n(this, et).subarray(0, 6), n(this, Cs).push(((T + 5 * o) / 6 - i) / r, ((_ + 5 * l) / 6 - s) / a, ((5 * o + h) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + h) / 2 - i) / r, ((l + d) / 2 - s) / a), [h, d, o, l, T, _] = n(this, et).subarray(12, 18), n(this, Yi).push(((T + 5 * o) / 6 - i) / r, ((_ + 5 * l) / 6 - s) / a, ((5 * o + h) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + h) / 2 - i) / r, ((l + d) / 2 - s) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, Cs), e = n(this, Yi);
    if (isNaN(n(this, et)[6]) && !this.isEmpty())
      return w(this, te, kb).call(this);
    const i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let s = 6; s < t.length; s += 6)
      isNaN(t[s]) ? i.push(`L${t[s + 4]} ${t[s + 5]}`) : i.push(`C${t[s]} ${t[s + 1]} ${t[s + 2]} ${t[s + 3]} ${t[s + 4]} ${t[s + 5]}`);
    w(this, te, Lb).call(this, i);
    for (let s = e.length - 6; s >= 6; s -= 6)
      isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
    return w(this, te, Db).call(this, i), i.join(" ");
  }
  newFreeDrawOutline(t, e, i, s, r, a) {
    return new Ob(t, e, i, s, r, a);
  }
  getOutlines() {
    var u;
    const t = n(this, Cs), e = n(this, Yi), i = n(this, et), [s, r, a, o] = n(this, ci), l = new Float32Array((((u = n(this, ur)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, y = l.length - 2; p < y; p += 2)
      l[p] = (n(this, ur)[p] - s) / a, l[p + 1] = (n(this, ur)[p + 1] - r) / o;
    if (l[l.length - 2] = (n(this, Ma) - s) / a, l[l.length - 1] = (n(this, ka) - r) / o, isNaN(i[6]) && !this.isEmpty())
      return w(this, te, Ib).call(this, l);
    const h = new Float32Array(n(this, Cs).length + 24 + n(this, Yi).length);
    let d = t.length;
    for (let p = 0; p < d; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    d = w(this, te, Nb).call(this, h, d);
    for (let p = e.length - 6; p >= 6; p -= 6)
      for (let y = 0; y < 6; y += 2) {
        if (isNaN(e[p + y])) {
          h[d] = h[d + 1] = NaN, d += 2;
          continue;
        }
        h[d] = e[p + y], h[d + 1] = e[p + y + 1], d += 2;
      }
    return w(this, te, Fb).call(this, h, d), this.newFreeDrawOutline(h, l, n(this, ci), n(this, Cl), n(this, El), n(this, _l));
  }
};
ci = new WeakMap(), Yi = new WeakMap(), El = new WeakMap(), _l = new WeakMap(), Cs = new WeakMap(), et = new WeakMap(), Ma = new WeakMap(), ka = new WeakMap(), Yc = new WeakMap(), Kc = new WeakMap(), Cl = new WeakMap(), Tl = new WeakMap(), ur = new WeakMap(), Jc = new WeakMap(), Ou = new WeakMap(), Bu = new WeakMap(), te = new WeakSet(), bh = function() {
  const t = n(this, et).subarray(4, 6), e = n(this, et).subarray(16, 18), [i, s, r, a] = n(this, ci);
  return [(n(this, Ma) + (t[0] - e[0]) / 2 - i) / r, (n(this, ka) + (t[1] - e[1]) / 2 - s) / a, (n(this, Ma) + (e[0] - t[0]) / 2 - i) / r, (n(this, ka) + (e[1] - t[1]) / 2 - s) / a];
}, kb = function() {
  const [t, e, i, s] = n(this, ci), [r, a, o, l] = w(this, te, bh).call(this);
  return `M${(n(this, et)[2] - t) / i} ${(n(this, et)[3] - e) / s} L${(n(this, et)[4] - t) / i} ${(n(this, et)[5] - e) / s} L${r} ${a} L${o} ${l} L${(n(this, et)[16] - t) / i} ${(n(this, et)[17] - e) / s} L${(n(this, et)[14] - t) / i} ${(n(this, et)[15] - e) / s} Z`;
}, Db = function(t) {
  const e = n(this, Yi);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Lb = function(t) {
  const [e, i, s, r] = n(this, ci), a = n(this, et).subarray(4, 6), o = n(this, et).subarray(16, 18), [l, h, d, u] = w(this, te, bh).call(this);
  t.push(`L${(a[0] - e) / s} ${(a[1] - i) / r} L${l} ${h} L${d} ${u} L${(o[0] - e) / s} ${(o[1] - i) / r}`);
}, Ib = function(t) {
  const e = n(this, et), [i, s, r, a] = n(this, ci), [o, l, h, d] = w(this, te, bh).call(this), u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - i) / r, (e[3] - s) / a, NaN, NaN, NaN, NaN, (e[4] - i) / r, (e[5] - s) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, (e[16] - i) / r, (e[17] - s) / a, NaN, NaN, NaN, NaN, (e[14] - i) / r, (e[15] - s) / a], 0), this.newFreeDrawOutline(u, t, n(this, ci), n(this, Cl), n(this, El), n(this, _l));
}, Fb = function(t, e) {
  const i = n(this, Yi);
  return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e += 6;
}, Nb = function(t, e) {
  const i = n(this, et).subarray(4, 6), s = n(this, et).subarray(16, 18), [r, a, o, l] = n(this, ci), [h, d, u, p] = w(this, te, bh).call(this);
  return t.set([NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l], e), e += 24;
}, b(Us, Jc, 8), b(Us, Ou, 2), b(Us, Bu, n(Us, Jc) + n(Us, Ou));
let yu = Us;
var Pl, Da, mn, Qc, di, Zc, jt, Hu, Bb;
class Ob extends U {
  constructor(e, i, s, r, a, o) {
    super();
    b(this, Hu);
    b(this, Pl);
    b(this, Da, new Float32Array(4));
    b(this, mn);
    b(this, Qc);
    b(this, di);
    b(this, Zc);
    b(this, jt);
    g(this, jt, e), g(this, di, i), g(this, Pl, s), g(this, Zc, r), g(this, mn, a), g(this, Qc, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], w(this, Hu, Bb).call(this, o);
    const [l, h, d, u] = n(this, Da);
    for (let p = 0, y = e.length; p < y; p += 2)
      e[p] = (e[p] - l) / d, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, y = i.length; p < y; p += 2)
      i[p] = (i[p] - l) / d, i[p + 1] = (i[p + 1] - h) / u;
  }
  toSVGPath() {
    const e = [`M${n(this, jt)[4]} ${n(this, jt)[5]}`];
    for (let i = 6, s = n(this, jt).length; i < s; i += 6) {
      if (isNaN(n(this, jt)[i])) {
        e.push(`L${n(this, jt)[i + 4]} ${n(this, jt)[i + 5]}`);
        continue;
      }
      e.push(`C${n(this, jt)[i]} ${n(this, jt)[i + 1]} ${n(this, jt)[i + 2]} ${n(this, jt)[i + 3]} ${n(this, jt)[i + 4]} ${n(this, jt)[i + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, i, s, r], a) {
    const o = s - e, l = r - i;
    let h, d;
    switch (a) {
      case 0:
        h = U._rescale(n(this, jt), e, r, o, -l), d = U._rescale(n(this, di), e, r, o, -l);
        break;
      case 90:
        h = U._rescaleAndSwap(n(this, jt), e, i, o, l), d = U._rescaleAndSwap(n(this, di), e, i, o, l);
        break;
      case 180:
        h = U._rescale(n(this, jt), s, i, -o, l), d = U._rescale(n(this, di), s, i, -o, l);
        break;
      case 270:
        h = U._rescaleAndSwap(n(this, jt), s, r, -o, -l), d = U._rescaleAndSwap(n(this, di), s, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(d)]
    };
  }
  get box() {
    return n(this, Da);
  }
  newOutliner(e, i, s, r, a, o = 0) {
    return new yu(e, i, s, r, a, o);
  }
  getNewOutline(e, i) {
    const [s, r, a, o] = n(this, Da), [l, h, d, u] = n(this, Pl), p = a * d, y = o * u, S = s * d + l, v = r * u + h, E = this.newOutliner({
      x: n(this, di)[0] * p + S,
      y: n(this, di)[1] * y + v
    }, n(this, Pl), n(this, Zc), e, n(this, Qc), i ?? n(this, mn));
    for (let x = 2; x < n(this, di).length; x += 2)
      E.add({
        x: n(this, di)[x] * p + S,
        y: n(this, di)[x + 1] * y + v
      });
    return E.getOutlines();
  }
}
Pl = new WeakMap(), Da = new WeakMap(), mn = new WeakMap(), Qc = new WeakMap(), di = new WeakMap(), Zc = new WeakMap(), jt = new WeakMap(), Hu = new WeakSet(), Bb = function(e) {
  const i = n(this, jt);
  let s = i[4], r = i[5];
  const a = [s, r, s, r];
  let o = s, l = r, h = s, d = r;
  const u = e ? Math.max : Math.min, p = new Float32Array(4);
  for (let S = 6, v = i.length; S < v; S += 6) {
    const E = i[S + 4], x = i[S + 5];
    isNaN(i[S]) ? (z.pointBoundingBox(E, x, a), l > x ? (o = E, l = x) : l === x && (o = u(o, E)), d < x ? (h = E, d = x) : d === x && (h = u(h, E))) : (p[0] = p[1] = 1 / 0, p[2] = p[3] = -1 / 0, z.bezierBoundingBox(s, r, ...i.slice(S, S + 6), p), z.rectBoundingBox(p[0], p[1], p[2], p[3], a), l > p[1] ? (o = p[0], l = p[1]) : l === p[1] && (o = u(o, p[0])), d < p[3] ? (h = p[2], d = p[3]) : d === p[3] && (h = u(h, p[2]))), s = E, r = x;
  }
  const y = n(this, Da);
  y[0] = a[0] - n(this, mn), y[1] = a[1] - n(this, mn), y[2] = a[2] - a[0] + 2 * n(this, mn), y[3] = a[3] - a[1] + 2 * n(this, mn), this.firstPoint = [o, l], this.lastPoint = [h, d];
};
var td, ed, id, fr, Ki, $e, Hb, Zd, $b, Ub, bp;
class mp {
  constructor(t, e = 0, i = 0, s = !0) {
    b(this, $e);
    b(this, td);
    b(this, ed);
    b(this, id);
    b(this, fr, []);
    b(this, Ki, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0], a = 10 ** -4;
    for (const {
      x: v,
      y: E,
      width: x,
      height: T
    } of t) {
      const _ = Math.floor((v - e) / a) * a, f = Math.ceil((v + x + e) / a) * a, m = Math.floor((E - e) / a) * a, A = Math.ceil((E + T + e) / a) * a, C = [_, m, A, !0], P = [f, m, A, !1];
      n(this, fr).push(C, P), z.rectBoundingBox(_, m, f, A, r);
    }
    const o = r[2] - r[0] + 2 * i, l = r[3] - r[1] + 2 * i, h = r[0] - i, d = r[1] - i;
    let u = s ? -1 / 0 : 1 / 0, p = 1 / 0;
    const y = n(this, fr).at(s ? -1 : -2), S = [y[0], y[2]];
    for (const v of n(this, fr)) {
      const [E, x, T, _] = v;
      !_ && s ? x < p ? (p = x, u = E) : x === p && (u = Math.max(u, E)) : _ && !s && (x < p ? (p = x, u = E) : x === p && (u = Math.min(u, E))), v[0] = (E - h) / o, v[1] = (x - d) / l, v[2] = (T - d) / l;
    }
    g(this, td, new Float32Array([h, d, o, l])), g(this, ed, [u, p]), g(this, id, S);
  }
  getOutlines() {
    n(this, fr).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
    const t = [];
    for (const e of n(this, fr))
      e[3] ? (t.push(...w(this, $e, bp).call(this, e)), w(this, $e, $b).call(this, e)) : (w(this, $e, Ub).call(this, e), t.push(...w(this, $e, bp).call(this, e)));
    return w(this, $e, Hb).call(this, t);
  }
}
td = new WeakMap(), ed = new WeakMap(), id = new WeakMap(), fr = new WeakMap(), Ki = new WeakMap(), $e = new WeakSet(), Hb = function(t) {
  const e = [], i = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, h] = a;
    e.push([o, l, a], [o, h, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2], h = e[a + 1][2];
    l.push(h), h.push(l), i.add(l), i.add(h);
  }
  const s = [];
  let r;
  for (; i.size > 0; ) {
    const a = i.values().next().value;
    let [o, l, h, d, u] = a;
    i.delete(a);
    let p = o, y = l;
    for (r = [o, h], s.push(r); ; ) {
      let S;
      if (i.has(d))
        S = d;
      else if (i.has(u))
        S = u;
      else
        break;
      i.delete(S), [o, l, h, d, u] = S, p !== o && (r.push(p, y, o, y === l ? l : h), p = o), y = y === l ? h : l;
    }
    r.push(p, y);
  }
  return new D0(s, n(this, td), n(this, ed), n(this, id));
}, Zd = function(t) {
  const e = n(this, Ki);
  let i = 0, s = e.length - 1;
  for (; i <= s; ) {
    const r = i + s >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? i = r + 1 : s = r - 1;
  }
  return s + 1;
}, $b = function([, t, e]) {
  const i = w(this, $e, Zd).call(this, t);
  n(this, Ki).splice(i, 0, [t, e]);
}, Ub = function([, t, e]) {
  const i = w(this, $e, Zd).call(this, t);
  for (let s = i; s < n(this, Ki).length; s++) {
    const [r, a] = n(this, Ki)[s];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, Ki).splice(s, 1);
      return;
    }
  }
  for (let s = i - 1; s >= 0; s--) {
    const [r, a] = n(this, Ki)[s];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, Ki).splice(s, 1);
      return;
    }
  }
}, bp = function(t) {
  const [e, i, s] = t, r = [[e, i, s]], a = w(this, $e, Zd).call(this, s);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, Ki)[o];
    for (let d = 0, u = r.length; d < u; d++) {
      const [, p, y] = r[d];
      if (!(h <= p || y <= l)) {
        if (p >= l) {
          if (y > h)
            r[d][1] = h;
          else {
            if (u === 1)
              return [];
            r.splice(d, 1), d--, u--;
          }
          continue;
        }
        r[d][2] = l, y > h && r.push([e, h, y]);
      }
    }
  }
  return r;
};
var sd, Rl;
class D0 extends U {
  constructor(e, i, s, r) {
    super();
    b(this, sd);
    b(this, Rl);
    g(this, Rl, e), g(this, sd, i), this.firstPoint = s, this.lastPoint = r;
  }
  toSVGPath() {
    const e = [];
    for (const i of n(this, Rl)) {
      let [s, r] = i;
      e.push(`M${s} ${r}`);
      for (let a = 2; a < i.length; a += 2) {
        const o = i[a], l = i[a + 1];
        o === s ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), s = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, i, s, r], a) {
    const o = [], l = s - e, h = r - i;
    for (const d of n(this, Rl)) {
      const u = new Array(d.length);
      for (let p = 0; p < d.length; p += 2)
        u[p] = e + d[p] * l, u[p + 1] = r - d[p + 1] * h;
      o.push(u);
    }
    return o;
  }
  get box() {
    return n(this, sd);
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
sd = new WeakMap(), Rl = new WeakMap();
class yp extends yu {
  newFreeDrawOutline(t, e, i, s, r, a) {
    return new L0(t, e, i, s, r, a);
  }
}
class L0 extends Ob {
  newOutliner(t, e, i, s, r, a = 0) {
    return new yp(t, e, i, s, r, a);
  }
}
var Ml, nd, bn, La, rd, Xe, ad, od, Ia, ui, fi, me, kl, Dl, Re, Ll, Ii, ld, Q, wp, tu, zb, Gb, Wb, Ap, Lr, Ni, lo, jb, eu, iu, Vb, qb, Xb, Yb, Kb;
const ht = class ht extends Ct {
  constructor(e) {
    super({
      ...e,
      name: "highlightEditor"
    });
    b(this, Q);
    b(this, Ml, null);
    b(this, nd, 0);
    b(this, bn);
    b(this, La, null);
    b(this, rd, null);
    b(this, Xe, null);
    b(this, ad, null);
    b(this, od, 0);
    b(this, Ia, null);
    b(this, ui, null);
    b(this, fi, null);
    b(this, me, !1);
    b(this, kl, null);
    b(this, Dl, null);
    b(this, Re, null);
    b(this, Ll, "");
    b(this, Ii);
    b(this, ld, "");
    this.color = e.color || ht._defaultColor, g(this, Ii, e.thickness || ht._defaultThickness), this.opacity = e.opacity || ht._defaultOpacity, g(this, bn, e.boxes || null), g(this, ld, e.methodOfCreation || ""), g(this, Ll, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", e.highlightId > -1 ? (g(this, me, !0), w(this, Q, tu).call(this, e), w(this, Q, Lr).call(this)) : n(this, bn) && (g(this, Ml, e.anchorNode), g(this, nd, e.anchorOffset), g(this, ad, e.focusNode), g(this, od, e.focusOffset), w(this, Q, wp).call(this), w(this, Q, Lr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
  }
  static get _keyboardManager() {
    const e = ht.prototype;
    return J(this, "_keyboardManager", new md([[["ArrowLeft", "mac+ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: n(this, me) ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, Ii),
      methodOfCreation: n(this, ld)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  static initialize(e, i) {
    var s;
    Ct.initialize(e, i), ht._defaultColor || (ht._defaultColor = ((s = i.highlightColors) == null ? void 0 : s.values().next().value) || "#fff066");
  }
  static updateDefaultParams(e, i) {
    switch (e) {
      case it.HIGHLIGHT_COLOR:
        ht._defaultColor = i;
        break;
      case it.HIGHLIGHT_THICKNESS:
        ht._defaultThickness = i;
        break;
    }
  }
  translateInPage(e, i) {
  }
  get toolbarPosition() {
    return n(this, Dl);
  }
  get commentButtonPosition() {
    return n(this, kl);
  }
  updateParams(e, i) {
    switch (e) {
      case it.HIGHLIGHT_COLOR:
        w(this, Q, zb).call(this, i);
        break;
      case it.HIGHLIGHT_THICKNESS:
        w(this, Q, Gb).call(this, i);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, ht._defaultColor], [it.HIGHLIGHT_THICKNESS, ht._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, this.color || ht._defaultColor], [it.HIGHLIGHT_THICKNESS, n(this, Ii) || ht._defaultThickness], [it.HIGHLIGHT_FREE, n(this, me)]];
  }
  onUpdatedColor() {
    var e, i;
    (e = this.parent) == null || e.drawLayer.updateProperties(n(this, fi), {
      root: {
        fill: this.color,
        "fill-opacity": this.opacity
      }
    }), (i = n(this, rd)) == null || i.updateColor(this.color), super.onUpdatedColor();
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? [["colorPicker", g(this, rd, new Mh({
      editor: this
    }))]] : super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(w(this, Q, iu).call(this));
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(e, i) {
    return super.getRect(e, i, w(this, Q, iu).call(this));
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    w(this, Q, Ap).call(this), this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, Q, Lr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var s;
    let i = !1;
    this.parent && !e ? w(this, Q, Ap).call(this) : e && (w(this, Q, Lr).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains("selectedEditor"))), super.setParent(e), this.show(this._isVisible), i && this.select();
  }
  rotate(e) {
    var r, a, o;
    const {
      drawLayer: i
    } = this.parent;
    let s;
    n(this, me) ? (e = (e - this.rotation + 360) % 360, s = w(r = ht, Ni, lo).call(r, n(this, ui).box, e)) : s = w(a = ht, Ni, lo).call(a, [this.x, this.y, this.width, this.height], e), i.updateProperties(n(this, fi), {
      bbox: s,
      root: {
        "data-main-rotation": e
      }
    }), i.updateProperties(n(this, Re), {
      bbox: w(o = ht, Ni, lo).call(o, n(this, Xe).box, e),
      root: {
        "data-main-rotation": e
      }
    });
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    n(this, Ll) && (e.setAttribute("aria-label", n(this, Ll)), e.setAttribute("role", "mark")), n(this, me) ? e.classList.add("free") : this.div.addEventListener("keydown", w(this, Q, jb).bind(this), {
      signal: this._uiManager._signal
    });
    const i = g(this, Ia, document.createElement("div"));
    return e.append(i), i.setAttribute("aria-hidden", "true"), i.className = "internal", i.style.clipPath = n(this, La), this.setDims(this.width, this.height), mm(this, n(this, Ia), ["pointerover", "pointerleave"]), this.enableEditing(), e;
  }
  pointerover() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hovered: !0
      }
    });
  }
  pointerleave() {
    var e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hovered: !1
      }
    });
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        w(this, Q, eu).call(this, !0);
        break;
      case 1:
      case 3:
        w(this, Q, eu).call(this, !1);
        break;
    }
  }
  select() {
    var e;
    super.select(), n(this, Re) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hovered: !1,
        selected: !0
      }
    }));
  }
  unselect() {
    var e;
    super.unselect(), n(this, Re) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        selected: !1
      }
    }), n(this, me) || w(this, Q, eu).call(this, !1));
  }
  get _mustFixPosition() {
    return !n(this, me);
  }
  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, fi), {
      rootClass: {
        hidden: !e
      }
    }), this.parent.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hidden: !e
      }
    }));
  }
  static startHighlighting(e, i, {
    target: s,
    x: r,
    y: a
  }) {
    const {
      x: o,
      y: l,
      width: h,
      height: d
    } = s.getBoundingClientRect(), u = new AbortController(), p = e.combinedSignal(u), y = (S) => {
      u.abort(), w(this, Ni, Yb).call(this, e, S);
    };
    window.addEventListener("blur", y, {
      signal: p
    }), window.addEventListener("pointerup", y, {
      signal: p
    }), window.addEventListener("pointerdown", Nt, {
      capture: !0,
      passive: !1,
      signal: p
    }), window.addEventListener("contextmenu", Si, {
      signal: p
    }), s.addEventListener("pointermove", w(this, Ni, Xb).bind(this, e), {
      signal: p
    }), this._freeHighlight = new yp({
      x: r,
      y: a
    }, [o, l, h, d], e.scale, this._defaultThickness / 2, i, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, !0, !0);
  }
  static async deserialize(e, i, s) {
    var v, E, x, T;
    let r = null;
    if (e instanceof Eb) {
      const {
        data: {
          quadPoints: _,
          rect: f,
          rotation: m,
          id: A,
          color: C,
          opacity: P,
          popupRef: R,
          richText: M,
          contentsObj: k,
          creationDate: L,
          modificationDate: N
        },
        parent: {
          page: {
            pageNumber: I
          }
        }
      } = e;
      r = e = {
        annotationType: q.HIGHLIGHT,
        color: Array.from(C),
        opacity: P,
        quadPoints: _,
        boxes: null,
        pageIndex: I - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: M,
        comment: (k == null ? void 0 : k.str) || null,
        creationDate: L,
        modificationDate: N
      };
    } else if (e instanceof Zp) {
      const {
        data: {
          inkLists: _,
          rect: f,
          rotation: m,
          id: A,
          color: C,
          borderStyle: {
            rawWidth: P
          },
          popupRef: R,
          richText: M,
          contentsObj: k,
          creationDate: L,
          modificationDate: N
        },
        parent: {
          page: {
            pageNumber: I
          }
        }
      } = e;
      r = e = {
        annotationType: q.HIGHLIGHT,
        color: Array.from(C),
        thickness: P,
        inkLists: _,
        boxes: null,
        pageIndex: I - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: M,
        comment: (k == null ? void 0 : k.str) || null,
        creationDate: L,
        modificationDate: N
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h
    } = e, d = await super.deserialize(e, i, s);
    d.color = z.makeHexColor(...a), d.opacity = h || 1, l && g(d, Ii, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [u, p] = d.pageDimensions, [y, S] = d.pageTranslation;
    if (o) {
      const _ = g(d, bn, []);
      for (let f = 0; f < o.length; f += 8)
        _.push({
          x: (o[f] - y) / u,
          y: 1 - (o[f + 1] - S) / p,
          width: (o[f + 2] - o[f]) / u,
          height: (o[f + 1] - o[f + 5]) / p
        });
      w(v = d, Q, wp).call(v), w(E = d, Q, Lr).call(E), d.rotate(d.rotation);
    } else if (l) {
      g(d, me, !0);
      const _ = l[0], f = {
        x: _[0] - y,
        y: p - (_[1] - S)
      }, m = new yp(f, [0, 0, u, p], 1, n(d, Ii) / 2, !0, 1e-3);
      for (let P = 0, R = _.length; P < R; P += 2)
        f.x = _[P] - y, f.y = p - (_[P + 1] - S), m.add(f);
      const {
        id: A,
        clipPathId: C
      } = i.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: d.color,
          "fill-opacity": d._defaultOpacity
        },
        rootClass: {
          highlight: !0,
          free: !0
        },
        path: {
          d: m.toSVGPath()
        }
      }, !0, !0);
      w(x = d, Q, tu).call(x, {
        highlightOutlines: m.getOutlines(),
        highlightId: A,
        clipPathId: C
      }), w(T = d, Q, Lr).call(T), d.rotate(d.parentRotation);
    }
    return d;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = Ct._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), s = super.serialize(e);
    return Object.assign(s, {
      color: i,
      opacity: this.opacity,
      thickness: n(this, Ii),
      quadPoints: w(this, Q, Vb).call(this),
      outlines: w(this, Q, qb).call(this, s.rect)
    }), this.addComment(s), this.annotationElementId && !w(this, Q, Kb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Ml = new WeakMap(), nd = new WeakMap(), bn = new WeakMap(), La = new WeakMap(), rd = new WeakMap(), Xe = new WeakMap(), ad = new WeakMap(), od = new WeakMap(), Ia = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), me = new WeakMap(), kl = new WeakMap(), Dl = new WeakMap(), Re = new WeakMap(), Ll = new WeakMap(), Ii = new WeakMap(), ld = new WeakMap(), Q = new WeakSet(), wp = function() {
  const e = new mp(n(this, bn), 1e-3);
  g(this, ui, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, ui).box;
  const i = new mp(n(this, bn), 25e-4, 1e-3, this._uiManager.direction === "ltr");
  g(this, Xe, i.getOutlines());
  const {
    firstPoint: s
  } = n(this, ui);
  g(this, kl, [(s[0] - this.x) / this.width, (s[1] - this.y) / this.height]);
  const {
    lastPoint: r
  } = n(this, Xe);
  g(this, Dl, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, tu = function({
  highlightOutlines: e,
  highlightId: i,
  clipPathId: s
}) {
  var p, y;
  if (g(this, ui, e), g(this, Xe, e.getNewOutline(n(this, Ii) / 2 + 1.5, 25e-4)), i >= 0)
    g(this, fi, i), g(this, La, s), this.parent.drawLayer.finalizeDraw(i, {
      bbox: e.box,
      path: {
        d: e.toSVGPath()
      }
    }), g(this, Re, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0
      },
      bbox: n(this, Xe).box,
      path: {
        d: n(this, Xe).toSVGPath()
      }
    }, !0));
  else if (this.parent) {
    const S = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, fi), {
      bbox: w(p = ht, Ni, lo).call(p, n(this, ui).box, (S - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath()
      }
    }), this.parent.drawLayer.updateProperties(n(this, Re), {
      bbox: w(y = ht, Ni, lo).call(y, n(this, Xe).box, S),
      path: {
        d: n(this, Xe).toSVGPath()
      }
    });
  }
  const [a, o, l, h] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = l, this.height = h;
      break;
    case 90: {
      const [S, v] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = l * v / S, this.height = h * S / v;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = l, this.height = h;
      break;
    case 270: {
      const [S, v] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = l * v / S, this.height = h * S / v;
      break;
    }
  }
  const {
    firstPoint: d
  } = e;
  g(this, kl, [(d[0] - a) / l, (d[1] - o) / h]);
  const {
    lastPoint: u
  } = n(this, Xe);
  g(this, Dl, [(u[0] - a) / l, (u[1] - o) / h]);
}, zb = function(e) {
  const i = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }, s = this.color, r = this.opacity;
  this.addCommands({
    cmd: i.bind(this, e, ht._defaultOpacity),
    undo: i.bind(this, s, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "color_changed",
    color: this._uiManager.getNonHCMColorName(e)
  }, !0);
}, Gb = function(e) {
  const i = n(this, Ii), s = (r) => {
    g(this, Ii, r), w(this, Q, Wb).call(this, r);
  };
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0
  }), this._reportTelemetry({
    action: "thickness_changed",
    thickness: e
  }, !0);
}, Wb = function(e) {
  n(this, me) && (w(this, Q, tu).call(this, {
    highlightOutlines: n(this, ui).getNewOutline(e / 2)
  }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, Ap = function() {
  n(this, fi) === null || !this.parent || (this.parent.drawLayer.remove(n(this, fi)), g(this, fi, null), this.parent.drawLayer.remove(n(this, Re)), g(this, Re, null));
}, Lr = function(e = this.parent) {
  n(this, fi) === null && ({
    id: Kt(this, fi)._,
    clipPathId: Kt(this, La)._
  } = e.drawLayer.draw({
    bbox: n(this, ui).box,
    root: {
      viewBox: "0 0 1 1",
      fill: this.color,
      "fill-opacity": this.opacity
    },
    rootClass: {
      highlight: !0,
      free: n(this, me)
    },
    path: {
      d: n(this, ui).toSVGPath()
    }
  }, !1, !0), g(this, Re, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, me)
    },
    bbox: n(this, Xe).box,
    path: {
      d: n(this, Xe).toSVGPath()
    }
  }, n(this, me))), n(this, Ia) && (n(this, Ia).style.clipPath = n(this, La)));
}, Ni = new WeakSet(), lo = function([e, i, s, r], a) {
  switch (a) {
    case 90:
      return [1 - i - r, e, r, s];
    case 180:
      return [1 - e - s, 1 - i - r, s, r];
    case 270:
      return [i, 1 - e - s, r, s];
  }
  return [e, i, s, r];
}, jb = function(e) {
  ht._keyboardManager.exec(this, e);
}, eu = function(e) {
  if (!n(this, Ml))
    return;
  const i = window.getSelection();
  e ? i.setPosition(n(this, Ml), n(this, nd)) : i.setPosition(n(this, ad), n(this, od));
}, iu = function() {
  return n(this, me) ? this.rotation : 0;
}, Vb = function() {
  if (n(this, me))
    return null;
  const [e, i] = this.pageDimensions, [s, r] = this.pageTranslation, a = n(this, bn), o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: d,
    width: u,
    height: p
  } of a) {
    const y = h * e + s, S = (1 - d) * i + r;
    o[l] = o[l + 4] = y, o[l + 1] = o[l + 3] = S, o[l + 2] = o[l + 6] = y + u * e, o[l + 5] = o[l + 7] = S - p * i, l += 8;
  }
  return o;
}, qb = function(e) {
  return n(this, ui).serialize(e, w(this, Q, iu).call(this));
}, Xb = function(e, i) {
  this._freeHighlight.add(i) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath()
    }
  });
}, Yb = function(e, i) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(i, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: "main_toolbar"
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
}, Kb = function(e) {
  const {
    color: i
  } = this._initialData;
  return this.hasEditedComment || e.color.some((s, r) => s !== i[r]);
}, b(ht, Ni), D(ht, "_defaultColor", null), D(ht, "_defaultOpacity", 1), D(ht, "_defaultThickness", 12), D(ht, "_type", "highlight"), D(ht, "_editorType", q.HIGHLIGHT), D(ht, "_freeHighlightId", -1), D(ht, "_freeHighlight", null), D(ht, "_freeHighlightClipId", "");
let wu = ht;
var Fa;
class Jb {
  constructor() {
    b(this, Fa, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, i] of Object.entries(t))
        e.startsWith("_") || this.updateProperty(e, i);
  }
  updateSVGProperty(t, e) {
    n(this, Fa)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Fa);
    return g(this, Fa, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    g(this, Fa, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    Et("Not implemented");
  }
}
Fa = new WeakMap();
var pi, Il, re, Na, Oa, pr, gr, mr, Ba, at, vp, Sp, xp, yh, Qb, su, wh, ho;
const G = class G extends Ct {
  constructor(e) {
    super(e);
    b(this, at);
    b(this, pi, null);
    b(this, Il);
    D(this, "_colorPicker", null);
    D(this, "_drawId", null);
    g(this, Il, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  onUpdatedColor() {
    var e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _addOutlines(e) {
    e.drawOutlines && (w(this, at, vp).call(this, e), w(this, at, yh).call(this));
  }
  static _mergeSVGProperties(e, i) {
    const s = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(i))
      s.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    Et("Not implemented");
  }
  static get typesMap() {
    Et("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static updateDefaultParams(e, i) {
    const s = this.typesMap.get(e);
    s && this._defaultDrawingOptions.updateProperty(s, i), this._currentParent && (n(G, re).updateProperty(s, i), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, i) {
    const s = this.constructor.typesMap.get(e);
    s && this._updateProperty(e, s, i);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], i = this._defaultDrawingOptions;
    for (const [s, r] of this.typesMap)
      e.push([s, i[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: i
    } = this;
    for (const [s, r] of this.constructor.typesMap)
      e.push([s, i[r]]);
    return e;
  }
  _updateProperty(e, i, s) {
    const r = this._drawingOptions, a = r[i], o = (l) => {
      var d;
      r.updateProperty(i, l);
      const h = n(this, pi).updateProperty(i, l);
      h && w(this, at, wh).call(this, h), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
    };
    this.addCommands({
      cmd: o.bind(this, s),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties(n(this, pi).getPathResizingSVGProperties(w(this, at, su).call(this)), {
      bbox: w(this, at, ho).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties(n(this, pi).getPathResizedSVGProperties(w(this, at, su).call(this)), {
      bbox: w(this, at, ho).call(this)
    }));
  }
  _onTranslating(e, i) {
    var s;
    (s = this.parent) == null || s.drawLayer.updateProperties(this._drawId, {
      bbox: w(this, at, ho).call(this)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties(n(this, pi).getPathTranslatedSVGProperties(w(this, at, su).call(this), this.parentDimensions), {
      bbox: w(this, at, ho).call(this)
    }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Il) && (g(this, Il, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    w(this, at, xp).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, at, yh).call(this), w(this, at, wh).call(this, n(this, pi).box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var s;
    let i = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), w(this, at, xp).call(this)) : e && (this._uiManager.addShouldRescale(this), w(this, at, yh).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains("selectedEditor"))), super.setParent(e), i && this.select();
  }
  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties({
      bbox: w(this, at, ho).call(this)
    }, n(this, pi).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    this.parent && w(this, at, wh).call(this, n(this, pi).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    this._isCopy && (e = this.x, i = this.y);
    const s = super.render();
    s.classList.add("draw");
    const r = document.createElement("div");
    return s.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, i), s;
  }
  static createDrawerInstance(e, i, s, r, a) {
    Et("Not implemented");
  }
  static startDrawing(e, i, s, r) {
    var E;
    const {
      target: a,
      offsetX: o,
      offsetY: l,
      pointerId: h,
      pointerType: d
    } = r;
    if (n(G, gr) && n(G, gr) !== d)
      return;
    const {
      viewport: {
        rotation: u
      }
    } = e, {
      width: p,
      height: y
    } = a.getBoundingClientRect(), S = g(G, Na, new AbortController()), v = e.combinedSignal(S);
    if (n(G, pr) || g(G, pr, h), n(G, gr) ?? g(G, gr, d), window.addEventListener("pointerup", (x) => {
      var T;
      n(G, pr) === x.pointerId ? this._endDraw(x) : (T = n(G, mr)) == null || T.delete(x.pointerId);
    }, {
      signal: v
    }), window.addEventListener("pointercancel", (x) => {
      var T;
      n(G, pr) === x.pointerId ? this._currentParent.endDrawingSession() : (T = n(G, mr)) == null || T.delete(x.pointerId);
    }, {
      signal: v
    }), window.addEventListener("pointerdown", (x) => {
      n(G, gr) === x.pointerType && ((n(G, mr) || g(G, mr, /* @__PURE__ */ new Set())).add(x.pointerId), n(G, re).isCancellable() && (n(G, re).removeLastElement(), n(G, re).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: v
    }), window.addEventListener("contextmenu", Si, {
      signal: v
    }), a.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: v
    }), a.addEventListener("touchmove", (x) => {
      x.timeStamp === n(G, Ba) && Nt(x);
    }, {
      signal: v
    }), e.toggleDrawing(), (E = i._editorUndoBar) == null || E.hide(), n(G, re)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(G, re).startNew(o, l, p, y, u));
      return;
    }
    i.updateUIForDefaultProperties(this), g(G, re, this.createDrawerInstance(o, l, p, y, u)), g(G, Oa, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId
    } = e.drawLayer.draw(this._mergeSVGProperties(n(G, Oa).toSVGProperties(), n(G, re).defaultSVGProperties), !0, !1);
  }
  static _drawMove(e) {
    var a;
    if (g(G, Ba, -1), !n(G, re))
      return;
    const {
      offsetX: i,
      offsetY: s,
      pointerId: r
    } = e;
    if (n(G, pr) === r) {
      if (((a = n(G, mr)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(G, re).add(i, s)), g(G, Ba, e.timeStamp), Nt(e);
    }
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, g(G, re, null), g(G, Oa, null), g(G, gr, null), g(G, Ba, NaN)), n(G, Na) && (n(G, Na).abort(), g(G, Na, null), g(G, pr, NaN), g(G, mr, null));
  }
  static _endDraw(e) {
    const i = this._currentParent;
    if (i) {
      if (i.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === i.div && i.drawLayer.updateProperties(this._currentDrawId, n(G, re).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const s = n(G, re), r = this._currentDrawId, a = s.getLastElement();
        i.addCommands({
          cmd: () => {
            i.drawLayer.updateProperties(r, s.setLastElement(a));
          },
          undo: () => {
            i.drawLayer.updateProperties(r, s.removeLastElement());
          },
          mustExec: !1,
          type: it.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const i = this._currentParent;
    if (!i)
      return null;
    if (i.toggleDrawing(!0), i.cleanUndoStack(it.DRAW_STEP), !n(G, re).isEmpty()) {
      const {
        pageDimensions: [s, r],
        scale: a
      } = i, o = i.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        drawOutlines: n(G, re).getOutlines(s * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(G, Oa),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return i.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, i, s, r, a, o) {
    Et("Not implemented");
  }
  static async deserialize(e, i, s) {
    var u, p;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = i.viewport, h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e), d = await super.deserialize(e, i, s);
    return d.createDrawingOptions(e), w(u = d, at, vp).call(u, {
      drawOutlines: h
    }), w(p = d, at, yh).call(p), d.onScaleChanging(), d.rotate(), d;
  }
  serializeDraw(e) {
    const [i, s] = this.pageTranslation, [r, a] = this.pageDimensions;
    return n(this, pi).serialize([i, s, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect()
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
pi = new WeakMap(), Il = new WeakMap(), re = new WeakMap(), Na = new WeakMap(), Oa = new WeakMap(), pr = new WeakMap(), gr = new WeakMap(), mr = new WeakMap(), Ba = new WeakMap(), at = new WeakSet(), vp = function({
  drawOutlines: e,
  drawId: i,
  drawingOptions: s
}) {
  g(this, pi, e), this._drawingOptions || (this._drawingOptions = s), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), i >= 0 ? (this._drawId = i, this.parent.drawLayer.finalizeDraw(i, e.defaultProperties)) : this._drawId = w(this, at, Sp).call(this, e, this.parent), w(this, at, wh).call(this, e.box);
}, Sp = function(e, i) {
  const {
    id: s
  } = i.drawLayer.draw(G._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return s;
}, xp = function() {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, yh = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = w(this, at, Sp).call(this, n(this, pi), e);
  }
}, Qb = function([e, i, s, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [i, 1 - e, s * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [1 - i, e, s * (o / a), r * (a / o)];
    default:
      return [e, i, s, r];
  }
}, su = function() {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    parentDimensions: [a, o],
    rotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - i, e, s * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [i, 1 - e, s * (a / o), r * (o / a)];
    default:
      return [e, i, s, r];
  }
}, wh = function(e) {
  [this.x, this.y, this.width, this.height] = w(this, at, Qb).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, ho = function() {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - i - r, e, r, s];
    case 2:
      return [1 - e - s, 1 - i - r, s, r];
    case 3:
      return [i, 1 - e - s, r, s];
    case 4:
      return [e, i - s * (l / h), r * (h / l), s * (l / h)];
    case 5:
      return [1 - i, e, s * (l / h), r * (h / l)];
    case 6:
      return [1 - e - r * (h / l), 1 - i, r * (h / l), s * (l / h)];
    case 7:
      return [i - s * (l / h), 1 - e - r * (h / l), s * (l / h), r * (h / l)];
    case 8:
      return [e - s, i - r, s, r];
    case 9:
      return [1 - i, e - s, r, s];
    case 10:
      return [1 - e, 1 - i, s, r];
    case 11:
      return [i - r, 1 - e, r, s];
    case 12:
      return [e - r * (h / l), i, r * (h / l), s * (l / h)];
    case 13:
      return [1 - i - s * (l / h), e - r * (h / l), s * (l / h), r * (h / l)];
    case 14:
      return [1 - e, 1 - i - s * (l / h), r * (h / l), s * (l / h)];
    case 15:
      return [i, 1 - e, s * (l / h), r * (h / l)];
    default:
      return [e, i, s, r];
  }
}, D(G, "_currentDrawId", -1), D(G, "_currentParent", null), b(G, re, null), b(G, Na, null), b(G, Oa, null), b(G, pr, NaN), b(G, gr, null), b(G, mr, null), b(G, Ba, NaN), D(G, "_INNER_MARGIN", 3);
let Au = G;
var Ts, ae, oe, Ha, Fl, Fe, be, Fi, $a, Ua, za, Nl, nu;
class I0 {
  constructor(t, e, i, s, r, a) {
    b(this, Nl);
    b(this, Ts, new Float64Array(6));
    b(this, ae);
    b(this, oe);
    b(this, Ha);
    b(this, Fl);
    b(this, Fe);
    b(this, be, "");
    b(this, Fi, 0);
    b(this, $a, new yd());
    b(this, Ua);
    b(this, za);
    g(this, Ua, i), g(this, za, s), g(this, Ha, r), g(this, Fl, a), [t, e] = w(this, Nl, nu).call(this, t, e);
    const o = g(this, ae, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Fe, [t, e]), g(this, oe, [{
      line: o,
      points: n(this, Fe)
    }]), n(this, Ts).set(o, 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && g(this, Fl, e);
  }
  isEmpty() {
    return !n(this, oe) || n(this, oe).length === 0;
  }
  isCancellable() {
    return n(this, Fe).length <= 10;
  }
  add(t, e) {
    [t, e] = w(this, Nl, nu).call(this, t, e);
    const [i, s, r, a] = n(this, Ts).subarray(2, 6), o = t - r, l = e - a;
    return Math.hypot(n(this, Ua) * o, n(this, za) * l) <= 2 ? null : (n(this, Fe).push(t, e), isNaN(i) ? (n(this, Ts).set([r, a, t, e], 2), n(this, ae).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath()
      }
    }) : (isNaN(n(this, Ts)[0]) && n(this, ae).splice(6, 6), n(this, Ts).set([i, s, r, a, t, e], 0), n(this, ae).push(...U.createBezierPoints(i, s, r, a, t, e)), {
      path: {
        d: this.toSVGPath()
      }
    }));
  }
  end(t, e) {
    const i = this.add(t, e);
    return i || (n(this, Fe).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : null);
  }
  startNew(t, e, i, s, r) {
    g(this, Ua, i), g(this, za, s), g(this, Ha, r), [t, e] = w(this, Nl, nu).call(this, t, e);
    const a = g(this, ae, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Fe, [t, e]);
    const o = n(this, oe).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, oe).push({
      line: a,
      points: n(this, Fe)
    }), n(this, Ts).set(a, 0), g(this, Fi, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, oe).at(-1);
  }
  setLastElement(t) {
    return n(this, oe) ? (n(this, oe).push(t), g(this, ae, t.line), g(this, Fe, t.points), g(this, Fi, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, $a).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, oe))
      return n(this, $a).removeLastElement();
    n(this, oe).pop(), g(this, be, "");
    for (let t = 0, e = n(this, oe).length; t < e; t++) {
      const {
        line: i,
        points: s
      } = n(this, oe)[t];
      g(this, ae, i), g(this, Fe, s), g(this, Fi, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, be)
      }
    };
  }
  toSVGPath() {
    const t = U.svgRound(n(this, ae)[4]), e = U.svgRound(n(this, ae)[5]);
    if (n(this, Fe).length === 2)
      return g(this, be, `${n(this, be)} M ${t} ${e} Z`), n(this, be);
    if (n(this, Fe).length <= 6) {
      const s = n(this, be).lastIndexOf("M");
      g(this, be, `${n(this, be).slice(0, s)} M ${t} ${e}`), g(this, Fi, 6);
    }
    if (n(this, Fe).length === 4) {
      const s = U.svgRound(n(this, ae)[10]), r = U.svgRound(n(this, ae)[11]);
      return g(this, be, `${n(this, be)} L ${s} ${r}`), g(this, Fi, 12), n(this, be);
    }
    const i = [];
    n(this, Fi) === 0 && (i.push(`M ${t} ${e}`), g(this, Fi, 6));
    for (let s = n(this, Fi), r = n(this, ae).length; s < r; s += 6) {
      const [a, o, l, h, d, u] = n(this, ae).slice(s, s + 6).map(U.svgRound);
      i.push(`C${a} ${o} ${l} ${h} ${d} ${u}`);
    }
    return g(this, be, n(this, be) + i.join(" ")), g(this, Fi, n(this, ae).length), n(this, be);
  }
  getOutlines(t, e, i, s) {
    const r = n(this, oe).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, $a).build(n(this, oe), t, e, i, n(this, Ha), n(this, Fl), s), g(this, Ts, null), g(this, ae, null), g(this, oe, null), g(this, be, null), n(this, $a);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
Ts = new WeakMap(), ae = new WeakMap(), oe = new WeakMap(), Ha = new WeakMap(), Fl = new WeakMap(), Fe = new WeakMap(), be = new WeakMap(), Fi = new WeakMap(), $a = new WeakMap(), Ua = new WeakMap(), za = new WeakMap(), Nl = new WeakSet(), nu = function(t, e) {
  return U._normalizePoint(t, e, n(this, Ua), n(this, za), n(this, Ha));
};
var Ne, hd, cd, gi, Ps, Rs, Ol, Bl, Ga, we, Hs, Zb, ty, ey;
class yd extends U {
  constructor() {
    super(...arguments);
    b(this, we);
    b(this, Ne);
    b(this, hd, 0);
    b(this, cd);
    b(this, gi);
    b(this, Ps);
    b(this, Rs);
    b(this, Ol);
    b(this, Bl);
    b(this, Ga);
  }
  build(e, i, s, r, a, o, l) {
    g(this, Ps, i), g(this, Rs, s), g(this, Ol, r), g(this, Bl, a), g(this, Ga, o), g(this, cd, l ?? 0), g(this, gi, e), w(this, we, ty).call(this);
  }
  get thickness() {
    return n(this, Ga);
  }
  setLastElement(e) {
    return n(this, gi).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, gi).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: i
    } of n(this, gi)) {
      if (e.push(`M${U.svgRound(i[4])} ${U.svgRound(i[5])}`), i.length === 6) {
        e.push("Z");
        continue;
      }
      if (i.length === 12 && isNaN(i[6])) {
        e.push(`L${U.svgRound(i[10])} ${U.svgRound(i[11])}`);
        continue;
      }
      for (let s = 6, r = i.length; s < r; s += 6) {
        const [a, o, l, h, d, u] = i.subarray(s, s + 6).map(U.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${d} ${u}`);
      }
    }
    return e.join("");
  }
  serialize([e, i, s, r], a) {
    const o = [], l = [], [h, d, u, p] = w(this, we, Zb).call(this);
    let y, S, v, E, x, T, _, f, m;
    switch (n(this, Bl)) {
      case 0:
        m = U._rescale, y = e, S = i + r, v = s, E = -r, x = e + h * s, T = i + (1 - d - p) * r, _ = e + (h + u) * s, f = i + (1 - d) * r;
        break;
      case 90:
        m = U._rescaleAndSwap, y = e, S = i, v = s, E = r, x = e + d * s, T = i + h * r, _ = e + (d + p) * s, f = i + (h + u) * r;
        break;
      case 180:
        m = U._rescale, y = e + s, S = i, v = -s, E = r, x = e + (1 - h - u) * s, T = i + d * r, _ = e + (1 - h) * s, f = i + (d + p) * r;
        break;
      case 270:
        m = U._rescaleAndSwap, y = e + s, S = i + r, v = -s, E = -r, x = e + (1 - d - p) * s, T = i + (1 - h - u) * r, _ = e + (1 - d) * s, f = i + (1 - h) * r;
        break;
    }
    for (const {
      line: A,
      points: C
    } of n(this, gi))
      o.push(m(A, y, S, v, E, a ? new Array(A.length) : null)), l.push(m(C, y, S, v, E, a ? new Array(C.length) : null));
    return {
      lines: o,
      points: l,
      rect: [x, T, _, f]
    };
  }
  static deserialize(e, i, s, r, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: d
  }) {
    const u = [];
    let p, y, S, v, E;
    switch (h) {
      case 0:
        E = U._rescale, p = -e / s, y = i / r + 1, S = 1 / s, v = -1 / r;
        break;
      case 90:
        E = U._rescaleAndSwap, p = -i / r, y = -e / s, S = 1 / r, v = 1 / s;
        break;
      case 180:
        E = U._rescale, p = e / s + 1, y = -i / r, S = -1 / s, v = 1 / r;
        break;
      case 270:
        E = U._rescaleAndSwap, p = i / r + 1, y = e / s + 1, S = -1 / r, v = -1 / s;
        break;
    }
    if (!o) {
      o = [];
      for (const T of l) {
        const _ = T.length;
        if (_ === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, T[0], T[1]]));
          continue;
        }
        if (_ === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, T[0], T[1], NaN, NaN, NaN, NaN, T[2], T[3]]));
          continue;
        }
        const f = new Float32Array(3 * (_ - 2));
        o.push(f);
        let [m, A, C, P] = T.subarray(0, 4);
        f.set([NaN, NaN, NaN, NaN, m, A], 0);
        for (let R = 4; R < _; R += 2) {
          const M = T[R], k = T[R + 1];
          f.set(U.createBezierPoints(m, A, C, P, M, k), (R - 2) * 3), [m, A, C, P] = [C, P, M, k];
        }
      }
    }
    for (let T = 0, _ = o.length; T < _; T++)
      u.push({
        line: E(o[T].map((f) => f ?? NaN), p, y, S, v),
        points: E(l[T].map((f) => f ?? NaN), p, y, S, v)
      });
    const x = new this.prototype.constructor();
    return x.build(u, s, r, 1, h, d, a), x;
  }
  get box() {
    return n(this, Ne);
  }
  updateProperty(e, i) {
    return e === "stroke-width" ? w(this, we, ey).call(this, i) : null;
  }
  updateParentDimensions([e, i], s) {
    const [r, a] = w(this, we, Hs).call(this);
    g(this, Ps, e), g(this, Rs, i), g(this, Ol, s);
    const [o, l] = w(this, we, Hs).call(this), h = o - r, d = l - a, u = n(this, Ne);
    return u[0] -= h, u[1] -= d, u[2] += 2 * h, u[3] += 2 * d, u;
  }
  updateRotation(e) {
    return g(this, hd, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, Ne).map(U.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, i] = n(this, Ne);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${U.svgRound(e)} ${U.svgRound(i)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, i] = n(this, Ne);
    let s = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, hd)) {
      case 90:
        r = i / e, a = -e / i, l = e;
        break;
      case 180:
        s = -1, o = -1, l = e, h = i;
        break;
      case 270:
        r = -i / e, a = e / i, h = i;
        break;
      default:
        return "";
    }
    return `matrix(${s} ${r} ${a} ${o} ${U.svgRound(l)} ${U.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, i, s, r]) {
    const [a, o] = w(this, we, Hs).call(this), [l, h, d, u] = n(this, Ne);
    if (Math.abs(d - a) <= U.PRECISION || Math.abs(u - o) <= U.PRECISION) {
      const E = e + s / 2 - (l + d / 2), x = i + r / 2 - (h + u / 2);
      return {
        path: {
          "transform-origin": `${U.svgRound(e)} ${U.svgRound(i)}`,
          transform: `${this.rotationTransform} translate(${E} ${x})`
        }
      };
    }
    const p = (s - 2 * a) / (d - 2 * a), y = (r - 2 * o) / (u - 2 * o), S = d / s, v = u / r;
    return {
      path: {
        "transform-origin": `${U.svgRound(l)} ${U.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${S} ${v}) translate(${U.svgRound(a)} ${U.svgRound(o)}) scale(${p} ${y}) translate(${U.svgRound(-a)} ${U.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, i, s, r]) {
    const [a, o] = w(this, we, Hs).call(this), l = n(this, Ne), [h, d, u, p] = l;
    if (l[0] = e, l[1] = i, l[2] = s, l[3] = r, Math.abs(u - a) <= U.PRECISION || Math.abs(p - o) <= U.PRECISION) {
      const x = e + s / 2 - (h + u / 2), T = i + r / 2 - (d + p / 2);
      for (const {
        line: _,
        points: f
      } of n(this, gi))
        U._translate(_, x, T, _), U._translate(f, x, T, f);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${U.svgRound(e)} ${U.svgRound(i)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const y = (s - 2 * a) / (u - 2 * a), S = (r - 2 * o) / (p - 2 * o), v = -y * (h + a) + e + a, E = -S * (d + o) + i + o;
    if (y !== 1 || S !== 1 || v !== 0 || E !== 0)
      for (const {
        line: x,
        points: T
      } of n(this, gi))
        U._rescale(x, v, E, y, S, x), U._rescale(T, v, E, y, S, T);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${U.svgRound(e)} ${U.svgRound(i)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, i], s) {
    const [r, a] = s, o = n(this, Ne), l = e - o[0], h = i - o[1];
    if (n(this, Ps) === r && n(this, Rs) === a)
      for (const {
        line: d,
        points: u
      } of n(this, gi))
        U._translate(d, l, h, d), U._translate(u, l, h, u);
    else {
      const d = n(this, Ps) / r, u = n(this, Rs) / a;
      g(this, Ps, r), g(this, Rs, a);
      for (const {
        line: p,
        points: y
      } of n(this, gi))
        U._rescale(p, l, h, d, u, p), U._rescale(y, l, h, d, u, y);
      o[2] *= d, o[3] *= u;
    }
    return o[0] = e, o[1] = i, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${U.svgRound(e)} ${U.svgRound(i)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, Ne);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${U.svgRound(e[0])} ${U.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
}
Ne = new WeakMap(), hd = new WeakMap(), cd = new WeakMap(), gi = new WeakMap(), Ps = new WeakMap(), Rs = new WeakMap(), Ol = new WeakMap(), Bl = new WeakMap(), Ga = new WeakMap(), we = new WeakSet(), Hs = function(e = n(this, Ga)) {
  const i = n(this, cd) + e / 2 * n(this, Ol);
  return n(this, Bl) % 180 === 0 ? [i / n(this, Ps), i / n(this, Rs)] : [i / n(this, Rs), i / n(this, Ps)];
}, Zb = function() {
  const [e, i, s, r] = n(this, Ne), [a, o] = w(this, we, Hs).call(this, 0);
  return [e + a, i + o, s - 2 * a, r - 2 * o];
}, ty = function() {
  const e = g(this, Ne, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r
  } of n(this, gi)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6)
        z.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [d, u, p, y, S, v] = r.subarray(l, l + 6);
      z.bezierBoundingBox(a, o, d, u, p, y, S, v, e), a = S, o = v;
    }
  }
  const [i, s] = w(this, we, Hs).call(this);
  e[0] = Me(e[0] - i, 0, 1), e[1] = Me(e[1] - s, 0, 1), e[2] = Me(e[2] + i, 0, 1), e[3] = Me(e[3] + s, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, ey = function(e) {
  const [i, s] = w(this, we, Hs).call(this);
  g(this, Ga, e);
  const [r, a] = w(this, we, Hs).call(this), [o, l] = [r - i, a - s], h = n(this, Ne);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class Xu extends Jb {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: Ct._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, e) {
    t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new Xu(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var $u, iy;
const go = class go extends Au {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    b(this, $u);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, i) {
    Ct.initialize(e, i), this._defaultDrawingOptions = new Xu(i.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return J(this, "typesMap", /* @__PURE__ */ new Map([[it.INK_THICKNESS, "stroke-width"], [it.INK_COLOR, "stroke"], [it.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(e, i, s, r, a) {
    return new I0(e, i, s, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, i, s, r, a, o) {
    return yd.deserialize(e, i, s, r, a, o);
  }
  static async deserialize(e, i, s) {
    let r = null;
    if (e instanceof Zp) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: d,
          color: u,
          opacity: p,
          borderStyle: {
            rawWidth: y
          },
          popupRef: S,
          richText: v,
          contentsObj: E,
          creationDate: x,
          modificationDate: T
        },
        parent: {
          page: {
            pageNumber: _
          }
        }
      } = e;
      r = e = {
        annotationType: q.INK,
        color: Array.from(u),
        thickness: y,
        opacity: p,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: _ - 1,
        rect: l.slice(0),
        rotation: h,
        annotationElementId: d,
        id: d,
        deleted: !1,
        popupRef: S,
        richText: v,
        comment: (E == null ? void 0 : E.str) || null,
        creationDate: x,
        modificationDate: T
      };
    }
    const a = await super.deserialize(e, i, s);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new bu(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return it.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: i,
      parent: s
    } = this;
    i.updateSVGProperty("stroke-width"), s.drawLayer.updateProperties(e, i.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: i,
    opacity: s
  }) {
    this._drawingOptions = go.getDefaultDrawingOptions({
      stroke: z.makeHexColor(...e),
      "stroke-width": i,
      "stroke-opacity": s
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: i,
      points: s
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: r,
        "stroke-opacity": a,
        "stroke-width": o
      }
    } = this, l = Object.assign(super.serialize(e), {
      color: Ct._colorManager.convert(r),
      opacity: a,
      thickness: o,
      paths: {
        lines: i,
        points: s
      }
    });
    return this.addComment(l), e ? (l.isCopy = !0, l) : this.annotationElementId && !w(this, $u, iy).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const {
      points: i,
      rect: s
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: s,
      thickness: this._drawingOptions["stroke-width"],
      points: i,
      popup: this.comment
    }), null;
  }
};
$u = new WeakSet(), iy = function(e) {
  const {
    color: i,
    thickness: s,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== i[l]) || e.thickness !== s || e.opacity !== r || e.pageIndex !== a;
}, D(go, "_type", "ink"), D(go, "_editorType", q.INK), D(go, "_defaultDrawingOptions", null);
let Ep = go;
class _p extends yd {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const Dd = 8, Zl = 3;
var Wa, ct, Cp, Ji, sy, ny, Tp, ru, ry, ay, oy, Pp, Rp, ly;
class Ls {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: i,
    fontWeight: s
  }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1), d = h.getContext("2d", {
      alpha: !1
    });
    const u = 200, p = d.font = `${i} ${s} ${u}px ${e}`, {
      actualBoundingBoxLeft: y,
      actualBoundingBoxRight: S,
      actualBoundingBoxAscent: v,
      actualBoundingBoxDescent: E,
      fontBoundingBoxAscent: x,
      fontBoundingBoxDescent: T,
      width: _
    } = d.measureText(t), f = 1.5, m = Math.ceil(Math.max(Math.abs(y) + Math.abs(S) || 0, _) * f), A = Math.ceil(Math.max(Math.abs(v) + Math.abs(E) || u, Math.abs(x) + Math.abs(T) || u) * f);
    h = new OffscreenCanvas(m, A), d = h.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), d.font = p, d.filter = "grayscale(1)", d.fillStyle = "white", d.fillRect(0, 0, m, A), d.fillStyle = "black", d.fillText(t, m * (f - 1) / 2, A * (3 - f) / 2);
    const C = w(this, ct, Pp).call(this, d.getImageData(0, 0, m, A).data), P = w(this, ct, oy).call(this, C), R = w(this, ct, Rp).call(this, P), M = w(this, ct, Tp).call(this, C, m, A, R);
    return this.processDrawnLines({
      lines: {
        curves: M,
        width: m,
        height: A
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t, e, i, s, r) {
    const [a, o, l] = w(this, ct, ly).call(this, t), [h, d] = w(this, ct, ay).call(this, a, o, l, Math.hypot(o, l) * n(this, Wa).sigmaSFactor, n(this, Wa).sigmaR, n(this, Wa).kernelSize), u = w(this, ct, Rp).call(this, d), p = w(this, ct, Tp).call(this, h, o, l, u);
    return this.processDrawnLines({
      lines: {
        curves: p,
        width: o,
        height: l
      },
      pageWidth: e,
      pageHeight: i,
      rotation: s,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: i,
    rotation: s,
    innerMargin: r,
    mustSmooth: a,
    areContours: o
  }) {
    s % 180 !== 0 && ([e, i] = [i, e]);
    const {
      curves: l,
      width: h,
      height: d
    } = t, u = t.thickness ?? 0, p = [], y = Math.min(e / h, i / d), S = y / e, v = y / i, E = [];
    for (const {
      points: T
    } of l) {
      const _ = a ? w(this, ct, ry).call(this, T) : T;
      if (!_)
        continue;
      E.push(_);
      const f = _.length, m = new Float32Array(f), A = new Float32Array(3 * (f === 2 ? 2 : f - 2));
      if (p.push({
        line: A,
        points: m
      }), f === 2) {
        m[0] = _[0] * S, m[1] = _[1] * v, A.set([NaN, NaN, NaN, NaN, m[0], m[1]], 0);
        continue;
      }
      let [C, P, R, M] = _;
      C *= S, P *= v, R *= S, M *= v, m.set([C, P, R, M], 0), A.set([NaN, NaN, NaN, NaN, C, P], 0);
      for (let k = 4; k < f; k += 2) {
        const L = m[k] = _[k] * S, N = m[k + 1] = _[k + 1] * v;
        A.set(U.createBezierPoints(C, P, R, M, L, N), (k - 2) * 3), [C, P, R, M] = [R, M, L, N];
      }
    }
    if (p.length === 0)
      return null;
    const x = o ? new _p() : new yd();
    return x.build(p, e, i, 1, s, o ? 0 : u, r), {
      outline: x,
      newCurves: E,
      areContours: o,
      thickness: u,
      width: h,
      height: d
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: i,
    width: s,
    height: r
  }) {
    let a = 1 / 0, o = -1 / 0, l = 0;
    for (const _ of t) {
      l += _.length;
      for (let f = 2, m = _.length; f < m; f++) {
        const A = _[f] - _[f - 2];
        a = Math.min(a, A), o = Math.max(o, A);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const d = t.length, u = Dd + Zl * d, p = new Uint32Array(u);
    let y = 0;
    p[y++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * d) * h.BYTES_PER_ELEMENT, p[y++] = 0, p[y++] = s, p[y++] = r, p[y++] = e ? 0 : 1, p[y++] = Math.max(0, Math.floor(i ?? 0)), p[y++] = d, p[y++] = h.BYTES_PER_ELEMENT;
    for (const _ of t)
      p[y++] = _.length - 2, p[y++] = _[0], p[y++] = _[1];
    const S = new CompressionStream("deflate-raw"), v = S.writable.getWriter();
    await v.ready, v.write(p);
    const E = h.prototype.constructor;
    for (const _ of t) {
      const f = new E(_.length - 2);
      for (let m = 2, A = _.length; m < A; m++)
        f[m - 2] = _[m] - _[m - 2];
      v.write(f);
    }
    v.close();
    const x = await new Response(S.readable).arrayBuffer(), T = new Uint8Array(x);
    return nm(T);
  }
  static async decompressSignature(t) {
    try {
      const e = rw(t), {
        readable: i,
        writable: s
      } = new DecompressionStream("deflate-raw"), r = s.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null, o = 0;
      for await (const _ of i)
        a || (a = new Uint8Array(new Uint32Array(_.buffer, 0, 4)[0])), a.set(_, o), o += _.length;
      const l = new Uint32Array(a.buffer, 0, a.length >> 2), h = l[1];
      if (h !== 0)
        throw new Error(`Invalid version: ${h}`);
      const d = l[2], u = l[3], p = l[4] === 0, y = l[5], S = l[6], v = l[7], E = [], x = (Dd + Zl * S) * Uint32Array.BYTES_PER_ELEMENT;
      let T;
      switch (v) {
        case Int8Array.BYTES_PER_ELEMENT:
          T = new Int8Array(a.buffer, x);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          T = new Int16Array(a.buffer, x);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          T = new Int32Array(a.buffer, x);
          break;
      }
      o = 0;
      for (let _ = 0; _ < S; _++) {
        const f = l[Zl * _ + Dd], m = new Float32Array(f + 2);
        E.push(m);
        for (let A = 0; A < Zl - 1; A++)
          m[A] = l[Zl * _ + Dd + A + 1];
        for (let A = 0; A < f; A++)
          m[A + 2] = m[A] + T[o++];
      }
      return {
        areContours: p,
        thickness: y,
        outlines: E,
        width: d,
        height: u
      };
    } catch (e) {
      return X(`decompressSignature: ${e}`), null;
    }
  }
}
Wa = new WeakMap(), ct = new WeakSet(), Cp = function(t, e, i, s) {
  return i -= t, s -= e, i === 0 ? s > 0 ? 0 : 4 : i === 1 ? s + 6 : 2 - s;
}, Ji = new WeakMap(), sy = function(t, e, i, s, r, a, o) {
  const l = w(this, ct, Cp).call(this, i, s, r, a);
  for (let h = 0; h < 8; h++) {
    const d = (-h + l - o + 16) % 8, u = n(this, Ji)[2 * d], p = n(this, Ji)[2 * d + 1];
    if (t[(i + u) * e + (s + p)] !== 0)
      return d;
  }
  return -1;
}, ny = function(t, e, i, s, r, a, o) {
  const l = w(this, ct, Cp).call(this, i, s, r, a);
  for (let h = 0; h < 8; h++) {
    const d = (h + l + o + 16) % 8, u = n(this, Ji)[2 * d], p = n(this, Ji)[2 * d + 1];
    if (t[(i + u) * e + (s + p)] !== 0)
      return d;
  }
  return -1;
}, Tp = function(t, e, i, s) {
  const r = t.length, a = new Int32Array(r);
  for (let d = 0; d < r; d++)
    a[d] = t[d] <= s ? 1 : 0;
  for (let d = 1; d < i - 1; d++)
    a[d * e] = a[d * e + e - 1] = 0;
  for (let d = 0; d < e; d++)
    a[d] = a[e * i - 1 - d] = 0;
  let o = 1, l;
  const h = [];
  for (let d = 1; d < i - 1; d++) {
    l = 1;
    for (let u = 1; u < e - 1; u++) {
      const p = d * e + u, y = a[p];
      if (y === 0)
        continue;
      let S = d, v = u;
      if (y === 1 && a[p - 1] === 0)
        o += 1, v -= 1;
      else if (y >= 1 && a[p + 1] === 0)
        o += 1, v += 1, y > 1 && (l = y);
      else {
        y !== 1 && (l = Math.abs(y));
        continue;
      }
      const E = [u, d], x = v === u + 1, T = {
        isHole: x,
        points: E,
        id: o,
        parent: 0
      };
      h.push(T);
      let _;
      for (const k of h)
        if (k.id === l) {
          _ = k;
          break;
        }
      _ ? _.isHole ? T.parent = x ? _.parent : l : T.parent = x ? l : _.parent : T.parent = x ? l : 0;
      const f = w(this, ct, sy).call(this, a, e, d, u, S, v, 0);
      if (f === -1) {
        a[p] = -o, a[p] !== 1 && (l = Math.abs(a[p]));
        continue;
      }
      let m = n(this, Ji)[2 * f], A = n(this, Ji)[2 * f + 1];
      const C = d + m, P = u + A;
      S = C, v = P;
      let R = d, M = u;
      for (; ; ) {
        const k = w(this, ct, ny).call(this, a, e, R, M, S, v, 1);
        m = n(this, Ji)[2 * k], A = n(this, Ji)[2 * k + 1];
        const L = R + m, N = M + A;
        E.push(N, L);
        const I = R * e + M;
        if (a[I + 1] === 0 ? a[I] = -o : a[I] === 1 && (a[I] = o), L === d && N === u && R === C && M === P) {
          a[p] !== 1 && (l = Math.abs(a[p]));
          break;
        } else
          S = R, v = M, R = L, M = N;
      }
    }
  }
  return h;
}, ru = function(t, e, i, s) {
  if (i - e <= 4) {
    for (let C = e; C < i - 2; C += 2)
      s.push(t[C], t[C + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[i - 4] - r, l = t[i - 3] - a, h = Math.hypot(o, l), d = o / h, u = l / h, p = d * a - u * r, y = l / o, S = 1 / h, v = Math.atan(y), E = Math.cos(v), x = Math.sin(v), T = S * (Math.abs(E) + Math.abs(x)), _ = S * (1 - T + T ** 2), f = Math.max(Math.atan(Math.abs(x + E) * _), Math.atan(Math.abs(x - E) * _));
  let m = 0, A = e;
  for (let C = e + 2; C < i - 2; C += 2) {
    const P = Math.abs(p - d * t[C + 1] + u * t[C]);
    P > m && (A = C, m = P);
  }
  m > (h * f) ** 2 ? (w(this, ct, ru).call(this, t, e, A + 2, s), w(this, ct, ru).call(this, t, A, i, s)) : s.push(r, a);
}, ry = function(t) {
  const e = [], i = t.length;
  return w(this, ct, ru).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}, ay = function(t, e, i, s, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * s ** 2, h = a >> 1;
  for (let v = 0; v < a; v++) {
    const E = (v - h) ** 2;
    for (let x = 0; x < a; x++)
      o[v * a + x] = Math.exp((E + (x - h) ** 2) / l);
  }
  const d = new Float32Array(256), u = -2 * r ** 2;
  for (let v = 0; v < 256; v++)
    d[v] = Math.exp(v ** 2 / u);
  const p = t.length, y = new Uint8Array(p), S = new Uint32Array(256);
  for (let v = 0; v < i; v++)
    for (let E = 0; E < e; E++) {
      const x = v * e + E, T = t[x];
      let _ = 0, f = 0;
      for (let A = 0; A < a; A++) {
        const C = v + A - h;
        if (!(C < 0 || C >= i))
          for (let P = 0; P < a; P++) {
            const R = E + P - h;
            if (R < 0 || R >= e)
              continue;
            const M = t[C * e + R], k = o[A * a + P] * d[Math.abs(M - T)];
            _ += M * k, f += k;
          }
      }
      const m = y[x] = Math.round(_ / f);
      S[m]++;
    }
  return [y, S];
}, oy = function(t) {
  const e = new Uint32Array(256);
  for (const i of t)
    e[i]++;
  return e;
}, Pp = function(t) {
  const e = t.length, i = new Uint8ClampedArray(e >> 2);
  let s = -1 / 0, r = 1 / 0;
  for (let o = 0, l = i.length; o < l; o++) {
    const h = i[o] = t[o << 2];
    s = Math.max(s, h), r = Math.min(r, h);
  }
  const a = 255 / (s - r);
  for (let o = 0, l = i.length; o < l; o++)
    i[o] = (i[o] - r) * a;
  return i;
}, Rp = function(t) {
  let e, i = -1 / 0, s = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r, o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > i && (e - a > s && (s = e - a, o = e - 1), i = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--)
    ;
  return e;
}, ly = function(t) {
  const e = t, {
    width: i,
    height: s
  } = t, {
    maxDim: r
  } = n(this, Wa);
  let a = i, o = s;
  if (i > r || s > r) {
    let p = i, y = s, S = Math.log2(Math.max(i, s) / r);
    const v = Math.floor(S);
    S = S === v ? v - 1 : v;
    for (let x = 0; x < S; x++) {
      a = Math.ceil(p / 2), o = Math.ceil(y / 2);
      const T = new OffscreenCanvas(a, o);
      T.getContext("2d").drawImage(t, 0, 0, p, y, 0, 0, a, o), p = a, y = o, t !== e && t.close(), t = T.transferToImageBitmap();
    }
    const E = Math.min(r / a, r / o);
    a = Math.round(a * E), o = Math.round(o * E);
  }
  const h = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  h.fillStyle = "white", h.fillRect(0, 0, a, o), h.filter = "grayscale(1)", h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const d = h.getImageData(0, 0, a, o).data;
  return [w(this, ct, Pp).call(this, d), a, o];
}, b(Ls, ct), b(Ls, Wa, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), b(Ls, Ji, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class eg extends Jb {
  constructor() {
    super(), super.updateProperties({
      fill: Ct._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new eg();
    return t.updateAll(this), t;
  }
}
class ig extends Xu {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: Ct._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new ig(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var br, Ms, yr, ja;
const Ze = class Ze extends Au {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    b(this, br, !1);
    b(this, Ms, null);
    b(this, yr, null);
    b(this, ja, null);
    this._willKeepAspectRatio = !0, g(this, yr, e.signatureData || null), g(this, Ms, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, i) {
    Ct.initialize(e, i), this._defaultDrawingOptions = new eg(), this._defaultDrawnSignatureOptions = new ig(i.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return J(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!n(this, Ms)
    };
  }
  static computeTelemetryFinalData(e) {
    const i = e.get("hasDescription");
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0
    };
  }
  get isResizable() {
    return !0;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    const {
      _isCopy: s
    } = this;
    if (s && (this._isCopy = !1, e = this.x, i = this.y), super.render(), this._drawId === null)
      if (n(this, yr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: h,
          heightInPage: d
        } = n(this, yr), {
          rawDims: {
            pageWidth: u,
            pageHeight: p
          },
          rotation: y
        } = this.parent.viewport, S = Ls.processDrawnLines({
          lines: r,
          pageWidth: u,
          pageHeight: p,
          rotation: y,
          innerMargin: Ze._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(S, d, l, h);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: n(this, Ms) || ""
      }));
    return s && (this._isCopy = !0, this._moveAfterPaste(e, i)), this.div;
  }
  setUuid(e) {
    g(this, ja, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, ja);
  }
  get description() {
    return n(this, Ms);
  }
  set description(e) {
    g(this, Ms, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: e
    })), super.addEditToolbar().then((i) => {
      i == null || i.updateEditSignatureButton(e);
    }));
  }
  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: i,
      thickness: s,
      width: r,
      height: a
    } = n(this, yr), o = Math.max(r, a), l = Ls.processDrawnLines({
      lines: {
        curves: e.map((h) => ({
          points: h
        })),
        thickness: s,
        width: r,
        height: a
      },
      pageWidth: o,
      pageHeight: o,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: !1,
      areContours: i
    });
    return {
      areContours: i,
      outline: l.outline
    };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(e, i, s, r) {
    const {
      x: a,
      y: o
    } = this, {
      outline: l
    } = g(this, yr, e);
    g(this, br, l instanceof _p), this.description = s;
    let h;
    n(this, br) ? h = Ze.getDefaultDrawingOptions() : (h = Ze._defaultDrawnSignatureOptions.clone(), h.updateProperties({
      "stroke-width": l.thickness
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: h
    });
    const [, d] = this.pageDimensions;
    let u = i / d;
    u = u >= 1 ? 0.5 : u, this.width *= u / this.height, this.width >= 1 && (u *= 0.9 / this.width, this.width = 0.9), this.height = u, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!s
      }
    }), this.div.hidden = !1;
  }
  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s
      },
      rotation: r
    } = this.parent.viewport;
    return Ls.process(e, i, s, r, Ze._INNER_MARGIN);
  }
  getFromText(e, i) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return Ls.extractContoursFromText(e, i, s, r, a, Ze._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s
      },
      rotation: r
    } = this.parent.viewport;
    return Ls.processDrawnLines({
      lines: e,
      pageWidth: i,
      pageHeight: s,
      rotation: r,
      innerMargin: Ze._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: i
  }) {
    e ? this._drawingOptions = Ze.getDefaultDrawingOptions() : (this._drawingOptions = Ze._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      "stroke-width": i
    }));
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    const {
      lines: i,
      points: s
    } = this.serializeDraw(e), {
      _drawingOptions: {
        "stroke-width": r
      }
    } = this, a = Object.assign(super.serialize(e), {
      isSignature: !0,
      areContours: n(this, br),
      color: [0, 0, 0],
      thickness: n(this, br) ? 0 : r
    });
    return this.addComment(a), e ? (a.paths = {
      lines: i,
      points: s
    }, a.uuid = n(this, ja), a.isCopy = !0) : a.lines = i, n(this, Ms) && (a.accessibilityData = {
      type: "Figure",
      alt: n(this, Ms)
    }), a;
  }
  static deserializeDraw(e, i, s, r, a, o) {
    return o.areContours ? _p.deserialize(e, i, s, r, a, o) : yd.deserialize(e, i, s, r, a, o);
  }
  static async deserialize(e, i, s) {
    var a;
    const r = await super.deserialize(e, i, s);
    return g(r, br, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || "", g(r, ja, e.uuid), r;
  }
};
br = new WeakMap(), Ms = new WeakMap(), yr = new WeakMap(), ja = new WeakMap(), D(Ze, "_type", "signature"), D(Ze, "_editorType", q.SIGNATURE), D(Ze, "_defaultDrawingOptions", null);
let Mp = Ze;
var Dt, le, wr, yn, Ar, Hl, wn, Va, ks, mi, $l, ot, Ah, vh, au, ou, lu, Dp, hu, hy;
class kp extends Ct {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    b(this, ot);
    b(this, Dt, null);
    b(this, le, null);
    b(this, wr, null);
    b(this, yn, null);
    b(this, Ar, null);
    b(this, Hl, "");
    b(this, wn, null);
    b(this, Va, !1);
    b(this, ks, null);
    b(this, mi, !1);
    b(this, $l, !1);
    g(this, yn, e.bitmapUrl), g(this, Ar, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, i) {
    Ct.initialize(e, i);
  }
  static isHandlingMimeForPasting(e) {
    return uu.includes(e);
  }
  static paste(e, i) {
    i.pasteEditor({
      mode: q.STAMP
    }, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const i = e.get("hasAltText");
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, i = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: s
    } = this._uiManager;
    if (!s)
      throw new Error("No ML.");
    if (!await s.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await s.guess({
      name: "altText",
      request: {
        data: r,
        width: a,
        height: o,
        channels: r.length / (a * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), i && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var e;
    n(this, le) && (g(this, Dt, null), this._uiManager.imageManager.deleteId(n(this, le)), (e = n(this, wn)) == null || e.remove(), g(this, wn, null), n(this, ks) && (clearTimeout(n(this, ks)), g(this, ks, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, le) && w(this, ot, au).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, le) && n(this, wn) === null && w(this, ot, au).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, wr) || n(this, Dt) || n(this, yn) || n(this, Ar) || n(this, le) || n(this, Va));
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, i;
    return this._isCopy && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, Va) || (n(this, Dt) ? w(this, ot, ou).call(this) : w(this, ot, au).call(this)), this._isCopy && this._moveAfterPaste(e, i), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, i) {
    const {
      id: s,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, i);
    i.remove(), s && this._uiManager.imageManager.isValidId(s) && (g(this, le, s), r && g(this, Dt, r), g(this, Va, !1), w(this, ot, ou).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, ks) !== null && clearTimeout(n(this, ks)), g(this, ks, setTimeout(() => {
      g(this, ks, null), w(this, ot, Dp).call(this);
    }, 200));
  }
  copyCanvas(e, i, s = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, Dt), o = new ss();
    let l = n(this, Dt), h = r, d = a, u = null;
    if (i) {
      if (r > i || a > i) {
        const C = Math.min(i / r, i / a);
        h = Math.floor(r * C), d = Math.floor(a * C);
      }
      u = document.createElement("canvas");
      const y = u.width = Math.ceil(h * o.sx), S = u.height = Math.ceil(d * o.sy);
      n(this, mi) || (l = w(this, ot, lu).call(this, y, S));
      const v = u.getContext("2d");
      v.filter = this._uiManager.hcmFilter;
      let E = "white", x = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? x = "black" : lw.isDarkMode && (E = "#8f8f9d", x = "#42414d");
      const T = 15, _ = T * o.sx, f = T * o.sy, m = new OffscreenCanvas(_ * 2, f * 2), A = m.getContext("2d");
      A.fillStyle = E, A.fillRect(0, 0, _ * 2, f * 2), A.fillStyle = x, A.fillRect(0, 0, _, f), A.fillRect(_, f, _, f), v.fillStyle = v.createPattern(m, "repeat"), v.fillRect(0, 0, y, S), v.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, S);
    }
    let p = null;
    if (s) {
      let y, S;
      if (o.symmetric && l.width < e && l.height < e)
        y = l.width, S = l.height;
      else if (l = n(this, Dt), r > e || a > e) {
        const x = Math.min(e / r, e / a);
        y = Math.floor(r * x), S = Math.floor(a * x), n(this, mi) || (l = w(this, ot, lu).call(this, y, S));
      }
      const E = new OffscreenCanvas(y, S).getContext("2d", {
        willReadFrequently: !0
      });
      E.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, S), p = {
        width: y,
        height: S,
        data: E.getImageData(0, 0, y, S).data
      };
    }
    return {
      canvas: u,
      width: h,
      height: d,
      imageData: p
    };
  }
  static async deserialize(e, i, s) {
    var E;
    let r = null, a = !1;
    if (e instanceof _b) {
      const {
        data: {
          rect: x,
          rotation: T,
          id: _,
          structParent: f,
          popupRef: m,
          richText: A,
          contentsObj: C,
          creationDate: P,
          modificationDate: R
        },
        container: M,
        parent: {
          page: {
            pageNumber: k
          }
        },
        canvas: L
      } = e;
      let N, I;
      L ? (delete e.canvas, {
        id: N,
        bitmap: I
      } = s.imageManager.getFromCanvas(M.id, L), L.remove()) : (a = !0, e._hasNoCanvas = !0);
      const j = ((E = await i._structTree.getAriaAttributes(`${Wp}${_}`)) == null ? void 0 : E.get("aria-label")) || "";
      r = e = {
        annotationType: q.STAMP,
        bitmapId: N,
        bitmap: I,
        pageIndex: k - 1,
        rect: x.slice(0),
        rotation: T,
        annotationElementId: _,
        id: _,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: j
        },
        isSvg: !1,
        structParent: f,
        popupRef: m,
        richText: A,
        comment: (C == null ? void 0 : C.str) || null,
        creationDate: P,
        modificationDate: R
      };
    }
    const o = await super.deserialize(e, i, s), {
      rect: l,
      bitmap: h,
      bitmapUrl: d,
      bitmapId: u,
      isSvg: p,
      accessibilityData: y
    } = e;
    a ? (s.addMissingCanvas(e.id, o), g(o, Va, !0)) : u && s.imageManager.isValidId(u) ? (g(o, le, u), h && g(o, Dt, h)) : g(o, yn, d), g(o, mi, p);
    const [S, v] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / S, o.height = (l[3] - l[1]) / v, y && (o.altTextData = y), o._initialData = r, e.comment && o.setCommentData(e), g(o, $l, !!r), o;
  }
  serialize(e = !1, i = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = Object.assign(super.serialize(e), {
      bitmapId: n(this, le),
      isSvg: n(this, mi)
    });
    if (this.addComment(s), e)
      return s.bitmapUrl = w(this, ot, hu).call(this, !0), s.accessibilityData = this.serializeAltText(!0), s.isCopy = !0, s;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (s.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = w(this, ot, hy).call(this, s);
      return l.isSame ? null : (l.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1, s.id = this.annotationElementId, delete s.bitmapId, s);
    }
    if (i === null)
      return s;
    i.stamps || (i.stamps = /* @__PURE__ */ new Map());
    const o = n(this, mi) ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
    if (!i.stamps.has(n(this, le)))
      i.stamps.set(n(this, le), {
        area: o,
        serialized: s
      }), s.bitmap = w(this, ot, hu).call(this, !1);
    else if (n(this, mi)) {
      const l = i.stamps.get(n(this, le));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = w(this, ot, hu).call(this, !1));
    }
    return s;
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
}
Dt = new WeakMap(), le = new WeakMap(), wr = new WeakMap(), yn = new WeakMap(), Ar = new WeakMap(), Hl = new WeakMap(), wn = new WeakMap(), Va = new WeakMap(), ks = new WeakMap(), mi = new WeakMap(), $l = new WeakMap(), ot = new WeakSet(), Ah = function(e, i = !1) {
  if (!e) {
    this.remove();
    return;
  }
  g(this, Dt, e.bitmap), i || (g(this, le, e.id), g(this, mi, e.isSvg)), e.file && g(this, Hl, e.file.name), w(this, ot, ou).call(this);
}, vh = function() {
  if (g(this, wr, null), this._uiManager.enableWaiting(!1), !!n(this, wn)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Dt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Dt)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, au = function() {
  if (n(this, le)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, le)).then((s) => w(this, ot, Ah).call(this, s, !0)).finally(() => w(this, ot, vh).call(this));
    return;
  }
  if (n(this, yn)) {
    const s = n(this, yn);
    g(this, yn, null), this._uiManager.enableWaiting(!0), g(this, wr, this._uiManager.imageManager.getFromUrl(s).then((r) => w(this, ot, Ah).call(this, r)).finally(() => w(this, ot, vh).call(this)));
    return;
  }
  if (n(this, Ar)) {
    const s = n(this, Ar);
    g(this, Ar, null), this._uiManager.enableWaiting(!0), g(this, wr, this._uiManager.imageManager.getFromFile(s).then((r) => w(this, ot, Ah).call(this, r)).finally(() => w(this, ot, vh).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = uu.join(",");
  const i = this._uiManager._signal;
  g(this, wr, new Promise((s) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), w(this, ot, Ah).call(this, r);
      }
      s();
    }, {
      signal: i
    }), e.addEventListener("cancel", () => {
      this.remove(), s();
    }, {
      signal: i
    });
  }).finally(() => w(this, ot, vh).call(this))), e.click();
}, ou = function() {
  var h;
  const {
    div: e
  } = this;
  let {
    width: i,
    height: s
  } = n(this, Dt);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    i = this.width * r, s = this.height * a;
  else if (i > o * r || s > o * a) {
    const d = Math.min(o * r / i, o * a / s);
    i *= d, s *= d;
  }
  this._uiManager.enableWaiting(!1);
  const l = g(this, wn, document.createElement("canvas"));
  l.setAttribute("role", "img"), this.addContainer(l), this.width = i / r, this.height = s / a, this.setDims(), (h = this._initialOptions) != null && h.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), w(this, ot, Dp).call(this), n(this, $l) || (this.parent.addUndoableEditor(this), g(this, $l, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, Hl) && this.div.setAttribute("aria-description", n(this, Hl)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
}, lu = function(e, i) {
  const {
    width: s,
    height: r
  } = n(this, Dt);
  let a = s, o = r, l = n(this, Dt);
  for (; a > 2 * e || o > 2 * i; ) {
    const h = a, d = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * i && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext("2d").drawImage(l, 0, 0, h, d, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, Dp = function() {
  const [e, i] = this.parentDimensions, {
    width: s,
    height: r
  } = this, a = new ss(), o = Math.ceil(s * e * a.sx), l = Math.ceil(r * i * a.sy), h = n(this, wn);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const d = n(this, mi) ? n(this, Dt) : w(this, ot, lu).call(this, o, l), u = h.getContext("2d");
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, l);
}, hu = function(e) {
  if (e) {
    if (n(this, mi)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, le));
      if (r)
        return r;
    }
    const i = document.createElement("canvas");
    return {
      width: i.width,
      height: i.height
    } = n(this, Dt), i.getContext("2d").drawImage(n(this, Dt), 0, 0), i.toDataURL();
  }
  if (n(this, mi)) {
    const [i, s] = this.pageDimensions, r = Math.round(this.width * i * Cn.PDF_TO_CSS_UNITS), a = Math.round(this.height * s * Cn.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, Dt), 0, 0, n(this, Dt).width, n(this, Dt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, Dt));
}, hy = function(e) {
  var o;
  const {
    pageIndex: i,
    accessibilityData: {
      altText: s
    }
  } = this._initialData, r = e.pageIndex === i, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === s;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, D(kp, "_type", "stamp"), D(kp, "_editorType", q.STAMP);
var qa, Ul, vr, Sr, An, Ye, xr, zl, Gl, Qi, vn, he, Sn, Er, Wl, W, _r, St, Lp, cy, ls, Ip, Fp, cu;
const Ui = class Ui {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: i,
    structTreeLayer: s,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: d
  }) {
    b(this, St);
    b(this, qa);
    b(this, Ul, !1);
    b(this, vr, null);
    b(this, Sr, null);
    b(this, An, null);
    b(this, Ye, /* @__PURE__ */ new Map());
    b(this, xr, !1);
    b(this, zl, !1);
    b(this, Gl, !1);
    b(this, Qi, null);
    b(this, vn, null);
    b(this, he, null);
    b(this, Sn, null);
    b(this, Er, null);
    b(this, Wl, -1);
    b(this, W);
    const u = [...n(Ui, _r).values()];
    if (!Ui._initialized) {
      Ui._initialized = !0;
      for (const p of u)
        p.initialize(d, t);
    }
    t.registerEditorTypes(u), g(this, W, t), this.pageIndex = e, this.div = i, g(this, qa, r), g(this, vr, a), this.viewport = h, g(this, he, l), this.drawLayer = o, this._structTree = s, n(this, W).addLayer(this);
  }
  get isEmpty() {
    return n(this, Ye).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, W).getMode() === q.NONE;
  }
  updateToolbar(t) {
    n(this, W).updateToolbar(t);
  }
  updateMode(t = n(this, W).getMode()) {
    switch (w(this, St, cu).call(this), t) {
      case q.NONE:
        this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case q.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case q.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    if (e.toggle("nonEditing", !1), t === q.POPUP)
      e.toggle("commentEditing", !0);
    else {
      e.toggle("commentEditing", !1);
      for (const i of n(Ui, _r).values())
        e.toggle(`${i._type}Editing`, t === i._editorType);
    }
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, he)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, W).setEditingState(t);
  }
  addCommands(t) {
    n(this, W).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, W).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = n(this, vr)) == null || e.div.classList.toggle("disabled", !t);
  }
  async enable() {
    var i;
    g(this, Gl, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), (i = n(this, Er)) == null || i.abort(), g(this, Er, null);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, St, Lp))
      s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, W).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const e = n(this, vr);
    if (e)
      for (const s of e.getEditableAnnotations()) {
        if (s.hide(), n(this, W).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id))
          continue;
        const r = await this.deserialize(s);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    g(this, Gl, !1), n(this, W)._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    var i;
    if (g(this, zl, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), n(this, he) && !n(this, Er)) {
      g(this, Er, new AbortController());
      const s = n(this, W).combinedSignal(n(this, Er));
      n(this, he).div.addEventListener("pointerdown", (r) => {
        const {
          clientX: o,
          clientY: l,
          timeStamp: h
        } = r, d = n(this, Wl);
        if (h - d > 500) {
          g(this, Wl, h);
          return;
        }
        g(this, Wl, -1);
        const {
          classList: u
        } = this.div;
        u.toggle("getElements", !0);
        const p = document.elementsFromPoint(o, l);
        if (u.toggle("getElements", !1), !this.div.contains(p[0]))
          return;
        let y;
        const S = new RegExp(`^${Eh}[0-9]+$`);
        for (const E of p)
          if (S.test(E.id)) {
            y = E.id;
            break;
          }
        if (!y)
          return;
        const v = n(this, Ye).get(y);
        (v == null ? void 0 : v.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), v.dblclick(r));
      }, {
        signal: s,
        capture: !0
      });
    }
    const t = n(this, vr);
    if (t) {
      const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (const o of n(this, St, Lp)) {
        if (o.disableEditing(), !o.annotationElementId) {
          o.updateFakeAnnotationElement(t);
          continue;
        }
        if (o.serialize() !== null) {
          s.set(o.annotationElementId, o);
          continue;
        } else
          r.set(o.annotationElementId, o);
        (i = this.getEditableAnnotation(o.annotationElementId)) == null || i.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const {
          id: l
        } = o.data;
        if (n(this, W).isDeletedAnnotationElement(l)) {
          o.updateEdited({
            deleted: !0
          });
          continue;
        }
        let h = r.get(l);
        if (h) {
          h.resetAnnotationElement(o), h.show(!1), o.show();
          continue;
        }
        h = s.get(l), h && (n(this, W).addChangedExistingAnnotation(h), h.renderAnnotationElement(o) && h.show(!1)), o.show();
      }
    }
    w(this, St, cu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: e
    } = this.div;
    for (const s of n(Ui, _r).values())
      e.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), g(this, zl, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, vr)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, W).getActive() !== t && n(this, W).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, he)) != null && t.div && !n(this, Sn)) {
      g(this, Sn, new AbortController());
      const e = n(this, W).combinedSignal(n(this, Sn));
      n(this, he).div.addEventListener("pointerdown", w(this, St, cy).bind(this), {
        signal: e
      }), n(this, he).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, he)) != null && t.div && n(this, Sn) && (n(this, Sn).abort(), g(this, Sn, null), n(this, he).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, Sr))
      return;
    g(this, Sr, new AbortController());
    const t = n(this, W).combinedSignal(n(this, Sr));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = n(this, Sr)) == null || t.abort(), g(this, Sr, null);
  }
  attach(t) {
    n(this, Ye).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, W).isDeletedAnnotationElement(e) && n(this, W).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, Ye).delete(t.id), (e = n(this, qa)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, zl) && t.annotationElementId && n(this, W).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, W).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, W).addDeletedAnnotationElement(t.annotationElementId), Ct.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, W).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, Gl)), n(this, W).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var i;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, An) && (t._focusEventsAllowed = !1, g(this, An, setTimeout(() => {
      g(this, An, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, W)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (i = n(this, qa)) == null ? void 0 : i.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), i = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: i,
      mustExec: !1
    });
  }
  getEditorByUID(t) {
    for (const e of n(this, Ye).values())
      if (e.uid === t)
        return e;
    return null;
  }
  getNextId() {
    return n(this, W).getId();
  }
  combinedSignal(t) {
    return n(this, W).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, St, ls)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, W).updateMode(t.mode);
    const {
      offsetX: i,
      offsetY: s
    } = w(this, St, Fp).call(this), r = this.getNextId(), a = w(this, St, Ip).call(this, {
      parent: this,
      id: r,
      x: i,
      y: s,
      uiManager: n(this, W),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n(Ui, _r).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, W))) || null;
  }
  createAndAddNewEditor(t, e, i = {}) {
    const s = this.getNextId(), r = w(this, St, Ip).call(this, {
      parent: this,
      id: s,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, W),
      isCentered: e,
      ...i
    });
    return r && this.add(r), r;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(w(this, St, Fp).call(this), !0, t);
  }
  setSelected(t) {
    n(this, W).setSelected(t);
  }
  toggleSelected(t) {
    n(this, W).toggleSelected(t);
  }
  unselect(t) {
    n(this, W).unselect(t);
  }
  pointerup(t) {
    var s;
    const {
      isMac: e
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, xr) || (g(this, xr, !1), (s = n(this, St, ls)) != null && s.isDrawer && n(this, St, ls).supportMultipleDrawings))
      return;
    if (!n(this, Ul)) {
      g(this, Ul, !0);
      return;
    }
    const i = n(this, W).getMode();
    if (i === q.STAMP || i === q.SIGNATURE) {
      n(this, W).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    var s;
    if (n(this, W).getMode() === q.HIGHLIGHT && this.enableTextSelection(), n(this, xr)) {
      g(this, xr, !1);
      return;
    }
    const {
      isMac: e
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (g(this, xr, !0), (s = n(this, St, ls)) != null && s.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const i = n(this, W).getActive();
    g(this, Ul, !i || i.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), n(this, Qi)) {
      n(this, St, ls).startDrawing(this, n(this, W), !1, t);
      return;
    }
    n(this, W).setCurrentDrawingSession(this), g(this, Qi, new AbortController());
    const e = n(this, W).combinedSignal(n(this, Qi));
    this.div.addEventListener("blur", ({
      relatedTarget: i
    }) => {
      i && !this.div.contains(i) && (g(this, vn, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, St, ls).startDrawing(this, n(this, W), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && g(this, vn, e);
      return;
    }
    n(this, vn) && setTimeout(() => {
      var e;
      (e = n(this, vn)) == null || e.focus(), g(this, vn, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, Qi) ? (n(this, W).setCurrentDrawingSession(null), n(this, Qi).abort(), g(this, Qi, null), g(this, vn, null), n(this, St, ls).endDrawing(t)) : null;
  }
  findNewParent(t, e, i) {
    const s = n(this, W).findParent(e, i);
    return s === null || s === this ? !1 : (s.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, Qi) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, Qi) && n(this, St, ls).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, W).getActive()) == null ? void 0 : t.parent) === this && (n(this, W).commitOrRemove(), n(this, W).setActiveEditor(null)), n(this, An) && (clearTimeout(n(this, An)), g(this, An, null));
    for (const i of n(this, Ye).values())
      (e = n(this, qa)) == null || e.removePointerInTextLayer(i.contentDiv), i.setParent(null), i.isAttachedToDOM = !1, i.div.remove();
    this.div = null, n(this, Ye).clear(), n(this, W).removeLayer(this);
  }
  render({
    viewport: t
  }) {
    this.viewport = t, Cr(this.div, t);
    for (const e of n(this, W).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, W).commitOrRemove(), w(this, St, cu).call(this);
    const e = this.viewport.rotation, i = t.rotation;
    if (this.viewport = t, Cr(this.div, {
      rotation: i
    }), e !== i)
      for (const s of n(this, Ye).values())
        s.rotate(i);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, W).viewParameters.realScale;
  }
};
qa = new WeakMap(), Ul = new WeakMap(), vr = new WeakMap(), Sr = new WeakMap(), An = new WeakMap(), Ye = new WeakMap(), xr = new WeakMap(), zl = new WeakMap(), Gl = new WeakMap(), Qi = new WeakMap(), vn = new WeakMap(), he = new WeakMap(), Sn = new WeakMap(), Er = new WeakMap(), Wl = new WeakMap(), W = new WeakMap(), _r = new WeakMap(), St = new WeakSet(), Lp = function() {
  return n(this, Ye).size !== 0 ? n(this, Ye).values() : n(this, W).getEditors(this.pageIndex);
}, cy = function(t) {
  n(this, W).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, he).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && n(this, he).div.contains(e)) {
    const {
      isMac: i
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && i)
      return;
    n(this, W).showAllEditors("highlight", !0, !0), n(this, he).div.classList.add("free"), this.toggleDrawing(), wu.startHighlighting(this, n(this, W).direction === "ltr", {
      target: n(this, he).div,
      x: t.x,
      y: t.y
    }), n(this, he).div.addEventListener("pointerup", () => {
      n(this, he).div.classList.remove("free"), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, W)._signal
    }), t.preventDefault();
  }
}, ls = function() {
  return n(Ui, _r).get(n(this, W).getMode());
}, Ip = function(t) {
  const e = n(this, St, ls);
  return e ? new e.prototype.constructor(t) : null;
}, Fp = function() {
  const {
    x: t,
    y: e,
    width: i,
    height: s
  } = this.boundingClientRect, r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + i), l = Math.min(window.innerHeight, e + s), h = (r + o) / 2 - t, d = (a + l) / 2 - e, [u, p] = this.viewport.rotation % 180 === 0 ? [h, d] : [d, h];
  return {
    offsetX: u,
    offsetY: p
  };
}, cu = function() {
  for (const t of n(this, Ye).values())
    t.isEmpty() && t.remove();
}, D(Ui, "_initialized", !1), b(Ui, _r, new Map([pp, Ep, kp, wu, Mp].map((t) => [t._editorType, t])));
let vu = Ui;
var Zi, Oe, Xa, dd, Uu, dy, Fs, Np, uy, Op;
const Jt = class Jt {
  constructor({
    pageIndex: t
  }) {
    b(this, Fs);
    b(this, Zi, null);
    b(this, Oe, /* @__PURE__ */ new Map());
    b(this, Xa, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }
  setParent(t) {
    if (!n(this, Zi)) {
      g(this, Zi, t);
      return;
    }
    if (n(this, Zi) !== t) {
      if (n(this, Oe).size > 0)
        for (const e of n(this, Oe).values())
          e.remove(), t.append(e);
      g(this, Zi, t);
    }
  }
  static get _svgFactory() {
    return J(this, "_svgFactory", new kh());
  }
  draw(t, e = !1, i = !1) {
    const s = Kt(Jt, dd)._++, r = w(this, Fs, Np).call(this), a = Jt._svgFactory.createElement("defs");
    r.append(a);
    const o = Jt._svgFactory.createElement("path");
    a.append(o);
    const l = `path_p${this.pageIndex}_${s}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, Xa).set(s, o);
    const h = i ? w(this, Fs, uy).call(this, a, l) : null, d = Jt._svgFactory.createElement("use");
    return r.append(d), d.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, Oe).set(s, r), {
      id: s,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const i = Kt(Jt, dd)._++, s = w(this, Fs, Np).call(this), r = Jt._svgFactory.createElement("defs");
    s.append(r);
    const a = Jt._svgFactory.createElement("path");
    r.append(a);
    const o = `path_p${this.pageIndex}_${i}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const u = Jt._svgFactory.createElement("mask");
      r.append(u), l = `mask_p${this.pageIndex}_${i}`, u.setAttribute("id", l), u.setAttribute("maskUnits", "objectBoundingBox");
      const p = Jt._svgFactory.createElement("rect");
      u.append(p), p.setAttribute("width", "1"), p.setAttribute("height", "1"), p.setAttribute("fill", "white");
      const y = Jt._svgFactory.createElement("use");
      u.append(y), y.setAttribute("href", `#${o}`), y.setAttribute("stroke", "none"), y.setAttribute("fill", "black"), y.setAttribute("fill-rule", "nonzero"), y.classList.add("mask");
    }
    const h = Jt._svgFactory.createElement("use");
    s.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const d = h.cloneNode();
    return s.append(d), h.classList.add("mainOutline"), d.classList.add("secondaryOutline"), this.updateProperties(s, t), n(this, Oe).set(i, s), i;
  }
  finalizeDraw(t, e) {
    n(this, Xa).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: i,
      bbox: s,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? n(this, Oe).get(t) : t;
    if (o) {
      if (i && w(this, Fs, Op).call(this, o, i), s && w(l = Jt, Uu, dy).call(l, o, s), r) {
        const {
          classList: h
        } = o;
        for (const [d, u] of Object.entries(r))
          h.toggle(d, u);
      }
      if (a) {
        const d = o.firstChild.firstChild;
        w(this, Fs, Op).call(this, d, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const i = n(this, Oe).get(t);
    i && (n(e, Zi).append(i), n(this, Oe).delete(t), n(e, Oe).set(t, i));
  }
  remove(t) {
    n(this, Xa).delete(t), n(this, Zi) !== null && (n(this, Oe).get(t).remove(), n(this, Oe).delete(t));
  }
  destroy() {
    g(this, Zi, null);
    for (const t of n(this, Oe).values())
      t.remove();
    n(this, Oe).clear(), n(this, Xa).clear();
  }
};
Zi = new WeakMap(), Oe = new WeakMap(), Xa = new WeakMap(), dd = new WeakMap(), Uu = new WeakSet(), dy = function(t, [e, i, s, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * i}%`, a.left = `${100 * e}%`, a.width = `${100 * s}%`, a.height = `${100 * r}%`;
}, Fs = new WeakSet(), Np = function() {
  const t = Jt._svgFactory.create(1, 1, !0);
  return n(this, Zi).append(t), t.setAttribute("aria-hidden", !0), t;
}, uy = function(t, e) {
  const i = Jt._svgFactory.createElement("clipPath");
  t.append(i);
  const s = `clip_${e}`;
  i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = Jt._svgFactory.createElement("use");
  return i.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), s;
}, Op = function(t, e) {
  for (const [i, s] of Object.entries(e))
    s === null ? t.removeAttribute(i) : t.setAttribute(i, s);
}, b(Jt, Uu), b(Jt, dd, 0);
let Su = Jt;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: mp
};
globalThis.pdfjsLib = {
  AbortException: _n,
  AnnotationEditorLayer: vu,
  AnnotationEditorParamsType: it,
  AnnotationEditorType: q,
  AnnotationEditorUIManager: Tr,
  AnnotationLayer: tg,
  AnnotationMode: Ds,
  AnnotationType: Gt,
  applyOpacity: hm,
  build: fb,
  ColorPicker: Mh,
  createValidAbsoluteUrl: Up,
  CSSConstants: lm,
  DOMSVGFactory: kh,
  DrawLayer: Su,
  FeatureTest: ce,
  fetchData: Xl,
  findContrastColor: cm,
  getDocument: Kp,
  getFilenameFromUrl: rm,
  getPdfFilenameFromUrl: am,
  getRGB: Yl,
  getUuid: Gp,
  getXfaPageViewport: om,
  GlobalWorkerOptions: ts,
  ImageKind: xh,
  InvalidPDFException: du,
  isDataScheme: gd,
  isPdfFile: Vu,
  isValidExplicitDest: Gm,
  MathClamp: Me,
  noContextMenu: Si,
  normalizeUnicode: sm,
  OPS: jl,
  OutputScale: ss,
  PasswordResponses: em,
  PDFDataRangeTransport: Jp,
  PDFDateString: Th,
  PDFWorker: Vl,
  PermissionFlag: tm,
  PixelsPerInch: Cn,
  RenderingCancelledException: ju,
  renderRichText: Vp,
  ResponseException: _h,
  setLayerDimensions: Cr,
  shadow: J,
  SignatureExtractor: Ls,
  stopEvent: Nt,
  SupportedImageMimeTypes: uu,
  TextLayer: Rh,
  TouchManager: Ph,
  updateUrlHash: zp,
  Util: z,
  VerbosityLevel: ud,
  version: ub,
  XfaLayer: jp
};
const fy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: _n,
  AnnotationEditorLayer: vu,
  AnnotationEditorParamsType: it,
  AnnotationEditorType: q,
  AnnotationEditorUIManager: Tr,
  AnnotationLayer: tg,
  AnnotationMode: Ds,
  AnnotationType: Gt,
  CSSConstants: lm,
  ColorPicker: Mh,
  DOMSVGFactory: kh,
  DrawLayer: Su,
  FeatureTest: ce,
  GlobalWorkerOptions: ts,
  ImageKind: xh,
  InvalidPDFException: du,
  MathClamp: Me,
  OPS: jl,
  OutputScale: ss,
  PDFDataRangeTransport: Jp,
  PDFDateString: Th,
  PDFWorker: Vl,
  PasswordResponses: em,
  PermissionFlag: tm,
  PixelsPerInch: Cn,
  RenderingCancelledException: ju,
  ResponseException: _h,
  SignatureExtractor: Ls,
  SupportedImageMimeTypes: uu,
  TextLayer: Rh,
  TouchManager: Ph,
  Util: z,
  VerbosityLevel: ud,
  XfaLayer: jp,
  applyOpacity: hm,
  build: fb,
  createValidAbsoluteUrl: Up,
  fetchData: Xl,
  findContrastColor: cm,
  getDocument: Kp,
  getFilenameFromUrl: rm,
  getPdfFilenameFromUrl: am,
  getRGB: Yl,
  getUuid: Gp,
  getXfaPageViewport: om,
  isDataScheme: gd,
  isPdfFile: Vu,
  isValidExplicitDest: Gm,
  noContextMenu: Si,
  normalizeUnicode: sm,
  renderRichText: Vp,
  setLayerDimensions: Cr,
  shadow: J,
  stopEvent: Nt,
  updateUrlHash: zp,
  version: ub
}, Symbol.toStringTag, { value: "Module" }));
function py(c) {
  var t, e, i = "";
  if (typeof c == "string" || typeof c == "number") i += c;
  else if (typeof c == "object") if (Array.isArray(c)) {
    var s = c.length;
    for (t = 0; t < s; t++) c[t] && (e = py(c[t])) && (i && (i += " "), i += e);
  } else for (e in c) c[e] && (i && (i += " "), i += e);
  return i;
}
function Yu() {
  for (var c, t, e = 0, i = "", s = arguments.length; e < s; e++) (c = arguments[e]) && (t = py(c)) && (i && (i += " "), i += t);
  return i;
}
var Og = Object.prototype.hasOwnProperty;
function Bg(c, t, e) {
  for (e of c.keys())
    if (bo(e, t)) return e;
}
function bo(c, t) {
  var e, i, s;
  if (c === t) return !0;
  if (c && t && (e = c.constructor) === t.constructor) {
    if (e === Date) return c.getTime() === t.getTime();
    if (e === RegExp) return c.toString() === t.toString();
    if (e === Array) {
      if ((i = c.length) === t.length)
        for (; i-- && bo(c[i], t[i]); ) ;
      return i === -1;
    }
    if (e === Set) {
      if (c.size !== t.size)
        return !1;
      for (i of c)
        if (s = i, s && typeof s == "object" && (s = Bg(t, s), !s) || !t.has(s)) return !1;
      return !0;
    }
    if (e === Map) {
      if (c.size !== t.size)
        return !1;
      for (i of c)
        if (s = i[0], s && typeof s == "object" && (s = Bg(t, s), !s) || !bo(i[1], t.get(s)))
          return !1;
      return !0;
    }
    if (e === ArrayBuffer)
      c = new Uint8Array(c), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((i = c.byteLength) === t.byteLength)
        for (; i-- && c.getInt8(i) === t.getInt8(i); ) ;
      return i === -1;
    }
    if (ArrayBuffer.isView(c)) {
      if ((i = c.byteLength) === t.byteLength)
        for (; i-- && c[i] === t[i]; ) ;
      return i === -1;
    }
    if (!e || typeof c == "object") {
      i = 0;
      for (e in c)
        if (Og.call(c, e) && ++i && !Og.call(t, e) || !(e in t) || !bo(c[e], t[e])) return !1;
      return Object.keys(t).length === i;
    }
  }
  return c !== c && t !== t;
}
function wd(c) {
  let t = !1;
  return {
    promise: new Promise((i, s) => {
      c.then((r) => !t && i(r)).catch((r) => !t && s(r));
    }),
    cancel() {
      t = !0;
    }
  };
}
const F0 = ["onCopy", "onCut", "onPaste"], N0 = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], O0 = ["onFocus", "onBlur"], B0 = ["onInput", "onInvalid", "onReset", "onSubmit"], H0 = ["onLoad", "onError"], $0 = ["onKeyDown", "onKeyPress", "onKeyUp"], U0 = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], z0 = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], G0 = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], W0 = ["onSelect"], j0 = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], V0 = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], q0 = ["onScroll"], X0 = ["onWheel"], Y0 = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], K0 = ["onTransitionEnd"], J0 = ["onToggle"], Q0 = ["onChange"], Z0 = [
  ...F0,
  ...N0,
  ...O0,
  ...B0,
  ...H0,
  ...$0,
  ...U0,
  ...z0,
  ...G0,
  ...W0,
  ...j0,
  ...V0,
  ...q0,
  ...X0,
  ...Y0,
  ...K0,
  ...Q0,
  ...J0
];
function gy(c, t) {
  const e = {};
  for (const i of Z0) {
    const s = c[i];
    s && (t ? e[i] = ((r) => s(r, t(i))) : e[i] = s);
  }
  return e;
}
var tA = process.env.NODE_ENV === "production", cf = "Invariant failed";
function vt(c, t) {
  if (!c) {
    if (tA)
      throw new Error(cf);
    var e = typeof t == "function" ? t() : t, i = e ? "".concat(cf, ": ").concat(e) : cf;
    throw new Error(i);
  }
}
function eA(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var df, Hg;
function iA() {
  if (Hg) return df;
  Hg = 1;
  var c = process.env.NODE_ENV !== "production", t = function() {
  };
  if (c) {
    var e = function(s, r) {
      var a = arguments.length;
      r = new Array(a > 1 ? a - 1 : 0);
      for (var o = 1; o < a; o++)
        r[o - 1] = arguments[o];
      var l = 0, h = "Warning: " + s.replace(/%s/g, function() {
        return r[l++];
      });
      typeof console < "u" && console.error(h);
      try {
        throw new Error(h);
      } catch {
      }
    };
    t = function(i, s, r) {
      var a = arguments.length;
      r = new Array(a > 2 ? a - 2 : 0);
      for (var o = 2; o < a; o++)
        r[o - 2] = arguments[o];
      if (s === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      i || e.apply(null, [s].concat(r));
    };
  }
  return df = t, df;
}
var sA = iA();
const ke = /* @__PURE__ */ eA(sA), my = Yg(null), nA = "noopener noreferrer nofollow";
class rA {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(t) {
    this.pdfDocument = t;
  }
  setViewer(t) {
    this.pdfViewer = t;
  }
  setExternalLinkRel(t) {
    this.externalLinkRel = t;
  }
  setExternalLinkTarget(t) {
    this.externalLinkTarget = t;
  }
  setHash() {
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return vt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(t) {
    vt(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = t;
  }
  get rotation() {
    return 0;
  }
  set rotation(t) {
  }
  addLinkAttributes(t, e, i) {
    t.href = e, t.rel = this.externalLinkRel || nA, t.target = i ? "_blank" : this.externalLinkTarget || "";
  }
  goToDestination(t) {
    return new Promise((e) => {
      vt(this.pdfDocument, "PDF document not loaded."), vt(t, "Destination is not specified."), typeof t == "string" ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      vt(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const i = e[0];
      new Promise((s) => {
        vt(this.pdfDocument, "PDF document not loaded."), i instanceof Object ? this.pdfDocument.getPageIndex(i).then((r) => {
          s(r);
        }).catch(() => {
          vt(!1, `"${i}" is not a valid page reference.`);
        }) : typeof i == "number" ? s(i) : vt(!1, `"${i}" is not a valid destination reference.`);
      }).then((s) => {
        const r = s + 1;
        vt(this.pdfViewer, "PDF viewer is not initialized."), vt(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: s,
          pageNumber: r
        });
      });
    });
  }
  goToPage(t) {
    const e = t - 1;
    vt(this.pdfViewer, "PDF viewer is not initialized."), vt(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t
    });
  }
  goToXY() {
  }
  cachePageRef() {
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  executeNamedAction() {
  }
  executeSetOCGState() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  navigateTo(t) {
    this.goToDestination(t);
  }
}
function yo({ children: c, type: t }) {
  return O("div", { className: `react-pdf__message react-pdf__message--${t}`, children: c });
}
const Bp = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
function aA(c, t) {
  switch (t.type) {
    case "RESOLVE":
      return { value: t.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: t.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return c;
  }
}
function ql() {
  return $y(aA, { value: void 0, error: void 0 });
}
const Ku = typeof window < "u", by = Ku && window.location.protocol === "file:";
function oA(c) {
  return typeof c < "u";
}
function Mr(c) {
  return oA(c) && c !== null;
}
function lA(c) {
  return typeof c == "string";
}
function hA(c) {
  return c instanceof ArrayBuffer;
}
function cA(c) {
  return vt(Ku, "isBlob can only be used in a browser environment"), c instanceof Blob;
}
function Hp(c) {
  return lA(c) && /^data:/.test(c);
}
function $g(c) {
  vt(Hp(c), "Invalid data URI.");
  const [t = "", e = ""] = c.split(",");
  return t.split(";").indexOf("base64") !== -1 ? atob(e) : unescape(e);
}
function dA() {
  return Ku && window.devicePixelRatio || 1;
}
const yy = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function Ug() {
  ke(!by, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${yy}`);
}
function uA() {
  ke(!by, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${yy}`);
}
function Ka(c) {
  c != null && c.cancel && c.cancel();
}
function $p(c, t) {
  return Object.defineProperty(c, "width", {
    get() {
      return this.getViewport({ scale: t }).width;
    },
    configurable: !0
  }), Object.defineProperty(c, "height", {
    get() {
      return this.getViewport({ scale: t }).height;
    },
    configurable: !0
  }), Object.defineProperty(c, "originalWidth", {
    get() {
      return this.getViewport({ scale: 1 }).width;
    },
    configurable: !0
  }), Object.defineProperty(c, "originalHeight", {
    get() {
      return this.getViewport({ scale: 1 }).height;
    },
    configurable: !0
  }), c;
}
function wy(c) {
  return c.name === "AbortException" || c.name === "RenderingCancelledException";
}
function fA(c) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => {
      if (!i.result)
        return e(new Error("Error while reading a file."));
      t(i.result);
    }, i.onerror = (s) => {
      if (!s.target)
        return e(new Error("Error while reading a file."));
      const { error: r } = s.target;
      if (!r)
        return e(new Error("Error while reading a file."));
      switch (r.code) {
        case r.NOT_FOUND_ERR:
          return e(new Error("Error while reading a file: File not found."));
        case r.SECURITY_ERR:
          return e(new Error("Error while reading a file: Security error."));
        case r.ABORT_ERR:
          return e(new Error("Error while reading a file: Aborted."));
        default:
          return e(new Error("Error while reading a file."));
      }
    }, i.readAsArrayBuffer(c);
  });
}
const { PDFDataRangeTransport: pA } = fy, gA = (c, t) => {
  switch (t) {
    case Bp.NEED_PASSWORD: {
      const e = prompt("Enter the password to open this PDF file.");
      c(e);
      break;
    }
    case Bp.INCORRECT_PASSWORD: {
      const e = prompt("Invalid password. Please try again.");
      c(e);
      break;
    }
  }
};
function zg(c) {
  return typeof c == "object" && c !== null && ("data" in c || "range" in c || "url" in c);
}
const mA = Xg(function({ children: t, className: e, error: i = "Failed to load PDF file.", externalLinkRel: s, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: l, loading: h = "Loading PDF…", noData: d = "No PDF file specified.", onItemClick: u, onLoadError: p, onLoadProgress: y, onLoadSuccess: S, onPassword: v = gA, onSourceError: E, onSourceSuccess: x, options: T, renderMode: _, rotate: f, scale: m, ...A }, C) {
  const [P, R] = ql(), { value: M, error: k } = P, [L, N] = ql(), { value: I, error: j } = L, H = Ai(new rA()), B = Ai([]), tt = Ai(void 0), st = Ai(void 0);
  a && a !== tt.current && zg(a) && (ke(!bo(a, tt.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), tt.current = a), T && T !== st.current && (ke(!bo(T, st.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), st.current = T);
  const ee = Ai({
    // Handling jumping to internal links target
    scrollPageIntoView: (Rt) => {
      const { dest: Yt, pageNumber: Lt, pageIndex: Se = Lt - 1 } = Rt;
      if (u) {
        u({ dest: Yt, pageIndex: Se, pageNumber: Lt });
        return;
      }
      const Qe = B.current[Se];
      if (Qe) {
        Qe.scrollIntoView();
        return;
      }
      ke(!1, `An internal link leading to page ${Lt} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  Kg(C, () => ({
    linkService: H,
    pages: B,
    viewer: ee
  }), []);
  function Je() {
    x && x();
  }
  function rt() {
    k && (ke(!1, k.toString()), E && E(k));
  }
  function lt() {
    R({ type: "RESET" });
  }
  xt(lt, [a, R]);
  const ie = Is(async () => {
    if (!a)
      return null;
    if (typeof a == "string")
      return Hp(a) ? { data: $g(a) } : (Ug(), { url: a });
    if (a instanceof pA)
      return { range: a };
    if (hA(a))
      return { data: a };
    if (Ku && cA(a))
      return { data: await fA(a) };
    if (vt(typeof a == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), vt(zg(a), "Invalid parameter object: need either .data, .range or .url"), "url" in a && typeof a.url == "string") {
      if (Hp(a.url)) {
        const { url: Rt, ...Yt } = a;
        return { data: $g(Rt), ...Yt };
      }
      Ug();
    }
    return a;
  }, [a]);
  xt(() => {
    const Rt = wd(ie());
    return Rt.promise.then((Yt) => {
      R({ type: "RESOLVE", value: Yt });
    }).catch((Yt) => {
      R({ type: "REJECT", error: Yt });
    }), () => {
      Ka(Rt);
    };
  }, [ie, R]), xt(() => {
    if (!(typeof M > "u")) {
      if (M === !1) {
        rt();
        return;
      }
      Je();
    }
  }, [M]);
  function de() {
    I && (S && S(I), B.current = new Array(I.numPages), H.current.setDocument(I));
  }
  function ve() {
    j && (ke(!1, j.toString()), p && p(j));
  }
  xt(function() {
    N({ type: "RESET" });
  }, [N, M]), xt(function() {
    if (!M)
      return;
    const Yt = T ? { ...M, ...T } : M, Lt = Kp(Yt);
    y && (Lt.onProgress = y), v && (Lt.onPassword = v);
    const Se = Lt;
    return Se.promise.then((Qe) => {
      Se.destroyed || N({ type: "RESOLVE", value: Qe });
    }).catch((Qe) => {
      Se.destroyed || N({ type: "REJECT", error: Qe });
    }), () => {
      Se.destroy();
    };
  }, [T, N, M]), xt(() => {
    if (!(typeof I > "u")) {
      if (I === !1) {
        ve();
        return;
      }
      de();
    }
  }, [I]), xt(function() {
    H.current.setViewer(ee.current), H.current.setExternalLinkRel(s), H.current.setExternalLinkTarget(r);
  }, [s, r]);
  const yt = Is((Rt, Yt) => {
    B.current[Rt] = Yt;
  }, []), Bi = Is((Rt) => {
    delete B.current[Rt];
  }, []), rs = is(() => ({
    imageResourcesPath: l,
    linkService: H.current,
    onItemClick: u,
    pdf: I,
    registerPage: yt,
    renderMode: _,
    rotate: f,
    scale: m,
    unregisterPage: Bi
  }), [l, u, I, yt, _, f, m, Bi]), Ns = is(
    () => gy(A, () => I),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [A, I]
  );
  function De() {
    function Rt(Lt) {
      return !!(Lt != null && Lt.pdf);
    }
    if (!Rt(rs))
      throw new Error("pdf is undefined");
    const Yt = typeof t == "function" ? t(rs) : t;
    return O(my.Provider, { value: rs, children: Yt });
  }
  function Tt() {
    return a ? I == null ? O(yo, { type: "loading", children: typeof h == "function" ? h() : h }) : I === !1 ? O(yo, { type: "error", children: typeof i == "function" ? i() : i }) : De() : O(yo, { type: "no-data", children: typeof d == "function" ? d() : d });
  }
  return O("div", {
    className: Yu("react-pdf__Document", e),
    // Assertion is needed for React 18 compatibility
    ref: o,
    ...Ns,
    children: Tt()
  });
});
function sg() {
  return Jg(my);
}
function Ay() {
  for (var c = [], t = 0; t < arguments.length; t++)
    c[t] = arguments[t];
  var e = c.filter(Boolean);
  if (e.length <= 1) {
    var i = e[0];
    return i || null;
  }
  return function(r) {
    for (var a = 0, o = e; a < o.length; a++) {
      var l = o[a];
      typeof l == "function" ? l(r) : l && (l.current = r);
    }
  };
}
const vy = Yg(null);
function Ad() {
  return Jg(vy);
}
function bA() {
  const c = sg(), t = Ad();
  vt(t, "Unable to find Page context.");
  const e = { ...c, ...t }, { filterAnnotations: i, imageResourcesPath: s, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: h, page: d, pdf: u, renderForms: p, rotate: y, scale: S = 1 } = e;
  vt(u, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), vt(d, "Attempted to load page annotations, but no page was specified."), vt(r, "Attempted to load page annotations, but no linkService was specified.");
  const [v, E] = ql(), { value: x, error: T } = v, _ = Ai(null);
  ke(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function f() {
    x && o && o(x);
  }
  function m() {
    T && (ke(!1, T.toString()), a && a(T));
  }
  xt(function() {
    E({ type: "RESET" });
  }, [E, d]), xt(function() {
    if (!d)
      return;
    const M = wd(d.getAnnotations()), k = M;
    return M.promise.then((L) => {
      E({ type: "RESOLVE", value: L });
    }).catch((L) => {
      E({ type: "REJECT", error: L });
    }), () => {
      Ka(k);
    };
  }, [E, d]), xt(() => {
    if (x !== void 0) {
      if (x === !1) {
        m();
        return;
      }
      f();
    }
  }, [x]);
  function A() {
    h && h();
  }
  function C(R) {
    ke(!1, `${R}`), l && l(R);
  }
  const P = is(() => d.getViewport({ scale: S, rotation: y }), [d, y, S]);
  return xt(function() {
    if (!u || !d || !r || !x)
      return;
    const { current: M } = _;
    if (!M)
      return;
    const k = P.clone({ dontFlip: !0 }), L = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      annotationStorage: u.annotationStorage,
      commentManager: null,
      // TODO: Implement this
      div: M,
      l10n: null,
      // TODO: Implement this
      linkService: r,
      page: d,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: k
    }, N = {
      annotations: i ? i({ annotations: x }) : x,
      annotationStorage: u.annotationStorage,
      div: M,
      imageResourcesPath: s,
      linkService: r,
      page: d,
      renderForms: p,
      viewport: k
    };
    M.innerHTML = "";
    try {
      new tg(L).render(N), A();
    } catch (I) {
      C(I);
    }
    return () => {
    };
  }, [
    x,
    i,
    s,
    r,
    d,
    u,
    p,
    P
  ]), O("div", { className: Yu("react-pdf__Page__annotations", "annotationLayer"), ref: _ });
}
const Sy = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, yA = /^H(\d+)$/;
function wA(c) {
  return c in Sy;
}
function Ju(c) {
  return "children" in c;
}
function xy(c) {
  return Ju(c) ? c.children.length === 1 && 0 in c.children && "id" in c.children[0] : !1;
}
function AA(c) {
  const t = {};
  if (Ju(c)) {
    const { role: e } = c, i = e.match(yA);
    if (i)
      t.role = "heading", t["aria-level"] = Number(i[1]);
    else if (wA(e)) {
      const s = Sy[e];
      s && (t.role = s);
    }
  }
  return t;
}
function Ey(c) {
  const t = {};
  if (Ju(c)) {
    if (c.alt !== void 0 && (t["aria-label"] = c.alt), c.lang !== void 0 && (t.lang = c.lang), xy(c)) {
      const [e] = c.children;
      if (e) {
        const i = Ey(e);
        return {
          ...t,
          ...i
        };
      }
    }
  } else "id" in c && (t["aria-owns"] = c.id);
  return t;
}
function vA(c) {
  return c ? {
    ...AA(c),
    ...Ey(c)
  } : null;
}
function _y({ className: c, node: t }) {
  const e = is(() => vA(t), [t]), i = is(() => !Ju(t) || xy(t) ? null : t.children.map((s, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
    O(_y, { node: s }, r)
  )), [t]);
  return O("span", { className: c, ...e, children: i });
}
function SA() {
  const c = Ad();
  vt(c, "Unable to find Page context.");
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = c, [i, s] = ql(), { value: r, error: a } = i, { customTextRenderer: o, page: l } = c;
  function h() {
    r && e && e(r);
  }
  function d() {
    a && (ke(!1, a.toString()), t && t(a));
  }
  return xt(function() {
    s({ type: "RESET" });
  }, [s, l]), xt(function() {
    if (o || !l)
      return;
    const p = wd(l.getStructTree()), y = p;
    return p.promise.then((S) => {
      s({ type: "RESOLVE", value: S });
    }).catch((S) => {
      s({ type: "REJECT", error: S });
    }), () => Ka(y);
  }, [o, l, s]), xt(() => {
    if (r !== void 0) {
      if (r === !1) {
        d();
        return;
      }
      h();
    }
  }, [r]), r ? O(_y, { className: "react-pdf__Page__structTree structTree", node: r }) : null;
}
const Gg = Ds;
function xA(c) {
  const t = Ad();
  vt(t, "Unable to find Page context.");
  const e = { ...t, ...c }, { _className: i, canvasBackground: s, devicePixelRatio: r = dA(), onRenderError: a, onRenderSuccess: o, page: l, renderForms: h, renderTextLayer: d, pageColors: u, rotate: p, scale: y } = e, { canvasRef: S } = c;
  vt(l, "Attempted to render page canvas, but no page was specified.");
  const v = Ai(null);
  function E() {
    l && o && o($p(l, y));
  }
  function x(m) {
    wy(m) || (ke(!1, m.toString()), a && a(m));
  }
  const T = is(() => l.getViewport({ scale: y * r, rotation: p }), [r, l, p, y]), _ = is(() => l.getViewport({ scale: y, rotation: p }), [l, p, y]);
  xt(function() {
    if (!l)
      return;
    l.cleanup();
    const { current: A } = v;
    if (!A)
      return;
    A.width = T.width, A.height = T.height, A.style.width = `${Math.floor(_.width)}px`, A.style.height = `${Math.floor(_.height)}px`, A.style.visibility = "hidden";
    const C = {
      annotationMode: h ? Gg.ENABLE_FORMS : Gg.ENABLE,
      canvas: A,
      canvasContext: A.getContext("2d", { alpha: !1 }),
      pageColors: u,
      viewport: T
    };
    s && (C.background = s);
    const P = l.render(C), R = P;
    return P.promise.then(() => {
      A.style.visibility = "", E();
    }).catch(x), () => Ka(R);
  }, [s, l, u, h, T, _]);
  const f = Is(() => {
    const { current: m } = v;
    m && (m.width = 0, m.height = 0);
  }, []);
  return xt(() => f, [f]), O("canvas", { className: `${i}__canvas`, dir: "ltr", ref: Ay(S, v), style: {
    display: "block",
    userSelect: "none"
  }, children: d ? O(SA, {}) : null });
}
function EA(c) {
  return "str" in c;
}
const _A = /* @__PURE__ */ new Set([
  "base",
  "embed",
  "iframe",
  "link",
  "meta",
  "object",
  "script",
  "style",
  "template"
]), CA = /* @__PURE__ */ new Set(["action", "formaction", "href", "poster", "src", "xlink:href"]);
function TA(c) {
  let t = "";
  for (const e of c) {
    const i = e.charCodeAt(0);
    i <= 32 || i === 127 || (t += e.toLowerCase());
  }
  return t.startsWith("javascript:") || t.startsWith("vbscript:");
}
function PA(c) {
  return c.nodeType === Node.ELEMENT_NODE;
}
function Cy(c) {
  return PA(c) && c instanceof HTMLElement;
}
function RA(c) {
  return Cy(c) && _A.has(c.tagName.toLowerCase());
}
function MA(c) {
  const t = document.createElement(c.tagName.toLowerCase());
  return Array.from(c.attributes).forEach((e) => {
    const i = e.name.toLowerCase();
    i.startsWith("on") || i === "srcdoc" || CA.has(i) && TA(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(c.childNodes).forEach((e) => {
    t.append(Ty(e));
  }), t;
}
function Ty(c) {
  var t;
  return Cy(c) && !RA(c) ? MA(c) : document.createTextNode((t = c.textContent) !== null && t !== void 0 ? t : "");
}
function kA(c, t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const i = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((s) => {
    i.append(Ty(s));
  }), c.replaceChildren(i);
}
function DA() {
  const c = Ad();
  vt(c, "Unable to find Page context.");
  const { customTextRenderer: t, onGetTextError: e, onGetTextSuccess: i, onRenderTextLayerError: s, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: l, rotate: h, scale: d } = c;
  vt(a, "Attempted to load page text content, but no page was specified.");
  const [u, p] = ql(), { value: y, error: S } = u, v = Ai(null);
  ke(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function E() {
    y && i && i(y);
  }
  function x() {
    S && (ke(!1, S.toString()), e && e(S));
  }
  xt(function() {
    p({ type: "RESET" });
  }, [a, p]), xt(function() {
    if (!a)
      return;
    const P = wd(a.getTextContent()), R = P;
    return P.promise.then((M) => {
      p({ type: "RESOLVE", value: M });
    }).catch((M) => {
      p({ type: "REJECT", error: M });
    }), () => Ka(R);
  }, [a, p]), xt(() => {
    if (y !== void 0) {
      if (y === !1) {
        x();
        return;
      }
      E();
    }
  }, [y]);
  const T = Is(() => {
    r && r();
  }, [r]), _ = Is((C) => {
    wy(C) || (ke(!1, C.toString()), s && s(C));
  }, [s]);
  function f() {
    const C = v.current;
    C && C.classList.add("selecting");
  }
  function m() {
    const C = v.current;
    C && C.classList.remove("selecting");
  }
  const A = is(() => a.getViewport({ scale: d, rotation: h }), [a, h, d]);
  return Uy(function() {
    if (!a || !y)
      return;
    const { current: P } = v;
    if (!P)
      return;
    P.innerHTML = "";
    const R = a.streamTextContent({ includeMarkedContent: !0 }), M = {
      container: P,
      textContentSource: R,
      viewport: A
    }, k = new Rh(M), L = k;
    return k.render().then(() => {
      const N = document.createElement("div");
      N.className = "endOfContent", P.append(N);
      const I = P.querySelectorAll('[role="presentation"]');
      if (t) {
        let j = 0;
        y.items.forEach((H, B) => {
          if (!EA(H))
            return;
          const tt = I[j];
          if (!tt)
            return;
          const st = t({
            pageIndex: o,
            pageNumber: l,
            itemIndex: B,
            ...H
          });
          kA(tt, st), j += H.str && H.hasEOL ? 2 : 1;
        });
      }
      T();
    }).catch(_), () => Ka(L);
  }, [
    t,
    _,
    T,
    a,
    o,
    l,
    y,
    A
  ]), // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
  O("div", { className: Yu("react-pdf__Page__textContent", "textLayer"), onMouseUp: m, onMouseDown: f, ref: v });
}
const Wg = 1;
function LA(c) {
  const e = { ...sg(), ...c }, { _className: i = "react-pdf__Page", _enableRegisterUnregisterPage: s = !0, canvasBackground: r, canvasRef: a, children: o, className: l, customRenderer: h, customTextRenderer: d, devicePixelRatio: u, error: p = "Failed to load the page.", filterAnnotations: y, height: S, inputRef: v, loading: E = "Loading page…", noData: x = "No page specified.", onGetAnnotationsError: T, onGetAnnotationsSuccess: _, onGetStructTreeError: f, onGetStructTreeSuccess: m, onGetTextError: A, onGetTextSuccess: C, onLoadError: P, onLoadSuccess: R, onRenderAnnotationLayerError: M, onRenderAnnotationLayerSuccess: k, onRenderError: L, onRenderSuccess: N, onRenderTextLayerError: I, onRenderTextLayerSuccess: j, pageColors: H, pageIndex: B, pageNumber: tt, pdf: st, registerPage: ee, renderAnnotationLayer: Je = !0, renderForms: rt = !1, renderMode: lt = "canvas", renderTextLayer: ie = !0, rotate: de, scale: ve = Wg, unregisterPage: yt, width: Bi, ...rs } = e, [Ns, De] = ql(), { value: Tt, error: Rt } = Ns, Yt = Ai(null);
  vt(st, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const Lt = Mr(tt) ? tt - 1 : B ?? null, Se = tt ?? (Mr(B) ? B + 1 : null), Qe = de ?? (Tt ? Tt.rotate : null), Hi = is(() => {
    if (!Tt)
      return null;
    let Rn = 1;
    const Za = ve ?? Wg;
    if (Bi || S) {
      const Mn = Tt.getViewport({ scale: 1, rotation: Qe });
      Bi ? Rn = Bi / Mn.width : S && (Rn = S / Mn.height);
    }
    return Za * Rn;
  }, [S, Tt, Qe, ve, Bi]);
  xt(function() {
    return () => {
      Mr(Lt) && s && yt && yt(Lt);
    };
  }, [s, st, Lt, yt]);
  function Py() {
    if (R) {
      if (!Tt || !Hi)
        return;
      R($p(Tt, Hi));
    }
    if (s && ee) {
      if (!Mr(Lt) || !Yt.current)
        return;
      ee(Lt, Yt.current);
    }
  }
  function Ry() {
    Rt && (ke(!1, Rt.toString()), P && P(Rt));
  }
  xt(function() {
    De({ type: "RESET" });
  }, [De, st, Lt]), xt(function() {
    if (!st || !Se)
      return;
    const Za = wd(st.getPage(Se)), Mn = Za;
    return Za.promise.then((Zu) => {
      De({ type: "RESOLVE", value: Zu });
    }).catch((Zu) => {
      De({ type: "REJECT", error: Zu });
    }), () => Ka(Mn);
  }, [De, st, Se]), xt(() => {
    if (Tt !== void 0) {
      if (Tt === !1) {
        Ry();
        return;
      }
      Py();
    }
  }, [Tt, Hi]);
  const Qu = is(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    Mr(Lt) && Se && Mr(Qe) && Mr(Hi) ? {
      _className: i,
      canvasBackground: r,
      customTextRenderer: d,
      devicePixelRatio: u,
      filterAnnotations: y,
      onGetAnnotationsError: T,
      onGetAnnotationsSuccess: _,
      onGetStructTreeError: f,
      onGetStructTreeSuccess: m,
      onGetTextError: A,
      onGetTextSuccess: C,
      onRenderAnnotationLayerError: M,
      onRenderAnnotationLayerSuccess: k,
      onRenderError: L,
      onRenderSuccess: N,
      onRenderTextLayerError: I,
      onRenderTextLayerSuccess: j,
      page: Tt,
      pageColors: H,
      pageIndex: Lt,
      pageNumber: Se,
      renderForms: rt,
      renderTextLayer: ie,
      rotate: Qe,
      scale: Hi
    } : null
  ), [
    i,
    r,
    d,
    u,
    y,
    T,
    _,
    f,
    m,
    A,
    C,
    M,
    k,
    L,
    N,
    I,
    j,
    Tt,
    H,
    Lt,
    Se,
    rt,
    ie,
    Qe,
    Hi
  ]), My = is(
    () => gy(rs, () => Tt && (Hi ? $p(Tt, Hi) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [rs, Tt, Hi]
  ), vd = `${Lt}@${Hi}/${Qe}`;
  function ky() {
    switch (lt) {
      case "custom":
        return vt(h, 'renderMode was set to "custom", but no customRenderer was passed.'), O(h, {}, `${vd}_custom`);
      case "none":
        return null;
      case "canvas":
      default:
        return O(xA, { canvasRef: a }, `${vd}_canvas`);
    }
  }
  function Dy() {
    return ie ? O(DA, {}, `${vd}_text`) : null;
  }
  function Ly() {
    return Je ? O(bA, {}, `${vd}_annotations`) : null;
  }
  function Iy() {
    function Rn(Mn) {
      return !!(Mn != null && Mn.page);
    }
    if (!Rn(Qu))
      throw new Error("page is undefined");
    const Za = typeof o == "function" ? o(Qu) : o;
    return zu(vy.Provider, { value: Qu, children: [ky(), Dy(), Ly(), Za] });
  }
  function Fy() {
    return Se ? st === null || Tt === void 0 || Tt === null ? O(yo, { type: "loading", children: typeof E == "function" ? E() : E }) : st === !1 || Tt === !1 ? O(yo, { type: "error", children: typeof p == "function" ? p() : p }) : Iy() : O(yo, { type: "no-data", children: typeof x == "function" ? x() : x });
  }
  return O("div", {
    className: Yu(i, l),
    "data-page-number": Se,
    // Assertion is needed for React 18 compatibility
    ref: Ay(v, Yt),
    style: {
      "--scale-round-x": "1px",
      "--scale-round-y": "1px",
      "--scale-factor": "1",
      "--user-unit": `${Hi}`,
      "--total-scale-factor": "calc(var(--scale-factor) * var(--user-unit))",
      backgroundColor: r || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content"
    },
    ...My,
    children: Fy()
  });
}
uA();
ts.workerSrc = "pdf.worker.mjs";
const IA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Document: mA,
  Page: LA,
  PasswordResponses: Bp,
  pdfjs: fy,
  useDocumentContext: sg,
  usePageContext: Ad
}, Symbol.toStringTag, { value: "Module" }));
var Sh = { exports: {} }, FA = Sh.exports, jg;
function NA() {
  return jg || (jg = 1, (function(c, t) {
    (function(e, i) {
      i(t);
    })(FA, (function(e) {
      class i {
        constructor(f, m) {
          this.state = { angle: 0, area: [], position: { x: 0, y: 0 }, hardAngle: 0, hardDrawingAngle: 0 }, this.createdDensity = m, this.nowDrawingDensity = this.createdDensity, this.render = f;
        }
        setDensity(f) {
          this.createdDensity = f, this.nowDrawingDensity = f;
        }
        setDrawingDensity(f) {
          this.nowDrawingDensity = f;
        }
        setPosition(f) {
          this.state.position = f;
        }
        setAngle(f) {
          this.state.angle = f;
        }
        setArea(f) {
          this.state.area = f;
        }
        setHardDrawingAngle(f) {
          this.state.hardDrawingAngle = f;
        }
        setHardAngle(f) {
          this.state.hardAngle = f, this.state.hardDrawingAngle = f;
        }
        setOrientation(f) {
          this.orientation = f;
        }
        getDrawingDensity() {
          return this.nowDrawingDensity;
        }
        getDensity() {
          return this.createdDensity;
        }
        getHardAngle() {
          return this.state.hardAngle;
        }
      }
      class s extends i {
        constructor(f, m, A) {
          super(f, A), this.image = null, this.isLoad = !1, this.loadingAngle = 0, this.image = new Image(), this.image.src = m;
        }
        draw(f) {
          const m = this.render.getContext(), A = this.render.convertToGlobal(this.state.position), C = this.render.getRect().pageWidth, P = this.render.getRect().height;
          m.save(), m.translate(A.x, A.y), m.beginPath();
          for (let R of this.state.area) R !== null && (R = this.render.convertToGlobal(R), m.lineTo(R.x - A.x, R.y - A.y));
          m.rotate(this.state.angle), m.clip(), this.isLoad ? m.drawImage(this.image, 0, 0, C, P) : this.drawLoader(m, { x: 0, y: 0 }, C, P), m.restore();
        }
        simpleDraw(f) {
          const m = this.render.getRect(), A = this.render.getContext(), C = m.pageWidth, P = m.height, R = f === 1 ? m.left + m.pageWidth : m.left, M = m.top;
          this.isLoad ? A.drawImage(this.image, R, M, C, P) : this.drawLoader(A, { x: R, y: M }, C, P);
        }
        drawLoader(f, m, A, C) {
          f.beginPath(), f.strokeStyle = "rgb(200, 200, 200)", f.fillStyle = "rgb(255, 255, 255)", f.lineWidth = 1, f.rect(m.x + 1, m.y + 1, A - 1, C - 1), f.stroke(), f.fill();
          const P = { x: m.x + A / 2, y: m.y + C / 2 };
          f.beginPath(), f.lineWidth = 10, f.arc(P.x, P.y, 20, this.loadingAngle, 3 * Math.PI / 2 + this.loadingAngle), f.stroke(), f.closePath(), this.loadingAngle += 0.07, this.loadingAngle >= 2 * Math.PI && (this.loadingAngle = 0);
        }
        load() {
          this.isLoad || (this.image.onload = () => {
            this.isLoad = !0;
          });
        }
        newTemporaryCopy() {
          return this;
        }
        getTemporaryCopy() {
          return this;
        }
        hideTemporaryCopy() {
        }
      }
      class r {
        constructor(f, m) {
          this.pages = [], this.currentPageIndex = 0, this.currentSpreadIndex = 0, this.landscapeSpread = [], this.portraitSpread = [], this.render = m, this.app = f, this.currentPageIndex = 0, this.isShowCover = this.app.getSettings().showCover;
        }
        destroy() {
          this.pages = [];
        }
        createSpread() {
          this.landscapeSpread = [], this.portraitSpread = [];
          for (let m = 0; m < this.pages.length; m++) this.portraitSpread.push([m]);
          let f = 0;
          this.isShowCover && (this.pages[0].setDensity("hard"), this.landscapeSpread.push([f]), f++);
          for (let m = f; m < this.pages.length; m += 2) m < this.pages.length - 1 ? this.landscapeSpread.push([m, m + 1]) : (this.landscapeSpread.push([m]), this.pages[m].setDensity("hard"));
        }
        getSpread() {
          return this.render.getOrientation() === "landscape" ? this.landscapeSpread : this.portraitSpread;
        }
        getSpreadIndexByPage(f) {
          const m = this.getSpread();
          for (let A = 0; A < m.length; A++) if (f === m[A][0] || f === m[A][1]) return A;
          return null;
        }
        getPageCount() {
          return this.pages.length;
        }
        getPages() {
          return this.pages;
        }
        getPage(f) {
          if (f >= 0 && f < this.pages.length) return this.pages[f];
          throw new Error("Invalid page number");
        }
        nextBy(f) {
          const m = this.pages.indexOf(f);
          return m < this.pages.length - 1 ? this.pages[m + 1] : null;
        }
        prevBy(f) {
          const m = this.pages.indexOf(f);
          return m > 0 ? this.pages[m - 1] : null;
        }
        getFlippingPage(f) {
          const m = this.currentSpreadIndex;
          if (this.render.getOrientation() === "portrait") return f === 0 ? this.pages[m].newTemporaryCopy() : this.pages[m - 1];
          {
            const A = f === 0 ? this.getSpread()[m + 1] : this.getSpread()[m - 1];
            return A.length === 1 || f === 0 ? this.pages[A[0]] : this.pages[A[1]];
          }
        }
        getBottomPage(f) {
          const m = this.currentSpreadIndex;
          if (this.render.getOrientation() === "portrait") return f === 0 ? this.pages[m + 1] : this.pages[m - 1];
          {
            const A = f === 0 ? this.getSpread()[m + 1] : this.getSpread()[m - 1];
            return A.length === 1 ? this.pages[A[0]] : f === 0 ? this.pages[A[1]] : this.pages[A[0]];
          }
        }
        showNext() {
          this.currentSpreadIndex < this.getSpread().length && (this.currentSpreadIndex++, this.showSpread());
        }
        showPrev() {
          this.currentSpreadIndex > 0 && (this.currentSpreadIndex--, this.showSpread());
        }
        getCurrentPageIndex() {
          return this.currentPageIndex;
        }
        show(f = null) {
          if (f === null && (f = this.currentPageIndex), f < 0 || f >= this.pages.length) return;
          const m = this.getSpreadIndexByPage(f);
          m !== null && (this.currentSpreadIndex = m, this.showSpread());
        }
        getCurrentSpreadIndex() {
          return this.currentSpreadIndex;
        }
        setCurrentSpreadIndex(f) {
          if (!(f >= 0 && f < this.getSpread().length)) throw new Error("Invalid page");
          this.currentSpreadIndex = f;
        }
        showSpread() {
          const f = this.getSpread()[this.currentSpreadIndex];
          f.length === 2 ? (this.render.setLeftPage(this.pages[f[0]]), this.render.setRightPage(this.pages[f[1]])) : this.render.getOrientation() === "landscape" && f[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[f[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[f[0]])), this.currentPageIndex = f[0], this.app.updatePageIndex(this.currentPageIndex);
        }
      }
      class a extends r {
        constructor(f, m, A) {
          super(f, m), this.imagesHref = A;
        }
        load() {
          for (const f of this.imagesHref) {
            const m = new s(this.render, f, "soft");
            m.load(), this.pages.push(m);
          }
          this.createSpread();
        }
      }
      class o {
        static GetDistanceBetweenTwoPoint(f, m) {
          return f === null || m === null ? 1 / 0 : Math.sqrt(Math.pow(m.x - f.x, 2) + Math.pow(m.y - f.y, 2));
        }
        static GetSegmentLength(f) {
          return o.GetDistanceBetweenTwoPoint(f[0], f[1]);
        }
        static GetAngleBetweenTwoLine(f, m) {
          const A = f[0].y - f[1].y, C = m[0].y - m[1].y, P = f[1].x - f[0].x, R = m[1].x - m[0].x;
          return Math.acos((A * C + P * R) / (Math.sqrt(A * A + P * P) * Math.sqrt(C * C + R * R)));
        }
        static PointInRect(f, m) {
          return m === null ? null : m.x >= f.left && m.x <= f.width + f.left && m.y >= f.top && m.y <= f.top + f.height ? m : null;
        }
        static GetRotatedPoint(f, m, A) {
          return { x: f.x * Math.cos(A) + f.y * Math.sin(A) + m.x, y: f.y * Math.cos(A) - f.x * Math.sin(A) + m.y };
        }
        static LimitPointToCircle(f, m, A) {
          if (o.GetDistanceBetweenTwoPoint(f, A) <= m) return A;
          const C = f.x, P = f.y, R = A.x, M = A.y;
          let k = Math.sqrt(Math.pow(m, 2) * Math.pow(C - R, 2) / (Math.pow(C - R, 2) + Math.pow(P - M, 2))) + C;
          A.x < 0 && (k *= -1);
          let L = (k - C) * (P - M) / (C - R) + P;
          return C - R + P === 0 && (L = m), { x: k, y: L };
        }
        static GetIntersectBetweenTwoSegment(f, m, A) {
          return o.PointInRect(f, o.GetIntersectBeetwenTwoLine(m, A));
        }
        static GetIntersectBeetwenTwoLine(f, m) {
          const A = f[0].y - f[1].y, C = m[0].y - m[1].y, P = f[1].x - f[0].x, R = m[1].x - m[0].x, M = f[0].x * f[1].y - f[1].x * f[0].y, k = m[0].x * m[1].y - m[1].x * m[0].y, L = A * k - C * M, N = P * k - R * M, I = -(M * R - k * P) / (A * R - C * P), j = -(A * k - C * M) / (A * R - C * P);
          if (isFinite(I) && isFinite(j)) return { x: I, y: j };
          if (Math.abs(L - N) < 0.1) throw new Error("Segment included");
          return null;
        }
        static GetCordsFromTwoPoint(f, m) {
          const A = Math.abs(f.x - m.x), C = Math.abs(f.y - m.y), P = Math.max(A, C), R = [f];
          function M(k, L, N, I, j) {
            return L > k ? k + j * (N / I) : L < k ? k - j * (N / I) : k;
          }
          for (let k = 1; k <= P; k += 1) R.push({ x: M(f.x, m.x, A, P, k), y: M(f.y, m.y, C, P, k) });
          return R;
        }
      }
      class l extends i {
        constructor(f, m, A) {
          super(f, A), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = !1, this.element = m, this.element.classList.add("stf__item"), this.element.classList.add("--" + A);
        }
        newTemporaryCopy() {
          return this.nowDrawingDensity === "hard" ? this : (this.temporaryCopy === null && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new l(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
        }
        getTemporaryCopy() {
          return this.temporaryCopy;
        }
        hideTemporaryCopy() {
          this.temporaryCopy !== null && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
        }
        draw(f) {
          const m = f || this.nowDrawingDensity, A = this.render.convertToGlobal(this.state.position), C = this.render.getRect().pageWidth, P = this.render.getRect().height;
          this.element.classList.remove("--simple");
          const R = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${C}px;
            height: ${P}px;
        `;
          m === "hard" ? this.drawHard(R) : this.drawSoft(A, R);
        }
        drawHard(f = "") {
          const m = this.render.getRect().left + this.render.getRect().width / 2, A = this.state.hardDrawingAngle, C = f + `
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            ` + (this.orientation === 0 ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${A}deg);` : `transform-origin: 0 0; 
                   transform: translate3d(${m}px, 0, 0) rotateY(${A}deg);`);
          this.element.style.cssText = C;
        }
        drawSoft(f, m = "") {
          let A = "polygon( ";
          for (const P of this.state.area) if (P !== null) {
            let R = this.render.getDirection() === 1 ? { x: -P.x + this.state.position.x, y: P.y - this.state.position.y } : { x: P.x - this.state.position.x, y: P.y - this.state.position.y };
            R = o.GetRotatedPoint(R, { x: 0, y: 0 }, this.state.angle), A += R.x + "px " + R.y + "px, ";
          }
          A = A.slice(0, -2), A += ")";
          const C = m + `transform-origin: 0 0; clip-path: ${A}; -webkit-clip-path: ${A};` + (this.render.isSafari() && this.state.angle === 0 ? `transform: translate(${f.x}px, ${f.y}px);` : `transform: translate3d(${f.x}px, ${f.y}px, 0) rotate(${this.state.angle}rad);`);
          this.element.style.cssText = C;
        }
        simpleDraw(f) {
          const m = this.render.getRect(), A = m.pageWidth, C = m.height, P = f === 1 ? m.left + m.pageWidth : m.left, R = m.top;
          this.element.classList.add("--simple"), this.element.style.cssText = `
            position: absolute; 
            display: block; 
            height: ${C}px; 
            left: ${P}px; 
            top: ${R}px; 
            width: ${A}px; 
            z-index: ${this.render.getSettings().startZIndex + 1};`;
        }
        getElement() {
          return this.element;
        }
        load() {
          this.isLoad = !0;
        }
        setOrientation(f) {
          super.setOrientation(f), this.element.classList.remove("--left", "--right"), this.element.classList.add(f === 1 ? "--right" : "--left");
        }
        setDrawingDensity(f) {
          this.element.classList.remove("--soft", "--hard"), this.element.classList.add("--" + f), super.setDrawingDensity(f);
        }
      }
      class h extends r {
        constructor(f, m, A, C) {
          super(f, m), this.element = A, this.pagesElement = C;
        }
        load() {
          for (const f of this.pagesElement) {
            const m = new l(this.render, f, f.dataset.density === "hard" ? "hard" : "soft");
            m.load(), this.pages.push(m);
          }
          this.createSpread();
        }
      }
      class d {
        constructor(f, m, A, C) {
          this.direction = f, this.corner = m, this.topIntersectPoint = null, this.sideIntersectPoint = null, this.bottomIntersectPoint = null, this.pageWidth = parseInt(A, 10), this.pageHeight = parseInt(C, 10);
        }
        calc(f) {
          try {
            return this.position = this.calcAngleAndPosition(f), this.calculateIntersectPoint(this.position), !0;
          } catch {
            return !1;
          }
        }
        getFlippingClipArea() {
          const f = [];
          let m = !1;
          return f.push(this.rect.topLeft), f.push(this.topIntersectPoint), this.sideIntersectPoint === null ? m = !0 : (f.push(this.sideIntersectPoint), this.bottomIntersectPoint === null && (m = !1)), f.push(this.bottomIntersectPoint), (m || this.corner === "bottom") && f.push(this.rect.bottomLeft), f;
        }
        getBottomClipArea() {
          const f = [];
          return f.push(this.topIntersectPoint), this.corner === "top" ? f.push({ x: this.pageWidth, y: 0 }) : (this.topIntersectPoint !== null && f.push({ x: this.pageWidth, y: 0 }), f.push({ x: this.pageWidth, y: this.pageHeight })), this.sideIntersectPoint !== null ? o.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && f.push(this.sideIntersectPoint) : this.corner === "top" && f.push({ x: this.pageWidth, y: this.pageHeight }), f.push(this.bottomIntersectPoint), f.push(this.topIntersectPoint), f;
        }
        getAngle() {
          return this.direction === 0 ? -this.angle : this.angle;
        }
        getRect() {
          return this.rect;
        }
        getPosition() {
          return this.position;
        }
        getActiveCorner() {
          return this.direction === 0 ? this.rect.topLeft : this.rect.topRight;
        }
        getDirection() {
          return this.direction;
        }
        getFlippingProgress() {
          return Math.abs((this.position.x - this.pageWidth) / (2 * this.pageWidth) * 100);
        }
        getCorner() {
          return this.corner;
        }
        getBottomPagePosition() {
          return this.direction === 1 ? { x: this.pageWidth, y: 0 } : { x: 0, y: 0 };
        }
        getShadowStartPoint() {
          return this.corner === "top" ? this.topIntersectPoint : this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.topIntersectPoint;
        }
        getShadowAngle() {
          const f = o.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]);
          return this.direction === 0 ? f : Math.PI - f;
        }
        calcAngleAndPosition(f) {
          let m = f;
          if (this.updateAngleAndGeometry(m), m = this.corner === "top" ? this.checkPositionAtCenterLine(m, { x: 0, y: 0 }, { x: 0, y: this.pageHeight }) : this.checkPositionAtCenterLine(m, { x: 0, y: this.pageHeight }, { x: 0, y: 0 }), Math.abs(m.x - this.pageWidth) < 1 && Math.abs(m.y) < 1) throw new Error("Point is too small");
          return m;
        }
        updateAngleAndGeometry(f) {
          this.angle = this.calculateAngle(f), this.rect = this.getPageRect(f);
        }
        calculateAngle(f) {
          const m = this.pageWidth - f.x + 1, A = this.corner === "bottom" ? this.pageHeight - f.y : f.y;
          let C = 2 * Math.acos(m / Math.sqrt(A * A + m * m));
          A < 0 && (C = -C);
          const P = Math.PI - C;
          if (!isFinite(C) || P >= 0 && P < 3e-3) throw new Error("The G point is too small");
          return this.corner === "bottom" && (C = -C), C;
        }
        getPageRect(f) {
          return this.corner === "top" ? this.getRectFromBasePoint([{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }, { x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }], f) : this.getRectFromBasePoint([{ x: 0, y: -this.pageHeight }, { x: this.pageWidth, y: -this.pageHeight }, { x: 0, y: 0 }, { x: this.pageWidth, y: 0 }], f);
        }
        getRectFromBasePoint(f, m) {
          return { topLeft: this.getRotatedPoint(f[0], m), topRight: this.getRotatedPoint(f[1], m), bottomLeft: this.getRotatedPoint(f[2], m), bottomRight: this.getRotatedPoint(f[3], m) };
        }
        getRotatedPoint(f, m) {
          return { x: f.x * Math.cos(this.angle) + f.y * Math.sin(this.angle) + m.x, y: f.y * Math.cos(this.angle) - f.x * Math.sin(this.angle) + m.y };
        }
        calculateIntersectPoint(f) {
          const m = { left: -1, top: -1, width: this.pageWidth + 2, height: this.pageHeight + 2 };
          this.corner === "top" ? (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.bottomLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }])) : (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.topLeft, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.topLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }]));
        }
        checkPositionAtCenterLine(f, m, A) {
          let C = f;
          const P = o.LimitPointToCircle(m, this.pageWidth, C);
          C !== P && (C = P, this.updateAngleAndGeometry(C));
          const R = Math.sqrt(Math.pow(this.pageWidth, 2) + Math.pow(this.pageHeight, 2));
          let M = this.rect.bottomRight, k = this.rect.topLeft;
          if (this.corner === "bottom" && (M = this.rect.topRight, k = this.rect.bottomLeft), M.x <= 0) {
            const L = o.LimitPointToCircle(A, R, k);
            L !== C && (C = L, this.updateAngleAndGeometry(C));
          }
          return C;
        }
        getSegmentToShadowLine() {
          const f = this.getShadowStartPoint();
          return [f, f !== this.sideIntersectPoint && this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.bottomIntersectPoint];
        }
      }
      class u {
        constructor(f, m) {
          this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = "read", this.render = f, this.app = m;
        }
        fold(f) {
          this.setState("user_fold"), this.calc === null && this.start(f), this.do(this.render.convertToPage(f));
        }
        flip(f) {
          if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(f) || (this.calc !== null && this.render.finishAnimation(), !this.start(f))) return;
          const m = this.getBoundsRect();
          this.setState("flipping");
          const A = m.height / 10, C = this.calc.getCorner() === "bottom" ? m.height - A : A, P = this.calc.getCorner() === "bottom" ? m.height : 0;
          this.calc.calc({ x: m.pageWidth - A, y: C }), this.animateFlippingTo({ x: m.pageWidth - A, y: C }, { x: -m.pageWidth, y: P }, !0);
        }
        start(f) {
          this.reset();
          const m = this.render.convertToBook(f), A = this.getBoundsRect(), C = this.getDirectionByPoint(m), P = m.y >= A.height / 2 ? "bottom" : "top";
          if (!this.checkDirection(C)) return !1;
          try {
            if (this.flippingPage = this.app.getPageCollection().getFlippingPage(C), this.bottomPage = this.app.getPageCollection().getBottomPage(C), this.render.getOrientation() === "landscape") if (C === 1) {
              const R = this.app.getPageCollection().nextBy(this.flippingPage);
              R !== null && this.flippingPage.getDensity() !== R.getDensity() && (this.flippingPage.setDrawingDensity("hard"), R.setDrawingDensity("hard"));
            } else {
              const R = this.app.getPageCollection().prevBy(this.flippingPage);
              R !== null && this.flippingPage.getDensity() !== R.getDensity() && (this.flippingPage.setDrawingDensity("hard"), R.setDrawingDensity("hard"));
            }
            return this.render.setDirection(C), this.calc = new d(C, P, A.pageWidth.toString(10), A.height.toString(10)), !0;
          } catch {
            return !1;
          }
        }
        do(f) {
          if (this.calc !== null && this.calc.calc(f)) {
            const m = this.calc.getFlippingProgress();
            this.bottomPage.setArea(this.calc.getBottomClipArea()), this.bottomPage.setPosition(this.calc.getBottomPagePosition()), this.bottomPage.setAngle(0), this.bottomPage.setHardAngle(0), this.flippingPage.setArea(this.calc.getFlippingClipArea()), this.flippingPage.setPosition(this.calc.getActiveCorner()), this.flippingPage.setAngle(this.calc.getAngle()), this.calc.getDirection() === 0 ? this.flippingPage.setHardAngle(90 * (200 - 2 * m) / 100) : this.flippingPage.setHardAngle(-90 * (200 - 2 * m) / 100), this.render.setPageRect(this.calc.getRect()), this.render.setBottomPage(this.bottomPage), this.render.setFlippingPage(this.flippingPage), this.render.setShadowData(this.calc.getShadowStartPoint(), this.calc.getShadowAngle(), m, this.calc.getDirection());
          }
        }
        flipToPage(f, m) {
          const A = this.app.getPageCollection().getCurrentSpreadIndex(), C = this.app.getPageCollection().getSpreadIndexByPage(f);
          try {
            C > A && (this.app.getPageCollection().setCurrentSpreadIndex(C - 1), this.flipNext(m)), C < A && (this.app.getPageCollection().setCurrentSpreadIndex(C + 1), this.flipPrev(m));
          } catch {
          }
        }
        flipNext(f) {
          this.flip({ x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10, y: f === "top" ? 1 : this.render.getRect().height - 2 });
        }
        flipPrev(f) {
          this.flip({ x: 10, y: f === "top" ? 1 : this.render.getRect().height - 2 });
        }
        stopMove() {
          if (this.calc === null) return;
          const f = this.calc.getPosition(), m = this.getBoundsRect(), A = this.calc.getCorner() === "bottom" ? m.height : 0;
          f.x <= 0 ? this.animateFlippingTo(f, { x: -m.pageWidth, y: A }, !0) : this.animateFlippingTo(f, { x: m.pageWidth, y: A }, !1);
        }
        showCorner(f) {
          if (!this.checkState("read", "fold_corner")) return;
          const m = this.getBoundsRect(), A = m.pageWidth;
          if (this.isPointOnCorners(f)) if (this.calc === null) {
            if (!this.start(f)) return;
            this.setState("fold_corner"), this.calc.calc({ x: A - 1, y: 1 });
            const C = 50, P = this.calc.getCorner() === "bottom" ? m.height - 1 : 1, R = this.calc.getCorner() === "bottom" ? m.height - C : C;
            this.animateFlippingTo({ x: A - 1, y: P }, { x: A - C, y: R }, !1, !1);
          } else this.do(this.render.convertToPage(f));
          else this.setState("read"), this.render.finishAnimation(), this.stopMove();
        }
        animateFlippingTo(f, m, A, C = !0) {
          const P = o.GetCordsFromTwoPoint(f, m), R = [];
          for (const k of P) R.push(() => this.do(k));
          const M = this.getAnimationDuration(P.length);
          this.render.startAnimation(R, M, () => {
            this.calc && (A && (this.calc.getDirection() === 1 ? this.app.turnToPrevPage() : this.app.turnToNextPage()), C && (this.render.setBottomPage(null), this.render.setFlippingPage(null), this.render.clearShadow(), this.setState("read"), this.reset()));
          });
        }
        getCalculation() {
          return this.calc;
        }
        getState() {
          return this.state;
        }
        setState(f) {
          this.state !== f && (this.app.updateState(f), this.state = f);
        }
        getDirectionByPoint(f) {
          const m = this.getBoundsRect();
          if (this.render.getOrientation() === "portrait") {
            if (f.x - m.pageWidth <= m.width / 5) return 1;
          } else if (f.x < m.width / 2) return 1;
          return 0;
        }
        getAnimationDuration(f) {
          const m = this.app.getSettings().flippingTime;
          return f >= 1e3 ? m : f / 1e3 * m;
        }
        checkDirection(f) {
          return f === 0 ? this.app.getCurrentPageIndex() < this.app.getPageCount() - 1 : this.app.getCurrentPageIndex() >= 1;
        }
        reset() {
          this.calc = null, this.flippingPage = null, this.bottomPage = null;
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        checkState(...f) {
          for (const m of f) if (this.state === m) return !0;
          return !1;
        }
        isPointOnCorners(f) {
          const m = this.getBoundsRect(), A = m.pageWidth, C = Math.sqrt(Math.pow(A, 2) + Math.pow(m.height, 2)) / 5, P = this.render.convertToBook(f);
          return P.x > 0 && P.y > 0 && P.x < m.width && P.y < m.height && (P.x < C || P.x > m.width - C) && (P.y < C || P.y > m.height - C);
        }
      }
      class p {
        constructor(f, m) {
          this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = m, this.app = f;
          const A = new RegExp("Version\\/[\\d\\.]+.*Safari/");
          this.safari = A.exec(window.navigator.userAgent) !== null;
        }
        render(f) {
          if (this.animation !== null) {
            const m = Math.round((f - this.animation.startedAt) / this.animation.durationFrame);
            m < this.animation.frames.length ? this.animation.frames[m]() : (this.animation.onAnimateEnd(), this.animation = null);
          }
          this.timer = f, this.drawFrame();
        }
        start() {
          this.update();
          const f = (m) => {
            this.render(m), requestAnimationFrame(f);
          };
          requestAnimationFrame(f);
        }
        startAnimation(f, m, A) {
          this.finishAnimation(), this.animation = { frames: f, duration: m, durationFrame: m / f.length, onAnimateEnd: A, startedAt: this.timer };
        }
        finishAnimation() {
          this.animation !== null && (this.animation.frames[this.animation.frames.length - 1](), this.animation.onAnimateEnd !== null && this.animation.onAnimateEnd()), this.animation = null;
        }
        update() {
          this.boundsRect = null;
          const f = this.calculateBoundsRect();
          this.orientation !== f && (this.orientation = f, this.app.updateOrientation(f));
        }
        calculateBoundsRect() {
          let f = "landscape";
          const m = this.getBlockWidth(), A = m / 2, C = this.getBlockHeight() / 2, P = this.setting.width / this.setting.height;
          let R = this.setting.width, M = this.setting.height, k = A - R;
          return this.setting.size === "stretch" ? (m < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (f = "portrait"), R = f === "portrait" ? this.getBlockWidth() : this.getBlockWidth() / 2, R > this.setting.maxWidth && (R = this.setting.maxWidth), M = R / P, M > this.getBlockHeight() && (M = this.getBlockHeight(), R = M * P), k = f === "portrait" ? A - R / 2 - R : A - R) : m < 2 * R && this.app.getSettings().usePortrait && (f = "portrait", k = A - R / 2 - R), this.boundsRect = { left: k, top: C - M / 2, width: 2 * R, height: M, pageWidth: R }, f;
        }
        setShadowData(f, m, A, C) {
          if (!this.app.getSettings().drawShadow) return;
          const P = 100 * this.getSettings().maxShadowOpacity;
          this.shadow = { pos: f, angle: m, width: 3 * this.getRect().pageWidth / 4 * A / 100, opacity: (100 - A) * P / 100 / 100, direction: C, progress: 2 * A };
        }
        clearShadow() {
          this.shadow = null;
        }
        getBlockWidth() {
          return this.app.getUI().getDistElement().offsetWidth;
        }
        getBlockHeight() {
          return this.app.getUI().getDistElement().offsetHeight;
        }
        getDirection() {
          return this.direction;
        }
        getRect() {
          return this.boundsRect === null && this.calculateBoundsRect(), this.boundsRect;
        }
        getSettings() {
          return this.app.getSettings();
        }
        getOrientation() {
          return this.orientation;
        }
        setPageRect(f) {
          this.pageRect = f;
        }
        setDirection(f) {
          this.direction = f;
        }
        setRightPage(f) {
          f !== null && f.setOrientation(1), this.rightPage = f;
        }
        setLeftPage(f) {
          f !== null && f.setOrientation(0), this.leftPage = f;
        }
        setBottomPage(f) {
          f !== null && f.setOrientation(this.direction === 1 ? 0 : 1), this.bottomPage = f;
        }
        setFlippingPage(f) {
          f !== null && f.setOrientation(this.direction === 0 && this.orientation !== "portrait" ? 0 : 1), this.flippingPage = f;
        }
        convertToBook(f) {
          const m = this.getRect();
          return { x: f.x - m.left, y: f.y - m.top };
        }
        isSafari() {
          return this.safari;
        }
        convertToPage(f, m) {
          m || (m = this.direction);
          const A = this.getRect();
          return { x: m === 0 ? f.x - A.left - A.width / 2 : A.width / 2 - f.x + A.left, y: f.y - A.top };
        }
        convertToGlobal(f, m) {
          if (m || (m = this.direction), f == null) return null;
          const A = this.getRect();
          return { x: m === 0 ? f.x + A.left + A.width / 2 : A.width / 2 - f.x + A.left, y: f.y + A.top };
        }
        convertRectToGlobal(f, m) {
          return m || (m = this.direction), { topLeft: this.convertToGlobal(f.topLeft, m), topRight: this.convertToGlobal(f.topRight, m), bottomLeft: this.convertToGlobal(f.bottomLeft, m), bottomRight: this.convertToGlobal(f.bottomRight, m) };
        }
      }
      class y extends p {
        constructor(f, m, A) {
          super(f, m), this.canvas = A, this.ctx = A.getContext("2d");
        }
        getContext() {
          return this.ctx;
        }
        reload() {
        }
        drawFrame() {
          this.clear(), this.orientation !== "portrait" && this.leftPage != null && this.leftPage.simpleDraw(0), this.rightPage != null && this.rightPage.simpleDraw(1), this.bottomPage != null && this.bottomPage.draw(), this.drawBookShadow(), this.flippingPage != null && this.flippingPage.draw(), this.shadow != null && (this.drawOuterShadow(), this.drawInnerShadow());
          const f = this.getRect();
          this.orientation === "portrait" && (this.ctx.beginPath(), this.ctx.rect(f.left + f.pageWidth, f.top, f.width, f.height), this.ctx.clip());
        }
        drawBookShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const m = f.width / 20;
          this.ctx.rect(f.left, f.top, f.width, f.height);
          const A = { x: f.left + f.width / 2 - m / 2, y: 0 };
          this.ctx.translate(A.x, A.y);
          const C = this.ctx.createLinearGradient(0, 0, m, 0);
          C.addColorStop(0, "rgba(0, 0, 0, 0)"), C.addColorStop(0.4, "rgba(0, 0, 0, 0.2)"), C.addColorStop(0.49, "rgba(0, 0, 0, 0.1)"), C.addColorStop(0.5, "rgba(0, 0, 0, 0.5)"), C.addColorStop(0.51, "rgba(0, 0, 0, 0.4)"), C.addColorStop(1, "rgba(0, 0, 0, 0)"), this.ctx.clip(), this.ctx.fillStyle = C, this.ctx.fillRect(0, 0, m, 2 * f.height), this.ctx.restore();
        }
        drawOuterShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(f.left, f.top, f.width, f.height);
          const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y });
          this.ctx.translate(m.x, m.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const A = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(0, -100), A.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), A.addColorStop(1, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(-this.shadow.width, -100), A.addColorStop(0, "rgba(0, 0, 0, 0)"), A.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")")), this.ctx.clip(), this.ctx.fillStyle = A, this.ctx.fillRect(0, 0, this.shadow.width, 2 * f.height), this.ctx.restore();
        }
        drawInnerShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), A = this.convertRectToGlobal(this.pageRect);
          this.ctx.moveTo(A.topLeft.x, A.topLeft.y), this.ctx.lineTo(A.topRight.x, A.topRight.y), this.ctx.lineTo(A.bottomRight.x, A.bottomRight.y), this.ctx.lineTo(A.bottomLeft.x, A.bottomLeft.y), this.ctx.translate(m.x, m.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const C = 3 * this.shadow.width / 4, P = this.ctx.createLinearGradient(0, 0, C, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(-C, -100), P.addColorStop(1, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(0.9, "rgba(0, 0, 0, 0.05)"), P.addColorStop(0.7, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(0, "rgba(0, 0, 0, 0)")) : (this.ctx.translate(0, -100), P.addColorStop(0, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(0.1, "rgba(0, 0, 0, 0.05)"), P.addColorStop(0.3, "rgba(0, 0, 0, " + this.shadow.opacity + ")"), P.addColorStop(1, "rgba(0, 0, 0, 0)")), this.ctx.clip(), this.ctx.fillStyle = P, this.ctx.fillRect(0, 0, C, 2 * f.height), this.ctx.restore();
        }
        clear() {
          this.ctx.fillStyle = "white", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
      class S {
        constructor(f, m, A) {
          this.touchPoint = null, this.swipeTimeout = 250, this.onResize = () => {
            this.update();
          }, this.onMouseDown = (P) => {
            if (this.checkTarget(P.target)) {
              const R = this.getMousePos(P.clientX, P.clientY);
              this.app.startUserTouch(R), P.preventDefault();
            }
          }, this.onTouchStart = (P) => {
            if (this.checkTarget(P.target) && P.changedTouches.length > 0) {
              const R = P.changedTouches[0], M = this.getMousePos(R.clientX, R.clientY);
              this.touchPoint = { point: M, time: Date.now() }, setTimeout(() => {
                this.touchPoint !== null && this.app.startUserTouch(M);
              }, this.swipeTimeout), this.app.getSettings().mobileScrollSupport || P.preventDefault();
            }
          }, this.onMouseUp = (P) => {
            const R = this.getMousePos(P.clientX, P.clientY);
            this.app.userStop(R);
          }, this.onMouseMove = (P) => {
            const R = this.getMousePos(P.clientX, P.clientY);
            this.app.userMove(R, !1);
          }, this.onTouchMove = (P) => {
            if (P.changedTouches.length > 0) {
              const R = P.changedTouches[0], M = this.getMousePos(R.clientX, R.clientY);
              this.app.getSettings().mobileScrollSupport ? (this.touchPoint !== null && (Math.abs(this.touchPoint.point.x - M.x) > 10 || this.app.getState() !== "read") && P.cancelable && this.app.userMove(M, !0), this.app.getState() !== "read" && P.preventDefault()) : this.app.userMove(M, !0);
            }
          }, this.onTouchEnd = (P) => {
            if (P.changedTouches.length > 0) {
              const R = P.changedTouches[0], M = this.getMousePos(R.clientX, R.clientY);
              let k = !1;
              if (this.touchPoint !== null) {
                const L = M.x - this.touchPoint.point.x, N = Math.abs(M.y - this.touchPoint.point.y);
                Math.abs(L) > this.swipeDistance && N < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (L > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom") : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? "top" : "bottom"), k = !0), this.touchPoint = null;
              }
              this.app.userStop(M, k);
            }
          }, this.parentElement = f, f.classList.add("stf__parent"), f.insertAdjacentHTML("afterbegin", '<div class="stf__wrapper"></div>'), this.wrapper = f.querySelector(".stf__wrapper"), this.app = m;
          const C = this.app.getSettings().usePortrait ? 1 : 2;
          f.style.minWidth = A.minWidth * C + "px", f.style.minHeight = A.minHeight + "px", A.size === "fixed" && (f.style.minWidth = A.width * C + "px", f.style.minHeight = A.height + "px"), A.autoSize && (f.style.width = "100%", f.style.maxWidth = 2 * A.maxWidth + "px"), f.style.display = "block", window.addEventListener("resize", this.onResize, !1), this.swipeDistance = A.swipeDistance;
        }
        destroy() {
          this.app.getSettings().useMouseEvents && this.removeHandlers(), this.distElement.remove(), this.wrapper.remove();
        }
        getDistElement() {
          return this.distElement;
        }
        getWrapper() {
          return this.wrapper;
        }
        setOrientationStyle(f) {
          this.wrapper.classList.remove("--portrait", "--landscape"), f === "portrait" ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / this.app.getSettings().width * 100 + "%"), this.wrapper.classList.add("--portrait")) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = this.app.getSettings().height / (2 * this.app.getSettings().width) * 100 + "%"), this.wrapper.classList.add("--landscape")), this.update();
        }
        removeHandlers() {
          window.removeEventListener("resize", this.onResize), this.distElement.removeEventListener("mousedown", this.onMouseDown), this.distElement.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onTouchEnd);
        }
        setHandlers() {
          window.addEventListener("resize", this.onResize, !1), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener("mousedown", this.onMouseDown), this.distElement.addEventListener("touchstart", this.onTouchStart), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: !this.app.getSettings().mobileScrollSupport }), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("touchend", this.onTouchEnd));
        }
        getMousePos(f, m) {
          const A = this.distElement.getBoundingClientRect();
          return { x: f - A.left, y: m - A.top };
        }
        checkTarget(f) {
          return !this.app.getSettings().clickEventForward || !["a", "button"].includes(f.tagName.toLowerCase());
        }
      }
      class v extends S {
        constructor(f, m, A, C) {
          super(f, m, A), this.wrapper.insertAdjacentHTML("afterbegin", '<div class="stf__block"></div>'), this.distElement = f.querySelector(".stf__block"), this.items = C;
          for (const P of C) this.distElement.appendChild(P);
          this.setHandlers();
        }
        clear() {
          for (const f of this.items) this.parentElement.appendChild(f);
        }
        updateItems(f) {
          this.removeHandlers(), this.distElement.innerHTML = "";
          for (const m of f) this.distElement.appendChild(m);
          this.items = f, this.setHandlers();
        }
        update() {
          this.app.getRender().update();
        }
      }
      class E extends S {
        constructor(f, m, A) {
          super(f, m, A), this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', this.canvas = f.querySelectorAll("canvas")[0], this.distElement = this.canvas, this.resizeCanvas(), this.setHandlers();
        }
        resizeCanvas() {
          const f = getComputedStyle(this.canvas), m = parseInt(f.getPropertyValue("width"), 10), A = parseInt(f.getPropertyValue("height"), 10);
          this.canvas.width = m, this.canvas.height = A;
        }
        getCanvas() {
          return this.canvas;
        }
        update() {
          this.resizeCanvas(), this.app.getRender().update();
        }
      }
      class x extends p {
        constructor(f, m, A) {
          super(f, m), this.outerShadow = null, this.innerShadow = null, this.hardShadow = null, this.hardInnerShadow = null, this.element = A, this.createShadows();
        }
        createShadows() {
          this.element.insertAdjacentHTML("beforeend", `<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`), this.outerShadow = this.element.querySelector(".stf__outerShadow"), this.innerShadow = this.element.querySelector(".stf__innerShadow"), this.hardShadow = this.element.querySelector(".stf__hardShadow"), this.hardInnerShadow = this.element.querySelector(".stf__hardInnerShadow");
        }
        clearShadow() {
          super.clearShadow(), this.outerShadow.style.cssText = "display: none", this.innerShadow.style.cssText = "display: none", this.hardShadow.style.cssText = "display: none", this.hardInnerShadow.style.cssText = "display: none";
        }
        reload() {
          this.element.querySelector(".stf__outerShadow") || this.createShadows();
        }
        drawHardInnerShadow() {
          const f = this.getRect(), m = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
          let A = (100 - m) * (2.5 * f.pageWidth) / 100 + 20;
          A > f.pageWidth && (A = f.pageWidth);
          let C = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 5).toString(10)};
            width: ${A}px;
            height: ${f.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity * m / 100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${f.left + f.width / 2}px;
            transform-origin: 0 0;
        `;
          C += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0);" : "transform: translate3d(0, 0, 0) rotateY(180deg);", this.hardInnerShadow.style.cssText = C;
        }
        drawHardOuterShadow() {
          const f = this.getRect();
          let m = (100 - (this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress)) * (2.5 * f.pageWidth) / 100 + 20;
          m > f.pageWidth && (m = f.pageWidth);
          let A = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 4).toString(10)};
            width: ${m}px;
            height: ${f.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${f.left + f.width / 2}px;
            transform-origin: 0 0;
        `;
          A += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? "transform: translate3d(0, 0, 0) rotateY(180deg);" : "transform: translate3d(0, 0, 0);", this.hardShadow.style.cssText = A;
        }
        drawInnerShadow() {
          const f = this.getRect(), m = 3 * this.shadow.width / 4, A = this.getDirection() === 0 ? m : 0, C = this.getDirection() === 0 ? "to left" : "to right", P = this.convertToGlobal(this.shadow.pos), R = this.shadow.angle + 3 * Math.PI / 2, M = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let k = "polygon( ";
          for (const N of M) {
            let I = this.getDirection() === 1 ? { x: -N.x + this.shadow.pos.x, y: N.y - this.shadow.pos.y } : { x: N.x - this.shadow.pos.x, y: N.y - this.shadow.pos.y };
            I = o.GetRotatedPoint(I, { x: A, y: 100 }, R), k += I.x + "px " + I.y + "px, ";
          }
          k = k.slice(0, -2), k += ")";
          const L = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${m}px;
            height: ${2 * f.height}px;
            background: linear-gradient(${C},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${A}px 100px;
            transform: translate3d(${P.x - A}px, ${P.y - 100}px, 0) rotate(${R}rad);
            clip-path: ${k};
            -webkit-clip-path: ${k};
        `;
          this.innerShadow.style.cssText = L;
        }
        drawOuterShadow() {
          const f = this.getRect(), m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }), A = this.shadow.angle + 3 * Math.PI / 2, C = this.getDirection() === 1 ? this.shadow.width : 0, P = this.getDirection() === 0 ? "to right" : "to left", R = [{ x: 0, y: 0 }, { x: f.pageWidth, y: 0 }, { x: f.pageWidth, y: f.height }, { x: 0, y: f.height }];
          let M = "polygon( ";
          for (const L of R) if (L !== null) {
            let N = this.getDirection() === 1 ? { x: -L.x + this.shadow.pos.x, y: L.y - this.shadow.pos.y } : { x: L.x - this.shadow.pos.x, y: L.y - this.shadow.pos.y };
            N = o.GetRotatedPoint(N, { x: C, y: 100 }, A), M += N.x + "px " + N.y + "px, ";
          }
          M = M.slice(0, -2), M += ")";
          const k = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * f.height}px;
            background: linear-gradient(${P}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${C}px 100px;
            transform: translate3d(${m.x - C}px, ${m.y - 100}px, 0) rotate(${A}rad);
            clip-path: ${M};
            -webkit-clip-path: ${M};
        `;
          this.outerShadow.style.cssText = k;
        }
        drawLeftPage() {
          this.orientation !== "portrait" && this.leftPage !== null && (this.direction === 1 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === "hard" ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
        }
        drawRightPage() {
          this.rightPage !== null && (this.direction === 0 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === "hard" ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
        }
        drawBottomPage() {
          if (this.bottomPage === null) return;
          const f = this.flippingPage != null ? this.flippingPage.getDrawingDensity() : null;
          this.orientation === "portrait" && this.direction === 1 || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(f));
        }
        drawFrame() {
          this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), this.flippingPage != null && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), this.shadow != null && this.flippingPage !== null && (this.flippingPage.getDrawingDensity() === "soft" ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
        }
        clear() {
          for (const f of this.app.getPageCollection().getPages()) f !== this.leftPage && f !== this.rightPage && f !== this.flippingPage && f !== this.bottomPage && (f.getElement().style.cssText = "display: none"), f.getTemporaryCopy() !== this.flippingPage && f.hideTemporaryCopy();
        }
        update() {
          super.update(), this.rightPage !== null && this.rightPage.setOrientation(1), this.leftPage !== null && this.leftPage.setOrientation(0);
        }
      }
      class T {
        constructor() {
          this._default = { startPage: 0, size: "fixed", width: 0, height: 0, minWidth: 0, maxWidth: 0, minHeight: 0, maxHeight: 0, drawShadow: !0, flippingTime: 1e3, usePortrait: !0, startZIndex: 0, autoSize: !0, maxShadowOpacity: 1, showCover: !1, mobileScrollSupport: !0, swipeDistance: 30, clickEventForward: !0, useMouseEvents: !0, showPageCorners: !0, disableFlipByClick: !1 };
        }
        getSettings(f) {
          const m = this._default;
          if (Object.assign(m, f), m.size !== "stretch" && m.size !== "fixed") throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
          if (m.width <= 0 || m.height <= 0) throw new Error("Invalid width or height");
          if (m.flippingTime <= 0) throw new Error("Invalid flipping time");
          return m.size === "stretch" ? (m.minWidth <= 0 && (m.minWidth = 100), m.maxWidth < m.minWidth && (m.maxWidth = 2e3), m.minHeight <= 0 && (m.minHeight = 100), m.maxHeight < m.minHeight && (m.maxHeight = 2e3)) : (m.minWidth = m.width, m.maxWidth = m.width, m.minHeight = m.height, m.maxHeight = m.height), m;
        }
      }
      (function(_, f) {
        f === void 0 && (f = {});
        var m = f.insertAt;
        if (typeof document < "u") {
          var A = document.head || document.getElementsByTagName("head")[0], C = document.createElement("style");
          C.type = "text/css", m === "top" && A.firstChild ? A.insertBefore(C, A.firstChild) : A.appendChild(C), C.styleSheet ? C.styleSheet.cssText = _ : C.appendChild(document.createTextNode(_));
        }
      })(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`), e.PageFlip = class extends class {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
        }
        on(_, f) {
          return this.events.has(_) ? this.events.get(_).push(f) : this.events.set(_, [f]), this;
        }
        off(_) {
          this.events.delete(_);
        }
        trigger(_, f, m = null) {
          if (this.events.has(_)) for (const A of this.events.get(_)) A({ data: m, object: f });
        }
      } {
        constructor(_, f) {
          super(), this.isUserTouch = !1, this.isUserMove = !1, this.setting = null, this.pages = null, this.setting = new T().getSettings(f), this.block = _;
        }
        destroy() {
          this.ui.destroy(), this.block.remove();
        }
        update() {
          this.render.update(), this.pages.show();
        }
        loadFromImages(_) {
          this.ui = new E(this.block, this, this.setting);
          const f = this.ui.getCanvas();
          this.render = new y(this, this.setting, f), this.flipController = new u(this.render, this), this.pages = new a(this, this.render, _), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        loadFromHTML(_) {
          this.ui = new v(this.block, this, this.setting, _), this.render = new x(this, this.setting, this.ui.getDistElement()), this.flipController = new u(this.render, this), this.pages = new h(this, this.render, this.ui.getDistElement(), _), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger("init", this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }
        updateFromImages(_) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new a(this, this.render, _), this.pages.load(), this.pages.show(f), this.trigger("update", this, { page: f, mode: this.render.getOrientation() });
        }
        updateFromHtml(_) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new h(this, this.render, this.ui.getDistElement(), _), this.pages.load(), this.ui.updateItems(_), this.render.reload(), this.pages.show(f), this.trigger("update", this, { page: f, mode: this.render.getOrientation() });
        }
        clear() {
          this.pages.destroy(), this.ui.clear();
        }
        turnToPrevPage() {
          this.pages.showPrev();
        }
        turnToNextPage() {
          this.pages.showNext();
        }
        turnToPage(_) {
          this.pages.show(_);
        }
        flipNext(_ = "top") {
          this.flipController.flipNext(_);
        }
        flipPrev(_ = "top") {
          this.flipController.flipPrev(_);
        }
        flip(_, f = "top") {
          this.flipController.flipToPage(_, f);
        }
        updateState(_) {
          this.trigger("changeState", this, _);
        }
        updatePageIndex(_) {
          this.trigger("flip", this, _);
        }
        updateOrientation(_) {
          this.ui.setOrientationStyle(_), this.update(), this.trigger("changeOrientation", this, _);
        }
        getPageCount() {
          return this.pages.getPageCount();
        }
        getCurrentPageIndex() {
          return this.pages.getCurrentPageIndex();
        }
        getPage(_) {
          return this.pages.getPage(_);
        }
        getRender() {
          return this.render;
        }
        getFlipController() {
          return this.flipController;
        }
        getOrientation() {
          return this.render.getOrientation();
        }
        getBoundsRect() {
          return this.render.getRect();
        }
        getSettings() {
          return this.setting;
        }
        getUI() {
          return this.ui;
        }
        getState() {
          return this.flipController.getState();
        }
        getPageCollection() {
          return this.pages;
        }
        startUserTouch(_) {
          this.mousePosition = _, this.isUserTouch = !0, this.isUserMove = !1;
        }
        userMove(_, f) {
          this.isUserTouch || f || !this.setting.showPageCorners ? this.isUserTouch && o.GetDistanceBetweenTwoPoint(this.mousePosition, _) > 5 && (this.isUserMove = !0, this.flipController.fold(_)) : this.flipController.showCorner(_);
        }
        userStop(_, f = !1) {
          this.isUserTouch && (this.isUserTouch = !1, f || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(_)));
        }
      }, Object.defineProperty(e, "__esModule", { value: !0 });
    }));
  })(Sh, Sh.exports)), Sh.exports;
}
var OA = NA();
const BA = th.forwardRef((c, t) => {
  const e = Ai(null), i = Ai([]), s = Ai(), [r, a] = eo([]);
  Kg(t, () => ({
    pageFlip: () => s.current
  }));
  const o = Is(() => {
    s.current && s.current.clear();
  }, []), l = Is(() => {
    const h = s.current;
    h && (h.off("flip"), h.off("changeOrientation"), h.off("changeState"), h.off("init"), h.off("update"));
  }, []);
  return xt(() => {
    if (i.current = [], c.children) {
      const h = th.Children.map(c.children, (d) => th.cloneElement(d, {
        ref: (u) => {
          u && i.current.push(u);
        }
      }));
      (!c.renderOnlyPageLengthChange || r.length !== h.length) && (h.length < r.length && o(), a(h));
    }
  }, [c.children]), xt(() => {
    const h = () => {
      const d = s.current;
      d && (c.onFlip && d.on("flip", (u) => c.onFlip(u)), c.onChangeOrientation && d.on("changeOrientation", (u) => c.onChangeOrientation(u)), c.onChangeState && d.on("changeState", (u) => c.onChangeState(u)), c.onInit && d.on("init", (u) => c.onInit(u)), c.onUpdate && d.on("update", (u) => c.onUpdate(u)));
    };
    r.length > 0 && i.current.length > 0 && (l(), e.current && !s.current && (s.current = new OA.PageFlip(e.current, c)), s.current.getFlipController() ? s.current.updateFromHtml(i.current) : s.current.loadFromHTML(i.current), h());
  }, [r]), th.createElement("div", { ref: e, className: c.className, style: c.style }, r);
}), HA = th.memo(BA), $A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HA
}, Symbol.toStringTag, { value: "Module" }));
export {
  jA as default
};
