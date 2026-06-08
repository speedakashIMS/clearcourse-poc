import React from 'react';
import { createRoot } from 'react-dom/client';
import RichText from '../../scripts/components/RichText.js';
import { getBlockData } from '../../scripts/utils/block.js';

export default async function decorate(block) {
  const blockSchema = {
    id: { key: 'id', defaultValue: null, expectedType: 'string' },
    content: { key: 'content', defaultValue: '', expectedType: 'richtext' },
    size: { key: 'size', defaultValue: 'normal', expectedType: 'string' },
  };

  const data = getBlockData(block, blockSchema);

  const root = createRoot(block);
  root.render(React.createElement(RichText, data));
}
