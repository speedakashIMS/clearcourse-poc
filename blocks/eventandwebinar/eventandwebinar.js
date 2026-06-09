
import React from "react";
import { createRoot } from "react-dom/client";
import EventAndWebinar from "../../scripts/components/EventAndWebinar.js";
import { blockToMap } from "../../scripts/utils/block.js";

function formatDateDDMMYY(isoString) {
    const d = new Date(isoString);
  
    const day = String(d.getUTCDate()).padStart(2, "0");
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const year = String(d.getUTCFullYear()).slice(-2);
  
    return `${day}.${month}.${year}`;
}

export default async function decorate(block) {
    const blockData = blockToMap(block);

    const data = {
        id: blockData.id,
        events: []
            .concat(blockData.items ?? [])
            .map(item => ({
                image:  item.imagesource === 'url' ? item.imageurl : item.imageasset?.src,
                title: item.title,
                description: item.description,
                date: formatDateDDMMYY(item.date),
                location: item.location,
                linkUrl: item.linkurl,
                linkLabel: item.linklabel || blockData.linkLabel || 'Learn More',
                attributes: item._meta || {}
            })),
        textAlign: blockData.textalignment || 'left',
        columns: Number(blockData.columns) || 1,
        logoPosition: blockData.logoposition || 'left',
        linkLabel: blockData.linkLabel || 'Learn More'
    };
    const root = createRoot(block);
    root.render(React.createElement(EventAndWebinar, data));
}
