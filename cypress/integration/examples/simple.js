describe('Browser actions',() => {
    it('Visit URL',()=>{
        cy.visit('http://example.com/',{timeout : 10000});
        cy.title().should('eq' , 'Example Domain');
    })

    it('should check correct URL', () => {
      cy.url().should('include','example.com');
    })

    it('should wait for specified time', () => {
        cy.wait(5000);
    })

    it('should pause the tests', () => {
        cy.pause();
    })

    it('should get correct element', () => {
        cy.get('h1').should('be.visible');
    })
})