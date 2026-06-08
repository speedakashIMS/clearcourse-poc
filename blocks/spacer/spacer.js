import React from 'react';
import { createRoot } from 'react-dom/client';
import Spacer from '../../scripts/components/Spacer.js';
import { getBlockData } from '../../scripts/utils/block.js';

export default function decorate(block) {
  const blockSchema = {
    id: { key: 'id', defaultValue: null, expectedType: 'string' },
    mode: { key: 'mode', defaultValue: 'preset', expectedType: 'string' },
    height: { key: 'height', defaultValue: null, expectedType: 'int' },
    presetDesktop: {
      key: 'presetDesktop',
      defaultValue: 'sm',
      expectedType: 'string',
    },
    presetMobile: {
      key: 'presetMobile',
      defaultValue: 'sm',
      expectedType: 'string',
    },
  };

  const data = getBlockData(block, blockSchema);

  const root = createRoot(block);
  root.render(React.createElement(Spacer, data));
}
