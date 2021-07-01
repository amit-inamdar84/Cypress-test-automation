/// <reference types="Cypress" />

describe('First api test', () => {
    it('Api test - Validate headers', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');
        cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8');
    })

    it('Api test - Validate status code', () => {   
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');
        cy.get('@pokemon').its('status').should('equal', 200);
    })

    it('Api test - Validate response body', () => {   
        cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');
        cy.get('@pokemon').its('body').should('include', {name: 'pikachu'});
    })

    it('Api test - Post request', () => {
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name": "Learn postman",
            "isbn": "bcd559",
            "aisle":"2238",
            "author":"John Foe"
        }).then(response => {
            expect(response.body).to.have.property("Msg");
            expect(response.status).to.eq(201);
        })
    })
})