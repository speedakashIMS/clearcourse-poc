import React from 'react';
import { createRoot } from 'react-dom/client';
import Cards from '../../scripts/components/Cards.js';
import {
  getBlockData,
  getBlockExistingPropsCnt,
  getBlockItemData,
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
    type: { key: 'type', defaultValue: 'image', expectedType: 'string' },
    imageColumns: { key: 'imageColumns', defaultValue: 3, expectedType: 'int' },
    iconColumns: { key: 'iconColumns', defaultValue: 3, expectedType: 'int' },
  };

  const existingBlockPropCnt = getBlockExistingPropsCnt(
    block,
    Object.values(blockSchema).map((x) => x.key),
  );

  const blockItems = block.querySelectorAll(
    existingBlockPropCnt > 0
      ? `div[data-block-name="cards"] > div:nth-child(${existingBlockPropCnt}) ~ div`
      : 'div[data-block-name="cards"] > div',
  );

  const b = getBlockData(block, blockSchema);
  b.columns = b.type === 'image' ? b.imageColumns : b.iconColumns;

  const data = {
    ...b,
    data: [...blockItems]
      .map((b) =>
        getBlockItemDataV2(b, {
          id: { key: 'id', defaultValue: '', expectedType: 'string' },
          title: { key: 'title', defaultValue: '', expectedType: 'string' },
          description: {
            key: 'description',
            defaultValue: '',
            expectedType: 'string',
          },
          isStacked: {
            key: 'isStacked',
            defaultValue: true,
            expectedType: 'boolean',
          },
          mediaVariant: {
            key: 'mediaVariant',
            defaultValue: 'flushed',
            expectedType: 'string',
          },
          mediaPosition: {
            key: 'mediaPosition',
            defaultValue: 'left',
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
          buttonText: {
            key: 'buttonText',
            defaultValue: '',
            expectedType: 'string',
          },
          buttonLink: {
            key: 'buttonLink',
            defaultValue: '',
            expectedType: 'link',
          },
          buttonVariant: {
            key: 'buttonVariant',
            defaultValue: 'light',
            expectedType: 'string',
          },
        }),
      )
      .map((l) => ({
        id: l.id,
        attributes: l.attributes,
        title: l.title,
        description: l.description,
        stacked: l.isStacked,
        variant: b.type === 'icon' && l.isStacked ? 'circle' : l.mediaVariant,
        iconPosition: l.mediaPosition,
        media: l.mediaType,
        imageUrl: l.imageUrl,
        videoUrl: l.videoType === 'upload' ? appendOriginIfNeeded(l.videoUpload) : l.videoExternal,
        lottieUrl: l.lottieUrl,
        lottieData: l.lottieData,
        iframeUrl: l.iframeText,
        buttonText: l.buttonText,
        buttonHref: l.buttonHref,
        buttonVariant: l.buttonVariant,
      })),
  };
  
  const root = createRoot(block);
  root.render(React.createElement(Cards, data));
}
