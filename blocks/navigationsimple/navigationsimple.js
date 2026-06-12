import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import NavigationSimple from '../../scripts/components/NavigationSimple.js';
import { blockToMap, updateQueryParams } from '../../scripts/utils/block.js';

/**
 * Normalize any EDS output into an array
 */
function toArray(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value;
  }

  // IMPORTANT: only treat indexed objects as arrays
  if (typeof value === 'object') {
    const keys = Object.keys(value);

    const isIndexedArray = keys.every((k) => !Number.isNaN(Number(k)));

    if (isIndexedArray) {
      return keys
        .sort((a, b) => Number(a) - Number(b))
        .map((k) => value[k]);
    }

    // fallback: return single object (NOT Object.values)
    return [value];
  }

  return [];
}

/**
 * UL fallback parser (legacy support)
 */
function parseNavLinks(ul) {
  return Array.from(ul.children)
    .filter((li) => li.tagName === 'LI')
    .map((li) => {
      const a = li.querySelector(':scope > a, :scope > p > a');
      const childUl = li.querySelector(':scope > ul');

      const item = {
        label: a?.textContent.trim() || '',
        href: a?.getAttribute('href') || '#',
      };

      if (childUl) {
        item.submenu = parseNavLinks(childUl);
      }

      return item;
    });
}

/**
 * boolean normalization
 */
function parseAlignNavRight(value) {
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return undefined;
}

/**
 * icon resolver
 */
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

/**
 * normalize navigation model safely
 */
function normalizeNavigationItems(blockData) {
  return toArray(blockData?.navigationitems).map((item) => ({
    label: item?.label || '',
    submenu: toArray(item?.submenuitems).map((subItem) => ({
      title: subItem?.title || '',
      subtitle: subItem?.subtitle || '',
      href: subItem?.link?.url || subItem?.link || '#',
      icon: getIcon(subItem),
    })),
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

  console.log('RAW blockData:', blockData);

  let navItems = normalizeNavigationItems(blockData);

  /**
   * fallback ONLY if model is missing completely
   */
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

  const logo = blockData.logosource === 'url' ? blockData.logourl : blockData.logoasset?.src ? updateQueryParams(blockData.logoasset.src, {
    width: 64,
    format: 'webp',
    optimize: 'high',
  }) : undefined;

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

  console.log('FINAL navItems:', navItems);

  const root = createRoot(block);
  root.render(React.createElement(NavigationSimple, data));
}
