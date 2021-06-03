import { ComponentOptions } from "vue";

import * as utils from "./utils";

//@TODO Property 'glob' does not exist on type 'ImportMeta'.
//@ts-ignore
const eagerComponents: Record<string, ComponentOptions> = import.meta.globEager(
  "./components/**/*.vue"
);
const components = Object.fromEntries(
  Object.entries(eagerComponents).map(([path, component]) => [
    path.split("/").slice(-1)[0].replace(".vue", ""),
    component.default,
  ])
);

export { utils, components };
