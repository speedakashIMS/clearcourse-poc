
import React from "react";
import { createRoot } from "react-dom/client";
import CTA from "../../scripts/components/CTA.js";
import { blockToMap } from "../../scripts/utils/block.js";

export default async function decorate(block) {
  const blockData = blockToMap(block);

  const data = {
    id: blockData.id,
    columns: blockData.columns ? parseInt(blockData.columns, 10) : 2,
    gridType: blockData.gridtype || '50-50',
    items: [],
  };

  (blockData.items || []).forEach(item => {
    if (item.type === 'mediactaitem') {
      data.items.push({
        type: 'media',
        mediaProps: {
          media: item.variant,
          title: item.title || '',
          aspect: item.aspect || '',
          imageUrl:
            item.imagesource === 'url'
              ? item.imageurl
              : item.imageasset?.src || '',
        },
        attributes: item._meta || {},
      });
    }

    if (item.type === 'textctaitem') {
      data.items.push({
        type: 'text',
        heading: item.heading || '',
        paragraph: item.paragraph || '',
        imageUrl: item.imagesource === 'url'
          ? item.imageurl
          : item.imageasset?.src || '',
        imageAlt: item.imagealt,
        list: item.list,
        textAlign: item.textalignment || 'left',
        buttonText: item.buttontext || '',
        buttonVariant: item.buttonvariant || '',
        buttonHref: item.buttonlink || '',
        attributes: item._meta || {},
      });
    }
  });

  const root = createRoot(block);
  root.render(React.createElement(CTA, data));
}