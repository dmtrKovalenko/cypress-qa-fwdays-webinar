/**
 * Clicks on header link with a special name
 * @param itemName Link name
 * @see support/commands.ts
 */
const clickOnHeaderLink = (itemName: string) => {
  return cy.get("header").find("a").contains(itemName).click();
};

Cypress.Commands.add("clickOnHeaderLink", clickOnHeaderLink);

declare namespace Cypress {
  interface Chainable {
    clickOnHeaderLink: typeof clickOnHeaderLink;
  }
}
