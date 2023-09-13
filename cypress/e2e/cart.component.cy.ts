describe('CartComponent', () => {
  it('should display the component', () => {
    cy.visit('http://localhost:4200/cart');
    cy.get('app-cart').should('be.visible');
  });
});
