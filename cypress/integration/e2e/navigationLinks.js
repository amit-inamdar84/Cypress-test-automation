describe('Navigation menu test' , () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    })

    it('should display online banking' , () =>{
       cy.contains('Online Banking').click();
       cy.url().should('include' , 'online-banking.html');
       cy.get('h1').should('be.visible');
    })

    it('should display feedback form' , () =>{
        cy.contains('Feedback').click();
        cy.url().should('include' , 'feedback.html');
        cy.get('h3').should('be.visible');
    })

    it('should display home page' , () =>{
        cy.get('a').contains('Zero Bank').click();
        cy.url().should('include' , 'index.html');
    })
})