describe('App', () => {
  it('should render application', () => {
    cy.visit('/');

    cy.get('.app').should('have.length', 1);
    cy.get('.movie-preview-list').should('have.length', 1);
  });
});
