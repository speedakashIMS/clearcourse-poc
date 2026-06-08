import { jsxs as En, jsx as L } from 'react/jsx-runtime';
import * as Vt from 'react';
import ih, {
  lazy as Gy, Suspense as zy, useState as In, useRef as $e, useEffect as bt, useCallback as Fs, forwardRef as Jg, createContext as Qg, useReducer as Wy, useImperativeHandle as tm, useMemo as ss, useContext as em, useLayoutEffect as jy,
} from 'react';
import Vy from 'lottie-react';

const $y = Object.defineProperty;
const cg = (c) => {
  throw TypeError(c);
};
const Uy = (c, t, e) => (t in c ? $y(c, t, {
  enumerable: !0, configurable: !0, writable: !0, value: e,
}) : c[t] = e);
const M = (c, t, e) => Uy(c, typeof t !== 'symbol' ? `${t}` : t, e); const
  ef = (c, t, e) => t.has(c) || cg(`Cannot ${e}`);
const n = (c, t, e) => (ef(c, t, 'read from private field'), e ? e.call(c) : t.get(c)); const b = (c, t, e) => (t.has(c) ? cg('Cannot add the same private member more than once') : t instanceof WeakSet ? t.add(c) : t.set(c, e)); const g = (c, t, e, i) => (ef(c, t, 'write to private field'), i ? i.call(c, e) : t.set(c, e), e); const
  w = (c, t, e) => (ef(c, t, 'access private method'), e);
const Zt = (c, t, e, i) => ({
  set _(s) {
    g(c, t, s, e);
  },
  get _() {
    return n(c, t, i);
  },
});

const qy = ({
  variant: c = 'form-only',
  form: t,
  content: e,
  formAlignment: i = 'left',
}) => {
  const s = ['form-only', 'form-media', 'form-text', 'form-accordion'].includes(c) ? c : 'form-only';
  const r = ['left', 'right'].includes(i) ? i : 'left';
  const a = () => (s === 'form-only' ? 'w-full xl:w-1/2 xl:mx-auto' : 'w-full xl:w-1/2');
  const o = () => (s === 'form-only' ? 'w-full' : `
        w-full flex flex-col gap-section-spacing-y xl:flex-row xl:container
        ${s !== 'form-media' ? 'max-xl:container' : ''}
      `);
  const l = () => (s === 'form-only' ? '' : `
     max-xl:container 
     ${c !== 'form-media' ? 'max-xl:px-0!' : ''}
      ${r === 'left' ? 'order-1' : 'order-2'}
    `);
  const h = () => (s === 'form-only' ? '' : r === 'left' ? 'order-2' : 'order-1');
  const d = o();
  const u = `${a()} ${l()}`;
  const p = `${a()} ${h()}`;
  return /* @__PURE__ */ En('div', {
    className: d,
    children: [
    /* @__PURE__ */ L('div', { className: u, children: t }),
      s !== 'form-only' && e && /* @__PURE__ */ L('div', { className: p, children: e }),
    ],
  });
}; const Xy = Gy(() => Promise.resolve().then(() => uw)); const
  im = ({
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
    flipbookUrl: l,
    title: h,
    className: d = '',
  }) => {
    let A;
    const u = typeof window < 'u' && window.location.origin.indexOf('author') > -1; const p = typeof window < 'u' && window.matchMedia('(prefers-reduced-motion: reduce)').matches; const S = `relative w-full h-full ${t === 'square' ? 'aspect-square' : t === 'rectangle' ? 'aspect-[4/3]' : c === 'video' ? 'aspect-video' : ''}`.trim(); const v = t === 'default' ? `w-full h-full ${d}`.trim() : `absolute inset-0 w-full h-full ${d}`.trim(); const _ = 'w-full h-full'; const x = t === 'default' ? `${v}`.trim() : v; const T = e === 'contain' ? 'object-contain' : 'object-cover'; const E = e === 'contain' ? 'xMidYMid meet' : 'xMidYMid slice'; const f = `relative w-full ${d}`.trim(); const
      m = 'w-full min-h-[280px]';
    switch (c) {
      case 'image':
        if (i) {
          return /* @__PURE__ */ L('div', {
            className: S,
            children: /* @__PURE__ */ L(
              'img',
              {
                src: i,
                alt: h || 'Media image',
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
              const k = new URL(P);
              return k.searchParams.set('autoplay', '0'), k.searchParams.set('mute', '0'), k.searchParams.set('playsinline', '1'), k.searchParams.set('controls', '1'), k.searchParams.set('rel', '0'), k.toString();
            } catch {
              return P.includes('?') ? P.includes('autoplay=') ? P : `${P}&autoplay=0` : `${P}?autoplay=0`;
            }
          })();
          return /* @__PURE__ */ L('div', {
            className: S,
            children: C ? /* @__PURE__ */ L(
              'iframe',
              {
                src: R,
                title: h || 'Video player',
                frameBorder: '0',
                allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                allowFullScreen: !0,
                className: `${v} ${T}`.trim(),
              },
            ) : /* @__PURE__ */ L(
              'video',
              {
                className: `${v} ${T}`.trim(),
                autoPlay: !1,
                controls: !0,
                playsInline: !0,
                preload: 'metadata',
                title: h || 'Video player',
                children: /* @__PURE__ */ L('source', { src: s }),
              },
            ),
          });
        }
        break;
      case 'lottie':
        if (a) {
          return u ? /* @__PURE__ */ L('div', {
            className: S,
            role: 'img',
            'aria-label': h || 'Animation',
            children: /* @__PURE__ */ L(
              'div',
              {
                className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${v}`.trim(),
                children: /* @__PURE__ */ L('div', { className: 'text-center', children: 'Lottie preview' }),
              },
            ),
          }) : /* @__PURE__ */ L(
            'div',
            {
              className: S,
              role: 'img',
              'aria-label': h || 'Animation',
              children: /* @__PURE__ */ L('div', {
                className: `${v} overflow-hidden`.trim(),
                children: /* @__PURE__ */ L(
                  Vy,
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
        if (r) return /* @__PURE__ */ L('div', { className: S, children: /* @__PURE__ */ L('div', { className: 'absolute inset-0 flex items-center justify-center text-body-default text-center p-40', children: 'Loading Lottie animation...' }) });
        break;
      case 'iframe':
        if (o) {
          return /* @__PURE__ */ L('div', {
            className: S,
            children: /* @__PURE__ */ L(
              'iframe',
              {
                src: o,
                title: h || 'Iframe content',
                frameBorder: '0',
                className: `${x} ${T}`.trim(),
              },
            ),
          });
        }
        break;
      case 'flipbook':
        if (l) {
          return u ? /* @__PURE__ */ L('div', {
            className: f,
            role: 'img',
            'aria-label': h || 'Flipbook',
            children: /* @__PURE__ */ L(
              'div',
              {
                className: `flex items-center justify-center text-body-default text-grey-600 bg-grey-100 ${m}`.trim(),
                children: /* @__PURE__ */ L('div', { className: 'text-center', children: 'Flipbook preview' }),
              },
            ),
          }) : /* @__PURE__ */ L('div', { className: f, children: /* @__PURE__ */ L('div', { className: m, children: /* @__PURE__ */ L(zy, { fallback: /* @__PURE__ */ L('div', { children: 'Loading PDF...' }), children: /* @__PURE__ */ L(Xy, { pdfUrl: l, title: h, className: 'w-full' }) }) }) });
        }
        break;
    }
    return /* @__PURE__ */ L('div', { className: S, children: /* @__PURE__ */ L('div', { className: `flex items-center justify-center text-body-default text-center p-40 ${t === 'default' ? '' : 'absolute inset-0'}`.trim(), children: c ? `${c.charAt(0).toUpperCase() + c.slice(1)} placeholder` : 'Image/Video/Lottie/iframe' }) });
  };
function Yy({
  title: c,
  titleId: t,
  ...e
}, i) {
  return /* @__PURE__ */ Vt.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: i,
    'aria-labelledby': t,
    ...e,
  }, c ? /* @__PURE__ */ Vt.createElement('title', {
    id: t,
  }, c) : null, /* @__PURE__ */ Vt.createElement('path', {
    fillRule: 'evenodd',
    d: 'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z',
    clipRule: 'evenodd',
  }));
}
const Ky = /* @__PURE__ */ Vt.forwardRef(Yy);
function Zy({
  title: c,
  titleId: t,
  ...e
}, i) {
  return /* @__PURE__ */ Vt.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: i,
    'aria-labelledby': t,
    ...e,
  }, c ? /* @__PURE__ */ Vt.createElement('title', {
    id: t,
  }, c) : null, /* @__PURE__ */ Vt.createElement('path', {
    fillRule: 'evenodd',
    d: 'M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z',
    clipRule: 'evenodd',
  }));
}
const dg = /* @__PURE__ */ Vt.forwardRef(Zy);
function Jy({
  title: c,
  titleId: t,
  ...e
}, i) {
  return /* @__PURE__ */ Vt.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: i,
    'aria-labelledby': t,
    ...e,
  }, c ? /* @__PURE__ */ Vt.createElement('title', {
    id: t,
  }, c) : null, /* @__PURE__ */ Vt.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75',
  }));
}
const Qy = /* @__PURE__ */ Vt.forwardRef(Jy);
function tw({
  title: c,
  titleId: t,
  ...e
}, i) {
  return /* @__PURE__ */ Vt.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: i,
    'aria-labelledby': t,
    ...e,
  }, c ? /* @__PURE__ */ Vt.createElement('title', {
    id: t,
  }, c) : null, /* @__PURE__ */ Vt.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  }), /* @__PURE__ */ Vt.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  }));
}
const ew = /* @__PURE__ */ Vt.forwardRef(tw);
function iw({
  title: c,
  titleId: t,
  ...e
}, i) {
  return /* @__PURE__ */ Vt.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: i,
    'aria-labelledby': t,
    ...e,
  }, c ? /* @__PURE__ */ Vt.createElement('title', {
    id: t,
  }, c) : null, /* @__PURE__ */ Vt.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z',
  }));
}
const sw = /* @__PURE__ */ Vt.forwardRef(iw);
function nw({
  title: c = '',
  content: t = '',
  media: e = null,
  // (optional) `Media` molecule props { media, imageUrl, videoUrl, etc. }
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in an `Accordion` component.
   *
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  colorVariant: i = 'dark',
  // 'dark' | 'light'
  className: s = '',
  iconPosition: r = 'left',
  // 'left' | 'right'
  hasIcon: a = !0,
  index: o = 0,
  attributes: l = {},
  ...h
}) {
  const [d, u] = In(!1); const [p, y] = In(0); const S = $e(null); const v = $e(null); const _ = h.rotateIcon ?? !0; const x = {
    text: i === 'dark' ? 'grey-950' : 'white',
    border: i === 'dark' ? 'grey-300' : 'grey-200',
  }; const
    T = () => {
      u(!d);
    };
  return bt(() => {
    if (v.current) {
      if (d) {
        const E = v.current.scrollHeight;
        y(E);
      } else y(0);
    }
  }, [d]), /* @__PURE__ */ En(
    'div',
    {
      className: `accordion-item ${s} text-${x.text}`,
      ...l ?? {},
      children: [
        /* @__PURE__ */ En(
          'button',
          {
            id: `accordion-trigger-${o}`,
            className: 'flex w-full p-accordion-header--padding justify-between items-center rounded-none cursor-pointer text-left focus:outline-none text-body-large',
            onClick: T,
            'aria-expanded': d,
            'aria-controls': `accordion-content-${o}`,
            children: [
              r === 'left' && a && /* @__PURE__ */ L(
                dg,
                {
                  className: `w-5 h-5 mr-10 transition-transform duration-200 shrink-0 ${d && _ ? 'rotate-180' : ''}`,
                },
              ),
              /* @__PURE__ */ En('div', {
                className: 'flex items-center gap-10 flex-1 min-w-0',
                children: [
                  e && /* @__PURE__ */ L('div', {
                    className: 'max-w-[138px] max-h-[62px] shrink-0',
                    children: /* @__PURE__ */ L(
                      im,
                      {
                        media: e.media || 'image',
                        aspect: 'default',
                        imageUrl: e.imageUrl,
                        videoUrl: e.videoUrl,
                        lottieUrl: e.lottieUrl,
                        lottieData: e.lottieData,
                        iframeUrl: e.iframeUrl,
                        title: e.title || c,
                        className: 'w-full h-full object-cover',
                      },
                    ),
                  }),
                  /* @__PURE__ */ L('span', { className: 'flex-1', children: c }),
                ],
              }),
              r === 'right' && a && /* @__PURE__ */ L(
                dg,
                {
                  className: `w-5 h-5 ml-10 transition-transform duration-200 shrink-0 ${d && _ ? 'rotate-180' : ''}`,
                },
              ),
            ],
          },
        ),
        /* @__PURE__ */ L(
          'div',
          {
            ref: S,
            id: `accordion-content-${o}`,
            role: 'region',
            'aria-labelledby': `accordion-trigger-${o}`,
            'aria-hidden': !d,
            className: `text-body-default overflow-hidden transition-[height] duration-300 ease-in-out border-b border-${x.border}`,
            style: {
              height: `${p}px`,
            },
            children: /* @__PURE__ */ L(
              'div',
              {
                ref: v,
                className: 'accordion-content-inner wysiwyg p-10 min-h-[120px]',
                children: typeof t === 'string' ? /* @__PURE__ */ L('div', { dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ L('div', { children: t }),
              },
            ),
          },
        ),
      ],
    },
  );
}
const rw = ({
  text: c = 'Button',
  href: t = void 0,
  variant: e = 'light',
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: i = 'btn-md',
  // btn-sm , btn-md
  className: s = '',
  disabled: r = !1,
  onClick: a = void 0,
  attributes: o = {},
  ...l
}) => {
  const d = (y) => {
    switch (y) {
      case 'light':
        return 'btn-light';
      case 'dark':
        return 'btn-dark';
      case 'light-outlined':
        return 'btn-light-outlined';
      case 'dark-outlined':
        return 'btn-dark-outlined';
      case 'light-no-outline':
        return 'btn-light-no-outline';
      case 'dark-no-outline':
        return 'btn-dark-no-outline';
      default:
        return 'btn-light';
    }
  }; const u = (y) => {
    switch (y) {
      case 'btn-sm':
        return 'btn-sm';
      case 'btn-md':
        return 'btn-md';
      default:
        return 'btn-md';
    }
  }; const
    p = `btn ${d(e)} ${u(i)} ${s}`.trim();
  return t ? /* @__PURE__ */ L(
    'a',
    {
      href: t,
      className: p,
      onClick: a,
      ...l,
      ...o ?? {},
      children: c,
    },
  ) : /* @__PURE__ */ L(
    'button',
    {
      type: l.type || 'button',
      className: p,
      disabled: r,
      onClick: a,
      ...l,
      ...o ?? {},
      children: c,
    },
  );
}; const ug = {
  primary: 'text-grey-950',
  secondary: 'text-grey-700',
  tertiary: 'text-grey-500',
}; const fg = {
  address: ew,
  phone: sw,
  email: Qy,
}; const aw = (c) => (c && typeof c === 'string' && fg[c] ? fg[c] : null); const ow = (c) => {
  let i;
  if (!c) return null;
  const t = c.contactItems ?? c.addressItems;
  return /* @__PURE__ */ En('div', {
    className: 'space-y-4 text-grey-950 xl:p-24',
    children: [
      (() => {
        let s;
        return (s = c.titleItems) != null && s.length ? /* @__PURE__ */ L('h3', {
          className: 'text-headings-h3 font-semibold leading-tight',
          children: c.titleItems.map((r, a) => {
            const o = r.fontStyle === 'accent' ? 'font-accent' : '';
            const l = ug[r.color] ?? ug.primary;
            return /* @__PURE__ */ L('span', { className: `${o} ${l}`.trim(), children: r.text }, a);
          }),
        }) : c.title ? /* @__PURE__ */ L('h3', { className: 'text-headings-h3 font-semibold', children: c.title }) : null;
      })(),
      c.text && /* @__PURE__ */ L('div', { className: 'text-body-default mt-10', children: c.text }),
      c.description && /* @__PURE__ */ L('p', { className: 'text-body-default mt-10', children: c.description }),
      c.html && /* @__PURE__ */ L(
        'div',
        {
          className: 'text-body-default mt-10 [&_a]:underline',
          dangerouslySetInnerHTML: { __html: c.html },
        },
      ),
      c.checkItems && /* @__PURE__ */ L('ul', {
        className: 'space-y-10 mt-20',
        children: c.checkItems.map((s, r) => /* @__PURE__ */ En('li', {
          className: 'flex items-start gap-10 text-body-large',
          children: [
            /* @__PURE__ */ L(Ky, { className: 'w-5 h-5 text-grey-950 shrink-0 mt-1' }),
            /* @__PURE__ */ L('span', { children: s }),
          ],
        }, r)),
      }),
      (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ L('ul', {
        className: 'space-y-10 mt-20',
        children: t.map((s, r) => {
          const a = aw(s.icon);
          let o;
          return s.html ? o = s.href ? /* @__PURE__ */ L(
            'a',
            {
              href: s.href,
              className: 'text-body-large text-grey-950 underline hover:opacity-80',
              dangerouslySetInnerHTML: { __html: s.html },
            },
          ) : /* @__PURE__ */ L(
            'span',
            {
              className: 'text-body-large [&_a]:underline',
              dangerouslySetInnerHTML: { __html: s.html },
            },
          ) : s.href ? o = /* @__PURE__ */ L(
            'a',
            {
              href: s.href,
              className: 'text-body-large text-grey-950 underline hover:opacity-80',
              children: s.text,
            },
          ) : o = /* @__PURE__ */ L('span', { className: 'text-body-large', children: s.text }), /* @__PURE__ */ En('li', {
            className: 'flex items-start gap-10',
            children: [
              a && /* @__PURE__ */ L(a, { className: 'w-5 h-5 text-grey-950 shrink-0 mt-1', 'aria-hidden': !0 }),
              /* @__PURE__ */ L('div', { children: o }),
            ],
          }, r);
        }),
      }),
      ((i = c.button) == null ? void 0 : i.text) && /* @__PURE__ */ L('div', {
        className: 'mt-20',
        children: /* @__PURE__ */ L(
          rw,
          {
            text: c.button.text,
            href: c.button.href,
            variant: c.button.variant ?? 'dark',
            size: c.button.size ?? 'btn-md',
            className: c.button.className ?? '',
            onClick: c.button.onClick,
            attributes: c.button.attributes ?? {},
          },
        ),
      }),
    ],
  });
}; const
  lv = ({
    variant: c = 'form-only',
    formAlignment: t = 'left',
    media: e,
    accordions: i = [],
    textContent: s,
    form: r = null,
  }) => {
    const a = ['form-only', 'form-media', 'form-text', 'form-accordion'].includes(c) ? c : 'form-only';
    const o = ['left', 'right'].includes(t) ? t : 'left';
    return /* @__PURE__ */ L(
      qy,
      {
        variant: a,
        formAlignment: o,
        form: r,
        content: (() => {
          switch (a) {
            case 'form-media':
              return e ? /* @__PURE__ */ L('div', {
                className: 'h-auto',
                children: /* @__PURE__ */ L(
                  im,
                  {
                    media: e.media || 'image',
                    aspect: e.aspect || 'default',
                    imageUrl: e.imageUrl,
                    videoUrl: e.videoUrl,
                    lottieUrl: e.lottieUrl,
                    lottieData: e.lottieData,
                    iframeUrl: e.iframeUrl,
                    title: e.title,
                  },
                ),
              }) : null;
            case 'form-text':
              return ow(s);
            case 'form-accordion':
              return i.length > 0 ? /* @__PURE__ */ L('div', {
                children: i.map((h, d) => /* @__PURE__ */ L(
                  nw,
                  {
                    title: h.title,
                    content: h.content,
                    index: d,
                    iconPosition: 'right',
                    ...h,
                  },
                  d,
                )),
              }) : null;
            case 'form-only':
            default:
              return null;
          }
        })(),
      },
    );
  };
let ff; let sm; let pf; let
  Ed;
const lw = async () => {
  if (!Ed) {
    const c = await Promise.resolve().then(() => ZA);
    Ed = c.pdfjs, sm = c.Document, pf = c.Page, Ed.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${Ed.version}/build/pdf.worker.min.mjs`;
  }
}; const hw = async () => {
  ff || (ff = (await Promise.resolve().then(() => sv)).default);
}; const cw = Jg(({ children: c }, t) => /* @__PURE__ */ L('div', { ref: t, className: 'w-full h-full overflow-hidden', children: c })); const dw = ({
  pdfUrl: c, title: t, width: e = 280, height: i = 280, className: s = '',
}) => {
  const [r, a] = In(0); const [o, l] = In(null); const [h, d] = In(!0); const [u, p] = In(i / e); const [y, S] = In(0); const
    v = $e(null);
  bt(() => {
    Promise.all([lw(), hw()]).then(() => d(!1)).catch(() => {
      l('Failed to load flipbook');
    });
  }, []), bt(() => {
    const f = v.current;
    if (!f) return;
    const m = new ResizeObserver(([A]) => {
      const C = Math.floor(A.contentRect.width);
      C > 0 && S(C);
    });
    return m.observe(f), () => m.disconnect();
  }, [h]);
  const _ = y > 0 ? Math.floor(y / 2) : Math.floor(e / 2); const x = Math.round(_ * u); const T = Fs(async (f) => {
    try {
      const A = (await f.getPage(1)).getViewport({ scale: 1 });
      A != null && A.width && (A != null && A.height) && p(A.height / A.width);
    } catch {
    }
    a(f.numPages || 0);
  }, []); const
    E = Fs((f) => {
      l((f == null ? void 0 : f.message) || 'Failed to load PDF');
    }, []);
  return o ? /* @__PURE__ */ L('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Failed to load flipbook' }) : h ? /* @__PURE__ */ L('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }) : /* @__PURE__ */ L('div', {
    ref: v,
    className: `w-full ${s}`.trim(),
    children: /* @__PURE__ */ En(
      sm,
      {
        file: c,
        onLoadSuccess: T,
        onLoadError: E,
        loading: /* @__PURE__ */ L('div', { className: 'flex items-center justify-center text-body-default text-center p-40', children: 'Loading flipbook...' }),
        children: [
          r === 1 && /* @__PURE__ */ L(
            'div',
            {
              className: `w-full flex justify-center items-center ${s}`.trim(),
              style: { minHeight: `${x}px` },
              children: /* @__PURE__ */ L(pf, {
                pageNumber: 1, width: e, renderTextLayer: !1, renderAnnotationLayer: !1,
              }),
            },
          ),
          r > 1 && /* @__PURE__ */ L(
            ff,
            {
              width: _,
              height: x,
              size: 'stretch',
              showCover: !0,
              mobileScrollSupport: !1,
              'aria-label': t || 'Flipbook',
              children: Array.from({ length: r }, (f, m) => /* @__PURE__ */ L(cw, {
                children: /* @__PURE__ */ L(pf, {
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
}; const uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dw,
}, Symbol.toStringTag, { value: 'Module' })); const He = typeof process === 'object' && `${process}` == '[object process]' && !process.versions.nw && !(process.versions.electron && process.type && process.type !== 'browser'); const gf = [1e-3, 0, 0, 1e-3, 0, 0]; const sf = 1.35; const wi = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256,
}; const Ls = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3,
}; const Ch = 'pdfjs_internal_editor_'; const q = {
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
}; const nm = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048,
}; const fe = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4,
}; const _h = {
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
}; const no = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5,
}; const pd = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5,
}; const ql = {
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
}; const _d = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  closePath: 3,
}; const
  rm = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2,
  };
let Wu = pd.WARNINGS;
function fw(c) {
  Number.isInteger(c) && (Wu = c);
}
function pw() {
  return Wu;
}
function ju(c) {
  Wu >= pd.INFOS && console.info(`Info: ${c}`);
}
function X(c) {
  Wu >= pd.WARNINGS && console.warn(`Warning: ${c}`);
}
function Et(c) {
  throw new Error(c);
}
function nt(c, t) {
  c || Et(t);
}
function gw(c) {
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
function Gp(c, t = null, e = null) {
  if (!c) return null;
  if (e && typeof c === 'string') {
    if (e.addDefaultProtocol && c.startsWith('www.')) {
      const s = c.match(/\./g);
      (s == null ? void 0 : s.length) >= 2 && (c = `http://${c}`);
    }
    if (e.tryConvertEncoding) {
      try {
        c = Aw(c);
      } catch {
      }
    }
  }
  const i = t ? URL.parse(c, t) : URL.parse(c);
  return gw(i) ? i : null;
}
function zp(c, t, e = !1) {
  const i = URL.parse(c);
  return i ? (i.hash = t, i.href) : e && Gp(c, 'http://example.com') ? `${c.split('#', 1)[0]}${t ? `#${t}` : ''}` : '';
}
function Z(c, t, e, i = !1) {
  return Object.defineProperty(c, t, {
    value: e,
    enumerable: !i,
    configurable: !0,
    writable: !1,
  }), e;
}
const to = (function () {
  function t(e, i) {
    this.message = e, this.name = i;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}());
class pg extends to {
  constructor(t, e) {
    super(t, 'PasswordException'), this.code = e;
  }
}
class nf extends to {
  constructor(t, e) {
    super(t, 'UnknownErrorException'), this.details = e;
  }
}
class fu extends to {
  constructor(t) {
    super(t, 'InvalidPDFException');
  }
}
class Th extends to {
  constructor(t, e, i) {
    super(t, 'ResponseException'), this.status = e, this.missing = i;
  }
}
class mw extends to {
  constructor(t) {
    super(t, 'FormatError');
  }
}
class Tn extends to {
  constructor(t) {
    super(t, 'AbortException');
  }
}
function am(c) {
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
function gd(c) {
  typeof c !== 'string' && Et('Invalid argument for stringToBytes');
  const t = c.length; const
    e = new Uint8Array(t);
  for (let i = 0; i < t; ++i) e[i] = c.charCodeAt(i) & 255;
  return e;
}
function bw(c) {
  return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
}
function yw() {
  const c = new Uint8Array(4);
  return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
}
function ww() {
  try {
    return new Function(''), !0;
  } catch {
    return !1;
  }
}
class de {
  static get isLittleEndian() {
    return Z(this, 'isLittleEndian', yw());
  }

  static get isEvalSupported() {
    return Z(this, 'isEvalSupported', ww());
  }

  static get isOffscreenCanvasSupported() {
    return Z(this, 'isOffscreenCanvasSupported', typeof OffscreenCanvas < 'u');
  }

  static get isImageDecoderSupported() {
    return Z(this, 'isImageDecoderSupported', typeof ImageDecoder < 'u');
  }

  static get platform() {
    const {
      platform: t,
      userAgent: e,
    } = navigator;
    return Z(this, 'platform', {
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
    return Z(this, 'isCSSRoundSupported', (e = (t = globalThis.CSS) == null ? void 0 : t.supports) == null ? void 0 : e.call(t, 'width: round(1.5px, 1px)'));
  }
}
const rf = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, '0'));
let _n; let Fd; let
  mf;
class G {
  static makeHexColor(t, e, i) {
    return `#${rf[t]}${rf[e]}${rf[i]}`;
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
    const s = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const l = e[4]; const
      h = e[5];
    for (let d = 0; d < 6; d += 2) {
      const u = t[i + d]; const
        p = t[i + d + 1];
      t[i + d] = u * s + p * a + l, t[i + d + 1] = u * r + p * o + h;
    }
  }

  static applyInverseTransform(t, e) {
    const i = t[0]; const s = t[1]; const
      r = e[0] * e[3] - e[1] * e[2];
    t[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }

  static axialAlignedBoundingBox(t, e, i) {
    const s = e[0]; const r = e[1]; const a = e[2]; const o = e[3]; const l = e[4]; const h = e[5]; const d = t[0]; const u = t[1]; const p = t[2]; const
      y = t[3];
    let S = s * d + l; let v = S; let _ = s * p + l; let x = _; let T = o * u + h; let E = T; let f = o * y + h; let
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
    const i = t[0]; const s = t[1]; const r = t[2]; const a = t[3]; const o = i ** 2 + s ** 2; const l = i * r + s * a; const h = r ** 2 + a ** 2; const d = (o + h) / 2; const
      u = Math.sqrt(d ** 2 - (o * h - l ** 2));
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

  static bezierBoundingBox(t, e, i, s, r, a, o, l, h) {
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), w(this, _n, mf).call(this, t, i, r, o, e, s, a, l, 3 * (-t + 3 * (i - r) + o), 6 * (t - 2 * i + r), 3 * (i - t), h), w(this, _n, mf).call(this, t, i, r, o, e, s, a, l, 3 * (-e + 3 * (s - a) + l), 6 * (e - 2 * s + a), 3 * (s - e), h);
  }
}
_n = new WeakSet(), Fd = function (t, e, i, s, r, a, o, l, h, d) {
  if (h <= 0 || h >= 1) return;
  const u = 1 - h; const p = h * h; const y = p * h; const S = u * (u * (u * t + 3 * h * e) + 3 * p * i) + y * s; const
    v = u * (u * (u * r + 3 * h * a) + 3 * p * o) + y * l;
  d[0] = Math.min(d[0], S), d[1] = Math.min(d[1], v), d[2] = Math.max(d[2], S), d[3] = Math.max(d[3], v);
}, mf = function (t, e, i, s, r, a, o, l, h, d, u, p) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(d) >= 1e-12 && w(this, _n, Fd).call(this, t, e, i, s, r, a, o, l, -u / d, p);
    return;
  }
  const y = d ** 2 - 4 * u * h;
  if (y < 0) return;
  const S = Math.sqrt(y); const
    v = 2 * h;
  w(this, _n, Fd).call(this, t, e, i, s, r, a, o, l, (-d + S) / v, p), w(this, _n, Fd).call(this, t, e, i, s, r, a, o, l, (-d - S) / v, p);
}, b(G, _n);
function Aw(c) {
  return decodeURIComponent(escape(c));
}
let af = null; let
  gg = null;
function om(c) {
  return af || (af = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, gg = /* @__PURE__ */ new Map([['ﬅ', 'ſt']])), c.replaceAll(af, (t, e, i) => (e ? e.normalize('NFKC') : gg.get(i)));
}
function Wp() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  const c = new Uint8Array(32);
  return crypto.getRandomValues(c), am(c);
}
const jp = 'pdfjs_internal_id_';
function vw(c, t, e) {
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
  for (const l of r) if (!(typeof l === 'number' || o && l === null)) return !1;
  return !0;
}
function De(c, t, e) {
  return Math.min(Math.max(c, t), e);
}
function lm(c) {
  return Uint8Array.prototype.toBase64 ? c.toBase64() : btoa(am(c));
}
function Sw(c) {
  return Uint8Array.fromBase64 ? Uint8Array.fromBase64(c) : gd(atob(c));
}
typeof Promise.try !== 'function' && (Promise.try = function (c, ...t) {
  return new Promise((e) => {
    e(c(...t));
  });
});
typeof Math.sumPrecise !== 'function' && (Math.sumPrecise = function (c) {
  return c.reduce((t, e) => t + e, 0);
});
class Ph {
  static textContent(t) {
    const e = []; const
      i = {
        items: e,
        styles: /* @__PURE__ */ Object.create(null),
      };
    function s(r) {
      let l;
      if (!r) return;
      let a = null;
      const o = r.name;
      if (o === '#text') a = r.value;
      else if (Ph.shouldBuildText(o)) (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a,
      }), !!r.children) for (const h of r.children) s(h);
    }
    return s(t), i;
  }

  static shouldBuildText(t) {
    return !(t === 'textarea' || t === 'input' || t === 'option' || t === 'select');
  }
}
class Vp {
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
          const l = o.target.options; const
            h = l.selectedIndex === -1 ? '' : l[l.selectedIndex].value;
          s.setValue(e, {
            value: h,
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
    for (const [l, h] of Object.entries(a)) {
      if (h != null) {
        switch (l) {
          case 'class':
            h.length && t.setAttribute(l, h.join(' '));
            break;
          case 'dataId':
            break;
          case 'id':
            t.setAttribute('data-element-id', h);
            break;
          case 'style':
            Object.assign(t.style, h);
            break;
          case 'textContent':
            t.textContent = h;
            break;
          default:
            (!o || l !== 'href' && l !== 'newWindow') && t.setAttribute(l, h);
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
    const l = t.div;
    if (l.append(a), t.viewport) {
      const y = `matrix(${t.viewport.transform.join(',')})`;
      l.style.transform = y;
    }
    o && l.setAttribute('class', 'xfaLayer xfaFont');
    const h = [];
    if (s.children.length === 0) {
      if (s.value) {
        const y = document.createTextNode(s.value);
        a.append(y), o && Ph.shouldBuildText(s.name) && h.push(y);
      }
      return {
        textDivs: h,
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
        h.push(E), v.append(E);
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
        o && Ph.shouldBuildText(x) && h.push(E), T.append(E);
      }
    }
    for (const y of l.querySelectorAll('.xfaNonInteractive input, .xfaNonInteractive textarea')) y.setAttribute('readOnly', !0);
    return {
      textDivs: h,
    };
  }

  static update(t) {
    const e = `matrix(${t.viewport.transform.join(',')})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
}
const Bs = 'http://www.w3.org/2000/svg';
const Or = class Or {
};
M(Or, 'CSS', 96), M(Or, 'PDF', 72), M(Or, 'PDF_TO_CSS_UNITS', Or.CSS / Or.PDF);
const Pn = Or;
async function Kl(c, t = 'text') {
  if (sh(c, document.baseURI)) {
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
class md {
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
    const l = (t[2] + t[0]) / 2; const
      h = (t[3] + t[1]) / 2;
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
    d === 0 ? (S = Math.abs(h - t[1]) * i + r, v = Math.abs(l - t[0]) * i + a, _ = (t[3] - t[1]) * i, x = (t[2] - t[0]) * i) : (S = Math.abs(l - t[0]) * i + r, v = Math.abs(h - t[1]) * i + a, _ = (t[2] - t[0]) * i, x = (t[3] - t[1]) * i), this.transform = [d * i, u * i, p * i, y * i, S - d * i * l - p * i * h, v - u * i * l - y * i * h], this.width = _, this.height = x;
  }

  get rawDims() {
    const t = this.viewBox;
    return Z(this, 'rawDims', {
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
    return new md({
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
    return G.applyTransform(i, this.transform), i;
  }

  convertToViewportRectangle(t) {
    const e = [t[0], t[1]];
    G.applyTransform(e, this.transform);
    const i = [t[2], t[3]];
    return G.applyTransform(i, this.transform), [e[0], e[1], i[0], i[1]];
  }

  convertToPdfPoint(t, e) {
    const i = [t, e];
    return G.applyInverseTransform(i, this.transform), i;
  }
}
class Vu extends to {
  constructor(t, e = 0) {
    super(t, 'RenderingCancelledException'), this.extraDelay = e;
  }
}
function bd(c) {
  const t = c.length;
  let e = 0;
  for (; e < t && c[e].trim() === '';) e++;
  return c.substring(e, e + 5).toLowerCase() === 'data:';
}
function qu(c) {
  return typeof c === 'string' && /\.pdf$/i.test(c);
}
function hm(c) {
  return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf('/') + 1);
}
function cm(c, t = 'document.pdf') {
  if (typeof c !== 'string') return t;
  if (bd(c)) return X('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
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
      let l = decodeURIComponent(o);
      return l.includes('/') ? (l = l.split('/').at(-1), l.test(/^\.pdf$/i) ? l : o) : l;
    } catch {
      return o;
    }
  }; const r = /\.pdf$/i; const
    a = i.pathname.split('/').at(-1);
  if (r.test(a)) return s(a);
  if (i.searchParams.size > 0) {
    const o = Array.from(i.searchParams.values()).reverse();
    for (const h of o) if (r.test(h)) return s(h);
    const l = Array.from(i.searchParams.keys()).reverse();
    for (const h of l) if (r.test(h)) return s(h);
  }
  if (i.hash) {
    const l = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
    if (l) return s(l[0]);
  }
  return t;
}
class mg {
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
function sh(c, t) {
  const e = t ? URL.parse(c, t) : URL.parse(c);
  return (e == null ? void 0 : e.protocol) === 'http:' || (e == null ? void 0 : e.protocol) === 'https:';
}
function xi(c) {
  c.preventDefault();
}
function Nt(c) {
  c.preventDefault(), c.stopPropagation();
}
function xw(c) {
  console.log(`Deprecated API usage: ${c}`);
}
let Ih;
class Rh {
  static toDateObject(t) {
    if (t instanceof Date) return t;
    if (!t || typeof t !== 'string') return null;
    n(this, Ih) || g(this, Ih, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Ih).exec(t);
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
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || 'Z';
    let d = parseInt(e[8], 10);
    d = d >= 0 && d <= 23 ? d : 0;
    let u = parseInt(e[9], 10) || 0;
    return u = u >= 0 && u <= 59 ? u : 0, h === '-' ? (a += d, o += u) : h === '+' && (a -= d, o -= u), new Date(Date.UTC(i, s, r, a, o, l));
  }
}
Ih = new WeakMap(), b(Rh, Ih);
function dm(c, {
  scale: t = 1,
  rotation: e = 0,
}) {
  const {
    width: i,
    height: s,
  } = c.attributes.style; const
    r = [0, 0, parseInt(i), parseInt(s)];
  return new md({
    viewBox: r,
    userUnit: 1,
    scale: t,
    rotation: e,
  });
}
function Zl(c) {
  if (c.startsWith('#')) {
    const t = parseInt(c.slice(1), 16);
    return [(t & 16711680) >> 16, (t & 65280) >> 8, t & 255];
  }
  return c.startsWith('rgb(') ? c.slice(4, -1).split(',').map((t) => parseInt(t)) : c.startsWith('rgba(') ? c.slice(5, -1).split(',').map((t) => parseInt(t)).slice(0, 3) : (X(`Not a valid color format: "${c}"`), [0, 0, 0]);
}
function Ew(c) {
  const t = document.createElement('span');
  t.style.visibility = 'hidden', t.style.colorScheme = 'only light', document.body.append(t);
  for (const e of c.keys()) {
    t.style.color = e;
    const i = window.getComputedStyle(t).color;
    c.set(e, Zl(i));
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
function os(c) {
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
function Rr(c, t, e = !1, i = !0) {
  if (t instanceof md) {
    const {
      pageWidth: s,
      pageHeight: r,
    } = t.rawDims; const {
      style: a,
    } = c; const o = de.isCSSRoundSupported; const l = `var(--total-scale-factor) * ${s}px`; const h = `var(--total-scale-factor) * ${r}px`; const d = o ? `round(down, ${l}, var(--scale-round-x))` : `calc(${l})`; const
      u = o ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    !e || t.rotation % 180 === 0 ? (a.width = d, a.height = u) : (a.width = u, a.height = d);
  }
  i && c.setAttribute('data-main-rotation', t.rotation);
}
class ns {
  constructor() {
    const {
      pixelRatio: t,
    } = ns;
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
      l = 1 / 0;
    i = ns.capPixels(i, r), i > 0 && (a = Math.sqrt(i / (t * e))), s !== -1 && (o = s / t, l = s / e);
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
const pu = ['image/apng', 'image/avif', 'image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/x-icon'];
class _w {
  static get isDarkMode() {
    let t;
    return Z(this, 'isDarkMode', !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, '(prefers-color-scheme: dark)').matches));
  }
}
class um {
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
    return t.remove(), Z(this, 'commentForegroundColor', Zl(i));
  }
}
function fm(c, t, e, i) {
  i = Math.min(Math.max(i ?? 1, 0), 1);
  const s = 255 * (1 - i);
  return c = Math.round(c * i + s), t = Math.round(t * i + s), e = Math.round(e * i + s), [c, t, e];
}
function bg(c, t) {
  const e = c[0] / 255; const i = c[1] / 255; const s = c[2] / 255; const r = Math.max(e, i, s); const a = Math.min(e, i, s); const
    o = (r + a) / 2;
  if (r === a) t[0] = t[1] = 0;
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
function bf(c, t) {
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
function yg(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function wg(c, t, e) {
  bf(c, e), e.map(yg);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  bf(t, e), e.map(yg);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return i > s ? (i + 0.05) / (s + 0.05) : (s + 0.05) / (i + 0.05);
}
const Ag = /* @__PURE__ */ new Map();
function pm(c, t) {
  const e = c[0] + c[1] * 256 + c[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let i = Ag.get(e);
  if (i) return i;
  const s = new Float32Array(9); const r = s.subarray(0, 3); const
    a = s.subarray(3, 6);
  bg(c, a);
  const o = s.subarray(6, 9);
  bg(t, o);
  const l = o[2] < 0.5; const
    h = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), wg(a, o, r) < h) {
    let d; let
      u;
    l ? (d = a[2], u = 1) : (d = 0, u = a[2]);
    const p = 5e-3;
    for (; u - d > p;) {
      const y = a[2] = (d + u) / 2;
      l === wg(a, o, r) < h ? d = y : u = y;
    }
    a[2] = l ? u : d;
  }
  return bf(a, r), i = G.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), Ag.set(e, i), i;
}
function qp({
  html: c,
  dir: t,
  className: e,
}, i) {
  const s = document.createDocumentFragment();
  if (typeof c === 'string') {
    const r = document.createElement('p');
    r.dir = t || 'auto';
    const a = c.split(/(?:\r\n?|\n)/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const h = a[o];
      r.append(document.createTextNode(h)), o < l - 1 && r.append(document.createElement('br'));
    }
    s.append(r);
  } else {
    Vp.render({
      xfaHtml: c,
      div: s,
      intent: 'richText',
    });
  }
  s.firstChild.classList.add('richText', e), i.append(s);
}
let Fn; let Nn; let Ci; let Ti; let Fh; let On; let vo; let So; let Nh; let _u; let gm; let ve; let mm; let bm; let ro; let
  nh;
const Us = class Us {
  constructor(t) {
    b(this, ve);
    b(this, Fn, null);
    b(this, Nn, null);
    b(this, Ci);
    b(this, Ti, null);
    b(this, Fh, null);
    b(this, On, null);
    b(this, vo, null);
    b(this, So, null);
    g(this, Ci, t), n(Us, Nh) || g(Us, Nh, Object.freeze({
      freetext: 'pdfjs-editor-remove-freetext-button',
      highlight: 'pdfjs-editor-remove-highlight-button',
      ink: 'pdfjs-editor-remove-ink-button',
      stamp: 'pdfjs-editor-remove-stamp-button',
      signature: 'pdfjs-editor-remove-signature-button',
    }));
  }

  render() {
    const t = g(this, Fn, document.createElement('div'));
    t.classList.add('editToolbar', 'hidden'), t.setAttribute('role', 'toolbar');
    const e = n(this, Ci)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener('contextmenu', xi, {
      signal: e,
    }), t.addEventListener('pointerdown', w(Us, _u, gm), {
      signal: e,
    }));
    const i = g(this, Ti, document.createElement('div'));
    i.className = 'buttons', t.append(i);
    const s = n(this, Ci).toolbarPosition;
    if (s) {
      const {
        style: r,
      } = t; const
        a = n(this, Ci)._uiManager.direction === 'ltr' ? 1 - s[0] : s[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }

  get div() {
    return n(this, Fn);
  }

  hide() {
    let t;
    n(this, Fn).classList.add('hidden'), (t = n(this, Nn)) == null || t.hideDropdown();
  }

  show() {
    let t; let
      e;
    n(this, Fn).classList.remove('hidden'), (t = n(this, Fh)) == null || t.shown(), (e = n(this, On)) == null || e.shown();
  }

  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e,
    } = n(this, Ci); const
      i = document.createElement('button');
    i.classList.add('basic', 'deleteButton'), i.tabIndex = 0, i.setAttribute('data-l10n-id', n(Us, Nh)[t]), w(this, ve, ro).call(this, i) && i.addEventListener('click', (s) => {
      e.delete();
    }, {
      signal: e._signal,
    }), n(this, Ti).append(i);
  }

  async addAltText(t) {
    const e = await t.render();
    w(this, ve, ro).call(this, e), n(this, Ti).append(e, n(this, ve, nh)), g(this, Fh, t);
  }

  addComment(t, e = null) {
    if (n(this, On)) return;
    const i = t.renderForToolbar();
    if (!i) return;
    w(this, ve, ro).call(this, i);
    const s = g(this, vo, n(this, ve, nh));
    e ? (n(this, Ti).insertBefore(i, e), n(this, Ti).insertBefore(s, e)) : n(this, Ti).append(i, s), g(this, On, t), t.toolbar = this;
  }

  addColorPicker(t) {
    if (n(this, Nn)) return;
    g(this, Nn, t);
    const e = t.renderButton();
    w(this, ve, ro).call(this, e), n(this, Ti).append(e, n(this, ve, nh));
  }

  async addEditSignatureButton(t) {
    const e = g(this, So, await t.renderEditButton(n(this, Ci)));
    w(this, ve, ro).call(this, e), n(this, Ti).append(e, n(this, ve, nh));
  }

  removeButton(t) {
    let e; let
      i;
    switch (t) {
      case 'comment':
        (e = n(this, On)) == null || e.removeToolbarCommentButton(), g(this, On, null), (i = n(this, vo)) == null || i.remove(), g(this, vo, null);
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
    const s = n(this, Ti).querySelector(i);
    s && t === 'comment' && this.addComment(e, s);
  }

  updateEditSignatureButton(t) {
    n(this, So) && (n(this, So).title = t);
  }

  remove() {
    let t;
    n(this, Fn).remove(), (t = n(this, Nn)) == null || t.destroy(), g(this, Nn, null);
  }
};
Fn = new WeakMap(), Nn = new WeakMap(), Ci = new WeakMap(), Ti = new WeakMap(), Fh = new WeakMap(), On = new WeakMap(), vo = new WeakMap(), So = new WeakMap(), Nh = new WeakMap(), _u = new WeakSet(), gm = function (t) {
  t.stopPropagation();
}, ve = new WeakSet(), mm = function (t) {
  n(this, Ci)._focusEventsAllowed = !1, Nt(t);
}, bm = function (t) {
  n(this, Ci)._focusEventsAllowed = !0, Nt(t);
}, ro = function (t) {
  const e = n(this, Ci)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener('focusin', w(this, ve, mm).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('focusout', w(this, ve, bm).bind(this), {
    capture: !0,
    signal: e,
  }), t.addEventListener('contextmenu', xi, {
    signal: e,
  }), !0);
}, nh = function () {
  const t = document.createElement('div');
  return t.className = 'divider', t;
}, b(Us, _u), b(Us, Nh, null);
const yf = Us;
let Oh; let $r; let zs; let Rn; let ym; let wm; let
  wf;
class Cw {
  constructor(t) {
    b(this, Rn);
    b(this, Oh, null);
    b(this, $r, null);
    b(this, zs);
    g(this, zs, t);
  }

  show(t, e, i) {
    const [s, r] = w(this, Rn, wm).call(this, e, i); const
      {
        style: a,
      } = n(this, $r) || g(this, $r, w(this, Rn, ym).call(this));
    t.append(n(this, $r)), a.insetInlineEnd = `${100 * s}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }

  hide() {
    n(this, $r).remove();
  }
}
Oh = new WeakMap(), $r = new WeakMap(), zs = new WeakMap(), Rn = new WeakSet(), ym = function () {
  const t = g(this, $r, document.createElement('div'));
  t.className = 'editToolbar', t.setAttribute('role', 'toolbar');
  const e = n(this, zs)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener('contextmenu', xi, {
    signal: e,
  });
  const i = g(this, Oh, document.createElement('div'));
  return i.className = 'buttons', t.append(i), n(this, zs).hasCommentManager() && w(this, Rn, wf).call(this, 'commentButton', 'pdfjs-comment-floating-button', 'pdfjs-comment-floating-button-label', () => {
    n(this, zs).commentSelection('floating_button');
  }), w(this, Rn, wf).call(this, 'highlightButton', 'pdfjs-highlight-floating-button1', 'pdfjs-highlight-floating-button-label', () => {
    n(this, zs).highlightSelection('floating_button');
  }), t;
}, wm = function (t, e) {
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
}, wf = function (t, e, i, s) {
  const r = document.createElement('button');
  r.classList.add('basic', t), r.tabIndex = 0, r.setAttribute('data-l10n-id', e);
  const a = document.createElement('span');
  r.append(a), a.className = 'visuallyHidden', a.setAttribute('data-l10n-id', i);
  const o = n(this, zs)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener('contextmenu', xi, {
    signal: o,
  }), r.addEventListener('click', s, {
    signal: o,
  })), n(this, Oh).append(r);
};
function Am(c, t, e) {
  for (const i of e) t.addEventListener(i, c[i].bind(c));
}
let Cu;
class Tw {
  constructor() {
    b(this, Cu, 0);
  }

  get id() {
    return `${Ch}${Zt(this, Cu)._++}`;
  }
}
Cu = new WeakMap();
let xo; let Bh; let _e; let Eo; let
  Nd;
const rg = class rg {
  constructor() {
    b(this, Eo);
    b(this, xo, Wp());
    b(this, Bh, 0);
    b(this, _e, null);
  }

  static get _isSVGFittingCanvas() {
    const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>'; const i = new OffscreenCanvas(1, 3).getContext('2d', {
      willReadFrequently: !0,
    }); const
      s = new Image();
    s.src = t;
    const r = s.decode().then(() => (i.drawImage(s, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(i.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return Z(this, '_isSVGFittingCanvas', r);
  }

  async getFromFile(t) {
    const {
      lastModified: e,
      name: i,
      size: s,
      type: r,
    } = t;
    return w(this, Eo, Nd).call(this, `${e}_${i}_${s}_${r}`, t);
  }

  async getFromUrl(t) {
    return w(this, Eo, Nd).call(this, t, t);
  }

  async getFromBlob(t, e) {
    const i = await e;
    return w(this, Eo, Nd).call(this, t, i);
  }

  async getFromId(t) {
    n(this, _e) || g(this, _e, /* @__PURE__ */ new Map());
    const e = n(this, _e).get(t);
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
    n(this, _e) || g(this, _e, /* @__PURE__ */ new Map());
    let i = n(this, _e).get(t);
    if (i != null && i.bitmap) return i.refCounter += 1, i;
    const s = new OffscreenCanvas(e.width, e.height);
    return s.getContext('2d').drawImage(e, 0, 0), i = {
      bitmap: s.transferToImageBitmap(),
      id: `image_${n(this, xo)}_${Zt(this, Bh)._++}`,
      refCounter: 1,
      isSvg: !1,
    }, n(this, _e).set(t, i), n(this, _e).set(i.id, i), i;
  }

  getSvgUrl(t) {
    const e = n(this, _e).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }

  deleteId(t) {
    let s;
    n(this, _e) || g(this, _e, /* @__PURE__ */ new Map());
    const e = n(this, _e).get(t);
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
    return t.startsWith(`image_${n(this, xo)}_`);
  }
};
xo = new WeakMap(), Bh = new WeakMap(), _e = new WeakMap(), Eo = new WeakSet(), Nd = async function (t, e) {
  n(this, _e) || g(this, _e, /* @__PURE__ */ new Map());
  let i = n(this, _e).get(t);
  if (i === null) return null;
  if (i != null && i.bitmap) return i.refCounter += 1, i;
  try {
    i || (i = {
      bitmap: null,
      id: `image_${n(this, xo)}_${Zt(this, Bh)._++}`,
      refCounter: 0,
      isSvg: !1,
    });
    let s;
    if (typeof e === 'string' ? (i.url = e, s = await Kl(e, 'blob')) : e instanceof File ? s = i.file = e : e instanceof Blob && (s = e), s.type === 'image/svg+xml') {
      const r = rg._isSVGFittingCanvas; const a = new FileReader(); const o = new Image(); const
        l = new Promise((h, d) => {
          o.onload = () => {
            i.bitmap = o, i.isSvg = !0, h();
          }, a.onload = async () => {
            const u = i.svgUrl = a.result;
            o.src = await r ? `${u}#svgView(preserveAspectRatio(none))` : u;
          }, o.onerror = a.onerror = d;
        });
      a.readAsDataURL(s), await l;
    } else i.bitmap = await createImageBitmap(s);
    i.refCounter = 1;
  } catch (s) {
    X(s), i = null;
  }
  return n(this, _e).set(t, i), i && n(this, _e).set(i.id, i), i;
};
const Af = rg;
let Wt; let Bn; let Hh; let
  It;
class Pw {
  constructor(t = 128) {
    b(this, Wt, []);
    b(this, Bn, !1);
    b(this, Hh);
    b(this, It, -1);
    g(this, Hh, t);
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
    if (s && t(), n(this, Bn)) return;
    const l = {
      cmd: t,
      undo: e,
      post: i,
      type: r,
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
    h === n(this, Hh) ? n(this, Wt).splice(0, 1) : (g(this, It, h), h < n(this, Wt).length && n(this, Wt).splice(h)), n(this, Wt).push(l);
  }

  undo() {
    if (n(this, It) === -1) return;
    g(this, Bn, !0);
    const {
      undo: t,
      post: e,
    } = n(this, Wt)[n(this, It)];
    t(), e == null || e(), g(this, Bn, !1), g(this, It, n(this, It) - 1);
  }

  redo() {
    if (n(this, It) < n(this, Wt).length - 1) {
      g(this, It, n(this, It) + 1), g(this, Bn, !0);
      const {
        cmd: t,
        post: e,
      } = n(this, Wt)[n(this, It)];
      t(), e == null || e(), g(this, Bn, !1);
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
Wt = new WeakMap(), Bn = new WeakMap(), Hh = new WeakMap(), It = new WeakMap();
let Tu; let
  vm;
class yd {
  constructor(t) {
    b(this, Tu);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e,
    } = de.platform;
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
    const i = this.callbacks.get(w(this, Tu, vm).call(this, e));
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
Tu = new WeakSet(), vm = function (t) {
  t.altKey && this.buffer.push('alt'), t.ctrlKey && this.buffer.push('ctrl'), t.metaKey && this.buffer.push('meta'), t.shiftKey && this.buffer.push('shift'), this.buffer.push(t.key);
  const e = this.buffer.join('+');
  return this.buffer.length = 0, e;
};
const Pu = class Pu {
  get _colors() {
    const t = /* @__PURE__ */ new Map([['CanvasText', null], ['Canvas', null]]);
    return Ew(t), Z(this, '_colors', t);
  }

  convert(t) {
    const e = Zl(t);
    if (!window.matchMedia('(forced-colors: active)').matches) return e;
    for (const [i, s] of this._colors) if (s.every((r, a) => r === e[a])) return Pu._colorsMapping.get(i);
    return e;
  }

  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? G.makeHexColor(...e) : t;
  }
};
M(Pu, '_colorsMapping', /* @__PURE__ */ new Map([['CanvasText', [0, 0, 0]], ['Canvas', [255, 255, 255]]]));
const vf = Pu;
let _o; let ii; let Co; let Bt; let Qt; let To; let Pi; let Po; let Ri; let Ce; let Hn; let $n; let Ro; let Un; let cs; let ki; let Ur; let $h; let Uh; let ko; let Gh; let ds; let Gn; let Do; let zn; let us; let Ru; let Wn; let Mo; let zh; let jn; let Gr; let Lo; let Vn; let Wh; let Xt; let dt; let Ws; let qn; let Xn; let jh; let Io; let Vh; let Yn; let fs; let js; let qh; let Xh; let Di; let N; let Od; let Sf; let Sm; let xm; let rh; let Em; let _m; let Cm; let xf; let Tm; let Ef; let _f; let Pm; let Ie; let Hs; let Rm; let km; let Cf; let Dm; let ah; let
  Tf;
const po = class po {
  constructor(t, e, i, s, r, a, o, l, h, d, u, p, y, S, v, _) {
    b(this, N);
    b(this, _o, new AbortController());
    b(this, ii, null);
    b(this, Co, null);
    b(this, Bt, /* @__PURE__ */ new Map());
    b(this, Qt, /* @__PURE__ */ new Map());
    b(this, To, null);
    b(this, Pi, null);
    b(this, Po, null);
    b(this, Ri, new Pw());
    b(this, Ce, null);
    b(this, Hn, null);
    b(this, $n, null);
    b(this, Ro, 0);
    b(this, Un, /* @__PURE__ */ new Set());
    b(this, cs, null);
    b(this, ki, null);
    b(this, Ur, /* @__PURE__ */ new Set());
    M(this, '_editorUndoBar', null);
    b(this, $h, !1);
    b(this, Uh, !1);
    b(this, ko, !1);
    b(this, Gh, null);
    b(this, ds, null);
    b(this, Gn, null);
    b(this, Do, null);
    b(this, zn, !1);
    b(this, us, null);
    b(this, Ru, new Tw());
    b(this, Wn, !1);
    b(this, Mo, !1);
    b(this, zh, !1);
    b(this, jn, null);
    b(this, Gr, null);
    b(this, Lo, null);
    b(this, Vn, null);
    b(this, Wh, null);
    b(this, Xt, q.NONE);
    b(this, dt, /* @__PURE__ */ new Set());
    b(this, Ws, null);
    b(this, qn, null);
    b(this, Xn, null);
    b(this, jh, null);
    b(this, Io, null);
    b(this, Vh, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1,
    });
    b(this, Yn, [0, 0]);
    b(this, fs, null);
    b(this, js, null);
    b(this, qh, null);
    b(this, Xh, null);
    b(this, Di, null);
    const x = this._signal = n(this, _o).signal;
    g(this, js, t), g(this, qh, e), g(this, Xh, i), g(this, To, s), g(this, Ce, r), g(this, qn, a), g(this, Io, l), this._eventBus = o, o._on('editingaction', this.onEditingAction.bind(this), {
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
      g(this, Mo, !0);
    }, {
      capture: !0,
      signal: x,
    }), window.addEventListener('pointerup', () => {
      g(this, Mo, !1);
    }, {
      capture: !0,
      signal: x,
    }), w(this, N, Em).call(this), w(this, N, Pm).call(this), w(this, N, xf).call(this), g(this, Pi, l.annotationStorage), g(this, Gh, l.filterFactory), g(this, Xn, h), g(this, Do, d || null), g(this, $h, u), g(this, Uh, p), g(this, ko, y), g(this, Wh, S || null), this.viewParameters = {
      realScale: Pn.PDF_TO_CSS_UNITS,
      rotation: 0,
    }, this.isShiftKeyDown = !1, this._editorUndoBar = v || null, this._supportsPinchToZoom = _ !== !1, r == null || r.setSidebarUiManager(this);
  }

  static get _keyboardManager() {
    const t = po.prototype; const e = (a) => n(a, js).contains(document.activeElement) && document.activeElement.tagName !== 'BUTTON' && a.hasSomethingToControl(); const i = (a, {
      target: o,
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l,
        } = o;
        return l !== 'text' && l !== 'number';
      }
      return !0;
    }; const s = this.TRANSLATE_SMALL; const
      r = this.TRANSLATE_BIG;
    return Z(this, '_keyboardManager', new yd([[['ctrl+a', 'mac+meta+a'], t.selectAll, {
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
      }) => !(o instanceof HTMLButtonElement) && n(a, js).contains(o) && !a.isEnterHandled,
    }], [[' ', 'mac+ '], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o,
      }) => !(o instanceof HTMLButtonElement) && n(a, js).contains(document.activeElement),
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
    let t; let e; let i; let s; let r; let a; let o; let l; let
      h;
    (t = n(this, Di)) == null || t.resolve(), g(this, Di, null), (e = n(this, _o)) == null || e.abort(), g(this, _o, null), this._signal = null;
    for (const d of n(this, Qt).values()) d.destroy();
    n(this, Qt).clear(), n(this, Bt).clear(), n(this, Ur).clear(), (i = n(this, Vn)) == null || i.clear(), g(this, ii, null), n(this, dt).clear(), n(this, Ri).destroy(), (s = n(this, To)) == null || s.destroy(), (r = n(this, Ce)) == null || r.destroy(), (a = n(this, qn)) == null || a.destroy(), (o = n(this, us)) == null || o.hide(), g(this, us, null), (l = n(this, Lo)) == null || l.destroy(), g(this, Lo, null), g(this, Co, null), n(this, ds) && (clearTimeout(n(this, ds)), g(this, ds, null)), n(this, fs) && (clearTimeout(n(this, fs)), g(this, fs, null)), (h = this._editorUndoBar) == null || h.destroy(), g(this, Io, null);
  }

  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }

  get mlManager() {
    return n(this, Wh);
  }

  get useNewAltTextFlow() {
    return n(this, Uh);
  }

  get useNewAltTextWhenAddingImage() {
    return n(this, ko);
  }

  get hcmFilter() {
    return Z(this, 'hcmFilter', n(this, Xn) ? n(this, Gh).addHCMFilter(n(this, Xn).foreground, n(this, Xn).background) : 'none');
  }

  get direction() {
    return Z(this, 'direction', getComputedStyle(n(this, js)).direction);
  }

  get _highlightColors() {
    return Z(this, '_highlightColors', n(this, Do) ? new Map(n(this, Do).split(',').map((t) => (t = t.split('=').map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }

  get highlightColors() {
    const {
      _highlightColors: t,
    } = this;
    if (!t) return Z(this, 'highlightColors', null);
    const e = /* @__PURE__ */ new Map(); const
      i = !!n(this, Xn);
    for (const [s, r] of t) {
      const a = s.endsWith('_HCM');
      if (i && a) {
        e.set(s.replace('_HCM', ''), r);
        continue;
      }
      !i && !a && e.set(s, r);
    }
    return Z(this, 'highlightColors', e);
  }

  get highlightColorNames() {
    return Z(this, 'highlightColorNames', this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
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
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), g(this, $n, t);
  }

  setMainHighlightColorPicker(t) {
    g(this, Lo, t);
  }

  editAltText(t, e = !1) {
    let i;
    (i = n(this, To)) == null || i.editAltText(this, t, e);
  }

  hasCommentManager() {
    return !!n(this, Ce);
  }

  editComment(t, e, i, s) {
    let r;
    (r = n(this, Ce)) == null || r.showDialog(this, t, e, i, s);
  }

  selectComment(t, e) {
    const i = n(this, Qt).get(t); const
      s = i == null ? void 0 : i.getEditorByUID(e);
    s == null || s.toggleComment(!0, !0);
  }

  updateComment(t) {
    let e;
    (e = n(this, Ce)) == null || e.updateComment(t.getData());
  }

  updatePopupColor(t) {
    let e;
    (e = n(this, Ce)) == null || e.updatePopupColor(t);
  }

  removeComment(t) {
    let e;
    (e = n(this, Ce)) == null || e.removeComments([t.uid]);
  }

  toggleComment(t, e, i = void 0) {
    let s;
    (s = n(this, Ce)) == null || s.toggleCommentPopup(t, e, i);
  }

  makeCommentColor(t, e) {
    let i;
    return t && ((i = n(this, Ce)) == null ? void 0 : i.makeCommentColor(t, e)) || null;
  }

  getCommentDialogElement() {
    let t;
    return ((t = n(this, Ce)) == null ? void 0 : t.dialogElement) || null;
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
    (e = n(this, qn)) == null || e.getSignature({
      uiManager: this,
      editor: t,
    });
  }

  get signatureManager() {
    return n(this, qn);
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
        g(this, ko, e);
        break;
    }
  }

  onPageChanging({
    pageNumber: t,
  }) {
    g(this, Ro, t - 1);
  }

  focusMainContainer() {
    n(this, js).focus();
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
    n(this, qh).classList.toggle('noUserSelect', t);
  }

  addShouldRescale(t) {
    n(this, Ur).add(t);
  }

  removeShouldRescale(t) {
    n(this, Ur).delete(t);
  }

  onScaleChanging({
    scale: t,
  }) {
    let e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Pn.PDF_TO_CSS_UNITS;
    for (const i of n(this, Ur)) i.onScaleChanging();
    (e = n(this, $n)) == null || e.onScaleChanging();
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
    } = i; const l = i.toString(); const d = w(this, N, Od).call(this, i).closest('.textLayer'); const
      u = this.getSelectionBoxes(d);
    if (!u) return;
    i.empty();
    const p = w(this, N, Sf).call(this, d); const y = n(this, Xt) === q.NONE; const
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
          text: l,
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
    if (!n(this, Pi)) return null;
    const e = `${Ch}${t}`; const
      i = n(this, Pi).getRawValue(e);
    return i && n(this, Pi).remove(e), i;
  }

  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Pi) && !n(this, Pi).has(t.id) && n(this, Pi).setValue(t.id, t);
  }

  a11yAlert(t, e = null) {
    const i = n(this, Xh);
    i && (i.setAttribute('data-l10n-id', t), e ? i.setAttribute('data-l10n-args', JSON.stringify(e)) : i.removeAttribute('data-l10n-args'));
  }

  blur() {
    if (this.isShiftKeyDown = !1, n(this, zn) && (g(this, zn, !1), w(this, N, rh).call(this, 'main_toolbar')), !this.hasSelection) return;
    const {
      activeElement: t,
    } = document;
    for (const e of n(this, dt)) {
      if (e.div.contains(t)) {
        g(this, Gr, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
    }
  }

  focus() {
    if (!n(this, Gr)) return;
    const [t, e] = n(this, Gr);
    g(this, Gr, null), e.addEventListener('focusin', () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal,
    }), e.focus();
  }

  addEditListeners() {
    w(this, N, xf).call(this), w(this, N, Ef).call(this);
  }

  removeEditListeners() {
    w(this, N, Tm).call(this), w(this, N, _f).call(this);
  }

  dragOver(t) {
    for (const {
      type: e,
    } of t.dataTransfer.items) {
      for (const i of n(this, ki)) {
        if (i.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = 'copy', t.preventDefault();
          return;
        }
      }
    }
  }

  drop(t) {
    for (const e of t.dataTransfer.items) {
      for (const i of n(this, ki)) {
        if (i.isHandlingMimeForPasting(e.type)) {
          i.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
      }
    }
  }

  copy(t) {
    let i;
    if (t.preventDefault(), (i = n(this, ii)) == null || i.commitOrRemove(), !this.hasSelection) return;
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
      for (const a of n(this, ki)) {
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
      for (const l of i) {
        const h = await s.deserialize(l);
        if (!h) return;
        r.push(h);
      }
      const a = () => {
        for (const l of r) w(this, N, Cf).call(this, l);
        w(this, N, Tf).call(this, r);
      }; const
        o = () => {
          for (const l of r) l.remove();
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
    !this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !0), n(this, Xt) !== q.NONE && !this.isEditorHandlingKeyboard && po._keyboardManager.exec(this, t);
  }

  keyup(t) {
    this.isShiftKeyDown && t.key === 'Shift' && (this.isShiftKeyDown = !1, n(this, zn) && (g(this, zn, !1), w(this, N, rh).call(this, 'main_toolbar')));
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
    t ? (w(this, N, _m).call(this), w(this, N, Ef).call(this), w(this, N, Ie).call(this, {
      isEditing: n(this, Xt) !== q.NONE,
      isEmpty: w(this, N, ah).call(this),
      hasSomethingToUndo: n(this, Ri).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Ri).hasSomethingToRedo(),
      hasSelectedEditor: !1,
    })) : (w(this, N, Cm).call(this), w(this, N, _f).call(this), w(this, N, Ie).call(this, {
      isEditing: !1,
    }), this.disableUserSelect(!1));
  }

  registerEditorTypes(t) {
    if (!n(this, ki)) {
      g(this, ki, t);
      for (const e of n(this, ki)) w(this, N, Hs).call(this, e.defaultPropertiesToUpdate);
    }
  }

  getId() {
    return n(this, Ru).id;
  }

  get currentLayer() {
    return n(this, Qt).get(n(this, Ro));
  }

  getLayer(t) {
    return n(this, Qt).get(t);
  }

  get currentPageIndex() {
    return n(this, Ro);
  }

  addLayer(t) {
    n(this, Qt).set(t.pageIndex, t), n(this, Wn) ? t.enable() : t.disable();
  }

  removeLayer(t) {
    n(this, Qt).delete(t.pageIndex);
  }

  async updateMode(t, e = null, i = !1, s = !1, r = !1) {
    let a; let o; let l; let h; let d; let
      u;
    if (n(this, Xt) !== t && !(n(this, Di) && (await n(this, Di).promise, !n(this, Di)))) {
      if (g(this, Di, Promise.withResolvers()), (a = n(this, $n)) == null || a.commitOrRemove(), n(this, Xt) === q.POPUP && ((o = n(this, Ce)) == null || o.hideSidebar()), (l = n(this, Ce)) == null || l.destroyPopup(), g(this, Xt, t), t === q.NONE) {
        this.setEditingState(!1), w(this, N, km).call(this);
        for (const p of n(this, Bt).values()) p.hideStandaloneCommentButton();
        (h = this._editorUndoBar) == null || h.hide(), this.toggleComment(null), n(this, Di).resolve();
        return;
      }
      for (const p of n(this, Bt).values()) p.addStandaloneCommentButton();
      t === q.SIGNATURE && await ((d = n(this, qn)) == null ? void 0 : d.loadSignatures()), this.setEditingState(!0), await w(this, N, Rm).call(this), this.unselectAll();
      for (const p of n(this, Qt).values()) p.updateMode(t);
      if (t === q.POPUP) {
        n(this, Co) || g(this, Co, await n(this, Io).getAnnotationsByType(new Set(n(this, ki).map((S) => S._editorType))));
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
        for (const S of n(this, Co)) {
          const {
            id: v,
            popupRef: _,
            contentsObj: x,
          } = S;
          _ && (x != null && x.str) && !p.has(v) && !n(this, Un).has(v) && y.push(S);
        }
        (u = n(this, Ce)) == null || u.showSidebar(y);
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
    t.mode !== n(this, Xt) && this._eventBus.dispatch('switchannotationeditormode', {
      source: this,
      ...t,
    });
  }

  updateParams(t, e) {
    if (n(this, ki)) {
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
          }), (n(this, jh) || g(this, jh, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors('highlight', e);
          break;
      }
      if (this.hasSelection) for (const i of n(this, dt)) i.updateParams(t, e);
      else for (const i of n(this, ki)) i.updateDefaultParams(t, e);
    }
  }

  showAllEditors(t, e, i = !1) {
    let r;
    for (const a of n(this, Bt).values()) a.editorType === t && a.show(e);
    (((r = n(this, jh)) == null ? void 0 : r.get(it.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && w(this, N, Hs).call(this, [[it.HIGHLIGHT_SHOW_ALL, e]]);
  }

  enableWaiting(t = !1) {
    if (n(this, zh) !== t) {
      g(this, zh, t);
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
    t.div.contains(document.activeElement) && (n(this, ds) && clearTimeout(n(this, ds)), g(this, ds, setTimeout(() => {
      this.focusMainContainer(), g(this, ds, null);
    }, 0))), n(this, Bt).delete(t.id), t.annotationElementId && ((e = n(this, Vn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Un).has(t.annotationElementId)) && ((i = n(this, Pi)) == null || i.remove(t.id));
  }

  addDeletedAnnotationElement(t) {
    n(this, Un).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }

  isDeletedAnnotationElement(t) {
    return n(this, Un).has(t);
  }

  removeDeletedAnnotationElement(t) {
    n(this, Un).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }

  setActiveEditor(t) {
    n(this, ii) !== t && (g(this, ii, t), t && w(this, N, Hs).call(this, t.propertiesToUpdate));
  }

  updateUI(t) {
    n(this, N, Dm) === t && w(this, N, Hs).call(this, t.propertiesToUpdate);
  }

  updateUIForDefaultProperties(t) {
    w(this, N, Hs).call(this, t.defaultPropertiesToUpdate);
  }

  toggleSelected(t) {
    if (n(this, dt).has(t)) {
      n(this, dt).delete(t), t.unselect(), w(this, N, Ie).call(this, {
        hasSelectedEditor: this.hasSelection,
      });
      return;
    }
    n(this, dt).add(t), t.select(), w(this, N, Hs).call(this, t.propertiesToUpdate), w(this, N, Ie).call(this, {
      hasSelectedEditor: !0,
    });
  }

  setSelected(t) {
    let e;
    this.updateToolbar({
      mode: t.mode,
      editId: t.id,
    }), (e = n(this, $n)) == null || e.commitOrRemove();
    for (const i of n(this, dt)) i !== t && i.unselect();
    n(this, dt).clear(), n(this, dt).add(t), t.select(), w(this, N, Hs).call(this, t.propertiesToUpdate), w(this, N, Ie).call(this, {
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
    t.unselect(), n(this, dt).delete(t), w(this, N, Ie).call(this, {
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
    n(this, Ri).undo(), w(this, N, Ie).call(this, {
      hasSomethingToUndo: n(this, Ri).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: w(this, N, ah).call(this),
    }), (t = this._editorUndoBar) == null || t.hide();
  }

  redo() {
    n(this, Ri).redo(), w(this, N, Ie).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Ri).hasSomethingToRedo(),
      isEmpty: w(this, N, ah).call(this),
    });
  }

  addCommands(t) {
    n(this, Ri).add(t), w(this, N, Ie).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: w(this, N, ah).call(this),
    });
  }

  cleanUndoStack(t) {
    n(this, Ri).cleanType(t);
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
        for (const a of e) w(this, N, Cf).call(this, a);
      };
    this.addCommands({
      cmd: i,
      undo: s,
      mustExec: !0,
    });
  }

  commitOrRemove() {
    let t;
    (t = n(this, ii)) == null || t.commitOrRemove();
  }

  hasSomethingToControl() {
    return n(this, ii) || this.hasSelection;
  }

  selectAll() {
    for (const t of n(this, dt)) t.commit();
    w(this, N, Tf).call(this, n(this, Bt).values());
  }

  unselectAll() {
    let t;
    if (!(n(this, ii) && (n(this, ii).commitOrRemove(), n(this, Xt) !== q.NONE)) && !((t = n(this, $n)) != null && t.commitOrRemove()) && this.hasSelection) {
      for (const e of n(this, dt)) e.unselect();
      n(this, dt).clear(), w(this, N, Ie).call(this, {
        hasSelectedEditor: !1,
      });
    }
  }

  translateSelectedEditors(t, e, i = !1) {
    if (i || this.commitOrRemove(), !this.hasSelection) return;
    n(this, Yn)[0] += t, n(this, Yn)[1] += e;
    const [s, r] = n(this, Yn); const a = [...n(this, dt)]; const
      o = 1e3;
    n(this, fs) && clearTimeout(n(this, fs)), g(this, fs, setTimeout(() => {
      g(this, fs, null), n(this, Yn)[0] = n(this, Yn)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a) n(this, Bt).has(l.id) && (l.translateInPage(s, r), l.translationDone());
        },
        undo: () => {
          for (const l of a) n(this, Bt).has(l.id) && (l.translateInPage(-s, -r), l.translationDone());
        },
        mustExec: !1,
      });
    }, o));
    for (const l of a) l.translateInPage(t, e), l.translationDone();
  }

  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), g(this, cs, /* @__PURE__ */ new Map());
      for (const t of n(this, dt)) {
        n(this, cs).set(t, {
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
    if (!n(this, cs)) return !1;
    this.disableUserSelect(!1);
    const t = n(this, cs);
    g(this, cs, null);
    let e = !1;
    for (const [{
      x: s,
      y: r,
      pageIndex: a,
    }, o] of t) o.newX = s, o.newY = r, o.newPageIndex = a, e || (e = s !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e) return !1;
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
    if (n(this, cs)) for (const i of n(this, cs).keys()) i.drag(t, e);
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
    return n(this, ii) === t;
  }

  getActive() {
    return n(this, ii);
  }

  getMode() {
    return n(this, Xt);
  }

  isEditingMode() {
    return n(this, Xt) !== q.NONE;
  }

  get imageManager() {
    return Z(this, 'imageManager', new Af());
  }

  getSelectionBoxes(t) {
    if (!t) return null;
    const e = document.getSelection();
    for (let h = 0, d = e.rangeCount; h < d; h++) if (!t.contains(e.getRangeAt(h).commonAncestorContainer)) return null;
    const {
      x: i,
      y: s,
      width: r,
      height: a,
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute('data-main-rotation')) {
      case '90':
        o = (h, d, u, p) => ({
          x: (d - s) / a,
          y: 1 - (h + u - i) / r,
          width: p / a,
          height: u / r,
        });
        break;
      case '180':
        o = (h, d, u, p) => ({
          x: 1 - (h + u - i) / r,
          y: 1 - (d + p - s) / a,
          width: u / r,
          height: p / a,
        });
        break;
      case '270':
        o = (h, d, u, p) => ({
          x: 1 - (d + p - s) / a,
          y: (h - i) / r,
          width: p / a,
          height: u / r,
        });
        break;
      default:
        o = (h, d, u, p) => ({
          x: (h - i) / r,
          y: (d - s) / a,
          width: u / r,
          height: p / a,
        });
        break;
    }
    const l = [];
    for (let h = 0, d = e.rangeCount; h < d; h++) {
      const u = e.getRangeAt(h);
      if (!u.collapsed) {
        for (const {
          x: p,
          y,
          width: S,
          height: v,
        } of u.getClientRects()) S === 0 || v === 0 || l.push(o(p, y, S, v));
      }
    }
    return l.length === 0 ? null : l;
  }

  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e,
  }) {
    (n(this, Po) || g(this, Po, /* @__PURE__ */ new Map())).set(t, e);
  }

  removeChangedExistingAnnotation({
    annotationElementId: t,
  }) {
    let e;
    (e = n(this, Po)) == null || e.delete(t);
  }

  renderAnnotationElement(t) {
    let s;
    const e = (s = n(this, Po)) == null ? void 0 : s.get(t.data.id);
    if (!e) return;
    const i = n(this, Pi).getRawValue(e);
    i && (n(this, Xt) === q.NONE && !i.hasBeenModified || i.renderAnnotationElement(t));
  }

  setMissingCanvas(t, e, i) {
    let r;
    const s = (r = n(this, Vn)) == null ? void 0 : r.get(t);
    s && (s.setCanvas(e, i), n(this, Vn).delete(t));
  }

  addMissingCanvas(t, e) {
    (n(this, Vn) || g(this, Vn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
_o = new WeakMap(), ii = new WeakMap(), Co = new WeakMap(), Bt = new WeakMap(), Qt = new WeakMap(), To = new WeakMap(), Pi = new WeakMap(), Po = new WeakMap(), Ri = new WeakMap(), Ce = new WeakMap(), Hn = new WeakMap(), $n = new WeakMap(), Ro = new WeakMap(), Un = new WeakMap(), cs = new WeakMap(), ki = new WeakMap(), Ur = new WeakMap(), $h = new WeakMap(), Uh = new WeakMap(), ko = new WeakMap(), Gh = new WeakMap(), ds = new WeakMap(), Gn = new WeakMap(), Do = new WeakMap(), zn = new WeakMap(), us = new WeakMap(), Ru = new WeakMap(), Wn = new WeakMap(), Mo = new WeakMap(), zh = new WeakMap(), jn = new WeakMap(), Gr = new WeakMap(), Lo = new WeakMap(), Vn = new WeakMap(), Wh = new WeakMap(), Xt = new WeakMap(), dt = new WeakMap(), Ws = new WeakMap(), qn = new WeakMap(), Xn = new WeakMap(), jh = new WeakMap(), Io = new WeakMap(), Vh = new WeakMap(), Yn = new WeakMap(), fs = new WeakMap(), js = new WeakMap(), qh = new WeakMap(), Xh = new WeakMap(), Di = new WeakMap(), N = new WeakSet(), Od = function ({
  anchorNode: t,
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Sf = function (t) {
  const {
    currentLayer: e,
  } = this;
  if (e.hasTextLayer(t)) return e;
  for (const i of n(this, Qt).values()) if (i.hasTextLayer(t)) return i;
  return null;
}, Sm = function () {
  const t = document.getSelection();
  if (!t || t.isCollapsed) return;
  const i = w(this, N, Od).call(this, t).closest('.textLayer'); const
    s = this.getSelectionBoxes(i);
  s && (n(this, us) || g(this, us, new Cw(this)), n(this, us).show(i, s, this.direction === 'ltr'));
}, xm = function () {
  let r; let a; let
    o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, Ws) && ((r = n(this, us)) == null || r.hide(), g(this, Ws, null), w(this, N, Ie).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  const {
    anchorNode: e,
  } = t;
  if (e === n(this, Ws)) return;
  const s = w(this, N, Od).call(this, t).closest('.textLayer');
  if (!s) {
    n(this, Ws) && ((a = n(this, us)) == null || a.hide(), g(this, Ws, null), w(this, N, Ie).call(this, {
      hasSelectedText: !1,
    }));
    return;
  }
  if ((o = n(this, us)) == null || o.hide(), g(this, Ws, e), w(this, N, Ie).call(this, {
    hasSelectedText: !0,
  }), !(n(this, Xt) !== q.HIGHLIGHT && n(this, Xt) !== q.NONE) && (n(this, Xt) === q.HIGHLIGHT && this.showAllEditors('highlight', !0, !0), g(this, zn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, Xt) === q.HIGHLIGHT ? w(this, N, Sf).call(this, s) : null;
    if (l == null || l.toggleDrawing(), n(this, Mo)) {
      const h = new AbortController(); const d = this.combinedSignal(h); const
        u = (p) => {
          p.type === 'pointerup' && p.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), p.type === 'pointerup' && w(this, N, rh).call(this, 'main_toolbar'));
        };
      window.addEventListener('pointerup', u, {
        signal: d,
      }), window.addEventListener('blur', u, {
        signal: d,
      });
    } else l == null || l.toggleDrawing(!0), w(this, N, rh).call(this, 'main_toolbar');
  }
}, rh = function (t = '') {
  n(this, Xt) === q.HIGHLIGHT ? this.highlightSelection(t) : n(this, $h) && w(this, N, Sm).call(this);
}, Em = function () {
  document.addEventListener('selectionchange', w(this, N, xm).bind(this), {
    signal: this._signal,
  });
}, _m = function () {
  if (n(this, Gn)) return;
  g(this, Gn, new AbortController());
  const t = this.combinedSignal(n(this, Gn));
  window.addEventListener('focus', this.focus.bind(this), {
    signal: t,
  }), window.addEventListener('blur', this.blur.bind(this), {
    signal: t,
  });
}, Cm = function () {
  let t;
  (t = n(this, Gn)) == null || t.abort(), g(this, Gn, null);
}, xf = function () {
  if (n(this, jn)) return;
  g(this, jn, new AbortController());
  const t = this.combinedSignal(n(this, jn));
  window.addEventListener('keydown', this.keydown.bind(this), {
    signal: t,
  }), window.addEventListener('keyup', this.keyup.bind(this), {
    signal: t,
  });
}, Tm = function () {
  let t;
  (t = n(this, jn)) == null || t.abort(), g(this, jn, null);
}, Ef = function () {
  if (n(this, Hn)) return;
  g(this, Hn, new AbortController());
  const t = this.combinedSignal(n(this, Hn));
  document.addEventListener('copy', this.copy.bind(this), {
    signal: t,
  }), document.addEventListener('cut', this.cut.bind(this), {
    signal: t,
  }), document.addEventListener('paste', this.paste.bind(this), {
    signal: t,
  });
}, _f = function () {
  let t;
  (t = n(this, Hn)) == null || t.abort(), g(this, Hn, null);
}, Pm = function () {
  const t = this._signal;
  document.addEventListener('dragover', this.dragOver.bind(this), {
    signal: t,
  }), document.addEventListener('drop', this.drop.bind(this), {
    signal: t,
  });
}, Ie = function (t) {
  Object.entries(t).some(([i, s]) => n(this, Vh)[i] !== s) && (this._eventBus.dispatch('annotationeditorstateschanged', {
    source: this,
    details: Object.assign(n(this, Vh), t),
  }), n(this, Xt) === q.HIGHLIGHT && t.hasSelectedEditor === !1 && w(this, N, Hs).call(this, [[it.HIGHLIGHT_FREE, !0]]));
}, Hs = function (t) {
  this._eventBus.dispatch('annotationeditorparamschanged', {
    source: this,
    details: t,
  });
}, Rm = async function () {
  if (!n(this, Wn)) {
    g(this, Wn, !0);
    const t = [];
    for (const e of n(this, Qt).values()) t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Bt).values()) e.enable();
  }
}, km = function () {
  if (this.unselectAll(), n(this, Wn)) {
    g(this, Wn, !1);
    for (const t of n(this, Qt).values()) t.disable();
    for (const t of n(this, Bt).values()) t.disable();
  }
}, Cf = function (t) {
  const e = n(this, Qt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, Dm = function () {
  let t = null;
  for (t of n(this, dt)) ;
  return t;
}, ah = function () {
  if (n(this, Bt).size === 0) return !0;
  if (n(this, Bt).size === 1) for (const t of n(this, Bt).values()) return t.isEmpty();
  return !1;
}, Tf = function (t) {
  for (const e of n(this, dt)) e.unselect();
  n(this, dt).clear();
  for (const e of t) e.isEmpty() || (n(this, dt).add(e), e.select());
  w(this, N, Ie).call(this, {
    hasSelectedEditor: this.hasSelection,
  });
}, M(po, 'TRANSLATE_SMALL', 1), M(po, 'TRANSLATE_BIG', 10);
const kr = po;
let ne; let ps; let zi; let Fo; let gs; let si; let No; let ms; let je; let Vs; let zr; let bs; let Kn; let is; let oh; let
  Bd;
const Fe = class Fe {
  constructor(t) {
    b(this, is);
    b(this, ne, null);
    b(this, ps, !1);
    b(this, zi, null);
    b(this, Fo, null);
    b(this, gs, null);
    b(this, si, null);
    b(this, No, !1);
    b(this, ms, null);
    b(this, je, null);
    b(this, Vs, null);
    b(this, zr, null);
    b(this, bs, !1);
    g(this, je, t), g(this, bs, t._uiManager.useNewAltTextFlow), n(Fe, Kn) || g(Fe, Kn, Object.freeze({
      added: 'pdfjs-editor-new-alt-text-added-button',
      'added-label': 'pdfjs-editor-new-alt-text-added-button-label',
      missing: 'pdfjs-editor-new-alt-text-missing-button',
      'missing-label': 'pdfjs-editor-new-alt-text-missing-button-label',
      review: 'pdfjs-editor-new-alt-text-to-review-button',
      'review-label': 'pdfjs-editor-new-alt-text-to-review-button-label',
    }));
  }

  static initialize(t) {
    Fe._l10n ?? (Fe._l10n = t);
  }

  async render() {
    const t = g(this, zi, document.createElement('button'));
    t.className = 'altText', t.tabIndex = '0';
    const e = g(this, Fo, document.createElement('span'));
    t.append(e), n(this, bs) ? (t.classList.add('new'), t.setAttribute('data-l10n-id', n(Fe, Kn).missing), e.setAttribute('data-l10n-id', n(Fe, Kn)['missing-label'])) : (t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button'), e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-button-label'));
    const i = n(this, je)._uiManager._signal;
    t.addEventListener('contextmenu', xi, {
      signal: i,
    }), t.addEventListener('pointerdown', (r) => r.stopPropagation(), {
      signal: i,
    });
    const s = (r) => {
      r.preventDefault(), n(this, je)._uiManager.editAltText(n(this, je)), n(this, bs) && n(this, je)._reportTelemetry({
        action: 'pdfjs.image.alt_text.image_status_label_clicked',
        data: {
          label: n(this, is, oh),
        },
      });
    };
    return t.addEventListener('click', s, {
      capture: !0,
      signal: i,
    }), t.addEventListener('keydown', (r) => {
      r.target === t && r.key === 'Enter' && (g(this, No, !0), s(r));
    }, {
      signal: i,
    }), await w(this, is, Bd).call(this), t;
  }

  finish() {
    n(this, zi) && (n(this, zi).focus({
      focusVisible: n(this, No),
    }), g(this, No, !1));
  }

  isEmpty() {
    return n(this, bs) ? n(this, ne) === null : !n(this, ne) && !n(this, ps);
  }

  hasData() {
    return n(this, bs) ? n(this, ne) !== null || !!n(this, Vs) : this.isEmpty();
  }

  get guessedText() {
    return n(this, Vs);
  }

  async setGuessedText(t) {
    n(this, ne) === null && (g(this, Vs, t), g(this, zr, await Fe._l10n.get('pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer', {
      generatedAltText: t,
    })), w(this, is, Bd).call(this));
  }

  toggleAltTextBadge(t = !1) {
    let e;
    if (!n(this, bs) || n(this, ne)) {
      (e = n(this, ms)) == null || e.remove(), g(this, ms, null);
      return;
    }
    if (!n(this, ms)) {
      const i = g(this, ms, document.createElement('div'));
      i.className = 'noAltTextBadge', n(this, je).div.append(i);
    }
    n(this, ms).classList.toggle('hidden', !t);
  }

  serialize(t) {
    let e = n(this, ne);
    return !t && n(this, Vs) === e && (e = n(this, zr)), {
      altText: e,
      decorative: n(this, ps),
      guessedText: n(this, Vs),
      textWithDisclaimer: n(this, zr),
    };
  }

  get data() {
    return {
      altText: n(this, ne),
      decorative: n(this, ps),
    };
  }

  set data({
    altText: t,
    decorative: e,
    guessedText: i,
    textWithDisclaimer: s,
    cancel: r = !1,
  }) {
    i && (g(this, Vs, i), g(this, zr, s)), !(n(this, ne) === t && n(this, ps) === e) && (r || (g(this, ne, t), g(this, ps, e)), w(this, is, Bd).call(this));
  }

  toggle(t = !1) {
    n(this, zi) && (!t && n(this, si) && (clearTimeout(n(this, si)), g(this, si, null)), n(this, zi).disabled = !t);
  }

  shown() {
    n(this, je)._reportTelemetry({
      action: 'pdfjs.image.alt_text.image_status_label_displayed',
      data: {
        label: n(this, is, oh),
      },
    });
  }

  destroy() {
    let t; let
      e;
    (t = n(this, zi)) == null || t.remove(), g(this, zi, null), g(this, Fo, null), g(this, gs, null), (e = n(this, ms)) == null || e.remove(), g(this, ms, null);
  }
};
ne = new WeakMap(), ps = new WeakMap(), zi = new WeakMap(), Fo = new WeakMap(), gs = new WeakMap(), si = new WeakMap(), No = new WeakMap(), ms = new WeakMap(), je = new WeakMap(), Vs = new WeakMap(), zr = new WeakMap(), bs = new WeakMap(), Kn = new WeakMap(), is = new WeakSet(), oh = function () {
  return n(this, ne) && 'added' || n(this, ne) === null && this.guessedText && 'review' || 'missing';
}, Bd = async function () {
  let s; let r; let
    a;
  const t = n(this, zi);
  if (!t) return;
  if (n(this, bs)) {
    if (t.classList.toggle('done', !!n(this, ne)), t.setAttribute('data-l10n-id', n(Fe, Kn)[n(this, is, oh)]), (s = n(this, Fo)) == null || s.setAttribute('data-l10n-id', n(Fe, Kn)[`${n(this, is, oh)}-label`]), !n(this, ne)) {
      (r = n(this, gs)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, ne) && !n(this, ps)) {
      t.classList.remove('done'), (a = n(this, gs)) == null || a.remove();
      return;
    }
    t.classList.add('done'), t.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-edit-button');
  }
  let e = n(this, gs);
  if (!e) {
    g(this, gs, e = document.createElement('span')), e.className = 'tooltip', e.setAttribute('role', 'tooltip'), e.id = `alt-text-tooltip-${n(this, je).id}`;
    const o = 100; const
      l = n(this, je)._uiManager._signal;
    l.addEventListener('abort', () => {
      clearTimeout(n(this, si)), g(this, si, null);
    }, {
      once: !0,
    }), t.addEventListener('mouseenter', () => {
      g(this, si, setTimeout(() => {
        g(this, si, null), n(this, gs).classList.add('show'), n(this, je)._reportTelemetry({
          action: 'alt_text_tooltip',
        });
      }, o));
    }, {
      signal: l,
    }), t.addEventListener('mouseleave', () => {
      let h;
      n(this, si) && (clearTimeout(n(this, si)), g(this, si, null)), (h = n(this, gs)) == null || h.classList.remove('show');
    }, {
      signal: l,
    });
  }
  n(this, ps) ? e.setAttribute('data-l10n-id', 'pdfjs-editor-alt-text-decorative-tooltip') : (e.removeAttribute('data-l10n-id'), e.textContent = n(this, ne)), e.parentNode || t.append(e);
  const i = n(this, je).getElementForAltText();
  i == null || i.setAttribute('aria-describedby', e.id);
}, b(Fe, Kn, null), M(Fe, '_l10n', null);
const gu = Fe;
let pe; let Mi; let Wr; let _t; let Yh; let jr; let Wi; let Vr; let qr; let Xr; let Kh; let
  Pf;
class Cd {
  constructor(t) {
    b(this, Kh);
    b(this, pe, null);
    b(this, Mi, null);
    b(this, Wr, !1);
    b(this, _t, null);
    b(this, Yh, null);
    b(this, jr, null);
    b(this, Wi, null);
    b(this, Vr, null);
    b(this, qr, !1);
    b(this, Xr, null);
    g(this, _t, t);
  }

  renderForToolbar() {
    const t = g(this, Mi, document.createElement('button'));
    return t.className = 'comment', w(this, Kh, Pf).call(this, t, !1);
  }

  renderForStandalone() {
    const t = g(this, pe, document.createElement('button'));
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
    return w(this, Kh, Pf).call(this, t, !0);
  }

  focusButton() {
    setTimeout(() => {
      let t;
      (t = n(this, pe) ?? n(this, Mi)) == null || t.focus();
    }, 0);
  }

  onUpdatedColor() {
    if (!n(this, pe)) return;
    const t = n(this, _t).commentButtonColor;
    t && (n(this, pe).style.backgroundColor = t), n(this, _t)._uiManager.updatePopupColor(n(this, _t));
  }

  get commentButtonWidth() {
    let t;
    return (((t = n(this, pe)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, _t).parent.boundingClientRect.width;
  }

  get commentPopupPositionInLayer() {
    if (n(this, Xr)) return n(this, Xr);
    if (!n(this, pe)) return null;
    const {
      x: t,
      y: e,
      height: i,
    } = n(this, pe).getBoundingClientRect(); const
      {
        x: s,
        y: r,
        width: a,
        height: o,
      } = n(this, _t).parent.boundingClientRect;
    return [(t - s) / a, (e + i - r) / o];
  }

  set commentPopupPositionInLayer(t) {
    g(this, Xr, t);
  }

  hasDefaultPopupPosition() {
    return n(this, Xr) === null;
  }

  removeStandaloneCommentButton() {
    let t;
    (t = n(this, pe)) == null || t.remove(), g(this, pe, null);
  }

  removeToolbarCommentButton() {
    let t;
    (t = n(this, Mi)) == null || t.remove(), g(this, Mi, null);
  }

  setCommentButtonStates({
    selected: t,
    hasPopup: e,
  }) {
    n(this, pe) && (n(this, pe).classList.toggle('selected', t), n(this, pe).ariaExpanded = e);
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
        width: l,
        height: h,
      } = r;
    n(this, _t)._uiManager.editComment(n(this, _t), a + i * l, o + s * h, {
      ...t,
      parentDimensions: r,
    });
  }

  finish() {
    n(this, Mi) && (n(this, Mi).focus({
      focusVisible: n(this, Wr),
    }), g(this, Wr, !1));
  }

  isDeleted() {
    return n(this, qr) || n(this, Wi) === '';
  }

  isEmpty() {
    return n(this, Wi) === null;
  }

  hasBeenEdited() {
    return this.isDeleted() || n(this, Wi) !== n(this, Yh);
  }

  serialize() {
    return this.data;
  }

  get data() {
    return {
      text: n(this, Wi),
      richText: n(this, jr),
      date: n(this, Vr),
      deleted: this.isDeleted(),
    };
  }

  set data(t) {
    if (t !== n(this, Wi) && g(this, jr, null), t === null) {
      g(this, Wi, ''), g(this, qr, !0);
      return;
    }
    g(this, Wi, t), g(this, Vr, /* @__PURE__ */ new Date()), g(this, qr, !1);
  }

  setInitialText(t, e = null) {
    g(this, Yh, t), this.data = t, g(this, Vr, null), g(this, jr, e);
  }

  shown() {
  }

  destroy() {
    let t; let
      e;
    (t = n(this, Mi)) == null || t.remove(), g(this, Mi, null), (e = n(this, pe)) == null || e.remove(), g(this, pe, null), g(this, Wi, ''), g(this, jr, null), g(this, Vr, null), g(this, _t, null), g(this, Wr, !1), g(this, qr, !1);
  }
}
pe = new WeakMap(), Mi = new WeakMap(), Wr = new WeakMap(), _t = new WeakMap(), Yh = new WeakMap(), jr = new WeakMap(), Wi = new WeakMap(), Vr = new WeakMap(), qr = new WeakMap(), Xr = new WeakMap(), Kh = new WeakSet(), Pf = function (t, e) {
  if (!n(this, _t)._uiManager.hasCommentManager()) return null;
  t.tabIndex = '0', t.ariaHasPopup = 'dialog', e ? (t.ariaControls = 'commentPopup', t.setAttribute('data-l10n-id', 'pdfjs-show-comment-button')) : (t.ariaControlsElements = [n(this, _t)._uiManager.getCommentDialogElement()], t.setAttribute('data-l10n-id', 'pdfjs-editor-edit-comment-button'));
  const i = n(this, _t)._uiManager._signal;
  if (!(i instanceof AbortSignal) || i.aborted) return t;
  t.addEventListener('contextmenu', xi, {
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
    r.preventDefault(), t === n(this, Mi) ? this.edit() : n(this, _t).toggleComment(!0);
  };
  return t.addEventListener('click', s, {
    capture: !0,
    signal: i,
  }), t.addEventListener('keydown', (r) => {
    r.target === t && r.key === 'Enter' && (g(this, Wr, !0), s(r));
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
let Oo; let Yr; let Zh; let Jh; let Qh; let tc; let ec; let qs; let Kr; let Xs; let Zr; let Ys; let Dr; let Mm; let Lm; let
  Im;
const ag = class ag {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: i = null,
    onPinchStart: s = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    signal: o,
  }) {
    b(this, Dr);
    b(this, Oo);
    b(this, Yr, !1);
    b(this, Zh, null);
    b(this, Jh);
    b(this, Qh);
    b(this, tc);
    b(this, ec);
    b(this, qs, null);
    b(this, Kr);
    b(this, Xs, null);
    b(this, Zr);
    b(this, Ys, null);
    g(this, Oo, t), g(this, Zh, i), g(this, Jh, e), g(this, Qh, s), g(this, tc, r), g(this, ec, a), g(this, Zr, new AbortController()), g(this, Kr, AbortSignal.any([o, n(this, Zr).signal])), t.addEventListener('touchstart', w(this, Dr, Mm).bind(this), {
      passive: !1,
      signal: n(this, Kr),
    });
  }

  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / ns.pixelRatio;
  }

  destroy() {
    let t; let
      e;
    (t = n(this, Zr)) == null || t.abort(), g(this, Zr, null), (e = n(this, qs)) == null || e.abort(), g(this, qs, null);
  }
};
Oo = new WeakMap(), Yr = new WeakMap(), Zh = new WeakMap(), Jh = new WeakMap(), Qh = new WeakMap(), tc = new WeakMap(), ec = new WeakMap(), qs = new WeakMap(), Kr = new WeakMap(), Xs = new WeakMap(), Zr = new WeakMap(), Ys = new WeakMap(), Dr = new WeakSet(), Mm = function (t) {
  let s; let r; let
    a;
  if ((s = n(this, Jh)) != null && s.call(this)) return;
  if (t.touches.length === 1) {
    if (n(this, qs)) return;
    const o = g(this, qs, new AbortController()); const l = AbortSignal.any([n(this, Kr), o.signal]); const h = n(this, Oo); const d = {
      capture: !0,
      signal: l,
      passive: !1,
    }; const
      u = (p) => {
        let y;
        p.pointerType === 'touch' && ((y = n(this, qs)) == null || y.abort(), g(this, qs, null));
      };
    h.addEventListener('pointerdown', (p) => {
      p.pointerType === 'touch' && (Nt(p), u(p));
    }, d), h.addEventListener('pointerup', u, d), h.addEventListener('pointercancel', u, d);
    return;
  }
  if (!n(this, Ys)) {
    g(this, Ys, new AbortController());
    const o = AbortSignal.any([n(this, Kr), n(this, Ys).signal]); const l = n(this, Oo); const
      h = {
        signal: o,
        capture: !1,
        passive: !1,
      };
    l.addEventListener('touchmove', w(this, Dr, Lm).bind(this), h);
    const d = w(this, Dr, Im).bind(this);
    l.addEventListener('touchend', d, h), l.addEventListener('touchcancel', d, h), h.capture = !0, l.addEventListener('pointerdown', Nt, h), l.addEventListener('pointermove', Nt, h), l.addEventListener('pointercancel', Nt, h), l.addEventListener('pointerup', Nt, h), (r = n(this, Qh)) == null || r.call(this);
  }
  if (Nt(t), t.touches.length !== 2 || (a = n(this, Zh)) != null && a.call(this)) {
    g(this, Xs, null);
    return;
  }
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]), g(this, Xs, {
    touch0X: e.screenX,
    touch0Y: e.screenY,
    touch1X: i.screenX,
    touch1Y: i.screenY,
  });
}, Lm = function (t) {
  let f;
  if (!n(this, Xs) || t.touches.length !== 2) return;
  Nt(t);
  let [e, i] = t.touches;
  e.identifier > i.identifier && ([e, i] = [i, e]);
  const {
    screenX: s,
    screenY: r,
  } = e; const {
    screenX: a,
    screenY: o,
  } = i; const l = n(this, Xs); const {
    touch0X: h,
    touch0Y: d,
    touch1X: u,
    touch1Y: p,
  } = l; const y = u - h; const S = p - d; const v = a - s; const _ = o - r; const x = Math.hypot(v, _) || 1; const
    T = Math.hypot(y, S) || 1;
  if (!n(this, Yr) && Math.abs(T - x) <= ag.MIN_TOUCH_DISTANCE_TO_PINCH) return;
  if (l.touch0X = s, l.touch0Y = r, l.touch1X = a, l.touch1Y = o, !n(this, Yr)) {
    g(this, Yr, !0);
    return;
  }
  const E = [(s + a) / 2, (r + o) / 2];
  (f = n(this, tc)) == null || f.call(this, E, T, x);
}, Im = function (t) {
  let e;
  t.touches.length >= 2 || (n(this, Ys) && (n(this, Ys).abort(), g(this, Ys, null), (e = n(this, ec)) == null || e.call(this)), n(this, Xs) && (Nt(t), g(this, Xs, null), g(this, Yr, !1)));
};
const kh = ag;
let Jr; let ji; let Dt; let At; let Ks; let Bo; let Zn; let ic; let ge; let Qr; let Zs; let ys; let Jn; let sc; let ta; let ni; let nc; let ea; let Js; let ws; let Ho; let $o; let Li; let ia; let rc; let ku; let V; let Rf; let ac; let kf; let Hd; let Fm; let Nm; let Df; let $d; let Mf; let Om; let Bm; let Hm; let Lf; let $m; let If; let Um; let Gm; let zm; let Ff; let
  lh;
const Y = class Y {
  constructor(t) {
    b(this, V);
    b(this, Jr, null);
    b(this, ji, null);
    b(this, Dt, null);
    b(this, At, null);
    b(this, Ks, null);
    b(this, Bo, !1);
    b(this, Zn, null);
    b(this, ic, '');
    b(this, ge, null);
    b(this, Qr, null);
    b(this, Zs, null);
    b(this, ys, null);
    b(this, Jn, null);
    b(this, sc, '');
    b(this, ta, !1);
    b(this, ni, null);
    b(this, nc, !1);
    b(this, ea, !1);
    b(this, Js, !1);
    b(this, ws, null);
    b(this, Ho, 0);
    b(this, $o, 0);
    b(this, Li, null);
    b(this, ia, null);
    M(this, 'isSelected', !1);
    M(this, '_isCopy', !1);
    M(this, '_editToolbar', null);
    M(this, '_initialOptions', /* @__PURE__ */ Object.create(null));
    M(this, '_initialData', null);
    M(this, '_isVisible', !0);
    M(this, '_uiManager', null);
    M(this, '_focusEventsAllowed', !0);
    b(this, rc, !1);
    b(this, ku, Y._zIndex++);
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
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }

  static get _resizerKeyboardManager() {
    const t = Y.prototype._resizeWithKeyboard; const e = kr.TRANSLATE_SMALL; const
      i = kr.TRANSLATE_BIG;
    return Z(this, '_resizerKeyboardManager', new yd([[['ArrowLeft', 'mac+ArrowLeft'], t, {
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
    return Z(this, '_defaultLineColor', this._colorManager.getHexCode('CanvasText'));
  }

  static deleteAnnotationElement(t) {
    const e = new Rw({
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
    return n(this, rc);
  }

  set _isDraggable(t) {
    let e;
    g(this, rc, t), (e = this.div) == null || e.classList.toggle('draggable', t);
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
    this.div.style.zIndex = n(this, ku);
  }

  setParent(t) {
    let e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (w(this, V, lh).call(this), (e = n(this, ys)) == null || e.remove(), g(this, ys, null)), this.parent = t;
  }

  focusin(t) {
    this._focusEventsAllowed && (n(this, ta) ? g(this, ta, !1) : this.parent.setSelected(this));
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
    w(this, V, Rf).call(this, this.parentDimensions, t, e);
  }

  translateInPage(t, e) {
    n(this, ni) || g(this, ni, [this.x, this.y, this.width, this.height]), w(this, V, Rf).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: 'nearest',
    });
  }

  translationDone() {
    this._onTranslated(this.x, this.y);
  }

  drag(t, e) {
    n(this, ni) || g(this, ni, [this.x, this.y, this.width, this.height]);
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
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
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
    return !!n(this, ni) && (n(this, ni)[0] !== this.x || n(this, ni)[1] !== this.y);
  }

  get _hasBeenResized() {
    return !!n(this, ni) && (n(this, ni)[2] !== this.width || n(this, ni)[3] !== this.height);
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
      height: l,
    } = this;
    if (o *= i, l *= s, r *= i, a *= s, this._mustFixPosition) {
      switch (t) {
        case 0:
          r = De(r, 0, i - o), a = De(a, 0, s - l);
          break;
        case 90:
          r = De(r, 0, i - l), a = De(a, o, s);
          break;
        case 180:
          r = De(r, o, i), a = De(a, l, s);
          break;
        case 270:
          r = De(r, l, i), a = De(a, 0, s - o);
          break;
      }
    }
    this.x = r /= i, this.y = a /= s;
    const [h, d] = this.getBaseTranslation();
    r += h, a += d, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }

  screenToPageTranslation(t, e) {
    let i;
    return w(i = Y, ac, kf).call(i, t, e, this.parentRotation);
  }

  pageTranslationToScreen(t, e) {
    let i;
    return w(i = Y, ac, kf).call(i, t, e, 360 - this.parentRotation);
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
    (t = n(this, Dt)) == null || t.finish();
  }

  get toolbarButtons() {
    return null;
  }

  async addEditToolbar() {
    if (this._editToolbar || n(this, ea)) return this._editToolbar;
    this._editToolbar = new yf(this), this.div.append(this._editToolbar.render());
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
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, Dt)) == null || e.destroy();
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
    return n(this, Dt) || (gu.initialize(Y._l10n), g(this, Dt, new gu(this)), n(this, Jr) && (n(this, Dt).data = n(this, Jr), g(this, Jr, null))), n(this, Dt);
  }

  get altTextData() {
    let t;
    return (t = n(this, Dt)) == null ? void 0 : t.data;
  }

  set altTextData(t) {
    n(this, Dt) && (n(this, Dt).data = t);
  }

  get guessedAltText() {
    let t;
    return (t = n(this, Dt)) == null ? void 0 : t.guessedText;
  }

  async setGuessedAltText(t) {
    let e;
    await ((e = n(this, Dt)) == null ? void 0 : e.setGuessedText(t));
  }

  serializeAltText(t) {
    let e;
    return (e = n(this, Dt)) == null ? void 0 : e.serialize(t);
  }

  hasAltText() {
    return !!n(this, Dt) && !n(this, Dt).isEmpty();
  }

  hasAltTextData() {
    let t;
    return ((t = n(this, Dt)) == null ? void 0 : t.hasData()) ?? !1;
  }

  focusCommentButton() {
    let t;
    (t = n(this, At)) == null || t.focusButton();
  }

  addCommentButton() {
    return n(this, At) || g(this, At, new Cd(this));
  }

  addStandaloneCommentButton() {
    if (n(this, Ks)) {
      this._uiManager.isEditingMode() && n(this, Ks).classList.remove('hidden');
      return;
    }
    this.hasComment && (g(this, Ks, n(this, At).renderForStandalone()), this.div.append(n(this, Ks)));
  }

  removeStandaloneCommentButton() {
    n(this, At).removeStandaloneCommentButton(), g(this, Ks, null);
  }

  hideStandaloneCommentButton() {
    let t;
    (t = n(this, Ks)) == null || t.classList.add('hidden');
  }

  get comment() {
    const {
      data: {
        richText: t,
        text: e,
        date: i,
        deleted: s,
      },
    } = n(this, At);
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
    n(this, At) || g(this, At, new Cd(this)), n(this, At).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }

  setCommentData({
    comment: t,
    popupRef: e,
    richText: i,
  }) {
    if (!e || (n(this, At) || g(this, At, new Cd(this)), n(this, At).setInitialText(t, i), !this.annotationElementId)) return;
    const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    s && this.updateFromAnnotationLayer(s);
  }

  get hasEditedComment() {
    let t;
    return (t = n(this, At)) == null ? void 0 : t.hasBeenEdited();
  }

  get hasDeletedComment() {
    let t;
    return (t = n(this, At)) == null ? void 0 : t.isDeleted();
  }

  get hasComment() {
    return !!n(this, At) && !n(this, At).isEmpty() && !n(this, At).isDeleted();
  }

  async editComment(t) {
    n(this, At) || g(this, At, new Cd(this)), n(this, At).edit(t);
  }

  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }

  setSelectedCommentButton(t) {
    n(this, At).setSelectedButton(t);
  }

  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , s] = t.rect; const [r] = this.pageDimensions; const [a] = this.pageTranslation; const o = a + r + 1; const l = s - 100; const
        h = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, h, s],
      };
    }
  }

  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e,
    },
  }) {
    n(this, At).data = e ? null : t;
  }

  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }

  render() {
    let a;
    const t = this.div = document.createElement('div');
    t.setAttribute('data-editor-rotation', (360 - this.rotation) % 360), t.className = this.name, t.setAttribute('id', this.id), t.tabIndex = n(this, Bo) ? -1 : 0, t.setAttribute('role', 'application'), this.defaultL10nId && t.setAttribute('data-l10n-id', this.defaultL10nId), this._isVisible || t.classList.add('hidden'), this.setInForeground(), w(this, V, If).call(this);
    const [e, i] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
    const [s, r] = this.getInitialTranslation();
    return this.translate(s, r), Am(this, t, ['keydown', 'pointerdown', 'dblclick']), this.isResizable && this._uiManager._supportsPinchToZoom && (n(this, ia) || g(this, ia, new kh({
      container: t,
      isPinchingDisabled: () => !this.isSelected,
      onPinchStart: w(this, V, Om).bind(this),
      onPinching: w(this, V, Bm).bind(this),
      onPinchEnd: w(this, V, Hm).bind(this),
      signal: this._uiManager._signal,
    }))), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }

  pointerdown(t) {
    const {
      isMac: e,
    } = de.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (g(this, ta, !0), this._isDraggable) {
      w(this, V, $m).call(this, t);
      return;
    }
    w(this, V, Lf).call(this, t);
  }

  _onStartDragging() {
  }

  _onStopDragging() {
  }

  moveInDOM() {
    n(this, ws) && clearTimeout(n(this, ws)), g(this, ws, setTimeout(() => {
      let t;
      g(this, ws, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }

  _setParentAndPosition(t, e, i) {
    t.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
  }

  getRect(t, e, i = this.rotation) {
    const s = this.parentScale; const [r, a] = this.pageDimensions; const [o, l] = this.pageTranslation; const h = t / s; const d = e / s; const u = this.x * r; const p = this.y * a; const y = this.width * r; const
      S = this.height * a;
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
        throw new Error('Invalid rotation');
    }
  }

  getRectInCurrentCoords(t, e) {
    const [i, s, r, a] = t; const o = r - i; const
      l = a - s;
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
    (t = n(this, At)) == null || t.onUpdatedColor();
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
      pageIndex: l,
      creationDate: h,
      modificationDate: d,
    } = this;
    return {
      id: o,
      pageIndex: l,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t,
      },
      creationDate: h,
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
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), g(this, ea, !0), !0);
  }

  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), g(this, ea, !1), !0) : !1;
  }

  isInEditMode() {
    return n(this, ea);
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
    w(this, V, If).call(this);
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
    s.rotation = t.rotation, g(s, Jr, t.accessibilityData), s._isCopy = t.isCopy || !1;
    const [r, a] = s.pageDimensions; const
      [o, l, h, d] = s.getRectInCurrentCoords(t.rect, a);
    return s.x = o / r, s.y = l / a, s.width = h / r, s.height = d / a, s;
  }

  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }

  remove() {
    let t; let
      e;
    if ((t = n(this, Jn)) == null || t.abort(), g(this, Jn, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), n(this, ws) && (clearTimeout(n(this, ws)), g(this, ws, null)), w(this, V, lh).call(this), this.removeEditToolbar(), n(this, Li)) {
      for (const i of n(this, Li).values()) clearTimeout(i);
      g(this, Li, null);
    }
    this.parent = null, (e = n(this, ia)) == null || e.destroy(), g(this, ia, null);
  }

  get isResizable() {
    return !1;
  }

  makeResizable() {
    this.isResizable && (w(this, V, Fm).call(this), n(this, ge).classList.remove('hidden'));
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
    return n(this, At).commentPopupPositionInLayer;
  }

  set commentPopupPosition(t) {
    n(this, At).commentPopupPositionInLayer = t;
  }

  hasDefaultPopupPosition() {
    return n(this, At).hasDefaultPopupPosition();
  }

  get commentButtonWidth() {
    return n(this, At).commentButtonWidth;
  }

  get elementBeforePopup() {
    return this.div;
  }

  setCommentButtonStates(t) {
    n(this, At).setCommentButtonStates(t);
  }

  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== 'Enter') return;
    this._uiManager.setSelected(this), g(this, Zs, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height,
    });
    const e = n(this, ge).children;
    if (!n(this, ji)) {
      g(this, ji, Array.from(e));
      const a = w(this, V, Um).bind(this); const o = w(this, V, Gm).bind(this); const
        l = this._uiManager._signal;
      for (const h of n(this, ji)) {
        const d = h.getAttribute('data-resizer-name');
        h.setAttribute('role', 'spinbutton'), h.addEventListener('keydown', a, {
          signal: l,
        }), h.addEventListener('blur', o, {
          signal: l,
        }), h.addEventListener('focus', w(this, V, zm).bind(this, d), {
          signal: l,
        }), h.setAttribute('data-l10n-id', Y._l10nResizer[d]);
      }
    }
    const i = n(this, ji)[0];
    let s = 0;
    for (const a of e) {
      if (a === i) break;
      s++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, ji).length / 4);
    if (r !== s) {
      if (r < s) for (let o = 0; o < s - r; o++) n(this, ge).append(n(this, ge).firstChild);
      else if (r > s) for (let o = 0; o < r - s; o++) n(this, ge).firstChild.before(n(this, ge).lastChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, ji)[a++].getAttribute('data-resizer-name');
        o.setAttribute('data-l10n-id', Y._l10nResizer[h]);
      }
    }
    w(this, V, Ff).call(this, 0), g(this, Js, !0), n(this, ge).firstChild.focus({
      focusVisible: !0,
    }), t.preventDefault(), t.stopImmediatePropagation();
  }

  _resizeWithKeyboard(t, e) {
    n(this, Js) && w(this, V, Mf).call(this, n(this, sc), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0,
    });
  }

  _stopResizingWithKeyboard() {
    w(this, V, lh).call(this), this.div.focus();
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
    (e = this._editToolbar) == null || e.show(), (i = n(this, Dt)) == null || i.toggleAltTextBadge(!1);
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
    this.isSelected && (this.isSelected = !1, (t = n(this, ge)) == null || t.classList.add('hidden'), (e = this.div) == null || e.classList.remove('selectedEditor'), (i = this.div) != null && i.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0,
    }), (s = this._editToolbar) == null || s.hide(), (r = n(this, Dt)) == null || r.toggleAltTextBadge(!0), this.hasComment && this._uiManager.toggleComment(this, !1, !1));
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
    return n(this, nc);
  }

  set isEditing(t) {
    g(this, nc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
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
      n(this, Li) || g(this, Li, /* @__PURE__ */ new Map());
      const {
        action: i,
      } = t;
      let s = n(this, Li).get(i);
      s && clearTimeout(s), s = setTimeout(() => {
        this._reportTelemetry(t), n(this, Li).delete(i), n(this, Li).size === 0 && g(this, Li, null);
      }, Y._telemetryTimeout), n(this, Li).set(i, s);
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
    this.div && (this.div.tabIndex = 0), g(this, Bo, !1);
  }

  disable() {
    this.div && (this.div.tabIndex = -1), g(this, Bo, !0);
  }

  updateFakeAnnotationElement(t) {
    if (!n(this, ys) && !this.deleted) {
      g(this, ys, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      n(this, ys).remove(), g(this, ys, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && n(this, ys).updateEdited({
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
Jr = new WeakMap(), ji = new WeakMap(), Dt = new WeakMap(), At = new WeakMap(), Ks = new WeakMap(), Bo = new WeakMap(), Zn = new WeakMap(), ic = new WeakMap(), ge = new WeakMap(), Qr = new WeakMap(), Zs = new WeakMap(), ys = new WeakMap(), Jn = new WeakMap(), sc = new WeakMap(), ta = new WeakMap(), ni = new WeakMap(), nc = new WeakMap(), ea = new WeakMap(), Js = new WeakMap(), ws = new WeakMap(), Ho = new WeakMap(), $o = new WeakMap(), Li = new WeakMap(), ia = new WeakMap(), rc = new WeakMap(), ku = new WeakMap(), V = new WeakSet(), Rf = function ([t, e], i, s) {
  [i, s] = this.screenToPageTranslation(i, s), this.x += i / t, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, ac = new WeakSet(), kf = function (t, e, i) {
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
}, Hd = function (t) {
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
}, Fm = function () {
  if (n(this, ge)) return;
  g(this, ge, document.createElement('div')), n(this, ge).classList.add('resizers');
  const t = this._willKeepAspectRatio ? ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'] : ['topLeft', 'topMiddle', 'topRight', 'middleRight', 'bottomRight', 'bottomMiddle', 'bottomLeft', 'middleLeft']; const
    e = this._uiManager._signal;
  for (const i of t) {
    const s = document.createElement('div');
    n(this, ge).append(s), s.classList.add('resizer', i), s.setAttribute('data-resizer-name', i), s.addEventListener('pointerdown', w(this, V, Nm).bind(this, i), {
      signal: e,
    }), s.addEventListener('contextmenu', xi, {
      signal: e,
    }), s.tabIndex = -1;
  }
  this.div.prepend(n(this, ge));
}, Nm = function (t, e) {
  let d;
  e.preventDefault();
  const {
    isMac: i,
  } = de.platform;
  if (e.button !== 0 || e.ctrlKey && i) return;
  (d = n(this, Dt)) == null || d.toggle(!1);
  const s = this._isDraggable;
  this._isDraggable = !1, g(this, Qr, [e.screenX, e.screenY]);
  const r = new AbortController(); const
    a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener('pointermove', w(this, V, Mf).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a,
  }), window.addEventListener('touchmove', Nt, {
    passive: !1,
    signal: a,
  }), window.addEventListener('contextmenu', xi, {
    signal: a,
  }), g(this, Zs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height,
  });
  const o = this.parent.div.style.cursor; const
    l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    let u;
    r.abort(), this.parent.togglePointerEvents(!0), (u = n(this, Dt)) == null || u.toggle(!0), this._isDraggable = s, this.parent.div.style.cursor = o, this.div.style.cursor = l, w(this, V, $d).call(this);
  };
  window.addEventListener('pointerup', h, {
    signal: a,
  }), window.addEventListener('blur', h, {
    signal: a,
  });
}, Df = function (t, e, i, s) {
  this.width = i, this.height = s, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, $d = function () {
  if (!n(this, Zs)) return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: i,
    savedHeight: s,
  } = n(this, Zs);
  g(this, Zs, null);
  const r = this.x; const a = this.y; const o = this.width; const
    l = this.height;
  r === t && a === e && o === i && l === s || this.addCommands({
    cmd: w(this, V, Df).bind(this, r, a, o, l),
    undo: w(this, V, Df).bind(this, t, e, i, s),
    mustExec: !0,
  });
}, Mf = function (t, e) {
  const [i, s] = this.parentDimensions; const r = this.x; const a = this.y; const o = this.width; const l = this.height; const h = Y.MIN_SIZE / i; const d = Y.MIN_SIZE / s; const u = w(this, V, Hd).call(this, this.rotation); const p = (H, B) => [u[0] * H + u[2] * B, u[1] * H + u[3] * B]; const y = w(this, V, Hd).call(this, 360 - this.rotation); const
    S = (H, B) => [y[0] * H + y[2] * B, y[1] * H + y[3] * B];
  let v; let _; let x = !1; let
    T = !1;
  switch (t) {
    case 'topLeft':
      x = !0, v = (H, B) => [0, 0], _ = (H, B) => [H, B];
      break;
    case 'topMiddle':
      v = (H, B) => [H / 2, 0], _ = (H, B) => [H / 2, B];
      break;
    case 'topRight':
      x = !0, v = (H, B) => [H, 0], _ = (H, B) => [0, B];
      break;
    case 'middleRight':
      T = !0, v = (H, B) => [H, B / 2], _ = (H, B) => [0, B / 2];
      break;
    case 'bottomRight':
      x = !0, v = (H, B) => [H, B], _ = (H, B) => [0, 0];
      break;
    case 'bottomMiddle':
      v = (H, B) => [H / 2, B], _ = (H, B) => [H / 2, 0];
      break;
    case 'bottomLeft':
      x = !0, v = (H, B) => [0, B], _ = (H, B) => [H, 0];
      break;
    case 'middleLeft':
      T = !0, v = (H, B) => [0, B / 2], _ = (H, B) => [H, B / 2];
      break;
  }
  const E = v(o, l); const
    f = _(o, l);
  let m = p(...f);
  const A = Y._round(r + m[0]); const
    C = Y._round(a + m[1]);
  let P = 1; let R = 1; let k; let
    D;
  if (e.fromKeyboard) {
    ({
      deltaX: k,
      deltaY: D,
    } = e);
  } else {
    const {
      screenX: H,
      screenY: B,
    } = e; const
      [tt, st] = n(this, Qr);
    [k, D] = this.screenToPageTranslation(H - tt, B - st), n(this, Qr)[0] = H, n(this, Qr)[1] = B;
  }
  if ([k, D] = S(k / i, D / s), x) {
    const H = Math.hypot(o, l);
    P = R = Math.max(Math.min(Math.hypot(f[0] - E[0] - k, f[1] - E[1] - D) / H, 1 / o, 1 / l), h / o, d / l);
  } else T ? P = De(Math.abs(f[0] - E[0] - k), h, 1) / o : R = De(Math.abs(f[1] - E[1] - D), d, 1) / l;
  const I = Y._round(o * P); const
    O = Y._round(l * R);
  m = p(..._(I, O));
  const F = A - m[0]; const
    j = C - m[1];
  n(this, ni) || g(this, ni, [this.x, this.y, this.width, this.height]), this.width = I, this.height = O, this.x = F, this.y = j, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Om = function () {
  let t;
  g(this, Zs, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height,
  }), (t = n(this, Dt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Bm = function (t, e, i) {
  let r = 0.7 * (i / e) + 1 - 0.7;
  if (r === 1) return;
  const a = w(this, V, Hd).call(this, this.rotation); const o = (A, C) => [a[0] * A + a[2] * C, a[1] * A + a[3] * C]; const [l, h] = this.parentDimensions; const d = this.x; const u = this.y; const p = this.width; const y = this.height; const S = Y.MIN_SIZE / l; const
    v = Y.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / p, 1 / y), S / p, v / y);
  const _ = Y._round(p * r); const
    x = Y._round(y * r);
  if (_ === p && x === y) return;
  n(this, ni) || g(this, ni, [d, u, p, y]);
  const T = o(p / 2, y / 2); const E = Y._round(d + T[0]); const f = Y._round(u + T[1]); const
    m = o(_ / 2, x / 2);
  this.x = E - m[0], this.y = f - m[1], this.width = _, this.height = x, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Hm = function () {
  let t;
  (t = n(this, Dt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), w(this, V, $d).call(this);
}, Lf = function (t) {
  const {
    isMac: e,
  } = de.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, $m = function (t) {
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
    o = (h) => {
      s.abort(), g(this, Zn, null), g(this, ta, !1), this._uiManager.endDragSession() || w(this, V, Lf).call(this, h), i && this._onStopDragging();
    };
  e && (g(this, Ho, t.clientX), g(this, $o, t.clientY), g(this, Zn, t.pointerId), g(this, ic, t.pointerType), window.addEventListener('pointermove', (h) => {
    i || (i = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: d,
      clientY: u,
      pointerId: p,
    } = h;
    if (p !== n(this, Zn)) {
      Nt(h);
      return;
    }
    const [y, S] = this.screenToPageTranslation(d - n(this, Ho), u - n(this, $o));
    g(this, Ho, d), g(this, $o, u), this._uiManager.dragSelectedEditors(y, S);
  }, a), window.addEventListener('touchmove', Nt, a), window.addEventListener('pointerdown', (h) => {
    h.pointerType === n(this, ic) && (n(this, ia) || h.isPrimary) && o(h), Nt(h);
  }, a));
  const l = (h) => {
    if (!n(this, Zn) || n(this, Zn) === h.pointerId) {
      o(h);
      return;
    }
    Nt(h);
  };
  window.addEventListener('pointerup', l, {
    signal: r,
  }), window.addEventListener('blur', l, {
    signal: r,
  });
}, If = function () {
  if (n(this, Jn) || !this.div) return;
  g(this, Jn, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, Jn));
  this.div.addEventListener('focusin', this.focusin.bind(this), {
    signal: t,
  }), this.div.addEventListener('focusout', this.focusout.bind(this), {
    signal: t,
  });
}, Um = function (t) {
  Y._resizerKeyboardManager.exec(this, t);
}, Gm = function (t) {
  let e;
  n(this, Js) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, ge) && w(this, V, lh).call(this);
}, zm = function (t) {
  g(this, sc, n(this, Js) ? t : '');
}, Ff = function (t) {
  if (n(this, ji)) for (const e of n(this, ji)) e.tabIndex = t;
}, lh = function () {
  g(this, Js, !1), w(this, V, Ff).call(this, -1), w(this, V, $d).call(this);
}, b(Y, ac), M(Y, '_l10n', null), M(Y, '_l10nResizer', null), M(Y, '_borderLineWidth', -1), M(Y, '_colorManager', new vf()), M(Y, '_zIndex', 1), M(Y, '_telemetryTimeout', 1e3);
const Ct = Y;
class Rw extends Ct {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }

  serialize() {
    return this.serializeDeleted();
  }
}
const vg = 3285377520; const Ei = 4294901760; const
  ls = 65535;
class Wm {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : vg, this.h2 = t ? t & 4294967295 : vg;
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
    let o = 0; let l = 0; let h = this.h1; let
      d = this.h2;
    const u = 3432918353; const p = 461845907; const y = u & ls; const
      S = p & ls;
    for (let v = 0; v < s; v++) v & 1 ? (o = a[v], o = o * u & Ei | o * y & ls, o = o << 15 | o >>> 17, o = o * p & Ei | o * S & ls, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[v], l = l * u & Ei | l * y & ls, l = l << 15 | l >>> 17, l = l * p & Ei | l * S & ls, d ^= l, d = d << 13 | d >>> 19, d = d * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[s * 4 + 2] << 16;
      case 2:
        o ^= e[s * 4 + 1] << 8;
      case 1:
        o ^= e[s * 4], o = o * u & Ei | o * y & ls, o = o << 15 | o >>> 17, o = o * p & Ei | o * S & ls, s & 1 ? h ^= o : d ^= o;
    }
    this.h1 = h, this.h2 = d;
  }

  hexdigest() {
    let t = this.h1; let
      e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & Ei | t * 36045 & ls, e = e * 4283543511 & Ei | ((e << 16 | t >>> 16) * 2950163797 & Ei) >>> 16, t ^= e >>> 1, t = t * 444984403 & Ei | t * 60499 & ls, e = e * 3301882366 & Ei | ((e << 16 | t >>> 16) * 3120437893 & Ei) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, '0') + (e >>> 0).toString(16).padStart(8, '0');
  }
}
const Nf = Object.freeze({
  map: null,
  hash: '',
  transfer: void 0,
});
let sa; let na; let Qs; let me; let Du; let
  jm;
class Xp {
  constructor() {
    b(this, Du);
    b(this, sa, !1);
    b(this, na, null);
    b(this, Qs, null);
    b(this, me, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }

  getValue(t, e) {
    const i = n(this, me).get(t);
    return i === void 0 ? e : Object.assign(e, i);
  }

  getRawValue(t) {
    return n(this, me).get(t);
  }

  remove(t) {
    const e = n(this, me).get(t);
    if (e !== void 0 && (e instanceof Ct && n(this, Qs).delete(e.annotationElementId), n(this, me).delete(t), n(this, me).size === 0 && this.resetModified(), typeof this.onAnnotationEditor === 'function')) {
      for (const i of n(this, me).values()) if (i instanceof Ct) return;
      this.onAnnotationEditor(null);
    }
  }

  setValue(t, e) {
    const i = n(this, me).get(t);
    let s = !1;
    if (i !== void 0) for (const [r, a] of Object.entries(e)) i[r] !== a && (s = !0, i[r] = a);
    else s = !0, n(this, me).set(t, e);
    s && w(this, Du, jm).call(this), e instanceof Ct && ((n(this, Qs) || g(this, Qs, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), typeof this.onAnnotationEditor === 'function' && this.onAnnotationEditor(e.constructor._type));
  }

  has(t) {
    return n(this, me).has(t);
  }

  get size() {
    return n(this, me).size;
  }

  resetModified() {
    n(this, sa) && (g(this, sa, !1), typeof this.onResetModified === 'function' && this.onResetModified());
  }

  get print() {
    return new Vm(this);
  }

  get serializable() {
    if (n(this, me).size === 0) return Nf;
    const t = /* @__PURE__ */ new Map(); const e = new Wm(); const i = []; const
      s = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, me)) {
      const l = o instanceof Ct ? o.serialize(!1, s) : o;
      l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r) for (const a of t.values()) a.bitmap && i.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: i,
    } : Nf;
  }

  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let i = 0; let
      s = 0;
    for (const r of n(this, me).values()) {
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
      const l = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [h, d] of Object.entries(a)) {
        if (h === 'type') continue;
        let u = l.get(h);
        u || (u = /* @__PURE__ */ new Map(), l.set(h, u));
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
    g(this, na, null);
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
    if (n(this, na)) return n(this, na);
    const t = [];
    if (n(this, Qs)) for (const e of n(this, Qs).values()) e.serialize() && t.push(e.annotationElementId);
    return g(this, na, {
      ids: new Set(t),
      hash: t.join(','),
    });
  }

  [Symbol.iterator]() {
    return n(this, me).entries();
  }
}
sa = new WeakMap(), na = new WeakMap(), Qs = new WeakMap(), me = new WeakMap(), Du = new WeakSet(), jm = function () {
  n(this, sa) || (g(this, sa, !0), typeof this.onSetModified === 'function' && this.onSetModified());
};
let oc;
class Vm extends Xp {
  constructor(e) {
    super();
    b(this, oc);
    const {
      map: i,
      hash: s,
      transfer: r,
    } = e.serializable; const
      a = structuredClone(i, r ? {
        transfer: r,
      } : null);
    g(this, oc, {
      map: a,
      hash: s,
      transfer: r,
    });
  }

  get print() {
    Et('Should not call PrintAnnotationStorage.print');
  }

  get serializable() {
    return n(this, oc);
  }

  get modifiedIds() {
    return Z(this, 'modifiedIds', {
      ids: /* @__PURE__ */ new Set(),
      hash: '',
    });
  }
}
oc = new WeakMap();
let Uo;
class kw {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null,
  }) {
    b(this, Uo, /* @__PURE__ */ new Set());
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
    this.nativeFontFaces.clear(), n(this, Uo).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }

  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: i,
  }) {
    if (!(!t || n(this, Uo).has(t.loadedName))) {
      if (nt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: s,
          src: r,
          style: a,
        } = t; const
          o = new FontFace(s, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Uo).add(s), i == null || i(t);
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
    return Z(this, 'isFontLoadingAPISupported', t);
  }

  get isSyncFontLoadingSupported() {
    return Z(this, 'isSyncFontLoadingSupported', He || de.platform.isFirefox);
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
    return Z(this, '_loadTestFont', t);
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
    const l = o.getContext('2d');
    let h = 0;
    function d(f, m) {
      if (++h > 30) {
        X('Load test font never loaded.'), m();
        return;
      }
      if (l.font = `30px ${f}`, l.fillText('.', 0, 20), l.getImageData(0, 0, 1, 1).data[3] > 0) {
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
    r < u.length && (_ = _ - v + i(`${u}XXX`, r) | 0), p = s(p, S, 4, bw(_));
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
Uo = new WeakMap();
let ft;
class Dw {
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
    const t = `url(data:${this.mimetype};base64,${lm(this.data)});`;
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
function Mw(c) {
  if (c instanceof URL) return c.href;
  if (typeof c === 'string') {
    if (He) return c;
    const t = URL.parse(c, window.location);
    if (t) return t.href;
  }
  throw new Error('Invalid PDF url data: either string or URL-object is expected in the url property.');
}
function Lw(c) {
  if (He && typeof Buffer < 'u' && c instanceof Buffer) throw new Error('Please provide binary data as `Uint8Array`, rather than `Buffer`.');
  if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength) return c;
  if (typeof c === 'string') return gd(c);
  if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c === 'object' && !isNaN(c == null ? void 0 : c.length)) return new Uint8Array(c);
  throw new Error('Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.');
}
function Td(c) {
  if (typeof c !== 'string') return null;
  if (c.endsWith('/')) return c;
  throw new Error(`Invalid factory url: "${c}" must include trailing slash.`);
}
const Of = (c) => typeof c === 'object' && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0; const Iw = (c) => typeof c === 'object' && typeof (c == null ? void 0 : c.name) === 'string'; const
  qm = vw.bind(null, Of, Iw);
let tn; let
  Mu;
class Fw {
  constructor() {
    b(this, tn, /* @__PURE__ */ new Map());
    b(this, Mu, Promise.resolve());
  }

  postMessage(t, e) {
    const i = {
      data: structuredClone(t, e ? {
        transfer: e,
      } : null),
    };
    n(this, Mu).then(() => {
      for (const [s] of n(this, tn)) s.call(this, i);
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
    n(this, tn).set(e, s);
  }

  removeEventListener(t, e) {
    const i = n(this, tn).get(e);
    i == null || i(), n(this, tn).delete(e);
  }

  terminate() {
    for (const [, t] of n(this, tn)) t == null || t();
    n(this, tn).clear();
  }
}
tn = new WeakMap(), Mu = new WeakMap();
const Pd = {
  DATA: 1,
  ERROR: 2,
};
const qt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8,
};
function Sg() {
}
function ze(c) {
  if (c instanceof Tn || c instanceof fu || c instanceof pg || c instanceof Th || c instanceof nf) return c;
  switch (c instanceof Error || typeof c === 'object' && c !== null || Et('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
    case 'AbortException':
      return new Tn(c.message);
    case 'InvalidPDFException':
      return new fu(c.message);
    case 'PasswordException':
      return new pg(c.message, c.code);
    case 'ResponseException':
      return new Th(c.message, c.status, c.missing);
    case 'UnknownErrorException':
      return new nf(c.message, c.details);
  }
  return new nf(c.message, c.toString());
}
let Go; let Bi; let Xm; let Ym; let Km; let
  Ud;
class hh {
  constructor(t, e, i) {
    b(this, Bi);
    b(this, Go, new AbortController());
    this.sourceName = t, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), i.addEventListener('message', w(this, Bi, Xm).bind(this), {
      signal: n(this, Go).signal,
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
      l = this.comObj;
    return new ReadableStream({
      start: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r] = {
          controller: h,
          startCall: d,
          pullCall: null,
          cancelCall: null,
          isClosed: !1,
        }, l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: h.desiredSize,
        }, s), d.promise;
      },
      pull: (h) => {
        const d = Promise.withResolvers();
        return this.streamControllers[r].pullCall = d, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: qt.PULL,
          streamId: r,
          desiredSize: h.desiredSize,
        }), d.promise;
      },
      cancel: (h) => {
        nt(h instanceof Error, 'cancel must have a valid reason');
        const d = Promise.withResolvers();
        return this.streamControllers[r].cancelCall = d, this.streamControllers[r].isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: qt.CANCEL,
          streamId: r,
          reason: ze(h),
        }), d.promise;
      },
    }, i);
  }

  destroy() {
    let t;
    (t = n(this, Go)) == null || t.abort(), g(this, Go, null);
  }
}
Go = new WeakMap(), Bi = new WeakSet(), Xm = function ({
  data: t,
}) {
  if (t.targetName !== this.sourceName) return;
  if (t.stream) {
    w(this, Bi, Km).call(this, t);
    return;
  }
  if (t.callback) {
    const i = t.callbackId; const
      s = this.callbackCapabilities[i];
    if (!s) throw new Error(`Cannot resolve callback ${i}`);
    if (delete this.callbackCapabilities[i], t.callback === Pd.DATA) s.resolve(t.data);
    else if (t.callback === Pd.ERROR) s.reject(ze(t.reason));
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
        callback: Pd.DATA,
        callbackId: t.callbackId,
        data: a,
      });
    }, (a) => {
      r.postMessage({
        sourceName: i,
        targetName: s,
        callback: Pd.ERROR,
        callbackId: t.callbackId,
        reason: ze(a),
      });
    });
    return;
  }
  if (t.streamId) {
    w(this, Bi, Ym).call(this, t);
    return;
  }
  e(t.data);
}, Ym = function (t) {
  const e = t.streamId; const i = this.sourceName; const s = t.sourceName; const r = this.comObj; const a = this; const o = this.actionHandler[t.action]; const
    l = {
      enqueue(h, d = 1, u) {
        if (this.isCancelled) return;
        const p = this.desiredSize;
        this.desiredSize -= d, p > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.ENQUEUE,
          streamId: e,
          chunk: h,
        }, u);
      },
      close() {
        this.isCancelled || (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.CLOSE,
          streamId: e,
        }), delete a.streamSinks[e]);
      },
      error(h) {
        nt(h instanceof Error, 'error must have a valid reason'), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.ERROR,
          streamId: e,
          reason: ze(h),
        }));
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: !1,
      desiredSize: t.desiredSize,
      ready: null,
    };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, this.streamSinks[e] = l, Promise.try(o, t.data, l).then(() => {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: qt.START_COMPLETE,
      streamId: e,
      success: !0,
    });
  }, (h) => {
    r.postMessage({
      sourceName: i,
      targetName: s,
      stream: qt.START_COMPLETE,
      streamId: e,
      reason: ze(h),
    });
  });
}, Km = function (t) {
  const e = t.streamId; const i = this.sourceName; const s = t.sourceName; const r = this.comObj; const a = this.streamControllers[e]; const
    o = this.streamSinks[e];
  switch (t.stream) {
    case qt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(ze(t.reason));
      break;
    case qt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(ze(t.reason));
      break;
    case qt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.PULL_COMPLETE,
          streamId: e,
          success: !0,
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || Sg).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.PULL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (h) => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.PULL_COMPLETE,
          streamId: e,
          reason: ze(h),
        });
      });
      break;
    case qt.ENQUEUE:
      if (nt(a, 'enqueue should have stream controller'), a.isClosed) break;
      a.controller.enqueue(t.chunk);
      break;
    case qt.CLOSE:
      if (nt(a, 'close should have stream controller'), a.isClosed) break;
      a.isClosed = !0, a.controller.close(), w(this, Bi, Ud).call(this, a, e);
      break;
    case qt.ERROR:
      nt(a, 'error should have stream controller'), a.controller.error(ze(t.reason)), w(this, Bi, Ud).call(this, a, e);
      break;
    case qt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(ze(t.reason)), w(this, Bi, Ud).call(this, a, e);
      break;
    case qt.CANCEL:
      if (!o) break;
      const l = ze(t.reason);
      Promise.try(o.onCancel || Sg, l).then(() => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.CANCEL_COMPLETE,
          streamId: e,
          success: !0,
        });
      }, (h) => {
        r.postMessage({
          sourceName: i,
          targetName: s,
          stream: qt.CANCEL_COMPLETE,
          streamId: e,
          reason: ze(h),
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error('Unexpected stream case');
  }
}, Ud = async function (t, e) {
  let i; let s; let
    r;
  await Promise.allSettled([(i = t.startCall) == null ? void 0 : i.promise, (s = t.pullCall) == null ? void 0 : s.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), delete this.streamControllers[e];
};
let lc;
class Zm {
  constructor({
    enableHWA: t = !1,
  }) {
    b(this, lc, !1);
    g(this, lc, t);
  }

  create(t, e) {
    if (t <= 0 || e <= 0) throw new Error('Invalid canvas size');
    const i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext('2d', {
        willReadFrequently: !n(this, lc),
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
lc = new WeakMap();
class Nw extends Zm {
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
class Jm {
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
class xg extends Jm {
  async _fetch(t) {
    const e = await Kl(t, this.isCompressed ? 'arraybuffer' : 'text');
    return e instanceof ArrayBuffer ? new Uint8Array(e) : gd(e);
  }
}
class Qm {
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
let ra; let zo; let en; let sn; let Te; let aa; let oa; let $; let Ee; let ch; let ao; let Gd; let oo; let tb; let Bf; let lo; let dh; let uh; let Hf; let
  fh;
class Ow extends Qm {
  constructor({
    docId: e,
    ownerDocument: i = globalThis.document,
  }) {
    super();
    b(this, $);
    b(this, ra);
    b(this, zo);
    b(this, en);
    b(this, sn);
    b(this, Te);
    b(this, aa);
    b(this, oa, 0);
    g(this, sn, e), g(this, Te, i);
  }

  addFilter(e) {
    if (!e) return 'none';
    let i = n(this, $, Ee).get(e);
    if (i) return i;
    const [s, r, a] = w(this, $, Gd).call(this, e); const
      o = e.length === 1 ? s : `${s}${r}${a}`;
    if (i = n(this, $, Ee).get(o), i) return n(this, $, Ee).set(e, i), i;
    const l = `g_${n(this, sn)}_transfer_map_${Zt(this, oa)._++}`; const
      h = w(this, $, oo).call(this, l);
    n(this, $, Ee).set(e, h), n(this, $, Ee).set(o, h);
    const d = w(this, $, lo).call(this, l);
    return w(this, $, uh).call(this, s, r, a, d), h;
  }

  addHCMFilter(e, i) {
    let S;
    const s = `${e}-${i}`; const
      r = 'base';
    let a = n(this, $, ch).get(r);
    if ((a == null ? void 0 : a.key) === s || (a ? ((S = a.filter) == null || S.remove(), a.key = s, a.url = 'none', a.filter = null) : (a = {
      key: s,
      url: 'none',
      filter: null,
    }, n(this, $, ch).set(r, a)), !e || !i)) return a.url;
    const o = w(this, $, fh).call(this, e);
    e = G.makeHexColor(...o);
    const l = w(this, $, fh).call(this, i);
    if (i = G.makeHexColor(...l), n(this, $, ao).style.color = '', e === '#000000' && i === '#ffffff' || e === i) return a.url;
    const h = new Array(256);
    for (let v = 0; v <= 255; v++) {
      const _ = v / 255;
      h[v] = _ <= 0.03928 ? _ / 12.92 : ((_ + 0.055) / 1.055) ** 2.4;
    }
    const d = h.join(','); const u = `g_${n(this, sn)}_hcm_filter`; const
      p = a.filter = w(this, $, lo).call(this, u);
    w(this, $, uh).call(this, d, d, d, p), w(this, $, Bf).call(this, p);
    const y = (v, _) => {
      const x = o[v] / 255; const T = l[v] / 255; const
        E = new Array(_ + 1);
      for (let f = 0; f <= _; f++) E[f] = x + f / _ * (T - x);
      return E.join(',');
    };
    return w(this, $, uh).call(this, y(0, 5), y(1, 5), y(2, 5), p), a.url = w(this, $, oo).call(this, u), a.url;
  }

  addAlphaFilter(e) {
    let i = n(this, $, Ee).get(e);
    if (i) return i;
    const [s] = w(this, $, Gd).call(this, [e]); const
      r = `alpha_${s}`;
    if (i = n(this, $, Ee).get(r), i) return n(this, $, Ee).set(e, i), i;
    const a = `g_${n(this, sn)}_alpha_map_${Zt(this, oa)._++}`; const
      o = w(this, $, oo).call(this, a);
    n(this, $, Ee).set(e, o), n(this, $, Ee).set(r, o);
    const l = w(this, $, lo).call(this, a);
    return w(this, $, Hf).call(this, s, l), o;
  }

  addLuminosityFilter(e) {
    let i = n(this, $, Ee).get(e || 'luminosity');
    if (i) return i;
    let s; let
      r;
    if (e ? ([s] = w(this, $, Gd).call(this, [e]), r = `luminosity_${s}`) : r = 'luminosity', i = n(this, $, Ee).get(r), i) return n(this, $, Ee).set(e, i), i;
    const a = `g_${n(this, sn)}_luminosity_map_${Zt(this, oa)._++}`; const
      o = w(this, $, oo).call(this, a);
    n(this, $, Ee).set(e, o), n(this, $, Ee).set(r, o);
    const l = w(this, $, lo).call(this, a);
    return w(this, $, tb).call(this, l), e && w(this, $, Hf).call(this, s, l), o;
  }

  addHighlightHCMFilter(e, i, s, r, a) {
    let T;
    const o = `${i}-${s}-${r}-${a}`;
    let l = n(this, $, ch).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((T = l.filter) == null || T.remove(), l.key = o, l.url = 'none', l.filter = null) : (l = {
      key: o,
      url: 'none',
      filter: null,
    }, n(this, $, ch).set(e, l)), !i || !s)) return l.url;
    const [h, d] = [i, s].map(w(this, $, fh).bind(this));
    let u = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]); let p = Math.round(0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]); let
      [y, S] = [r, a].map(w(this, $, fh).bind(this));
    p < u && ([u, p, y, S] = [p, u, S, y]), n(this, $, ao).style.color = '';
    const v = (E, f, m) => {
      const A = new Array(256); const C = (p - u) / m; const P = E / 255; const
        R = (f - E) / (255 * m);
      let k = 0;
      for (let D = 0; D <= m; D++) {
        const I = Math.round(u + D * C); const
          O = P + D * R;
        for (let F = k; F <= I; F++) A[F] = O;
        k = I + 1;
      }
      for (let D = k; D < 256; D++) A[D] = A[k - 1];
      return A.join(',');
    }; const _ = `g_${n(this, sn)}_hcm_${e}_filter`; const
      x = l.filter = w(this, $, lo).call(this, _);
    return w(this, $, Bf).call(this, x), w(this, $, uh).call(this, v(y[0], S[0], 5), v(y[1], S[1], 5), v(y[2], S[2], 5), x), l.url = w(this, $, oo).call(this, _), l.url;
  }

  destroy(e = !1) {
    let i; let s; let r; let
      a;
    e && ((i = n(this, aa)) != null && i.size) || ((s = n(this, en)) == null || s.parentNode.parentNode.remove(), g(this, en, null), (r = n(this, zo)) == null || r.clear(), g(this, zo, null), (a = n(this, aa)) == null || a.clear(), g(this, aa, null), g(this, oa, 0));
  }
}
ra = new WeakMap(), zo = new WeakMap(), en = new WeakMap(), sn = new WeakMap(), Te = new WeakMap(), aa = new WeakMap(), oa = new WeakMap(), $ = new WeakSet(), Ee = function () {
  return n(this, zo) || g(this, zo, /* @__PURE__ */ new Map());
}, ch = function () {
  return n(this, aa) || g(this, aa, /* @__PURE__ */ new Map());
}, ao = function () {
  if (!n(this, en)) {
    const e = n(this, Te).createElement('div'); const
      {
        style: i,
      } = e;
    i.visibility = 'hidden', i.contain = 'strict', i.width = i.height = 0, i.position = 'absolute', i.top = i.left = 0, i.zIndex = -1;
    const s = n(this, Te).createElementNS(Bs, 'svg');
    s.setAttribute('width', 0), s.setAttribute('height', 0), g(this, en, n(this, Te).createElementNS(Bs, 'defs')), e.append(s), s.append(n(this, en)), n(this, Te).body.append(e);
  }
  return n(this, en);
}, Gd = function (e) {
  if (e.length === 1) {
    const h = e[0]; const
      d = new Array(256);
    for (let p = 0; p < 256; p++) d[p] = h[p] / 255;
    const u = d.join(',');
    return [u, u, u];
  }
  const [i, s, r] = e; const a = new Array(256); const o = new Array(256); const
    l = new Array(256);
  for (let h = 0; h < 256; h++) a[h] = i[h] / 255, o[h] = s[h] / 255, l[h] = r[h] / 255;
  return [a.join(','), o.join(','), l.join(',')];
}, oo = function (e) {
  if (n(this, ra) === void 0) {
    g(this, ra, '');
    const i = n(this, Te).URL;
    i !== n(this, Te).baseURI && (bd(i) ? X('#createUrl: ignore "data:"-URL for performance reasons.') : g(this, ra, zp(i, '')));
  }
  return `url(${n(this, ra)}#${e})`;
}, tb = function (e) {
  const i = n(this, Te).createElementNS(Bs, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0'), e.append(i);
}, Bf = function (e) {
  const i = n(this, Te).createElementNS(Bs, 'feColorMatrix');
  i.setAttribute('type', 'matrix'), i.setAttribute('values', '0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0'), e.append(i);
}, lo = function (e) {
  const i = n(this, Te).createElementNS(Bs, 'filter');
  return i.setAttribute('color-interpolation-filters', 'sRGB'), i.setAttribute('id', e), n(this, $, ao).append(i), i;
}, dh = function (e, i, s) {
  const r = n(this, Te).createElementNS(Bs, i);
  r.setAttribute('type', 'discrete'), r.setAttribute('tableValues', s), e.append(r);
}, uh = function (e, i, s, r) {
  const a = n(this, Te).createElementNS(Bs, 'feComponentTransfer');
  r.append(a), w(this, $, dh).call(this, a, 'feFuncR', e), w(this, $, dh).call(this, a, 'feFuncG', i), w(this, $, dh).call(this, a, 'feFuncB', s);
}, Hf = function (e, i) {
  const s = n(this, Te).createElementNS(Bs, 'feComponentTransfer');
  i.append(s), w(this, $, dh).call(this, s, 'feFuncA', e);
}, fh = function (e) {
  return n(this, $, ao).style.color = e, Zl(getComputedStyle(n(this, $, ao)).getPropertyValue('color'));
};
class eb {
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
class Eg extends eb {
  async _fetch(t) {
    const e = await Kl(t, 'arraybuffer');
    return new Uint8Array(e);
  }
}
class ib {
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
class _g extends ib {
  async _fetch(t) {
    const e = await Kl(t, 'arraybuffer');
    return new Uint8Array(e);
  }
}
He && X('Please use the `legacy` build in Node.js environments.');
async function Yp(c) {
  const e = await process.getBuiltinModule('fs').promises.readFile(c);
  return new Uint8Array(e);
}
class Bw extends Qm {
}
class Hw extends Zm {
  _createCanvas(t, e) {
    return process.getBuiltinModule('module').createRequire(import.meta.url)('@napi-rs/canvas').createCanvas(t, e);
  }
}
class $w extends Jm {
  async _fetch(t) {
    return Yp(t);
  }
}
class Uw extends eb {
  async _fetch(t) {
    return Yp(t);
  }
}
class Gw extends ib {
  async _fetch(t) {
    return Yp(t);
  }
}
const so = '__forcedDependency';
const {
  floor: Cg,
  ceil: Tg,
} = Math;
function Rd(c, t, e, i, s, r) {
  c[t * 4 + 0] = Math.min(c[t * 4 + 0], e), c[t * 4 + 1] = Math.min(c[t * 4 + 1], i), c[t * 4 + 2] = Math.max(c[t * 4 + 2], s), c[t * 4 + 3] = Math.max(c[t * 4 + 3], r);
}
const $f = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
let Wo; let
  Qn;
class zw {
  constructor(t, e) {
    b(this, Wo);
    b(this, Qn);
    g(this, Wo, t), g(this, Qn, e);
  }

  get length() {
    return n(this, Wo).length;
  }

  isEmpty(t) {
    return n(this, Wo)[t] === $f;
  }

  minX(t) {
    return n(this, Qn)[t * 4 + 0] / 256;
  }

  minY(t) {
    return n(this, Qn)[t * 4 + 1] / 256;
  }

  maxX(t) {
    return (n(this, Qn)[t * 4 + 2] + 1) / 256;
  }

  maxY(t) {
    return (n(this, Qn)[t * 4 + 3] + 1) / 256;
  }
}
Wo = new WeakMap(), Qn = new WeakMap();
const kd = (c, t) => {
  if (!c) return;
  let e = c.get(t);
  return e || (e = {
    dependencies: /* @__PURE__ */ new Set(),
    isRenderingOperation: !1,
  }, c.set(t, e)), e;
};
let Ve; let qe; let la; let Vi; let ha; let nn; let ut; let pt; let rn; let Xe; let hc; let jo; let ca; let da; let an; let Pe; let As; let cc; let
  Uf;
class Ww {
  constructor(t, e, i = !1) {
    b(this, cc);
    b(this, Ve, {
      __proto__: null,
    });
    b(this, qe, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [so]: [],
    });
    b(this, la, /* @__PURE__ */ new Map());
    b(this, Vi, []);
    b(this, ha, []);
    b(this, nn, [[1, 0, 0, 1, 0, 0]]);
    b(this, ut, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    b(this, pt, new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
    b(this, rn, -1);
    b(this, Xe, /* @__PURE__ */ new Set());
    b(this, hc, /* @__PURE__ */ new Map());
    b(this, jo, /* @__PURE__ */ new Map());
    b(this, ca);
    b(this, da);
    b(this, an);
    b(this, Pe);
    b(this, As);
    g(this, ca, t.width), g(this, da, t.height), w(this, cc, Uf).call(this, e), i && g(this, As, /* @__PURE__ */ new Map());
  }

  growOperationsCount(t) {
    t >= n(this, Pe).length && w(this, cc, Uf).call(this, t, n(this, Pe));
  }

  save(t) {
    return g(this, Ve, {
      __proto__: n(this, Ve),
    }), g(this, qe, {
      __proto__: n(this, qe),
      transform: {
        __proto__: n(this, qe).transform,
      },
      moveText: {
        __proto__: n(this, qe).moveText,
      },
      sameLineText: {
        __proto__: n(this, qe).sameLineText,
      },
      [so]: {
        __proto__: n(this, qe)[so],
      },
    }), g(this, ut, {
      __proto__: n(this, ut),
    }), n(this, Vi).push(t), this;
  }

  restore(t) {
    let s;
    const e = Object.getPrototypeOf(n(this, Ve));
    if (e === null) return this;
    g(this, Ve, e), g(this, qe, Object.getPrototypeOf(n(this, qe))), g(this, ut, Object.getPrototypeOf(n(this, ut)));
    const i = n(this, Vi).pop();
    return i !== void 0 && ((s = kd(n(this, As), t)) == null || s.dependencies.add(i), n(this, Pe)[t] = n(this, Pe)[i]), this;
  }

  recordOpenMarker(t) {
    return n(this, Vi).push(t), this;
  }

  getOpenMarker() {
    return n(this, Vi).length === 0 ? null : n(this, Vi).at(-1);
  }

  recordCloseMarker(t) {
    let i;
    const e = n(this, Vi).pop();
    return e !== void 0 && ((i = kd(n(this, As), t)) == null || i.dependencies.add(e), n(this, Pe)[t] = n(this, Pe)[e]), this;
  }

  beginMarkedContent(t) {
    return n(this, ha).push(t), this;
  }

  endMarkedContent(t) {
    let i;
    const e = n(this, ha).pop();
    return e !== void 0 && ((i = kd(n(this, As), t)) == null || i.dependencies.add(e), n(this, Pe)[t] = n(this, Pe)[e]), this;
  }

  pushBaseTransform(t) {
    return n(this, nn).push(G.multiplyByDOMMatrix(n(this, nn).at(-1), t.getTransform())), this;
  }

  popBaseTransform() {
    return n(this, nn).length > 1 && n(this, nn).pop(), this;
  }

  recordSimpleData(t, e) {
    return n(this, Ve)[t] = e, this;
  }

  recordIncrementalData(t, e) {
    return n(this, qe)[t].push(e), this;
  }

  resetIncrementalData(t, e) {
    return n(this, qe)[t].length = 0, this;
  }

  recordNamedData(t, e) {
    return n(this, la).set(t, e), this;
  }

  recordSimpleDataFromNamed(t, e, i) {
    n(this, Ve)[t] = n(this, la).get(e) ?? i;
  }

  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData(so, e), this;
  }

  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t) e in n(this, Ve) && this.recordFutureForcedDependency(e, n(this, Ve)[e]);
    return this;
  }

  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, Xe)) this.recordFutureForcedDependency(so, t);
    return this;
  }

  resetBBox(t) {
    return n(this, rn) !== t && (g(this, rn, t), n(this, pt)[0] = 1 / 0, n(this, pt)[1] = 1 / 0, n(this, pt)[2] = -1 / 0, n(this, pt)[3] = -1 / 0), this;
  }

  recordClipBox(t, e, i, s, r, a) {
    const o = G.multiplyByDOMMatrix(n(this, nn).at(-1), e.getTransform()); const
      l = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    G.axialAlignedBoundingBox([i, r, s, a], o, l);
    const h = G.intersect(n(this, ut), l);
    return h ? (n(this, ut)[0] = h[0], n(this, ut)[1] = h[1], n(this, ut)[2] = h[2], n(this, ut)[3] = h[3]) : (n(this, ut)[0] = n(this, ut)[1] = 1 / 0, n(this, ut)[2] = n(this, ut)[3] = -1 / 0), this;
  }

  recordBBox(t, e, i, s, r, a) {
    const o = n(this, ut);
    if (o[0] === 1 / 0) return this;
    const l = G.multiplyByDOMMatrix(n(this, nn).at(-1), e.getTransform());
    if (o[0] === -1 / 0) return G.axialAlignedBoundingBox([i, r, s, a], l, n(this, pt)), this;
    const h = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
    return G.axialAlignedBoundingBox([i, r, s, a], l, h), n(this, pt)[0] = Math.min(n(this, pt)[0], Math.max(h[0], o[0])), n(this, pt)[1] = Math.min(n(this, pt)[1], Math.max(h[1], o[1])), n(this, pt)[2] = Math.max(n(this, pt)[2], Math.min(h[2], o[2])), n(this, pt)[3] = Math.max(n(this, pt)[3], Math.min(h[3], o[3])), this;
  }

  recordCharacterBBox(t, e, i, s = 1, r = 0, a = 0, o) {
    const l = i.bbox;
    let h; let
      d;
    if (l && (h = l[2] !== l[0] && l[3] !== l[1] && n(this, jo).get(i), h !== !1 && (d = [0, 0, 0, 0], G.axialAlignedBoundingBox(l, i.fontMatrix, d), (s !== 1 || r !== 0 || a !== 0) && G.scaleMinMax([s, 0, 0, -s, r, a], d), h))) return this.recordBBox(t, e, d[0], d[2], d[1], d[3]);
    if (!o) return this.recordFullPageBBox(t);
    const u = o();
    return l && d && h === void 0 && (h = d[0] <= r - u.actualBoundingBoxLeft && d[2] >= r + u.actualBoundingBoxRight && d[1] <= a - u.actualBoundingBoxAscent && d[3] >= a + u.actualBoundingBoxDescent, n(this, jo).set(i, h), h) ? this.recordBBox(t, e, d[0], d[2], d[1], d[3]) : this.recordBBox(t, e, r - u.actualBoundingBoxLeft, r + u.actualBoundingBoxRight, a - u.actualBoundingBoxAscent, a + u.actualBoundingBoxDescent);
  }

  recordFullPageBBox(t) {
    return n(this, pt)[0] = Math.max(0, n(this, ut)[0]), n(this, pt)[1] = Math.max(0, n(this, ut)[1]), n(this, pt)[2] = Math.min(n(this, ca), n(this, ut)[2]), n(this, pt)[3] = Math.min(n(this, da), n(this, ut)[3]), this;
  }

  getSimpleIndex(t) {
    return n(this, Ve)[t];
  }

  recordDependencies(t, e) {
    const i = n(this, Xe); const s = n(this, Ve); const
      r = n(this, qe);
    for (const a of e) a in n(this, Ve) ? i.add(s[a]) : a in r && r[a].forEach(i.add, i);
    return this;
  }

  recordNamedDependency(t, e) {
    return n(this, la).has(e) && n(this, Xe).add(n(this, la).get(e)), this;
  }

  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [so]), n(this, As)) {
      const i = kd(n(this, As), t); const
        {
          dependencies: s,
        } = i;
      n(this, Xe).forEach(s.add, s), n(this, Vi).forEach(s.add, s), n(this, ha).forEach(s.add, s), s.delete(t), i.isRenderingOperation = !0;
    }
    if (n(this, rn) === t) {
      const i = Cg(n(this, pt)[0] * 256 / n(this, ca)); const s = Cg(n(this, pt)[1] * 256 / n(this, da)); const r = Tg(n(this, pt)[2] * 256 / n(this, ca)); const
        a = Tg(n(this, pt)[3] * 256 / n(this, da));
      Rd(n(this, an), t, i, s, r, a);
      for (const o of n(this, Xe)) o !== t && Rd(n(this, an), o, i, s, r, a);
      for (const o of n(this, Vi)) o !== t && Rd(n(this, an), o, i, s, r, a);
      for (const o of n(this, ha)) o !== t && Rd(n(this, an), o, i, s, r, a);
      e || (n(this, Xe).clear(), g(this, rn, -1));
    }
    return this;
  }

  recordShowTextOperation(t, e = !1) {
    const i = Array.from(n(this, Xe));
    this.recordOperation(t, e), this.recordIncrementalData('sameLineText', t);
    for (const s of i) this.recordIncrementalData('sameLineText', s);
    return this;
  }

  bboxToClipBoxDropOperation(t, e = !1) {
    return n(this, rn) === t && (g(this, rn, -1), n(this, ut)[0] = Math.max(n(this, ut)[0], n(this, pt)[0]), n(this, ut)[1] = Math.max(n(this, ut)[1], n(this, pt)[1]), n(this, ut)[2] = Math.min(n(this, ut)[2], n(this, pt)[2]), n(this, ut)[3] = Math.min(n(this, ut)[3], n(this, pt)[3]), e || n(this, Xe).clear()), this;
  }

  _takePendingDependencies() {
    const t = n(this, Xe);
    return g(this, Xe, /* @__PURE__ */ new Set()), t;
  }

  _extractOperation(t) {
    const e = n(this, hc).get(t);
    return n(this, hc).delete(t), e;
  }

  _pushPendingDependencies(t) {
    for (const e of t) n(this, Xe).add(e);
  }

  take() {
    return n(this, jo).clear(), new zw(n(this, Pe), n(this, an));
  }

  takeDebugMetadata() {
    return n(this, As);
  }
}
Ve = new WeakMap(), qe = new WeakMap(), la = new WeakMap(), Vi = new WeakMap(), ha = new WeakMap(), nn = new WeakMap(), ut = new WeakMap(), pt = new WeakMap(), rn = new WeakMap(), Xe = new WeakMap(), hc = new WeakMap(), jo = new WeakMap(), ca = new WeakMap(), da = new WeakMap(), an = new WeakMap(), Pe = new WeakMap(), As = new WeakMap(), cc = new WeakSet(), Uf = function (t, e) {
  const i = new ArrayBuffer(t * 4);
  g(this, an, new Uint8ClampedArray(i)), g(this, Pe, new Uint32Array(i)), e && e.length > 0 ? (n(this, Pe).set(e), n(this, Pe).fill($f, e.length)) : n(this, Pe).fill($f);
};
let vt; let Ht; let qi; let Vo; let
  qo;
const og = class og {
  constructor(t, e, i) {
    b(this, vt);
    b(this, Ht);
    b(this, qi);
    b(this, Vo, 0);
    b(this, qo, 0);
    if (t instanceof og && n(t, qi) === !!i) return t;
    g(this, vt, t), g(this, Ht, e), g(this, qi, !!i);
  }

  growOperationsCount() {
    throw new Error('Unreachable');
  }

  save(t) {
    return Zt(this, qo)._++, n(this, vt).save(n(this, Ht)), this;
  }

  restore(t) {
    return n(this, qo) > 0 && (n(this, vt).restore(n(this, Ht)), Zt(this, qo)._--), this;
  }

  recordOpenMarker(t) {
    return Zt(this, Vo)._++, this;
  }

  getOpenMarker() {
    return n(this, Vo) > 0 ? n(this, Ht) : n(this, vt).getOpenMarker();
  }

  recordCloseMarker(t) {
    return Zt(this, Vo)._--, this;
  }

  beginMarkedContent(t) {
    return this;
  }

  endMarkedContent(t) {
    return this;
  }

  pushBaseTransform(t) {
    return n(this, vt).pushBaseTransform(t), this;
  }

  popBaseTransform() {
    return n(this, vt).popBaseTransform(), this;
  }

  recordSimpleData(t, e) {
    return n(this, vt).recordSimpleData(t, n(this, Ht)), this;
  }

  recordIncrementalData(t, e) {
    return n(this, vt).recordIncrementalData(t, n(this, Ht)), this;
  }

  resetIncrementalData(t, e) {
    return n(this, vt).resetIncrementalData(t, n(this, Ht)), this;
  }

  recordNamedData(t, e) {
    return this;
  }

  recordSimpleDataFromNamed(t, e, i) {
    return n(this, vt).recordSimpleDataFromNamed(t, e, n(this, Ht)), this;
  }

  recordFutureForcedDependency(t, e) {
    return n(this, vt).recordFutureForcedDependency(t, n(this, Ht)), this;
  }

  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, vt).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }

  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, vt).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }

  resetBBox(t) {
    return n(this, qi) || n(this, vt).resetBBox(n(this, Ht)), this;
  }

  recordClipBox(t, e, i, s, r, a) {
    return n(this, qi) || n(this, vt).recordClipBox(n(this, Ht), e, i, s, r, a), this;
  }

  recordBBox(t, e, i, s, r, a) {
    return n(this, qi) || n(this, vt).recordBBox(n(this, Ht), e, i, s, r, a), this;
  }

  recordCharacterBBox(t, e, i, s, r, a, o) {
    return n(this, qi) || n(this, vt).recordCharacterBBox(n(this, Ht), e, i, s, r, a, o), this;
  }

  recordFullPageBBox(t) {
    return n(this, qi) || n(this, vt).recordFullPageBBox(n(this, Ht)), this;
  }

  getSimpleIndex(t) {
    return n(this, vt).getSimpleIndex(t);
  }

  recordDependencies(t, e) {
    return n(this, vt).recordDependencies(n(this, Ht), e), this;
  }

  recordNamedDependency(t, e) {
    return n(this, vt).recordNamedDependency(n(this, Ht), e), this;
  }

  recordOperation(t) {
    return n(this, vt).recordOperation(n(this, Ht), !0), this;
  }

  recordShowTextOperation(t) {
    return n(this, vt).recordShowTextOperation(n(this, Ht), !0), this;
  }

  bboxToClipBoxDropOperation(t) {
    return n(this, qi) || n(this, vt).bboxToClipBoxDropOperation(n(this, Ht), !0), this;
  }

  take() {
    throw new Error('Unreachable');
  }

  takeDebugMetadata() {
    throw new Error('Unreachable');
  }
};
vt = new WeakMap(), Ht = new WeakMap(), qi = new WeakMap(), Vo = new WeakMap(), qo = new WeakMap();
const mu = og;
const _i = {
  stroke: ['path', 'transform', 'filter', 'strokeColor', 'strokeAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'dash'],
  fill: ['path', 'transform', 'filter', 'fillColor', 'fillAlpha', 'globalCompositeOperation', 'SMask'],
  imageXObject: ['transform', 'SMask', 'filter', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation'],
  rawFillPath: ['filter', 'fillColor', 'fillAlpha'],
  showText: ['transform', 'leading', 'charSpacing', 'wordSpacing', 'hScale', 'textRise', 'moveText', 'textMatrix', 'font', 'fontObj', 'filter', 'fillColor', 'textRenderingMode', 'SMask', 'fillAlpha', 'strokeAlpha', 'globalCompositeOperation', 'sameLineText'],
  transform: ['transform'],
  transformAndFill: ['transform', 'fillColor'],
}; const
  we = {
    FILL: 'Fill',
    STROKE: 'Stroke',
    SHADING: 'Shading',
  };
function Gf(c, t) {
  if (!t) return;
  const e = t[2] - t[0]; const i = t[3] - t[1]; const
    s = new Path2D();
  s.rect(t[0], t[1], e, i), c.clip(s);
}
class Kp {
  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern() {
    Et('Abstract method `getPattern` called.');
  }
}
class jw extends Kp {
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
    if (s === we.STROKE || s === we.FILL) {
      const a = e.current.getClippedPathBoundingBox(s, Ft(t)) || [0, 0, 0, 0]; const o = Math.ceil(a[2] - a[0]) || 1; const l = Math.ceil(a[3] - a[1]) || 1; const h = e.cachedCanvases.getCanvas('pattern', o, l); const
        d = h.context;
      d.clearRect(0, 0, d.canvas.width, d.canvas.height), d.beginPath(), d.rect(0, 0, d.canvas.width, d.canvas.height), d.translate(-a[0], -a[1]), i = G.transform(i, [1, 0, 0, 1, a[0], a[1]]), d.transform(...e.baseTransform), this.matrix && d.transform(...this.matrix), Gf(d, this._bbox), d.fillStyle = this._createGradient(d), d.fill(), r = t.createPattern(h.canvas, 'no-repeat');
      const u = new DOMMatrix(i);
      r.setTransform(u);
    } else Gf(t, this._bbox), r = this._createGradient(t);
    return r;
  }
}
function of(c, t, e, i, s, r, a, o) {
  const l = t.coords; const h = t.colors; const d = c.data; const
    u = c.width * 4;
  let p;
  l[e + 1] > l[i + 1] && (p = e, e = i, i = p, p = r, r = a, a = p), l[i + 1] > l[s + 1] && (p = i, i = s, s = p, p = a, a = o, o = p), l[e + 1] > l[i + 1] && (p = e, e = i, i = p, p = r, r = a, a = p);
  const y = (l[e] + t.offsetX) * t.scaleX; const S = (l[e + 1] + t.offsetY) * t.scaleY; const v = (l[i] + t.offsetX) * t.scaleX; const _ = (l[i + 1] + t.offsetY) * t.scaleY; const x = (l[s] + t.offsetX) * t.scaleX; const
    T = (l[s + 1] + t.offsetY) * t.scaleY;
  if (S >= T) return;
  const E = h[r]; const f = h[r + 1]; const m = h[r + 2]; const A = h[a]; const C = h[a + 1]; const P = h[a + 2]; const R = h[o]; const k = h[o + 1]; const D = h[o + 2]; const I = Math.round(S); const
    O = Math.round(T);
  let F; let j; let H; let B; let tt; let st; let ie; let
    Qe;
  for (let rt = I; rt <= O; rt++) {
    if (rt < _) {
      const wt = rt < S ? 0 : (S - rt) / (S - _);
      F = y - (y - v) * wt, j = E - (E - A) * wt, H = f - (f - C) * wt, B = m - (m - P) * wt;
    } else {
      let wt;
      rt > T ? wt = 1 : _ === T ? wt = 0 : wt = (_ - rt) / (_ - T), F = v - (v - x) * wt, j = A - (A - R) * wt, H = C - (C - k) * wt, B = P - (P - D) * wt;
    }
    let lt;
    rt < S ? lt = 0 : rt > T ? lt = 1 : lt = (S - rt) / (S - T), tt = y - (y - x) * lt, st = E - (E - R) * lt, ie = f - (f - k) * lt, Qe = m - (m - D) * lt;
    const se = Math.round(Math.min(F, tt)); const
      ue = Math.round(Math.max(F, tt));
    let Se = u * rt + se * 4;
    for (let wt = se; wt <= ue; wt++) lt = (F - wt) / (F - tt), lt < 0 ? lt = 0 : lt > 1 && (lt = 1), d[Se++] = j - (j - st) * lt | 0, d[Se++] = H - (H - ie) * lt | 0, d[Se++] = B - (B - Qe) * lt | 0, d[Se++] = 255;
  }
}
function Vw(c, t, e) {
  const i = t.coords; const
    s = t.colors;
  let r; let
    a;
  switch (t.type) {
    case 'lattice':
      const o = t.verticesPerRow; const l = Math.floor(i.length / o) - 1; const
        h = o - 1;
      for (r = 0; r < l; r++) {
        let d = r * o;
        for (let u = 0; u < h; u++, d++) of(c, e, i[d], i[d + 1], i[d + o], s[d], s[d + 1], s[d + o]), of(c, e, i[d + o + 1], i[d + 1], i[d + o], s[d + o + 1], s[d + 1], s[d + o]);
      }
      break;
    case 'triangles':
      for (r = 0, a = i.length; r < a; r += 3) of(c, e, i[r], i[r + 1], i[r + 2], s[r], s[r + 1], s[r + 2]);
      break;
    default:
      throw new Error('illegal figure');
  }
}
class qw extends Kp {
  constructor(t) {
    super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], this.matrix = null;
  }

  _createMeshCanvas(t, e, i) {
    const o = Math.floor(this._bounds[0]); const l = Math.floor(this._bounds[1]); const h = Math.ceil(this._bounds[2]) - o; const d = Math.ceil(this._bounds[3]) - l; const u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3); const p = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3); const y = h / u; const S = d / p; const v = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -o,
      offsetY: -l,
      scaleX: 1 / y,
      scaleY: 1 / S,
    }; const _ = u + 4; const x = p + 4; const T = i.getCanvas('mesh', _, x); const E = T.context; const
      f = E.createImageData(u, p);
    if (e) {
      const A = f.data;
      for (let C = 0, P = A.length; C < P; C += 4) A[C] = e[0], A[C + 1] = e[1], A[C + 2] = e[2], A[C + 3] = 255;
    }
    for (const A of this._figures) Vw(f, A, v);
    return E.putImageData(f, 2, 2), {
      canvas: T.canvas,
      offsetX: o - 2 * y,
      offsetY: l - 2 * S,
      scaleX: y,
      scaleY: S,
    };
  }

  isModifyingCurrentTransform() {
    return !0;
  }

  getPattern(t, e, i, s) {
    Gf(t, this._bbox);
    const r = new Float32Array(2);
    if (s === we.SHADING) G.singularValueDecompose2dScale(Ft(t), r);
    else if (this.matrix) {
      G.singularValueDecompose2dScale(this.matrix, r);
      const [o, l] = r;
      G.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= o, r[1] *= l;
    } else G.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, s === we.SHADING ? null : this._background, e.cachedCanvases);
    return s !== we.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY), t.createPattern(a.canvas, 'no-repeat');
  }
}
class Xw extends Kp {
  getPattern() {
    return 'hotpink';
  }
}
function Yw(c) {
  switch (c[0]) {
    case 'RadialAxial':
      return new jw(c);
    case 'Mesh':
      return new qw(c);
    case 'Dummy':
      return new Xw();
  }
  throw new Error(`Unknown IR type: ${c[0]}`);
}
const Pg = {
  COLORED: 1,
  UNCOLORED: 2,
};
const Lu = class Lu {
  constructor(t, e, i, s) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s;
  }

  createPatternCanvas(t, e) {
    let st; let
      ie;
    const {
      bbox: i,
      operatorList: s,
      paintType: r,
      tilingType: a,
      color: o,
      canvasGraphicsFactory: l,
    } = this;
    let {
      xstep: h,
      ystep: d,
    } = this;
    h = Math.abs(h), d = Math.abs(d), ju(`TilingType: ${a}`);
    const u = i[0]; const p = i[1]; const y = i[2]; const S = i[3]; const v = y - u; const _ = S - p; const
      x = new Float32Array(2);
    G.singularValueDecompose2dScale(this.matrix, x);
    const [T, E] = x;
    G.singularValueDecompose2dScale(this.baseTransform, x);
    const f = T * x[0]; const
      m = E * x[1];
    let A = v; let C = _; let P = !1; let
      R = !1;
    const k = Math.ceil(h * f); const D = Math.ceil(d * m); const I = Math.ceil(v * f); const
      O = Math.ceil(_ * m);
    k >= I ? A = h : P = !0, D >= O ? C = d : R = !0;
    const F = this.getSizeAndScale(A, this.ctx.canvas.width, f); const j = this.getSizeAndScale(C, this.ctx.canvas.height, m); const H = t.cachedCanvases.getCanvas('pattern', F.size, j.size); const B = H.context; const
      tt = l.createCanvasGraphics(B, e);
    if (tt.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(tt, r, o), B.translate(-F.scale * u, -j.scale * p), tt.transform(0, F.scale, 0, 0, j.scale, 0, 0), B.save(), (st = tt.dependencyTracker) == null || st.save(), this.clipBbox(tt, u, p, y, S), tt.baseTransform = Ft(tt.ctx), tt.executeOperatorList(s), tt.endDrawing(), (ie = tt.dependencyTracker) == null || ie.restore(), B.restore(), P || R) {
      const Qe = H.canvas;
      P && (A = h), R && (C = d);
      const rt = this.getSizeAndScale(A, this.ctx.canvas.width, f); const lt = this.getSizeAndScale(C, this.ctx.canvas.height, m); const se = rt.size; const ue = lt.size; const Se = t.cachedCanvases.getCanvas('pattern-workaround', se, ue); const wt = Se.context; const Hi = P ? Math.floor(v / h) : 0; const
        as = R ? Math.floor(_ / d) : 0;
      for (let Os = 0; Os <= Hi; Os++) for (let Le = 0; Le <= as; Le++) wt.drawImage(Qe, se * Os, ue * Le, se, ue, 0, 0, se, ue);
      return {
        canvas: Se.canvas,
        scaleX: rt.scale,
        scaleY: lt.scale,
        offsetX: u,
        offsetY: p,
      };
    }
    return {
      canvas: H.canvas,
      scaleX: F.scale,
      scaleY: j.scale,
      offsetX: u,
      offsetY: p,
    };
  }

  getSizeAndScale(t, e, i) {
    const s = Math.max(Lu.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * i);
    return r >= s ? r = s : i = r / t, {
      scale: i,
      size: r,
    };
  }

  clipBbox(t, e, i, s, r) {
    const a = s - e; const
      o = r - i;
    t.ctx.rect(e, i, a, o), G.axialAlignedBoundingBox([e, i, s, r], Ft(t.ctx), t.current.minMax), t.clip(), t.endPath();
  }

  setFillAndStrokeStyleToContext(t, e, i) {
    const s = t.ctx; const
      r = t.current;
    switch (e) {
      case Pg.COLORED:
        const {
          fillStyle: a,
          strokeStyle: o,
        } = this.ctx;
        s.fillStyle = r.fillColor = a, s.strokeStyle = r.strokeColor = o;
        break;
      case Pg.UNCOLORED:
        s.fillStyle = s.strokeStyle = i, r.fillColor = r.strokeColor = i;
        break;
      default:
        throw new mw(`Unsupported paint type: ${e}`);
    }
  }

  isModifyingCurrentTransform() {
    return !1;
  }

  getPattern(t, e, i, s, r) {
    let a = i;
    s !== we.SHADING && (a = G.transform(a, e.baseTransform), this.matrix && (a = G.transform(a, this.matrix)));
    const o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const h = t.createPattern(o.canvas, 'repeat');
    return h.setTransform(l), h;
  }
};
M(Lu, 'MAX_PATTERN_SIZE', 3e3);
const zf = Lu;
function Kw({
  src: c,
  srcPos: t = 0,
  dest: e,
  width: i,
  height: s,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1,
}) {
  const o = de.isLittleEndian ? 4278190080 : 255; const [l, h] = a ? [r, o] : [o, r]; const d = i >> 3; const u = i & 7; const
    p = c.length;
  e = new Uint32Array(e.buffer);
  let y = 0;
  for (let S = 0; S < s; S++) {
    for (const _ = t + d; t < _; t++) {
      const x = t < p ? c[t] : 255;
      e[y++] = x & 128 ? h : l, e[y++] = x & 64 ? h : l, e[y++] = x & 32 ? h : l, e[y++] = x & 16 ? h : l, e[y++] = x & 8 ? h : l, e[y++] = x & 4 ? h : l, e[y++] = x & 2 ? h : l, e[y++] = x & 1 ? h : l;
    }
    if (u === 0) continue;
    const v = t < p ? c[t++] : 255;
    for (let _ = 0; _ < u; _++) e[y++] = v & 1 << 7 - _ ? h : l;
  }
  return {
    srcPos: t,
    destPos: y,
  };
}
const Rg = 16; const kg = 100; const Zw = 15; const Dg = 10; const Je = 16; const lf = new DOMMatrix(); const Ai = new Float32Array(2); const
  fo = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function Jw(c, t) {
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
class Qw {
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
function Dd(c, t, e, i, s, r, a, o, l, h) {
  const [d, u, p, y, S, v] = Ft(c);
  if (u === 0 && p === 0) {
    const T = a * d + S; const E = Math.round(T); const f = o * y + v; const m = Math.round(f); const A = (a + l) * d + S; const C = Math.abs(Math.round(A) - E) || 1; const P = (o + h) * y + v; const
      R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(Math.sign(d), 0, 0, Math.sign(y), E, m), c.drawImage(t, e, i, s, r, 0, 0, C, R), c.setTransform(d, u, p, y, S, v), [C, R];
  }
  if (d === 0 && y === 0) {
    const T = o * p + S; const E = Math.round(T); const f = a * u + v; const m = Math.round(f); const A = (o + h) * p + S; const C = Math.abs(Math.round(A) - E) || 1; const P = (a + l) * u + v; const
      R = Math.abs(Math.round(P) - m) || 1;
    return c.setTransform(0, Math.sign(u), Math.sign(p), 0, E, m), c.drawImage(t, e, i, s, r, 0, 0, R, C), c.setTransform(d, u, p, y, S, v), [R, C];
  }
  c.drawImage(t, e, i, s, r, a, o, l, h);
  const _ = Math.hypot(d, u); const
    x = Math.hypot(p, y);
  return [_ * l, x * h];
}
class Mg {
  constructor(t, e, i) {
    M(this, 'alphaIsShape', !1);
    M(this, 'fontSize', 0);
    M(this, 'fontSizeScale', 1);
    M(this, 'textMatrix', null);
    M(this, 'textMatrixScale', 1);
    M(this, 'fontMatrix', gf);
    M(this, 'leading', 0);
    M(this, 'x', 0);
    M(this, 'y', 0);
    M(this, 'lineX', 0);
    M(this, 'lineY', 0);
    M(this, 'charSpacing', 0);
    M(this, 'wordSpacing', 0);
    M(this, 'textHScale', 1);
    M(this, 'textRenderingMode', fe.FILL);
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
    i == null || i(this), this.clipBox = new Float32Array([0, 0, t, e]), this.minMax = fo.slice();
  }

  clone() {
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t;
  }

  getPathBoundingBox(t = we.FILL, e = null) {
    const i = this.minMax.slice();
    if (t === we.STROKE) {
      e || Et('Stroke bounding box must include transform.'), G.singularValueDecompose2dScale(e, Ai);
      const s = Ai[0] * this.lineWidth / 2; const
        r = Ai[1] * this.lineWidth / 2;
      i[0] -= s, i[1] -= r, i[2] += s, i[3] += r;
    }
    return i;
  }

  updateClipFromPath() {
    const t = G.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }

  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }

  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(fo, 0);
  }

  getClippedPathBoundingBox(t = we.FILL, e = null) {
    return G.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function Lg(c, t) {
  if (t instanceof ImageData) {
    c.putImageData(t, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const s = e % Je; const r = (e - s) / Je; const a = s === 0 ? r : r + 1; const
    o = c.createImageData(i, Je);
  let l = 0; let
    h;
  const d = t.data; const
    u = o.data;
  let p; let y; let S; let
    v;
  if (t.kind === _h.GRAYSCALE_1BPP) {
    const _ = d.byteLength; const x = new Uint32Array(u.buffer, 0, u.byteLength >> 2); const T = x.length; const E = i + 7 >> 3; const f = 4294967295; const
      m = de.isLittleEndian ? 4278190080 : 255;
    for (p = 0; p < a; p++) {
      for (S = p < r ? Je : s, h = 0, y = 0; y < S; y++) {
        const A = _ - l;
        let C = 0;
        const P = A > E ? i : A * 8 - 7; const
          R = P & -8;
        let k = 0; let
          D = 0;
        for (; C < R; C += 8) D = d[l++], x[h++] = D & 128 ? f : m, x[h++] = D & 64 ? f : m, x[h++] = D & 32 ? f : m, x[h++] = D & 16 ? f : m, x[h++] = D & 8 ? f : m, x[h++] = D & 4 ? f : m, x[h++] = D & 2 ? f : m, x[h++] = D & 1 ? f : m;
        for (; C < P; C++) k === 0 && (D = d[l++], k = 128), x[h++] = D & k ? f : m, k >>= 1;
      }
      for (; h < T;) x[h++] = 0;
      c.putImageData(o, 0, p * Je);
    }
  } else if (t.kind === _h.RGBA_32BPP) {
    for (y = 0, v = i * Je * 4, p = 0; p < r; p++) u.set(d.subarray(l, l + v)), l += v, c.putImageData(o, 0, y), y += Je;
    p < a && (v = i * s * 4, u.set(d.subarray(l, l + v)), c.putImageData(o, 0, y));
  } else if (t.kind === _h.RGB_24BPP) {
    for (S = Je, v = i * S, p = 0; p < a; p++) {
      for (p >= r && (S = s, v = i * S), h = 0, y = v; y--;) u[h++] = d[l++], u[h++] = d[l++], u[h++] = d[l++], u[h++] = 255;
      c.putImageData(o, 0, p * Je);
    }
  } else throw new Error(`bad image kind: ${t.kind}`);
}
function Ig(c, t) {
  if (t.bitmap) {
    c.drawImage(t.bitmap, 0, 0);
    return;
  }
  const e = t.height; const i = t.width; const s = e % Je; const r = (e - s) / Je; const a = s === 0 ? r : r + 1; const
    o = c.createImageData(i, Je);
  let l = 0;
  const h = t.data; const
    d = o.data;
  for (let u = 0; u < a; u++) {
    const p = u < r ? Je : s;
    ({
      srcPos: l,
    } = Kw({
      src: h,
      srcPos: l,
      dest: d,
      width: i,
      height: p,
      nonBlackColor: 0,
    })), c.putImageData(o, 0, u * Je);
  }
}
function Jl(c, t) {
  const e = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'globalCompositeOperation', 'font', 'filter'];
  for (const i of e) c[i] !== void 0 && (t[i] = c[i]);
  c.setLineDash !== void 0 && (t.setLineDash(c.getLineDash()), t.lineDashOffset = c.lineDashOffset);
}
function Md(c) {
  c.strokeStyle = c.fillStyle = '#000000', c.fillRule = 'nonzero', c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = 'butt', c.lineJoin = 'miter', c.miterLimit = 10, c.globalCompositeOperation = 'source-over', c.font = '10px sans-serif', c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0);
  const {
    filter: t,
  } = c;
  t !== 'none' && t !== '' && (c.filter = 'none');
}
function Fg(c, t) {
  if (t) return !0;
  G.singularValueDecompose2dScale(c, Ai);
  const e = Math.fround(ns.pixelRatio * Pn.PDF_TO_CSS_UNITS);
  return Ai[0] <= e && Ai[1] <= e;
}
const t0 = ['butt', 'round', 'square']; const e0 = ['miter', 'round', 'bevel']; const i0 = {}; const
  Ng = {};
let rs; let Wf; let jf; let
  Vf;
const lg = class lg {
  constructor(t, e, i, s, r, {
    optionalContentConfig: a,
    markedContentStack: o = null,
  }, l, h, d) {
    b(this, rs);
    this.ctx = t, this.current = new Mg(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedCanvases = new Qw(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = d ?? null;
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
      const l = this.cachedCanvases.getCanvas('transparent', r, a);
      this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform(...Ft(this.compositeCtx));
    }
    this.ctx.save(), Md(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Ft(this.ctx);
  }

  executeOperatorList(t, e, i, s, r) {
    let x;
    const a = t.argsArray; const
      o = t.fnArray;
    let l = e || 0;
    const h = a.length;
    if (h === l) return l;
    const d = h - l > Dg && typeof i === 'function';
    const u = d ? Date.now() + Zw : 0;
    let p = 0;
    const y = this.commonObjs; const
      S = this.objs;
    let v; let
      _;
    for (; ;) {
      if (s !== void 0 && l === s.nextBreakPoint) return s.breakIt(l, i), l;
      if (!r || r(l)) {
        if (v = o[l], _ = a[l] ?? null, v !== ql.dependency) _ === null ? this[v](l) : this[v](l, ..._);
        else {
          for (const T of _) {
            (x = this.dependencyTracker) == null || x.recordNamedData(T, l);
            const E = T.startsWith('g_') ? y : S;
            if (!E.has(T)) return E.get(T, i), l;
          }
        }
      }
      if (l++, l === h) return l;
      if (d && ++p > Dg) {
        if (Date.now() > u) return i(), l;
        p = 0;
      }
    }
  }

  endDrawing() {
    w(this, rs, Wf).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values()) typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), w(this, rs, jf).call(this);
  }

  _scaleImage(t, e) {
    const i = t.width ?? t.displayWidth; const
      s = t.height ?? t.displayHeight;
    let r = Math.max(Math.hypot(e[0], e[1]), 1); let a = Math.max(Math.hypot(e[2], e[3]), 1); let o = i; let l = s; let h = 'prescale1'; let d; let
      u;
    for (; r > 2 && o > 1 || a > 2 && l > 1;) {
      let p = o; let
        y = l;
      r > 2 && o > 1 && (p = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o / 2), r /= o / p), a > 2 && l > 1 && (y = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2, a /= l / y), d = this.cachedCanvases.getCanvas(h, p, y), u = d.context, u.clearRect(0, 0, p, y), u.drawImage(t, 0, 0, o, l, 0, 0, p, y), t = d.canvas, o = p, l = y, h = h === 'prescale1' ? 'prescale2' : 'prescale1';
    }
    return {
      img: t,
      paintWidth: o,
      paintHeight: l,
    };
  }

  _createMaskCanvas(t, e) {
    let k; let
      D;
    const i = this.ctx; const {
      width: s,
      height: r,
    } = e; const a = this.current.fillColor; const o = this.current.patternFill; const
      l = Ft(i);
    let h; let d; let u; let
      p;
    if ((e.bitmap || e.data) && e.count > 1) {
      const I = e.bitmap || e.data.buffer;
      d = JSON.stringify(o ? l : [l.slice(0, 4), a]), h = this._cachedBitmapsMap.get(I), h || (h = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(I, h));
      const O = h.get(d);
      if (O && !o) {
        const F = Math.round(Math.min(l[0], l[2]) + l[4]); const
          j = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (k = this.dependencyTracker) == null || k.recordDependencies(t, _i.transformAndFill), {
          canvas: O,
          offsetX: F,
          offsetY: j,
        };
      }
      u = O;
    }
    u || (p = this.cachedCanvases.getCanvas('maskCanvas', s, r), Ig(p.context, e));
    let y = G.transform(l, [1 / s, 0, 0, -1 / r, 0, 0]);
    y = G.transform(y, [1, 0, 0, 1, 0, -r]);
    const S = fo.slice();
    G.axialAlignedBoundingBox([0, 0, s, r], y, S);
    const [v, _, x, T] = S; const E = Math.round(x - v) || 1; const f = Math.round(T - _) || 1; const m = this.cachedCanvases.getCanvas('fillCanvas', E, f); const A = m.context; const C = v; const
      P = _;
    A.translate(-C, -P), A.transform(...y), u || (u = this._scaleImage(p.canvas, os(A)), u = u.img, h && o && h.set(d, u)), A.imageSmoothingEnabled = Fg(Ft(A), e.interpolate), Dd(A, u, 0, 0, u.width, u.height, 0, 0, s, r), A.globalCompositeOperation = 'source-in';
    const R = G.transform(os(A), [1, 0, 0, 1, -C, -P]);
    return A.fillStyle = o ? a.getPattern(i, this, R, we.FILL, t) : a, A.fillRect(0, 0, s, r), h && !o && (this.cachedCanvases.delete('fillCanvas'), h.set(d, m.canvas)), (D = this.dependencyTracker) == null || D.recordDependencies(t, _i.transformAndFill), {
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
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineCap', t), this.ctx.lineCap = t0[e];
  }

  setLineJoin(t, e) {
    let i;
    (i = this.dependencyTracker) == null || i.recordSimpleData('lineJoin', t), this.ctx.lineJoin = e0[e];
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
    for (const [l, h] of e) {
      switch (l) {
        case 'LW':
          this.setLineWidth(t, h);
          break;
        case 'LC':
          this.setLineCap(t, h);
          break;
        case 'LJ':
          this.setLineJoin(t, h);
          break;
        case 'ML':
          this.setMiterLimit(t, h);
          break;
        case 'D':
          this.setDash(t, h[0], h[1]);
          break;
        case 'RI':
          this.setRenderingIntent(t, h);
          break;
        case 'FL':
          this.setFlatness(t, h);
          break;
        case 'Font':
          this.setFont(t, h[0], h[1]);
          break;
        case 'CA':
          (i = this.dependencyTracker) == null || i.recordSimpleData('strokeAlpha', t), this.current.strokeAlpha = h;
          break;
        case 'ca':
          (s = this.dependencyTracker) == null || s.recordSimpleData('fillAlpha', t), this.ctx.globalAlpha = this.current.fillAlpha = h;
          break;
        case 'BM':
          (r = this.dependencyTracker) == null || r.recordSimpleData('globalCompositeOperation', t), this.ctx.globalCompositeOperation = h;
          break;
        case 'SMask':
          (a = this.dependencyTracker) == null || a.recordSimpleData('SMask', t), this.current.activeSMask = h ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case 'TR':
          (o = this.dependencyTracker) == null || o.recordSimpleData('filter', t), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(h);
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
    a.setTransform(this.suspendedCtx.getTransform()), Jl(this.suspendedCtx, a), Jw(a, this.suspendedCtx), this.setGState(t, [['BM', 'source-over']]);
  }

  endSMaskMode() {
    if (!this.inSMaskMode) throw new Error('endSMaskMode called while not in smask mode');
    this.ctx._removeMirroring(), Jl(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
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
      l = s[3] - a;
    o === 0 || l === 0 || (this.genericComposeSMask(e.context, i, o, l, e.subtype, e.backdrop, e.transferMap, r, a, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = 'source-over', t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i.canvas, 0, 0), t.restore());
  }

  genericComposeSMask(t, e, i, s, r, a, o, l, h, d, u) {
    let p = t.canvas; let y = l - d; let
      S = h - u;
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
    v.rect(l, h, i, s), e.clip(v), e.globalCompositeOperation = 'destination-in', e.drawImage(p, y, S, i, s, l, h, i, s), e.restore();
  }

  save(t) {
    let i;
    this.inSMaskMode && Jl(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (i = this.dependencyTracker) == null || i.save(t);
  }

  restore(t) {
    let e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && Jl(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }

  transform(t, e, i, s, r, a, o) {
    let l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData('transform', t), this.ctx.transform(e, i, s, r, a, o), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }

  constructPath(t, e, i, s) {
    let [r] = i;
    if (!s) {
      r || (r = i[0] = new Path2D()), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const a = e === ql.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, s[0] - a, s[2] + a, s[1] - a, s[3] + a).recordDependencies(t, ['transform']);
    }
    if (!(r instanceof Path2D)) {
      const a = i[0] = new Path2D();
      for (let o = 0, l = r.length; o < l;) {
        switch (r[o++]) {
          case _d.moveTo:
            a.moveTo(r[o++], r[o++]);
            break;
          case _d.lineTo:
            a.lineTo(r[o++], r[o++]);
            break;
          case _d.curveTo:
            a.bezierCurveTo(r[o++], r[o++], r[o++], r[o++], r[o++], r[o++]);
            break;
          case _d.closePath:
            a.closePath();
            break;
          default:
            X(`Unrecognized drawing path operator: ${r[o - 1]}`);
            break;
        }
      }
      r = a;
    }
    G.axialAlignedBoundingBox(s, Ft(this.ctx), this.current.minMax), this[e](t, r), this._pathStartIdx = t;
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
        if (s.save(), s.strokeStyle = r.getPattern(s, this, os(s), we.STROKE, t), o) {
          const l = new Path2D();
          l.addPath(e, s.getTransform().invertSelf().multiplySelf(o)), e = l;
        }
        this.rescaleAndStroke(e, !1), s.restore();
      } else this.rescaleAndStroke(e, !0);
    }
    (a = this.dependencyTracker) == null || a.recordDependencies(t, _i.stroke), i && this.consumePath(t, e, this.current.getClippedPathBoundingBox(we.STROKE, Ft(this.ctx))), s.globalAlpha = this.current.fillAlpha;
  }

  closeStroke(t, e) {
    this.stroke(t, e);
  }

  fill(t, e, i = !0) {
    let h; let d; let
      u;
    const s = this.ctx; const r = this.current.fillColor; const
      a = this.current.patternFill;
    let o = !1;
    if (a) {
      const p = r.isModifyingCurrentTransform() ? s.getTransform() : null;
      if ((h = this.dependencyTracker) == null || h.save(t), s.save(), s.fillStyle = r.getPattern(s, this, os(s), we.FILL, t), p) {
        const y = new Path2D();
        y.addPath(e, s.getTransform().invertSelf().multiplySelf(p)), e = y;
      }
      o = !0;
    }
    const l = this.current.getClippedPathBoundingBox();
    this.contentVisible && l !== null && (this.pendingEOFill ? (s.fill(e, 'evenodd'), this.pendingEOFill = !1) : s.fill(e)), (d = this.dependencyTracker) == null || d.recordDependencies(t, _i.fill), o && (s.restore(), (u = this.dependencyTracker) == null || u.restore(t)), i && this.consumePath(t, e, l);
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
    this.ctx.fill(e), (i = this.dependencyTracker) == null || i.recordDependencies(t, _i.rawFillPath).recordOperation(t);
  }

  clip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = i0;
  }

  eoClip(t) {
    let e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency('clipMode', t), this.pendingClip = Ng;
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
        y: l,
        fontSize: h,
        path: d,
      } of e) d && s.addPath(d, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(h, -h));
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
    if (r.fontMatrix = s.fontMatrix || gf, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && X(`Invalid font matrix for font ${e}`), i < 0 ? (i = -i, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font) return;
    const a = s.loadedName || 'sans-serif';
    const o = ((p = s.systemFontInfo) == null ? void 0 : p.css) || `"${a}", ${s.fallbackName}`;
    let l = 'normal';
    s.black ? l = '900' : s.bold && (l = 'bold');
    const h = s.italic ? 'italic' : 'normal';
    let d = i;
    i < Rg ? d = Rg : i > kg && (d = kg), this.current.fontSizeScale = i / d, this.ctx.font = `${h} ${l} ${d}px ${o}`;
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
    const o = this.ctx; const l = this.current; const h = l.font; const d = l.textRenderingMode; const u = l.fontSize / l.fontSizeScale; const p = d & fe.FILL_STROKE_MASK; const y = !!(d & fe.ADD_TO_PATH_FLAG); const S = l.patternFill && !h.missingFile; const
      v = l.patternStroke && !h.missingFile;
    let _;
    if ((h.disableFontFace || y || S || v) && !h.missingFile && (_ = h.getPathGenerator(this.commonObjs, e)), _ && (h.disableFontFace || S || v)) {
      o.save(), o.translate(i, s), o.scale(u, -u), (x = this.dependencyTracker) == null || x.recordCharacterBBox(t, o, h);
      let m;
      if (p === fe.FILL || p === fe.FILL_STROKE) {
        if (r) {
          m = o.getTransform(), o.setTransform(...r);
          const A = w(this, rs, Vf).call(this, _, m, r);
          o.fill(A);
        } else o.fill(_);
      }
      if (p === fe.STROKE || p === fe.FILL_STROKE) {
        if (a) {
          m || (m = o.getTransform()), o.setTransform(...a);
          const {
            a: A,
            b: C,
            c: P,
            d: R,
          } = m; const k = G.inverseTransform(a); const
            D = G.transform([A, C, P, R, 0, 0], k);
          G.singularValueDecompose2dScale(D, Ai), o.lineWidth *= Math.max(Ai[0], Ai[1]) / u, o.stroke(w(this, rs, Vf).call(this, _, m, a));
        } else o.lineWidth /= u, o.stroke(_);
      }
      o.restore();
    } else (p === fe.FILL || p === fe.FILL_STROKE) && (o.fillText(e, i, s), (T = this.dependencyTracker) == null || T.recordCharacterBBox(t, o, h, u, i, s, () => o.measureText(e))), (p === fe.STROKE || p === fe.FILL_STROKE) && (this.dependencyTracker && ((E = this.dependencyTracker) == null || E.recordCharacterBBox(t, o, h, u, i, s, () => o.measureText(e)).recordDependencies(t, _i.stroke)), o.strokeText(e, i, s));
    y && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: Ft(o),
      x: i,
      y: s,
      fontSize: u,
      path: _,
    }), (f = this.dependencyTracker) == null || f.recordCharacterBBox(t, o, h, u, i, s));
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
    return Z(this, 'isFontSubpixelAAEnabled', i);
  }

  showText(t, e) {
    let P; let R; let k; let
      D;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, _i.showText).resetBBox(t), this.current.textRenderingMode & fe.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency('textClip', t).inheritPendingDependenciesAsFutureForcedDependencies());
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
    const a = this.ctx; const o = i.fontSizeScale; const l = i.charSpacing; const h = i.wordSpacing; const d = i.fontDirection; const u = i.textHScale * d; const p = e.length; const y = s.vertical; const S = y ? 1 : -1; const v = s.defaultVMetrics; const _ = r * i.fontMatrix[0]; const
      x = i.textRenderingMode === fe.FILL && !s.disableFontFace && !i.patternFill;
    a.save(), i.textMatrix && a.transform(...i.textMatrix), a.translate(i.x, i.y + i.textRise), d > 0 ? a.scale(u, -1) : a.scale(u, 1);
    let T; let
      E;
    if (i.patternFill) {
      a.save();
      const I = i.fillColor.getPattern(a, this, os(a), we.FILL, t);
      T = Ft(a), a.restore(), a.fillStyle = I;
    }
    if (i.patternStroke) {
      a.save();
      const I = i.strokeColor.getPattern(a, this, os(a), we.STROKE, t);
      E = Ft(a), a.restore(), a.strokeStyle = I;
    }
    let f = i.lineWidth;
    const m = i.textMatrixScale;
    if (m === 0 || f === 0) {
      const I = i.textRenderingMode & fe.FILL_STROKE_MASK;
      (I === fe.STROKE || I === fe.FILL_STROKE) && (f = this.getSinglePixelWidth());
    } else f /= m;
    if (o !== 1 && (a.scale(o, o), f /= o), a.lineWidth = f, s.isInvalidPDFjsFont) {
      const I = [];
      let O = 0;
      for (const j of e) I.push(j.unicode), O += j.width;
      const F = I.join('');
      if (a.fillText(F, 0, 0), this.dependencyTracker !== null) {
        const j = a.measureText(F);
        this.dependencyTracker.recordBBox(t, this.ctx, -j.actualBoundingBoxLeft, j.actualBoundingBoxRight, -j.actualBoundingBoxAscent, j.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      i.x += O * _ * u, a.restore(), this.compose();
      return;
    }
    let A = 0; let
      C;
    for (C = 0; C < p; ++C) {
      const I = e[C];
      if (typeof I === 'number') {
        A += S * I * r / 1e3;
        continue;
      }
      let O = !1;
      const F = (I.isSpace ? h : 0) + l; const j = I.fontChar; const
        H = I.accent;
      let B; let tt; let
        st = I.width;
      if (y) {
        const rt = I.vmetric || v; const lt = -(I.vmetric ? rt[1] : st * 0.5) * _; const
          se = rt[2] * _;
        st = rt ? -rt[0] : st, B = lt / o, tt = (A + se) / o;
      } else B = A / o, tt = 0;
      let ie;
      if (s.remeasure && st > 0) {
        ie = a.measureText(j);
        const rt = ie.width * 1e3 / r * o;
        if (st < rt && this.isFontSubpixelAAEnabled) {
          const lt = st / rt;
          O = !0, a.save(), a.scale(lt, 1), B /= lt;
        } else st !== rt && (B += (st - rt) / 2e3 * r / o);
      }
      if (this.contentVisible && (I.isInFont || s.missingFile)) {
        if (x && !H) {
          a.fillText(j, B, tt), (k = this.dependencyTracker) == null || k.recordCharacterBBox(t, a, ie ? {
            bbox: null,
          } : s, r / o, B, tt, () => ie ?? a.measureText(j));
        } else if (this.paintChar(t, j, B, tt, T, E), H) {
          const rt = B + r * H.offset.x / o; const
            lt = tt - r * H.offset.y / o;
          this.paintChar(t, H.fontChar, rt, lt, T, E);
        }
      }
      const Qe = y ? st * _ - F * d : st * _ + F * d;
      A += Qe, O && a.restore();
    }
    y ? i.y -= A : i.x += A * u, a.restore(), this.compose(), (D = this.dependencyTracker) == null || D.recordShowTextOperation(t);
  }

  showType3Text(t, e) {
    const i = this.ctx; const s = this.current; const r = s.font; const a = s.fontSize; const o = s.fontDirection; const l = r.vertical ? 1 : -1; const h = s.charSpacing; const d = s.wordSpacing; const u = s.textHScale * o; const p = s.fontMatrix || gf; const y = e.length; const
      S = s.textRenderingMode === fe.INVISIBLE;
    let v; let _; let x; let
      T;
    if (S || a === 0) return;
    this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(u, o);
    const E = this.dependencyTracker;
    for (this.dependencyTracker = E ? new mu(E, t) : null, v = 0; v < y; ++v) {
      if (_ = e[v], typeof _ === 'number') {
        T = l * _ * a / 1e3, this.ctx.translate(T, 0), s.x += T * u;
        continue;
      }
      const f = (_.isSpace ? d : 0) + h; const
        m = r.charProcOperatorList[_.operatorListId];
      m ? this.contentVisible && (this.save(), i.scale(a, a), i.transform(...p), this.executeOperatorList(m), this.restore()) : X(`Type3 character "${_.operatorListId}" is not available.`);
      const A = [_.width, 0];
      G.applyTransform(A, p), x = A[0] * a + f, i.translate(x, 0), s.x += x * u;
    }
    i.restore(), E && (this.dependencyTracker = E);
  }

  setCharWidth(t, e, i) {
  }

  setCharWidthAndBounds(t, e, i, s, r, a, o) {
    let h;
    const l = new Path2D();
    l.rect(s, r, a - s, o - r), this.ctx.clip(l), (h = this.dependencyTracker) == null || h.recordBBox(t, this.ctx, s, a, r, o).recordClipBox(t, this.ctx, s, a, r, o), this.endPath(t);
  }

  getColorN_Pattern(t, e) {
    let i;
    if (e[0] === 'TilingPattern') {
      const s = this.baseTransform || Ft(this.ctx); const
        r = {
          createCanvasGraphics: (a, o) => new lg(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack,
          }, void 0, void 0, this.dependencyTracker ? new mu(this.dependencyTracker, o, !0) : null),
        };
      i = new zf(e, this.ctx, r, s);
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
    return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = Yw(this.getObject(t, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
  }

  shadingFill(t, e) {
    let a;
    if (!this.contentVisible) return;
    const i = this.ctx;
    this.save(t);
    const s = this._getPattern(t, e);
    i.fillStyle = s.getPattern(i, this, os(i), we.SHADING, t);
    const r = os(i);
    if (r) {
      const {
        width: o,
        height: l,
      } = i.canvas; const
        h = fo.slice();
      G.axialAlignedBoundingBox([0, 0, o, l], r, h);
      const [d, u, p, y] = h;
      this.ctx.fillRect(d, u, p - d, y - u);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, _i.transform).recordDependencies(t, _i.fill)
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
      G.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = i; const
        h = new Path2D();
      h.rect(r, a, o - r, l - a), this.ctx.clip(h), (s = this.dependencyTracker) == null || s.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
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
    e.isolated || ju('TODO: Support non-isolated groups.'), e.knockout && X('Knockout groups not supported.');
    const s = Ft(i);
    if (e.matrix && i.transform(...e.matrix), !e.bbox) throw new Error('Bounding box is required.');
    let r = fo.slice();
    G.axialAlignedBoundingBox(e.bbox, Ft(i), r);
    const a = [0, 0, i.canvas.width, i.canvas.height];
    r = G.intersect(r, a) || [0, 0, 0, 0];
    const o = Math.floor(r[0]); const l = Math.floor(r[1]); const h = Math.max(Math.ceil(r[2]) - o, 1); const
      d = Math.max(Math.ceil(r[3]) - l, 1);
    this.current.startNewPathAndClipBox([0, 0, h, d]);
    let u = `groupAt${this.groupLevel}`;
    e.smask && (u += `_smask_${this.smaskCounter++ % 2}`);
    const p = this.cachedCanvases.getCanvas(u, h, d); const
      y = p.context;
    y.translate(-o, -l), y.transform(...s);
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
      offsetY: l,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null,
      startTransformInverse: null,
    }), (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(o, l), i.save()), Jl(i, y), this.ctx = y, (E = this.dependencyTracker) == null || E.inheritSimpleDataAsFutureForcedDependencies(['fillAlpha', 'strokeAlpha', 'globalCompositeOperation']).pushBaseTransform(i), this.setGState(t, [['BM', 'source-over'], ['ca', 1], ['CA', 1]]), this.groupStack.push(i), this.groupLevel++;
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
      const o = fo.slice();
      G.axialAlignedBoundingBox([0, 0, i.canvas.width, i.canvas.height], a, o), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(o);
    }
  }

  beginAnnotation(t, e, i, s, r, a) {
    if (w(this, rs, Wf).call(this), Md(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
      const o = i[2] - i[0]; const
        l = i[3] - i[1];
      if (a && this.annotationCanvasMap) {
        s = s.slice(), s[4] -= i[0], s[5] -= i[1], i = i.slice(), i[0] = i[1] = 0, i[2] = o, i[3] = l, G.singularValueDecompose2dScale(Ft(this.ctx), Ai);
        const {
          viewportScale: h,
        } = this; const d = Math.ceil(o * this.outputScaleX * h); const
          u = Math.ceil(l * this.outputScaleY * h);
        this.annotationCanvas = this.canvasFactory.create(d, u);
        const {
          canvas: p,
          context: y,
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(e, p), this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(Ai[0], 0, 0, -Ai[1], 0, l * Ai[1]), Md(this.ctx);
      } else {
        Md(this.ctx), this.endPath(t);
        const h = new Path2D();
        h.rect(i[0], i[1], o, l), this.ctx.clip(h);
      }
    }
    this.current = new Mg(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t, ...s), this.transform(t, ...r);
  }

  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), w(this, rs, jf).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
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
    const l = this.ctx;
    l.save();
    const h = Ft(l);
    l.transform(i, s, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    l.setTransform(1, 0, 0, 1, d.offsetX - h[4], d.offsetY - h[5]), (u = this.dependencyTracker) == null || u.resetBBox(t);
    for (let S = 0, v = o.length; S < v; S += 2) {
      const _ = G.transform(h, [i, s, r, a, o[S], o[S + 1]]);
      l.drawImage(d.canvas, _[4], _[5]), (p = this.dependencyTracker) == null || p.recordBBox(t, this.ctx, _[4], _[4] + d.canvas.width, _[5], _[5] + d.canvas.height);
    }
    l.restore(), this.compose(), (y = this.dependencyTracker) == null || y.recordOperation(t);
  }

  paintImageMaskXObjectGroup(t, e) {
    let a; let o; let
      l;
    if (!this.contentVisible) return;
    const i = this.ctx; const s = this.current.fillColor; const
      r = this.current.patternFill;
    (a = this.dependencyTracker) == null || a.resetBBox(t).recordDependencies(t, _i.transformAndFill);
    for (const h of e) {
      const {
        data: d,
        width: u,
        height: p,
        transform: y,
      } = h; const S = this.cachedCanvases.getCanvas('maskCanvas', u, p); const
        v = S.context;
      v.save();
      const _ = this.getObject(t, d, h);
      Ig(v, _), v.globalCompositeOperation = 'source-in', v.fillStyle = r ? s.getPattern(v, this, os(i), we.FILL, t) : s, v.fillRect(0, 0, u, p), v.restore(), i.save(), i.transform(...y), i.scale(1, -1), Dd(i, S.canvas, 0, 0, u, p, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, i, 0, u, 0, p), i.restore();
    }
    this.compose(), (l = this.dependencyTracker) == null || l.recordOperation(t);
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
    const o = a.width; const l = a.height; const
      h = [];
    for (let d = 0, u = r.length; d < u; d += 2) {
      h.push({
        transform: [i, 0, 0, s, r[d], r[d + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l,
      });
    }
    this.paintInlineImageXObjectGroup(t, a, h);
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
    let h;
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
      Lg(u, e), o = this.applyTransferMapsToCanvas(u);
    }
    const l = this._scaleImage(o, os(r));
    r.imageSmoothingEnabled = Fg(Ft(r), e.interpolate), (h = this.dependencyTracker) == null || h.resetBBox(t).recordBBox(t, r, 0, i, -s, 0).recordDependencies(t, _i.imageXObject).recordOperation(t), Dd(r, l.img, 0, 0, l.paintWidth, l.paintHeight, 0, -s, i, s), this.compose(), this.restore(t);
  }

  paintInlineImageXObjectGroup(t, e, i) {
    let a; let o; let
      l;
    if (!this.contentVisible) return;
    const s = this.ctx;
    let r;
    if (e.bitmap) r = e.bitmap;
    else {
      const h = e.width; const d = e.height; const
        p = this.cachedCanvases.getCanvas('inlineImage', h, d).context;
      Lg(p, e), r = this.applyTransferMapsToCanvas(p);
    }
    (a = this.dependencyTracker) == null || a.resetBBox(t);
    for (const h of i) s.save(), s.transform(...h.transform), s.scale(1, -1), Dd(s, r, h.x, h.y, h.w, h.h, 0, -1, 1, 1), (o = this.dependencyTracker) == null || o.recordBBox(t, s, 0, 1, -1, 0), s.restore();
    (l = this.dependencyTracker) == null || l.recordOperation(t), this.compose();
  }

  paintSolidColorImageMask(t) {
    let e;
    this.contentVisible && ((e = this.dependencyTracker) == null || e.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, _i.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose());
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
    this.pendingClip ? (s || (this.pendingClip === Ng ? r.clip(e, 'evenodd') : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency('clipPath', t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
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
        const l = Math.abs(e); const
          h = Math.abs(r);
        if (l === h) {
          if (t === 0) a = o = 1 / l;
          else {
            const d = l * t;
            a = o = d < 1 ? 1 / d : 1;
          }
        } else if (t === 0) a = 1 / l, o = 1 / h;
        else {
          const d = l * t; const
            u = h * t;
          a = d < 1 ? 1 / d : 1, o = u < 1 ? 1 / u : 1;
        }
      } else {
        const l = Math.abs(e * r - i * s); const h = Math.hypot(e, i); const
          d = Math.hypot(s, r);
        if (t === 0) a = d / l, o = h / l;
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
        lineWidth: s,
      },
    } = this; const
      [r, a] = this.getScaleForStroking();
    if (r === a) {
      i.lineWidth = (s || 1) * r, i.stroke(t);
      return;
    }
    const o = i.getLineDash();
    e && i.save(), i.scale(r, a), lf.a = 1 / r, lf.d = 1 / a;
    const l = new Path2D();
    if (l.addPath(t, lf), o.length > 0) {
      const h = Math.max(r, a);
      i.setLineDash(o.map((d) => d / h)), i.lineDashOffset /= h;
    }
    i.lineWidth = s || 1, i.stroke(l), e && i.restore();
  }

  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return !1;
    return !0;
  }
};
rs = new WeakSet(), Wf = function () {
  for (; this.stateStack.length || this.inSMaskMode;) this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, jf = function () {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== 'none') {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, Vf = function (t, e, i) {
  const s = new Path2D();
  return s.addPath(t, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
};
const yo = lg;
for (const c in ql) yo.prototype[c] !== void 0 && (yo.prototype[ql[c]] = yo.prototype[c]);
let Xo; let Yo; let dc; let Ko; let
  zd;
const go = class go {
  constructor(t) {
    b(this, Ko);
    b(this, Xo);
    b(this, Yo);
    b(this, dc);
    g(this, Xo, t), g(this, Yo, new DataView(n(this, Xo))), g(this, dc, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let s = 0;
    for (const h of go.strings) {
      const d = e.encode(t[h]);
      i[h] = d, s += 4 + d.length;
    }
    const r = new ArrayBuffer(s); const a = new Uint8Array(r); const
      o = new DataView(r);
    let l = 0;
    for (const h of go.strings) {
      const d = i[h]; const
        u = d.length;
      o.setUint32(l, u), a.set(d, l + 4), l += 4 + u;
    }
    return nt(l === r.byteLength, 'CssFontInfo.write: Buffer overflow'), r;
  }

  get fontFamily() {
    return w(this, Ko, zd).call(this, 0);
  }

  get fontWeight() {
    return w(this, Ko, zd).call(this, 1);
  }

  get italicAngle() {
    return w(this, Ko, zd).call(this, 2);
  }
};
Xo = new WeakMap(), Yo = new WeakMap(), dc = new WeakMap(), Ko = new WeakSet(), zd = function (t) {
  nt(t < go.strings.length, 'Invalid string index');
  let e = 0;
  for (let s = 0; s < t; s++) e += n(this, Yo).getUint32(e) + 4;
  const i = n(this, Yo).getUint32(e);
  return n(this, dc).decode(new Uint8Array(n(this, Xo), e + 4, i));
}, M(go, 'strings', ['fontFamily', 'fontWeight', 'italicAngle']);
const bu = go;
let tr; let vs; let ua; let fa; let
  ph;
const mo = class mo {
  constructor(t) {
    b(this, fa);
    b(this, tr);
    b(this, vs);
    b(this, ua);
    g(this, tr, t), g(this, vs, new DataView(n(this, tr))), g(this, ua, new TextDecoder());
  }

  static write(t) {
    const e = new TextEncoder(); const
      i = {};
    let s = 0;
    for (const p of mo.strings) {
      const y = e.encode(t[p]);
      i[p] = y, s += 4 + y.length;
    }
    s += 4;
    let r; let a; let
      o = 1 + s;
    t.style && (r = e.encode(t.style.style), a = e.encode(t.style.weight), o += 4 + r.length + 4 + a.length);
    const l = new ArrayBuffer(o); const h = new Uint8Array(l); const
      d = new DataView(l);
    let u = 0;
    d.setUint8(u++, t.guessFallback ? 1 : 0), d.setUint32(u, 0), u += 4, s = 0;
    for (const p of mo.strings) {
      const y = i[p]; const
        S = y.length;
      s += 4 + S, d.setUint32(u, S), h.set(y, u + 4), u += 4 + S;
    }
    return d.setUint32(u - s - 4, s), t.style && (d.setUint32(u, r.length), h.set(r, u + 4), u += 4 + r.length, d.setUint32(u, a.length), h.set(a, u + 4), u += 4 + a.length), nt(u <= l.byteLength, 'SubstitionInfo.write: Buffer overflow'), l.transferToFixedLength(u);
  }

  get guessFallback() {
    return n(this, vs).getUint8(0) !== 0;
  }

  get css() {
    return w(this, fa, ph).call(this, 0);
  }

  get loadedName() {
    return w(this, fa, ph).call(this, 1);
  }

  get baseFontName() {
    return w(this, fa, ph).call(this, 2);
  }

  get src() {
    return w(this, fa, ph).call(this, 3);
  }

  get style() {
    let t = 1;
    t += 4 + n(this, vs).getUint32(t);
    const e = n(this, vs).getUint32(t); const
      i = n(this, ua).decode(new Uint8Array(n(this, tr), t + 4, e));
    t += 4 + e;
    const s = n(this, vs).getUint32(t); const
      r = n(this, ua).decode(new Uint8Array(n(this, tr), t + 4, s));
    return {
      style: i,
      weight: r,
    };
  }
};
tr = new WeakMap(), vs = new WeakMap(), ua = new WeakMap(), fa = new WeakSet(), ph = function (t) {
  nt(t < mo.strings.length, 'Invalid string index');
  let e = 5;
  for (let s = 0; s < t; s++) e += n(this, vs).getUint32(e) + 4;
  const i = n(this, vs).getUint32(e);
  return n(this, ua).decode(new Uint8Array(n(this, tr), e + 4, i));
}, M(mo, 'strings', ['css', 'loadedName', 'baseFontName', 'src']);
const yu = mo;
let Zo; let Jo; let Qo; let tl; let ri; let Ss; let uc; let gt; let Gt; let Ui; let Wd; let
  gh;
const K = class K {
  constructor({
    data: t,
    extra: e,
  }) {
    b(this, Gt);
    b(this, Ss);
    b(this, uc);
    b(this, gt);
    g(this, Ss, t), g(this, uc, new TextDecoder()), g(this, gt, new DataView(n(this, Ss))), e && Object.assign(this, e);
  }

  get black() {
    return w(this, Gt, Ui).call(this, 0);
  }

  get bold() {
    return w(this, Gt, Ui).call(this, 1);
  }

  get disableFontFace() {
    return w(this, Gt, Ui).call(this, 2);
  }

  get fontExtraProperties() {
    return w(this, Gt, Ui).call(this, 3);
  }

  get isInvalidPDFjsFont() {
    return w(this, Gt, Ui).call(this, 4);
  }

  get isType3Font() {
    return w(this, Gt, Ui).call(this, 5);
  }

  get italic() {
    return w(this, Gt, Ui).call(this, 6);
  }

  get missingFile() {
    return w(this, Gt, Ui).call(this, 7);
  }

  get remeasure() {
    return w(this, Gt, Ui).call(this, 8);
  }

  get vertical() {
    return w(this, Gt, Ui).call(this, 9);
  }

  get ascent() {
    return w(this, Gt, Wd).call(this, 0);
  }

  get defaultWidth() {
    return w(this, Gt, Wd).call(this, 1);
  }

  get descent() {
    return w(this, Gt, Wd).call(this, 2);
  }

  get bbox() {
    let t = n(K, Jo);
    if (n(this, gt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 4; s++) i.push(n(this, gt).getInt16(t, !0)), t += 2;
    return i;
  }

  get fontMatrix() {
    let t = n(K, Qo);
    if (n(this, gt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 6; s++) i.push(n(this, gt).getFloat64(t, !0)), t += 8;
    return i;
  }

  get defaultVMetrics() {
    let t = n(K, tl);
    if (n(this, gt).getUint8(t) === 0) return;
    t += 1;
    const i = [];
    for (let s = 0; s < 3; s++) i.push(n(this, gt).getInt16(t, !0)), t += 2;
    return i;
  }

  get fallbackName() {
    return w(this, Gt, gh).call(this, 0);
  }

  get loadedName() {
    return w(this, Gt, gh).call(this, 1);
  }

  get mimetype() {
    return w(this, Gt, gh).call(this, 2);
  }

  get name() {
    return w(this, Gt, gh).call(this, 3);
  }

  get data() {
    let t = n(K, ri);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    t += 4 + i;
    const s = n(this, gt).getUint32(t);
    t += 4 + s;
    const r = n(this, gt).getUint32(t);
    if (r !== 0) return new Uint8Array(n(this, Ss), t + 4, r);
  }

  clearData() {
    let t = n(K, ri);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    t += 4 + i;
    const s = n(this, gt).getUint32(t);
    t += 4 + s;
    const r = n(this, gt).getUint32(t);
    new Uint8Array(n(this, Ss), t + 4, r).fill(0), n(this, gt).setUint32(t, 0);
  }

  get cssFontInfo() {
    let t = n(K, ri);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    t += 4 + i;
    const s = n(this, gt).getUint32(t);
    if (s === 0) return null;
    const r = new Uint8Array(s);
    return r.set(new Uint8Array(n(this, Ss), t + 4, s)), new bu(r.buffer);
  }

  get systemFontInfo() {
    let t = n(K, ri);
    const e = n(this, gt).getUint32(t);
    t += 4 + e;
    const i = n(this, gt).getUint32(t);
    if (i === 0) return null;
    const s = new Uint8Array(i);
    return s.set(new Uint8Array(n(this, Ss), t + 4, i)), new yu(s.buffer);
  }

  static write(t) {
    const e = t.systemFontInfo ? yu.write(t.systemFontInfo) : null; const i = t.cssFontInfo ? bu.write(t.cssFontInfo) : null; const s = new TextEncoder(); const
      r = {};
    let a = 0;
    for (const v of K.strings) r[v] = s.encode(t[v]), a += 4 + r[v].length;
    const o = n(K, ri) + 4 + a + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t.data ? t.data.length : 0); const l = new ArrayBuffer(o); const h = new Uint8Array(l); const
      d = new DataView(l);
    let u = 0;
    const p = K.bools.length;
    let y = 0; let
      S = 0;
    for (let v = 0; v < p; v++) {
      const _ = t[K.bools[v]];
      y |= (_ === void 0 ? 0 : _ ? 2 : 1) << S, S += 2, (S === 8 || v === p - 1) && (d.setUint8(u++, y), y = 0, S = 0);
    }
    nt(u === n(K, Zo), 'FontInfo.write: Boolean properties offset mismatch');
    for (const v of K.numbers) d.setFloat64(u, t[v]), u += 8;
    if (nt(u === n(K, Jo), 'FontInfo.write: Number properties offset mismatch'), t.bbox) {
      d.setUint8(u++, 4);
      for (const v of t.bbox) d.setInt16(u, v, !0), u += 2;
    } else d.setUint8(u++, 0), u += 8;
    if (nt(u === n(K, Qo), 'FontInfo.write: BBox properties offset mismatch'), t.fontMatrix) {
      d.setUint8(u++, 6);
      for (const v of t.fontMatrix) d.setFloat64(u, v, !0), u += 8;
    } else d.setUint8(u++, 0), u += 48;
    if (nt(u === n(K, tl), 'FontInfo.write: FontMatrix properties offset mismatch'), t.defaultVMetrics) {
      d.setUint8(u++, 1);
      for (const v of t.defaultVMetrics) d.setInt16(u, v, !0), u += 2;
    } else d.setUint8(u++, 0), u += 6;
    nt(u === n(K, ri), 'FontInfo.write: DefaultVMetrics properties offset mismatch'), d.setUint32(n(K, ri), 0), u += 4;
    for (const v of K.strings) {
      const _ = r[v]; const
        x = _.length;
      d.setUint32(u, x), h.set(_, u + 4), u += 4 + x;
    }
    if (d.setUint32(n(K, ri), u - n(K, ri) - 4), !e) d.setUint32(u, 0), u += 4;
    else {
      const v = e.byteLength;
      d.setUint32(u, v), nt(u + 4 + v <= l.byteLength, 'FontInfo.write: Buffer overflow at systemFontInfo'), h.set(new Uint8Array(e), u + 4), u += 4 + v;
    }
    if (!i) d.setUint32(u, 0), u += 4;
    else {
      const v = i.byteLength;
      d.setUint32(u, v), nt(u + 4 + v <= l.byteLength, 'FontInfo.write: Buffer overflow at cssFontInfo'), h.set(new Uint8Array(i), u + 4), u += 4 + v;
    }
    return t.data === void 0 ? (d.setUint32(u, 0), u += 4) : (d.setUint32(u, t.data.length), h.set(t.data, u + 4), u += 4 + t.data.length), nt(u <= l.byteLength, 'FontInfo.write: Buffer overflow'), l.transferToFixedLength(u);
  }
};
Zo = new WeakMap(), Jo = new WeakMap(), Qo = new WeakMap(), tl = new WeakMap(), ri = new WeakMap(), Ss = new WeakMap(), uc = new WeakMap(), gt = new WeakMap(), Gt = new WeakSet(), Ui = function (t) {
  nt(t < K.bools.length, 'Invalid boolean index');
  const e = Math.floor(t / 4); const i = t * 2 % 8; const
    s = n(this, gt).getUint8(e) >> i & 3;
  return s === 0 ? void 0 : s === 2;
}, Wd = function (t) {
  return nt(t < K.numbers.length, 'Invalid number index'), n(this, gt).getFloat64(n(K, Zo) + t * 8);
}, gh = function (t) {
  nt(t < K.strings.length, 'Invalid string index');
  let e = n(K, ri) + 4;
  for (let r = 0; r < t; r++) e += n(this, gt).getUint32(e) + 4;
  const i = n(this, gt).getUint32(e); const
    s = new Uint8Array(i);
  return s.set(new Uint8Array(n(this, Ss), e + 4, i)), n(this, uc).decode(s);
}, M(K, 'bools', ['black', 'bold', 'disableFontFace', 'fontExtraProperties', 'isInvalidPDFjsFont', 'isType3Font', 'italic', 'missingFile', 'remeasure', 'vertical']), M(K, 'numbers', ['ascent', 'defaultWidth', 'descent']), M(K, 'strings', ['fallbackName', 'loadedName', 'mimetype', 'name']), b(K, Zo, Math.ceil(K.bools.length * 2 / 8)), b(K, Jo, n(K, Zo) + K.numbers.length * 8), b(K, Qo, n(K, Jo) + 1 + 8), b(K, tl, n(K, Qo) + 1 + 48), b(K, ri, n(K, tl) + 1 + 6);
const qf = K;
let fc; let
  pc;
class es {
  static get workerPort() {
    return n(this, fc);
  }

  static set workerPort(t) {
    if (!(typeof Worker < 'u' && t instanceof Worker) && t !== null) throw new Error('Invalid `workerPort` type.');
    g(this, fc, t);
  }

  static get workerSrc() {
    return n(this, pc);
  }

  static set workerSrc(t) {
    if (typeof t !== 'string') throw new Error('Invalid `workerSrc` type.');
    g(this, pc, t);
  }
}
fc = new WeakMap(), pc = new WeakMap(), b(es, fc, null), b(es, pc, '');
let el; let
  gc;
class s0 {
  constructor({
    parsedData: t,
    rawData: e,
  }) {
    b(this, el);
    b(this, gc);
    g(this, el, t), g(this, gc, e);
  }

  getRaw() {
    return n(this, gc);
  }

  get(t) {
    return n(this, el).get(t) ?? null;
  }

  [Symbol.iterator]() {
    return n(this, el).entries();
  }
}
el = new WeakMap(), gc = new WeakMap();
const ho = Symbol('INTERNAL');
let mc; let bc; let yc; let
  il;
class n0 {
  constructor(t, {
    name: e,
    intent: i,
    usage: s,
    rbGroups: r,
  }) {
    b(this, mc, !1);
    b(this, bc, !1);
    b(this, yc, !1);
    b(this, il, !0);
    g(this, mc, !!(t & wi.DISPLAY)), g(this, bc, !!(t & wi.PRINT)), this.name = e, this.intent = i, this.usage = s, this.rbGroups = r;
  }

  get visible() {
    if (n(this, yc)) return n(this, il);
    if (!n(this, il)) return !1;
    const {
      print: t,
      view: e,
    } = this.usage;
    return n(this, mc) ? (e == null ? void 0 : e.viewState) !== 'OFF' : n(this, bc) ? (t == null ? void 0 : t.printState) !== 'OFF' : !0;
  }

  _setVisible(t, e, i = !1) {
    t !== ho && Et('Internal method `_setVisible` called.'), g(this, yc, i), g(this, il, e);
  }
}
mc = new WeakMap(), bc = new WeakMap(), yc = new WeakMap(), il = new WeakMap();
let er; let mt; let sl; let nl; let wc; let
  Xf;
class r0 {
  constructor(t, e = wi.DISPLAY) {
    b(this, wc);
    b(this, er, null);
    b(this, mt, /* @__PURE__ */ new Map());
    b(this, sl, null);
    b(this, nl, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
      this.name = t.name, this.creator = t.creator, g(this, nl, t.order);
      for (const i of t.groups) n(this, mt).set(i.id, new n0(e, i));
      if (t.baseState === 'OFF') for (const i of n(this, mt).values()) i._setVisible(ho, !1);
      for (const i of t.on) n(this, mt).get(i)._setVisible(ho, !0);
      for (const i of t.off) n(this, mt).get(i)._setVisible(ho, !1);
      g(this, sl, this.getHash());
    }
  }

  isVisible(t) {
    if (n(this, mt).size === 0) return !0;
    if (!t) return ju('Optional content group not defined.'), !0;
    if (t.type === 'OCG') return n(this, mt).has(t.id) ? n(this, mt).get(t.id).visible : (X(`Optional content group not found: ${t.id}`), !0);
    if (t.type === 'OCMD') {
      if (t.expression) return w(this, wc, Xf).call(this, t.expression);
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
    if (i && e && s.rbGroups.length) for (const a of s.rbGroups) for (const o of a) o !== t && ((r = n(this, mt).get(o)) == null || r._setVisible(ho, !1, !0));
    s._setVisible(ho, !!e, !0), g(this, er, null);
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
    g(this, er, null);
  }

  get hasInitialVisibility() {
    return n(this, sl) === null || this.getHash() === n(this, sl);
  }

  getOrder() {
    return n(this, mt).size ? n(this, nl) ? n(this, nl).slice() : [...n(this, mt).keys()] : null;
  }

  getGroup(t) {
    return n(this, mt).get(t) || null;
  }

  getHash() {
    if (n(this, er) !== null) return n(this, er);
    const t = new Wm();
    for (const [e, i] of n(this, mt)) t.update(`${e}:${i.visible}`);
    return g(this, er, t.hexdigest());
  }

  [Symbol.iterator]() {
    return n(this, mt).entries();
  }
}
er = new WeakMap(), mt = new WeakMap(), sl = new WeakMap(), nl = new WeakMap(), wc = new WeakSet(), Xf = function (t) {
  const e = t.length;
  if (e < 2) return !0;
  const i = t[0];
  for (let s = 1; s < e; s++) {
    const r = t[s];
    let a;
    if (Array.isArray(r)) a = w(this, wc, Xf).call(this, r);
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
class a0 {
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
      const l = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
      this._queuedChunks.push(l);
    }
    this._pdfDataRangeTransport = t, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((l, h) => {
      this._onReceiveData({
        begin: l,
        chunk: h,
      });
    }), t.addProgressListener((l, h) => {
      this._onProgress({
        loaded: l,
        total: h,
      });
    }), t.addProgressiveReadListener((l) => {
      this._onReceiveData({
        chunk: l,
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
    return this._queuedChunks = null, new o0(this, t, this._progressiveDone, this._contentDispositionFilename);
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new l0(this, t, e);
    return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeReaders.slice(0)) i.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class o0 {
  constructor(t, e, i = !1, s = null) {
    this._stream = t, this._done = i || !1, this._filename = qu(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0;
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
class l0 {
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
function h0(c) {
  let t = !0; let
    e = i('filename\\*', 'i').exec(c);
  if (e) {
    e = e[1];
    let d = o(e);
    return d = unescape(d), d = l(d), d = h(d), r(d);
  }
  if (e = a(c), e) {
    const d = h(e);
    return r(d);
  }
  if (e = i('filename', 'i').exec(c), e) {
    e = e[1];
    let d = o(e);
    return d = h(d), r(d);
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
          y = gd(u);
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
      x = o(x), _ && (x = unescape(x), v === 0 && (x = l(x))), S.push(x);
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
  function l(d) {
    const u = d.indexOf("'");
    if (u === -1) return d;
    const p = d.slice(0, u); const
      S = d.slice(u + 1).replace(/^[^']*'/, '');
    return s(p, S);
  }
  function h(d) {
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
function sb(c, t) {
  const e = new Headers();
  if (!c || !t || typeof t !== 'object') return e;
  for (const i in t) {
    const s = t[i];
    s !== void 0 && e.append(i, s);
  }
  return e;
}
function Xu(c) {
  let t;
  return ((t = URL.parse(c)) == null ? void 0 : t.origin) ?? null;
}
function nb({
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
function rb(c) {
  const t = c.get('Content-Disposition');
  if (t) {
    let e = h0(t);
    if (e.includes('%')) {
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    }
    if (qu(e)) return e;
  }
  return null;
}
function wd(c, t) {
  return new Th(`Unexpected server response (${c}) while retrieving PDF "${t}".`, c, c === 404 || c === 0 && t.startsWith('file:'));
}
function ab(c) {
  return c === 200 || c === 206;
}
function ob(c, t, e) {
  return {
    method: 'GET',
    headers: c,
    signal: e.signal,
    mode: 'cors',
    credentials: t ? 'include' : 'same-origin',
    redirect: 'follow',
  };
}
function lb(c) {
  return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (X(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
}
class c0 {
  constructor(t) {
    M(this, '_responseOrigin', null);
    this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = sb(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return nt(!this._fullRequestReader, 'PDFFetchStream.getFullReader can only be called once.'), this._fullRequestReader = new d0(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new u0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class d0 {
  constructor(t) {
    this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
    const e = t.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
    const i = new Headers(t.headers); const
      s = e.url;
    fetch(s, ob(i, this._withCredentials, this._abortController)).then((r) => {
      if (t._responseOrigin = Xu(r.url), !ab(r.status)) throw wd(r.status, s);
      this._reader = r.body.getReader(), this._headersCapability.resolve();
      const a = r.headers; const
        {
          allowRangeRequests: o,
          suggestedLength: l,
        } = nb({
          responseHeaders: a,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
      this._isRangeSupported = o, this._contentLength = l || this._contentLength, this._filename = rb(a), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Tn('Streaming is disabled.'));
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
      value: lb(t),
      done: !1,
    });
  }

  cancel(t) {
    let e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
class u0 {
  constructor(t, e, i) {
    this._stream = t, this._reader = null, this._loaded = 0;
    const s = t.source;
    this._withCredentials = s.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController();
    const r = new Headers(t.headers);
    r.append('Range', `bytes=${e}-${i - 1}`);
    const a = s.url;
    fetch(a, ob(r, this._withCredentials, this._abortController)).then((o) => {
      const l = Xu(o.url);
      if (l !== t._responseOrigin) throw new Error(`Expected range response-origin "${l}" to match "${t._responseOrigin}".`);
      if (!ab(o.status)) throw wd(o.status, a);
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
      value: lb(t),
      done: !1,
    });
  }

  cancel(t) {
    let e;
    (e = this._reader) == null || e.cancel(t), this._abortController.abort();
  }
}
const hf = 200; const
  cf = 206;
function f0(c) {
  const t = c.response;
  return typeof t !== 'string' ? t : gd(t).buffer;
}
class p0 {
  constructor({
    url: t,
    httpHeaders: e,
    withCredentials: i,
  }) {
    M(this, '_responseOrigin', null);
    this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = sb(this.isHttp, e), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }

  request(t) {
    const e = new XMLHttpRequest(); const i = this.currXhrId++; const
      s = this.pendingRequests[i] = {
        xhr: e,
      };
    e.open('GET', this.url), e.withCredentials = this.withCredentials;
    for (const [r, a] of this.headers) e.setRequestHeader(r, a);
    return this.isHttp && 'begin' in t && 'end' in t ? (e.setRequestHeader('Range', `bytes=${t.begin}-${t.end - 1}`), s.expectedStatus = cf) : s.expectedStatus = hf, e.responseType = 'arraybuffer', nt(t.onError, 'Expected `onError` callback to be provided.'), e.onerror = () => {
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
    const r = s.status || hf;
    if (!(r === hf && i.expectedStatus === cf) && r !== i.expectedStatus) {
      i.onError(s.status);
      return;
    }
    const o = f0(s);
    if (r === cf) {
      const l = s.getResponseHeader('Content-Range'); const
        h = /bytes (\d+)-(\d+)\/(\d+)/.exec(l);
      h ? i.onDone({
        begin: parseInt(h[1], 10),
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
class g0 {
  constructor(t) {
    this._source = t, this._manager = new p0(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }

  getFullReader() {
    return nt(!this._fullRequestReader, 'PDFNetworkStream.getFullReader can only be called once.'), this._fullRequestReader = new m0(this._manager, this._source), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    const i = new b0(this._manager, t, e);
    return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class m0 {
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
    this._manager._responseOrigin = Xu(e.responseURL);
    const i = e.getAllResponseHeaders(); const s = new Headers(i ? i.trimStart().replace(/[^\S ]+$/, '').split(/[\r\n]+/).map((o) => {
      const [l, ...h] = o.split(': ');
      return [l, h.join(': ')];
    }) : []); const
      {
        allowRangeRequests: r,
        suggestedLength: a,
      } = nb({
        responseHeaders: s,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange,
      });
    r && (this._isRangeSupported = !0), this._contentLength = a || this._contentLength, this._filename = rb(s), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
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
    this._storedError = wd(t, this._url), this._headersCapability.reject(this._storedError);
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
class b0 {
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
    const t = Xu((e = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : e.responseURL);
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
    this._storedError ?? (this._storedError = wd(t, this._url));
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
const y0 = /^[a-z][a-z0-9\-+.]+:/i;
function w0(c) {
  if (y0.test(c)) return new URL(c);
  const t = process.getBuiltinModule('url');
  return new URL(t.pathToFileURL(c));
}
class A0 {
  constructor(t) {
    this.source = t, this.url = w0(t.url), nt(this.url.protocol === 'file:', 'PDFNodeStream only supports file:// URLs.'), this._fullRequestReader = null, this._rangeRequestReaders = [];
  }

  get _progressiveDataLength() {
    let t;
    return ((t = this._fullRequestReader) == null ? void 0 : t._loaded) ?? 0;
  }

  getFullReader() {
    return nt(!this._fullRequestReader, 'PDFNodeStream.getFullReader can only be called once.'), this._fullRequestReader = new v0(this), this._fullRequestReader;
  }

  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new S0(this, t, e);
    return this._rangeRequestReaders.push(i), i;
  }

  cancelAllRequests(t) {
    let e;
    (e = this._fullRequestReader) == null || e.cancel(t);
    for (const i of this._rangeRequestReaders.slice(0)) i.cancel(t);
  }
}
class v0 {
  constructor(t) {
    this._url = t.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = t.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
    const i = process.getBuiltinModule('fs');
    i.promises.lstat(this._url).then((s) => {
      this._contentLength = s.size, this._setReadableStream(i.createReadStream(this._url)), this._headersCapability.resolve();
    }, (s) => {
      s.code === 'ENOENT' && (s = wd(0, this._url.href)), this._storedError = s, this._headersCapability.reject(s);
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
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Tn('streaming is disabled')), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class S0 {
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
const Ql = Symbol('INITIAL_DATA');
let ai; let Ac; let
  Yf;
class hb {
  constructor() {
    b(this, Ac);
    b(this, ai, /* @__PURE__ */ Object.create(null));
  }

  get(t, e = null) {
    if (e) {
      const s = w(this, Ac, Yf).call(this, t);
      return s.promise.then(() => e(s.data)), null;
    }
    const i = n(this, ai)[t];
    if (!i || i.data === Ql) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }

  has(t) {
    const e = n(this, ai)[t];
    return !!e && e.data !== Ql;
  }

  delete(t) {
    const e = n(this, ai)[t];
    return !e || e.data === Ql ? !1 : (delete n(this, ai)[t], !0);
  }

  resolve(t, e = null) {
    const i = w(this, Ac, Yf).call(this, t);
    i.data = e, i.resolve();
  }

  clear() {
    let t;
    for (const e in n(this, ai)) {
      const {
        data: i,
      } = n(this, ai)[e];
      (t = i == null ? void 0 : i.bitmap) == null || t.close();
    }
    g(this, ai, /* @__PURE__ */ Object.create(null));
  }

  * [Symbol.iterator]() {
    for (const t in n(this, ai)) {
      const {
        data: e,
      } = n(this, ai)[t];
      e !== Ql && (yield [t, e]);
    }
  }
}
ai = new WeakMap(), Ac = new WeakSet(), Yf = function (t) {
  let e;
  return (e = n(this, ai))[t] || (e[t] = {
    ...Promise.withResolvers(),
    data: Ql,
  });
};
const x0 = 1e5; const
  Og = 30;
let Kg; let ir; let Ye; let vc; let Sc; let pa; let on; let xc; let Ec; let ga; let rl; let al; let sr; let ol; let _c; let ll; let ma; let Cc; let Tc; let Ut; let hl; let ba; let Pc; let nr; let cl; let kn; let cb; let db; let Kf; let Si; let jd; let Zf; let ub; let
  fb;
const Dh = (Ut = class {
  constructor({
    textContentSource: t,
    container: e,
    viewport: i,
  }) {
    b(this, kn);
    b(this, ir, Promise.withResolvers());
    b(this, Ye, null);
    b(this, vc, !1);
    b(this, Sc, !!((Kg = globalThis.FontInspector) != null && Kg.enabled));
    b(this, pa, null);
    b(this, on, null);
    b(this, xc, 0);
    b(this, Ec, 0);
    b(this, ga, null);
    b(this, rl, null);
    b(this, al, 0);
    b(this, sr, 0);
    b(this, ol, /* @__PURE__ */ Object.create(null));
    b(this, _c, []);
    b(this, ll, null);
    b(this, ma, []);
    b(this, Cc, /* @__PURE__ */ new WeakMap());
    b(this, Tc, null);
    let l;
    if (t instanceof ReadableStream) g(this, ll, t);
    else if (typeof t === 'object') {
      g(this, ll, new ReadableStream({
        start(h) {
          h.enqueue(t), h.close();
        },
      }));
    } else throw new Error('No "textContentSource" parameter specified.');
    g(this, Ye, g(this, rl, e)), g(this, sr, i.scale * ns.pixelRatio), g(this, al, i.rotation), g(this, on, {
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
    g(this, Tc, [1, 0, 0, -1, -a, o + r]), g(this, Ec, s), g(this, xc, r), w(l = Ut, Si, ub).call(l), Rr(e, i), n(this, ir).promise.finally(() => {
      n(Ut, cl).delete(this), g(this, on, null), g(this, ol, null);
    }).catch(() => {
    });
  }

  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e,
    } = de.platform;
    return Z(this, 'fontFamilyMap', /* @__PURE__ */ new Map([['sans-serif', `${t && e ? 'Calibri, ' : ''}sans-serif`], ['monospace', `${t && e ? 'Lucida Console, ' : ''}monospace`]]));
  }

  render() {
    const t = () => {
      n(this, ga).read().then(({
        value: e,
        done: i,
      }) => {
        if (i) {
          n(this, ir).resolve();
          return;
        }
        n(this, pa) ?? g(this, pa, e.lang), Object.assign(n(this, ol), e.styles), w(this, kn, cb).call(this, e.items), t();
      }, n(this, ir).reject);
    };
    return g(this, ga, n(this, ll).getReader()), n(Ut, cl).add(this), t(), n(this, ir).promise;
  }

  update({
    viewport: t,
    onBefore: e = null,
  }) {
    let r;
    const i = t.scale * ns.pixelRatio; const
      s = t.rotation;
    if (s !== n(this, al) && (e == null || e(), g(this, al, s), Rr(n(this, rl), {
      rotation: s,
    })), i !== n(this, sr)) {
      e == null || e(), g(this, sr, i);
      const a = {
        div: null,
        properties: null,
        ctx: w(r = Ut, Si, jd).call(r, n(this, pa)),
      };
      for (const o of n(this, ma)) a.properties = n(this, Cc).get(o), a.div = o, w(this, kn, Kf).call(this, a);
    }
  }

  cancel() {
    let e;
    const t = new Tn('TextLayer task cancelled.');
    (e = n(this, ga)) == null || e.cancel(t).catch(() => {
    }), g(this, ga, null), n(this, ir).reject(t);
  }

  get textDivs() {
    return n(this, ma);
  }

  get textContentItemsStr() {
    return n(this, _c);
  }

  static cleanup() {
    if (!(n(this, cl).size > 0)) {
      n(this, hl).clear();
      for (const {
        canvas: t,
      } of n(this, ba).values()) t.remove();
      n(this, ba).clear();
    }
  }
}, ir = new WeakMap(), Ye = new WeakMap(), vc = new WeakMap(), Sc = new WeakMap(), pa = new WeakMap(), on = new WeakMap(), xc = new WeakMap(), Ec = new WeakMap(), ga = new WeakMap(), rl = new WeakMap(), al = new WeakMap(), sr = new WeakMap(), ol = new WeakMap(), _c = new WeakMap(), ll = new WeakMap(), ma = new WeakMap(), Cc = new WeakMap(), Tc = new WeakMap(), hl = new WeakMap(), ba = new WeakMap(), Pc = new WeakMap(), nr = new WeakMap(), cl = new WeakMap(), kn = new WeakSet(), cb = function (t) {
  let s; let
    r;
  if (n(this, vc)) return;
  (r = n(this, on)).ctx ?? (r.ctx = w(s = Ut, Si, jd).call(s, n(this, pa)));
  const e = n(this, ma); const
    i = n(this, _c);
  for (const a of t) {
    if (e.length > x0) {
      X('Ignoring additional textDivs for performance reasons.'), g(this, vc, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === 'beginMarkedContentProps' || a.type === 'beginMarkedContent') {
        const o = n(this, Ye);
        g(this, Ye, document.createElement('span')), n(this, Ye).classList.add('markedContent'), a.id && n(this, Ye).setAttribute('id', `${a.id}`), o.append(n(this, Ye));
      } else a.type === 'endMarkedContent' && g(this, Ye, n(this, Ye).parentNode);
      continue;
    }
    i.push(a.str), w(this, kn, db).call(this, a);
  }
}, db = function (t) {
  let v;
  const e = document.createElement('span'); const
    i = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== '',
      hasEOL: t.hasEOL,
      fontSize: 0,
    };
  n(this, ma).push(e);
  const s = G.transform(n(this, Tc), t.transform);
  let r = Math.atan2(s[1], s[0]);
  const a = n(this, ol)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, Sc) && a.fontSubstitution || a.fontFamily;
  o = Ut.fontFamilyMap.get(o) || o;
  const l = Math.hypot(s[2], s[3]); const
    h = l * w(v = Ut, Si, fb).call(v, o, a, n(this, pa));
  let d; let
    u;
  r === 0 ? (d = s[4], u = s[5] - h) : (d = s[4] + h * Math.sin(r), u = s[5] - h * Math.cos(r));
  const p = 'calc(var(--total-scale-factor) *';
  const y = e.style;
  n(this, Ye) === n(this, rl) ? (y.left = `${(100 * d / n(this, Ec)).toFixed(2)}%`, y.top = `${(100 * u / n(this, xc)).toFixed(2)}%`) : (y.left = `${p}${d.toFixed(2)}px)`, y.top = `${p}${u.toFixed(2)}px)`), y.fontSize = `${p}${(n(Ut, nr) * l).toFixed(2)}px)`, y.fontFamily = o, i.fontSize = l, e.setAttribute('role', 'presentation'), e.textContent = t.str, e.dir = t.dir, n(this, Sc) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (i.angle = r * (180 / Math.PI));
  let S = !1;
  if (t.str.length > 1) S = !0;
  else if (t.str !== ' ' && t.transform[0] !== t.transform[3]) {
    const _ = Math.abs(t.transform[0]); const
      x = Math.abs(t.transform[3]);
    _ !== x && Math.max(_, x) / Math.min(_, x) > 1.5 && (S = !0);
  }
  if (S && (i.canvasWidth = a.vertical ? t.height : t.width), n(this, Cc).set(e, i), n(this, on).div = e, n(this, on).properties = i, w(this, kn, Kf).call(this, n(this, on)), i.hasText && n(this, Ye).append(e), i.hasEOL) {
    const _ = document.createElement('br');
    _.setAttribute('role', 'presentation'), n(this, Ye).append(_);
  }
}, Kf = function (t) {
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
  if (n(Ut, nr) > 1 && (a = `scale(${1 / n(Ut, nr)})`), i.canvasWidth !== 0 && i.hasText) {
    const {
      fontFamily: l,
    } = r; const
      {
        canvasWidth: h,
        fontSize: d,
      } = i;
    w(o = Ut, Si, Zf).call(o, s, d * n(this, sr), l);
    const {
      width: u,
    } = s.measureText(e.textContent);
    u > 0 && (a = `scaleX(${h * n(this, sr) / u}) ${a}`);
  }
  i.angle !== 0 && (a = `rotate(${i.angle}deg) ${a}`), a.length > 0 && (r.transform = a);
}, Si = new WeakSet(), jd = function (t = null) {
  let e = n(this, ba).get(t || (t = ''));
  if (!e) {
    const i = document.createElement('canvas');
    i.className = 'hiddenCanvasElement', i.lang = t, document.body.append(i), e = i.getContext('2d', {
      alpha: !1,
      willReadFrequently: !0,
    }), n(this, ba).set(t, e), n(this, Pc).set(e, {
      size: 0,
      family: '',
    });
  }
  return e;
}, Zf = function (t, e, i) {
  const s = n(this, Pc).get(t);
  e === s.size && i === s.family || (t.font = `${e}px ${i}`, s.size = e, s.family = i);
}, ub = function () {
  if (n(this, nr) !== null) return;
  const t = document.createElement('div');
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = '1px', t.style.position = 'absolute', t.textContent = 'X', document.body.append(t), g(this, nr, t.getBoundingClientRect().height), t.remove();
}, fb = function (t, e, i) {
  const s = n(this, hl).get(t);
  if (s) return s;
  const r = w(this, Si, jd).call(this, i);
  r.canvas.width = r.canvas.height = Og, w(this, Si, Zf).call(this, r, Og, t);
  const a = r.measureText(''); const o = a.fontBoundingBoxAscent; const
    l = Math.abs(a.fontBoundingBoxDescent);
  r.canvas.width = r.canvas.height = 0;
  let h = 0.8;
  return o ? h = o / (o + l) : (de.platform.isFirefox && X('Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.'), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, hl).set(t, h), h;
}, b(Ut, Si), b(Ut, hl, /* @__PURE__ */ new Map()), b(Ut, ba, /* @__PURE__ */ new Map()), b(Ut, Pc, /* @__PURE__ */ new WeakMap()), b(Ut, nr, null), b(Ut, cl, /* @__PURE__ */ new Set()), Ut);
const E0 = 100;
function Zp(c = {}) {
  typeof c === 'string' || c instanceof URL ? c = {
    url: c,
  } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
    data: c,
  });
  const t = new Jf(); const {
    docId: e,
  } = t; const i = c.url ? Mw(c.url) : null; const s = c.data ? Lw(c.data) : null; const r = c.httpHeaders || null; const a = c.withCredentials === !0; const o = c.password ?? null; const l = c.range instanceof Jp ? c.range : null; const
    h = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : 2 ** 16;
  let d = c.worker instanceof Xl ? c.worker : null;
  const u = c.verbosity; const p = typeof c.docBaseUrl === 'string' && !bd(c.docBaseUrl) ? c.docBaseUrl : null; const y = Td(c.cMapUrl); const S = c.cMapPacked !== !1; const v = c.CMapReaderFactory || (He ? $w : xg); const _ = Td(c.iccUrl); const x = Td(c.standardFontDataUrl); const T = c.StandardFontDataFactory || (He ? Uw : Eg); const E = Td(c.wasmUrl); const f = c.WasmFactory || (He ? Gw : _g); const m = c.stopAtErrors !== !0; const A = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1; const C = c.isEvalSupported !== !1; const P = typeof c.isOffscreenCanvasSupported === 'boolean' ? c.isOffscreenCanvasSupported : !He; const R = typeof c.isImageDecoderSupported === 'boolean' ? c.isImageDecoderSupported : !He && (de.platform.isFirefox || !globalThis.chrome); const k = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1; const D = typeof c.disableFontFace === 'boolean' ? c.disableFontFace : He; const I = c.fontExtraProperties === !0; const O = c.enableXfa === !0; const F = c.ownerDocument || globalThis.document; const j = c.disableRange === !0; const H = c.disableStream === !0; const B = c.disableAutoFetch === !0; const tt = c.pdfBug === !0; const st = c.CanvasFactory || (He ? Hw : Nw); const ie = c.FilterFactory || (He ? Bw : Ow); const Qe = c.enableHWA === !0; const rt = c.useWasm !== !1; const lt = l ? l.length : c.length ?? NaN; const se = typeof c.useSystemFonts === 'boolean' ? c.useSystemFonts : !He && !D; const ue = typeof c.useWorkerFetch === 'boolean' ? c.useWorkerFetch : !!(v === xg && T === Eg && f === _g && y && x && E && sh(y, document.baseURI) && sh(x, document.baseURI) && sh(E, document.baseURI)); const
    Se = null;
  fw(u);
  const wt = {
    canvasFactory: new st({
      ownerDocument: F,
      enableHWA: Qe,
    }),
    filterFactory: new ie({
      docId: e,
      ownerDocument: F,
    }),
    cMapReaderFactory: ue ? null : new v({
      baseUrl: y,
      isCompressed: S,
    }),
    standardFontDataFactory: ue ? null : new T({
      baseUrl: x,
    }),
    wasmFactory: ue ? null : new f({
      baseUrl: E,
    }),
  };
  d || (d = Xl.create({
    verbosity: u,
    port: es.workerPort,
  }), t._worker = d);
  const Hi = {
    docId: e,
    apiVersion: '5.4.296',
    data: s,
    password: o,
    disableAutoFetch: B,
    rangeChunkSize: h,
    length: lt,
    docBaseUrl: p,
    enableXfa: O,
    evaluatorOptions: {
      maxImageSize: A,
      disableFontFace: D,
      ignoreErrors: m,
      isEvalSupported: C,
      isOffscreenCanvasSupported: P,
      isImageDecoderSupported: R,
      canvasMaxAreaInBytes: k,
      fontExtraProperties: I,
      useSystemFonts: se,
      useWasm: rt,
      useWorkerFetch: ue,
      cMapUrl: y,
      iccUrl: _,
      standardFontDataUrl: x,
      wasmUrl: E,
    },
  }; const
    as = {
      ownerDocument: F,
      pdfBug: tt,
      styleElement: Se,
      loadingParams: {
        disableAutoFetch: B,
        enableXfa: O,
      },
    };
  return d.promise.then(() => {
    if (t.destroyed) throw new Error('Loading aborted');
    if (d.destroyed) throw new Error('Worker was destroyed');
    const Os = d.messageHandler.sendWithPromise('GetDocRequest', Hi, s ? [s.buffer] : null);
    let Le;
    if (l) {
      Le = new a0(l, {
        disableRange: j,
        disableStream: H,
      });
    } else if (!s) {
      if (!i) throw new Error('getDocument - no `url` parameter provided.');
      const Tt = sh(i) ? c0 : He ? A0 : g0;
      Le = new Tt({
        url: i,
        length: lt,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: j,
        disableStream: H,
      });
    }
    return Os.then((Tt) => {
      if (t.destroyed) throw new Error('Loading aborted');
      if (d.destroyed) throw new Error('Worker was destroyed');
      const Rt = new hh(e, Tt, d.port); const
        Kt = new T0(Rt, t, Le, as, wt, Qe);
      t._transport = Kt, Rt.send('Ready', null);
    });
  }).catch(t._capability.reject), t;
}
let Iu;
const Fu = class Fu {
  constructor() {
    M(this, '_capability', Promise.withResolvers());
    M(this, '_transport', null);
    M(this, '_worker', null);
    M(this, 'docId', `d${Zt(Fu, Iu)._++}`);
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
Iu = new WeakMap(), b(Fu, Iu, 0);
let Jf = Fu;
let ya; let Rc; let kc; let Dc; let Mc; let
  Zg;
let Jp = (Zg = class {
  constructor(t, e, i = !1, s = null) {
    b(this, ya, Promise.withResolvers());
    b(this, Rc, []);
    b(this, kc, []);
    b(this, Dc, []);
    b(this, Mc, []);
    this.length = t, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s;
  }

  addRangeListener(t) {
    n(this, Mc).push(t);
  }

  addProgressListener(t) {
    n(this, Dc).push(t);
  }

  addProgressiveReadListener(t) {
    n(this, kc).push(t);
  }

  addProgressiveDoneListener(t) {
    n(this, Rc).push(t);
  }

  onDataRange(t, e) {
    for (const i of n(this, Mc)) i(t, e);
  }

  onDataProgress(t, e) {
    n(this, ya).promise.then(() => {
      for (const i of n(this, Dc)) i(t, e);
    });
  }

  onDataProgressiveRead(t) {
    n(this, ya).promise.then(() => {
      for (const e of n(this, kc)) e(t);
    });
  }

  onDataProgressiveDone() {
    n(this, ya).promise.then(() => {
      for (const t of n(this, Rc)) t();
    });
  }

  transportReady() {
    n(this, ya).resolve();
  }

  requestDataRange(t, e) {
    Et('Abstract method PDFDataRangeTransport.requestDataRange');
  }

  abort() {
  }
}, ya = new WeakMap(), Rc = new WeakMap(), kc = new WeakMap(), Dc = new WeakMap(), Mc = new WeakMap(), Zg);
class _0 {
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
    return Z(this, 'isPureXfa', !!this._transport._htmlForXfa);
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
let ln; let wa; let
  mh;
class C0 {
  constructor(t, e, i, s = !1) {
    b(this, wa);
    b(this, ln, !1);
    this._pageIndex = t, this._pageInfo = e, this._transport = i, this._stats = s ? new mg() : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new hb(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null;
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
    return new md({
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
    return Z(this, 'isPureXfa', !!this._transport._htmlForXfa);
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
    annotationMode: r = Ls.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: h = null,
    pageColors: d = null,
    printAnnotationStorage: u = null,
    isEditing: p = !1,
    recordOperations: y = !1,
    operationsFilter: S = null,
  }) {
    let R; let k; let
      D;
    (R = this._stats) == null || R.time('Overall');
    const v = this._transport.getRenderingIntent(s, r, u, p); const
      {
        renderingIntent: _,
        cacheKey: x,
      } = v;
    g(this, ln, !1), l || (l = this._transport.getOptionalContentConfig(_));
    let T = this._intentStates.get(x);
    T || (T = /* @__PURE__ */ Object.create(null), this._intentStates.set(x, T)), T.streamReaderCancelTimeout && (clearTimeout(T.streamReaderCancelTimeout), T.streamReaderCancelTimeout = null);
    const E = !!(_ & wi.PRINT);
    T.displayReadyCapability || (T.displayReadyCapability = Promise.withResolvers(), T.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null,
    }, (k = this._stats) == null || k.time('Page Request'), this._pumpOperatorList(v));
    const f = !!(this._pdfBug && ((D = globalThis.StepperManager) != null && D.enabled)); const m = !this.recordedBBoxes && (y || f); const A = (I) => {
      let O; let
        F;
      if (T.renderTasks.delete(C), m) {
        const j = (O = C.gfx) == null ? void 0 : O.dependencyTracker.take();
        j && (C.stepper && C.stepper.setOperatorBBoxes(j, C.gfx.dependencyTracker.takeDebugMetadata()), y && (this.recordedBBoxes = j));
      }
      E && g(this, ln, !0), w(this, wa, mh).call(this), I ? (C.capability.reject(I), this._abortOperatorList({
        intentState: T,
        reason: I instanceof Error ? I : new Error(I),
      })) : C.capability.resolve(), this._stats && (this._stats.timeEnd('Rendering'), this._stats.timeEnd('Overall'), (F = globalThis.Stats) != null && F.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }; const
      C = new Qf({
        callback: A,
        params: {
          canvas: e,
          canvasContext: t,
          dependencyTracker: m ? new Ww(e, T.operatorList.length, f) : null,
          viewport: i,
          transform: a,
          background: o,
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: h,
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
    return Promise.all([T.displayReadyCapability.promise, l]).then(([I, O]) => {
      let F;
      if (this.destroyed) {
        A();
        return;
      }
      if ((F = this._stats) == null || F.time('Rendering'), !(O.renderingIntent & _)) throw new Error('Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.');
      C.initializeGraphics({
        transparency: I,
        optionalContentConfig: O,
      }), C.operatorListChanged();
    }).catch(A), P;
  }

  getOperatorList({
    intent: t = 'display',
    annotationMode: e = Ls.ENABLE,
    printAnnotationStorage: i = null,
    isEditing: s = !1,
  } = {}) {
    let h;
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
      separateAnnots: null,
    }, (h = this._stats) == null || h.time('Page Request'), this._pumpOperatorList(a)), o.opListReadCapability.promise;
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
    if (this._transport._htmlForXfa) return this.getXfa().then((i) => Ph.textContent(i));
    const e = this.streamTextContent(t);
    return new Promise((i, s) => {
      function r() {
        a.read().then(({
          value: l,
          done: h,
        }) => {
          if (h) {
            i(o);
            return;
          }
          o.lang ?? (o.lang = l.lang), Object.assign(o.styles, l.styles), o.items.push(...l.items), r();
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
    return this.objs.clear(), g(this, ln, !1), Promise.all(t);
  }

  cleanup(t = !1) {
    g(this, ln, !0);
    const e = w(this, wa, mh).call(this);
    return t && e && this._stats && (this._stats = new mg()), e;
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
    t.lastChunk && w(this, wa, mh).call(this);
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
    } = i; const l = this._transport.messageHandler.sendWithStream('GetOperatorList', {
      pageIndex: this._pageIndex,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: s,
    }, a).getReader(); const
      h = this._intentStates.get(e);
    h.streamReader = l;
    const d = () => {
      l.read().then(({
        value: u,
        done: p,
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
            for (const p of h.renderTasks) p.operatorListChanged();
            w(this, wa, mh).call(this);
          }
          if (h.displayReadyCapability) h.displayReadyCapability.reject(u);
          else if (h.opListReadCapability) h.opListReadCapability.reject(u);
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
        if (e instanceof Vu) {
          let s = E0;
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
      if (t.streamReader.cancel(new Tn(e.message)).catch(() => {
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
ln = new WeakMap(), wa = new WeakSet(), mh = function () {
  if (!n(this, ln) || this.destroyed) return !1;
  for (const {
    renderTasks: t,
    operatorList: e,
  } of this._intentStates.values()) if (t.size > 0 || !e.lastChunk) return !1;
  return this._intentStates.clear(), this.objs.clear(), g(this, ln, !1), !0;
};
let rr; let Xi; let hn; let Aa; let Nu; let va; let Sa; let Ue; let Vd; let pb; let gb; let bh; let dl; let
  qd;
const kt = class kt {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: i = pw(),
  } = {}) {
    b(this, Ue);
    b(this, rr, Promise.withResolvers());
    b(this, Xi, null);
    b(this, hn, null);
    b(this, Aa, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = i, e) {
      if (n(kt, Sa).has(e)) throw new Error('Cannot use more than one PDFWorker per port.');
      n(kt, Sa).set(e, this), w(this, Ue, pb).call(this, e);
    } else w(this, Ue, gb).call(this);
  }

  get promise() {
    return n(this, rr).promise;
  }

  get port() {
    return n(this, hn);
  }

  get messageHandler() {
    return n(this, Xi);
  }

  destroy() {
    let t; let
      e;
    this.destroyed = !0, (t = n(this, Aa)) == null || t.terminate(), g(this, Aa, null), n(kt, Sa).delete(n(this, hn)), g(this, hn, null), (e = n(this, Xi)) == null || e.destroy(), g(this, Xi, null);
  }

  static create(t) {
    const e = n(this, Sa).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy) throw new Error('PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.');
      return e;
    }
    return new kt(t);
  }

  static get workerSrc() {
    if (es.workerSrc) return es.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }

  static get _setupFakeWorkerGlobal() {
    return Z(this, '_setupFakeWorkerGlobal', (async () => (n(this, dl, qd) ? n(this, dl, qd) : (await import(
      /* webpackIgnore: true */
      /* @vite-ignore */
      this.workerSrc
    )).WorkerMessageHandler))());
  }
};
rr = new WeakMap(), Xi = new WeakMap(), hn = new WeakMap(), Aa = new WeakMap(), Nu = new WeakMap(), va = new WeakMap(), Sa = new WeakMap(), Ue = new WeakSet(), Vd = function () {
  n(this, rr).resolve(), n(this, Xi).send('configure', {
    verbosity: this.verbosity,
  });
}, pb = function (t) {
  g(this, hn, t), g(this, Xi, new hh('main', 'worker', t)), n(this, Xi).on('ready', () => {
  }), w(this, Ue, Vd).call(this);
}, gb = function () {
  if (n(kt, va) || n(kt, dl, qd)) {
    w(this, Ue, bh).call(this);
    return;
  }
  let {
    workerSrc: t,
  } = kt;
  try {
    kt._isSameOrigin(window.location, t) || (t = kt._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: 'module',
    }); const i = new hh('main', 'worker', e); const s = () => {
      r.abort(), i.destroy(), e.terminate(), this.destroyed ? n(this, rr).reject(new Error('Worker was destroyed')) : w(this, Ue, bh).call(this);
    }; const
      r = new AbortController();
    e.addEventListener('error', () => {
      n(this, Aa) || s();
    }, {
      signal: r.signal,
    }), i.on('test', (o) => {
      if (r.abort(), this.destroyed || !o) {
        s();
        return;
      }
      g(this, Xi, i), g(this, hn, e), g(this, Aa, e), w(this, Ue, Vd).call(this);
    }), i.on('ready', (o) => {
      if (r.abort(), this.destroyed) {
        s();
        return;
      }
      try {
        a();
      } catch {
        w(this, Ue, bh).call(this);
      }
    });
    const a = () => {
      const o = new Uint8Array();
      i.send('test', o, [o.buffer]);
    };
    a();
    return;
  } catch {
    ju('The worker has been disabled.');
  }
  w(this, Ue, bh).call(this);
}, bh = function () {
  n(kt, va) || (X('Setting up fake worker.'), g(kt, va, !0)), kt._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, rr).reject(new Error('Worker was destroyed'));
      return;
    }
    const e = new Fw();
    g(this, hn, e);
    const i = `fake${Zt(kt, Nu)._++}`; const
      s = new hh(`${i}_worker`, i, e);
    t.setup(s, e), g(this, Xi, new hh(i, `${i}_worker`, e)), w(this, Ue, Vd).call(this);
  }).catch((t) => {
    n(this, rr).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, dl = new WeakSet(), qd = function () {
  let t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, b(kt, dl), b(kt, Nu, 0), b(kt, va, !1), b(kt, Sa, /* @__PURE__ */ new WeakMap()), He && (g(kt, va, !0), es.workerSrc || (es.workerSrc = './pdf.worker.mjs')), kt._isSameOrigin = (t, e) => {
  const i = URL.parse(t);
  if (!(i != null && i.origin) || i.origin === 'null') return !1;
  const s = new URL(e, i);
  return i.origin === s.origin;
}, kt._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: 'text/javascript',
  }));
}, kt.fromPort = (t) => {
  if (xw('`PDFWorker.fromPort` - please use `PDFWorker.create` instead.'), !(t != null && t.port)) throw new Error('PDFWorker.fromPort - invalid method signature.');
  return kt.create(t);
};
let Xl = kt;
let cn; let xs; let ul; let fl; let dn; let xa; let
  yh;
class T0 {
  constructor(t, e, i, s, r, a) {
    b(this, xa);
    b(this, cn, /* @__PURE__ */ new Map());
    b(this, xs, /* @__PURE__ */ new Map());
    b(this, ul, /* @__PURE__ */ new Map());
    b(this, fl, /* @__PURE__ */ new Map());
    b(this, dn, null);
    this.messageHandler = t, this.loadingTask = e, this.commonObjs = new hb(), this.fontLoader = new kw({
      ownerDocument: s.ownerDocument,
      styleElement: s.styleElement,
    }), this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.cMapReaderFactory = r.cMapReaderFactory, this.standardFontDataFactory = r.standardFontDataFactory, this.wasmFactory = r.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = a, this.setupMessageHandler();
  }

  get annotationStorage() {
    return Z(this, 'annotationStorage', new Xp());
  }

  getRenderingIntent(t, e = Ls.ENABLE, i = null, s = !1, r = !1) {
    let a = wi.DISPLAY; let
      o = Nf;
    switch (t) {
      case 'any':
        a = wi.ANY;
        break;
      case 'display':
        break;
      case 'print':
        a = wi.PRINT;
        break;
      default:
        X(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & wi.PRINT && i instanceof Vm ? i : this.annotationStorage;
    switch (e) {
      case Ls.DISABLE:
        a += wi.ANNOTATIONS_DISABLE;
        break;
      case Ls.ENABLE:
        break;
      case Ls.ENABLE_FORMS:
        a += wi.ANNOTATIONS_FORMS;
        break;
      case Ls.ENABLE_STORAGE:
        a += wi.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        X(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    s && (a += wi.IS_EDITING), r && (a += wi.OPLIST);
    const {
      ids: h,
      hash: d,
    } = l.modifiedIds; const
      u = [a, o.hash, d];
    return {
      renderingIntent: a,
      cacheKey: u.join('_'),
      annotationStorageSerializable: o,
      modifiedIds: h,
    };
  }

  destroy() {
    let i;
    if (this.destroyCapability) return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (i = n(this, dn)) == null || i.reject(new Error('Worker was destroyed during onPassword callback'));
    const t = [];
    for (const s of n(this, xs).values()) t.push(s._destroy());
    n(this, xs).clear(), n(this, ul).clear(), n(this, fl).clear(), this.hasOwnProperty('annotationStorage') && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise('Terminate', null);
    return t.push(e), Promise.all(t).then(() => {
      let s; let
        r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, cn).clear(), this.filterFactory.destroy(), Dh.cleanup(), (s = this._networkStream) == null || s.cancelAllRequests(new Tn('Worker was terminated.')), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
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
      return (!s || !r) && (this._lastProgress && ((o = e.onProgress) == null || o.call(e, this._lastProgress)), this._fullReader.onProgress = (l) => {
        let h;
        (h = e.onProgress) == null || h.call(e, {
          loaded: l.loaded,
          total: l.total,
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
      this._numPages = i.numPages, this._htmlForXfa = i.htmlForXfa, delete i.htmlForXfa, e._capability.resolve(new _0(i, this));
    }), t.on('DocException', (i) => {
      e._capability.reject(ze(i));
    }), t.on('PasswordRequest', (i) => {
      g(this, dn, Promise.withResolvers());
      try {
        if (!e.onPassword) throw ze(i);
        const s = (r) => {
          r instanceof Error ? n(this, dn).reject(r) : n(this, dn).resolve({
            password: r,
          });
        };
        e.onPassword(s, i.code);
      } catch (s) {
        n(this, dn).reject(s);
      }
      return n(this, dn).promise;
    }), t.on('DataLoaded', (i) => {
      let s;
      (s = e.onProgress) == null || s.call(e, {
        loaded: i.length,
        total: i.length,
      }), this.downloadInfoCapability.resolve(i);
    }), t.on('StartRenderPage', (i) => {
      if (this.destroyed) return;
      n(this, xs).get(i.pageIndex)._startRenderPage(i.transparency, i.cacheKey);
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
          const o = new qf(r); const l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (u, p) => globalThis.FontInspector.fontAdded(u, p) : null; const
            h = new Dw(o, l, r.extra, r.charProcOperatorList);
          this.fontLoader.bind(h).catch(() => t.sendWithPromise('FontFallback', {
            id: i,
          })).finally(() => {
            !h.fontExtraProperties && h.data && h.clearData(), this.commonObjs.resolve(i, h);
          });
          break;
        case 'CopyLocalImage':
          const {
            imageRef: d,
          } = r;
          nt(d, 'The imageRef must be defined.');
          for (const u of n(this, xs).values()) for (const [, p] of u.objs) if ((p == null ? void 0 : p.ref) === d) return p.dataLen ? (this.commonObjs.resolve(i, structuredClone(p)), p.dataLen) : null;
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
      let l;
      if (this.destroyed) return;
      const o = n(this, xs).get(s);
      if (!o.objs.has(i)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
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
      i = n(this, ul).get(e);
    if (i) return i;
    const s = this.messageHandler.sendWithPromise('GetPage', {
      pageIndex: e,
    }).then((r) => {
      if (this.destroyed) throw new Error('Transport destroyed');
      r.refStr && n(this, fl).set(r.refStr, t);
      const a = new C0(e, r, this, this._params.pdfBug);
      return n(this, xs).set(e, a), a;
    });
    return n(this, ul).set(e, s), s;
  }

  getPageIndex(t) {
    return Of(t) ? this.messageHandler.sendWithPromise('GetPageIndex', {
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
    return w(this, xa, yh).call(this, 'GetFieldObjects');
  }

  hasJSActions() {
    return w(this, xa, yh).call(this, 'HasJSActions');
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
    return w(this, xa, yh).call(this, 'GetDocJSActions');
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
    return w(this, xa, yh).call(this, 'GetOptionalContentConfig').then((e) => new r0(e, t));
  }

  getPermissions() {
    return this.messageHandler.sendWithPromise('GetPermissions', null);
  }

  getMetadata() {
    const t = 'GetMetadata';
    const e = n(this, cn).get(t);
    if (e) return e;
    const i = this.messageHandler.sendWithPromise(t, null).then((s) => {
      let r; let
        a;
      return {
        info: s[0],
        metadata: s[1] ? new s0(s[1]) : null,
        contentDispositionFilename: ((r = this._fullReader) == null ? void 0 : r.filename) ?? null,
        contentLength: ((a = this._fullReader) == null ? void 0 : a.contentLength) ?? null,
      };
    });
    return n(this, cn).set(t, i), i;
  }

  getMarkInfo() {
    return this.messageHandler.sendWithPromise('GetMarkInfo', null);
  }

  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise('Cleanup', null);
      for (const e of n(this, xs).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, cn).clear(), this.filterFactory.destroy(!0), Dh.cleanup();
    }
  }

  cachedPageNumber(t) {
    if (!Of(t)) return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
    return n(this, fl).get(e) ?? null;
  }
}
cn = new WeakMap(), xs = new WeakMap(), ul = new WeakMap(), fl = new WeakMap(), dn = new WeakMap(), xa = new WeakSet(), yh = function (t, e = null) {
  const i = n(this, cn).get(t);
  if (i) return i;
  const s = this.messageHandler.sendWithPromise(t, e);
  return n(this, cn).set(t, s), s;
};
let ar;
class P0 {
  constructor(t) {
    b(this, ar, null);
    M(this, 'onContinue', null);
    M(this, 'onError', null);
    g(this, ar, t);
  }

  get promise() {
    return n(this, ar).capability.promise;
  }

  cancel(t = 0) {
    n(this, ar).cancel(null, t);
  }

  get separateAnnots() {
    const {
      separateAnnots: t,
    } = n(this, ar).operatorList;
    if (!t) return !1;
    const {
      annotationCanvasMap: e,
    } = n(this, ar);
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
ar = new WeakMap();
let or; let
  Ea;
const Br = class Br {
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
    operationsFilter: S = null,
  }) {
    b(this, or, null);
    this.callback = t, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = u, this.pageColors = p, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = d === !0 && typeof window < 'u', this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new P0(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = y, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = S;
  }

  get completed() {
    return this.capability.promise.catch(() => {
    });
  }

  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e,
  }) {
    let l; let
      h;
    if (this.cancelled) return;
    if (this._canvas) {
      if (n(Br, Ea).has(this._canvas)) throw new Error('Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.');
      n(Br, Ea).add(this._canvas);
    }
    this._pdfBug && ((l = globalThis.StepperManager) != null && l.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
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
    this.gfx = new yo(o, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e,
    }, this.annotationCanvasMap, this.pageColors, a), this.gfx.beginDrawing({
      transform: s,
      viewport: i,
      transparency: t,
      background: r,
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (h = this.graphicsReadyCallback) == null || h.call(this);
  }

  cancel(t = null, e = 0) {
    let i; let s; let
      r;
    this.running = !1, this.cancelled = !0, (i = this.gfx) == null || i.endDrawing(), n(this, or) && (window.cancelAnimationFrame(n(this, or)), g(this, or, null)), n(Br, Ea).delete(this._canvas), t || (t = new Vu(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (s = this.task).onError) == null || r.call(s, t);
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
    this._useRequestAnimationFrame ? g(this, or, window.requestAnimationFrame(() => {
      g(this, or, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }

  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(Br, Ea).delete(this._canvas), this.callback())));
  }
};
or = new WeakMap(), Ea = new WeakMap(), b(Br, Ea, /* @__PURE__ */ new WeakSet());
let Qf = Br;
const mb = '5.4.296';
const bb = 'f56dc8601';
let oi; let _a; let pl; let te; let Lc; let gl; let un; let Ic; let lr; let Yi; let Fc; let yt; let tp; let ep; let ip; let Ir; let yb; let
  Ln;
const We = class We {
  constructor({
    editor: t = null,
    uiManager: e = null,
  }) {
    b(this, yt);
    b(this, oi, null);
    b(this, _a, null);
    b(this, pl);
    b(this, te, null);
    b(this, Lc, !1);
    b(this, gl, !1);
    b(this, un, null);
    b(this, Ic);
    b(this, lr, null);
    b(this, Yi, null);
    let i; let
      s;
    t ? (g(this, gl, !1), g(this, un, t)) : g(this, gl, !0), g(this, Yi, (t == null ? void 0 : t._uiManager) || e), g(this, Ic, n(this, Yi)._eventBus), g(this, pl, ((i = t == null ? void 0 : t.color) == null ? void 0 : i.toUpperCase()) || ((s = n(this, Yi)) == null ? void 0 : s.highlightColors.values().next().value) || '#FFFF98'), n(We, Fc) || g(We, Fc, Object.freeze({
      blue: 'pdfjs-editor-colorpicker-blue',
      green: 'pdfjs-editor-colorpicker-green',
      pink: 'pdfjs-editor-colorpicker-pink',
      red: 'pdfjs-editor-colorpicker-red',
      yellow: 'pdfjs-editor-colorpicker-yellow',
    }));
  }

  static get _keyboardManager() {
    return Z(this, '_keyboardManager', new yd([[['Escape', 'mac+Escape'], We.prototype._hideDropdownFromKeyboard], [[' ', 'mac+ '], We.prototype._colorSelectFromKeyboard], [['ArrowDown', 'ArrowRight', 'mac+ArrowDown', 'mac+ArrowRight'], We.prototype._moveToNext], [['ArrowUp', 'ArrowLeft', 'mac+ArrowUp', 'mac+ArrowLeft'], We.prototype._moveToPrevious], [['Home', 'mac+Home'], We.prototype._moveToBeginning], [['End', 'mac+End'], We.prototype._moveToEnd]]));
  }

  renderButton() {
    const t = g(this, oi, document.createElement('button'));
    t.className = 'colorPicker', t.tabIndex = '0', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-button'), t.ariaHasPopup = 'true', n(this, un) && (t.ariaControls = `${n(this, un).id}_colorpicker_dropdown`);
    const e = n(this, Yi)._signal;
    t.addEventListener('click', w(this, yt, Ir).bind(this), {
      signal: e,
    }), t.addEventListener('keydown', w(this, yt, ip).bind(this), {
      signal: e,
    });
    const i = g(this, _a, document.createElement('span'));
    return i.className = 'swatch', i.ariaHidden = 'true', i.style.backgroundColor = n(this, pl), t.append(i), t;
  }

  renderMainDropdown() {
    const t = g(this, te, w(this, yt, tp).call(this));
    return t.ariaOrientation = 'horizontal', t.ariaLabelledBy = 'highlightColorPickerLabel', t;
  }

  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, oi)) {
      w(this, yt, Ir).call(this, t);
      return;
    }
    const e = t.target.getAttribute('data-color');
    e && w(this, yt, ep).call(this, e, t);
  }

  _moveToNext(t) {
    let e; let
      i;
    if (!n(this, yt, Ln)) {
      w(this, yt, Ir).call(this, t);
      return;
    }
    if (t.target === n(this, oi)) {
      (e = n(this, te).firstChild) == null || e.focus();
      return;
    }
    (i = t.target.nextSibling) == null || i.focus();
  }

  _moveToPrevious(t) {
    let e; let
      i;
    if (t.target === ((e = n(this, te)) == null ? void 0 : e.firstChild) || t.target === n(this, oi)) {
      n(this, yt, Ln) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, yt, Ln) || w(this, yt, Ir).call(this, t), (i = t.target.previousSibling) == null || i.focus();
  }

  _moveToBeginning(t) {
    let e;
    if (!n(this, yt, Ln)) {
      w(this, yt, Ir).call(this, t);
      return;
    }
    (e = n(this, te).firstChild) == null || e.focus();
  }

  _moveToEnd(t) {
    let e;
    if (!n(this, yt, Ln)) {
      w(this, yt, Ir).call(this, t);
      return;
    }
    (e = n(this, te).lastChild) == null || e.focus();
  }

  hideDropdown() {
    let t; let
      e;
    (t = n(this, te)) == null || t.classList.add('hidden'), n(this, oi).ariaExpanded = 'false', (e = n(this, lr)) == null || e.abort(), g(this, lr, null);
  }

  _hideDropdownFromKeyboard() {
    let t;
    if (!n(this, gl)) {
      if (!n(this, yt, Ln)) {
        (t = n(this, un)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, oi).focus({
        preventScroll: !0,
        focusVisible: n(this, Lc),
      });
    }
  }

  updateColor(t) {
    if (n(this, _a) && (n(this, _a).style.backgroundColor = t), !n(this, te)) return;
    const e = n(this, Yi).highlightColors.values();
    for (const i of n(this, te).children) i.ariaSelected = e.next().value === t.toUpperCase();
  }

  destroy() {
    let t; let
      e;
    (t = n(this, oi)) == null || t.remove(), g(this, oi, null), g(this, _a, null), (e = n(this, te)) == null || e.remove(), g(this, te, null);
  }
};
oi = new WeakMap(), _a = new WeakMap(), pl = new WeakMap(), te = new WeakMap(), Lc = new WeakMap(), gl = new WeakMap(), un = new WeakMap(), Ic = new WeakMap(), lr = new WeakMap(), Yi = new WeakMap(), Fc = new WeakMap(), yt = new WeakSet(), tp = function () {
  const t = document.createElement('div'); const
    e = n(this, Yi)._signal;
  t.addEventListener('contextmenu', xi, {
    signal: e,
  }), t.className = 'dropdown', t.role = 'listbox', t.ariaMultiSelectable = 'false', t.ariaOrientation = 'vertical', t.setAttribute('data-l10n-id', 'pdfjs-editor-colorpicker-dropdown'), n(this, un) && (t.id = `${n(this, un).id}_colorpicker_dropdown`);
  for (const [i, s] of n(this, Yi).highlightColors) {
    const r = document.createElement('button');
    r.tabIndex = '0', r.role = 'option', r.setAttribute('data-color', s), r.title = i, r.setAttribute('data-l10n-id', n(We, Fc)[i]);
    const a = document.createElement('span');
    r.append(a), a.className = 'swatch', a.style.backgroundColor = s, r.ariaSelected = s === n(this, pl), r.addEventListener('click', w(this, yt, ep).bind(this, s), {
      signal: e,
    }), t.append(r);
  }
  return t.addEventListener('keydown', w(this, yt, ip).bind(this), {
    signal: e,
  }), t;
}, ep = function (t, e) {
  e.stopPropagation(), n(this, Ic).dispatch('switchannotationeditorparams', {
    source: this,
    type: it.HIGHLIGHT_COLOR,
    value: t,
  }), this.updateColor(t);
}, ip = function (t) {
  We._keyboardManager.exec(this, t);
}, Ir = function (t) {
  if (n(this, yt, Ln)) {
    this.hideDropdown();
    return;
  }
  if (g(this, Lc, t.detail === 0), n(this, lr) || (g(this, lr, new AbortController()), window.addEventListener('pointerdown', w(this, yt, yb).bind(this), {
    signal: n(this, Yi).combinedSignal(n(this, lr)),
  })), n(this, oi).ariaExpanded = 'true', n(this, te)) {
    n(this, te).classList.remove('hidden');
    return;
  }
  const e = g(this, te, w(this, yt, tp).call(this));
  n(this, oi).append(e);
}, yb = function (t) {
  let e;
  (e = n(this, te)) != null && e.contains(t.target) || this.hideDropdown();
}, Ln = function () {
  return n(this, te) && !n(this, te).classList.contains('hidden');
}, b(We, Fc, null);
const Mh = We;
let Es; let Nc; let ml; let
  Oc;
const Hr = class Hr {
  constructor(t) {
    b(this, Es, null);
    b(this, Nc, null);
    b(this, ml, null);
    g(this, Nc, t), g(this, ml, t._uiManager), n(Hr, Oc) || g(Hr, Oc, Object.freeze({
      freetext: 'pdfjs-editor-color-picker-free-text-input',
      ink: 'pdfjs-editor-color-picker-ink-input',
    }));
  }

  renderButton() {
    if (n(this, Es)) return n(this, Es);
    const {
      editorType: t,
      colorType: e,
      colorValue: i,
    } = n(this, Nc); const
      s = g(this, Es, document.createElement('input'));
    return s.type = 'color', s.value = i || '#000000', s.className = 'basicColorPicker', s.tabIndex = 0, s.setAttribute('data-l10n-id', n(Hr, Oc)[t]), s.addEventListener('input', () => {
      n(this, ml).updateParams(e, s.value);
    }, {
      signal: n(this, ml)._signal,
    }), s;
  }

  update(t) {
    n(this, Es) && (n(this, Es).value = t);
  }

  destroy() {
    let t;
    (t = n(this, Es)) == null || t.remove(), g(this, Es, null);
  }

  hideDropdown() {
  }
};
Es = new WeakMap(), Nc = new WeakMap(), ml = new WeakMap(), Oc = new WeakMap(), b(Hr, Oc, null);
const wu = Hr;
function Bg(c) {
  return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, '0');
}
function th(c) {
  return Math.max(0, Math.min(255, 255 * c));
}
class Hg {
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
    return t = th(t), [t, t, t];
  }

  static G_HTML([t]) {
    const e = Bg(t);
    return `#${e}${e}${e}`;
  }

  static RGB_G([t, e, i]) {
    return ['G', 0.3 * t + 0.59 * e + 0.11 * i];
  }

  static RGB_rgb(t) {
    return t.map(th);
  }

  static RGB_HTML(t) {
    return `#${t.map(Bg).join('')}`;
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
    return [th(1 - Math.min(1, t + s)), th(1 - Math.min(1, i + s)), th(1 - Math.min(1, e + s))];
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
class R0 {
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
class Lh extends R0 {
  _createSVG(t) {
    return document.createElementNS(Bs, t);
  }
}
const k0 = 9; const Ja = /* @__PURE__ */ new WeakSet(); const
  D0 = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class $g {
  static create(t) {
    switch (t.data.annotationType) {
      case zt.LINK:
        return new Qp(t);
      case zt.TEXT:
        return new L0(t);
      case zt.WIDGET:
        switch (t.data.fieldType) {
          case 'Tx':
            return new I0(t);
          case 'Btn':
            return t.data.radioButton ? new vb(t) : t.data.checkBox ? new N0(t) : new O0(t);
          case 'Ch':
            return new B0(t);
          case 'Sig':
            return new F0(t);
        }
        return new eo(t);
      case zt.POPUP:
        return new np(t);
      case zt.FREETEXT:
        return new Cb(t);
      case zt.LINE:
        return new $0(t);
      case zt.SQUARE:
        return new U0(t);
      case zt.CIRCLE:
        return new G0(t);
      case zt.POLYLINE:
        return new Tb(t);
      case zt.CARET:
        return new W0(t);
      case zt.INK:
        return new tg(t);
      case zt.POLYGON:
        return new z0(t);
      case zt.HIGHLIGHT:
        return new Pb(t);
      case zt.UNDERLINE:
        return new j0(t);
      case zt.SQUIGGLY:
        return new V0(t);
      case zt.STRIKEOUT:
        return new q0(t);
      case zt.STAMP:
        return new Rb(t);
      case zt.FILEATTACHMENT:
        return new X0(t);
      default:
        return new Ot(t);
    }
  }
}
let Ca; let bl; let Ii; let Bc; let
  sp;
const hg = class hg {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: i = !1,
    createQuadrilaterals: s = !1,
  } = {}) {
    b(this, Bc);
    b(this, Ca, null);
    b(this, bl, !1);
    b(this, Ii, null);
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
    return hg._hasPopupData(this.data) || this.enableComment && !!this.commentText;
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
      for (let l = 0; l < e.length; l += 8) e[l + 1] > a ? (a = e[l + 1], r = e[l + 2]) : e[l + 1] === a && (r = Math.max(r, e[l + 2]));
      return [r, a];
    }
    if ((i == null ? void 0 : i.length) >= 1) {
      for (const l of i) for (let h = 0, d = l.length; h < d; h += 2) l[h + 1] > a ? (a = l[h + 1], r = l[h]) : l[h + 1] === a && (r = Math.max(r, l[h]));
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
    return ((i = (e = this.annotationStorage.getRawValue(`${Ch}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : i.contents) || ((s = t.contentsObj) == null ? void 0 : s.str) || '';
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
    }) || this.annotationStorage.setValue(`${Ch}${e.id}`, {
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
    (e = ((t = n(this, Ii)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), g(this, Ii, this.popup = null);
  }

  updateEdited(t) {
    let r;
    if (!this.container) return;
    t.rect && (n(this, Ca) || g(this, Ca, {
      rect: this.data.rect.slice(0),
    }));
    const {
      rect: e,
      popup: i,
    } = t;
    e && w(this, Bc, sp).call(this, e);
    let s = ((r = n(this, Ii)) == null ? void 0 : r.popup) || this.popup;
    !s && (i != null && i.text) && (this._createPopup(i), s = n(this, Ii).popup), s && (s.updateEdited(t), i != null && i.deleted && (s.remove(), g(this, Ii, null), this.popup = null));
  }

  resetEdited() {
    let t;
    n(this, Ca) && (w(this, Bc, sp).call(this, n(this, Ca).rect), (t = n(this, Ii)) == null || t.popup.resetEdited(), g(this, Ca, null));
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
    r.setAttribute('data-annotation-id', e.id), !(this instanceof eo) && !(this instanceof Qp) && (r.tabIndex = 0);
    const {
      style: a,
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add('norotate'), !e.rect || this instanceof np) {
      const {
        rotation: v,
      } = e;
      return !e.hasOwnCanvas && v !== 0 && this.setRotation(v, r), r;
    }
    const {
      width: o,
      height: l,
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const v = e.borderStyle.horizontalCornerRadius; const
        _ = e.borderStyle.verticalCornerRadius;
      if (v > 0 || _ > 0) {
        const T = `calc(${v}px * var(--total-scale-factor)) / calc(${_}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      } else if (this instanceof vb) {
        const T = `calc(${o}px * var(--total-scale-factor)) / calc(${l}px * var(--total-scale-factor))`;
        a.borderRadius = T;
      }
      switch (e.borderStyle.style) {
        case no.SOLID:
          a.borderStyle = 'solid';
          break;
        case no.DASHED:
          a.borderStyle = 'dashed';
          break;
        case no.BEVELED:
          X('Unimplemented border style: beveled');
          break;
        case no.INSET:
          X('Unimplemented border style: inset');
          break;
        case no.UNDERLINE:
          a.borderBottomStyle = 'solid';
          break;
      }
      const x = e.borderColor || null;
      x ? (g(this, bl, !0), a.borderColor = G.makeHexColor(x[0] | 0, x[1] | 0, x[2] | 0)) : a.borderWidth = 0;
    }
    const h = G.normalizeRect([e.rect[0], i.view[3] - e.rect[1] + i.view[1], e.rect[2], i.view[3] - e.rect[3] + i.view[1]]); const
      {
        pageWidth: d,
        pageHeight: u,
        pageX: p,
        pageY: y,
      } = s.rawDims;
    a.left = `${100 * (h[0] - p) / d}%`, a.top = `${100 * (h[1] - y) / u}%`;
    const {
      rotation: S,
    } = e;
    return e.hasOwnCanvas || S === 0 ? (a.width = `${100 * o / d}%`, a.height = `${100 * l / u}%`) : this.setRotation(S, r), r;
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
      s.target.style[i] = Hg[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [i]: Hg[`${a}_rgb`](o),
      });
    };
    return Z(this, '_commonActions', {
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
    if (n(this, bl)) {
      const {
        borderColor: v,
        borderWidth: _,
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${v}" stroke-width="${_}">`], this.container.classList.add('hasBorder');
    }
    const l = s - e; const h = r - i; const {
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
      const x = t[v]; const T = t[v + 1]; const E = t[v + 2]; const f = t[v + 3]; const m = d.createElement('rect'); const A = (E - e) / l; const C = (r - T) / h; const P = (x - E) / l; const
        R = (T - f) / h;
      m.setAttribute('x', A), m.setAttribute('y', C), m.setAttribute('width', P), m.setAttribute('height', R), y.append(m), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${A}" y="${C}" width="${P}" height="${R}"/>`);
    }
    n(this, bl) && (o.push("</g></svg>')"), a.backgroundImage = o.join('')), this.container.append(u), this.container.style.clipPath = `url(#${S})`;
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
    const r = g(this, Ii, new np({
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
    return !!(n(this, Ii) || this.popup || this.data.popupRef);
  }

  get extraPopupElement() {
    return n(this, Ii);
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
          const l = typeof o === 'string' ? o : null; const
            h = document.querySelector(`[data-element-id="${a}"]`);
          if (h && !Ja.has(h)) {
            X(`_getElementsByName - element not allowed: ${a}`);
            continue;
          }
          i.push({
            id: a,
            exportValue: l,
            domElement: h,
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
      a !== e && Ja.has(s) && i.push({
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
Ca = new WeakMap(), bl = new WeakMap(), Ii = new WeakMap(), Bc = new WeakSet(), sp = function (t) {
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
          pageY: l,
        },
      },
    },
  } = this;
  i == null || i.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, s === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(s);
};
let Ot = hg;
class M0 extends Ot {
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
let vi; let Fr; let wb; let
  Ab;
class Qp extends Ot {
  constructor(e, i = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(i != null && i.ignoreBorder),
      createQuadrilaterals: !0,
    });
    b(this, vi);
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
    return e.url ? (i.addLinkAttributes(s, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(s, e.action, e.overlaidText), r = !0) : e.attachment ? (w(this, vi, wb).call(this, s, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (w(this, vi, Ab).call(this, s, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(s, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.Action || e.actions['Mouse Up'] || e.actions['Mouse Down']) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, e), r = !0), e.resetForm ? (this._bindResetFormAction(s, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(s, ''), r = !0)), this.container.classList.add('linkAnnotation'), r && this.container.append(s), this.container;
  }

  _bindLink(e, i, s = '') {
    e.href = this.linkService.getDestinationHash(i), e.onclick = () => (i && this.linkService.goToDestination(i), !1), (i || i === '') && w(this, vi, Fr).call(this), s && (e.title = s);
  }

  _bindNamedAction(e, i, s = '') {
    e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeNamedAction(i), !1), s && (e.title = s), w(this, vi, Fr).call(this);
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
    i.overlaidText && (e.title = i.overlaidText), e.onclick || (e.onclick = () => !1), w(this, vi, Fr).call(this);
  }

  _bindResetFormAction(e, i) {
    const s = e.onclick;
    if (s || (e.href = this.linkService.getAnchorUrl('')), w(this, vi, Fr).call(this), !this._fieldObjects) {
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
        l = [];
      if (r.length !== 0 || a.length !== 0) {
        const p = new Set(a);
        for (const y of r) {
          const S = this._fieldObjects[y] || [];
          for (const {
            id: v,
          } of S) p.add(v);
        }
        for (const y of Object.values(this._fieldObjects)) for (const S of y) p.has(S.id) === o && l.push(S);
      } else for (const p of Object.values(this._fieldObjects)) l.push(...p);
      const h = this.annotationStorage; const
        d = [];
      for (const p of l) {
        const {
          id: y,
        } = p;
        switch (d.push(y), p.type) {
          case 'text': {
            const v = p.defaultValue || '';
            h.setValue(y, {
              value: v,
            });
            break;
          }
          case 'checkbox':
          case 'radiobutton': {
            const v = p.defaultValue === p.exportValues;
            h.setValue(y, {
              value: v,
            });
            break;
          }
          case 'combobox':
          case 'listbox': {
            const v = p.defaultValue || '';
            h.setValue(y, {
              value: v,
            });
            break;
          }
          default:
            continue;
        }
        const S = document.querySelector(`[data-element-id="${y}"]`);
        if (S) {
          if (!Ja.has(S)) {
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
vi = new WeakSet(), Fr = function () {
  this.container.setAttribute('data-internal-link', '');
}, wb = function (e, i, s = '', r = null) {
  e.href = this.linkService.getAnchorUrl(''), i.description ? e.title = i.description : s && (e.title = s), e.onclick = () => {
    let a;
    return (a = this.downloadManager) == null || a.openOrDownloadData(i.content, i.filename, r), !1;
  }, w(this, vi, Fr).call(this);
}, Ab = function (e, i, s = '') {
  e.href = this.linkService.getAnchorUrl(''), e.onclick = () => (this.linkService.executeSetOCGState(i), !1), s && (e.title = s), w(this, vi, Fr).call(this);
};
class L0 extends Ot {
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
class eo extends Ot {
  render() {
    return this.container;
  }

  showElementAndHideCanvas(t) {
    let e;
    this.data.hasOwnCanvas && (((e = t.previousSibling) == null ? void 0 : e.nodeName) === 'CANVAS' && (t.previousSibling.hidden = !0), t.hidden = !1);
  }

  _getKeyModifier(t) {
    return de.platform.isMac ? t.metaKey : t.ctrlKey;
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
    for (const [l, h] of i) {
      (h === 'Action' || (r = this.data.actions) != null && r[h]) && ((h === 'Focus' || h === 'Blur') && (e || (e = {
        focused: !1,
      })), this._setEventListener(t, e, l, h, s), h === 'Focus' && !((a = this.data.actions) != null && a.Blur) ? this._setEventListener(t, e, 'blur', 'Blur', null) : h === 'Blur' && !((o = this.data.actions) != null && o.Focus) && this._setEventListener(t, e, 'focus', 'Focus', null));
    }
  }

  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? 'transparent' : G.makeHexColor(e[0], e[1], e[2]);
  }

  _setTextStyle(t) {
    const e = ['left', 'center', 'right']; const {
      fontColor: i,
    } = this.data.defaultAppearanceData; const s = this.data.defaultAppearanceData.fontSize || k0; const
      r = t.style;
    let a;
    const o = 2; const
      l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o); const d = Math.round(h / (sf * s)) || 1; const
        u = h / d;
      a = Math.min(s, l(u / sf));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(s, l(h / sf));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = G.makeHexColor(i[0], i[1], i[2]), this.data.textAlignment !== null && (r.textAlign = e[this.data.textAlignment]);
  }

  _setRequired(t, e) {
    e ? t.setAttribute('required', !0) : t.removeAttribute('required'), t.setAttribute('aria-required', e);
  }
}
class I0 extends eo {
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
      const l = t.getValue(e, {
        charLimit: this.data.maxLen,
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((s = this.data.textContent) == null ? void 0 : s.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ''));
      const d = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1,
      };
      this.data.multiLine ? (i = document.createElement('textarea'), i.textContent = h ?? o, this.data.doNotScroll && (i.style.overflowY = 'hidden')) : (i = document.createElement('input'), i.type = this.data.password ? 'password' : 'text', i.setAttribute('value', h ?? o), this.data.doNotScroll && (i.style.overflowX = 'hidden')), this.data.hasOwnCanvas && (i.hidden = !0), Ja.add(i), i.setAttribute('data-element-id', e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
      const {
        datetimeFormat: u,
        datetimeType: p,
        timeStep: y,
      } = this.data; const
        S = !!p && this.enableScripting;
      u && (i.title = u), this._setRequired(i, this.data.required), l && (i.maxLength = l), i.addEventListener('input', (_) => {
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
              } else T.value = new Date(f - D0).toISOString().split(p === 'date' ? 'T' : '.', 1)[0];
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
              const k = f.substring(0, m).match(/\w*[^\w]*$/);
              k && (C -= k[0].length);
              break;
            }
            case 'deleteWordForward': {
              const k = f.substring(m).match(/^[^\w]*\w*/);
              k && (P += k[0].length);
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
        const x = (this.data.rect[2] - this.data.rect[0]) / l;
        i.classList.add('comb'), i.style.letterSpacing = `calc(${x}px * var(--total-scale-factor) - 1ch)`;
      }
    } else i = document.createElement('div'), i.textContent = this.data.fieldValue, i.style.verticalAlign = 'middle', i.style.display = 'table-cell', this.data.hasOwnCanvas && (i.hidden = !0);
    return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
class F0 extends eo {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas,
    });
  }
}
class N0 extends eo {
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
    return Ja.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'checkbox', r.name = e.fieldName, s && r.setAttribute('checked', !0), r.setAttribute('exportValue', e.exportValue), r.tabIndex = 0, r.addEventListener('change', (a) => {
      const {
        name: o,
        checked: l,
      } = a.target;
      for (const h of this._getElementsByName(o, i)) {
        const d = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = d), t.setValue(h.id, {
          value: d,
        });
      }
      t.setValue(i, {
        value: l,
      });
    }), r.addEventListener('resetform', (a) => {
      const o = e.defaultFieldValue || 'Off';
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener('updatefromsandbox', (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== 'Off', t.setValue(i, {
            value: l.target.checked,
          });
        },
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [['change', 'Validate'], ['change', 'Action'], ['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (a) => a.target.checked)), this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class vb extends eo {
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
    if (Ja.add(r), r.setAttribute('data-element-id', i), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = 'radio', r.name = e.fieldName, s && r.setAttribute('checked', !0), r.tabIndex = 0, r.addEventListener('change', (a) => {
      const {
        name: o,
        checked: l,
      } = a.target;
      for (const h of this._getElementsByName(o, i)) {
        t.setValue(h.id, {
          value: !1,
        });
      }
      t.setValue(i, {
        value: l,
      });
    }), r.addEventListener('resetform', (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener('updatefromsandbox', (o) => {
        const l = {
          value: (h) => {
            const d = a === h.detail.value;
            for (const u of this._getElementsByName(h.target.name)) {
              const p = d && u.id === i;
              u.domElement && (u.domElement.checked = p), t.setValue(u.id, {
                value: p,
              });
            }
          },
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [['change', 'Validate'], ['change', 'Action'], ['focus', 'Focus'], ['blur', 'Blur'], ['mousedown', 'Mouse Down'], ['mouseenter', 'Mouse Enter'], ['mouseleave', 'Mouse Exit'], ['mouseup', 'Mouse Up']], (o) => o.target.checked);
    }
    return this._setBackgroundColor(r), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class O0 extends Qp {
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
class B0 extends eo {
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
    Ja.add(s), s.setAttribute('data-element-id', e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
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
    let l = o(!1);
    const h = (d) => {
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
          }), l = o(!1);
        },
        multipleSelection(p) {
          s.multiple = !0;
        },
        remove(p) {
          const y = s.options; const
            S = p.detail.remove;
          y[S].selected = !1, s.remove(S), y.length > 0 && Array.prototype.findIndex.call(y, (_) => _.selected) === -1 && (y[0].selected = !0), t.setValue(e, {
            value: o(!0),
            items: h(p),
          }), l = o(!1);
        },
        clear(p) {
          for (; s.length !== 0;) s.remove(0);
          t.setValue(e, {
            value: null,
            items: [],
          }), l = o(!1);
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
            items: h(p),
          }), l = o(!1);
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
            items: h(p),
          }), l = o(!1);
        },
        indices(p) {
          const y = new Set(p.detail.indices);
          for (const S of p.target.options) S.selected = y.has(S.index);
          t.setValue(e, {
            value: o(!0),
          }), l = o(!1);
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
          value: l,
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
let Hc; let
  rp;
class np extends Ot {
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
    b(this, Hc);
    if (this.elements = s, a && Ot._hasPopupData(i)) {
      const o = this.popup = w(this, Hc, rp).call(this);
      for (const l of s) l.popup = o;
    } else this.popup = null;
  }

  render() {
    const {
      container: e,
    } = this;
    e.classList.add('popupAnnotation'), e.role = 'comment';
    const i = this.popup = w(this, Hc, rp).call(this); const
      s = [];
    for (const r of this.elements) r.popup = i, r.container.ariaHasPopup = 'dialog', s.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute('aria-controls', s.map((r) => `${jp}${r}`).join(',')), this.container;
  }
}
Hc = new WeakSet(), rp = function () {
  return new H0({
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
let li; let hr; let Ou; let Bu; let yl; let wl; let $t; let _s; let cr; let Ta; let Al; let vl; let Cs; let hi; let fn; let pn; let re; let gn; let dr; let $c; let mn; let Sl; let Pa; let ur; let Re; let fr; let Q; let Xd; let ap; let op; let lp; let Yd; let hp; let Sb; let xb; let Eb; let _b; let Kd; let Zd; let
  cp;
class H0 {
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
    commentManager: p = null,
  }) {
    b(this, Q);
    b(this, li, null);
    b(this, hr, w(this, Q, Eb).bind(this));
    b(this, Ou, w(this, Q, cp).bind(this));
    b(this, Bu, w(this, Q, Zd).bind(this));
    b(this, yl, w(this, Q, Kd).bind(this));
    b(this, wl, null);
    b(this, $t, null);
    b(this, _s, null);
    b(this, cr, null);
    b(this, Ta, null);
    b(this, Al, null);
    b(this, vl, null);
    b(this, Cs, !1);
    b(this, hi, null);
    b(this, fn, null);
    b(this, pn, null);
    b(this, re, null);
    b(this, gn, null);
    b(this, dr, null);
    b(this, $c, null);
    b(this, mn, null);
    b(this, Sl, null);
    b(this, Pa, null);
    b(this, ur, !1);
    b(this, Re, null);
    b(this, fr, null);
    g(this, $t, t), g(this, Sl, s), g(this, _s, a), g(this, mn, o), g(this, Al, l), g(this, wl, e), g(this, $c, h), g(this, vl, d), g(this, Ta, i), g(this, li, p), g(this, Re, i[0]), g(this, cr, Rh.toDateObject(r)), this.trigger = i.flatMap((y) => y.getElementsToTriggerPopup()), p ? this.renderCommentButton() : (w(this, Q, Xd).call(this), n(this, $t).hidden = !0, u && w(this, Q, Kd).call(this));
  }

  renderCommentButton() {
    if (n(this, re) || (n(this, gn) || w(this, Q, ap).call(this), !n(this, gn))) return;
    const {
      signal: t,
    } = g(this, fn, new AbortController()); const e = !!n(this, Re).extraPopupElement; const i = () => {
      n(this, li).toggleCommentPopup(this, !0, void 0, !e);
    }; const s = () => {
      n(this, li).toggleCommentPopup(this, !1, !0, !e);
    }; const
      r = () => {
        n(this, li).toggleCommentPopup(this, !1, !1);
      };
    if (e) {
      g(this, re, n(this, Re).container);
      for (const a of this.trigger) {
        a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.addEventListener('keydown', n(this, hr), {
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
      const a = g(this, re, document.createElement('button'));
      a.className = 'annotationCommentButton';
      const o = n(this, Re).container;
      a.style.zIndex = o.style.zIndex + 1, a.tabIndex = 0, a.ariaHasPopup = 'dialog', a.ariaControls = 'commentPopup', a.setAttribute('data-l10n-id', 'pdfjs-show-comment-button'), w(this, Q, lp).call(this), w(this, Q, op).call(this), a.addEventListener('keydown', n(this, hr), {
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
    } = n(this, Re).commentData;
    return t ? n(this, Al)._commentManager.makeCommentColor(t, e) : null;
  }

  focusCommentButton() {
    setTimeout(() => {
      let t;
      (t = n(this, re)) == null || t.focus();
    }, 0);
  }

  getData() {
    const {
      richText: t,
      color: e,
      opacity: i,
      creationDate: s,
      modificationDate: r,
    } = n(this, Re).commentData;
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
    return n(this, re);
  }

  get comment() {
    return n(this, fr) || g(this, fr, n(this, Re).commentText), n(this, fr);
  }

  set comment(t) {
    t !== this.comment && (n(this, Re).commentText = g(this, fr, t));
  }

  get parentBoundingClientRect() {
    return n(this, Re).layer.getBoundingClientRect();
  }

  setCommentButtonStates({
    selected: t,
    hasPopup: e,
  }) {
    n(this, re) && (n(this, re).classList.toggle('selected', t), n(this, re).ariaExpanded = e);
  }

  setSelectedCommentButton(t) {
    n(this, re).classList.toggle('selected', t);
  }

  get commentPopupPosition() {
    if (n(this, dr)) return n(this, dr);
    const {
      x: t,
      y: e,
      height: i,
    } = n(this, re).getBoundingClientRect(); const
      {
        x: s,
        y: r,
        width: a,
        height: o,
      } = n(this, Re).layer.getBoundingClientRect();
    return [(t - s) / a, (e + i - r) / o];
  }

  set commentPopupPosition(t) {
    g(this, dr, t);
  }

  hasDefaultPopupPosition() {
    return n(this, dr) === null;
  }

  get commentButtonPosition() {
    return n(this, gn);
  }

  get commentButtonWidth() {
    return n(this, re).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }

  editComment(t) {
    const [e, i] = n(this, dr) || this.commentButtonPosition.map((h) => h / 100); const s = this.parentBoundingClientRect; const
      {
        x: r,
        y: a,
        width: o,
        height: l,
      } = s;
    n(this, li).showDialog(null, this, r + e * o, a + i * l, {
      ...t,
      parentDimensions: s,
    });
  }

  render() {
    let i; let
      s;
    if (n(this, hi)) return;
    const t = g(this, hi, document.createElement('div'));
    if (t.className = 'popup', n(this, wl)) {
      const r = t.style.outlineColor = G.makeHexColor(...n(this, wl));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement('span');
    if (e.className = 'header', (i = n(this, Sl)) != null && i.str) {
      const r = document.createElement('span');
      r.className = 'title', e.append(r), {
        dir: r.dir,
        str: r.textContent,
      } = n(this, Sl);
    }
    if (t.append(e), n(this, cr)) {
      const r = document.createElement('time');
      r.className = 'popupDate', r.setAttribute('data-l10n-id', 'pdfjs-annotation-date-time-string'), r.setAttribute('data-l10n-args', JSON.stringify({
        dateObj: n(this, cr).valueOf(),
      })), r.dateTime = n(this, cr).toISOString(), e.append(r);
    }
    qp({
      html: n(this, Q, Yd) || n(this, _s).str,
      dir: (s = n(this, _s)) == null ? void 0 : s.dir,
      className: 'popupContent',
    }, t), n(this, $t).append(t);
  }

  updateEdited({
    rect: t,
    popup: e,
    deleted: i,
  }) {
    let s;
    if (n(this, li)) {
      i ? (this.remove(), g(this, fr, null)) : e && (e.deleted ? this.remove() : (w(this, Q, lp).call(this), g(this, fr, e.text))), t && (g(this, gn, null), w(this, Q, ap).call(this), w(this, Q, op).call(this));
      return;
    }
    if (i || e != null && e.deleted) {
      this.remove();
      return;
    }
    w(this, Q, Xd).call(this), n(this, Pa) || g(this, Pa, {
      contentsObj: n(this, _s),
      richText: n(this, mn),
    }), t && g(this, pn, null), e && e.text && (g(this, mn, w(this, Q, xb).call(this, e.text)), g(this, cr, Rh.toDateObject(e.date)), g(this, _s, null)), (s = n(this, hi)) == null || s.remove(), g(this, hi, null);
  }

  resetEdited() {
    let t;
    n(this, Pa) && ({
      contentsObj: Zt(this, _s)._,
      richText: Zt(this, mn)._,
    } = n(this, Pa), g(this, Pa, null), (t = n(this, hi)) == null || t.remove(), g(this, hi, null), g(this, pn, null));
  }

  remove() {
    let t; let e; let
      i;
    if ((t = n(this, fn)) == null || t.abort(), g(this, fn, null), (e = n(this, hi)) == null || e.remove(), g(this, hi, null), g(this, ur, !1), g(this, Cs, !1), (i = n(this, re)) == null || i.remove(), g(this, re, null), this.trigger) for (const s of this.trigger) s.classList.remove('popupTriggerArea');
  }

  forceHide() {
    g(this, ur, this.isVisible), n(this, ur) && (n(this, $t).hidden = !0);
  }

  maybeShow() {
    n(this, li) || (w(this, Q, Xd).call(this), n(this, ur) && (n(this, hi) || w(this, Q, Zd).call(this), g(this, ur, !1), n(this, $t).hidden = !1));
  }

  get isVisible() {
    return n(this, li) ? !1 : n(this, $t).hidden === !1;
  }
}
li = new WeakMap(), hr = new WeakMap(), Ou = new WeakMap(), Bu = new WeakMap(), yl = new WeakMap(), wl = new WeakMap(), $t = new WeakMap(), _s = new WeakMap(), cr = new WeakMap(), Ta = new WeakMap(), Al = new WeakMap(), vl = new WeakMap(), Cs = new WeakMap(), hi = new WeakMap(), fn = new WeakMap(), pn = new WeakMap(), re = new WeakMap(), gn = new WeakMap(), dr = new WeakMap(), $c = new WeakMap(), mn = new WeakMap(), Sl = new WeakMap(), Pa = new WeakMap(), ur = new WeakMap(), Re = new WeakMap(), fr = new WeakMap(), Q = new WeakSet(), Xd = function () {
  let e;
  if (n(this, fn)) return;
  g(this, fn, new AbortController());
  const {
    signal: t,
  } = n(this, fn);
  for (const i of this.trigger) {
    i.addEventListener('click', n(this, yl), {
      signal: t,
    }), i.addEventListener('pointerenter', n(this, Bu), {
      signal: t,
    }), i.addEventListener('pointerleave', n(this, Ou), {
      signal: t,
    }), i.classList.add('popupTriggerArea');
  }
  for (const i of n(this, Ta)) {
    (e = i.container) == null || e.addEventListener('keydown', n(this, hr), {
      signal: t,
    });
  }
}, ap = function () {
  const t = n(this, Ta).find((e) => e.hasCommentButton);
  t && g(this, gn, t._normalizePoint(t.commentButtonPosition));
}, op = function () {
  if (n(this, Re).extraPopupElement && !n(this, Re).editor) return;
  this.renderCommentButton();
  const [t, e] = n(this, gn); const
    {
      style: i,
    } = n(this, re);
  i.left = `calc(${t}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
}, lp = function () {
  n(this, Re).extraPopupElement || (this.renderCommentButton(), n(this, re).style.backgroundColor = this.commentButtonColor || '');
}, Yd = function () {
  const t = n(this, mn); const
    e = n(this, _s);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, mn).html || null;
}, hp = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = n(this, Q, Yd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.fontSize) || 0;
}, Sb = function () {
  let t; let e; let
    i;
  return ((i = (e = (t = n(this, Q, Yd)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : i.color) || null;
}, xb = function (t) {
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
        color: n(this, Q, Sb),
        fontSize: n(this, Q, hp) ? `calc(${n(this, Q, hp)}px * var(--total-scale-factor))` : '',
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
}, Eb = function (t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === 'Enter' || t.key === 'Escape' && n(this, Cs)) && w(this, Q, Kd).call(this);
}, _b = function () {
  if (n(this, pn) !== null) return;
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
  } = n(this, Al);
  let a = !!n(this, vl); let
    o = a ? n(this, vl) : n(this, $c);
  for (const S of n(this, Ta)) {
    if (!o || G.intersect(S.data.rect, o) !== null) {
      o = S.data.rect, a = !0;
      break;
    }
  }
  const l = G.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]); const d = a ? o[2] - o[0] + 5 : 0; const u = l[0] + d; const
    p = l[1];
  g(this, pn, [100 * (u - s) / e, 100 * (p - r) / i]);
  const {
    style: y,
  } = n(this, $t);
  y.left = `${n(this, pn)[0]}%`, y.top = `${n(this, pn)[1]}%`;
}, Kd = function () {
  if (n(this, li)) {
    n(this, li).toggleCommentPopup(this, !1);
    return;
  }
  g(this, Cs, !n(this, Cs)), n(this, Cs) ? (w(this, Q, Zd).call(this), n(this, $t).addEventListener('click', n(this, yl)), n(this, $t).addEventListener('keydown', n(this, hr))) : (w(this, Q, cp).call(this), n(this, $t).removeEventListener('click', n(this, yl)), n(this, $t).removeEventListener('keydown', n(this, hr)));
}, Zd = function () {
  n(this, hi) || this.render(), this.isVisible ? n(this, Cs) && n(this, $t).classList.add('focused') : (w(this, Q, _b).call(this), n(this, $t).hidden = !1, n(this, $t).style.zIndex = parseInt(n(this, $t).style.zIndex) + 1e3);
}, cp = function () {
  n(this, $t).classList.remove('focused'), !(n(this, Cs) || !this.isVisible) && (n(this, $t).hidden = !0, n(this, $t).style.zIndex = parseInt(n(this, $t).style.zIndex) - 1e3);
};
class Cb extends Ot {
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
let Uc;
class $0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Uc, null);
  }

  render() {
    this.container.classList.add('lineAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const
      a = g(this, Uc, this.svgFactory.createElement('svg:line'));
    return a.setAttribute('x1', e.rect[2] - e.lineCoordinates[0]), a.setAttribute('y1', e.rect[3] - e.lineCoordinates[1]), a.setAttribute('x2', e.rect[2] - e.lineCoordinates[2]), a.setAttribute('y2', e.rect[3] - e.lineCoordinates[3]), a.setAttribute('stroke-width', e.borderStyle.width || 1), a.setAttribute('stroke', 'transparent'), a.setAttribute('fill', 'transparent'), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
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
class U0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Gc, null);
  }

  render() {
    this.container.classList.add('squareAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const a = e.borderStyle.width; const
      o = g(this, Gc, this.svgFactory.createElement('svg:rect'));
    return o.setAttribute('x', a / 2), o.setAttribute('y', a / 2), o.setAttribute('width', i - a), o.setAttribute('height', s - a), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, Gc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
Gc = new WeakMap();
let zc;
class G0 extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, zc, null);
  }

  render() {
    this.container.classList.add('circleAnnotation');
    const {
      data: e,
      width: i,
      height: s,
    } = this; const r = this.svgFactory.create(i, s, !0); const a = e.borderStyle.width; const
      o = g(this, zc, this.svgFactory.createElement('svg:ellipse'));
    return o.setAttribute('cx', i / 2), o.setAttribute('cy', s / 2), o.setAttribute('rx', i / 2 - a / 2), o.setAttribute('ry', s / 2 - a / 2), o.setAttribute('stroke-width', a || 1), o.setAttribute('stroke', 'transparent'), o.setAttribute('fill', 'transparent'), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, zc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
zc = new WeakMap();
let Wc;
class Tb extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Wc, null);
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
    const l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let u = 0, p = i.length; u < p; u += 2) {
      const y = i[u] - e[0]; const
        S = e[3] - i[u + 1];
      h.push(`${y},${S}`);
    }
    h = h.join(' ');
    const d = g(this, Wc, this.svgFactory.createElement(this.svgElementName));
    return d.setAttribute('points', h), d.setAttribute('stroke-width', s.width || 1), d.setAttribute('stroke', 'transparent'), d.setAttribute('fill', 'transparent'), l.append(d), this.container.append(l), !r && this.hasPopupData && this._createPopup(), this.container;
  }

  getElementsToTriggerPopup() {
    return n(this, Wc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
Wc = new WeakMap();
class z0 extends Tb {
  constructor(t) {
    super(t), this.containerClassName = 'polygonAnnotation', this.svgElementName = 'svg:polygon';
  }
}
class W0 extends Ot {
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
let jc; let Ra; let Vc; let
  dp;
class tg extends Ot {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0,
    });
    b(this, Vc);
    b(this, jc, null);
    b(this, Ra, []);
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
      width: l,
      height: h,
    } = w(this, Vc, dp).call(this, i, e); const d = this.svgFactory.create(l, h, !0); const
      u = g(this, jc, this.svgFactory.createElement('svg:g'));
    d.append(u), u.setAttribute('stroke-width', r.width || 1), u.setAttribute('stroke-linecap', 'round'), u.setAttribute('stroke-linejoin', 'round'), u.setAttribute('stroke-miterlimit', 10), u.setAttribute('stroke', 'transparent'), u.setAttribute('fill', 'transparent'), u.setAttribute('transform', o);
    for (let p = 0, y = s.length; p < y; p++) {
      const S = this.svgFactory.createElement(this.svgElementName);
      n(this, Ra).push(S), S.setAttribute('points', s[p].join(',')), u.append(S);
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
      a = n(this, jc);
    if (i >= 0 && a.setAttribute('stroke-width', i || 1), s) for (let o = 0, l = n(this, Ra).length; o < l; o++) n(this, Ra)[o].setAttribute('points', s[o].join(','));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h,
      } = w(this, Vc, dp).call(this, this.data.rotation, r);
      a.parentElement.setAttribute('viewBox', `0 0 ${l} ${h}`), a.setAttribute('transform', o);
    }
  }

  getElementsToTriggerPopup() {
    return n(this, Ra);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
jc = new WeakMap(), Ra = new WeakMap(), Vc = new WeakSet(), dp = function (e, i) {
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
class Pb extends Ot {
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
class j0 extends Ot {
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
class V0 extends Ot {
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
class q0 extends Ot {
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
class Rb extends Ot {
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
let qc; let Xc; let
  up;
class X0 extends Ot {
  constructor(e) {
    let s;
    super(e, {
      isRenderable: !0,
    });
    b(this, Xc);
    b(this, qc, null);
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
    i.hasAppearance || i.fillAlpha === 0 ? s = document.createElement('div') : (s = document.createElement('img'), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(i.name) ? 'paperclip' : 'pushpin'}.svg`, i.fillAlpha && i.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(i.fillAlpha * 100)}%);`)), s.addEventListener('dblclick', w(this, Xc, up).bind(this)), g(this, qc, s);
    const {
      isMac: r,
    } = de.platform;
    return e.addEventListener('keydown', (a) => {
      a.key === 'Enter' && (r ? a.metaKey : a.ctrlKey) && w(this, Xc, up).call(this);
    }), !i.popupRef && this.hasPopupData ? this._createPopup() : s.classList.add('popupTriggerArea'), e.append(s), e;
  }

  getElementsToTriggerPopup() {
    return n(this, qc);
  }

  addHighlightArea() {
    this.container.classList.add('highlightArea');
  }
}
qc = new WeakMap(), Xc = new WeakSet(), up = function () {
  let e;
  (e = this.downloadManager) == null || e.openOrDownloadData(this.content, this.filename);
};
let xl; let ka; let El; let pr; let Yc; let Da; let Mr; let fp; let pp; let
  _l;
const eg = (_l = class {
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
    annotationStorage: d,
  }) {
    b(this, Mr);
    b(this, xl, null);
    b(this, ka, null);
    b(this, El, null);
    b(this, pr, /* @__PURE__ */ new Map());
    b(this, Yc, null);
    b(this, Da, null);
    this.div = t, g(this, xl, e), g(this, ka, i), g(this, Yc, o || null), g(this, Da, h || null), g(this, El, d || new Xp()), this.page = r, this.viewport = a, this.zIndex = 0, this._annotationEditorUIManager = s, this._commentManager = l || null;
  }

  hasEditableAnnotations() {
    return n(this, pr).size > 0;
  }

  async render(t) {
    let a; let o; let
      l;
    const {
      annotations: e,
    } = t; const
      i = this.div;
    Rr(i, this.viewport);
    const s = /* @__PURE__ */ new Map(); const
      r = {
        data: null,
        layer: i,
        linkService: n(this, Da),
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || '',
        renderForms: t.renderForms !== !1,
        svgFactory: new Lh(),
        annotationStorage: n(this, El),
        enableComment: t.enableComment === !0,
        enableScripting: t.enableScripting === !0,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null,
      };
    for (const h of e) {
      if (h.noHTML) continue;
      const d = h.annotationType === zt.POPUP;
      if (d) {
        const y = s.get(h.id);
        if (!y) continue;
        r.elements = y;
      } else if (h.rect[2] === h.rect[0] || h.rect[3] === h.rect[1]) continue;
      r.data = h;
      const u = $g.create(r);
      if (!u.isRenderable) continue;
      if (!d && h.popupRef) {
        const y = s.get(h.popupRef);
        y ? y.push(u) : s.set(h.popupRef, [u]);
      }
      const p = u.render();
      h.hidden && (p.style.visibility = 'hidden'), await w(this, Mr, fp).call(this, p, h.id, r.elements), (o = (a = u.extraPopupElement) == null ? void 0 : a.popup) == null || o.renderCommentButton(), u._isEditable && (n(this, pr).set(u.data.id, u), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(u));
    }
    w(this, Mr, pp).call(this);
  }

  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: n(this, Da),
      svgFactory: new Lh(),
      parent: this,
    };
    for (const i of t) {
      i.borderStyle || (i.borderStyle = _l._defaultBorderStyle), e.data = i;
      const s = $g.create(e);
      if (!s.isRenderable) continue;
      const r = s.render();
      await w(this, Mr, fp).call(this, r, i.id, null);
    }
  }

  update({
    viewport: t,
  }) {
    const e = this.div;
    this.viewport = t, Rr(e, {
      rotation: t.rotation,
    }), w(this, Mr, pp).call(this), e.hidden = !1;
  }

  getEditableAnnotations() {
    return Array.from(n(this, pr).values());
  }

  getEditableAnnotation(t) {
    return n(this, pr).get(t);
  }

  addFakeAnnotation(t) {
    let o;
    const {
      div: e,
    } = this; const {
      id: i,
      rotation: s,
    } = t; const r = new M0({
      data: {
        id: i,
        rect: t.getPDFRect(),
        rotation: s,
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: n(this, Da),
      annotationStorage: n(this, El),
    }); const
      a = r.render();
    return e.append(a), (o = n(this, xl)) == null || o.moveElementInDOM(e, a, a, !1), r.createOrUpdatePopup(), r;
  }

  static get _defaultBorderStyle() {
    return Z(this, '_defaultBorderStyle', Object.freeze({
      width: 1,
      rawWidth: 1,
      style: no.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0,
    }));
  }
}, xl = new WeakMap(), ka = new WeakMap(), El = new WeakMap(), pr = new WeakMap(), Yc = new WeakMap(), Da = new WeakMap(), Mr = new WeakSet(), fp = async function (t, e, i) {
  let o; let
    l;
  const s = t.firstChild || t; const r = s.id = `${jp}${e}`; const
    a = await ((o = n(this, Yc)) == null ? void 0 : o.getAriaAttributes(r));
  if (a) for (const [h, d] of a) s.setAttribute(h, d);
  i ? i.at(-1).container.after(t) : (this.div.append(t), (l = n(this, xl)) == null || l.moveElementInDOM(this.div, t, s, !1));
}, pp = function () {
  let e;
  if (!n(this, ka)) return;
  const t = this.div;
  for (const [i, s] of n(this, ka)) {
    const r = t.querySelector(`[data-annotation-id="${i}"]`);
    if (!r) continue;
    s.className = 'annotationContent';
    const {
      firstChild: a,
    } = r;
    a ? a.nodeName === 'CANVAS' ? a.replaceWith(s) : a.classList.contains('annotationContent') ? a.after(s) : a.before(s) : r.append(s);
    const o = n(this, pr).get(i);
    o && (o._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(i, r.id, s), o._hasNoCanvas = !1) : o.canvas = s);
  }
  n(this, ka).clear();
}, _l);
const Ld = /\r\n?|\n/g;
let ci; let Kc; let Ma; let di; let Yt; let kb; let Db; let Mb; let Jd; let Cn; let Qd; let tu; let Lb; let mp; let
  Ib;
const Pt = class Pt extends Ct {
  constructor(e) {
    super({
      ...e,
      name: 'freeTextEditor',
    });
    b(this, Yt);
    b(this, ci, '');
    b(this, Kc, `${this.id}-editor`);
    b(this, Ma, null);
    b(this, di);
    M(this, '_colorPicker', null);
    this.color = e.color || Pt._defaultColor || Ct._defaultLineColor, g(this, di, e.fontSize || Pt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-freetext-added-alert');
  }

  static get _keyboardManager() {
    const e = Pt.prototype; const i = (a) => a.isEmpty(); const s = kr.TRANSLATE_SMALL; const
      r = kr.TRANSLATE_BIG;
    return Z(this, '_keyboardManager', new yd([[['ctrl+s', 'mac+meta+s', 'ctrl+p', 'mac+meta+p'], e.commitOrRemove, {
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
        w(this, Yt, kb).call(this, i);
        break;
      case it.FREETEXT_COLOR:
        w(this, Yt, Db).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[it.FREETEXT_SIZE, Pt._defaultFontSize], [it.FREETEXT_COLOR, Pt._defaultColor || Ct._defaultLineColor]];
  }

  get propertiesToUpdate() {
    return [[it.FREETEXT_SIZE, n(this, di)], [it.FREETEXT_COLOR, this.color]];
  }

  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new wu(this)), [['colorPicker', this._colorPicker]];
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
    return [-Pt._internalPadding * e, -(Pt._internalPadding + n(this, di)) * e];
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }

  enableEditMode() {
    if (!super.enableEditMode()) return !1;
    this.overlayDiv.classList.remove('enabled'), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute('aria-activedescendant'), g(this, Ma, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, Ma));
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
    return super.disableEditMode() ? (this.overlayDiv.classList.add('enabled'), this.editorDiv.contentEditable = !1, this.div.setAttribute('aria-activedescendant', n(this, Kc)), this._isDraggable = !0, (e = n(this, Ma)) == null || e.abort(), g(this, Ma, null), this.div.focus({
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
    const e = n(this, ci); const
      i = g(this, ci, w(this, Yt, Mb).call(this).trimEnd());
    if (e === i) return;
    const s = (r) => {
      if (g(this, ci, r), !r) {
        this.remove();
        return;
      }
      w(this, Yt, tu).call(this), this._uiManager.rebuild(this), w(this, Yt, Jd).call(this);
    };
    this.addCommands({
      cmd: () => {
        s(i);
      },
      undo: () => {
        s(e);
      },
      mustExec: !1,
    }), w(this, Yt, Jd).call(this);
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
    (this._isCopy || this.annotationElementId) && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement('div'), this.editorDiv.className = 'internal', this.editorDiv.setAttribute('id', n(this, Kc)), this.editorDiv.setAttribute('data-l10n-id', 'pdfjs-free-text2'), this.editorDiv.setAttribute('data-l10n-attrs', 'default-content'), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: s,
    } = this.editorDiv;
    if (s.fontSize = `calc(${n(this, di)}px * var(--total-scale-factor))`, s.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement('div'), this.overlayDiv.classList.add('overlay', 'enabled'), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o,
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [d, u] = this.pageDimensions; const
          [p, y] = this.pageTranslation;
        let S; let
          v;
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
      } else this._moveAfterPaste(e, i);
      w(this, Yt, tu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
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
    const r = w(S = Pt, Cn, mp).call(S, i.getData('text') || '').replaceAll(Ld, `
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
      startContainer: l,
      startOffset: h,
    } = o; const d = []; const
      u = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const x = l.parentElement;
      if (u.push(l.nodeValue.slice(h).replaceAll(Ld, '')), x !== this.editorDiv) {
        let T = d;
        for (const E of this.editorDiv.childNodes) {
          if (E === x) {
            T = u;
            continue;
          }
          T.push(w(v = Pt, Cn, Qd).call(v, E));
        }
      }
      d.push(l.nodeValue.slice(0, h).replaceAll(Ld, ''));
    } else if (l === this.editorDiv) {
      let x = d; let
        T = 0;
      for (const E of this.editorDiv.childNodes) T++ === h && (x = u), x.push(w(_ = Pt, Cn, Qd).call(_, E));
    }
    g(this, ci, `${d.join(`
`)}${r}${u.join(`
`)}`), w(this, Yt, tu).call(this);
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
    if (e instanceof Cb) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h,
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
        color: Array.from(h),
        fontSize: l,
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
    return g(a, di, e.fontSize), a.color = G.makeHexColor(...e.color), g(a, ci, w(o = Pt, Cn, mp).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }

  serialize(e = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = Ct._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color); const
      s = Object.assign(super.serialize(e), {
        color: i,
        fontSize: n(this, di),
        value: w(this, Yt, Lb).call(this),
      });
    return this.addComment(s), e ? (s.isCopy = !0, s) : this.annotationElementId && !w(this, Yt, Ib).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }

  renderAnnotationElement(e) {
    const i = super.renderAnnotationElement(e);
    if (!i) return null;
    const {
      style: s,
    } = i;
    s.fontSize = `calc(${n(this, di)}px * var(--total-scale-factor))`, s.color = this.color, i.replaceChildren();
    for (const r of n(this, ci).split(`
`)) {
      const a = document.createElement('div');
      a.append(r ? document.createTextNode(r) : document.createElement('br')), i.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: n(this, ci),
      },
    }), i;
  }

  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
ci = new WeakMap(), Kc = new WeakMap(), Ma = new WeakMap(), di = new WeakMap(), Yt = new WeakSet(), kb = function (e) {
  const i = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, di)) * this.parentScale), g(this, di, r), w(this, Yt, Jd).call(this);
  }; const
    s = n(this, di);
  this.addCommands({
    cmd: i.bind(this, e),
    undo: i.bind(this, s),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: it.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0,
  });
}, Db = function (e) {
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
}, Mb = function () {
  let s;
  const e = [];
  this.editorDiv.normalize();
  let i = null;
  for (const r of this.editorDiv.childNodes) (i == null ? void 0 : i.nodeType) === Node.TEXT_NODE && r.nodeName === 'BR' || (e.push(w(s = Pt, Cn, Qd).call(s, r)), i = r);
  return e.join(`
`);
}, Jd = function () {
  const [e, i] = this.parentDimensions;
  let s;
  if (this.isAttachedToDOM) s = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a,
    } = this; const o = a.style.display; const
      l = a.classList.contains('hidden');
    a.classList.remove('hidden'), a.style.display = 'hidden', r.div.append(this.div), s = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle('hidden', l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = s.width / e, this.height = s.height / i) : (this.width = s.height / e, this.height = s.width / i), this.fixAndSetPosition();
}, Cn = new WeakSet(), Qd = function (e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(Ld, '');
}, tu = function () {
  if (this.editorDiv.replaceChildren(), !!n(this, ci)) {
    for (const e of n(this, ci).split(`
`)) {
      const i = document.createElement('div');
      i.append(e ? document.createTextNode(e) : document.createElement('br')), this.editorDiv.append(i);
    }
  }
}, Lb = function () {
  return n(this, ci).replaceAll(' ', ' ');
}, mp = function (e) {
  return e.replaceAll(' ', ' ');
}, Ib = function (e) {
  const {
    value: i,
    fontSize: s,
    color: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== i || e.fontSize !== s || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, b(Pt, Cn), M(Pt, '_freeTextDefaultContent', ''), M(Pt, '_internalPadding', 0), M(Pt, '_defaultColor', null), M(Pt, '_defaultFontSize', 10), M(Pt, '_type', 'freetext'), M(Pt, '_editorType', q.FREETEXT);
const gp = Pt;
class U {
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
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o] * s, a[o + 1] = i + t[o + 1] * r;
    return a;
  }

  static _rescaleAndSwap(t, e, i, s, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2) a[o] = e + t[o + 1] * s, a[o + 1] = i + t[o] * r;
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
M(U, 'PRECISION', 1e-4);
let ui; let Ki; let Cl; let Tl; let Ts; let et; let La; let Ia; let Zc; let Jc; let Pl; let Rl; let gr; let Qc; let Hu; let $u; let ee; let wh; let Fb; let Nb; let Ob; let Bb; let Hb; let
  $b;
const Gs = class Gs {
  constructor({
    x: t,
    y: e,
  }, i, s, r, a, o = 0) {
    b(this, ee);
    b(this, ui);
    b(this, Ki, []);
    b(this, Cl);
    b(this, Tl);
    b(this, Ts, []);
    b(this, et, new Float32Array(18));
    b(this, La);
    b(this, Ia);
    b(this, Zc);
    b(this, Jc);
    b(this, Pl);
    b(this, Rl);
    b(this, gr, []);
    g(this, ui, i), g(this, Rl, r * s), g(this, Tl, a), n(this, et).set([NaN, NaN, NaN, NaN, t, e], 6), g(this, Cl, o), g(this, Jc, n(Gs, Qc) * s), g(this, Zc, n(Gs, $u) * s), g(this, Pl, s), n(this, gr).push(t, e);
  }

  isEmpty() {
    return isNaN(n(this, et)[8]);
  }

  add({
    x: t,
    y: e,
  }) {
    let R;
    g(this, La, t), g(this, Ia, e);
    const [i, s, r, a] = n(this, ui);
    let [o, l, h, d] = n(this, et).subarray(8, 12);
    const u = t - h; const p = e - d; const
      y = Math.hypot(u, p);
    if (y < n(this, Zc)) return !1;
    const S = y - n(this, Jc); const v = S / y; const _ = v * u; const
      x = v * p;
    let T = o; let
      E = l;
    o = h, l = d, h += _, d += x, (R = n(this, gr)) == null || R.push(t, e);
    const f = -x / S; const m = _ / S; const A = f * n(this, Rl); const
      C = m * n(this, Rl);
    return n(this, et).set(n(this, et).subarray(2, 8), 0), n(this, et).set([h + A, d + C], 4), n(this, et).set(n(this, et).subarray(14, 18), 12), n(this, et).set([h - A, d - C], 16), isNaN(n(this, et)[6]) ? (n(this, Ts).length === 0 && (n(this, et).set([o + A, l + C], 2), n(this, Ts).push(NaN, NaN, NaN, NaN, (o + A - i) / r, (l + C - s) / a), n(this, et).set([o - A, l - C], 14), n(this, Ki).push(NaN, NaN, NaN, NaN, (o - A - i) / r, (l - C - s) / a)), n(this, et).set([T, E, o, l, h, d], 6), !this.isEmpty()) : (n(this, et).set([T, E, o, l, h, d], 6), Math.abs(Math.atan2(E - l, T - o) - Math.atan2(x, _)) < Math.PI / 2 ? ([o, l, h, d] = n(this, et).subarray(2, 6), n(this, Ts).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - i) / r, ((l + d) / 2 - s) / a), [o, l, T, E] = n(this, et).subarray(14, 18), n(this, Ki).push(NaN, NaN, NaN, NaN, ((T + o) / 2 - i) / r, ((E + l) / 2 - s) / a), !0) : ([T, E, o, l, h, d] = n(this, et).subarray(0, 6), n(this, Ts).push(((T + 5 * o) / 6 - i) / r, ((E + 5 * l) / 6 - s) / a, ((5 * o + h) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + h) / 2 - i) / r, ((l + d) / 2 - s) / a), [h, d, o, l, T, E] = n(this, et).subarray(12, 18), n(this, Ki).push(((T + 5 * o) / 6 - i) / r, ((E + 5 * l) / 6 - s) / a, ((5 * o + h) / 6 - i) / r, ((5 * l + d) / 6 - s) / a, ((o + h) / 2 - i) / r, ((l + d) / 2 - s) / a), !0));
  }

  toSVGPath() {
    if (this.isEmpty()) return '';
    const t = n(this, Ts); const
      e = n(this, Ki);
    if (isNaN(n(this, et)[6]) && !this.isEmpty()) return w(this, ee, Fb).call(this);
    const i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let s = 6; s < t.length; s += 6) isNaN(t[s]) ? i.push(`L${t[s + 4]} ${t[s + 5]}`) : i.push(`C${t[s]} ${t[s + 1]} ${t[s + 2]} ${t[s + 3]} ${t[s + 4]} ${t[s + 5]}`);
    w(this, ee, Ob).call(this, i);
    for (let s = e.length - 6; s >= 6; s -= 6) isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
    return w(this, ee, Nb).call(this, i), i.join(' ');
  }

  newFreeDrawOutline(t, e, i, s, r, a) {
    return new Ub(t, e, i, s, r, a);
  }

  getOutlines() {
    let u;
    const t = n(this, Ts); const e = n(this, Ki); const i = n(this, et); const [s, r, a, o] = n(this, ui); const
      l = new Float32Array((((u = n(this, gr)) == null ? void 0 : u.length) ?? 0) + 2);
    for (let p = 0, y = l.length - 2; p < y; p += 2) l[p] = (n(this, gr)[p] - s) / a, l[p + 1] = (n(this, gr)[p + 1] - r) / o;
    if (l[l.length - 2] = (n(this, La) - s) / a, l[l.length - 1] = (n(this, Ia) - r) / o, isNaN(i[6]) && !this.isEmpty()) return w(this, ee, Bb).call(this, l);
    const h = new Float32Array(n(this, Ts).length + 24 + n(this, Ki).length);
    let d = t.length;
    for (let p = 0; p < d; p += 2) {
      if (isNaN(t[p])) {
        h[p] = h[p + 1] = NaN;
        continue;
      }
      h[p] = t[p], h[p + 1] = t[p + 1];
    }
    d = w(this, ee, $b).call(this, h, d);
    for (let p = e.length - 6; p >= 6; p -= 6) {
      for (let y = 0; y < 6; y += 2) {
        if (isNaN(e[p + y])) {
          h[d] = h[d + 1] = NaN, d += 2;
          continue;
        }
        h[d] = e[p + y], h[d + 1] = e[p + y + 1], d += 2;
      }
    }
    return w(this, ee, Hb).call(this, h, d), this.newFreeDrawOutline(h, l, n(this, ui), n(this, Pl), n(this, Cl), n(this, Tl));
  }
};
ui = new WeakMap(), Ki = new WeakMap(), Cl = new WeakMap(), Tl = new WeakMap(), Ts = new WeakMap(), et = new WeakMap(), La = new WeakMap(), Ia = new WeakMap(), Zc = new WeakMap(), Jc = new WeakMap(), Pl = new WeakMap(), Rl = new WeakMap(), gr = new WeakMap(), Qc = new WeakMap(), Hu = new WeakMap(), $u = new WeakMap(), ee = new WeakSet(), wh = function () {
  const t = n(this, et).subarray(4, 6); const e = n(this, et).subarray(16, 18); const
    [i, s, r, a] = n(this, ui);
  return [(n(this, La) + (t[0] - e[0]) / 2 - i) / r, (n(this, Ia) + (t[1] - e[1]) / 2 - s) / a, (n(this, La) + (e[0] - t[0]) / 2 - i) / r, (n(this, Ia) + (e[1] - t[1]) / 2 - s) / a];
}, Fb = function () {
  const [t, e, i, s] = n(this, ui); const
    [r, a, o, l] = w(this, ee, wh).call(this);
  return `M${(n(this, et)[2] - t) / i} ${(n(this, et)[3] - e) / s} L${(n(this, et)[4] - t) / i} ${(n(this, et)[5] - e) / s} L${r} ${a} L${o} ${l} L${(n(this, et)[16] - t) / i} ${(n(this, et)[17] - e) / s} L${(n(this, et)[14] - t) / i} ${(n(this, et)[15] - e) / s} Z`;
}, Nb = function (t) {
  const e = n(this, Ki);
  t.push(`L${e[4]} ${e[5]} Z`);
}, Ob = function (t) {
  const [e, i, s, r] = n(this, ui); const a = n(this, et).subarray(4, 6); const o = n(this, et).subarray(16, 18); const
    [l, h, d, u] = w(this, ee, wh).call(this);
  t.push(`L${(a[0] - e) / s} ${(a[1] - i) / r} L${l} ${h} L${d} ${u} L${(o[0] - e) / s} ${(o[1] - i) / r}`);
}, Bb = function (t) {
  const e = n(this, et); const [i, s, r, a] = n(this, ui); const [o, l, h, d] = w(this, ee, wh).call(this); const
    u = new Float32Array(36);
  return u.set([NaN, NaN, NaN, NaN, (e[2] - i) / r, (e[3] - s) / a, NaN, NaN, NaN, NaN, (e[4] - i) / r, (e[5] - s) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, (e[16] - i) / r, (e[17] - s) / a, NaN, NaN, NaN, NaN, (e[14] - i) / r, (e[15] - s) / a], 0), this.newFreeDrawOutline(u, t, n(this, ui), n(this, Pl), n(this, Cl), n(this, Tl));
}, Hb = function (t, e) {
  const i = n(this, Ki);
  return t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e += 6;
}, $b = function (t, e) {
  const i = n(this, et).subarray(4, 6); const s = n(this, et).subarray(16, 18); const [r, a, o, l] = n(this, ui); const
    [h, d, u, p] = w(this, ee, wh).call(this);
  return t.set([NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l, NaN, NaN, NaN, NaN, h, d, NaN, NaN, NaN, NaN, u, p, NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l], e), e += 24;
}, b(Gs, Qc, 8), b(Gs, Hu, 2), b(Gs, $u, n(Gs, Qc) + n(Gs, Hu));
const Au = Gs;
let kl; let Fa; let bn; let td; let fi; let ed; let jt; let Uu; let
  Gb;
class Ub extends U {
  constructor(e, i, s, r, a, o) {
    super();
    b(this, Uu);
    b(this, kl);
    b(this, Fa, new Float32Array(4));
    b(this, bn);
    b(this, td);
    b(this, fi);
    b(this, ed);
    b(this, jt);
    g(this, jt, e), g(this, fi, i), g(this, kl, s), g(this, ed, r), g(this, bn, a), g(this, td, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], w(this, Uu, Gb).call(this, o);
    const [l, h, d, u] = n(this, Fa);
    for (let p = 0, y = e.length; p < y; p += 2) e[p] = (e[p] - l) / d, e[p + 1] = (e[p + 1] - h) / u;
    for (let p = 0, y = i.length; p < y; p += 2) i[p] = (i[p] - l) / d, i[p + 1] = (i[p + 1] - h) / u;
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
      l = r - i;
    let h; let
      d;
    switch (a) {
      case 0:
        h = U._rescale(n(this, jt), e, r, o, -l), d = U._rescale(n(this, fi), e, r, o, -l);
        break;
      case 90:
        h = U._rescaleAndSwap(n(this, jt), e, i, o, l), d = U._rescaleAndSwap(n(this, fi), e, i, o, l);
        break;
      case 180:
        h = U._rescale(n(this, jt), s, i, -o, l), d = U._rescale(n(this, fi), s, i, -o, l);
        break;
      case 270:
        h = U._rescaleAndSwap(n(this, jt), s, r, -o, -l), d = U._rescaleAndSwap(n(this, fi), s, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(d)],
    };
  }

  get box() {
    return n(this, Fa);
  }

  newOutliner(e, i, s, r, a, o = 0) {
    return new Au(e, i, s, r, a, o);
  }

  getNewOutline(e, i) {
    const [s, r, a, o] = n(this, Fa); const [l, h, d, u] = n(this, kl); const p = a * d; const y = o * u; const S = s * d + l; const v = r * u + h; const
      _ = this.newOutliner({
        x: n(this, fi)[0] * p + S,
        y: n(this, fi)[1] * y + v,
      }, n(this, kl), n(this, ed), e, n(this, td), i ?? n(this, bn));
    for (let x = 2; x < n(this, fi).length; x += 2) {
      _.add({
        x: n(this, fi)[x] * p + S,
        y: n(this, fi)[x + 1] * y + v,
      });
    }
    return _.getOutlines();
  }
}
kl = new WeakMap(), Fa = new WeakMap(), bn = new WeakMap(), td = new WeakMap(), fi = new WeakMap(), ed = new WeakMap(), jt = new WeakMap(), Uu = new WeakSet(), Gb = function (e) {
  const i = n(this, jt);
  let s = i[4]; let
    r = i[5];
  const a = [s, r, s, r];
  let o = s; let l = r; let h = s; let
    d = r;
  const u = e ? Math.max : Math.min; const
    p = new Float32Array(4);
  for (let S = 6, v = i.length; S < v; S += 6) {
    const _ = i[S + 4]; const
      x = i[S + 5];
    isNaN(i[S]) ? (G.pointBoundingBox(_, x, a), l > x ? (o = _, l = x) : l === x && (o = u(o, _)), d < x ? (h = _, d = x) : d === x && (h = u(h, _))) : (p[0] = p[1] = 1 / 0, p[2] = p[3] = -1 / 0, G.bezierBoundingBox(s, r, ...i.slice(S, S + 6), p), G.rectBoundingBox(p[0], p[1], p[2], p[3], a), l > p[1] ? (o = p[0], l = p[1]) : l === p[1] && (o = u(o, p[0])), d < p[3] ? (h = p[2], d = p[3]) : d === p[3] && (h = u(h, p[2]))), s = _, r = x;
  }
  const y = n(this, Fa);
  y[0] = a[0] - n(this, bn), y[1] = a[1] - n(this, bn), y[2] = a[2] - a[0] + 2 * n(this, bn), y[3] = a[3] - a[1] + 2 * n(this, bn), this.firstPoint = [o, l], this.lastPoint = [h, d];
};
let id; let sd; let nd; let mr; let Zi; let Ge; let zb; let eu; let Wb; let jb; let
  yp;
class bp {
  constructor(t, e = 0, i = 0, s = !0) {
    b(this, Ge);
    b(this, id);
    b(this, sd);
    b(this, nd);
    b(this, mr, []);
    b(this, Zi, []);
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
      n(this, mr).push(C, P), G.rectBoundingBox(E, m, f, A, r);
    }
    const o = r[2] - r[0] + 2 * i; const l = r[3] - r[1] + 2 * i; const h = r[0] - i; const
      d = r[1] - i;
    let u = s ? -1 / 0 : 1 / 0; let
      p = 1 / 0;
    const y = n(this, mr).at(s ? -1 : -2); const
      S = [y[0], y[2]];
    for (const v of n(this, mr)) {
      const [_, x, T, E] = v;
      !E && s ? x < p ? (p = x, u = _) : x === p && (u = Math.max(u, _)) : E && !s && (x < p ? (p = x, u = _) : x === p && (u = Math.min(u, _))), v[0] = (_ - h) / o, v[1] = (x - d) / l, v[2] = (T - d) / l;
    }
    g(this, id, new Float32Array([h, d, o, l])), g(this, sd, [u, p]), g(this, nd, S);
  }

  getOutlines() {
    n(this, mr).sort((e, i) => e[0] - i[0] || e[1] - i[1] || e[2] - i[2]);
    const t = [];
    for (const e of n(this, mr)) e[3] ? (t.push(...w(this, Ge, yp).call(this, e)), w(this, Ge, Wb).call(this, e)) : (w(this, Ge, jb).call(this, e), t.push(...w(this, Ge, yp).call(this, e)));
    return w(this, Ge, zb).call(this, t);
  }
}
id = new WeakMap(), sd = new WeakMap(), nd = new WeakMap(), mr = new WeakMap(), Zi = new WeakMap(), Ge = new WeakSet(), zb = function (t) {
  const e = []; const
    i = /* @__PURE__ */ new Set();
  for (const a of t) {
    const [o, l, h] = a;
    e.push([o, l, a], [o, h, a]);
  }
  e.sort((a, o) => a[1] - o[1] || a[0] - o[0]);
  for (let a = 0, o = e.length; a < o; a += 2) {
    const l = e[a][2]; const
      h = e[a + 1][2];
    l.push(h), h.push(l), i.add(l), i.add(h);
  }
  const s = [];
  let r;
  for (; i.size > 0;) {
    const a = i.values().next().value;
    let [o, l, h, d, u] = a;
    i.delete(a);
    let p = o; let
      y = l;
    for (r = [o, h], s.push(r); ;) {
      let S;
      if (i.has(d)) S = d;
      else if (i.has(u)) S = u;
      else break;
      i.delete(S), [o, l, h, d, u] = S, p !== o && (r.push(p, y, o, y === l ? l : h), p = o), y = y === l ? h : l;
    }
    r.push(p, y);
  }
  return new Y0(s, n(this, id), n(this, sd), n(this, nd));
}, eu = function (t) {
  const e = n(this, Zi);
  let i = 0; let
    s = e.length - 1;
  for (; i <= s;) {
    const r = i + s >> 1; const
      a = e[r][0];
    if (a === t) return r;
    a < t ? i = r + 1 : s = r - 1;
  }
  return s + 1;
}, Wb = function ([, t, e]) {
  const i = w(this, Ge, eu).call(this, t);
  n(this, Zi).splice(i, 0, [t, e]);
}, jb = function ([, t, e]) {
  const i = w(this, Ge, eu).call(this, t);
  for (let s = i; s < n(this, Zi).length; s++) {
    const [r, a] = n(this, Zi)[s];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, Zi).splice(s, 1);
      return;
    }
  }
  for (let s = i - 1; s >= 0; s--) {
    const [r, a] = n(this, Zi)[s];
    if (r !== t) break;
    if (r === t && a === e) {
      n(this, Zi).splice(s, 1);
      return;
    }
  }
}, yp = function (t) {
  const [e, i, s] = t; const r = [[e, i, s]]; const
    a = w(this, Ge, eu).call(this, s);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, Zi)[o];
    for (let d = 0, u = r.length; d < u; d++) {
      const [, p, y] = r[d];
      if (!(h <= p || y <= l)) {
        if (p >= l) {
          if (y > h) r[d][1] = h;
          else {
            if (u === 1) return [];
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
let rd; let
  Dl;
class Y0 extends U {
  constructor(e, i, s, r) {
    super();
    b(this, rd);
    b(this, Dl);
    g(this, Dl, e), g(this, rd, i), this.firstPoint = s, this.lastPoint = r;
  }

  toSVGPath() {
    const e = [];
    for (const i of n(this, Dl)) {
      let [s, r] = i;
      e.push(`M${s} ${r}`);
      for (let a = 2; a < i.length; a += 2) {
        const o = i[a]; const
          l = i[a + 1];
        o === s ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), s = o);
      }
      e.push('Z');
    }
    return e.join(' ');
  }

  serialize([e, i, s, r], a) {
    const o = []; const l = s - e; const
      h = r - i;
    for (const d of n(this, Dl)) {
      const u = new Array(d.length);
      for (let p = 0; p < d.length; p += 2) u[p] = e + d[p] * l, u[p + 1] = r - d[p + 1] * h;
      o.push(u);
    }
    return o;
  }

  get box() {
    return n(this, rd);
  }

  get classNamesForOutlining() {
    return ['highlightOutline'];
  }
}
rd = new WeakMap(), Dl = new WeakMap();
class wp extends Au {
  newFreeDrawOutline(t, e, i, s, r, a) {
    return new K0(t, e, i, s, r, a);
  }
}
class K0 extends Ub {
  newOutliner(t, e, i, s, r, a = 0) {
    return new wp(t, e, i, s, r, a);
  }
}
let Ml; let ad; let yn; let Na; let od; let Ke; let ld; let hd; let Oa; let pi; let gi; let be; let Ll; let Il; let ke; let Fl; let Fi; let cd; let J; let Ap; let iu; let Vb; let qb; let Xb; let vp; let Nr; let Oi; let co; let Yb; let su; let nu; let Kb; let Zb; let Jb; let Qb; let
  ty;
const ht = class ht extends Ct {
  constructor(e) {
    super({
      ...e,
      name: 'highlightEditor',
    });
    b(this, J);
    b(this, Ml, null);
    b(this, ad, 0);
    b(this, yn);
    b(this, Na, null);
    b(this, od, null);
    b(this, Ke, null);
    b(this, ld, null);
    b(this, hd, 0);
    b(this, Oa, null);
    b(this, pi, null);
    b(this, gi, null);
    b(this, be, !1);
    b(this, Ll, null);
    b(this, Il, null);
    b(this, ke, null);
    b(this, Fl, '');
    b(this, Fi);
    b(this, cd, '');
    this.color = e.color || ht._defaultColor, g(this, Fi, e.thickness || ht._defaultThickness), this.opacity = e.opacity || ht._defaultOpacity, g(this, yn, e.boxes || null), g(this, cd, e.methodOfCreation || ''), g(this, Fl, e.text || ''), this._isDraggable = !1, this.defaultL10nId = 'pdfjs-editor-highlight-editor', e.highlightId > -1 ? (g(this, be, !0), w(this, J, iu).call(this, e), w(this, J, Nr).call(this)) : n(this, yn) && (g(this, Ml, e.anchorNode), g(this, ad, e.anchorOffset), g(this, ld, e.focusNode), g(this, hd, e.focusOffset), w(this, J, Ap).call(this), w(this, J, Nr).call(this), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-highlight-added-alert');
  }

  static get _keyboardManager() {
    const e = ht.prototype;
    return Z(this, '_keyboardManager', new yd([[['ArrowLeft', 'mac+ArrowLeft'], e._moveCaret, {
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
      type: n(this, be) ? 'free_highlight' : 'highlight',
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: n(this, Fi),
      methodOfCreation: n(this, cd),
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
    Ct.initialize(e, i), ht._defaultColor || (ht._defaultColor = ((s = i.highlightColors) == null ? void 0 : s.values().next().value) || '#fff066');
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
    return n(this, Il);
  }

  get commentButtonPosition() {
    return n(this, Ll);
  }

  updateParams(e, i) {
    switch (e) {
      case it.HIGHLIGHT_COLOR:
        w(this, J, Vb).call(this, i);
        break;
      case it.HIGHLIGHT_THICKNESS:
        w(this, J, qb).call(this, i);
        break;
    }
  }

  static get defaultPropertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, ht._defaultColor], [it.HIGHLIGHT_THICKNESS, ht._defaultThickness]];
  }

  get propertiesToUpdate() {
    return [[it.HIGHLIGHT_COLOR, this.color || ht._defaultColor], [it.HIGHLIGHT_THICKNESS, n(this, Fi) || ht._defaultThickness], [it.HIGHLIGHT_FREE, n(this, be)]];
  }

  onUpdatedColor() {
    let e; let
      i;
    (e = this.parent) == null || e.drawLayer.updateProperties(n(this, gi), {
      root: {
        fill: this.color,
        'fill-opacity': this.opacity,
      },
    }), (i = n(this, od)) == null || i.updateColor(this.color), super.onUpdatedColor();
  }

  get toolbarButtons() {
    return this._uiManager.highlightColors ? [['colorPicker', g(this, od, new Mh({
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
    return super.fixAndSetPosition(w(this, J, nu).call(this));
  }

  getBaseTranslation() {
    return [0, 0];
  }

  getRect(e, i) {
    return super.getRect(e, i, w(this, J, nu).call(this));
  }

  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }

  remove() {
    w(this, J, vp).call(this), this._reportTelemetry({
      action: 'deleted',
    }), super.remove();
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, J, Nr).call(this), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let s;
    let i = !1;
    this.parent && !e ? w(this, J, vp).call(this) : e && (w(this, J, Nr).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains('selectedEditor'))), super.setParent(e), this.show(this._isVisible), i && this.select();
  }

  rotate(e) {
    let r; let a; let
      o;
    const {
      drawLayer: i,
    } = this.parent;
    let s;
    n(this, be) ? (e = (e - this.rotation + 360) % 360, s = w(r = ht, Oi, co).call(r, n(this, pi).box, e)) : s = w(a = ht, Oi, co).call(a, [this.x, this.y, this.width, this.height], e), i.updateProperties(n(this, gi), {
      bbox: s,
      root: {
        'data-main-rotation': e,
      },
    }), i.updateProperties(n(this, ke), {
      bbox: w(o = ht, Oi, co).call(o, n(this, Ke).box, e),
      root: {
        'data-main-rotation': e,
      },
    });
  }

  render() {
    if (this.div) return this.div;
    const e = super.render();
    n(this, Fl) && (e.setAttribute('aria-label', n(this, Fl)), e.setAttribute('role', 'mark')), n(this, be) ? e.classList.add('free') : this.div.addEventListener('keydown', w(this, J, Yb).bind(this), {
      signal: this._uiManager._signal,
    });
    const i = g(this, Oa, document.createElement('div'));
    return e.append(i), i.setAttribute('aria-hidden', 'true'), i.className = 'internal', i.style.clipPath = n(this, Na), this.setDims(this.width, this.height), Am(this, n(this, Oa), ['pointerover', 'pointerleave']), this.enableEditing(), e;
  }

  pointerover() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), {
      rootClass: {
        hovered: !0,
      },
    });
  }

  pointerleave() {
    let e;
    this.isSelected || (e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), {
      rootClass: {
        hovered: !1,
      },
    });
  }

  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        w(this, J, su).call(this, !0);
        break;
      case 1:
      case 3:
        w(this, J, su).call(this, !1);
        break;
    }
  }

  select() {
    let e;
    super.select(), n(this, ke) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), {
      rootClass: {
        hovered: !1,
        selected: !0,
      },
    }));
  }

  unselect() {
    let e;
    super.unselect(), n(this, ke) && ((e = this.parent) == null || e.drawLayer.updateProperties(n(this, ke), {
      rootClass: {
        selected: !1,
      },
    }), n(this, be) || w(this, J, su).call(this, !1));
  }

  get _mustFixPosition() {
    return !n(this, be);
  }

  show(e = this._isVisible) {
    super.show(e), this.parent && (this.parent.drawLayer.updateProperties(n(this, gi), {
      rootClass: {
        hidden: !e,
      },
    }), this.parent.drawLayer.updateProperties(n(this, ke), {
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
      y: l,
      width: h,
      height: d,
    } = s.getBoundingClientRect(); const u = new AbortController(); const p = e.combinedSignal(u); const
      y = (S) => {
        u.abort(), w(this, Oi, Qb).call(this, e, S);
      };
    window.addEventListener('blur', y, {
      signal: p,
    }), window.addEventListener('pointerup', y, {
      signal: p,
    }), window.addEventListener('pointerdown', Nt, {
      capture: !0,
      passive: !1,
      signal: p,
    }), window.addEventListener('contextmenu', xi, {
      signal: p,
    }), s.addEventListener('pointermove', w(this, Oi, Jb).bind(this, e), {
      signal: p,
    }), this._freeHighlight = new wp({
      x: r,
      y: a,
    }, [o, l, h, d], e.scale, this._defaultThickness / 2, i, 1e-3), {
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
    if (e instanceof Pb) {
      const {
        data: {
          quadPoints: E,
          rect: f,
          rotation: m,
          id: A,
          color: C,
          opacity: P,
          popupRef: R,
          richText: k,
          contentsObj: D,
          creationDate: I,
          modificationDate: O,
        },
        parent: {
          page: {
            pageNumber: F,
          },
        },
      } = e;
      r = e = {
        annotationType: q.HIGHLIGHT,
        color: Array.from(C),
        opacity: P,
        quadPoints: E,
        boxes: null,
        pageIndex: F - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: k,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: I,
        modificationDate: O,
      };
    } else if (e instanceof tg) {
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
          richText: k,
          contentsObj: D,
          creationDate: I,
          modificationDate: O,
        },
        parent: {
          page: {
            pageNumber: F,
          },
        },
      } = e;
      r = e = {
        annotationType: q.HIGHLIGHT,
        color: Array.from(C),
        thickness: P,
        inkLists: E,
        boxes: null,
        pageIndex: F - 1,
        rect: f.slice(0),
        rotation: m,
        annotationElementId: A,
        id: A,
        deleted: !1,
        popupRef: R,
        richText: k,
        comment: (D == null ? void 0 : D.str) || null,
        creationDate: I,
        modificationDate: O,
      };
    }
    const {
      color: a,
      quadPoints: o,
      inkLists: l,
      opacity: h,
    } = e; const
      d = await super.deserialize(e, i, s);
    d.color = G.makeHexColor(...a), d.opacity = h || 1, l && g(d, Fi, e.thickness), d._initialData = r, e.comment && d.setCommentData(e);
    const [u, p] = d.pageDimensions; const
      [y, S] = d.pageTranslation;
    if (o) {
      const E = g(d, yn, []);
      for (let f = 0; f < o.length; f += 8) {
        E.push({
          x: (o[f] - y) / u,
          y: 1 - (o[f + 1] - S) / p,
          width: (o[f + 2] - o[f]) / u,
          height: (o[f + 1] - o[f + 5]) / p,
        });
      }
      w(v = d, J, Ap).call(v), w(_ = d, J, Nr).call(_), d.rotate(d.rotation);
    } else if (l) {
      g(d, be, !0);
      const E = l[0]; const f = {
        x: E[0] - y,
        y: p - (E[1] - S),
      }; const
        m = new wp(f, [0, 0, u, p], 1, n(d, Fi) / 2, !0, 1e-3);
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
      w(x = d, J, iu).call(x, {
        highlightOutlines: m.getOutlines(),
        highlightId: A,
        clipPathId: C,
      }), w(T = d, J, Nr).call(T), d.rotate(d.parentRotation);
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
      thickness: n(this, Fi),
      quadPoints: w(this, J, Kb).call(this),
      outlines: w(this, J, Zb).call(this, s.rect),
    }), this.addComment(s), this.annotationElementId && !w(this, J, ty).call(this, s) ? null : (s.id = this.annotationElementId, s);
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
Ml = new WeakMap(), ad = new WeakMap(), yn = new WeakMap(), Na = new WeakMap(), od = new WeakMap(), Ke = new WeakMap(), ld = new WeakMap(), hd = new WeakMap(), Oa = new WeakMap(), pi = new WeakMap(), gi = new WeakMap(), be = new WeakMap(), Ll = new WeakMap(), Il = new WeakMap(), ke = new WeakMap(), Fl = new WeakMap(), Fi = new WeakMap(), cd = new WeakMap(), J = new WeakSet(), Ap = function () {
  const e = new bp(n(this, yn), 1e-3);
  g(this, pi, e.getOutlines()), [this.x, this.y, this.width, this.height] = n(this, pi).box;
  const i = new bp(n(this, yn), 25e-4, 1e-3, this._uiManager.direction === 'ltr');
  g(this, Ke, i.getOutlines());
  const {
    firstPoint: s,
  } = n(this, pi);
  g(this, Ll, [(s[0] - this.x) / this.width, (s[1] - this.y) / this.height]);
  const {
    lastPoint: r,
  } = n(this, Ke);
  g(this, Il, [(r[0] - this.x) / this.width, (r[1] - this.y) / this.height]);
}, iu = function ({
  highlightOutlines: e,
  highlightId: i,
  clipPathId: s,
}) {
  let p; let
    y;
  if (g(this, pi, e), g(this, Ke, e.getNewOutline(n(this, Fi) / 2 + 1.5, 25e-4)), i >= 0) {
    g(this, gi, i), g(this, Na, s), this.parent.drawLayer.finalizeDraw(i, {
      bbox: e.box,
      path: {
        d: e.toSVGPath(),
      },
    }), g(this, ke, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: !0,
        free: !0,
      },
      bbox: n(this, Ke).box,
      path: {
        d: n(this, Ke).toSVGPath(),
      },
    }, !0));
  } else if (this.parent) {
    const S = this.parent.viewport.rotation;
    this.parent.drawLayer.updateProperties(n(this, gi), {
      bbox: w(p = ht, Oi, co).call(p, n(this, pi).box, (S - this.rotation + 360) % 360),
      path: {
        d: e.toSVGPath(),
      },
    }), this.parent.drawLayer.updateProperties(n(this, ke), {
      bbox: w(y = ht, Oi, co).call(y, n(this, Ke).box, S),
      path: {
        d: n(this, Ke).toSVGPath(),
      },
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
    firstPoint: d,
  } = e;
  g(this, Ll, [(d[0] - a) / l, (d[1] - o) / h]);
  const {
    lastPoint: u,
  } = n(this, Ke);
  g(this, Il, [(u[0] - a) / l, (u[1] - o) / h]);
}, Vb = function (e) {
  const i = (a, o) => {
    this.color = a, this.opacity = o, this.onUpdatedColor();
  }; const s = this.color; const
    r = this.opacity;
  this.addCommands({
    cmd: i.bind(this, e, ht._defaultOpacity),
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
}, qb = function (e) {
  const i = n(this, Fi); const
    s = (r) => {
      g(this, Fi, r), w(this, J, Xb).call(this, r);
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
}, Xb = function (e) {
  n(this, be) && (w(this, J, iu).call(this, {
    highlightOutlines: n(this, pi).getNewOutline(e / 2),
  }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
}, vp = function () {
  n(this, gi) === null || !this.parent || (this.parent.drawLayer.remove(n(this, gi)), g(this, gi, null), this.parent.drawLayer.remove(n(this, ke)), g(this, ke, null));
}, Nr = function (e = this.parent) {
  n(this, gi) === null && ({
    id: Zt(this, gi)._,
    clipPathId: Zt(this, Na)._,
  } = e.drawLayer.draw({
    bbox: n(this, pi).box,
    root: {
      viewBox: '0 0 1 1',
      fill: this.color,
      'fill-opacity': this.opacity,
    },
    rootClass: {
      highlight: !0,
      free: n(this, be),
    },
    path: {
      d: n(this, pi).toSVGPath(),
    },
  }, !1, !0), g(this, ke, e.drawLayer.drawOutline({
    rootClass: {
      highlightOutline: !0,
      free: n(this, be),
    },
    bbox: n(this, Ke).box,
    path: {
      d: n(this, Ke).toSVGPath(),
    },
  }, n(this, be))), n(this, Oa) && (n(this, Oa).style.clipPath = n(this, Na)));
}, Oi = new WeakSet(), co = function ([e, i, s, r], a) {
  switch (a) {
    case 90:
      return [1 - i - r, e, r, s];
    case 180:
      return [1 - e - s, 1 - i - r, s, r];
    case 270:
      return [i, 1 - e - s, r, s];
  }
  return [e, i, s, r];
}, Yb = function (e) {
  ht._keyboardManager.exec(this, e);
}, su = function (e) {
  if (!n(this, Ml)) return;
  const i = window.getSelection();
  e ? i.setPosition(n(this, Ml), n(this, ad)) : i.setPosition(n(this, ld), n(this, hd));
}, nu = function () {
  return n(this, be) ? this.rotation : 0;
}, Kb = function () {
  if (n(this, be)) return null;
  const [e, i] = this.pageDimensions; const [s, r] = this.pageTranslation; const a = n(this, yn); const
    o = new Float32Array(a.length * 8);
  let l = 0;
  for (const {
    x: h,
    y: d,
    width: u,
    height: p,
  } of a) {
    const y = h * e + s; const
      S = (1 - d) * i + r;
    o[l] = o[l + 4] = y, o[l + 1] = o[l + 3] = S, o[l + 2] = o[l + 6] = y + u * e, o[l + 5] = o[l + 7] = S - p * i, l += 8;
  }
  return o;
}, Zb = function (e) {
  return n(this, pi).serialize(e, w(this, J, nu).call(this));
}, Jb = function (e, i) {
  this._freeHighlight.add(i) && e.drawLayer.updateProperties(this._freeHighlightId, {
    path: {
      d: this._freeHighlight.toSVGPath(),
    },
  });
}, Qb = function (e, i) {
  this._freeHighlight.isEmpty() ? e.drawLayer.remove(this._freeHighlightId) : e.createAndAddNewEditor(i, !1, {
    highlightId: this._freeHighlightId,
    highlightOutlines: this._freeHighlight.getOutlines(),
    clipPathId: this._freeHighlightClipId,
    methodOfCreation: 'main_toolbar',
  }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = '';
}, ty = function (e) {
  const {
    color: i,
  } = this._initialData;
  return this.hasEditedComment || e.color.some((s, r) => s !== i[r]);
}, b(ht, Oi), M(ht, '_defaultColor', null), M(ht, '_defaultOpacity', 1), M(ht, '_defaultThickness', 12), M(ht, '_type', 'highlight'), M(ht, '_editorType', q.HIGHLIGHT), M(ht, '_freeHighlightId', -1), M(ht, '_freeHighlight', null), M(ht, '_freeHighlightClipId', '');
const vu = ht;
let Ba;
class ey {
  constructor() {
    b(this, Ba, /* @__PURE__ */ Object.create(null));
  }

  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }

  updateProperties(t) {
    if (t) for (const [e, i] of Object.entries(t)) e.startsWith('_') || this.updateProperty(e, i);
  }

  updateSVGProperty(t, e) {
    n(this, Ba)[t] = e;
  }

  toSVGProperties() {
    const t = n(this, Ba);
    return g(this, Ba, /* @__PURE__ */ Object.create(null)), {
      root: t,
    };
  }

  reset() {
    g(this, Ba, /* @__PURE__ */ Object.create(null));
  }

  updateAll(t = this) {
    this.updateProperties(t);
  }

  clone() {
    Et('Not implemented');
  }
}
Ba = new WeakMap();
let mi; let Nl; let ae; let Ha; let $a; let br; let yr; let wr; let Ua; let at; let Sp; let xp; let Ep; let Ah; let iy; let ru; let vh; let
  uo;
const z = class z extends Ct {
  constructor(e) {
    super(e);
    b(this, at);
    b(this, mi, null);
    b(this, Nl);
    M(this, '_colorPicker', null);
    M(this, '_drawId', null);
    g(this, Nl, e.mustBeCommitted || !1), this._addOutlines(e);
  }

  onUpdatedColor() {
    let e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }

  _addOutlines(e) {
    e.drawOutlines && (w(this, at, Sp).call(this, e), w(this, at, Ah).call(this));
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
    s && this._defaultDrawingOptions.updateProperty(s, i), this._currentParent && (n(z, ae).updateProperty(s, i), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
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
      o = (l) => {
        let d;
        r.updateProperty(i, l);
        const h = n(this, mi).updateProperty(i, l);
        h && w(this, at, vh).call(this, h), (d = this.parent) == null || d.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType && this.onUpdatedColor();
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
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, z._mergeSVGProperties(n(this, mi).getPathResizingSVGProperties(w(this, at, ru).call(this)), {
      bbox: w(this, at, uo).call(this),
    }));
  }

  _onResized() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, z._mergeSVGProperties(n(this, mi).getPathResizedSVGProperties(w(this, at, ru).call(this)), {
      bbox: w(this, at, uo).call(this),
    }));
  }

  _onTranslating(e, i) {
    let s;
    (s = this.parent) == null || s.drawLayer.updateProperties(this._drawId, {
      bbox: w(this, at, uo).call(this),
    });
  }

  _onTranslated() {
    let e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, z._mergeSVGProperties(n(this, mi).getPathTranslatedSVGProperties(w(this, at, ru).call(this), this.parentDimensions), {
      bbox: w(this, at, uo).call(this),
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
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, Nl) && (g(this, Nl, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }

  remove() {
    w(this, at, Ep).call(this), super.remove();
  }

  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (w(this, at, Ah).call(this), w(this, at, vh).call(this, n(this, mi).box), this.isAttachedToDOM || this.parent.add(this)));
  }

  setParent(e) {
    let s;
    let i = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), w(this, at, Ep).call(this)) : e && (this._uiManager.addShouldRescale(this), w(this, at, Ah).call(this, e), i = !this.parent && ((s = this.div) == null ? void 0 : s.classList.contains('selectedEditor'))), super.setParent(e), i && this.select();
  }

  rotate() {
    this.parent && this.parent.drawLayer.updateProperties(this._drawId, z._mergeSVGProperties({
      bbox: w(this, at, uo).call(this),
    }, n(this, mi).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }

  onScaleChanging() {
    this.parent && w(this, at, vh).call(this, n(this, mi).updateParentDimensions(this.parentDimensions, this.parent.scale));
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
      offsetY: l,
      pointerId: h,
      pointerType: d,
    } = r;
    if (n(z, yr) && n(z, yr) !== d) return;
    const {
      viewport: {
        rotation: u,
      },
    } = e; const {
      width: p,
      height: y,
    } = a.getBoundingClientRect(); const S = g(z, Ha, new AbortController()); const
      v = e.combinedSignal(S);
    if (n(z, br) || g(z, br, h), n(z, yr) ?? g(z, yr, d), window.addEventListener('pointerup', (x) => {
      let T;
      n(z, br) === x.pointerId ? this._endDraw(x) : (T = n(z, wr)) == null || T.delete(x.pointerId);
    }, {
      signal: v,
    }), window.addEventListener('pointercancel', (x) => {
      let T;
      n(z, br) === x.pointerId ? this._currentParent.endDrawingSession() : (T = n(z, wr)) == null || T.delete(x.pointerId);
    }, {
      signal: v,
    }), window.addEventListener('pointerdown', (x) => {
      n(z, yr) === x.pointerType && ((n(z, wr) || g(z, wr, /* @__PURE__ */ new Set())).add(x.pointerId), n(z, ae).isCancellable() && (n(z, ae).removeLastElement(), n(z, ae).isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: v,
    }), window.addEventListener('contextmenu', xi, {
      signal: v,
    }), a.addEventListener('pointermove', this._drawMove.bind(this), {
      signal: v,
    }), a.addEventListener('touchmove', (x) => {
      x.timeStamp === n(z, Ua) && Nt(x);
    }, {
      signal: v,
    }), e.toggleDrawing(), (_ = i._editorUndoBar) == null || _.hide(), n(z, ae)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(z, ae).startNew(o, l, p, y, u));
      return;
    }
    i.updateUIForDefaultProperties(this), g(z, ae, this.createDrawerInstance(o, l, p, y, u)), g(z, $a, this.getDefaultDrawingOptions()), this._currentParent = e, {
      id: this._currentDrawId,
    } = e.drawLayer.draw(this._mergeSVGProperties(n(z, $a).toSVGProperties(), n(z, ae).defaultSVGProperties), !0, !1);
  }

  static _drawMove(e) {
    let a;
    if (g(z, Ua, -1), !n(z, ae)) return;
    const {
      offsetX: i,
      offsetY: s,
      pointerId: r,
    } = e;
    if (n(z, br) === r) {
      if (((a = n(z, wr)) == null ? void 0 : a.size) >= 1) {
        this._endDraw(e);
        return;
      }
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, n(z, ae).add(i, s)), g(z, Ua, e.timeStamp), Nt(e);
    }
  }

  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, g(z, ae, null), g(z, $a, null), g(z, yr, null), g(z, Ua, NaN)), n(z, Ha) && (n(z, Ha).abort(), g(z, Ha, null), g(z, br, NaN), g(z, wr, null));
  }

  static _endDraw(e) {
    const i = this._currentParent;
    if (i) {
      if (i.toggleDrawing(!0), this._cleanup(!1), (e == null ? void 0 : e.target) === i.div && i.drawLayer.updateProperties(this._currentDrawId, n(z, ae).end(e.offsetX, e.offsetY)), this.supportMultipleDrawings) {
        const s = n(z, ae); const r = this._currentDrawId; const
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
    if (i.toggleDrawing(!0), i.cleanUndoStack(it.DRAW_STEP), !n(z, ae).isEmpty()) {
      const {
        pageDimensions: [s, r],
        scale: a,
      } = i; const
        o = i.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0,
        }, !1, {
          drawId: this._currentDrawId,
          drawOutlines: n(z, ae).getOutlines(s * a, r * a, a, this._INNER_MARGIN),
          drawingOptions: n(z, $a),
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
        pageY: l,
      },
    } = i.viewport; const h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e); const
      d = await super.deserialize(e, i, s);
    return d.createDrawingOptions(e), w(u = d, at, Sp).call(u, {
      drawOutlines: h,
    }), w(p = d, at, Ah).call(p), d.onScaleChanging(), d.rotate(), d;
  }

  serializeDraw(e) {
    const [i, s] = this.pageTranslation; const
      [r, a] = this.pageDimensions;
    return n(this, mi).serialize([i, s, r, a], e);
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
mi = new WeakMap(), Nl = new WeakMap(), ae = new WeakMap(), Ha = new WeakMap(), $a = new WeakMap(), br = new WeakMap(), yr = new WeakMap(), wr = new WeakMap(), Ua = new WeakMap(), at = new WeakSet(), Sp = function ({
  drawOutlines: e,
  drawId: i,
  drawingOptions: s,
}) {
  g(this, mi, e), this._drawingOptions || (this._drawingOptions = s), this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), i >= 0 ? (this._drawId = i, this.parent.drawLayer.finalizeDraw(i, e.defaultProperties)) : this._drawId = w(this, at, xp).call(this, e, this.parent), w(this, at, vh).call(this, e.box);
}, xp = function (e, i) {
  const {
    id: s,
  } = i.drawLayer.draw(z._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, !1);
  return s;
}, Ep = function () {
  this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
}, Ah = function (e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = w(this, at, xp).call(this, n(this, mi), e);
  }
}, iy = function ([e, i, s, r]) {
  const {
    parentDimensions: [a, o],
    rotation: l,
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
}, ru = function () {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    parentDimensions: [a, o],
    rotation: l,
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
}, vh = function (e) {
  [this.x, this.y, this.width, this.height] = w(this, at, iy).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, uo = function () {
  const {
    x: e,
    y: i,
    width: s,
    height: r,
    rotation: a,
    parentRotation: o,
    parentDimensions: [l, h],
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
}, M(z, '_currentDrawId', -1), M(z, '_currentParent', null), b(z, ae, null), b(z, Ha, null), b(z, $a, null), b(z, br, NaN), b(z, yr, null), b(z, wr, null), b(z, Ua, NaN), M(z, '_INNER_MARGIN', 3);
const Su = z;
let Ps; let oe; let le; let Ga; let Ol; let Ne; let ye; let Ni; let za; let Wa; let ja; let Bl; let
  au;
class Z0 {
  constructor(t, e, i, s, r, a) {
    b(this, Bl);
    b(this, Ps, new Float64Array(6));
    b(this, oe);
    b(this, le);
    b(this, Ga);
    b(this, Ol);
    b(this, Ne);
    b(this, ye, '');
    b(this, Ni, 0);
    b(this, za, new Ad());
    b(this, Wa);
    b(this, ja);
    g(this, Wa, i), g(this, ja, s), g(this, Ga, r), g(this, Ol, a), [t, e] = w(this, Bl, au).call(this, t, e);
    const o = g(this, oe, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Ne, [t, e]), g(this, le, [{
      line: o,
      points: n(this, Ne),
    }]), n(this, Ps).set(o, 0);
  }

  updateProperty(t, e) {
    t === 'stroke-width' && g(this, Ol, e);
  }

  isEmpty() {
    return !n(this, le) || n(this, le).length === 0;
  }

  isCancellable() {
    return n(this, Ne).length <= 10;
  }

  add(t, e) {
    [t, e] = w(this, Bl, au).call(this, t, e);
    const [i, s, r, a] = n(this, Ps).subarray(2, 6); const o = t - r; const
      l = e - a;
    return Math.hypot(n(this, Wa) * o, n(this, ja) * l) <= 2 ? null : (n(this, Ne).push(t, e), isNaN(i) ? (n(this, Ps).set([r, a, t, e], 2), n(this, oe).push(NaN, NaN, NaN, NaN, t, e), {
      path: {
        d: this.toSVGPath(),
      },
    }) : (isNaN(n(this, Ps)[0]) && n(this, oe).splice(6, 6), n(this, Ps).set([i, s, r, a, t, e], 0), n(this, oe).push(...U.createBezierPoints(i, s, r, a, t, e)), {
      path: {
        d: this.toSVGPath(),
      },
    }));
  }

  end(t, e) {
    const i = this.add(t, e);
    return i || (n(this, Ne).length === 2 ? {
      path: {
        d: this.toSVGPath(),
      },
    } : null);
  }

  startNew(t, e, i, s, r) {
    g(this, Wa, i), g(this, ja, s), g(this, Ga, r), [t, e] = w(this, Bl, au).call(this, t, e);
    const a = g(this, oe, [NaN, NaN, NaN, NaN, t, e]);
    g(this, Ne, [t, e]);
    const o = n(this, le).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, le).push({
      line: a,
      points: n(this, Ne),
    }), n(this, Ps).set(a, 0), g(this, Ni, 0), this.toSVGPath(), null;
  }

  getLastElement() {
    return n(this, le).at(-1);
  }

  setLastElement(t) {
    return n(this, le) ? (n(this, le).push(t), g(this, oe, t.line), g(this, Ne, t.points), g(this, Ni, 0), {
      path: {
        d: this.toSVGPath(),
      },
    }) : n(this, za).setLastElement(t);
  }

  removeLastElement() {
    if (!n(this, le)) return n(this, za).removeLastElement();
    n(this, le).pop(), g(this, ye, '');
    for (let t = 0, e = n(this, le).length; t < e; t++) {
      const {
        line: i,
        points: s,
      } = n(this, le)[t];
      g(this, oe, i), g(this, Ne, s), g(this, Ni, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, ye),
      },
    };
  }

  toSVGPath() {
    const t = U.svgRound(n(this, oe)[4]); const
      e = U.svgRound(n(this, oe)[5]);
    if (n(this, Ne).length === 2) return g(this, ye, `${n(this, ye)} M ${t} ${e} Z`), n(this, ye);
    if (n(this, Ne).length <= 6) {
      const s = n(this, ye).lastIndexOf('M');
      g(this, ye, `${n(this, ye).slice(0, s)} M ${t} ${e}`), g(this, Ni, 6);
    }
    if (n(this, Ne).length === 4) {
      const s = U.svgRound(n(this, oe)[10]); const
        r = U.svgRound(n(this, oe)[11]);
      return g(this, ye, `${n(this, ye)} L ${s} ${r}`), g(this, Ni, 12), n(this, ye);
    }
    const i = [];
    n(this, Ni) === 0 && (i.push(`M ${t} ${e}`), g(this, Ni, 6));
    for (let s = n(this, Ni), r = n(this, oe).length; s < r; s += 6) {
      const [a, o, l, h, d, u] = n(this, oe).slice(s, s + 6).map(U.svgRound);
      i.push(`C${a} ${o} ${l} ${h} ${d} ${u}`);
    }
    return g(this, ye, n(this, ye) + i.join(' ')), g(this, Ni, n(this, oe).length), n(this, ye);
  }

  getOutlines(t, e, i, s) {
    const r = n(this, le).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, za).build(n(this, le), t, e, i, n(this, Ga), n(this, Ol), s), g(this, Ps, null), g(this, oe, null), g(this, le, null), g(this, ye, null), n(this, za);
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
Ps = new WeakMap(), oe = new WeakMap(), le = new WeakMap(), Ga = new WeakMap(), Ol = new WeakMap(), Ne = new WeakMap(), ye = new WeakMap(), Ni = new WeakMap(), za = new WeakMap(), Wa = new WeakMap(), ja = new WeakMap(), Bl = new WeakSet(), au = function (t, e) {
  return U._normalizePoint(t, e, n(this, Wa), n(this, ja), n(this, Ga));
};
let Oe; let dd; let ud; let bi; let Rs; let ks; let Hl; let $l; let Va; let Ae; let $s; let sy; let ny; let
  ry;
class Ad extends U {
  constructor() {
    super(...arguments);
    b(this, Ae);
    b(this, Oe);
    b(this, dd, 0);
    b(this, ud);
    b(this, bi);
    b(this, Rs);
    b(this, ks);
    b(this, Hl);
    b(this, $l);
    b(this, Va);
  }

  build(e, i, s, r, a, o, l) {
    g(this, Rs, i), g(this, ks, s), g(this, Hl, r), g(this, $l, a), g(this, Va, o), g(this, ud, l ?? 0), g(this, bi, e), w(this, Ae, ny).call(this);
  }

  get thickness() {
    return n(this, Va);
  }

  setLastElement(e) {
    return n(this, bi).push(e), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  removeLastElement() {
    return n(this, bi).pop(), {
      path: {
        d: this.toSVGPath(),
      },
    };
  }

  toSVGPath() {
    const e = [];
    for (const {
      line: i,
    } of n(this, bi)) {
      if (e.push(`M${U.svgRound(i[4])} ${U.svgRound(i[5])}`), i.length === 6) {
        e.push('Z');
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
    return e.join('');
  }

  serialize([e, i, s, r], a) {
    const o = []; const l = []; const
      [h, d, u, p] = w(this, Ae, sy).call(this);
    let y; let S; let v; let _; let x; let T; let E; let f; let
      m;
    switch (n(this, $l)) {
      case 0:
        m = U._rescale, y = e, S = i + r, v = s, _ = -r, x = e + h * s, T = i + (1 - d - p) * r, E = e + (h + u) * s, f = i + (1 - d) * r;
        break;
      case 90:
        m = U._rescaleAndSwap, y = e, S = i, v = s, _ = r, x = e + d * s, T = i + h * r, E = e + (d + p) * s, f = i + (h + u) * r;
        break;
      case 180:
        m = U._rescale, y = e + s, S = i, v = -s, _ = r, x = e + (1 - h - u) * s, T = i + d * r, E = e + (1 - h) * s, f = i + (d + p) * r;
        break;
      case 270:
        m = U._rescaleAndSwap, y = e + s, S = i + r, v = -s, _ = -r, x = e + (1 - d - p) * s, T = i + (1 - h - u) * r, E = e + (1 - d) * s, f = i + (1 - h) * r;
        break;
    }
    for (const {
      line: A,
      points: C,
    } of n(this, bi)) o.push(m(A, y, S, v, _, a ? new Array(A.length) : null)), l.push(m(C, y, S, v, _, a ? new Array(C.length) : null));
    return {
      lines: o,
      points: l,
      rect: [x, T, E, f],
    };
  }

  static deserialize(e, i, s, r, a, {
    paths: {
      lines: o,
      points: l,
    },
    rotation: h,
    thickness: d,
  }) {
    const u = [];
    let p; let y; let S; let v; let
      _;
    switch (h) {
      case 0:
        _ = U._rescale, p = -e / s, y = i / r + 1, S = 1 / s, v = -1 / r;
        break;
      case 90:
        _ = U._rescaleAndSwap, p = -i / r, y = -e / s, S = 1 / r, v = 1 / s;
        break;
      case 180:
        _ = U._rescale, p = e / s + 1, y = -i / r, S = -1 / s, v = 1 / r;
        break;
      case 270:
        _ = U._rescaleAndSwap, p = i / r + 1, y = e / s + 1, S = -1 / r, v = -1 / s;
        break;
    }
    if (!o) {
      o = [];
      for (const T of l) {
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
          const k = T[R]; const
            D = T[R + 1];
          f.set(U.createBezierPoints(m, A, C, P, k, D), (R - 2) * 3), [m, A, C, P] = [C, P, k, D];
        }
      }
    }
    for (let T = 0, E = o.length; T < E; T++) {
      u.push({
        line: _(o[T].map((f) => f ?? NaN), p, y, S, v),
        points: _(l[T].map((f) => f ?? NaN), p, y, S, v),
      });
    }
    const x = new this.prototype.constructor();
    return x.build(u, s, r, 1, h, d, a), x;
  }

  get box() {
    return n(this, Oe);
  }

  updateProperty(e, i) {
    return e === 'stroke-width' ? w(this, Ae, ry).call(this, i) : null;
  }

  updateParentDimensions([e, i], s) {
    const [r, a] = w(this, Ae, $s).call(this);
    g(this, Rs, e), g(this, ks, i), g(this, Hl, s);
    const [o, l] = w(this, Ae, $s).call(this); const h = o - r; const d = l - a; const
      u = n(this, Oe);
    return u[0] -= h, u[1] -= d, u[2] += 2 * h, u[3] += 2 * d, u;
  }

  updateRotation(e) {
    return g(this, dd, e), {
      path: {
        transform: this.rotationTransform,
      },
    };
  }

  get viewBox() {
    return n(this, Oe).map(U.svgRound).join(' ');
  }

  get defaultProperties() {
    const [e, i] = n(this, Oe);
    return {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        'transform-origin': `${U.svgRound(e)} ${U.svgRound(i)}`,
      },
    };
  }

  get rotationTransform() {
    const [, , e, i] = n(this, Oe);
    let s = 0; let r = 0; let a = 0; let o = 0; let l = 0; let
      h = 0;
    switch (n(this, dd)) {
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
        return '';
    }
    return `matrix(${s} ${r} ${a} ${o} ${U.svgRound(l)} ${U.svgRound(h)})`;
  }

  getPathResizingSVGProperties([e, i, s, r]) {
    const [a, o] = w(this, Ae, $s).call(this); const
      [l, h, d, u] = n(this, Oe);
    if (Math.abs(d - a) <= U.PRECISION || Math.abs(u - o) <= U.PRECISION) {
      const _ = e + s / 2 - (l + d / 2); const
        x = i + r / 2 - (h + u / 2);
      return {
        path: {
          'transform-origin': `${U.svgRound(e)} ${U.svgRound(i)}`,
          transform: `${this.rotationTransform} translate(${_} ${x})`,
        },
      };
    }
    const p = (s - 2 * a) / (d - 2 * a); const y = (r - 2 * o) / (u - 2 * o); const S = d / s; const
      v = u / r;
    return {
      path: {
        'transform-origin': `${U.svgRound(l)} ${U.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${S} ${v}) translate(${U.svgRound(a)} ${U.svgRound(o)}) scale(${p} ${y}) translate(${U.svgRound(-a)} ${U.svgRound(-o)})`,
      },
    };
  }

  getPathResizedSVGProperties([e, i, s, r]) {
    const [a, o] = w(this, Ae, $s).call(this); const l = n(this, Oe); const
      [h, d, u, p] = l;
    if (l[0] = e, l[1] = i, l[2] = s, l[3] = r, Math.abs(u - a) <= U.PRECISION || Math.abs(p - o) <= U.PRECISION) {
      const x = e + s / 2 - (h + u / 2); const
        T = i + r / 2 - (d + p / 2);
      for (const {
        line: E,
        points: f,
      } of n(this, bi)) U._translate(E, x, T, E), U._translate(f, x, T, f);
      return {
        root: {
          viewBox: this.viewBox,
        },
        path: {
          'transform-origin': `${U.svgRound(e)} ${U.svgRound(i)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath(),
        },
      };
    }
    const y = (s - 2 * a) / (u - 2 * a); const S = (r - 2 * o) / (p - 2 * o); const v = -y * (h + a) + e + a; const
      _ = -S * (d + o) + i + o;
    if (y !== 1 || S !== 1 || v !== 0 || _ !== 0) {
      for (const {
        line: x,
        points: T,
      } of n(this, bi)) U._rescale(x, v, _, y, S, x), U._rescale(T, v, _, y, S, T);
    }
    return {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        'transform-origin': `${U.svgRound(e)} ${U.svgRound(i)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath(),
      },
    };
  }

  getPathTranslatedSVGProperties([e, i], s) {
    const [r, a] = s; const o = n(this, Oe); const l = e - o[0]; const
      h = i - o[1];
    if (n(this, Rs) === r && n(this, ks) === a) {
      for (const {
        line: d,
        points: u,
      } of n(this, bi)) U._translate(d, l, h, d), U._translate(u, l, h, u);
    } else {
      const d = n(this, Rs) / r; const
        u = n(this, ks) / a;
      g(this, Rs, r), g(this, ks, a);
      for (const {
        line: p,
        points: y,
      } of n(this, bi)) U._rescale(p, l, h, d, u, p), U._rescale(y, l, h, d, u, y);
      o[2] *= d, o[3] *= u;
    }
    return o[0] = e, o[1] = i, {
      root: {
        viewBox: this.viewBox,
      },
      path: {
        d: this.toSVGPath(),
        'transform-origin': `${U.svgRound(e)} ${U.svgRound(i)}`,
      },
    };
  }

  get defaultSVGProperties() {
    const e = n(this, Oe);
    return {
      root: {
        viewBox: this.viewBox,
      },
      rootClass: {
        draw: !0,
      },
      path: {
        d: this.toSVGPath(),
        'transform-origin': `${U.svgRound(e[0])} ${U.svgRound(e[1])}`,
        transform: this.rotationTransform || null,
      },
      bbox: e,
    };
  }
}
Oe = new WeakMap(), dd = new WeakMap(), ud = new WeakMap(), bi = new WeakMap(), Rs = new WeakMap(), ks = new WeakMap(), Hl = new WeakMap(), $l = new WeakMap(), Va = new WeakMap(), Ae = new WeakSet(), $s = function (e = n(this, Va)) {
  const i = n(this, ud) + e / 2 * n(this, Hl);
  return n(this, $l) % 180 === 0 ? [i / n(this, Rs), i / n(this, ks)] : [i / n(this, ks), i / n(this, Rs)];
}, sy = function () {
  const [e, i, s, r] = n(this, Oe); const
    [a, o] = w(this, Ae, $s).call(this, 0);
  return [e + a, i + o, s - 2 * a, r - 2 * o];
}, ny = function () {
  const e = g(this, Oe, new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]));
  for (const {
    line: r,
  } of n(this, bi)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6) G.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4]; let
      o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [d, u, p, y, S, v] = r.subarray(l, l + 6);
      G.bezierBoundingBox(a, o, d, u, p, y, S, v, e), a = S, o = v;
    }
  }
  const [i, s] = w(this, Ae, $s).call(this);
  e[0] = De(e[0] - i, 0, 1), e[1] = De(e[1] - s, 0, 1), e[2] = De(e[2] + i, 0, 1), e[3] = De(e[3] + s, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, ry = function (e) {
  const [i, s] = w(this, Ae, $s).call(this);
  g(this, Va, e);
  const [r, a] = w(this, Ae, $s).call(this); const [o, l] = [r - i, a - s]; const
    h = n(this, Oe);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class Yu extends ey {
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
    const t = new Yu(this._viewParameters);
    return t.updateAll(this), t;
  }
}
let Gu; let
  ay;
const bo = class bo extends Su {
  constructor(e) {
    super({
      ...e,
      name: 'inkEditor',
    });
    b(this, Gu);
    this._willKeepAspectRatio = !0, this.defaultL10nId = 'pdfjs-editor-ink-editor';
  }

  static initialize(e, i) {
    Ct.initialize(e, i), this._defaultDrawingOptions = new Yu(i.viewParameters);
  }

  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }

  static get supportMultipleDrawings() {
    return !0;
  }

  static get typesMap() {
    return Z(this, 'typesMap', /* @__PURE__ */ new Map([[it.INK_THICKNESS, 'stroke-width'], [it.INK_COLOR, 'stroke'], [it.INK_OPACITY, 'stroke-opacity']]));
  }

  static createDrawerInstance(e, i, s, r, a) {
    return new Z0(e, i, s, r, a, this._defaultDrawingOptions['stroke-width']);
  }

  static deserializeDraw(e, i, s, r, a, o) {
    return Ad.deserialize(e, i, s, r, a, o);
  }

  static async deserialize(e, i, s) {
    let r = null;
    if (e instanceof tg) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
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
        rect: l.slice(0),
        rotation: h,
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
    return this._colorPicker || (this._colorPicker = new wu(this)), [['colorPicker', this._colorPicker]];
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
    this._drawingOptions = bo.getDefaultDrawingOptions({
      stroke: G.makeHexColor(...e),
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
      l = Object.assign(super.serialize(e), {
        color: Ct._colorManager.convert(r),
        opacity: a,
        thickness: o,
        paths: {
          lines: i,
          points: s,
        },
      });
    return this.addComment(l), e ? (l.isCopy = !0, l) : this.annotationElementId && !w(this, Gu, ay).call(this, l) ? null : (l.id = this.annotationElementId, l);
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
Gu = new WeakSet(), ay = function (e) {
  const {
    color: i,
    thickness: s,
    opacity: r,
    pageIndex: a,
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== i[l]) || e.thickness !== s || e.opacity !== r || e.pageIndex !== a;
}, M(bo, '_type', 'ink'), M(bo, '_editorType', q.INK), M(bo, '_defaultDrawingOptions', null);
const _p = bo;
class Cp extends Ad {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith('Z') || (t += 'Z'), t;
  }
}
const Id = 8; const
  eh = 3;
let qa; let ct; let Tp; let Ji; let oy; let ly; let Pp; let ou; let hy; let cy; let dy; let Rp; let kp; let
  uy;
class Is {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: i,
    fontWeight: s,
  }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1); let
      d = h.getContext('2d', {
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
    h = new OffscreenCanvas(m, A), d = h.getContext('2d', {
      alpha: !0,
      willReadFrequently: !0,
    }), d.font = p, d.filter = 'grayscale(1)', d.fillStyle = 'white', d.fillRect(0, 0, m, A), d.fillStyle = 'black', d.fillText(t, m * (f - 1) / 2, A * (3 - f) / 2);
    const C = w(this, ct, Rp).call(this, d.getImageData(0, 0, m, A).data); const P = w(this, ct, dy).call(this, C); const R = w(this, ct, kp).call(this, P); const
      k = w(this, ct, Pp).call(this, C, m, A, R);
    return this.processDrawnLines({
      lines: {
        curves: k,
        width: m,
        height: A,
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0,
    });
  }

  static process(t, e, i, s, r) {
    const [a, o, l] = w(this, ct, uy).call(this, t); const [h, d] = w(this, ct, cy).call(this, a, o, l, Math.hypot(o, l) * n(this, qa).sigmaSFactor, n(this, qa).sigmaR, n(this, qa).kernelSize); const u = w(this, ct, kp).call(this, d); const
      p = w(this, ct, Pp).call(this, h, o, l, u);
    return this.processDrawnLines({
      lines: {
        curves: p,
        width: o,
        height: l,
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
      curves: l,
      width: h,
      height: d,
    } = t; const u = t.thickness ?? 0; const p = []; const y = Math.min(e / h, i / d); const S = y / e; const v = y / i; const
      _ = [];
    for (const {
      points: T,
    } of l) {
      const E = a ? w(this, ct, hy).call(this, T) : T;
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
      let [C, P, R, k] = E;
      C *= S, P *= v, R *= S, k *= v, m.set([C, P, R, k], 0), A.set([NaN, NaN, NaN, NaN, C, P], 0);
      for (let D = 4; D < f; D += 2) {
        const I = m[D] = E[D] * S; const
          O = m[D + 1] = E[D + 1] * v;
        A.set(U.createBezierPoints(C, P, R, k, I, O), (D - 2) * 3), [C, P, R, k] = [R, k, I, O];
      }
    }
    if (p.length === 0) return null;
    const x = o ? new Cp() : new Ad();
    return x.build(p, e, i, 1, s, o ? 0 : u, r), {
      outline: x,
      newCurves: _,
      areContours: o,
      thickness: u,
      width: h,
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
      l = 0;
    for (const E of t) {
      l += E.length;
      for (let f = 2, m = E.length; f < m; f++) {
        const A = E[f] - E[f - 2];
        a = Math.min(a, A), o = Math.max(o, A);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const d = t.length; const u = Id + eh * d; const
      p = new Uint32Array(u);
    let y = 0;
    p[y++] = u * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * d) * h.BYTES_PER_ELEMENT, p[y++] = 0, p[y++] = s, p[y++] = r, p[y++] = e ? 0 : 1, p[y++] = Math.max(0, Math.floor(i ?? 0)), p[y++] = d, p[y++] = h.BYTES_PER_ELEMENT;
    for (const E of t) p[y++] = E.length - 2, p[y++] = E[0], p[y++] = E[1];
    const S = new CompressionStream('deflate-raw'); const
      v = S.writable.getWriter();
    await v.ready, v.write(p);
    const _ = h.prototype.constructor;
    for (const E of t) {
      const f = new _(E.length - 2);
      for (let m = 2, A = E.length; m < A; m++) f[m - 2] = E[m] - E[m - 2];
      v.write(f);
    }
    v.close();
    const x = await new Response(S.readable).arrayBuffer(); const
      T = new Uint8Array(x);
    return lm(T);
  }

  static async decompressSignature(t) {
    try {
      const e = Sw(t); const {
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
      const l = new Uint32Array(a.buffer, 0, a.length >> 2); const
        h = l[1];
      if (h !== 0) throw new Error(`Invalid version: ${h}`);
      const d = l[2]; const u = l[3]; const p = l[4] === 0; const y = l[5]; const S = l[6]; const v = l[7]; const _ = []; const
        x = (Id + eh * S) * Uint32Array.BYTES_PER_ELEMENT;
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
        const f = l[eh * E + Id]; const
          m = new Float32Array(f + 2);
        _.push(m);
        for (let A = 0; A < eh - 1; A++) m[A] = l[eh * E + Id + A + 1];
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
qa = new WeakMap(), ct = new WeakSet(), Tp = function (t, e, i, s) {
  return i -= t, s -= e, i === 0 ? s > 0 ? 0 : 4 : i === 1 ? s + 6 : 2 - s;
}, Ji = new WeakMap(), oy = function (t, e, i, s, r, a, o) {
  const l = w(this, ct, Tp).call(this, i, s, r, a);
  for (let h = 0; h < 8; h++) {
    const d = (-h + l - o + 16) % 8; const u = n(this, Ji)[2 * d]; const
      p = n(this, Ji)[2 * d + 1];
    if (t[(i + u) * e + (s + p)] !== 0) return d;
  }
  return -1;
}, ly = function (t, e, i, s, r, a, o) {
  const l = w(this, ct, Tp).call(this, i, s, r, a);
  for (let h = 0; h < 8; h++) {
    const d = (h + l + o + 16) % 8; const u = n(this, Ji)[2 * d]; const
      p = n(this, Ji)[2 * d + 1];
    if (t[(i + u) * e + (s + p)] !== 0) return d;
  }
  return -1;
}, Pp = function (t, e, i, s) {
  const r = t.length; const
    a = new Int32Array(r);
  for (let d = 0; d < r; d++) a[d] = t[d] <= s ? 1 : 0;
  for (let d = 1; d < i - 1; d++) a[d * e] = a[d * e + e - 1] = 0;
  for (let d = 0; d < e; d++) a[d] = a[e * i - 1 - d] = 0;
  let o = 1; let
    l;
  const h = [];
  for (let d = 1; d < i - 1; d++) {
    l = 1;
    for (let u = 1; u < e - 1; u++) {
      const p = d * e + u; const
        y = a[p];
      if (y === 0) continue;
      let S = d; let
        v = u;
      if (y === 1 && a[p - 1] === 0) o += 1, v -= 1;
      else if (y >= 1 && a[p + 1] === 0) o += 1, v += 1, y > 1 && (l = y);
      else {
        y !== 1 && (l = Math.abs(y));
        continue;
      }
      const _ = [u, d]; const x = v === u + 1; const
        T = {
          isHole: x,
          points: _,
          id: o,
          parent: 0,
        };
      h.push(T);
      let E;
      for (const D of h) {
        if (D.id === l) {
          E = D;
          break;
        }
      }
      E ? E.isHole ? T.parent = x ? E.parent : l : T.parent = x ? l : E.parent : T.parent = x ? l : 0;
      const f = w(this, ct, oy).call(this, a, e, d, u, S, v, 0);
      if (f === -1) {
        a[p] = -o, a[p] !== 1 && (l = Math.abs(a[p]));
        continue;
      }
      let m = n(this, Ji)[2 * f]; let
        A = n(this, Ji)[2 * f + 1];
      const C = d + m; const
        P = u + A;
      S = C, v = P;
      let R = d; let
        k = u;
      for (; ;) {
        const D = w(this, ct, ly).call(this, a, e, R, k, S, v, 1);
        m = n(this, Ji)[2 * D], A = n(this, Ji)[2 * D + 1];
        const I = R + m; const
          O = k + A;
        _.push(O, I);
        const F = R * e + k;
        if (a[F + 1] === 0 ? a[F] = -o : a[F] === 1 && (a[F] = o), I === d && O === u && R === C && k === P) {
          a[p] !== 1 && (l = Math.abs(a[p]));
          break;
        } else S = R, v = k, R = I, k = O;
      }
    }
  }
  return h;
}, ou = function (t, e, i, s) {
  if (i - e <= 4) {
    for (let C = e; C < i - 2; C += 2) s.push(t[C], t[C + 1]);
    return;
  }
  const r = t[e]; const a = t[e + 1]; const o = t[i - 4] - r; const l = t[i - 3] - a; const h = Math.hypot(o, l); const d = o / h; const u = l / h; const p = d * a - u * r; const y = l / o; const S = 1 / h; const v = Math.atan(y); const _ = Math.cos(v); const x = Math.sin(v); const T = S * (Math.abs(_) + Math.abs(x)); const E = S * (1 - T + T ** 2); const
    f = Math.max(Math.atan(Math.abs(x + _) * E), Math.atan(Math.abs(x - _) * E));
  let m = 0; let
    A = e;
  for (let C = e + 2; C < i - 2; C += 2) {
    const P = Math.abs(p - d * t[C + 1] + u * t[C]);
    P > m && (A = C, m = P);
  }
  m > (h * f) ** 2 ? (w(this, ct, ou).call(this, t, e, A + 2, s), w(this, ct, ou).call(this, t, A, i, s)) : s.push(r, a);
}, hy = function (t) {
  const e = []; const
    i = t.length;
  return w(this, ct, ou).call(this, t, 0, i, e), e.push(t[i - 2], t[i - 1]), e.length <= 4 ? null : e;
}, cy = function (t, e, i, s, r, a) {
  const o = new Float32Array(a ** 2); const l = -2 * s ** 2; const
    h = a >> 1;
  for (let v = 0; v < a; v++) {
    const _ = (v - h) ** 2;
    for (let x = 0; x < a; x++) o[v * a + x] = Math.exp((_ + (x - h) ** 2) / l);
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
        const C = v + A - h;
        if (!(C < 0 || C >= i)) {
          for (let P = 0; P < a; P++) {
            const R = _ + P - h;
            if (R < 0 || R >= e) continue;
            const k = t[C * e + R]; const
              D = o[A * a + P] * d[Math.abs(k - T)];
            E += k * D, f += D;
          }
        }
      }
      const m = y[x] = Math.round(E / f);
      S[m]++;
    }
  }
  return [y, S];
}, dy = function (t) {
  const e = new Uint32Array(256);
  for (const i of t) e[i]++;
  return e;
}, Rp = function (t) {
  const e = t.length; const
    i = new Uint8ClampedArray(e >> 2);
  let s = -1 / 0; let
    r = 1 / 0;
  for (let o = 0, l = i.length; o < l; o++) {
    const h = i[o] = t[o << 2];
    s = Math.max(s, h), r = Math.min(r, h);
  }
  const a = 255 / (s - r);
  for (let o = 0, l = i.length; o < l; o++) i[o] = (i[o] - r) * a;
  return i;
}, kp = function (t) {
  let e; let i = -1 / 0; let
    s = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r; let
    o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > i && (e - a > s && (s = e - a, o = e - 1), i = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--) ;
  return e;
}, uy = function (t) {
  const e = t; const {
    width: i,
    height: s,
  } = t; const
    {
      maxDim: r,
    } = n(this, qa);
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
  const h = new OffscreenCanvas(a, o).getContext('2d', {
    willReadFrequently: !0,
  });
  h.fillStyle = 'white', h.fillRect(0, 0, a, o), h.filter = 'grayscale(1)', h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const d = h.getImageData(0, 0, a, o).data;
  return [w(this, ct, Rp).call(this, d), a, o];
}, b(Is, ct), b(Is, qa, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16,
}), b(Is, Ji, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class ig extends ey {
  constructor() {
    super(), super.updateProperties({
      fill: Ct._defaultLineColor,
      'stroke-width': 0,
    });
  }

  clone() {
    const t = new ig();
    return t.updateAll(this), t;
  }
}
class sg extends Yu {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: Ct._defaultLineColor,
      'stroke-width': 1,
    });
  }

  clone() {
    const t = new sg(this._viewParameters);
    return t.updateAll(this), t;
  }
}
let Ar; let Ds; let vr; let
  Xa;
const ei = class ei extends Su {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: 'signatureEditor',
    });
    b(this, Ar, !1);
    b(this, Ds, null);
    b(this, vr, null);
    b(this, Xa, null);
    this._willKeepAspectRatio = !0, g(this, vr, e.signatureData || null), g(this, Ds, null), this.defaultL10nId = 'pdfjs-editor-signature-editor1';
  }

  static initialize(e, i) {
    Ct.initialize(e, i), this._defaultDrawingOptions = new ig(), this._defaultDrawnSignatureOptions = new sg(i.viewParameters);
  }

  static getDefaultDrawingOptions(e) {
    const i = this._defaultDrawingOptions.clone();
    return i.updateProperties(e), i;
  }

  static get supportMultipleDrawings() {
    return !1;
  }

  static get typesMap() {
    return Z(this, 'typesMap', /* @__PURE__ */ new Map());
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
      if (n(this, vr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: h,
          heightInPage: d,
        } = n(this, vr); const {
          rawDims: {
            pageWidth: u,
            pageHeight: p,
          },
          rotation: y,
        } = this.parent.viewport; const
          S = Is.processDrawnLines({
            lines: r,
            pageWidth: u,
            pageHeight: p,
            rotation: y,
            innerMargin: ei._INNER_MARGIN,
            mustSmooth: a,
            areContours: o,
          });
        this.addSignature(S, d, l, h);
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
    g(this, Xa, e), this.addEditToolbar();
  }

  getUuid() {
    return n(this, Xa);
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
    } = n(this, vr); const o = Math.max(r, a); const
      l = Is.processDrawnLines({
        lines: {
          curves: e.map((h) => ({
            points: h,
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
      outline: l.outline,
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
        outline: l,
      } = g(this, vr, e);
    g(this, Ar, l instanceof Cp), this.description = s;
    let h;
    n(this, Ar) ? h = ei.getDefaultDrawingOptions() : (h = ei._defaultDrawnSignatureOptions.clone(), h.updateProperties({
      'stroke-width': l.thickness,
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: h,
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
    return Is.process(e, i, s, r, ei._INNER_MARGIN);
  }

  getFromText(e, i) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: r,
      },
      rotation: a,
    } = this.parent.viewport;
    return Is.extractContoursFromText(e, i, s, r, a, ei._INNER_MARGIN);
  }

  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: s,
      },
      rotation: r,
    } = this.parent.viewport;
    return Is.processDrawnLines({
      lines: e,
      pageWidth: i,
      pageHeight: s,
      rotation: r,
      innerMargin: ei._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1,
    });
  }

  createDrawingOptions({
    areContours: e,
    thickness: i,
  }) {
    e ? this._drawingOptions = ei.getDefaultDrawingOptions() : (this._drawingOptions = ei._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
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
        areContours: n(this, Ar),
        color: [0, 0, 0],
        thickness: n(this, Ar) ? 0 : r,
      });
    return this.addComment(a), e ? (a.paths = {
      lines: i,
      points: s,
    }, a.uuid = n(this, Xa), a.isCopy = !0) : a.lines = i, n(this, Ds) && (a.accessibilityData = {
      type: 'Figure',
      alt: n(this, Ds),
    }), a;
  }

  static deserializeDraw(e, i, s, r, a, o) {
    return o.areContours ? Cp.deserialize(e, i, s, r, a, o) : Ad.deserialize(e, i, s, r, a, o);
  }

  static async deserialize(e, i, s) {
    let a;
    const r = await super.deserialize(e, i, s);
    return g(r, Ar, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || '', g(r, Xa, e.uuid), r;
  }
};
Ar = new WeakMap(), Ds = new WeakMap(), vr = new WeakMap(), Xa = new WeakMap(), M(ei, '_type', 'signature'), M(ei, '_editorType', q.SIGNATURE), M(ei, '_defaultDrawingOptions', null);
const Dp = ei;
let Mt; let he; let Sr; let wn; let xr; let Ul; let An; let Ya; let Ms; let yi; let Gl; let ot; let Sh; let xh; let lu; let hu; let cu; let Lp; let du; let
  fy;
class Mp extends Ct {
  constructor(e) {
    super({
      ...e,
      name: 'stampEditor',
    });
    b(this, ot);
    b(this, Mt, null);
    b(this, he, null);
    b(this, Sr, null);
    b(this, wn, null);
    b(this, xr, null);
    b(this, Ul, '');
    b(this, An, null);
    b(this, Ya, !1);
    b(this, Ms, null);
    b(this, yi, !1);
    b(this, Gl, !1);
    g(this, wn, e.bitmapUrl), g(this, xr, e.bitmapFile), this.defaultL10nId = 'pdfjs-editor-stamp-editor';
  }

  static initialize(e, i) {
    Ct.initialize(e, i);
  }

  static isHandlingMimeForPasting(e) {
    return pu.includes(e);
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
      l = await s.guess({
        name: 'altText',
        request: {
          data: r,
          width: a,
          height: o,
          channels: r.length / (a * o),
        },
      });
    if (!l) throw new Error('No response from the AI service.');
    if (l.error) throw new Error('Error from the AI service.');
    if (l.cancel) return null;
    if (!l.output) throw new Error('No valid response from the AI service.');
    const h = l.output;
    return await this.setGuessedAltText(h), i && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1,
    }), h;
  }

  remove() {
    let e;
    n(this, he) && (g(this, Mt, null), this._uiManager.imageManager.deleteId(n(this, he)), (e = n(this, An)) == null || e.remove(), g(this, An, null), n(this, Ms) && (clearTimeout(n(this, Ms)), g(this, Ms, null))), super.remove();
  }

  rebuild() {
    if (!this.parent) {
      n(this, he) && w(this, ot, lu).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, he) && n(this, An) === null && w(this, ot, lu).call(this), this.isAttachedToDOM || this.parent.add(this));
  }

  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }

  isEmpty() {
    return !(n(this, Sr) || n(this, Mt) || n(this, wn) || n(this, xr) || n(this, he) || n(this, Ya));
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
    return this._isCopy && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, Ya) || (n(this, Mt) ? w(this, ot, hu).call(this) : w(this, ot, lu).call(this)), this._isCopy && this._moveAfterPaste(e, i), this._uiManager.addShouldRescale(this), this.div;
  }

  setCanvas(e, i) {
    const {
      id: s,
      bitmap: r,
    } = this._uiManager.imageManager.getFromCanvas(e, i);
    i.remove(), s && this._uiManager.imageManager.isValidId(s) && (g(this, he, s), r && g(this, Mt, r), g(this, Ya, !1), w(this, ot, hu).call(this));
  }

  _onResized() {
    this.onScaleChanging();
  }

  onScaleChanging() {
    if (!this.parent) return;
    n(this, Ms) !== null && clearTimeout(n(this, Ms)), g(this, Ms, setTimeout(() => {
      g(this, Ms, null), w(this, ot, Lp).call(this);
    }, 200));
  }

  copyCanvas(e, i, s = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a,
    } = n(this, Mt); const
      o = new ns();
    let l = n(this, Mt); let h = r; let d = a; let
      u = null;
    if (i) {
      if (r > i || a > i) {
        const C = Math.min(i / r, i / a);
        h = Math.floor(r * C), d = Math.floor(a * C);
      }
      u = document.createElement('canvas');
      const y = u.width = Math.ceil(h * o.sx); const
        S = u.height = Math.ceil(d * o.sy);
      n(this, yi) || (l = w(this, ot, cu).call(this, y, S));
      const v = u.getContext('2d');
      v.filter = this._uiManager.hcmFilter;
      let _ = 'white';
      let x = '#cfcfd8';
      this._uiManager.hcmFilter !== 'none' ? x = 'black' : _w.isDarkMode && (_ = '#8f8f9d', x = '#42414d');
      const T = 15; const E = T * o.sx; const f = T * o.sy; const m = new OffscreenCanvas(E * 2, f * 2); const
        A = m.getContext('2d');
      A.fillStyle = _, A.fillRect(0, 0, E * 2, f * 2), A.fillStyle = x, A.fillRect(0, 0, E, f), A.fillRect(E, f, E, f), v.fillStyle = v.createPattern(m, 'repeat'), v.fillRect(0, 0, y, S), v.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, S);
    }
    let p = null;
    if (s) {
      let y; let
        S;
      if (o.symmetric && l.width < e && l.height < e) y = l.width, S = l.height;
      else if (l = n(this, Mt), r > e || a > e) {
        const x = Math.min(e / r, e / a);
        y = Math.floor(r * x), S = Math.floor(a * x), n(this, yi) || (l = w(this, ot, cu).call(this, y, S));
      }
      const _ = new OffscreenCanvas(y, S).getContext('2d', {
        willReadFrequently: !0,
      });
      _.drawImage(l, 0, 0, l.width, l.height, 0, 0, y, S), p = {
        width: y,
        height: S,
        data: _.getImageData(0, 0, y, S).data,
      };
    }
    return {
      canvas: u,
      width: h,
      height: d,
      imageData: p,
    };
  }

  static async deserialize(e, i, s) {
    let _;
    let r = null; let
      a = !1;
    if (e instanceof Rb) {
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
        container: k,
        parent: {
          page: {
            pageNumber: D,
          },
        },
        canvas: I,
      } = e;
      let O; let
        F;
      I ? (delete e.canvas, {
        id: O,
        bitmap: F,
      } = s.imageManager.getFromCanvas(k.id, I), I.remove()) : (a = !0, e._hasNoCanvas = !0);
      const j = ((_ = await i._structTree.getAriaAttributes(`${jp}${E}`)) == null ? void 0 : _.get('aria-label')) || '';
      r = e = {
        annotationType: q.STAMP,
        bitmapId: O,
        bitmap: F,
        pageIndex: D - 1,
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
        rect: l,
        bitmap: h,
        bitmapUrl: d,
        bitmapId: u,
        isSvg: p,
        accessibilityData: y,
      } = e;
    a ? (s.addMissingCanvas(e.id, o), g(o, Ya, !0)) : u && s.imageManager.isValidId(u) ? (g(o, he, u), h && g(o, Mt, h)) : g(o, wn, d), g(o, yi, p);
    const [S, v] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / S, o.height = (l[3] - l[1]) / v, y && (o.altTextData = y), o._initialData = r, e.comment && o.setCommentData(e), g(o, Gl, !!r), o;
  }

  serialize(e = !1, i = null) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const s = Object.assign(super.serialize(e), {
      bitmapId: n(this, he),
      isSvg: n(this, yi),
    });
    if (this.addComment(s), e) return s.bitmapUrl = w(this, ot, du).call(this, !0), s.accessibilityData = this.serializeAltText(!0), s.isCopy = !0, s;
    const {
      decorative: r,
      altText: a,
    } = this.serializeAltText(!1);
    if (!r && a && (s.accessibilityData = {
      type: 'Figure',
      alt: a,
    }), this.annotationElementId) {
      const l = w(this, ot, fy).call(this, s);
      return l.isSame ? null : (l.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1, s.id = this.annotationElementId, delete s.bitmapId, s);
    }
    if (i === null) return s;
    i.stamps || (i.stamps = /* @__PURE__ */ new Map());
    const o = n(this, yi) ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
    if (!i.stamps.has(n(this, he))) {
      i.stamps.set(n(this, he), {
        area: o,
        serialized: s,
      }), s.bitmap = w(this, ot, du).call(this, !1);
    } else if (n(this, yi)) {
      const l = i.stamps.get(n(this, he));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = w(this, ot, du).call(this, !1));
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
Mt = new WeakMap(), he = new WeakMap(), Sr = new WeakMap(), wn = new WeakMap(), xr = new WeakMap(), Ul = new WeakMap(), An = new WeakMap(), Ya = new WeakMap(), Ms = new WeakMap(), yi = new WeakMap(), Gl = new WeakMap(), ot = new WeakSet(), Sh = function (e, i = !1) {
  if (!e) {
    this.remove();
    return;
  }
  g(this, Mt, e.bitmap), i || (g(this, he, e.id), g(this, yi, e.isSvg)), e.file && g(this, Ul, e.file.name), w(this, ot, hu).call(this);
}, xh = function () {
  if (g(this, Sr, null), this._uiManager.enableWaiting(!1), !!n(this, An)) {
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
}, lu = function () {
  if (n(this, he)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, he)).then((s) => w(this, ot, Sh).call(this, s, !0)).finally(() => w(this, ot, xh).call(this));
    return;
  }
  if (n(this, wn)) {
    const s = n(this, wn);
    g(this, wn, null), this._uiManager.enableWaiting(!0), g(this, Sr, this._uiManager.imageManager.getFromUrl(s).then((r) => w(this, ot, Sh).call(this, r)).finally(() => w(this, ot, xh).call(this)));
    return;
  }
  if (n(this, xr)) {
    const s = n(this, xr);
    g(this, xr, null), this._uiManager.enableWaiting(!0), g(this, Sr, this._uiManager.imageManager.getFromFile(s).then((r) => w(this, ot, Sh).call(this, r)).finally(() => w(this, ot, xh).call(this)));
    return;
  }
  const e = document.createElement('input');
  e.type = 'file', e.accept = pu.join(',');
  const i = this._uiManager._signal;
  g(this, Sr, new Promise((s) => {
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
        }), w(this, ot, Sh).call(this, r);
      }
      s();
    }, {
      signal: i,
    }), e.addEventListener('cancel', () => {
      this.remove(), s();
    }, {
      signal: i,
    });
  }).finally(() => w(this, ot, xh).call(this))), e.click();
}, hu = function () {
  let h;
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
  const l = g(this, An, document.createElement('canvas'));
  l.setAttribute('role', 'img'), this.addContainer(l), this.width = i / r, this.height = s / a, this.setDims(), (h = this._initialOptions) != null && h.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), w(this, ot, Lp).call(this), n(this, Gl) || (this.parent.addUndoableEditor(this), g(this, Gl, !0)), this._reportTelemetry({
    action: 'inserted_image',
  }), n(this, Ul) && this.div.setAttribute('aria-description', n(this, Ul)), this.annotationElementId || this._uiManager.a11yAlert('pdfjs-editor-stamp-added-alert');
}, cu = function (e, i) {
  const {
    width: s,
    height: r,
  } = n(this, Mt);
  let a = s; let o = r; let
    l = n(this, Mt);
  for (; a > 2 * e || o > 2 * i;) {
    const h = a; const
      d = o;
    a > 2 * e && (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)), o > 2 * i && (o = o >= 16384 ? Math.floor(o / 2) - 1 : Math.ceil(o / 2));
    const u = new OffscreenCanvas(a, o);
    u.getContext('2d').drawImage(l, 0, 0, h, d, 0, 0, a, o), l = u.transferToImageBitmap();
  }
  return l;
}, Lp = function () {
  const [e, i] = this.parentDimensions; const {
    width: s,
    height: r,
  } = this; const a = new ns(); const o = Math.ceil(s * e * a.sx); const l = Math.ceil(r * i * a.sy); const
    h = n(this, An);
  if (!h || h.width === o && h.height === l) return;
  h.width = o, h.height = l;
  const d = n(this, yi) ? n(this, Mt) : w(this, ot, cu).call(this, o, l); const
    u = h.getContext('2d');
  u.filter = this._uiManager.hcmFilter, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, o, l);
}, du = function (e) {
  if (e) {
    if (n(this, yi)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, he));
      if (r) return r;
    }
    const i = document.createElement('canvas');
    return {
      width: i.width,
      height: i.height,
    } = n(this, Mt), i.getContext('2d').drawImage(n(this, Mt), 0, 0), i.toDataURL();
  }
  if (n(this, yi)) {
    const [i, s] = this.pageDimensions; const r = Math.round(this.width * i * Pn.PDF_TO_CSS_UNITS); const a = Math.round(this.height * s * Pn.PDF_TO_CSS_UNITS); const
      o = new OffscreenCanvas(r, a);
    return o.getContext('2d').drawImage(n(this, Mt), 0, 0, n(this, Mt).width, n(this, Mt).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, Mt));
}, fy = function (e) {
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
}, M(Mp, '_type', 'stamp'), M(Mp, '_editorType', q.STAMP);
let Ka; let zl; let Er; let _r; let vn; let Ze; let Cr; let Wl; let jl; let Qi; let Sn; let ce; let xn; let Tr; let Vl; let W; let Pr; let xt; let Ip; let py; let hs; let Fp; let Np; let
  uu;
const Gi = class Gi {
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
    l10n: d,
  }) {
    b(this, xt);
    b(this, Ka);
    b(this, zl, !1);
    b(this, Er, null);
    b(this, _r, null);
    b(this, vn, null);
    b(this, Ze, /* @__PURE__ */ new Map());
    b(this, Cr, !1);
    b(this, Wl, !1);
    b(this, jl, !1);
    b(this, Qi, null);
    b(this, Sn, null);
    b(this, ce, null);
    b(this, xn, null);
    b(this, Tr, null);
    b(this, Vl, -1);
    b(this, W);
    const u = [...n(Gi, Pr).values()];
    if (!Gi._initialized) {
      Gi._initialized = !0;
      for (const p of u) p.initialize(d, t);
    }
    t.registerEditorTypes(u), g(this, W, t), this.pageIndex = e, this.div = i, g(this, Ka, r), g(this, Er, a), this.viewport = h, g(this, ce, l), this.drawLayer = o, this._structTree = s, n(this, W).addLayer(this);
  }

  get isEmpty() {
    return n(this, Ze).size === 0;
  }

  get isInvisible() {
    return this.isEmpty && n(this, W).getMode() === q.NONE;
  }

  updateToolbar(t) {
    n(this, W).updateToolbar(t);
  }

  updateMode(t = n(this, W).getMode()) {
    switch (w(this, xt, uu).call(this), t) {
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
      for (const i of n(Gi, Pr).values()) e.toggle(`${i._type}Editing`, t === i._editorType);
    }
    this.div.hidden = !1;
  }

  hasTextLayer(t) {
    let e;
    return t === ((e = n(this, ce)) == null ? void 0 : e.div);
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
    (e = n(this, Er)) == null || e.div.classList.toggle('disabled', !t);
  }

  async enable() {
    let i;
    g(this, jl, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle('nonEditing', !1), (i = n(this, Tr)) == null || i.abort(), g(this, Tr, null);
    const t = /* @__PURE__ */ new Set();
    for (const s of n(this, xt, Ip)) s.enableEditing(), s.show(!0), s.annotationElementId && (n(this, W).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
    const e = n(this, Er);
    if (e) {
      for (const s of e.getEditableAnnotations()) {
        if (s.hide(), n(this, W).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id)) continue;
        const r = await this.deserialize(s);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    }
    g(this, jl, !1), n(this, W)._eventBus.dispatch('editorsrendered', {
      source: this,
      pageNumber: this.pageIndex + 1,
    });
  }

  disable() {
    let i;
    if (g(this, Wl, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle('nonEditing', !0), n(this, ce) && !n(this, Tr)) {
      g(this, Tr, new AbortController());
      const s = n(this, W).combinedSignal(n(this, Tr));
      n(this, ce).div.addEventListener('pointerdown', (r) => {
        const {
          clientX: o,
          clientY: l,
          timeStamp: h,
        } = r; const
          d = n(this, Vl);
        if (h - d > 500) {
          g(this, Vl, h);
          return;
        }
        g(this, Vl, -1);
        const {
          classList: u,
        } = this.div;
        u.toggle('getElements', !0);
        const p = document.elementsFromPoint(o, l);
        if (u.toggle('getElements', !1), !this.div.contains(p[0])) return;
        let y;
        const S = new RegExp(`^${Ch}[0-9]+$`);
        for (const _ of p) {
          if (S.test(_.id)) {
            y = _.id;
            break;
          }
        }
        if (!y) return;
        const v = n(this, Ze).get(y);
        (v == null ? void 0 : v.annotationElementId) === null && (r.stopPropagation(), r.preventDefault(), v.dblclick(r));
      }, {
        signal: s,
        capture: !0,
      });
    }
    const t = n(this, Er);
    if (t) {
      const s = /* @__PURE__ */ new Map(); const
        r = /* @__PURE__ */ new Map();
      for (const o of n(this, xt, Ip)) {
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
          id: l,
        } = o.data;
        if (n(this, W).isDeletedAnnotationElement(l)) {
          o.updateEdited({
            deleted: !0,
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
    w(this, xt, uu).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: e,
    } = this.div;
    for (const s of n(Gi, Pr).values()) e.remove(`${s._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), g(this, Wl, !1);
  }

  getEditableAnnotation(t) {
    let e;
    return ((e = n(this, Er)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }

  setActiveEditor(t) {
    n(this, W).getActive() !== t && n(this, W).setActiveEditor(t);
  }

  enableTextSelection() {
    let t;
    if (this.div.tabIndex = -1, (t = n(this, ce)) != null && t.div && !n(this, xn)) {
      g(this, xn, new AbortController());
      const e = n(this, W).combinedSignal(n(this, xn));
      n(this, ce).div.addEventListener('pointerdown', w(this, xt, py).bind(this), {
        signal: e,
      }), n(this, ce).div.classList.add('highlighting');
    }
  }

  disableTextSelection() {
    let t;
    this.div.tabIndex = 0, (t = n(this, ce)) != null && t.div && n(this, xn) && (n(this, xn).abort(), g(this, xn, null), n(this, ce).div.classList.remove('highlighting'));
  }

  enableClick() {
    if (n(this, _r)) return;
    g(this, _r, new AbortController());
    const t = n(this, W).combinedSignal(n(this, _r));
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
    (t = n(this, _r)) == null || t.abort(), g(this, _r, null);
  }

  attach(t) {
    n(this, Ze).set(t.id, t);
    const {
      annotationElementId: e,
    } = t;
    e && n(this, W).isDeletedAnnotationElement(e) && n(this, W).removeDeletedAnnotationElement(t);
  }

  detach(t) {
    let e;
    n(this, Ze).delete(t.id), (e = n(this, Ka)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Wl) && t.annotationElementId && n(this, W).addDeletedAnnotationElement(t);
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
      t.fixAndSetPosition(), t.onceAdded(!n(this, jl)), n(this, W).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }

  moveEditorInDOM(t) {
    let i;
    if (!t.isAttachedToDOM) return;
    const {
      activeElement: e,
    } = document;
    t.div.contains(e) && !n(this, vn) && (t._focusEventsAllowed = !1, g(this, vn, setTimeout(() => {
      g(this, vn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener('focusin', () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, W)._signal,
      }), e.focus());
    }, 0))), t._structTreeParentId = (i = n(this, Ka)) == null ? void 0 : i.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
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
    for (const e of n(this, Ze).values()) if (e.uid === t) return e;
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
    return (t = n(this, xt, hs)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }

  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, W).updateMode(t.mode);
    const {
      offsetX: i,
      offsetY: s,
    } = w(this, xt, Np).call(this); const r = this.getNextId(); const
      a = w(this, xt, Fp).call(this, {
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
    return await ((e = n(Gi, Pr).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, W))) || null;
  }

  createAndAddNewEditor(t, e, i = {}) {
    const s = this.getNextId(); const
      r = w(this, xt, Fp).call(this, {
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
    this.createAndAddNewEditor(w(this, xt, Np).call(this), !0, t);
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
    } = de.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, Cr) || (g(this, Cr, !1), (s = n(this, xt, hs)) != null && s.isDrawer && n(this, xt, hs).supportMultipleDrawings)) return;
    if (!n(this, zl)) {
      g(this, zl, !0);
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
    if (n(this, W).getMode() === q.HIGHLIGHT && this.enableTextSelection(), n(this, Cr)) {
      g(this, Cr, !1);
      return;
    }
    const {
      isMac: e,
    } = de.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
    if (g(this, Cr, !0), (s = n(this, xt, hs)) != null && s.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const i = n(this, W).getActive();
    g(this, zl, !i || i.isEmpty());
  }

  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0,
    }), n(this, Qi)) {
      n(this, xt, hs).startDrawing(this, n(this, W), !1, t);
      return;
    }
    n(this, W).setCurrentDrawingSession(this), g(this, Qi, new AbortController());
    const e = n(this, W).combinedSignal(n(this, Qi));
    this.div.addEventListener('blur', ({
      relatedTarget: i,
    }) => {
      i && !this.div.contains(i) && (g(this, Sn, null), this.commitOrRemove());
    }, {
      signal: e,
    }), n(this, xt, hs).startDrawing(this, n(this, W), !1, t);
  }

  pause(t) {
    if (t) {
      const {
        activeElement: e,
      } = document;
      this.div.contains(e) && g(this, Sn, e);
      return;
    }
    n(this, Sn) && setTimeout(() => {
      let e;
      (e = n(this, Sn)) == null || e.focus(), g(this, Sn, null);
    }, 0);
  }

  endDrawingSession(t = !1) {
    return n(this, Qi) ? (n(this, W).setCurrentDrawingSession(null), n(this, Qi).abort(), g(this, Qi, null), g(this, Sn, null), n(this, xt, hs).endDrawing(t)) : null;
  }

  findNewParent(t, e, i) {
    const s = n(this, W).findParent(e, i);
    return s === null || s === this ? !1 : (s.changeParent(t), !0);
  }

  commitOrRemove() {
    return n(this, Qi) ? (this.endDrawingSession(), !0) : !1;
  }

  onScaleChanging() {
    n(this, Qi) && n(this, xt, hs).onScaleChangingWhenDrawing(this);
  }

  destroy() {
    let t; let
      e;
    this.commitOrRemove(), ((t = n(this, W).getActive()) == null ? void 0 : t.parent) === this && (n(this, W).commitOrRemove(), n(this, W).setActiveEditor(null)), n(this, vn) && (clearTimeout(n(this, vn)), g(this, vn, null));
    for (const i of n(this, Ze).values()) (e = n(this, Ka)) == null || e.removePointerInTextLayer(i.contentDiv), i.setParent(null), i.isAttachedToDOM = !1, i.div.remove();
    this.div = null, n(this, Ze).clear(), n(this, W).removeLayer(this);
  }

  render({
    viewport: t,
  }) {
    this.viewport = t, Rr(this.div, t);
    for (const e of n(this, W).getEditors(this.pageIndex)) this.add(e), e.rebuild();
    this.updateMode();
  }

  update({
    viewport: t,
  }) {
    n(this, W).commitOrRemove(), w(this, xt, uu).call(this);
    const e = this.viewport.rotation; const
      i = t.rotation;
    if (this.viewport = t, Rr(this.div, {
      rotation: i,
    }), e !== i) for (const s of n(this, Ze).values()) s.rotate(i);
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
Ka = new WeakMap(), zl = new WeakMap(), Er = new WeakMap(), _r = new WeakMap(), vn = new WeakMap(), Ze = new WeakMap(), Cr = new WeakMap(), Wl = new WeakMap(), jl = new WeakMap(), Qi = new WeakMap(), Sn = new WeakMap(), ce = new WeakMap(), xn = new WeakMap(), Tr = new WeakMap(), Vl = new WeakMap(), W = new WeakMap(), Pr = new WeakMap(), xt = new WeakSet(), Ip = function () {
  return n(this, Ze).size !== 0 ? n(this, Ze).values() : n(this, W).getEditors(this.pageIndex);
}, py = function (t) {
  n(this, W).unselectAll();
  const {
    target: e,
  } = t;
  if (e === n(this, ce).div || (e.getAttribute('role') === 'img' || e.classList.contains('endOfContent')) && n(this, ce).div.contains(e)) {
    const {
      isMac: i,
    } = de.platform;
    if (t.button !== 0 || t.ctrlKey && i) return;
    n(this, W).showAllEditors('highlight', !0, !0), n(this, ce).div.classList.add('free'), this.toggleDrawing(), vu.startHighlighting(this, n(this, W).direction === 'ltr', {
      target: n(this, ce).div,
      x: t.x,
      y: t.y,
    }), n(this, ce).div.addEventListener('pointerup', () => {
      n(this, ce).div.classList.remove('free'), this.toggleDrawing(!0);
    }, {
      once: !0,
      signal: n(this, W)._signal,
    }), t.preventDefault();
  }
}, hs = function () {
  return n(Gi, Pr).get(n(this, W).getMode());
}, Fp = function (t) {
  const e = n(this, xt, hs);
  return e ? new e.prototype.constructor(t) : null;
}, Np = function () {
  const {
    x: t,
    y: e,
    width: i,
    height: s,
  } = this.boundingClientRect; const r = Math.max(0, t); const a = Math.max(0, e); const o = Math.min(window.innerWidth, t + i); const l = Math.min(window.innerHeight, e + s); const h = (r + o) / 2 - t; const d = (a + l) / 2 - e; const
    [u, p] = this.viewport.rotation % 180 === 0 ? [h, d] : [d, h];
  return {
    offsetX: u,
    offsetY: p,
  };
}, uu = function () {
  for (const t of n(this, Ze).values()) t.isEmpty() && t.remove();
}, M(Gi, '_initialized', !1), b(Gi, Pr, new Map([gp, _p, Mp, vu, Dp].map((t) => [t._editorType, t])));
const xu = Gi;
let ts; let Be; let Za; let fd; let zu; let gy; let Ns; let Op; let my; let
  Bp;
const Jt = class Jt {
  constructor({
    pageIndex: t,
  }) {
    b(this, Ns);
    b(this, ts, null);
    b(this, Be, /* @__PURE__ */ new Map());
    b(this, Za, /* @__PURE__ */ new Map());
    this.pageIndex = t;
  }

  setParent(t) {
    if (!n(this, ts)) {
      g(this, ts, t);
      return;
    }
    if (n(this, ts) !== t) {
      if (n(this, Be).size > 0) for (const e of n(this, Be).values()) e.remove(), t.append(e);
      g(this, ts, t);
    }
  }

  static get _svgFactory() {
    return Z(this, '_svgFactory', new Lh());
  }

  draw(t, e = !1, i = !1) {
    const s = Zt(Jt, fd)._++; const r = w(this, Ns, Op).call(this); const
      a = Jt._svgFactory.createElement('defs');
    r.append(a);
    const o = Jt._svgFactory.createElement('path');
    a.append(o);
    const l = `path_p${this.pageIndex}_${s}`;
    o.setAttribute('id', l), o.setAttribute('vector-effect', 'non-scaling-stroke'), e && n(this, Za).set(s, o);
    const h = i ? w(this, Ns, my).call(this, a, l) : null; const
      d = Jt._svgFactory.createElement('use');
    return r.append(d), d.setAttribute('href', `#${l}`), this.updateProperties(r, t), n(this, Be).set(s, r), {
      id: s,
      clipPathId: `url(#${h})`,
    };
  }

  drawOutline(t, e) {
    const i = Zt(Jt, fd)._++; const s = w(this, Ns, Op).call(this); const
      r = Jt._svgFactory.createElement('defs');
    s.append(r);
    const a = Jt._svgFactory.createElement('path');
    r.append(a);
    const o = `path_p${this.pageIndex}_${i}`;
    a.setAttribute('id', o), a.setAttribute('vector-effect', 'non-scaling-stroke');
    let l;
    if (e) {
      const u = Jt._svgFactory.createElement('mask');
      r.append(u), l = `mask_p${this.pageIndex}_${i}`, u.setAttribute('id', l), u.setAttribute('maskUnits', 'objectBoundingBox');
      const p = Jt._svgFactory.createElement('rect');
      u.append(p), p.setAttribute('width', '1'), p.setAttribute('height', '1'), p.setAttribute('fill', 'white');
      const y = Jt._svgFactory.createElement('use');
      u.append(y), y.setAttribute('href', `#${o}`), y.setAttribute('stroke', 'none'), y.setAttribute('fill', 'black'), y.setAttribute('fill-rule', 'nonzero'), y.classList.add('mask');
    }
    const h = Jt._svgFactory.createElement('use');
    s.append(h), h.setAttribute('href', `#${o}`), l && h.setAttribute('mask', `url(#${l})`);
    const d = h.cloneNode();
    return s.append(d), h.classList.add('mainOutline'), d.classList.add('secondaryOutline'), this.updateProperties(s, t), n(this, Be).set(i, s), i;
  }

  finalizeDraw(t, e) {
    n(this, Za).delete(t), this.updateProperties(t, e);
  }

  updateProperties(t, e) {
    let l;
    if (!e) return;
    const {
      root: i,
      bbox: s,
      rootClass: r,
      path: a,
    } = e; const
      o = typeof t === 'number' ? n(this, Be).get(t) : t;
    if (o) {
      if (i && w(this, Ns, Bp).call(this, o, i), s && w(l = Jt, zu, gy).call(l, o, s), r) {
        const {
          classList: h,
        } = o;
        for (const [d, u] of Object.entries(r)) h.toggle(d, u);
      }
      if (a) {
        const d = o.firstChild.firstChild;
        w(this, Ns, Bp).call(this, d, a);
      }
    }
  }

  updateParent(t, e) {
    if (e === this) return;
    const i = n(this, Be).get(t);
    i && (n(e, ts).append(i), n(this, Be).delete(t), n(e, Be).set(t, i));
  }

  remove(t) {
    n(this, Za).delete(t), n(this, ts) !== null && (n(this, Be).get(t).remove(), n(this, Be).delete(t));
  }

  destroy() {
    g(this, ts, null);
    for (const t of n(this, Be).values()) t.remove();
    n(this, Be).clear(), n(this, Za).clear();
  }
};
ts = new WeakMap(), Be = new WeakMap(), Za = new WeakMap(), fd = new WeakMap(), zu = new WeakSet(), gy = function (t, [e, i, s, r]) {
  const {
    style: a,
  } = t;
  a.top = `${100 * i}%`, a.left = `${100 * e}%`, a.width = `${100 * s}%`, a.height = `${100 * r}%`;
}, Ns = new WeakSet(), Op = function () {
  const t = Jt._svgFactory.create(1, 1, !0);
  return n(this, ts).append(t), t.setAttribute('aria-hidden', !0), t;
}, my = function (t, e) {
  const i = Jt._svgFactory.createElement('clipPath');
  t.append(i);
  const s = `clip_${e}`;
  i.setAttribute('id', s), i.setAttribute('clipPathUnits', 'objectBoundingBox');
  const r = Jt._svgFactory.createElement('use');
  return i.append(r), r.setAttribute('href', `#${e}`), r.classList.add('clip'), s;
}, Bp = function (t, e) {
  for (const [i, s] of Object.entries(e)) s === null ? t.removeAttribute(i) : t.setAttribute(i, s);
}, b(Jt, zu), b(Jt, fd, 0);
const Eu = Jt;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: bp,
};
globalThis.pdfjsLib = {
  AbortException: Tn,
  AnnotationEditorLayer: xu,
  AnnotationEditorParamsType: it,
  AnnotationEditorType: q,
  AnnotationEditorUIManager: kr,
  AnnotationLayer: eg,
  AnnotationMode: Ls,
  AnnotationType: zt,
  applyOpacity: fm,
  build: bb,
  ColorPicker: Mh,
  createValidAbsoluteUrl: Gp,
  CSSConstants: um,
  DOMSVGFactory: Lh,
  DrawLayer: Eu,
  FeatureTest: de,
  fetchData: Kl,
  findContrastColor: pm,
  getDocument: Zp,
  getFilenameFromUrl: hm,
  getPdfFilenameFromUrl: cm,
  getRGB: Zl,
  getUuid: Wp,
  getXfaPageViewport: dm,
  GlobalWorkerOptions: es,
  ImageKind: _h,
  InvalidPDFException: fu,
  isDataScheme: bd,
  isPdfFile: qu,
  isValidExplicitDest: qm,
  MathClamp: De,
  noContextMenu: xi,
  normalizeUnicode: om,
  OPS: ql,
  OutputScale: ns,
  PasswordResponses: rm,
  PDFDataRangeTransport: Jp,
  PDFDateString: Rh,
  PDFWorker: Xl,
  PermissionFlag: nm,
  PixelsPerInch: Pn,
  RenderingCancelledException: Vu,
  renderRichText: qp,
  ResponseException: Th,
  setLayerDimensions: Rr,
  shadow: Z,
  SignatureExtractor: Is,
  stopEvent: Nt,
  SupportedImageMimeTypes: pu,
  TextLayer: Dh,
  TouchManager: kh,
  updateUrlHash: zp,
  Util: G,
  VerbosityLevel: pd,
  version: mb,
  XfaLayer: Vp,
};
const by = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: Tn,
  AnnotationEditorLayer: xu,
  AnnotationEditorParamsType: it,
  AnnotationEditorType: q,
  AnnotationEditorUIManager: kr,
  AnnotationLayer: eg,
  AnnotationMode: Ls,
  AnnotationType: zt,
  CSSConstants: um,
  ColorPicker: Mh,
  DOMSVGFactory: Lh,
  DrawLayer: Eu,
  FeatureTest: de,
  GlobalWorkerOptions: es,
  ImageKind: _h,
  InvalidPDFException: fu,
  MathClamp: De,
  OPS: ql,
  OutputScale: ns,
  PDFDataRangeTransport: Jp,
  PDFDateString: Rh,
  PDFWorker: Xl,
  PasswordResponses: rm,
  PermissionFlag: nm,
  PixelsPerInch: Pn,
  RenderingCancelledException: Vu,
  ResponseException: Th,
  SignatureExtractor: Is,
  SupportedImageMimeTypes: pu,
  TextLayer: Dh,
  TouchManager: kh,
  Util: G,
  VerbosityLevel: pd,
  XfaLayer: Vp,
  applyOpacity: fm,
  build: bb,
  createValidAbsoluteUrl: Gp,
  fetchData: Kl,
  findContrastColor: pm,
  getDocument: Zp,
  getFilenameFromUrl: hm,
  getPdfFilenameFromUrl: cm,
  getRGB: Zl,
  getUuid: Wp,
  getXfaPageViewport: dm,
  isDataScheme: bd,
  isPdfFile: qu,
  isValidExplicitDest: qm,
  noContextMenu: xi,
  normalizeUnicode: om,
  renderRichText: qp,
  setLayerDimensions: Rr,
  shadow: Z,
  stopEvent: Nt,
  updateUrlHash: zp,
  version: mb,
}, Symbol.toStringTag, { value: 'Module' }));
function yy(c) {
  let t; let e; let
    i = '';
  if (typeof c === 'string' || typeof c === 'number') i += c;
  else if (typeof c === 'object') {
    if (Array.isArray(c)) {
      const s = c.length;
      for (t = 0; t < s; t++) c[t] && (e = yy(c[t])) && (i && (i += ' '), i += e);
    } else for (e in c) c[e] && (i && (i += ' '), i += e);
  }
  return i;
}
function Ku() {
  for (var c, t, e = 0, i = '', s = arguments.length; e < s; e++) (c = arguments[e]) && (t = yy(c)) && (i && (i += ' '), i += t);
  return i;
}
const Ug = Object.prototype.hasOwnProperty;
function Gg(c, t, e) {
  for (e of c.keys()) if (wo(e, t)) return e;
}
function wo(c, t) {
  let e; let i; let
    s;
  if (c === t) return !0;
  if (c && t && (e = c.constructor) === t.constructor) {
    if (e === Date) return c.getTime() === t.getTime();
    if (e === RegExp) return c.toString() === t.toString();
    if (e === Array) {
      if ((i = c.length) === t.length) for (; i-- && wo(c[i], t[i]);) ;
      return i === -1;
    }
    if (e === Set) {
      if (c.size !== t.size) return !1;
      for (i of c) if (s = i, s && typeof s === 'object' && (s = Gg(t, s), !s) || !t.has(s)) return !1;
      return !0;
    }
    if (e === Map) {
      if (c.size !== t.size) return !1;
      for (i of c) if (s = i[0], s && typeof s === 'object' && (s = Gg(t, s), !s) || !wo(i[1], t.get(s))) return !1;
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
      for (e in c) if (Ug.call(c, e) && ++i && !Ug.call(t, e) || !(e in t) || !wo(c[e], t[e])) return !1;
      return Object.keys(t).length === i;
    }
  }
  return c !== c && t !== t;
}
function vd(c) {
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
const J0 = ['onCopy', 'onCut', 'onPaste']; const Q0 = [
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
]; const tA = ['onFocus', 'onBlur']; const eA = ['onInput', 'onInvalid', 'onReset', 'onSubmit']; const iA = ['onLoad', 'onError']; const sA = ['onKeyDown', 'onKeyPress', 'onKeyUp']; const nA = [
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
]; const rA = [
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
]; const aA = [
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
]; const oA = ['onSelect']; const lA = ['onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart']; const hA = [
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
]; const cA = ['onScroll']; const dA = ['onWheel']; const uA = [
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
]; const fA = ['onTransitionEnd']; const pA = ['onToggle']; const gA = ['onChange']; const
  mA = [
    ...J0,
    ...Q0,
    ...tA,
    ...eA,
    ...iA,
    ...sA,
    ...nA,
    ...rA,
    ...aA,
    ...oA,
    ...lA,
    ...hA,
    ...cA,
    ...dA,
    ...uA,
    ...fA,
    ...gA,
    ...pA,
  ];
function wy(c, t) {
  const e = {};
  for (const i of mA) {
    const s = c[i];
    s && (t ? e[i] = ((r) => s(r, t(i))) : e[i] = s);
  }
  return e;
}
const bA = process.env.NODE_ENV === 'production';
const df = 'Invariant failed';
function St(c, t) {
  if (!c) {
    if (bA) throw new Error(df);
    const e = typeof t === 'function' ? t() : t; const
      i = e ? ''.concat(df, ': ').concat(e) : df;
    throw new Error(i);
  }
}
function yA(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c;
}
let uf; let
  zg;
function wA() {
  if (zg) return uf;
  zg = 1;
  const c = process.env.NODE_ENV !== 'production';
  let t = function () {
  };
  if (c) {
    const e = function (s, r) {
      const a = arguments.length;
      r = new Array(a > 1 ? a - 1 : 0);
      for (let o = 1; o < a; o++) r[o - 1] = arguments[o];
      let l = 0; const
        h = `Warning: ${s.replace(/%s/g, () => r[l++])}`;
      typeof console < 'u' && console.error(h);
      try {
        throw new Error(h);
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
  return uf = t, uf;
}
const AA = wA();
const Me = /* @__PURE__ */ yA(AA); const Ay = Qg(null); const
  vA = 'noopener noreferrer nofollow';
class SA {
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
    return St(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber || 0;
  }

  set page(t) {
    St(this.pdfViewer, 'PDF viewer is not initialized.'), this.pdfViewer.currentPageNumber = t;
  }

  get rotation() {
    return 0;
  }

  set rotation(t) {
  }

  addLinkAttributes(t, e, i) {
    t.href = e, t.rel = this.externalLinkRel || vA, t.target = i ? '_blank' : this.externalLinkTarget || '';
  }

  goToDestination(t) {
    return new Promise((e) => {
      St(this.pdfDocument, 'PDF document not loaded.'), St(t, 'Destination is not specified.'), typeof t === 'string' ? this.pdfDocument.getDestination(t).then(e) : Array.isArray(t) ? e(t) : t.then(e);
    }).then((e) => {
      St(Array.isArray(e), `"${e}" is not a valid destination array.`);
      const i = e[0];
      new Promise((s) => {
        St(this.pdfDocument, 'PDF document not loaded.'), i instanceof Object ? this.pdfDocument.getPageIndex(i).then((r) => {
          s(r);
        }).catch(() => {
          St(!1, `"${i}" is not a valid page reference.`);
        }) : typeof i === 'number' ? s(i) : St(!1, `"${i}" is not a valid destination reference.`);
      }).then((s) => {
        const r = s + 1;
        St(this.pdfViewer, 'PDF viewer is not initialized.'), St(r >= 1 && r <= this.pagesCount, `"${r}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: e,
          pageIndex: s,
          pageNumber: r,
        });
      });
    });
  }

  goToPage(t) {
    const e = t - 1;
    St(this.pdfViewer, 'PDF viewer is not initialized.'), St(t >= 1 && t <= this.pagesCount, `"${t}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
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
function Ao({ children: c, type: t }) {
  return L('div', { className: `react-pdf__message react-pdf__message--${t}`, children: c });
}
const Hp = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2,
};
function xA(c, t) {
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
function Yl() {
  return Wy(xA, { value: void 0, error: void 0 });
}
const Zu = typeof window < 'u';
const vy = Zu && window.location.protocol === 'file:';
function EA(c) {
  return typeof c < 'u';
}
function Lr(c) {
  return EA(c) && c !== null;
}
function _A(c) {
  return typeof c === 'string';
}
function CA(c) {
  return c instanceof ArrayBuffer;
}
function TA(c) {
  return St(Zu, 'isBlob can only be used in a browser environment'), c instanceof Blob;
}
function $p(c) {
  return _A(c) && /^data:/.test(c);
}
function Wg(c) {
  St($p(c), 'Invalid data URI.');
  const [t = '', e = ''] = c.split(',');
  return t.split(';').indexOf('base64') !== -1 ? atob(e) : unescape(e);
}
function PA() {
  return Zu && window.devicePixelRatio || 1;
}
const Sy = 'On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.';
function jg() {
  Me(!vy, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${Sy}`);
}
function RA() {
  Me(!vy, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${Sy}`);
}
function Qa(c) {
  c != null && c.cancel && c.cancel();
}
function Up(c, t) {
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
function xy(c) {
  return c.name === 'AbortException' || c.name === 'RenderingCancelledException';
}
function kA(c) {
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
const { PDFDataRangeTransport: DA } = by; const
  MA = (c, t) => {
    switch (t) {
      case Hp.NEED_PASSWORD: {
        const e = prompt('Enter the password to open this PDF file.');
        c(e);
        break;
      }
      case Hp.INCORRECT_PASSWORD: {
        const e = prompt('Invalid password. Please try again.');
        c(e);
        break;
      }
    }
  };
function Vg(c) {
  return typeof c === 'object' && c !== null && ('data' in c || 'range' in c || 'url' in c);
}
const LA = Jg(({
  children: t, className: e, error: i = 'Failed to load PDF file.', externalLinkRel: s, externalLinkTarget: r, file: a, inputRef: o, imageResourcesPath: l, loading: h = 'Loading PDF…', noData: d = 'No PDF file specified.', onItemClick: u, onLoadError: p, onLoadProgress: y, onLoadSuccess: S, onPassword: v = MA, onSourceError: _, onSourceSuccess: x, options: T, renderMode: E, rotate: f, scale: m, ...A
}, C) => {
  const [P, R] = Yl(); const { value: k, error: D } = P; const [I, O] = Yl(); const { value: F, error: j } = I; const H = $e(new SA()); const B = $e([]); const tt = $e(void 0); const
    st = $e(void 0);
  a && a !== tt.current && Vg(a) && (Me(!wo(a, tt.current), 'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.'), tt.current = a), T && T !== st.current && (Me(!wo(T, st.current), 'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.'), st.current = T);
  const ie = $e({
    // Handling jumping to internal links target
    scrollPageIntoView: (Rt) => {
      const { dest: Kt, pageNumber: Lt, pageIndex: xe = Lt - 1 } = Rt;
      if (u) {
        u({ dest: Kt, pageIndex: xe, pageNumber: Lt });
        return;
      }
      const ti = B.current[xe];
      if (ti) {
        ti.scrollIntoView();
        return;
      }
      Me(!1, `An internal link leading to page ${Lt} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    },
  });
  tm(C, () => ({
    linkService: H,
    pages: B,
    viewer: ie,
  }), []);
  function Qe() {
    x && x();
  }
  function rt() {
    D && (Me(!1, D.toString()), _ && _(D));
  }
  function lt() {
    R({ type: 'RESET' });
  }
  bt(lt, [a, R]);
  const se = Fs(async () => {
    if (!a) return null;
    if (typeof a === 'string') return $p(a) ? { data: Wg(a) } : (jg(), { url: a });
    if (a instanceof DA) return { range: a };
    if (CA(a)) return { data: a };
    if (Zu && TA(a)) return { data: await kA(a) };
    if (St(typeof a === 'object', 'Invalid parameter in file, need either Uint8Array, string or a parameter object'), St(Vg(a), 'Invalid parameter object: need either .data, .range or .url'), 'url' in a && typeof a.url === 'string') {
      if ($p(a.url)) {
        const { url: Rt, ...Kt } = a;
        return { data: Wg(Rt), ...Kt };
      }
      jg();
    }
    return a;
  }, [a]);
  bt(() => {
    const Rt = vd(se());
    return Rt.promise.then((Kt) => {
      R({ type: 'RESOLVE', value: Kt });
    }).catch((Kt) => {
      R({ type: 'REJECT', error: Kt });
    }), () => {
      Qa(Rt);
    };
  }, [se, R]), bt(() => {
    if (!(typeof k > 'u')) {
      if (k === !1) {
        rt();
        return;
      }
      Qe();
    }
  }, [k]);
  function ue() {
    F && (S && S(F), B.current = new Array(F.numPages), H.current.setDocument(F));
  }
  function Se() {
    j && (Me(!1, j.toString()), p && p(j));
  }
  bt(() => {
    O({ type: 'RESET' });
  }, [O, k]), bt(() => {
    if (!k) return;
    const Kt = T ? { ...k, ...T } : k; const
      Lt = Zp(Kt);
    y && (Lt.onProgress = y), v && (Lt.onPassword = v);
    const xe = Lt;
    return xe.promise.then((ti) => {
      xe.destroyed || O({ type: 'RESOLVE', value: ti });
    }).catch((ti) => {
      xe.destroyed || O({ type: 'REJECT', error: ti });
    }), () => {
      xe.destroy();
    };
  }, [T, O, k]), bt(() => {
    if (!(typeof F > 'u')) {
      if (F === !1) {
        Se();
        return;
      }
      ue();
    }
  }, [F]), bt(() => {
    H.current.setViewer(ie.current), H.current.setExternalLinkRel(s), H.current.setExternalLinkTarget(r);
  }, [s, r]);
  const wt = Fs((Rt, Kt) => {
    B.current[Rt] = Kt;
  }, []); const Hi = Fs((Rt) => {
    delete B.current[Rt];
  }, []); const as = ss(() => ({
    imageResourcesPath: l,
    linkService: H.current,
    onItemClick: u,
    pdf: F,
    registerPage: wt,
    renderMode: E,
    rotate: f,
    scale: m,
    unregisterPage: Hi,
  }), [l, u, F, wt, E, f, m, Hi]); const
    Os = ss(
      () => wy(A, () => F),
      // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
      [A, F],
    );
  function Le() {
    function Rt(Lt) {
      return !!(Lt != null && Lt.pdf);
    }
    if (!Rt(as)) throw new Error('pdf is undefined');
    const Kt = typeof t === 'function' ? t(as) : t;
    return L(Ay.Provider, { value: as, children: Kt });
  }
  function Tt() {
    return a ? F == null ? L(Ao, { type: 'loading', children: typeof h === 'function' ? h() : h }) : F === !1 ? L(Ao, { type: 'error', children: typeof i === 'function' ? i() : i }) : Le() : L(Ao, { type: 'no-data', children: typeof d === 'function' ? d() : d });
  }
  return L('div', {
    className: Ku('react-pdf__Document', e),
    // Assertion is needed for React 18 compatibility
    ref: o,
    ...Os,
    children: Tt(),
  });
});
function ng() {
  return em(Ay);
}
function Ey() {
  for (var c = [], t = 0; t < arguments.length; t++) c[t] = arguments[t];
  const e = c.filter(Boolean);
  if (e.length <= 1) {
    const i = e[0];
    return i || null;
  }
  return function (r) {
    for (let a = 0, o = e; a < o.length; a++) {
      const l = o[a];
      typeof l === 'function' ? l(r) : l && (l.current = r);
    }
  };
}
const _y = Qg(null);
function Sd() {
  return em(_y);
}
function IA() {
  const c = ng(); const
    t = Sd();
  St(t, 'Unable to find Page context.');
  const e = { ...c, ...t }; const
    {
      filterAnnotations: i, imageResourcesPath: s, linkService: r, onGetAnnotationsError: a, onGetAnnotationsSuccess: o, onRenderAnnotationLayerError: l, onRenderAnnotationLayerSuccess: h, page: d, pdf: u, renderForms: p, rotate: y, scale: S = 1,
    } = e;
  St(u, 'Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.'), St(d, 'Attempted to load page annotations, but no page was specified.'), St(r, 'Attempted to load page annotations, but no linkService was specified.');
  const [v, _] = Yl(); const { value: x, error: T } = v; const
    E = $e(null);
  Me(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-annotation-layer'), 10) === 1, 'AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations');
  function f() {
    x && o && o(x);
  }
  function m() {
    T && (Me(!1, T.toString()), a && a(T));
  }
  bt(() => {
    _({ type: 'RESET' });
  }, [_, d]), bt(() => {
    if (!d) return;
    const k = vd(d.getAnnotations()); const
      D = k;
    return k.promise.then((I) => {
      _({ type: 'RESOLVE', value: I });
    }).catch((I) => {
      _({ type: 'REJECT', error: I });
    }), () => {
      Qa(D);
    };
  }, [_, d]), bt(() => {
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
    Me(!1, `${R}`), l && l(R);
  }
  const P = ss(() => d.getViewport({ scale: S, rotation: y }), [d, y, S]);
  return bt(() => {
    if (!u || !d || !r || !x) return;
    const { current: k } = E;
    if (!k) return;
    const D = P.clone({ dontFlip: !0 }); const I = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      annotationEditorUIManager: null,
      // TODO: Implement this
      annotationStorage: u.annotationStorage,
      commentManager: null,
      // TODO: Implement this
      div: k,
      l10n: null,
      // TODO: Implement this
      linkService: r,
      page: d,
      structTreeLayer: null,
      // TODO: Implement this
      viewport: D,
    }; const
      O = {
        annotations: i ? i({ annotations: x }) : x,
        annotationStorage: u.annotationStorage,
        div: k,
        imageResourcesPath: s,
        linkService: r,
        page: d,
        renderForms: p,
        viewport: D,
      };
    k.innerHTML = '';
    try {
      new eg(I).render(O), A();
    } catch (F) {
      C(F);
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
  ]), L('div', { className: Ku('react-pdf__Page__annotations', 'annotationLayer'), ref: E });
}
const Cy = {
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
const FA = /^H(\d+)$/;
function NA(c) {
  return c in Cy;
}
function Ju(c) {
  return 'children' in c;
}
function Ty(c) {
  return Ju(c) ? c.children.length === 1 && 0 in c.children && 'id' in c.children[0] : !1;
}
function OA(c) {
  const t = {};
  if (Ju(c)) {
    const { role: e } = c; const
      i = e.match(FA);
    if (i) t.role = 'heading', t['aria-level'] = Number(i[1]);
    else if (NA(e)) {
      const s = Cy[e];
      s && (t.role = s);
    }
  }
  return t;
}
function Py(c) {
  const t = {};
  if (Ju(c)) {
    if (c.alt !== void 0 && (t['aria-label'] = c.alt), c.lang !== void 0 && (t.lang = c.lang), Ty(c)) {
      const [e] = c.children;
      if (e) {
        const i = Py(e);
        return {
          ...t,
          ...i,
        };
      }
    }
  } else 'id' in c && (t['aria-owns'] = c.id);
  return t;
}
function BA(c) {
  return c ? {
    ...OA(c),
    ...Py(c),
  } : null;
}
function Ry({ className: c, node: t }) {
  const e = ss(() => BA(t), [t]); const
    i = ss(() => (!Ju(t) || Ty(t) ? null : t.children.map((s, r) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: index is stable here
      L(Ry, { node: s }, r)
    ))), [t]);
  return L('span', { className: c, ...e, children: i });
}
function HA() {
  const c = Sd();
  St(c, 'Unable to find Page context.');
  const { onGetStructTreeError: t, onGetStructTreeSuccess: e } = c; const [i, s] = Yl(); const { value: r, error: a } = i; const
    { customTextRenderer: o, page: l } = c;
  function h() {
    r && e && e(r);
  }
  function d() {
    a && (Me(!1, a.toString()), t && t(a));
  }
  return bt(() => {
    s({ type: 'RESET' });
  }, [s, l]), bt(() => {
    if (o || !l) return;
    const p = vd(l.getStructTree()); const
      y = p;
    return p.promise.then((S) => {
      s({ type: 'RESOLVE', value: S });
    }).catch((S) => {
      s({ type: 'REJECT', error: S });
    }), () => Qa(y);
  }, [o, l, s]), bt(() => {
    if (r !== void 0) {
      if (r === !1) {
        d();
        return;
      }
      h();
    }
  }, [r]), r ? L(Ry, { className: 'react-pdf__Page__structTree structTree', node: r }) : null;
}
const qg = Ls;
function $A(c) {
  const t = Sd();
  St(t, 'Unable to find Page context.');
  const e = { ...t, ...c }; const {
    _className: i, canvasBackground: s, devicePixelRatio: r = PA(), onRenderError: a, onRenderSuccess: o, page: l, renderForms: h, renderTextLayer: d, pageColors: u, rotate: p, scale: y,
  } = e; const
    { canvasRef: S } = c;
  St(l, 'Attempted to render page canvas, but no page was specified.');
  const v = $e(null);
  function _() {
    l && o && o(Up(l, y));
  }
  function x(m) {
    xy(m) || (Me(!1, m.toString()), a && a(m));
  }
  const T = ss(() => l.getViewport({ scale: y * r, rotation: p }), [r, l, p, y]); const
    E = ss(() => l.getViewport({ scale: y, rotation: p }), [l, p, y]);
  bt(() => {
    if (!l) return;
    l.cleanup();
    const { current: A } = v;
    if (!A) return;
    A.width = T.width, A.height = T.height, A.style.width = `${Math.floor(E.width)}px`, A.style.height = `${Math.floor(E.height)}px`, A.style.visibility = 'hidden';
    const C = {
      annotationMode: h ? qg.ENABLE_FORMS : qg.ENABLE,
      canvas: A,
      canvasContext: A.getContext('2d', { alpha: !1 }),
      pageColors: u,
      viewport: T,
    };
    s && (C.background = s);
    const P = l.render(C); const
      R = P;
    return P.promise.then(() => {
      A.style.visibility = '', _();
    }).catch(x), () => Qa(R);
  }, [s, l, u, h, T, E]);
  const f = Fs(() => {
    const { current: m } = v;
    m && (m.width = 0, m.height = 0);
  }, []);
  return bt(() => f, [f]), L('canvas', {
    className: `${i}__canvas`,
    dir: 'ltr',
    ref: Ey(S, v),
    style: {
      display: 'block',
      userSelect: 'none',
    },
    children: d ? L(HA, {}) : null,
  });
}
function UA(c) {
  return 'str' in c;
}
const GA = /* @__PURE__ */ new Set([
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
  zA = /* @__PURE__ */ new Set(['action', 'formaction', 'href', 'poster', 'src', 'xlink:href']);
function WA(c) {
  let t = '';
  for (const e of c) {
    const i = e.charCodeAt(0);
    i <= 32 || i === 127 || (t += e.toLowerCase());
  }
  return t.startsWith('javascript:') || t.startsWith('vbscript:');
}
function jA(c) {
  return c.nodeType === Node.ELEMENT_NODE;
}
function ky(c) {
  return jA(c) && c instanceof HTMLElement;
}
function VA(c) {
  return ky(c) && GA.has(c.tagName.toLowerCase());
}
function qA(c) {
  const t = document.createElement(c.tagName.toLowerCase());
  return Array.from(c.attributes).forEach((e) => {
    const i = e.name.toLowerCase();
    i.startsWith('on') || i === 'srcdoc' || zA.has(i) && WA(e.value) || t.setAttribute(e.name, e.value);
  }), Array.from(c.childNodes).forEach((e) => {
    t.append(Dy(e));
  }), t;
}
function Dy(c) {
  let t;
  return ky(c) && !VA(c) ? qA(c) : document.createTextNode((t = c.textContent) !== null && t !== void 0 ? t : '');
}
function XA(c, t) {
  const e = document.createElement('template');
  e.innerHTML = t;
  const i = document.createDocumentFragment();
  Array.from(e.content.childNodes).forEach((s) => {
    i.append(Dy(s));
  }), c.replaceChildren(i);
}
function YA() {
  const c = Sd();
  St(c, 'Unable to find Page context.');
  const {
    customTextRenderer: t, onGetTextError: e, onGetTextSuccess: i, onRenderTextLayerError: s, onRenderTextLayerSuccess: r, page: a, pageIndex: o, pageNumber: l, rotate: h, scale: d,
  } = c;
  St(a, 'Attempted to load page text content, but no page was specified.');
  const [u, p] = Yl(); const { value: y, error: S } = u; const
    v = $e(null);
  Me(Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('--react-pdf-text-layer'), 10) === 1, 'TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer');
  function _() {
    y && i && i(y);
  }
  function x() {
    S && (Me(!1, S.toString()), e && e(S));
  }
  bt(() => {
    p({ type: 'RESET' });
  }, [a, p]), bt(() => {
    if (!a) return;
    const P = vd(a.getTextContent()); const
      R = P;
    return P.promise.then((k) => {
      p({ type: 'RESOLVE', value: k });
    }).catch((k) => {
      p({ type: 'REJECT', error: k });
    }), () => Qa(R);
  }, [a, p]), bt(() => {
    if (y !== void 0) {
      if (y === !1) {
        x();
        return;
      }
      _();
    }
  }, [y]);
  const T = Fs(() => {
    r && r();
  }, [r]); const
    E = Fs((C) => {
      xy(C) || (Me(!1, C.toString()), s && s(C));
    }, [s]);
  function f() {
    const C = v.current;
    C && C.classList.add('selecting');
  }
  function m() {
    const C = v.current;
    C && C.classList.remove('selecting');
  }
  const A = ss(() => a.getViewport({ scale: d, rotation: h }), [a, h, d]);
  return jy(() => {
    if (!a || !y) return;
    const { current: P } = v;
    if (!P) return;
    P.innerHTML = '';
    const R = a.streamTextContent({ includeMarkedContent: !0 }); const k = {
      container: P,
      textContentSource: R,
      viewport: A,
    }; const D = new Dh(k); const
      I = D;
    return D.render().then(() => {
      const O = document.createElement('div');
      O.className = 'endOfContent', P.append(O);
      const F = P.querySelectorAll('[role="presentation"]');
      if (t) {
        let j = 0;
        y.items.forEach((H, B) => {
          if (!UA(H)) return;
          const tt = F[j];
          if (!tt) return;
          const st = t({
            pageIndex: o,
            pageNumber: l,
            itemIndex: B,
            ...H,
          });
          XA(tt, st), j += H.str && H.hasEOL ? 2 : 1;
        });
      }
      T();
    }).catch(E), () => Qa(I);
  }, [
    t,
    E,
    T,
    a,
    o,
    l,
    y,
    A,
  ]), // biome-ignore lint/a11y/noStaticElementInteractions: False positive caused by non interactive wrapper listening for bubbling events
  L('div', {
    className: Ku('react-pdf__Page__textContent', 'textLayer'), onMouseUp: m, onMouseDown: f, ref: v,
  });
}
const Xg = 1;
function KA(c) {
  const e = { ...ng(), ...c }; const {
    _className: i = 'react-pdf__Page', _enableRegisterUnregisterPage: s = !0, canvasBackground: r, canvasRef: a, children: o, className: l, customRenderer: h, customTextRenderer: d, devicePixelRatio: u, error: p = 'Failed to load the page.', filterAnnotations: y, height: S, inputRef: v, loading: _ = 'Loading page…', noData: x = 'No page specified.', onGetAnnotationsError: T, onGetAnnotationsSuccess: E, onGetStructTreeError: f, onGetStructTreeSuccess: m, onGetTextError: A, onGetTextSuccess: C, onLoadError: P, onLoadSuccess: R, onRenderAnnotationLayerError: k, onRenderAnnotationLayerSuccess: D, onRenderError: I, onRenderSuccess: O, onRenderTextLayerError: F, onRenderTextLayerSuccess: j, pageColors: H, pageIndex: B, pageNumber: tt, pdf: st, registerPage: ie, renderAnnotationLayer: Qe = !0, renderForms: rt = !1, renderMode: lt = 'canvas', renderTextLayer: se = !0, rotate: ue, scale: Se = Xg, unregisterPage: wt, width: Hi, ...as
  } = e; const [Os, Le] = Yl(); const { value: Tt, error: Rt } = Os; const
    Kt = $e(null);
  St(st, 'Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.');
  const Lt = Lr(tt) ? tt - 1 : B ?? null; const xe = tt ?? (Lr(B) ? B + 1 : null); const ti = ue ?? (Tt ? Tt.rotate : null); const
    $i = ss(() => {
      if (!Tt) return null;
      let Dn = 1;
      const io = Se ?? Xg;
      if (Hi || S) {
        const Mn = Tt.getViewport({ scale: 1, rotation: ti });
        Hi ? Dn = Hi / Mn.width : S && (Dn = S / Mn.height);
      }
      return io * Dn;
    }, [S, Tt, ti, Se, Hi]);
  bt(() => () => {
    Lr(Lt) && s && wt && wt(Lt);
  }, [s, st, Lt, wt]);
  function My() {
    if (R) {
      if (!Tt || !$i) return;
      R(Up(Tt, $i));
    }
    if (s && ie) {
      if (!Lr(Lt) || !Kt.current) return;
      ie(Lt, Kt.current);
    }
  }
  function Ly() {
    Rt && (Me(!1, Rt.toString()), P && P(Rt));
  }
  bt(() => {
    Le({ type: 'RESET' });
  }, [Le, st, Lt]), bt(() => {
    if (!st || !xe) return;
    const io = vd(st.getPage(xe)); const
      Mn = io;
    return io.promise.then((tf) => {
      Le({ type: 'RESOLVE', value: tf });
    }).catch((tf) => {
      Le({ type: 'REJECT', error: tf });
    }), () => Qa(Mn);
  }, [Le, st, xe]), bt(() => {
    if (Tt !== void 0) {
      if (Tt === !1) {
        Ly();
        return;
      }
      My();
    }
  }, [Tt, $i]);
  const Qu = ss(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    Lr(Lt) && xe && Lr(ti) && Lr($i) ? {
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
      onRenderAnnotationLayerError: k,
      onRenderAnnotationLayerSuccess: D,
      onRenderError: I,
      onRenderSuccess: O,
      onRenderTextLayerError: F,
      onRenderTextLayerSuccess: j,
      page: Tt,
      pageColors: H,
      pageIndex: Lt,
      pageNumber: xe,
      renderForms: rt,
      renderTextLayer: se,
      rotate: ti,
      scale: $i,
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
    k,
    D,
    I,
    O,
    F,
    j,
    Tt,
    H,
    Lt,
    xe,
    rt,
    se,
    ti,
    $i,
  ]); const Iy = ss(
    () => wy(as, () => Tt && ($i ? Up(Tt, $i) : void 0)),
    // biome-ignore lint/correctness/useExhaustiveDependencies: FIXME
    [as, Tt, $i],
  ); const
    xd = `${Lt}@${$i}/${ti}`;
  function Fy() {
    switch (lt) {
      case 'custom':
        return St(h, 'renderMode was set to "custom", but no customRenderer was passed.'), L(h, {}, `${xd}_custom`);
      case 'none':
        return null;
      case 'canvas':
      default:
        return L($A, { canvasRef: a }, `${xd}_canvas`);
    }
  }
  function Ny() {
    return se ? L(YA, {}, `${xd}_text`) : null;
  }
  function Oy() {
    return Qe ? L(IA, {}, `${xd}_annotations`) : null;
  }
  function By() {
    function Dn(Mn) {
      return !!(Mn != null && Mn.page);
    }
    if (!Dn(Qu)) throw new Error('page is undefined');
    const io = typeof o === 'function' ? o(Qu) : o;
    return En(_y.Provider, { value: Qu, children: [Fy(), Ny(), Oy(), io] });
  }
  function Hy() {
    return xe ? st === null || Tt === void 0 || Tt === null ? L(Ao, { type: 'loading', children: typeof _ === 'function' ? _() : _ }) : st === !1 || Tt === !1 ? L(Ao, { type: 'error', children: typeof p === 'function' ? p() : p }) : By() : L(Ao, { type: 'no-data', children: typeof x === 'function' ? x() : x });
  }
  return L('div', {
    className: Ku(i, l),
    'data-page-number': xe,
    // Assertion is needed for React 18 compatibility
    ref: Ey(v, Kt),
    style: {
      '--scale-round-x': '1px',
      '--scale-round-y': '1px',
      '--scale-factor': '1',
      '--user-unit': `${$i}`,
      '--total-scale-factor': 'calc(var(--scale-factor) * var(--user-unit))',
      backgroundColor: r || 'white',
      position: 'relative',
      minWidth: 'min-content',
      minHeight: 'min-content',
    },
    ...Iy,
    children: Hy(),
  });
}
RA();
es.workerSrc = 'pdf.worker.mjs';
const ZA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Document: LA,
  Page: KA,
  PasswordResponses: Hp,
  pdfjs: by,
  useDocumentContext: ng,
  usePageContext: Sd,
}, Symbol.toStringTag, { value: 'Module' }));
const Eh = { exports: {} }; const JA = Eh.exports; let
  Yg;
function QA() {
  return Yg || (Yg = 1, (function (c, t) {
    (function (e, i) {
      i(t);
    }(JA, ((e) => {
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
            k = m.top;
          this.isLoad ? A.drawImage(this.image, R, k, C, P) : this.drawLoader(A, { x: R, y: k }, C, P);
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
            k = A.y;
          let D = Math.sqrt(m ** 2 * (C - R) ** 2 / ((C - R) ** 2 + (P - k) ** 2)) + C;
          A.x < 0 && (D *= -1);
          let I = (D - C) * (P - k) / (C - R) + P;
          return C - R + P === 0 && (I = m), { x: D, y: I };
        }

        static GetIntersectBetweenTwoSegment(f, m, A) {
          return o.PointInRect(f, o.GetIntersectBeetwenTwoLine(m, A));
        }

        static GetIntersectBeetwenTwoLine(f, m) {
          const A = f[0].y - f[1].y; const C = m[0].y - m[1].y; const P = f[1].x - f[0].x; const R = m[1].x - m[0].x; const k = f[0].x * f[1].y - f[1].x * f[0].y; const D = m[0].x * m[1].y - m[1].x * m[0].y; const I = A * D - C * k; const O = P * D - R * k; const F = -(k * R - D * P) / (A * R - C * P); const
            j = -(A * D - C * k) / (A * R - C * P);
          if (isFinite(F) && isFinite(j)) return { x: F, y: j };
          if (Math.abs(I - O) < 0.1) throw new Error('Segment included');
          return null;
        }

        static GetCordsFromTwoPoint(f, m) {
          const A = Math.abs(f.x - m.x); const C = Math.abs(f.y - m.y); const P = Math.max(A, C); const
            R = [f];
          function k(D, I, O, F, j) {
            return I > D ? D + j * (O / F) : I < D ? D - j * (O / F) : D;
          }
          for (let D = 1; D <= P; D += 1) R.push({ x: k(f.x, m.x, A, P, D), y: k(f.y, m.y, C, P, D) });
          return R;
        }
      }
      class l extends i {
        constructor(f, m, A) {
          super(f, A), this.copiedElement = null, this.temporaryCopy = null, this.isLoad = !1, this.element = m, this.element.classList.add('stf__item'), this.element.classList.add(`--${A}`);
        }

        newTemporaryCopy() {
          return this.nowDrawingDensity === 'hard' ? this : (this.temporaryCopy === null && (this.copiedElement = this.element.cloneNode(!0), this.element.parentElement.appendChild(this.copiedElement), this.temporaryCopy = new l(this.render, this.copiedElement, this.nowDrawingDensity)), this.getTemporaryCopy());
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
      class h extends r {
        constructor(f, m, A, C) {
          super(f, m), this.element = A, this.pagesElement = C;
        }

        load() {
          for (const f of this.pagesElement) {
            const m = new l(this.render, f, f.dataset.density === 'hard' ? 'hard' : 'soft');
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
          let k = this.rect.bottomRight; let
            D = this.rect.topLeft;
          if (this.corner === 'bottom' && (k = this.rect.topRight, D = this.rect.bottomLeft), k.x <= 0) {
            const I = o.LimitPointToCircle(A, R, D);
            I !== C && (C = I, this.updateAngleAndGeometry(C));
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
          for (const D of P) R.push(() => this.do(D));
          const k = this.getAnimationDuration(P.length);
          this.render.startAnimation(R, k, () => {
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
          let R = this.setting.width; let k = this.setting.height; let
            D = A - R;
          return this.setting.size === 'stretch' ? (m < 2 * this.setting.minWidth && this.app.getSettings().usePortrait && (f = 'portrait'), R = f === 'portrait' ? this.getBlockWidth() : this.getBlockWidth() / 2, R > this.setting.maxWidth && (R = this.setting.maxWidth), k = R / P, k > this.getBlockHeight() && (k = this.getBlockHeight(), R = k * P), D = f === 'portrait' ? A - R / 2 - R : A - R) : m < 2 * R && this.app.getSettings().usePortrait && (f = 'portrait', D = A - R / 2 - R), this.boundsRect = {
            left: D, top: C - k / 2, width: 2 * R, height: k, pageWidth: R,
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
                k = this.getMousePos(R.clientX, R.clientY);
              this.touchPoint = { point: k, time: Date.now() }, setTimeout(() => {
                this.touchPoint !== null && this.app.startUserTouch(k);
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
                k = this.getMousePos(R.clientX, R.clientY);
              this.app.getSettings().mobileScrollSupport ? (this.touchPoint !== null && (Math.abs(this.touchPoint.point.x - k.x) > 10 || this.app.getState() !== 'read') && P.cancelable && this.app.userMove(k, !0), this.app.getState() !== 'read' && P.preventDefault()) : this.app.userMove(k, !0);
            }
          }, this.onTouchEnd = (P) => {
            if (P.changedTouches.length > 0) {
              const R = P.changedTouches[0]; const
                k = this.getMousePos(R.clientX, R.clientY);
              let D = !1;
              if (this.touchPoint !== null) {
                const I = k.x - this.touchPoint.point.x; const
                  O = Math.abs(k.y - this.touchPoint.point.y);
                Math.abs(I) > this.swipeDistance && O < 2 * this.swipeDistance && Date.now() - this.touchPoint.time < this.swipeTimeout && (I > 0 ? this.app.flipPrev(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom') : this.app.flipNext(this.touchPoint.point.y < this.app.getRender().getRect().height / 2 ? 'top' : 'bottom'), D = !0), this.touchPoint = null;
              }
              this.app.userStop(k, D);
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
            k = [this.pageRect.topLeft, this.pageRect.topRight, this.pageRect.bottomRight, this.pageRect.bottomLeft];
          let D = 'polygon( ';
          for (const O of k) {
            let F = this.getDirection() === 1 ? { x: -O.x + this.shadow.pos.x, y: O.y - this.shadow.pos.y } : { x: O.x - this.shadow.pos.x, y: O.y - this.shadow.pos.y };
            F = o.GetRotatedPoint(F, { x: A, y: 100 }, R), D += `${F.x}px ${F.y}px, `;
          }
          D = D.slice(0, -2), D += ')';
          const I = `
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
            clip-path: ${D};
            -webkit-clip-path: ${D};
        `;
          this.innerShadow.style.cssText = I;
        }

        drawOuterShadow() {
          const f = this.getRect(); const m = this.convertToGlobal({ x: this.shadow.pos.x, y: this.shadow.pos.y }); const A = this.shadow.angle + 3 * Math.PI / 2; const C = this.getDirection() === 1 ? this.shadow.width : 0; const P = this.getDirection() === 0 ? 'to right' : 'to left'; const
            R = [{ x: 0, y: 0 }, { x: f.pageWidth, y: 0 }, { x: f.pageWidth, y: f.height }, { x: 0, y: f.height }];
          let k = 'polygon( ';
          for (const I of R) {
            if (I !== null) {
              let O = this.getDirection() === 1 ? { x: -I.x + this.shadow.pos.x, y: I.y - this.shadow.pos.y } : { x: I.x - this.shadow.pos.x, y: I.y - this.shadow.pos.y };
              O = o.GetRotatedPoint(O, { x: C, y: 100 }, A), k += `${O.x}px ${O.y}px, `;
            }
          }
          k = k.slice(0, -2), k += ')';
          const D = `
            display: block;
            z-index: ${(this.getSettings().startZIndex + 10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2 * f.height}px;
            background: linear-gradient(${P}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${C}px 100px;
            transform: translate3d(${m.x - C}px, ${m.y - 100}px, 0) rotate(${A}rad);
            clip-path: ${k};
            -webkit-clip-path: ${k};
        `;
          this.outerShadow.style.cssText = D;
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
          this.ui = new v(this.block, this, this.setting, E), this.render = new x(this, this.setting, this.ui.getDistElement()), this.flipController = new u(this.render, this), this.pages = new h(this, this.render, this.ui.getDistElement(), E), this.pages.load(), this.render.start(), this.pages.show(this.setting.startPage), setTimeout(() => {
            this.ui.update(), this.trigger('init', this, { page: this.setting.startPage, mode: this.render.getOrientation() });
          }, 1);
        }

        updateFromImages(E) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new a(this, this.render, E), this.pages.load(), this.pages.show(f), this.trigger('update', this, { page: f, mode: this.render.getOrientation() });
        }

        updateFromHtml(E) {
          const f = this.pages.getCurrentPageIndex();
          this.pages.destroy(), this.pages = new h(this, this.render, this.ui.getDistElement(), E), this.pages.load(), this.ui.updateItems(E), this.render.reload(), this.pages.show(f), this.trigger('update', this, { page: f, mode: this.render.getOrientation() });
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
  }(Eh, Eh.exports))), Eh.exports;
}
const tv = QA();
const ev = ih.forwardRef((c, t) => {
  const e = $e(null); const i = $e([]); const s = $e(); const
    [r, a] = In([]);
  tm(t, () => ({
    pageFlip: () => s.current,
  }));
  const o = Fs(() => {
    s.current && s.current.clear();
  }, []); const
    l = Fs(() => {
      const h = s.current;
      h && (h.off('flip'), h.off('changeOrientation'), h.off('changeState'), h.off('init'), h.off('update'));
    }, []);
  return bt(() => {
    if (i.current = [], c.children) {
      const h = ih.Children.map(c.children, (d) => ih.cloneElement(d, {
        ref: (u) => {
          u && i.current.push(u);
        },
      }));
      (!c.renderOnlyPageLengthChange || r.length !== h.length) && (h.length < r.length && o(), a(h));
    }
  }, [c.children]), bt(() => {
    const h = () => {
      const d = s.current;
      d && (c.onFlip && d.on('flip', (u) => c.onFlip(u)), c.onChangeOrientation && d.on('changeOrientation', (u) => c.onChangeOrientation(u)), c.onChangeState && d.on('changeState', (u) => c.onChangeState(u)), c.onInit && d.on('init', (u) => c.onInit(u)), c.onUpdate && d.on('update', (u) => c.onUpdate(u)));
    };
    r.length > 0 && i.current.length > 0 && (l(), e.current && !s.current && (s.current = new tv.PageFlip(e.current, c)), s.current.getFlipController() ? s.current.updateFromHtml(i.current) : s.current.loadFromHTML(i.current), h());
  }, [r]), ih.createElement('div', { ref: e, className: c.className, style: c.style }, r);
}); const iv = ih.memo(ev); const
  sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: iv,
  }, Symbol.toStringTag, { value: 'Module' }));
export {
  lv as default,
};
