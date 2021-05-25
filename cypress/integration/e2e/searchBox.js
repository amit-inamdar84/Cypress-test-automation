describe('End to end test for search box' , () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    })

    it('Test to verify search box working' , () => {
      cy.get('#searchTerm').type('bank{enter}');
      cy.get('a').contains('Zero - Personal Banking - Loans - Credit Cards');
      cy.get('a').contains('Zero - Free Access to Online Banking');
    })
})