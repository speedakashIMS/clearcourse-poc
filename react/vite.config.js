import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readdirSync, statSync } from "fs";

// Helper to find component files recursively
function findComponentFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  files.forEach((file) => {
    const filePath = resolve(dir, file);
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      findComponentFiles(filePath, fileList);
    } else if (file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Build entries for AEM blocks (library mode)
function buildLibraryEntries() {
  const componentFiles = findComponentFiles(resolve(__dirname, "src/components"));
  return Object.fromEntries(
    componentFiles.map((file) => {
      const name = file
        .replace(resolve(__dirname, "src/components/"), "")
        .replace(/\.jsx$/, "")
        .replace(/\//g, "-");
      return [name, file];
    })
  );
}

// Check if we're building the app or library
const isAppBuild = process.env.BUILD_MODE === "app";

export default defineConfig(({ mode, command }) => {
  // App build mode - for previewing components
  // Also use app mode in dev server (command === 'serve')
  if (isAppBuild || (command === "serve" && mode === "development")) {
    return {
      plugins: [react()],
      define: {
        "process.env": JSON.stringify(process.env),
      },
      build: {
        outDir: "dist-app",
        rollupOptions: {
          input: resolve(__dirname, "index.html"),
        },
      },
    };
  }

  // Library build mode - for AEM blocks (default)
  const entries = buildLibraryEntries();
  return {
    plugins: [react()],
    define: {
      "process.env": JSON.stringify(process.env),
    },
    build: {
      lib: {
        entry: entries,
        formats: ["es"],
        fileName: (_, name) => `${name}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react-dom/client",
          "react/jsx-runtime",
          "@heroicons/react",
          "react-pdf",
          "pdfjs-dist",
          "react-pageflip",
        ],
      },
    },
  };
});