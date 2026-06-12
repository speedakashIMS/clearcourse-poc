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

function getIcon(subItem) {
  if (!subItem) {
    return undefined;
  }

  if (subItem.iconsource === 'url') {
    return subItem.iconurl;
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

  let navItems = [];

  // Preferred: use structured navigationitems from the model
  if (Array.isArray(blockData.navigationitems)) {
    navItems = blockData.navigationitems.map((item) => ({
      label: item.label,
      submenu: (item.submenuitems || []).map((subItem) => ({
        title: subItem.title,
        subtitle: subItem.subtitle,
        description: subItem.description,
        href: subItem.link,
        icon: getIcon(subItem),
      })),
    }));
  }

  // Fallback: existing UL parsing
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

  console.log('NavigationSimple blockData:', blockData);
  console.log('NavigationSimple navItems:', navItems);

  const root = createRoot(block);
  root.render(
    React.createElement(NavigationSimple, data),
  );
}