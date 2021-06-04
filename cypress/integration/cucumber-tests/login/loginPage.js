const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SUBMIT_BUTTON = 'Sign in';
const ERROR_MESSAGE = '.alert-error';

class LoginPage {
   static visit(){
       cy.visit(URL);
   }

   static fillUsername(name){
       cy.get(USERNAME).type(name);
   }

   static fillPassword(password){
    cy.get(PASSWORD).type(password);
}

static submit(){
    cy.contains(SUBMIT_BUTTON).click();
}
static shouldShowErrorMessage(){
    cy.get(ERROR_MESSAGE).should('contain', 'Login and/or password are wrong.');
}

}

export default LoginPage;