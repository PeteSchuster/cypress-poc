const routes = ["/"];

for (const route of routes) {
  describe(`${route} screenshot`, () => {
    it(`Should match ${route} image snapshot`, () => {
      cy.visit(route)
        .then(() => {
          cy.document()
            .toMatchImageSnapshot({ name: route });
        });
    });
  });
}