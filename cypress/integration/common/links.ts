import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('click the {string} link', (linkText) => {
  cy.getElementByText('a', linkText).click({ force: true });
});
