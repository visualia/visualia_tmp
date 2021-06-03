import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  build: {
    minify: "esbuild",
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
};
