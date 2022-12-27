import { When } from 'cypress-cucumber-preprocessor/steps';

When('click the {string} button', (buttonName) => {
  cy.getByText('button', buttonName).click({force: true});
});

When('click {string} button in {string} section', (buttonName, section) => {
  cy.get('section').should('contain', section).find('.elementor-heading-title').should('contain', section)
    .closest('.elementor-widget-wrap').find('.button').should('contain', buttonName).contains(buttonName).click();
});

