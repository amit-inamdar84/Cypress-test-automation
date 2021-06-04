import{ addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"


Cypress.Commands.add('login',(username , password) => {
    cy.get('#user_login').clear();
    cy.get('#user_login').type(username);

    cy.get('#user_password').clear();
    cy.get('#user_password').type(password);

    cy.contains('Sign in').click();
})

addMatchImageSnapshotCommand({
    failureTreshold: 0.0,
    failureTresholdType: "percent",
    customDiffConfig: { treshold: 0.0},
    capture: "viewport"
})

Cypress.Commands.add('setResolution', size => {
    if(Cypress._.isArray(size)) {
        cy.viewport(size[0],size[1]);//To set value like [1200,800]
    }
    else{
        cy.viewport(size);//To set value like "iphone-6"
    }
})

