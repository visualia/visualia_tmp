//import * as utils from "./src/utils/index";
import { utils, components } from "./dist/visualia2.es";
import { createApp, watchEffect } from "vue";
utils.set("x", 1);

watchEffect(() => console.log(utils.state.value.x));

import App from "./App.vue";

createApp(App).mount("#app");
