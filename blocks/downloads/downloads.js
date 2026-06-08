
import React from "react";
import { createRoot } from "react-dom/client";
import Downloads from "../../scripts/components/Downloads.js";
import { blockToMap } from "../../scripts/utils/block.js";

const asArray = (v) => (v ? (Array.isArray(v) ? v : [v]) : []);

export default async function decorate(block) {
  const blockData = blockToMap(block, {
    schemas: {
      buttons: [
        'buttontext',
        'buttonlink'
      ],
      accordions: [
        'accordiontitle',
        'accordioncontent'
      ]
    }
  });

  const data = {
    id: blockData.id,
    variant: blockData.variant || 'vertical',
    columns: Number(blockData.columns) || 0,
    items: []
      .concat(blockData.items ?? [])
      .map(item => ({
        media: {
          imageUrl: item.mediasource === 'url' ? item.mediaurl : item.mediaasset?.src,
          title: item.mediaalt,
        },
        title: item.title,
        description: item.description,
        logoUrl: item.logosource === 'url' ? item.logourl : item.logoasset?.src,
        buttons: asArray(item.buttons).map(item => ({
          text: item.buttontext,
          href: item.buttonlink
        })),
        accordions: asArray(item.accordions).map(item => ({
          title: item.accordiontitle,
          content: item.accordioncontent
        })),
        attributes: item._meta || {}
      }))
  };
  const root = createRoot(block);
  root.render(React.createElement(Downloads, data));

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
