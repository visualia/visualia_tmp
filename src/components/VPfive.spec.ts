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
  //@ts-ignore
  cy.get('[data-test="canvas"]').matchImageSnapshot({ failureThreshold: 1 });
});
