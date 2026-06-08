
import React from "react";
import { createRoot } from "react-dom/client";
import Video from "../../scripts/components/Video.js";
import { blockToMap } from "../../scripts/utils/block.js";
import { origin } from '../../scripts/configuration.js';

function appendOriginIfNeeded(value) {
  if (typeof value !== 'string') {
      return '';
  }

  if (typeof origin !== 'string' || !origin) {
      return value;
  }

  return value.replace(/\/content\/dam/g, `${origin}/content/dam`);
}

export default async function decorate(block) {
    const blockData = blockToMap(block);

    const data = {
        id: blockData.id,
        title: blockData.title,
        videoUrl: blockData.source === 'url' ? blockData.url : appendOriginIfNeeded(blockData.asset),
    };
    const root = createRoot(block);
    root.render(React.createElement(Video, data));
}
  