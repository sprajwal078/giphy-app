describe("search ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show a list of gifs", () => {
    cy.wait(2000).then(() => {
      cy.get('[data-cy="gifItem"]').should("have.length", 15);
    });
  });

  it("should show a list of gifs when searching for a specific word", () => {
    cy.get("input").type("panda");
    cy.get("button").click();
    cy.get('[data-cy="gifItem"]').should("have.length", 0);
    cy.wait(1500).then(() => {
      cy.get('[data-cy="gifItem"]').should("not.have.length", 0);
    });
  });
});
