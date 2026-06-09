
import React from "react";
import { createRoot } from "react-dom/client";
import Trust from "../../scripts/components/Trust.js";
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

    function createMedia(blockData) {
        if (!blockData?.mediatype) return null;

        const imageUrl =
            blockData.mediaimagesource === 'url'
                ? blockData.mediaimageurl
                : blockData.mediaimageasset?.src;

        const videoUrl = blockData.mediavideosource === 'url'
            ? blockData.mediavideourl
            : appendOriginIfNeeded(blockData.mediavideoasset);

        const lottieData = blockData.medialottiedata
            ? JSON.parse(blockData.medialottiedata)
            : null;

        const hasMedia =
            imageUrl ||
            videoUrl ||
            blockData.medialottieurl ||
            lottieData ||
            blockData.mediaiframeurl;

        if (!hasMedia) return null;

        return {
            type: blockData.mediatype,
            imageUrl,
            videoUrl,
            lottieUrl: blockData.medialottieurl,
            lottieData,
            iframeUrl: blockData.mediaiframeurl,
            title: blockData?.mediatitle || 'Trust Media'
        };
    }

    const data = {
        media: createMedia(blockData),
        items: []
            .concat(blockData.items ?? [])
            .map(
                item => ({
                    type: 'iframe',
                    iframeUrl: item.iframeurl,
                    title: item.alt || 'Trust Item Media',
                    attributes: item._meta || {}
                })),
        infinite: false
    };
    const root = createRoot(block);
    root.render(React.createElement(Trust, data));
}
