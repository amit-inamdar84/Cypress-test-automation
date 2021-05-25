describe('Tests to take screenshots' , () => {
    it('Take full page screenshot' , () => {
       cy.visit('https://devexpress.github.io/testcafe/example/');
       cy.screenshot( {capture : 'fullPage'});
    })

    it('Take single element screenshot' , () => {
        cy.get('header').screenshot();
    })


    it('Take single element screenshot' , () => {
        cy.get('.slider-container').screenshot();
    })
})