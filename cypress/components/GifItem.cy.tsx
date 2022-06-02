import GifItem from "../../src/components/GifItem";
import "../support/commands";
import { mount } from "cypress/react";

describe("<GifItem>", () => {
  beforeEach(() => {
    mount(
      <GifItem
        height={200}
        width={300}
        title="Hello World"
        url="https://media2.giphy.com/media/2M3hZ6Mp1ykysFnhow/giphy.gif?cid=20bcfa04wr4tpr82hck3pnk0hu8bg507gchetx8pbgqczzgi&rid=giphy.gif&ct=g"
      />
    );
  });

  it("should have proper width and height", () => {
    cy.get("[data-cy='gifItem']")
      .should("exist")
      .and("have.attr", "width", "300")
      .and("have.attr", "height", "200");
  });

  it("should have proper image url", () => {
    cy.get("[data-cy='gifItem']")
      .should("exist")
      .and(
        "have.attr",
        "src",
        "https://media2.giphy.com/media/2M3hZ6Mp1ykysFnhow/giphy.gif?cid=20bcfa04wr4tpr82hck3pnk0hu8bg507gchetx8pbgqczzgi&rid=giphy.gif&ct=g"
      );
  });

  it("should have proper title", () => {
    cy.get("h3").should("exist").and("have.text", "Hello World");
  });
});
