import React from 'react';
import { createRoot } from 'react-dom/client';
import GiftProCardAndText from '../../scripts/components/GiftProCardAndText.js';
import { blockToMap } from '../../scripts/utils/block.js';
import { origin } from '../../scripts/configuration.js';

function appendOriginIfNeeded(value) {
  if (typeof value !== 'string') {
    return '';
  }

  if (typeof origin !== 'string' || !origin) {
    return value;
  }

  return value.replace(/\/content\/dam/g, `${origin}/content/dam`);
}

export default async function decorate(block) {
  const blockData = blockToMap(block);

  function buildItemMedia(item) {
    const imageUrl = item.imagesource === 'url'
      ? item.imageurl
      : item.imageasset?.src;

    if (!imageUrl) return null;

    return {
      type: 'image',
      imageUrl: appendOriginIfNeeded(imageUrl),
      title: item.imagetitle || item.cardtitle || 'GiftPro Media',
    };
  }

  const data = {
    id: blockData.id,
    align: blockData.align || 'left',
    infinite: blockData.infinite === 'true' || false,
    giftProCardAndTexts: []
      .concat(blockData.items ?? [])
      .map((item) => ({
        cardTitle: item.cardtitle,
        bodyLarge: item.bodylarge,
        bodyDefault: item.bodydefault,
        bodySmall: item.bodysmall,
        iconUrl: item.iconsource === 'url'
          ? item.iconurl
          : appendOriginIfNeeded(item.iconasset?.src),
        imageUrl: item.imagesource === 'url'
          ? item.imageurl
          : appendOriginIfNeeded(item.imageasset?.src),
        media: buildItemMedia(item),
        align: item.alignment || blockData.align || 'left',
        attributes: item._meta || {},
        textColor: item.textcolor || blockData.textColor || 'text-white',
      })),
  };

  const root = createRoot(block);
  root.render(React.createElement(GiftProCardAndText, data));
}
