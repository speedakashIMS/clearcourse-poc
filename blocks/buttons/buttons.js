import React from 'react';
import { createRoot } from 'react-dom/client';
import Buttons from '../../scripts/components/Buttons.js';
import {
  getBlockData,
  getBlockExistingPropsCnt,
  getBlockItemDataV2,
} from '../../scripts/utils/block.js';

export default function decorate(block) {
  const blockSchema = {
    id: { key: 'id', defaultValue: null, expectedType: 'string' },
    size: { key: 'buttonSize', defaultValue: 'btn-md', expectedType: 'string' },
  };

  const existingBlockPropCnt = getBlockExistingPropsCnt(
    block,
    Object.values(blockSchema).map((x) => x.key),
  );

  const blockItems = block.querySelectorAll(
    existingBlockPropCnt > 0
      ? `div[data-block-name="buttons"] > div:nth-child(${existingBlockPropCnt}) ~ div`
      : 'div[data-block-name="buttons"] > div',
  );

  const parentBlock = getBlockData(block, blockSchema);
  const data = {
    ...parentBlock,
    buttons: [...blockItems]
      .map((b) => getBlockItemDataV2(b, {
        id: { key: 'id', defaultValue: '', expectedType: 'string' },
        text: { key: 'text', defaultValue: '', expectedType: 'string' },
        href: { key: 'link', defaultValue: null, expectedType: 'link' },
        variant: {
          key: 'variant',
          defaultValue: 'light',
          expectedType: 'string',
        },
      }))
      .map((b) => ({
        ...b,
        size: parentBlock.size,
      })),
  };

  const root = createRoot(block);
  root.render(React.createElement(Buttons, data));
}
