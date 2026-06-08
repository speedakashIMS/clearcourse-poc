import React from "react";
import { createRoot } from "react-dom/client";
import MapLocations from "../../scripts/components/MapLocations.js";
import { blockToMap } from "../../scripts/utils/block.js";

export default async function decorate(block) {
    const blockData = blockToMap(block);

    const data = {
        id: blockData.id,
        mapImageUrl:
          blockData.mapimagesource === 'url'
            ? blockData.mapimageurl
            : blockData.mapimageasset?.src,
        mapImageAlt: blockData.mapimagealt ?? 'Map',
        mapIframeUrl: blockData.mapiframeurl,
        locations: []
          .concat(blockData.items ?? [])
          .map(item => {
            const pins = [
              { text: item.pin1text, iconName: item.pin1icon, type: item.pin1type },
              { text: item.pin2text, iconName: item.pin2icon, type: item.pin2type },
              { text: item.pin3text, iconName: item.pin3icon, type: item.pin3type },
            ].filter(pin => {
              const hasText =
                typeof pin.text === 'string' && pin.text.trim() !== '';
              const hasIcon =
                typeof pin.icon === 'string' && pin.icon.trim() !== '';
              return hasText || hasIcon;
            });
      
            return {
              title: item.title,
              description: item.description,
              imageSrc:
                item.logosource === 'url'
                  ? item.logourl
                  : item.logoasset?.src,
              imageAlt: 'Logo',      
              pins,
              ...(item._meta || {}),
            };
          }),
      };      
    const root = createRoot(block);
    root.render(React.createElement(MapLocations, data));
}
