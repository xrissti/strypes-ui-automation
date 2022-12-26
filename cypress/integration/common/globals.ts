import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Then('the Strypes logo is present', () => {
  cy.get('[alt="Strypes logo"]', {timeout: 10000}).should('exist').should('be.visible').should('have.length', 2);
});

Then('the chatbot is present', () => {
  cy.wait('@chatbot').then((interception) => {
    interception.state.includes('200');
  });
  cy.get('#hubspot-messages-iframe-container > iframe', {timeout: 10000}).should('be.visible');
});

Given('scroll to the bottom of the page', () => {
  cy.get('[data-id="bbbc71c"]').scrollIntoView();
});

Then('click {string} icon', () => {
  cy.get('#ast-scroll-top').click({force: true});
});

Then('the top right menu should be displayed', () => {
  cy.get('#menu-1-76b7430b').should('exist').should('be.visible');
});