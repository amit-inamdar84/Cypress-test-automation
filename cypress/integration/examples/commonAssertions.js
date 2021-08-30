describe('List of commonly used assertions for test automation', () => {
    it('', () => {
        //Retry until we find 5 elements matching selected lists.
        //When assertion fails, the command cy.get keeps retrying the DOM until it the assertion passes or command timesout.
       cy.get('li.selected').should('have.length',5);

       cy.get('form').find('input').should('not.have.class','disabled');

       cy.get('textarea').should('have.value','Placeholder');

       cy.get('a').parent('span').should('not.contain','click me');

       cy.get('button').should('be.visible');

       cy.get('#spinner').should('not.exist');

    })
})