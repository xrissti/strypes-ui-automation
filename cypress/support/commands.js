// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByText', (selector, text, exact = false) => {
  cy.getElementByText(selector, text, exact).closest(selector);
});
    
Cypress.Commands.add('getElementByText', (selector, text, exact = false) => {
	if (exact) {
			cy.get(selector).should('contain', text).contains(new RegExp(`^\\s*${text}\\s*$`));
	} else {
			cy.get(selector).should('contain', text).contains(text);
	}
});
