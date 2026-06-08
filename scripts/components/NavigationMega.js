import { jsx as e, jsxs as h } from 'react/jsx-runtime';
import * as i from 'react';
import { useState as M, useId as F } from 'react';

function I({
  title: r,
  titleId: l,
  ...n
}, o) {
  return /* @__PURE__ */ i.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: o,
    'aria-labelledby': l,
    ...n,
  }, r ? /* @__PURE__ */ i.createElement('title', {
    id: l,
  }, r) : null, /* @__PURE__ */ i.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
  }));
}
const S = /* @__PURE__ */ i.forwardRef(I);
function W({
  title: r,
  titleId: l,
  ...n
}, o) {
  return /* @__PURE__ */ i.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: o,
    'aria-labelledby': l,
    ...n,
  }, r ? /* @__PURE__ */ i.createElement('title', {
    id: l,
  }, r) : null, /* @__PURE__ */ i.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'm8.25 4.5 7.5 7.5-7.5 7.5',
  }));
}
const G = /* @__PURE__ */ i.forwardRef(W);
function X({
  title: r,
  titleId: l,
  ...n
}, o) {
  return /* @__PURE__ */ i.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: o,
    'aria-labelledby': l,
    ...n,
  }, r ? /* @__PURE__ */ i.createElement('title', {
    id: l,
  }, r) : null, /* @__PURE__ */ i.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M6 18 18 6M6 6l12 12',
  }));
}
const _ = /* @__PURE__ */ i.forwardRef(X); const q = ({
  text: r = 'Button',
  href: l = void 0,
  variant: n = 'light',
  // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline
  size: o = 'btn-md',
  // btn-sm , btn-md
  className: c = '',
  disabled: b = !1,
  onClick: w = void 0,
  attributes: y = {},
  ...p
}) => {
  const $ = (d) => {
    switch (d) {
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
  }; const k = (d) => {
    switch (d) {
      case 'btn-sm':
        return 'btn-sm';
      case 'btn-md':
        return 'btn-md';
      default:
        return 'btn-md';
    }
  }; const
    v = `btn ${$(n)} ${k(o)} ${c}`.trim();
  return l ? /* @__PURE__ */ e(
    'a',
    {
      href: l,
      className: v,
      onClick: w,
      ...p,
      ...y ?? {},
      children: r,
    },
  ) : /* @__PURE__ */ e(
    'button',
    {
      type: p.type || 'button',
      className: v,
      disabled: b,
      onClick: w,
      ...p,
      ...y ?? {},
      children: r,
    },
  );
}; const
  D = ({
    buttons: r = [],
    // Array of button objects: [{ text, variant, size, href, onClick }]
    size: l = 'btn-md',
    className: n = 'flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap justify-center items-center gap-10',
    ...o
  }) => (!r || r.length === 0 ? null : /* @__PURE__ */ e('div', {
    className: `container ${n}`,
    ...o,
    children: r.map((c, b) => /* @__PURE__ */ e(
      q,
      {
        text: c.text,
        variant: c.variant,
        size: c.size || l,
        href: c.href,
        onClick: c.onClick,
        attributes: c.attributes,
      },
      b,
    )),
  }));
function K({
  fullWidth: r = !1,
  logo: l,
  navItems: n = [],
  // [{ label, href, mega: { variant: 'tabs' | 'columns', tabs?, columns? } }]
  buttons: o = [],
  // [{ text, variant, size, href, onClick }]
  alignNavRight: c = !1,
  variant: b = 'dark',
  // 'dark' | 'light'
  skipLinkText: w = 'Skip navigation',
  className: y = '',
  ...p
}) {
  const [N, $] = M(!1); const [k, v] = M({}); const [d, j] = M(null); const B = F(); const z = r ? 'w-full max-w-[1600px] mx-auto bg-grey-700' : 'container'; const O = c ? 'ml-auto' : 'flex-1 justify-center'; const E = b === 'light' ? 'text-white hover:text-white/80 focus-visible:text-white/80' : 'text-grey-600 hover:text-grey-950 focus-visible:text-grey-950'; const T = (t) => {
    switch (t) {
      case 1:
        return 'grid grid-cols-1 gap-24';
      case 2:
        return 'grid grid-cols-1 md:grid-cols-2 gap-24';
      case 3:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24';
      case 4:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-24';
    }
  }; const R = (t = [], { stacked: a = !1 } = {}) => {
    if (!t.length) return null;
    const s = Math.min(t.length, 5); const
      m = a ? 'space-y-24' : T(s);
    return /* @__PURE__ */ e('div', {
      className: m,
      children: t.slice(0, 5).map((u, g) => /* @__PURE__ */ h('div', {
        className: 'space-y-12',
        children: [
          u.title && /* @__PURE__ */ e('p', { className: 'text-ui-label-small text-grey-300', children: u.title }),
          /* @__PURE__ */ e('ul', {
            className: 'space-y-10',
            children: (u.links || []).map((f, x) => /* @__PURE__ */ e('li', {
              children: /* @__PURE__ */ e(
                'a',
                {
                  href: f.href || '#',
                  className: 'text-body-default text-white hover:text-white/80 focus-visible:text-white/80 transition-colors',
                  children: f.label,
                },
              ),
            }, `column-${g}-link-${x}`)),
          }),
        ],
      }, `column-${g}`)),
    });
  }; const
    L = (t, a, { stacked: s = !1 } = {}) => {
      const m = t.mega;
      if (!m) return null;
      if (m.variant === 'tabs') {
        const u = m.tabs || [];
        if (!u.length) return null;
        const g = s ? k[a] : k[a] ?? 0; const
          f = g != null ? u[Math.min(g, u.length - 1)] : null;
        return /* @__PURE__ */ h('div', {
          className: s ? 'space-y-24' : 'grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-32',
          children: [
            (!s || !f) && /* @__PURE__ */ e('div', {
              className: `flex flex-col gap-10 items-start ${s ? 'flex flex-wrap gap-12' : ''}`.trim(),
              children: u.map((x, C) => /* @__PURE__ */ h(
                'button',
                {
                  type: 'button',
                  onClick: () => v((A) => ({ ...A, [a]: C })),
                  className: `text-body-default text-white transition-colors inline-flex items-center gap-8 ${C === g ? 'opacity-100' : 'opacity-70 hover:opacity-100 focus-visible:opacity-100'}`.trim(),
                  children: [
                    x.label,
                    /* @__PURE__ */ e(G, { className: 'w-16 h-16' }),
                  ],
                },
                `tab-${a}-${C}`,
              )),
            }),
            /* @__PURE__ */ h('div', {
              className: s ? 'space-y-16' : 'space-y-20',
              children: [
                s && f && /* @__PURE__ */ e(
                  'button',
                  {
                    type: 'button',
                    onClick: () => v((x) => ({ ...x, [a]: null })),
                    className: 'text-body-default text-white/70 hover:text-white focus-visible:text-white transition-colors text-left',
                    children: 'Back to tabs',
                  },
                ),
                f ? R(f.columns || [], { stacked: s }) : null,
              ],
            }),
          ],
        });
      }
      return R(m.columns || [], { stacked: s });
    };
  return /* @__PURE__ */ h('nav', {
    className: `${z} relative ${y}`.trim(),
    ...p,
    children: [
    /* @__PURE__ */ e(
        'a',
        {
          href: `#${B}`,
          className: 'sr-only focus:not-sr-only focus:absolute focus:left-20 focus:top-20 focus:z-20 focus:inline-flex focus:rounded-8 focus:bg-white focus:px-16 focus:py-10 focus:text-body-default focus:text-grey-950',
          children: w,
        },
      ),
      /* @__PURE__ */ h('div', {
        className: 'flex items-center gap-nav-spacing-x bg-grey-700 pt-nav-padding-t pb-nav-padding-b pl-nav-padding-l pr-nav-padding-r relative',
        children: [
          /* @__PURE__ */ e('div', { className: 'flex items-center', children: l && (typeof l === 'string' ? /* @__PURE__ */ e('img', { src: l, alt: 'Logo', className: 'h-auto max-h-32' }) : l) }),
          /* @__PURE__ */ e('div', {
            className: `hidden lg:flex items-center gap-24 ${O}`.trim(),
            children: n.map((t, a) => /* @__PURE__ */ h('div', {
              className: 'group static',
              children: [
                t.mega ? /* @__PURE__ */ e(
                  'button',
                  {
                    type: 'button',
                    onClick: () => j((s) => (s === a ? null : a)),
                    className: `text-body-default transition-colors ${E}`.trim(),
                    'aria-expanded': d === a,
                    children: t.label,
                  },
                ) : /* @__PURE__ */ e(
                  'a',
                  {
                    href: t.href || '#',
                    className: `text-body-default transition-colors ${E}`.trim(),
                    children: t.label,
                  },
                ),
                t.mega && /* @__PURE__ */ e('div', { className: `absolute left-0 top-full w-full bg-grey-700 z-10 pt-24 ${d === a ? 'block' : 'hidden'}`.trim(), children: /* @__PURE__ */ e('div', { className: 'px-20 pb-24', children: L(t, a) }) }),
              ],
            }, `${t.label}-${a}`)),
          }),
          /* @__PURE__ */ e('div', {
            className: 'hidden lg:flex',
            children: /* @__PURE__ */ e(
              D,
              {
                buttons: o,
                className: 'flex items-center gap-10',
              },
            ),
          }),
          /* @__PURE__ */ e(
            'button',
            {
              type: 'button',
              className: 'lg:hidden inline-flex items-center justify-center w-40 h-40 ms-auto rounded-8 border borderwhite text-white hover:text-grey-950 hover:border-grey-600 focus-visible:text-grey-950 focus-visible:border-grey-600 transition-colors',
              'aria-label': 'Open menu',
              'aria-expanded': N,
              onClick: () => $((t) => !t),
              children: N ? /* @__PURE__ */ e(_, { className: 'w-20 h-20' }) : /* @__PURE__ */ e(S, { className: 'w-20 h-20' }),
            },
          ),
        ],
      }),
      /* @__PURE__ */ e(
        'div',
        {
          className: `lg:hidden ${N ? 'block' : 'hidden'} absolute top-full min-h-screen bg-grey-700 px-20 py-20 z-10 ${r ? 'left-0 w-full' : 'left-[var(--container-padding)] right-[var(--container-padding)]'}`.trim(),
          children: /* @__PURE__ */ e('div', {
            className: 'space-y-24',
            children: n.map((t, a) => /* @__PURE__ */ h('div', {
              className: 'space-y-16',
              children: [
                t.mega ? /* @__PURE__ */ e(
                  'button',
                  {
                    type: 'button',
                    onClick: () => j((s) => (s === a ? null : a)),
                    className: 'text-body-default text-white hover:text-white/80 focus-visible:text-white/80 transition-colors text-left',
                    'aria-expanded': d === a,
                    children: t.label,
                  },
                ) : /* @__PURE__ */ e(
                  'a',
                  {
                    href: t.href || '#',
                    className: 'text-body-default text-white hover:text-white/80 focus-visible:text-white/80 transition-colors',
                    children: t.label,
                  },
                ),
                t.mega && d === a && /* @__PURE__ */ e('div', { className: 'space-y-16', children: L(t, a, { stacked: !0 }) }),
              ],
            }, `${t.label}-mobile-${a}`)),
          }),
        },
      ),
      /* @__PURE__ */ e('div', { id: B, tabIndex: -1, 'aria-label': 'End of navigation' }),
    ],
  });
}
export {
  K as default,
};
