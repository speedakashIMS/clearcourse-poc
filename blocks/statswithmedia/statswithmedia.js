import React from 'react';
import { createRoot } from 'react-dom/client';
import StatsWithMedia from '../../scripts/components/StatsWithMedia.js';
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

function createMedia(blockData) {
  if (!blockData?.mediavariant) return null;

  const imageUrl = blockData.mediaimagesource === 'url'
    ? blockData.mediaimageurl
    : blockData.mediaimageasset?.src;

  const videoUrl = blockData.mediavideosource === 'url'
    ? blockData.mediavideourl
    : appendOriginIfNeeded(blockData.mediavideoasset);

  const lottieData = blockData.medialottiedata
    ? JSON.parse(blockData.medialottiedata)
    : null;

  const hasMedia = imageUrl
        || videoUrl
        || blockData.medialottieurl
        || lottieData
        || blockData.mediaiframeurl;

  if (!hasMedia) return null;

  return {
    type: blockData.mediavariant,
    imageUrl,
    videoUrl,
    lottieUrl: blockData.medialottieurl,
    lottieData,
    iframeUrl: blockData.mediaiframeurl,
    title: blockData?.mediatitle || 'Media',
  };
}

function createStatMedia(blockData) {
  if (!blockData?.statmediavariant) return null;

  const imageUrl = blockData.statmediaimagesource === 'url'
    ? blockData.statmediaimageurl
    : blockData.statmediaimageasset?.src;

  const videoUrl = blockData.statmediavideosource === 'url'
    ? blockData.statmediavideourl
    : appendOriginIfNeeded(blockData.statmediavideoasset);

  const lottieData = blockData.statmedialottiedata
    ? JSON.parse(blockData.statmedialottiedata)
    : null;

  const hasMedia = imageUrl
        || videoUrl
        || blockData.statmedialottieurl
        || lottieData
        || blockData.statmediaiframeurl;

  if (!hasMedia) return null;

  return {
    media: blockData.statmediavariant,
    imageUrl,
    videoUrl,
    lottieUrl: blockData.statmedialottieurl,
    lottieData,
    iframeUrl: blockData.statmediaiframeurl,
    title: blockData?.statmediatitle || 'Stat Media',
  };
}

export default async function decorate(block) {
  const blockData = blockToMap(block);

  const data = {
    id: blockData.id,
    order: blockData.order || 'stat-first',
    stats: []
      .concat(blockData.items ?? [])
      .map((item) => ({
        stat: item.stat,
        description: item.description,
        statMedia: createStatMedia(item),
        textAlign: item.textalignment || 'center',
        fontSize: item.fontsize || 'sm',
        media: createMedia(item),
        attributes: item._meta || {},
      })),
  };

  const root = createRoot(block);
  root.render(React.createElement(StatsWithMedia, data));
}
