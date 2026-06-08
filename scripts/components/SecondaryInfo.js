import { jsx as e, jsxs as d, Fragment as M } from 'react/jsx-runtime';
import * as o from 'react';
import { useState as V } from 'react';

function L({
  title: t,
  titleId: n,
  ...s
}, c) {
  return /* @__PURE__ */ o.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: c,
    'aria-labelledby': n,
    ...s,
  }, t ? /* @__PURE__ */ o.createElement('title', {
    id: n,
  }, t) : null, /* @__PURE__ */ o.createElement('path', {
    fillRule: 'evenodd',
    d: 'M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z',
    clipRule: 'evenodd',
  }));
}
const S = /* @__PURE__ */ o.forwardRef(L);
function j({
  title: t,
  titleId: n,
  ...s
}, c) {
  return /* @__PURE__ */ o.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: c,
    'aria-labelledby': n,
    ...s,
  }, t ? /* @__PURE__ */ o.createElement('title', {
    id: n,
  }, t) : null, /* @__PURE__ */ o.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25',
  }));
}
const E = /* @__PURE__ */ o.forwardRef(j);
function R({
  title: t,
  titleId: n,
  ...s
}, c) {
  return /* @__PURE__ */ o.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: c,
    'aria-labelledby': n,
    ...s,
  }, t ? /* @__PURE__ */ o.createElement('title', {
    id: n,
  }, t) : null, /* @__PURE__ */ o.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'm19.5 8.25-7.5 7.5-7.5-7.5',
  }));
}
const A = /* @__PURE__ */ o.forwardRef(R); const O = ({ type: t, className: n = '' }) => {
  switch (t == null ? void 0 : t.toLowerCase()) {
    case 'facebook':
      return /* @__PURE__ */ e('svg', {
        className: n, fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', children: /* @__PURE__ */ e('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' }),
      });
    case 'google':
      return /* @__PURE__ */ d('svg', {
        className: n,
        fill: 'currentColor',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
        /* @__PURE__ */ e('path', { d: 'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' }),
          /* @__PURE__ */ e('path', { d: 'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' }),
          /* @__PURE__ */ e('path', { d: 'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' }),
          /* @__PURE__ */ e('path', { d: 'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' }),
        ],
      });
    case 'x':
    case 'twitter':
      return /* @__PURE__ */ e('svg', {
        className: n, fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', children: /* @__PURE__ */ e('path', { d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' }),
      });
    case 'instagram':
      return /* @__PURE__ */ e('svg', {
        className: n, fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', children: /* @__PURE__ */ e('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }),
      });
    case 'linkedin':
      return /* @__PURE__ */ e('svg', {
        className: n, fill: 'currentColor', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', children: /* @__PURE__ */ e('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }),
      });
    default:
      return null;
  }
}; const
  Z = ({
    variant: t = 'secondary-info',
    // 'secondary-info' | 'sub-navigation'
    // Secondary info content
    text: n,
    phone: s,
    email: c,
    socialMedia: g = [],
    // Ex. [ { type: 'facebook', url: 'https://facebook.com' } ]
    // Sub navigation content
    logo: x,
    navigation: b = [],
    // Ex. [ { label: 'Home', href: '/' } ]
    // Styling
    colorVariant: v = 'light',
    // 'light' | 'dark'
    className: y = '',
    ...C
  }) => {
    const [m, N] = V(!1); const f = (['light', 'dark'].includes(v) ? v : 'light') === 'light' ? 'text-white' : 'text-grey-800'; const k = ({ logo: r }) => (r ? /* @__PURE__ */ e('div', { className: 'flex items-center', children: typeof r === 'string' ? /* @__PURE__ */ e('img', { src: r, alt: 'Logo', className: 'h-auto max-h-32' }) : r }) : null); const $ = ({
      text: r, phone: i, email: a, textColor: l,
    }) => (!r && !i && !a ? null : /* @__PURE__ */ d('div', {
      className: 'flex flex-row items-center gap-24 flex-wrap min-w-0',
      children: [
        r && /* @__PURE__ */ e('div', { className: `text-body-small font-normal ${l}`, children: r }),
        (i || a) && /* @__PURE__ */ d('div', {
          className: 'flex flex-row items-center gap-24',
          children: [
            i && /* @__PURE__ */ d(
              'a',
              {
                href: `tel:${i}`,
                className: `flex items-center gap-8 ${l} hover:opacity-80 focus-visible:opacity-80 transition-opacity`,
                children: [
                  /* @__PURE__ */ e(S, { className: `w-16 h-16 ${l}`, 'aria-hidden': 'true' }),
                  /* @__PURE__ */ e('span', { className: 'text-body-small sr-only md:not-sr-only md:inline', children: i }),
                ],
              },
            ),
            a && /* @__PURE__ */ d(
              'a',
              {
                href: `mailto:${a}`,
                className: `flex items-center gap-8 ${l} hover:opacity-80 focus-visible:opacity-80 transition-opacity`,
                children: [
                  /* @__PURE__ */ e(E, { className: `w-16 h-16 ${l}`, 'aria-hidden': 'true' }),
                  /* @__PURE__ */ e('span', { className: 'text-body-small sr-only md:not-sr-only md:inline', children: a }),
                ],
              },
            ),
          ],
        }),
      ],
    })); const z = ({ navigation: r, textColor: i, className: a = '' }) => (r ? Array.isArray(r) ? /* @__PURE__ */ e('nav', {
      className: `flex flex-col md:flex-row w-full md:w-auto md:items-center gap-info-sub-menu--spacing-x flex-wrap ${a}`.trim(),
      children: r.map((l, h) => {
        const p = typeof l === 'string' ? l : l.label; const
          H = typeof l === 'string' ? '#' : l.href;
        return /* @__PURE__ */ e(
          'a',
          {
            href: H,
            className: `${i} hover:opacity-80 focus-visible:opacity-80 transition-opacity p-10`,
            children: p,
          },
          h,
        );
      }),
    }) : /* @__PURE__ */ e('div', { className: a, children: r }) : null); const B = ({ socialMedia: r = [], textColor: i }) => (!r || r.length === 0 ? null : /* @__PURE__ */ e('div', {
      className: 'flex items-center gap-8 flex-wrap shrink-0',
      children: r.map((a, l) => {
        const [h, p] = Array.isArray(a) ? a : [a.type, a.url];
        return /* @__PURE__ */ e(
          'a',
          {
            href: p || '#',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: `${i} hover:opacity-80 focus-visible:opacity-80 transition-opacity`,
            'aria-label': h,
            children: /* @__PURE__ */ e(O, { type: h, className: 'w-16 h-16' }),
          },
          l,
        );
      }),
    })); const u = t === 'secondary-info'; const
      w = t === 'sub-navigation';
    return /* @__PURE__ */ e('div', {
      className: `w-full relative ${y}`.trim(),
      ...C,
      children: /* @__PURE__ */ e(
        'div',
        {
          className: `${u ? 'pt-info-info--padding-t px-info-info--padding-l pb-info-info--padding-b' : 'pt-info-sub--padding-t px-info-sub--padding-l pb-info-sub--padding-b'}`.trim(),
          children: /* @__PURE__ */ d('div', {
            className: 'flex flex-row items-center justify-between md:gap-24 flex-wrap',
            children: [
              u && /* @__PURE__ */ e(
                $,
                {
                  text: n,
                  phone: s,
                  email: c,
                  textColor: f,
                },
              ),
              w && /* @__PURE__ */ e(k, { logo: x }),
              u && /* @__PURE__ */ e(B, { socialMedia: g, textColor: f }),
              w && /* @__PURE__ */ d(M, {
                children: [
                  /* @__PURE__ */ e(
                    'button',
                    {
                      type: 'button',
                      onClick: () => N((r) => !r),
                      className: `md:hidden flex items-center justify-center py-8 border border-transparent ${f} hover:opacity-80 focus-visible:opacity-80 transition-colors`,
                      'aria-label': 'Toggle navigation',
                      'aria-expanded': m,
                      children: /* @__PURE__ */ e(
                        A,
                        {
                          className: `w-20 h-20 ${f} transition-transform duration-200 ${m ? 'rotate-180' : ''}`.trim(),
                        },
                      ),
                    },
                  ),
                  /* @__PURE__ */ e(
                    z,
                    {
                      navigation: b,
                      textColor: f,
                      className: `${m ? 'flex' : 'hidden'} md:flex`,
                    },
                  ),
                ],
              }),
            ],
          }),
        },
      ),
    });
  };
export {
  Z as default,
};
