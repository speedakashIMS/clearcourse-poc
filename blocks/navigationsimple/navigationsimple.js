import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import NavigationSimple from '../../scripts/components/NavigationSimple.js';
import { updateQueryParams } from '../../scripts/utils/block.js';

/**
 * Normalize boolean values
 */
function parseAlignNavRight(value) {
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return undefined;
}

/**
 * Resolve icon from EDS fields
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
 * SAFE EDS PARSER (replaces blockToMap for nested containers)
 * This is the key fix for your issue.
 */
function parseBlock(block) {
  const data = {
    navigationitems: [],
    buttons: [],
  };

  Array.from(block.children).forEach((row) => {
    const cells = Array.from(row.children);
    const key = cells[0]?.textContent?.trim()?.toLowerCase();
    const valueCell = cells[1];

    if (!key || !valueCell) return;

    /**
     * SIMPLE FIELDS (text, boolean, select, etc.)
     */
    if (!valueCell.querySelector('ul') && !valueCell.querySelector(':scope > div')) {
      data[key] = valueCell.textContent.trim();
      return;
    }

    /**
     * NAVIGATION ITEMS (MOST IMPORTANT PART)
     */
    if (key === 'navigationitems') {
      const items = [];

      const itemNodes = valueCell.querySelectorAll(':scope > ul > li');

      itemNodes.forEach((li) => {
        const label = li.childNodes?.[0]?.textContent?.trim() || li.querySelector('p')?.textContent?.trim() || '';

        const submenu = [];

        const subNodes = li.querySelectorAll(':scope > ul > li');

        subNodes.forEach((subLi) => {
          const title = subLi.childNodes?.[0]?.textContent?.trim() || '';
          const subtitle = subLi.childNodes?.[1]?.textContent?.trim() || '';

          submenu.push({
            title,
            subtitle,
            href: '#',
          });
        });

        items.push({
          label,
          submenu,
        });
      });

      data.navigationitems = items;
    }

    /**
     * BUTTONS (basic fallback parsing)
     */
    if (key === 'buttons') {
      const btnItems = [];

      const btnNodes = valueCell.querySelectorAll(':scope > ul > li');

      btnNodes.forEach((li) => {
        const text = li.querySelector('[data-text], p')?.textContent?.trim() || '';
        const href = li.querySelector('a')?.getAttribute('href') || '#';

        btnItems.push({
          buttontext: text,
          buttonlink: href,
        });
      });

      data.buttons = btnItems;
    }
  });

  return data;
}

/**
 * MAIN DECORATE FUNCTION
 */
export default async function decorate(block) {
  const blockData = parseBlock(block);

  console.log('PARSED BLOCK DATA:', blockData);

  /**
   * Normalize navigation items
   */
  const navItems = (blockData.navigationitems || []).map((item) => ({
    label: item.label || '',
    submenu: (item.submenu || []).map((subItem) => ({
      title: subItem.title || '',
      subtitle: subItem.subtitle || '',
      href: subItem.href || '#',
      icon: getIcon(subItem),
    })),
  }));

  /**
   * Logo handling
   */
  const logo = blockData.logosource === 'url'
    ? blockData.logourl
    : blockData.logoasset?.src
      ? updateQueryParams(blockData.logoasset.src, {
        width: 64,
        format: 'webp',
        optimize: 'high',
      })
      : undefined;

  /**
   * Final props for React
   */
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

  console.log('FINAL NAV ITEMS:', navItems);

  const root = createRoot(block);
  root.render(React.createElement(NavigationSimple, data));
}
