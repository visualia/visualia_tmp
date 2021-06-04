import { mountComponent } from "../../cypress/support";
import VPdf from "./VPdf.vue";

it("VPdf", () => {
  mountComponent(
    { VPdf },
    `
    <v-pdf />
    `
  );
});
