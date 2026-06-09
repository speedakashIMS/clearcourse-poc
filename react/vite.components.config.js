import react from "@vitejs/plugin-react";

export function createComponentConfig({ entry, name }) {
  return {
    plugins: [react()],
    define: {
      "process.env": JSON.stringify(process.env),
    },
    build: {
      outDir: "dist-components",
      emptyOutDir: false,
      lib: {
        entry,
        formats: ["es"],
        fileName: () => `${name}.js`,
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react-dom/client",
          "react/jsx-runtime",
          "lottie-react",
          "lottie-web",
          "react-pdf",
          "pdfjs-dist",
          "react-pageflip",
        ],
        output: {
          inlineDynamicImports: true,
          manualChunks: undefined,
        },
      },
    },
  };
}