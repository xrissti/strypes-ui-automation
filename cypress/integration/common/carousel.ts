import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { PAGES } from './constants';

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

Then('the slide {string} contains description {string}', (slideHeading, description) => {
  cy.get('[data-id="db4b26e"]')
  .should('be.visible')
  .scrollIntoView()
  .within(($slide) => {
    cy.wrap($slide).find('.elementor-slide-heading').should('contain.text', slideHeading);
    cy.wrap($slide).find('.elementor-slide-description').should('contain.text', description);
  });
});

Then('find the right slide', () => {
  cy.get('[data-id="db4b26e"]')
    .should('be.visible')
    .scrollIntoView()
    .within(function () {
      getNextSlide();
  });
  cy.url().should('contain', PAGES['Nearsurance'].resource);
});

function getNextSlide() {
  cy.contains('.swiper-slide-active > .swiper-slide-inner > .swiper-slide-contents > .elementor-slide-heading', 'Nearsurance')
  .then((slide) => {
      if(Cypress.dom.isVisible(slide)){
          cy.log('Found!')
          cy.wrap(slide).closest('.swiper-slide-contents').find('.elementor-slide-button').contains('Learn more').click({force: true});
      }
      else
      {
          cy.wait(1000);
          cy.get('.elementor-slides-wrapper > .elementor-swiper-button-next > .eicon-chevron-right')
          .click().then(getNextSlide)
      }
   });
}