import React from 'react';
import { createRoot } from 'react-dom/client';
import HeroArticle from '../../scripts/components/HeroArticle.js';
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

function formatDateLong(dateInput) {
  const date = new Date(dateInput);

  if (isNaN(date)) return null;

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function createMedia(blockData) {
  if (!blockData?.mediatype) return null;

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
    type: blockData.mediatype,
    imageUrl,
    videoUrl,
    lottieUrl: blockData.medialottieurl,
    lottieData,
    iframeUrl: blockData.mediaiframeurl,
    title: blockData?.mediatitle || 'Hero Article Media',
  };
}

export default async function decorate(block) {
  const blockData = blockToMap(block);

  const data = {
    id: blockData.id,
    imagePosition: blockData.imageposition || 'bottom',
    title: blockData.title,
    description: blockData.description,
    date: formatDateLong(blockData.date),
    media: createMedia(blockData),
    categories: blockData.categories
      ? String(blockData.categories).split(',').map((s) => s.trim()).filter(Boolean)
      : [],
  };
  const root = createRoot(block);
  root.render(React.createElement(HeroArticle, data));
}
