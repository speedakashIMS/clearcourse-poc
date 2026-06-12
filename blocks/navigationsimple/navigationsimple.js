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
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return undefined;
}

function getIcon(subItem) {
  if (!subItem) return undefined;

  if (subItem.iconsource === 'url') {
    return subItem.iconurl || undefined;
  }

  if (subItem.iconsource === 'assets' && subItem.iconasset?.src) {
    return updateQueryParams(subItem.iconasset.src, {
      width: 48,
      format: 'webp',
      optimize: 'high',
    });
  }

  return undefined;
}

function normalizeNavigationItems(blockData) {
  if (!Array.isArray(blockData?.navigationitems)) return [];

  return blockData.navigationitems.map((item) => ({
    label: item.label,
    submenu: Array.isArray(item.submenuitems)
      ? item.submenuitems.map((subItem) => ({
        title: subItem.title,
        subtitle: subItem.subtitle,
        href: subItem.link?.url || subItem.link || '#',
        icon: getIcon(subItem),
      }))
      : [],
  }));
}

export default async function decorate(block) {
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

  let navItems = normalizeNavigationItems(blockData);

  // Fallback only if model data is missing or invalid
  if (!navItems.length) {
    Array.from(block.children).forEach((row) => {
      const cells = Array.from(row.children);

      if (
        cells[0]?.textContent.trim().toLowerCase() === 'navigationitems'
      ) {
        const ul = cells[1]?.querySelector('ul');

        if (ul) {
          navItems = parseNavLinks(ul);
        }
      }
    });
  }

  const logo = blockData.logosource === 'url'
    ? blockData.logourl
    : blockData.logoasset?.src
      ? updateQueryParams(blockData.logoasset.src, {
        width: 64,
        format: 'webp',
        optimize: 'high',
      })
      : undefined;

  const data = {
    fullWidth: blockData.fullwidth === 'true',
    logo,
    navItems,
    buttons: (blockData.buttons || []).map((item) => ({
      text: item.buttontext,
      href: item.buttonlink,
      variant: item.buttonvariant || 'light',
      size: item.buttonsize || 'btn-md',
    })),
    alignNavRight: parseAlignNavRight(blockData.alignnavigationright),
    variant: blockData.colorvariant || 'dark',
  };

  console.log('NavigationSimple blockData:', blockData);
  console.log('NavigationSimple navItems:', navItems);

  const root = createRoot(block);
  root.render(React.createElement(NavigationSimple, data));
}
