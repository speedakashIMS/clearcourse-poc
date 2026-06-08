import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import TextAndMedia from '../../scripts/components/TextAndMedia.js';
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

export default function decorate(block) {
  const blockData = blockToMap(block);

  const data = {
    id: blockData.id,
    media: blockData.variant,
    imageUrl: blockData.imagesource === 'url' ? blockData.imageurl : blockData.imageasset?.src,
    videoUrl: appendOriginIfNeeded(blockData.videourl),
    lottieUrl: blockData.lottieurl,
    lottieData: blockData.lottiedata ? JSON.parse(blockData.lottiedata) : null,
    iframeUrl: blockData.iframeurl,
    flipbookUrl: appendOriginIfNeeded(blockData.flipbookurl),
    mediaPosition: blockData.mediaposition,
    mediaFramed: blockData.mediaframed === 'true',
    richText: blockData.text,
    richTextAlign: blockData.textalignment || 'left',
    valueList: {
      useIcon: blockData.useicon === 'true',
      size: blockData.iconsize || 'small',
      stacked: blockData.stacked === 'true',
      items: (blockData.itemtextvalue ?? []).map((item, index) => ({
        text: item,
        number: blockData.useicon === 'true' ? null : index + 1,
        // eslint-disable-next-line no-underscore-dangle
        attributes: item._meta ?? {},
      })),
    },
    buttonText: blockData.buttontext,
    buttonHref: blockData.buttonhref,
    buttonVariant: blockData.buttonvariant || 'light',
  };
  const root = createRoot(block);
  root.render(React.createElement(TextAndMedia, data));
}
