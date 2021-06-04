import { createApp } from "vue";
import App from "./App.vue";
//import { components } from "../src";
import { components } from "../dist/visualia.es";

const app = createApp(App);
app.mount("#app");

// Object.entries(components).forEach(([name, component]) => {
//   app.component(name, component);
// });
