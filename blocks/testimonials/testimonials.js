
import React from "react";
import { createRoot } from "react-dom/client";
import Testimonials from "../../scripts/components/Testimonials.js";
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
    
        const lottieData = blockData.medialottiedata
            ? JSON.parse(blockData.medialottiedata)
            : null;
    
        const hasMedia =
            imageUrl ||
            blockData.mediavideourl ||
            blockData.medialottieurl ||
            lottieData ||
            blockData.mediaiframeurl;
    
        if (!hasMedia) return null;
    
        return {
            type: blockData.mediatype,
            imageUrl,
            videoUrl: appendOriginIfNeeded(blockData.mediavideourl),
            lottieUrl: blockData.medialottieurl,
            lottieData,
            iframeUrl: blockData.mediaiframeurl,
            title: blockData?.mediatitle || 'Testimonial Media'
        };
    }    

    const data = {
        id: blockData.id,
        variant: blockData.variant || 'columns',
        testimonials: []
        .concat(blockData.items ?? [])
        .map(
            item => ({
                testimonial: item.testimonial,
                name: item.name,
                role: item.role,
                rating: item.rating,
                imageUrl: item.imagesource === 'url' ? item.imageurl : item.imageasset?.src,
                logoUrl: item.logosource === 'url' ? item.logourl : item.logoasset?.src,
                align: item.alignment || 'left',
                attributes: item._meta || {}
            })),
        media: createMedia(blockData),
        order: blockData.order || 'testimonial-first',
        columns: Number(blockData.columns) || 1,
        alignment: blockData.alignment || 'left',
        withPadding: blockData.withpadding === 'true',
        mediaPosition: blockData.mediaposition || 'left',
        carousel: blockData.iscarousel === 'true' || false,
        infinite: false,
        quoteColor: blockData.quotecolor || 'secondary'
    };

    const root = createRoot(block);
    root.render(React.createElement(Testimonials, data));
}
  