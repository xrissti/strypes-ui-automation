declare namespace Cypress {
    interface Chainable<Subject = any> {
        getByText(selector: any, text: string, exact?: boolean): Chainable<any>;
        getElementByText(selector: any, text: string, exact?: boolean): Chainable<any>;
    }
}