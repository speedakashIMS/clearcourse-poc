import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import CardsImage from '../../scripts/components/CardsImage.js';
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

  const data = {
    id: blockData.id,
    columns: Number(blockData.columns) || 3,
    data: []
      .concat(blockData.items ?? [])
      .map((item) => ({
        media: item.mediatype,
        imageUrl: item.imagesource === 'url' ? item.imageurl : item.imageasset?.src,
        videoUrl: item.videosource === 'url' ? item.videourl : appendOriginIfNeeded(item.videoasset),
        lottieUrl: item.lottieurl,
        lottieData: item.lottiedata ? JSON.parse(item.lottiedata) : null,
        iframeUrl: item.iframeurl,
        mediaAltTitle: item.mediaalt,
        title: item.title,
        description: item.description,
        descriptionRichText: item.description,
        buttonText: item.buttontext,
        buttonHref: item.buttonhref || item.buttonlink,
        buttonVariant: item.buttonvariant,
        buttonType: item.buttontype,
        linkVariant: item.linkvariant,
        // eslint-disable-next-line no-underscore-dangle
        attributes: item._meta || {},
      })),
    stacked: blockData.stacked === 'true',
    imagePosition: blockData.imageposition || 'left',
    variant: blockData.variant || 'flushed',
    itemBackgroundVariant: blockData.itembackgroundvariant || 'default',
  };
  const root = createRoot(block);
  root.render(React.createElement(CardsImage, data));
}
