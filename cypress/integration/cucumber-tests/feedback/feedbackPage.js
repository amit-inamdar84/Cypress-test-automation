const URL = 'http://zero.webappsecurity.com/feedback.html';
const NAME_INPUT = '#name';
const EMAIL_INPUT = '#email';
const SUBJECT_INPUT = '#subject';
const TEXT_INPUT = '#comment';
const SUBMIT_BUTTON = 'input[name="submit"]';

class FeedbackPage{
  static visit(){
      cy.visit(URL);
  }

  static fillFeedbackForm(name,email,subject,comment){
      cy.get(NAME_INPUT).type(name);
      cy.get(EMAIL_INPUT).type(email);
      cy.get(SUBJECT_INPUT).type(subject);
      cy.get(TEXT_INPUT).type(comment);
  }

  static submitFeedbackForm(){
      cy.get(SUBMIT_BUTTON).click();
  }
}

export default FeedbackPage