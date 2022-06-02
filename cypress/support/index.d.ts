declare namespace Cypress {
  interface Chainable {
    generateToken({ secret }: { secret: string }): void;
  }
}
