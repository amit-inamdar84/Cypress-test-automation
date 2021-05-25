describe('Test to verify application resolution on different devices' , () => {
    it('720p' , () => {
        cy.viewport(1280 , 720);
        cy.visit('http://example.com/');
        cy.wait(3000);
    })

    it('1080p' , () => {
        cy.viewport(1980 , 1080);
        cy.visit('http://example.com/');
        cy.wait(3000);
    })

    it('iPhoneX' , () => {
        cy.viewport('iphone-x');
        cy.visit('http://example.com/');
        cy.wait(3000);
    })

    it('i Pad Mini' , () => {
        cy.viewport('ipad-mini');
        cy.visit('http://example.com/');
        cy.wait(3000);
    })

    it('Mac book 16' , () => {
        cy.viewport('macbook-16');
        cy.visit('http://example.com/');
        cy.wait(3000);
    })
})