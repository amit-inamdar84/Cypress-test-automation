describe('Test to add new payee', () => {
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

    it('should add new payee', () => {
        cy.get('#pay_bills_tab').click();
        cy.contains('Add New Payee').click();
        cy.get('#np_new_payee_name').type('Name');
        cy.get('#np_new_payee_address').type('Address');
        cy.get('#np_new_payee_account').type('Account');
        cy.get('#np_new_payee_details').type('Details');
        cy.get('#add_new_payee').click();
    })

    it('should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was successfully created.');
    })


})