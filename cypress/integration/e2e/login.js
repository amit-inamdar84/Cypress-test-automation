describe('Test e2e login logout scenario', () => {
    before(() =>{
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
    })

    it('should login with invalid data', () => {
       cy.get('h3').should('be.visible');
       cy.login('invalid username', 'invalid password');
       cy.get('.alert-error').should('be.visible')
          .and('contain' , 'Login and/or password are wrong.');
    })

    it('should login with valid data', () =>{
        cy.fixture('user').then(user => {
            const username = user.UN;
            const password = user.PWD;

            cy.login(username,password);
        })
        cy.get('ul.nav-tabs').should('be.visible');
    })

    it('should logout from application', () => {
        cy.contains('username').click();
        cy.get('#logout_link').click();
        cy.url().should('include', 'index.html');
    })
})