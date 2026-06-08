import React from 'react';
import { createRoot } from 'react-dom/client';
import NewsGrid from '../../scripts/components/NewsGrid.js';
import { blockToMap } from '../../scripts/utils/block.js';
import { isAuthor } from '../../scripts/configuration.js';

export default async function decorate(block) {
  const blockData = blockToMap(block);
  const variant = blockData.variant || 'stacked';

  const data = {
    id: blockData.id,
    variant,
    columns: Number((variant === 'stacked' ? blockData.stackedcolumns : blockData.rowcolumns) || 1),
    carousel: blockData.iscarousel === 'true' || false,
    items: []
      .concat(blockData.items ?? [])
      .map(
        (item) => ({
          title: item.title,
          description: item.description,
          imageUrl: item.imagesource === 'url' ? item.imageurl : item.imageasset?.src,
          imageAlt: item.imagealt || 'News image',
          linkText: item.linktext || 'Read more',
          linkHref: item.link || '#',
          attributes: item._meta,
        }),
      ),
    infinite: !isAuthor,
  };

  const root = createRoot(block);
  root.render(React.createElement(NewsGrid, data));

  const observer = new MutationObserver(() => {
    const items = block.querySelectorAll('article');
    if (items.length > 0) {
      items.forEach((item, index) => {
        item.setAttribute('data-analytics-position', index + 1);
      });
      observer.disconnect();
    }
  });

  observer.observe(block, { childList: true, subtree: true });
}
