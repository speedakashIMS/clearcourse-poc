
import React from "react";
import { createRoot } from "react-dom/client";
import StatsWithTestimonials from "../../scripts/components/StatsWithTestimonials.js";
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

function createStatMedia(blockData) {
    if (!blockData?.statmediavariant) return null;

    const imageUrl =
        blockData.statmediaimagesource === 'url'
            ? blockData.statmediaimageurl
            : blockData.statmediaimageasset?.src;

    const videoUrl = blockData.statmediavideosource === 'url'
        ? blockData.statmediavideourl
        : appendOriginIfNeeded(blockData.statmediavideoasset);

    const lottieData = blockData.statmedialottiedata
        ? JSON.parse(blockData.statmedialottiedata)
        : null;

    const hasMedia =
        imageUrl ||
        videoUrl ||
        blockData.statmedialottieurl ||
        lottieData ||
        blockData.statmediaiframeurl;

    if (!hasMedia) return null;

    return {
        media: blockData.statmediavariant,
        imageUrl,
        videoUrl,
        lottieUrl: blockData.statmedialottieurl,
        lottieData,
        iframeUrl: blockData.statmediaiframeurl,
        title: blockData?.statmediatitle || 'Stat Media'
    };
}

export default async function decorate(block) {
    const blockData = blockToMap(block);

    const data = {
        id: blockData.id,
        stats: []
        .concat(blockData.items ?? [])
        .map(
            item => ({
                testimonial: item.testimonial,
                fontSize: item.fontsize || "sm",
                name: item.name,
                role: item.role,
                rating: item.rating,
                imageUrl: item.imagesource === 'url' ? item.imageurl : item.imageasset?.src,
                logoUrl: item.logosource === 'url' ? item.logourl : item.logoasset?.src,
                mediaPosition: item.mediaposition || 'top',
                align: item.alignment || 'left',
                withPadding: item.withpadding === 'true',
                stat: item.stat,
                description: item.description,
                statMedia: createStatMedia(item),
                attributes: item._meta || {},
                statBackgroundColor: item.backgroundcolor || 'transparent',
                textAlign: item.textalignmentvalue || 'center',
            })),
        statFontSize: blockData.fontsize || 'sm',
        order: blockData.order || 'stat-first',
    };

    const root = createRoot(block);
    root.render(React.createElement(StatsWithTestimonials, data));
}
  