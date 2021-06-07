//This is step definition file.
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './loginPage';

Given('I open the login page', () => {
   LoginPage.visit();
})

When('I fill username with {string}', username => {
   LoginPage.fillUsername(username);
})

When('I fill password with {string}', password => {
   LoginPage.fillPassword(password);
})

When('I click on submit button', () => {
   LoginPage.submit();
})

Then('I should see home page', () => {
   cy.get('#account_summary_tab').should('be.visible');
})

Then('I should see error message', () => {
   LoginPage.shouldShowErrorMessage();
})