describe('Test filter transaction criteria', () => {
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

    it('should fill the filter criteria', () => {
        cy.get('#account_activity_tab').click();
        cy.get('a[href="#ui-tabs-2"').click();
        cy.get('#aa_fromAmount').type('200');
        cy.get('#aa_toAmount').type('2000');
        cy.get('.btn-primary').click();
    })

    it('should display the results', () =>  {
        cy.get('tbody>tr').its('length').should('be.gt',0);
    })
})