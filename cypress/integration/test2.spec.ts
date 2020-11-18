describe("Spec", () => {
  it("Should click on the contacts page", () => {
    cy.viewport(1020, 200);
    cy.visit("https://fwdays.com/en/event/qa-fwdays-conference");

    cy.clickOnHeaderLink("Contacts");
  });

  it.skip("Should click on facebook link", () => {
    cy.visit("https://fwdays.com/en/event/qa-fwdays-conference");

    cy.clickOnHeaderLink("Contacts");
    cy.get(":nth-child(3) > .contact-info__link").within((el) => {
      expect(el.attr("href")).to.contain("facebook.com");
    });
  });
});
