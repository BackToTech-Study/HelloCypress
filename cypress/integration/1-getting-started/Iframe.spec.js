describe('iframe test', () => {
    it('open a modal', () => {
        cy.log("Load target page")
        cy.log("TODO the address should be from a resource")
        cy.visit('https://www.w3schools.com/html/html_iframe.asp').wait(5000)
  
        cy.log("Accept privacy policy")
        cy.get('#accept-choices').click()

        cy.log("Accept privacy policy in the iframe")
        cy.get('iframe').get('#accept-choices').click()
    })
})