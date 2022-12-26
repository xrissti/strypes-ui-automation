import { When } from 'cypress-cucumber-preprocessor/steps';

When('click the {string} button', (buttonName) => {
  cy.getByText('button', buttonName).click({force: true});
});

When('click {string} button on {string} slide heading', (buttonName, slideHeading) => {
  cy.get('.swiper-slide-active > .swiper-slide-inner > .swiper-slide-contents')
    .should('contain', slideHeading).contains(slideHeading).then(($slide) => {
      cy.clock();
      cy.wrap($slide).closest('.swiper-slide-contents').find('.elementor-slide-button').contains(buttonName).click({force: true});
    });
  cy.clock().then((clock) => {
      clock.tick(5000);
    });
});

When('click {string} button in {string} section', (buttonName, section) => {
  cy.get('section').should('contain', section).find('.elementor-heading-title').should('contain', section)
    .closest('.elementor-widget-wrap').find('.button').should('contain', buttonName).contains(buttonName).click();
});

