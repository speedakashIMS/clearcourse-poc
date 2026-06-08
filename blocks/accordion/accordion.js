import React from 'react';
import { createRoot } from 'react-dom/client';
import Accordion from '../../scripts/components/Accordion.js';
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
    columns: { key: 'columns', defaultValue: 1, expectedType: 'int' },
    width: { key: 'width', defaultValue: 'wide', expectedType: 'string' },
    colorVariant: { key: 'colorVariant', defaultValue: 'dark', expectedType: 'string' },
    iconPosition: {
      key: 'iconPosition',
      defaultValue: 'left',
      expectedType: 'string',
    },
    mediaPosition: {
      key: 'mediaPosition',
      defaultValue: 'left',
      expectedType: 'string',
    },
    mediaTitle: { key: 'mediaTitle', defaultValue: '', expectedType: 'string' },
    mediaType: {
      key: 'mediaType',
      defaultValue: 'image',
      expectedType: 'string',
    },
    imageUrl: { key: 'imageUrl', defaultValue: null, expectedType: 'picture' },
    iframeText: { key: 'iframeText', defaultValue: '', expectedType: 'string' },
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
    lottieUrl: { key: 'lottieUrl', defaultValue: null, expectedType: 'string' },
    lottieData: { key: 'lottieData', defaultValue: null, expectedType: 'json' },
    schemaMarkup: { key: 'schemaMarkup', defaultValue: true, expectedType: 'boolean' },
  };

  const existingBlockPropCnt = getBlockExistingPropsCnt(
    block,
    Object.values(blockSchema).map((x) => x.key),
  );

  const blockItems = block.querySelectorAll(
    existingBlockPropCnt > 0
      ? `div[data-block-name="accordion"] > div:nth-child(${existingBlockPropCnt}) ~ div`
      : 'div[data-block-name="accordion"] > div',
  );

  const b = getBlockData(block, blockSchema);
  const data = {
    ...{
      columns: b.columns,
      width: b.columns === '2' ? 'full' : b.width,
      colorVariant: b.colorVariant,
      iconPosition: b.iconPosition,
      mediaPosition: b.mediaPosition,
      media: {
        type: b.mediaType || 'image',
        title: b.mediaTitle,
        imageUrl: b.imageUrl,
        videoUrl: b.videoType === 'external' ? b.videoExternal : appendOriginIfNeeded(b.videoUpload),
        lottieUrl: b.lottieUrl,
        lottieData: b.lottieData,
        iframeUrl: b.iframeText,
      },
    },
    list: [...blockItems].map((b) => getBlockItemDataV2(b, {
      id: { key: 'id', defaultValue: '', expectedType: 'string' },
      title: { key: 'title', defaultValue: '', expectedType: 'string' },
      content: { key: 'content', defaultValue: '', expectedType: 'richtext' },
    })),
  };

  const root = createRoot(block);
  root.render(React.createElement(Accordion, data));

  if (b.schemaMarkup && data.list.length > 0) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.list.map((item) => ({
        '@type': 'Question',
        name: item.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.content,
        },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  const observer = new MutationObserver(() => {
    const items = block.querySelectorAll('.accordion-item');
    if (items.length > 0) {
      items.forEach((item, index) => {
        item.setAttribute('data-analytics-position', index + 1);
      });
      observer.disconnect();
    }
  });

  observer.observe(block, { childList: true, subtree: true });
}
