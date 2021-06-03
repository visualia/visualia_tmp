import { defineAsyncComponent } from "vue";

import * as utils from "./utils";

//@ts-ignore
//@TODO Property 'glob' does not exist on type 'ImportMeta'.

const asyncComponents = import.meta.glob("./components/**/*.vue");
const components = Object.fromEntries(
  Object.entries(asyncComponents).map(([path, component]) => [
    path.split("/").slice(-1)[0].replace(".vue", ""),
    defineAsyncComponent(component as any),
  ])
);

import * as vue from "vue";
export { utils, components, vue };
