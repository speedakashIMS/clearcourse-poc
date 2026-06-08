import React from 'react';
import { createRoot } from 'react-dom/client';
import AwardsCards from '../../scripts/components/AwardsCards.js';
import {
  getBlockData,
  getBlockExistingPropsCnt,
  getBlockItemDataV2,
} from '../../scripts/utils/block.js';
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
  const blockSchema = {
    id: { key: 'id', defaultValue: null, expectedType: 'string' },
  };

  const existingBlockPropCnt = getBlockExistingPropsCnt(
    block,
    Object.values(blockSchema).map((x) => x.key),
  );

  const blockItems = block.querySelectorAll(
    existingBlockPropCnt > 0
      ? `div[data-block-name="awardscards"] > div:nth-child(${existingBlockPropCnt}) ~ div`
      : 'div[data-block-name="awardscards"] > div',
  );

  const b = getBlockData(block, blockSchema);
  const data = {
    ...b,
    items: [...blockItems]
      .map((b) => getBlockItemDataV2(b, {
        id: { key: 'id', defaultValue: '', expectedType: 'string' },
        title: { key: 'title', defaultValue: '', expectedType: 'string' },
        subtitle: {
          key: 'subtitle',
          defaultValue: '',
          expectedType: 'string',
        },
        linkText: {
          key: 'linkText',
          defaultValue: null,
          expectedType: 'string',
        },
        linkHref: {
          key: 'linkUrl',
          defaultValue: null,
          expectedType: 'string',
        },
        linkVariant: {
          key: 'linkVariant',
          defaultValue: 'light',
          expectedType: 'string',
        },
        mediaType: {
          key: 'mediaType',
          defaultValue: 'image',
          expectedType: 'string',
        },
        imageUrl: {
          key: 'imageUrl',
          defaultValue: null,
          expectedType: 'picture',
        },
        iframeText: {
          key: 'iframeText',
          defaultValue: '',
          expectedType: 'string',
        },
        videoType: {
          key: 'videoType',
          defaultValue: 'upload',
          expectedType: 'string',
        },
        videoUpload: {
          key: 'videoUpload',
          defaultValue: null,
          expectedType: 'string',
        },
        videoExternal: {
          key: 'videoExternal',
          defaultValue: null,
          expectedType: 'string',
        },
        lottieType: {
          key: 'lottieType',
          defaultValue: 'url',
          expectedType: 'string',
        },
        lottieUrl: {
          key: 'lottieUrl',
          defaultValue: null,
          expectedType: 'string',
        },
        lottieData: {
          key: 'lottieData',
          defaultValue: null,
          expectedType: 'json',
        },
        mediaText: {
          key: 'mediaText',
          defaultValue: null,
          expectedType: 'string',
        },
        mediaAspectRatio: {
          key: 'mediaAspectRatio',
          defaultValue: 'default',
          expectedType: 'string',
        },
      }))
      .map((l) => ({
        id: l.id,
        attributes: l.attributes,
        title: l.title,
        subtitle: l.subtitle,
        linkText: l.linkText,
        linkHref: l.linkHref,
        linkVariant: l.linkVariant,
        mediaProps: {
          media: l.mediaType,
          imageUrl: l.imageUrl,
          videoUrl: l.videoType === 'upload' ? appendOriginIfNeeded(l.videoUpload) : l.videoExternal,
          lottieUrl: l.lottieUrl,
          lottieData: l.lottieData,
          iframeUrl: l.iframeText,
          title: l.mediaText,
          aspect: l.mediaAspectRatio,
        },
      })),
  };

  const root = createRoot(block);
  root.render(React.createElement(AwardsCards, data));
}
