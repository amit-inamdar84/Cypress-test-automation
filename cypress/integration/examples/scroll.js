describe('Test for page scrolling' , () => {
    it('Test to scroll vertically down and up till an element' , () => {
        cy.visit('https://devexpress.github.io/testcafe/example/');
        cy.wait(3000);
        cy.get('#submit-button').scrollIntoView();
        cy.wait(3000);
        cy.get('header').scrollIntoView();
    })
})