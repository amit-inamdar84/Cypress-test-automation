const pages = ["http://example.com/"];
const sizes = ["iphone-6", "ipad-2", [1200,800]];

describe('Tests to demo iteration over multiple web pages and devices', () => {
    sizes.forEach(size => {
       pages.forEach(page => {
        it(`should match ${page} in resolution ${size}`, () => {
            cy.setResolution(size);
            cy.visit(page);
            cy.matchImageSnapshot();
        })
       })
    })
    
})