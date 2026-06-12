import React from 'react';
import { createRoot } from 'react-dom/client';
import NavigationSimple from '../../scripts/components/NavigationSimple.js';
import { blockToMap, updateQueryParams } from '../../scripts/utils/block.js';

function parseAlignNavRight(value) {
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return undefined;
}

/**
 * ONLY parse navigationitems (NOT whole block)
 */
function parseNavigationItems(block) {
  const items = [];

  const navRow = Array.from(block.children).find((row) => row.children?.[0]?.textContent?.trim()?.toLowerCase() === 'navigationitems');

  if (!navRow) return [];

  const valueCell = navRow.children?.[1];
  if (!valueCell) return [];

  const topItems = valueCell.querySelectorAll(':scope > ul > li');

  topItems.forEach((li) => {
    const label = li.childNodes?.[0]?.textContent?.trim() || li.querySelector('p')?.textContent?.trim() || '';

    const submenu = [];

    li.querySelectorAll(':scope > ul > li').forEach((subLi) => {
      const title = subLi.childNodes?.[0]?.textContent?.trim() || '';
      const subtitle = subLi.childNodes?.[1]?.textContent?.trim() || '';

      submenu.push({
        title,
        subtitle,
        href: '#',
      });
    });

    items.push({ label, submenu });
  });

  return items;
}

function getIcon(subItem) {
  if (!subItem) return undefined;

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
  /**
   * SAFE: use blockToMap ONLY for simple fields
   */
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

  console.log('blockData:', blockData);

  /**
   * ONLY navigation is parsed manually
   */
  const navigationitems = parseNavigationItems(block);

  const navItems = (navigationitems || []).map((item) => ({
    label: item.label || '',
    submenu: (item.submenu || []).map((subItem) => ({
      title: subItem.title || '',
      subtitle: subItem.subtitle || '',
      href: subItem.href || '#',
      icon: getIcon(subItem),
    })),
  }));

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

  console.log('FINAL navItems:', navItems);

  const root = createRoot(block);
  root.render(React.createElement(NavigationSimple, data));
}
