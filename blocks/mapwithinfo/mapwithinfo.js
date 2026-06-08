import React from 'react';
import { createRoot } from 'react-dom/client';
import MapWithInfo from '../../scripts/components/MapWithInfo.js';
import { blockToMap } from '../../scripts/utils/block.js';

export default async function decorate(block) {
  const blockData = blockToMap(block);

  const data = {
    id: blockData.id,
    richText: blockData.title,
    valueList: {
      useIcon: blockData.useicon === 'true',
      size: blockData.iconsize || 'small',
      stacked: blockData.stacked === 'true',
      items: (blockData.itemtextvalue ?? []).map(
        (item, index) => ({ text: item, number: blockData.useicon === 'true' ? null : index + 1, attributes: item._meta ?? {} }),
      ),
    },
    buttonText: blockData.buttontext,
    buttonHref: blockData.buttonhref,
    buttonVariant: blockData.buttonvariant || 'dark',
    mapImageUrl: blockData.mapsource === 'image' ? (blockData.mapimagesource === 'url' ? blockData.mapimageurl?.src : blockData.mapimageasset?.src) : null,
    mapImageAlt: blockData.mapimagealt || 'Map',
    mapIframeUrl: blockData.mapsource === 'iframe' ? blockData.mapiframeurl : null,
  };
  const root = createRoot(block);
  root.render(React.createElement(MapWithInfo, data));
}
