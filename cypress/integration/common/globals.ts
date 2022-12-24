import { When, Then } from 'cypress-cucumber-preprocessor/steps';

Then('the chatbot is present', () => {
  cy.get('button [aria-label="Open live chat"]').should('exists').should('be.visible');
});
