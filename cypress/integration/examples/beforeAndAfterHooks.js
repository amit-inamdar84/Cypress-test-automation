//only and skip are few more hooks.
//it.only executes only the marked it block
//it.skip skips the marked it block.

describe('Test for page scrolling' , () => {
    before(() => {
      //runs before any of the tests in describe block.
      //set up test data or test context
      //seed or reset database
      cy.visit('https://devexpress.github.io/testcafe/example/');
    })

    after(() => {
        //runs after all tests inside describe are completed.
        //test clean up
        //clean cookies or local storage.
        cy.clearCookies();
    })

    beforeEach(() => {
        //runs once before each test in describe.
    })

    afterEach(() => {
        //runs once after each test in describe.
    })


    it('Test to scroll vertically down and up till an element' , () => {
        cy.wait(3000);
        cy.get('#submit-button').scrollIntoView();
        cy.wait(3000);
        cy.get('header').scrollIntoView();
    })

    it('Testing hooks' , () => {
        //Test purpose
    })
})