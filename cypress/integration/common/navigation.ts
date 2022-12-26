import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { PAGES } from './constants';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

Given('navigate to the {string} page', (pageName: string) => {
  cy.intercept('GET', 'https://api.hubspot.com/livechat-public/v1/message/*').as('chatbot');
  cy.visit(PAGES[pageName].url);

});

Then('the {string} page should be displayed', (pageName) => {
  cy.url().should('contain', PAGES[pageName].resource);
	waitForPageToLoad(pageName);
});

export function waitForPageToLoad(pageName: string) {
  const page = PAGES[pageName];
  page.elements.forEach((locator: string) => {
    cy.get(locator).should('exist');
  });
}