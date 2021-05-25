describe('Tests to clear and type input text' , () => {

    it('should override the current time' , () => {
        const date = new Date(2021, 3, 10).getTime();
        cy.clock(date);
        cy.log(date);
    })

    it('Load website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        cy.clearCookies({log:true});
        cy.clearLocalStorage('your item', {log:true});  
    })

    it('should fill username and password', () => {
        cy.get('#user_login').clear();
        cy.get('#user_login').type('Invalid username', {delay : 500});

        cy.get('#user_password').clear();
        cy.get('#user_password').type('Invalid password', {delay : 500});
    })

    it('should click check box', () => {
        cy.get('input[type = "checkbox"]').click();
    })

    it('should click submit button and validate error message', () => {
        cy.contains('Sign in').click();
        cy.get('.alert-error').should('be.visible')
          .and('contain' , 'Login and/or password are wrong.');
    })
})