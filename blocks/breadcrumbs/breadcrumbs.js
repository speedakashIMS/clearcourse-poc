import React from 'react';
import { createRoot } from 'react-dom/client';
import Breadcrumbs from '../../scripts/components/Breadcrumbs.js';
import { blockToMap } from '../../scripts/utils/block.js';

export default async function decorate(block) {
  let items = [];

  const response = await fetch('/query-index.json');
  if (response.ok) {
    const json = await response.json();
    const pathMap = Object.fromEntries(
      (json.data || []).map((entry) => [entry.path, entry]),
    );

    const segments = window.location.pathname.replace(/\/$/, '').split('/').filter(Boolean);
    const paths = segments.map((_, i) => `/${segments.slice(0, i + 1).join('/')}`);

    items = [
      { text: 'Home', href: '/' },
      ...paths
        .filter((path) => pathMap[path])
        .map((path) => {
          const segment = path.split('/').pop();
          const title = pathMap[path].title || segment.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
          return { text: title, href: path };
        }),
    ];
  }

  const blockData = blockToMap(block);
  const data = {
    items,
    align: blockData.alignment || 'left',
    variant: blockData.variant || 'dark',
  };

  const root = createRoot(block);
  root.render(React.createElement(Breadcrumbs, data));

  if (items.length > 0) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.text,
        item: item.href,
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
