#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const names = process.argv.slice(2);

if (!names.length) {
  console.error("❌ Please provide at least one block name.");
  console.error("Example: npm run block:create Hero Banner Card");
  process.exit(1);
}

const blocksDir = path.join(process.cwd(), "blocks");

if (!fs.existsSync(blocksDir)) {
  fs.mkdirSync(blocksDir);
}

names.forEach((originalName) => {
  const lowerName = originalName.toLowerCase();
  const blockDir = path.join(blocksDir, lowerName);

  if (fs.existsSync(blockDir)) {
    console.warn(`⚠️  Block "${lowerName}" already exists. Skipping.`);
    return;
  }

  fs.mkdirSync(blockDir);

  const jsonFile = path.join(blockDir, `_${lowerName}.json`);
  const cssFile = path.join(blockDir, `${lowerName}.css`);
  const jsFile = path.join(blockDir, `${lowerName}.js`);

  const jsonContent = JSON.stringify(
    {
      definitions: [
        {
          title: originalName,
          id: lowerName,
          plugins: {
            xwalk: {
              page: {
                resourceType: "core/franklin/components/block/v1/block",
                template: {
                  name: originalName,
                  model: lowerName,
                  'key-value': true
                }
              }
            }
          }
        }
      ],
      models: [
        {
          "id": lowerName,
          "fields": []
        }
      ],
      filters: []
    },
    null,
    2
  );

  fs.writeFileSync(jsonFile, jsonContent);
  fs.writeFileSync(cssFile, "");

  const jsContent = `
import React from "react";
import { createRoot } from "react-dom/client";
import ${originalName} from "../../scripts/components/${originalName}.js";
import { blockToMap } from "../../scripts/utils/block.js";

export default async function decorate(block) {
    const blockData = blockToMap(block);

    const data = {
        
    };
    const root = createRoot(block);
    root.render(React.createElement(${originalName}, data));
}
  `;

  fs.writeFileSync(jsFile, jsContent);

  console.log(`✅ Created block: ${lowerName}`);
});

console.log("🎉 Done.");
