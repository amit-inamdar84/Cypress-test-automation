describe('Test to simulate keyboard press' , () => {
    it('Test to simulate enter press' , () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#searchTerm').type('some text {enter}');
    })

    it('Test to simulate backspace' , () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#searchTerm').type('s{backspace}');
    })
})