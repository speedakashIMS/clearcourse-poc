
import React from "react";
import { createRoot } from "react-dom/client";
import Table from "../../scripts/components/Table.js";
import { blockToMap } from "../../scripts/utils/block.js";

const asArray = (v) => (v ? (Array.isArray(v) ? v : [v]) : []);

export default async function decorate(block) {
    const blockData = blockToMap(block, { 
        schemas: {
            headers: [
                'header'
            ],
            items: [
                'title',
                'type',
            ],
            values: [
                'value'
            ]
        }
    });

    const variant = blockData.variant || 'pricing';
    const columns = []
        .concat(blockData.headers ?? [])
        .map(item => item.header ?? '');

    const data = {
        variant: variant,
        columns: columns,
        data: (blockData.items ?? [])
            .map(item => [
                item.title,
                ...asArray(item.values).map(v => variant === 'comparison' ? v.value === 'true' : v.value).slice(0, columns.length - 1)
            ]),
        fullWidth: true,
        attributes: (blockData.items ?? []).map(item => item._meta).filter(Boolean)
    };
    const root = createRoot(block);
    root.render(React.createElement(Table, data));
}
