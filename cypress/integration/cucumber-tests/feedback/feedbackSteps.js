import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import FeedbackPage from './feedbackPage';

Given('I open feedback form', () => {
    FeedbackPage.visit();
})

When('I fill feedback form with {string} {string} {string} {string}', (name, email, subject, comments) => {
    FeedbackPage.fillFeedbackForm(name, email, subject, comments);
})

And ('I click on send button', () => {
    FeedbackPage.submitFeedbackForm();
})