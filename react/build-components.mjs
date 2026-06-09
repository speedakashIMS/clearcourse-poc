import { build } from "vite";
import { resolve, basename } from "path";
import { readdirSync, statSync } from "fs";
import { createComponentConfig } from "./vite.components.config.js";

function findComponentFiles(dir) {
  return readdirSync(dir)
    .map((file) => resolve(dir, file))
    .filter((filePath) => {
      const stat = statSync(filePath);
      return stat.isFile() && filePath.endsWith(".jsx");
    });
}

const componentsDir = resolve("src/components");
const componentFiles = findComponentFiles(componentsDir);

for (const file of componentFiles) {
  const name = basename(file, ".jsx");

  console.log(`🔨 Building ${name}`);

  await build(
    createComponentConfig({
      entry: file,
      name,
    })
  );
}
