import React from 'react';
import { createRoot } from 'react-dom/client';
import StatsColumns from '../../scripts/components/StatsColumns.js';
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
  if (!blockData?.statmediavariant) return null;

  const imageUrl = blockData.statmediaimagesource === 'url'
    ? blockData.statmediaimageurl
    : blockData.statmediaimageasset?.src;

  const lottieData = blockData.statmedialottiedata
    ? JSON.parse(blockData.statmedialottiedata)
    : null;

  const hasMedia = imageUrl
        || blockData.statmediavideourl
        || blockData.statmedialottieurl
        || lottieData
        || blockData.statmediaiframeurl;

  if (!hasMedia) return null;

  return {
    media: blockData.statmediavariant,
    imageUrl,
    videoUrl: appendOriginIfNeeded(blockData.statmediavideourl),
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
    stats: []
      .concat(blockData.items || [])
      .map((item) => ({
        statMedia: createMedia(item),
        stat: item.stat,
        description: item.description,
        textAlign: item.textalignment || 'center',
        fontSize: item.fontsize || 'sm',
        attributes: item._meta || {},
      })),
  };

  const root = createRoot(block);
  root.render(React.createElement(StatsColumns, data));
}
