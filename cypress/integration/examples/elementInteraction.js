describe('Tests for web element interaction', () => {
    it('should load books website' , () => {
        cy.visit('https://books.toscrape.com/');
        cy.url().should('include','books');
        cy.log('Before reload');
        cy.reload();
        cy.log('After reload');
    })

    it('should click on travel category' , () => {
        cy.get('a').contains('Travel').click();
        cy.get('h1').contains('Travel');
    })

    it('should verify no of elements' , () => {
        cy.get('.product_pod').its('length').should('eq',11);
    })

    it('verify price of olio under poetry' , () => {
        cy.get('a').contains('Poetry').click();
        cy.get('a').contains('Olio').click();
        cy.get('.price_color').contains('£23.88');
    })

    it('test to verify the cypress logging' , () => {
        cy.log('Tests completed');
    })
})