class HomePage {
  getNameInput() {
    return cy.get(':nth-child(1) > .form-control');
  }

  selectGender() {
    return cy.get('#exampleFormControlSelect1');
  }

  nameVerificationField() {
    return cy.get('input[name="name"]:nth-child(1)');
  }

  toShopPageLink() {
    return cy.get(":nth-child(2)>a.nav-link");
  }

  addSelectedProductsToCart() {
    cy.get('h4.card-title').each(($el, index) => {
      const text = $el.text();
      if (text.includes('Samsung Note 8') || text.includes('Nokia Edge')) {
        cy.get('button.btn.btn-info').eq(index).click();
      }
    });
  }
}

export default HomePage;
