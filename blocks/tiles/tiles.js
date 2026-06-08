import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import Tiles from '../../scripts/components/Tiles.js';
import {
  getBlockData,
  getBlockExistingPropsCnt,
  getBlockItemDataV2,
  updateQueryParams,
} from '../../scripts/utils/block.js';

function cleanButtonHref(href) {
  return typeof href === 'string' ? href.replace(/^\/content\/ims-foundational-kit/, '') : href;
}

function asArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return typeof value === 'string' && value.trim() ? [value] : [];
}

export default function decorate(block) {
  const blockSchema = {
    id: { key: 'id', defaultValue: null, expectedType: 'string' },
    columns: { key: 'columns', defaultValue: 3, expectedType: 'int' },
    gridVariant: {
      key: 'gridVariant',
      defaultValue: 'contained',
      expectedType: 'string',
    },
  };

  const existingBlockPropCnt = getBlockExistingPropsCnt(
    block,
    Object.values(blockSchema).map((x) => x.key),
  );

  const blockItems = block.querySelectorAll(
    existingBlockPropCnt > 0
      ? `div[data-block-name="tiles"] > div:nth-child(${existingBlockPropCnt}) ~ div`
      : 'div[data-block-name="tiles"] > div',
  );

  const data = {
    ...getBlockData(block, blockSchema),
    data: [...blockItems].map((b) => {
      const tileData = getBlockItemDataV2(b, {
        id: { key: 'id', defaultValue: '', expectedType: 'string' },
        title: { key: 'title', defaultValue: '', expectedType: 'string' },
        description: {
          key: 'description',
          defaultValue: '',
          expectedType: 'string',
        },
        backgroundImage: {
          key: 'backgroundImage',
          defaultValue: null,
          expectedType: 'picture',
        },
        backgroundColor: {
          key: 'backgroundcolor',
          defaultValue: 'primary',
          expectedType: 'string',
        },
        richText: {
          key: 'text',
          defaultValue: null,
          expectedType: 'richtext',
        },
        useIcon: {
          key: 'useicon',
          defaultValue: false,
          expectedType: 'boolean',
        },
        size: {
          key: 'iconsize',
          defaultValue: 'small',
          expectedType: 'string',
        },
        stacked: {
          key: 'stacked',
          defaultValue: false,
          expectedType: 'boolean',
        },
        valueListItems: {
          key: 'valuelistitems',
          defaultValue: [],
          expectedType: 'string[]',
        },
        buttonText: {
          key: 'buttonText',
          defaultValue: '',
          expectedType: 'string',
        },
        buttonHref: {
          key: 'buttonLink',
          defaultValue: '',
          expectedType: 'link',
        },
        buttonType: {
          key: 'buttonType',
          defaultValue: 'link',
          expectedType: 'string',
        },
      });
      const valueListItems = asArray(tileData.valueListItems);

      return {
        ...tileData,
        buttonHref: cleanButtonHref(tileData.buttonHref),
        backgroundImage: updateQueryParams(tileData.backgroundImage, {
          width: 400,
          format: 'webply',
          optimize: 'high',
        }),
        valueList: valueListItems.length > 0 ? {
          useIcon: tileData.useIcon,
          size: tileData.size,
          stacked: tileData.stacked,
          items: valueListItems.map((text, index) => ({
            text,
            number: index + 1,
          })),
        } : null,
      };
    }),
  };

  const root = createRoot(block);
  root.render(React.createElement(Tiles, data));
}
