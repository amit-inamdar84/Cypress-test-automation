describe('Tests for reading browser document content' , () => {
    it('Test to read and verify browser document content' , () => {
        cy.visit('https://www.example.com');
        cy.wait(3000);
        cy.document().its('contentType').should('eq' , 'text/html');
        cy.document().should('have.property' , 'charset').and('eq' , 'UTF-8');
        cy.document().should('have.property' , 'title').and('eq' , 'Example Domain');
    })
})