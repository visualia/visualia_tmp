import { mount } from "@cypress/vue";
import { mountComponent } from "../utils";
import VPfive from "./VPfive.vue";

it("VPfive", () => {
  mountComponent(
    { VPfive },
    `
    <v-pfive data-test="canvas" />
    `
  );
  cy.get('[data-test="canvas"]');
});
