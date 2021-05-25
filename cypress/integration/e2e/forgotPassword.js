describe('Password test' , () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    })

    it('Test forgot password scenario' , () => {
        cy.get('#signin_button').click();
        cy.get('.offset3 > a').click();
        cy.get('#user_email').type('test@email.com');
        cy.contains('Send Password').click();
    })
})