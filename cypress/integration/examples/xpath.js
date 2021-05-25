describe('xpaths with cypress' , () => {
    it('xpath testing' , () => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.xpath('//button[@id="signin_button"]').should('be.visible');
        cy.xpath('//button[@id="signin_button"]').click();
        cy.xpath('//form').should('have.length',1);
    })
})