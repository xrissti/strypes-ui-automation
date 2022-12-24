import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('click {string} drop-down button', (menuText) => {
  cy.getByText('li.menu-item a', menuText, true).click();
});

When('select the {string} menu option from {string} drop-down menu', (menuOption, menuName) => {
  cy.getByText('li.menu-item a', menuName, true).parent('li').within(() => {
    cy.getByText('li > a', `${menuOption}`).click();
  });
});

Then('all drop-down menu options are present', (dataTable) => {
  dataTable.hashes().forEach(row => {
    cy.getByText('a', `${row.text}`).should('exist').should('be.visible');
  });
});