import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import NavigationSimple from '../../scripts/components/NavigationSimple.js';
import { blockToMap, updateQueryParams } from '../../scripts/utils/block.js';

function parseNavLinks(ul) {
  return Array.from(ul.children)
    .filter((li) => li.tagName === 'LI')
    .map((li) => {
      const a = li.querySelector(':scope > a, :scope > p > a');
      const childUl = li.querySelector(':scope > ul');
      const item = {
        label: a?.textContent.trim() || li.firstChild?.textContent.trim() || '',
        href: a?.getAttribute('href') || '#',
      };
      if (childUl) {
        item.submenu = parseNavLinks(childUl);
      }
      return item;
    });
}

function parseAlignNavRight(value) {
  if (value === false || value === 'false') {
    return false;
  }
  if (value === true || value === 'true') {
    return true;
  }
  return undefined;
}

export default async function decorate(block) {
  let navItems = [];
  Array.from(block.children).forEach((row) => {
    const cells = Array.from(row.children);
    if (cells[0]?.textContent.trim().toLowerCase() === 'links') {
      const ul = cells[1]?.querySelector('ul');
      if (ul) navItems = parseNavLinks(ul);
    }
  });

  const blockData = blockToMap(block, {
    schemas: {
      buttons: [
        'buttontext',
        'buttonsize',
        'buttonvariant',
        'buttonlink',
      ],
    },
  });

  const data = {
    fullWidth: blockData.fullwidth === 'true',
    logo: blockData.logosource === 'url'
      ? blockData.logourl
      : updateQueryParams(blockData.logoasset?.src, { width: 64, format: 'webply', optimize: 'high' }),
    navItems,
    buttons: []
      .concat(blockData.buttons ?? [])
      .map((item) => ({
        text: item.buttontext,
        href: item.buttonlink,
        variant: item.buttonvariant || 'light',
        size: item.buttonsize || 'btn-md',
      })),
    alignNavRight: parseAlignNavRight(blockData.alignnavigationright),
    variant: blockData.colorvariant || 'dark',
  };
  const root = createRoot(block);
  root.render(React.createElement(NavigationSimple, data));
}
