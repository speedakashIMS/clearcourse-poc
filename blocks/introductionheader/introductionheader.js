import React from 'react';
// eslint-disable-next-line import/extensions
import { createRoot } from 'react-dom/client';
import IntroductionHeader from '../../scripts/components/IntroductionHeader.js';
import { getBlockData } from '../../scripts/utils/block.js';

export default function decorate(block) {
  const blockSchema = {
    id: { key: 'id', defaultValue: null, expectedType: 'string' },
    title: { key: 'title', defaultValue: '', expectedType: 'string' },
    titleHeaderType: {
      key: 'titleTag',
      defaultValue: 'h2',
      expectedType: 'string',
    },
    titleAccent: {
      key: 'accentTitle',
      defaultValue: false,
      expectedType: 'boolean',
    },
    alignment: {
      key: 'alignment',
      defaultValue: 'left',
      expectedType: 'string',
    },
    description: {
      key: 'description',
      defaultValue: '',
      expectedType: 'string',
    },
    descriptionSize: {
      key: 'descriptionSize',
      defaultValue: 'normal',
      expectedType: 'string',
    },
  };

  const data = getBlockData(block, blockSchema);

  const root = createRoot(block);
  root.render(React.createElement(IntroductionHeader, data));
}
