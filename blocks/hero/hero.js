
import React from "react";
import { createRoot } from "react-dom/client";
import Hero from "../../scripts/components/Hero.js";
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

function decodeToPlainString(input) {
  if (!input) return "";

  let str = input.trim();
  if (str.startsWith('"') && str.endsWith('"')) {
    str = str.slice(1, -1);
  }

  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;

  return textarea.value;
}

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
      title: blockData?.mediatitle || 'Hero Media'
  };
}

const asArray = (v) => (v ? (Array.isArray(v) ? v : [v]) : []);

export default async function decorate(block) {
  const blockData = blockToMap(block, {
    schemas: {
      logos: [
        'logosource',
        'logourl',
        'logoasset',
        'logoalt'
      ],
      buttons: [
        'buttontext',
        'buttonlink',
        'buttonvariant',
        'buttonsize',
      ],
    },
    itemSchemas: {
      heroitem: [
        'type',
        'title',
        'titleaccent',
        'titleaccentcolor',
        'description',
        'widget',
        'buttons',
        'logos',
        'mediatype',
        'mediaimagesource',
        'mediaimageurl',
        'mediaimageasset',
        'mediavideosource',
        'mediavideourl',
        'mediavideoasset',
        'medialottieurl',
        'medialottiedata',
        'mediaiframeurl',
        'mediatitle'
      ]
    }
  });

  const data = {
    id: blockData.id,
    slides: []
      .concat(blockData.items ?? [])
      .map(item => ({
        titleAccent: item.titleaccent,
        titleAccentColor: item.titleaccentcolor,
        title: item.title,
        description: item.description,
        buttons: asArray(item.buttons).map(button => ({
          text: button.buttontext,
          href: button.buttonlink,
          variant: button.buttonvariant || "light"
        })),
        logos: asArray(item.logos).map(logo => ({
          src: logo.logosource === 'url' ? logo.logourl : logo.logoasset?.src,
          alt: logo.logoalt
        })),
        media: createMedia(item),
        trustpilotWidget: decodeToPlainString(item.widget),
        attributes: item._meta || {}
      })),
    order: blockData.order || 'content-first',
    mediaStyle: blockData.mediastyle || 'flush',
    buttonSize: blockData.buttonsize || "btn-md",
    mobileOverlay: blockData.mobileoverlay === 'true',
    overlayColor: blockData.overlaycolor || 'secondary',
    infinite: false
  };
  const root = createRoot(block);
  root.render(React.createElement(Hero, data));
}
