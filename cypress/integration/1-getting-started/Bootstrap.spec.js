describe('bootstrap modal', () => {
    beforeEach(() => {
      cy.log("Load target page")
      cy.log("TODO the address should be from a resource")
      cy.visit('https://getbootstrap.com/docs/5.0/components/modal/').wait(5000)
    })

    it('open a modal', () => {
        cy.log("Check the the modal is hidden")
        cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-header').should('be.hidden')

        cy.log("Click on button that opens the modal")
        cy.get('[data-bs-target="#exampleModalCenter"]').click()

        cy.log("Check the the modal is visible")
        cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-header').should('be.visible')
    })

    it('press button in modal', () => {
        cy.log("Click on button that opens the modal")
        cy.get('[data-bs-target="#exampleModalCenter"]').click()

        cy.log("Check the the modal is visible")
        cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-header').should('be.visible')

        cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()

        cy.log("Check the the modal is hidden")
        cy.get('#exampleModalCenter > .modal-dialog > .modal-content > .modal-header').should('be.hidden')        
    })

    it('insert text in modal', () => {
        cy.log("Click on button that opens the modal")
        cy.get('[data-bs-whatever="@mdo"]').click()

        cy.log("Check the the modal is visible")
        cy.get('#exampleModal > .modal-dialog > .modal-content').should('be.visible')

        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-body').within(() => {

            var testText = "some text goes here"
            cy.log("Check input text in modal")
            cy.get('#recipient-name').should('not.have.value', testText)

            cy.log("Change input text in modal")
            cy.get('#recipient-name').focus().clear().wait(300).type(testText).wait(300)

            cy.log("Check input text in modal")
            cy.get('#recipient-name').should('have.value', testText)
        })  
    })    
})