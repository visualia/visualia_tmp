import { mountComponent } from "../utils";
import VSlider from "./VSlider.vue";

it("VSlider", () => {
  mountComponent(
    { VSlider },
    `
    <v-slider data-test="slider"/>
    <div data-test="value">{{ get("x") }}</div>
    `
  );
  cy.get("[data-test=slider]").invoke("val", 100).trigger("input");
  cy.get("[data-test=value]").should("contain.text", "100");
  cy.get("[data-test=slider]").invoke("val", 200).trigger("input");
  cy.get("[data-test=value]").should("not.contain.text", "200");
});
