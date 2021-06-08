describe('Data table visual test', () => {
   before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
    cy.clearCookies();
    cy.get('#signin_button').click();
    cy.fixture('user').then(user => {
        const username = user.UN;
        const password = user.PWD;

        cy.login(username,password);
    })
    cy.get('ul.nav-tabs').should('be.visible');
   })

   it('should load account activity and take snapshot', () => {
       cy.get('#account_activity_tab').click();
       cy.wait(3000);
       //cy.matchImageSnapshot();
       cy.percySnapshot();
   })
})