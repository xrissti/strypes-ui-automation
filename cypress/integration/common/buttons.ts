import { When } from 'cypress-cucumber-preprocessor/steps';

When('click the {string} button', (buttonName) => {
  cy.getByText('button', buttonName).click({force: true});
});