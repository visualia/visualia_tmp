const { startDevServer } = require("@cypress/vite-dev-server");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");
const vue = require("@vitejs/plugin-vue");

module.exports = (on, config) => {
  on("dev-server:start", async (options) =>
    startDevServer({
      options,
      viteConfig: {
        plugins: [vue()],
      },
    })
  );
  addMatchImageSnapshotPlugin(on, config);
  return config;
};
