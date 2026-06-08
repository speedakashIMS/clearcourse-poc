import { jsx as z, jsxs as qg } from 'react/jsx-runtime';
import tl, {
  lazy as Oy, Suspense as By, useState as eo, useRef as Ai, useEffect as xt, useCallback as Is, forwardRef as Xg, createContext as Yg, useReducer as Hy, useImperativeHandle as Kg, useMemo as is, useContext as Jg, useLayoutEffect as $y,
} from 'react';
import Uy from 'lottie-react';

const Fy = Object.defineProperty;
const hg = (c) => {
  throw TypeError(c);
};
const Ny = (c, t, e) => (t in c ? Fy(c, t, {
  enumerable: !0, configurable: !0, writable: !0, value: e,
}) : c[t] = e);
const M = (c, t, e) => Ny(c, typeof t !== 'symbol' ? `${t}` : t, e); const
  Zu = (c, t, e) => t.has(c) || hg(`Cannot ${e}`);
const n = (c, t, e) => (Zu(c, t, 'read from private field'), e ? e.call(c) : t.get(c)); const b = (c, t, e) => (t.has(c) ? hg('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(c) : t.set(c, e)); const g = (c, t, e, i) => (Zu(c, t, 'write to private field'), i ? i.call(c, e) : t.set(c, e), e); const
  w = (c, t, e) => (Zu(c, t, 'access private method'), e);
const Kt = (c, t, e, i) => ({
  set _(s) {
    g(c, t, s, e);
  },
  get _() {
    return n(c, t, i);
  },
});

const Gy = Oy(() => Promise.resolve().then(() => Xy)); const zy = ({
  media: c = 'image',
  // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect: t = 'default',
  // 'default' | 'rectangle' | 'square'
  objectFit: e = 'cover',
  // 'cover' | 'contain' — how media fills its box (e.g. framed text+media)
  imageUrl: i,
  videoUrl: s,
  lottieUrl: r,
  lottieData: a,
  iframeUrl: o,
  flipbookUrl: h,
  title: l,
  className: d = '',
}) => {
  let A;
  const u = typeof window < 'u' && window.location.origin.indexOf('author') > -1; const p = typeof window < 'u' && window.matchMedia('(prefers-reduced-motion: reduce)').matches; const S = `relative w-full h-full ${t === 'square' ? 'aspect-square' : t === 'rectangle' ? 'aspect-[4/3]' : c === 'video' ? 'aspect-video' : ''}`.trim(); const v = t === 'default' ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(); const _ = 'w-full h-full'; const x = t === 'default' ? `${v}`.trim() : v; const T = e === 'contain' ? 'object-contain' : 'object-cover'; const E = e === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice'; const f = `relative w-full ${d}`.trim(); const
    m = 'w-full min-h-[280px]';
  switch (c) {
    case 'image':
      if (i) {
        return /* @__PURE__ */ z('div', {
          className: S,
          children: /* @__PURE__ */ z(
            'img',
            {
              src: i,
              alt: l || 'Media image',
              className: `${T} ${v}`.trim(),
              loading: 'lazy',
            },
          ),
        });
      }
      break;
    case 'video':
      if (s) {
        const C = s.includes('youtube.com/watch') || s.includes('youtu.be/');
        let P = s;
        C && (P = `https://www.youtube.com/embed/${s.includes('youtu.be/') ? s.split('youtu.be/')[1].split('?')[0] : (A = s.split('v=')[1]) == null ? void 0 : A.split('&')[0]}`);
        const R = (() => {
          if (!C) return P;
          try {
            const D = new URL(P);
            return D.searchParams.set('autoplay', '0'), D.searchParams.set('mute', '0'), D.searchParams.set('playsinline', '1'), D.searchParams.set('controls', '1'), D.searchParams.set('rel', '0'), D.toString();
          } catch {
            return P.includes('?') ? P.includes('autoplay=') ? P : `${P}&autoplay=0` : `${P}?autoplay=0`;
          }
        })();
        return /* @__PURE__ */ z('div', {
          className: S,
          children: C ? /* @__PURE__ */ z(
            'iframe',
            {
              src: R,
              title: l || 'Video player',
              frameBorder: '0',
              allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: !0,
              className: `${v} ${T}`.trim(),
            },
          ) : /* @__PURE__ */ z(
            'video',
            {
              className: `${v} ${T}`.trim(),
              autoPlay: !1,
              controls: !0,
              playsInline: !0,
              preload: 'metadata',
              title: l || 'Video player',
              children: /* @__PURE__ */ z('source', { src: s }),
            },
          ),
        });
      }
      break;
    case 'lottie':
      if (a) {
        return u ? /* @__PURE__ */ z('div', {
          className: S,
          role: 'img',
          'aria-label': l || 'Animation',
          children: /* @__PURE__ */ z(
            'div',
            {
              className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${v}`.trim(),
              children: /* @__PURE__ */ z('div', { className: 'text-center', children: 'Lottie preview' }),
            },
          ),
        }) : /* @__PURE__ */ z(
          'div',
          {
            className: S,
            role: 'img',
            'aria-label': l || 'Animation',
            children: /* @__PURE__ */ z('div', {
              className: `${v} overflow-hidden`.trim(),
              children: /* @__PURE__ */ z(
                Uy,
                {
                  animationData: a,
                  loop: !p,
                  autoplay: !p,
                  className: _,
                  style: { width: '100%', height: '100%' },
                  rendererSettings: { preserveAspectRatio: E },
                },
              ),
            }),
          },
        );
      }
      if (r) return /* @__PURE__ */ z('div', { className: S, children: /* @__PURE__ */ z('div', { className: 'absolute inset-0 flex items-center justify-center text-body-default text-center p-40', children: 'Loading Lottie animation...' }) });
      break;
    case 'iframe':
      if (o) {
        return /* @__PURE__ */ z('div', {
          className: S,
          children: /* @__PURE__ */ z(
            'iframe',
            {
              src: o,
              title: l || 'Iframe content',
              frameBorder: '0',
              className: `${x} ${T}`.trim(),
            },
          ),
        });
      }
      break;
    case 'flipbook':
      if (h) {
        return u ? /* @__PURE__ */ z('div', {
          className: f,
          role: 'img',
          'aria-label': l || 'Flipbook',
          children: /* @__PURE__ */ z(
            'div',
            {
              className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${m}`.trim(),
              children: /* @__PURE__ */ z('div', { className: 'text-center', children: 'Flipbook preview' }),
            },
          ),
        }) : /* @__PURE__ */ z('div', { className: f, children: /* @__PURE__ */ z('div', { className: m, children: /* @__PURE__ */ z(By, { fallback: /* @__PURE__ */ z('div', { children: 'Loading PDF...' }), children: /* @__PURE__ */ z(Gy, { pdfUrl: h, title: l, className: 'w-full' }) }) }) });
      }
      break;
  }
  return /* @__PURE__ */ z('div', { className: S, children: /* @__PURE__ */ z('div', { className: `flex items-center justify-center text-body-default text-center p-40 ${t === 'default' ? '' : 'absolute inset-0'}`.trim(), children: c ? `${c.charAt(0).toUpperCase() + c.slice(1)} placeholder` : 'Image/Video/Lottie/iframe' }) });
}; const
  WA = ({
    videoUrl: c,
    title: t,
    className: e = '',
    ...i
  }) => /* @__PURE__ */ z('div', {
    className: `container ${e}`.trim(),
    ...i,
    children: /* @__PURE__ */ z('div', {
      className: 'w-full flex justify-center',
      children: /* @__PURE__ */ z('div', {
        className: 'relative w-full h-full aspect-video',
        children: c ? /* @__PURE__ */ z(
          zy,
          {
            media: 'video',
            videoUrl: c,
            title: t || 'Video player',
            className: 'absolute inset-0 w-full h-full',
          },
        ) : /* @__PURE__ */ z('div', { className: 'absolute inset-0 flex items-center justify-center text-grey-900 text-body-default text-center p-40', children: 'Video placeholder' }),
      }),
    }),
  });
let df; let Qg; let uf; let
  Sd;
const Wy = async () => {
  if (!Sd) {
    const c = await Promise.resolve().then(() => LA);
    Sd = c.pdfjs, Qg = c.Document, uf = c.Page, Sd.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Sd.version}/build/pdf.worker.min.mjs`;
  }
}; const jy = async () => {
  df || (df = (await Promise.resolve().then(() => HA)).default);
}; const Vy = Xg(({ children: c }, t) => /* @__PURE__ */ z('div', { ref: t, className: 'w-full h-full overflow-hidden', children: c })); const qy = ({
  pdfUrl: c, title: t, width: e = 280, height: i = 280, className: s = '',
}) => {
  const [r, a] = eo(0); const [o, h] = eo(null); const [l, d] = eo(!0); const [u, p] = eo(i / e); const [y, S] = eo(0); const
    v = Ai(null);
  xt(() => {
    Promise.all([Wy(), jy()]).then(() => d(!1)).catch(() => {
      h('Failed to load flipbook');
    });
  }, []), xt(() => {
    const f = v.current;
    if (!f) return;
    const m = new ResizeObserver(([A]) => {
      const C = Math.floor(A.contentRect.width);
      C > 0 && S(C);
    });
    return m.observe(f), () => m.disconnect();
  }, [l]);
  const _ = y > 0 ? Math.floor(y / 2) : Math.floor(e / 2); const x = Math.round(_ * u); const T = Is(async (f) => {
    try {
      const A = (await f.getPage(1)).getViewport({ scale: 1 });
      A != null && A.width && (A != null && A.height) && p(A.height / A.width);
    } catch {
    }
    a(f.numPages || 0);
  }, []); const
    E = Is((f) => {
      h((f == null ? void 0 : f.message) || 'Failed to load PDF');
    }, []);
  return o ? /* @__PURE__ */ z('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Failed to load flipbook' }) : l ? /* @__PURE__ */ z('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }) : /* @__PURE__ */ z('div', {
    ref: v,
    className: `w-full ${s}`.trim(),
    children: /* @__PURE__ */ qg(
      Qg,
      {
        file: c,
        onLoadSuccess: T,
        onLoadError: E,
        loading: /* @__PURE__ */ z('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }),
        children: [
          r === 1 && /* @__PURE__ */ z(
            'div',
            {
              className: `w-full flex justify-center items-center ${s}`.trim(),
              style: { minHeight: `${x}px` },
              children: /* @__PURE__ */ z(uf, {
                pageNumber: 1, width: e, renderTextLayer: !1, renderAnnotationLayer: !1,
              }),
            },
          ),
          r > 1 && /* @__PURE__ */ z(
            df,
            {
              width: _,
              height: x,
              size: 'stretch',
              showCover: !0,
              mobileScrollSupport: !1,
              'aria-label': t || 'Flipbook',
              children: Array.from({ length: r }, (f, m) => /* @__PURE__ */ z(Vy, {
                children: /* @__PURE__ */ z(uf, {
                  pageNumber: m + 1, width: _, renderTextLayer: !1, renderAnnotationLayer: !1,
                }),
              }, m)),
            },
            `${_}-${x}`,
          ),
        ],
      },
    ),
  });
}; const Xy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qy,
}, Symbol.toStringTag, { value: 'Module' })); const Be = typeof process === 'object' && `${process}` == '[object process]' && !process.versions.nw && !(process.versions.electron && process.type && process.type !== 'browser'); const ff = [1e-3, 0, 0, 1e-3, 0, 0]; const tf = 1.35; const bi = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256,
}; const Ms = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3,
}; const El = 'pdfjs_internal_editor_'; const q = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102,
}; const it = {
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
  DRAW_STEP: 41,
}; const Zg = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048,
}; const ue = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4,
}; const xl = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3,
}; const zt = {
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
  REDACT: 26,
}; const io = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5,
}; const ud = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5,
}; const jh = {
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
  rawFillPath: 94,
}; const xd = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3,
}; const
  tm = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2,
  };
let Gu = ud.WARNINGS;
function Yy(c) {
  Number.isInteger(c) && (Gu = c);
}
function Ky() {
  return Gu;
}
function zu(c) {
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
function Jy(c) {
  switch (c == null ? void 0 : c.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return !0;
    default:
      return !1;
  }
}
function $p(c, t = null, e = null) {
  if (!c) return null;
  if (e && typeof c === 'string') {
    if (e.addDefaultProtocol && c.startsWith('www.')) {
      const s = c.match(/\./g);
      (s == null ? void 0 : s.length) >= 2 && (c = `http://${c}`);
    }
    if (e.tryConvertEncoding) {
      try {
        c = iw(c);
      } catch {
      }
    }
  }
  const i = t ? URL.parse(c, t) : URL.parse(c);
  return Jy(i) ? i : null;
}
function Up(c, t, e = !1) {
  const i = URL.parse(c);
  return i ? (i.hash = t, i.href) : e && $p(c, 'http://example.com') ? `${c.split('#', 1)[0]}${t ? `#${t}` : ''}` : '';
}
function J(c, t, e, i = !1) {
  return Object.defineProperty(c, t, {
    value: e,
    enumerable: !i,
    configurable: !0,
    writable: !1,
  }), e;
}
const Ja = (function () {
  function t(e, i) {
    this.message = e, this.name = i;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}());
class lg extends Ja {
  constructor(t, e) {
    super(t, 'PasswordException'), this.code = e;
  }
}
class ef extends Ja {
  constructor(t, e) {
    super(t, 'UnknownErrorException'), this.details = e;
  }
}
class du extends Ja {
  constructor(t) {
    super(t, 'InvalidPDFException');
  }
}
class _l extends Ja {
  constructor(t, e, i) {
    super(t, 'ResponseException'), this.status = e, this.missing = i;
  }
}
class Qy extends Ja {
  constructor(t) {
    super(t, 'FormatError');
  }
}
class _n extends Ja {
  constructor(t) {
    super(t, 'AbortException');
  }
}
function em(c) {
  (typeof c !== 'object' || (c == null ? void 0 : c.length) === void 0) && Et('Invalid argument for bytesToString');
  const t = c.length; const
    e = 8192;
  if (t < e) return String.fromCharCode.apply(null, c);
  const i = [];
  for (let s = 0; s < t; s += e) {
    const r = Math.min(s + e, t); const
      a = c.subarray(s, r);
    i.push(String.fromCharCode.apply(null, a));
  }
  return i.join('');
}
function fd(c) {
  typeof c !== 'string' && Et('Invalid argument for stringToBytes');
  const t = c.length; const
    e = new Uint8Array(t);
  for (let i = 0; i < t; ++i) e[i] = c.charCodeAt(i) & 255;
  return e;
}
function Zy(c) {
  return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
}
function tw() {
  const c = new Uint8Array(4);
  return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
}
function ew() {
  try {
    return new Function(''), !0;
  } catch {
    return !1;
  }
}
class ce {
  static get isLittleEndian() {
    return J(this, 'isLittleEndian', tw());
  }

  static get isEvalSupported() {
    return J(this, 'isEvalSupported', ew());
  }

  static get isOffscreenCanvasSupported() {
    return J(this, 'isOffscreenCanvasSupported', typeof OffscreenCanvas < 'u');
  }

  static get isImageDecoderSupported() {
    return J(this, 'isImageDecoderSupported', typeof ImageDecoder < 'u');
  }

  static get platform() {
    const {
      platform: t,
      userAgent: e,
    } = navigator;
    return J(this, 'platform', {
      isAndroid: e.includes('Android'),
      isLinux: t.includes('Linux'),
      isMac: t.includes('Mac'),
      isWindows: t.includes('Win'),
      isFirefox: e.includes('Firefox'),
    });
  }

  static get isCSSRoundSupported() {
    let t; let
      e;
    return J(this, 'isCSSRoundSupported', (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, 'width: round(1.5px, 1px)'));
  }
}
const sf = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, '0'));
let xn; let Ld; let
  pf;
class U {
  static makeHexColor(t, e, i) {
    return `#${sf[t]}${sf[e]}${sf[i]}`;
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
    const s = t[i]; const
      r = t[i + 1];
    t[i] = s * e[0] + r * e[2] + e[4], t[i + 1] = s * e[1] + r * e[3] + e[5];
  }

  static applyTransformToBezier(t, e, i = 0) {
    const s = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const h = e[4]; const
      l = e[5];
    for (let d = 0; d < 6; d += 2) {
      const u = t[i + d]; const
        p = t[i + d + 1];
      t[i + d] = u * s + p * a + h, t[i + d + 1] = u * r + p * o + l;
    }
  }

  static applyInverseTransform(t, e) {
    const i = t[0]; const s = t[1]; const
      r = e[0] * e[3] - e[1] * e[2];
    t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }

  static axialAlignedBoundingBox(t, e, i) {
    const s = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const h = e[4]; const l = e[5]; const d = t[0]; const u = t[1]; const p = t[2]; const
      y = t[3];
    let S = s * d + h; let v = S; let _ = s * p + h; let x = _; let T = o * u + l; let E = T; let f = o * y + l; let
      m = f;
    if (r !== 0 || a !== 0) {
      const A = r * d; const C = r * p; const P = a * u; const
        R = a * y;
      S += P, x += P, _ += R, v += R, T += A, m += A, f += C, E += C;
    }
    i[0] = Math.min(i[0], S, _, v, x), i[1] = Math.min(i[1], T, f, E, m), i[2] = Math.max(i[2], S, _, v, x), i[3] = Math.max(i[3], T, f, E, m);
  }

  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }

  static singularValueDecompose2dScale(t, e) {
    const i = t[0]; const s = t[1]; const r = t[2]; const a = t[3]; const o = i ** 2 + s ** 2; const h = i * r + s * a; const l = r ** 2 + a ** 2; const d = (o + l) / 2; const
      u = Math.sqrt(d ** 2 - (o * l - h ** 2));
    e[0] = Math.sqrt(d + u || 1), e[1] = Math.sqrt(d - u || 1);
  }

  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }

  static intersect(t, e) {
    const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])); const
      s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > s) return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])); const
      a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [i, r, s, a];
  }

  static pointBoundingBox(t, e, i) {
    i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
  }

  static rectBoundingBox(t, e, i, s, r) {
    r[0] = Math.min(r[0], t, i), r[1] = Math.min(r[1], e, s), r[2] = Math.max(r[2], t, i), r[3] = Math.max(r[3], e, s);
  }

  static bezierBoundingBox(t, e, i, s, r, a, o, h, l) {
    l[0] = Math.min(l[0], t, o), l[1] = Math.min(l[1], e, h), l[2] = Math.max(l[2], t, o), l[3] = Math.max(l[3], e, h), w(this, xn, pf).call(this, t, i, r, o, e, s, a, h, 3 * (-t + 3 * (i - r) + o), 6 * (t - 2 * i + r), 3 * (i - t), l), w(this, xn, pf).call(this, t, i, r, o, e, s, a, h, 3 * (-e + 3 * (s - a) + h), 6 * (e - 2 * s + a), 3 * (s - e), l);
  }
}
xn = new WeakSet(), Ld = function (t, e, i, s, r, a, o, h, l, d) {
  if (l <= 0 || l >= 1) return;
  const u = 1 - l; const p = l * l; const y = p * l; const S = u * (u * (u * t + 3 * l * e) + 3 * p * i) + y * s; const
    v = u * (u * (u * r + 3 * l * a) + 3 * p * o) + y * h;
  d[0] = Math.min(d[0], S), d[1] = Math.min(d[1], v), d[2] = Math.max(d[2], S), d[3] = Math.max(d[3], v);
}, pf = function (t, e, i, s, r, a, o, h, l, d, u, p) {
  if (Math.abs(l) < 1e-12) {
    Math.abs(d) >= 1e-12 && w(this, xn, Ld).call(this, t, e, i, s, r, a, o, h, -u / d, p);
    return;
  }
  const y = d ** 2 - 4 * u * l;
  if (y < 0) return;
  const S = Math.sqrt(y); const
    v = 2 * l;
  w(this, xn, Ld).call(this, t, e, i, s, r, a, o, h, (-d + S) / v, p), w(this, xn, Ld).call(this, t, e, i, s, r, a, o, h, (-d - S) / v, p);
}, b(U, xn);
function iw(c) {
  return decodeURIComponent(escape(c));
}
let nf = null; let
  cg = null;
function im(c) {
  return nf || (nf = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, cg = /* @__PURE__ */ new Map([['ﬅ', 'ſt']])), c.replaceAll(nf, (t, e, i) => (e ? e.normalize('NFKC') : cg.get(i)));
}
function Gp() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  const c = new Uint8Array(32);
  return crypto.getRandomValues(c), em(c);
}
const zp = 'pdfjs_internal_id_';
function sw(c, t, e) {
  if (!Array.isArray(e) || e.length < 2) return !1;
  const [i, s, ...r] = e;
  if (!c(i) && !Number.isInteger(i) || !t(s)) return !1;
  const a = r.length;
  let o = !0;
  switch (s.name) {
    case 'XYZ':
      if (a < 2 || a > 3) return !1;
      break;
    case 'Fit':
    case 'FitB':
      return a === 0;
    case 'FitH':
    case 'FitBH':
    case 'FitV':
    case 'FitBV':
      if (a > 1) return !1;
      break;
    case 'FitR':
      if (a !== 4) return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const h of r) if (!(typeof h === 'number' || o && h === null)) return !1;
  return !0;
}
function De(c, t, e) {
  return Math.min(Math.max(c, t), e);
}
function sm(c) {
  return Uint8Array.prototype.toBase64 ? c.toBase64() : btoa(em(c));
}
function nw(c) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(c) : fd(atob(c));
}
typeof Promise.try !== 'function' && (Promise.try = function (c, ...t) {
  return new Promise((e) => {
    e(c(...t));
  });
});
typeof Math.sumPrecise !== 'function' && (Math.sumPrecise = function (c) {
  return c.reduce((t, e) => t + e, 0);
});
class Cl {
  static textContent(t) {
    const e = []; const
      i = {
        items: e,
        styles: /* @__PURE__ */ Object.create(null),
      };
    function s(r) {
      let h;
      if (!r) return;
      let a = null;
      const o = r.name;
      if (o === '#text') a = r.value;
      else if (Cl.shouldBuildText(o)) (h = r == null ? void 0 : r.attributes) != null && h.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a,
      }), !!r.children) for (const l of r.children) s(l);
    }
    return s(t), i;
  }

  static shouldBuildText(t) {
    return !(t === 'textarea' || t === 'input' || t === 'option' || t === 'select');
  }
}
class Wp {
  static setupStorage(t, e, i, s, r) {
    const a = s.getValue(e, {
      value: null,
    });
    switch (i.name) {
      case 'textarea':
        if (a.value !== null && (t.textContent = a.value), r === 'print') break;
        t.addEventListener('input', (o) => {
          s.setValue(e, {
            value: o.target.value,
          });
        });
        break;
      case 'input':
        if (i.attributes.type === 'radio' || i.attributes.type === 'checkbox') {
          if (a.value === i.attributes.xfaOn ? t.setAttribute('checked', !0) : a.value === i.attributes.xfaOff && t.removeAttribute('checked'), r === 'print') break;
          t.addEventListener('change', (o) => {
            s.setValue(e, {
              value: o.target.checked ? o.target.getAttribute('xfaOn') : o.target.getAttribute('xfaOff'),
            });
          });
        } else {
          if (a.value !== null && t.setAttribute('value', a.value), r === 'print') break;
          t.addEventListener('input', (o) => {
            s.setValue(e, {
              value: o.target.value,
            });
          });
        }
        break;
      case 'select':
        if (a.value !== null) {
          t.setAttribute('value', a.value);
          for (const o of i.children) o.attributes.value === a.value ? o.attributes.selected = !0 : o.attributes.hasOwnProperty('selected') && delete o.attributes.selected;
        }
        t.addEventListener('input', (o) => {
          const h = o.target.options; const
            l = h.selectedIndex === -1 ? '' : h[h.selectedIndex].value;
          s.setValue(e, {
            value: l,
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
    linkService: r,
  }) {
    const {
      attributes: a,
    } = e; const
      o = t instanceof HTMLAnchorElement;
    a.type === 'radio' && (a.name = `${a.name}-${s}`);
    for (const [h, l] of Object.entries(a)) {
      if (l != null) {
        switch (h) {
          case 'class':
            l.length && t.setAttribute(h, l.join(' '));
            break;
          case 'dataId':
            break;
          case 'id':
            t.setAttribute('data-element-id', l);
            break;
          case 'style':
            Object.assign(t.style, l);
            break;
          case 'textContent':
            t.textContent = l;
            break;
          default:
            (!o || h !== 'href' && h !== 'newWindow') && t.setAttribute(h, l);
        }
      }
    }
    o && r.addLinkAttributes(t, a.href, a.newWindow), i && a.dataId && this.setupStorage(t, a.dataId, e, i);
  }

  static render(t) {
    let u; let
      p;
    const e = t.annotationStorage; const i = t.linkService; const s = t.xfaHtml; const r = t.intent || 'display'; const
      a = document.createElement(s.name);
    s.attributes && this.setAttributes({
      html: a,
      element: s,
      intent: r,
      linkService: i,
    });
    const o = r !== 'richText';
    const h = t.div;
    if (h.append(a), t.viewport) {
      const y = `matrix(${t.viewport.transform.join(',')})`;
      h.style.transform = y;
    }
    o && h.setAttribute('class', 'xfaLayer xfaFont');
    const l = [];
    if (s.children.length === 0) {
      if (s.value) {
        const y = document.createTextNode(s.value);
        a.append(y), o && Cl.shouldBuildText(s.name) && l.push(y);
      }
      return {
        textDivs: l,
      };
    }
    const d = [[s, -1, a]];
    for (; d.length > 0;) {
      const [y, S, v] = d.at(-1);
      if (S + 1 === y.children.length) {
        d.pop();
        continue;
      }
      const _ = y.children[++d.at(-1)[1]];
      if (_ === null) continue;
      const {
        name: x,
      } = _;
      if (x === '#text') {
        const E = document.createTextNode(_.value);
        l.push(E), v.append(E);
        continue;
      }
      const T = (u = _ == null ? void 0 : _.attributes) != null && u.xmlns ? document.createElementNS(_.attributes.xmlns, x) : document.createElement(x);
      if (v.append(T), _.attributes && this.setAttributes({
        html: T,
        element: _,
        storage: e,
        intent: r,
        linkService: i,
      }), ((p = _.children) == null ? void 0 : p.length) > 0) d.push([_, -1, T]);
      else if (_.value) {
        const E = document.createTextNode(_.value);
        o && Cl.shouldBuildText(x) && l.push(E), T.append(E);
      }
    }
    for (const y of h.querySelectorAll('.xfaNonInteractive input, .xfaNonInteractive textarea')) y.setAttribute('readOnly', !0);
    return {
      textDivs: l,
    };
  }

  static update(t) {
    const e = `matrix(${t.viewport.transform.join(',')})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Os = 'http://www.w3.org/2000/svg';
const Ir = class Ir {
};
M(Ir, 'CSS', 96), M(Ir, 'PDF', 72), M(Ir, 'PDF_TO_CSS_UNITS', Ir.CSS / Ir.PDF);
const Cn = Ir;
async function Xh(c, t = 'text') {
  if (el(c, document.baseURI)) {
    const e = await fetch(c);
    if (!e.ok) throw new Error(e.statusText);
    switch (t) {
      case 'arraybuffer':
        return e.arrayBuffer();
      case 'blob':
        return e.blob();
      case 'json':
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, i) => {
    const s = new XMLHttpRequest();
    s.open('GET', c, !0), s.responseType = t, s.onreadystatechange = () => {
      if (s.readyState === XMLHttpRequest.DONE) {
        if (s.status === 200 || s.status === 0) {
          switch (t) {
            case 'arraybuffer':
            case 'blob':
            case 'json':
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
    dontFlip: o = !1,
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = i, this.rotation = s, this.offsetX = r, this.offsetY = a, i *= e;
    const h = (t[2] + t[0]) / 2; const
      l = (t[3] + t[1]) / 2;
    let d; let u; let p; let
      y;
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
        throw new Error('PageViewport: Invalid rotation, must be a multiple of 90 degrees.');
    }
    o && (p = -p, y = -y);
    let S; let v; let _; let
      x;
    d === 0 ? (S = Math.abs(l - t[1]) * i + r, v = Math.abs(h - t[0]) * i + a, _ = (t[3] - t[1]) * i, x = (t[2] - t[0]) * i) : (S = Math.abs(h - t[0]) * i + r, v = Math.abs(l - t[1]) * i + a, _ = (t[2] - t[0]) * i, x = (t[3] - t[1]) * i), this.transform = [d * i, u * i, p * i, y * i, S - d * i * h - p * i * l, v - u * i * h - y * i * l], this.width = _, this.height = x;
  }

  get rawDims() {
    const t = this.viewBox;
    return J(this, 'rawDims', {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1],
    });
  }

  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: i = this.offsetX,
    offsetY: s = this.offsetY,
    dontFlip: r = !1,
  } = {}) {
    return new pd({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r,
    });
  }

  convertToViewportPoint(t, e) {
    const i = [t, e];
    return U.applyTransform(i, this.transform), i;
  }

  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    U.applyTransform(e, this.transform);
    const i = [t[2], t[3]];
    return U.applyTransform(i, this.transform), [e[0], e[1], i[0], i[1]];
  }

  convertToPdfPoint(t, e) {
    const i = [t, e];
    return U.applyInverseTransform(i, this.transform), i;
  }
}
class Wu extends Ja {
  constructor(t, e = 0) {
    super(t, 'RenderingCancelledException'), this.extraDelay = e;
  }
}
function gd(c) {
  const t = c.length;
  let e = 0;
  for (; e < t && c[e].trim() === '';) e++;
  return c.substring(e, e + 5).toLowerCase() === 'data:';
}
function ju(c) {
  return typeof c === 'string' && /\.pdf$/i.test(c);
}
function nm(c) {
  return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf('/') + 1);
}
function rm(c, t = 'document.pdf') {
  if (typeof c !== 'string') return t;
  if (gd(c)) return X('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const i = ((o) => {
    try {
      return new URL(o);
    } catch {
      try {
        return new URL(decodeURIComponent(o));
      } catch {
        try {
          return new URL(o, 'https://foo.bar');
        } catch {
          try {
            return new URL(decodeURIComponent(o), 'https://foo.bar');
          } catch {
            return null;
          }
        }
      }
    }
  })(c);
  if (!i) return t;
  const s = (o) => {
    try {
      let h = decodeURIComponent(o);
      return h.includes('/') ? (h = h.split('/').at(-1), h.test(/^\.pdf$/i) ? h : o) : h;
    } catch {
      return o;
    }
  }; const r = /\.pdf$/i; const
    a = i.pathname.split('/').at(-1);
  if (r.test(a)) return s(a);
  if (i.searchParams.size > 0) {
    const o = Array.from(i.searchParams.values()).reverse();
    for (const l of o) if (r.test(l)) return s(l);
    const h = Array.from(i.searchParams.keys()).reverse();
    for (const l of h) if (r.test(l)) return s(l);
  }
  if (i.hash) {
    const h = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
    if (h) return s(h[0]);
  }
  return t;
}
class dg {
  constructor() {
    M(this, 'started', /* @__PURE__ */ Object.create(null));
    M(this, 'times', []);
  }

  time(t) {
    t in this.started && X(`Timer is already running for ${t}`), this.started[t] = Date.now();
  }

  timeEnd(t) {
    t in this.started || X(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: this.started[t],
      end: Date.now(),
    }), delete this.started[t];
  }

  toString() {
    const t = [];
    let e = 0;
    for (const {
      name: i,
    } of this.times) e = Math.max(i.length, e);
    for (const {
      name: i,
      start: s,
      end: r,
    } of this.times) {
      t.push(`${i.padEnd(e)} ${r - s}ms
`);
    }
    return t.join('');
  }
}
function el(c, t) {
  const e = t ? URL.parse(c, t) : URL.parse(c);
  return (e == null ? void 0 : e.protocol) === 'http:' || (e == null ? void 0 : e.protocol) === 'https:';
}
function Si(c) {
  c.preventDefault();
}
function Nt(c) {
  c.preventDefault(), c.stopPropagation();
}
function rw(c) {
  console.log(`Deprecated API usage: ${c}`);
}
let Ml;
class Tl {
  static toDateObject(t) {
    if (t instanceof Date) return t;
    if (!t || typeof t !== 'string') return null;
    n(this, Ml) || g(this, Ml, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Ml).exec(t);
    if (!e) return null;
    const i = parseInt(e[1], 10);
    let s = parseInt(e[2], 10);
    s = s >= 1 && s <= 12 ? s - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let h = parseInt(e[6], 10);
    h = h >= 0 && h <= 59 ? h : 0;
    const l = e[7] || 'Z';
    let d = parseInt(e[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, l === '-' ? (a += d, o += u) : l === '+' && (a -= d, o -= u), new Date(Date.UTC(i, s, r, a, o, h));
  }
}
Ml = new WeakMap(), b(Tl, Ml);
function am(c, {
  scale: t = 1,
  rotation: e = 0,
}) {
  const {
    width: i,
    height: s,
  } = c.attributes.style; const
    r = [0, 0, parseInt(i), parseInt(s)];
  return new pd({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e,
  });
}
function Yh(c) {
  if (c.startsWith('#')) {
    const t = parseInt(c.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return c.startsWith('rgb(') ? c.slice(4, -1).split(',').map((t) => parseInt(t)) : c.startsWith('rgba(') ? c.slice(5, -1).split(',').map((t) => parseInt(t)).slice(0, 3) : (X(`Not a valid color format: "${c}"`), [0, 0, 0]);
}
function aw(c) {
  const t = document.createElement('span');
  t.style.visibility = 'hidden', t.style.colorScheme = 'only light', document.body.append(t);
  for (const e of c.keys()) {
    t.style.color = e;
    const i = window.getComputedStyle(t).color;
    c.set(e, Yh(i));
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
    f: a,
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
    f: a,
  } = c.getTransform().invertSelf();
  return [t, e, i, s, r, a];
}
function Cr(c, t, e = !1, i = !0) {
  if (t instanceof pd) {
    const {
      pageWidth: s,
      pageHeight: r,
    } = t.rawDims; const {
      style: a,
    } = c; const o = ce.isCSSRoundSupported; const h = `var(--total-scale-factor) * ${s}px`; const l = `var(--total-scale-factor) * ${r}px`; const d = o ? `round(down, ${h}, var(--scale-round-x))` : `calc(${h})`; const
      u = o ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
    !e || t.rotation % 180 === 0 ? (a.width = d, a.height = u) : (a.width = u, a.height = d);
  }
  i && c.setAttribute('data-main-rotation', t.rotation);
}
class ss {
  constructor() {
    const {
      pixelRatio: t,
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
    let a = 1 / 0; let o = 1 / 0; let
      h = 1 / 0;
    i = ss.capPixels(i, r), i > 0 && (a = Math.sqrt(i / (t * e))), s !== -1 && (o = s / t, h = s / e);
    const l = Math.min(a, o, h);
    return this.sx > l || this.sy > l ? (this.sx = l, this.sy = l, !0) : !1;
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
const uu = ['image/apng', 'image/avif', 'image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/x-icon'];
class ow {
  static get isDarkMode() {
    let t;
    return J(this, 'isDarkMode', !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, '(prefers-color-scheme: dark)').matches));
  }
}
class om {
  static get commentForegroundColor() {
    const t = document.createElement('span');
    t.classList.add('comment', 'sidebar');
    const {
      style: e,
    } = t;
    e.width = e.height = '0', e.display = 'none', e.color = 'var(--comment-fg-color)', document.body.append(t);
    const {
      color: i,
    } = window.getComputedStyle(t);
    return t.remove(), J(this, 'commentForegroundColor', Yh(i));
  }
}
function hm(c, t, e, i) {
  i = Math.min(Math.max(i ?? 1, 0), 1);
  const s = 255 * (1 - i);
  return c = Math.round(c * i + s), t = Math.round(t * i + s), e = Math.round(e * i + s), [c, t, e];
}
function ug(c, t) {
  const e = c[0] / 255; const i = c[1] / 255; const s = c[2] / 255; const r = Math.max(e, i, s); const a = Math.min(e, i, s); const
    o = (r + a) / 2;
  if (r === a) t[0] = t[1] = 0;
  else {
    const h = r - a;
    switch (t[1] = o < 0.5 ? h / (r + a) : h / (2 - r - a), r) {
      case e:
        t[0] = ((i - s) / h + (i < s ? 6 : 0)) * 60;
        break;
      case i:
        t[0] = ((s - e) / h + 2) * 60;
        break;
      case s:
        t[0] = ((e - i) / h + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function gf(c, t) {
  const e = c[0]; const i = c[1]; const s = c[2]; const r = (1 - Math.abs(2 * s - 1)) * i; const a = r * (1 - Math.abs(e / 60 % 2 - 1)); const
    o = s - r / 2;
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
function fg(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function pg(c, t, e) {
  gf(c, e), e.map(fg);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  gf(t, e), e.map(fg);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
}
const gg = /* @__PURE__ */ new Map();
function lm(c, t) {
  const e = c[0] + c[1] * 256 + c[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let i = gg.get(e);
  if (i) return i;
  const s = new Float32Array(9); const r = s.subarray(0, 3); const
    a = s.subarray(3, 6);
  ug(c, a);
  const o = s.subarray(6, 9);
  ug(t, o);
  const h = o[2] < 0.5; const
    l = h ? 12 : 4.5;
  if (a[2] = h ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), pg(a, o, r) < l) {
    let d; let
      u;
    h ? (d = a[2], u = 1) : (d = 0, u = a[2]);
    const p = 5e-3;
    for (; u - d > p;) {
      const y = a[2] = (d + u) / 2;
      h === pg(a, o, r) < l ? d = y : u = y;
    }
    a[2] = h ? u : d;
  }
  return gf(a, r), i = U.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), gg.set(e, i), i;
}
function jp({
  html: c,
  dir: t,
  className: e,
}, i) {
  const s = document.createDocumentFragment();
  if (typeof c === 'string') {
    const r = document.createElement('p');
    r.dir = t || 'auto';
    const a = c.split(/(?:\r\n?|\n)/);
    for (let o = 0, h = a.length; o < h; ++o) {
      const l = a[o];
      r.append(document.createTextNode(l)), o < h - 1 && r.append(document.createElement('br'));
    }
    s.append(r);
  } else {
    Wp.render({
      xfaHtml: c,
      div: s,
      intent: 'richText',
    });
  }
  s.firstChild.classList.add('richText', e), i.append(s);
}
let Mn; let Ln; let _i; let Ci; let Ll; let In; let wo; let Ao; let Il; let xu; let cm; let Ae; let dm; let um; let so; let
  il;
const $s = class $s {
  constructor(t) {
    b(this, Ae);
    b(this, Mn, null);
    b(this, Ln, null);
    b(this, _i);
    b(this, Ci, null);
    b(this, Ll, null);
    b(this, In, null);
    b(this, wo, null);
    b(this, Ao, null);
    g(this, _i, t), n($s, Il) || g($s, Il, Object.freeze({
      freetext: 'pdfjs-editor-remove-freetext-button',
      highlight: 'pdfjs-editor-remove-highlight-button',
      ink: 'pdfjs-editor-remove-ink-button',
      stamp: 'pdfjs-editor-remove-stamp-button',
      signature: 'pdfjs-editor-remove-signature-button',
    }));
  }

  render() {
    const t = g(this, Mn, document.createElement('div'));
    t.classList.add('editToolbar', 'hidden'), t.setAttribute('role', 'toolbar');
    const e = n(this, _i)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener('contextmenu', Si, {
      signal: e,
    }), t.addEventListener('pointerdown', w($s, xu, cm), {
      signal: e,
    }));
    const i = g(this, Ci, document.createElement('div'));
    i.className = 'buttons', t.append(i);
    const s = n(this, _i).toolbarPosition;
    if (s) {
      const {
        style: r,
      } = t; const
        a = n(this, _i)._uiManager.direction === 'ltr' ? 1 - s[0] : s[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }

  get div() {
    return n(this, Mn);
  }

  hide() {
    let t;
    n(this, Mn).classList.add('hidden'), (t = n(this, Ln)) == null || t.hideDropdown();
  }

  show() {
    let t; let
      e;
    n(this, Mn).classList.remove('hidden'), (t = n(this, Ll)) == null || t.shown(), (e = n(this, In)) == null || e.shown();
  }

  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e,
    } = n(this, _i); const
      i = document.createElement('button');
    i.classList.add('basic', 'deleteButton'), i.tabIndex = 0, i.setAttribute('data-l10n-id', n($s, Il)[t]), w(this, Ae, so).call(this, i) && i.addEventListener('click', (s) => {
      e.delete();
    }, {
      signal: e._signal,
    }), n(this, Ci).append(i);
  }

  async addAltText(t) {
    const e = await t.render();
    w(this, Ae, so).call(this, e), n(this, Ci).append(e, n(this, Ae, il)), g(this, Ll, t);
  }

  addComment(t, e = null) {
    if (n(this, In)) return;
    const i = t.renderForToolbar();
    if (!i) return;
    w(this, Ae, so).call(this, i);
    const s = g(this, wo, n(this, Ae, il));
    e ? (n(this, Ci).insertBefore(i, e), n(this, Ci).insertBefore(s, e)) : n(this, Ci).append(i, s), g(this, In, t), t.toolbar = this;
  }

  addColorPicker(t) {
    if (n(this, Ln)) return;
    g(this, Ln, t);
    const e = t.renderButton();
    w(this, Ae, so).call(this, e), n(this, Ci).append(e, n(this, Ae, il));
  }

  async addEditSignatureButton(t) {
    const e = g(this, Ao, await t.renderEditButton(n(this, _i)));
    w(this, Ae, so).call(this, e), n(this, Ci).append(e, n(this, Ae, il));
  }

  removeButton(t) {
    let e; let
      i;
    switch (t) {
      case 'comment':
        (e = n(this, In)) == null || e.removeToolbarCommentButton(), g(this, In, null), (i = n(this, wo)) == null || i.remove(), g(this, wo, null);
        break;
    }
  }

  async addButton(t, e) {
    switch (t) {
      case 'colorPicker':
        this.addColorPicker(e);
        break;
      case 'altText':
        await this.addAltText(e);
        break;
      case 'editSignature':
        await this.addEditSignatureButton(e);
        break;
      case 'delete':
        this.addDeleteButton();
        break;
      case 'comment':
        this.addComment(e);
        break;
    }
  }

  async addButtonBefore(t, e, i) {
    const s = n(this, Ci).querySelector(i);
    s && t === 'comment' && this.addComment(e, s);
  }

  updateEditSignatureButton(t) {
    n(this, Ao) && (n(this, Ao).title = t);
  }

  remove() {
    let t;
    n(this, Mn).remove(), (t = n(this, Ln)) == null || t.destroy(), g(this, Ln, null);
  }
};
Mn = new WeakMap(), Ln = new WeakMap(), _i = new WeakMap(), Ci = new WeakMap(), Ll = new WeakMap(), In = new WeakMap(), wo = new WeakMap(), Ao = new WeakMap(), Il = new WeakMap(), xu = new WeakSet(), cm = function (t) {
  t.stopPropagation();
}, Ae = new WeakSet(), dm = function (t) {
  n(this, _i)._focusEventsAllowed = !1, Nt(t);
}, um = function (t) {
  n(this, _i)._focusEventsAllowed = !0, Nt(t);
}, so = function (t) {
  const e = n(this, _i)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener('focusin', w(this, Ae, dm).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('focusout', w(this, Ae, um).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('contextmenu', Si, {
    signal: e,
  }), !0);
}, il = function () {
  const t = document.createElement('div');
  return t.className = 'divider', t;
}, b($s, xu), b($s, Il, null);
const mf = $s;
let Fl; let Or; let Gs; let Tn; let fm; let pm; let
  bf;
class hw {
  constructor(t) {
    b(this, Tn);
    b(this, Fl, null);
    b(this, Or, null);
    b(this, Gs);
    g(this, Gs, t);
  }

  show(t, e, i) {
    const [s, r] = w(this, Tn, pm).call(this, e, i); const
      {
        style: a,
      } = n(this, Or) || g(this, Or, w(this, Tn, fm).call(this));
    t.append(n(this, Or)), a.insetInlineEnd = `${100 * s}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }

  hide() {
    n(this, Or).remove();
  }
}
Fl = new WeakMap(), Or = new WeakMap(), Gs = new WeakMap(), Tn = new WeakSet(), fm = function () {
  const t = g(this, Or, document.createElement('div'));
  t.className = 'editToolbar', t.setAttribute('role', 'toolbar');
  const e = n(this, Gs)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener('contextmenu', Si, {
    signal: e,
  });
  const i = g(this, Fl, document.createElement('div'));
  return i.className = 'buttons', t.append(i), n(this, Gs).hasCommentManager() && w(this, Tn, bf).call(this, 'commentButton', 'pdfjs-comment-floating-button', 'pdfjs-comment-floating-button-label', () => {
    n(this, Gs).commentSelection('floating_button');
  }), w(this, Tn, bf).call(this, 'highlightButton', 'pdfjs-highlight-floating-button1', 'pdfjs-highlight-floating-button-label', () => {
    n(this, Gs).highlightSelection('floating_button');
  }), t;
}, pm = function (t, e) {
  let i = 0; let
    s = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < i) continue;
    const o = r.x + (e ? r.width : 0);
    if (a > i) {
      s = o, i = a;
      continue;
    }
    e ? o > s && (s = o) : o < s && (s = o);
  }
  return [e ? 1 - s : s, i];
}, bf = function (t, e, i, s) {
  const r = document.createElement('button');
  r.classList.add('basic', t), r.tabIndex = 0, r.setAttribute('data-l10n-id', e);
  const a = document.createElement('span');
  r.append(a), a.className = 'visuallyHidden', a.setAttribute('data-l10n-id', i);
  const o = n(this, Gs)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener('contextmenu', Si, {
    signal: o,
  }), r.addEventListener('click', s, {
    signal: o,
  })), n(this, Fl).append(r);
};
function gm(c, t, e) {
  for (const i of e) t.addEventListener(i, c[i].bind(c));
}
let Eu;
class lw {
  constructor() {
    b(this, Eu, 0);
  }

  get id() {
    return `${El}${Kt(this, Eu)._++}`;
  }
}
Eu = new WeakMap();
let vo; let Nl; let Ee; let So; let
  Id;
const sg = class sg {
  constructor() {
    b(this, So);
    b(this, vo, Gp());
    b(this, Nl, 0);
    b(this, Ee, null);
  }

  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>'; const i = new OffscreenCanvas(1, 3).getContext('2d', {
      willReadFrequently: !0,
    }); const
      s = new Image();
    s.src = t;
    const r = s.decode().then(() => (i.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return J(this, '_isSVGFittingCanvas', r);
  }

  async getFromFile(t) {
    const {
      lastModified: e,
      name: i,
      size: s,
      type: r,
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
    if (!e) return null;
    if (e.bitmap) return e.refCounter += 1, e;
    if (e.file) return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: i,
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, i);
    }
    return this.getFromUrl(e.url);
  }

  getFromCanvas(t, e) {
    n(this, Ee) || g(this, Ee, /* @__PURE__ */ new Map());
    let i = n(this, Ee).get(t);
    if (i != null && i.bitmap) return i.refCounter += 1, i;
    const s = new OffscreenCanvas(e.width, e.height);
    return s.getContext('2d').drawImage(e, 0, 0), i = {
      bitmap: s.transferToImageBitmap(),
      id: `image_${n(this, vo)}_${Kt(this, Nl)._++}`,
      refCounter: 1,
      isSvg: !1,
    }, n(this, Ee).set(t, i), n(this, Ee).set(i.id, i), i;
  }

  getSvgUrl(t) {
    const e = n(this, Ee).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }

  deleteId(t) {
    let s;
    n(this, Ee) || g(this, Ee, /* @__PURE__ */ new Map());
    const e = n(this, Ee).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0)) return;
    const {
      bitmap: i,
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(i.width, i.height);
      r.getContext('bitmaprenderer').transferFromImageBitmap(i), e.blobPromise = r.convertToBlob();
    }
    (s = i.close) == null || s.call(i), e.bitmap = null;
  }

  isValidId(t) {
    return t.startsWith(`image_${n(this, vo)}_`);
  }
};
vo = new WeakMap(), Nl = new WeakMap(), Ee = new WeakMap(), So = new WeakSet(), Id = async function (t, e) {
  n(this, Ee) || g(this, Ee, /* @__PURE__ */ new Map());
  let i = n(this, Ee).get(t);
  if (i === null) return null;
  if (i != null && i.bitmap) return i.refCounter += 1, i;
  try {
    i || (i = {
      bitmap: null,
      id: `image_${n(this, vo)}_${Kt(this, Nl)._++}`,
      refCounter: 0,
      isSvg: !1,
    });
    let s;
    if (typeof e === 'string' ? (i.url = e, s = await Xh(e, 'blob')) : e instanceof File ? s = i.file = e : e instanceof Blob && (s = e), s.type === 'image/svg+xml') {
      const r = sg._isSVGFittingCanvas; const a = new FileReader(); const o = new Image(); const
        h = new Promise((l, d) => {
          o.onload = () => {
            i.bitmap = o, i.isSvg = !0, l();
          }, a.onload = async () => {
            const u = i.svgUrl = a.result;
            o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
          }, o.onerror = a.onerror = d;
        });
      a.readAsDataURL(s), await h;
    } else i.bitmap = await createImageBitmap(s);
    i.refCounter = 1;
  } catch (s) {
    X(s), i = null;
  }
  return n(this, Ee).set(t, i), i && n(this, Ee).set(i.id, i), i;
};
const yf = sg;
let Wt; let Fn; let Ol; let
  It;
class cw {
  constructor(t = 128) {
    b(this, Wt, []);
    b(this, Fn, !1);
    b(this, Ol);
    b(this, It, -1);
    g(this, Ol, t);
  }

  add({
    cmd: t,
    undo: e,
    post: i,
    mustExec: s,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1,
  }) {
    if (s && t(), n(this, Fn)) return;
    const h = {
      cmd: t,
      undo: e,
      post: i,
      type: r,
    };
    if (n(this, It) === -1) {
      n(this, Wt).length > 0 && (n(this, Wt).length = 0), g(this, It, 0), n(this, Wt).push(h);
      return;
    }
    if (a && n(this, Wt)[n(this, It)].type === r) {
      o && (h.undo = n(this, Wt)[n(this, It)].undo), n(this, Wt)[n(this, It)] = h;
      return;
    }
    const l = n(this, It) + 1;
    l === n(this, Ol) ? n(this, Wt).splice(0, 1) : (g(this, It, l), l < n(this, Wt).length && n(this, Wt).splice(l)), n(this, Wt).push(h);
  }

  undo() {
    if (n(this, It) === -1) return;
    g(this, Fn, !0);
    const {
      undo: t,
      post: e,
    } = n(this, Wt)[n(this, It)];
    t(), e == null || e(), g(this, Fn, !1), g(this, It, n(this, It) - 1);
  }

  redo() {
    if (n(this, It) < n(this, Wt).length - 1) {
      g(this, It, n(this, It) + 1), g(this, Fn, !0);
      const {
        cmd: t,
        post: e,
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
      for (let e = n(this, It); e >= 0; e--) {
        if (n(this, Wt)[e].type !== t) {
          n(this, Wt).splice(e + 1, n(this, It) - e), g(this, It, e);
          return;
        }
      }
      n(this, Wt).length = 0, g(this, It, -1);
    }
  }

  destroy() {
    g(this, Wt, null);
  }
}
Wt = new WeakMap(), Fn = new WeakMap(), Ol = new WeakMap(), It = new WeakMap();
let _u; let
  mm;
class md {
  constructor(t) {
    b(this, _u);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e,
    } = ce.platform;
    for (const [i, s, r = {}] of t) {
      for (const a of i) {
        const o = a.startsWith('mac+');
        e && o ? (this.callbacks.set(a.slice(4), {
          callback: s,
          options: r,
        }), this.allKeys.add(a.split('+').at(-1))) : !e && !o && (this.callbacks.set(a, {
          callback: s,
          options: r,
        }), this.allKeys.add(a.split('+').at(-1)));
      }
    }
  }

  exec(t, e) {
    if (!this.allKeys.has(e.key)) return;
    const i = this.callbacks.get(w(this, _u, mm).call(this, e));
    if (!i) return;
    const {
      callback: s,
      options: {
        bubbles: r = !1,
        args: a = [],
        checker: o = null,
      },
    } = i;
    o && !o(t, e) || (s.bind(t, ...a, e)(), r || Nt(e));
  }
}
_u = new WeakSet(), mm = function (t) {
  t.altKey && this.buffer.push('alt'), t.ctrlKey && this.buffer.push('ctrl'), t.metaKey && this.buffer.push('meta'), t.shiftKey && this.buffer.push('shift'), this.buffer.push(t.key);
  const e = this.buffer.join('+');
  return this.buffer.length = 0, e;
};
const Cu = class Cu {
  get _colors() {
    const t = /* @__PURE__ */ new Map([['CanvasText', null], ['Canvas', null]]);
    return aw(t), J(this, '_colors', t);
  }

  convert(t) {
    const e = Yh(t);
    if (!window.matchMedia('(forced-colors: active)').matches) return e;
    for (const [i, s] of this._colors) if (s.every((r, a) => r === e[a])) return Cu._colorsMapping.get(i);
    return e;
  }

  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? U.makeHexColor(...e) : t;
  }
};
M(Cu, '_colorsMapping', /* @__PURE__ */ new Map([['CanvasText', [0, 0, 0]], ['Canvas', [255, 255, 255]]]));
const wf = Cu;
let xo; let ti; let Eo; let Bt; let Qt; let _o; let Ti; let Co; let Pi; let _e; let Nn; let On; let To; let Bn; let ls; let Ri; let Br; let Bl; let Hl; let Po; let $l; let cs; let Hn; let Ro; let $n; let ds; let Tu; let Un; let Do; let Ul; let Gn; let Hr; let ko; let zn; let Gl; let qt; let dt; let zs; let Wn; let jn; let zl; let Mo; let Wl; let Vn; let us; let Ws; let jl; let Vl; let Di; let F; let Fd; let Af; let bm; let ym; let sl; let wm; let Am; let vm; let vf; let Sm; let Sf; let xf; let xm; let Le; let Bs; let Em; let _m; let Ef; let Cm; let nl; let
  _f;
const uo = class uo {
  constructor(t, e, i, s, r, a, o, h, l, d, u, p, y, S, v, _) {
    b(this, F);
    b(this, xo, new AbortController());
    b(this, ti, null);
    b(this, Eo, null);
    b(this, Bt, /* @__PURE__ */ new Map());
    b(this, Qt, /* @__PURE__ */ new Map());
    b(this, _o, null);
    b(this, Ti, null);
    b(this, Co, null);
    b(this, Pi, new cw());
    b(this, _e, null);
    b(this, Nn, null);
    b(this, On, null);
    b(this, To, 0);
    b(this, Bn, /* @__PURE__ */ new Set());
    b(this, ls, null);
    b(this, Ri, null);
    b(this, Br, /* @__PURE__ */ new Set());
    M(this, '_editorUndoBar', null);
    b(this, Bl, !1);
    b(this, Hl, !1);
    b(this, Po, !1);
    b(this, $l, null);
    b(this, cs, null);
    b(this, Hn, null);
    b(this, Ro, null);
    b(this, $n, !1);
    b(this, ds, null);
    b(this, Tu, new lw());
    b(this, Un, !1);
    b(this, Do, !1);
    b(this, Ul, !1);
    b(this, Gn, null);
    b(this, Hr, null);
    b(this, ko, null);
    b(this, zn, null);
    b(this, Gl, null);
    b(this, qt, q.NONE);
    b(this, dt, /* @__PURE__ */ new Set());
    b(this, zs, null);
    b(this, Wn, null);
    b(this, jn, null);
    b(this, zl, null);
    b(this, Mo, null);
    b(this, Wl, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1,
    });
    b(this, Vn, [0, 0]);
    b(this, us, null);
    b(this, Ws, null);
    b(this, jl, null);
    b(this, Vl, null);
    b(this, Di, null);
    const x = this._signal = n(this, xo).signal;
    g(this, Ws, t), g(this, jl, e), g(this, Vl, i), g(this, _o, s), g(this, _e, r), g(this, Wn, a), g(this, Mo, h), this._eventBus = o, o._on('editingaction', this.onEditingAction.bind(this), {
      signal: x,
    }), o._on('pagechanging', this.onPageChanging.bind(this), {
      signal: x,
    }), o._on('scalechanging', this.onScaleChanging.bind(this), {
      signal: x,
    }), o._on('rotationchanging', this.onRotationChanging.bind(this), {
      signal: x,
    }), o._on('setpreference', this.onSetPreference.bind(this), {
      signal: x,
    }), o._on('switchannotationeditorparams', (T) => this.updateParams(T.type, T.value), {
      signal: x,
    }), window.addEventListener('pointerdown', () => {
      g(this, Do, !0);
    }, {
      capture: !0,
      signal: x,
    }), window.addEventListener('pointerup', () => {
      g(this, Do, !1);
    }, {
      capture: !0,
      signal: x,
    }), w(this, F, wm).call(this), w(this, F, xm).call(this), w(this, F, vf).call(this), g(this, Ti, h.annotationStorage), g(this, $l, h.filterFactory), g(this, jn, l), g(this, Ro, d || null), g(this, Bl, u), g(this, Hl, p), g(this, Po, y), g(this, Gl, S || null), this.viewParameters = {
      realScale: Cn.PDF_TO_CSS_UNITS,
      rotation: 0,
    }, this.isShiftKeyDown = !1, this._editorUndoBar = v || null, this._supportsPinchToZoom = _ !== !1, r == null || r.setSidebarUiManager(this);
  }

  static get _keyboardManager() {
    const t = uo.prototype; const e = (a) => n(a, Ws).contains(document.activeElement) && document.activeElement.tagName !== 'BUTTON' && a.hasSomethingToControl(); const i = (a, {
      target: o,
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: h,
        } = o;
        return h !== 'text' && h !== 'number';
      }
      return !0;
    }; const s = this.TRANSLATE_SMALL; const
      r = this.TRANSLATE_BIG;
    return J(this, '_keyboardManager', new md([[['ctrl+a', 'mac+meta+a'], t.selectAll, {
      checker: i,
    }], [['ctrl+z', 'mac+meta+z'], t.undo, {
      checker: i,
    }], [['ctrl+y', 'ctrl+shift+z', 'mac+meta+shift+z', 'ctrl+shift+Z', 'mac+meta+shift+Z'], t.redo, {
      checker: i,
    }], [['Backspace', 'alt+Backspace', 'ctrl+Backspace', 'shift+Backspace', 'mac+Backspace', 'mac+alt+Backspace', 'mac+ctrl+Backspace', 'Delete', 'ctrl+Delete', 'shift+Delete', 'mac+Delete'], t.delete, {
      checker: i,
    }], [['Enter', 'mac+Enter'], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o,
      }) => !(o instanceof HTMLButtonElement) && n(a, Ws).contains(o) && !a.isEnterHandled,
    }], [[' ', 'mac+ '], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o,
      }) => !(o instanceof HTMLButtonElement) && n(a, Ws).contains(document.activeElement),
    }], [['Escape', 'mac+Escape'], t.unselectAll], [['ArrowLeft', 'mac+ArrowLeft'], t.translateSelectedEditors, {
      args: [-s, 0],
      checker: e,
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e,
    }], [['ArrowRight', 'mac+ArrowRight'], t.translateSelectedEditors, {
      args: [s, 0],
      checker: e,
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e,
    }], [['ArrowUp', 'mac+ArrowUp'], t.translateSelectedEditors, {
      args: [0, -s],
      checker: e,
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e,
    }], [['ArrowDown', 'mac+ArrowDown'], t.translateSelectedEditors, {
      args: [0, s],
      checker: e,
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], t.translateSelectedEditors, {
      args: [0, r],
      checker: e,
    }]]));
  }

  destroy() {
    let t; let e; let i; let s; let r; let a; let o; let h; let
      l;
    (t = n(this, Di)) == null || t.resolve(), g(this, Di, null), (e = n(this, xo)) == null || e.abort(), g(this, xo, null), this._signal = null;
    for (const d of n(this, Qt).values()) d.destroy();
    n(this, Qt).clear(), n(this, Bt).clear(), n(this, Br).clear(), (i = n(this, zn)) == null || i.clear(), g(this, ti, null), n(this, dt).clear(), n(this, Pi).destroy(), (s = n(this, _o)) == null || s.destroy(), (r = n(this, _e)) == null || r.destroy(), (a = n(this, Wn)) == null || a.destroy(), (o = n(this, ds)) == null || o.hide(), g(this, ds, null), (h = n(this, ko)) == null || h.destroy(), g(this, ko, null), g(this, Eo, null), n(this, cs) && (clearTimeout(n(this, cs)), g(this, cs, null)), n(this, us) && (clearTimeout(n(this, us)), g(this, us, null)), (l = this._editorUndoBar) == null || l.destroy(), g(this, Mo, null);
  }

  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }

  get mlManager() {
    return n(this, Gl);
  }

  get useNewAltTextFlow() {
    return n(this, Hl);
  }

  get useNewAltTextWhenAddingImage() {
    return n(this, Po);
  }

  get hcmFilter() {
    return J(this, 'hcmFilter', n(this, jn) ? n(this, $l).addHCMFilter(n(this, jn).foreground, n(this, jn).background) : 'none');
  }

  get direction() {
    return J(this, 'direction', getComputedStyle(n(this, Ws)).direction);
  }

  get _highlightColors() {
    return J(this, '_highlightColors', n(this, Ro) ? new Map(n(this, Ro).split(',').map((t) => (t = t.split('=').map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }

  get highlightColors() {
    const {
      _highlightColors: t,
    } = this;
    if (!t) return J(this, 'highlightColors', null);
    const e = /* @__PURE__ */ new Map(); const
      i = !!n(this, jn);
    for (const [s, r] of t) {
      const a = s.endsWith('_HCM');
      if (i && a) {
        e.set(s.replace('_HCM', ''), r);
        continue;
      }
      !i && !a && e.set(s, r);
    }
    return J(this, 'highlightColors', e);
  }

  get highlightColorNames() {
    return J(this, 'highlightColorNames', this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }

  getNonHCMColor(t) {
    if (!this._highlightColors) return t;
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
    let i;
    (i = n(this, _o)) == null || i.editAltText(this, t, e);
  }

  hasCommentManager() {
    return !!n(this, _e);
  }

  editComment(t, e, i, s) {
    let r;
    (r = n(this, _e)) == null || r.showDialog(this, t, e, i, s);
  }

  selectComment(t, e) {
    const i = n(this, Qt).get(t); const
      s = i == null ? void 0 : i.getEditorByUID(e);
    s == null || s.toggleComment(!0, !0);
  }

  updateComment(t) {
    let e;
    (e = n(this, _e)) == null || e.updateComment(t.getData());
  }

  updatePopupColor(t) {
    let e;
    (e = n(this, _e)) == null || e.updatePopupColor(t);
  }

  removeComment(t) {
    let e;
    (e = n(this, _e)) == null || e.removeComments([t.uid]);
  }

  toggleComment(t, e, i = void 0) {
    let s;
    (s = n(this, _e)) == null || s.toggleCommentPopup(t, e, i);
  }

  makeCommentColor(t, e) {
    let i;
    return t && ((i = n(this, _e)) == null ? void 0 : i.makeCommentColor(t, e)) || null;
  }

  getCommentDialogElement() {
    let t;
    return ((t = n(this, _e)) == null ? void 0 : t.dialogElement) || null;
  }

  async waitForEditorsRendered(t) {
    if (n(this, Qt).has(t - 1)) return;
    const {
      resolve: e,
      promise: i,
    } = Promise.withResolvers(); const
      s = (r) => {
        r.pageNumber === t && (this._eventBus._off('editorsrendered', s), e());
      };
    this._eventBus.on('editorsrendered', s), await i;
  }

  getSignature(t) {
    let e;
    (e = n(this, Wn)) == null || e.getSignature({
      uiManager: this,
      editor: t,
    });
  }

  get signatureManager() {
    return n(this, Wn);
  }

  switchToMode(t, e) {
    this._eventBus.on('annotationeditormodechanged', e, {
      once: !0,
      signal: this._signal,
    }), this._eventBus.dispatch('showannotationeditorui', {
      source: this,
      mode: t,
    });
  }

  setPreference(t, e) {
    this._eventBus.dispatch('setpreference', {
      source: this,
      name: t,
      value: e,
    });
  }

  onSetPreference({
    name: t,
    value: e,
  }) {
    switch (t) {
      case 'enableNewAltTextWhenAddingImage':
        g(this, Po, e);
        break;
    }
  }

  onPageChanging({
    pageNumber: t,
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
        height: o,
      } = i.div.getBoundingClientRect();
      if (t >= s && t <= s + a && e >= r && e <= r + o) return i;
    }
    return null;
  }

  disableUserSelect(t = !1) {
    n(this, jl).classList.toggle('noUserSelect', t);
  }

  addShouldRescale(t) {
    n(this, Br).add(t);
  }

  removeShouldRescale(t) {
    n(this, Br).delete(t);
  }

  onScaleChanging({
    scale: t,
  }) {
    let e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Cn.PDF_TO_CSS_UNITS;
    for (const i of n(this, Br)) i.onScaleChanging();
    (e = n(this, On)) == null || e.onScaleChanging();
  }

  onRotationChanging({
    pagesRotation: t,
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }

  highlightSelection(t = '', e = !1) {
    const i = document.getSelection();
    if (!i || i.isCollapsed) return;
    const {
      anchorNode: s,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o,
    } = i; const h = i.toString(); const d = w(this, F, Fd).call(this, i).closest('.textLayer'); const
      u = this.getSelectionBoxes(d);
    if (!u) return;
    i.empty();
    const p = w(this, F, Af).call(this, d); const y = n(this, qt) === q.NONE; const
      S = () => {
        const v = p == null ? void 0 : p.createAndAddNewEditor({
          x: 0,
          y: 0,
        }, !1, {
          methodOfCreation: t,
          boxes: u,
          anchorNode: s,
          anchorOffset: r,
          focusNode: a,
          focusOffset: o,
          text: h,
        });
        y && this.showAllEditors('highlight', !0, !0), e && (v == null || v.editComment());
      };
    if (y) {
      this.switchToMode(q.HIGHLIGHT, S);
      return;
    }
    S();
  }

  commentSelection(t = '') {
    this.highlightSelection(t, !0);
  }

  getAndRemoveDataFromAnnotationStorage(t) {
    if (!n(this, Ti)) return null;
    const e = `${El}${t}`; const
      i = n(this, Ti).getRawValue(e);
    return i && n(this, Ti).remove(e), i;
  }

  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Ti) && !n(this, Ti).has(t.id) && n(this, Ti).setValue(t.id, t);
  }

  a11yAlert(t, e = null) {
    const i = n(this, Vl);
    i && (i.setAttribute('data-l10n-id', t), e ? i.setAttribute('data-l10n-args', JSON.stringify(e)) : i.removeAttribute('data-l10n-args'));
  }

  blur() {
    if (this.isShiftKeyDown = !1, n(this, $n) && (g(this, $n, !1), w(this, F, sl).call(this, 'main_toolbar')), !this.hasSelection) return;
    const {
      activeElement: t,
    } = document;
    for (const e of n(this, dt)) {
      if (e.div.contains(t)) {
        g(this, Hr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
    }
  }

  focus() {
    if (!n(this, Hr)) return;
    const [t, e] = n(this, Hr);
    g(this, Hr, null), e.addEventListener('focusin', () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal,
    }), e.focus();
  }

  addEditListeners() {
    w(this, F, vf).call(this), w(this, F, Sf).call(this);
  }

  removeEditListeners() {
    w(this, F, Sm).call(this), w(this, F, xf).call(this);
  }

  dragOver(t) {
    for (const {
      type: e,
    } of t.dataTransfer.items) {
      for (const i of n(this, Ri)) {
        if (i.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = 'copy', t.preventDefault();
          return;
        }
      }
    }
  }

  drop(t) {
    for (const e of t.dataTransfer.items) {
      for (const i of n(this, Ri)) {
        if (i.isHandlingMimeForPasting(e.type)) {
          i.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
      }
    }
  }

  copy(t) {
    let i;
    if (t.preventDefault(), (i = n(this, ti)) == null || i.commitOrRemove(), !this.hasSelection) return;
    const e = [];
    for (const s of n(this, dt)) {
      const r = s.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData('application/pdfjs', JSON.stringify(e));
  }

  cut(t) {
    this.copy(t), this.delete();
  }

  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e,
    } = t;
    for (const r of e.items) {
      for (const a of n(this, Ri)) {
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
      }
    }
    let i = e.getData('application/pdfjs');
    if (!i) return;
    try {
      i = JSON.parse(i);
    } catch (r) {
      X(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(i)) return;
    this.unselectAll();
    const s = this.currentLayer;
    try {
      const r = [];
      for (const h of i) {
        const l = await s.deserialize(h);
        if (!l) return;
        r.push(l);
      }
      const a = () => {
        for (const h of r) w(this, F, Ef).call(this, h);
        w(this, F, _f).call(this, r);
      }; const
        o = () => {
          for (const h of r) h.remove();
        };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0,
      });
    } catch (r) {
      X(`paste: "${r.message}".`);
    }
  }

  keydown(t) {
    !this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !0), n(this, qt) !== q.NONE && !this.isEditorHandlingKeyboard && uo._keyboardManager.exec(this, t);
  }

  keyup(t) {
    this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !1, n(this, $n) && (g(this, $n, !1), w(this, F, sl).call(this, 'main_toolbar')));
  }

  onEditingAction({
    name: t,
  }) {
    switch (t) {
      case 'undo':
      case 'redo':
      case 'delete':
      case 'selectAll':
        this[t]();
        break;
      case 'highlightSelection':
        this.highlightSelection('context_menu');
        break;
      case 'commentSelection':
        this.commentSelection('context_menu');
        break;
    }
  }

  setEditingState(t) {
    t ? (w(this, F, Am).call(this), w(this, F, Sf).call(this), w(this, F, Le).call(this, {
      isEditing: n(this, qt) !== q.NONE,
      isEmpty: w(this, F, nl).call(this),
      hasSomethingToUndo: n(this, Pi).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Pi).hasSomethingToRedo(),
      hasSelectedEditor: !1,
    })) : (w(this, F, vm).call(this), w(this, F, xf).call(this), w(this, F, Le).call(this, {
      isEditing: !1,
    }), this.disableUserSelect(!1));
  }

  registerEditorTypes(t) {
    if (!n(this, Ri)) {
      g(this, Ri, t);
      for (const e of n(this, Ri)) w(this, F, Bs).call(this, e.defaultPropertiesToUpdate);
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
    let a; let o; let h; let l; let d; let
      u;
    if (n(this, qt) !== t && !(n(this, Di) && (await n(this, Di).promise, !n(this, Di)))) {
      if (g(this, Di, Promise.withResolvers()), (a = n(this, On)) == null || a.commitOrRemove(), n(this, qt) === q.POPUP && ((o = n(this, _e)) == null || o.hideSidebar()), (h = n(this, _e)) == null || h.destroyPopup(), g(this, qt, t), t === q.NONE) {
        this.setEditingState(!1), w(this, F, _m).call(this);
        for (const p of n(this, Bt).values()) p.hideStandaloneCommentButton();
        (l = this._editorUndoBar) == null || l.hide(), this.toggleComment(null), n(this, Di).resolve();
        return;
      }
      for (const p of n(this, Bt).values()) p.addStandaloneCommentButton();
      t === q.SIGNATURE && await ((d = n(this, Wn)) == null ? void 0 : d.loadSignatures()), this.setEditingState(!0), await w(this, F, Em).call(this), this.unselectAll();
      for (const p of n(this, Qt).values()) p.updateMode(t);
      if (t === q.POPUP) {
        n(this, Eo) || g(this, Eo, await n(this, Mo).getAnnotationsByType(new Set(n(this, Ri).map((S) => S._editorType))));
        const p = /* @__PURE__ */ new Set(); const
          y = [];
        for (const S of n(this, Bt).values()) {
          const {
            annotationElementId: v,
            hasComment: _,
            deleted: x,
          } = S;
          v && p.add(v), _ && !x && y.push(S.getData());
        }
        for (const S of n(this, Eo)) {
          const {
            id: v,
            popupRef: _,
            contentsObj: x,
          } = S;
          _ && (x != null && x.str) && !p.has(v) && !n(this, Bn).has(v) && y.push(S);
        }
        (u = n(this, _e)) == null || u.showSidebar(y);
      }
      if (!e) {
        i && this.addNewEditorFromKeyboard(), n(this, Di).resolve();
        return;
      }
      for (const p of n(this, Bt).values()) p.uid === e ? (this.setSelected(p), r ? p.editComment() : s ? p.enterInEditMode() : p.focus()) : p.unselect();
      n(this, Di).resolve();
    }
  }

  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }

  updateToolbar(t) {
    t.mode !== n(this, qt) && this._eventBus.dispatch('switchannotationeditormode', {
      source: this,
      ...t,
    });
  }

  updateParams(t, e) {
    if (n(this, Ri)) {
      switch (t) {
        case it.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case it.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch('reporttelemetry', {
            source: this,
            details: {
              type: 'editing',
              data: {
                type: 'highlight',
                action: 'toggle_visibility',
              },
            },
          }), (n(this, zl) || g(this, zl, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors('highlight', e);
          break;
      }
      if (this.hasSelection) for (const i of n(this, dt)) i.updateParams(t, e);
      else for (const i of n(this, Ri)) i.updateDefaultParams(t, e);
    }
  }

  showAllEditors(t, e, i = !1) {
    let r;
    for (const a of n(this, Bt).values()) a.editorType === t && a.show(e);
    (((r = n(this, zl)) == null ? void 0 : r.get(it.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && w(this, F, Bs).call(this, [[it.HIGHLIGHT_SHOW_ALL, e]]);
  }

  enableWaiting(t = !1) {
    if (n(this, Ul) !== t) {
      g(this, Ul, t);
      for (const e of n(this, Qt).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle('waiting', t);
    }
  }

  * getEditors(t) {
    for (const e of n(this, Bt).values()) e.pageIndex === t && (yield e);
  }

  getEditor(t) {
    return n(this, Bt).get(t);
  }

  addEditor(t) {
    n(this, Bt).set(t.id, t);
  }

  removeEditor(t) {
    let e; let
      i;
    t.div.contains(document.activeElement) && (n(this, cs) && clearTimeout(n(this, cs)), g(this, cs, setTimeout(() => {
      this.focusMainContainer(), g(this, cs, null);
    }, 0))), n(this, Bt).delete(t.id), t.annotationElementId && ((e = n(this, zn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Bn).has(t.annotationElementId)) && ((i = n(this, Ti)) == null || i.remove(t.id));
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
    n(this, F, Cm) === t && w(this, F, Bs).call(this, t.propertiesToUpdate);
  }

  updateUIForDefaultProperties(t) {
    w(this, F, Bs).call(this, t.defaultPropertiesToUpdate);
  }

  toggleSelected(t) {
    if (n(this, dt).has(t)) {
      n(this, dt).delete(t), t.unselect(), w(this, F, Le).call(this, {
        hasSelectedEditor: this.hasSelection,
      });
      return;
    }
    n(this, dt).add(t), t.select(), w(this, F, Bs).call(this, t.propertiesToUpdate), w(this, F, Le).call(this, {
      hasSelectedEditor: !0,
    });
  }

  setSelected(t) {
    let e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id,
    }), (e = n(this, On)) == null || e.commitOrRemove();
    for (const i of n(this, dt)) i !== t && i.unselect();
    n(this, dt).clear(), n(this, dt).add(t), t.select(), w(this, F, Bs).call(this, t.propertiesToUpdate), w(this, F, Le).call(this, {
      hasSelectedEditor: !0,
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
      hasSelectedEditor: this.hasSelection,
    });
  }

  get hasSelection() {
    return n(this, dt).size !== 0;
  }

  get isEnterHandled() {
    return n(this, dt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }

  undo() {
    let t;
    n(this, Pi).undo(), w(this, F, Le).call(this, {
      hasSomethingToUndo: n(this, Pi).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: w(this, F, nl).call(this),
    }), (t = this._editorUndoBar) == null || t.hide();
  }

  redo() {
    n(this, Pi).redo(), w(this, F, Le).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Pi).hasSomethingToRedo(),
      isEmpty: w(this, F, nl).call(this),
    });
  }

  addCommands(t) {
    n(this, Pi).add(t), w(this, F, Le).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: w(this, F, nl).call(this),
    });
  }

  cleanUndoStack(t) {
    n(this, Pi).cleanType(t);
  }

  delete() {
    let r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t) return;
    const e = t ? [t] : [...n(this, dt)]; const i = () => {
      let a;
      (a = this._editorUndoBar) == null || a.show(s, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e) o.remove();
    }; const
      s = () => {
        for (const a of e) w(this, F, Ef).call(this, a);
      };
    this.addCommands({
      cmd: i,
      undo: s,
      mustExec: !0,
    });
  }

  commitOrRemove() {
    let t;
    (t = n(this, ti)) == null || t.commitOrRemove();
  }

  hasSomethingToControl() {
    return n(this, ti) || this.hasSelection;
  }

  selectAll() {
    for (const t of n(this, dt)) t.commit();
    w(this, F, _f).call(this, n(this, Bt).values());
  }

  unselectAll() {
    let t;
    if (!(n(this, ti) && (n(this, ti).commitOrRemove(), n(this, qt) !== q.NONE)) && !((t = n(this, On)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, dt)) e.unselect();
      n(this, dt).clear(), w(this, F, Le).call(this, {
        hasSelectedEditor: !1,
      });
    }
  }

  translateSelectedEditors(t, e, i = !1) {
    if (i || this.commitOrRemove(), !this.hasSelection) return;
    n(this, Vn)[0] += t, n(this, Vn)[1] += e;
    const [s, r] = n(this, Vn); const a = [...n(this, dt)]; const
      o = 1e3;
    n(this, us) && clearTimeout(n(this, us)), g(this, us, setTimeout(() => {
      g(this, us, null), n(this, Vn)[0] = n(this, Vn)[1] = 0, this.addCommands({
        cmd: () => {
          for (const h of a) n(this, Bt).has(h.id) && (h.translateInPage(s, r), h.translationDone());
        },
        undo: () => {
          for (const h of a) n(this, Bt).has(h.id) && (h.translateInPage(-s, -r), h.translationDone());
        },
        mustExec: !1,
      });
    }, o));
    for (const h of a) h.translateInPage(t, e), h.translationDone();
  }

  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), g(this, ls, /* @__PURE__ */ new Map());
      for (const t of n(this, dt)) {
        n(this, ls).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1,
        });
      }
    }
  }

  endDragSession() {
    if (!n(this, ls)) return !1;
    this.disableUserSelect(!1);
    const t = n(this, ls);
    g(this, ls, null);
    let e = !1;
    for (const [{
      x: s,
      y: r,
      pageIndex: a,
    }, o] of t) o.newX = s, o.newY = r, o.newPageIndex = a, e || (e = s !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e) return !1;
    const i = (s, r, a, o) => {
      if (n(this, Bt).has(s.id)) {
        const h = n(this, Qt).get(o);
        h ? s._setParentAndPosition(h, r, a) : (s.pageIndex = o, s.x = r, s.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [s, {
          newX: r,
          newY: a,
          newPageIndex: o,
        }] of t) i(s, r, a, o);
      },
      undo: () => {
        for (const [s, {
          savedX: r,
          savedY: a,
          savedPageIndex: o,
        }] of t) i(s, r, a, o);
      },
      mustExec: !0,
    }), !0;
  }

  dragSelectedEditors(t, e) {
    if (n(this, ls)) for (const i of n(this, ls).keys()) i.drag(t, e);
  }

  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else t.parent.addOrRebuild(t);
  }

  get isEditorHandlingKeyboard() {
    let t;
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
    return J(this, 'imageManager', new yf());
  }

  getSelectionBoxes(t) {
    if (!t) return null;
    const e = document.getSelection();
    for (let l = 0, d = e.rangeCount; l < d; l++) if (!t.contains(e.getRangeAt(l).commonAncestorContainer)) return null;
    const {
      x: i,
      y: s,
      width: r,
      height: a,
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute('data-main-rotation')) {
      case '90':
        o = (l, d, u, p) => ({
          x: (d - s) / a,
          y: 1 - (l + u - i) / r,
          width: p / a,
          height: u / r,
        });
        break;
      case '180':
        o = (l, d, u, p) => ({
          x: 1 - (l + u - i) / r,
          y: 1 - (d + p - s) / a,
          width: u / r,
          height: p / a,
        });
        break;
      case '270':
        o = (l, d, u, p) => ({
          x: 1 - (d + p - s) / a,
          y: (l - i) / r,
          width: p / a,
          height: u / r,
        });
        break;
      default:
        o = (l, d, u, p) => ({
          x: (l - i) / r,
          y: (d - s) / a,
          width: u / r,
          height: p / a,
        });
        break;
    }
    const h = [];
    for (let l = 0, d = e.rangeCount; l < d; l++) {
      const u = e.getRangeAt(l);
      if (!u.collapsed) {
        for (const {
          x: p,
          y,
          width: S,
          height: v,
        } of u.getClientRects()) S === 0 || v === 0 || h.push(o(p, y, S, v));
      }
    }
    return h.length === 0 ? null : h;
  }

  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e,
  }) {
    (n(this, Co) || g(this, Co, /* @__PURE__ */ new Map())).set(t, e);
  }

  removeChangedExistingAnnotation({
    annotationElementId: t,
  }) {
    let e;
    (e = n(this, Co)) == null || e.delete(t);
  }

  renderAnnotationElement(t) {
    let s;
    const e = (s = n(this, Co)) == null ? void 0 : s.get(t.data.id);
    if (!e) return;
    const i = n(this, Ti).getRawValue(e);
    i && (n(this, qt) === q.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
  }

  setMissingCanvas(t, e, i) {
    let r;
    const s = (r = n(this, zn)) == null ? void 0 : r.get(t);
    s && (s.setCanvas(e, i), n(this, zn).delete(t));
  }

  addMissingCanvas(t, e) {
    (n(this, zn) || g(this, zn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
xo = new WeakMap(), ti = new WeakMap(), Eo = new WeakMap(), Bt = new WeakMap(), Qt = new WeakMap(), _o = new WeakMap(), Ti = new WeakMap(), Co = new WeakMap(), Pi = new WeakMap(), _e = new WeakMap(), Nn = new WeakMap(), On = new WeakMap(), To = new WeakMap(), Bn = new WeakMap(), ls = new WeakMap(), Ri = new WeakMap(), Br = new WeakMap(), Bl = new WeakMap(), Hl = new WeakMap(), Po = new WeakMap(), $l = new WeakMap(), cs = new WeakMap(), Hn = new WeakMap(), Ro = new WeakMap(), $n = new WeakMap(), ds = new WeakMap(), Tu = new WeakMap(), Un = new WeakMap(), Do = new WeakMap(), Ul = new WeakMap(), Gn = new WeakMap(), Hr = new WeakMap(), ko = new WeakMap(), zn = new WeakMap(), Gl = new WeakMap(), qt = new WeakMap(), dt = new WeakMap(), zs = new WeakMap(), Wn = new WeakMap(), jn = new WeakMap(), zl = new WeakMap(), Mo = new WeakMap(), Wl = new WeakMap(), Vn = new WeakMap(), us = new WeakMap(), Ws = new WeakMap(), jl = new WeakMap(), Vl = new WeakMap(), Di = new WeakMap(), F = new WeakSet(), Fd = function ({
  anchorNode: t,
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Af = function (t) {
  const {
    currentLayer: e,
  } = this;
  if (e.hasTextLayer(t)) return e;
  for (const i of n(this, Qt).values()) if (i.hasTextLayer(t)) return i;
  return null;
}, bm = function () {
  const t = document.getSelection();
  if (!t || t.isCollapsed) return;
  const i = w(this, F, Fd).call(this, t).closest('.textLayer'); const
    s = this.getSelectionBoxes(i);
  s && (n(this, ds) || g(this, ds, new hw(this)), n(this, ds).show(i, s, this.direction === 'ltr'));
}, ym = function () {
  let r; let a; let
    o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, zs) && ((r = n(this, ds)) == null || r.hide(), g(this, zs, null), w(this, F, Le).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  const {
    anchorNode: e,
  } = t;
  if (e === n(this, zs)) return;
  const s = w(this, F, Fd).call(this, t).closest('.textLayer');
  if (!s) {
    n(this, zs) && ((a = n(this, ds)) == null || a.hide(), g(this, zs, null), w(this, F, Le).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  if ((o = n(this, ds)) == null || o.hide(), g(this, zs, e), w(this, F, Le).call(this, {
    hasSelectedText: !0,
  }), !(n(this, qt) !== q.HIGHLIGHT && n(this, qt) !== q.NONE) && (n(this, qt) === q.HIGHLIGHT && this.showAllEditors('highlight', !0, !0), g(this, $n, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const h = n(this, qt) === q.HIGHLIGHT ? w(this, F, Af).call(this, s) : null;
    if (h == null || h.toggleDrawing(), n(this, Do)) {
      const l = new AbortController(); const d = this.combinedSignal(l); const
        u = (p) => {
          p.type === 'pointerup' && p.button !== 0 || (l.abort(), h == null || h.toggleDrawing(!0), p.type === 'pointerup' && w(this, F, sl).call(this, 'main_toolbar'));
        };
      window.addEventListener('pointerup', u, {
        signal: d,
      }), window.addEventListener('blur', u, {
        signal: d,
      });
    } else h == null || h.toggleDrawing(!0), w(this, F, sl).call(this, 'main_toolbar');
  }
}, sl = function (t = '') {
  n(this, qt) === q.HIGHLIGHT ? this.highlightSelection(t) : n(this, Bl) && w(this, F, bm).call(this);
}, wm = function () {
  document.addEventListener('selectionchange', w(this, F, ym).bind(this), {
    signal: this._signal,
  });
}, Am = function () {
  if (n(this, Hn)) return;
  g(this, Hn, new AbortController());
  const t = this.combinedSignal(n(this, Hn));
  window.addEventListener('focus', this.focus.bind(this), {
    signal: t,
  }), window.addEventListener('blur', this.blur.bind(this), {
    signal: t,
  });
}, vm = function () {
  let t;
  (t = n(this, Hn)) == null || t.abort(), g(this, Hn, null);
}, vf = function () {
  if (n(this, Gn)) return;
  g(this, Gn, new AbortController());
  const t = this.combinedSignal(n(this, Gn));
  window.addEventListener('keydown', this.keydown.bind(this), {
    signal: t,
  }), window.addEventListener('keyup', this.keyup.bind(this), {
    signal: t,
  });
}, Sm = function () {
  let t;
  (t = n(this, Gn)) == null || t.abort(), g(this, Gn, null);
}, Sf = function () {
  if (n(this, Nn)) return;
  g(this, Nn, new AbortController());
  const t = this.combinedSignal(n(this, Nn));
  document.addEventListener('copy', this.copy.bind(this), {
    signal: t,
  }), document.addEventListener('cut', this.cut.bind(this), {
    signal: t,
  }), document.addEventListener('paste', this.paste.bind(this), {
    signal: t,
  });
}, xf = function () {
  let t;
  (t = n(this, Nn)) == null || t.abort(), g(this, Nn, null);
}, xm = function () {
  const t = this._signal;
  document.addEventListener('dragover', this.dragOver.bind(this), {
    signal: t,
  }), document.addEventListener('drop', this.drop.bind(this), {
    signal: t,
  });
}, Le = function (t) {
  Object.entries(t).some(([i, s]) => n(this, Wl)[i] !== s) && (this._eventBus.dispatch('annotationeditorstateschanged', {
    source: this,
    details: Object.assign(n(this, Wl), t),
  }), n(this, qt) === q.HIGHLIGHT && t.hasSelectedEditor === !1 && w(this, F, Bs).call(this, [[it.HIGHLIGHT_FREE, !0]]));
}, Bs = function (t) {
  this._eventBus.dispatch('annotationeditorparamschanged', {
    source: this,
    details: t,
  });
}, Em = async function () {
  if (!n(this, Un)) {
    g(this, Un, !0);
    const t = [];
    for (const e of n(this, Qt).values()) t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Bt).values()) e.enable();
  }
}, _m = function () {
  if (this.unselectAll(), n(this, Un)) {
    g(this, Un, !1);
    for (const t of n(this, Qt).values()) t.disable();
    for (const t of n(this, Bt).values()) t.disable();
  }
}, Ef = function (t) {
  const e = n(this, Qt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Cm = function () {
  let t = null;
  for (t of n(this, dt)) ;
  return t;
}, nl = function () {
  if (n(this, Bt).size === 0) return !0;
  if (n(this, Bt).size === 1) for (const t of n(this, Bt).values()) return t.isEmpty();
  return !1;
}, _f = function (t) {
  for (const e of n(this, dt)) e.unselect();
  n(this, dt).clear();
  for (const e of t) e.isEmpty() || (n(this, dt).add(e), e.select());
  w(this, F, Le).call(this, {
    hasSelectedEditor: this.hasSelection,
  });
}, M(uo, 'TRANSLATE_SMALL', 1), M(uo, 'TRANSLATE_BIG', 10);
const Tr = uo;
let se; let fs; let Gi; let Lo; let ps; let ei; let Io; let gs; let ze; let js; let $r; let ms; let qn; let es; let rl; let
  Nd;
const Ie = class Ie {
  constructor(t) {
    b(this, es);
    b(this, se, null);
    b(this, fs, !1);
    b(this, Gi, null);
    b(this, Lo, null);
    b(this, ps, null);
    b(this, ei, null);
    b(this, Io, !1);
    b(this, gs, null);
    b(this, ze, null);
    b(this, js, null);
    b(this, $r, null);
    b(this, ms, !1);
    g(this, ze, t), g(this, ms, t._uiManager.useNewAltTextFlow), n(Ie, qn) || g(Ie, qn, Object.freeze({
      added: 'pdfjs-editor-new-alt-text-added-button',
      'added-label': 'pdfjs-editor-new-alt-text-added-button-label',
      missing: 'pdfjs-editor-new-alt-text-missing-button',
      'missing-label': 'pdfjs-editor-new-alt-text-missing-button-label',
      review: 'pdfjs-editor-new-alt-text-to-review-button',
      'review-label': 'pdfjs-editor-new-alt-text-to-review-button-label',
    }));
  }

  static initialize(t) {
    Ie._l10n ?? (Ie._l10n = t);
  }

  async render() {
    const t = g(this, Gi, document.createElement('button'));
    t.className = 'altText', t.tabIndex = '0';
    const e = g(this, Lo, document.createElement('span'));
    t.append(e), n(this, ms) ? (t.classList.add('new'), t.setAttribute('data-l10n-id', n(Ie, qn).missing), e.setAttribute('data-l10n-id', n(Ie, qn)['missing-label'])) : (t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button'), e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button-label'));
    const i = n(this, ze)._uiManager._signal;
    t.addEventListener('contextmenu', Si, {
      signal: i,
    }), t.addEventListener('pointerdown', (r) => r.stopPropagation(), {
      signal: i,
    });
    const s = (r) => {
      r.preventDefault(), n(this, ze)._uiManager.editAltText(n(this, ze)), n(this, ms) && n(this, ze)._reportTelemetry({
        action: 'pdfjs.image.alt_text.image_status_label_clicked',
        data: {
          label: n(this, es, rl),
        },
      });
    };
    return t.addEventListener('click', s, {
      capture: !0,
      signal: i,
    }), t.addEventListener('keydown', (r) => {
      r.target === t && r.key === 'Enter' && (g(this, Io, !0), s(r));
    }, {
      signal: i,
    }), await w(this, es, Nd).call(this), t;
  }

  finish() {
    n(this, Gi) && (n(this, Gi).focus({
      focusVisible: n(this, Io),
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
    n(this, se) === null && (g(this, js, t), g(this, $r, await Ie._l10n.get('pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer', {
      generatedAltText: t,
    })), w(this, es, Nd).call(this));
  }

  toggleAltTextBadge(t = !1) {
    let e;
    if (!n(this, ms) || n(this, se)) {
      (e = n(this, gs)) == null || e.remove(), g(this, gs, null);
      return;
    }
    if (!n(this, gs)) {
      const i = g(this, gs, document.createElement('div'));
      i.className = 'noAltTextBadge', n(this, ze).div.append(i);
    }
    n(this, gs).classList.toggle('hidden', !t);
  }

  serialize(t) {
    let e = n(this, se);
    return !t && n(this, js) === e && (e = n(this, $r)), {
      altText: e,
      decorative: n(this, fs),
      guessedText: n(this, js),
      textWithDisclaimer: n(this, $r),
    };
  }

  get data() {
    return {
      altText: n(this, se),
      decorative: n(this, fs),
    };
  }

  set data({
    altText: t,
    decorative: e,
    guessedText: i,
    textWithDisclaimer: s,
    cancel: r = !1,
  }) {
    i && (g(this, js, i), g(this, $r, s)), !(n(this, se) === t && n(this, fs) === e) && (r || (g(this, se, t), g(this, fs, e)), w(this, es, Nd).call(this));
  }

  toggle(t = !1) {
    n(this, Gi) && (!t && n(this, ei) && (clearTimeout(n(this, ei)), g(this, ei, null)), n(this, Gi).disabled = !t);
  }

  shown() {
    n(this, ze)._reportTelemetry({
      action: 'pdfjs.image.alt_text.image_status_label_displayed',
      data: {
        label: n(this, es, rl),
      },
    });
  }

  destroy() {
    let t; let
      e;
    (t = n(this, Gi)) == null || t.remove(), g(this, Gi, null), g(this, Lo, null), g(this, ps, null), (e = n(this, gs)) == null || e.remove(), g(this, gs, null);
  }
};
se = new WeakMap(), fs = new WeakMap(), Gi = new WeakMap(), Lo = new WeakMap(), ps = new WeakMap(), ei = new WeakMap(), Io = new WeakMap(), gs = new WeakMap(), ze = new WeakMap(), js = new WeakMap(), $r = new WeakMap(), ms = new WeakMap(), qn = new WeakMap(), es = new WeakSet(), rl = function () {
  return n(this, se) && 'added' || n(this, se) === null && this.guessedText && 'review' || 'missing';
}, Nd = async function () {
  let s; let r; let
    a;
  const t = n(this, Gi);
  if (!t) return;
  if (n(this, ms)) {
    if (t.classList.toggle('done', !!n(this, se)), t.setAttribute('data-l10n-id', n(Ie, qn)[n(this, es, rl)]), (s = n(this, Lo)) == null || s.setAttribute('data-l10n-id', n(Ie, qn)[`${n(this, es, rl)}-label`]), !n(this, se)) {
      (r = n(this, ps)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, se) && !n(this, fs)) {
      t.classList.remove('done'), (a = n(this, ps)) == null || a.remove();
      return;
    }
    t.classList.add('done'), t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-edit-button');
  }
  let e = n(this, ps);
  if (!e) {
    g(this, ps, e = document.createElement('span')), e.className = 'tooltip', e.setAttribute('role', 'tooltip'), e.id = `alt-text-tooltip-${n(this, ze).id}`;
    const o = 100; const
      h = n(this, ze)._uiManager._signal;
    h.addEventListener('abort', () => {
      clearTimeout(n(this, ei)), g(this, ei, null);
    }, {
      once: !0,
    }), t.addEventListener('mouseenter', () => {
      g(this, ei, setTimeout(() => {
        g(this, ei, null), n(this, ps).classList.add('show'), n(this, ze)._reportTelemetry({
          action: 'alt_text_tooltip',
        });
      }, o));
    }, {
      signal: h,
    }), t.addEventListener('mouseleave', () => {
      let l;
      n(this, ei) && (clearTimeout(n(this, ei)), g(this, ei, null)), (l = n(this, ps)) == null || l.classList.remove('show');
    }, {
      signal: h,
    });
  }
  n(this, fs) ? e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-decorative-tooltip') : (e.removeAttribute('data-l10n-id'), e.textContent = n(this, se)), e.parentNode || t.append(e);
  const i = n(this, ze).getElementForAltText();
  i == null || i.setAttribute('aria-describedby', e.id);
}, b(Ie, qn, null), M(Ie, '_l10n', null);
const fu = Ie;
let fe; let ki; let Ur; let _t; let ql; let Gr; let zi; let zr; let Wr; let jr; let Xl; let
  Cf;
class Ed {
  constructor(t) {
    b(this, Xl);
    b(this, fe, null);
    b(this, ki, null);
    b(this, Ur, !1);
    b(this, _t, null);
    b(this, ql, null);
    b(this, Gr, null);
    b(this, zi, null);
    b(this, zr, null);
    b(this, Wr, !1);
    b(this, jr, null);
    g(this, _t, t);
  }

  renderForToolbar() {
    const t = g(this, ki, document.createElement('button'));
    return t.className = 'comment', w(this, Xl, Cf).call(this, t, !1);
  }

  renderForStandalone() {
    const t = g(this, fe, document.createElement('button'));
    t.className = 'annotationCommentButton';
    const e = n(this, _t).commentButtonPosition;
    if (e) {
      const {
        style: i,
      } = t;
      i.insetInlineEnd = `calc(${100 * (n(this, _t)._uiManager.direction === 'ltr' ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const s = n(this, _t).commentButtonColor;
      s && (i.backgroundColor = s);
    }
    return w(this, Xl, Cf).call(this, t, !0);
  }

  focusButton() {
    setTimeout(() => {
      let t;
      (t = n(this, fe) ?? n(this, ki)) == null || t.focus();
    }, 0);
  }

  onUpdatedColor() {
    if (!n(this, fe)) return;
    const t = n(this, _t).commentButtonColor;
    t && (n(this, fe).style.backgroundColor = t), n(this, _t)._uiManager.updatePopupColor(n(this, _t));
  }

  get commentButtonWidth() {
    let t;
    return (((t = n(this, fe)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, _t).parent.boundingClientRect.width;
  }

  get commentPopupPositionInLayer() {
    if (n(this, jr)) return n(this, jr);
    if (!n(this, fe)) return null;
    const {
      x: t,
      y: e,
      height: i,
    } = n(this, fe).getBoundingClientRect(); const
      {
        x: s,
        y: r,
        width: a,
        height: o,
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
    let t;
    (t = n(this, fe)) == null || t.remove(), g(this, fe, null);
  }

  removeToolbarCommentButton() {
    let t;
    (t = n(this, ki)) == null || t.remove(), g(this, ki, null);
  }

  setCommentButtonStates({
    selected: t,
    hasPopup: e,
  }) {
    n(this, fe) && (n(this, fe).classList.toggle('selected', t), n(this, fe).ariaExpanded = e);
  }

  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let i; let
      s;
    if (e) [i, s] = e;
    else {
      [i, s] = n(this, _t).commentButtonPosition;
      const {
        width: d,
        height: u,
        x: p,
        y,
      } = n(this, _t);
      i = p + i * d, s = y + s * u;
    }
    const r = n(this, _t).parent.boundingClientRect; const
      {
        x: a,
        y: o,
        width: h,
        height: l,
      } = r;
    n(this, _t)._uiManager.editComment(n(this, _t), a + i * h, o + s * l, {
      ...t,
      parentDimensions: r,
    });
  }

  finish() {
    n(this, ki) && (n(this, ki).focus({
      focusVisible: n(this, Ur),
    }), g(this, Ur, !1));
  }

  isDeleted() {
    return n(this, Wr) || n(this, zi) === '';
  }

  isEmpty() {
    return n(this, zi) === null;
  }

  hasBeenEdited() {
    return this.isDeleted() || n(this, zi) !== n(this, ql);
  }

  serialize() {
    return this.data;
  }

  get data() {
    return {
      text: n(this, zi),
      richText: n(this, Gr),
      date: n(this, zr),
      deleted: this.isDeleted(),
    };
  }

  set data(t) {
    if (t !== n(this, zi) && g(this, Gr, null), t === null) {
      g(this, zi, ''), g(this, Wr, !0);
      return;
    }
    g(this, zi, t), g(this, zr, /* @__PURE__ */ new Date()), g(this, Wr, !1);
  }

  setInitialText(t, e = null) {
    g(this, ql, t), this.data = t, g(this, zr, null), g(this, Gr, e);
  }

  shown() {
  }

  destroy() {
    let t; let
      e;
    (t = n(this, ki)) == null || t.remove(), g(this, ki, null), (e = n(this, fe)) == null || e.remove(), g(this, fe, null), g(this, zi, ''), g(this, Gr, null), g(this, zr, null), g(this, _t, null), g(this, Ur, !1), g(this, Wr, !1);
  }
}
fe = new WeakMap(), ki = new WeakMap(), Ur = new WeakMap(), _t = new WeakMap(), ql = new WeakMap(), Gr = new WeakMap(), zi = new WeakMap(), zr = new WeakMap(), Wr = new WeakMap(), jr = new WeakMap(), Xl = new WeakSet(), Cf = function (t, e) {
  if (!n(this, _t)._uiManager.hasCommentManager()) return null;
  t.tabIndex = '0', t.ariaHasPopup = 'dialog', e ? (t.ariaControls = 'commentPopup', t.setAttribute('data-l10n-id', 'pdfjs-show-comment-button')) : (t.ariaControlsElements = [n(this, _t)._uiManager.getCommentDialogElement()], t.setAttribute('data-l10n-id', 'pdfjs-editor-edit-comment-button'));
  const i = n(this, _t)._uiManager._signal;
  if (!(i instanceof AbortSignal) || i.aborted) return t;
  t.addEventListener('contextmenu', Si, {
    signal: i,
  }), e && (t.addEventListener('focusin', (r) => {
    n(this, _t)._focusEventsAllowed = !1, Nt(r);
  }, {
    capture: !0,
    signal: i,
  }), t.addEventListener('focusout', (r) => {
    n(this, _t)._focusEventsAllowed = !0, Nt(r);
  }, {
    capture: !0,
    signal: i,
  })), t.addEventListener('pointerdown', (r) => r.stopPropagation(), {
    signal: i,
  });
  const s = (r) => {
    r.preventDefault(), t === n(this, ki) ? this.edit() : n(this, _t).toggleComment(!0);
  };
  return t.addEventListener('click', s, {
    capture: !0,
    signal: i,
  }), t.addEventListener('keydown', (r) => {
    r.target === t && r.key === 'Enter' && (g(this, Ur, !0), s(r));
  }, {
    signal: i,
  }), t.addEventListener('pointerenter', () => {
    n(this, _t).toggleComment(!1, !0);
  }, {
    signal: i,
  }), t.addEventListener('pointerleave', () => {
    n(this, _t).toggleComment(!1, !1);
  }, {
    signal: i,
  }), t;
};
let Fo; let Vr; let Yl; let Kl; let Jl; let Ql; let Zl; let Vs; let qr; let qs; let Xr; let Xs; let Pr; let Tm; let Pm; let
  Rm;
const ng = class ng {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: i = null,
    onPinchStart: s = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o,
  }) {
    b(this, Pr);
    b(this, Fo);
    b(this, Vr, !1);
    b(this, Yl, null);
    b(this, Kl);
    b(this, Jl);
    b(this, Ql);
    b(this, Zl);
    b(this, Vs, null);
    b(this, qr);
    b(this, qs, null);
    b(this, Xr);
    b(this, Xs, null);
    g(this, Fo, t), g(this, Yl, i), g(this, Kl, e), g(this, Jl, s), g(this, Ql, r), g(this, Zl, a), g(this, Xr, new AbortController()), g(this, qr, AbortSignal.any([o, n(this, Xr).signal])), t.addEventListener('touchstart', w(this, Pr, Tm).bind(this), {
      passive: !1,
      signal: n(this, qr),
    });
  }

  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / ss.pixelRatio;
  }

  destroy() {
    let t; let
      e;
    (t = n(this, Xr)) == null || t.abort(), g(this, Xr, null), (e = n(this, Vs)) == null || e.abort(), g(this, Vs, null);
  }
};
Fo = new WeakMap(), Vr = new WeakMap(), Yl = new WeakMap(), Kl = new WeakMap(), Jl = new WeakMap(), Ql = new WeakMap(), Zl = new WeakMap(), Vs = new WeakMap(), qr = new WeakMap(), qs = new WeakMap(), Xr = new WeakMap(), Xs = new WeakMap(), Pr = new WeakSet(), Tm = function (t) {
  let s; let r; let
    a;
  if ((s = n(this, Kl)) != null && s.call(this)) return;
  if (t.touches.length === 1) {
    if (n(this, Vs)) return;
    const o = g(this, Vs, new AbortController()); const h = AbortSignal.any([n(this, qr), o.signal]); const l = n(this, Fo); const d = {
      capture: !0,
      signal: h,
      passive: !1,
    }; const
      u = (p) => {
        let y;
        p.pointerType === 'touch' && ((y = n(this, Vs)) == null || y.abort(), g(this, Vs, null));
      };
    l.addEventListener('pointerdown', (p) => {
      p.pointerType === 'touch' && (Nt(p), u(p));
    }, d), l.addEventListener('pointerup', u, d), l.addEventListener('pointercancel', u, d);
    return;
  }
  if (!n(this, Xs)) {
    g(this, Xs, new AbortController());
    const o = AbortSignal.any([n(this, qr), n(this, Xs).signal]); const h = n(this, Fo); const
      l = {
        signal: o,
        capture: !1,
        passive: !1,
      };
    h.addEventListener('touchmove', w(this, Pr, Pm).bind(this), l);
    const d = w(this, Pr, Rm).bind(this);
    h.addEventListener('touchend', d, l), h.addEventListener('touchcancel', d, l), l.capture = !0, h.addEventListener('pointerdown', Nt, l), h.addEventListener('pointermove', Nt, l), h.addEventListener('pointercancel', Nt, l), h.addEventListener('pointerup', Nt, l), (r = n(this, Jl)) == null || r.call(this);
  }
  if (Nt(t), t.touches.length !== 2 || (a = n(this, Yl)) != null && a.call(this)) {
    g(this, qs, null);
    return;
  }
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]), g(this, qs, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: i.screenX,
    touch1Y: i.screenY,
  });
}, Pm = function (t) {
  let f;
  if (!n(this, qs) || t.touches.length !== 2) return;
  Nt(t);
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]);
  const {
    screenX: s,
    screenY: r,
  } = e; const {
    screenX: a,
    screenY: o,
  } = i; const h = n(this, qs); const {
    touch0X: l,
    touch0Y: d,
    touch1X: u,
    touch1Y: p,
  } = h; const y = u - l; const S = p - d; const v = a - s; const _ = o - r; const x = Math.hypot(v, _) || 1; const
    T = Math.hypot(y, S) || 1;
  if (!n(this, Vr) && Math.abs(T - x) <= ng.MIN_TOUCH_DISTANCE_TO_PINCH) return;
  if (h.touch0X = s, h.touch0Y = r, h.touch1X = a, h.touch1Y = o, !n(this, Vr)) {
    g(this, Vr, !0);
    return;
  }
  const E = [(s + a) / 2, (r + o) / 2];
  (f = n(this, Ql)) == null || f.call(this, E, T, x);
}, Rm = function (t) {
  let e;
  t.touches.length >= 2 || (n(this, Xs) && (n(this, Xs).abort(), g(this, Xs, null), (e = n(this, Zl)) == null || e.call(this)), n(this, qs) && (Nt(t), g(this, qs, null), g(this, Vr, !1)));
};
const Pl = ng;
let Yr; let Wi; let kt; let wt; let Ys; let No; let Xn; let tc; let pe; let Kr; let Ks; let bs; let Yn; let ec; let Jr; let ii; let ic; let Qr; let Js; let ys; let Oo; let Bo; let Mi; let Zr; let sc; let Pu; let V; let Tf; let nc; let Pf; let Od; let Dm; let km; let Rf; let Bd; let Df; let Mm; let Lm; let Im; let kf; let Fm; let Mf; let Nm; let Om; let Bm; let Lf; let
  al;
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
    b(this, tc, '');
    b(this, pe, null);
    b(this, Kr, null);
    b(this, Ks, null);
    b(this, bs, null);
    b(this, Yn, null);
    b(this, ec, '');
    b(this, Jr, !1);
    b(this, ii, null);
    b(this, ic, !1);
    b(this, Qr, !1);
    b(this, Js, !1);
    b(this, ys, null);
    b(this, Oo, 0);
    b(this, Bo, 0);
    b(this, Mi, null);
    b(this, Zr, null);
    M(this, 'isSelected', !1);
    M(this, '_isCopy', !1);
    M(this, '_editToolbar', null);
    M(this, '_initialOptions', /* @__PURE__ */ Object.create(null));
    M(this, '_initialData', null);
    M(this, '_isVisible', !0);
    M(this, '_uiManager', null);
    M(this, '_focusEventsAllowed', !0);
    b(this, sc, !1);
    b(this, Pu, Y._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: i,
        pageHeight: s,
        pageX: r,
        pageY: a,
      },
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [i, s], this.pageTranslation = [r, a];
    const [o, h] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / h, this.isAttachedToDOM = !1, this.deleted = !1;
  }

  static get _resizerKeyboardManager() {
    const t = Y.prototype._resizeWithKeyboard; const e = Tr.TRANSLATE_SMALL; const
      i = Tr.TRANSLATE_BIG;
    return J(this, '_resizerKeyboardManager', new md([[['ArrowLeft', 'mac+ArrowLeft'], t, {
      args: [-e, 0],
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], t, {
      args: [-i, 0],
    }], [['ArrowRight', 'mac+ArrowRight'], t, {
      args: [e, 0],
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], t, {
      args: [i, 0],
    }], [['ArrowUp', 'mac+ArrowUp'], t, {
      args: [0, -e],
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], t, {
      args: [0, -i],
    }], [['ArrowDown', 'mac+ArrowDown'], t, {
      args: [0, e],
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], t, {
      args: [0, i],
    }], [['Escape', 'mac+Escape'], Y.prototype._stopResizingWithKeyboard]]));
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
    return J(this, '_defaultLineColor', this._colorManager.getHexCode('CanvasText'));
  }

  static deleteAnnotationElement(t) {
    const e = new dw({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager,
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }

  static initialize(t, e) {
    if (Y._l10n ?? (Y._l10n = t), Y._l10nResizer || (Y._l10nResizer = Object.freeze({
      topLeft: 'pdfjs-editor-resizer-top-left',
      topMiddle: 'pdfjs-editor-resizer-top-middle',
      topRight: 'pdfjs-editor-resizer-top-right',
      middleRight: 'pdfjs-editor-resizer-middle-right',
      bottomRight: 'pdfjs-editor-resizer-bottom-right',
      bottomMiddle: 'pdfjs-editor-resizer-bottom-middle',
      bottomLeft: 'pdfjs-editor-resizer-bottom-left',
      middleLeft: 'pdfjs-editor-resizer-middle-left',
    })), Y._borderLineWidth !== -1) return;
    const i = getComputedStyle(document.documentElement);
    Y._borderLineWidth = parseFloat(i.getPropertyValue('--outline-width')) || 0;
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
    Et('Not implemented');
  }

  get propertiesToUpdate() {
    return [];
  }

  get _isDraggable() {
    return n(this, sc);
  }

  set _isDraggable(t) {
    let e;
    g(this, sc, t), (e = this.div) == null || e.classList.toggle('draggable', t);
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
    let e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (w(this, V, al).call(this), (e = n(this, bs)) == null || e.remove(), g(this, bs, null)), this.parent = t;
  }

  focusin(t) {
    this._focusEventsAllowed && (n(this, Jr) ? g(this, Jr, !1) : this.parent.setSelected(this));
  }

  focusout(t) {
    let i;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM) return;
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
    w(this, V, Tf).call(this, this.parentDimensions, t, e);
  }

  translateInPage(t, e) {
    n(this, ii) || g(this, ii, [this.x, this.y, this.width, this.height]), w(this, V, Tf).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: 'nearest',
    });
  }

  translationDone() {
    this._onTranslated(this.x, this.y);
  }

  drag(t, e) {
    n(this, ii) || g(this, ii, [this.x, this.y, this.width, this.height]);
    const {
      div: i,
      parentDimensions: [s, r],
    } = this;
    if (this.x += t / s, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: u,
        y: p,
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, u, p) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o,
    } = this;
    const [h, l] = this.getBaseTranslation();
    a += h, o += l;
    const {
      style: d,
    } = i;
    d.left = `${(100 * a).toFixed(2)}%`, d.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o), i.scrollIntoView({
      block: 'nearest',
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
    const [t, e] = this.parentDimensions; const {
      _borderLineWidth: i,
    } = Y; const s = i / t; const
      r = i / e;
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
        style: e,
      },
      pageDimensions: [i, s],
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: h,
    } = this;
    if (o *= i, h *= s, r *= i, a *= s, this._mustFixPosition) {
      switch (t) {
        case 0:
          r = De(r, 0, i - o), a = De(a, 0, s - h);
          break;
        case 90:
          r = De(r, 0, i - h), a = De(a, o, s);
          break;
        case 180:
          r = De(r, o, i), a = De(a, h, s);
          break;
        case 270:
          r = De(r, h, i), a = De(a, 0, s - o);
          break;
      }
    }
    this.x = r /= i, this.y = a /= s;
    const [l, d] = this.getBaseTranslation();
    r += l, a += d, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }

  screenToPageTranslation(t, e) {
    let i;
    return w(i = Y, nc, Pf).call(i, t, e, this.parentRotation);
  }

  pageTranslationToScreen(t, e) {
    let i;
    return w(i = Y, nc, Pf).call(i, t, e, 360 - this.parentRotation);
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
      pageDimensions: [e, i],
    } = this;
    return [e * t, i * t];
  }

  setDims() {
    const {
      div: {
        style: t,
      },
      width: e,
      height: i,
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
    let t;
    (t = n(this, kt)) == null || t.finish();
  }

  get toolbarButtons() {
    return null;
  }

  async addEditToolbar() {
    if (this._editToolbar || n(this, Qr)) return this._editToolbar;
    this._editToolbar = new mf(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t,
    } = this;
    if (t) for (const [e, i] of t) await this._editToolbar.addButton(e, i);
    return this.hasComment || this._editToolbar.addButton('comment', this.addCommentButton()), this._editToolbar.addButton('delete'), this._editToolbar;
  }

  addCommentButtonInToolbar() {
    let t;
    (t = this._editToolbar) == null || t.addButtonBefore('comment', this.addCommentButton(), '.deleteButton');
  }

  removeCommentButtonFromToolbar() {
    let t;
    (t = this._editToolbar) == null || t.removeButton('comment');
  }

  removeEditToolbar() {
    let t; let
      e;
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, kt)) == null || e.destroy();
  }

  addContainer(t) {
    let i;
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
    let t;
    return (t = n(this, kt)) == null ? void 0 : t.data;
  }

  set altTextData(t) {
    n(this, kt) && (n(this, kt).data = t);
  }

  get guessedAltText() {
    let t;
    return (t = n(this, kt)) == null ? void 0 : t.guessedText;
  }

  async setGuessedAltText(t) {
    let e;
    await ((e = n(this, kt)) == null ? void 0 : e.setGuessedText(t));
  }

  serializeAltText(t) {
    let e;
    return (e = n(this, kt)) == null ? void 0 : e.serialize(t);
  }

  hasAltText() {
    return !!n(this, kt) && !n(this, kt).isEmpty();
  }

  hasAltTextData() {
    let t;
    return ((t = n(this, kt)) == null ? void 0 : t.hasData()) ?? !1;
  }

  focusCommentButton() {
    let t;
    (t = n(this, wt)) == null || t.focusButton();
  }

  addCommentButton() {
    return n(this, wt) || g(this, wt, new Ed(this));
  }

  addStandaloneCommentButton() {
    if (n(this, Ys)) {
      this._uiManager.isEditingMode() && n(this, Ys).classList.remove('hidden');
      return;
    }
    this.hasComment && (g(this, Ys, n(this, wt).renderForStandalone()), this.div.append(n(this, Ys)));
  }

  removeStandaloneCommentButton() {
    n(this, wt).removeStandaloneCommentButton(), g(this, Ys, null);
  }

  hideStandaloneCommentButton() {
    let t;
    (t = n(this, Ys)) == null || t.classList.add('hidden');
  }

  get comment() {
    const {
      data: {
        richText: t,
        text: e,
        date: i,
        deleted: s,
      },
    } = n(this, wt);
    return {
      text: e,
      richText: t,
      date: i,
      deleted: s,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1,
    };
  }

  set comment(t) {
    n(this, wt) || g(this, wt, new Ed(this)), n(this, wt).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }

  setCommentData({
    comment: t,
    popupRef: e,
    richText: i,
  }) {
    if (!e || (n(this, wt) || g(this, wt, new Ed(this)), n(this, wt).setInitialText(t, i), !this.annotationElementId)) return;
    const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    s && this.updateFromAnnotationLayer(s);
  }

  get hasEditedComment() {
    let t;
    return (t = n(this, wt)) == null ? void 0 : t.hasBeenEdited();
  }

  get hasDeletedComment() {
    let t;
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
      const [, , , s] = t.rect; const [r] = this.pageDimensions; const [a] = this.pageTranslation; const o = a + r + 1; const h = s - 100; const
        l = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, h, l, s],
      };
    }
  }

  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e,
    },
  }) {
    n(this, wt).data = e ? null : t;
  }

  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }

  render() {
    let a;
    const t = this.div = document.createElement('div');
    t.setAttribute('data-editor-rotation', (360 - this.rotation) % 360), t.className = this.name, t.setAttribute('id', this.id), t.tabIndex = n(this, No) ? -1 : 0, t.setAttribute('role', 'application'), this.defaultL10nId && t.setAttribute('data-l10n-id', this.defaultL10nId), this._isVisible || t.classList.add('hidden'), this.setInForeground(), w(this, V, Mf).call(this);
    const [e, i] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
    const [s, r] = this.getInitialTranslation();
    return this.translate(s, r), gm(this, t, ['keydown', 'pointerdown', 'dblclick']), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, Zr) || g(this, Zr, new Pl({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: w(this, V, Mm).bind(this),
      onPinching: w(this, V, Lm).bind(this),
      onPinchEnd: w(this, V, Im).bind(this),
      signal: this._uiManager._signal,
    }))), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }

  pointerdown(t) {
    const {
      isMac: e,
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (g(this, Jr, !0), this._isDraggable) {
      w(this, V, Fm).call(this, t);
      return;
    }
    w(this, V, kf).call(this, t);
  }

  _onStartDragging() {
  }

  _onStopDragging() {
  }

  moveInDOM() {
    n(this, ys) && clearTimeout(n(this, ys)), g(this, ys, setTimeout(() => {
      let t;
      g(this, ys, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }

  _setParentAndPosition(t, e, i) {
    t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
  }

  getRect(t, e, i = this.rotation) {
    const s = this.parentScale; const [r, a] = this.pageDimensions; const [o, h] = this.pageTranslation; const l = t / s; const d = e / s; const u = this.x * r; const p = this.y * a; const y = this.width * r; const
      S = this.height * a;
    switch (i) {
      case 0:
        return [u + l + o, a - p - d - S + h, u + l + y + o, a - p - d + h];
      case 90:
        return [u + d + o, a - p + l + h, u + d + S + o, a - p + l + y + h];
      case 180:
        return [u - l - y + o, a - p + d + h, u - l + o, a - p + d + S + h];
      case 270:
        return [u - d - S + o, a - p - l - y + h, u - d + o, a - p - l + h];
      default:
        throw new Error('Invalid rotation');
    }
  }

  getRectInCurrentCoords(t, e) {
    const [i, s, r, a] = t; const o = r - i; const
      h = a - s;
    switch (this.rotation) {
      case 0:
        return [i, e - a, o, h];
      case 90:
        return [i, e - s, h, o];
      case 180:
        return [r, e - s, o, h];
      case 270:
        return [r, e - a, h, o];
      default:
        throw new Error('Invalid rotation');
    }
  }

  getPDFRect() {
    return this.getRect(0, 0);
  }

  getNonHCMColor() {
    return this.color && Y._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }

  onUpdatedColor() {
    let t;
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
        richText: a,
      },
      uid: o,
      pageIndex: h,
      creationDate: l,
      modificationDate: d,
    } = this;
    return {
      id: o,
      pageIndex: h,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t,
      },
      creationDate: l,
      modificationDate: i || d,
      popupRef: !r,
      color: e,
      opacity: s,
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
      right: s,
    } = this.getClientDimensions(); const
      {
        innerHeight: r,
        innerWidth: a,
      } = window;
    return e < a && s > 0 && t < r && i > 0;
  }

  rebuild() {
    w(this, V, Mf).call(this);
  }

  rotate(t) {
  }

  resize() {
  }

  serializeDeleted() {
    let t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || '',
    };
  }

  serialize(t = !1, e = null) {
    let i;
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: ((i = this._initialData) == null ? void 0 : i.popupRef) || '',
    };
  }

  static async deserialize(t, e, i) {
    const s = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: i,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate,
    });
    s.rotation = t.rotation, g(s, Yr, t.accessibilityData), s._isCopy = t.isCopy || !1;
    const [r, a] = s.pageDimensions; const
      [o, h, l, d] = s.getRectInCurrentCoords(t.rect, a);
    return s.x = o / r, s.y = h / a, s.width = l / r, s.height = d / a, s;
  }

  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }

  remove() {
    let t; let
      e;
    if ((t = n(this, Yn)) == null || t.abort(), g(this, Yn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, ys) && (clearTimeout(n(this, ys)), g(this, ys, null)), w(this, V, al).call(this), this.removeEditToolbar(), n(this, Mi)) {
      for (const i of n(this, Mi).values()) clearTimeout(i);
      g(this, Mi, null);
    }
    this.parent = null, (e = n(this, Zr)) == null || e.destroy(), g(this, Zr, null);
  }

  get isResizable() {
    return !1;
  }

  makeResizable() {
    this.isResizable && (w(this, V, Dm).call(this), n(this, pe).classList.remove('hidden'));
  }

  get toolbarPosition() {
    return null;
  }

  get commentButtonPosition() {
    return this._uiManager.direction === 'ltr' ? [1, 0] : [0, 0];
  }

  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e],
    } = this; const
      [i, s, r, a] = this.getPDFRect();
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
    if (!this.isResizable || t.target !== this.div || t.key !== 'Enter') return;
    this._uiManager.setSelected(this), g(this, Ks, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height,
    });
    const e = n(this, pe).children;
    if (!n(this, Wi)) {
      g(this, Wi, Array.from(e));
      const a = w(this, V, Nm).bind(this); const o = w(this, V, Om).bind(this); const
        h = this._uiManager._signal;
      for (const l of n(this, Wi)) {
        const d = l.getAttribute('data-resizer-name');
        l.setAttribute('role', 'spinbutton'), l.addEventListener('keydown', a, {
          signal: h,
        }), l.addEventListener('blur', o, {
          signal: h,
        }), l.addEventListener('focus', w(this, V, Bm).bind(this, d), {
          signal: h,
        }), l.setAttribute('data-l10n-id', Y._l10nResizer[d]);
      }
    }
    const i = n(this, Wi)[0];
    let s = 0;
    for (const a of e) {
      if (a === i) break;
      s++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Wi).length / 4);
    if (r !== s) {
      if (r < s) for (let o = 0; o < s - r; o++) n(this, pe).append(n(this, pe).firstChild);
      else if (r > s) for (let o = 0; o < r - s; o++) n(this, pe).firstChild.before(n(this, pe).lastChild);
      let a = 0;
      for (const o of e) {
        const l = n(this, Wi)[a++].getAttribute('data-resizer-name');
        o.setAttribute('data-l10n-id', Y._l10nResizer[l]);
      }
    }
    w(this, V, Lf).call(this, 0), g(this, Js, !0), n(this, pe).firstChild.focus({
      focusVisible: !0,
    }), t.preventDefault(), t.stopImmediatePropagation();
  }

  _resizeWithKeyboard(t, e) {
    n(this, Js) && w(this, V, Df).call(this, n(this, ec), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0,
    });
  }

  _stopResizingWithKeyboard() {
    w(this, V, al).call(this), this.div.focus();
  }

  select() {
    let t; let e; let
      i;
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), (t = this.div) == null || t.classList.add('selectedEditor'), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        let s; let
          r;
        (s = this.div) != null && s.classList.contains('selectedEditor') && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (i = n(this, kt)) == null || i.toggleAltTextBadge(!1);
  }

  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
      let t;
      return (t = this.div) == null ? void 0 : t.focus({
        preventScroll: !0,
      });
    }, 0);
  }

  unselect() {
    let t; let e; let i; let s; let
      r;
    this.isSelected && (this.isSelected = !1, (t = n(this, pe)) == null || t.classList.add('hidden'), (e = this.div) == null || e.classList.remove('selectedEditor'), (i = this.div) != null && i.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0,
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
    t.target.nodeName !== 'BUTTON' && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.id,
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
      action: 'added',
    };
  }

  get telemetryFinalData() {
    return null;
  }

  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, Mi) || g(this, Mi, /* @__PURE__ */ new Map());
      const {
        action: i,
      } = t;
      let s = n(this, Mi).get(i);
      s && clearTimeout(s), s = setTimeout(() => {
        this._reportTelemetry(t), n(this, Mi).delete(i), n(this, Mi).size === 0 && g(this, Mi, null);
      }, Y._telemetryTimeout), n(this, Mi).set(i, s);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch('reporttelemetry', {
      source: this,
      details: {
        type: 'editing',
        data: t,
      },
    });
  }

  show(t = this._isVisible) {
    this.div.classList.toggle('hidden', !t), this._isVisible = t;
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
      popup: this.comment,
    });
  }

  renderAnnotationElement(t) {
    if (this.deleted) return t.hide(), null;
    let e = t.container.querySelector('.annotationContent');
    if (!e) e = document.createElement('div'), e.classList.add('annotationContent', this.editorType), t.container.prepend(e);
    else if (e.nodeName === 'CANVAS') {
      const i = e;
      e = document.createElement('div'), e.classList.add('annotationContent', this.editorType), i.before(e);
    }
    return e;
  }

  resetAnnotationElement(t) {
    const {
      firstChild: e,
    } = t.container;
    (e == null ? void 0 : e.nodeName) === 'DIV' && e.classList.contains('annotationContent') && e.remove();
  }
};
Yr = new WeakMap(), Wi = new WeakMap(), kt = new WeakMap(), wt = new WeakMap(), Ys = new WeakMap(), No = new WeakMap(), Xn = new WeakMap(), tc = new WeakMap(), pe = new WeakMap(), Kr = new WeakMap(), Ks = new WeakMap(), bs = new WeakMap(), Yn = new WeakMap(), ec = new WeakMap(), Jr = new WeakMap(), ii = new WeakMap(), ic = new WeakMap(), Qr = new WeakMap(), Js = new WeakMap(), ys = new WeakMap(), Oo = new WeakMap(), Bo = new WeakMap(), Mi = new WeakMap(), Zr = new WeakMap(), sc = new WeakMap(), Pu = new WeakMap(), V = new WeakSet(), Tf = function ([t, e], i, s) {
  [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, nc = new WeakSet(), Pf = function (t, e, i) {
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
}, Od = function (t) {
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
}, Dm = function () {
  if (n(this, pe)) return;
  g(this, pe, document.createElement('div')), n(this, pe).classList.add('resizers');
  const t = this._willKeepAspectRatio ? ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'] : ['topLeft', 'topMiddle', 'topRight', 'middleRight', 'bottomRight', 'bottomMiddle', 'bottomLeft', 'middleLeft']; const
    e = this._uiManager._signal;
  for (const i of t) {
    const s = document.createElement('div');
    n(this, pe).append(s), s.classList.add('resizer', i), s.setAttribute('data-resizer-name', i), s.addEventListener('pointerdown', w(this, V, km).bind(this, i), {
      signal: e,
    }), s.addEventListener('contextmenu', Si, {
      signal: e,
    }), s.tabIndex = -1;
  }
  this.div.prepend(n(this, pe));
}, km = function (t, e) {
  let d;
  e.preventDefault();
  const {
    isMac: i,
  } = ce.platform;
  if (e.button !== 0 || e.ctrlKey && i) return;
  (d = n(this, kt)) == null || d.toggle(!1);
  const s = this._isDraggable;
  this._isDraggable = !1, g(this, Kr, [e.screenX, e.screenY]);
  const r = new AbortController(); const
    a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener('pointermove', w(this, V, Df).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a,
  }), window.addEventListener('touchmove', Nt, {
    passive: !1,
    signal: a,
  }), window.addEventListener('contextmenu', Si, {
    signal: a,
  }), g(this, Ks, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height,
  });
  const o = this.parent.div.style.cursor; const
    h = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const l = () => {
    let u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, kt)) == null || u.toggle(!0), this._isDraggable = s, this.parent.div.style.cursor = o, this.div.style.cursor = h, w(this, V, Bd).call(this);
  };
  window.addEventListener('pointerup', l, {
    signal: a,
  }), window.addEventListener('blur', l, {
    signal: a,
  });
}, Rf = function (t, e, i, s) {
  this.width = i, this.height = s, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, Bd = function () {
  if (!n(this, Ks)) return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: i,
    savedHeight: s,
  } = n(this, Ks);
  g(this, Ks, null);
  const r = this.x; const a = this.y; const o = this.width; const
    h = this.height;
  r === t && a === e && o === i && h === s || this.addCommands({
    cmd: w(this, V, Rf).bind(this, r, a, o, h),
    undo: w(this, V, Rf).bind(this, t, e, i, s),
    mustExec: !0,
  });
}, Df = function (t, e) {
  const [i, s] = this.parentDimensions; const r = this.x; const a = this.y; const o = this.width; const h = this.height; const l = Y.MIN_SIZE / i; const d = Y.MIN_SIZE / s; const u = w(this, V, Od).call(this, this.rotation); const p = (B, O) => [u[0] * B + u[2] * O, u[1] * B + u[3] * O]; const y = w(this, V, Od).call(this, 360 - this.rotation); const
    S = (B, O) => [y[0] * B + y[2] * O, y[1] * B + y[3] * O];
  let v; let _; let x = !1; let
    T = !1;
  switch (t) {
    case 'topLeft':
      x = !0, v = (B, O) => [0, 0], _ = (B, O) => [B, O];
      break;
    case 'topMiddle':
      v = (B, O) => [B / 2, 0], _ = (B, O) => [B / 2, O];
      break;
    case 'topRight':
      x = !0, v = (B, O) => [B, 0], _ = (B, O) => [0, O];
      break;
    case 'middleRight':
      T = !0, v = (B, O) => [B, O / 2], _ = (B, O) => [0, O / 2];
      break;
    case 'bottomRight':
      x = !0, v = (B, O) => [B, O], _ = (B, O) => [0, 0];
      break;
    case 'bottomMiddle':
      v = (B, O) => [B / 2, O], _ = (B, O) => [B / 2, 0];
      break;
    case 'bottomLeft':
      x = !0, v = (B, O) => [0, O], _ = (B, O) => [B, 0];
      break;
    case 'middleLeft':
      T = !0, v = (B, O) => [0, O / 2], _ = (B, O) => [B, O / 2];
      break;
  }
  const E = v(o, h); const
    f = _(o, h);
  let m = p(...f);
  const A = Y._round(r + m[0]); const
    C = Y._round(a + m[1]);
  let P = 1; let R = 1; let D; let
    k;
  if (e.fromKeyboard) {
    ({
      deltaX: D,
      deltaY: k,
    } = e);
  } else {
    const {
      screenX: B,
      screenY: O,
    } = e; const
      [tt, st] = n(this, Kr);
    [D, k] = this.screenToPageTranslation(B - tt, O - st), n(this, Kr)[0] = B, n(this, Kr)[1] = O;
  }
  if ([D, k] = S(D / i, k / s), x) {
    const B = Math.hypot(o, h);
    P = R = Math.max(Math.min(Math.hypot(f[0] - E[0] - D, f[1] - E[1] - k) / B, 1 / o, 1 / h), l / o, d / h);
  } else T ? P = De(Math.abs(f[0] - E[0] - D), l, 1) / o : R = De(Math.abs(f[1] - E[1] - k), d, 1) / h;
  const L = Y._round(o * P); const
    N = Y._round(h * R);
  m = p(..._(L, N));
  const I = A - m[0]; const
    j = C - m[1];
  n(this, ii) || g(this, ii, [this.x, this.y, this.width, this.height]), this.width = L, this.height = N, this.x = I, this.y = j, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Mm = function () {
  let t;
  g(this, Ks, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height,
  }), (t = n(this, kt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Lm = function (t, e, i) {
  let r = 0.7 * (i / e) + 1 - 0.7;
  if (r === 1) return;
  const a = w(this, V, Od).call(this, this.rotation); const o = (A, C) => [a[0] * A + a[2] * C, a[1] * A + a[3] * C]; const [h, l] = this.parentDimensions; const d = this.x; const u = this.y; const p = this.width; const y = this.height; const S = Y.MIN_SIZE / h; const
    v = Y.MIN_SIZE / l;
  r = Math.max(Math.min(r, 1 / p, 1 / y), S / p, v / y);
  const _ = Y._round(p * r); const
    x = Y._round(y * r);
  if (_ === p && x === y) return;
  n(this, ii) || g(this, ii, [d, u, p, y]);
  const T = o(p / 2, y / 2); const E = Y._round(d + T[0]); const f = Y._round(u + T[1]); const
    m = o(_ / 2, x / 2);
  this.x = E - m[0], this.y = f - m[1], this.width = _, this.height = x, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Im = function () {
  let t;
  (t = n(this, kt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), w(this, V, Bd).call(this);
}, kf = function (t) {
  const {
    isMac: e,
  } = ce.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, Fm = function (t) {
  const {
    isSelected: e,
  } = this;
  this._uiManager.setUpDragSession();
  let i = !1;
  const s = new AbortController(); const r = this._uiManager.combinedSignal(s); const a = {
    capture: !0,
    passive: !1,
    signal: r,
  }; const
    o = (l) => {
      s.abort(), g(this, Xn, null), g(this, Jr, !1), this._uiManager.endDragSession() || w(this, V, kf).call(this, l), i && this._onStopDragging();
    };
  e && (g(this, Oo, t.clientX), g(this, Bo, t.clientY), g(this, Xn, t.pointerId), g(this, tc, t.pointerType), window.addEventListener('pointermove', (l) => {
    i || (i = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: p,
    } = l;
    if (p !== n(this, Xn)) {
      Nt(l);
      return;
    }
    const [y, S] = this.screenToPageTranslation(d - n(this, Oo), u - n(this, Bo));
    g(this, Oo, d), g(this, Bo, u), this._uiManager.dragSelectedEditors(y, S);
  }, a), window.addEventListener('touchmove', Nt, a), window.addEventListener('pointerdown', (l) => {
    l.pointerType === n(this, tc) && (n(this, Zr) || l.isPrimary) && o(l), Nt(l);
  }, a));
  const h = (l) => {
    if (!n(this, Xn) || n(this, Xn) === l.pointerId) {
      o(l);
      return;
    }
    Nt(l);
  };
  window.addEventListener('pointerup', h, {
    signal: r,
  }), window.addEventListener('blur', h, {
    signal: r,
  });
}, Mf = function () {
  if (n(this, Yn) || !this.div) return;
  g(this, Yn, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Yn));
  this.div.addEventListener('focusin', this.focusin.bind(this), {
    signal: t,
  }), this.div.addEventListener('focusout', this.focusout.bind(this), {
    signal: t,
  });
}, Nm = function (t) {
  Y._resizerKeyboardManager.exec(this, t);
}, Om = function (t) {
  let e;
  n(this, Js) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, pe) && w(this, V, al).call(this);
}, Bm = function (t) {
  g(this, ec, n(this, Js) ? t : '');
}, Lf = function (t) {
  if (n(this, Wi)) for (const e of n(this, Wi)) e.tabIndex = t;
}, al = function () {
  g(this, Js, !1), w(this, V, Lf).call(this, -1), w(this, V, Bd).call(this);
}, b(Y, nc), M(Y, '_l10n', null), M(Y, '_l10nResizer', null), M(Y, '_borderLineWidth', -1), M(Y, '_colorManager', new wf()), M(Y, '_zIndex', 1), M(Y, '_telemetryTimeout', 1e3);
const Ct = Y;
class dw extends Ct {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }

  serialize() {
    return this.serializeDeleted();
  }
}
const mg = 3285377520; const xi = 4294901760; const
  os = 65535;
class Hm {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : mg, this.h2 = t ? t & 4294967295 : mg;
  }

  update(t) {
    let e; let
      i;
    if (typeof t === 'string') {
      e = new Uint8Array(t.length * 2), i = 0;
      for (let v = 0, _ = t.length; v < _; v++) {
        const x = t.charCodeAt(v);
        x <= 255 ? e[i++] = x : (e[i++] = x >>> 8, e[i++] = x & 255);
      }
    } else if (ArrayBuffer.isView(t)) e = t.slice(), i = e.byteLength;
    else throw new Error('Invalid data format, must be a string or TypedArray.');
    const s = i >> 2; const r = i - s * 4; const
      a = new Uint32Array(e.buffer, 0, s);
    let o = 0; let h = 0; let l = this.h1; let
      d = this.h2;
    const u = 3432918353; const p = 461845907; const y = u & os; const
      S = p & os;
    for (let v = 0; v < s; v++) v & 1 ? (o = a[v], o = o * u & xi | o * y & os, o = o << 15 | o >>> 17, o = o * p & xi | o * S & os, l ^= o, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (h = a[v], h = h * u & xi | h * y & os, h = h << 15 | h >>> 17, h = h * p & xi | h * S & os, d ^= h, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[s * 4 + 2] << 16;
      case 2:
        o ^= e[s * 4 + 1] << 8;
      case 1:
        o ^= e[s * 4], o = o * u & xi | o * y & os, o = o << 15 | o >>> 17, o = o * p & xi | o * S & os, s & 1 ? l ^= o : d ^= o;
    }
    this.h1 = l, this.h2 = d;
  }

  hexdigest() {
    let t = this.h1; let
      e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & xi | t * 36045 & os, e = e * 4283543511 & xi | ((e << 16 | t >>> 16) * 2950163797 & xi) >>> 16, t ^= e >>> 1, t = t * 444984403 & xi | t * 60499 & os, e = e * 3301882366 & xi | ((e << 16 | t >>> 16) * 3120437893 & xi) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, '0') + (e >>> 0).toString(16).padStart(8, '0');
  }
}
const If = Object.freeze({
  map: null,
  hash: '',
  transfer: void 0,
});
let ta; let ea; let Qs; let ge; let Ru; let
  $m;
class Vp {
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
    if (e !== void 0 && (e instanceof Ct && n(this, Qs).delete(e.annotationElementId), n(this, ge).delete(t), n(this, ge).size === 0 && this.resetModified(), typeof this.onAnnotationEditor === 'function')) {
      for (const i of n(this, ge).values()) if (i instanceof Ct) return;
      this.onAnnotationEditor(null);
    }
  }

  setValue(t, e) {
    const i = n(this, ge).get(t);
    let s = !1;
    if (i !== void 0) for (const [r, a] of Object.entries(e)) i[r] !== a && (s = !0, i[r] = a);
    else s = !0, n(this, ge).set(t, e);
    s && w(this, Ru, $m).call(this), e instanceof Ct && ((n(this, Qs) || g(this, Qs, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor === 'function' && this.onAnnotationEditor(e.constructor._type));
  }

  has(t) {
    return n(this, ge).has(t);
  }

  get size() {
    return n(this, ge).size;
  }

  resetModified() {
    n(this, ta) && (g(this, ta, !1), typeof this.onResetModified === 'function' && this.onResetModified());
  }

  get print() {
    return new Um(this);
  }

  get serializable() {
    if (n(this, ge).size === 0) return If;
    const t = /* @__PURE__ */ new Map(); const e = new Hm(); const i = []; const
      s = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, ge)) {
      const h = o instanceof Ct ? o.serialize(!1, s) : o;
      h && (t.set(a, h), e.update(`${a}:${JSON.stringify(h)}`), r || (r = !!h.bitmap));
    }
    if (r) for (const a of t.values()) a.bitmap && i.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: i,
    } : If;
  }

  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let i = 0; let
      s = 0;
    for (const r of n(this, ge).values()) {
      if (!(r instanceof Ct)) {
        r.popup && (r.popup.deleted ? s += 1 : i += 1);
        continue;
      }
      r.isCommentDeleted ? s += 1 : r.hasEditedComment && (i += 1);
      const a = r.telemetryFinalData;
      if (!a) continue;
      const {
        type: o,
      } = a;
      e.has(o) || e.set(o, Object.getPrototypeOf(r).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const h = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [l, d] of Object.entries(a)) {
        if (l === 'type') continue;
        let u = h.get(l);
        u || (u = /* @__PURE__ */ new Map(), h.set(l, u));
        const p = u.get(d) ?? 0;
        u.set(d, p + 1);
      }
    }
    if ((s > 0 || i > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
      deleted: s,
      edited: i,
    }), !t) return null;
    for (const [r, a] of e) t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }

  resetModifiedIds() {
    g(this, ea, null);
  }

  updateEditor(t, e) {
    let s;
    const i = (s = n(this, Qs)) == null ? void 0 : s.get(t);
    return i ? (i.updateFromAnnotationLayer(e), !0) : !1;
  }

  getEditor(t) {
    let e;
    return ((e = n(this, Qs)) == null ? void 0 : e.get(t)) || null;
  }

  get modifiedIds() {
    if (n(this, ea)) return n(this, ea);
    const t = [];
    if (n(this, Qs)) for (const e of n(this, Qs).values()) e.serialize() && t.push(e.annotationElementId);
    return g(this, ea, {
      ids: new Set(t),
      hash: t.join(','),
    });
  }

  [Symbol.iterator]() {
    return n(this, ge).entries();
  }
}
ta = new WeakMap(), ea = new WeakMap(), Qs = new WeakMap(), ge = new WeakMap(), Ru = new WeakSet(), $m = function () {
  n(this, ta) || (g(this, ta, !0), typeof this.onSetModified === 'function' && this.onSetModified());
};
let rc;
class Um extends Vp {
  constructor(e) {
    super();
    b(this, rc);
    const {
      map: i,
      hash: s,
      transfer: r,
    } = e.serializable; const
      a = structuredClone(i, r ? {
        transfer: r,
      } : null);
    g(this, rc, {
      map: a,
      hash: s,
      transfer: r,
    });
  }

  get print() {
    Et('Should not call PrintAnnotationStorage.print');
  }

  get serializable() {
    return n(this, rc);
  }

  get modifiedIds() {
    return J(this, 'modifiedIds', {
      ids: /* @__PURE__ */ new Set(),
      hash: '',
    });
  }
}
rc = new WeakMap();
let Ho;
class uw {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null,
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
    this.styleElement || (this.styleElement = this._document.createElement('style'), this._document.documentElement.getElementsByTagName('head')[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }

  clear() {
    for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
    this.nativeFontFaces.clear(), n(this, Ho).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }

  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: i,
  }) {
    if (!(!t || n(this, Ho).has(t.loadedName))) {
      if (nt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: r,
          style: a,
        } = t; const
          o = new FontFace(s, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Ho).add(s), i == null || i(t);
        } catch {
          X(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      Et('Not implemented: loadSystemFont without the Font Loading API.');
    }
  }

  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo) return;
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
      if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
      await new Promise((i) => {
        const s = this._queueLoadingCallback(i);
        this._prepareFontLoadEvent(t, s);
      });
    }
  }

  get isFontLoadingAPISupported() {
    let e;
    const t = !!((e = this._document) != null && e.fonts);
    return J(this, 'isFontLoadingAPISupported', t);
  }

  get isSyncFontLoadingSupported() {
    return J(this, 'isSyncFontLoadingSupported', Be || ce.platform.isFirefox);
  }

  _queueLoadingCallback(t) {
    function e() {
      for (nt(!s.done, 'completeRequest() cannot be called twice.'), s.done = !0; i.length > 0 && i[0].done;) {
        const r = i.shift();
        setTimeout(r.callback, 0);
      }
    }
    const {
      loadingRequests: i,
    } = this; const
      s = {
        done: !1,
        complete: e,
        callback: t,
      };
    return i.push(s), s;
  }

  get _loadTestFont() {
    const t = atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==');
    return J(this, '_loadTestFont', t);
  }

  _prepareFontLoadEvent(t, e) {
    function i(f, m) {
      return f.charCodeAt(m) << 24 | f.charCodeAt(m + 1) << 16 | f.charCodeAt(m + 2) << 8 | f.charCodeAt(m + 3) & 255;
    }
    function s(f, m, A, C) {
      const P = f.substring(0, m); const
        R = f.substring(m + A);
      return P + C + R;
    }
    let r; let
      a;
    const o = this._document.createElement('canvas');
    o.width = 1, o.height = 1;
    const h = o.getContext('2d');
    let l = 0;
    function d(f, m) {
      if (++l > 30) {
        X('Load test font never loaded.'), m();
        return;
      }
      if (h.font = `30px ${f}`, h.fillText('.', 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0) {
        m();
        return;
      }
      setTimeout(d.bind(null, f, m));
    }
    const u = `lt${Date.now()}${this.loadTestFontId++}`;
    let p = this._loadTestFont;
    p = s(p, 976, u.length, u);
    const S = 16; const
      v = 1482184792;
    let _ = i(p, S);
    for (r = 0, a = u.length - 3; r < a; r += 4) _ = _ - v + i(u, r) | 0;
    r < u.length && (_ = _ - v + i(`${u}XXX`, r) | 0), p = s(p, S, 4, Zy(_));
    const x = `url(data:font/opentype;base64,${btoa(p)});`; const
      T = `@font-face {font-family:"${u}";src:${x}}`;
    this.insertRule(T);
    const E = this._document.createElement('div');
    E.style.visibility = 'hidden', E.style.width = E.style.height = '10px', E.style.position = 'absolute', E.style.top = E.style.left = '0px';
    for (const f of [t.loadedName, u]) {
      const m = this._document.createElement('span');
      m.textContent = 'Hi', m.style.fontFamily = f, E.append(m);
    }
    this._document.body.append(E), d(u, () => {
      E.remove(), e.complete();
    });
  }
}
Ho = new WeakMap();
let ft;
class fw {
  constructor(t, e = null, i, s) {
    b(this, ft);
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null), g(this, ft, t), this._inspectFont = e, i && Object.assign(this, i), s && (this.charProcOperatorList = s);
  }

  createNativeFontFace() {
    let e;
    if (!this.data || this.disableFontFace) return null;
    let t;
    if (!this.cssFontInfo) t = new FontFace(this.loadedName, this.data, {});
    else {
      const i = {
        weight: this.cssFontInfo.fontWeight,
      };
      this.cssFontInfo.italicAngle && (i.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, i);
    }
    return (e = this._inspectFont) == null || e.call(this, this), t;
  }

  createFontFaceRule() {
    let i;
    if (!this.data || this.disableFontFace) return null;
    const t = `url(data:${this.mimetype};base64,${sm(this.data)});`;
    let e;
    if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    else {
      let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${t}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, t), e;
  }

  getPathGenerator(t, e) {
    if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
    const i = `${this.loadedName}_path_${e}`;
    let s;
    try {
      s = t.get(i);
    } catch (a) {
      X(`getPathGenerator - ignoring character: "${a}".`);
    }
    const r = new Path2D(s || '');
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
function pw(c) {
  if (c instanceof URL) return c.href;
  if (typeof c === 'string') {
    if (Be) return c;
    const t = URL.parse(c, window.location);
    if (t) return t.href;
  }
  throw new Error('Invalid PDF url data: either string or URL-object is expected in the url property.');
}
function gw(c) {
  if (Be && typeof Buffer < 'u' && c instanceof Buffer) throw new Error('Please provide binary data as `Uint8Array`, rather than `Buffer`.');
  if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength) return c;
  if (typeof c === 'string') return fd(c);
  if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c === 'object' && !isNaN(c == null ? void 0 : c.length)) return new Uint8Array(c);
  throw new Error('Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.');
}
function _d(c) {
  if (typeof c !== 'string') return null;
  if (c.endsWith('/')) return c;
  throw new Error(`Invalid factory url: "${c}" must include trailing slash.`);
}
const Ff = (c) => typeof c === 'object' && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0; const mw = (c) => typeof c === 'object' && typeof (c == null ? void 0 : c.name) === 'string'; const
  Gm = sw.bind(null, Ff, mw);
let Zs; let
  Du;
class bw {
  constructor() {
    b(this, Zs, /* @__PURE__ */ new Map());
    b(this, Du, Promise.resolve());
  }

  postMessage(t, e) {
    const i = {
      data: structuredClone(t, e ? {
        transfer: e,
      } : null),
    };
    n(this, Du).then(() => {
      for (const [s] of n(this, Zs)) s.call(this, i);
    });
  }

  addEventListener(t, e, i = null) {
    let s = null;
    if ((i == null ? void 0 : i.signal) instanceof AbortSignal) {
      const {
        signal: r,
      } = i;
      if (r.aborted) {
        X('LoopbackPort - cannot use an `aborted` signal.');
        return;
      }
      const a = () => this.removeEventListener(t, e);
      s = () => r.removeEventListener('abort', a), r.addEventListener('abort', a);
    }
    n(this, Zs).set(e, s);
  }

  removeEventListener(t, e) {
    const i = n(this, Zs).get(e);
    i == null || i(), n(this, Zs).delete(e);
  }

  terminate() {
    for (const [, t] of n(this, Zs)) t == null || t();
    n(this, Zs).clear();
  }
}
Zs = new WeakMap(), Du = new WeakMap();
const Cd = {
  DATA: 1,
  ERROR: 2,
};
const Vt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8,
};
function bg() {
}
function Ue(c) {
  if (c instanceof _n || c instanceof du || c instanceof lg || c instanceof _l || c instanceof ef) return c;
  switch (c instanceof Error || typeof c === 'object' && c !== null || Et('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
    case 'AbortException':
      return new _n(c.message);
    case 'InvalidPDFException':
      return new du(c.message);
    case 'PasswordException':
      return new lg(c.message, c.code);
    case 'ResponseException':
      return new _l(c.message, c.status, c.missing);
    case 'UnknownErrorException':
      return new ef(c.message, c.details);
  }
  return new ef(c.message, c.toString());
}
let $o; let Oi; let zm; let Wm; let jm; let
  Hd;
class ol {
  constructor(t, e, i) {
    b(this, Oi);
    b(this, $o, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener('message', w(this, Oi, zm).bind(this), {
      signal: n(this, $o).signal,
    });
  }

  on(t, e) {
    const i = this.actionHandler;
    if (i[t]) throw new Error(`There is already an actionName called "${t}"`);
    i[t] = e;
  }

  send(t, e, i) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: t,
      data: e,
    }, i);
  }

  sendWithPromise(t, e, i) {
    const s = this.callbackId++; const
      r = Promise.withResolvers();
    this.callbackCapabilities[s] = r;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        callbackId: s,
        data: e,
      }, i);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }

  sendWithStream(t, e, i, s) {
    const r = this.streamId++; const a = this.sourceName; const o = this.targetName; const
      h = this.comObj;
    return new ReadableStream({
      start: (l) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: l,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1,
        }, h.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: l.desiredSize,
        }, s), d.promise;
      },
      pull: (l) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r].pullCall = d, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: Vt.PULL,
          streamId: r,
          desiredSize: l.desiredSize,
        }), d.promise;
      },
      cancel: (l) => {
        nt(l instanceof Error, 'cancel must have a valid reason');
        const d = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = d, this.streamControllers[r].isClosed = !0, h.postMessage({
          sourceName: a,
          targetName: o,
          stream: Vt.CANCEL,
          streamId: r,
          reason: Ue(l),
        }), d.promise;
      },
    }, i);
  }

  destroy() {
    let t;
    (t = n(this, $o)) == null || t.abort(), g(this, $o, null);
  }
}
$o = new WeakMap(), Oi = new WeakSet(), zm = function ({
  data: t,
}) {
  if (t.targetName !== this.sourceName) return;
  if (t.stream) {
    w(this, Oi, jm).call(this, t);
    return;
  }
  if (t.callback) {
    const i = t.callbackId; const
      s = this.callbackCapabilities[i];
    if (!s) throw new Error(`Cannot resolve callback ${i}`);
    if (delete this.callbackCapabilities[i], t.callback === Cd.DATA) s.resolve(t.data);
    else if (t.callback === Cd.ERROR) s.reject(Ue(t.reason));
    else throw new Error('Unexpected callback case');
    return;
  }
  const e = this.actionHandler[t.action];
  if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const i = this.sourceName; const s = t.sourceName; const
      r = this.comObj;
    Promise.try(e, t.data).then((a) => {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: Cd.DATA,
        callbackId: t.callbackId,
        data: a,
      });
    }, (a) => {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: Cd.ERROR,
        callbackId: t.callbackId,
        reason: Ue(a),
      });
    });
    return;
  }
  if (t.streamId) {
    w(this, Oi, Wm).call(this, t);
    return;
  }
  e(t.data);
}, Wm = function (t) {
  const e = t.streamId; const i = this.sourceName; const s = t.sourceName; const r = this.comObj; const a = this; const o = this.actionHandler[t.action]; const
    h = {
      enqueue(l, d = 1, u) {
        if (this.isCancelled) return;
        const p = this.desiredSize;
        this.desiredSize -= d, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.ENQUEUE,
          streamId: e,
          chunk: l,
        }, u);
      },
      close() {
        this.isCancelled || (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.CLOSE,
          streamId: e,
        }), delete a.streamSinks[e]);
      },
      error(l) {
        nt(l instanceof Error, 'error must have a valid reason'), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.ERROR,
          streamId: e,
          reason: Ue(l),
        }));
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: !1,
      desiredSize: t.desiredSize,
      ready: null,
    };
  h.sinkCapability.resolve(), h.ready = h.sinkCapability.promise, this.streamSinks[e] = h, Promise.try(o, t.data, h).then(() => {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: Vt.START_COMPLETE,
      streamId: e,
      success: !0,
    });
  }, (l) => {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: Vt.START_COMPLETE,
      streamId: e,
      reason: Ue(l),
    });
  });
}, jm = function (t) {
  const e = t.streamId; const i = this.sourceName; const s = t.sourceName; const r = this.comObj; const a = this.streamControllers[e]; const
    o = this.streamSinks[e];
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
          success: !0,
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || bg).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (l) => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          reason: Ue(l),
        });
      });
      break;
    case Vt.ENQUEUE:
      if (nt(a, 'enqueue should have stream controller'), a.isClosed) break;
      a.controller.enqueue(t.chunk);
      break;
    case Vt.CLOSE:
      if (nt(a, 'close should have stream controller'), a.isClosed) break;
      a.isClosed = !0, a.controller.close(), w(this, Oi, Hd).call(this, a, e);
      break;
    case Vt.ERROR:
      nt(a, 'error should have stream controller'), a.controller.error(Ue(t.reason)), w(this, Oi, Hd).call(this, a, e);
      break;
    case Vt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Ue(t.reason)), w(this, Oi, Hd).call(this, a, e);
      break;
    case Vt.CANCEL:
      if (!o) break;
      const h = Ue(t.reason);
      Promise.try(o.onCancel || bg, h).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.CANCEL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (l) => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: Vt.CANCEL_COMPLETE,
          streamId: e,
          reason: Ue(l),
        });
      }), o.sinkCapability.reject(h), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error('Unexpected stream case');
  }
}, Hd = async function (t, e) {
  let i; let s; let
    r;
  await Promise.allSettled([(i = t.startCall) == null ? void 0 : i.promise, (s = t.pullCall) == null ? void 0 : s.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
let ac;
class Vm {
  constructor({
    enableHWA: t = !1,
  }) {
    b(this, ac, !1);
    g(this, ac, t);
  }

  create(t, e) {
    if (t <= 0 || e <= 0) throw new Error('Invalid canvas size');
    const i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext('2d', {
        willReadFrequently: !n(this, ac),
      }),
    };
  }

  reset(t, e, i) {
    if (!t.canvas) throw new Error('Canvas is not specified');
    if (e <= 0 || i <= 0) throw new Error('Invalid canvas size');
    t.canvas.width = e, t.canvas.height = i;
  }

  destroy(t) {
    if (!t.canvas) throw new Error('Canvas is not specified');
    t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
  }

  _createCanvas(t, e) {
    Et('Abstract method `_createCanvas` called.');
  }
}
ac = new WeakMap();
class yw extends Vm {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1,
  }) {
    super({
      enableHWA: e,
    }), this._document = t;
  }

  _createCanvas(t, e) {
    const i = this._document.createElement('canvas');
    return i.width = t, i.height = e, i;
  }
}
class qm {
  constructor({
    baseUrl: t = null,
    isCompressed: e = !0,
  }) {
    this.baseUrl = t, this.isCompressed = e;
  }

  async fetch({
    name: t,
  }) {
    if (!this.baseUrl) throw new Error('Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.');
    if (!t) throw new Error('CMap name must be specified.');
    const e = this.baseUrl + t + (this.isCompressed ? '.bcmap' : '');
    return this._fetch(e).then((i) => ({
      cMapData: i,
      isCompressed: this.isCompressed,
    })).catch((i) => {
      throw new Error(`Unable to load ${this.isCompressed ? 'binary ' : ''}CMap at: ${e}`);
    });
  }

  async _fetch(t) {
    Et('Abstract method `_fetch` called.');
  }
}
class yg extends qm {
  async _fetch(t) {
    const e = await Xh(t, this.isCompressed ? 'arraybuffer' : 'text');
    return e instanceof ArrayBuffer ? new Uint8Array(e) : fd(e);
  }
}
class Xm {
  addFilter(t) {
    return 'none';
  }

  addHCMFilter(t, e) {
    return 'none';
  }

  addAlphaFilter(t) {
    return 'none';
  }

  addLuminosityFilter(t) {
    return 'none';
  }

  addHighlightHCMFilter(t, e, i, s, r) {
    return 'none';
  }

  destroy(t = !1) {
  }
}
let ia; let Uo; let tn; let en; let Ce; let sa; let na; let H; let xe; let hl; let no; let $d; let ro; let Ym; let Nf; let ao; let ll; let cl; let Of; let
  dl;
class ww extends Xm {
  constructor({
    docId: e,
    ownerDocument: i = globalThis.document,
  }) {
    super();
    b(this, H);
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
    if (!e) return 'none';
    let i = n(this, H, xe).get(e);
    if (i) return i;
    const [s, r, a] = w(this, H, $d).call(this, e); const
      o = e.length === 1 ? s : `${s}${r}${a}`;
    if (i = n(this, H, xe).get(o), i) return n(this, H, xe).set(e, i), i;
    const h = `g_${n(this, en)}_transfer_map_${Kt(this, na)._++}`; const
      l = w(this, H, ro).call(this, h);
    n(this, H, xe).set(e, l), n(this, H, xe).set(o, l);
    const d = w(this, H, ao).call(this, h);
    return w(this, H, cl).call(this, s, r, a, d), l;
  }

  addHCMFilter(e, i) {
    let S;
    const s = `${e}-${i}`; const
      r = 'base';
    let a = n(this, H, hl).get(r);
    if ((a == null ? void 0 : a.key) === s || (a ? ((S = a.filter) == null || S.remove(), a.key = s, a.url = 'none', a.filter = null) : (a = {
      key: s,
      url: 'none',
      filter: null,
    }, n(this, H, hl).set(r, a)), !e || !i)) return a.url;
    const o = w(this, H, dl).call(this, e);
    e = U.makeHexColor(...o);
    const h = w(this, H, dl).call(this, i);
    if (i = U.makeHexColor(...h), n(this, H, no).style.color = '', e === '#000000' && i === '#ffffff' || e === i) return a.url;
    const l = new Array(256);
    for (let v = 0; v <= 255; v++) {
      const _ = v / 255;
      l[v] = _ <= 0.03928 ? _ / 12.92 : ((_ + 0.055) / 1.055) ** 2.4;
    }
    const d = l.join(','); const u = `g_${n(this, en)}_hcm_filter`; const
      p = a.filter = w(this, H, ao).call(this, u);
    w(this, H, cl).call(this, d, d, d, p), w(this, H, Nf).call(this, p);
    const y = (v, _) => {
      const x = o[v] / 255; const T = h[v] / 255; const
        E = new Array(_ + 1);
      for (let f = 0; f <= _; f++) E[f] = x + f / _ * (T - x);
      return E.join(',');
    };
    return w(this, H, cl).call(this, y(0, 5), y(1, 5), y(2, 5), p), a.url = w(this, H, ro).call(this, u), a.url;
  }

  addAlphaFilter(e) {
    let i = n(this, H, xe).get(e);
    if (i) return i;
    const [s] = w(this, H, $d).call(this, [e]); const
      r = `alpha_${s}`;
    if (i = n(this, H, xe).get(r), i) return n(this, H, xe).set(e, i), i;
    const a = `g_${n(this, en)}_alpha_map_${Kt(this, na)._++}`; const
      o = w(this, H, ro).call(this, a);
    n(this, H, xe).set(e, o), n(this, H, xe).set(r, o);
    const h = w(this, H, ao).call(this, a);
    return w(this, H, Of).call(this, s, h), o;
  }

  addLuminosityFilter(e) {
    let i = n(this, H, xe).get(e || 'luminosity');
    if (i) return i;
    let s; let
      r;
    if (e ? ([s] = w(this, H, $d).call(this, [e]), r = `luminosity_${s}`) : r = 'luminosity', i = n(this, H, xe).get(r), i) return n(this, H, xe).set(e, i), i;
    const a = `g_${n(this, en)}_luminosity_map_${Kt(this, na)._++}`; const
      o = w(this, H, ro).call(this, a);
    n(this, H, xe).set(e, o), n(this, H, xe).set(r, o);
    const h = w(this, H, ao).call(this, a);
    return w(this, H, Ym).call(this, h), e && w(this, H, Of).call(this, s, h), o;
  }

  addHighlightHCMFilter(e, i, s, r, a) {
    let T;
    const o = `${i}-${s}-${r}-${a}`;
    let h = n(this, H, hl).get(e);
    if ((h == null ? void 0 : h.key) === o || (h ? ((T = h.filter) == null || T.remove(), h.key = o, h.url = 'none', h.filter = null) : (h = {
      key: o,
      url: 'none',
      filter: null,
    }, n(this, H, hl).set(e, h)), !i || !s)) return h.url;
    const [l, d] = [i, s].map(w(this, H, dl).bind(this));
    let u = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]); let p = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]); let
      [y, S] = [r, a].map(w(this, H, dl).bind(this));
    p < u && ([u, p, y, S] = [p, u, S, y]), n(this, H, no).style.color = '';
    const v = (E, f, m) => {
      const A = new Array(256); const C = (p - u) / m; const P = E / 255; const
        R = (f - E) / (255 * m);
      let D = 0;
      for (let k = 0; k <= m; k++) {
        const L = Math.round(u + k * C); const
          N = P + k * R;
        for (let I = D; I <= L; I++) A[I] = N;
        D = L + 1;
      }
      for (let k = D; k < 256; k++) A[k] = A[D - 1];
      return A.join(',');
    }; const _ = `g_${n(this, en)}_hcm_${e}_filter`; const
      x = h.filter = w(this, H, ao).call(this, _);
    return w(this, H, Nf).call(this, x), w(this, H, cl).call(this, v(y[0], S[0], 5), v(y[1], S[1], 5), v(y[2], S[2], 5), x), h.url = w(this, H, ro).call(this, _), h.url;
  }

  destroy(e = !1) {
    let i; let s; let r; let
      a;
    e && ((i = n(this, sa)) != null && i.size) || ((s = n(this, tn)) == null || s.parentNode.parentNode.remove(), g(this, tn, null), (r = n(this, Uo)) == null || r.clear(), g(this, Uo, null), (a = n(this, sa)) == null || a.clear(), g(this, sa, null), g(this, na, 0));
  }
}
ia = new WeakMap(), Uo = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), Ce = new WeakMap(), sa = new WeakMap(), na = new WeakMap(), H = new WeakSet(), xe = function () {
  return n(this, Uo) || g(this, Uo, /* @__PURE__ */ new Map());
}, hl = function () {
  return n(this, sa) || g(this, sa, /* @__PURE__ */ new Map());
}, no = function () {
  if (!n(this, tn)) {
    const e = n(this, Ce).createElement('div'); const
      {
        style: i,
      } = e;
    i.visibility = 'hidden', i.contain = 'strict', i.width = i.height = 0, i.position = 'absolute', i.top = i.left = 0, i.zIndex = -1;
    const s = n(this, Ce).createElementNS(Os, 'svg');
    s.setAttribute('width', 0), s.setAttribute('height', 0), g(this, tn, n(this, Ce).createElementNS(Os, 'defs')), e.append(s), s.append(n(this, tn)), n(this, Ce).body.append(e);
  }
  return n(this, tn);
}, $d = function (e) {
  if (e.length === 1) {
    const l = e[0]; const
      d = new Array(256);
    for (let p = 0; p < 256; p++) d[p] = l[p] / 255;
    const u = d.join(',');
    return [u, u, u];
  }
  const [i, s, r] = e; const a = new Array(256); const o = new Array(256); const
    h = new Array(256);
  for (let l = 0; l < 256; l++) a[l] = i[l] / 255, o[l] = s[l] / 255, h[l] = r[l] / 255;
  return [a.join(','), o.join(','), h.join(',')];
}, ro = function (e) {
  if (n(this, ia) === void 0) {
    g(this, ia, '');
    const i = n(this, Ce).URL;
    i !== n(this, Ce).baseURI && (gd(i) ? X('#createUrl: ignore "data:"-URL for performance reasons.') : g(this, ia, Up(i, '')));
  }
  return `url(${n(this, ia)}#${e})`;
}, Ym = function (e) {
  const i = n(this, Ce).createElementNS(Os, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0'), e.append(i);
}, Nf = function (e) {
  const i = n(this, Ce).createElementNS(Os, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0'), e.append(i);
}, ao = function (e) {
  const i = n(this, Ce).createElementNS(Os, 'filter');
  return i.setAttribute('color-interpolation-filters', 'sRGB'), i.setAttribute('id', e), n(this, H, no).append(i), i;
}, ll = function (e, i, s) {
  const r = n(this, Ce).createElementNS(Os, i);
  r.setAttribute('type', 'discrete'), r.setAttribute('tableValues', s), e.append(r);
}, cl = function (e, i, s, r) {
  const a = n(this, Ce).createElementNS(Os, 'feComponentTransfer');
  r.append(a), w(this, H, ll).call(this, a, 'feFuncR', e), w(this, H, ll).call(this, a, 'feFuncG', i), w(this, H, ll).call(this, a, 'feFuncB', s);
}, Of = function (e, i) {
  const s = n(this, Ce).createElementNS(Os, 'feComponentTransfer');
  i.append(s), w(this, H, ll).call(this, s, 'feFuncA', e);
}, dl = function (e) {
  return n(this, H, no).style.color = e, Yh(getComputedStyle(n(this, H, no)).getPropertyValue('color'));
};
class Km {
  constructor({
    baseUrl: t = null,
  }) {
    this.baseUrl = t;
  }

  async fetch({
    filename: t,
  }) {
    if (!this.baseUrl) throw new Error('Ensure that the `standardFontDataUrl` API parameter is provided.');
    if (!t) throw new Error('Font filename must be specified.');
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }

  async _fetch(t) {
    Et('Abstract method `_fetch` called.');
  }
}
class wg extends Km {
  async _fetch(t) {
    const e = await Xh(t, 'arraybuffer');
    return new Uint8Array(e);
  }
}
class Jm {
  constructor({
    baseUrl: t = null,
  }) {
    this.baseUrl = t;
  }

  async fetch({
    filename: t,
  }) {
    if (!this.baseUrl) throw new Error('Ensure that the `wasmUrl` API parameter is provided.');
    if (!t) throw new Error('Wasm filename must be specified.');
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((i) => {
      throw new Error(`Unable to load wasm data at: ${e}`);
    });
  }

  async _fetch(t) {
    Et('Abstract method `_fetch` called.');
  }
}
class Ag extends Jm {
  async _fetch(t) {
    const e = await Xh(t, 'arraybuffer');
    return new Uint8Array(e);
  }
}
Be && X('Please use the `legacy` build in Node.js environments.');
async function qp(c) {
  const e = await process.getBuiltinModule('fs').promises.readFile(c);
  return new Uint8Array(e);
}
class Aw extends Xm {
}
class vw extends Vm {
  _createCanvas(t, e) {
    return process.getBuiltinModule('module').createRequire(import.meta.url)('@napi-rs/canvas').createCanvas(t, e);
  }
}
class Sw extends qm {
  async _fetch(t) {
    return qp(t);
  }
}
class xw extends Km {
  async _fetch(t) {
    return qp(t);
  }
}
class Ew extends Jm {
  async _fetch(t) {
    return qp(t);
  }
}
const to = '__forcedDependency';
const {
  floor: vg,
  ceil: Sg,
} = Math;
function Td(c, t, e, i, s, r) {
  c[t * 4 + 0] = Math.min(c[t * 4 + 0], e), c[t * 4 + 1] = Math.min(c[t * 4 + 1], i), c[t * 4 + 2] = Math.max(c[t * 4 + 2], s), c[t * 4 + 3] = Math.max(c[t * 4 + 3], r);
}
const Bf = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
let Go; let
  Kn;
class _w {
  constructor(t, e) {
    b(this, Go);
    b(this, Kn);
    g(this, Go, t), g(this, Kn, e);
  }

  get length() {
    return n(this, Go).length;
  }

  isEmpty(t) {
    return n(this, Go)[t] === Bf;
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
Go = new WeakMap(), Kn = new WeakMap();
const Pd = (c, t) => {
  if (!c) return;
  let e = c.get(t);
  return e || (e = {
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: !1,
  }, c.set(t, e)), e;
};
let We; let je; let ra; let ji; let aa; let sn; let ut; let pt; let nn; let Ve; let oc; let zo; let oa; let ha; let rn; let Te; let ws; let hc; let
  Hf;
class Cw {
  constructor(t, e, i = !1) {
    b(this, hc);
    b(this, We, {
      __proto__: null,
    });
    b(this, je, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [to]: [],
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
    b(this, zo, /* @__PURE__ */ new Map());
    b(this, oa);
    b(this, ha);
    b(this, rn);
    b(this, Te);
    b(this, ws);
    g(this, oa, t.width), g(this, ha, t.height), w(this, hc, Hf).call(this, e), i && g(this, ws, /* @__PURE__ */ new Map());
  }

  growOperationsCount(t) {
    t >= n(this, Te).length && w(this, hc, Hf).call(this, t, n(this, Te));
  }

  save(t) {
    return g(this, We, {
      __proto__: n(this, We),
    }), g(this, je, {
      __proto__: n(this, je),
      transform: {
        __proto__: n(this, je).transform,
      },
      moveText: {
        __proto__: n(this, je).moveText,
      },
      sameLineText: {
        __proto__: n(this, je).sameLineText,
      },
      [to]: {
        __proto__: n(this, je)[to],
      },
    }), g(this, ut, {
      __proto__: n(this, ut),
    }), n(this, ji).push(t), this;
  }

  restore(t) {
    let s;
    const e = Object.getPrototypeOf(n(this, We));
    if (e === null) return this;
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
    let i;
    const e = n(this, ji).pop();
    return e !== void 0 && ((i = Pd(n(this, ws), t)) == null || i.dependencies.add(e), n(this, Te)[t] = n(this, Te)[e]), this;
  }

  beginMarkedContent(t) {
    return n(this, aa).push(t), this;
  }

  endMarkedContent(t) {
    let i;
    const e = n(this, aa).pop();
    return e !== void 0 && ((i = Pd(n(this, ws), t)) == null || i.dependencies.add(e), n(this, Te)[t] = n(this, Te)[e]), this;
  }

  pushBaseTransform(t) {
    return n(this, sn).push(U.multiplyByDOMMatrix(n(this, sn).at(-1), t.getTransform())), this;
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
    for (const e of t) e in n(this, We) && this.recordFutureForcedDependency(e, n(this, We)[e]);
    return this;
  }

  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, Ve)) this.recordFutureForcedDependency(to, t);
    return this;
  }

  resetBBox(t) {
    return n(this, nn) !== t && (g(this, nn, t), n(this, pt)[0] = 1 / 0, n(this, pt)[1] = 1 / 0, n(this, pt)[2] = -1 / 0, n(this, pt)[3] = -1 / 0), this;
  }

  recordClipBox(t, e, i, s, r, a) {
    const o = U.multiplyByDOMMatrix(n(this, sn).at(-1), e.getTransform()); const
      h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    U.axialAlignedBoundingBox([i, r, s, a], o, h);
    const l = U.intersect(n(this, ut), h);
    return l ? (n(this, ut)[0] = l[0], n(this, ut)[1] = l[1], n(this, ut)[2] = l[2], n(this, ut)[3] = l[3]) : (n(this, ut)[0] = n(this, ut)[1] = 1 / 0, n(this, ut)[2] = n(this, ut)[3] = -1 / 0), this;
  }

  recordBBox(t, e, i, s, r, a) {
    const o = n(this, ut);
    if (o[0] === 1 / 0) return this;
    const h = U.multiplyByDOMMatrix(n(this, sn).at(-1), e.getTransform());
    if (o[0] === -1 / 0) return U.axialAlignedBoundingBox([i, r, s, a], h, n(this, pt)), this;
    const l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return U.axialAlignedBoundingBox([i, r, s, a], h, l), n(this, pt)[0] = Math.min(n(this, pt)[0], Math.max(l[0], o[0])), n(this, pt)[1] = Math.min(n(this, pt)[1], Math.max(l[1], o[1])), n(this, pt)[2] = Math.max(n(this, pt)[2], Math.min(l[2], o[2])), n(this, pt)[3] = Math.max(n(this, pt)[3], Math.min(l[3], o[3])), this;
  }

  recordCharacterBBox(t, e, i, s = 1, r = 0, a = 0, o) {
    const h = i.bbox;
    let l; let
      d;
    if (h && (l = h[2] !== h[0] && h[3] !== h[1] && n(this, zo).get(i), l !== !1 && (d = [0, 0, 0, 0], U.axialAlignedBoundingBox(h, i.fontMatrix, d), (s !== 1 || r !== 0 || a !== 0) && U.scaleMinMax([s, 0, 0, -s, r, a], d), l))) return this.recordBBox(t, e, d[0], d[2], d[1], d[3]);
    if (!o) return this.recordFullPageBBox(t);
    const u = o();
    return h && d && l === void 0 && (l = d[0] <= r - u.actualBoundingBoxLeft && d[2] >= r + u.actualBoundingBoxRight && d[1] <= a - u.actualBoundingBoxAscent && d[3] >= a + u.actualBoundingBoxDescent, n(this, zo).set(i, l), l) ? this.recordBBox(t, e, d[0], d[2], d[1], d[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }

  recordFullPageBBox(t) {
    return n(this, pt)[0] = Math.max(0, n(this, ut)[0]), n(this, pt)[1] = Math.max(0, n(this, ut)[1]), n(this, pt)[2] = Math.min(n(this, oa), n(this, ut)[2]), n(this, pt)[3] = Math.min(n(this, ha), n(this, ut)[3]), this;
  }

  getSimpleIndex(t) {
    return n(this, We)[t];
  }

  recordDependencies(t, e) {
    const i = n(this, Ve); const s = n(this, We); const
      r = n(this, je);
    for (const a of e) a in n(this, We) ? i.add(s[a]) : a in r && r[a].forEach(i.add, i);
    return this;
  }

  recordNamedDependency(t, e) {
    return n(this, ra).has(e) && n(this, Ve).add(n(this, ra).get(e)), this;
  }

  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [to]), n(this, ws)) {
      const i = Pd(n(this, ws), t); const
        {
          dependencies: s,
        } = i;
      n(this, Ve).forEach(s.add, s), n(this, ji).forEach(s.add, s), n(this, aa).forEach(s.add, s), s.delete(t), i.isRenderingOperation = !0;
    }
    if (n(this, nn) === t) {
      const i = vg(n(this, pt)[0] * 256 / n(this, oa)); const s = vg(n(this, pt)[1] * 256 / n(this, ha)); const r = Sg(n(this, pt)[2] * 256 / n(this, oa)); const
        a = Sg(n(this, pt)[3] * 256 / n(this, ha));
      Td(n(this, rn), t, i, s, r, a);
      for (const o of n(this, Ve)) o !== t && Td(n(this, rn), o, i, s, r, a);
      for (const o of n(this, ji)) o !== t && Td(n(this, rn), o, i, s, r, a);
      for (const o of n(this, aa)) o !== t && Td(n(this, rn), o, i, s, r, a);
      e || (n(this, Ve).clear(), g(this, nn, -1));
    }
    return this;
  }

  recordShowTextOperation(t, e = !1) {
    const i = Array.from(n(this, Ve));
    this.recordOperation(t, e), this.recordIncrementalData('sameLineText', t);
    for (const s of i) this.recordIncrementalData('sameLineText', s);
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
    for (const e of t) n(this, Ve).add(e);
  }

  take() {
    return n(this, zo).clear(), new _w(n(this, Te), n(this, rn));
  }

  takeDebugMetadata() {
    return n(this, ws);
  }
}
We = new WeakMap(), je = new WeakMap(), ra = new WeakMap(), ji = new WeakMap(), aa = new WeakMap(), sn = new WeakMap(), ut = new WeakMap(), pt = new WeakMap(), nn = new WeakMap(), Ve = new WeakMap(), oc = new WeakMap(), zo = new WeakMap(), oa = new WeakMap(), ha = new WeakMap(), rn = new WeakMap(), Te = new WeakMap(), ws = new WeakMap(), hc = new WeakSet(), Hf = function (t, e) {
  const i = new ArrayBuffer(t * 4);
  g(this, rn, new Uint8ClampedArray(i)), g(this, Te, new Uint32Array(i)), e && e.length > 0 ? (n(this, Te).set(e), n(this, Te).fill(Bf, e.length)) : n(this, Te).fill(Bf);
};
let At; let Ht; let Vi; let Wo; let
  jo;
const rg = class rg {
  constructor(t, e, i) {
    b(this, At);
    b(this, Ht);
    b(this, Vi);
    b(this, Wo, 0);
    b(this, jo, 0);
    if (t instanceof rg && n(t, Vi) === !!i) return t;
    g(this, At, t), g(this, Ht, e), g(this, Vi, !!i);
  }

  growOperationsCount() {
    throw new Error('Unreachable');
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
    throw new Error('Unreachable');
  }

  takeDebugMetadata() {
    throw new Error('Unreachable');
  }
};
At = new WeakMap(), Ht = new WeakMap(), Vi = new WeakMap(), Wo = new WeakMap(), jo = new WeakMap();
const pu = rg;
const Ei = {
  stroke: ['path', 'transform', 'filter', 'strokeColor', 'strokeAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'dash'],
  fill: ['path', 'transform', 'filter', 'fillColor', 'fillAlpha', 'globalCompositeOperation', 'SMask'],
  imageXObject: ['transform', 'SMask', 'filter', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation'],
  rawFillPath: ['filter', 'fillColor', 'fillAlpha'],
  showText: ['transform', 'leading', 'charSpacing', 'wordSpacing', 'hScale', 'textRise', 'moveText', 'textMatrix', 'font', 'fontObj', 'filter', 'fillColor', 'textRenderingMode', 'SMask', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation', 'sameLineText'],
  transform: ['transform'],
  transformAndFill: ['transform', 'fillColor'],
}; const
  ye = {
    FILL: 'Fill',
    STROKE: 'Stroke',
    SHADING: 'Shading',
  };
function $f(c, t) {
  if (!t) return;
  const e = t[2] - t[0]; const i = t[3] - t[1]; const
    s = new Path2D();
  s.rect(t[0], t[1], e, i), c.clip(s);
}
class Xp {
  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern() {
    Et('Abstract method `getPattern` called.');
  }
}
class Tw extends Xp {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
  }

  _createGradient(t) {
    let e;
    this._type === 'axial' ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === 'radial' && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const i of this._colorStops) e.addColorStop(i[0], i[1]);
    return e;
  }

  getPattern(t, e, i, s) {
    let r;
    if (s === ye.STROKE || s === ye.FILL) {
      const a = e.current.getClippedPathBoundingBox(s, Ft(t)) || [0, 0, 0, 0]; const o = Math.ceil(a[2] - a[0]) || 1; const h = Math.ceil(a[3] - a[1]) || 1; const l = e.cachedCanvases.getCanvas('pattern', o, h); const
        d = l.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-a[0], -a[1]), i = U.transform(i, [1, 0, 0, 1, a[0], a[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), $f(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), r = t.createPattern(l.canvas, 'no-repeat');
      const u = new DOMMatrix(i);
      r.setTransform(u);
    } else $f(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function rf(c, t, e, i, s, r, a, o) {
  const h = t.coords; const l = t.colors; const d = c.data; const
    u = c.width * 4;
  let p;
  h[e + 1] > h[i + 1] && (p = e, e = i, i = p, p = r, r = a, a = p), h[i + 1] > h[s + 1] && (p = i, i = s, s = p, p = a, a = o, o = p), h[e + 1] > h[i + 1] && (p = e, e = i, i = p, p = r, r = a, a = p);
  const y = (h[e] + t.offsetX) * t.scaleX; const S = (h[e + 1] + t.offsetY) * t.scaleY; const v = (h[i] + t.offsetX) * t.scaleX; const _ = (h[i + 1] + t.offsetY) * t.scaleY; const x = (h[s] + t.offsetX) * t.scaleX; const
    T = (h[s + 1] + t.offsetY) * t.scaleY;
  if (S >= T) return;
  const E = l[r]; const f = l[r + 1]; const m = l[r + 2]; const A = l[a]; const C = l[a + 1]; const P = l[a + 2]; const R = l[o]; const D = l[o + 1]; const k = l[o + 2]; const L = Math.round(S); const
    N = Math.round(T);
  let I; let j; let B; let O; let tt; let st; let ee; let
    Je;
  for (let rt = L; rt <= N; rt++) {
    if (rt < _) {
      const yt = rt < S ? 0 : (S - rt) / (S - _);
      I = y - (y - v) * yt, j = E - (E - A) * yt, B = f - (f - C) * yt, O = m - (m - P) * yt;
    } else {
      let yt;
      rt > T ? yt = 1 : _ === T ? yt = 0 : yt = (_ - rt) / (_ - T), I = v - (v - x) * yt, j = A - (A - R) * yt, B = C - (C - D) * yt, O = P - (P - k) * yt;
    }
    let ht;
    rt < S ? ht = 0 : rt > T ? ht = 1 : ht = (S - rt) / (S - T), tt = y - (y - x) * ht, st = E - (E - R) * ht, ee = f - (f - D) * ht, Je = m - (m - k) * ht;
    const ie = Math.round(Math.min(I, tt)); const
      de = Math.round(Math.max(I, tt));
    let ve = u * rt + ie * 4;
    for (let yt = ie; yt <= de; yt++) ht = (I - yt) / (I - tt), ht < 0 ? ht = 0 : ht > 1 && (ht = 1), d[ve++] = j - (j - st) * ht | 0, d[ve++] = B - (B - ee) * ht | 0, d[ve++] = O - (O - Je) * ht | 0, d[ve++] = 255;
  }
}
function Pw(c, t, e) {
  const i = t.coords; const
    s = t.colors;
  let r; let
    a;
  switch (t.type) {
    case 'lattice':
      const o = t.verticesPerRow; const h = Math.floor(i.length / o) - 1; const
        l = o - 1;
      for (r = 0; r < h; r++) {
        let d = r * o;
        for (let u = 0; u < l; u++, d++) rf(c, e, i[d], i[d + 1], i[d + o], s[d], s[d + 1], s[d + o]), rf(c, e, i[d + o + 1], i[d + 1], i[d + o], s[d + o + 1], s[d + 1], s[d + o]);
      }
      break;
    case 'triangles':
      for (r = 0, a = i.length; r < a; r += 3) rf(c, e, i[r], i[r + 1], i[r + 2], s[r], s[r + 1], s[r + 2]);
      break;
    default:
      throw new Error('illegal figure');
  }
}
class Rw extends Xp {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }

  _createMeshCanvas(t, e, i) {
    const o = Math.floor(this._bounds[0]); const h = Math.floor(this._bounds[1]); const l = Math.ceil(this._bounds[2]) - o; const d = Math.ceil(this._bounds[3]) - h; const u = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3); const p = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3); const y = l / u; const S = d / p; const v = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -h,
      scaleX: 1 / y,
      scaleY: 1 / S,
    }; const _ = u + 4; const x = p + 4; const T = i.getCanvas('mesh', _, x); const E = T.context; const
      f = E.createImageData(u, p);
    if (e) {
      const A = f.data;
      for (let C = 0, P = A.length; C < P; C += 4) A[C] = e[0], A[C + 1] = e[1], A[C + 2] = e[2], A[C + 3] = 255;
    }
    for (const A of this._figures) Pw(f, A, v);
    return E.putImageData(f, 2, 2), {
      canvas: T.canvas,
      offsetX: o - 2 * y,
      offsetY: h - 2 * S,
      scaleX: y,
      scaleY: S,
    };
  }

  isModifyingCurrentTransform() {
    return !0;
  }

  getPattern(t, e, i, s) {
    $f(t, this._bbox);
    const r = new Float32Array(2);
    if (s === ye.SHADING) U.singularValueDecompose2dScale(Ft(t), r);
    else if (this.matrix) {
      U.singularValueDecompose2dScale(this.matrix, r);
      const [o, h] = r;
      U.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= h;
    } else U.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, s === ye.SHADING ? null : this._background, e.cachedCanvases);
    return s !== ye.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, 'no-repeat');
  }
}
class Dw extends Xp {
  getPattern() {
    return 'hotpink';
  }
}
function kw(c) {
  switch (c[0]) {
    case 'RadialAxial':
      return new Tw(c);
    case 'Mesh':
      return new Rw(c);
    case 'Dummy':
      return new Dw();
  }
  throw new Error(`Unknown IR type: ${c[0]}`);
}
const xg = {
  COLORED: 1,
  UNCOLORED: 2,
};
const ku = class ku {
  constructor(t, e, i, s) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s;
  }

  createPatternCanvas(t, e) {
    let st; let
      ee;
    const {
      bbox: i,
      operatorList: s,
      paintType: r,
      tilingType: a,
      color: o,
      canvasGraphicsFactory: h,
    } = this;
    let {
      xstep: l,
      ystep: d,
    } = this;
    l = Math.abs(l), d = Math.abs(d), zu(`TilingType: ${a}`);
    const u = i[0]; const p = i[1]; const y = i[2]; const S = i[3]; const v = y - u; const _ = S - p; const
      x = new Float32Array(2);
    U.singularValueDecompose2dScale(this.matrix, x);
    const [T, E] = x;
    U.singularValueDecompose2dScale(this.baseTransform, x);
    const f = T * x[0]; const
      m = E * x[1];
    let A = v; let C = _; let P = !1; let
      R = !1;
    const D = Math.ceil(l * f); const k = Math.ceil(d * m); const L = Math.ceil(v * f); const
      N = Math.ceil(_ * m);
    D >= L ? A = l : P = !0, k >= N ? C = d : R = !0;
    const I = this.getSizeAndScale(A, this.ctx.canvas.width, f); const j = this.getSizeAndScale(C, this.ctx.canvas.height, m); const B = t.cachedCanvases.getCanvas('pattern', I.size, j.size); const O = B.context; const
      tt = h.createCanvasGraphics(O, e);
    if (tt.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(tt, r, o), O.translate(-I.scale * u, -j.scale * p), tt.transform(0, I.scale, 0, 0, j.scale, 0, 0), O.save(), (st = tt.dependencyTracker) == null || st.save(), this.clipBbox(tt, u, p, y, S), tt.baseTransform = Ft(tt.ctx), tt.executeOperatorList(s), tt.endDrawing(), (ee = tt.dependencyTracker) == null || ee.restore(), O.restore(), P || R) {
      const Je = B.canvas;
      P && (A = l), R && (C = d);
      const rt = this.getSizeAndScale(A, this.ctx.canvas.width, f); const ht = this.getSizeAndScale(C, this.ctx.canvas.height, m); const ie = rt.size; const de = ht.size; const ve = t.cachedCanvases.getCanvas('pattern-workaround', ie, de); const yt = ve.context; const Bi = P ? Math.floor(v / l) : 0; const
        rs = R ? Math.floor(_ / d) : 0;
      for (let Ns = 0; Ns <= Bi; Ns++) for (let Me = 0; Me <= rs; Me++) yt.drawImage(Je, ie * Ns, de * Me, ie, de, 0, 0, ie, de);
      return {
        canvas: ve.canvas,
        scaleX: rt.scale,
        scaleY: ht.scale,
        offsetX: u,
        offsetY: p,
      };
    }
    return {
      canvas: B.canvas,
      scaleX: I.scale,
      scaleY: j.scale,
      offsetX: u,
      offsetY: p,
    };
  }

  getSizeAndScale(t, e, i) {
    const s = Math.max(ku.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * i);
    return r >= s ? r = s : i = r / t, {
      scale: i,
      size: r,
    };
  }

  clipBbox(t, e, i, s, r) {
    const a = s - e; const
      o = r - i;
    t.ctx.rect(e, i, a, o), U.axialAlignedBoundingBox([e, i, s, r], Ft(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }

  setFillAndStrokeStyleToContext(t, e, i) {
    const s = t.ctx; const
      r = t.current;
    switch (e) {
      case xg.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o,
        } = this.ctx;
        s.fillStyle = r.fillColor = a, s.strokeStyle = r.strokeColor = o;
        break;
      case xg.UNCOLORED:
        s.fillStyle = s.strokeStyle = i, r.fillColor = r.strokeColor = i;
        break;
      default:
        throw new Qy(`Unsupported paint type: ${e}`);
    }
  }

  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern(t, e, i, s, r) {
    let a = i;
    s !== ye.SHADING && (a = U.transform(a, e.baseTransform), this.matrix && (a = U.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let h = new DOMMatrix(a);
    h = h.translate(o.offsetX, o.offsetY), h = h.scale(1 / o.scaleX, 1 / o.scaleY);
    const l = t.createPattern(o.canvas, 'repeat');
    return l.setTransform(h), l;
  }
};
M(ku, 'MAX_PATTERN_SIZE', 3e3);
const Uf = ku;
function Mw({
  src: c,
  srcPos: t = 0,
  dest: e,
  width: i,
  height: s,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1,
}) {
  const o = ce.isLittleEndian ? 4278190080 : 255; const [h, l] = a ? [r, o] : [o, r]; const d = i >> 3; const u = i & 7; const
    p = c.length;
  e = new Uint32Array(e.buffer);
  let y = 0;
  for (let S = 0; S < s; S++) {
    for (const _ = t + d; t < _; t++) {
      const x = t < p ? c[t] : 255;
      e[y++] = x & 128 ? l : h, e[y++] = x & 64 ? l : h, e[y++] = x & 32 ? l : h, e[y++] = x & 16 ? l : h, e[y++] = x & 8 ? l : h, e[y++] = x & 4 ? l : h, e[y++] = x & 2 ? l : h, e[y++] = x & 1 ? l : h;
    }
    if (u === 0) continue;
    const v = t < p ? c[t++] : 255;
    for (let _ = 0; _ < u; _++) e[y++] = v & 1 << 7 - _ ? l : h;
  }
  return {
    srcPos: t,
    destPos: y,
  };
}
const Eg = 16; const _g = 100; const Lw = 15; const Cg = 10; const Ke = 16; const af = new DOMMatrix(); const yi = new Float32Array(2); const
  co = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function Iw(c, t) {
  if (c._removeMirroring) throw new Error('Context is already forwarding operations.');
  c.__originalSave = c.save, c.__originalRestore = c.restore, c.__originalRotate = c.rotate, c.__originalScale = c.scale, c.__originalTranslate = c.translate, c.__originalTransform = c.transform, c.__originalSetTransform = c.setTransform, c.__originalResetTransform = c.resetTransform, c.__originalClip = c.clip, c.__originalMoveTo = c.moveTo, c.__originalLineTo = c.lineTo, c.__originalBezierCurveTo = c.bezierCurveTo, c.__originalRect = c.rect, c.__originalClosePath = c.closePath, c.__originalBeginPath = c.beginPath, c._removeMirroring = () => {
    c.save = c.__originalSave, c.restore = c.__originalRestore, c.rotate = c.__originalRotate, c.scale = c.__originalScale, c.translate = c.__originalTranslate, c.transform = c.__originalTransform, c.setTransform = c.__originalSetTransform, c.resetTransform = c.__originalResetTransform, c.clip = c.__originalClip, c.moveTo = c.__originalMoveTo, c.lineTo = c.__originalLineTo, c.bezierCurveTo = c.__originalBezierCurveTo, c.rect = c.__originalRect, c.closePath = c.__originalClosePath, c.beginPath = c.__originalBeginPath, delete c._removeMirroring;
  }, c.save = function () {
    t.save(), this.__originalSave();
  }, c.restore = function () {
    t.restore(), this.__originalRestore();
  }, c.translate = function (e, i) {
    t.translate(e, i), this.__originalTranslate(e, i);
  }, c.scale = function (e, i) {
    t.scale(e, i), this.__originalScale(e, i);
  }, c.transform = function (e, i, s, r, a, o) {
    t.transform(e, i, s, r, a, o), this.__originalTransform(e, i, s, r, a, o);
  }, c.setTransform = function (e, i, s, r, a, o) {
    t.setTransform(e, i, s, r, a, o), this.__originalSetTransform(e, i, s, r, a, o);
  }, c.resetTransform = function () {
    t.resetTransform(), this.__originalResetTransform();
  }, c.rotate = function (e) {
    t.rotate(e), this.__originalRotate(e);
  }, c.clip = function (e) {
    t.clip(e), this.__originalClip(e);
  }, c.moveTo = function (e, i) {
    t.moveTo(e, i), this.__originalMoveTo(e, i);
  }, c.lineTo = function (e, i) {
    t.lineTo(e, i), this.__originalLineTo(e, i);
  }, c.bezierCurveTo = function (e, i, s, r, a, o) {
    t.bezierCurveTo(e, i, s, r, a, o), this.__originalBezierCurveTo(e, i, s, r, a, o);
  }, c.rect = function (e, i, s, r) {
    t.rect(e, i, s, r), this.__originalRect(e, i, s, r);
  }, c.closePath = function () {
    t.closePath(), this.__originalClosePath();
  }, c.beginPath = function () {
    t.beginPath(), this.__originalBeginPath();
  };
}
class Fw {
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
function Rd(c, t, e, i, s, r, a, o, h, l) {
  const [d, u, p, y, S, v] = Ft(c);
  if (u === 0 && p === 0) {
    const T = a * d + S; const E = Math.round(T); const f = o * y + v; const m = Math.round(f); const A = (a + h) * d + S; const C = Math.abs(Math.round(A) - E) || 1; const P = (o + l) * y + v; const
      R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(Math.sign(d), 0, 0, Math.sign(y), E, m), c.drawImage(t, e, i, s, r, 0, 0, C, R), c.setTransform(d, u, p, y, S, v), [C, R];
  }
  if (d === 0 && y === 0) {
    const T = o * p + S; const E = Math.round(T); const f = a * u + v; const m = Math.round(f); const A = (o + l) * p + S; const C = Math.abs(Math.round(A) - E) || 1; const P = (a + h) * u + v; const
      R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(0, Math.sign(u), Math.sign(p), 0, E, m), c.drawImage(t, e, i, s, r, 0, 0, R, C), c.setTransform(d, u, p, y, S, v), [R, C];
  }
  c.drawImage(t, e, i, s, r, a, o, h, l);
  const _ = Math.hypot(d, u); const
    x = Math.hypot(p, y);
  return [_ * h, x * l];
}
class Tg {
  constructor(t, e, i) {
    M(this, 'alphaIsShape', !1);
    M(this, 'fontSize', 0);
    M(this, 'fontSizeScale', 1);
    M(this, 'textMatrix', null);
    M(this, 'textMatrixScale', 1);
    M(this, 'fontMatrix', ff);
    M(this, 'leading', 0);
    M(this, 'x', 0);
    M(this, 'y', 0);
    M(this, 'lineX', 0);
    M(this, 'lineY', 0);
    M(this, 'charSpacing', 0);
    M(this, 'wordSpacing', 0);
    M(this, 'textHScale', 1);
    M(this, 'textRenderingMode', ue.FILL);
    M(this, 'textRise', 0);
    M(this, 'fillColor', '#000000');
    M(this, 'strokeColor', '#000000');
    M(this, 'patternFill', !1);
    M(this, 'patternStroke', !1);
    M(this, 'fillAlpha', 1);
    M(this, 'strokeAlpha', 1);
    M(this, 'lineWidth', 1);
    M(this, 'activeSMask', null);
    M(this, 'transferMaps', 'none');
    i == null || i(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = co.slice();
  }

  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }

  getPathBoundingBox(t = ye.FILL, e = null) {
    const i = this.minMax.slice();
    if (t === ye.STROKE) {
      e || Et('Stroke bounding box must include transform.'), U.singularValueDecompose2dScale(e, yi);
      const s = yi[0] * this.lineWidth / 2; const
        r = yi[1] * this.lineWidth / 2;
      i[0] -= s, i[1] -= r, i[2] += s, i[3] += r;
    }
    return i;
  }

  updateClipFromPath() {
    const t = U.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }

  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }

  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(co, 0);
  }

  getClippedPathBoundingBox(t = ye.FILL, e = null) {
    return U.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Pg(c, t) {
  if (t instanceof ImageData) {
    c.putImageData(t, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const s = e % Ke; const r = (e - s) / Ke; const a = s === 0 ? r : r + 1; const
    o = c.createImageData(i, Ke);
  let h = 0; let
    l;
  const d = t.data; const
    u = o.data;
  let p; let y; let S; let
    v;
  if (t.kind === xl.GRAYSCALE_1BPP) {
    const _ = d.byteLength; const x = new Uint32Array(u.buffer, 0, u.byteLength >> 2); const T = x.length; const E = i + 7 >> 3; const f = 4294967295; const
      m = ce.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (S = p < r ? Ke : s, l = 0, y = 0; y < S; y++) {
        const A = _ - h;
        let C = 0;
        const P = A > E ? i : A * 8 - 7; const
          R = P & -8;
        let D = 0; let
          k = 0;
        for (; C < R; C += 8) k = d[h++], x[l++] = k & 128 ? f : m, x[l++] = k & 64 ? f : m, x[l++] = k & 32 ? f : m, x[l++] = k & 16 ? f : m, x[l++] = k & 8 ? f : m, x[l++] = k & 4 ? f : m, x[l++] = k & 2 ? f : m, x[l++] = k & 1 ? f : m;
        for (; C < P; C++) D === 0 && (k = d[h++], D = 128), x[l++] = k & D ? f : m, D >>= 1;
      }
      for (; l < T;) x[l++] = 0;
      c.putImageData(o, 0, p * Ke);
    }
  } else if (t.kind === xl.RGBA_32BPP) {
    for (y = 0, v = i * Ke * 4, p = 0; p < r; p++) u.set(d.subarray(h, h + v)), h += v, c.putImageData(o, 0, y), y += Ke;
    p < a && (v = i * s * 4, u.set(d.subarray(h, h + v)), c.putImageData(o, 0, y));
  } else if (t.kind === xl.RGB_24BPP) {
    for (S = Ke, v = i * S, p = 0; p < a; p++) {
      for (p >= r && (S = s, v = i * S), l = 0, y = v; y--;) u[l++] = d[h++], u[l++] = d[h++], u[l++] = d[h++], u[l++] = 255;
      c.putImageData(o, 0, p * Ke);
    }
  } else throw new Error(`bad image kind: ${t.kind}`);
}
function Rg(c, t) {
  if (t.bitmap) {
    c.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const s = e % Ke; const r = (e - s) / Ke; const a = s === 0 ? r : r + 1; const
    o = c.createImageData(i, Ke);
  let h = 0;
  const l = t.data; const
    d = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < r ? Ke : s;
    ({
      srcPos: h,
    } = Mw({
      src: l,
      srcPos: h,
      dest: d,
      width: i,
      height: p,
      nonBlackColor: 0,
    })), c.putImageData(o, 0, u * Ke);
  }
}
function Kh(c, t) {
  const e = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'globalCompositeOperation', 'font', 'filter'];
  for (const i of e) c[i] !== void 0 && (t[i] = c[i]);
  c.setLineDash !== void 0 && (t.setLineDash(c.getLineDash()), t.lineDashOffset = c.lineDashOffset);
}
function Dd(c) {
  c.strokeStyle = c.fillStyle = '#000000', c.fillRule = 'nonzero', c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = 'butt', c.lineJoin = 'miter', c.miterLimit = 10, c.globalCompositeOperation = 'source-over', c.font = '10px sans-serif', c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0);
  const {
    filter: t,
  } = c;
  t !== 'none' && t !== '' && (c.filter = 'none');
}
function Dg(c, t) {
  if (t) return !0;
  U.singularValueDecompose2dScale(c, yi);
  const e = Math.fround(ss.pixelRatio * Cn.PDF_TO_CSS_UNITS);
  return yi[0] <= e && yi[1] <= e;
}
const Nw = ['butt', 'round', 'square']; const Ow = ['miter', 'round', 'bevel']; const Bw = {}; const
  kg = {};
let ns; let Gf; let zf; let
  Wf;
const ag = class ag {
  constructor(t, e, i, s, r, {
    optionalContentConfig: a,
    markedContentStack: o = null,
  }, h, l, d) {
    b(this, ns);
    this.ctx = t, this.current = new Tg(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Fw(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = h, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = d ?? null;
  }

  getObject(t, e, i = null) {
    let s;
    return typeof e === 'string' ? ((s = this.dependencyTracker) == null || s.recordNamedDependency(t, e), e.startsWith('g_') ? this.commonObjs.get(e) : this.objs.get(e)) : i;
  }

  beginDrawing({
    transform: t,
    viewport: e,
    transparency: i = !1,
    background: s = null,
  }) {
    const r = this.ctx.canvas.width; const a = this.ctx.canvas.height; const
      o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = s || '#ffffff', this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, i) {
      const h = this.cachedCanvases.getCanvas('transparent', r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = h.canvas, this.ctx = h.context, this.ctx.save(), this.ctx.transform(...Ft(this.compositeCtx));
    }
    this.ctx.save(), Dd(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Ft(this.ctx);
  }

  executeOperatorList(t, e, i, s, r) {
    let x;
    const a = t.argsArray; const
      o = t.fnArray;
    let h = e || 0;
    const l = a.length;
    if (l === h) return h;
    const d = l - h > Cg && typeof i === 'function';
    const u = d ? Date.now() + Lw : 0;
    let p = 0;
    const y = this.commonObjs; const
      S = this.objs;
    let v; let
      _;
    for (; ;) {
      if (s !== void 0 && h === s.nextBreakPoint) return s.breakIt(h, i), h;
      if (!r || r(h)) {
        if (v = o[h], _ = a[h] ?? null, v !== jh.dependency) _ === null ? this[v](h) : this[v](h, ..._);
        else {
          for (const T of _) {
            (x = this.dependencyTracker) == null || x.recordNamedData(T, h);
            const E = T.startsWith('g_') ? y : S;
            if (!E.has(T)) return E.get(T, i), h;
          }
        }
      }
      if (h++, h === l) return h;
      if (d && ++p > Cg) {
        if (Date.now() > u) return i(), h;
        p = 0;
      }
    }
  }

  endDrawing() {
    w(this, ns, Gf).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values()) typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), w(this, ns, zf).call(this);
  }

  _scaleImage(t, e) {
    const i = t.width ?? t.displayWidth; const
      s = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1); let a = Math.max(Math.hypot(e[2], e[3]), 1); let o = i; let h = s; let l = 'prescale1'; let d; let
      u;
    for (; r > 2 && o > 1 || a > 2 && h > 1;) {
      let p = o; let
        y = h;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && h > 1 && (y = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, a /= h / y), d = this.cachedCanvases.getCanvas(l, p, y), u = d.context, u.clearRect(0, 0, p, y), u.drawImage(t, 0, 0, o, h, 0, 0, p, y), t = d.canvas, o = p, h = y, l = l === 'prescale1' ? 'prescale2' : 'prescale1';
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: h,
    };
  }

  _createMaskCanvas(t, e) {
    let D; let
      k;
    const i = this.ctx; const {
      width: s,
      height: r,
    } = e; const a = this.current.fillColor; const o = this.current.patternFill; const
      h = Ft(i);
    let l; let d; let u; let
      p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const L = e.bitmap || e.data.buffer;
      d = JSON.stringify(o ? h : [h.slice(0, 4), a]), l = this._cachedBitmapsMap.get(L), l || (l = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(L, l));
      const N = l.get(d);
      if (N && !o) {
        const I = Math.round(Math.min(h[0], h[2]) + h[4]); const
          j = Math.round(Math.min(h[1], h[3]) + h[5]);
        return (D = this.dependencyTracker) == null || D.recordDependencies(t, Ei.transformAndFill), {
          canvas: N,
          offsetX: I,
          offsetY: j,
        };
      }
      u = N;
    }
    u || (p = this.cachedCanvases.getCanvas('maskCanvas', s, r), Rg(p.context, e));
    let y = U.transform(h, [1 / s, 0, 0, -1 / r, 0, 0]);
    y = U.transform(y, [1, 0, 0, 1, 0, -r]);
    const S = co.slice();
    U.axialAlignedBoundingBox([0, 0, s, r], y, S);
    const [v, _, x, T] = S; const E = Math.round(x - v) || 1; const f = Math.round(T - _) || 1; const m = this.cachedCanvases.getCanvas('fillCanvas', E, f); const A = m.context; const C = v; const
      P = _;
    A.translate(-C, -P), A.transform(...y), u || (u = this._scaleImage(p.canvas, as(A)), u = u.img, l && o && l.set(d, u)), A.imageSmoothingEnabled = Dg(Ft(A), e.interpolate), Rd(A, u, 0, 0, u.width, u.height, 0, 0, s, r), A.globalCompositeOperation = 'source-in';
    const R = U.transform(as(A), [1, 0, 0, 1, -C, -P]);
    return A.fillStyle = o ? a.getPattern(i, this, R, ye.FILL, t) : a, A.fillRect(0, 0, s, r), l && !o && (this.cachedCanvases.delete('fillCanvas'), l.set(d, m.canvas)), (k = this.dependencyTracker) == null || k.recordDependencies(t, Ei.transformAndFill), {
      canvas: m.canvas,
      offsetX: Math.round(C),
      offsetY: Math.round(P),
    };
  }

  setLineWidth(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineWidth', t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }

  setLineCap(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineCap', t), this.ctx.lineCap = Nw[e];
  }

  setLineJoin(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineJoin', t), this.ctx.lineJoin = Ow[e];
  }

  setMiterLimit(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('miterLimit', t), this.ctx.miterLimit = e;
  }

  setDash(t, e, i) {
    let r;
    (r = this.dependencyTracker) == null || r.recordSimpleData('dash', t);
    const s = this.ctx;
    s.setLineDash !== void 0 && (s.setLineDash(e), s.lineDashOffset = i);
  }

  setRenderingIntent(t, e) {
  }

  setFlatness(t, e) {
  }

  setGState(t, e) {
    let i; let s; let r; let a; let
      o;
    for (const [h, l] of e) {
      switch (h) {
        case 'LW':
          this.setLineWidth(t, l);
          break;
        case 'LC':
          this.setLineCap(t, l);
          break;
        case 'LJ':
          this.setLineJoin(t, l);
          break;
        case 'ML':
          this.setMiterLimit(t, l);
          break;
        case 'D':
          this.setDash(t, l[0], l[1]);
          break;
        case 'RI':
          this.setRenderingIntent(t, l);
          break;
        case 'FL':
          this.setFlatness(t, l);
          break;
        case 'Font':
          this.setFont(t, l[0], l[1]);
          break;
        case 'CA':
          (i = this.dependencyTracker) == null || i.recordSimpleData('strokeAlpha', t), this.current.strokeAlpha = l;
          break;
        case 'ca':
          (s = this.dependencyTracker) == null || s.recordSimpleData('fillAlpha', t), this.ctx.globalAlpha = this.current.fillAlpha = l;
          break;
        case 'BM':
          (r = this.dependencyTracker) == null || r.recordSimpleData('globalCompositeOperation', t), this.ctx.globalCompositeOperation = l;
          break;
        case 'SMask':
          (a = this.dependencyTracker) == null || a.recordSimpleData('SMask', t), this.current.activeSMask = l ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case 'TR':
          (o = this.dependencyTracker) == null || o.recordSimpleData('filter', t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(l);
          break;
      }
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
    if (this.inSMaskMode) throw new Error('beginSMaskMode called while already in smask mode');
    const e = this.ctx.canvas.width; const i = this.ctx.canvas.height; const s = `smaskGroupAt${this.groupLevel}`; const
      r = this.cachedCanvases.getCanvas(s, e, i);
    this.suspendedCtx = this.ctx;
    const a = this.ctx = r.context;
    a.setTransform(this.suspendedCtx.getTransform()), Kh(this.suspendedCtx, a), Iw(a, this.suspendedCtx), this.setGState(t, [['BM', 'source-over']]);
  }

  endSMaskMode() {
    if (!this.inSMaskMode) throw new Error('endSMaskMode called while not in smask mode');
    this.ctx._removeMirroring(), Kh(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }

  compose(t) {
    if (!this.current.activeSMask) return;
    t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask; const
      i = this.suspendedCtx;
    this.composeSMask(i, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }

  composeSMask(t, e, i, s) {
    const r = s[0]; const a = s[1]; const o = s[2] - r; const
      h = s[3] - a;
    o === 0 || h === 0 || (this.genericComposeSMask(e.context, i, o, h, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = 'source-over', t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
  }

  genericComposeSMask(t, e, i, s, r, a, o, h, l, d, u) {
    let p = t.canvas; let y = h - d; let
      S = l - u;
    if (a) {
      if (y < 0 || S < 0 || y + i > p.width || S + s > p.height) {
        const _ = this.cachedCanvases.getCanvas('maskExtension', i, s); const
          x = _.context;
        x.drawImage(p, -y, -S), x.globalCompositeOperation = 'destination-atop', x.fillStyle = a, x.fillRect(0, 0, i, s), x.globalCompositeOperation = 'source-over', p = _.canvas, y = S = 0;
      } else {
        t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
        const _ = new Path2D();
        _.rect(y, S, i, s), t.clip(_), t.globalCompositeOperation = 'destination-atop', t.fillStyle = a, t.fillRect(y, S, i, s), t.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), r === 'Alpha' && o ? e.filter = this.filterFactory.addAlphaFilter(o) : r === 'Luminosity' && (e.filter = this.filterFactory.addLuminosityFilter(o));
    const v = new Path2D();
    v.rect(h, l, i, s), e.clip(v), e.globalCompositeOperation = 'destination-in', e.drawImage(p, y, S, i, s, h, l, i, s), e.restore();
  }

  save(t) {
    let i;
    this.inSMaskMode && Kh(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (i = this.dependencyTracker) == null || i.save(t);
  }

  restore(t) {
    let e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Kh(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }

  transform(t, e, i, s, r, a, o) {
    let h;
    (h = this.dependencyTracker) == null || h.recordIncrementalData('transform', t), this.ctx.transform(e, i, s, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }

  constructPath(t, e, i, s) {
    let [r] = i;
    if (!s) {
      r || (r = i[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === jh.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, s[0] - a, s[2] + a, s[1] - a, s[3] + a).recordDependencies(t, ['transform']);
    }
    if (!(r instanceof Path2D)) {
      const a = i[0] = new Path2D();
      for (let o = 0, h = r.length; o < h;) {
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
      }
      r = a;
    }
    U.axialAlignedBoundingBox(s, Ft(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
  }

  closePath(t) {
    this.ctx.closePath();
  }

  stroke(t, e, i = !0) {
    let a;
    const s = this.ctx; const
      r = this.current.strokeColor;
    if (s.globalAlpha = this.current.strokeAlpha, this.contentVisible) {
      if (typeof r === 'object' && (r != null && r.getPattern)) {
        const o = r.isModifyingCurrentTransform() ? s.getTransform() : null;
        if (s.save(), s.strokeStyle = r.getPattern(s, this, as(s), ye.STROKE, t), o) {
          const h = new Path2D();
          h.addPath(e, s.getTransform().invertSelf().multiplySelf(o)), e = h;
        }
        this.rescaleAndStroke(e, !1), s.restore();
      } else this.rescaleAndStroke(e, !0);
    }
    (a = this.dependencyTracker) == null || a.recordDependencies(t, Ei.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(ye.STROKE, Ft(this.ctx))), s.globalAlpha = this.current.fillAlpha;
  }

  closeStroke(t, e) {
    this.stroke(t, e);
  }

  fill(t, e, i = !0) {
    let l; let d; let
      u;
    const s = this.ctx; const r = this.current.fillColor; const
      a = this.current.patternFill;
    let o = !1;
    if (a) {
      const p = r.isModifyingCurrentTransform() ? s.getTransform() : null;
      if ((l = this.dependencyTracker) == null || l.save(t), s.save(), s.fillStyle = r.getPattern(s, this, as(s), ye.FILL, t), p) {
        const y = new Path2D();
        y.addPath(e, s.getTransform().invertSelf().multiplySelf(p)), e = y;
      }
      o = !0;
    }
    const h = this.current.getClippedPathBoundingBox();
    this.contentVisible && h !== null && (this.pendingEOFill ? (s.fill(e, 'evenodd'), this.pendingEOFill = !1) : s.fill(e)), (d = this.dependencyTracker) == null || d.recordDependencies(t, Ei.fill), o && (s.restore(), (u = this.dependencyTracker) == null || u.restore(t)), i && this.consumePath(t, e, h);
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
    let i;
    this.ctx.fill(e), (i = this.dependencyTracker) == null || i.recordDependencies(t, Ei.rawFillPath).recordOperation(t);
  }

  clip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = Bw;
  }

  eoClip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = kg;
  }

  beginText(t) {
    let e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData('sameLineText').resetIncrementalData('moveText', t);
  }

  endText(t) {
    const e = this.pendingTextPaths; const
      i = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: s,
      } = this;
      e !== void 0 && s.recordFutureForcedDependency('textClip', s.getOpenMarker()).recordFutureForcedDependency('textClip', t), s.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const s = new Path2D(); const
        r = i.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: h,
        fontSize: l,
        path: d,
      } of e) d && s.addPath(d, new DOMMatrix(a).preMultiplySelf(r).translate(o, h).scale(l, -l));
      i.clip(s);
    }
    delete this.pendingTextPaths;
  }

  setCharSpacing(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('charSpacing', t), this.current.charSpacing = e;
  }

  setWordSpacing(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('wordSpacing', t), this.current.wordSpacing = e;
  }

  setHScale(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('hScale', t), this.current.textHScale = e / 100;
  }

  setLeading(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('leading', t), this.current.leading = -e;
  }

  setFont(t, e, i) {
    let u; let
      p;
    (u = this.dependencyTracker) == null || u.recordSimpleData('font', t).recordSimpleDataFromNamed('fontObj', e, t);
    const s = this.commonObjs.get(e); const
      r = this.current;
    if (!s) throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = s.fontMatrix || ff, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && X(`Invalid font matrix for font ${e}`), i < 0 ? (i = -i, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font) return;
    const a = s.loadedName || 'sans-serif';
    const o = ((p = s.systemFontInfo) == null ? void 0 : p.css) || `"${a}", ${s.fallbackName}`;
    let h = 'normal';
    s.black ? h = '900' : s.bold && (h = 'bold');
    const l = s.italic ? 'italic' : 'normal';
    let d = i;
    i < Eg ? d = Eg : i > _g && (d = _g), this.current.fontSizeScale = i / d, this.ctx.font = `${l} ${h} ${d}px ${o}`;
  }

  setTextRenderingMode(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('textRenderingMode', t), this.current.textRenderingMode = e;
  }

  setTextRise(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('textRise', t), this.current.textRise = e;
  }

  moveText(t, e, i) {
    let s;
    (s = this.dependencyTracker) == null || s.resetIncrementalData('sameLineText').recordIncrementalData('moveText', t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
  }

  setLeadingMoveText(t, e, i) {
    this.setLeading(t, -i), this.moveText(t, e, i);
  }

  setTextMatrix(t, e) {
    let s;
    (s = this.dependencyTracker) == null || s.recordSimpleData('textMatrix', t);
    const {
      current: i,
    } = this;
    i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
  }

  nextLine(t) {
    let e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData('moveText', this.dependencyTracker.getSimpleIndex('leading') ?? t);
  }

  paintChar(t, e, i, s, r, a) {
    let x; let T; let E; let
      f;
    const o = this.ctx; const h = this.current; const l = h.font; const d = h.textRenderingMode; const u = h.fontSize / h.fontSizeScale; const p = d & ue.FILL_STROKE_MASK; const y = !!(d & ue.ADD_TO_PATH_FLAG); const S = h.patternFill && !l.missingFile; const
      v = h.patternStroke && !l.missingFile;
    let _;
    if ((l.disableFontFace || y || S || v) && !l.missingFile && (_ = l.getPathGenerator(this.commonObjs, e)), _ && (l.disableFontFace || S || v)) {
      o.save(), o.translate(i, s), o.scale(u, -u), (x = this.dependencyTracker) == null || x.recordCharacterBBox(t, o, l);
      let m;
      if (p === ue.FILL || p === ue.FILL_STROKE) {
        if (r) {
          m = o.getTransform(), o.setTransform(...r);
          const A = w(this, ns, Wf).call(this, _, m, r);
          o.fill(A);
        } else o.fill(_);
      }
      if (p === ue.STROKE || p === ue.FILL_STROKE) {
        if (a) {
          m || (m = o.getTransform()), o.setTransform(...a);
          const {
            a: A,
            b: C,
            c: P,
            d: R,
          } = m; const D = U.inverseTransform(a); const
            k = U.transform([A, C, P, R, 0, 0], D);
          U.singularValueDecompose2dScale(k, yi), o.lineWidth *= Math.max(yi[0], yi[1]) / u, o.stroke(w(this, ns, Wf).call(this, _, m, a));
        } else o.lineWidth /= u, o.stroke(_);
      }
      o.restore();
    } else (p === ue.FILL || p === ue.FILL_STROKE) && (o.fillText(e, i, s), (T = this.dependencyTracker) == null || T.recordCharacterBBox(t, o, l, u, i, s, () => o.measureText(e))), (p === ue.STROKE || p === ue.FILL_STROKE) && (this.dependencyTracker && ((E = this.dependencyTracker) == null || E.recordCharacterBBox(t, o, l, u, i, s, () => o.measureText(e)).recordDependencies(t, Ei.stroke)), o.strokeText(e, i, s));
    y && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Ft(o),
      x: i,
      y: s,
      fontSize: u,
      path: _,
    }), (f = this.dependencyTracker) == null || f.recordCharacterBBox(t, o, l, u, i, s));
  }

  get isFontSubpixelAAEnabled() {
    const {
      context: t,
    } = this.cachedCanvases.getCanvas('isFontSubpixelAAEnabled', 10, 10);
    t.scale(1.5, 1), t.fillText('I', 0, 10);
    const e = t.getImageData(0, 0, 10, 10).data;
    let i = !1;
    for (let s = 3; s < e.length; s += 4) {
      if (e[s] > 0 && e[s] < 255) {
        i = !0;
        break;
      }
    }
    return J(this, 'isFontSubpixelAAEnabled', i);
  }

  showText(t, e) {
    let P; let R; let D; let
      k;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, Ei.showText).resetBBox(t), this.current.textRenderingMode & ue.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency('textClip', t).inheritPendingDependenciesAsFutureForcedDependencies());
    const i = this.current; const
      s = i.font;
    if (s.isType3Font) {
      this.showType3Text(t, e), (P = this.dependencyTracker) == null || P.recordShowTextOperation(t);
      return;
    }
    const r = i.fontSize;
    if (r === 0) {
      (R = this.dependencyTracker) == null || R.recordOperation(t);
      return;
    }
    const a = this.ctx; const o = i.fontSizeScale; const h = i.charSpacing; const l = i.wordSpacing; const d = i.fontDirection; const u = i.textHScale * d; const p = e.length; const y = s.vertical; const S = y ? 1 : -1; const v = s.defaultVMetrics; const _ = r * i.fontMatrix[0]; const
      x = i.textRenderingMode === ue.FILL && !s.disableFontFace && !i.patternFill;
    a.save(), i.textMatrix && a.transform(...i.textMatrix), a.translate(i.x, i.y + i.textRise), d > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let T; let
      E;
    if (i.patternFill) {
      a.save();
      const L = i.fillColor.getPattern(a, this, as(a), ye.FILL, t);
      T = Ft(a), a.restore(), a.fillStyle = L;
    }
    if (i.patternStroke) {
      a.save();
      const L = i.strokeColor.getPattern(a, this, as(a), ye.STROKE, t);
      E = Ft(a), a.restore(), a.strokeStyle = L;
    }
    let f = i.lineWidth;
    const m = i.textMatrixScale;
    if (m === 0 || f === 0) {
      const L = i.textRenderingMode & ue.FILL_STROKE_MASK;
      (L === ue.STROKE || L === ue.FILL_STROKE) && (f = this.getSinglePixelWidth());
    } else f /= m;
    if (o !== 1 && (a.scale(o, o), f /= o), a.lineWidth = f, s.isInvalidPDFjsFont) {
      const L = [];
      let N = 0;
      for (const j of e) L.push(j.unicode), N += j.width;
      const I = L.join('');
      if (a.fillText(I, 0, 0), this.dependencyTracker !== null) {
        const j = a.measureText(I);
        this.dependencyTracker.recordBBox(t, this.ctx, -j.actualBoundingBoxLeft, j.actualBoundingBoxRight, -j.actualBoundingBoxAscent, j.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      i.x += N * _ * u, a.restore(), this.compose();
      return;
    }
    let A = 0; let
      C;
    for (C = 0; C < p; ++C) {
      const L = e[C];
      if (typeof L === 'number') {
        A += S * L * r / 1e3;
        continue;
      }
      let N = !1;
      const I = (L.isSpace ? l : 0) + h; const j = L.fontChar; const
        B = L.accent;
      let O; let tt; let
        st = L.width;
      if (y) {
        const rt = L.vmetric || v; const ht = -(L.vmetric ? rt[1] : st * 0.5) * _; const
          ie = rt[2] * _;
        st = rt ? -rt[0] : st, O = ht / o, tt = (A + ie) / o;
      } else O = A / o, tt = 0;
      let ee;
      if (s.remeasure && st > 0) {
        ee = a.measureText(j);
        const rt = ee.width * 1e3 / r * o;
        if (st < rt && this.isFontSubpixelAAEnabled) {
          const ht = st / rt;
          N = !0, a.save(), a.scale(ht, 1), O /= ht;
        } else st !== rt && (O += (st - rt) / 2e3 * r / o);
      }
      if (this.contentVisible && (L.isInFont || s.missingFile)) {
        if (x && !B) {
          a.fillText(j, O, tt), (D = this.dependencyTracker) == null || D.recordCharacterBBox(t, a, ee ? {
            bbox: null,
          } : s, r / o, O, tt, () => ee ?? a.measureText(j));
        } else if (this.paintChar(t, j, O, tt, T, E), B) {
          const rt = O + r * B.offset.x / o; const
            ht = tt - r * B.offset.y / o;
          this.paintChar(t, B.fontChar, rt, ht, T, E);
        }
      }
      const Je = y ? st * _ - I * d : st * _ + I * d;
      A += Je, N && a.restore();
    }
    y ? i.y -= A : i.x += A * u, a.restore(), this.compose(), (k = this.dependencyTracker) == null || k.recordShowTextOperation(t);
  }

  showType3Text(t, e) {
    const i = this.ctx; const s = this.current; const r = s.font; const a = s.fontSize; const o = s.fontDirection; const h = r.vertical ? 1 : -1; const l = s.charSpacing; const d = s.wordSpacing; const u = s.textHScale * o; const p = s.fontMatrix || ff; const y = e.length; const
      S = s.textRenderingMode === ue.INVISIBLE;
    let v; let _; let x; let
      T;
    if (S || a === 0) return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(u, o);
    const E = this.dependencyTracker;
    for (this.dependencyTracker = E ? new pu(E, t) : null, v = 0; v < y; ++v) {
      if (_ = e[v], typeof _ === 'number') {
        T = h * _ * a / 1e3, this.ctx.translate(T, 0), s.x += T * u;
        continue;
      }
      const f = (_.isSpace ? d : 0) + l; const
        m = r.charProcOperatorList[_.operatorListId];
      m ? this.contentVisible && (this.save(), i.scale(a, a), i.transform(...p), this.executeOperatorList(m), this.restore()) : X(`Type3 character "${_.operatorListId}" is not available.`);
      const A = [_.width, 0];
      U.applyTransform(A, p), x = A[0] * a + f, i.translate(x, 0), s.x += x * u;
    }
    i.restore(), E && (this.dependencyTracker = E);
  }

  setCharWidth(t, e, i) {
  }

  setCharWidthAndBounds(t, e, i, s, r, a, o) {
    let l;
    const h = new Path2D();
    h.rect(s, r, a - s, o - r), this.ctx.clip(h), (l = this.dependencyTracker) == null || l.recordBBox(t, this.ctx, s, a, r, o).recordClipBox(t, this.ctx, s, a, r, o), this.endPath(t);
  }

  getColorN_Pattern(t, e) {
    let i;
    if (e[0] === 'TilingPattern') {
      const s = this.baseTransform || Ft(this.ctx); const
        r = {
          createCanvasGraphics: (a, o) => new ag(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack,
          }, void 0, void 0, this.dependencyTracker ? new pu(this.dependencyTracker, o, !0) : null),
        };
      i = new Uf(e, this.ctx, r, s);
    } else i = this._getPattern(t, e[1], e[2]);
    return i;
  }

  setStrokeColorN(t, ...e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('strokeColor', t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }

  setFillColorN(t, ...e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('fillColor', t), this.current.fillColor = this.getColorN_Pattern(t, e), this.current.patternFill = !0;
  }

  setStrokeRGBColor(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('strokeColor', t), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
  }

  setStrokeTransparent(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordSimpleData('strokeColor', t), this.ctx.strokeStyle = this.current.strokeColor = 'transparent', this.current.patternStroke = !1;
  }

  setFillRGBColor(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('fillColor', t), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
  }

  setFillTransparent(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordSimpleData('fillColor', t), this.ctx.fillStyle = this.current.fillColor = 'transparent', this.current.patternFill = !1;
  }

  _getPattern(t, e, i = null) {
    let s;
    return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = kw(this.getObject(t, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
  }

  shadingFill(t, e) {
    let a;
    if (!this.contentVisible) return;
    const i = this.ctx;
    this.save(t);
    const s = this._getPattern(t, e);
    i.fillStyle = s.getPattern(i, this, as(i), ye.SHADING, t);
    const r = as(i);
    if (r) {
      const {
        width: o,
        height: h,
      } = i.canvas; const
        l = co.slice();
      U.axialAlignedBoundingBox([0, 0, o, h], r, l);
      const [d, u, p, y] = l;
      this.ctx.fillRect(d, u, p - d, y - u);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, Ei.transform).recordDependencies(t, Ei.fill)
      .recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t);
  }

  beginInlineImage() {
    Et('Should not call beginInlineImage');
  }

  beginImageData() {
    Et('Should not call beginImageData');
  }

  paintFormXObjectBegin(t, e, i) {
    let s;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = Ft(this.ctx), i)) {
      U.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
      const [r, a, o, h] = i; const
        l = new Path2D();
      l.rect(r, a, o - r, h - a), this.ctx.clip(l), (s = this.dependencyTracker) == null || s.recordClipBox(t, this.ctx, r, o, a, h), this.endPath(t);
    }
  }

  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }

  beginGroup(t, e) {
    let E;
    if (!this.contentVisible) return;
    this.save(t), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const i = this.ctx;
    e.isolated || zu('TODO: Support non-isolated groups.'), e.knockout && X('Knockout groups not supported.');
    const s = Ft(i);
    if (e.matrix && i.transform(...e.matrix), !e.bbox) throw new Error('Bounding box is required.');
    let r = co.slice();
    U.axialAlignedBoundingBox(e.bbox, Ft(i), r);
    const a = [0, 0, i.canvas.width, i.canvas.height];
    r = U.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]); const h = Math.floor(r[1]); const l = Math.max(Math.ceil(r[2]) - o, 1); const
      d = Math.max(Math.ceil(r[3]) - h, 1);
    this.current.startNewPathAndClipBox([0, 0, l, d]);
    let u = `groupAt${this.groupLevel}`;
    e.smask && (u += `_smask_${this.smaskCounter++ % 2}`);
    const p = this.cachedCanvases.getCanvas(u, l, d); const
      y = p.context;
    y.translate(-o, -h), y.transform(...s);
    let S = new Path2D();
    const [v, _, x, T] = e.bbox;
    if (S.rect(v, _, x - v, T - _), e.matrix) {
      const f = new Path2D();
      f.addPath(S, new DOMMatrix(e.matrix)), S = f;
    }
    y.clip(S), e.smask && this.smaskStack.push({
      canvas: p.canvas,
      context: y,
      offsetX: o,
      offsetY: h,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null,
    }), (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(o, h), i.save()), Kh(i, y), this.ctx = y, (E = this.dependencyTracker) == null || E.inheritSimpleDataAsFutureForcedDependencies(['fillAlpha', 'strokeAlpha', 'globalCompositeOperation']).pushBaseTransform(i), this.setGState(t, [['BM', 'source-over'], ['ca', 1], ['CA', 1]]), this.groupStack.push(i), this.groupLevel++;
  }

  endGroup(t, e) {
    let r;
    if (!this.contentVisible) return;
    this.groupLevel--;
    const i = this.ctx; const
      s = this.groupStack.pop();
    if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, (r = this.dependencyTracker) == null || r.popBaseTransform(), e.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && this.ctx.restore();
    else {
      this.ctx.restore();
      const a = Ft(this.ctx);
      this.restore(t), this.ctx.save(), this.ctx.setTransform(...a);
      const o = co.slice();
      U.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], a, o), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }

  beginAnnotation(t, e, i, s, r, a) {
    if (w(this, ns, Gf).call(this), Dd(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
      const o = i[2] - i[0]; const
        h = i[3] - i[1];
      if (a && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= i[0], s[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = o, i[3] = h, U.singularValueDecompose2dScale(Ft(this.ctx), yi);
        const {
          viewportScale: l,
        } = this; const d = Math.ceil(o * this.outputScaleX * l); const
          u = Math.ceil(h * this.outputScaleY * l);
        this.annotationCanvas = this.canvasFactory.create(d, u);
        const {
          canvas: p,
          context: y,
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(yi[0], 0, 0, -yi[1], 0, h * yi[1]), Dd(this.ctx);
      } else {
        Dd(this.ctx), this.endPath(t);
        const l = new Path2D();
        l.rect(i[0], i[1], o, h), this.ctx.clip(l);
      }
    }
    this.current = new Tg(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...s), this.transform(t, ...r);
  }

  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), w(this, ns, zf).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }

  paintImageMaskXObject(t, e) {
    let o;
    if (!this.contentVisible) return;
    const i = e.count;
    e = this.getObject(t, e.data, e), e.count = i;
    const s = this.ctx; const r = this._createMaskCanvas(t, e); const
      a = r.canvas;
    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(a, r.offsetX, r.offsetY), (o = this.dependencyTracker) == null || o.resetBBox(t).recordBBox(t, this.ctx, r.offsetX, r.offsetX + a.width, r.offsetY, r.offsetY + a.height).recordOperation(t), s.restore(), this.compose();
  }

  paintImageMaskXObjectRepeat(t, e, i, s = 0, r = 0, a, o) {
    let u; let p; let
      y;
    if (!this.contentVisible) return;
    e = this.getObject(t, e.data, e);
    const h = this.ctx;
    h.save();
    const l = Ft(h);
    h.transform(i, s, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    h.setTransform(1, 0, 0, 1, d.offsetX - l[4], d.offsetY - l[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let S = 0, v = o.length; S < v; S += 2) {
      const _ = U.transform(l, [i, s, r, a, o[S], o[S + 1]]);
      h.drawImage(d.canvas, _[4], _[5]), (p = this.dependencyTracker) == null || p.recordBBox(t, this.ctx, _[4], _[4] + d.canvas.width, _[5], _[5] + d.canvas.height);
    }
    h.restore(), this.compose(), (y = this.dependencyTracker) == null || y.recordOperation(t);
  }

  paintImageMaskXObjectGroup(t, e) {
    let a; let o; let
      h;
    if (!this.contentVisible) return;
    const i = this.ctx; const s = this.current.fillColor; const
      r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, Ei.transformAndFill);
    for (const l of e) {
      const {
        data: d,
        width: u,
        height: p,
        transform: y,
      } = l; const S = this.cachedCanvases.getCanvas('maskCanvas', u, p); const
        v = S.context;
      v.save();
      const _ = this.getObject(t, d, l);
      Rg(v, _), v.globalCompositeOperation = 'source-in', v.fillStyle = r ? s.getPattern(v, this, as(i), ye.FILL, t) : s, v.fillRect(0, 0, u, p), v.restore(), i.save(), i.transform(...y), i.scale(1, -1), Rd(i, S.canvas, 0, 0, u, p, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, u, 0, p), i.restore();
    }
    this.compose(), (h = this.dependencyTracker) == null || h.recordOperation(t);
  }

  paintImageXObject(t, e) {
    if (!this.contentVisible) return;
    const i = this.getObject(t, e);
    if (!i) {
      X("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, i);
  }

  paintImageXObjectRepeat(t, e, i, s, r) {
    if (!this.contentVisible) return;
    const a = this.getObject(t, e);
    if (!a) {
      X("Dependent image isn't ready yet");
      return;
    }
    const o = a.width; const h = a.height; const
      l = [];
    for (let d = 0, u = r.length; d < u; d += 2) {
      l.push({
        transform: [i, 0, 0, s, r[d], r[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h,
      });
    }
    this.paintInlineImageXObjectGroup(t, a, l);
  }

  applyTransferMapsToCanvas(t) {
    return this.current.transferMaps !== 'none' && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = 'none'), t.canvas;
  }

  applyTransferMapsToBitmap(t) {
    if (this.current.transferMaps === 'none') return t.bitmap;
    const {
      bitmap: e,
      width: i,
      height: s,
    } = t; const r = this.cachedCanvases.getCanvas('inlineImage', i, s); const
      a = r.context;
    return a.filter = this.current.transferMaps, a.drawImage(e, 0, 0), a.filter = 'none', r.canvas;
  }

  paintInlineImageXObject(t, e) {
    let l;
    if (!this.contentVisible) return;
    const i = e.width; const s = e.height; const
      r = this.ctx;
    this.save(t);
    const {
      filter: a,
    } = r;
    a !== 'none' && a !== '' && (r.filter = 'none'), r.scale(1 / i, -1 / s);
    let o;
    if (e.bitmap) o = this.applyTransferMapsToBitmap(e);
    else if (typeof HTMLElement === 'function' && e instanceof HTMLElement || !e.data) o = e;
    else {
      const u = this.cachedCanvases.getCanvas('inlineImage', i, s).context;
      Pg(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const h = this._scaleImage(o, as(r));
    r.imageSmoothingEnabled = Dg(Ft(r), e.interpolate), (l = this.dependencyTracker) == null || l.resetBBox(t).recordBBox(t, r, 0, i, -s, 0).recordDependencies(t, Ei.imageXObject).recordOperation(t), Rd(r, h.img, 0, 0, h.paintWidth, h.paintHeight, 0, -s, i, s), this.compose(), this.restore(t);
  }

  paintInlineImageXObjectGroup(t, e, i) {
    let a; let o; let
      h;
    if (!this.contentVisible) return;
    const s = this.ctx;
    let r;
    if (e.bitmap) r = e.bitmap;
    else {
      const l = e.width; const d = e.height; const
        p = this.cachedCanvases.getCanvas('inlineImage', l, d).context;
      Pg(p, e), r = this.applyTransferMapsToCanvas(p);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const l of i) s.save(), s.transform(...l.transform), s.scale(1, -1), Rd(s, r, l.x, l.y, l.w, l.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, 1, -1, 0), s.restore();
    (h = this.dependencyTracker) == null || h.recordOperation(t), this.compose();
  }

  paintSolidColorImageMask(t) {
    let e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, Ei.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }

  markPoint(t, e) {
  }

  markPointProps(t, e, i) {
  }

  beginMarkedContent(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0,
    });
  }

  beginMarkedContentProps(t, e, i) {
    let s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), e === 'OC' ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(i),
    }) : this.markedContentStack.push({
      visible: !0,
    }), this.contentVisible = this.isContentVisible();
  }

  endMarkedContent(t) {
    let e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }

  beginCompat(t) {
  }

  endCompat(t) {
  }

  consumePath(t, e, i) {
    let a; let
      o;
    const s = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
    const r = this.ctx;
    this.pendingClip ? (s || (this.pendingClip === kg ? r.clip(e, 'evenodd') : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency('clipPath', t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }

  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = Ft(this.ctx);
      if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]); const i = Math.hypot(t[0], t[2]); const
          s = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }

  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t,
      } = this.current; const
        {
          a: e,
          b: i,
          c: s,
          d: r,
        } = this.ctx.getTransform();
      let a; let
        o;
      if (i === 0 && s === 0) {
        const h = Math.abs(e); const
          l = Math.abs(r);
        if (h === l) {
          if (t === 0) a = o = 1 / h;
          else {
            const d = h * t;
            a = o = d < 1 ? 1 / d : 1;
          }
        } else if (t === 0) a = 1 / h, o = 1 / l;
        else {
          const d = h * t; const
            u = l * t;
          a = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const h = Math.abs(e * r - i * s); const l = Math.hypot(e, i); const
          d = Math.hypot(s, r);
        if (t === 0) a = d / h, o = l / h;
        else {
          const u = t * h;
          a = d > u ? d / u : 1, o = l > u ? l / u : 1;
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
        lineWidth: s,
      },
    } = this; const
      [r, a] = this.getScaleForStroking();
    if (r === a) {
      i.lineWidth = (s || 1) * r, i.stroke(t);
      return;
    }
    const o = i.getLineDash();
    e && i.save(), i.scale(r, a), af.a = 1 / r, af.d = 1 / a;
    const h = new Path2D();
    if (h.addPath(t, af), o.length > 0) {
      const l = Math.max(r, a);
      i.setLineDash(o.map((d) => d / l)), i.lineDashOffset /= l;
    }
    i.lineWidth = s || 1, i.stroke(h), e && i.restore();
  }

  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
    return !0;
  }
};
ns = new WeakSet(), Gf = function () {
  for (; this.stateStack.length || this.inSMaskMode;) this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, zf = function () {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== 'none') {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Wf = function (t, e, i) {
  const s = new Path2D();
  return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
};
const mo = ag;
for (const c in jh) mo.prototype[c] !== void 0 && (mo.prototype[jh[c]] = mo.prototype[c]);
let Vo; let qo; let lc; let Xo; let
  Ud;
const fo = class fo {
  constructor(t) {
    b(this, Xo);
    b(this, Vo);
    b(this, qo);
    b(this, lc);
    g(this, Vo, t), g(this, qo, new DataView(n(this, Vo))), g(this, lc, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let s = 0;
    for (const l of fo.strings) {
      const d = e.encode(t[l]);
      i[l] = d, s += 4 + d.length;
    }
    const r = new ArrayBuffer(s); const a = new Uint8Array(r); const
      o = new DataView(r);
    let h = 0;
    for (const l of fo.strings) {
      const d = i[l]; const
        u = d.length;
      o.setUint32(h, u), a.set(d, h + 4), h += 4 + u;
    }
    return nt(h === r.byteLength, 'CssFontInfo.write: Buffer overflow'), r;
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
Vo = new WeakMap(), qo = new WeakMap(), lc = new WeakMap(), Xo = new WeakSet(), Ud = function (t) {
  nt(t < fo.strings.length, 'Invalid string index');
  let e = 0;
  for (let s = 0; s < t; s++) e += n(this, qo).getUint32(e) + 4;
  const i = n(this, qo).getUint32(e);
  return n(this, lc).decode(new Uint8Array(n(this, Vo), e + 4, i));
}, M(fo, 'strings', ['fontFamily', 'fontWeight', 'italicAngle']);
const gu = fo;
let Jn; let As; let la; let ca; let
  ul;
const po = class po {
  constructor(t) {
    b(this, ca);
    b(this, Jn);
    b(this, As);
    b(this, la);
    g(this, Jn, t), g(this, As, new DataView(n(this, Jn))), g(this, la, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let s = 0;
    for (const p of po.strings) {
      const y = e.encode(t[p]);
      i[p] = y, s += 4 + y.length;
    }
    s += 4;
    let r; let a; let
      o = 1 + s;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const h = new ArrayBuffer(o); const l = new Uint8Array(h); const
      d = new DataView(h);
    let u = 0;
    d.setUint8(u++, t.guessFallback ? 1 : 0), d.setUint32(u, 0), u += 4, s = 0;
    for (const p of po.strings) {
      const y = i[p]; const
        S = y.length;
      s += 4 + S, d.setUint32(u, S), l.set(y, u + 4), u += 4 + S;
    }
    return d.setUint32(u - s - 4, s), t.style && (d.setUint32(u, r.length), l.set(r, u + 4), u += 4 + r.length, d.setUint32(u, a.length), l.set(a, u + 4), u += 4 + a.length), nt(u <= h.byteLength, 'SubstitionInfo.write: Buffer overflow'), h.transferToFixedLength(u);
  }

  get guessFallback() {
    return n(this, As).getUint8(0) !== 0;
  }

  get css() {
    return w(this, ca, ul).call(this, 0);
  }

  get loadedName() {
    return w(this, ca, ul).call(this, 1);
  }

  get baseFontName() {
    return w(this, ca, ul).call(this, 2);
  }

  get src() {
    return w(this, ca, ul).call(this, 3);
  }

  get style() {
    let t = 1;
    t += 4 + n(this, As).getUint32(t);
    const e = n(this, As).getUint32(t); const
      i = n(this, la).decode(new Uint8Array(n(this, Jn), t + 4, e));
    t += 4 + e;
    const s = n(this, As).getUint32(t); const
      r = n(this, la).decode(new Uint8Array(n(this, Jn), t + 4, s));
    return {
      style: i,
      weight: r,
    };
  }
};
Jn = new WeakMap(), As = new WeakMap(), la = new WeakMap(), ca = new WeakSet(), ul = function (t) {
  nt(t < po.strings.length, 'Invalid string index');
  let e = 5;
  for (let s = 0; s < t; s++) e += n(this, As).getUint32(e) + 4;
  const i = n(this, As).getUint32(e);
  return n(this, la).decode(new Uint8Array(n(this, Jn), e + 4, i));
}, M(po, 'strings', ['css', 'loadedName', 'baseFontName', 'src']);
const mu = po;
let Yo; let Ko; let Jo; let Qo; let si; let vs; let cc; let gt; let Gt; let $i; let Gd; let
  fl;
const K = class K {
  constructor({
    data: t,
    extra: e,
  }) {
    b(this, Gt);
    b(this, vs);
    b(this, cc);
    b(this, gt);
    g(this, vs, t), g(this, cc, new TextDecoder()), g(this, gt, new DataView(n(this, vs))), e && Object.assign(this, e);
  }

  get black() {
    return w(this, Gt, $i).call(this, 0);
  }

  get bold() {
    return w(this, Gt, $i).call(this, 1);
  }

  get disableFontFace() {
    return w(this, Gt, $i).call(this, 2);
  }

  get fontExtraProperties() {
    return w(this, Gt, $i).call(this, 3);
  }

  get isInvalidPDFjsFont() {
    return w(this, Gt, $i).call(this, 4);
  }

  get isType3Font() {
    return w(this, Gt, $i).call(this, 5);
  }

  get italic() {
    return w(this, Gt, $i).call(this, 6);
  }

  get missingFile() {
    return w(this, Gt, $i).call(this, 7);
  }

  get remeasure() {
    return w(this, Gt, $i).call(this, 8);
  }

  get vertical() {
    return w(this, Gt, $i).call(this, 9);
  }

  get ascent() {
    return w(this, Gt, Gd).call(this, 0);
  }

  get defaultWidth() {
    return w(this, Gt, Gd).call(this, 1);
  }

  get descent() {
    return w(this, Gt, Gd).call(this, 2);
  }

  get bbox() {
    let t = n(K, Ko);
    if (n(this, gt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 4; s++) i.push(n(this, gt).getInt16(t, !0)), t += 2;
    return i;
  }

  get fontMatrix() {
    let t = n(K, Jo);
    if (n(this, gt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 6; s++) i.push(n(this, gt).getFloat64(t, !0)), t += 8;
    return i;
  }

  get defaultVMetrics() {
    let t = n(K, Qo);
    if (n(this, gt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 3; s++) i.push(n(this, gt).getInt16(t, !0)), t += 2;
    return i;
  }

  get fallbackName() {
    return w(this, Gt, fl).call(this, 0);
  }

  get loadedName() {
    return w(this, Gt, fl).call(this, 1);
  }

  get mimetype() {
    return w(this, Gt, fl).call(this, 2);
  }

  get name() {
    return w(this, Gt, fl).call(this, 3);
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
    if (r !== 0) return new Uint8Array(n(this, vs), t + 4, r);
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
    if (s === 0) return null;
    const r = new Uint8Array(s);
    return r.set(new Uint8Array(n(this, vs), t + 4, s)), new gu(r.buffer);
  }

  get systemFontInfo() {
    let t = n(K, si);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    if (i === 0) return null;
    const s = new Uint8Array(i);
    return s.set(new Uint8Array(n(this, vs), t + 4, i)), new mu(s.buffer);
  }

  static write(t) {
    const e = t.systemFontInfo ? mu.write(t.systemFontInfo) : null; const i = t.cssFontInfo ? gu.write(t.cssFontInfo) : null; const s = new TextEncoder(); const
      r = {};
    let a = 0;
    for (const v of K.strings) r[v] = s.encode(t[v]), a += 4 + r[v].length;
    const o = n(K, si) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t.data ? t.data.length : 0); const h = new ArrayBuffer(o); const l = new Uint8Array(h); const
      d = new DataView(h);
    let u = 0;
    const p = K.bools.length;
    let y = 0; let
      S = 0;
    for (let v = 0; v < p; v++) {
      const _ = t[K.bools[v]];
      y |= (_ === void 0 ? 0 : _ ? 2 : 1) << S, S += 2, (S === 8 || v === p - 1) && (d.setUint8(u++, y), y = 0, S = 0);
    }
    nt(u === n(K, Yo), 'FontInfo.write: Boolean properties offset mismatch');
    for (const v of K.numbers) d.setFloat64(u, t[v]), u += 8;
    if (nt(u === n(K, Ko), 'FontInfo.write: Number properties offset mismatch'), t.bbox) {
      d.setUint8(u++, 4);
      for (const v of t.bbox) d.setInt16(u, v, !0), u += 2;
    } else d.setUint8(u++, 0), u += 8;
    if (nt(u === n(K, Jo), 'FontInfo.write: BBox properties offset mismatch'), t.fontMatrix) {
      d.setUint8(u++, 6);
      for (const v of t.fontMatrix) d.setFloat64(u, v, !0), u += 8;
    } else d.setUint8(u++, 0), u += 48;
    if (nt(u === n(K, Qo), 'FontInfo.write: FontMatrix properties offset mismatch'), t.defaultVMetrics) {
      d.setUint8(u++, 1);
      for (const v of t.defaultVMetrics) d.setInt16(u, v, !0), u += 2;
    } else d.setUint8(u++, 0), u += 6;
    nt(u === n(K, si), 'FontInfo.write: DefaultVMetrics properties offset mismatch'), d.setUint32(n(K, si), 0), u += 4;
    for (const v of K.strings) {
      const _ = r[v]; const
        x = _.length;
      d.setUint32(u, x), l.set(_, u + 4), u += 4 + x;
    }
    if (d.setUint32(n(K, si), u - n(K, si) - 4), !e) d.setUint32(u, 0), u += 4;
    else {
      const v = e.byteLength;
      d.setUint32(u, v), nt(u + 4 + v <= h.byteLength, 'FontInfo.write: Buffer overflow at systemFontInfo'), l.set(new Uint8Array(e), u + 4), u += 4 + v;
    }
    if (!i) d.setUint32(u, 0), u += 4;
    else {
      const v = i.byteLength;
      d.setUint32(u, v), nt(u + 4 + v <= h.byteLength, 'FontInfo.write: Buffer overflow at cssFontInfo'), l.set(new Uint8Array(i), u + 4), u += 4 + v;
    }
    return t.data === void 0 ? (d.setUint32(u, 0), u += 4) : (d.setUint32(u, t.data.length), l.set(t.data, u + 4), u += 4 + t.data.length), nt(u <= h.byteLength, 'FontInfo.write: Buffer overflow'), h.transferToFixedLength(u);
  }
};
Yo = new WeakMap(), Ko = new WeakMap(), Jo = new WeakMap(), Qo = new WeakMap(), si = new WeakMap(), vs = new WeakMap(), cc = new WeakMap(), gt = new WeakMap(), Gt = new WeakSet(), $i = function (t) {
  nt(t < K.bools.length, 'Invalid boolean index');
  const e = Math.floor(t / 4); const i = t * 2 % 8; const
    s = n(this, gt).getUint8(e) >> i & 3;
  return s === 0 ? void 0 : s === 2;
}, Gd = function (t) {
  return nt(t < K.numbers.length, 'Invalid number index'), n(this, gt).getFloat64(n(K, Yo) + t * 8);
}, fl = function (t) {
  nt(t < K.strings.length, 'Invalid string index');
  let e = n(K, si) + 4;
  for (let r = 0; r < t; r++) e += n(this, gt).getUint32(e) + 4;
  const i = n(this, gt).getUint32(e); const
    s = new Uint8Array(i);
  return s.set(new Uint8Array(n(this, vs), e + 4, i)), n(this, cc).decode(s);
}, M(K, 'bools', ['black', 'bold', 'disableFontFace', 'fontExtraProperties', 'isInvalidPDFjsFont', 'isType3Font', 'italic', 'missingFile', 'remeasure', 'vertical']), M(K, 'numbers', ['ascent', 'defaultWidth', 'descent']), M(K, 'strings', ['fallbackName', 'loadedName', 'mimetype', 'name']), b(K, Yo, Math.ceil(K.bools.length * 2 / 8)), b(K, Ko, n(K, Yo) + K.numbers.length * 8), b(K, Jo, n(K, Ko) + 1 + 8), b(K, Qo, n(K, Jo) + 1 + 48), b(K, si, n(K, Qo) + 1 + 6);
const jf = K;
let dc; let
  uc;
class ts {
  static get workerPort() {
    return n(this, dc);
  }

  static set workerPort(t) {
    if (!(typeof Worker < 'u' && t instanceof Worker) && t !== null) throw new Error('Invalid `workerPort` type.');
    g(this, dc, t);
  }

  static get workerSrc() {
    return n(this, uc);
  }

  static set workerSrc(t) {
    if (typeof t !== 'string') throw new Error('Invalid `workerSrc` type.');
    g(this, uc, t);
  }
}
dc = new WeakMap(), uc = new WeakMap(), b(ts, dc, null), b(ts, uc, '');
let Zo; let
  fc;
class Hw {
  constructor({
    parsedData: t,
    rawData: e,
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
const oo = Symbol('INTERNAL');
let pc; let gc; let mc; let
  th;
class $w {
  constructor(t, {
    name: e,
    intent: i,
    usage: s,
    rbGroups: r,
  }) {
    b(this, pc, !1);
    b(this, gc, !1);
    b(this, mc, !1);
    b(this, th, !0);
    g(this, pc, !!(t & bi.DISPLAY)), g(this, gc, !!(t & bi.PRINT)), this.name = e, this.intent = i, this.usage = s, this.rbGroups = r;
  }

  get visible() {
    if (n(this, mc)) return n(this, th);
    if (!n(this, th)) return !1;
    const {
      print: t,
      view: e,
    } = this.usage;
    return n(this, pc) ? (e == null ? void 0 : e.viewState) !== 'OFF' : n(this, gc) ? (t == null ? void 0 : t.printState) !== 'OFF' : !0;
  }

  _setVisible(t, e, i = !1) {
    t !== oo && Et('Internal method `_setVisible` called.'), g(this, mc, i), g(this, th, e);
  }
}
pc = new WeakMap(), gc = new WeakMap(), mc = new WeakMap(), th = new WeakMap();
let Qn; let mt; let eh; let ih; let bc; let
  Vf;
class Uw {
  constructor(t, e = bi.DISPLAY) {
    b(this, bc);
    b(this, Qn, null);
    b(this, mt, /* @__PURE__ */ new Map());
    b(this, eh, null);
    b(this, ih, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, g(this, ih, t.order);
      for (const i of t.groups) n(this, mt).set(i.id, new $w(e, i));
      if (t.baseState === 'OFF') for (const i of n(this, mt).values()) i._setVisible(oo, !1);
      for (const i of t.on) n(this, mt).get(i)._setVisible(oo, !0);
      for (const i of t.off) n(this, mt).get(i)._setVisible(oo, !1);
      g(this, eh, this.getHash());
    }
  }

  isVisible(t) {
    if (n(this, mt).size === 0) return !0;
    if (!t) return zu('Optional content group not defined.'), !0;
    if (t.type === 'OCG') return n(this, mt).has(t.id) ? n(this, mt).get(t.id).visible : (X(`Optional content group not found: ${t.id}`), !0);
    if (t.type === 'OCMD') {
      if (t.expression) return w(this, bc, Vf).call(this, t.expression);
      if (!t.policy || t.policy === 'AnyOn') {
        for (const e of t.ids) {
          if (!n(this, mt).has(e)) return X(`Optional content group not found: ${e}`), !0;
          if (n(this, mt).get(e).visible) return !0;
        }
        return !1;
      } if (t.policy === 'AllOn') {
        for (const e of t.ids) {
          if (!n(this, mt).has(e)) return X(`Optional content group not found: ${e}`), !0;
          if (!n(this, mt).get(e).visible) return !1;
        }
        return !0;
      } if (t.policy === 'AnyOff') {
        for (const e of t.ids) {
          if (!n(this, mt).has(e)) return X(`Optional content group not found: ${e}`), !0;
          if (!n(this, mt).get(e).visible) return !0;
        }
        return !1;
      } if (t.policy === 'AllOff') {
        for (const e of t.ids) {
          if (!n(this, mt).has(e)) return X(`Optional content group not found: ${e}`), !0;
          if (n(this, mt).get(e).visible) return !1;
        }
        return !0;
      }
      return X(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return X(`Unknown group type ${t.type}.`), !0;
  }

  setVisibility(t, e = !0, i = !0) {
    let r;
    const s = n(this, mt).get(t);
    if (!s) {
      X(`Optional content group not found: ${t}`);
      return;
    }
    if (i && e && s.rbGroups.length) for (const a of s.rbGroups) for (const o of a) o !== t && ((r = n(this, mt).get(o)) == null || r._setVisible(oo, !1, !0));
    s._setVisible(oo, !!e, !0), g(this, Qn, null);
  }

  setOCGState({
    state: t,
    preserveRB: e,
  }) {
    let i;
    for (const s of t) {
      switch (s) {
        case 'ON':
        case 'OFF':
        case 'Toggle':
          i = s;
          continue;
      }
      const r = n(this, mt).get(s);
      if (r) {
        switch (i) {
          case 'ON':
            this.setVisibility(s, !0, e);
            break;
          case 'OFF':
            this.setVisibility(s, !1, e);
            break;
          case 'Toggle':
            this.setVisibility(s, !r.visible, e);
            break;
        }
      }
    }
    g(this, Qn, null);
  }

  get hasInitialVisibility() {
    return n(this, eh) === null || this.getHash() === n(this, eh);
  }

  getOrder() {
    return n(this, mt).size ? n(this, ih) ? n(this, ih).slice() : [...n(this, mt).keys()] : null;
  }

  getGroup(t) {
    return n(this, mt).get(t) || null;
  }

  getHash() {
    if (n(this, Qn) !== null) return n(this, Qn);
    const t = new Hm();
    for (const [e, i] of n(this, mt)) t.update(`${e}:${i.visible}`);
    return g(this, Qn, t.hexdigest());
  }

  [Symbol.iterator]() {
    return n(this, mt).entries();
  }
}
Qn = new WeakMap(), mt = new WeakMap(), eh = new WeakMap(), ih = new WeakMap(), bc = new WeakSet(), Vf = function (t) {
  const e = t.length;
  if (e < 2) return !0;
  const i = t[0];
  for (let s = 1; s < e; s++) {
    const r = t[s];
    let a;
    if (Array.isArray(r)) a = w(this, bc, Vf).call(this, r);
    else if (n(this, mt).has(r)) a = n(this, mt).get(r).visible;
    else return X(`Optional content group not found: ${r}`), !0;
    switch (i) {
      case 'And':
        if (!a) return !1;
        break;
      case 'Or':
        if (a) return !0;
        break;
      case 'Not':
        return !a;
      default:
        return !0;
    }
  }
  return i === 'And';
};
class Gw {
  constructor(t, {
    disableRange: e = !1,
    disableStream: i = !1,
  }) {
    nt(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: s,
      initialData: r,
      progressiveDone: a,
      contentDispositionFilename: o,
    } = t;
    if (this._queuedChunks = [], this._progressiveDone = a, this._contentDispositionFilename = o, (r == null ? void 0 : r.length) > 0) {
      const h = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(h);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((h, l) => {
      this._onReceiveData({
        begin: h,
        chunk: l,
      });
    }), t.addProgressListener((h, l) => {
      this._onProgress({
        loaded: h,
        total: l,
      });
    }), t.addProgressiveReadListener((h) => {
      this._onReceiveData({
        chunk: h,
      });
    }), t.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), t.transportReady();
  }

  _onReceiveData({
    begin: t,
    chunk: e,
  }) {
    const i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (t === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
    else {
      const s = this._rangeReaders.some((r) => (r._begin !== t ? !1 : (r._enqueue(i), !0)));
      nt(s, '_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.');
    }
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  _onProgress(t) {
    let e; let i; let s; let
      r;
    t.total === void 0 ? (i = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || i.call(e, {
      loaded: t.loaded,
    }) : (r = (s = this._fullRequestReader) == null ? void 0 : s.onProgress) == null || r.call(s, {
      loaded: t.loaded,
      total: t.total,
    });
  }

  _onProgressiveDone() {
    let t;
    (t = this._fullRequestReader) == null || t.progressiveDone(), this._progressiveDone = !0;
  }

  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }

  getFullReader() {
    nt(!this._fullRequestReader, 'PDFDataTransportStream.getFullReader can only be called once.');
    const t = this._queuedChunks;
    return this._queuedChunks = null, new zw(this, t, this._progressiveDone, this._contentDispositionFilename);
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new Ww(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeReaders.slice(0)) i.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class zw {
  constructor(t, e, i = !1, s = null) {
    this._stream = t, this._done = i || !1, this._filename = ju(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const r of this._queuedChunks) this._loaded += r.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
  }

  _enqueue(t) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t,
      done: !1,
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
    if (this._queuedChunks.length > 0) {
      return {
        value: this._queuedChunks.shift(),
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0;
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0;
  }

  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Ww {
  constructor(t, e, i) {
    this._stream = t, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }

  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length === 0) this._queuedChunk = t;
      else {
        this._requests.shift().resolve({
          value: t,
          done: !1,
        });
        for (const i of this._requests) {
          i.resolve({
            value: void 0,
            done: !0,
          });
        }
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
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0;
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function jw(c) {
  let t = !0; let
    e = i('filename\\*', 'i').exec(c);
  if (e) {
    e = e[1];
    let d = o(e);
    return d = unescape(d), d = h(d), d = l(d), r(d);
  }
  if (e = a(c), e) {
    const d = l(e);
    return r(d);
  }
  if (e = i('filename', 'i').exec(c), e) {
    e = e[1];
    let d = o(e);
    return d = l(d), r(d);
  }
  function i(d, u) {
    return new RegExp(`(?:^|;)\\s*${d}\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)`, u);
  }
  function s(d, u) {
    if (d) {
      if (!/^[\x00-\xFF]+$/.test(u)) return u;
      try {
        const p = new TextDecoder(d, {
          fatal: !0,
        }); const
          y = fd(u);
        u = p.decode(y), t = !1;
      } catch {
      }
    }
    return u;
  }
  function r(d) {
    return t && /[\x80-\xff]/.test(d) && (d = s('utf-8', d), t && (d = s('iso-8859-1', d))), d;
  }
  function a(d) {
    const u = [];
    let p;
    const y = i('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
    for (; (p = y.exec(d)) !== null;) {
      let [, v, _, x] = p;
      if (v = parseInt(v, 10), v in u) {
        if (v === 0) break;
        continue;
      }
      u[v] = [_, x];
    }
    const S = [];
    for (let v = 0; v < u.length && v in u; ++v) {
      let [_, x] = u[v];
      x = o(x), _ && (x = unescape(x), v === 0 && (x = h(x))), S.push(x);
    }
    return S.join('');
  }
  function o(d) {
    if (d.startsWith('"')) {
      const u = d.slice(1).split('\\"');
      for (let p = 0; p < u.length; ++p) {
        const y = u[p].indexOf('"');
        y !== -1 && (u[p] = u[p].slice(0, y), u.length = p + 1), u[p] = u[p].replaceAll(/\\(.)/g, '$1');
      }
      d = u.join('"');
    }
    return d;
  }
  function h(d) {
    const u = d.indexOf("'");
    if (u === -1) return d;
    const p = d.slice(0, u); const
      S = d.slice(u + 1).replace(/^[^']*'/, '');
    return s(p, S);
  }
  function l(d) {
    return !d.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(d) ? d : d.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (u, p, y, S) => {
      if (y === 'q' || y === 'Q') { return S = S.replaceAll('_', ' '), S = S.replaceAll(/=([0-9a-fA-F]{2})/g, (v, _) => String.fromCharCode(parseInt(_, 16))), s(p, S); }
      try {
        S = atob(S);
      } catch {
      }
      return s(p, S);
    });
  }
  return '';
}
function Qm(c, t) {
  const e = new Headers();
  if (!c || !t || typeof t !== 'object') return e;
  for (const i in t) {
    const s = t[i];
    s !== void 0 && e.append(i, s);
  }
  return e;
}
function Vu(c) {
  let t;
  return ((t = URL.parse(c)) == null ? void 0 : t.origin) ?? null;
}
function Zm({
  responseHeaders: c,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: i,
}) {
  const s = {
    allowRangeRequests: !1,
    suggestedLength: void 0,
  };
  const r = parseInt(c.get('Content-Length'), 10);
  return !Number.isInteger(r) || (s.suggestedLength = r, r <= 2 * e) || i || !t || c.get('Accept-Ranges') !== 'bytes' || (c.get('Content-Encoding') || 'identity') !== 'identity' || (s.allowRangeRequests = !0), s;
}
function tb(c) {
  const t = c.get('Content-Disposition');
  if (t) {
    let e = jw(t);
    if (e.includes('%')) {
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    }
    if (ju(e)) return e;
  }
  return null;
}
function bd(c, t) {
  return new _l(`Unexpected server response (${c}) while retrieving PDF "${t}".`, c, c === 404 || c === 0 && t.startsWith('file:'));
}
function eb(c) {
  return c === 200 || c === 206;
}
function ib(c, t, e) {
  return {
    method: 'GET',
    headers: c,
    signal: e.signal,
    mode: 'cors',
    credentials: t ? 'include' : 'same-origin',
    redirect: 'follow',
  };
}
function sb(c) {
  return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (X(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
}
class Vw {
  constructor(t) {
    M(this, '_responseOrigin', null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Qm(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return nt(!this._fullRequestReader, 'PDFFetchStream.getFullReader can only be called once.'), this._fullRequestReader = new qw(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new Xw(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class qw {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const i = new Headers(t.headers); const
      s = e.url;
    fetch(s, ib(i, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = Vu(r.url), !eb(r.status)) throw bd(r.status, s);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers; const
        {
          allowRangeRequests: o,
          suggestedLength: h,
        } = Zm({
          responseHeaders: a,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
      this._isRangeSupported = o, this._contentLength = h || this._contentLength, this._filename = tb(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new _n('Streaming is disabled.'));
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
    let i;
    await this._headersCapability.promise;
    const {
      value: t,
      done: e,
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e,
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength,
    }), {
      value: sb(t),
      done: !1,
    });
  }

  cancel(t) {
    let e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class Xw {
  constructor(t, e, i) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const s = t.source;
    this._withCredentials = s.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append('Range', `bytes=${e}-${i - 1}`);
    const a = s.url;
    fetch(a, ib(r, this._withCredentials, this._abortController)).then((o) => {
      const h = Vu(o.url);
      if (h !== t._responseOrigin) throw new Error(`Expected range response-origin "${h}" to match "${t._responseOrigin}".`);
      if (!eb(o.status)) throw bd(o.status, a);
      this._readCapability.resolve(), this._reader = o.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    let i;
    await this._readCapability.promise;
    const {
      value: t,
      done: e,
    } = await this._reader.read();
    return e ? {
      value: t,
      done: e,
    } : (this._loaded += t.byteLength, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
    }), {
      value: sb(t),
      done: !1,
    });
  }

  cancel(t) {
    let e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const of = 200; const
  hf = 206;
function Yw(c) {
  const t = c.response;
  return typeof t !== 'string' ? t : fd(t).buffer;
}
class Kw {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: i,
  }) {
    M(this, '_responseOrigin', null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Qm(this.isHttp, e), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }

  request(t) {
    const e = new XMLHttpRequest(); const i = this.currXhrId++; const
      s = this.pendingRequests[i] = {
        xhr: e,
      };
    e.open('GET', this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers) e.setRequestHeader(r, a);
    return this.isHttp && 'begin' in t && 'end' in t ? (e.setRequestHeader('Range', `bytes=${t.begin}-${t.end - 1}`), s.expectedStatus = hf) : s.expectedStatus = of, e.responseType = 'arraybuffer', nt(t.onError, 'Expected `onError` callback to be provided.'), e.onerror = () => {
      t.onError(e.status);
    }, e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), s.onHeadersReceived = t.onHeadersReceived, s.onDone = t.onDone, s.onError = t.onError, s.onProgress = t.onProgress, e.send(null), i;
  }

  onProgress(t, e) {
    let s;
    const i = this.pendingRequests[t];
    i && ((s = i.onProgress) == null || s.call(i, e));
  }

  onStateChange(t, e) {
    const i = this.pendingRequests[t];
    if (!i) return;
    const s = i.xhr;
    if (s.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), s.readyState !== 4 || !(t in this.pendingRequests)) return;
    if (delete this.pendingRequests[t], s.status === 0 && this.isHttp) {
      i.onError(s.status);
      return;
    }
    const r = s.status || of;
    if (!(r === of && i.expectedStatus === hf) && r !== i.expectedStatus) {
      i.onError(s.status);
      return;
    }
    const o = Yw(s);
    if (r === hf) {
      const h = s.getResponseHeader('Content-Range'); const
        l = /bytes (\d+)-(\d+)\/(\d+)/.exec(h);
      l ? i.onDone({
        begin: parseInt(l[1], 10),
        chunk: o,
      }) : (X('Missing or invalid "Content-Range" header.'), i.onError(0));
    } else {
      o ? i.onDone({
        begin: 0,
        chunk: o,
      }) : i.onError(s.status);
    }
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
class Jw {
  constructor(t) {
    this._source = t, this._manager = new Kw(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }

  getFullReader() {
    return nt(!this._fullRequestReader, 'PDFNetworkStream.getFullReader can only be called once.'), this._fullRequestReader = new Qw(this._manager, this._source), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    const i = new Zw(this._manager, t, e);
    return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class Qw {
  constructor(t, e) {
    this._manager = t, this._url = e.url, this._fullRequestId = t.request({
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }

  _onHeadersReceived() {
    const t = this._fullRequestId; const
      e = this._manager.getRequestXhr(t);
    this._manager._responseOrigin = Vu(e.responseURL);
    const i = e.getAllResponseHeaders(); const s = new Headers(i ? i.trimStart().replace(/[^\S ]+$/, '').split(/[\r\n]+/).map((o) => {
      const [h, ...l] = o.split(': ');
      return [h, l.join(': ')];
    }) : []); const
      {
        allowRangeRequests: r,
        suggestedLength: a,
      } = Zm({
        responseHeaders: s,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange,
      });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = tb(s), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
  }

  _onDone(t) {
    if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: t.chunk,
      done: !1,
    }) : this._cachedChunks.push(t.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests) {
        e.resolve({
          value: void 0,
          done: !0,
        });
      }
      this._requests.length = 0;
    }
  }

  _onError(t) {
    this._storedError = bd(t, this._url), this._headersCapability.reject(this._storedError);
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }

  _onProgress(t) {
    let e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength,
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
    if (await this._headersCapability.promise, this._storedError) throw this._storedError;
    if (this._cachedChunks.length > 0) {
      return {
        value: this._cachedChunks.shift(),
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0, this._headersCapability.reject(t);
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class Zw {
  constructor(t, e, i) {
    this._manager = t, this._url = t.url, this._requestId = t.request({
      begin: e,
      end: i,
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }

  _onHeadersReceived() {
    let e;
    const t = Vu((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
    t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
  }

  _close() {
    let t;
    (t = this.onClosed) == null || t.call(this, this);
  }

  _onDone(t) {
    const e = t.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1,
    }) : this._queuedChunk = e, this._done = !0;
    for (const i of this._requests) {
      i.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._close();
  }

  _onError(t) {
    this._storedError ?? (this._storedError = bd(t, this._url));
    for (const e of this._requests) e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }

  _onProgress(t) {
    let e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: t.loaded,
    });
  }

  get isStreamingSupported() {
    return !1;
  }

  async read() {
    if (this._storedError) throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1,
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    const t = Promise.withResolvers();
    return this._requests.push(t), t.promise;
  }

  cancel(t) {
    this._done = !0;
    for (const e of this._requests) {
      e.resolve({
        value: void 0,
        done: !0,
      });
    }
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const t0 = /^[a-z][a-z0-9\-+.]+:/i;
function e0(c) {
  if (t0.test(c)) return new URL(c);
  const t = process.getBuiltinModule('url');
  return new URL(t.pathToFileURL(c));
}
class i0 {
  constructor(t) {
    this.source = t, this.url = e0(t.url), nt(this.url.protocol === 'file:', 'PDFNodeStream only supports file:// URLs.'), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return nt(!this._fullRequestReader, 'PDFNodeStream.getFullReader can only be called once.'), this._fullRequestReader = new s0(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new n0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class s0 {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const i = process.getBuiltinModule('fs');
    i.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(i.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === 'ENOENT' && (s = bd(0, this._url.href)), this._storedError = s, this._headersCapability.reject(s);
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
    let i;
    if (await this._readCapability.promise, this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
      total: this._contentLength,
    }), {
      value: new Uint8Array(t).buffer,
      done: !1,
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
    this._readableStream = t, t.on('readable', () => {
      this._readCapability.resolve();
    }), t.on('end', () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on('error', (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new _n('streaming is disabled')), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class n0 {
  constructor(t, e, i) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const s = t.source;
    this._isStreamingSupported = !s.disableStream;
    const r = process.getBuiltinModule('fs');
    this._setReadableStream(r.createReadStream(this._url, {
      start: e,
      end: i - 1,
    }));
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    let i;
    if (await this._readCapability.promise, this._done) {
      return {
        value: void 0,
        done: !0,
      };
    }
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (i = this.onProgress) == null || i.call(this, {
      loaded: this._loaded,
    }), {
      value: new Uint8Array(t).buffer,
      done: !1,
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
    this._readableStream = t, t.on('readable', () => {
      this._readCapability.resolve();
    }), t.on('end', () => {
      t.destroy(), this._done = !0, this._readCapability.resolve();
    }), t.on('error', (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
const Jh = Symbol('INITIAL_DATA');
let ni; let yc; let
  qf;
class nb {
  constructor() {
    b(this, yc);
    b(this, ni, /* @__PURE__ */ Object.create(null));
  }

  get(t, e = null) {
    if (e) {
      const s = w(this, yc, qf).call(this, t);
      return s.promise.then(() => e(s.data)), null;
    }
    const i = n(this, ni)[t];
    if (!i || i.data === Jh) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }

  has(t) {
    const e = n(this, ni)[t];
    return !!e && e.data !== Jh;
  }

  delete(t) {
    const e = n(this, ni)[t];
    return !e || e.data === Jh ? !1 : (delete n(this, ni)[t], !0);
  }

  resolve(t, e = null) {
    const i = w(this, yc, qf).call(this, t);
    i.data = e, i.resolve();
  }

  clear() {
    let t;
    for (const e in n(this, ni)) {
      const {
        data: i,
      } = n(this, ni)[e];
      (t = i == null ? void 0 : i.bitmap) == null || t.close();
    }
    g(this, ni, /* @__PURE__ */ Object.create(null));
  }

  * [Symbol.iterator]() {
    for (const t in n(this, ni)) {
      const {
        data: e,
      } = n(this, ni)[t];
      e !== Jh && (yield [t, e]);
    }
  }
}
ni = new WeakMap(), yc = new WeakSet(), qf = function (t) {
  let e;
  return (e = n(this, ni))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Jh,
  });
};
const r0 = 1e5; const
  Mg = 30;
let jg; let Zn; let qe; let wc; let Ac; let da; let an; let vc; let Sc; let ua; let sh; let nh; let tr; let rh; let xc; let ah; let fa; let Ec; let _c; let Ut; let oh; let pa; let Cc; let er; let hh; let Pn; let rb; let ab; let Xf; let vi; let zd; let Yf; let ob; let
  hb;
const Rl = (Ut = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: i,
  }) {
    b(this, Pn);
    b(this, Zn, Promise.withResolvers());
    b(this, qe, null);
    b(this, wc, !1);
    b(this, Ac, !!((jg = globalThis.FontInspector) != null && jg.enabled));
    b(this, da, null);
    b(this, an, null);
    b(this, vc, 0);
    b(this, Sc, 0);
    b(this, ua, null);
    b(this, sh, null);
    b(this, nh, 0);
    b(this, tr, 0);
    b(this, rh, /* @__PURE__ */ Object.create(null));
    b(this, xc, []);
    b(this, ah, null);
    b(this, fa, []);
    b(this, Ec, /* @__PURE__ */ new WeakMap());
    b(this, _c, null);
    let h;
    if (t instanceof ReadableStream) g(this, ah, t);
    else if (typeof t === 'object') {
      g(this, ah, new ReadableStream({
        start(l) {
          l.enqueue(t), l.close();
        },
      }));
    } else throw new Error('No "textContentSource" parameter specified.');
    g(this, qe, g(this, sh, e)), g(this, tr, i.scale * ss.pixelRatio), g(this, nh, i.rotation), g(this, an, {
      div: null,
      properties: null,
      ctx: null,
    });
    const {
      pageWidth: s,
      pageHeight: r,
      pageX: a,
      pageY: o,
    } = i.rawDims;
    g(this, _c, [1, 0, 0, -1, -a, o + r]), g(this, Sc, s), g(this, vc, r), w(h = Ut, vi, ob).call(h), Cr(e, i), n(this, Zn).promise.finally(() => {
      n(Ut, hh).delete(this), g(this, an, null), g(this, rh, null);
    }).catch(() => {
    });
  }

  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e,
    } = ce.platform;
    return J(this, 'fontFamilyMap', /* @__PURE__ */ new Map([['sans-serif', `${t && e ? 'Calibri, ' : ''}sans-serif`], ['monospace', `${t && e ? 'Lucida Console, ' : ''}monospace`]]));
  }

  render() {
    const t = () => {
      n(this, ua).read().then(({
        value: e,
        done: i,
      }) => {
        if (i) {
          n(this, Zn).resolve();
          return;
        }
        n(this, da) ?? g(this, da, e.lang), Object.assign(n(this, rh), e.styles), w(this, Pn, rb).call(this, e.items), t();
      }, n(this, Zn).reject);
    };
    return g(this, ua, n(this, ah).getReader()), n(Ut, hh).add(this), t(), n(this, Zn).promise;
  }

  update({
    viewport: t,
    onBefore: e = null,
  }) {
    let r;
    const i = t.scale * ss.pixelRatio; const
      s = t.rotation;
    if (s !== n(this, nh) && (e == null || e(), g(this, nh, s), Cr(n(this, sh), {
      rotation: s,
    })), i !== n(this, tr)) {
      e == null || e(), g(this, tr, i);
      const a = {
        div: null,
        properties: null,
        ctx: w(r = Ut, vi, zd).call(r, n(this, da)),
      };
      for (const o of n(this, fa)) a.properties = n(this, Ec).get(o), a.div = o, w(this, Pn, Xf).call(this, a);
    }
  }

  cancel() {
    let e;
    const t = new _n('TextLayer task cancelled.');
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
    if (!(n(this, hh).size > 0)) {
      n(this, oh).clear();
      for (const {
        canvas: t,
      } of n(this, pa).values()) t.remove();
      n(this, pa).clear();
    }
  }
}, Zn = new WeakMap(), qe = new WeakMap(), wc = new WeakMap(), Ac = new WeakMap(), da = new WeakMap(), an = new WeakMap(), vc = new WeakMap(), Sc = new WeakMap(), ua = new WeakMap(), sh = new WeakMap(), nh = new WeakMap(), tr = new WeakMap(), rh = new WeakMap(), xc = new WeakMap(), ah = new WeakMap(), fa = new WeakMap(), Ec = new WeakMap(), _c = new WeakMap(), oh = new WeakMap(), pa = new WeakMap(), Cc = new WeakMap(), er = new WeakMap(), hh = new WeakMap(), Pn = new WeakSet(), rb = function (t) {
  let s; let
    r;
  if (n(this, wc)) return;
  (r = n(this, an)).ctx ?? (r.ctx = w(s = Ut, vi, zd).call(s, n(this, da)));
  const e = n(this, fa); const
    i = n(this, xc);
  for (const a of t) {
    if (e.length > r0) {
      X('Ignoring additional textDivs for performance reasons.'), g(this, wc, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === 'beginMarkedContentProps' || a.type === 'beginMarkedContent') {
        const o = n(this, qe);
        g(this, qe, document.createElement('span')), n(this, qe).classList.add('markedContent'), a.id && n(this, qe).setAttribute('id', `${a.id}`), o.append(n(this, qe));
      } else a.type === 'endMarkedContent' && g(this, qe, n(this, qe).parentNode);
      continue;
    }
    i.push(a.str), w(this, Pn, ab).call(this, a);
  }
}, ab = function (t) {
  let v;
  const e = document.createElement('span'); const
    i = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== '',
      hasEOL: t.hasEOL,
      fontSize: 0,
    };
  n(this, fa).push(e);
  const s = U.transform(n(this, _c), t.transform);
  let r = Math.atan2(s[1], s[0]);
  const a = n(this, rh)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Ac) && a.fontSubstitution || a.fontFamily;
  o = Ut.fontFamilyMap.get(o) || o;
  const h = Math.hypot(s[2], s[3]); const
    l = h * w(v = Ut, vi, hb).call(v, o, a, n(this, da));
  let d; let
    u;
  r === 0 ? (d = s[4], u = s[5] - l) : (d = s[4] + l * Math.sin(r), u = s[5] - l * Math.cos(r));
  const p = 'calc(var(--total-scale-factor) *';
  const y = e.style;
  n(this, qe) === n(this, sh) ? (y.left = `${(100 * d / n(this, Sc)).toFixed(2)}%`, y.top = `${(100 * u / n(this, vc)).toFixed(2)}%`) : (y.left = `${p}${d.toFixed(2)}px)`, y.top = `${p}${u.toFixed(2)}px)`), y.fontSize = `${p}${(n(Ut, er) * h).toFixed(2)}px)`, y.fontFamily = o, i.fontSize = h, e.setAttribute('role', 'presentation'), e.textContent = t.str, e.dir = t.dir, n(this, Ac) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (i.angle = r * (180 / Math.PI));
  let S = !1;
  if (t.str.length > 1) S = !0;
  else if (t.str !== ' ' && t.transform[0] !== t.transform[3]) {
    const _ = Math.abs(t.transform[0]); const
      x = Math.abs(t.transform[3]);
    _ !== x && Math.max(_, x) / Math.min(_, x) > 1.5 && (S = !0);
  }
  if (S && (i.canvasWidth = a.vertical ? t.height : t.width), n(this, Ec).set(e, i), n(this, an).div = e, n(this, an).properties = i, w(this, Pn, Xf).call(this, n(this, an)), i.hasText && n(this, qe).append(e), i.hasEOL) {
    const _ = document.createElement('br');
    _.setAttribute('role', 'presentation'), n(this, qe).append(_);
  }
}, Xf = function (t) {
  let o;
  const {
    div: e,
    properties: i,
    ctx: s,
  } = t; const
    {
      style: r,
    } = e;
  let a = '';
  if (n(Ut, er) > 1 && (a = `scale(${1 / n(Ut, er)})`), i.canvasWidth !== 0 && i.hasText) {
    const {
      fontFamily: h,
    } = r; const
      {
        canvasWidth: l,
        fontSize: d,
      } = i;
    w(o = Ut, vi, Yf).call(o, s, d * n(this, tr), h);
    const {
      width: u,
    } = s.measureText(e.textContent);
    u > 0 && (a = `scaleX(${l * n(this, tr) / u}) ${a}`);
  }
  i.angle !== 0 && (a = `rotate(${i.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, vi = new WeakSet(), zd = function (t = null) {
  let e = n(this, pa).get(t || (t = ''));
  if (!e) {
    const i = document.createElement('canvas');
    i.className = 'hiddenCanvasElement', i.lang = t, document.body.append(i), e = i.getContext('2d', {
      alpha: !1,
      willReadFrequently: !0,
    }), n(this, pa).set(t, e), n(this, Cc).set(e, {
      size: 0,
      family: '',
    });
  }
  return e;
}, Yf = function (t, e, i) {
  const s = n(this, Cc).get(t);
  e === s.size && i === s.family || (t.font = `${e}px ${i}`, s.size = e, s.family = i);
}, ob = function () {
  if (n(this, er) !== null) return;
  const t = document.createElement('div');
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = '1px', t.style.position = 'absolute', t.textContent = 'X', document.body.append(t), g(this, er, t.getBoundingClientRect().height), t.remove();
}, hb = function (t, e, i) {
  const s = n(this, oh).get(t);
  if (s) return s;
  const r = w(this, vi, zd).call(this, i);
  r.canvas.width = r.canvas.height = Mg, w(this, vi, Yf).call(this, r, Mg, t);
  const a = r.measureText(''); const o = a.fontBoundingBoxAscent; const
    h = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let l = 0.8;
  return o ? l = o / (o + h) : (ce.platform.isFirefox && X('Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.'), e.ascent ? l = e.ascent : e.descent && (l = 1 + e.descent)), n(this, oh).set(t, l), l;
}, b(Ut, vi), b(Ut, oh, /* @__PURE__ */ new Map()), b(Ut, pa, /* @__PURE__ */ new Map()), b(Ut, Cc, /* @__PURE__ */ new WeakMap()), b(Ut, er, null), b(Ut, hh, /* @__PURE__ */ new Set()), Ut);
const a0 = 100;
function Yp(c = {}) {
  typeof c === 'string' || c instanceof URL ? c = {
    url: c,
  } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
    data: c,
  });
  const t = new Kf(); const {
    docId: e,
  } = t; const i = c.url ? pw(c.url) : null; const s = c.data ? gw(c.data) : null; const r = c.httpHeaders || null; const a = c.withCredentials === !0; const o = c.password ?? null; const h = c.range instanceof Kp ? c.range : null; const
    l = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : 2 ** 16;
  let d = c.worker instanceof Vh ? c.worker : null;
  const u = c.verbosity; const p = typeof c.docBaseUrl === 'string' && !gd(c.docBaseUrl) ? c.docBaseUrl : null; const y = _d(c.cMapUrl); const S = c.cMapPacked !== !1; const v = c.CMapReaderFactory || (Be ? Sw : yg); const _ = _d(c.iccUrl); const x = _d(c.standardFontDataUrl); const T = c.StandardFontDataFactory || (Be ? xw : wg); const E = _d(c.wasmUrl); const f = c.WasmFactory || (Be ? Ew : Ag); const m = c.stopAtErrors !== !0; const A = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1; const C = c.isEvalSupported !== !1; const P = typeof c.isOffscreenCanvasSupported === 'boolean' ? c.isOffscreenCanvasSupported : !Be; const R = typeof c.isImageDecoderSupported === 'boolean' ? c.isImageDecoderSupported : !Be && (ce.platform.isFirefox || !globalThis.chrome); const D = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1; const k = typeof c.disableFontFace === 'boolean' ? c.disableFontFace : Be; const L = c.fontExtraProperties === !0; const N = c.enableXfa === !0; const I = c.ownerDocument || globalThis.document; const j = c.disableRange === !0; const B = c.disableStream === !0; const O = c.disableAutoFetch === !0; const tt = c.pdfBug === !0; const st = c.CanvasFactory || (Be ? vw : yw); const ee = c.FilterFactory || (Be ? Aw : ww); const Je = c.enableHWA === !0; const rt = c.useWasm !== !1; const ht = h ? h.length : c.length ?? NaN; const ie = typeof c.useSystemFonts === 'boolean' ? c.useSystemFonts : !Be && !k; const de = typeof c.useWorkerFetch === 'boolean' ? c.useWorkerFetch : !!(v === yg && T === wg && f === Ag && y && x && E && el(y, document.baseURI) && el(x, document.baseURI) && el(E, document.baseURI)); const
    ve = null;
  Yy(u);
  const yt = {
    canvasFactory: new st({
      ownerDocument: I,
      enableHWA: Je,
    }),
    filterFactory: new ee({
      docId: e,
      ownerDocument: I,
    }),
    cMapReaderFactory: de ? null : new v({
      baseUrl: y,
      isCompressed: S,
    }),
    standardFontDataFactory: de ? null : new T({
      baseUrl: x,
    }),
    wasmFactory: de ? null : new f({
      baseUrl: E,
    }),
  };
  d || (d = Vh.create({
    verbosity: u,
    port: ts.workerPort,
  }), t._worker = d);
  const Bi = {
    docId: e,
    apiVersion: '5.4.296',
    data: s,
    password: o,
    disableAutoFetch: O,
    rangeChunkSize: l,
    length: ht,
    docBaseUrl: p,
    enableXfa: N,
    evaluatorOptions: {
      maxImageSize: A,
      disableFontFace: k,
      ignoreErrors: m,
      isEvalSupported: C,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: R,
      canvasMaxAreaInBytes: D,
      fontExtraProperties: L,
      useSystemFonts: ie,
      useWasm: rt,
      useWorkerFetch: de,
      cMapUrl: y,
      iccUrl: _,
      standardFontDataUrl: x,
      wasmUrl: E,
    },
  }; const
    rs = {
      ownerDocument: I,
      pdfBug: tt,
      styleElement: ve,
      loadingParams: {
        disableAutoFetch: O,
        enableXfa: N,
      },
    };
  return d.promise.then(() => {
    if (t.destroyed) throw new Error('Loading aborted');
    if (d.destroyed) throw new Error('Worker was destroyed');
    const Ns = d.messageHandler.sendWithPromise('GetDocRequest', Bi, s ? [s.buffer] : null);
    let Me;
    if (h) {
      Me = new Gw(h, {
        disableRange: j,
        disableStream: B,
      });
    } else if (!s) {
      if (!i) throw new Error('getDocument - no `url` parameter provided.');
      const Tt = el(i) ? Vw : Be ? i0 : Jw;
      Me = new Tt({
        url: i,
        length: ht,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: l,
        disableRange: j,
        disableStream: B,
      });
    }
    return Ns.then((Tt) => {
      if (t.destroyed) throw new Error('Loading aborted');
      if (d.destroyed) throw new Error('Worker was destroyed');
      const Rt = new ol(e, Tt, d.port); const
        Yt = new l0(Rt, t, Me, rs, yt, Je);
      t._transport = Yt, Rt.send('Ready', null);
    });
  }).catch(t._capability.reject), t;
}
let Mu;
const Lu = class Lu {
  constructor() {
    M(this, '_capability', Promise.withResolvers());
    M(this, '_transport', null);
    M(this, '_worker', null);
    M(this, 'docId', `d${Kt(Lu, Mu)._++}`);
    M(this, 'destroyed', !1);
    M(this, 'onPassword', null);
    M(this, 'onProgress', null);
  }

  get promise() {
    return this._capability.promise;
  }

  async destroy() {
    let t; let e; let i; let
      s;
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
Mu = new WeakMap(), b(Lu, Mu, 0);
let Kf = Lu;
let ga; let Tc; let Pc; let Rc; let Dc; let
  Vg;
let Kp = (Vg = class {
  constructor(t, e, i = !1, s = null) {
    b(this, ga, Promise.withResolvers());
    b(this, Tc, []);
    b(this, Pc, []);
    b(this, Rc, []);
    b(this, Dc, []);
    this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s;
  }

  addRangeListener(t) {
    n(this, Dc).push(t);
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
    for (const i of n(this, Dc)) i(t, e);
  }

  onDataProgress(t, e) {
    n(this, ga).promise.then(() => {
      for (const i of n(this, Rc)) i(t, e);
    });
  }

  onDataProgressiveRead(t) {
    n(this, ga).promise.then(() => {
      for (const e of n(this, Pc)) e(t);
    });
  }

  onDataProgressiveDone() {
    n(this, ga).promise.then(() => {
      for (const t of n(this, Tc)) t();
    });
  }

  transportReady() {
    n(this, ga).resolve();
  }

  requestDataRange(t, e) {
    Et('Abstract method PDFDataRangeTransport.requestDataRange');
  }

  abort() {
  }
}, ga = new WeakMap(), Tc = new WeakMap(), Pc = new WeakMap(), Rc = new WeakMap(), Dc = new WeakMap(), Vg);
class o0 {
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
    return J(this, 'isPureXfa', !!this._transport._htmlForXfa);
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
    intent: t = 'display',
  } = {}) {
    const {
      renderingIntent: e,
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
let on; let ma; let
  pl;
class h0 {
  constructor(t, e, i, s = !1) {
    b(this, ma);
    b(this, on, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = s ? new dg() : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new nb(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null;
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
    dontFlip: r = !1,
  } = {}) {
    return new pd({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: r,
    });
  }

  getAnnotations({
    intent: t = 'display',
  } = {}) {
    const {
      renderingIntent: e,
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
    return J(this, 'isPureXfa', !!this._transport._htmlForXfa);
  }

  async getXfa() {
    let t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }

  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: i,
    intent: s = 'display',
    annotationMode: r = Ms.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: h = null,
    annotationCanvasMap: l = null,
    pageColors: d = null,
    printAnnotationStorage: u = null,
    isEditing: p = !1,
    recordOperations: y = !1,
    operationsFilter: S = null,
  }) {
    let R; let D; let
      k;
    (R = this._stats) == null || R.time('Overall');
    const v = this._transport.getRenderingIntent(s, r, u, p); const
      {
        renderingIntent: _,
        cacheKey: x,
      } = v;
    g(this, on, !1), h || (h = this._transport.getOptionalContentConfig(_));
    let T = this._intentStates.get(x);
    T || (T = /* @__PURE__ */ Object.create(null), this._intentStates.set(x, T)), T.streamReaderCancelTimeout && (clearTimeout(T.streamReaderCancelTimeout), T.streamReaderCancelTimeout = null);
    const E = !!(_ & bi.PRINT);
    T.displayReadyCapability || (T.displayReadyCapability = Promise.withResolvers(), T.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null,
    }, (D = this._stats) == null || D.time('Page Request'), this._pumpOperatorList(v));
    const f = !!(this._pdfBug && ((k = globalThis.StepperManager) != null && k.enabled)); const m = !this.recordedBBoxes && (y || f); const A = (L) => {
      let N; let
        I;
      if (T.renderTasks.delete(C), m) {
        const j = (N = C.gfx) == null ? void 0 : N.dependencyTracker.take();
        j && (C.stepper && C.stepper.setOperatorBBoxes(j, C.gfx.dependencyTracker.takeDebugMetadata()), y && (this.recordedBBoxes = j));
      }
      E && g(this, on, !0), w(this, ma, pl).call(this), L ? (C.capability.reject(L), this._abortOperatorList({
        intentState: T,
        reason: L instanceof Error ? L : new Error(L),
      })) : C.capability.resolve(), this._stats && (this._stats.timeEnd('Rendering'), this._stats.timeEnd('Overall'), (I = globalThis.Stats) != null && I.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }; const
      C = new Jf({
        callback: A,
        params: {
          canvas: e,
          canvasContext: t,
          dependencyTracker: m ? new Cw(e, T.operatorList.length, f) : null,
          viewport: i,
          transform: a,
          background: o,
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: l,
        operatorList: T.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !E,
        pdfBug: this._pdfBug,
        pageColors: d,
        enableHWA: this._transport.enableHWA,
        operationsFilter: S,
      });
    (T.renderTasks || (T.renderTasks = /* @__PURE__ */ new Set())).add(C);
    const P = C.task;
    return Promise.all([T.displayReadyCapability.promise, h]).then(([L, N]) => {
      let I;
      if (this.destroyed) {
        A();
        return;
      }
      if ((I = this._stats) == null || I.time('Rendering'), !(N.renderingIntent & _)) throw new Error('Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.');
      C.initializeGraphics({
        transparency: L,
        optionalContentConfig: N,
      }), C.operatorListChanged();
    }).catch(A), P;
  }

  getOperatorList({
    intent: t = 'display',
    annotationMode: e = Ms.ENABLE,
    printAnnotationStorage: i = null,
    isEditing: s = !1,
  } = {}) {
    let l;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(h));
    }
    const a = this._transport.getRenderingIntent(t, e, i, s, !0);
    let o = this._intentStates.get(a.cacheKey);
    o || (o = /* @__PURE__ */ Object.create(null), this._intentStates.set(a.cacheKey, o));
    let h;
    return o.opListReadCapability || (h = /* @__PURE__ */ Object.create(null), h.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(h), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null,
    }, (l = this._stats) == null || l.time('Page Request'), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }

  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1,
  } = {}) {
    return this._transport.messageHandler.sendWithStream('GetTextContent', {
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0,
    }, {
      highWaterMark: 100,
      size(s) {
        return s.items.length;
      },
    });
  }

  getTextContent(t = {}) {
    if (this._transport._htmlForXfa) return this.getXfa().then((i) => Cl.textContent(i));
    const e = this.streamTextContent(t);
    return new Promise((i, s) => {
      function r() {
        a.read().then(({
          value: h,
          done: l,
        }) => {
          if (l) {
            i(o);
            return;
          }
          o.lang ?? (o.lang = h.lang), Object.assign(o.styles, h.styles), o.items.push(...h.items), r();
        }, s);
      }
      const a = e.getReader(); const
        o = {
          items: [],
          styles: /* @__PURE__ */ Object.create(null),
          lang: null,
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
    for (const e of this._intentStates.values()) {
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error('Page was destroyed.'),
        force: !0,
      }), !e.opListReadCapability) for (const i of e.renderTasks) t.push(i.completed), i.cancel();
    }
    return this.objs.clear(), g(this, on, !1), Promise.all(t);
  }

  cleanup(t = !1) {
    g(this, on, !0);
    const e = w(this, ma, pl).call(this);
    return t && e && this._stats && (this._stats = new dg()), e;
  }

  _startRenderPage(t, e) {
    let s; let
      r;
    const i = this._intentStates.get(e);
    i && ((s = this._stats) == null || s.timeEnd('Page Request'), (r = i.displayReadyCapability) == null || r.resolve(t));
  }

  _renderPageChunk(t, e) {
    for (let i = 0, s = t.length; i < s; i++) e.operatorList.fnArray.push(t.fnArray[i]), e.operatorList.argsArray.push(t.argsArray[i]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const i of e.renderTasks) i.operatorListChanged();
    t.lastChunk && w(this, ma, pl).call(this);
  }

  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: i,
    modifiedIds: s,
  }) {
    const {
      map: r,
      transfer: a,
    } = i; const h = this._transport.messageHandler.sendWithStream('GetOperatorList', {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: s,
    }, a).getReader(); const
      l = this._intentStates.get(e);
    l.streamReader = h;
    const d = () => {
      h.read().then(({
        value: u,
        done: p,
      }) => {
        if (p) {
          l.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(u, l), d());
      }, (u) => {
        if (l.streamReader = null, !this._transport.destroyed) {
          if (l.operatorList) {
            l.operatorList.lastChunk = !0;
            for (const p of l.renderTasks) p.operatorListChanged();
            w(this, ma, pl).call(this);
          }
          if (l.displayReadyCapability) l.displayReadyCapability.reject(u);
          else if (l.opListReadCapability) l.opListReadCapability.reject(u);
          else throw u;
        }
      });
    };
    d();
  }

  _abortOperatorList({
    intentState: t,
    reason: e,
    force: i = !1,
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !i) {
        if (t.renderTasks.size > 0) return;
        if (e instanceof Wu) {
          let s = a0;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (s += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0,
            });
          }, s);
          return;
        }
      }
      if (t.streamReader.cancel(new _n(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [s, r] of this._intentStates) {
          if (r === t) {
            this._intentStates.delete(s);
            break;
          }
        }
        this.cleanup();
      }
    }
  }

  get stats() {
    return this._stats;
  }
}
on = new WeakMap(), ma = new WeakSet(), pl = function () {
  if (!n(this, on) || this.destroyed) return !1;
  for (const {
    renderTasks: t,
    operatorList: e,
  } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return !1;
  return this._intentStates.clear(), this.objs.clear(), g(this, on, !1), !0;
};
let ir; let qi; let hn; let ba; let Iu; let ya; let wa; let He; let Wd; let lb; let cb; let gl; let lh; let
  jd;
const Dt = class Dt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: i = Ky(),
  } = {}) {
    b(this, He);
    b(this, ir, Promise.withResolvers());
    b(this, qi, null);
    b(this, hn, null);
    b(this, ba, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = i, e) {
      if (n(Dt, wa).has(e)) throw new Error('Cannot use more than one PDFWorker per port.');
      n(Dt, wa).set(e, this), w(this, He, lb).call(this, e);
    } else w(this, He, cb).call(this);
  }

  get promise() {
    return n(this, ir).promise;
  }

  get port() {
    return n(this, hn);
  }

  get messageHandler() {
    return n(this, qi);
  }

  destroy() {
    let t; let
      e;
    this.destroyed = !0, (t = n(this, ba)) == null || t.terminate(), g(this, ba, null), n(Dt, wa).delete(n(this, hn)), g(this, hn, null), (e = n(this, qi)) == null || e.destroy(), g(this, qi, null);
  }

  static create(t) {
    const e = n(this, wa).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy) throw new Error('PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.');
      return e;
    }
    return new Dt(t);
  }

  static get workerSrc() {
    if (ts.workerSrc) return ts.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }

  static get _setupFakeWorkerGlobal() {
    return J(this, '_setupFakeWorkerGlobal', (async () => (n(this, lh, jd) ? n(this, lh, jd) : (await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      this.workerSrc
    )).WorkerMessageHandler))());
  }
};
ir = new WeakMap(), qi = new WeakMap(), hn = new WeakMap(), ba = new WeakMap(), Iu = new WeakMap(), ya = new WeakMap(), wa = new WeakMap(), He = new WeakSet(), Wd = function () {
  n(this, ir).resolve(), n(this, qi).send('configure', {
    verbosity: this.verbosity,
  });
}, lb = function (t) {
  g(this, hn, t), g(this, qi, new ol('main', 'worker', t)), n(this, qi).on('ready', () => {
  }), w(this, He, Wd).call(this);
}, cb = function () {
  if (n(Dt, ya) || n(Dt, lh, jd)) {
    w(this, He, gl).call(this);
    return;
  }
  let {
    workerSrc: t,
  } = Dt;
  try {
    Dt._isSameOrigin(window.location, t) || (t = Dt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: 'module',
    }); const i = new ol('main', 'worker', e); const s = () => {
      r.abort(), i.destroy(), e.terminate(), this.destroyed ? n(this, ir).reject(new Error('Worker was destroyed')) : w(this, He, gl).call(this);
    }; const
      r = new AbortController();
    e.addEventListener('error', () => {
      n(this, ba) || s();
    }, {
      signal: r.signal,
    }), i.on('test', (o) => {
      if (r.abort(), this.destroyed || !o) {
        s();
        return;
      }
      g(this, qi, i), g(this, hn, e), g(this, ba, e), w(this, He, Wd).call(this);
    }), i.on('ready', (o) => {
      if (r.abort(), this.destroyed) {
        s();
        return;
      }
      try {
        a();
      } catch {
        w(this, He, gl).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      i.send('test', o, [o.buffer]);
    };
    a();
    return;
  } catch {
    zu('The worker has been disabled.');
  }
  w(this, He, gl).call(this);
}, gl = function () {
  n(Dt, ya) || (X('Setting up fake worker.'), g(Dt, ya, !0)), Dt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, ir).reject(new Error('Worker was destroyed'));
      return;
    }
    const e = new bw();
    g(this, hn, e);
    const i = `fake${Kt(Dt, Iu)._++}`; const
      s = new ol(`${i}_worker`, i, e);
    t.setup(s, e), g(this, qi, new ol(i, `${i}_worker`, e)), w(this, He, Wd).call(this);
  }).catch((t) => {
    n(this, ir).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, lh = new WeakSet(), jd = function () {
  let t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(Dt, lh), b(Dt, Iu, 0), b(Dt, ya, !1), b(Dt, wa, /* @__PURE__ */ new WeakMap()), Be && (g(Dt, ya, !0), ts.workerSrc || (ts.workerSrc = './pdf.worker.mjs')), Dt._isSameOrigin = (t, e) => {
  const i = URL.parse(t);
  if (!(i != null && i.origin) || i.origin === 'null') return !1;
  const s = new URL(e, i);
  return i.origin === s.origin;
}, Dt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: 'text/javascript',
  }));
}, Dt.fromPort = (t) => {
  if (rw('`PDFWorker.fromPort` - please use `PDFWorker.create` instead.'), !(t != null && t.port)) throw new Error('PDFWorker.fromPort - invalid method signature.');
  return Dt.create(t);
};
let Vh = Dt;
let ln; let Ss; let ch; let dh; let cn; let Aa; let
  ml;
class l0 {
  constructor(t, e, i, s, r, a) {
    b(this, Aa);
    b(this, ln, /* @__PURE__ */ new Map());
    b(this, Ss, /* @__PURE__ */ new Map());
    b(this, ch, /* @__PURE__ */ new Map());
    b(this, dh, /* @__PURE__ */ new Map());
    b(this, cn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new nb(), this.fontLoader = new uw({
      ownerDocument: s.ownerDocument,
      styleElement: s.styleElement,
    }), this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }

  get annotationStorage() {
    return J(this, 'annotationStorage', new Vp());
  }

  getRenderingIntent(t, e = Ms.ENABLE, i = null, s = !1, r = !1) {
    let a = bi.DISPLAY; let
      o = If;
    switch (t) {
      case 'any':
        a = bi.ANY;
        break;
      case 'display':
        break;
      case 'print':
        a = bi.PRINT;
        break;
      default:
        X(`getRenderingIntent - invalid intent: ${t}`);
    }
    const h = a & bi.PRINT && i instanceof Um ? i : this.annotationStorage;
    switch (e) {
      case Ms.DISABLE:
        a += bi.ANNOTATIONS_DISABLE;
        break;
      case Ms.ENABLE:
        break;
      case Ms.ENABLE_FORMS:
        a += bi.ANNOTATIONS_FORMS;
        break;
      case Ms.ENABLE_STORAGE:
        a += bi.ANNOTATIONS_STORAGE, o = h.serializable;
        break;
      default:
        X(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    s && (a += bi.IS_EDITING), r && (a += bi.OPLIST);
    const {
      ids: l,
      hash: d,
    } = h.modifiedIds; const
      u = [a, o.hash, d];
    return {
      renderingIntent: a,
      cacheKey: u.join('_'),
      annotationStorageSerializable: o,
      modifiedIds: l,
    };
  }

  destroy() {
    let i;
    if (this.destroyCapability) return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (i = n(this, cn)) == null || i.reject(new Error('Worker was destroyed during onPassword callback'));
    const t = [];
    for (const s of n(this, Ss).values()) t.push(s._destroy());
    n(this, Ss).clear(), n(this, ch).clear(), n(this, dh).clear(), this.hasOwnProperty('annotationStorage') && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise('Terminate', null);
    return t.push(e), Promise.all(t).then(() => {
      let s; let
        r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, ln).clear(), this.filterFactory.destroy(), Rl.cleanup(), (s = this._networkStream) == null || s.cancelAllRequests(new _n('Worker was terminated.')), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }

  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e,
    } = this;
    t.on('GetReader', (i, s) => {
      nt(this._networkStream, 'GetReader - no `IPDFStream` instance available.'), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (r) => {
        this._lastProgress = {
          loaded: r.loaded,
          total: r.total,
        };
      }, s.onPull = () => {
        this._fullReader.read().then(({
          value: r,
          done: a,
        }) => {
          if (a) {
            s.close();
            return;
          }
          nt(r instanceof ArrayBuffer, 'GetReader - expected an ArrayBuffer.'), s.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          s.error(r);
        });
      }, s.onCancel = (r) => {
        this._fullReader.cancel(r), s.ready.catch((a) => {
          if (!this.destroyed) throw a;
        });
      };
    }), t.on('ReaderHeadersReady', async (i) => {
      let o;
      await this._fullReader.headersReady;
      const {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a,
      } = this._fullReader;
      return (!s || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (h) => {
        let l;
        (l = e.onProgress) == null || l.call(e, {
          loaded: h.loaded,
          total: h.total,
        });
      }), {
        isStreamingSupported: s,
        isRangeSupported: r,
        contentLength: a,
      };
    }), t.on('GetRangeReader', (i, s) => {
      nt(this._networkStream, 'GetRangeReader - no `IPDFStream` instance available.');
      const r = this._networkStream.getRangeReader(i.begin, i.end);
      if (!r) {
        s.close();
        return;
      }
      s.onPull = () => {
        r.read().then(({
          value: a,
          done: o,
        }) => {
          if (o) {
            s.close();
            return;
          }
          nt(a instanceof ArrayBuffer, 'GetRangeReader - expected an ArrayBuffer.'), s.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          s.error(a);
        });
      }, s.onCancel = (a) => {
        r.cancel(a), s.ready.catch((o) => {
          if (!this.destroyed) throw o;
        });
      };
    }), t.on('GetDoc', ({
      pdfInfo: i,
    }) => {
      this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new o0(i, this));
    }), t.on('DocException', (i) => {
      e._capability.reject(Ue(i));
    }), t.on('PasswordRequest', (i) => {
      g(this, cn, Promise.withResolvers());
      try {
        if (!e.onPassword) throw Ue(i);
        const s = (r) => {
          r instanceof Error ? n(this, cn).reject(r) : n(this, cn).resolve({
            password: r,
          });
        };
        e.onPassword(s, i.code);
      } catch (s) {
        n(this, cn).reject(s);
      }
      return n(this, cn).promise;
    }), t.on('DataLoaded', (i) => {
      let s;
      (s = e.onProgress) == null || s.call(e, {
        loaded: i.length,
        total: i.length,
      }), this.downloadInfoCapability.resolve(i);
    }), t.on('StartRenderPage', (i) => {
      if (this.destroyed) return;
      n(this, Ss).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
    }), t.on('commonobj', ([i, s, r]) => {
      let a;
      if (this.destroyed || this.commonObjs.has(i)) return null;
      switch (s) {
        case 'Font':
          if ('error' in r) {
            const u = r.error;
            X(`Error during font loading: ${u}`), this.commonObjs.resolve(i, u);
            break;
          }
          const o = new jf(r); const h = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, p) => globalThis.FontInspector.fontAdded(u, p) : null; const
            l = new fw(o, h, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(l).catch(() => t.sendWithPromise('FontFallback', {
            id: i,
          })).finally(() => {
            !l.fontExtraProperties && l.data && l.clearData(), this.commonObjs.resolve(i, l);
          });
          break;
        case 'CopyLocalImage':
          const {
            imageRef: d,
          } = r;
          nt(d, 'The imageRef must be defined.');
          for (const u of n(this, Ss).values()) for (const [, p] of u.objs) if ((p == null ? void 0 : p.ref) === d) return p.dataLen ? (this.commonObjs.resolve(i, structuredClone(p)), p.dataLen) : null;
          break;
        case 'FontPath':
        case 'Image':
        case 'Pattern':
          this.commonObjs.resolve(i, r);
          break;
        default:
          throw new Error(`Got unknown common object type ${s}`);
      }
      return null;
    }), t.on('obj', ([i, s, r, a]) => {
      let h;
      if (this.destroyed) return;
      const o = n(this, Ss).get(s);
      if (!o.objs.has(i)) {
        if (o._intentStates.size === 0) {
          (h = a == null ? void 0 : a.bitmap) == null || h.close();
          return;
        }
        switch (r) {
          case 'Image':
          case 'Pattern':
            o.objs.resolve(i, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on('DocProgress', (i) => {
      let s;
      this.destroyed || (s = e.onProgress) == null || s.call(e, {
        loaded: i.loaded,
        total: i.total,
      });
    }), t.on('FetchBinaryData', async (i) => {
      if (this.destroyed) throw new Error('Worker was destroyed.');
      const s = this[i.type];
      if (!s) throw new Error(`${i.type} not initialized, see the \`useWorkerFetch\` parameter.`);
      return s.fetch(i);
    });
  }

  getData() {
    return this.messageHandler.sendWithPromise('GetData', null);
  }

  saveDocument() {
    let i;
    this.annotationStorage.size <= 0 && X('saveDocument called while `annotationStorage` is empty, please use the getData-method instead.');
    const {
      map: t,
      transfer: e,
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise('SaveDocument', {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: t,
      filename: ((i = this._fullReader) == null ? void 0 : i.filename) ?? null,
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }

  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error('Invalid page request.'));
    const e = t - 1; const
      i = n(this, ch).get(e);
    if (i) return i;
    const s = this.messageHandler.sendWithPromise('GetPage', {
      pageIndex: e,
    }).then((r) => {
      if (this.destroyed) throw new Error('Transport destroyed');
      r.refStr && n(this, dh).set(r.refStr, t);
      const a = new h0(e, r, this, this._params.pdfBug);
      return n(this, Ss).set(e, a), a;
    });
    return n(this, ch).set(e, s), s;
  }

  getPageIndex(t) {
    return Ff(t) ? this.messageHandler.sendWithPromise('GetPageIndex', {
      num: t.num,
      gen: t.gen,
    }) : Promise.reject(new Error('Invalid pageIndex request.'));
  }

  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise('GetAnnotations', {
      pageIndex: t,
      intent: e,
    });
  }

  getFieldObjects() {
    return w(this, Aa, ml).call(this, 'GetFieldObjects');
  }

  hasJSActions() {
    return w(this, Aa, ml).call(this, 'HasJSActions');
  }

  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise('GetCalculationOrderIds', null);
  }

  getDestinations() {
    return this.messageHandler.sendWithPromise('GetDestinations', null);
  }

  getDestination(t) {
    return typeof t !== 'string' ? Promise.reject(new Error('Invalid destination request.')) : this.messageHandler.sendWithPromise('GetDestination', {
      id: t,
    });
  }

  getPageLabels() {
    return this.messageHandler.sendWithPromise('GetPageLabels', null);
  }

  getPageLayout() {
    return this.messageHandler.sendWithPromise('GetPageLayout', null);
  }

  getPageMode() {
    return this.messageHandler.sendWithPromise('GetPageMode', null);
  }

  getViewerPreferences() {
    return this.messageHandler.sendWithPromise('GetViewerPreferences', null);
  }

  getOpenAction() {
    return this.messageHandler.sendWithPromise('GetOpenAction', null);
  }

  getAttachments() {
    return this.messageHandler.sendWithPromise('GetAttachments', null);
  }

  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise('GetAnnotationsByType', {
      types: t,
      pageIndexesToSkip: e,
    });
  }

  getDocJSActions() {
    return w(this, Aa, ml).call(this, 'GetDocJSActions');
  }

  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise('GetPageJSActions', {
      pageIndex: t,
    });
  }

  getStructTree(t) {
    return this.messageHandler.sendWithPromise('GetStructTree', {
      pageIndex: t,
    });
  }

  getOutline() {
    return this.messageHandler.sendWithPromise('GetOutline', null);
  }

  getOptionalContentConfig(t) {
    return w(this, Aa, ml).call(this, 'GetOptionalContentConfig').then((e) => new Uw(e, t));
  }

  getPermissions() {
    return this.messageHandler.sendWithPromise('GetPermissions', null);
  }

  getMetadata() {
    const t = 'GetMetadata';
    const e = n(this, ln).get(t);
    if (e) return e;
    const i = this.messageHandler.sendWithPromise(t, null).then((s) => {
      let r; let
        a;
      return {
        info: s[0],
        metadata: s[1] ? new Hw(s[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null,
      };
    });
    return n(this, ln).set(t, i), i;
  }

  getMarkInfo() {
    return this.messageHandler.sendWithPromise('GetMarkInfo', null);
  }

  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise('Cleanup', null);
      for (const e of n(this, Ss).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, ln).clear(), this.filterFactory.destroy(!0), Rl.cleanup();
    }
  }

  cachedPageNumber(t) {
    if (!Ff(t)) return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, dh).get(e) ?? null;
  }
}
ln = new WeakMap(), Ss = new WeakMap(), ch = new WeakMap(), dh = new WeakMap(), cn = new WeakMap(), Aa = new WeakSet(), ml = function (t, e = null) {
  const i = n(this, ln).get(t);
  if (i) return i;
  const s = this.messageHandler.sendWithPromise(t, e);
  return n(this, ln).set(t, s), s;
};
let sr;
class c0 {
  constructor(t) {
    b(this, sr, null);
    M(this, 'onContinue', null);
    M(this, 'onError', null);
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
      separateAnnots: t,
    } = n(this, sr).operatorList;
    if (!t) return !1;
    const {
      annotationCanvasMap: e,
    } = n(this, sr);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
sr = new WeakMap();
let nr; let
  va;
const Fr = class Fr {
  constructor({
    callback: t,
    params: e,
    objs: i,
    commonObjs: s,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: h,
    filterFactory: l,
    useRequestAnimationFrame: d = !1,
    pdfBug: u = !1,
    pageColors: p = null,
    enableHWA: y = !1,
    operationsFilter: S = null,
  }) {
    b(this, nr, null);
    this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = h, this.filterFactory = l, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < 'u', this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new c0(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = y, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = S;
  }

  get completed() {
    return this.capability.promise.catch(() => {
    });
  }

  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e,
  }) {
    let h; let
      l;
    if (this.cancelled) return;
    if (this._canvas) {
      if (n(Fr, va).has(this._canvas)) throw new Error('Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.');
      n(Fr, va).add(this._canvas);
    }
    this._pdfBug && ((h = globalThis.StepperManager) != null && h.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: i,
      transform: s,
      background: r,
      dependencyTracker: a,
    } = this.params; const
      o = this._canvasContext || this._canvas.getContext('2d', {
        alpha: !1,
        willReadFrequently: !this._enableHWA,
      });
    this.gfx = new mo(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e,
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: s,
      viewport: i,
      transparency: t,
      background: r,
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (l = this.graphicsReadyCallback) == null || l.call(this);
  }

  cancel(t = null, e = 0) {
    let i; let s; let
      r;
    this.running = !1, this.cancelled = !0, (i = this.gfx) == null || i.endDrawing(), n(this, nr) && (window.cancelAnimationFrame(n(this, nr)), g(this, nr, null)), n(Fr, va).delete(this._canvas), t || (t = new Wu(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (s = this.task).onError) == null || r.call(s, t);
  }

  operatorListChanged() {
    let t; let
      e;
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
let Jf = Fr;
const db = '5.4.296';
const ub = 'f56dc8601';
let ri; let Sa; let uh; let Zt; let kc; let fh; let dn; let Mc; let rr; let Xi; let Lc; let bt; let Qf; let Zf; let tp; let kr; let fb; let
  kn;
const Ge = class Ge {
  constructor({
    editor: t = null,
    uiManager: e = null,
  }) {
    b(this, bt);
    b(this, ri, null);
    b(this, Sa, null);
    b(this, uh);
    b(this, Zt, null);
    b(this, kc, !1);
    b(this, fh, !1);
    b(this, dn, null);
    b(this, Mc);
    b(this, rr, null);
    b(this, Xi, null);
    let i; let
      s;
    t ? (g(this, fh, !1), g(this, dn, t)) : g(this, fh, !0), g(this, Xi, (t == null ? void 0 : t._uiManager) || e), g(this, Mc, n(this, Xi)._eventBus), g(this, uh, ((i = t == null ? void 0 : t.color) == null ? void 0 : i.toUpperCase()) || ((s = n(this, Xi)) == null ? void 0 : s.highlightColors.values().next().value) || '#FFFF98'), n(Ge, Lc) || g(Ge, Lc, Object.freeze({
      blue: 'pdfjs-editor-colorpicker-blue',
      green: 'pdfjs-editor-colorpicker-green',
      pink: 'pdfjs-editor-colorpicker-pink',
      red: 'pdfjs-editor-colorpicker-red',
      yellow: 'pdfjs-editor-colorpicker-yellow',
    }));
  }

  static get _keyboardManager() {
    return J(this, '_keyboardManager', new md([[['Escape', 'mac+Escape'], Ge.prototype._hideDropdownFromKeyboard], [[' ', 'mac+ '], Ge.prototype._colorSelectFromKeyboard], [['ArrowDown', 'ArrowRight', 'mac+ArrowDown', 'mac+ArrowRight'], Ge.prototype._moveToNext], [['ArrowUp', 'ArrowLeft', 'mac+ArrowUp', 'mac+ArrowLeft'], Ge.prototype._moveToPrevious], [['Home', 'mac+Home'], Ge.prototype._moveToBeginning], [['End', 'mac+End'], Ge.prototype._moveToEnd]]));
  }

  renderButton() {
    const t = g(this, ri, document.createElement('button'));
    t.className = 'colorPicker', t.tabIndex = '0', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-button'), t.ariaHasPopup = 'true', n(this, dn) && (t.ariaControls = `${n(this, dn).id}_colorpicker_dropdown`);
    const e = n(this, Xi)._signal;
    t.addEventListener('click', w(this, bt, kr).bind(this), {
      signal: e,
    }), t.addEventListener('keydown', w(this, bt, tp).bind(this), {
      signal: e,
    });
    const i = g(this, Sa, document.createElement('span'));
    return i.className = 'swatch', i.ariaHidden = 'true', i.style.backgroundColor = n(this, uh), t.append(i), t;
  }

  renderMainDropdown() {
    const t = g(this, Zt, w(this, bt, Qf).call(this));
    return t.ariaOrientation = 'horizontal', t.ariaLabelledBy = 'highlightColorPickerLabel', t;
  }

  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, ri)) {
      w(this, bt, kr).call(this, t);
      return;
    }
    const e = t.target.getAttribute('data-color');
    e && w(this, bt, Zf).call(this, e, t);
  }

  _moveToNext(t) {
    let e; let
      i;
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
    let e; let
      i;
    if (t.target === ((e = n(this, Zt)) == null ? void 0 : e.firstChild) || t.target === n(this, ri)) {
      n(this, bt, kn) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, bt, kn) || w(this, bt, kr).call(this, t), (i = t.target.previousSibling) == null || i.focus();
  }

  _moveToBeginning(t) {
    let e;
    if (!n(this, bt, kn)) {
      w(this, bt, kr).call(this, t);
      return;
    }
    (e = n(this, Zt).firstChild) == null || e.focus();
  }

  _moveToEnd(t) {
    let e;
    if (!n(this, bt, kn)) {
      w(this, bt, kr).call(this, t);
      return;
    }
    (e = n(this, Zt).lastChild) == null || e.focus();
  }

  hideDropdown() {
    let t; let
      e;
    (t = n(this, Zt)) == null || t.classList.add('hidden'), n(this, ri).ariaExpanded = 'false', (e = n(this, rr)) == null || e.abort(), g(this, rr, null);
  }

  _hideDropdownFromKeyboard() {
    let t;
    if (!n(this, fh)) {
      if (!n(this, bt, kn)) {
        (t = n(this, dn)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, ri).focus({
        preventScroll: !0,
        focusVisible: n(this, kc),
      });
    }
  }

  updateColor(t) {
    if (n(this, Sa) && (n(this, Sa).style.backgroundColor = t), !n(this, Zt)) return;
    const e = n(this, Xi).highlightColors.values();
    for (const i of n(this, Zt).children) i.ariaSelected = e.next().value === t.toUpperCase();
  }

  destroy() {
    let t; let
      e;
    (t = n(this, ri)) == null || t.remove(), g(this, ri, null), g(this, Sa, null), (e = n(this, Zt)) == null || e.remove(), g(this, Zt, null);
  }
};
ri = new WeakMap(), Sa = new WeakMap(), uh = new WeakMap(), Zt = new WeakMap(), kc = new WeakMap(), fh = new WeakMap(), dn = new WeakMap(), Mc = new WeakMap(), rr = new WeakMap(), Xi = new WeakMap(), Lc = new WeakMap(), bt = new WeakSet(), Qf = function () {
  const t = document.createElement('div'); const
    e = n(this, Xi)._signal;
  t.addEventListener('contextmenu', Si, {
    signal: e,
  }), t.className = 'dropdown', t.role = 'listbox', t.ariaMultiSelectable = 'false', t.ariaOrientation = 'vertical', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-dropdown'), n(this, dn) && (t.id = `${n(this, dn).id}_colorpicker_dropdown`);
  for (const [i, s] of n(this, Xi).highlightColors) {
    const r = document.createElement('button');
    r.tabIndex = '0', r.role = 'option', r.setAttribute('data-color', s), r.title = i, r.setAttribute('data-l10n-id', n(Ge, Lc)[i]);
    const a = document.createElement('span');
    r.append(a), a.className = 'swatch', a.style.backgroundColor = s, r.ariaSelected = s === n(this, uh), r.addEventListener('click', w(this, bt, Zf).bind(this, s), {
      signal: e,
    }), t.append(r);
  }
  return t.addEventListener('keydown', w(this, bt, tp).bind(this), {
    signal: e,
  }), t;
}, Zf = function (t, e) {
  e.stopPropagation(), n(this, Mc).dispatch('switchannotationeditorparams', {
    source: this,
    type: it.HIGHLIGHT_COLOR,
    value: t,
  }), this.updateColor(t);
}, tp = function (t) {
  Ge._keyboardManager.exec(this, t);
}, kr = function (t) {
  if (n(this, bt, kn)) {
    this.hideDropdown();
    return;
  }
  if (g(this, kc, t.detail === 0), n(this, rr) || (g(this, rr, new AbortController()), window.addEventListener('pointerdown', w(this, bt, fb).bind(this), {
    signal: n(this, Xi).combinedSignal(n(this, rr)),
  })), n(this, ri).ariaExpanded = 'true', n(this, Zt)) {
    n(this, Zt).classList.remove('hidden');
    return;
  }
  const e = g(this, Zt, w(this, bt, Qf).call(this));
  n(this, ri).append(e);
}, fb = function (t) {
  let e;
  (e = n(this, Zt)) != null && e.contains(t.target) || this.hideDropdown();
}, kn = function () {
  return n(this, Zt) && !n(this, Zt).classList.contains('hidden');
}, b(Ge, Lc, null);
const Dl = Ge;
let xs; let Ic; let ph; let
  Fc;
const Nr = class Nr {
  constructor(t) {
    b(this, xs, null);
    b(this, Ic, null);
    b(this, ph, null);
    g(this, Ic, t), g(this, ph, t._uiManager), n(Nr, Fc) || g(Nr, Fc, Object.freeze({
      freetext: 'pdfjs-editor-color-picker-free-text-input',
      ink: 'pdfjs-editor-color-picker-ink-input',
    }));
  }

  renderButton() {
    if (n(this, xs)) return n(this, xs);
    const {
      editorType: t,
      colorType: e,
      colorValue: i,
    } = n(this, Ic); const
      s = g(this, xs, document.createElement('input'));
    return s.type = 'color', s.value = i || '#000000', s.className = 'basicColorPicker', s.tabIndex = 0, s.setAttribute('data-l10n-id', n(Nr, Fc)[t]), s.addEventListener('input', () => {
      n(this, ph).updateParams(e, s.value);
    }, {
      signal: n(this, ph)._signal,
    }), s;
  }

  update(t) {
    n(this, xs) && (n(this, xs).value = t);
  }

  destroy() {
    let t;
    (t = n(this, xs)) == null || t.remove(), g(this, xs, null);
  }

  hideDropdown() {
  }
};
xs = new WeakMap(), Ic = new WeakMap(), ph = new WeakMap(), Fc = new WeakMap(), b(Nr, Fc, null);
const bu = Nr;
function Lg(c) {
  return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, '0');
}
function Qh(c) {
  return Math.max(0, Math.min(255, 255 * c));
}
class Ig {
  static CMYK_G([t, e, i, s]) {
    return ['G', 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
  }

  static G_CMYK([t]) {
    return ['CMYK', 0, 0, 0, 1 - t];
  }

  static G_RGB([t]) {
    return ['RGB', t, t, t];
  }

  static G_rgb([t]) {
    return t = Qh(t), [t, t, t];
  }

  static G_HTML([t]) {
    const e = Lg(t);
    return `#${e}${e}${e}`;
  }

  static RGB_G([t, e, i]) {
    return ['G', 0.3 * t + 0.59 * e + 0.11 * i];
  }

  static RGB_rgb(t) {
    return t.map(Qh);
  }

  static RGB_HTML(t) {
    return `#${t.map(Lg).join('')}`;
  }

  static T_HTML() {
    return '#00000000';
  }

  static T_rgb() {
    return [null];
  }

  static CMYK_RGB([t, e, i, s]) {
    return ['RGB', 1 - Math.min(1, t + s), 1 - Math.min(1, i + s), 1 - Math.min(1, e + s)];
  }

  static CMYK_rgb([t, e, i, s]) {
    return [Qh(1 - Math.min(1, t + s)), Qh(1 - Math.min(1, i + s)), Qh(1 - Math.min(1, e + s))];
  }

  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }

  static RGB_CMYK([t, e, i]) {
    const s = 1 - t; const r = 1 - e; const a = 1 - i; const
      o = Math.min(s, r, a);
    return ['CMYK', s, r, a, o];
  }
}
class d0 {
  create(t, e, i = !1) {
    if (t <= 0 || e <= 0) throw new Error('Invalid SVG dimensions');
    const s = this._createSVG('svg:svg');
    return s.setAttribute('version', '1.1'), i || (s.setAttribute('width', `${t}px`), s.setAttribute('height', `${e}px`)), s.setAttribute('preserveAspectRatio', 'none'), s.setAttribute('viewBox', `0 0 ${t} ${e}`), s;
  }

  createElement(t) {
    if (typeof t !== 'string') throw new Error('Invalid SVG element type');
    return this._createSVG(t);
  }

  _createSVG(t) {
    Et('Abstract method `_createSVG` called.');
  }
}
class kl extends d0 {
  _createSVG(t) {
    return document.createElementNS(Os, t);
  }
}
const u0 = 9; const Ya = /* @__PURE__ */ new WeakSet(); const
  f0 = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Fg {
  static create(t) {
    switch (t.data.annotationType) {
      case zt.LINK:
        return new Jp(t);
      case zt.TEXT:
        return new g0(t);
      case zt.WIDGET:
        switch (t.data.fieldType) {
          case 'Tx':
            return new m0(t);
          case 'Btn':
            return t.data.radioButton ? new mb(t) : t.data.checkBox ? new y0(t) : new w0(t);
          case 'Ch':
            return new A0(t);
          case 'Sig':
            return new b0(t);
        }
        return new Qa(t);
      case zt.POPUP:
        return new ip(t);
      case zt.FREETEXT:
        return new vb(t);
      case zt.LINE:
        return new S0(t);
      case zt.SQUARE:
        return new x0(t);
      case zt.CIRCLE:
        return new E0(t);
      case zt.POLYLINE:
        return new Sb(t);
      case zt.CARET:
        return new C0(t);
      case zt.INK:
        return new Qp(t);
      case zt.POLYGON:
        return new _0(t);
      case zt.HIGHLIGHT:
        return new xb(t);
      case zt.UNDERLINE:
        return new T0(t);
      case zt.SQUIGGLY:
        return new P0(t);
      case zt.STRIKEOUT:
        return new R0(t);
      case zt.STAMP:
        return new Eb(t);
      case zt.FILEATTACHMENT:
        return new D0(t);
      default:
        return new Ot(t);
    }
  }
}
let xa; let gh; let Li; let Nc; let
  ep;
const og = class og {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: i = !1,
    createQuadrilaterals: s = !1,
  } = {}) {
    b(this, Nc);
    b(this, xa, null);
    b(this, gh, !1);
    b(this, Li, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(i)), s && this._createQuadrilaterals();
  }

  static _hasPopupData({
    contentsObj: t,
    richText: e,
  }) {
    return !!(t != null && t.str || e != null && e.str);
  }

  get _isEditable() {
    return this.data.isEditable;
  }

  get hasPopupData() {
    return og._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }

  get commentData() {
    let i;
    const {
      data: t,
    } = this; const
      e = (i = this.annotationStorage) == null ? void 0 : i.getEditor(t.id);
    return e ? e.getData() : t;
  }

  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }

  get commentButtonPosition() {
    let o;
    const t = (o = this.annotationStorage) == null ? void 0 : o.getEditor(this.data.id);
    if (t) return t.commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: i,
      rect: s,
    } = this.data;
    let r = -1 / 0; let
      a = -1 / 0;
    if ((e == null ? void 0 : e.length) >= 8) {
      for (let h = 0; h < e.length; h += 8) e[h + 1] > a ? (a = e[h + 1], r = e[h + 2]) : e[h + 1] === a && (r = Math.max(r, e[h + 2]));
      return [r, a];
    }
    if ((i == null ? void 0 : i.length) >= 1) {
      for (const h of i) for (let l = 0, d = h.length; l < d; l += 2) h[l + 1] > a ? (a = h[l + 1], r = h[l]) : h[l + 1] === a && (r = Math.max(r, h[l]));
      if (r !== 1 / 0) return [r, a];
    }
    return s ? [s[2], s[3]] : null;
  }

  _normalizePoint(t) {
    const {
      page: {
        view: e,
      },
      viewport: {
        rawDims: {
          pageWidth: i,
          pageHeight: s,
          pageX: r,
          pageY: a,
        },
      },
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / i, t[1] = 100 * (t[1] - a) / s, t;
  }

  get commentText() {
    let e; let i; let
      s;
    const {
      data: t,
    } = this;
    return ((i = (e = this.annotationStorage.getRawValue(`${El}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : i.contents) || ((s = t.contentsObj) == null ? void 0 : s.str) || '';
  }

  set commentText(t) {
    const {
      data: e,
    } = this; const
      i = {
        deleted: !t,
        contents: t || '',
      };
    this.annotationStorage.updateEditor(e.id, {
      popup: i,
    }) || this.annotationStorage.setValue(`${El}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      pageIndex: this.parent.page._pageIndex,
      popup: i,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date(),
    }), t || this.removePopup();
  }

  removePopup() {
    let t; let
      e;
    (e = ((t = n(this, Li)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), g(this, Li, this.popup = null);
  }

  updateEdited(t) {
    let r;
    if (!this.container) return;
    t.rect && (n(this, xa) || g(this, xa, {
      rect: this.data.rect.slice(0),
    }));
    const {
      rect: e,
      popup: i,
    } = t;
    e && w(this, Nc, ep).call(this, e);
    let s = ((r = n(this, Li)) == null ? void 0 : r.popup) || this.popup;
    !s && (i != null && i.text) && (this._createPopup(i), s = n(this, Li).popup), s && (s.updateEdited(t), i != null && i.deleted && (s.remove(), g(this, Li, null), this.popup = null));
  }

  resetEdited() {
    let t;
    n(this, xa) && (w(this, Nc, ep).call(this, n(this, xa).rect), (t = n(this, Li)) == null || t.popup.resetEdited(), g(this, xa, null));
  }

  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: i,
        viewport: s,
      },
    } = this; const
      r = document.createElement('section');
    r.setAttribute('data-annotation-id', e.id), !(this instanceof Qa) && !(this instanceof Jp) && (r.tabIndex = 0);
    const {
      style: a,
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add('norotate'), !e.rect || this instanceof ip) {
      const {
        rotation: v,
      } = e;
      return !e.hasOwnCanvas && v !== 0 && this.setRotation(v, r), r;
    }
    const {
      width: o,
      height: h,
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const v = e.borderStyle.horizontalCornerRadius; const
        _ = e.borderStyle.verticalCornerRadius;
      if (v > 0 || _ > 0) {
        const T = `calc(${v}px * var(--total-scale-factor)) / calc(${_}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      } else if (this instanceof mb) {
        const T = `calc(${o}px * var(--total-scale-factor)) / calc(${h}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      }
      switch (e.borderStyle.style) {
        case io.SOLID:
          a.borderStyle = 'solid';
          break;
        case io.DASHED:
          a.borderStyle = 'dashed';
          break;
        case io.BEVELED:
          X('Unimplemented border style: beveled');
          break;
        case io.INSET:
          X('Unimplemented border style: inset');
          break;
        case io.UNDERLINE:
          a.borderBottomStyle = 'solid';
          break;
      }
      const x = e.borderColor || null;
      x ? (g(this, gh, !0), a.borderColor = U.makeHexColor(x[0] | 0, x[1] | 0, x[2] | 0)) : a.borderWidth = 0;
    }
    const l = U.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]); const
      {
        pageWidth: d,
        pageHeight: u,
        pageX: p,
        pageY: y,
      } = s.rawDims;
    a.left = `${100 * (l[0] - p) / d}%`, a.top = `${100 * (l[1] - y) / u}%`;
    const {
      rotation: S,
    } = e;
    return e.hasOwnCanvas || S === 0 ? (a.width = `${100 * o / d}%`, a.height = `${100 * h / u}%`) : this.setRotation(S, r), r;
  }

  setRotation(t, e = this.container) {
    if (!this.data.rect) return;
    const {
      pageWidth: i,
      pageHeight: s,
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a,
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / i}%`, e.style.height = `${100 * a / s}%`, e.setAttribute('data-main-rotation', (360 - t) % 360);
  }

  get _commonActions() {
    const t = (e, i, s) => {
      const r = s.detail[e]; const a = r[0]; const
        o = r.slice(1);
      s.target.style[i] = Ig[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [i]: Ig[`${a}_rgb`](o),
      });
    };
    return J(this, '_commonActions', {
      display: (e) => {
        const {
          display: i,
        } = e.detail; const
          s = i % 2 === 1;
        this.container.style.visibility = s ? 'hidden' : 'visible', this.annotationStorage.setValue(this.data.id, {
          noView: s,
          noPrint: i === 1 || i === 2,
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print,
        });
      },
      hidden: (e) => {
        const {
          hidden: i,
        } = e.detail;
        this.container.style.visibility = i ? 'hidden' : 'visible', this.annotationStorage.setValue(this.data.id, {
          noPrint: i,
          noView: i,
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1,
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
        t('bgColor', 'backgroundColor', e);
      },
      fillColor: (e) => {
        t('fillColor', 'backgroundColor', e);
      },
      fgColor: (e) => {
        t('fgColor', 'color', e);
      },
      textColor: (e) => {
        t('textColor', 'color', e);
      },
      borderColor: (e) => {
        t('borderColor', 'borderColor', e);
      },
      strokeColor: (e) => {
        t('strokeColor', 'borderColor', e);
      },
      rotation: (e) => {
        const i = e.detail.rotation;
        this.setRotation(i), this.annotationStorage.setValue(this.data.id, {
          rotation: i,
        });
      },
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
    if (!this.enableScripting) return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e) return;
    const i = this._commonActions;
    for (const [s, r] of Object.entries(e)) {
      const a = i[s];
      if (a) {
        const o = {
          detail: {
            [s]: r,
          },
          target: t,
        };
        a(o), delete e[s];
      }
    }
  }

  _createQuadrilaterals() {
    if (!this.container) return;
    const {
      quadPoints: t,
    } = this.data;
    if (!t) return;
    const [e, i, s, r] = this.data.rect.map((v) => Math.fround(v));
    if (t.length === 8) {
      const [v, _, x, T] = t.subarray(2, 6);
      if (s === v && r === _ && e === x && i === T) return;
    }
    const {
      style: a,
    } = this.container;
    let o;
    if (n(this, gh)) {
      const {
        borderColor: v,
        borderWidth: _,
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${v}" stroke-width="${_}">`], this.container.classList.add('hasBorder');
    }
    const h = s - e; const l = r - i; const {
      svgFactory: d,
    } = this; const
      u = d.createElement('svg');
    u.classList.add('quadrilateralsContainer'), u.setAttribute('width', 0), u.setAttribute('height', 0), u.role = 'none';
    const p = d.createElement('defs');
    u.append(p);
    const y = d.createElement('clipPath'); const
      S = `clippath_${this.data.id}`;
    y.setAttribute('id', S), y.setAttribute('clipPathUnits', 'objectBoundingBox'), p.append(y);
    for (let v = 2, _ = t.length; v < _; v += 8) {
      const x = t[v]; const T = t[v + 1]; const E = t[v + 2]; const f = t[v + 3]; const m = d.createElement('rect'); const A = (E - e) / h; const C = (r - T) / l; const P = (x - E) / h; const
        R = (T - f) / l;
      m.setAttribute('x', A), m.setAttribute('y', C), m.setAttribute('width', P), m.setAttribute('height', R), y.append(m), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${A}" y="${C}" width="${P}" height="${R}"/>`);
    }
    n(this, gh) && (o.push("</g></svg>')"), a.backgroundImage = o.join('')), this.container.append(u), this.container.style.clipPath = `url(#${S})`;
  }

  _createPopup(t = null) {
    const {
      data: e,
    } = this;
    let i; let
      s;
    t ? (i = {
      str: t.text,
    }, s = t.date) : (i = e.contentsObj, s = e.modificationDate);
    const r = g(this, Li, new ip({
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
        noRotate: !0,
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this],
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
    Et('Abstract method `AnnotationElement.render` called');
  }

  _getElementsByName(t, e = null) {
    const i = [];
    if (this._fieldObjects) {
      const s = this._fieldObjects[t];
      if (s) {
        for (const {
          page: r,
          id: a,
          exportValues: o,
        } of s) {
          if (r === -1 || a === e) continue;
          const h = typeof o === 'string' ? o : null; const
            l = document.querySelector(`[data-element-id="${a}"]`);
          if (l && !Ya.has(l)) {
            X(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          i.push({
            id: a,
            exportValue: h,
            domElement: l,
          });
        }
      }
      return i;
    }
    for (const s of document.getElementsByName(t)) {
      const {
        exportValue: r,
      } = s; const
        a = s.getAttribute('data-element-id');
      a !== e && Ya.has(s) && i.push({
        id: a,
        exportValue: r,
        domElement: s,
      });
    }
    return i;
  }

  show() {
    let t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }

  hide() {
    let t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }

  getElementsToTriggerPopup() {
    return this.container;
  }

  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t)) for (const e of t) e.classList.add('highlightArea');
    else t.classList.add('highlightArea');
  }

  _editOnDoubleClick() {
    if (!this._isEditable) return;
    const {
      annotationEditorType: t,
      data: {
        id: e,
      },
    } = this;
    this.container.addEventListener('dblclick', () => {
      let i;
      (i = this.linkService.eventBus) == null || i.dispatch('switchannotationeditormode', {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0,
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
xa = new WeakMap(), gh = new WeakMap(), Li = new WeakMap(), Nc = new WeakSet(), ep = function (t) {
  const {
    container: {
      style: e,
    },
    data: {
      rect: i,
      rotation: s,
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: h,
        },
      },
    },
  } = this;
  i == null || i.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + h) / a}%`, s === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(s);
};
let Ot = og;
class p0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    }), this.editor = t.editor;
  }

  render() {
    return this.container.className = 'editorAnnotation', this.container;
  }

  createOrUpdatePopup() {
    const {
      editor: t,
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
let wi; let Mr; let pb; let
  gb;
class Jp extends Ot {
  constructor(e, i = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(i != null && i.ignoreBorder),
      createQuadrilaterals: !0,
    });
    b(this, wi);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }

  render() {
    const {
      data: e,
      linkService: i,
    } = this; const
      s = document.createElement('a');
    s.setAttribute('data-element-id', e.id);
    let r = !1;
    return e.url ? (i.addLinkAttributes(s, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(s, e.action, e.overlaidText), r = !0) : e.attachment ? (w(this, wi, pb).call(this, s, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (w(this, wi, gb).call(this, s, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(s, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions['Mouse Up'] || e.actions['Mouse Down']) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, e), r = !0), e.resetForm ? (this._bindResetFormAction(s, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(s, ''), r = !0)), this.container.classList.add('linkAnnotation'), r && this.container.append(s), this.container;
  }

  _bindLink(e, i, s = '') {
    e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === '') && w(this, wi, Mr).call(this), s && (e.title = s);
  }

  _bindNamedAction(e, i, s = '') {
    e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeNamedAction(i), !1), s && (e.title = s), w(this, wi, Mr).call(this);
  }

  _bindJSAction(e, i) {
    e.href = this.linkService.getAnchorUrl('');
    const s = /* @__PURE__ */ new Map([['Action', 'onclick'], ['Mouse Up', 'onmouseup'], ['Mouse Down', 'onmousedown']]);
    for (const r of Object.keys(i.actions)) {
      const a = s.get(r);
      a && (e[a] = () => {
        let o;
        return (o = this.linkService.eventBus) == null || o.dispatch('dispatcheventinsandbox', {
          source: this,
          detail: {
            id: i.id,
            name: r,
          },
        }), !1;
      });
    }
    i.overlaidText && (e.title = i.overlaidText), e.onclick || (e.onclick = () => !1), w(this, wi, Mr).call(this);
  }

  _bindResetFormAction(e, i) {
    const s = e.onclick;
    if (s || (e.href = this.linkService.getAnchorUrl('')), w(this, wi, Mr).call(this), !this._fieldObjects) {
      X('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      let u;
      s == null || s();
      const {
        fields: r,
        refs: a,
        include: o,
      } = i; const
        h = [];
      if (r.length !== 0 || a.length !== 0) {
        const p = new Set(a);
        for (const y of r) {
          const S = this._fieldObjects[y] || [];
          for (const {
            id: v,
          } of S) p.add(v);
        }
        for (const y of Object.values(this._fieldObjects)) for (const S of y) p.has(S.id) === o && h.push(S);
      } else for (const p of Object.values(this._fieldObjects)) h.push(...p);
      const l = this.annotationStorage; const
        d = [];
      for (const p of h) {
        const {
          id: y,
        } = p;
        switch (d.push(y), p.type) {
          case 'text': {
            const v = p.defaultValue || '';
            l.setValue(y, {
              value: v,
            });
            break;
          }
          case 'checkbox':
          case 'radiobutton': {
            const v = p.defaultValue === p.exportValues;
            l.setValue(y, {
              value: v,
            });
            break;
          }
          case 'combobox':
          case 'listbox': {
            const v = p.defaultValue || '';
            l.setValue(y, {
              value: v,
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
        S.dispatchEvent(new Event('resetform'));
      }
      return this.enableScripting && ((u = this.linkService.eventBus) == null || u.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: 'app',
          ids: d,
          name: 'ResetForm',
        },
      })), !1;
    };
  }
}
wi = new WeakSet(), Mr = function () {
  this.container.setAttribute('data-internal-link', '');
}, pb = function (e, i, s = '', r = null) {
  e.href = this.linkService.getAnchorUrl(''), i.description ? e.title = i.description : s && (e.title = s), e.onclick = () => {
    let a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(i.content, i.filename, r), !1;
  }, w(this, wi, Mr).call(this);
}, gb = function (e, i, s = '') {
  e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeSetOCGState(i), !1), s && (e.title = s), w(this, wi, Mr).call(this);
};
class g0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
    });
  }

  render() {
    this.container.classList.add('textAnnotation');
    const t = document.createElement('img');
    return t.src = `${this.imageResourcesPath}annotation-${this.data.name.toLowerCase()}.svg`, t.setAttribute('data-l10n-id', 'pdfjs-text-annotation-type'), t.setAttribute('data-l10n-args', JSON.stringify({
      type: this.data.name,
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
  }
}
class Qa extends Ot {
  render() {
    return this.container;
  }

  showElementAndHideCanvas(t) {
    let e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === 'CANVAS' && (t.previousSibling.hidden = !0), t.hidden = !1);
  }

  _getKeyModifier(t) {
    return ce.platform.isMac ? t.metaKey : t.ctrlKey;
  }

  _setEventListener(t, e, i, s, r) {
    i.includes('mouse') ? t.addEventListener(i, (a) => {
      let o;
      (o = this.linkService.eventBus) == null || o.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a),
        },
      });
    }) : t.addEventListener(i, (a) => {
      let o;
      if (i === 'blur') {
        if (!e.focused || !a.relatedTarget) return;
        e.focused = !1;
      } else if (i === 'focus') {
        if (e.focused) return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: this.data.id,
          name: s,
          value: r(a),
        },
      }));
    });
  }

  _setEventListeners(t, e, i, s) {
    let r; let a; let
      o;
    for (const [h, l] of i) {
      (l === 'Action' || (r = this.data.actions) != null && r[l]) && ((l === 'Focus' || l === 'Blur') && (e || (e = {
        focused: !1,
      })), this._setEventListener(t, e, h, l, s), l === 'Focus' && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, 'blur', 'Blur', null) : l === 'Blur' && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, 'focus', 'Focus', null));
    }
  }

  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? 'transparent' : U.makeHexColor(e[0], e[1], e[2]);
  }

  _setTextStyle(t) {
    const e = ['left', 'center', 'right']; const {
      fontColor: i,
    } = this.data.defaultAppearanceData; const s = this.data.defaultAppearanceData.fontSize || u0; const
      r = t.style;
    let a;
    const o = 2; const
      h = (l) => Math.round(10 * l) / 10;
    if (this.data.multiLine) {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o); const d = Math.round(l / (tf * s)) || 1; const
        u = l / d;
      a = Math.min(s, h(u / tf));
    } else {
      const l = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(s, h(l / tf));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = U.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }

  _setRequired(t, e) {
    e ? t.setAttribute('required', !0) : t.removeAttribute('required'), t.setAttribute('aria-required', e);
  }
}
class m0 extends Qa {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e,
    });
  }

  setPropertyOnSiblings(t, e, i, s) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id)) {
      a.domElement && (a.domElement[e] = i), r.setValue(a.id, {
        [s]: i,
      });
    }
  }

  render() {
    let s; let
      r;
    const t = this.annotationStorage; const
      e = this.data.id;
    this.container.classList.add('textWidgetAnnotation');
    let i = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue,
      });
      let o = a.value || '';
      const h = t.getValue(e, {
        charLimit: this.data.maxLen,
      }).charLimit;
      h && o.length > h && (o = o.slice(0, h));
      let l = a.formattedValue || ((s = this.data.textContent) == null ? void 0 : s.join(`
`)) || null;
      l && this.data.comb && (l = l.replaceAll(/\s+/g, ''));
      const d = {
        userValue: o,
        formattedValue: l,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1,
      };
      this.data.multiLine ? (i = document.createElement('textarea'), i.textContent = l ?? o, this.data.doNotScroll && (i.style.overflowY = 'hidden')) : (i = document.createElement('input'), i.type = this.data.password ? 'password' : 'text', i.setAttribute('value', l ?? o), this.data.doNotScroll && (i.style.overflowX = 'hidden')), this.data.hasOwnCanvas && (i.hidden = !0), Ya.add(i), i.setAttribute('data-element-id', e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: p,
        timeStep: y,
      } = this.data; const
        S = !!p && this.enableScripting;
      u && (i.title = u), this._setRequired(i, this.data.required), h && (i.maxLength = h), i.addEventListener('input', (_) => {
        t.setValue(e, {
          value: _.target.value,
        }), this.setPropertyOnSiblings(i, 'value', _.target.value, 'value'), d.formattedValue = null;
      }), i.addEventListener('resetform', (_) => {
        const x = this.data.defaultFieldValue ?? '';
        i.value = d.userValue = x, d.formattedValue = null;
      });
      let v = (_) => {
        const {
          formattedValue: x,
        } = d;
        x != null && (_.target.value = x), _.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        i.addEventListener('focus', (x) => {
          let E;
          if (d.focused) return;
          const {
            target: T,
          } = x;
          if (S && (T.type = p, y && (T.step = y)), d.userValue) {
            const f = d.userValue;
            if (S) {
              if (p === 'time') {
                const m = new Date(f); const
                  A = [m.getHours(), m.getMinutes(), m.getSeconds()];
                T.value = A.map((C) => C.toString().padStart(2, '0')).join(':');
              } else T.value = new Date(f - f0).toISOString().split(p === 'date' ? 'T' : '.', 1)[0];
            } else T.value = f;
          }
          d.lastCommittedValue = T.value, d.commitKey = 1, (E = this.data.actions) != null && E.Focus || (d.focused = !0);
        }), i.addEventListener('updatefromsandbox', (x) => {
          this.showElementAndHideCanvas(x.target);
          const T = {
            value(E) {
              d.userValue = E.detail.value ?? '', S || t.setValue(e, {
                value: d.userValue.toString(),
              }), E.target.value = d.userValue;
            },
            formattedValue(E) {
              const {
                formattedValue: f,
              } = E.detail;
              d.formattedValue = f, f != null && E.target !== document.activeElement && (E.target.value = f);
              const m = {
                formattedValue: f,
              };
              S && (m.value = f), t.setValue(e, m);
            },
            selRange(E) {
              E.target.setSelectionRange(...E.detail.selRange);
            },
            charLimit: (E) => {
              let C;
              const {
                charLimit: f,
              } = E.detail; const
                {
                  target: m,
                } = E;
              if (f === 0) {
                m.removeAttribute('maxLength');
                return;
              }
              m.setAttribute('maxLength', f);
              let A = d.userValue;
              !A || A.length <= f || (A = A.slice(0, f), m.value = d.userValue = A, t.setValue(e, {
                value: A,
              }), (C = this.linkService.eventBus) == null || C.dispatch('dispatcheventinsandbox', {
                source: this,
                detail: {
                  id: e,
                  name: 'Keystroke',
                  value: A,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: m.selectionStart,
                  selEnd: m.selectionEnd,
                },
              }));
            },
          };
          this._dispatchEventFromSandbox(T, x);
        }), i.addEventListener('keydown', (x) => {
          let f;
          d.commitKey = 1;
          let T = -1;
          if (x.key === 'Escape' ? T = 0 : x.key === 'Enter' && !this.data.multiLine ? T = 2 : x.key === 'Tab' && (d.commitKey = 3), T === -1) return;
          const {
            value: E,
          } = x.target;
          d.lastCommittedValue !== E && (d.lastCommittedValue = E, d.userValue = E, (f = this.linkService.eventBus) == null || f.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: E,
              willCommit: !0,
              commitKey: T,
              selStart: x.target.selectionStart,
              selEnd: x.target.selectionEnd,
            },
          }));
        });
        const _ = v;
        v = null, i.addEventListener('blur', (x) => {
          let f; let
            m;
          if (!d.focused || !x.relatedTarget) return;
          (f = this.data.actions) != null && f.Blur || (d.focused = !1);
          const {
            target: T,
          } = x;
          let {
            value: E,
          } = T;
          if (S) {
            if (E && p === 'time') {
              const A = E.split(':').map((C) => parseInt(C, 10));
              E = new Date(2e3, 0, 1, A[0], A[1], A[2] || 0).valueOf(), T.step = '';
            } else E.includes('T') || (E = `${E}T00:00`), E = new Date(E).valueOf();
            T.type = 'text';
          }
          d.userValue = E, d.lastCommittedValue !== E && ((m = this.linkService.eventBus) == null || m.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: E,
              willCommit: !0,
              commitKey: d.commitKey,
              selStart: x.target.selectionStart,
              selEnd: x.target.selectionEnd,
            },
          })), _(x);
        }), (r = this.data.actions) != null && r.Keystroke && i.addEventListener('beforeinput', (x) => {
          let R;
          d.lastCommittedValue = null;
          const {
            data: T,
            target: E,
          } = x; const
            {
              value: f,
              selectionStart: m,
              selectionEnd: A,
            } = E;
          let C = m; let
            P = A;
          switch (x.inputType) {
            case 'deleteWordBackward': {
              const D = f.substring(0, m).match(/\w*[^\w]*$/);
              D && (C -= D[0].length);
              break;
            }
            case 'deleteWordForward': {
              const D = f.substring(m).match(/^[^\w]*\w*/);
              D && (P += D[0].length);
              break;
            }
            case 'deleteContentBackward':
              m === A && (C -= 1);
              break;
            case 'deleteContentForward':
              m === A && (P += 1);
              break;
          }
          x.preventDefault(), (R = this.linkService.eventBus) == null || R.dispatch('dispatcheventinsandbox', {
            source: this,
            detail: {
              id: e,
              name: 'Keystroke',
              value: f,
              change: T || '',
              willCommit: !1,
              selStart: C,
              selEnd: P,
            },
          });
        }), this._setEventListeners(i, d, [['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (x) => x.target.value);
      }
      if (v && i.addEventListener('blur', v), this.data.comb) {
        const x = (this.data.rect[2] - this.data.rect[0]) / h;
        i.classList.add('comb'), i.style.letterSpacing = `calc(${x}px * var(--total-scale-factor) - 1ch)`;
      }
    } else i = document.createElement('div'), i.textContent = this.data.fieldValue, i.style.verticalAlign = 'middle', i.style.display = 'table-cell', this.data.hasOwnCanvas && (i.hidden = !0);
    return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class b0 extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas,
    });
  }
}
class y0 extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    const t = this.annotationStorage; const e = this.data; const
      i = e.id;
    let s = t.getValue(i, {
      value: e.exportValue === e.fieldValue,
    }).value;
    typeof s === 'string' && (s = s !== 'Off', t.setValue(i, {
      value: s,
    })), this.container.classList.add('buttonWidgetAnnotation', 'checkBox');
    const r = document.createElement('input');
    return Ya.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'checkbox', r.name = e.fieldName, s && r.setAttribute('checked', !0), r.setAttribute('exportValue', e.exportValue), r.tabIndex = 0, r.addEventListener('change', (a) => {
      const {
        name: o,
        checked: h,
      } = a.target;
      for (const l of this._getElementsByName(o, i)) {
        const d = h && l.exportValue === e.exportValue;
        l.domElement && (l.domElement.checked = d), t.setValue(l.id, {
          value: d,
        });
      }
      t.setValue(i, {
        value: h,
      });
    }), r.addEventListener('resetform', (a) => {
      const o = e.defaultFieldValue || 'Off';
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener('updatefromsandbox', (a) => {
      const o = {
        value(h) {
          h.target.checked = h.detail.value !== 'Off', t.setValue(i, {
            value: h.target.checked,
          });
        },
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [['change', 'Validate'], ['change', 'Action'], ['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class mb extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    this.container.classList.add('buttonWidgetAnnotation', 'radioButton');
    const t = this.annotationStorage; const e = this.data; const
      i = e.id;
    let s = t.getValue(i, {
      value: e.fieldValue === e.buttonValue,
    }).value;
    if (typeof s === 'string' && (s = s !== e.buttonValue, t.setValue(i, {
      value: s,
    })), s) {
      for (const a of this._getElementsByName(e.fieldName, i)) {
        t.setValue(a.id, {
          value: !1,
        });
      }
    }
    const r = document.createElement('input');
    if (Ya.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'radio', r.name = e.fieldName, s && r.setAttribute('checked', !0), r.tabIndex = 0, r.addEventListener('change', (a) => {
      const {
        name: o,
        checked: h,
      } = a.target;
      for (const l of this._getElementsByName(o, i)) {
        t.setValue(l.id, {
          value: !1,
        });
      }
      t.setValue(i, {
        value: h,
      });
    }), r.addEventListener('resetform', (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener('updatefromsandbox', (o) => {
        const h = {
          value: (l) => {
            const d = a === l.detail.value;
            for (const u of this._getElementsByName(l.target.name)) {
              const p = d && u.id === i;
              u.domElement && (u.domElement.checked = p), t.setValue(u.id, {
                value: p,
              });
            }
          },
        };
        this._dispatchEventFromSandbox(h, o);
      }), this._setEventListeners(r, null, [['change', 'Validate'], ['change', 'Action'], ['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class w0 extends Jp {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance,
    });
  }

  render() {
    const t = super.render();
    t.classList.add('buttonWidgetAnnotation', 'pushButton');
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener('updatefromsandbox', (i) => {
      this._dispatchEventFromSandbox({}, i);
    })), t;
  }
}
class A0 extends Qa {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms,
    });
  }

  render() {
    this.container.classList.add('choiceWidgetAnnotation');
    const t = this.annotationStorage; const e = this.data.id; const i = t.getValue(e, {
      value: this.data.fieldValue,
    }); const
      s = document.createElement('select');
    Ya.add(s), s.setAttribute('data-element-id', e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = !0)), s.addEventListener('resetform', (d) => {
      const u = this.data.defaultFieldValue;
      for (const p of s.options) p.selected = p.value === u;
    });
    for (const d of this.data.options) {
      const u = document.createElement('option');
      u.textContent = d.displayValue, u.value = d.exportValue, i.value.includes(d.exportValue) && (u.setAttribute('selected', !0), r = !1), s.append(u);
    }
    let a = null;
    if (r) {
      const d = document.createElement('option');
      d.value = ' ', d.setAttribute('hidden', !0), d.setAttribute('selected', !0), s.prepend(d), a = () => {
        d.remove(), s.removeEventListener('input', a), a = null;
      }, s.addEventListener('input', a);
    }
    const o = (d) => {
      const u = d ? 'value' : 'textContent';
      const {
        options: p,
        multiple: y,
      } = s;
      return y ? Array.prototype.filter.call(p, (S) => S.selected).map((S) => S[u]) : p.selectedIndex === -1 ? null : p[p.selectedIndex][u];
    };
    let h = o(!1);
    const l = (d) => {
      const u = d.target.options;
      return Array.prototype.map.call(u, (p) => ({
        displayValue: p.textContent,
        exportValue: p.value,
      }));
    };
    return this.enableScripting && this.hasJSActions ? (s.addEventListener('updatefromsandbox', (d) => {
      const u = {
        value(p) {
          a == null || a();
          const y = p.detail.value; const
            S = new Set(Array.isArray(y) ? y : [y]);
          for (const v of s.options) v.selected = S.has(v.value);
          t.setValue(e, {
            value: o(!0),
          }), h = o(!1);
        },
        multipleSelection(p) {
          s.multiple = !0;
        },
        remove(p) {
          const y = s.options; const
            S = p.detail.remove;
          y[S].selected = !1, s.remove(S), y.length > 0 && Array.prototype.findIndex.call(y, (_) => _.selected) === -1 && (y[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(p),
          }), h = o(!1);
        },
        clear(p) {
          for (; s.length !== 0;) s.remove(0);
          t.setValue(e, {
            value: null,
            items: [],
          }), h = o(!1);
        },
        insert(p) {
          const {
            index: y,
            displayValue: S,
            exportValue: v,
          } = p.detail.insert; const _ = s.children[y]; const
            x = document.createElement('option');
          x.textContent = S, x.value = v, _ ? _.before(x) : s.append(x), t.setValue(e, {
            value: o(!0),
            items: l(p),
          }), h = o(!1);
        },
        items(p) {
          const {
            items: y,
          } = p.detail;
          for (; s.length !== 0;) s.remove(0);
          for (const S of y) {
            const {
              displayValue: v,
              exportValue: _,
            } = S; const
              x = document.createElement('option');
            x.textContent = v, x.value = _, s.append(x);
          }
          s.options.length > 0 && (s.options[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: l(p),
          }), h = o(!1);
        },
        indices(p) {
          const y = new Set(p.detail.indices);
          for (const S of p.target.options) S.selected = y.has(S.index);
          t.setValue(e, {
            value: o(!0),
          }), h = o(!1);
        },
        editable(p) {
          p.target.disabled = !p.detail.editable;
        },
      };
      this._dispatchEventFromSandbox(u, d);
    }), s.addEventListener('input', (d) => {
      let y;
      const u = o(!0); const
        p = o(!1);
      t.setValue(e, {
        value: u,
      }), d.preventDefault(), (y = this.linkService.eventBus) == null || y.dispatch('dispatcheventinsandbox', {
        source: this,
        detail: {
          id: e,
          name: 'Keystroke',
          value: h,
          change: p,
          changeEx: u,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1,
        },
      });
    }), this._setEventListeners(s, null, [['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up'], ['input', 'Action'], ['input', 'Validate']], (d) => d.target.value)) : s.addEventListener('input', (d) => {
      t.setValue(e, {
        value: o(!0),
      });
    }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
let Oc; let
  sp;
class ip extends Ot {
  constructor(e) {
    const {
      data: i,
      elements: s,
      parent: r,
    } = e; const
      a = !!r._commentManager;
    super(e, {
      isRenderable: !a && Ot._hasPopupData(i),
    });
    b(this, Oc);
    if (this.elements = s, a && Ot._hasPopupData(i)) {
      const o = this.popup = w(this, Oc, sp).call(this);
      for (const h of s) h.popup = o;
    } else this.popup = null;
  }

  render() {
    const {
      container: e,
    } = this;
    e.classList.add('popupAnnotation'), e.role = 'comment';
    const i = this.popup = w(this, Oc, sp).call(this); const
      s = [];
    for (const r of this.elements) r.popup = i, r.container.ariaHasPopup = 'dialog', s.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute('aria-controls', s.map((r) => `${zp}${r}`).join(',')), this.container;
  }
}
Oc = new WeakSet(), sp = function () {
  return new v0({
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
    commentManager: this.parent._commentManager,
  });
};
let ai; let ar; let Fu; let Nu; let mh; let bh; let $t; let Es; let or; let Ea; let yh; let wh; let _s; let oi; let un; let fn; let ne; let pn; let hr; let Bc; let gn; let Ah; let _a; let lr; let Pe; let cr; let Z; let Vd; let np; let rp; let ap; let qd; let op; let bb; let yb; let wb; let Ab; let Xd; let Yd; let
  hp;
class v0 {
  constructor({
    container: t,
    color: e,
    elements: i,
    titleObj: s,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: h,
    rect: l,
    parentRect: d,
    open: u,
    commentManager: p = null,
  }) {
    b(this, Z);
    b(this, ai, null);
    b(this, ar, w(this, Z, wb).bind(this));
    b(this, Fu, w(this, Z, hp).bind(this));
    b(this, Nu, w(this, Z, Yd).bind(this));
    b(this, mh, w(this, Z, Xd).bind(this));
    b(this, bh, null);
    b(this, $t, null);
    b(this, Es, null);
    b(this, or, null);
    b(this, Ea, null);
    b(this, yh, null);
    b(this, wh, null);
    b(this, _s, !1);
    b(this, oi, null);
    b(this, un, null);
    b(this, fn, null);
    b(this, ne, null);
    b(this, pn, null);
    b(this, hr, null);
    b(this, Bc, null);
    b(this, gn, null);
    b(this, Ah, null);
    b(this, _a, null);
    b(this, lr, !1);
    b(this, Pe, null);
    b(this, cr, null);
    g(this, $t, t), g(this, Ah, s), g(this, Es, a), g(this, gn, o), g(this, yh, h), g(this, bh, e), g(this, Bc, l), g(this, wh, d), g(this, Ea, i), g(this, ai, p), g(this, Pe, i[0]), g(this, or, Tl.toDateObject(r)), this.trigger = i.flatMap((y) => y.getElementsToTriggerPopup()), p ? this.renderCommentButton() : (w(this, Z, Vd).call(this), n(this, $t).hidden = !0, u && w(this, Z, Xd).call(this));
  }

  renderCommentButton() {
    if (n(this, ne) || (n(this, pn) || w(this, Z, np).call(this), !n(this, pn))) return;
    const {
      signal: t,
    } = g(this, un, new AbortController()); const e = !!n(this, Pe).extraPopupElement; const i = () => {
      n(this, ai).toggleCommentPopup(this, !0, void 0, !e);
    }; const s = () => {
      n(this, ai).toggleCommentPopup(this, !1, !0, !e);
    }; const
      r = () => {
        n(this, ai).toggleCommentPopup(this, !1, !1);
      };
    if (e) {
      g(this, ne, n(this, Pe).container);
      for (const a of this.trigger) {
        a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.addEventListener('keydown', n(this, ar), {
          signal: t,
        }), a.addEventListener('click', i, {
          signal: t,
        }), a.addEventListener('pointerenter', s, {
          signal: t,
        }), a.addEventListener('pointerleave', r, {
          signal: t,
        }), a.classList.add('popupTriggerArea');
      }
    } else {
      const a = g(this, ne, document.createElement('button'));
      a.className = 'annotationCommentButton';
      const o = n(this, Pe).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.setAttribute('data-l10n-id', 'pdfjs-show-comment-button'), w(this, Z, ap).call(this), w(this, Z, rp).call(this), a.addEventListener('keydown', n(this, ar), {
        signal: t,
      }), a.addEventListener('click', i, {
        signal: t,
      }), a.addEventListener('pointerenter', s, {
        signal: t,
      }), a.addEventListener('pointerleave', r, {
        signal: t,
      }), o.after(a);
    }
  }

  get commentButtonColor() {
    const {
      color: t,
      opacity: e,
    } = n(this, Pe).commentData;
    return t ? n(this, yh)._commentManager.makeCommentColor(t, e) : null;
  }

  focusCommentButton() {
    setTimeout(() => {
      let t;
      (t = n(this, ne)) == null || t.focus();
    }, 0);
  }

  getData() {
    const {
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r,
    } = n(this, Pe).commentData;
    return {
      contentsObj: {
        str: this.comment,
      },
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r,
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
    hasPopup: e,
  }) {
    n(this, ne) && (n(this, ne).classList.toggle('selected', t), n(this, ne).ariaExpanded = e);
  }

  setSelectedCommentButton(t) {
    n(this, ne).classList.toggle('selected', t);
  }

  get commentPopupPosition() {
    if (n(this, hr)) return n(this, hr);
    const {
      x: t,
      y: e,
      height: i,
    } = n(this, ne).getBoundingClientRect(); const
      {
        x: s,
        y: r,
        width: a,
        height: o,
      } = n(this, Pe).layer.getBoundingClientRect();
    return [(t - s) / a, (e + i - r) / o];
  }

  set commentPopupPosition(t) {
    g(this, hr, t);
  }

  hasDefaultPopupPosition() {
    return n(this, hr) === null;
  }

  get commentButtonPosition() {
    return n(this, pn);
  }

  get commentButtonWidth() {
    return n(this, ne).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }

  editComment(t) {
    const [e, i] = n(this, hr) || this.commentButtonPosition.map((l) => l / 100); const s = this.parentBoundingClientRect; const
      {
        x: r,
        y: a,
        width: o,
        height: h,
      } = s;
    n(this, ai).showDialog(null, this, r + e * o, a + i * h, {
      ...t,
      parentDimensions: s,
    });
  }

  render() {
    let i; let
      s;
    if (n(this, oi)) return;
    const t = g(this, oi, document.createElement('div'));
    if (t.className = 'popup', n(this, bh)) {
      const r = t.style.outlineColor = U.makeHexColor(...n(this, bh));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement('span');
    if (e.className = 'header', (i = n(this, Ah)) != null && i.str) {
      const r = document.createElement('span');
      r.className = 'title', e.append(r), {
        dir: r.dir,
        str: r.textContent,
      } = n(this, Ah);
    }
    if (t.append(e), n(this, or)) {
      const r = document.createElement('time');
      r.className = 'popupDate', r.setAttribute('data-l10n-id', 'pdfjs-annotation-date-time-string'), r.setAttribute('data-l10n-args', JSON.stringify({
        dateObj: n(this, or).valueOf(),
      })), r.dateTime = n(this, or).toISOString(), e.append(r);
    }
    jp({
      html: n(this, Z, qd) || n(this, Es).str,
      dir: (s = n(this, Es)) == null ? void 0 : s.dir,
      className: 'popupContent',
    }, t), n(this, $t).append(t);
  }

  updateEdited({
    rect: t,
    popup: e,
    deleted: i,
  }) {
    let s;
    if (n(this, ai)) {
      i ? (this.remove(), g(this, cr, null)) : e && (e.deleted ? this.remove() : (w(this, Z, ap).call(this), g(this, cr, e.text))), t && (g(this, pn, null), w(this, Z, np).call(this), w(this, Z, rp).call(this));
      return;
    }
    if (i || e != null && e.deleted) {
      this.remove();
      return;
    }
    w(this, Z, Vd).call(this), n(this, _a) || g(this, _a, {
      contentsObj: n(this, Es),
      richText: n(this, gn),
    }), t && g(this, fn, null), e && e.text && (g(this, gn, w(this, Z, yb).call(this, e.text)), g(this, or, Tl.toDateObject(e.date)), g(this, Es, null)), (s = n(this, oi)) == null || s.remove(), g(this, oi, null);
  }

  resetEdited() {
    let t;
    n(this, _a) && ({
      contentsObj: Kt(this, Es)._,
      richText: Kt(this, gn)._,
    } = n(this, _a), g(this, _a, null), (t = n(this, oi)) == null || t.remove(), g(this, oi, null), g(this, fn, null));
  }

  remove() {
    let t; let e; let
      i;
    if ((t = n(this, un)) == null || t.abort(), g(this, un, null), (e = n(this, oi)) == null || e.remove(), g(this, oi, null), g(this, lr, !1), g(this, _s, !1), (i = n(this, ne)) == null || i.remove(), g(this, ne, null), this.trigger) for (const s of this.trigger) s.classList.remove('popupTriggerArea');
  }

  forceHide() {
    g(this, lr, this.isVisible), n(this, lr) && (n(this, $t).hidden = !0);
  }

  maybeShow() {
    n(this, ai) || (w(this, Z, Vd).call(this), n(this, lr) && (n(this, oi) || w(this, Z, Yd).call(this), g(this, lr, !1), n(this, $t).hidden = !1));
  }

  get isVisible() {
    return n(this, ai) ? !1 : n(this, $t).hidden === !1;
  }
}
ai = new WeakMap(), ar = new WeakMap(), Fu = new WeakMap(), Nu = new WeakMap(), mh = new WeakMap(), bh = new WeakMap(), $t = new WeakMap(), Es = new WeakMap(), or = new WeakMap(), Ea = new WeakMap(), yh = new WeakMap(), wh = new WeakMap(), _s = new WeakMap(), oi = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), ne = new WeakMap(), pn = new WeakMap(), hr = new WeakMap(), Bc = new WeakMap(), gn = new WeakMap(), Ah = new WeakMap(), _a = new WeakMap(), lr = new WeakMap(), Pe = new WeakMap(), cr = new WeakMap(), Z = new WeakSet(), Vd = function () {
  let e;
  if (n(this, un)) return;
  g(this, un, new AbortController());
  const {
    signal: t,
  } = n(this, un);
  for (const i of this.trigger) {
    i.addEventListener('click', n(this, mh), {
      signal: t,
    }), i.addEventListener('pointerenter', n(this, Nu), {
      signal: t,
    }), i.addEventListener('pointerleave', n(this, Fu), {
      signal: t,
    }), i.classList.add('popupTriggerArea');
  }
  for (const i of n(this, Ea)) {
    (e = i.container) == null || e.addEventListener('keydown', n(this, ar), {
      signal: t,
    });
  }
}, np = function () {
  const t = n(this, Ea).find((e) => e.hasCommentButton);
  t && g(this, pn, t._normalizePoint(t.commentButtonPosition));
}, rp = function () {
  if (n(this, Pe).extraPopupElement && !n(this, Pe).editor) return;
  this.renderCommentButton();
  const [t, e] = n(this, pn); const
    {
      style: i,
    } = n(this, ne);
  i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
}, ap = function () {
  n(this, Pe).extraPopupElement || (this.renderCommentButton(), n(this, ne).style.backgroundColor = this.commentButtonColor || '');
}, qd = function () {
  const t = n(this, gn); const
    e = n(this, Es);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, gn).html || null;
}, op = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = n(this, Z, qd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.fontSize) || 0;
}, bb = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = n(this, Z, qd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.color) || null;
}, yb = function (t) {
  const e = []; const i = {
    str: t,
    html: {
      name: 'div',
      attributes: {
        dir: 'auto',
      },
      children: [{
        name: 'p',
        children: e,
      }],
    },
  }; const
    s = {
      style: {
        color: n(this, Z, bb),
        fontSize: n(this, Z, op) ? `calc(${n(this, Z, op)}px * var(--total-scale-factor))` : '',
      },
    };
  for (const r of t.split(`
`)) {
    e.push({
      name: 'span',
      value: r,
      attributes: s,
    });
  }
  return i;
}, wb = function (t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === 'Enter' || t.key === 'Escape' && n(this, _s)) && w(this, Z, Xd).call(this);
}, Ab = function () {
  if (n(this, fn) !== null) return;
  const {
    page: {
      view: t,
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: i,
        pageX: s,
        pageY: r,
      },
    },
  } = n(this, yh);
  let a = !!n(this, wh); let
    o = a ? n(this, wh) : n(this, Bc);
  for (const S of n(this, Ea)) {
    if (!o || U.intersect(S.data.rect, o) !== null) {
      o = S.data.rect, a = !0;
      break;
    }
  }
  const h = U.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]); const d = a ? o[2] - o[0] + 5 : 0; const u = h[0] + d; const
    p = h[1];
  g(this, fn, [100 * (u - s) / e, 100 * (p - r) / i]);
  const {
    style: y,
  } = n(this, $t);
  y.left = `${n(this, fn)[0]}%`, y.top = `${n(this, fn)[1]}%`;
}, Xd = function () {
  if (n(this, ai)) {
    n(this, ai).toggleCommentPopup(this, !1);
    return;
  }
  g(this, _s, !n(this, _s)), n(this, _s) ? (w(this, Z, Yd).call(this), n(this, $t).addEventListener('click', n(this, mh)), n(this, $t).addEventListener('keydown', n(this, ar))) : (w(this, Z, hp).call(this), n(this, $t).removeEventListener('click', n(this, mh)), n(this, $t).removeEventListener('keydown', n(this, ar)));
}, Yd = function () {
  n(this, oi) || this.render(), this.isVisible ? n(this, _s) && n(this, $t).classList.add('focused') : (w(this, Z, Ab).call(this), n(this, $t).hidden = !1, n(this, $t).style.zIndex = parseInt(n(this, $t).style.zIndex) + 1e3);
}, hp = function () {
  n(this, $t).classList.remove('focused'), !(n(this, _s) || !this.isVisible) && (n(this, $t).hidden = !0, n(this, $t).style.zIndex = parseInt(n(this, $t).style.zIndex) - 1e3);
};
class vb extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = q.FREETEXT;
  }

  render() {
    if (this.container.classList.add('freeTextAnnotation'), this.textContent) {
      const t = document.createElement('div');
      t.classList.add('annotationTextContent'), t.setAttribute('role', 'comment');
      for (const e of this.textContent) {
        const i = document.createElement('span');
        i.textContent = e, t.append(i);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
let Hc;
class S0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Hc, null);
  }

  render() {
    this.container.classList.add('lineAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const
      a = g(this, Hc, this.svgFactory.createElement('svg:line'));
    return a.setAttribute('x1', e.rect[2] - e.lineCoordinates[0]), a.setAttribute('y1', e.rect[3] - e.lineCoordinates[1]), a.setAttribute('x2', e.rect[2] - e.lineCoordinates[2]), a.setAttribute('y2', e.rect[3] - e.lineCoordinates[3]), a.setAttribute('stroke-width', e.borderStyle.width || 1), a.setAttribute('stroke', 'transparent'), a.setAttribute('fill', 'transparent'), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, Hc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
Hc = new WeakMap();
let $c;
class x0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, $c, null);
  }

  render() {
    this.container.classList.add('squareAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const a = e.borderStyle.width; const
      o = g(this, $c, this.svgFactory.createElement('svg:rect'));
    return o.setAttribute('x', a / 2), o.setAttribute('y', a / 2), o.setAttribute('width', i - a), o.setAttribute('height', s - a), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, $c);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
$c = new WeakMap();
let Uc;
class E0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Uc, null);
  }

  render() {
    this.container.classList.add('circleAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const a = e.borderStyle.width; const
      o = g(this, Uc, this.svgFactory.createElement('svg:ellipse'));
    return o.setAttribute('cx', i / 2), o.setAttribute('cy', s / 2), o.setAttribute('rx', i / 2 - a / 2), o.setAttribute('ry', s / 2 - a / 2), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, Uc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
Uc = new WeakMap();
let Gc;
class Sb extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Gc, null);
    this.containerClassName = 'polylineAnnotation', this.svgElementName = 'svg:polyline';
  }

  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: i,
        borderStyle: s,
        popupRef: r,
      },
      width: a,
      height: o,
    } = this;
    if (!i) return this.container;
    const h = this.svgFactory.create(a, o, !0);
    let l = [];
    for (let u = 0, p = i.length; u < p; u += 2) {
      const y = i[u] - e[0]; const
        S = e[3] - i[u + 1];
      l.push(`${y},${S}`);
    }
    l = l.join(' ');
    const d = g(this, Gc, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute('points', l), d.setAttribute('stroke-width', s.width || 1), d.setAttribute('stroke', 'transparent'), d.setAttribute('fill', 'transparent'), h.append(d), this.container.append(h), !r && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, Gc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
Gc = new WeakMap();
class _0 extends Sb {
  constructor(t) {
    super(t), this.containerClassName = 'polygonAnnotation', this.svgElementName = 'svg:polygon';
  }
}
class C0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
  }

  render() {
    return this.container.classList.add('caretAnnotation'), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }
}
let zc; let Ca; let Wc; let
  lp;
class Qp extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Wc);
    b(this, zc, null);
    b(this, Ca, []);
    this.containerClassName = 'inkAnnotation', this.svgElementName = 'svg:polyline', this.annotationEditorType = this.data.it === 'InkHighlight' ? q.HIGHLIGHT : q.INK;
  }

  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: i,
        inkLists: s,
        borderStyle: r,
        popupRef: a,
      },
    } = this; const {
      transform: o,
      width: h,
      height: l,
    } = w(this, Wc, lp).call(this, i, e); const d = this.svgFactory.create(h, l, !0); const
      u = g(this, zc, this.svgFactory.createElement('svg:g'));
    d.append(u), u.setAttribute('stroke-width', r.width || 1), u.setAttribute('stroke-linecap', 'round'), u.setAttribute('stroke-linejoin', 'round'), u.setAttribute('stroke-miterlimit', 10), u.setAttribute('stroke', 'transparent'), u.setAttribute('fill', 'transparent'), u.setAttribute('transform', o);
    for (let p = 0, y = s.length; p < y; p++) {
      const S = this.svgFactory.createElement(this.svgElementName);
      n(this, Ca).push(S), S.setAttribute('points', s[p].join(',')), u.append(S);
    }
    return !a && this.hasPopupData && this._createPopup(), this.container.append(d), this._editOnDoubleClick(), this.container;
  }

  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: i,
      points: s,
      rect: r,
    } = e; const
      a = n(this, zc);
    if (i >= 0 && a.setAttribute('stroke-width', i || 1), s) for (let o = 0, h = n(this, Ca).length; o < h; o++) n(this, Ca)[o].setAttribute('points', s[o].join(','));
    if (r) {
      const {
        transform: o,
        width: h,
        height: l,
      } = w(this, Wc, lp).call(this, this.data.rotation, r);
      a.parentElement.setAttribute('viewBox', `0 0 ${h} ${l}`), a.setAttribute('transform', o);
    }
  }

  getElementsToTriggerPopup() {
    return n(this, Ca);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
zc = new WeakMap(), Ca = new WeakMap(), Wc = new WeakSet(), lp = function (e, i) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-i[0]},${i[1]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0],
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-i[2]},${i[1]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1],
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-i[2]},${i[3]}) scale(1,-1)`,
        width: i[3] - i[1],
        height: i[2] - i[0],
      };
    default:
      return {
        transform: `translate(${-i[0]},${i[3]}) scale(1,-1)`,
        width: i[2] - i[0],
        height: i[3] - i[1],
      };
  }
};
class xb extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    }), this.annotationEditorType = q.HIGHLIGHT;
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('highlightAnnotation'), this._editOnDoubleClick(), t) {
      const i = document.createElement('mark');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class T0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    });
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('underlineAnnotation'), t) {
      const i = document.createElement('u');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class P0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    });
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('squigglyAnnotation'), t) {
      const i = document.createElement('u');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class R0 extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0,
    });
  }

  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e,
      },
    } = this;
    if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add('strikeoutAnnotation'), t) {
      const i = document.createElement('s');
      i.classList.add('overlaidText'), i.textContent = t, this.container.append(i);
    }
    return this.container;
  }
}
class Eb extends Ot {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
    }), this.annotationEditorType = q.STAMP;
  }

  render() {
    return this.container.classList.add('stampAnnotation'), this.container.setAttribute('role', 'img'), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
  }
}
let jc; let Vc; let
  cp;
class D0 extends Ot {
  constructor(e) {
    let s;
    super(e, {
      isRenderable: !0,
    });
    b(this, Vc);
    b(this, jc, null);
    const {
      file: i,
    } = this.data;
    this.filename = i.filename, this.content = i.content, (s = this.linkService.eventBus) == null || s.dispatch('fileattachmentannotation', {
      source: this,
      ...i,
    });
  }

  render() {
    this.container.classList.add('fileAttachmentAnnotation');
    const {
      container: e,
      data: i,
    } = this;
    let s;
    i.hasAppearance || i.fillAlpha === 0 ? s = document.createElement('div') : (s = document.createElement('img'), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? 'paperclip' : 'pushpin'}.svg`, i.fillAlpha && i.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(i.fillAlpha * 100)}%);`)), s.addEventListener('dblclick', w(this, Vc, cp).bind(this)), g(this, jc, s);
    const {
      isMac: r,
    } = ce.platform;
    return e.addEventListener('keydown', (a) => {
      a.key === 'Enter' && (r ? a.metaKey : a.ctrlKey) && w(this, Vc, cp).call(this);
    }), !i.popupRef && this.hasPopupData ? this._createPopup() : s.classList.add('popupTriggerArea'), e.append(s), e;
  }

  getElementsToTriggerPopup() {
    return n(this, jc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
jc = new WeakMap(), Vc = new WeakSet(), cp = function () {
  let e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
let vh; let Ta; let Sh; let dr; let qc; let Pa; let Rr; let dp; let up; let
  xh;
const Zp = (xh = class {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: i,
    annotationEditorUIManager: s,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: h,
    linkService: l,
    annotationStorage: d,
  }) {
    b(this, Rr);
    b(this, vh, null);
    b(this, Ta, null);
    b(this, Sh, null);
    b(this, dr, /* @__PURE__ */ new Map());
    b(this, qc, null);
    b(this, Pa, null);
    this.div = t, g(this, vh, e), g(this, Ta, i), g(this, qc, o || null), g(this, Pa, l || null), g(this, Sh, d || new Vp()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = s, this._commentManager = h || null;
  }

  hasEditableAnnotations() {
    return n(this, dr).size > 0;
  }

  async render(t) {
    let a; let o; let
      h;
    const {
      annotations: e,
    } = t; const
      i = this.div;
    Cr(i, this.viewport);
    const s = /* @__PURE__ */ new Map(); const
      r = {
        data: null,
        layer: i,
        linkService: n(this, Pa),
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || '',
        renderForms: t.renderForms !== !1,
        svgFactory: new kl(),
        annotationStorage: n(this, Sh),
        enableComment: t.enableComment === !0,
        enableScripting: t.enableScripting === !0,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null,
      };
    for (const l of e) {
      if (l.noHTML) continue;
      const d = l.annotationType === zt.POPUP;
      if (d) {
        const y = s.get(l.id);
        if (!y) continue;
        r.elements = y;
      } else if (l.rect[2] === l.rect[0] || l.rect[3] === l.rect[1]) continue;
      r.data = l;
      const u = Fg.create(r);
      if (!u.isRenderable) continue;
      if (!d && l.popupRef) {
        const y = s.get(l.popupRef);
        y ? y.push(u) : s.set(l.popupRef, [u]);
      }
      const p = u.render();
      l.hidden && (p.style.visibility = 'hidden'), await w(this, Rr, dp).call(this, p, l.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (n(this, dr).set(u.data.id, u), (h = this._annotationEditorUIManager) == null || h.renderAnnotationElement(u));
    }
    w(this, Rr, up).call(this);
  }

  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: n(this, Pa),
      svgFactory: new kl(),
      parent: this,
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = xh._defaultBorderStyle), e.data = i;
      const s = Fg.create(e);
      if (!s.isRenderable) continue;
      const r = s.render();
      await w(this, Rr, dp).call(this, r, i.id, null);
    }
  }

  update({
    viewport: t,
  }) {
    const e = this.div;
    this.viewport = t, Cr(e, {
      rotation: t.rotation,
    }), w(this, Rr, up).call(this), e.hidden = !1;
  }

  getEditableAnnotations() {
    return Array.from(n(this, dr).values());
  }

  getEditableAnnotation(t) {
    return n(this, dr).get(t);
  }

  addFakeAnnotation(t) {
    let o;
    const {
      div: e,
    } = this; const {
      id: i,
      rotation: s,
    } = t; const r = new p0({
      data: {
        id: i,
        rect: t.getPDFRect(),
        rotation: s,
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: n(this, Pa),
      annotationStorage: n(this, Sh),
    }); const
      a = r.render();
    return e.append(a), (o = n(this, vh)) == null || o.moveElementInDOM(e, a, a, !1), r.createOrUpdatePopup(), r;
  }

  static get _defaultBorderStyle() {
    return J(this, '_defaultBorderStyle', Object.freeze({
      width: 1,
      rawWidth: 1,
      style: io.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    }));
  }
}, vh = new WeakMap(), Ta = new WeakMap(), Sh = new WeakMap(), dr = new WeakMap(), qc = new WeakMap(), Pa = new WeakMap(), Rr = new WeakSet(), dp = async function (t, e, i) {
  let o; let
    h;
  const s = t.firstChild || t; const r = s.id = `${zp}${e}`; const
    a = await ((o = n(this, qc)) == null ? void 0 : o.getAriaAttributes(r));
  if (a) for (const [l, d] of a) s.setAttribute(l, d);
  i ? i.at(-1).container.after(t) : (this.div.append(t), (h = n(this, vh)) == null || h.moveElementInDOM(this.div, t, s, !1));
}, up = function () {
  let e;
  if (!n(this, Ta)) return;
  const t = this.div;
  for (const [i, s] of n(this, Ta)) {
    const r = t.querySelector(`[data-annotation-id="${i}"]`);
    if (!r) continue;
    s.className = 'annotationContent';
    const {
      firstChild: a,
    } = r;
    a ? a.nodeName === 'CANVAS' ? a.replaceWith(s) : a.classList.contains('annotationContent') ? a.after(s) : a.before(s) : r.append(s);
    const o = n(this, dr).get(i);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(i, r.id, s), o._hasNoCanvas = !1) : o.canvas = s);
  }
  n(this, Ta).clear();
}, xh);
const kd = /\r\n?|\n/g;
let hi; let Xc; let Ra; let li; let Xt; let _b; let Cb; let Tb; let Kd; let En; let Jd; let Qd; let Pb; let pp; let
  Rb;
const Pt = class Pt extends Ct {
  constructor(e) {
    super({
      ...e,
      name: 'freeTextEditor',
    });
    b(this, Xt);
    b(this, hi, '');
    b(this, Xc, `${this.id}-editor`);
    b(this, Ra, null);
    b(this, li);
    M(this, '_colorPicker', null);
    this.color = e.color || Pt._defaultColor || Ct._defaultLineColor, g(this, li, e.fontSize || Pt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-freetext-added-alert');
  }

  static get _keyboardManager() {
    const e = Pt.prototype; const i = (a) => a.isEmpty(); const s = Tr.TRANSLATE_SMALL; const
      r = Tr.TRANSLATE_BIG;
    return J(this, '_keyboardManager', new md([[['ctrl+s', 'mac+meta+s', 'ctrl+p', 'mac+meta+p'], e.commitOrRemove, {
      bubbles: !0,
    }], [['ctrl+Enter', 'mac+meta+Enter', 'Escape', 'mac+Escape'], e.commitOrRemove], [['ArrowLeft', 'mac+ArrowLeft'], e._translateEmpty, {
      args: [-s, 0],
      checker: i,
    }], [['ctrl+ArrowLeft', 'mac+shift+ArrowLeft'], e._translateEmpty, {
      args: [-r, 0],
      checker: i,
    }], [['ArrowRight', 'mac+ArrowRight'], e._translateEmpty, {
      args: [s, 0],
      checker: i,
    }], [['ctrl+ArrowRight', 'mac+shift+ArrowRight'], e._translateEmpty, {
      args: [r, 0],
      checker: i,
    }], [['ArrowUp', 'mac+ArrowUp'], e._translateEmpty, {
      args: [0, -s],
      checker: i,
    }], [['ctrl+ArrowUp', 'mac+shift+ArrowUp'], e._translateEmpty, {
      args: [0, -r],
      checker: i,
    }], [['ArrowDown', 'mac+ArrowDown'], e._translateEmpty, {
      args: [0, s],
      checker: i,
    }], [['ctrl+ArrowDown', 'mac+shift+ArrowDown'], e._translateEmpty, {
      args: [0, r],
      checker: i,
    }]]));
  }

  static initialize(e, i) {
    Ct.initialize(e, i);
    const s = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(s.getPropertyValue('--freetext-padding'));
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
        w(this, Xt, _b).call(this, i);
        break;
      case it.FREETEXT_COLOR:
        w(this, Xt, Cb).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[it.FREETEXT_SIZE, Pt._defaultFontSize], [it.FREETEXT_COLOR, Pt._defaultColor || Ct._defaultLineColor]];
  }

  get propertiesToUpdate() {
    return [[it.FREETEXT_SIZE, n(this, li)], [it.FREETEXT_COLOR, this.color]];
  }

  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new bu(this)), [['colorPicker', this._colorPicker]];
  }

  get colorType() {
    return it.FREETEXT_COLOR;
  }

  onUpdatedColor() {
    let e;
    this.editorDiv.style.color = this.color, (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }

  _translateEmpty(e, i) {
    this._uiManager.translateSelectedEditors(e, i, !0);
  }

  getInitialTranslation() {
    const e = this.parentScale;
    return [-Pt._internalPadding * e, -(Pt._internalPadding + n(this, li)) * e];
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }

  enableEditMode() {
    if (!super.enableEditMode()) return !1;
    this.overlayDiv.classList.remove('enabled'), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute('aria-activedescendant'), g(this, Ra, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, Ra));
    return this.editorDiv.addEventListener('keydown', this.editorDivKeydown.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('focus', this.editorDivFocus.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('blur', this.editorDivBlur.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('input', this.editorDivInput.bind(this), {
      signal: e,
    }), this.editorDiv.addEventListener('paste', this.editorDivPaste.bind(this), {
      signal: e,
    }), !0;
  }

  disableEditMode() {
    let e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add('enabled'), this.editorDiv.contentEditable = !1, this.div.setAttribute('aria-activedescendant', n(this, Xc)), this._isDraggable = !0, (e = n(this, Ra)) == null || e.abort(), g(this, Ra, null), this.div.focus({
      preventScroll: !0,
    }), this.isEditing = !1, this.parent.div.classList.add('freetextEditing'), !0) : !1;
  }

  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }

  onceAdded(e) {
    let i;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (i = this._initialOptions) != null && i.isCentered && this.center(), this._initialOptions = null);
  }

  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === '';
  }

  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add('freetextEditing')), super.remove();
  }

  commit() {
    if (!this.isInEditMode()) return;
    super.commit(), this.disableEditMode();
    const e = n(this, hi); const
      i = g(this, hi, w(this, Xt, Tb).call(this).trimEnd());
    if (e === i) return;
    const s = (r) => {
      if (g(this, hi, r), !r) {
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
      mustExec: !1,
    }), w(this, Xt, Kd).call(this);
  }

  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }

  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }

  keydown(e) {
    e.target === this.div && e.key === 'Enter' && (this.enterInEditMode(), e.preventDefault());
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
    this.parent.div.classList.toggle('freetextEditing', this.isEmpty());
  }

  disableEditing() {
    this.editorDiv.setAttribute('role', 'comment'), this.editorDiv.removeAttribute('aria-multiline');
  }

  enableEditing() {
    this.editorDiv.setAttribute('role', 'textbox'), this.editorDiv.setAttribute('aria-multiline', !0);
  }

  get canChangeContent() {
    return !0;
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    (this._isCopy || this.annotationElementId) && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement('div'), this.editorDiv.className = 'internal', this.editorDiv.setAttribute('id', n(this, Xc)), this.editorDiv.setAttribute('data-l10n-id', 'pdfjs-free-text2'), this.editorDiv.setAttribute('data-l10n-attrs', 'default-content'), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: s,
    } = this.editorDiv;
    if (s.fontSize = `calc(${n(this, li)}px * var(--total-scale-factor))`, s.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement('div'), this.overlayDiv.classList.add('overlay', 'enabled'), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o,
        } = this._initialData;
        let [h, l] = this.getInitialTranslation();
        [h, l] = this.pageTranslationToScreen(h, l);
        const [d, u] = this.pageDimensions; const
          [p, y] = this.pageTranslation;
        let S; let
          v;
        switch (this.rotation) {
          case 0:
            S = e + (o[0] - p) / d, v = i + this.height - (o[1] - y) / u;
            break;
          case 90:
            S = e + (o[0] - p) / d, v = i - (o[1] - y) / u, [h, l] = [l, -h];
            break;
          case 180:
            S = e - this.width + (o[0] - p) / d, v = i - (o[1] - y) / u, [h, l] = [-h, -l];
            break;
          case 270:
            S = e + (o[0] - p - this.height * u) / d, v = i + (o[1] - y - this.width * d) / u, [h, l] = [-l, h];
            break;
        }
        this.setAt(S * r, v * a, h, l);
      } else this._moveAfterPaste(e, i);
      w(this, Xt, Qd).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }

  editorDivPaste(e) {
    let S; let v; let
      _;
    const i = e.clipboardData || window.clipboardData; const
      {
        types: s,
      } = i;
    if (s.length === 1 && s[0] === 'text/plain') return;
    e.preventDefault();
    const r = w(S = Pt, En, pp).call(S, i.getData('text') || '').replaceAll(kd, `
`);
    if (!r) return;
    const a = window.getSelection();
    if (!a.rangeCount) return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: h,
      startOffset: l,
    } = o; const d = []; const
      u = [];
    if (h.nodeType === Node.TEXT_NODE) {
      const x = h.parentElement;
      if (u.push(h.nodeValue.slice(l).replaceAll(kd, '')), x !== this.editorDiv) {
        let T = d;
        for (const E of this.editorDiv.childNodes) {
          if (E === x) {
            T = u;
            continue;
          }
          T.push(w(v = Pt, En, Jd).call(v, E));
        }
      }
      d.push(h.nodeValue.slice(0, l).replaceAll(kd, ''));
    } else if (h === this.editorDiv) {
      let x = d; let
        T = 0;
      for (const E of this.editorDiv.childNodes) T++ === l && (x = u), x.push(w(_ = Pt, En, Jd).call(_, E));
    }
    g(this, hi, `${d.join(`
`)}${r}${u.join(`
`)}`), w(this, Xt, Qd).call(this);
    const p = new Range();
    let y = Math.sumPrecise(d.map((x) => x.length));
    for (const {
      firstChild: x,
    } of this.editorDiv.childNodes) {
      if (x.nodeType === Node.TEXT_NODE) {
        const T = x.nodeValue.length;
        if (y <= T) {
          p.setStart(x, y), p.setEnd(x, y);
          break;
        }
        y -= T;
      }
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
    let o;
    let r = null;
    if (e instanceof vb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: h,
            fontColor: l,
          },
          rect: d,
          rotation: u,
          id: p,
          popupRef: y,
          richText: S,
          contentsObj: v,
          creationDate: _,
          modificationDate: x,
        },
        textContent: T,
        textPosition: E,
        parent: {
          page: {
            pageNumber: f,
          },
        },
      } = e;
      if (!T || T.length === 0) return null;
      r = e = {
        annotationType: q.FREETEXT,
        color: Array.from(l),
        fontSize: h,
        value: T.join(`
`),
        position: E,
        pageIndex: f - 1,
        rect: d.slice(0),
        rotation: u,
        annotationElementId: p,
        id: p,
        deleted: !1,
        popupRef: y,
        comment: (v == null ? void 0 : v.str) || null,
        richText: S,
        creationDate: _,
        modificationDate: x,
      };
    }
    const a = await super.deserialize(e, i, s);
    return g(a, li, e.fontSize), a.color = U.makeHexColor(...e.color), g(a, hi, w(o = Pt, En, pp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = Ct._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color); const
      s = Object.assign(super.serialize(e), {
        color: i,
        fontSize: n(this, li),
        value: w(this, Xt, Pb).call(this),
      });
    return this.addComment(s), e ? (s.isCopy = !0, s) : this.annotationElementId && !w(this, Xt, Rb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }

  renderAnnotationElement(e) {
    const i = super.renderAnnotationElement(e);
    if (!i) return null;
    const {
      style: s,
    } = i;
    s.fontSize = `calc(${n(this, li)}px * var(--total-scale-factor))`, s.color = this.color, i.replaceChildren();
    for (const r of n(this, hi).split(`
`)) {
      const a = document.createElement('div');
      a.append(r ? document.createTextNode(r) : document.createElement('br')), i.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: n(this, hi),
      },
    }), i;
  }

  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
hi = new WeakMap(), Xc = new WeakMap(), Ra = new WeakMap(), li = new WeakMap(), Xt = new WeakSet(), _b = function (e) {
  const i = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, li)) * this.parentScale), g(this, li, r), w(this, Xt, Kd).call(this);
  }; const
    s = n(this, li);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0,
  });
}, Cb = function (e) {
  const i = (r) => {
    this.color = r, this.onUpdatedColor();
  }; const
    s = this.color;
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0,
  });
}, Tb = function () {
  let s;
  const e = [];
  this.editorDiv.normalize();
  let i = null;
  for (const r of this.editorDiv.childNodes) (i == null ? void 0 : i.nodeType) === Node.TEXT_NODE && r.nodeName === 'BR' || (e.push(w(s = Pt, En, Jd).call(s, r)), i = r);
  return e.join(`
`);
}, Kd = function () {
  const [e, i] = this.parentDimensions;
  let s;
  if (this.isAttachedToDOM) s = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a,
    } = this; const o = a.style.display; const
      h = a.classList.contains('hidden');
    a.classList.remove('hidden'), a.style.display = 'hidden', r.div.append(this.div), s = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle('hidden', h);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = s.width / e, this.height = s.height / i) : (this.width = s.height / e, this.height = s.width / i), this.fixAndSetPosition();
}, En = new WeakSet(), Jd = function (e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(kd, '');
}, Qd = function () {
  if (this.editorDiv.replaceChildren(), !!n(this, hi)) {
    for (const e of n(this, hi).split(`
`)) {
      const i = document.createElement('div');
      i.append(e ? document.createTextNode(e) : document.createElement('br')), this.editorDiv.append(i);
    }
  }
}, Pb = function () {
  return n(this, hi).replaceAll(' ', ' ');
}, pp = function (e) {
  return e.replaceAll(' ', ' ');
}, Rb = function (e) {
  const {
    value: i,
    fontSize: s,
    color: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== i || e.fontSize !== s || e.color.some((o, h) => o !== r[h]) || e.pageIndex !== a;
}, b(Pt, En), M(Pt, '_freeTextDefaultContent', ''), M(Pt, '_internalPadding', 0), M(Pt, '_defaultColor', null), M(Pt, '_defaultFontSize', 10), M(Pt, '_type', 'freetext'), M(Pt, '_editorType', q.FREETEXT);
const fp = Pt;
class $ {
  toSVGPath() {
    Et('Abstract method `toSVGPath` must be implemented.');
  }

  get box() {
    Et('Abstract getter `box` must be implemented.');
  }

  serialize(t, e) {
    Et('Abstract method `serialize` must be implemented.');
  }

  static _rescale(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, h = t.length; o < h; o += 2) a[o] = e + t[o] * s, a[o + 1] = i + t[o + 1] * r;
    return a;
  }

  static _rescaleAndSwap(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, h = t.length; o < h; o += 2) a[o] = e + t[o + 1] * s, a[o + 1] = i + t[o] * r;
    return a;
  }

  static _translate(t, e, i, s) {
    s || (s = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2) s[r] = e + t[r], s[r + 1] = i + t[r + 1];
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
M($, 'PRECISION', 1e-4);
let ci; let Yi; let Eh; let _h; let Cs; let et; let Da; let ka; let Yc; let Kc; let Ch; let Th; let ur; let Jc; let Ou; let Bu; let te; let bl; let Db; let kb; let Mb; let Lb; let Ib; let
  Fb;
const Us = class Us {
  constructor({
    x: t,
    y: e,
  }, i, s, r, a, o = 0) {
    b(this, te);
    b(this, ci);
    b(this, Yi, []);
    b(this, Eh);
    b(this, _h);
    b(this, Cs, []);
    b(this, et, new Float32Array(18));
    b(this, Da);
    b(this, ka);
    b(this, Yc);
    b(this, Kc);
    b(this, Ch);
    b(this, Th);
    b(this, ur, []);
    g(this, ci, i), g(this, Th, r * s), g(this, _h, a), n(this, et).set([NaN, NaN, NaN, NaN, t, e], 6), g(this, Eh, o), g(this, Kc, n(Us, Jc) * s), g(this, Yc, n(Us, Bu) * s), g(this, Ch, s), n(this, ur).push(t, e);
  }

  isEmpty() {
    return isNaN(n(this, et)[8]);
  }

  add({
    x: t,
    y: e,
  }) {
    let R;
    g(this, Da, t), g(this, ka, e);
    const [i, s, r, a] = n(this, ci);
    let [o, h, l, d] = n(this, et).subarray(8, 12);
    const u = t - l; const p = e - d; const
      y = Math.hypot(u, p);
    if (y < n(this, Yc)) return !1;
    const S = y - n(this, Kc); const v = S / y; const _ = v * u; const
      x = v * p;
    let T = o; let
      E = h;
    o = l, h = d, l += _, d += x, (R = n(this, ur)) == null || R.push(t, e);
    const f = -x / S; const m = _ / S; const A = f * n(this, Th); const
      C = m * n(this, Th);
    return n(this, et).set(n(this, et).subarray(2, 8), 0), n(this, et).set([l + A, d + C], 4), n(this, et).set(n(this, et).subarray(14, 18), 12), n(this, et).set([l - A, d - C], 16), isNaN(n(this, et)[6]) ? (n(this, Cs).length === 0 && (n(this, et).set([o + A, h + C], 2), n(this, Cs).push(NaN, NaN, NaN, NaN, (o + A - i) / r, (h + C - s) / a), n(this, et).set([o - A, h - C], 14), n(this, Yi).push(NaN, NaN, NaN, NaN, (o - A - i) / r, (h - C - s) / a)), n(this, et).set([T, E, o, h, l, d], 6), !this.isEmpty()) : (n(this, et).set([T, E, o, h, l, d], 6), Math.abs(Math.atan2(E - h, T - o) - Math.atan2(x, _)) < Math.PI / 2 ? ([o, h, l, d] = n(this, et).subarray(2, 6), n(this, Cs).push(NaN, NaN, NaN, NaN, ((o + l) / 2 - i) / r, ((h + d) / 2 - s) / a), [o, h, T, E] = n(this, et).subarray(14, 18), n(this, Yi).push(NaN, NaN, NaN, NaN, ((T + o) / 2 - i) / r, ((E + h) / 2 - s) / a), !0) : ([T, E, o, h, l, d] = n(this, et).subarray(0, 6), n(this, Cs).push(((T + 5 * o) / 6 - i) / r, ((E + 5 * h) / 6 - s) / a, ((5 * o + l) / 6 - i) / r, ((5 * h + d) / 6 - s) / a, ((o + l) / 2 - i) / r, ((h + d) / 2 - s) / a), [l, d, o, h, T, E] = n(this, et).subarray(12, 18), n(this, Yi).push(((T + 5 * o) / 6 - i) / r, ((E + 5 * h) / 6 - s) / a, ((5 * o + l) / 6 - i) / r, ((5 * h + d) / 6 - s) / a, ((o + l) / 2 - i) / r, ((h + d) / 2 - s) / a), !0));
  }

  toSVGPath() {
    if (this.isEmpty()) return '';
    const t = n(this, Cs); const
      e = n(this, Yi);
    if (isNaN(n(this, et)[6]) && !this.isEmpty()) return w(this, te, Db).call(this);
    const i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let s = 6; s < t.length; s += 6) isNaN(t[s]) ? i.push(`L${t[s + 4]} ${t[s + 5]}`) : i.push(`C${t[s]} ${t[s + 1]} ${t[s + 2]} ${t[s + 3]} ${t[s + 4]} ${t[s + 5]}`);
    w(this, te, Mb).call(this, i);
    for (let s = e.length - 6; s >= 6; s -= 6) isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
    return w(this, te, kb).call(this, i), i.join(' ');
  }

  newFreeDrawOutline(t, e, i, s, r, a) {
    return new Nb(t, e, i, s, r, a);
  }

  getOutlines() {
    let u;
    const t = n(this, Cs); const e = n(this, Yi); const i = n(this, et); const [s, r, a, o] = n(this, ci); const
      h = new Float32Array((((u = n(this, ur)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, y = h.length - 2; p < y; p += 2) h[p] = (n(this, ur)[p] - s) / a, h[p + 1] = (n(this, ur)[p + 1] - r) / o;
    if (h[h.length - 2] = (n(this, Da) - s) / a, h[h.length - 1] = (n(this, ka) - r) / o, isNaN(i[6]) && !this.isEmpty()) return w(this, te, Lb).call(this, h);
    const l = new Float32Array(n(this, Cs).length + 24 + n(this, Yi).length);
    let d = t.length;
    for (let p = 0; p < d; p += 2) {
      if (isNaN(t[p])) {
        l[p] = l[p + 1] = NaN;
        continue;
      }
      l[p] = t[p], l[p + 1] = t[p + 1];
    }
    d = w(this, te, Fb).call(this, l, d);
    for (let p = e.length - 6; p >= 6; p -= 6) {
      for (let y = 0; y < 6; y += 2) {
        if (isNaN(e[p + y])) {
          l[d] = l[d + 1] = NaN, d += 2;
          continue;
        }
        l[d] = e[p + y], l[d + 1] = e[p + y + 1], d += 2;
      }
    }
    return w(this, te, Ib).call(this, l, d), this.newFreeDrawOutline(l, h, n(this, ci), n(this, Ch), n(this, Eh), n(this, _h));
  }
};
ci = new WeakMap(), Yi = new WeakMap(), Eh = new WeakMap(), _h = new WeakMap(), Cs = new WeakMap(), et = new WeakMap(), Da = new WeakMap(), ka = new WeakMap(), Yc = new WeakMap(), Kc = new WeakMap(), Ch = new WeakMap(), Th = new WeakMap(), ur = new WeakMap(), Jc = new WeakMap(), Ou = new WeakMap(), Bu = new WeakMap(), te = new WeakSet(), bl = function () {
  const t = n(this, et).subarray(4, 6); const e = n(this, et).subarray(16, 18); const
    [i, s, r, a] = n(this, ci);
  return [(n(this, Da) + (t[0] - e[0]) / 2 - i) / r, (n(this, ka) + (t[1] - e[1]) / 2 - s) / a, (n(this, Da) + (e[0] - t[0]) / 2 - i) / r, (n(this, ka) + (e[1] - t[1]) / 2 - s) / a];
}, Db = function () {
  const [t, e, i, s] = n(this, ci); const
    [r, a, o, h] = w(this, te, bl).call(this);
  return `M${(n(this, et)[2] - t) / i} ${(n(this, et)[3] - e) / s} L${(n(this, et)[4] - t) / i} ${(n(this, et)[5] - e) / s} L${r} ${a} L${o} ${h} L${(n(this, et)[16] - t) / i} ${(n(this, et)[17] - e) / s} L${(n(this, et)[14] - t) / i} ${(n(this, et)[15] - e) / s} Z`;
}, kb = function (t) {
  const e = n(this, Yi);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Mb = function (t) {
  const [e, i, s, r] = n(this, ci); const a = n(this, et).subarray(4, 6); const o = n(this, et).subarray(16, 18); const
    [h, l, d, u] = w(this, te, bl).call(this);
  t.push(`L${(a[0] - e) / s} ${(a[1] - i) / r} L${h} ${l} L${d} ${u} L${(o[0] - e) / s} ${(o[1] - i) / r}`);
}, Lb = function (t) {
  const e = n(this, et); const [i, s, r, a] = n(this, ci); const [o, h, l, d] = w(this, te, bl).call(this); const
    u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - i) / r, (e[3] - s) / a, NaN, NaN, NaN, NaN, (e[4] - i) / r, (e[5] - s) / a, NaN, NaN, NaN, NaN, o, h, NaN, NaN, NaN, NaN, l, d, NaN, NaN, NaN, NaN, (e[16] - i) / r, (e[17] - s) / a, NaN, NaN, NaN, NaN, (e[14] - i) / r, (e[15] - s) / a], 0), this.newFreeDrawOutline(u, t, n(this, ci), n(this, Ch), n(this, Eh), n(this, _h));
}, Ib = function (t, e) {
  const i = n(this, Yi);
  return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e += 6;
}, Fb = function (t, e) {
  const i = n(this, et).subarray(4, 6); const s = n(this, et).subarray(16, 18); const [r, a, o, h] = n(this, ci); const
    [l, d, u, p] = w(this, te, bl).call(this);
  return t.set([NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / h, NaN, NaN, NaN, NaN, l, d, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / h], e), e += 24;
}, b(Us, Jc, 8), b(Us, Ou, 2), b(Us, Bu, n(Us, Jc) + n(Us, Ou));
const yu = Us;
let Ph; let Ma; let mn; let Qc; let di; let Zc; let jt; let Hu; let
  Ob;
class Nb extends $ {
  constructor(e, i, s, r, a, o) {
    super();
    b(this, Hu);
    b(this, Ph);
    b(this, Ma, new Float32Array(4));
    b(this, mn);
    b(this, Qc);
    b(this, di);
    b(this, Zc);
    b(this, jt);
    g(this, jt, e), g(this, di, i), g(this, Ph, s), g(this, Zc, r), g(this, mn, a), g(this, Qc, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], w(this, Hu, Ob).call(this, o);
    const [h, l, d, u] = n(this, Ma);
    for (let p = 0, y = e.length; p < y; p += 2) e[p] = (e[p] - h) / d, e[p + 1] = (e[p + 1] - l) / u;
    for (let p = 0, y = i.length; p < y; p += 2) i[p] = (i[p] - h) / d, i[p + 1] = (i[p + 1] - l) / u;
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
    return e.push('Z'), e.join(' ');
  }

  serialize([e, i, s, r], a) {
    const o = s - e; const
      h = r - i;
    let l; let
      d;
    switch (a) {
      case 0:
        l = $._rescale(n(this, jt), e, r, o, -h), d = $._rescale(n(this, di), e, r, o, -h);
        break;
      case 90:
        l = $._rescaleAndSwap(n(this, jt), e, i, o, h), d = $._rescaleAndSwap(n(this, di), e, i, o, h);
        break;
      case 180:
        l = $._rescale(n(this, jt), s, i, -o, h), d = $._rescale(n(this, di), s, i, -o, h);
        break;
      case 270:
        l = $._rescaleAndSwap(n(this, jt), s, r, -o, -h), d = $._rescaleAndSwap(n(this, di), s, r, -o, -h);
        break;
    }
    return {
      outline: Array.from(l),
      points: [Array.from(d)],
    };
  }

  get box() {
    return n(this, Ma);
  }

  newOutliner(e, i, s, r, a, o = 0) {
    return new yu(e, i, s, r, a, o);
  }

  getNewOutline(e, i) {
    const [s, r, a, o] = n(this, Ma); const [h, l, d, u] = n(this, Ph); const p = a * d; const y = o * u; const S = s * d + h; const v = r * u + l; const
      _ = this.newOutliner({
        x: n(this, di)[0] * p + S,
        y: n(this, di)[1] * y + v,
      }, n(this, Ph), n(this, Zc), e, n(this, Qc), i ?? n(this, mn));
    for (let x = 2; x < n(this, di).length; x += 2) {
      _.add({
        x: n(this, di)[x] * p + S,
        y: n(this, di)[x + 1] * y + v,
      });
    }
    return _.getOutlines();
  }
}
Ph = new WeakMap(), Ma = new WeakMap(), mn = new WeakMap(), Qc = new WeakMap(), di = new WeakMap(), Zc = new WeakMap(), jt = new WeakMap(), Hu = new WeakSet(), Ob = function (e) {
  const i = n(this, jt);
  let s = i[4]; let
    r = i[5];
  const a = [s, r, s, r];
  let o = s; let h = r; let l = s; let
    d = r;
  const u = e ? Math.max : Math.min; const
    p = new Float32Array(4);
  for (let S = 6, v = i.length; S < v; S += 6) {
    const _ = i[S + 4]; const
      x = i[S + 5];
    isNaN(i[S]) ? (U.pointBoundingBox(_, x, a), h > x ? (o = _, h = x) : h === x && (o = u(o, _)), d < x ? (l = _, d = x) : d === x && (l = u(l, _))) : (p[0] = p[1] = 1 / 0, p[2] = p[3] = -1 / 0, U.bezierBoundingBox(s, r, ...i.slice(S, S + 6), p), U.rectBoundingBox(p[0], p[1], p[2], p[3], a), h > p[1] ? (o = p[0], h = p[1]) : h === p[1] && (o = u(o, p[0])), d < p[3] ? (l = p[2], d = p[3]) : d === p[3] && (l = u(l, p[2]))), s = _, r = x;
  }
  const y = n(this, Ma);
  y[0] = a[0] - n(this, mn), y[1] = a[1] - n(this, mn), y[2] = a[2] - a[0] + 2 * n(this, mn), y[3] = a[3] - a[1] + 2 * n(this, mn), this.firstPoint = [o, h], this.lastPoint = [l, d];
};
let td; let ed; let id; let fr; let Ki; let $e; let Bb; let Zd; let Hb; let $b; let
  mp;
class gp {
  constructor(t, e = 0, i = 0, s = !0) {
    b(this, $e);
    b(this, td);
    b(this, ed);
    b(this, id);
    b(this, fr, []);
    b(this, Ki, []);
    const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0]; const
      a = 10 ** -4;
    for (const {
      x: v,
      y: _,
      width: x,
      height: T,
    } of t) {
      const E = Math.floor((v - e) / a) * a; const f = Math.ceil((v + x + e) / a) * a; const m = Math.floor((_ - e) / a) * a; const A = Math.ceil((_ + T + e) / a) * a; const C = [E, m, A, !0]; const
        P = [f, m, A, !1];
      n(this, fr).push(C, P), U.rectBoundingBox(E, m, f, A, r);
    }
    const o = r[2] - r[0] + 2 * i; const h = r[3] - r[1] + 2 * i; const l = r[0] - i; const
      d = r[1] - i;
    let u = s ? -1 / 0 : 1 / 0; let
      p = 1 / 0;
    const y = n(this, fr).at(s ? -1 : -2); const
      S = [y[0], y[2]];
    for (const v of n(this, fr)) {
      const [_, x, T, E] = v;
      !E && s ? x < p ? (p = x, u = _) : x === p && (u = Math.max(u, _)) : E && !s && (x < p ? (p = x, u = _) : x === p && (u = Math.min(u, _))), v[0] = (_ - l) / o, v[1] = (x - d) / h, v[2] = (T - d) / h;
    }
    g(this, td, new Float32Array([l, d, o, h])), g(this, ed, [u, p]), g(this, id, S);
  }

  getOutlines() {
    n(this, fr).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
    const t = [];
    for (const e of n(this, fr)) e[3] ? (t.push(...w(this, $e, mp).call(this, e)), w(this, $e, Hb).call(this, e)) : (w(this, $e, $b).call(this, e), t.push(...w(this, $e, mp).call(this, e)));
    return w(this, $e, Bb).call(this, t);
  }
}
td = new WeakMap(), ed = new WeakMap(), id = new WeakMap(), fr = new WeakMap(), Ki = new WeakMap(), $e = new WeakSet(), Bb = function (t) {
  const e = []; const
    i = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, h, l] = a;
    e.push([o, h, a], [o, l, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const h = e[a][2]; const
      l = e[a + 1][2];
    h.push(l), l.push(h), i.add(h), i.add(l);
  }
  const s = [];
  let r;
  for (; i.size > 0;) {
    const a = i.values().next().value;
    let [o, h, l, d, u] = a;
    i.delete(a);
    let p = o; let
      y = h;
    for (r = [o, l], s.push(r); ;) {
      let S;
      if (i.has(d)) S = d;
      else if (i.has(u)) S = u;
      else break;
      i.delete(S), [o, h, l, d, u] = S, p !== o && (r.push(p, y, o, y === h ? h : l), p = o), y = y === h ? l : h;
    }
    r.push(p, y);
  }
  return new k0(s, n(this, td), n(this, ed), n(this, id));
}, Zd = function (t) {
  const e = n(this, Ki);
  let i = 0; let
    s = e.length - 1;
  for (; i <= s;) {
    const r = i + s >> 1; const
      a = e[r][0];
    if (a === t) return r;
    a < t ? i = r + 1 : s = r - 1;
  }
  return s + 1;
}, Hb = function ([, t, e]) {
  const i = w(this, $e, Zd).call(this, t);
  n(this, Ki).splice(i, 0, [t, e]);
}, $b = function ([, t, e]) {
  const i = w(this, $e, Zd).call(this, t);
  for (let s = i; s < n(this, Ki).length; s++) {
    const [r, a] = n(this, Ki)[s];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, Ki).splice(s, 1);
      return;
    }
  }
  for (let s = i - 1; s >= 0; s--) {
    const [r, a] = n(this, Ki)[s];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, Ki).splice(s, 1);
      return;
    }
  }
}, mp = function (t) {
  const [e, i, s] = t; const r = [[e, i, s]]; const
    a = w(this, $e, Zd).call(this, s);
  for (let o = 0; o < a; o++) {
    const [h, l] = n(this, Ki)[o];
    for (let d = 0, u = r.length; d < u; d++) {
      const [, p, y] = r[d];
      if (!(l <= p || y <= h)) {
        if (p >= h) {
          if (y > l) r[d][1] = l;
          else {
            if (u === 1) return [];
            r.splice(d, 1), d--, u--;
          }
          continue;
        }
        r[d][2] = h, y > l && r.push([e, l, y]);
      }
    }
  }
  return r;
};
let sd; let
  Rh;
class k0 extends $ {
  constructor(e, i, s, r) {
    super();
    b(this, sd);
    b(this, Rh);
    g(this, Rh, e), g(this, sd, i), this.firstPoint = s, this.lastPoint = r;
  }

  toSVGPath() {
    const e = [];
    for (const i of n(this, Rh)) {
      let [s, r] = i;
      e.push(`M${s} ${r}`);
      for (let a = 2; a < i.length; a += 2) {
        const o = i[a]; const
          h = i[a + 1];
        o === s ? (e.push(`V${h}`), r = h) : h === r && (e.push(`H${o}`), s = o);
      }
      e.push('Z');
    }
    return e.join(' ');
  }

  serialize([e, i, s, r], a) {
    const o = []; const h = s - e; const
      l = r - i;
    for (const d of n(this, Rh)) {
      const u = new Array(d.length);
      for (let p = 0; p < d.length; p += 2) u[p] = e + d[p] * h, u[p + 1] = r - d[p + 1] * l;
      o.push(u);
    }
    return o;
  }

  get box() {
    return n(this, sd);
  }

  get classNamesForOutlining() {
    return ['highlightOutline'];
  }
}
sd = new WeakMap(), Rh = new WeakMap();
class bp extends yu {
  newFreeDrawOutline(t, e, i, s, r, a) {
    return new M0(t, e, i, s, r, a);
  }
}
class M0 extends Nb {
  newOutliner(t, e, i, s, r, a = 0) {
    return new bp(t, e, i, s, r, a);
  }
}
let Dh; let nd; let bn; let La; let rd; let Xe; let ad; let od; let Ia; let ui; let fi; let me; let kh; let Mh; let Re; let Lh; let Ii; let hd; let Q; let yp; let tu; let Ub; let Gb; let zb; let wp; let Lr; let Ni; let ho; let Wb; let eu; let iu; let jb; let Vb; let qb; let Xb; let
  Yb;
const lt = class lt extends Ct {
  constructor(e) {
    super({
      ...e,
      name: 'highlightEditor',
    });
    b(this, Q);
    b(this, Dh, null);
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
    b(this, kh, null);
    b(this, Mh, null);
    b(this, Re, null);
    b(this, Lh, '');
    b(this, Ii);
    b(this, hd, '');
    this.color = e.color || lt._defaultColor, g(this, Ii, e.thickness || lt._defaultThickness), this.opacity = e.opacity || lt._defaultOpacity, g(this, bn, e.boxes || null), g(this, hd, e.methodOfCreation || ''), g(this, Lh, e.text || ''), this._isDraggable = !1, this.defaultL10nId = 'pdfjs-editor-highlight-editor', e.highlightId > -1 ? (g(this, me, !0), w(this, Q, tu).call(this, e), w(this, Q, Lr).call(this)) : n(this, bn) && (g(this, Dh, e.anchorNode), g(this, nd, e.anchorOffset), g(this, ad, e.focusNode), g(this, od, e.focusOffset), w(this, Q, yp).call(this), w(this, Q, Lr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-highlight-added-alert');
  }

  static get _keyboardManager() {
    const e = lt.prototype;
    return J(this, '_keyboardManager', new md([[['ArrowLeft', 'mac+ArrowLeft'], e._moveCaret, {
      args: [0],
    }], [['ArrowRight', 'mac+ArrowRight'], e._moveCaret, {
      args: [1],
    }], [['ArrowUp', 'mac+ArrowUp'], e._moveCaret, {
      args: [2],
    }], [['ArrowDown', 'mac+ArrowDown'], e._moveCaret, {
      args: [3],
    }]]));
  }

  get telemetryInitialData() {
    return {
      action: 'added',
      type: n(this, me) ? 'free_highlight' : 'highlight',
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, Ii),
      methodOfCreation: n(this, hd),
    };
  }

  get telemetryFinalData() {
    return {
      type: 'highlight',
      color: this._uiManager.getNonHCMColorName(this.color),
    };
  }

  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get('color').size,
    };
  }

  static initialize(e, i) {
    let s;
    Ct.initialize(e, i), lt._defaultColor || (lt._defaultColor = ((s = i.highlightColors) == null ? void 0 : s.values().next().value) || '#fff066');
  }

  static updateDefaultParams(e, i) {
    switch (e) {
      case it.HIGHLIGHT_COLOR:
        lt._defaultColor = i;
        break;
      case it.HIGHLIGHT_THICKNESS:
        lt._defaultThickness = i;
        break;
    }
  }

  translateInPage(e, i) {
  }

  get toolbarPosition() {
    return n(this, Mh);
  }

  get commentButtonPosition() {
    return n(this, kh);
  }

  updateParams(e, i) {
    switch (e) {
      case it.HIGHLIGHT_COLOR:
        w(this, Q, Ub).call(this, i);
        break;
      case it.HIGHLIGHT_THICKNESS:
        w(this, Q, Gb).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, lt._defaultColor], [it.HIGHLIGHT_THICKNESS, lt._defaultThickness]];
  }

  get propertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, this.color || lt._defaultColor], [it.HIGHLIGHT_THICKNESS, n(this, Ii) || lt._defaultThickness], [it.HIGHLIGHT_FREE, n(this, me)]];
  }

  onUpdatedColor() {
    let e; let
      i;
    (e = this.parent) == null || e.drawLayer.updateProperties(n(this, fi), {
      root: {
        fill: this.color,
        'fill-opacity': this.opacity,
      },
    }), (i = n(this, rd)) == null || i.updateColor(this.color), super.onUpdatedColor();
  }

  get toolbarButtons() {
    return this._uiManager.highlightColors ? [['colorPicker', g(this, rd, new Dl({
      editor: this,
    }))]] : super.toolbarButtons;
  }

  disableEditing() {
    super.disableEditing(), this.div.classList.toggle('disabled', !0);
  }

  enableEditing() {
    super.enableEditing(), this.div.classList.toggle('disabled', !1);
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
    w(this, Q, wp).call(this), this._reportTelemetry({
      action: 'deleted',
    }), super.remove();
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, Q, Lr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let s;
    let i = !1;
    this.parent && !e ? w(this, Q, wp).call(this) : e && (w(this, Q, Lr).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains('selectedEditor'))), super.setParent(e), this.show(this._isVisible), i && this.select();
  }

  rotate(e) {
    let r; let a; let
      o;
    const {
      drawLayer: i,
    } = this.parent;
    let s;
    n(this, me) ? (e = (e - this.rotation + 360) % 360, s = w(r = lt, Ni, ho).call(r, n(this, ui).box, e)) : s = w(a = lt, Ni, ho).call(a, [this.x, this.y, this.width, this.height], e), i.updateProperties(n(this, fi), {
      bbox: s,
      root: {
        'data-main-rotation': e,
      },
    }), i.updateProperties(n(this, Re), {
      bbox: w(o = lt, Ni, ho).call(o, n(this, Xe).box, e),
      root: {
        'data-main-rotation': e,
      },
    });
  }

  render() {
    if (this.div) return this.div;
    const e = super.render();
    n(this, Lh) && (e.setAttribute('aria-label', n(this, Lh)), e.setAttribute('role', 'mark')), n(this, me) ? e.classList.add('free') : this.div.addEventListener('keydown', w(this, Q, Wb).bind(this), {
      signal: this._uiManager._signal,
    });
    const i = g(this, Ia, document.createElement('div'));
    return e.append(i), i.setAttribute('aria-hidden', 'true'), i.className = 'internal', i.style.clipPath = n(this, La), this.setDims(this.width, this.height), gm(this, n(this, Ia), ['pointerover', 'pointerleave']), this.enableEditing(), e;
  }

  pointerover() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hovered: !0,
      },
    });
  }

  pointerleave() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hovered: !1,
      },
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
    let e;
    super.select(), n(this, Re) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hovered: !1,
        selected: !0,
      },
    }));
  }

  unselect() {
    let e;
    super.unselect(), n(this, Re) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        selected: !1,
      },
    }), n(this, me) || w(this, Q, eu).call(this, !1));
  }

  get _mustFixPosition() {
    return !n(this, me);
  }

  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, fi), {
      rootClass: {
        hidden: !e,
      },
    }), this.parent.drawLayer.updateProperties(n(this, Re), {
      rootClass: {
        hidden: !e,
      },
    }));
  }

  static startHighlighting(e, i, {
    target: s,
    x: r,
    y: a,
  }) {
    const {
      x: o,
      y: h,
      width: l,
      height: d,
    } = s.getBoundingClientRect(); const u = new AbortController(); const p = e.combinedSignal(u); const
      y = (S) => {
        u.abort(), w(this, Ni, Xb).call(this, e, S);
      };
    window.addEventListener('blur', y, {
      signal: p,
    }), window.addEventListener('pointerup', y, {
      signal: p,
    }), window.addEventListener('pointerdown', Nt, {
      capture: !0,
      passive: !1,
      signal: p,
    }), window.addEventListener('contextmenu', Si, {
      signal: p,
    }), s.addEventListener('pointermove', w(this, Ni, qb).bind(this, e), {
      signal: p,
    }), this._freeHighlight = new bp({
      x: r,
      y: a,
    }, [o, h, l, d], e.scale, this._defaultThickness / 2, i, 1e-3), {
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId,
    } = e.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: '0 0 1 1',
        fill: this._defaultColor,
        'fill-opacity': this._defaultOpacity,
      },
      rootClass: {
        highlight: !0,
        free: !0,
      },
      path: {
        d: this._freeHighlight.toSVGPath(),
      },
    }, !0, !0);
  }

  static async deserialize(e, i, s) {
    let v; let _; let x; let
      T;
    let r = null;
    if (e instanceof xb) {
      const {
        data: {
          quadPoints: E,
          rect: f,
          rotation: m,
          id: A,
          color: C,
          opacity: P,
          popupRef: R,
          richText: D,
          contentsObj: k,
          creationDate: L,
          modificationDate: N,
        },
        parent: {
          page: {
            pageNumber: I,
          },
        },
      } = e;
      r = e = {
        annotationType: q.HIGHLIGHT,
        color: Array.from(C),
        opacity: P,
        quadPoints: E,
        boxes: null,
        pageIndex: I - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: D,
        comment: (k == null ? void 0 : k.str) || null,
        creationDate: L,
        modificationDate: N,
      };
    } else if (e instanceof Qp) {
      const {
        data: {
          inkLists: E,
          rect: f,
          rotation: m,
          id: A,
          color: C,
          borderStyle: {
            rawWidth: P,
          },
          popupRef: R,
          richText: D,
          contentsObj: k,
          creationDate: L,
          modificationDate: N,
        },
        parent: {
          page: {
            pageNumber: I,
          },
        },
      } = e;
      r = e = {
        annotationType: q.HIGHLIGHT,
        color: Array.from(C),
        thickness: P,
        inkLists: E,
        boxes: null,
        pageIndex: I - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: D,
        comment: (k == null ? void 0 : k.str) || null,
        creationDate: L,
        modificationDate: N,
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: h,
      opacity: l,
    } = e; const
      d = await super.deserialize(e, i, s);
    d.color = U.makeHexColor(...a), d.opacity = l || 1, h && g(d, Ii, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [u, p] = d.pageDimensions; const
      [y, S] = d.pageTranslation;
    if (o) {
      const E = g(d, bn, []);
      for (let f = 0; f < o.length; f += 8) {
        E.push({
          x: (o[f] - y) / u,
          y: 1 - (o[f + 1] - S) / p,
          width: (o[f + 2] - o[f]) / u,
          height: (o[f + 1] - o[f + 5]) / p,
        });
      }
      w(v = d, Q, yp).call(v), w(_ = d, Q, Lr).call(_), d.rotate(d.rotation);
    } else if (h) {
      g(d, me, !0);
      const E = h[0]; const f = {
        x: E[0] - y,
        y: p - (E[1] - S),
      }; const
        m = new bp(f, [0, 0, u, p], 1, n(d, Ii) / 2, !0, 1e-3);
      for (let P = 0, R = E.length; P < R; P += 2) f.x = E[P] - y, f.y = p - (E[P + 1] - S), m.add(f);
      const {
        id: A,
        clipPathId: C,
      } = i.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: '0 0 1 1',
          fill: d.color,
          'fill-opacity': d._defaultOpacity,
        },
        rootClass: {
          highlight: !0,
          free: !0,
        },
        path: {
          d: m.toSVGPath(),
        },
      }, !0, !0);
      w(x = d, Q, tu).call(x, {
        highlightOutlines: m.getOutlines(),
        highlightId: A,
        clipPathId: C,
      }), w(T = d, Q, Lr).call(T), d.rotate(d.parentRotation);
    }
    return d;
  }

  serialize(e = !1) {
    if (this.isEmpty() || e) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = Ct._colorManager.convert(this._uiManager.getNonHCMColor(this.color)); const
      s = super.serialize(e);
    return Object.assign(s, {
      color: i,
      opacity: this.opacity,
      thickness: n(this, Ii),
      quadPoints: w(this, Q, jb).call(this),
      outlines: w(this, Q, Vb).call(this, s.rect),
    }), this.addComment(s), this.annotationElementId && !w(this, Q, Yb).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }

  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment,
    }), null);
  }

  static canCreateNewEmptyEditor() {
    return !1;
  }
};
Dh = new WeakMap(), nd = new WeakMap(), bn = new WeakMap(), La = new WeakMap(), rd = new WeakMap(), Xe = new WeakMap(), ad = new WeakMap(), od = new WeakMap(), Ia = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), me = new WeakMap(), kh = new WeakMap(), Mh = new WeakMap(), Re = new WeakMap(), Lh = new WeakMap(), Ii = new WeakMap(), hd = new WeakMap(), Q = new WeakSet(), yp = function () {
  const e = new gp(n(this, bn), 1e-3);
  g(this, ui, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, ui).box;
  const i = new gp(n(this, bn), 25e-4, 1e-3, this._uiManager.direction === 'ltr');
  g(this, Xe, i.getOutlines());
  const {
    firstPoint: s,
  } = n(this, ui);
  g(this, kh, [(s[0] - this.x) / this.width, (s[1] - this.y) / this.height]);
  const {
    lastPoint: r,
  } = n(this, Xe);
  g(this, Mh, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, tu = function ({
  highlightOutlines: e,
  highlightId: i,
  clipPathId: s,
}) {
  let p; let
    y;
  if (g(this, ui, e), g(this, Xe, e.getNewOutline(n(this, Ii) / 2 + 1.5, 25e-4)), i >= 0) {
    g(this, fi, i), g(this, La, s), this.parent.drawLayer.finalizeDraw(i, {
      bbox: e.box,
      path: {
        d: e.toSVGPath(),
      },
    }), g(this, Re, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0,
      },
      bbox: n(this, Xe).box,
      path: {
        d: n(this, Xe).toSVGPath(),
      },
    }, !0));
  } else if (this.parent) {
    const S = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, fi), {
      bbox: w(p = lt, Ni, ho).call(p, n(this, ui).box, (S - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath(),
      },
    }), this.parent.drawLayer.updateProperties(n(this, Re), {
      bbox: w(y = lt, Ni, ho).call(y, n(this, Xe).box, S),
      path: {
        d: n(this, Xe).toSVGPath(),
      },
    });
  }
  const [a, o, h, l] = e.box;
  switch (this.rotation) {
    case 0:
      this.x = a, this.y = o, this.width = h, this.height = l;
      break;
    case 90: {
      const [S, v] = this.parentDimensions;
      this.x = o, this.y = 1 - a, this.width = h * v / S, this.height = l * S / v;
      break;
    }
    case 180:
      this.x = 1 - a, this.y = 1 - o, this.width = h, this.height = l;
      break;
    case 270: {
      const [S, v] = this.parentDimensions;
      this.x = 1 - o, this.y = a, this.width = h * v / S, this.height = l * S / v;
      break;
    }
  }
  const {
    firstPoint: d,
  } = e;
  g(this, kh, [(d[0] - a) / h, (d[1] - o) / l]);
  const {
    lastPoint: u,
  } = n(this, Xe);
  g(this, Mh, [(u[0] - a) / h, (u[1] - o) / l]);
}, Ub = function (e) {
  const i = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }; const s = this.color; const
    r = this.opacity;
  this.addCommands({
    cmd: i.bind(this, e, lt._defaultOpacity),
    undo: i.bind(this, s, r),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.HIGHLIGHT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0,
  }), this._reportTelemetry({
    action: 'color_changed',
    color: this._uiManager.getNonHCMColorName(e),
  }, !0);
}, Gb = function (e) {
  const i = n(this, Ii); const
    s = (r) => {
      g(this, Ii, r), w(this, Q, zb).call(this, r);
    };
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.INK_THICKNESS,
    overwriteIfSameType: !0,
    keepUndo: !0,
  }), this._reportTelemetry({
    action: 'thickness_changed',
    thickness: e,
  }, !0);
}, zb = function (e) {
  n(this, me) && (w(this, Q, tu).call(this, {
    highlightOutlines: n(this, ui).getNewOutline(e / 2),
  }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, wp = function () {
  n(this, fi) === null || !this.parent || (this.parent.drawLayer.remove(n(this, fi)), g(this, fi, null), this.parent.drawLayer.remove(n(this, Re)), g(this, Re, null));
}, Lr = function (e = this.parent) {
  n(this, fi) === null && ({
    id: Kt(this, fi)._,
    clipPathId: Kt(this, La)._,
  } = e.drawLayer.draw({
    bbox: n(this, ui).box,
    root: {
      viewBox: '0 0 1 1',
      fill: this.color,
      'fill-opacity': this.opacity,
    },
    rootClass: {
      highlight: !0,
      free: n(this, me),
    },
    path: {
      d: n(this, ui).toSVGPath(),
    },
  }, !1, !0), g(this, Re, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, me),
    },
    bbox: n(this, Xe).box,
    path: {
      d: n(this, Xe).toSVGPath(),
    },
  }, n(this, me))), n(this, Ia) && (n(this, Ia).style.clipPath = n(this, La)));
}, Ni = new WeakSet(), ho = function ([e, i, s, r], a) {
  switch (a) {
    case 90:
      return [1 - i - r, e, r, s];
    case 180:
      return [1 - e - s, 1 - i - r, s, r];
    case 270:
      return [i, 1 - e - s, r, s];
  }
  return [e, i, s, r];
}, Wb = function (e) {
  lt._keyboardManager.exec(this, e);
}, eu = function (e) {
  if (!n(this, Dh)) return;
  const i = window.getSelection();
  e ? i.setPosition(n(this, Dh), n(this, nd)) : i.setPosition(n(this, ad), n(this, od));
}, iu = function () {
  return n(this, me) ? this.rotation : 0;
}, jb = function () {
  if (n(this, me)) return null;
  const [e, i] = this.pageDimensions; const [s, r] = this.pageTranslation; const a = n(this, bn); const
    o = new Float32Array(a.length * 8);
  let h = 0;
  for (const {
    x: l,
    y: d,
    width: u,
    height: p,
  } of a) {
    const y = l * e + s; const
      S = (1 - d) * i + r;
    o[h] = o[h + 4] = y, o[h + 1] = o[h + 3] = S, o[h + 2] = o[h + 6] = y + u * e, o[h + 5] = o[h + 7] = S - p * i, h += 8;
  }
  return o;
}, Vb = function (e) {
  return n(this, ui).serialize(e, w(this, Q, iu).call(this));
}, qb = function (e, i) {
  this._freeHighlight.add(i) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath(),
    },
  });
}, Xb = function (e, i) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(i, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: 'main_toolbar',
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = '';
}, Yb = function (e) {
  const {
    color: i,
  } = this._initialData;
  return this.hasEditedComment || e.color.some((s, r) => s !== i[r]);
}, b(lt, Ni), M(lt, '_defaultColor', null), M(lt, '_defaultOpacity', 1), M(lt, '_defaultThickness', 12), M(lt, '_type', 'highlight'), M(lt, '_editorType', q.HIGHLIGHT), M(lt, '_freeHighlightId', -1), M(lt, '_freeHighlight', null), M(lt, '_freeHighlightClipId', '');
const wu = lt;
let Fa;
class Kb {
  constructor() {
    b(this, Fa, /* @__PURE__ */ Object.create(null));
  }

  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }

  updateProperties(t) {
    if (t) for (const [e, i] of Object.entries(t)) e.startsWith('_') || this.updateProperty(e, i);
  }

  updateSVGProperty(t, e) {
    n(this, Fa)[t] = e;
  }

  toSVGProperties() {
    const t = n(this, Fa);
    return g(this, Fa, /* @__PURE__ */ Object.create(null)), {
      root: t,
    };
  }

  reset() {
    g(this, Fa, /* @__PURE__ */ Object.create(null));
  }

  updateAll(t = this) {
    this.updateProperties(t);
  }

  clone() {
    Et('Not implemented');
  }
}
Fa = new WeakMap();
let pi; let Ih; let re; let Na; let Oa; let pr; let gr; let mr; let Ba; let at; let Ap; let vp; let Sp; let yl; let Jb; let su; let wl; let
  lo;
const G = class G extends Ct {
  constructor(e) {
    super(e);
    b(this, at);
    b(this, pi, null);
    b(this, Ih);
    M(this, '_colorPicker', null);
    M(this, '_drawId', null);
    g(this, Ih, e.mustBeCommitted || !1), this._addOutlines(e);
  }

  onUpdatedColor() {
    let e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }

  _addOutlines(e) {
    e.drawOutlines && (w(this, at, Ap).call(this, e), w(this, at, yl).call(this));
  }

  static _mergeSVGProperties(e, i) {
    const s = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(i)) s.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }

  static getDefaultDrawingOptions(e) {
    Et('Not implemented');
  }

  static get typesMap() {
    Et('Not implemented');
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
    const e = []; const
      i = this._defaultDrawingOptions;
    for (const [s, r] of this.typesMap) e.push([s, i[r]]);
    return e;
  }

  get propertiesToUpdate() {
    const e = []; const
      {
        _drawingOptions: i,
      } = this;
    for (const [s, r] of this.constructor.typesMap) e.push([s, i[r]]);
    return e;
  }

  _updateProperty(e, i, s) {
    const r = this._drawingOptions; const a = r[i]; const
      o = (h) => {
        let d;
        r.updateProperty(i, h);
        const l = n(this, pi).updateProperty(i, h);
        l && w(this, at, wl).call(this, l), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
      };
    this.addCommands({
      cmd: o.bind(this, s),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0,
    });
  }

  _onResizing() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties(n(this, pi).getPathResizingSVGProperties(w(this, at, su).call(this)), {
      bbox: w(this, at, lo).call(this),
    }));
  }

  _onResized() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties(n(this, pi).getPathResizedSVGProperties(w(this, at, su).call(this)), {
      bbox: w(this, at, lo).call(this),
    }));
  }

  _onTranslating(e, i) {
    let s;
    (s = this.parent) == null || s.drawLayer.updateProperties(this._drawId, {
      bbox: w(this, at, lo).call(this),
    });
  }

  _onTranslated() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties(n(this, pi).getPathTranslatedSVGProperties(w(this, at, su).call(this), this.parentDimensions), {
      bbox: w(this, at, lo).call(this),
    }));
  }

  _onStartDragging() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0,
      },
    });
  }

  _onStopDragging() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1,
      },
    });
  }

  commit() {
    super.commit(), this.disableEditMode(), this.disableEditing();
  }

  disableEditing() {
    super.disableEditing(), this.div.classList.toggle('disabled', !0);
  }

  enableEditing() {
    super.enableEditing(), this.div.classList.toggle('disabled', !1);
  }

  getBaseTranslation() {
    return [0, 0];
  }

  get isResizable() {
    return !0;
  }

  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Ih) && (g(this, Ih, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }

  remove() {
    w(this, at, Sp).call(this), super.remove();
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, at, yl).call(this), w(this, at, wl).call(this, n(this, pi).box), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let s;
    let i = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), w(this, at, Sp).call(this)) : e && (this._uiManager.addShouldRescale(this), w(this, at, yl).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains('selectedEditor'))), super.setParent(e), i && this.select();
  }

  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, G._mergeSVGProperties({
      bbox: w(this, at, lo).call(this),
    }, n(this, pi).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }

  onScaleChanging() {
    this.parent && w(this, at, wl).call(this, n(this, pi).updateParentDimensions(this.parentDimensions, this.parent.scale));
  }

  static onScaleChangingWhenDrawing() {
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    this._isCopy && (e = this.x, i = this.y);
    const s = super.render();
    s.classList.add('draw');
    const r = document.createElement('div');
    return s.append(r), r.setAttribute('aria-hidden', 'true'), r.className = 'internal', this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, i), s;
  }

  static createDrawerInstance(e, i, s, r, a) {
    Et('Not implemented');
  }

  static startDrawing(e, i, s, r) {
    let _;
    const {
      target: a,
      offsetX: o,
      offsetY: h,
      pointerId: l,
      pointerType: d,
    } = r;
    if (n(G, gr) && n(G, gr) !== d) return;
    const {
      viewport: {
        rotation: u,
      },
    } = e; const {
      width: p,
      height: y,
    } = a.getBoundingClientRect(); const S = g(G, Na, new AbortController()); const
      v = e.combinedSignal(S);
    if (n(G, pr) || g(G, pr, l), n(G, gr) ?? g(G, gr, d), window.addEventListener('pointerup', (x) => {
      let T;
      n(G, pr) === x.pointerId ? this._endDraw(x) : (T = n(G, mr)) == null || T.delete(x.pointerId);
    }, {
      signal: v,
    }), window.addEventListener('pointercancel', (x) => {
      let T;
      n(G, pr) === x.pointerId ? this._currentParent.endDrawingSession() : (T = n(G, mr)) == null || T.delete(x.pointerId);
    }, {
      signal: v,
    }), window.addEventListener('pointerdown', (x) => {
      n(G, gr) === x.pointerType && ((n(G, mr) || g(G, mr, /* @__PURE__ */ new Set())).add(x.pointerId), n(G, re).isCancellable() && (n(G, re).removeLastElement(), n(G, re).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: v,
    }), window.addEventListener('contextmenu', Si, {
      signal: v,
    }), a.addEventListener('pointermove', this._drawMove.bind(this), {
      signal: v,
    }), a.addEventListener('touchmove', (x) => {
      x.timeStamp === n(G, Ba) && Nt(x);
    }, {
      signal: v,
    }), e.toggleDrawing(), (_ = i._editorUndoBar) == null || _.hide(), n(G, re)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(G, re).startNew(o, h, p, y, u));
      return;
    }
    i.updateUIForDefaultProperties(this), g(G, re, this.createDrawerInstance(o, h, p, y, u)), g(G, Oa, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId,
    } = e.drawLayer.draw(this._mergeSVGProperties(n(G, Oa).toSVGProperties(), n(G, re).defaultSVGProperties), !0, !1);
  }

  static _drawMove(e) {
    let a;
    if (g(G, Ba, -1), !n(G, re)) return;
    const {
      offsetX: i,
      offsetY: s,
      pointerId: r,
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
        const s = n(G, re); const r = this._currentDrawId; const
          a = s.getLastElement();
        i.addCommands({
          cmd: () => {
            i.drawLayer.updateProperties(r, s.setLastElement(a));
          },
          undo: () => {
            i.drawLayer.updateProperties(r, s.removeLastElement());
          },
          mustExec: !1,
          type: it.DRAW_STEP,
        });
        return;
      }
      this.endDrawing(!1);
    }
  }

  static endDrawing(e) {
    const i = this._currentParent;
    if (!i) return null;
    if (i.toggleDrawing(!0), i.cleanUndoStack(it.DRAW_STEP), !n(G, re).isEmpty()) {
      const {
        pageDimensions: [s, r],
        scale: a,
      } = i; const
        o = i.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0,
        }, !1, {
          drawId: this._currentDrawId,
          drawOutlines: n(G, re).getOutlines(s * a, r * a, a, this._INNER_MARGIN),
          drawingOptions: n(G, Oa),
          mustBeCommitted: !e,
        });
      return this._cleanup(!0), o;
    }
    return i.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }

  createDrawingOptions(e) {
  }

  static deserializeDraw(e, i, s, r, a, o) {
    Et('Not implemented');
  }

  static async deserialize(e, i, s) {
    let u; let
      p;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: h,
      },
    } = i.viewport; const l = this.deserializeDraw(o, h, r, a, this._INNER_MARGIN, e); const
      d = await super.deserialize(e, i, s);
    return d.createDrawingOptions(e), w(u = d, at, Ap).call(u, {
      drawOutlines: l,
    }), w(p = d, at, yl).call(p), d.onScaleChanging(), d.rotate(), d;
  }

  serializeDraw(e) {
    const [i, s] = this.pageTranslation; const
      [r, a] = this.pageDimensions;
    return n(this, pi).serialize([i, s, r, a], e);
  }

  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect(),
    }), null;
  }

  static canCreateNewEmptyEditor() {
    return !1;
  }
};
pi = new WeakMap(), Ih = new WeakMap(), re = new WeakMap(), Na = new WeakMap(), Oa = new WeakMap(), pr = new WeakMap(), gr = new WeakMap(), mr = new WeakMap(), Ba = new WeakMap(), at = new WeakSet(), Ap = function ({
  drawOutlines: e,
  drawId: i,
  drawingOptions: s,
}) {
  g(this, pi, e), this._drawingOptions || (this._drawingOptions = s), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), i >= 0 ? (this._drawId = i, this.parent.drawLayer.finalizeDraw(i, e.defaultProperties)) : this._drawId = w(this, at, vp).call(this, e, this.parent), w(this, at, wl).call(this, e.box);
}, vp = function (e, i) {
  const {
    id: s,
  } = i.drawLayer.draw(G._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return s;
}, Sp = function () {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, yl = function (e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = w(this, at, vp).call(this, n(this, pi), e);
  }
}, Jb = function ([e, i, s, r]) {
  const {
    parentDimensions: [a, o],
    rotation: h,
  } = this;
  switch (h) {
    case 90:
      return [i, 1 - e, s * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [1 - i, e, s * (o / a), r * (a / o)];
    default:
      return [e, i, s, r];
  }
}, su = function () {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    parentDimensions: [a, o],
    rotation: h,
  } = this;
  switch (h) {
    case 90:
      return [1 - i, e, s * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - i, s, r];
    case 270:
      return [i, 1 - e, s * (a / o), r * (o / a)];
    default:
      return [e, i, s, r];
  }
}, wl = function (e) {
  [this.x, this.y, this.width, this.height] = w(this, at, Jb).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, lo = function () {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [h, l],
  } = this;
  switch ((a * 4 + o) / 90) {
    case 1:
      return [1 - i - r, e, r, s];
    case 2:
      return [1 - e - s, 1 - i - r, s, r];
    case 3:
      return [i, 1 - e - s, r, s];
    case 4:
      return [e, i - s * (h / l), r * (l / h), s * (h / l)];
    case 5:
      return [1 - i, e, s * (h / l), r * (l / h)];
    case 6:
      return [1 - e - r * (l / h), 1 - i, r * (l / h), s * (h / l)];
    case 7:
      return [i - s * (h / l), 1 - e - r * (l / h), s * (h / l), r * (l / h)];
    case 8:
      return [e - s, i - r, s, r];
    case 9:
      return [1 - i, e - s, r, s];
    case 10:
      return [1 - e, 1 - i, s, r];
    case 11:
      return [i - r, 1 - e, r, s];
    case 12:
      return [e - r * (l / h), i, r * (l / h), s * (h / l)];
    case 13:
      return [1 - i - s * (h / l), e - r * (l / h), s * (h / l), r * (l / h)];
    case 14:
      return [1 - e, 1 - i - s * (h / l), r * (l / h), s * (h / l)];
    case 15:
      return [i, 1 - e, s * (h / l), r * (l / h)];
    default:
      return [e, i, s, r];
  }
}, M(G, '_currentDrawId', -1), M(G, '_currentParent', null), b(G, re, null), b(G, Na, null), b(G, Oa, null), b(G, pr, NaN), b(G, gr, null), b(G, mr, null), b(G, Ba, NaN), M(G, '_INNER_MARGIN', 3);
const Au = G;
let Ts; let ae; let oe; let Ha; let Fh; let Fe; let be; let Fi; let $a; let Ua; let Ga; let Nh; let
  nu;
class L0 {
  constructor(t, e, i, s, r, a) {
    b(this, Nh);
    b(this, Ts, new Float64Array(6));
    b(this, ae);
    b(this, oe);
    b(this, Ha);
    b(this, Fh);
    b(this, Fe);
    b(this, be, '');
    b(this, Fi, 0);
    b(this, $a, new yd());
    b(this, Ua);
    b(this, Ga);
    g(this, Ua, i), g(this, Ga, s), g(this, Ha, r), g(this, Fh, a), [t, e] = w(this, Nh, nu).call(this, t, e);
    const o = g(this, ae, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Fe, [t, e]), g(this, oe, [{
      line: o,
      points: n(this, Fe),
    }]), n(this, Ts).set(o, 0);
  }

  updateProperty(t, e) {
    t === 'stroke-width' && g(this, Fh, e);
  }

  isEmpty() {
    return !n(this, oe) || n(this, oe).length === 0;
  }

  isCancellable() {
    return n(this, Fe).length <= 10;
  }

  add(t, e) {
    [t, e] = w(this, Nh, nu).call(this, t, e);
    const [i, s, r, a] = n(this, Ts).subarray(2, 6); const o = t - r; const
      h = e - a;
    return Math.hypot(n(this, Ua) * o, n(this, Ga) * h) <= 2 ? null : (n(this, Fe).push(t, e), isNaN(i) ? (n(this, Ts).set([r, a, t, e], 2), n(this, ae).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath(),
      },
    }) : (isNaN(n(this, Ts)[0]) && n(this, ae).splice(6, 6), n(this, Ts).set([i, s, r, a, t, e], 0), n(this, ae).push(...$.createBezierPoints(i, s, r, a, t, e)), {
      path: {
        d: this.toSVGPath(),
      },
    }));
  }

  end(t, e) {
    const i = this.add(t, e);
    return i || (n(this, Fe).length === 2 ? {
      path: {
        d: this.toSVGPath(),
      },
    } : null);
  }

  startNew(t, e, i, s, r) {
    g(this, Ua, i), g(this, Ga, s), g(this, Ha, r), [t, e] = w(this, Nh, nu).call(this, t, e);
    const a = g(this, ae, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Fe, [t, e]);
    const o = n(this, oe).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, oe).push({
      line: a,
      points: n(this, Fe),
    }), n(this, Ts).set(a, 0), g(this, Fi, 0), this.toSVGPath(), null;
  }

  getLastElement() {
    return n(this, oe).at(-1);
  }

  setLastElement(t) {
    return n(this, oe) ? (n(this, oe).push(t), g(this, ae, t.line), g(this, Fe, t.points), g(this, Fi, 0), {
      path: {
        d: this.toSVGPath(),
      },
    }) : n(this, $a).setLastElement(t);
  }

  removeLastElement() {
    if (!n(this, oe)) return n(this, $a).removeLastElement();
    n(this, oe).pop(), g(this, be, '');
    for (let t = 0, e = n(this, oe).length; t < e; t++) {
      const {
        line: i,
        points: s,
      } = n(this, oe)[t];
      g(this, ae, i), g(this, Fe, s), g(this, Fi, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, be),
      },
    };
  }

  toSVGPath() {
    const t = $.svgRound(n(this, ae)[4]); const
      e = $.svgRound(n(this, ae)[5]);
    if (n(this, Fe).length === 2) return g(this, be, `${n(this, be)} M ${t} ${e} Z`), n(this, be);
    if (n(this, Fe).length <= 6) {
      const s = n(this, be).lastIndexOf('M');
      g(this, be, `${n(this, be).slice(0, s)} M ${t} ${e}`), g(this, Fi, 6);
    }
    if (n(this, Fe).length === 4) {
      const s = $.svgRound(n(this, ae)[10]); const
        r = $.svgRound(n(this, ae)[11]);
      return g(this, be, `${n(this, be)} L ${s} ${r}`), g(this, Fi, 12), n(this, be);
    }
    const i = [];
    n(this, Fi) === 0 && (i.push(`M ${t} ${e}`), g(this, Fi, 6));
    for (let s = n(this, Fi), r = n(this, ae).length; s < r; s += 6) {
      const [a, o, h, l, d, u] = n(this, ae).slice(s, s + 6).map($.svgRound);
      i.push(`C${a} ${o} ${h} ${l} ${d} ${u}`);
    }
    return g(this, be, n(this, be) + i.join(' ')), g(this, Fi, n(this, ae).length), n(this, be);
  }

  getOutlines(t, e, i, s) {
    const r = n(this, oe).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, $a).build(n(this, oe), t, e, i, n(this, Ha), n(this, Fh), s), g(this, Ts, null), g(this, ae, null), g(this, oe, null), g(this, be, null), n(this, $a);
  }

  get defaultSVGProperties() {
    return {
      root: {
        viewBox: '0 0 10000 10000',
      },
      rootClass: {
        draw: !0,
      },
      bbox: [0, 0, 1, 1],
    };
  }
}
Ts = new WeakMap(), ae = new WeakMap(), oe = new WeakMap(), Ha = new WeakMap(), Fh = new WeakMap(), Fe = new WeakMap(), be = new WeakMap(), Fi = new WeakMap(), $a = new WeakMap(), Ua = new WeakMap(), Ga = new WeakMap(), Nh = new WeakSet(), nu = function (t, e) {
  return $._normalizePoint(t, e, n(this, Ua), n(this, Ga), n(this, Ha));
};
let Ne; let ld; let cd; let gi; let Ps; let Rs; let Oh; let Bh; let za; let we; let Hs; let Qb; let Zb; let
  ty;
class yd extends $ {
  constructor() {
    super(...arguments);
    b(this, we);
    b(this, Ne);
    b(this, ld, 0);
    b(this, cd);
    b(this, gi);
    b(this, Ps);
    b(this, Rs);
    b(this, Oh);
    b(this, Bh);
    b(this, za);
  }

  build(e, i, s, r, a, o, h) {
    g(this, Ps, i), g(this, Rs, s), g(this, Oh, r), g(this, Bh, a), g(this, za, o), g(this, cd, h ?? 0), g(this, gi, e), w(this, we, Zb).call(this);
  }

  get thickness() {
    return n(this, za);
  }

  setLastElement(e) {
    return n(this, gi).push(e), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  removeLastElement() {
    return n(this, gi).pop(), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  toSVGPath() {
    const e = [];
    for (const {
      line: i,
    } of n(this, gi)) {
      if (e.push(`M${$.svgRound(i[4])} ${$.svgRound(i[5])}`), i.length === 6) {
        e.push('Z');
        continue;
      }
      if (i.length === 12 && isNaN(i[6])) {
        e.push(`L${$.svgRound(i[10])} ${$.svgRound(i[11])}`);
        continue;
      }
      for (let s = 6, r = i.length; s < r; s += 6) {
        const [a, o, h, l, d, u] = i.subarray(s, s + 6).map($.svgRound);
        e.push(`C${a} ${o} ${h} ${l} ${d} ${u}`);
      }
    }
    return e.join('');
  }

  serialize([e, i, s, r], a) {
    const o = []; const h = []; const
      [l, d, u, p] = w(this, we, Qb).call(this);
    let y; let S; let v; let _; let x; let T; let E; let f; let
      m;
    switch (n(this, Bh)) {
      case 0:
        m = $._rescale, y = e, S = i + r, v = s, _ = -r, x = e + l * s, T = i + (1 - d - p) * r, E = e + (l + u) * s, f = i + (1 - d) * r;
        break;
      case 90:
        m = $._rescaleAndSwap, y = e, S = i, v = s, _ = r, x = e + d * s, T = i + l * r, E = e + (d + p) * s, f = i + (l + u) * r;
        break;
      case 180:
        m = $._rescale, y = e + s, S = i, v = -s, _ = r, x = e + (1 - l - u) * s, T = i + d * r, E = e + (1 - l) * s, f = i + (d + p) * r;
        break;
      case 270:
        m = $._rescaleAndSwap, y = e + s, S = i + r, v = -s, _ = -r, x = e + (1 - d - p) * s, T = i + (1 - l - u) * r, E = e + (1 - d) * s, f = i + (1 - l) * r;
        break;
    }
    for (const {
      line: A,
      points: C,
    } of n(this, gi)) o.push(m(A, y, S, v, _, a ? new Array(A.length) : null)), h.push(m(C, y, S, v, _, a ? new Array(C.length) : null));
    return {
      lines: o,
      points: h,
      rect: [x, T, E, f],
    };
  }

  static deserialize(e, i, s, r, a, {
    paths: {
      lines: o,
      points: h,
    },
    rotation: l,
    thickness: d,
  }) {
    const u = [];
    let p; let y; let S; let v; let
      _;
    switch (l) {
      case 0:
        _ = $._rescale, p = -e / s, y = i / r + 1, S = 1 / s, v = -1 / r;
        break;
      case 90:
        _ = $._rescaleAndSwap, p = -i / r, y = -e / s, S = 1 / r, v = 1 / s;
        break;
      case 180:
        _ = $._rescale, p = e / s + 1, y = -i / r, S = -1 / s, v = 1 / r;
        break;
      case 270:
        _ = $._rescaleAndSwap, p = i / r + 1, y = e / s + 1, S = -1 / r, v = -1 / s;
        break;
    }
    if (!o) {
      o = [];
      for (const T of h) {
        const E = T.length;
        if (E === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, T[0], T[1]]));
          continue;
        }
        if (E === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, T[0], T[1], NaN, NaN, NaN, NaN, T[2], T[3]]));
          continue;
        }
        const f = new Float32Array(3 * (E - 2));
        o.push(f);
        let [m, A, C, P] = T.subarray(0, 4);
        f.set([NaN, NaN, NaN, NaN, m, A], 0);
        for (let R = 4; R < E; R += 2) {
          const D = T[R]; const
            k = T[R + 1];
          f.set($.createBezierPoints(m, A, C, P, D, k), (R - 2) * 3), [m, A, C, P] = [C, P, D, k];
        }
      }
    }
    for (let T = 0, E = o.length; T < E; T++) {
      u.push({
        line: _(o[T].map((f) => f ?? NaN), p, y, S, v),
        points: _(h[T].map((f) => f ?? NaN), p, y, S, v),
      });
    }
    const x = new this.prototype.constructor();
    return x.build(u, s, r, 1, l, d, a), x;
  }

  get box() {
    return n(this, Ne);
  }

  updateProperty(e, i) {
    return e === 'stroke-width' ? w(this, we, ty).call(this, i) : null;
  }

  updateParentDimensions([e, i], s) {
    const [r, a] = w(this, we, Hs).call(this);
    g(this, Ps, e), g(this, Rs, i), g(this, Oh, s);
    const [o, h] = w(this, we, Hs).call(this); const l = o - r; const d = h - a; const
      u = n(this, Ne);
    return u[0] -= l, u[1] -= d, u[2] += 2 * l, u[3] += 2 * d, u;
  }

  updateRotation(e) {
    return g(this, ld, e), {
      path: {
        transform: this.rotationTransform,
      },
    };
  }

  get viewBox() {
    return n(this, Ne).map($.svgRound).join(' ');
  }

  get defaultProperties() {
    const [e, i] = n(this, Ne);
    return {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        'transform-origin': `${$.svgRound(e)} ${$.svgRound(i)}`,
      },
    };
  }

  get rotationTransform() {
    const [, , e, i] = n(this, Ne);
    let s = 0; let r = 0; let a = 0; let o = 0; let h = 0; let
      l = 0;
    switch (n(this, ld)) {
      case 90:
        r = i / e, a = -e / i, h = e;
        break;
      case 180:
        s = -1, o = -1, h = e, l = i;
        break;
      case 270:
        r = -i / e, a = e / i, l = i;
        break;
      default:
        return '';
    }
    return `matrix(${s} ${r} ${a} ${o} ${$.svgRound(h)} ${$.svgRound(l)})`;
  }

  getPathResizingSVGProperties([e, i, s, r]) {
    const [a, o] = w(this, we, Hs).call(this); const
      [h, l, d, u] = n(this, Ne);
    if (Math.abs(d - a) <= $.PRECISION || Math.abs(u - o) <= $.PRECISION) {
      const _ = e + s / 2 - (h + d / 2); const
        x = i + r / 2 - (l + u / 2);
      return {
        path: {
          'transform-origin': `${$.svgRound(e)} ${$.svgRound(i)}`,
          transform: `${this.rotationTransform} translate(${_} ${x})`,
        },
      };
    }
    const p = (s - 2 * a) / (d - 2 * a); const y = (r - 2 * o) / (u - 2 * o); const S = d / s; const
      v = u / r;
    return {
      path: {
        'transform-origin': `${$.svgRound(h)} ${$.svgRound(l)}`,
        transform: `${this.rotationTransform} scale(${S} ${v}) translate(${$.svgRound(a)} ${$.svgRound(o)}) scale(${p} ${y}) translate(${$.svgRound(-a)} ${$.svgRound(-o)})`,
      },
    };
  }

  getPathResizedSVGProperties([e, i, s, r]) {
    const [a, o] = w(this, we, Hs).call(this); const h = n(this, Ne); const
      [l, d, u, p] = h;
    if (h[0] = e, h[1] = i, h[2] = s, h[3] = r, Math.abs(u - a) <= $.PRECISION || Math.abs(p - o) <= $.PRECISION) {
      const x = e + s / 2 - (l + u / 2); const
        T = i + r / 2 - (d + p / 2);
      for (const {
        line: E,
        points: f,
      } of n(this, gi)) $._translate(E, x, T, E), $._translate(f, x, T, f);
      return {
        root: {
          viewBox: this.viewBox,
        },
        path: {
          'transform-origin': `${$.svgRound(e)} ${$.svgRound(i)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath(),
        },
      };
    }
    const y = (s - 2 * a) / (u - 2 * a); const S = (r - 2 * o) / (p - 2 * o); const v = -y * (l + a) + e + a; const
      _ = -S * (d + o) + i + o;
    if (y !== 1 || S !== 1 || v !== 0 || _ !== 0) {
      for (const {
        line: x,
        points: T,
      } of n(this, gi)) $._rescale(x, v, _, y, S, x), $._rescale(T, v, _, y, S, T);
    }
    return {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        'transform-origin': `${$.svgRound(e)} ${$.svgRound(i)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath(),
      },
    };
  }

  getPathTranslatedSVGProperties([e, i], s) {
    const [r, a] = s; const o = n(this, Ne); const h = e - o[0]; const
      l = i - o[1];
    if (n(this, Ps) === r && n(this, Rs) === a) {
      for (const {
        line: d,
        points: u,
      } of n(this, gi)) $._translate(d, h, l, d), $._translate(u, h, l, u);
    } else {
      const d = n(this, Ps) / r; const
        u = n(this, Rs) / a;
      g(this, Ps, r), g(this, Rs, a);
      for (const {
        line: p,
        points: y,
      } of n(this, gi)) $._rescale(p, h, l, d, u, p), $._rescale(y, h, l, d, u, y);
      o[2] *= d, o[3] *= u;
    }
    return o[0] = e, o[1] = i, {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        d: this.toSVGPath(),
        'transform-origin': `${$.svgRound(e)} ${$.svgRound(i)}`,
      },
    };
  }

  get defaultSVGProperties() {
    const e = n(this, Ne);
    return {
      root: {
        viewBox: this.viewBox,
      },
      rootClass: {
        draw: !0,
      },
      path: {
        d: this.toSVGPath(),
        'transform-origin': `${$.svgRound(e[0])} ${$.svgRound(e[1])}`,
        transform: this.rotationTransform || null,
      },
      bbox: e,
    };
  }
}
Ne = new WeakMap(), ld = new WeakMap(), cd = new WeakMap(), gi = new WeakMap(), Ps = new WeakMap(), Rs = new WeakMap(), Oh = new WeakMap(), Bh = new WeakMap(), za = new WeakMap(), we = new WeakSet(), Hs = function (e = n(this, za)) {
  const i = n(this, cd) + e / 2 * n(this, Oh);
  return n(this, Bh) % 180 === 0 ? [i / n(this, Ps), i / n(this, Rs)] : [i / n(this, Rs), i / n(this, Ps)];
}, Qb = function () {
  const [e, i, s, r] = n(this, Ne); const
    [a, o] = w(this, we, Hs).call(this, 0);
  return [e + a, i + o, s - 2 * a, r - 2 * o];
}, Zb = function () {
  const e = g(this, Ne, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r,
  } of n(this, gi)) {
    if (r.length <= 12) {
      for (let h = 4, l = r.length; h < l; h += 6) U.pointBoundingBox(r[h], r[h + 1], e);
      continue;
    }
    let a = r[4]; let
      o = r[5];
    for (let h = 6, l = r.length; h < l; h += 6) {
      const [d, u, p, y, S, v] = r.subarray(h, h + 6);
      U.bezierBoundingBox(a, o, d, u, p, y, S, v, e), a = S, o = v;
    }
  }
  const [i, s] = w(this, we, Hs).call(this);
  e[0] = De(e[0] - i, 0, 1), e[1] = De(e[1] - s, 0, 1), e[2] = De(e[2] + i, 0, 1), e[3] = De(e[3] + s, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, ty = function (e) {
  const [i, s] = w(this, we, Hs).call(this);
  g(this, za, e);
  const [r, a] = w(this, we, Hs).call(this); const [o, h] = [r - i, a - s]; const
    l = n(this, Ne);
  return l[0] -= o, l[1] -= h, l[2] += 2 * o, l[3] += 2 * h, l;
};
class qu extends Kb {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: 'none',
      stroke: Ct._defaultLineColor,
      'stroke-opacity': 1,
      'stroke-width': 1,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-miterlimit': 10,
    });
  }

  updateSVGProperty(t, e) {
    t === 'stroke-width' && (e ?? (e = this['stroke-width']), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }

  clone() {
    const t = new qu(this._viewParameters);
    return t.updateAll(this), t;
  }
}
let $u; let
  ey;
const go = class go extends Au {
  constructor(e) {
    super({
      ...e,
      name: 'inkEditor',
    });
    b(this, $u);
    this._willKeepAspectRatio = !0, this.defaultL10nId = 'pdfjs-editor-ink-editor';
  }

  static initialize(e, i) {
    Ct.initialize(e, i), this._defaultDrawingOptions = new qu(i.viewParameters);
  }

  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }

  static get supportMultipleDrawings() {
    return !0;
  }

  static get typesMap() {
    return J(this, 'typesMap', /* @__PURE__ */ new Map([[it.INK_THICKNESS, 'stroke-width'], [it.INK_COLOR, 'stroke'], [it.INK_OPACITY, 'stroke-opacity']]));
  }

  static createDrawerInstance(e, i, s, r, a) {
    return new L0(e, i, s, r, a, this._defaultDrawingOptions['stroke-width']);
  }

  static deserializeDraw(e, i, s, r, a, o) {
    return yd.deserialize(e, i, s, r, a, o);
  }

  static async deserialize(e, i, s) {
    let r = null;
    if (e instanceof Qp) {
      const {
        data: {
          inkLists: o,
          rect: h,
          rotation: l,
          id: d,
          color: u,
          opacity: p,
          borderStyle: {
            rawWidth: y,
          },
          popupRef: S,
          richText: v,
          contentsObj: _,
          creationDate: x,
          modificationDate: T,
        },
        parent: {
          page: {
            pageNumber: E,
          },
        },
      } = e;
      r = e = {
        annotationType: q.INK,
        color: Array.from(u),
        thickness: y,
        opacity: p,
        paths: {
          points: o,
        },
        boxes: null,
        pageIndex: E - 1,
        rect: h.slice(0),
        rotation: l,
        annotationElementId: d,
        id: d,
        deleted: !1,
        popupRef: S,
        richText: v,
        comment: (_ == null ? void 0 : _.str) || null,
        creationDate: x,
        modificationDate: T,
      };
    }
    const a = await super.deserialize(e, i, s);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }

  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new bu(this)), [['colorPicker', this._colorPicker]];
  }

  get colorType() {
    return it.INK_COLOR;
  }

  get color() {
    return this._drawingOptions.stroke;
  }

  get opacity() {
    return this._drawingOptions['stroke-opacity'];
  }

  onScaleChanging() {
    if (!this.parent) return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: i,
      parent: s,
    } = this;
    i.updateSVGProperty('stroke-width'), s.drawLayer.updateProperties(e, i.toSVGProperties());
  }

  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty('stroke-width'), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }

  createDrawingOptions({
    color: e,
    thickness: i,
    opacity: s,
  }) {
    this._drawingOptions = go.getDefaultDrawingOptions({
      stroke: U.makeHexColor(...e),
      'stroke-width': i,
      'stroke-opacity': s,
    });
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const {
      lines: i,
      points: s,
    } = this.serializeDraw(e); const {
      _drawingOptions: {
        stroke: r,
        'stroke-opacity': a,
        'stroke-width': o,
      },
    } = this; const
      h = Object.assign(super.serialize(e), {
        color: Ct._colorManager.convert(r),
        opacity: a,
        thickness: o,
        paths: {
          lines: i,
          points: s,
        },
      });
    return this.addComment(h), e ? (h.isCopy = !0, h) : this.annotationElementId && !w(this, $u, ey).call(this, h) ? null : (h.id = this.annotationElementId, h);
  }

  renderAnnotationElement(e) {
    if (this.deleted) return e.hide(), null;
    const {
      points: i,
      rect: s,
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: s,
      thickness: this._drawingOptions['stroke-width'],
      points: i,
      popup: this.comment,
    }), null;
  }
};
$u = new WeakSet(), ey = function (e) {
  const {
    color: i,
    thickness: s,
    opacity: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, h) => o !== i[h]) || e.thickness !== s || e.opacity !== r || e.pageIndex !== a;
}, M(go, '_type', 'ink'), M(go, '_editorType', q.INK), M(go, '_defaultDrawingOptions', null);
const xp = go;
class Ep extends yd {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith('Z') || (t += 'Z'), t;
  }
}
const Md = 8; const
  Zh = 3;
let Wa; let ct; let _p; let Ji; let iy; let sy; let Cp; let ru; let ny; let ry; let ay; let Tp; let Pp; let
  oy;
class Ls {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: i,
    fontWeight: s,
  }, r, a, o, h) {
    let l = new OffscreenCanvas(1, 1); let
      d = l.getContext('2d', {
        alpha: !1,
      });
    const u = 200; const p = d.font = `${i} ${s} ${u}px ${e}`; const {
      actualBoundingBoxLeft: y,
      actualBoundingBoxRight: S,
      actualBoundingBoxAscent: v,
      actualBoundingBoxDescent: _,
      fontBoundingBoxAscent: x,
      fontBoundingBoxDescent: T,
      width: E,
    } = d.measureText(t); const f = 1.5; const m = Math.ceil(Math.max(Math.abs(y) + Math.abs(S) || 0, E) * f); const
      A = Math.ceil(Math.max(Math.abs(v) + Math.abs(_) || u, Math.abs(x) + Math.abs(T) || u) * f);
    l = new OffscreenCanvas(m, A), d = l.getContext('2d', {
      alpha: !0,
      willReadFrequently: !0,
    }), d.font = p, d.filter = 'grayscale(1)', d.fillStyle = 'white', d.fillRect(0, 0, m, A), d.fillStyle = 'black', d.fillText(t, m * (f - 1) / 2, A * (3 - f) / 2);
    const C = w(this, ct, Tp).call(this, d.getImageData(0, 0, m, A).data); const P = w(this, ct, ay).call(this, C); const R = w(this, ct, Pp).call(this, P); const
      D = w(this, ct, Cp).call(this, C, m, A, R);
    return this.processDrawnLines({
      lines: {
        curves: D,
        width: m,
        height: A,
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: h,
      mustSmooth: !0,
      areContours: !0,
    });
  }

  static process(t, e, i, s, r) {
    const [a, o, h] = w(this, ct, oy).call(this, t); const [l, d] = w(this, ct, ry).call(this, a, o, h, Math.hypot(o, h) * n(this, Wa).sigmaSFactor, n(this, Wa).sigmaR, n(this, Wa).kernelSize); const u = w(this, ct, Pp).call(this, d); const
      p = w(this, ct, Cp).call(this, l, o, h, u);
    return this.processDrawnLines({
      lines: {
        curves: p,
        width: o,
        height: h,
      },
      pageWidth: e,
      pageHeight: i,
      rotation: s,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0,
    });
  }

  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: i,
    rotation: s,
    innerMargin: r,
    mustSmooth: a,
    areContours: o,
  }) {
    s % 180 !== 0 && ([e, i] = [i, e]);
    const {
      curves: h,
      width: l,
      height: d,
    } = t; const u = t.thickness ?? 0; const p = []; const y = Math.min(e / l, i / d); const S = y / e; const v = y / i; const
      _ = [];
    for (const {
      points: T,
    } of h) {
      const E = a ? w(this, ct, ny).call(this, T) : T;
      if (!E) continue;
      _.push(E);
      const f = E.length; const m = new Float32Array(f); const
        A = new Float32Array(3 * (f === 2 ? 2 : f - 2));
      if (p.push({
        line: A,
        points: m,
      }), f === 2) {
        m[0] = E[0] * S, m[1] = E[1] * v, A.set([NaN, NaN, NaN, NaN, m[0], m[1]], 0);
        continue;
      }
      let [C, P, R, D] = E;
      C *= S, P *= v, R *= S, D *= v, m.set([C, P, R, D], 0), A.set([NaN, NaN, NaN, NaN, C, P], 0);
      for (let k = 4; k < f; k += 2) {
        const L = m[k] = E[k] * S; const
          N = m[k + 1] = E[k + 1] * v;
        A.set($.createBezierPoints(C, P, R, D, L, N), (k - 2) * 3), [C, P, R, D] = [R, D, L, N];
      }
    }
    if (p.length === 0) return null;
    const x = o ? new Ep() : new yd();
    return x.build(p, e, i, 1, s, o ? 0 : u, r), {
      outline: x,
      newCurves: _,
      areContours: o,
      thickness: u,
      width: l,
      height: d,
    };
  }

  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: i,
    width: s,
    height: r,
  }) {
    let a = 1 / 0; let o = -1 / 0; let
      h = 0;
    for (const E of t) {
      h += E.length;
      for (let f = 2, m = E.length; f < m; f++) {
        const A = E[f] - E[f - 2];
        a = Math.min(a, A), o = Math.max(o, A);
      }
    }
    let l;
    a >= -128 && o <= 127 ? l = Int8Array : a >= -32768 && o <= 32767 ? l = Int16Array : l = Int32Array;
    const d = t.length; const u = Md + Zh * d; const
      p = new Uint32Array(u);
    let y = 0;
    p[y++] = u * Uint32Array.BYTES_PER_ELEMENT + (h - 2 * d) * l.BYTES_PER_ELEMENT, p[y++] = 0, p[y++] = s, p[y++] = r, p[y++] = e ? 0 : 1, p[y++] = Math.max(0, Math.floor(i ?? 0)), p[y++] = d, p[y++] = l.BYTES_PER_ELEMENT;
    for (const E of t) p[y++] = E.length - 2, p[y++] = E[0], p[y++] = E[1];
    const S = new CompressionStream('deflate-raw'); const
      v = S.writable.getWriter();
    await v.ready, v.write(p);
    const _ = l.prototype.constructor;
    for (const E of t) {
      const f = new _(E.length - 2);
      for (let m = 2, A = E.length; m < A; m++) f[m - 2] = E[m] - E[m - 2];
      v.write(f);
    }
    v.close();
    const x = await new Response(S.readable).arrayBuffer(); const
      T = new Uint8Array(x);
    return sm(T);
  }

  static async decompressSignature(t) {
    try {
      const e = nw(t); const {
        readable: i,
        writable: s,
      } = new DecompressionStream('deflate-raw'); const
        r = s.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null; let
        o = 0;
      for await (const E of i) a || (a = new Uint8Array(new Uint32Array(E.buffer, 0, 4)[0])), a.set(E, o), o += E.length;
      const h = new Uint32Array(a.buffer, 0, a.length >> 2); const
        l = h[1];
      if (l !== 0) throw new Error(`Invalid version: ${l}`);
      const d = h[2]; const u = h[3]; const p = h[4] === 0; const y = h[5]; const S = h[6]; const v = h[7]; const _ = []; const
        x = (Md + Zh * S) * Uint32Array.BYTES_PER_ELEMENT;
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
      for (let E = 0; E < S; E++) {
        const f = h[Zh * E + Md]; const
          m = new Float32Array(f + 2);
        _.push(m);
        for (let A = 0; A < Zh - 1; A++) m[A] = h[Zh * E + Md + A + 1];
        for (let A = 0; A < f; A++) m[A + 2] = m[A] + T[o++];
      }
      return {
        areContours: p,
        thickness: y,
        outlines: _,
        width: d,
        height: u,
      };
    } catch (e) {
      return X(`decompressSignature: ${e}`), null;
    }
  }
}
Wa = new WeakMap(), ct = new WeakSet(), _p = function (t, e, i, s) {
  return i -= t, s -= e, i === 0 ? s > 0 ? 0 : 4 : i === 1 ? s + 6 : 2 - s;
}, Ji = new WeakMap(), iy = function (t, e, i, s, r, a, o) {
  const h = w(this, ct, _p).call(this, i, s, r, a);
  for (let l = 0; l < 8; l++) {
    const d = (-l + h - o + 16) % 8; const u = n(this, Ji)[2 * d]; const
      p = n(this, Ji)[2 * d + 1];
    if (t[(i + u) * e + (s + p)] !== 0) return d;
  }
  return -1;
}, sy = function (t, e, i, s, r, a, o) {
  const h = w(this, ct, _p).call(this, i, s, r, a);
  for (let l = 0; l < 8; l++) {
    const d = (l + h + o + 16) % 8; const u = n(this, Ji)[2 * d]; const
      p = n(this, Ji)[2 * d + 1];
    if (t[(i + u) * e + (s + p)] !== 0) return d;
  }
  return -1;
}, Cp = function (t, e, i, s) {
  const r = t.length; const
    a = new Int32Array(r);
  for (let d = 0; d < r; d++) a[d] = t[d] <= s ? 1 : 0;
  for (let d = 1; d < i - 1; d++) a[d * e] = a[d * e + e - 1] = 0;
  for (let d = 0; d < e; d++) a[d] = a[e * i - 1 - d] = 0;
  let o = 1; let
    h;
  const l = [];
  for (let d = 1; d < i - 1; d++) {
    h = 1;
    for (let u = 1; u < e - 1; u++) {
      const p = d * e + u; const
        y = a[p];
      if (y === 0) continue;
      let S = d; let
        v = u;
      if (y === 1 && a[p - 1] === 0) o += 1, v -= 1;
      else if (y >= 1 && a[p + 1] === 0) o += 1, v += 1, y > 1 && (h = y);
      else {
        y !== 1 && (h = Math.abs(y));
        continue;
      }
      const _ = [u, d]; const x = v === u + 1; const
        T = {
          isHole: x,
          points: _,
          id: o,
          parent: 0,
        };
      l.push(T);
      let E;
      for (const k of l) {
        if (k.id === h) {
          E = k;
          break;
        }
      }
      E ? E.isHole ? T.parent = x ? E.parent : h : T.parent = x ? h : E.parent : T.parent = x ? h : 0;
      const f = w(this, ct, iy).call(this, a, e, d, u, S, v, 0);
      if (f === -1) {
        a[p] = -o, a[p] !== 1 && (h = Math.abs(a[p]));
        continue;
      }
      let m = n(this, Ji)[2 * f]; let
        A = n(this, Ji)[2 * f + 1];
      const C = d + m; const
        P = u + A;
      S = C, v = P;
      let R = d; let
        D = u;
      for (; ;) {
        const k = w(this, ct, sy).call(this, a, e, R, D, S, v, 1);
        m = n(this, Ji)[2 * k], A = n(this, Ji)[2 * k + 1];
        const L = R + m; const
          N = D + A;
        _.push(N, L);
        const I = R * e + D;
        if (a[I + 1] === 0 ? a[I] = -o : a[I] === 1 && (a[I] = o), L === d && N === u && R === C && D === P) {
          a[p] !== 1 && (h = Math.abs(a[p]));
          break;
        } else S = R, v = D, R = L, D = N;
      }
    }
  }
  return l;
}, ru = function (t, e, i, s) {
  if (i - e <= 4) {
    for (let C = e; C < i - 2; C += 2) s.push(t[C], t[C + 1]);
    return;
  }
  const r = t[e]; const a = t[e + 1]; const o = t[i - 4] - r; const h = t[i - 3] - a; const l = Math.hypot(o, h); const d = o / l; const u = h / l; const p = d * a - u * r; const y = h / o; const S = 1 / l; const v = Math.atan(y); const _ = Math.cos(v); const x = Math.sin(v); const T = S * (Math.abs(_) + Math.abs(x)); const E = S * (1 - T + T ** 2); const
    f = Math.max(Math.atan(Math.abs(x + _) * E), Math.atan(Math.abs(x - _) * E));
  let m = 0; let
    A = e;
  for (let C = e + 2; C < i - 2; C += 2) {
    const P = Math.abs(p - d * t[C + 1] + u * t[C]);
    P > m && (A = C, m = P);
  }
  m > (l * f) ** 2 ? (w(this, ct, ru).call(this, t, e, A + 2, s), w(this, ct, ru).call(this, t, A, i, s)) : s.push(r, a);
}, ny = function (t) {
  const e = []; const
    i = t.length;
  return w(this, ct, ru).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}, ry = function (t, e, i, s, r, a) {
  const o = new Float32Array(a ** 2); const h = -2 * s ** 2; const
    l = a >> 1;
  for (let v = 0; v < a; v++) {
    const _ = (v - l) ** 2;
    for (let x = 0; x < a; x++) o[v * a + x] = Math.exp((_ + (x - l) ** 2) / h);
  }
  const d = new Float32Array(256); const
    u = -2 * r ** 2;
  for (let v = 0; v < 256; v++) d[v] = Math.exp(v ** 2 / u);
  const p = t.length; const y = new Uint8Array(p); const
    S = new Uint32Array(256);
  for (let v = 0; v < i; v++) {
    for (let _ = 0; _ < e; _++) {
      const x = v * e + _; const
        T = t[x];
      let E = 0; let
        f = 0;
      for (let A = 0; A < a; A++) {
        const C = v + A - l;
        if (!(C < 0 || C >= i)) {
          for (let P = 0; P < a; P++) {
            const R = _ + P - l;
            if (R < 0 || R >= e) continue;
            const D = t[C * e + R]; const
              k = o[A * a + P] * d[Math.abs(D - T)];
            E += D * k, f += k;
          }
        }
      }
      const m = y[x] = Math.round(E / f);
      S[m]++;
    }
  }
  return [y, S];
}, ay = function (t) {
  const e = new Uint32Array(256);
  for (const i of t) e[i]++;
  return e;
}, Tp = function (t) {
  const e = t.length; const
    i = new Uint8ClampedArray(e >> 2);
  let s = -1 / 0; let
    r = 1 / 0;
  for (let o = 0, h = i.length; o < h; o++) {
    const l = i[o] = t[o << 2];
    s = Math.max(s, l), r = Math.min(r, l);
  }
  const a = 255 / (s - r);
  for (let o = 0, h = i.length; o < h; o++) i[o] = (i[o] - r) * a;
  return i;
}, Pp = function (t) {
  let e; let i = -1 / 0; let
    s = -1 / 0;
  const r = t.findIndex((h) => h !== 0);
  let a = r; let
    o = r;
  for (e = r; e < 256; e++) {
    const h = t[e];
    h > i && (e - a > s && (s = e - a, o = e - 1), i = h, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--) ;
  return e;
}, oy = function (t) {
  const e = t; const {
    width: i,
    height: s,
  } = t; const
    {
      maxDim: r,
    } = n(this, Wa);
  let a = i; let
    o = s;
  if (i > r || s > r) {
    let p = i; let y = s; let
      S = Math.log2(Math.max(i, s) / r);
    const v = Math.floor(S);
    S = S === v ? v - 1 : v;
    for (let x = 0; x < S; x++) {
      a = Math.ceil(p / 2), o = Math.ceil(y / 2);
      const T = new OffscreenCanvas(a, o);
      T.getContext('2d').drawImage(t, 0, 0, p, y, 0, 0, a, o), p = a, y = o, t !== e && t.close(), t = T.transferToImageBitmap();
    }
    const _ = Math.min(r / a, r / o);
    a = Math.round(a * _), o = Math.round(o * _);
  }
  const l = new OffscreenCanvas(a, o).getContext('2d', {
    willReadFrequently: !0,
  });
  l.fillStyle = 'white', l.fillRect(0, 0, a, o), l.filter = 'grayscale(1)', l.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const d = l.getImageData(0, 0, a, o).data;
  return [w(this, ct, Tp).call(this, d), a, o];
}, b(Ls, ct), b(Ls, Wa, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16,
}), b(Ls, Ji, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class tg extends Kb {
  constructor() {
    super(), super.updateProperties({
      fill: Ct._defaultLineColor,
      'stroke-width': 0,
    });
  }

  clone() {
    const t = new tg();
    return t.updateAll(this), t;
  }
}
class eg extends qu {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: Ct._defaultLineColor,
      'stroke-width': 1,
    });
  }

  clone() {
    const t = new eg(this._viewParameters);
    return t.updateAll(this), t;
  }
}
let br; let Ds; let yr; let
  ja;
const Ze = class Ze extends Au {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: 'signatureEditor',
    });
    b(this, br, !1);
    b(this, Ds, null);
    b(this, yr, null);
    b(this, ja, null);
    this._willKeepAspectRatio = !0, g(this, yr, e.signatureData || null), g(this, Ds, null), this.defaultL10nId = 'pdfjs-editor-signature-editor1';
  }

  static initialize(e, i) {
    Ct.initialize(e, i), this._defaultDrawingOptions = new tg(), this._defaultDrawnSignatureOptions = new eg(i.viewParameters);
  }

  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }

  static get supportMultipleDrawings() {
    return !1;
  }

  static get typesMap() {
    return J(this, 'typesMap', /* @__PURE__ */ new Map());
  }

  static get isDrawer() {
    return !1;
  }

  get telemetryFinalData() {
    return {
      type: 'signature',
      hasDescription: !!n(this, Ds),
    };
  }

  static computeTelemetryFinalData(e) {
    const i = e.get('hasDescription');
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0,
    };
  }

  get isResizable() {
    return !0;
  }

  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    const {
      _isCopy: s,
    } = this;
    if (s && (this._isCopy = !1, e = this.x, i = this.y), super.render(), this._drawId === null) {
      if (n(this, yr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: h,
          uuid: l,
          heightInPage: d,
        } = n(this, yr); const {
          rawDims: {
            pageWidth: u,
            pageHeight: p,
          },
          rotation: y,
        } = this.parent.viewport; const
          S = Ls.processDrawnLines({
            lines: r,
            pageWidth: u,
            pageHeight: p,
            rotation: y,
            innerMargin: Ze._INNER_MARGIN,
            mustSmooth: a,
            areContours: o,
          });
        this.addSignature(S, d, h, l);
      } else {
        this.div.setAttribute('data-l10n-args', JSON.stringify({
          description: '',
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
      }
    } else {
      this.div.setAttribute('data-l10n-args', JSON.stringify({
        description: n(this, Ds) || '',
      }));
    }
    return s && (this._isCopy = !0, this._moveAfterPaste(e, i)), this.div;
  }

  setUuid(e) {
    g(this, ja, e), this.addEditToolbar();
  }

  getUuid() {
    return n(this, ja);
  }

  get description() {
    return n(this, Ds);
  }

  set description(e) {
    g(this, Ds, e), this.div && (this.div.setAttribute('data-l10n-args', JSON.stringify({
      description: e,
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
      height: a,
    } = n(this, yr); const o = Math.max(r, a); const
      h = Ls.processDrawnLines({
        lines: {
          curves: e.map((l) => ({
            points: l,
          })),
          thickness: s,
          width: r,
          height: a,
        },
        pageWidth: o,
        pageHeight: o,
        rotation: 0,
        innerMargin: 0,
        mustSmooth: !1,
        areContours: i,
      });
    return {
      areContours: i,
      outline: h.outline,
    };
  }

  get toolbarButtons() {
    return this._uiManager.signatureManager ? [['editSignature', this._uiManager.signatureManager]] : super.toolbarButtons;
  }

  addSignature(e, i, s, r) {
    const {
      x: a,
      y: o,
    } = this; const
      {
        outline: h,
      } = g(this, yr, e);
    g(this, br, h instanceof Ep), this.description = s;
    let l;
    n(this, br) ? l = Ze.getDefaultDrawingOptions() : (l = Ze._defaultDrawnSignatureOptions.clone(), l.updateProperties({
      'stroke-width': h.thickness,
    })), this._addOutlines({
      drawOutlines: h,
      drawingOptions: l,
    });
    const [, d] = this.pageDimensions;
    let u = i / d;
    u = u >= 1 ? 0.5 : u, this.width *= u / this.height, this.width >= 1 && (u *= 0.9 / this.width, this.width = 0.9), this.height = u, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: 'pdfjs.signature.inserted',
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!s,
      },
    }), this.div.hidden = !1;
  }

  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s,
      },
      rotation: r,
    } = this.parent.viewport;
    return Ls.process(e, i, s, r, Ze._INNER_MARGIN);
  }

  getFromText(e, i) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: r,
      },
      rotation: a,
    } = this.parent.viewport;
    return Ls.extractContoursFromText(e, i, s, r, a, Ze._INNER_MARGIN);
  }

  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s,
      },
      rotation: r,
    } = this.parent.viewport;
    return Ls.processDrawnLines({
      lines: e,
      pageWidth: i,
      pageHeight: s,
      rotation: r,
      innerMargin: Ze._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1,
    });
  }

  createDrawingOptions({
    areContours: e,
    thickness: i,
  }) {
    e ? this._drawingOptions = Ze.getDefaultDrawingOptions() : (this._drawingOptions = Ze._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      'stroke-width': i,
    }));
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    const {
      lines: i,
      points: s,
    } = this.serializeDraw(e); const {
      _drawingOptions: {
        'stroke-width': r,
      },
    } = this; const
      a = Object.assign(super.serialize(e), {
        isSignature: !0,
        areContours: n(this, br),
        color: [0, 0, 0],
        thickness: n(this, br) ? 0 : r,
      });
    return this.addComment(a), e ? (a.paths = {
      lines: i,
      points: s,
    }, a.uuid = n(this, ja), a.isCopy = !0) : a.lines = i, n(this, Ds) && (a.accessibilityData = {
      type: 'Figure',
      alt: n(this, Ds),
    }), a;
  }

  static deserializeDraw(e, i, s, r, a, o) {
    return o.areContours ? Ep.deserialize(e, i, s, r, a, o) : yd.deserialize(e, i, s, r, a, o);
  }

  static async deserialize(e, i, s) {
    let a;
    const r = await super.deserialize(e, i, s);
    return g(r, br, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || '', g(r, ja, e.uuid), r;
  }
};
br = new WeakMap(), Ds = new WeakMap(), yr = new WeakMap(), ja = new WeakMap(), M(Ze, '_type', 'signature'), M(Ze, '_editorType', q.SIGNATURE), M(Ze, '_defaultDrawingOptions', null);
const Rp = Ze;
let Mt; let he; let wr; let yn; let Ar; let Hh; let wn; let Va; let ks; let mi; let $h; let ot; let Al; let vl; let au; let ou; let hu; let kp; let lu; let
  hy;
class Dp extends Ct {
  constructor(e) {
    super({
      ...e,
      name: 'stampEditor',
    });
    b(this, ot);
    b(this, Mt, null);
    b(this, he, null);
    b(this, wr, null);
    b(this, yn, null);
    b(this, Ar, null);
    b(this, Hh, '');
    b(this, wn, null);
    b(this, Va, !1);
    b(this, ks, null);
    b(this, mi, !1);
    b(this, $h, !1);
    g(this, yn, e.bitmapUrl), g(this, Ar, e.bitmapFile), this.defaultL10nId = 'pdfjs-editor-stamp-editor';
  }

  static initialize(e, i) {
    Ct.initialize(e, i);
  }

  static isHandlingMimeForPasting(e) {
    return uu.includes(e);
  }

  static paste(e, i) {
    i.pasteEditor({
      mode: q.STAMP,
    }, {
      bitmapFile: e.getAsFile(),
    });
  }

  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }

  get telemetryFinalData() {
    let e;
    return {
      type: 'stamp',
      hasAltText: !!((e = this.altTextData) != null && e.altText),
    };
  }

  static computeTelemetryFinalData(e) {
    const i = e.get('hasAltText');
    return {
      hasAltText: i.get(!0) ?? 0,
      hasNoAltText: i.get(!1) ?? 0,
    };
  }

  async mlGuessAltText(e = null, i = !0) {
    if (this.hasAltTextData()) return null;
    const {
      mlManager: s,
    } = this._uiManager;
    if (!s) throw new Error('No ML.');
    if (!await s.isEnabledFor('altText')) throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o,
    } = e || this.copyCanvas(null, null, !0).imageData; const
      h = await s.guess({
        name: 'altText',
        request: {
          data: r,
          width: a,
          height: o,
          channels: r.length / (a * o),
        },
      });
    if (!h) throw new Error('No response from the AI service.');
    if (h.error) throw new Error('Error from the AI service.');
    if (h.cancel) return null;
    if (!h.output) throw new Error('No valid response from the AI service.');
    const l = h.output;
    return await this.setGuessedAltText(l), i && !this.hasAltTextData() && (this.altTextData = {
      alt: l,
      decorative: !1,
    }), l;
  }

  remove() {
    let e;
    n(this, he) && (g(this, Mt, null), this._uiManager.imageManager.deleteId(n(this, he)), (e = n(this, wn)) == null || e.remove(), g(this, wn, null), n(this, ks) && (clearTimeout(n(this, ks)), g(this, ks, null))), super.remove();
  }

  rebuild() {
    if (!this.parent) {
      n(this, he) && w(this, ot, au).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, he) && n(this, wn) === null && w(this, ot, au).call(this), this.isAttachedToDOM || this.parent.add(this));
  }

  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }

  isEmpty() {
    return !(n(this, wr) || n(this, Mt) || n(this, yn) || n(this, Ar) || n(this, he) || n(this, Va));
  }

  get toolbarButtons() {
    return [['altText', this.createAltText()]];
  }

  get isResizable() {
    return !0;
  }

  render() {
    if (this.div) return this.div;
    let e; let
      i;
    return this._isCopy && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, Va) || (n(this, Mt) ? w(this, ot, ou).call(this) : w(this, ot, au).call(this)), this._isCopy && this._moveAfterPaste(e, i), this._uiManager.addShouldRescale(this), this.div;
  }

  setCanvas(e, i) {
    const {
      id: s,
      bitmap: r,
    } = this._uiManager.imageManager.getFromCanvas(e, i);
    i.remove(), s && this._uiManager.imageManager.isValidId(s) && (g(this, he, s), r && g(this, Mt, r), g(this, Va, !1), w(this, ot, ou).call(this));
  }

  _onResized() {
    this.onScaleChanging();
  }

  onScaleChanging() {
    if (!this.parent) return;
    n(this, ks) !== null && clearTimeout(n(this, ks)), g(this, ks, setTimeout(() => {
      g(this, ks, null), w(this, ot, kp).call(this);
    }, 200));
  }

  copyCanvas(e, i, s = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a,
    } = n(this, Mt); const
      o = new ss();
    let h = n(this, Mt); let l = r; let d = a; let
      u = null;
    if (i) {
      if (r > i || a > i) {
        const C = Math.min(i / r, i / a);
        l = Math.floor(r * C), d = Math.floor(a * C);
      }
      u = document.createElement('canvas');
      const y = u.width = Math.ceil(l * o.sx); const
        S = u.height = Math.ceil(d * o.sy);
      n(this, mi) || (h = w(this, ot, hu).call(this, y, S));
      const v = u.getContext('2d');
      v.filter = this._uiManager.hcmFilter;
      let _ = 'white';
      let x = '#cfcfd8';
      this._uiManager.hcmFilter !== 'none' ? x = 'black' : ow.isDarkMode && (_ = '#8f8f9d', x = '#42414d');
      const T = 15; const E = T * o.sx; const f = T * o.sy; const m = new OffscreenCanvas(E * 2, f * 2); const
        A = m.getContext('2d');
      A.fillStyle = _, A.fillRect(0, 0, E * 2, f * 2), A.fillStyle = x, A.fillRect(0, 0, E, f), A.fillRect(E, f, E, f), v.fillStyle = v.createPattern(m, 'repeat'), v.fillRect(0, 0, y, S), v.drawImage(h, 0, 0, h.width, h.height, 0, 0, y, S);
    }
    let p = null;
    if (s) {
      let y; let
        S;
      if (o.symmetric && h.width < e && h.height < e) y = h.width, S = h.height;
      else if (h = n(this, Mt), r > e || a > e) {
        const x = Math.min(e / r, e / a);
        y = Math.floor(r * x), S = Math.floor(a * x), n(this, mi) || (h = w(this, ot, hu).call(this, y, S));
      }
      const _ = new OffscreenCanvas(y, S).getContext('2d', {
        willReadFrequently: !0,
      });
      _.drawImage(h, 0, 0, h.width, h.height, 0, 0, y, S), p = {
        width: y,
        height: S,
        data: _.getImageData(0, 0, y, S).data,
      };
    }
    return {
      canvas: u,
      width: l,
      height: d,
      imageData: p,
    };
  }

  static async deserialize(e, i, s) {
    let _;
    let r = null; let
      a = !1;
    if (e instanceof Eb) {
      const {
        data: {
          rect: x,
          rotation: T,
          id: E,
          structParent: f,
          popupRef: m,
          richText: A,
          contentsObj: C,
          creationDate: P,
          modificationDate: R,
        },
        container: D,
        parent: {
          page: {
            pageNumber: k,
          },
        },
        canvas: L,
      } = e;
      let N; let
        I;
      L ? (delete e.canvas, {
        id: N,
        bitmap: I,
      } = s.imageManager.getFromCanvas(D.id, L), L.remove()) : (a = !0, e._hasNoCanvas = !0);
      const j = ((_ = await i._structTree.getAriaAttributes(`${zp}${E}`)) == null ? void 0 : _.get('aria-label')) || '';
      r = e = {
        annotationType: q.STAMP,
        bitmapId: N,
        bitmap: I,
        pageIndex: k - 1,
        rect: x.slice(0),
        rotation: T,
        annotationElementId: E,
        id: E,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: j,
        },
        isSvg: !1,
        structParent: f,
        popupRef: m,
        richText: A,
        comment: (C == null ? void 0 : C.str) || null,
        creationDate: P,
        modificationDate: R,
      };
    }
    const o = await super.deserialize(e, i, s); const
      {
        rect: h,
        bitmap: l,
        bitmapUrl: d,
        bitmapId: u,
        isSvg: p,
        accessibilityData: y,
      } = e;
    a ? (s.addMissingCanvas(e.id, o), g(o, Va, !0)) : u && s.imageManager.isValidId(u) ? (g(o, he, u), l && g(o, Mt, l)) : g(o, yn, d), g(o, mi, p);
    const [S, v] = o.pageDimensions;
    return o.width = (h[2] - h[0]) / S, o.height = (h[3] - h[1]) / v, y && (o.altTextData = y), o._initialData = r, e.comment && o.setCommentData(e), g(o, $h, !!r), o;
  }

  serialize(e = !1, i = null) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const s = Object.assign(super.serialize(e), {
      bitmapId: n(this, he),
      isSvg: n(this, mi),
    });
    if (this.addComment(s), e) return s.bitmapUrl = w(this, ot, lu).call(this, !0), s.accessibilityData = this.serializeAltText(!0), s.isCopy = !0, s;
    const {
      decorative: r,
      altText: a,
    } = this.serializeAltText(!1);
    if (!r && a && (s.accessibilityData = {
      type: 'Figure',
      alt: a,
    }), this.annotationElementId) {
      const h = w(this, ot, hy).call(this, s);
      return h.isSame ? null : (h.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1, s.id = this.annotationElementId, delete s.bitmapId, s);
    }
    if (i === null) return s;
    i.stamps || (i.stamps = /* @__PURE__ */ new Map());
    const o = n(this, mi) ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
    if (!i.stamps.has(n(this, he))) {
      i.stamps.set(n(this, he), {
        area: o,
        serialized: s,
      }), s.bitmap = w(this, ot, lu).call(this, !1);
    } else if (n(this, mi)) {
      const h = i.stamps.get(n(this, he));
      o > h.area && (h.area = o, h.serialized.bitmap.close(), h.serialized.bitmap = w(this, ot, lu).call(this, !1));
    }
    return s;
  }

  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment,
    }), null);
  }
}
Mt = new WeakMap(), he = new WeakMap(), wr = new WeakMap(), yn = new WeakMap(), Ar = new WeakMap(), Hh = new WeakMap(), wn = new WeakMap(), Va = new WeakMap(), ks = new WeakMap(), mi = new WeakMap(), $h = new WeakMap(), ot = new WeakSet(), Al = function (e, i = !1) {
  if (!e) {
    this.remove();
    return;
  }
  g(this, Mt, e.bitmap), i || (g(this, he, e.id), g(this, mi, e.isSvg)), e.file && g(this, Hh, e.file.name), w(this, ot, ou).call(this);
}, vl = function () {
  if (g(this, wr, null), this._uiManager.enableWaiting(!1), !!n(this, wn)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Mt)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, Mt)) {
      this._reportTelemetry({
        action: 'pdfjs.image.image_added',
        data: {
          alt_text_modal: !1,
          alt_text_type: 'empty',
        },
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, au = function () {
  if (n(this, he)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, he)).then((s) => w(this, ot, Al).call(this, s, !0)).finally(() => w(this, ot, vl).call(this));
    return;
  }
  if (n(this, yn)) {
    const s = n(this, yn);
    g(this, yn, null), this._uiManager.enableWaiting(!0), g(this, wr, this._uiManager.imageManager.getFromUrl(s).then((r) => w(this, ot, Al).call(this, r)).finally(() => w(this, ot, vl).call(this)));
    return;
  }
  if (n(this, Ar)) {
    const s = n(this, Ar);
    g(this, Ar, null), this._uiManager.enableWaiting(!0), g(this, wr, this._uiManager.imageManager.getFromFile(s).then((r) => w(this, ot, Al).call(this, r)).finally(() => w(this, ot, vl).call(this)));
    return;
  }
  const e = document.createElement('input');
  e.type = 'file', e.accept = uu.join(',');
  const i = this._uiManager._signal;
  g(this, wr, new Promise((s) => {
    e.addEventListener('change', async () => {
      if (!e.files || e.files.length === 0) this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: 'pdfjs.image.image_selected',
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow,
          },
        }), w(this, ot, Al).call(this, r);
      }
      s();
    }, {
      signal: i,
    }), e.addEventListener('cancel', () => {
      this.remove(), s();
    }, {
      signal: i,
    });
  }).finally(() => w(this, ot, vl).call(this))), e.click();
}, ou = function () {
  let l;
  const {
    div: e,
  } = this;
  let {
    width: i,
    height: s,
  } = n(this, Mt);
  const [r, a] = this.pageDimensions; const
    o = 0.75;
  if (this.width) i = this.width * r, s = this.height * a;
  else if (i > o * r || s > o * a) {
    const d = Math.min(o * r / i, o * a / s);
    i *= d, s *= d;
  }
  this._uiManager.enableWaiting(!1);
  const h = g(this, wn, document.createElement('canvas'));
  h.setAttribute('role', 'img'), this.addContainer(h), this.width = i / r, this.height = s / a, this.setDims(), (l = this._initialOptions) != null && l.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), w(this, ot, kp).call(this), n(this, $h) || (this.parent.addUndoableEditor(this), g(this, $h, !0)), this._reportTelemetry({
    action: 'inserted_image',
  }), n(this, Hh) && this.div.setAttribute('aria-description', n(this, Hh)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-stamp-added-alert');
}, hu = function (e, i) {
  const {
    width: s,
    height: r,
  } = n(this, Mt);
  let a = s; let o = r; let
    h = n(this, Mt);
  for (; a > 2 * e || o > 2 * i;) {
    const l = a; const
      d = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * i && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext('2d').drawImage(h, 0, 0, l, d, 0, 0, a, o), h = u.transferToImageBitmap();
  }
  return h;
}, kp = function () {
  const [e, i] = this.parentDimensions; const {
    width: s,
    height: r,
  } = this; const a = new ss(); const o = Math.ceil(s * e * a.sx); const h = Math.ceil(r * i * a.sy); const
    l = n(this, wn);
  if (!l || l.width === o && l.height === h) return;
  l.width = o, l.height = h;
  const d = n(this, mi) ? n(this, Mt) : w(this, ot, hu).call(this, o, h); const
    u = l.getContext('2d');
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, h);
}, lu = function (e) {
  if (e) {
    if (n(this, mi)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, he));
      if (r) return r;
    }
    const i = document.createElement('canvas');
    return {
      width: i.width,
      height: i.height,
    } = n(this, Mt), i.getContext('2d').drawImage(n(this, Mt), 0, 0), i.toDataURL();
  }
  if (n(this, mi)) {
    const [i, s] = this.pageDimensions; const r = Math.round(this.width * i * Cn.PDF_TO_CSS_UNITS); const a = Math.round(this.height * s * Cn.PDF_TO_CSS_UNITS); const
      o = new OffscreenCanvas(r, a);
    return o.getContext('2d').drawImage(n(this, Mt), 0, 0, n(this, Mt).width, n(this, Mt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, Mt));
}, hy = function (e) {
  let o;
  const {
    pageIndex: i,
    accessibilityData: {
      altText: s,
    },
  } = this._initialData; const r = e.pageIndex === i; const
    a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || '') === s;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a,
  };
}, M(Dp, '_type', 'stamp'), M(Dp, '_editorType', q.STAMP);
let qa; let Uh; let vr; let Sr; let An; let Ye; let xr; let Gh; let zh; let Qi; let vn; let le; let Sn; let Er; let Wh; let W; let _r; let St; let Mp; let ly; let hs; let Lp; let Ip; let
  cu;
const Ui = class Ui {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: i,
    structTreeLayer: s,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: h,
    viewport: l,
    l10n: d,
  }) {
    b(this, St);
    b(this, qa);
    b(this, Uh, !1);
    b(this, vr, null);
    b(this, Sr, null);
    b(this, An, null);
    b(this, Ye, /* @__PURE__ */ new Map());
    b(this, xr, !1);
    b(this, Gh, !1);
    b(this, zh, !1);
    b(this, Qi, null);
    b(this, vn, null);
    b(this, le, null);
    b(this, Sn, null);
    b(this, Er, null);
    b(this, Wh, -1);
    b(this, W);
    const u = [...n(Ui, _r).values()];
    if (!Ui._initialized) {
      Ui._initialized = !0;
      for (const p of u) p.initialize(d, t);
    }
    t.registerEditorTypes(u), g(this, W, t), this.pageIndex = e, this.div = i, g(this, qa, r), g(this, vr, a), this.viewport = l, g(this, le, h), this.drawLayer = o, this._structTree = s, n(this, W).addLayer(this);
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
        this.div.classList.toggle('nonEditing', !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
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
      classList: e,
    } = this.div;
    if (e.toggle('nonEditing', !1), t === q.POPUP) e.toggle('commentEditing', !0);
    else {
      e.toggle('commentEditing', !1);
      for (const i of n(Ui, _r).values()) e.toggle(`${i._type}Editing`, t === i._editorType);
    }
    this.div.hidden = !1;
  }

  hasTextLayer(t) {
    let e;
    return t === ((e = n(this, le)) == null ? void 0 : e.div);
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
    this.div.classList.toggle('drawing', !t);
  }

  togglePointerEvents(t = !1) {
    this.div.classList.toggle('disabled', !t);
  }

  toggleAnnotationLayerPointerEvents(t = !1) {
    let e;
    (e = n(this, vr)) == null || e.div.classList.toggle('disabled', !t);
  }

  async enable() {
    let i;
    g(this, zh, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle('nonEditing', !1), (i = n(this, Er)) == null || i.abort(), g(this, Er, null);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, St, Mp)) s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, W).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const e = n(this, vr);
    if (e) {
      for (const s of e.getEditableAnnotations()) {
        if (s.hide(), n(this, W).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id)) continue;
        const r = await this.deserialize(s);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    }
    g(this, zh, !1), n(this, W)._eventBus.dispatch('editorsrendered', {
      source: this,
      pageNumber: this.pageIndex + 1,
    });
  }

  disable() {
    let i;
    if (g(this, Gh, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle('nonEditing', !0), n(this, le) && !n(this, Er)) {
      g(this, Er, new AbortController());
      const s = n(this, W).combinedSignal(n(this, Er));
      n(this, le).div.addEventListener('pointerdown', (r) => {
        const {
          clientX: o,
          clientY: h,
          timeStamp: l,
        } = r; const
          d = n(this, Wh);
        if (l - d > 500) {
          g(this, Wh, l);
          return;
        }
        g(this, Wh, -1);
        const {
          classList: u,
        } = this.div;
        u.toggle('getElements', !0);
        const p = document.elementsFromPoint(o, h);
        if (u.toggle('getElements', !1), !this.div.contains(p[0])) return;
        let y;
        const S = new RegExp(`^${El}[0-9]+$`);
        for (const _ of p) {
          if (S.test(_.id)) {
            y = _.id;
            break;
          }
        }
        if (!y) return;
        const v = n(this, Ye).get(y);
        (v == null ? void 0 : v.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), v.dblclick(r));
      }, {
        signal: s,
        capture: !0,
      });
    }
    const t = n(this, vr);
    if (t) {
      const s = /* @__PURE__ */ new Map(); const
        r = /* @__PURE__ */ new Map();
      for (const o of n(this, St, Mp)) {
        if (o.disableEditing(), !o.annotationElementId) {
          o.updateFakeAnnotationElement(t);
          continue;
        }
        if (o.serialize() !== null) {
          s.set(o.annotationElementId, o);
          continue;
        } else r.set(o.annotationElementId, o);
        (i = this.getEditableAnnotation(o.annotationElementId)) == null || i.show(), o.remove();
      }
      const a = t.getEditableAnnotations();
      for (const o of a) {
        const {
          id: h,
        } = o.data;
        if (n(this, W).isDeletedAnnotationElement(h)) {
          o.updateEdited({
            deleted: !0,
          });
          continue;
        }
        let l = r.get(h);
        if (l) {
          l.resetAnnotationElement(o), l.show(!1), o.show();
          continue;
        }
        l = s.get(h), l && (n(this, W).addChangedExistingAnnotation(l), l.renderAnnotationElement(o) && l.show(!1)), o.show();
      }
    }
    w(this, St, cu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: e,
    } = this.div;
    for (const s of n(Ui, _r).values()) e.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), g(this, Gh, !1);
  }

  getEditableAnnotation(t) {
    let e;
    return ((e = n(this, vr)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }

  setActiveEditor(t) {
    n(this, W).getActive() !== t && n(this, W).setActiveEditor(t);
  }

  enableTextSelection() {
    let t;
    if (this.div.tabIndex = -1, (t = n(this, le)) != null && t.div && !n(this, Sn)) {
      g(this, Sn, new AbortController());
      const e = n(this, W).combinedSignal(n(this, Sn));
      n(this, le).div.addEventListener('pointerdown', w(this, St, ly).bind(this), {
        signal: e,
      }), n(this, le).div.classList.add('highlighting');
    }
  }

  disableTextSelection() {
    let t;
    this.div.tabIndex = 0, (t = n(this, le)) != null && t.div && n(this, Sn) && (n(this, Sn).abort(), g(this, Sn, null), n(this, le).div.classList.remove('highlighting'));
  }

  enableClick() {
    if (n(this, Sr)) return;
    g(this, Sr, new AbortController());
    const t = n(this, W).combinedSignal(n(this, Sr));
    this.div.addEventListener('pointerdown', this.pointerdown.bind(this), {
      signal: t,
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener('pointerup', e, {
      signal: t,
    }), this.div.addEventListener('pointercancel', e, {
      signal: t,
    });
  }

  disableClick() {
    let t;
    (t = n(this, Sr)) == null || t.abort(), g(this, Sr, null);
  }

  attach(t) {
    n(this, Ye).set(t.id, t);
    const {
      annotationElementId: e,
    } = t;
    e && n(this, W).isDeletedAnnotationElement(e) && n(this, W).removeDeletedAnnotationElement(t);
  }

  detach(t) {
    let e;
    n(this, Ye).delete(t.id), (e = n(this, qa)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Gh) && t.annotationElementId && n(this, W).addDeletedAnnotationElement(t);
  }

  remove(t) {
    this.detach(t), n(this, W).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }

  changeParent(t) {
    let e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, W).addDeletedAnnotationElement(t.annotationElementId), Ct.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }

  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, W).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, zh)), n(this, W).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }

  moveEditorInDOM(t) {
    let i;
    if (!t.isAttachedToDOM) return;
    const {
      activeElement: e,
    } = document;
    t.div.contains(e) && !n(this, An) && (t._focusEventsAllowed = !1, g(this, An, setTimeout(() => {
      g(this, An, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener('focusin', () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, W)._signal,
      }), e.focus());
    }, 0))), t._structTreeParentId = (i = n(this, qa)) == null ? void 0 : i.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }

  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }

  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t); const
      i = () => {
        t.remove();
      };
    this.addCommands({
      cmd: e,
      undo: i,
      mustExec: !1,
    });
  }

  getEditorByUID(t) {
    for (const e of n(this, Ye).values()) if (e.uid === t) return e;
    return null;
  }

  getNextId() {
    return n(this, W).getId();
  }

  combinedSignal(t) {
    return n(this, W).combinedSignal(t);
  }

  canCreateNewEmptyEditor() {
    let t;
    return (t = n(this, St, hs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }

  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, W).updateMode(t.mode);
    const {
      offsetX: i,
      offsetY: s,
    } = w(this, St, Ip).call(this); const r = this.getNextId(); const
      a = w(this, St, Lp).call(this, {
        parent: this,
        id: r,
        x: i,
        y: s,
        uiManager: n(this, W),
        isCentered: !0,
        ...e,
      });
    a && this.add(a);
  }

  async deserialize(t) {
    let e;
    return await ((e = n(Ui, _r).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, W))) || null;
  }

  createAndAddNewEditor(t, e, i = {}) {
    const s = this.getNextId(); const
      r = w(this, St, Lp).call(this, {
        parent: this,
        id: s,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: n(this, W),
        isCentered: e,
        ...i,
      });
    return r && this.add(r), r;
  }

  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }

  addNewEditor(t = {}) {
    this.createAndAddNewEditor(w(this, St, Ip).call(this), !0, t);
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
    let s;
    const {
      isMac: e,
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, xr) || (g(this, xr, !1), (s = n(this, St, hs)) != null && s.isDrawer && n(this, St, hs).supportMultipleDrawings)) return;
    if (!n(this, Uh)) {
      g(this, Uh, !0);
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
    let s;
    if (n(this, W).getMode() === q.HIGHLIGHT && this.enableTextSelection(), n(this, xr)) {
      g(this, xr, !1);
      return;
    }
    const {
      isMac: e,
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
    if (g(this, xr, !0), (s = n(this, St, hs)) != null && s.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const i = n(this, W).getActive();
    g(this, Uh, !i || i.isEmpty());
  }

  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0,
    }), n(this, Qi)) {
      n(this, St, hs).startDrawing(this, n(this, W), !1, t);
      return;
    }
    n(this, W).setCurrentDrawingSession(this), g(this, Qi, new AbortController());
    const e = n(this, W).combinedSignal(n(this, Qi));
    this.div.addEventListener('blur', ({
      relatedTarget: i,
    }) => {
      i && !this.div.contains(i) && (g(this, vn, null), this.commitOrRemove());
    }, {
      signal: e,
    }), n(this, St, hs).startDrawing(this, n(this, W), !1, t);
  }

  pause(t) {
    if (t) {
      const {
        activeElement: e,
      } = document;
      this.div.contains(e) && g(this, vn, e);
      return;
    }
    n(this, vn) && setTimeout(() => {
      let e;
      (e = n(this, vn)) == null || e.focus(), g(this, vn, null);
    }, 0);
  }

  endDrawingSession(t = !1) {
    return n(this, Qi) ? (n(this, W).setCurrentDrawingSession(null), n(this, Qi).abort(), g(this, Qi, null), g(this, vn, null), n(this, St, hs).endDrawing(t)) : null;
  }

  findNewParent(t, e, i) {
    const s = n(this, W).findParent(e, i);
    return s === null || s === this ? !1 : (s.changeParent(t), !0);
  }

  commitOrRemove() {
    return n(this, Qi) ? (this.endDrawingSession(), !0) : !1;
  }

  onScaleChanging() {
    n(this, Qi) && n(this, St, hs).onScaleChangingWhenDrawing(this);
  }

  destroy() {
    let t; let
      e;
    this.commitOrRemove(), ((t = n(this, W).getActive()) == null ? void 0 : t.parent) === this && (n(this, W).commitOrRemove(), n(this, W).setActiveEditor(null)), n(this, An) && (clearTimeout(n(this, An)), g(this, An, null));
    for (const i of n(this, Ye).values()) (e = n(this, qa)) == null || e.removePointerInTextLayer(i.contentDiv), i.setParent(null), i.isAttachedToDOM = !1, i.div.remove();
    this.div = null, n(this, Ye).clear(), n(this, W).removeLayer(this);
  }

  render({
    viewport: t,
  }) {
    this.viewport = t, Cr(this.div, t);
    for (const e of n(this, W).getEditors(this.pageIndex)) this.add(e), e.rebuild();
    this.updateMode();
  }

  update({
    viewport: t,
  }) {
    n(this, W).commitOrRemove(), w(this, St, cu).call(this);
    const e = this.viewport.rotation; const
      i = t.rotation;
    if (this.viewport = t, Cr(this.div, {
      rotation: i,
    }), e !== i) for (const s of n(this, Ye).values()) s.rotate(i);
  }

  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e,
    } = this.viewport.rawDims;
    return [t, e];
  }

  get scale() {
    return n(this, W).viewParameters.realScale;
  }
};
qa = new WeakMap(), Uh = new WeakMap(), vr = new WeakMap(), Sr = new WeakMap(), An = new WeakMap(), Ye = new WeakMap(), xr = new WeakMap(), Gh = new WeakMap(), zh = new WeakMap(), Qi = new WeakMap(), vn = new WeakMap(), le = new WeakMap(), Sn = new WeakMap(), Er = new WeakMap(), Wh = new WeakMap(), W = new WeakMap(), _r = new WeakMap(), St = new WeakSet(), Mp = function () {
  return n(this, Ye).size !== 0 ? n(this, Ye).values() : n(this, W).getEditors(this.pageIndex);
}, ly = function (t) {
  n(this, W).unselectAll();
  const {
    target: e,
  } = t;
  if (e === n(this, le).div || (e.getAttribute('role') === 'img' || e.classList.contains('endOfContent')) && n(this, le).div.contains(e)) {
    const {
      isMac: i,
    } = ce.platform;
    if (t.button !== 0 || t.ctrlKey && i) return;
    n(this, W).showAllEditors('highlight', !0, !0), n(this, le).div.classList.add('free'), this.toggleDrawing(), wu.startHighlighting(this, n(this, W).direction === 'ltr', {
      target: n(this, le).div,
      x: t.x,
      y: t.y,
    }), n(this, le).div.addEventListener('pointerup', () => {
      n(this, le).div.classList.remove('free'), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, W)._signal,
    }), t.preventDefault();
  }
}, hs = function () {
  return n(Ui, _r).get(n(this, W).getMode());
}, Lp = function (t) {
  const e = n(this, St, hs);
  return e ? new e.prototype.constructor(t) : null;
}, Ip = function () {
  const {
    x: t,
    y: e,
    width: i,
    height: s,
  } = this.boundingClientRect; const r = Math.max(0, t); const a = Math.max(0, e); const o = Math.min(window.innerWidth, t + i); const h = Math.min(window.innerHeight, e + s); const l = (r + o) / 2 - t; const d = (a + h) / 2 - e; const
    [u, p] = this.viewport.rotation % 180 === 0 ? [l, d] : [d, l];
  return {
    offsetX: u,
    offsetY: p,
  };
}, cu = function () {
  for (const t of n(this, Ye).values()) t.isEmpty() && t.remove();
}, M(Ui, '_initialized', !1), b(Ui, _r, new Map([fp, xp, Dp, wu, Rp].map((t) => [t._editorType, t])));
const vu = Ui;
let Zi; let Oe; let Xa; let dd; let Uu; let cy; let Fs; let Fp; let dy; let
  Np;
const Jt = class Jt {
  constructor({
    pageIndex: t,
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
      if (n(this, Oe).size > 0) for (const e of n(this, Oe).values()) e.remove(), t.append(e);
      g(this, Zi, t);
    }
  }

  static get _svgFactory() {
    return J(this, '_svgFactory', new kl());
  }

  draw(t, e = !1, i = !1) {
    const s = Kt(Jt, dd)._++; const r = w(this, Fs, Fp).call(this); const
      a = Jt._svgFactory.createElement('defs');
    r.append(a);
    const o = Jt._svgFactory.createElement('path');
    a.append(o);
    const h = `path_p${this.pageIndex}_${s}`;
    o.setAttribute('id', h), o.setAttribute('vector-effect', 'non-scaling-stroke'), e && n(this, Xa).set(s, o);
    const l = i ? w(this, Fs, dy).call(this, a, h) : null; const
      d = Jt._svgFactory.createElement('use');
    return r.append(d), d.setAttribute('href', `#${h}`), this.updateProperties(r, t), n(this, Oe).set(s, r), {
      id: s,
      clipPathId: `url(#${l})`,
    };
  }

  drawOutline(t, e) {
    const i = Kt(Jt, dd)._++; const s = w(this, Fs, Fp).call(this); const
      r = Jt._svgFactory.createElement('defs');
    s.append(r);
    const a = Jt._svgFactory.createElement('path');
    r.append(a);
    const o = `path_p${this.pageIndex}_${i}`;
    a.setAttribute('id', o), a.setAttribute('vector-effect', 'non-scaling-stroke');
    let h;
    if (e) {
      const u = Jt._svgFactory.createElement('mask');
      r.append(u), h = `mask_p${this.pageIndex}_${i}`, u.setAttribute('id', h), u.setAttribute('maskUnits', 'objectBoundingBox');
      const p = Jt._svgFactory.createElement('rect');
      u.append(p), p.setAttribute('width', '1'), p.setAttribute('height', '1'), p.setAttribute('fill', 'white');
      const y = Jt._svgFactory.createElement('use');
      u.append(y), y.setAttribute('href', `#${o}`), y.setAttribute('stroke', 'none'), y.setAttribute('fill', 'black'), y.setAttribute('fill-rule', 'nonzero'), y.classList.add('mask');
    }
    const l = Jt._svgFactory.createElement('use');
    s.append(l), l.setAttribute('href', `#${o}`), h && l.setAttribute('mask', `url(#${h})`);
    const d = l.cloneNode();
    return s.append(d), l.classList.add('mainOutline'), d.classList.add('secondaryOutline'), this.updateProperties(s, t), n(this, Oe).set(i, s), i;
  }

  finalizeDraw(t, e) {
    n(this, Xa).delete(t), this.updateProperties(t, e);
  }

  updateProperties(t, e) {
    let h;
    if (!e) return;
    const {
      root: i,
      bbox: s,
      rootClass: r,
      path: a,
    } = e; const
      o = typeof t === 'number' ? n(this, Oe).get(t) : t;
    if (o) {
      if (i && w(this, Fs, Np).call(this, o, i), s && w(h = Jt, Uu, cy).call(h, o, s), r) {
        const {
          classList: l,
        } = o;
        for (const [d, u] of Object.entries(r)) l.toggle(d, u);
      }
      if (a) {
        const d = o.firstChild.firstChild;
        w(this, Fs, Np).call(this, d, a);
      }
    }
  }

  updateParent(t, e) {
    if (e === this) return;
    const i = n(this, Oe).get(t);
    i && (n(e, Zi).append(i), n(this, Oe).delete(t), n(e, Oe).set(t, i));
  }

  remove(t) {
    n(this, Xa).delete(t), n(this, Zi) !== null && (n(this, Oe).get(t).remove(), n(this, Oe).delete(t));
  }

  destroy() {
    g(this, Zi, null);
    for (const t of n(this, Oe).values()) t.remove();
    n(this, Oe).clear(), n(this, Xa).clear();
  }
};
Zi = new WeakMap(), Oe = new WeakMap(), Xa = new WeakMap(), dd = new WeakMap(), Uu = new WeakSet(), cy = function (t, [e, i, s, r]) {
  const {
    style: a,
  } = t;
  a.top = `${100 * i}%`, a.left = `${100 * e}%`, a.width = `${100 * s}%`, a.height = `${100 * r}%`;
}, Fs = new WeakSet(), Fp = function () {
  const t = Jt._svgFactory.create(1, 1, !0);
  return n(this, Zi).append(t), t.setAttribute('aria-hidden', !0), t;
}, dy = function (t, e) {
  const i = Jt._svgFactory.createElement('clipPath');
  t.append(i);
  const s = `clip_${e}`;
  i.setAttribute('id', s), i.setAttribute('clipPathUnits', 'objectBoundingBox');
  const r = Jt._svgFactory.createElement('use');
  return i.append(r), r.setAttribute('href', `#${e}`), r.classList.add('clip'), s;
}, Np = function (t, e) {
  for (const [i, s] of Object.entries(e)) s === null ? t.removeAttribute(i) : t.setAttribute(i, s);
}, b(Jt, Uu), b(Jt, dd, 0);
const Su = Jt;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: gp,
};
globalThis.pdfjsLib = {
  AbortException: _n,
  AnnotationEditorLayer: vu,
  AnnotationEditorParamsType: it,
  AnnotationEditorType: q,
  AnnotationEditorUIManager: Tr,
  AnnotationLayer: Zp,
  AnnotationMode: Ms,
  AnnotationType: zt,
  applyOpacity: hm,
  build: ub,
  ColorPicker: Dl,
  createValidAbsoluteUrl: $p,
  CSSConstants: om,
  DOMSVGFactory: kl,
  DrawLayer: Su,
  FeatureTest: ce,
  fetchData: Xh,
  findContrastColor: lm,
  getDocument: Yp,
  getFilenameFromUrl: nm,
  getPdfFilenameFromUrl: rm,
  getRGB: Yh,
  getUuid: Gp,
  getXfaPageViewport: am,
  GlobalWorkerOptions: ts,
  ImageKind: xl,
  InvalidPDFException: du,
  isDataScheme: gd,
  isPdfFile: ju,
  isValidExplicitDest: Gm,
  MathClamp: De,
  noContextMenu: Si,
  normalizeUnicode: im,
  OPS: jh,
  OutputScale: ss,
  PasswordResponses: tm,
  PDFDataRangeTransport: Kp,
  PDFDateString: Tl,
  PDFWorker: Vh,
  PermissionFlag: Zg,
  PixelsPerInch: Cn,
  RenderingCancelledException: Wu,
  renderRichText: jp,
  ResponseException: _l,
  setLayerDimensions: Cr,
  shadow: J,
  SignatureExtractor: Ls,
  stopEvent: Nt,
  SupportedImageMimeTypes: uu,
  TextLayer: Rl,
  TouchManager: Pl,
  updateUrlHash: Up,
  Util: U,
  VerbosityLevel: ud,
  version: db,
  XfaLayer: Wp,
};
const uy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: _n,
  AnnotationEditorLayer: vu,
  AnnotationEditorParamsType: it,
  AnnotationEditorType: q,
  AnnotationEditorUIManager: Tr,
  AnnotationLayer: Zp,
  AnnotationMode: Ms,
  AnnotationType: zt,
  CSSConstants: om,
  ColorPicker: Dl,
  DOMSVGFactory: kl,
  DrawLayer: Su,
  FeatureTest: ce,
  GlobalWorkerOptions: ts,
  ImageKind: xl,
  InvalidPDFException: du,
  MathClamp: De,
  OPS: jh,
  OutputScale: ss,
  PDFDataRangeTransport: Kp,
  PDFDateString: Tl,
  PDFWorker: Vh,
  PasswordResponses: tm,
  PermissionFlag: Zg,
  PixelsPerInch: Cn,
  RenderingCancelledException: Wu,
  ResponseException: _l,
  SignatureExtractor: Ls,
  SupportedImageMimeTypes: uu,
  TextLayer: Rl,
  TouchManager: Pl,
  Util: U,
  VerbosityLevel: ud,
  XfaLayer: Wp,
  applyOpacity: hm,
  build: ub,
  createValidAbsoluteUrl: $p,
  fetchData: Xh,
  findContrastColor: lm,
  getDocument: Yp,
  getFilenameFromUrl: nm,
  getPdfFilenameFromUrl: rm,
  getRGB: Yh,
  getUuid: Gp,
  getXfaPageViewport: am,
  isDataScheme: gd,
  isPdfFile: ju,
  isValidExplicitDest: Gm,
  noContextMenu: Si,
  normalizeUnicode: im,
  renderRichText: jp,
  setLayerDimensions: Cr,
  shadow: J,
  stopEvent: Nt,
  updateUrlHash: Up,
  version: db,
}, Symbol.toStringTag, { value: 'Module' }));
function fy(c) {
  let t; let e; let
    i = '';
  if (typeof c === 'string' || typeof c === 'number') i += c;
  else if (typeof c === 'object') {
    if (Array.isArray(c)) {
      const s = c.length;
      for (t = 0; t < s; t++) c[t] && (e = fy(c[t])) && (i && (i += ' '), i += e);
    } else for (e in c) c[e] && (i && (i += ' '), i += e);
  }
  return i;
}
function Xu() {
  for (var c, t, e = 0, i = '', s = arguments.length; e < s; e++) (c = arguments[e]) && (t = fy(c)) && (i && (i += ' '), i += t);
  return i;
}
const Ng = Object.prototype.hasOwnProperty;
function Og(c, t, e) {
  for (e of c.keys()) if (bo(e, t)) return e;
}
function bo(c, t) {
  let e; let i; let
    s;
  if (c === t) return !0;
  if (c && t && (e = c.constructor) === t.constructor) {
    if (e === Date) return c.getTime() === t.getTime();
    if (e === RegExp) return c.toString() === t.toString();
    if (e === Array) {
      if ((i = c.length) === t.length) for (; i-- && bo(c[i], t[i]);) ;
      return i === -1;
    }
    if (e === Set) {
      if (c.size !== t.size) return !1;
      for (i of c) if (s = i, s && typeof s === 'object' && (s = Og(t, s), !s) || !t.has(s)) return !1;
      return !0;
    }
    if (e === Map) {
      if (c.size !== t.size) return !1;
      for (i of c) if (s = i[0], s && typeof s === 'object' && (s = Og(t, s), !s) || !bo(i[1], t.get(s))) return !1;
      return !0;
    }
    if (e === ArrayBuffer) c = new Uint8Array(c), t = new Uint8Array(t);
    else if (e === DataView) {
      if ((i = c.byteLength) === t.byteLength) for (; i-- && c.getInt8(i) === t.getInt8(i);) ;
      return i === -1;
    }
    if (ArrayBuffer.isView(c)) {
      if ((i = c.byteLength) === t.byteLength) for (; i-- && c[i] === t[i];) ;
      return i === -1;
    }
    if (!e || typeof c === 'object') {
      i = 0;
      for (e in c) if (Ng.call(c, e) && ++i && !Ng.call(t, e) || !(e in t) || !bo(c[e], t[e])) return !1;
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
    },
  };
}
const I0 = ['onCopy', 'onCut', 'onPaste']; const F0 = [
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
]; const N0 = ['onFocus', 'onBlur']; const O0 = ['onInput', 'onInvalid', 'onReset', 'onSubmit']; const B0 = ['onLoad', 'onError']; const H0 = ['onKeyDown', 'onKeyPress', 'onKeyUp']; const $0 = [
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
]; const U0 = [
  'onClick',
  'onContextMenu',
  'onDoubleClick',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
]; const G0 = [
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
]; const z0 = ['onSelect']; const W0 = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; const j0 = [
  'onPointerDown',
  'onPointerMove',
  'onPointerUp',
  'onPointerCancel',
  'onGotPointerCapture',
  'onLostPointerCapture',
  'onPointerEnter',
  'onPointerLeave',
  'onPointerOver',
  'onPointerOut',
]; const V0 = ['onScroll']; const q0 = ['onWheel']; const X0 = [
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
]; const Y0 = ['onTransitionEnd']; const K0 = ['onToggle']; const J0 = ['onChange']; const
  Q0 = [
    ...I0,
    ...F0,
    ...N0,
    ...O0,
    ...B0,
    ...H0,
    ...$0,
    ...U0,
    ...G0,
    ...z0,
    ...W0,
    ...j0,
    ...V0,
    ...q0,
    ...X0,
    ...Y0,
    ...J0,
    ...K0,
  ];
function py(c, t) {
  const e = {};
  for (const i of Q0) {
    const s = c[i];
    s && (t ? e[i] = ((r) => s(r, t(i))) : e[i] = s);
  }
  return e;
}
const Z0 = process.env.NODE_ENV === 'production';
const lf = 'Invariant failed';
function vt(c, t) {
  if (!c) {
    if (Z0) throw new Error(lf);
    const e = typeof t === 'function' ? t() : t; const
      i = e ? ''.concat(lf, ': ').concat(e) : lf;
    throw new Error(i);
  }
}
function tA(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c;
}
let cf; let
  Bg;
function eA() {
  if (Bg) return cf;
  Bg = 1;
  const c = process.env.NODE_ENV !== 'production';
  let t = function () {
  };
  if (c) {
    const e = function (s, r) {
      const a = arguments.length;
      r = new Array(a > 1 ? a - 1 : 0);
      for (let o = 1; o < a; o++) r[o - 1] = arguments[o];
      let h = 0; const
        l = `Warning: ${s.replace(/%s/g, () => r[h++])}`;
      typeof console < 'u' && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
    t = function (i, s, r) {
      const a = arguments.length;
      r = new Array(a > 2 ? a - 2 : 0);
      for (let o = 2; o < a; o++) r[o - 2] = arguments[o];
      if (s === void 0) {
        throw new Error(
          '`warning(condition, format, ...args)` requires a warning message argument',
        );
      }
      i || e.apply(null, [s].concat(r));
    };
  }
  return cf = t, cf;
}
const iA = eA();
const ke = /* @__PURE__ */ tA(iA); const gy = Yg(null); const
  sA = 'noopener noreferrer nofollow';
class nA {
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
    return vt(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber || 0;
  }

  set page(t) {
    vt(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber = t;
  }

  get rotation() {
    return 0;
  }

  set rotation(t) {
  }

  addLinkAttributes(t, e, i) {
    t.href = e, t.rel = this.externalLinkRel || sA, t.target = i ? '_blank' : this.externalLinkTarget || '';
  }

  goToDestination(t) {
    return new Promise((e) => {
      vt(this.pdfDocument, 'PDF document not loaded.'), vt(t, 'Destination is not specified.'), typeof t === 'string' ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      vt(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const i = e[0];
      new Promise((s) => {
        vt(this.pdfDocument, 'PDF document not loaded.'), i instanceof Object ? this.pdfDocument.getPageIndex(i).then((r) => {
          s(r);
        }).catch(() => {
          vt(!1, `"${i}" is not a valid page reference.`);
        }) : typeof i === 'number' ? s(i) : vt(!1, `"${i}" is not a valid destination reference.`);
      }).then((s) => {
        const r = s + 1;
        vt(this.pdfViewer, 'PDF viewer is not initialized.'), vt(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: s,
          pageNumber: r,
        });
      });
    });
  }

  goToPage(t) {
    const e = t - 1;
    vt(this.pdfViewer, 'PDF viewer is not initialized.'), vt(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: e,
      pageNumber: t,
    });
  }

  goToXY() {
  }

  cachePageRef() {
  }

  getDestinationHash() {
    return '#';
  }

  getAnchorUrl() {
    return '#';
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
  return z('div', { className: `react-pdf__message react-pdf__message--${t}`, children: c });
}
const Op = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2,
};
function rA(c, t) {
  switch (t.type) {
    case 'RESOLVE':
      return { value: t.value, error: void 0 };
    case 'REJECT':
      return { value: !1, error: t.error };
    case 'RESET':
      return { value: void 0, error: void 0 };
    default:
      return c;
  }
}
function qh() {
  return Hy(rA, { value: void 0, error: void 0 });
}
const Yu = typeof window < 'u';
const my = Yu && window.location.protocol === 'file:';
function aA(c) {
  return typeof c < 'u';
}
function Dr(c) {
  return aA(c) && c !== null;
}
function oA(c) {
  return typeof c === 'string';
}
function hA(c) {
  return c instanceof ArrayBuffer;
}
function lA(c) {
  return vt(Yu, 'isBlob can only be used in a browser environment'), c instanceof Blob;
}
function Bp(c) {
  return oA(c) && /^data:/.test(c);
}
function Hg(c) {
  vt(Bp(c), 'Invalid data URI.');
  const [t = '', e = ''] = c.split(',');
  return t.split(';').indexOf('base64') !== -1 ? atob(e) : unescape(e);
}
function cA() {
  return Yu && window.devicePixelRatio || 1;
}
const by = 'On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.';
function $g() {
  ke(!my, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${by}`);
}
function dA() {
  ke(!my, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${by}`);
}
function Ka(c) {
  c != null && c.cancel && c.cancel();
}
function Hp(c, t) {
  return Object.defineProperty(c, 'width', {
    get() {
      return this.getViewport({ scale: t }).width;
    },
    configurable: !0,
  }), Object.defineProperty(c, 'height', {
    get() {
      return this.getViewport({ scale: t }).height;
    },
    configurable: !0,
  }), Object.defineProperty(c, 'originalWidth', {
    get() {
      return this.getViewport({ scale: 1 }).width;
    },
    configurable: !0,
  }), Object.defineProperty(c, 'originalHeight', {
    get() {
      return this.getViewport({ scale: 1 }).height;
    },
    configurable: !0,
  }), c;
}
function yy(c) {
  return c.name === 'AbortException' || c.name === 'RenderingCancelledException';
}
function uA(c) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => {
      if (!i.result) return e(new Error('Error while reading a file.'));
      t(i.result);
    }, i.onerror = (s) => {
      if (!s.target) return e(new Error('Error while reading a file.'));
      const { error: r } = s.target;
      if (!r) return e(new Error('Error while reading a file.'));
      switch (r.code) {
        case r.NOT_FOUND_ERR:
          return e(new Error('Error while reading a file: File not found.'));
        case r.SECURITY_ERR:
          return e(new Error('Error while reading a file: Security error.'));
        case r.ABORT_ERR:
          return e(new Error('Error while reading a file: Aborted.'));
        default:
          return e(new Error('Error while reading a file.'));
      }
    }, i.readAsArrayBuffer(c);
  });
}
const { PDFDataRangeTransport: fA } = uy; const
  pA = (c, t) => {
    switch (t) {
      case Op.NEED_PASSWORD: {
        const e = prompt('Enter the password to open this PDF file.');
        c(e);
        break;
      }
      case Op.INCORRECT_PASSWORD: {
        const e = prompt('Invalid password. Please try again.');
        c(e);
        break;
      }
    }
  };
function Ug(c) {
  return typeof c === 'object' && c !== null && ('data' in c || 'range' in c || 'url' in c);
}
const gA = Xg(({
  children: t, className: e, error: i = 'Failed to load PDF file.', externalLinkRel: s, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: h, loading: l = 'Loading PDF…', noData: d = 'No PDF file specified.', onItemClick: u, onLoadError: p, onLoadProgress: y, onLoadSuccess: S, onPassword: v = pA, onSourceError: _, onSourceSuccess: x, options: T, renderMode: E, rotate: f, scale: m, ...A
}, C) => {
  const [P, R] = qh(); const { value: D, error: k } = P; const [L, N] = qh(); const { value: I, error: j } = L; const B = Ai(new nA()); const O = Ai([]); const tt = Ai(void 0); const
    st = Ai(void 0);
  a && a !== tt.current && Ug(a) && (ke(!bo(a, tt.current), 'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'), tt.current = a), T && T !== st.current && (ke(!bo(T, st.current), 'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'), st.current = T);
  const ee = Ai({
    // Handling jumping to internal links target
    scrollPageIntoView: (Rt) => {
      const { dest: Yt, pageNumber: Lt, pageIndex: Se = Lt - 1 } = Rt;
      if (u) {
        u({ dest: Yt, pageIndex: Se, pageNumber: Lt });
        return;
      }
      const Qe = O.current[Se];
      if (Qe) {
        Qe.scrollIntoView();
        return;
      }
      ke(!1, `An internal link leading to page ${Lt} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    },
  });
  Kg(C, () => ({
    linkService: B,
    pages: O,
    viewer: ee,
  }), []);
  function Je() {
    x && x();
  }
  function rt() {
    k && (ke(!1, k.toString()), _ && _(k));
  }
  function ht() {
    R({ type: 'RESET' });
  }
  xt(ht, [a, R]);
  const ie = Is(async () => {
    if (!a) return null;
    if (typeof a === 'string') return Bp(a) ? { data: Hg(a) } : ($g(), { url: a });
    if (a instanceof fA) return { range: a };
    if (hA(a)) return { data: a };
    if (Yu && lA(a)) return { data: await uA(a) };
    if (vt(typeof a === 'object', 'Invalid parameter in file, need either Uint8Array, string or a parameter object'), vt(Ug(a), 'Invalid parameter object: need either .data, .range or .url'), 'url' in a && typeof a.url === 'string') {
      if (Bp(a.url)) {
        const { url: Rt, ...Yt } = a;
        return { data: Hg(Rt), ...Yt };
      }
      $g();
    }
    return a;
  }, [a]);
  xt(() => {
    const Rt = wd(ie());
    return Rt.promise.then((Yt) => {
      R({ type: 'RESOLVE', value: Yt });
    }).catch((Yt) => {
      R({ type: 'REJECT', error: Yt });
    }), () => {
      Ka(Rt);
    };
  }, [ie, R]), xt(() => {
    if (!(typeof D > 'u')) {
      if (D === !1) {
        rt();
        return;
      }
      Je();
    }
  }, [D]);
  function de() {
    I && (S && S(I), O.current = new Array(I.numPages), B.current.setDocument(I));
  }
  function ve() {
    j && (ke(!1, j.toString()), p && p(j));
  }
  xt(() => {
    N({ type: 'RESET' });
  }, [N, D]), xt(() => {
    if (!D) return;
    const Yt = T ? { ...D, ...T } : D; const
      Lt = Yp(Yt);
    y && (Lt.onProgress = y), v && (Lt.onPassword = v);
    const Se = Lt;
    return Se.promise.then((Qe) => {
      Se.destroyed || N({ type: 'RESOLVE', value: Qe });
    }).catch((Qe) => {
      Se.destroyed || N({ type: 'REJECT', error: Qe });
    }), () => {
      Se.destroy();
    };
  }, [T, N, D]), xt(() => {
    if (!(typeof I > 'u')) {
      if (I === !1) {
        ve();
        return;
      }
      de();
    }
  }, [I]), xt(() => {
    B.current.setViewer(ee.current), B.current.setExternalLinkRel(s), B.current.setExternalLinkTarget(r);
  }, [s, r]);
  const yt = Is((Rt, Yt) => {
    O.current[Rt] = Yt;
  }, []); const Bi = Is((Rt) => {
    delete O.current[Rt];
  }, []); const rs = is(() => ({
    imageResourcesPath: h,
    linkService: B.current,
    onItemClick: u,
    pdf: I,
    registerPage: yt,
    renderMode: E,
    rotate: f,
    scale: m,
    unregisterPage: Bi,
  }), [h, u, I, yt, E, f, m, Bi]); const
    Ns = is(
      () => py(A, () => I),
      // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
      [A, I],
    );
  function Me() {
    function Rt(Lt) {
      return !!(Lt != null && Lt.pdf);
    }
    if (!Rt(rs)) throw new Error('pdf is undefined');
    const Yt = typeof t === 'function' ? t(rs) : t;
    return z(gy.Provider, { value: rs, children: Yt });
  }
  function Tt() {
    return a ? I == null ? z(yo, { type: 'loading', children: typeof l === 'function' ? l() : l }) : I === !1 ? z(yo, { type: 'error', children: typeof i === 'function' ? i() : i }) : Me() : z(yo, { type: 'no-data', children: typeof d === 'function' ? d() : d });
  }
  return z('div', {
    className: Xu('react-pdf__Document', e),
    // Assertion is needed for React 18 compatibility
    ref: o,
    ...Ns,
    children: Tt(),
  });
});
function ig() {
  return Jg(gy);
}
function wy() {
  for (var c = [], t = 0; t < arguments.length; t++) c[t] = arguments[t];
  const e = c.filter(Boolean);
  if (e.length <= 1) {
    const i = e[0];
    return i || null;
  }
  return function (r) {
    for (let a = 0, o = e; a < o.length; a++) {
      const h = o[a];
      typeof h === 'function' ? h(r) : h && (h.current = r);
    }
  };
}
const Ay = Yg(null);
function Ad() {
  return Jg(Ay);
}
function mA() {
  const c = ig(); const
    t = Ad();
  vt(t, 'Unable to find Page context.');
  const e = { ...c, ...t }; const
    {
      filterAnnotations: i, imageResourcesPath: s, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: h, onRenderAnnotationLayerSuccess: l, page: d, pdf: u, renderForms: p, rotate: y, scale: S = 1,
    } = e;
  vt(u, 'Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.'), vt(d, 'Attempted to load page annotations, but no page was specified.'), vt(r, 'Attempted to load page annotations, but no linkService was specified.');
  const [v, _] = qh(); const { value: x, error: T } = v; const
    E = Ai(null);
  ke(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-annotation-layer'), 10) === 1, 'AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations');
  function f() {
    x && o && o(x);
  }
  function m() {
    T && (ke(!1, T.toString()), a && a(T));
  }
  xt(() => {
    _({ type: 'RESET' });
  }, [_, d]), xt(() => {
    if (!d) return;
    const D = wd(d.getAnnotations()); const
      k = D;
    return D.promise.then((L) => {
      _({ type: 'RESOLVE', value: L });
    }).catch((L) => {
      _({ type: 'REJECT', error: L });
    }), () => {
      Ka(k);
    };
  }, [_, d]), xt(() => {
    if (x !== void 0) {
      if (x === !1) {
        m();
        return;
      }
      f();
    }
  }, [x]);
  function A() {
    l && l();
  }
  function C(R) {
    ke(!1, `${R}`), h && h(R);
  }
  const P = is(() => d.getViewport({ scale: S, rotation: y }), [d, y, S]);
  return xt(() => {
    if (!u || !d || !r || !x) return;
    const { current: D } = E;
    if (!D) return;
    const k = P.clone({ dontFlip: !0 }); const L = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      annotationStorage: u.annotationStorage,
      commentManager: null,
      // TODO: Implement this
      div: D,
      l10n: null,
      // TODO: Implement this
      linkService: r,
      page: d,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: k,
    }; const
      N = {
        annotations: i ? i({ annotations: x }) : x,
        annotationStorage: u.annotationStorage,
        div: D,
        imageResourcesPath: s,
        linkService: r,
        page: d,
        renderForms: p,
        viewport: k,
      };
    D.innerHTML = '';
    try {
      new Zp(L).render(N), A();
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
    P,
  ]), z('div', { className: Xu('react-pdf__Page__annotations', 'annotationLayer'), ref: E });
}
const vy = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: 'group',
  Sect: 'group',
  // XXX: There's a "section" role, but it's abstract.
  Div: 'group',
  Aside: 'note',
  NonStruct: 'none',
  // Block level structure types
  P: null,
  // H<n>,
  H: 'heading',
  Title: null,
  FENote: 'note',
  // Sub-block level structure type
  Sub: 'group',
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: 'link',
  Annot: 'note',
  Form: 'form',
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: 'list',
  LI: 'listitem',
  LBody: null,
  // Table standard structure types
  Table: 'table',
  TR: 'row',
  TH: 'columnheader',
  TD: 'cell',
  THead: 'columnheader',
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: 'figure',
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null,
};
const bA = /^H(\d+)$/;
function yA(c) {
  return c in vy;
}
function Ku(c) {
  return 'children' in c;
}
function Sy(c) {
  return Ku(c) ? c.children.length === 1 && 0 in c.children && 'id' in c.children[0] : !1;
}
function wA(c) {
  const t = {};
  if (Ku(c)) {
    const { role: e } = c; const
      i = e.match(bA);
    if (i) t.role = 'heading', t['aria-level'] = Number(i[1]);
    else if (yA(e)) {
      const s = vy[e];
      s && (t.role = s);
    }
  }
  return t;
}
function xy(c) {
  const t = {};
  if (Ku(c)) {
    if (c.alt !== void 0 && (t['aria-label'] = c.alt), c.lang !== void 0 && (t.lang = c.lang), Sy(c)) {
      const [e] = c.children;
      if (e) {
        const i = xy(e);
        return {
          ...t,
          ...i,
        };
      }
    }
  } else 'id' in c && (t['aria-owns'] = c.id);
  return t;
}
function AA(c) {
  return c ? {
    ...wA(c),
    ...xy(c),
  } : null;
}
function Ey({ className: c, node: t }) {
  const e = is(() => AA(t), [t]); const
    i = is(() => (!Ku(t) || Sy(t) ? null : t.children.map((s, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
      z(Ey, { node: s }, r)
    ))), [t]);
  return z('span', { className: c, ...e, children: i });
}
function vA() {
  const c = Ad();
  vt(c, 'Unable to find Page context.');
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = c; const [i, s] = qh(); const { value: r, error: a } = i; const
    { customTextRenderer: o, page: h } = c;
  function l() {
    r && e && e(r);
  }
  function d() {
    a && (ke(!1, a.toString()), t && t(a));
  }
  return xt(() => {
    s({ type: 'RESET' });
  }, [s, h]), xt(() => {
    if (o || !h) return;
    const p = wd(h.getStructTree()); const
      y = p;
    return p.promise.then((S) => {
      s({ type: 'RESOLVE', value: S });
    }).catch((S) => {
      s({ type: 'REJECT', error: S });
    }), () => Ka(y);
  }, [o, h, s]), xt(() => {
    if (r !== void 0) {
      if (r === !1) {
        d();
        return;
      }
      l();
    }
  }, [r]), r ? z(Ey, { className: 'react-pdf__Page__structTree structTree', node: r }) : null;
}
const Gg = Ms;
function SA(c) {
  const t = Ad();
  vt(t, 'Unable to find Page context.');
  const e = { ...t, ...c }; const {
    _className: i, canvasBackground: s, devicePixelRatio: r = cA(), onRenderError: a, onRenderSuccess: o, page: h, renderForms: l, renderTextLayer: d, pageColors: u, rotate: p, scale: y,
  } = e; const
    { canvasRef: S } = c;
  vt(h, 'Attempted to render page canvas, but no page was specified.');
  const v = Ai(null);
  function _() {
    h && o && o(Hp(h, y));
  }
  function x(m) {
    yy(m) || (ke(!1, m.toString()), a && a(m));
  }
  const T = is(() => h.getViewport({ scale: y * r, rotation: p }), [r, h, p, y]); const
    E = is(() => h.getViewport({ scale: y, rotation: p }), [h, p, y]);
  xt(() => {
    if (!h) return;
    h.cleanup();
    const { current: A } = v;
    if (!A) return;
    A.width = T.width, A.height = T.height, A.style.width = `${Math.floor(E.width)}px`, A.style.height = `${Math.floor(E.height)}px`, A.style.visibility = 'hidden';
    const C = {
      annotationMode: l ? Gg.ENABLE_FORMS : Gg.ENABLE,
      canvas: A,
      canvasContext: A.getContext('2d', { alpha: !1 }),
      pageColors: u,
      viewport: T,
    };
    s && (C.background = s);
    const P = h.render(C); const
      R = P;
    return P.promise.then(() => {
      A.style.visibility = '', _();
    }).catch(x), () => Ka(R);
  }, [s, h, u, l, T, E]);
  const f = Is(() => {
    const { current: m } = v;
    m && (m.width = 0, m.height = 0);
  }, []);
  return xt(() => f, [f]), z('canvas', {
    className: `${i}__canvas`,
    dir: 'ltr',
    ref: wy(S, v),
    style: {
      display: 'block',
      userSelect: 'none',
    },
    children: d ? z(vA, {}) : null,
  });
}
function xA(c) {
  return 'str' in c;
}
const EA = /* @__PURE__ */ new Set([
  'base',
  'embed',
  'iframe',
  'link',
  'meta',
  'object',
  'script',
  'style',
  'template',
]); const
  _A = /* @__PURE__ */ new Set(['action', 'formaction', 'href', 'poster', 'src', 'xlink:href']);
function CA(c) {
  let t = '';
  for (const e of c) {
    const i = e.charCodeAt(0);
    i <= 32 || i === 127 || (t += e.toLowerCase());
  }
  return t.startsWith('javascript:') || t.startsWith('vbscript:');
}
function TA(c) {
  return c.nodeType === Node.ELEMENT_NODE;
}
function _y(c) {
  return TA(c) && c instanceof HTMLElement;
}
function PA(c) {
  return _y(c) && EA.has(c.tagName.toLowerCase());
}
function RA(c) {
  const t = document.createElement(c.tagName.toLowerCase());
  return Array.from(c.attributes).forEach((e) => {
    const i = e.name.toLowerCase();
    i.startsWith('on') || i === 'srcdoc' || _A.has(i) && CA(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(c.childNodes).forEach((e) => {
    t.append(Cy(e));
  }), t;
}
function Cy(c) {
  let t;
  return _y(c) && !PA(c) ? RA(c) : document.createTextNode((t = c.textContent) !== null && t !== void 0 ? t : '');
}
function DA(c, t) {
  const e = document.createElement('template');
  e.innerHTML = t;
  const i = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((s) => {
    i.append(Cy(s));
  }), c.replaceChildren(i);
}
function kA() {
  const c = Ad();
  vt(c, 'Unable to find Page context.');
  const {
    customTextRenderer: t, onGetTextError: e, onGetTextSuccess: i, onRenderTextLayerError: s, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: h, rotate: l, scale: d,
  } = c;
  vt(a, 'Attempted to load page text content, but no page was specified.');
  const [u, p] = qh(); const { value: y, error: S } = u; const
    v = Ai(null);
  ke(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-text-layer'), 10) === 1, 'TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer');
  function _() {
    y && i && i(y);
  }
  function x() {
    S && (ke(!1, S.toString()), e && e(S));
  }
  xt(() => {
    p({ type: 'RESET' });
  }, [a, p]), xt(() => {
    if (!a) return;
    const P = wd(a.getTextContent()); const
      R = P;
    return P.promise.then((D) => {
      p({ type: 'RESOLVE', value: D });
    }).catch((D) => {
      p({ type: 'REJECT', error: D });
    }), () => Ka(R);
  }, [a, p]), xt(() => {
    if (y !== void 0) {
      if (y === !1) {
        x();
        return;
      }
      _();
    }
  }, [y]);
  const T = Is(() => {
    r && r();
  }, [r]); const
    E = Is((C) => {
      yy(C) || (ke(!1, C.toString()), s && s(C));
    }, [s]);
  function f() {
    const C = v.current;
    C && C.classList.add('selecting');
  }
  function m() {
    const C = v.current;
    C && C.classList.remove('selecting');
  }
  const A = is(() => a.getViewport({ scale: d, rotation: l }), [a, l, d]);
  return $y(() => {
    if (!a || !y) return;
    const { current: P } = v;
    if (!P) return;
    P.innerHTML = '';
    const R = a.streamTextContent({ includeMarkedContent: !0 }); const D = {
      container: P,
      textContentSource: R,
      viewport: A,
    }; const k = new Rl(D); const
      L = k;
    return k.render().then(() => {
      const N = document.createElement('div');
      N.className = 'endOfContent', P.append(N);
      const I = P.querySelectorAll('[role="presentation"]');
      if (t) {
        let j = 0;
        y.items.forEach((B, O) => {
          if (!xA(B)) return;
          const tt = I[j];
          if (!tt) return;
          const st = t({
            pageIndex: o,
            pageNumber: h,
            itemIndex: O,
            ...B,
          });
          DA(tt, st), j += B.str && B.hasEOL ? 2 : 1;
        });
      }
      T();
    }).catch(E), () => Ka(L);
  }, [
    t,
    E,
    T,
    a,
    o,
    h,
    y,
    A,
  ]), // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
  z('div', {
    className: Xu('react-pdf__Page__textContent', 'textLayer'), onMouseUp: m, onMouseDown: f, ref: v,
  });
}
const zg = 1;
function MA(c) {
  const e = { ...ig(), ...c }; const {
    _className: i = 'react-pdf__Page', _enableRegisterUnregisterPage: s = !0, canvasBackground: r, canvasRef: a, children: o, className: h, customRenderer: l, customTextRenderer: d, devicePixelRatio: u, error: p = 'Failed to load the page.', filterAnnotations: y, height: S, inputRef: v, loading: _ = 'Loading page…', noData: x = 'No page specified.', onGetAnnotationsError: T, onGetAnnotationsSuccess: E, onGetStructTreeError: f, onGetStructTreeSuccess: m, onGetTextError: A, onGetTextSuccess: C, onLoadError: P, onLoadSuccess: R, onRenderAnnotationLayerError: D, onRenderAnnotationLayerSuccess: k, onRenderError: L, onRenderSuccess: N, onRenderTextLayerError: I, onRenderTextLayerSuccess: j, pageColors: B, pageIndex: O, pageNumber: tt, pdf: st, registerPage: ee, renderAnnotationLayer: Je = !0, renderForms: rt = !1, renderMode: ht = 'canvas', renderTextLayer: ie = !0, rotate: de, scale: ve = zg, unregisterPage: yt, width: Bi, ...rs
  } = e; const [Ns, Me] = qh(); const { value: Tt, error: Rt } = Ns; const
    Yt = Ai(null);
  vt(st, 'Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.');
  const Lt = Dr(tt) ? tt - 1 : O ?? null; const Se = tt ?? (Dr(O) ? O + 1 : null); const Qe = de ?? (Tt ? Tt.rotate : null); const
    Hi = is(() => {
      if (!Tt) return null;
      let Rn = 1;
      const Za = ve ?? zg;
      if (Bi || S) {
        const Dn = Tt.getViewport({ scale: 1, rotation: Qe });
        Bi ? Rn = Bi / Dn.width : S && (Rn = S / Dn.height);
      }
      return Za * Rn;
    }, [S, Tt, Qe, ve, Bi]);
  xt(() => () => {
    Dr(Lt) && s && yt && yt(Lt);
  }, [s, st, Lt, yt]);
  function Ty() {
    if (R) {
      if (!Tt || !Hi) return;
      R(Hp(Tt, Hi));
    }
    if (s && ee) {
      if (!Dr(Lt) || !Yt.current) return;
      ee(Lt, Yt.current);
    }
  }
  function Py() {
    Rt && (ke(!1, Rt.toString()), P && P(Rt));
  }
  xt(() => {
    Me({ type: 'RESET' });
  }, [Me, st, Lt]), xt(() => {
    if (!st || !Se) return;
    const Za = wd(st.getPage(Se)); const
      Dn = Za;
    return Za.promise.then((Qu) => {
      Me({ type: 'RESOLVE', value: Qu });
    }).catch((Qu) => {
      Me({ type: 'REJECT', error: Qu });
    }), () => Ka(Dn);
  }, [Me, st, Se]), xt(() => {
    if (Tt !== void 0) {
      if (Tt === !1) {
        Py();
        return;
      }
      Ty();
    }
  }, [Tt, Hi]);
  const Ju = is(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    Dr(Lt) && Se && Dr(Qe) && Dr(Hi) ? {
      _className: i,
      canvasBackground: r,
      customTextRenderer: d,
      devicePixelRatio: u,
      filterAnnotations: y,
      onGetAnnotationsError: T,
      onGetAnnotationsSuccess: E,
      onGetStructTreeError: f,
      onGetStructTreeSuccess: m,
      onGetTextError: A,
      onGetTextSuccess: C,
      onRenderAnnotationLayerError: D,
      onRenderAnnotationLayerSuccess: k,
      onRenderError: L,
      onRenderSuccess: N,
      onRenderTextLayerError: I,
      onRenderTextLayerSuccess: j,
      page: Tt,
      pageColors: B,
      pageIndex: Lt,
      pageNumber: Se,
      renderForms: rt,
      renderTextLayer: ie,
      rotate: Qe,
      scale: Hi,
    } : null
  ), [
    i,
    r,
    d,
    u,
    y,
    T,
    E,
    f,
    m,
    A,
    C,
    D,
    k,
    L,
    N,
    I,
    j,
    Tt,
    B,
    Lt,
    Se,
    rt,
    ie,
    Qe,
    Hi,
  ]); const Ry = is(
    () => py(rs, () => Tt && (Hi ? Hp(Tt, Hi) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [rs, Tt, Hi],
  ); const
    vd = `${Lt}@${Hi}/${Qe}`;
  function Dy() {
    switch (ht) {
      case 'custom':
        return vt(l, 'renderMode was set to "custom", but no customRenderer was passed.'), z(l, {}, `${vd}_custom`);
      case 'none':
        return null;
      case 'canvas':
      default:
        return z(SA, { canvasRef: a }, `${vd}_canvas`);
    }
  }
  function ky() {
    return ie ? z(kA, {}, `${vd}_text`) : null;
  }
  function My() {
    return Je ? z(mA, {}, `${vd}_annotations`) : null;
  }
  function Ly() {
    function Rn(Dn) {
      return !!(Dn != null && Dn.page);
    }
    if (!Rn(Ju)) throw new Error('page is undefined');
    const Za = typeof o === 'function' ? o(Ju) : o;
    return qg(Ay.Provider, { value: Ju, children: [Dy(), ky(), My(), Za] });
  }
  function Iy() {
    return Se ? st === null || Tt === void 0 || Tt === null ? z(yo, { type: 'loading', children: typeof _ === 'function' ? _() : _ }) : st === !1 || Tt === !1 ? z(yo, { type: 'error', children: typeof p === 'function' ? p() : p }) : Ly() : z(yo, { type: 'no-data', children: typeof x === 'function' ? x() : x });
  }
  return z('div', {
    className: Xu(i, h),
    'data-page-number': Se,
    // Assertion is needed for React 18 compatibility
    ref: wy(v, Yt),
    style: {
      '--scale-round-x': '1px',
      '--scale-round-y': '1px',
      '--scale-factor': '1',
      '--user-unit': `${Hi}`,
      '--total-scale-factor': 'calc(var(--scale-factor) * var(--user-unit))',
      backgroundColor: r || 'white',
      position: 'relative',
      minWidth: 'min-content',
      minHeight: 'min-content',
    },
    ...Ry,
    children: Iy(),
  });
}
dA();
ts.workerSrc = 'pdf.worker.mjs';
const LA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Document: gA,
  Page: MA,
  PasswordResponses: Op,
  pdfjs: uy,
  useDocumentContext: ig,
  usePageContext: Ad,
}, Symbol.toStringTag, { value: 'Module' }));
const Sl = { exports: {} }; const IA = Sl.exports; let
  Wg;
function FA() {
  return Wg || (Wg = 1, (function (c, t) {
    (function (e, i) {
      i(t);
    }(IA, ((e) => {
      class i {
        constructor(f, m) {
          this.state = {
            angle: 0, area: [], position: { x: 0, y: 0 }, hardAngle: 0, hardDrawingAngle: 0,
          }, this.createdDensity = m, this.nowDrawingDensity = this.createdDensity, this.render = f;
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
          const m = this.render.getContext(); const A = this.render.convertToGlobal(this.state.position); const C = this.render.getRect().pageWidth; const
            P = this.render.getRect().height;
          m.save(), m.translate(A.x, A.y), m.beginPath();
          for (let R of this.state.area) R !== null && (R = this.render.convertToGlobal(R), m.lineTo(R.x - A.x, R.y - A.y));
          m.rotate(this.state.angle), m.clip(), this.isLoad ? m.drawImage(this.image, 0, 0, C, P) : this.drawLoader(m, { x: 0, y: 0 }, C, P), m.restore();
        }

        simpleDraw(f) {
          const m = this.render.getRect(); const A = this.render.getContext(); const C = m.pageWidth; const P = m.height; const R = f === 1 ? m.left + m.pageWidth : m.left; const
            D = m.top;
          this.isLoad ? A.drawImage(this.image, R, D, C, P) : this.drawLoader(A, { x: R, y: D }, C, P);
        }

        drawLoader(f, m, A, C) {
          f.beginPath(), f.strokeStyle = 'rgb(200, 200, 200)', f.fillStyle = 'rgb(255, 255, 255)', f.lineWidth = 1, f.rect(m.x + 1, m.y + 1, A - 1, C - 1), f.stroke(), f.fill();
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
          this.isShowCover && (this.pages[0].setDensity('hard'), this.landscapeSpread.push([f]), f++);
          for (let m = f; m < this.pages.length; m += 2) m < this.pages.length - 1 ? this.landscapeSpread.push([m, m + 1]) : (this.landscapeSpread.push([m]), this.pages[m].setDensity('hard'));
        }

        getSpread() {
          return this.render.getOrientation() === 'landscape' ? this.landscapeSpread : this.portraitSpread;
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
          throw new Error('Invalid page number');
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
          if (this.render.getOrientation() === 'portrait') return f === 0 ? this.pages[m].newTemporaryCopy() : this.pages[m - 1];
          {
            const A = f === 0 ? this.getSpread()[m + 1] : this.getSpread()[m - 1];
            return A.length === 1 || f === 0 ? this.pages[A[0]] : this.pages[A[1]];
          }
        }

        getBottomPage(f) {
          const m = this.currentSpreadIndex;
          if (this.render.getOrientation() === 'portrait') return f === 0 ? this.pages[m + 1] : this.pages[m - 1];
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
          if (!(f >= 0 && f < this.getSpread().length)) throw new Error('Invalid page');
          this.currentSpreadIndex = f;
        }

        showSpread() {
          const f = this.getSpread()[this.currentSpreadIndex];
          f.length === 2 ? (this.render.setLeftPage(this.pages[f[0]]), this.render.setRightPage(this.pages[f[1]])) : this.render.getOrientation() === 'landscape' && f[0] === this.pages.length - 1 ? (this.render.setLeftPage(this.pages[f[0]]), this.render.setRightPage(null)) : (this.render.setLeftPage(null), this.render.setRightPage(this.pages[f[0]])), this.currentPageIndex = f[0], this.app.updatePageIndex(this.currentPageIndex);
        }
      }
      class a extends r {
        constructor(f, m, A) {
          super(f, m), this.imagesHref = A;
        }

        load() {
          for (const f of this.imagesHref) {
            const m = new s(this.render, f, 'soft');
            m.load(), this.pages.push(m);
          }
          this.createSpread();
        }
      }
      class o {
        static GetDistanceBetweenTwoPoint(f, m) {
          return f === null || m === null ? 1 / 0 : Math.sqrt((m.x - f.x) ** 2 + (m.y - f.y) ** 2);
        }

        static GetSegmentLength(f) {
          return o.GetDistanceBetweenTwoPoint(f[0], f[1]);
        }

        static GetAngleBetweenTwoLine(f, m) {
          const A = f[0].y - f[1].y; const C = m[0].y - m[1].y; const P = f[1].x - f[0].x; const
            R = m[1].x - m[0].x;
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
          const C = f.x; const P = f.y; const R = A.x; const
            D = A.y;
          let k = Math.sqrt(m ** 2 * (C - R) ** 2 / ((C - R) ** 2 + (P - D) ** 2)) + C;
          A.x < 0 && (k *= -1);
          let L = (k - C) * (P - D) / (C - R) + P;
          return C - R + P === 0 && (L = m), { x: k, y: L };
        }

        static GetIntersectBetweenTwoSegment(f, m, A) {
          return o.PointInRect(f, o.GetIntersectBeetwenTwoLine(m, A));
        }

        static GetIntersectBeetwenTwoLine(f, m) {
          const A = f[0].y - f[1].y; const C = m[0].y - m[1].y; const P = f[1].x - f[0].x; const R = m[1].x - m[0].x; const D = f[0].x * f[1].y - f[1].x * f[0].y; const k = m[0].x * m[1].y - m[1].x * m[0].y; const L = A * k - C * D; const N = P * k - R * D; const I = -(D * R - k * P) / (A * R - C * P); const
            j = -(A * k - C * D) / (A * R - C * P);
          if (isFinite(I) && isFinite(j)) return { x: I, y: j };
          if (Math.abs(L - N) < 0.1) throw new Error('Segment included');
          return null;
        }

        static GetCordsFromTwoPoint(f, m) {
          const A = Math.abs(f.x - m.x); const C = Math.abs(f.y - m.y); const P = Math.max(A, C); const
            R = [f];
          function D(k, L, N, I, j) {
            return L > k ? k + j * (N / I) : L < k ? k - j * (N / I) : k;
          }
          for (let k = 1; k <= P; k += 1) R.push({ x: D(f.x, m.x, A, P, k), y: D(f.y, m.y, C, P, k) });
          return R;
        }
      }
      class h extends i {
        constructor(f, m, A) {
          super(f, A), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = !1, this.element = m, this.element.classList.add('stf__item'), this.element.classList.add(`--${A}`);
        }

        newTemporaryCopy() {
          return this.nowDrawingDensity === 'hard' ? this : (this.temporaryCopy === null && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new h(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
        }

        getTemporaryCopy() {
          return this.temporaryCopy;
        }

        hideTemporaryCopy() {
          this.temporaryCopy !== null && (this.copiedElement.remove(), this.copiedElement = null, this.temporaryCopy = null);
        }

        draw(f) {
          const m = f || this.nowDrawingDensity; const A = this.render.convertToGlobal(this.state.position); const C = this.render.getRect().pageWidth; const
            P = this.render.getRect().height;
          this.element.classList.remove('--simple');
          const R = `
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${C}px;
            height: ${P}px;
        `;
          m === 'hard' ? this.drawHard(R) : this.drawSoft(A, R);
        }

        drawHard(f = '') {
          const m = this.render.getRect().left + this.render.getRect().width / 2; const A = this.state.hardDrawingAngle; const
            C = `${f}
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            ${this.orientation === 0 ? `transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${A}deg);` : `transform-origin: 0 0; 
                   transform: translate3d(${m}px, 0, 0) rotateY(${A}deg);`}`;
          this.element.style.cssText = C;
        }

        drawSoft(f, m = '') {
          let A = 'polygon( ';
          for (const P of this.state.area) {
            if (P !== null) {
              let R = this.render.getDirection() === 1 ? { x: -P.x + this.state.position.x, y: P.y - this.state.position.y } : { x: P.x - this.state.position.x, y: P.y - this.state.position.y };
              R = o.GetRotatedPoint(R, { x: 0, y: 0 }, this.state.angle), A += `${R.x}px ${R.y}px, `;
            }
          }
          A = A.slice(0, -2), A += ')';
          const C = `${m}transform-origin: 0 0; clip-path: ${A}; -webkit-clip-path: ${A};${this.render.isSafari() && this.state.angle === 0 ? `transform: translate(${f.x}px, ${f.y}px);` : `transform: translate3d(${f.x}px, ${f.y}px, 0) rotate(${this.state.angle}rad);`}`;
          this.element.style.cssText = C;
        }

        simpleDraw(f) {
          const m = this.render.getRect(); const A = m.pageWidth; const C = m.height; const P = f === 1 ? m.left + m.pageWidth : m.left; const
            R = m.top;
          this.element.classList.add('--simple'), this.element.style.cssText = `
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
          super.setOrientation(f), this.element.classList.remove('--left', '--right'), this.element.classList.add(f === 1 ? '--right' : '--left');
        }

        setDrawingDensity(f) {
          this.element.classList.remove('--soft', '--hard'), this.element.classList.add(`--${f}`), super.setDrawingDensity(f);
        }
      }
      class l extends r {
        constructor(f, m, A, C) {
          super(f, m), this.element = A, this.pagesElement = C;
        }

        load() {
          for (const f of this.pagesElement) {
            const m = new h(this.render, f, f.dataset.density === 'hard' ? 'hard' : 'soft');
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
          return f.push(this.rect.topLeft), f.push(this.topIntersectPoint), this.sideIntersectPoint === null ? m = !0 : (f.push(this.sideIntersectPoint), this.bottomIntersectPoint === null && (m = !1)), f.push(this.bottomIntersectPoint), (m || this.corner === 'bottom') && f.push(this.rect.bottomLeft), f;
        }

        getBottomClipArea() {
          const f = [];
          return f.push(this.topIntersectPoint), this.corner === 'top' ? f.push({ x: this.pageWidth, y: 0 }) : (this.topIntersectPoint !== null && f.push({ x: this.pageWidth, y: 0 }), f.push({ x: this.pageWidth, y: this.pageHeight })), this.sideIntersectPoint !== null ? o.GetDistanceBetweenTwoPoint(this.sideIntersectPoint, this.topIntersectPoint) >= 10 && f.push(this.sideIntersectPoint) : this.corner === 'top' && f.push({ x: this.pageWidth, y: this.pageHeight }), f.push(this.bottomIntersectPoint), f.push(this.topIntersectPoint), f;
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
          return this.corner === 'top' ? this.topIntersectPoint : this.sideIntersectPoint !== null ? this.sideIntersectPoint : this.topIntersectPoint;
        }

        getShadowAngle() {
          const f = o.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(), [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]);
          return this.direction === 0 ? f : Math.PI - f;
        }

        calcAngleAndPosition(f) {
          let m = f;
          if (this.updateAngleAndGeometry(m), m = this.corner === 'top' ? this.checkPositionAtCenterLine(m, { x: 0, y: 0 }, { x: 0, y: this.pageHeight }) : this.checkPositionAtCenterLine(m, { x: 0, y: this.pageHeight }, { x: 0, y: 0 }), Math.abs(m.x - this.pageWidth) < 1 && Math.abs(m.y) < 1) throw new Error('Point is too small');
          return m;
        }

        updateAngleAndGeometry(f) {
          this.angle = this.calculateAngle(f), this.rect = this.getPageRect(f);
        }

        calculateAngle(f) {
          const m = this.pageWidth - f.x + 1; const
            A = this.corner === 'bottom' ? this.pageHeight - f.y : f.y;
          let C = 2 * Math.acos(m / Math.sqrt(A * A + m * m));
          A < 0 && (C = -C);
          const P = Math.PI - C;
          if (!isFinite(C) || P >= 0 && P < 3e-3) throw new Error('The G point is too small');
          return this.corner === 'bottom' && (C = -C), C;
        }

        getPageRect(f) {
          return this.corner === 'top' ? this.getRectFromBasePoint([{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }, { x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }], f) : this.getRectFromBasePoint([{ x: 0, y: -this.pageHeight }, { x: this.pageWidth, y: -this.pageHeight }, { x: 0, y: 0 }, { x: this.pageWidth, y: 0 }], f);
        }

        getRectFromBasePoint(f, m) {
          return {
            topLeft: this.getRotatedPoint(f[0], m), topRight: this.getRotatedPoint(f[1], m), bottomLeft: this.getRotatedPoint(f[2], m), bottomRight: this.getRotatedPoint(f[3], m),
          };
        }

        getRotatedPoint(f, m) {
          return { x: f.x * Math.cos(this.angle) + f.y * Math.sin(this.angle) + m.x, y: f.y * Math.cos(this.angle) - f.x * Math.sin(this.angle) + m.y };
        }

        calculateIntersectPoint(f) {
          const m = {
            left: -1, top: -1, width: this.pageWidth + 2, height: this.pageHeight + 2,
          };
          this.corner === 'top' ? (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.bottomLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }])) : (this.topIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.topLeft, this.rect.topRight], [{ x: 0, y: 0 }, { x: this.pageWidth, y: 0 }]), this.sideIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [f, this.rect.topLeft], [{ x: this.pageWidth, y: 0 }, { x: this.pageWidth, y: this.pageHeight }]), this.bottomIntersectPoint = o.GetIntersectBetweenTwoSegment(m, [this.rect.bottomLeft, this.rect.bottomRight], [{ x: 0, y: this.pageHeight }, { x: this.pageWidth, y: this.pageHeight }]));
        }

        checkPositionAtCenterLine(f, m, A) {
          let C = f;
          const P = o.LimitPointToCircle(m, this.pageWidth, C);
          C !== P && (C = P, this.updateAngleAndGeometry(C));
          const R = Math.sqrt(this.pageWidth ** 2 + this.pageHeight ** 2);
          let D = this.rect.bottomRight; let
            k = this.rect.topLeft;
          if (this.corner === 'bottom' && (D = this.rect.topRight, k = this.rect.bottomLeft), D.x <= 0) {
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
          this.flippingPage = null, this.bottomPage = null, this.calc = null, this.state = 'read', this.render = f, this.app = m;
        }

        fold(f) {
          this.setState('user_fold'), this.calc === null && this.start(f), this.do(this.render.convertToPage(f));
        }

        flip(f) {
          if (this.app.getSettings().disableFlipByClick && !this.isPointOnCorners(f) || (this.calc !== null && this.render.finishAnimation(), !this.start(f))) return;
          const m = this.getBoundsRect();
          this.setState('flipping');
          const A = m.height / 10; const C = this.calc.getCorner() === 'bottom' ? m.height - A : A; const
            P = this.calc.getCorner() === 'bottom' ? m.height : 0;
          this.calc.calc({ x: m.pageWidth - A, y: C }), this.animateFlippingTo({ x: m.pageWidth - A, y: C }, { x: -m.pageWidth, y: P }, !0);
        }

        start(f) {
          this.reset();
          const m = this.render.convertToBook(f); const A = this.getBoundsRect(); const C = this.getDirectionByPoint(m); const
            P = m.y >= A.height / 2 ? 'bottom' : 'top';
          if (!this.checkDirection(C)) return !1;
          try {
            if (this.flippingPage = this.app.getPageCollection().getFlippingPage(C), this.bottomPage = this.app.getPageCollection().getBottomPage(C), this.render.getOrientation() === 'landscape') {
              if (C === 1) {
                const R = this.app.getPageCollection().nextBy(this.flippingPage);
                R !== null && this.flippingPage.getDensity() !== R.getDensity() && (this.flippingPage.setDrawingDensity('hard'), R.setDrawingDensity('hard'));
              } else {
                const R = this.app.getPageCollection().prevBy(this.flippingPage);
                R !== null && this.flippingPage.getDensity() !== R.getDensity() && (this.flippingPage.setDrawingDensity('hard'), R.setDrawingDensity('hard'));
              }
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
          const A = this.app.getPageCollection().getCurrentSpreadIndex(); const
            C = this.app.getPageCollection().getSpreadIndexByPage(f);
          try {
            C > A && (this.app.getPageCollection().setCurrentSpreadIndex(C - 1), this.flipNext(m)), C < A && (this.app.getPageCollection().setCurrentSpreadIndex(C + 1), this.flipPrev(m));
          } catch {
          }
        }

        flipNext(f) {
          this.flip({ x: this.render.getRect().left + 2 * this.render.getRect().pageWidth - 10, y: f === 'top' ? 1 : this.render.getRect().height - 2 });
        }

        flipPrev(f) {
          this.flip({ x: 10, y: f === 'top' ? 1 : this.render.getRect().height - 2 });
        }

        stopMove() {
          if (this.calc === null) return;
          const f = this.calc.getPosition(); const m = this.getBoundsRect(); const
            A = this.calc.getCorner() === 'bottom' ? m.height : 0;
          f.x <= 0 ? this.animateFlippingTo(f, { x: -m.pageWidth, y: A }, !0) : this.animateFlippingTo(f, { x: m.pageWidth, y: A }, !1);
        }

        showCorner(f) {
          if (!this.checkState('read', 'fold_corner')) return;
          const m = this.getBoundsRect(); const
            A = m.pageWidth;
          if (this.isPointOnCorners(f)) {
            if (this.calc === null) {
              if (!this.start(f)) return;
              this.setState('fold_corner'), this.calc.calc({ x: A - 1, y: 1 });
              const C = 50; const P = this.calc.getCorner() === 'bottom' ? m.height - 1 : 1; const
                R = this.calc.getCorner() === 'bottom' ? m.height - C : C;
              this.animateFlippingTo({ x: A - 1, y: P }, { x: A - C, y: R }, !1, !1);
            } else this.do(this.render.convertToPage(f));
          } else this.setState('read'), this.render.finishAnimation(), this.stopMove();
        }

        animateFlippingTo(f, m, A, C = !0) {
          const P = o.GetCordsFromTwoPoint(f, m); const
            R = [];
          for (const k of P) R.push(() => this.do(k));
          const D = this.getAnimationDuration(P.length);
          this.render.startAnimation(R, D, () => {
            this.calc && (A && (this.calc.getDirection() === 1 ? this.app.turnToPrevPage() : this.app.turnToNextPage()), C && (this.render.setBottomPage(null), this.render.setFlippingPage(null), this.render.clearShadow(), this.setState('read'), this.reset()));
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
          if (this.render.getOrientation() === 'portrait') {
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
          const m = this.getBoundsRect(); const A = m.pageWidth; const C = Math.sqrt(A ** 2 + m.height ** 2) / 5; const
            P = this.render.convertToBook(f);
          return P.x > 0 && P.y > 0 && P.x < m.width && P.y < m.height && (P.x < C || P.x > m.width - C) && (P.y < C || P.y > m.height - C);
        }
      }
      class p {
        constructor(f, m) {
          this.leftPage = null, this.rightPage = null, this.flippingPage = null, this.bottomPage = null, this.direction = null, this.orientation = null, this.shadow = null, this.animation = null, this.pageRect = null, this.boundsRect = null, this.timer = 0, this.safari = !1, this.setting = m, this.app = f;
          const A = new RegExp('Version\\/[\\d\\.]+.*Safari/');
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
          this.finishAnimation(), this.animation = {
            frames: f, duration: m, durationFrame: m / f.length, onAnimateEnd: A, startedAt: this.timer,
          };
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
          let f = 'landscape';
          const m = this.getBlockWidth(); const A = m / 2; const C = this.getBlockHeight() / 2; const
            P = this.setting.width / this.setting.height;
          let R = this.setting.width; let D = this.setting.height; let
            k = A - R;
          return this.setting.size === 'stretch' ? (m < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (f = 'portrait'), R = f === 'portrait' ? this.getBlockWidth() : this.getBlockWidth() / 2, R > this.setting.maxWidth && (R = this.setting.maxWidth), D = R / P, D > this.getBlockHeight() && (D = this.getBlockHeight(), R = D * P), k = f === 'portrait' ? A - R / 2 - R : A - R) : m < 2 * R && this.app.getSettings().usePortrait && (f = 'portrait', k = A - R / 2 - R), this.boundsRect = {
            left: k, top: C - D / 2, width: 2 * R, height: D, pageWidth: R,
          }, f;
        }

        setShadowData(f, m, A, C) {
          if (!this.app.getSettings().drawShadow) return;
          const P = 100 * this.getSettings().maxShadowOpacity;
          this.shadow = {
            pos: f, angle: m, width: 3 * this.getRect().pageWidth / 4 * A / 100, opacity: (100 - A) * P / 100 / 100, direction: C, progress: 2 * A,
          };
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
          f !== null && f.setOrientation(this.direction === 0 && this.orientation !== 'portrait' ? 0 : 1), this.flippingPage = f;
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
          return m || (m = this.direction), {
            topLeft: this.convertToGlobal(f.topLeft, m), topRight: this.convertToGlobal(f.topRight, m), bottomLeft: this.convertToGlobal(f.bottomLeft, m), bottomRight: this.convertToGlobal(f.bottomRight, m),
          };
        }
      }
      class y extends p {
        constructor(f, m, A) {
          super(f, m), this.canvas = A, this.ctx = A.getContext('2d');
        }

        getContext() {
          return this.ctx;
        }

        reload() {
        }

        drawFrame() {
          this.clear(), this.orientation !== 'portrait' && this.leftPage != null && this.leftPage.simpleDraw(0), this.rightPage != null && this.rightPage.simpleDraw(1), this.bottomPage != null && this.bottomPage.draw(), this.drawBookShadow(), this.flippingPage != null && this.flippingPage.draw(), this.shadow != null && (this.drawOuterShadow(), this.drawInnerShadow());
          const f = this.getRect();
          this.orientation === 'portrait' && (this.ctx.beginPath(), this.ctx.rect(f.left + f.pageWidth, f.top, f.width, f.height), this.ctx.clip());
        }

        drawBookShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const m = f.width / 20;
          this.ctx.rect(f.left, f.top, f.width, f.height);
          const A = { x: f.left + f.width / 2 - m / 2, y: 0 };
          this.ctx.translate(A.x, A.y);
          const C = this.ctx.createLinearGradient(0, 0, m, 0);
          C.addColorStop(0, 'rgba(0, 0, 0, 0)'), C.addColorStop(0.4, 'rgba(0, 0, 0, 0.2)'), C.addColorStop(0.49, 'rgba(0, 0, 0, 0.1)'), C.addColorStop(0.5, 'rgba(0, 0, 0, 0.5)'), C.addColorStop(0.51, 'rgba(0, 0, 0, 0.4)'), C.addColorStop(1, 'rgba(0, 0, 0, 0)'), this.ctx.clip(), this.ctx.fillStyle = C, this.ctx.fillRect(0, 0, m, 2 * f.height), this.ctx.restore();
        }

        drawOuterShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(f.left, f.top, f.width, f.height);
          const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y });
          this.ctx.translate(m.x, m.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const A = this.ctx.createLinearGradient(0, 0, this.shadow.width, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(0, -100), A.addColorStop(0, `rgba(0, 0, 0, ${this.shadow.opacity})`), A.addColorStop(1, 'rgba(0, 0, 0, 0)')) : (this.ctx.translate(-this.shadow.width, -100), A.addColorStop(0, 'rgba(0, 0, 0, 0)'), A.addColorStop(1, `rgba(0, 0, 0, ${this.shadow.opacity})`)), this.ctx.clip(), this.ctx.fillStyle = A, this.ctx.fillRect(0, 0, this.shadow.width, 2 * f.height), this.ctx.restore();
        }

        drawInnerShadow() {
          const f = this.getRect();
          this.ctx.save(), this.ctx.beginPath();
          const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }); const
            A = this.convertRectToGlobal(this.pageRect);
          this.ctx.moveTo(A.topLeft.x, A.topLeft.y), this.ctx.lineTo(A.topRight.x, A.topRight.y), this.ctx.lineTo(A.bottomRight.x, A.bottomRight.y), this.ctx.lineTo(A.bottomLeft.x, A.bottomLeft.y), this.ctx.translate(m.x, m.y), this.ctx.rotate(Math.PI + this.shadow.angle + Math.PI / 2);
          const C = 3 * this.shadow.width / 4; const
            P = this.ctx.createLinearGradient(0, 0, C, 0);
          this.shadow.direction === 0 ? (this.ctx.translate(-C, -100), P.addColorStop(1, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(0.9, 'rgba(0, 0, 0, 0.05)'), P.addColorStop(0.7, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(0, 'rgba(0, 0, 0, 0)')) : (this.ctx.translate(0, -100), P.addColorStop(0, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(0.1, 'rgba(0, 0, 0, 0.05)'), P.addColorStop(0.3, `rgba(0, 0, 0, ${this.shadow.opacity})`), P.addColorStop(1, 'rgba(0, 0, 0, 0)')), this.ctx.clip(), this.ctx.fillStyle = P, this.ctx.fillRect(0, 0, C, 2 * f.height), this.ctx.restore();
        }

        clear() {
          this.ctx.fillStyle = 'white', this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
              const R = P.changedTouches[0]; const
                D = this.getMousePos(R.clientX, R.clientY);
              this.touchPoint = { point: D, time: Date.now() }, setTimeout(() => {
                this.touchPoint !== null && this.app.startUserTouch(D);
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
              const R = P.changedTouches[0]; const
                D = this.getMousePos(R.clientX, R.clientY);
              this.app.getSettings().mobileScrollSupport ? (this.touchPoint !== null && (Math.abs(this.touchPoint.point.x - D.x) > 10 || this.app.getState() !== 'read') && P.cancelable && this.app.userMove(D, !0), this.app.getState() !== 'read' && P.preventDefault()) : this.app.userMove(D, !0);
            }
          }, this.onTouchEnd = (P) => {
            if (P.changedTouches.length > 0) {
              const R = P.changedTouches[0]; const
                D = this.getMousePos(R.clientX, R.clientY);
              let k = !1;
              if (this.touchPoint !== null) {
                const L = D.x - this.touchPoint.point.x; const
                  N = Math.abs(D.y - this.touchPoint.point.y);
                Math.abs(L) > this.swipeDistance && N < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (L > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom') : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom'), k = !0), this.touchPoint = null;
              }
              this.app.userStop(D, k);
            }
          }, this.parentElement = f, f.classList.add('stf__parent'), f.insertAdjacentHTML('afterbegin', '<div class="stf__wrapper"></div>'), this.wrapper = f.querySelector('.stf__wrapper'), this.app = m;
          const C = this.app.getSettings().usePortrait ? 1 : 2;
          f.style.minWidth = `${A.minWidth * C}px`, f.style.minHeight = `${A.minHeight}px`, A.size === 'fixed' && (f.style.minWidth = `${A.width * C}px`, f.style.minHeight = `${A.height}px`), A.autoSize && (f.style.width = '100%', f.style.maxWidth = `${2 * A.maxWidth}px`), f.style.display = 'block', window.addEventListener('resize', this.onResize, !1), this.swipeDistance = A.swipeDistance;
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
          this.wrapper.classList.remove('--portrait', '--landscape'), f === 'portrait' ? (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = `${this.app.getSettings().height / this.app.getSettings().width * 100}%`), this.wrapper.classList.add('--portrait')) : (this.app.getSettings().autoSize && (this.wrapper.style.paddingBottom = `${this.app.getSettings().height / (2 * this.app.getSettings().width) * 100}%`), this.wrapper.classList.add('--landscape')), this.update();
        }

        removeHandlers() {
          window.removeEventListener('resize', this.onResize), this.distElement.removeEventListener('mousedown', this.onMouseDown), this.distElement.removeEventListener('touchstart', this.onTouchStart), window.removeEventListener('mousemove', this.onMouseMove), window.removeEventListener('touchmove', this.onTouchMove), window.removeEventListener('mouseup', this.onMouseUp), window.removeEventListener('touchend', this.onTouchEnd);
        }

        setHandlers() {
          window.addEventListener('resize', this.onResize, !1), this.app.getSettings().useMouseEvents && (this.distElement.addEventListener('mousedown', this.onMouseDown), this.distElement.addEventListener('touchstart', this.onTouchStart), window.addEventListener('mousemove', this.onMouseMove), window.addEventListener('touchmove', this.onTouchMove, { passive: !this.app.getSettings().mobileScrollSupport }), window.addEventListener('mouseup', this.onMouseUp), window.addEventListener('touchend', this.onTouchEnd));
        }

        getMousePos(f, m) {
          const A = this.distElement.getBoundingClientRect();
          return { x: f - A.left, y: m - A.top };
        }

        checkTarget(f) {
          return !this.app.getSettings().clickEventForward || !['a', 'button'].includes(f.tagName.toLowerCase());
        }
      }
      class v extends S {
        constructor(f, m, A, C) {
          super(f, m, A), this.wrapper.insertAdjacentHTML('afterbegin', '<div class="stf__block"></div>'), this.distElement = f.querySelector('.stf__block'), this.items = C;
          for (const P of C) this.distElement.appendChild(P);
          this.setHandlers();
        }

        clear() {
          for (const f of this.items) this.parentElement.appendChild(f);
        }

        updateItems(f) {
          this.removeHandlers(), this.distElement.innerHTML = '';
          for (const m of f) this.distElement.appendChild(m);
          this.items = f, this.setHandlers();
        }

        update() {
          this.app.getRender().update();
        }
      }
      class _ extends S {
        constructor(f, m, A) {
          super(f, m, A), this.wrapper.innerHTML = '<canvas class="stf__canvas"></canvas>', this.canvas = f.querySelectorAll('canvas')[0], this.distElement = this.canvas, this.resizeCanvas(), this.setHandlers();
        }

        resizeCanvas() {
          const f = getComputedStyle(this.canvas); const m = parseInt(f.getPropertyValue('width'), 10); const
            A = parseInt(f.getPropertyValue('height'), 10);
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
          this.element.insertAdjacentHTML('beforeend', `<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`), this.outerShadow = this.element.querySelector('.stf__outerShadow'), this.innerShadow = this.element.querySelector('.stf__innerShadow'), this.hardShadow = this.element.querySelector('.stf__hardShadow'), this.hardInnerShadow = this.element.querySelector('.stf__hardInnerShadow');
        }

        clearShadow() {
          super.clearShadow(), this.outerShadow.style.cssText = 'display: none', this.innerShadow.style.cssText = 'display: none', this.hardShadow.style.cssText = 'display: none', this.hardInnerShadow.style.cssText = 'display: none';
        }

        reload() {
          this.element.querySelector('.stf__outerShadow') || this.createShadows();
        }

        drawHardInnerShadow() {
          const f = this.getRect(); const
            m = this.shadow.progress > 100 ? 200 - this.shadow.progress : this.shadow.progress;
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
          C += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? 'transform: translate3d(0, 0, 0);' : 'transform: translate3d(0, 0, 0) rotateY(180deg);', this.hardInnerShadow.style.cssText = C;
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
          A += this.getDirection() === 0 && this.shadow.progress > 100 || this.getDirection() === 1 && this.shadow.progress <= 100 ? 'transform: translate3d(0, 0, 0) rotateY(180deg);' : 'transform: translate3d(0, 0, 0);', this.hardShadow.style.cssText = A;
        }

        drawInnerShadow() {
          const f = this.getRect(); const m = 3 * this.shadow.width / 4; const A = this.getDirection() === 0 ? m : 0; const C = this.getDirection() === 0 ? 'to left' : 'to right'; const P = this.convertToGlobal(this.shadow.pos); const R = this.shadow.angle + 3 * Math.PI / 2; const
            D = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let k = 'polygon( ';
          for (const N of D) {
            let I = this.getDirection() === 1 ? { x: -N.x + this.shadow.pos.x, y: N.y - this.shadow.pos.y } : { x: N.x - this.shadow.pos.x, y: N.y - this.shadow.pos.y };
            I = o.GetRotatedPoint(I, { x: A, y: 100 }, R), k += `${I.x}px ${I.y}px, `;
          }
          k = k.slice(0, -2), k += ')';
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
          const f = this.getRect(); const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }); const A = this.shadow.angle + 3 * Math.PI / 2; const C = this.getDirection() === 1 ? this.shadow.width : 0; const P = this.getDirection() === 0 ? 'to right' : 'to left'; const
            R = [{ x: 0, y: 0 }, { x: f.pageWidth, y: 0 }, { x: f.pageWidth, y: f.height }, { x: 0, y: f.height }];
          let D = 'polygon( ';
          for (const L of R) {
            if (L !== null) {
              let N = this.getDirection() === 1 ? { x: -L.x + this.shadow.pos.x, y: L.y - this.shadow.pos.y } : { x: L.x - this.shadow.pos.x, y: L.y - this.shadow.pos.y };
              N = o.GetRotatedPoint(N, { x: C, y: 100 }, A), D += `${N.x}px ${N.y}px, `;
            }
          }
          D = D.slice(0, -2), D += ')';
          const k = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * f.height}px;
            background: linear-gradient(${P}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${C}px 100px;
            transform: translate3d(${m.x - C}px, ${m.y - 100}px, 0) rotate(${A}rad);
            clip-path: ${D};
            -webkit-clip-path: ${D};
        `;
          this.outerShadow.style.cssText = k;
        }

        drawLeftPage() {
          this.orientation !== 'portrait' && this.leftPage !== null && (this.direction === 1 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === 'hard' ? (this.leftPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.leftPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.leftPage.draw(this.flippingPage.getDrawingDensity())) : this.leftPage.simpleDraw(0));
        }

        drawRightPage() {
          this.rightPage !== null && (this.direction === 0 && this.flippingPage !== null && this.flippingPage.getDrawingDensity() === 'hard' ? (this.rightPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.rightPage.setHardDrawingAngle(180 + this.flippingPage.getHardAngle()), this.rightPage.draw(this.flippingPage.getDrawingDensity())) : this.rightPage.simpleDraw(1));
        }

        drawBottomPage() {
          if (this.bottomPage === null) return;
          const f = this.flippingPage != null ? this.flippingPage.getDrawingDensity() : null;
          this.orientation === 'portrait' && this.direction === 1 || (this.bottomPage.getElement().style.zIndex = (this.getSettings().startZIndex + 3).toString(10), this.bottomPage.draw(f));
        }

        drawFrame() {
          this.clear(), this.drawLeftPage(), this.drawRightPage(), this.drawBottomPage(), this.flippingPage != null && (this.flippingPage.getElement().style.zIndex = (this.getSettings().startZIndex + 5).toString(10), this.flippingPage.draw()), this.shadow != null && this.flippingPage !== null && (this.flippingPage.getDrawingDensity() === 'soft' ? (this.drawOuterShadow(), this.drawInnerShadow()) : (this.drawHardOuterShadow(), this.drawHardInnerShadow()));
        }

        clear() {
          for (const f of this.app.getPageCollection().getPages()) f !== this.leftPage && f !== this.rightPage && f !== this.flippingPage && f !== this.bottomPage && (f.getElement().style.cssText = 'display: none'), f.getTemporaryCopy() !== this.flippingPage && f.hideTemporaryCopy();
        }

        update() {
          super.update(), this.rightPage !== null && this.rightPage.setOrientation(1), this.leftPage !== null && this.leftPage.setOrientation(0);
        }
      }
      class T {
        constructor() {
          this._default = {
            startPage: 0, size: 'fixed', width: 0, height: 0, minWidth: 0, maxWidth: 0, minHeight: 0, maxHeight: 0, drawShadow: !0, flippingTime: 1e3, usePortrait: !0, startZIndex: 0, autoSize: !0, maxShadowOpacity: 1, showCover: !1, mobileScrollSupport: !0, swipeDistance: 30, clickEventForward: !0, useMouseEvents: !0, showPageCorners: !0, disableFlipByClick: !1,
          };
        }

        getSettings(f) {
          const m = this._default;
          if (Object.assign(m, f), m.size !== 'stretch' && m.size !== 'fixed') throw new Error('Invalid size type. Available only "fixed" and "stretch" value');
          if (m.width <= 0 || m.height <= 0) throw new Error('Invalid width or height');
          if (m.flippingTime <= 0) throw new Error('Invalid flipping time');
          return m.size === 'stretch' ? (m.minWidth <= 0 && (m.minWidth = 100), m.maxWidth < m.minWidth && (m.maxWidth = 2e3), m.minHeight <= 0 && (m.minHeight = 100), m.maxHeight < m.minHeight && (m.maxHeight = 2e3)) : (m.minWidth = m.width, m.maxWidth = m.width, m.minHeight = m.height, m.maxHeight = m.height), m;
        }
      }
      (function (E, f) {
        f === void 0 && (f = {});
        const m = f.insertAt;
        if (typeof document < 'u') {
          const A = document.head || document.getElementsByTagName('head')[0]; const
            C = document.createElement('style');
          C.type = 'text/css', m === 'top' && A.firstChild ? A.insertBefore(C, A.firstChild) : A.appendChild(C), C.styleSheet ? C.styleSheet.cssText = E : C.appendChild(document.createTextNode(E));
        }
      }(`.stf__parent {
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
}`)), e.PageFlip = class extends class {
        constructor() {
          this.events = /* @__PURE__ */ new Map();
        }

        on(E, f) {
          return this.events.has(E) ? this.events.get(E).push(f) : this.events.set(E, [f]), this;
        }

        off(E) {
          this.events.delete(E);
        }

        trigger(E, f, m = null) {
          if (this.events.has(E)) for (const A of this.events.get(E)) A({ data: m, object: f });
        }
      } {
        constructor(E, f) {
          super(), this.isUserTouch = !1, this.isUserMove = !1, this.setting = null, this.pages = null, this.setting = new T().getSettings(f), this.block = E;
        }

        destroy() {
          this.ui.destroy(), this.block.remove();
        }

        update() {
          this.render.update(), this.pages.show();
        }

        loadFromImages(E) {
          this.ui = new _(this.block, this, this.setting);
          const f = this.ui.getCanvas();
          this.render = new y(this, this.setting, f), this.flipController = new u(this.render, this), this.pages = new a(this, this.render, E), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger('init', this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }

        loadFromHTML(E) {
          this.ui = new v(this.block, this, this.setting, E), this.render = new x(this, this.setting, this.ui.getDistElement()), this.flipController = new u(this.render, this), this.pages = new l(this, this.render, this.ui.getDistElement(), E), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger('init', this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }

        updateFromImages(E) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new a(this, this.render, E), this.pages.load(), this.pages.show(f), this.trigger('update', this, { page: f, mode: this.render.getOrientation() });
        }

        updateFromHtml(E) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new l(this, this.render, this.ui.getDistElement(), E), this.pages.load(), this.ui.updateItems(E), this.render.reload(), this.pages.show(f), this.trigger('update', this, { page: f, mode: this.render.getOrientation() });
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

        turnToPage(E) {
          this.pages.show(E);
        }

        flipNext(E = 'top') {
          this.flipController.flipNext(E);
        }

        flipPrev(E = 'top') {
          this.flipController.flipPrev(E);
        }

        flip(E, f = 'top') {
          this.flipController.flipToPage(E, f);
        }

        updateState(E) {
          this.trigger('changeState', this, E);
        }

        updatePageIndex(E) {
          this.trigger('flip', this, E);
        }

        updateOrientation(E) {
          this.ui.setOrientationStyle(E), this.update(), this.trigger('changeOrientation', this, E);
        }

        getPageCount() {
          return this.pages.getPageCount();
        }

        getCurrentPageIndex() {
          return this.pages.getCurrentPageIndex();
        }

        getPage(E) {
          return this.pages.getPage(E);
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

        startUserTouch(E) {
          this.mousePosition = E, this.isUserTouch = !0, this.isUserMove = !1;
        }

        userMove(E, f) {
          this.isUserTouch || f || !this.setting.showPageCorners ? this.isUserTouch && o.GetDistanceBetweenTwoPoint(this.mousePosition, E) > 5 && (this.isUserMove = !0, this.flipController.fold(E)) : this.flipController.showCorner(E);
        }

        userStop(E, f = !1) {
          this.isUserTouch && (this.isUserTouch = !1, f || (this.isUserMove ? this.flipController.stopMove() : this.flipController.flip(E)));
        }
      }, Object.defineProperty(e, '__esModule', { value: !0 });
    })));
  }(Sl, Sl.exports))), Sl.exports;
}
const NA = FA();
const OA = tl.forwardRef((c, t) => {
  const e = Ai(null); const i = Ai([]); const s = Ai(); const
    [r, a] = eo([]);
  Kg(t, () => ({
    pageFlip: () => s.current,
  }));
  const o = Is(() => {
    s.current && s.current.clear();
  }, []); const
    h = Is(() => {
      const l = s.current;
      l && (l.off('flip'), l.off('changeOrientation'), l.off('changeState'), l.off('init'), l.off('update'));
    }, []);
  return xt(() => {
    if (i.current = [], c.children) {
      const l = tl.Children.map(c.children, (d) => tl.cloneElement(d, {
        ref: (u) => {
          u && i.current.push(u);
        },
      }));
      (!c.renderOnlyPageLengthChange || r.length !== l.length) && (l.length < r.length && o(), a(l));
    }
  }, [c.children]), xt(() => {
    const l = () => {
      const d = s.current;
      d && (c.onFlip && d.on('flip', (u) => c.onFlip(u)), c.onChangeOrientation && d.on('changeOrientation', (u) => c.onChangeOrientation(u)), c.onChangeState && d.on('changeState', (u) => c.onChangeState(u)), c.onInit && d.on('init', (u) => c.onInit(u)), c.onUpdate && d.on('update', (u) => c.onUpdate(u)));
    };
    r.length > 0 && i.current.length > 0 && (h(), e.current && !s.current && (s.current = new NA.PageFlip(e.current, c)), s.current.getFlipController() ? s.current.updateFromHtml(i.current) : s.current.loadFromHTML(i.current), l());
  }, [r]), tl.createElement('div', { ref: e, className: c.className, style: c.style }, r);
}); const BA = tl.memo(OA); const
  HA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: BA,
  }, Symbol.toStringTag, { value: 'Module' }));
export {
  WA as default,
};
