
import React from "react";
import { createRoot } from "react-dom/client";
import Footer from "../../scripts/components/Footer.js";
import { blockToMap } from "../../scripts/utils/block.js";

function buildColumns(data) {
    const columnKeys = Object.keys(data)
        .filter(key => key.startsWith('columnheader'))
        .sort((a, b) => {
            const aNum = Number(a.replace('columnheader', ''));
            const bNum = Number(b.replace('columnheader', ''));
            return aNum - bNum;
        });

    return columnKeys.map(headerKey => {
        const index = headerKey.replace('columnheader', '');
        const linksKey = `columnlinks${index}`;

        const rawLinks = Array.isArray(data[linksKey])
            ? data[linksKey]
            : [];

        const links = rawLinks
            .filter(link => link && link.label && link.link)
            .map(link => ({
                label: link.label,
                href: link.link,
            }));

        return {
            header: data[headerKey] || '',
            links,
        };
    });
}  

export default async function decorate(block) {
    let resolvedBlock = block;
    if (
        !window.location.href.endsWith('nav.html')
        && !window.location.href.endsWith('footer.html')
        && !window.location.href.endsWith('nav')
        && !window.location.href.endsWith('footer')
    ) {
        const resp = await fetch('footer.plain.html');
        if (resp.ok) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(await resp.text(), 'text/html');
            resolvedBlock = doc.querySelector('div.footer') || doc.querySelector('main');
        }
    }

    const blockData = blockToMap(resolvedBlock, {
        schemas: {
            columnlinks1: ['label', 'link'],
            columnlinks2: ['label', 'link'],
            columnlinks3: ['label', 'link'],
            columnlinks4: ['label', 'link'],
            columnlinks5: ['label', 'link'],
        }
    });

    const socialMedia = ['facebook', 'google', 'x', 'instagram', 'linkedin'];
    const columns = buildColumns(blockData);

    const data = {
        logo: blockData.logosource === 'url' ? blockData.logourl : blockData.logoasset?.src,
        paragraph: blockData.paragraph,
        socialMedia: socialMedia.map(type => {
            return {
                type: type,
                url: blockData[type]
            }
        }).filter(item => Boolean(item.url)),
        columns: buildColumns(blockData),
        columnsCount: columns.length,
        bottomLeft: blockData.bottomleftparagraph,
        bottomRight: blockData.bottomrightparagraph
    };
    const root = createRoot(block);
    root.render(React.createElement(Footer, data));
}
