import '../../support/commands.js';
import HomePage from '../../../Pages/Home';
import { CheckoutPage } from '../../../Pages/Checkout';
import { PurchasePage } from '../../../Pages/Purchase';

describe('Complete E2E Purchase Flow', () => {
  const homePage = new HomePage();
  const checkoutPage = new CheckoutPage();
  const purchasePage = new PurchasePage();

  // ✅ Load data BEFORE the test
  before(() => {
    cy.fixture('testdatas').then((data) => {
      this.data = data;
    });
  });

  it('should login, add products, verify total, and complete purchase', () => {
    cy.login(this.data.username, this.data.password);  // ✅ Works now
    homePage.addSelectedProductsToCart();
    checkoutPage.verifyAndProceedToCheckout();
    purchasePage.completePurchase();
    cy.log('✅ Test Passed: Order placed successfully!');
  });
});
