import { defineAsyncComponent } from "vue";
import DefaultTheme from "vitepress/dist/client/theme-default/index.js";

const components = import.meta.glob("../../src/components/**/*.vue");
import * as utils from "../../src/utils";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    Object.entries(components).forEach(([path, component]) => {
      const name = path.split("/").slice(-1)[0].replace(".vue", "");
      app.component(name, defineAsyncComponent(component));
    });
    Object.entries(utils).forEach(
      ([name, util]) => (app.config.globalProperties[name] = util)
    );
  },
};
