const { startDevServer } = require("@cypress/vite-dev-server");
const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");
const vue = require("@vitejs/plugin-vue");

module.exports = (on, config) => {
  on("dev-server:start", async (options) =>
    startDevServer({
      options,
      viteConfig: {
        alias: {
          vue: "vue/dist/vue.esm-bundler.js",
        },
        plugins: [vue()],
      },
    })
  );
  getCompareSnapshotsPlugin(on, config);
  return config;
};
