import React from 'react';
import { createRoot } from 'react-dom/client';
import Logos from '../../scripts/components/Logos.js';
import {
  getBlockData,
  getBlockExistingPropsCnt,
  getBlockItemDataV2,
} from '../../scripts/utils/block.js';

export default function decorate(block) {
  const blockSchema = {
    id: { key: 'id', defaultValue: null, expectedType: 'string' },
    carousel: {
      key: 'isCarouselMode',
      defaultValue: false,
      expectedType: 'boolean',
    },
  };

  const existingBlockPropCnt = getBlockExistingPropsCnt(
    block,
    Object.values(blockSchema).map((x) => x.key),
  );

  const blockItems = block.querySelectorAll(
    existingBlockPropCnt > 0
      ? `div[data-block-name="logos"] > div:nth-child(${existingBlockPropCnt}) ~ div`
      : 'div[data-block-name="logos"] > div',
  );

  const logos = [...blockItems]
    .map((b) =>
      getBlockItemDataV2(b, {
        id: { key: 'id', defaultValue: '', expectedType: 'string' },
        uploadImage: {
          key: 'uploadImage',
          defaultValue: '',
          expectedType: 'picture',
        },
        externalImage: {
          key: 'externalImage',
          defaultValue: '',
          expectedType: 'string',
        },
        imageAltText: {
          key: 'imageAltText',
          defaultValue: 'Logo',
          expectedType: 'string',
        },
        href: { key: 'link', defaultValue: '', expectedType: 'string' },
      }),
    )
    .map((l) => ({
      id: l.id,
      attributes: l.attributes,
      href: l.href,
      src: !!l.uploadImage ? l.uploadImage : l.externalImage,
      alt: l.imageAltText,
    }));

  const data = {
    ...getBlockData(block, blockSchema),
    logos,
  };
  
  const root = createRoot(block);
  root.render(React.createElement(Logos, data));
}
