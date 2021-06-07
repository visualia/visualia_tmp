import { defineAsyncComponent, Plugin } from "@vue/runtime-core";
import * as utils from "./utils";
export { utils };
export * from "./utils";

const asyncComponents = import.meta.glob("./components/**/*.vue");

export const components = Object.fromEntries(
  Object.entries(asyncComponents).map(([path, component]) => [
    path.split("/").slice(-1)[0].replace(".vue", ""),
    defineAsyncComponent(component),
  ])
);

export const Visualia: Plugin = {
  install: (app) => {
    Object.entries(components).forEach(([name, component]) =>
      app.component(name, component)
    );
    Object.entries(utils).forEach(
      ([name, util]) => (app.config.globalProperties[name] = util)
    );
  },
};
