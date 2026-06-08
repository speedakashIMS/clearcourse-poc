import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import HeroBackgroundImage from '../../scripts/components/HeroBackgroundImage.js';
import { blockToMap } from '../../scripts/utils/block.js';

const asArray = (value) => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

function decodeToPlainString(input) {
  if (!input) return '';

  let str = input.trim();
  if (str.startsWith('"') && str.endsWith('"')) {
    str = str.slice(1, -1);
  }

  const textarea = document.createElement('textarea');
  textarea.innerHTML = str;

  return textarea.value;
}

function getBackgroundImage(item) {
  if (item.backgroundimagesource === 'url') {
    return item.backgroundimageurl;
  }

  const el = item.backgroundimageasset?.element;
  if (!el) return null;

  let html = el.outerHTML;
  html = html
    .replace(/\swidth="[^"]*"/g, '')
    .replace(/\sheight="[^"]*"/g, '')
    .replace(/\sloading="[^"]*"/g, '');

  if (!html.includes('fetchpriority')) {
    html = html.replace(/<img/, '<img fetchPriority="high"');
  }

  return html;
}

export default async function decorate(block) {
  const blockData = blockToMap(block, {
    schemas: {
      logos: [
        'logosource',
        'logourl',
        'logoasset',
        'logoalt',
      ],
      buttons: [
        'buttontext',
        'buttonlink',
        'buttonvariant',
        'buttonsize',
      ],
    },
    itemSchemas: {
      herobackgroundimageitem: [
        'type',
        'title',
        'titleaccent',
        'titleaccentcolor',
        'titlecolor',
        'titlesize',
        'description',
        'backgroundimagesource',
        'backgroundimageurl',
        'backgroundimageasset',
        'textalignment',
        'textalignmentkey',
        'widget',
        'buttons',
        'logos',
      ],
    },
  });

  const height = blockData.height || 'normal';
  const size = blockData.size || 'default';
  block.dataset.heroHeight = height;
  if (size && size !== 'default') {
    block.dataset.heroSize = size;
  }

  const data = {
    id: blockData.id,
    buttonSize: blockData.buttonsize || 'btn-md',
    size,
    height,
    slides: []
      .concat(blockData.items ?? [])
      .map((item) => ({
        title: item.title,
        titleAccent: item.titleaccent,
        titleAccentColor: item.titleaccentcolor,
        titleColor: item.titlecolor || 'white',
        titleSize: item.titlesize || 'normal',
        description: item.description,
        backgroundImage: getBackgroundImage(item),
        buttons: asArray(item.buttons).map((button) => ({
          text: button.buttontext,
          href: button.buttonlink,
          variant: button.buttonvariant || 'light',
        })),
        logos: asArray(item.logos).map((logo) => ({
          src: logo.logosource === 'url' ? logo.logourl : logo.logoasset?.src,
          alt: logo.logoalt,
        })),
        textAlignment: item.textalignment || 'left',
        trustpilotWidget: decodeToPlainString(item.widget),
        // eslint-disable-next-line no-underscore-dangle
        attributes: item._meta || {},
      })),
    infinite: false,
  };
  const root = createRoot(block);
  root.render(React.createElement(HeroBackgroundImage, data));
}
