export class PurchasePage {
completePurchase() {
  cy.get('#country').type('ind');
  cy.wait(2000); // waits for 2 seconds before getting suggestions


  
  cy.get('.suggestions ul li a').should('be.visible');

  cy.get('.suggestions ul li a').each(($el) => {
    if ($el.text().trim() === 'India') {
      cy.wrap($el).click();
    }
  });

  cy.get('#checkbox2').check({ force: true });
  cy.get('input[type="submit"]').click();

  cy.get('.alert').should('contain.text', 'Success');
}}
