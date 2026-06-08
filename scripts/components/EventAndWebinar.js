import { jsxs as u, jsx as t } from 'react/jsx-runtime';
import * as h from 'react';
import { useId as $ } from 'react';

function N({
  title: n,
  titleId: r,
  ...i
}, s) {
  return /* @__PURE__ */ h.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    stroke: 'currentColor',
    'aria-hidden': 'true',
    'data-slot': 'icon',
    ref: s,
    'aria-labelledby': r,
    ...i,
  }, n ? /* @__PURE__ */ h.createElement('title', {
    id: r,
  }, n) : null, /* @__PURE__ */ h.createElement('path', {
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    d: 'M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3',
  }));
}
const y = /* @__PURE__ */ h.forwardRef(N); const
  C = ({
    text: n = 'Link',
    href: r = '#',
    variant: i = 'dark',
    // dark, light
    icon: s,
    className: c = '',
    ...o
  }) => {
    const f = 'text-link';
    const d = (g) => {
      switch (g) {
        case 'light':
          return 'link-light';
        case 'dark':
          return 'link-dark';
        default:
          return 'link-dark';
      }
    };
    const x = s || y;
    const p = `${f} ${d(i)} ${c}`.trim();
    return /* @__PURE__ */ u(
      'a',
      {
        href: r,
        className: p,
        ...o,
        children: [
        /* @__PURE__ */ t('span', { children: n }),
          /* @__PURE__ */ t(x, { className: 'text-link-icon' }),
        ],
      },
    );
  };
function M({
  image: n,
  title: r,
  description: i,
  date: s,
  location: c,
  linkUrl: o,
  linkLabel: f = 'Learn More',
  logoPosition: d = 'left',
  // 'left' | 'top'
  textAlign: x = 'left',
  // 'left' | 'center' (only for logoPosition="top")
  attributes: p,
}) {
  const g = $(); const l = d === 'top'; const m = l && x === 'center' ? 'center' : 'left'; const e = m === 'center' ? 'text-center' : 'text-left'; const a = m === 'center' ? 'items-center' : 'items-start'; const b = typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s); const k = l && m === 'center' ? 'w-[113px] h-[113px] rounded-20' : 'w-[71px] h-[71px] rounded-10'; const v = l ? `flex flex-col gap-events-spacing-y ${a} ${e}` : 'flex flex-col xl:flex-row gap-events-spacing-x items-start'; const
    w = l ? `flex flex-col gap-events-spacing-y ${a}` : 'flex-1 flex flex-col gap-events-spacing-y min-w-0';
  return /* @__PURE__ */ u(
    'article',
    {
      className: v,
      ...r ? { 'aria-labelledby': g } : { 'aria-label': 'Event or webinar' },
      ...p || {},
      children: [
        n && /* @__PURE__ */ t('div', {
          className: l ? 'flex justify-center' : 'shrink-0 w-full md:w-auto',
          children: /* @__PURE__ */ t(
            'img',
            {
              src: n,
              alt: r || 'Event image',
              className: `${k} object-cover`,
            },
          ),
        }),
        /* @__PURE__ */ u('div', {
          className: w,
          children: [
            r && /* @__PURE__ */ t('h3', { id: g, className: `text-headings-h3 font-bold max-w-[600px] ${l ? e : ''}`, children: r }),
            i && /* @__PURE__ */ t('p', { className: `text-body-default max-w-[600px] ${l ? e : ''}`, children: i }),
            (s || c) && /* @__PURE__ */ u('div', {
              className: `flex items-start gap-24 ${l ? e : ''} ${m === 'center' ? 'justify-center' : 'justify-start'}`,
              children: [
                s && (b ? /* @__PURE__ */ t('time', { className: 'text-body-small', dateTime: s, children: s }) : /* @__PURE__ */ t('p', { className: 'text-body-small', children: s })),
                c && /* @__PURE__ */ t('p', { className: 'text-body-small', children: c }),
              ],
            }),
            o && /* @__PURE__ */ t('div', {
              className: ' mt-events-link--spacing-y',
              children: /* @__PURE__ */ t(
                C,
                {
                  text: f,
                  href: o,
                  variant: 'dark',
                  className: l ? e : '',
                },
              ),
            }),
          ],
        }),
      ],
    },
  );
}
function A({
  /**
   * Array of event/webinar objects
   * Each object should include:
   * - image: string (image URL)
   * - title: string
   * - description: string
   * - date: string
   * - location: string
   * - linkUrl: string
   */
  events: n = [],
  /**
   * Number of columns in the grid (1, 2, 3, etc.)
   * Determines the width of each column:
   * - 1 column = 100% width
   * - 2 columns = 50% width each
   * - 3 columns = 33.33% width each
   * - etc.
   */
  columns: r = 1,
  // 1 | 2 | 3 | 4 | 5
  /**
   * Logo position for all molecules: 'left' | 'top'
   * - 'left': Logo on the left, content on the right
   * - 'top': Logo above content
   */
  logoPosition: i = 'left',
  // 'left' | 'top'
  /**
   * Text alignment when logoPosition is 'top': 'left' | 'center'
   * Only applies when logoPosition is 'top'
   */
  textAlign: s = 'left',
  // 'left' | 'center'
  /**
   * Link label text for all events
   * Can be overridden by individual event objects
   */
  linkLabel: c = 'Learn More',
  // string
  id: o = '',
  className: f = '',
}) {
  const d = (e, a, b) => (a.includes(e) ? e : b);
  const x = Math.max(1, Math.floor(r) || 1);
  const p = d(i, ['left', 'top'], 'left');
  const g = d(s, ['left', 'center'], 'left');
  if (!n || n.length === 0) return null;
  const l = () => {
    const e = 'grid gap-section-spacing-x';
    const a = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
    };
    return `${e} ${a[x] || a[1]}`;
  }; const
    m = (e) => ({
      ...e,
      logoPosition: p,
      textAlign: e.textAlign || g,
      linkLabel: e.linkLabel || c,
      attributes: e.attributes || {},
    });
  return /* @__PURE__ */ t('div', {
    className: `${l()} container ${f}`,
    id: o,
    children: n.map((e, a) => /* @__PURE__ */ t(
      'div',
      {
        className: 'bg-white text-grey-950 p-events-padding',
        children: /* @__PURE__ */ t(M, { ...m(e) }),
      },
      a,
    )),
  });
}
export {
  A as default,
};
