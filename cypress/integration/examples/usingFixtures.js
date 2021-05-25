describe('Tests to use fixtures data' , () => {
    it('Read fixtures data' , () => {
        cy.visit('http://zero.webappsecurity.com/login.html');
        
        cy.fixture('user').then(user => {
            const username = user.username;
            const password = user.password;

            cy.login(username,password);
        })
    })
})