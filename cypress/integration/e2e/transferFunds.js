//The application is logging out on click of Submit button. So test is failing. Need to check this later
describe('Test to transfer funds', () => {
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

    it('should fill the transfer funds form', () => {
        cy.get('#transfer_funds_tab').click();
        cy.get('#tf_fromAccountId').select('3');
        cy.get('#tf_toAccountId').select('5');
        cy.get('#tf_amount').type('10');
        cy.get('#tf_description').type('Desc');
        cy.get('button[type="submit"').click();//Failing from here
    })

    it('should verify the fund transfer details', () =>  {
        cy.get('#tf_fromAccountId').should('have.value','Savings');
        cy.get('#tf_toAccountId').should('have.value','Credit Card');
        cy.get('#tf_amount').should('have.value','10');
        cy.get('#tf_description').should('have.value','Desc');
    })

    it('should submit the fund transfer form', () =>  {
        cy.get('.btn-primary').click();
    })

    it('should display success message', () => {
        cy.get('.alert-success').should('be.visible').and('contain','You successfully submitted your transaction.');
    })
})