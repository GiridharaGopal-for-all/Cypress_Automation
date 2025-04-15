export class CheckoutPage {
  verifyAndProceedToCheckout() {
    cy.get('a.nav-link.btn.btn-primary').click();

    const prices = [];

    cy.get('.table-hover tr td:nth-child(4) strong').each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then((text) => {
          const amount = parseInt(text.trim().split(' ')[1]);
          prices.push(amount);
        });
    }).then(() => {
      const calculatedTotal = prices.reduce((acc, val) => acc + val, 0);

      cy.get('.table-hover tr td h3 strong')
        .invoke('text')
        .then((text) => {
          const displayedTotal = parseInt(text.trim().split(' ')[1]);
          expect(calculatedTotal).to.equal(displayedTotal);
        });

      cy.get('button.btn.btn-success').click();
    });
  }
}
