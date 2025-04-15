export class LoginPage {
  visitLoginPage() {
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
  }

  enterCredentials() {
    this.visitLoginPage();
    cy.get('#username').type('rahulshettyacademy');
    cy.get('#password').type('learning');
    cy.get('select.form-control').select('Student');
    cy.get('input[type="checkbox"]').check();
    cy.get('#signInBtn').click();
  }
}
