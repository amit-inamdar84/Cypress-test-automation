class BasePage{
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/');
    }

    static wait(timeout){
        cy.wait(timeout);
    }
}

class HomePage extends BasePage{
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView();
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView();
    }
}

describe('Test for page scrolling' , () => {
    it('Test to scroll vertically down and up till an element' , () => {
        HomePage.loadHomePage();
        HomePage.wait(3000);
        HomePage.scrollToBottom();
        HomePage.wait(3000);
        HomePage.scrollToTop();
    })
})