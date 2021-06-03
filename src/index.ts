import { defineAsyncComponent } from "vue";

import * as utils from "./utils";

//@ts-ignore
//@TODO Property 'glob' does not exist on type 'ImportMeta'.

const asyncComponents = import.meta.glob("./components/**/*.vue");
const components = Object.entries(asyncComponents).map(([name, component]) => [
  name,
  defineAsyncComponent(component as any),
]);
export { utils, components };

export * from "vue";
