import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import Media from '../../scripts/components/Media.js';
import { blockToMap } from '../../scripts/utils/block.js';

export default async function decorate(block) {
  const blockData = blockToMap(block);

  const data = {
    id: blockData.id,
    media: blockData.variant,
    aspect: blockData.aspect || 'default',
    containerSize: blockData.containersize || 'large',
    imageUrl: blockData.imagesource === 'url' ? blockData.imageurl : blockData.imageasset?.src,
    lottieUrl: blockData.lottieurl,
    lottieData: blockData.lottiedata ? JSON.parse(blockData.lottiedata) : null,
    iframeUrl: blockData.iframeurl,
    flipbookUrl: blockData.flipbookurl,
    alt: blockData.alt,
  };
  const root = createRoot(block);
  root.render(React.createElement(Media, data));
}
