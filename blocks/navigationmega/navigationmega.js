
import React from "react";
import { createRoot } from "react-dom/client";
import NavigationMega from "../../scripts/components/NavigationMega.js";
import { blockToMap } from "../../scripts/utils/block.js";

export default async function decorate(block) {
    const blockData = blockToMap(block);

    const data = {
        fullWidth: blockData.fullwidth === 'true',
        logo: blockData.logosource === 'url' ? blockData.logourl : blockData.logoasset?.src,
        navItems: [],
        buttons: [],
        alignNavRight: blockData.alignnavigationright === 'true',
        variant: blockData.variant || 'dark'
    };
    const root = createRoot(block);
    root.render(React.createElement(NavigationMega, data));
}
  