import { createApp } from "vue";
import App from "./App.vue";
import { Visualia } from "../dist/visualia2.es";

const app = createApp(App);
app.use(Visualia);
app.mount("#app");
