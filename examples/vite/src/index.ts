import { defineAsyncComponent } from "@vue/runtime-core";
import * as utils from "./utils";
export { utils };
export * from "./utils";
//export { default as VSlider } from "./components/VSlider.vue";

//@ts-ignore
// export const VSlider = defineAsyncComponent(
//   () => import("./components/VSlider.vue")
// );

//export const components = { VSlider };

const asyncComponents: Record<string, ComponentOptions> = import.meta.glob(
  "./components/**/*.vue"
);

export const components = Object.fromEntries(
  Object.entries(asyncComponents).map(([path, component]) => [
    path.split("/").slice(-1)[0].replace(".vue", ""),
    defineAsyncComponent(component),
  ])
);
