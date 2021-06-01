import { mountComponent } from "../utils";
import VMath from "../components/VMath.vue";

it("VMath", () => {
  mountComponent(
    { VMath },
    `
    {{ set("a", 50) }}
    <v-math data-test="math">a = {{ get("a") }}</v-math>
    `
  );
  cy.get("[data-test=math]").should("contain.text", "a = 50");
});

//
