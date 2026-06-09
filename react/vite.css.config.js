import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist-css",
    emptyOutDir: true,
    cssCodeSplit: false,

    rollupOptions: {
      input: "src/entry.css.js",
      output: {
        entryFileNames: "styles.js"
      }
    }
  }
});
