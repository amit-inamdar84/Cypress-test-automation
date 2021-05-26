describe('Tests for filling and submitting feedback forms' , () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
    })

    it('should load feedback form' , () =>{
        cy.contains('Feedback').click();
        cy.url().should('include' , 'feedback.html');
        cy.get('h3').should('be.visible');
    })

    it('should fill feedback form' , () =>{
        cy.get('#name').type('Amit');
        cy.get('#email').type('test@email.com');
        cy.get('#subject').type('Test');
        cy.get('#comment').type('Will this be automated?');
    })

    it('should submit feedback form' , () =>{
        cy.contains('Send Message').click();
    })

    it('should display feedback message' , () =>{
        cy.get('#feedback-title').contains('Feedback');
    })
})