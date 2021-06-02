import { startDevServer } from "@cypress/vite-dev-server";
import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/plugin";
import vue from "@vitejs/plugin-vue";

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
