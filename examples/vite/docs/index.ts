import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
//import { components } from "../src";
//import { Visualia } from "../src";
import { Visualia, components } from "../dist/visualia2.es";
import VSlider from "../dist/VSlider";

import * as Vue from "vue";
window.Vue = Vue;

const app = createApp(App);
app.use(Visualia);
app.mount("#app");
//app.component("VSlider", VSlider);

// Object.entries(components).forEach(([name, component]) => {
//   app.component(name, defineAsyncComponent(component));
// });
