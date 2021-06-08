describe('Tests to verify currency conversion rates', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.UN;
            const password = user.PWD;

            cy.login(username,password);
        })
        cy.get('ul.nav-tabs').should('be.visible');
        cy.get('#pay_bills_tab').click();
        cy.get('.board-header').should('contain', 'Make payments to your saved payees');
    })

    it('should fill conversion form', () => {
       cy.contains('Purchase Foreign Currency').click();
       cy.get('#pc_currency').select('Great Britain (pound)');
       cy.get('#pc_amount').type('2000');
       cy.get('#pc_inDollars_true').click();
       cy.get('#pc_calculate_costs').click();
    })

    it('should display conversion amount', () => {
        cy.get('#pc_conversion_amount').should('contain','1180.50 pound (GBP) = 2000.00 U.S. dollar (USD)');
    })
})