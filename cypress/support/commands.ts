//@ts-ignore
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({ failureThreshold: 0.01 });

Cypress.Commands.add("text", (selector) => {
  cy.get(selector).should(($div) => console.log($div.text()));
});

Cypress.Commands.add("html", (selector) => {
  cy.get(selector).should(($div) => console.log($div.html()));
});
