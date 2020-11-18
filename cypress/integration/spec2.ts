describe("Spec", () => {
  it("Do something", () => {
    cy.visit("https://fwdays.com/en/event/qa-fwdays-conference");

    cy.contains("fwdays");
  });

  it("Should click on facebook link", () => {
    expect(1 + 1).to.equal(2);
  });
});
