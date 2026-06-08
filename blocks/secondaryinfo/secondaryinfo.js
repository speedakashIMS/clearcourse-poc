import React from 'react';
import { createRoot } from 'react-dom/client';
import SecondaryInfo from '../../scripts/components/SecondaryInfo.js';
import { blockToMap } from '../../scripts/utils/block.js';

export default async function decorate(block) {
  const blockData = blockToMap(block);

  const socialMedia = ['facebook', 'google', 'x', 'instagram', 'linkedin'];

  const data = {
    id: blockData.id,
    variant: blockData.variant || 'secondary-info',
    text: blockData.text,
    phone: blockData.phone,
    email: blockData.email,
    logo: blockData.logosource === 'url' ? blockData.logourl : blockData.logoasset?.src,
    socialMedia: socialMedia.map(type => {
      return {
        type: type,
        url: blockData[type]
      }
    }).filter(item => Boolean(item.url)),
    navigation: []
    .concat(blockData.navigation ?? [])
    .map(item => ({
      label: item.navigationlabel || '',
      href: item.navigationlink || '#'
    })),
    colorVariant: blockData.color || 'dark'
  }

  const root = createRoot(block);
  root.render(React.createElement(SecondaryInfo, data));
}
