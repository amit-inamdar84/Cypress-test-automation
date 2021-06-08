describe('Test to make payment', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.get('#signin_button').click();
        cy.fixture('user').then(user => {
            const username = user.UN;
            const password = user.PWD;

            cy.login(username,password);
        })
        cy.get('ul.nav-tabs').should('be.visible');
    })

    it('should make payment', () => {
        cy.get('#pay_bills_tab').click();
        cy.get('.board-header').should('contain', 'Make payments to your saved payees');
        cy.get('#sp_payee').select('Bank of America');
        cy.get('#sp_account').select('Credit Card');
        cy.get('#sp_amount').type('12');
        cy.get('#sp_date').type('2021-05-22{enter}');
        cy.get('#sp_description').type('Desc');
        cy.get('#pay_saved_payees').click();
    })

    it('should display success message', () =>  {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted.');
    })
})