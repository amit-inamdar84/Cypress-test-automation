describe('Test to write data to files' , () => {
    it('Test to write data to json file' , () => {
        cy.writeFile('log.json' , {name : 'Amit' , Age: 37});
    })

    it('Test to write data to text file' , () => {
        cy.writeFile('log.txt' , 'Hello world This is new line');
    })

    it('Test to read data from json file' , () => {
        cy.readFile('log.json').its('Age').should('eq' , 37);
        cy.readFile('log.json').its('name').should('eq', 'Amit')
    })


    it('Test to read data from text file' , () => {
        cy.readFile('log.txt').should('eq' , 'Hello world This is new line');
    })
})