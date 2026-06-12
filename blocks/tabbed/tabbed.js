import React from 'react';
import { createRoot } from 'react-dom/client';
import Tabbed from '../../scripts/components/Tabbed.js';
import { blockToMap } from '../../scripts/utils/block.js';

export default async function decorate(block) {
  const blockData = blockToMap(block);

  const data = {
    type: blockData.type || 'lozenges',
    defaultActiveIndex: Number(blockData.defaultactiveindex) || 0,
    tabs: []
      .concat(blockData.items ?? [])
      .map((item) => ({
        text: item.text,
        image: item.imagesource === 'url' ? item.imageurl : item.imageasset?.src,
        imageAlt: item.imagealt || '',
        content: item.content,
        // thread aue instrumentation so each tab is selectable/editable in Universal Editor
        attributes: item._meta || {},
      })),
  };

  const root = createRoot(block);
  root.render(React.createElement(Tabbed, data));
}
