/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('back to tech', () => {
  beforeEach(() => {
    cy.log("Load target page")
    cy.log("TODO the address should be from a resource")
    cy.visit('https://www.backto.tech/').wait(5000)
  })

  it('check page title', () => {
    cy.log("Check page title")
    cy.title().should("eq", "Tehnologie, Comunitate, Inovare | România | Back to Tech")
  })

  it('click on menu', () => {
    cy.log("Check the presence of categories filter in the home page")
    cy.get('.bMblW') //get element from first page

    cy.log("Click on the link 'Evenimente'")
    cy.get('#comp-iy1jvsc61label').click()

    cy.log("Check for the presence of the calendar heading")
    cy.get('._45BM0') //get element from second page
  })

  context('search button', () => {
    it('check that content-wrapper exists', () => {
      cy.get('#content-wrapper')
    })

    it('check that search-input exists', () => {
      cy.get('#content-wrapper').within(() => {
        cy.get('[data-hook="search-input"]')
      })
    })   
    
    it('check that search icon exists', () => {
      cy.get('#content-wrapper').within(() => {
        cy.get('[data-hook="search-input"]').within(() => {
          cy.get('svg').should('have.class', 'blog-desktop-header-search-icon-fill')
        })
      })
    })      

    it('check making the search input visble', () => {
      cy.get('[id=content-wrapper]').within(() => {
        cy.get('[data-hook="search-input"]').within(() => {

          cy.log("Check that the search input is not visible")
          cy.get('._1vtL7').should('be.hidden')

          cy.log("Click on the search icon")
          cy.get('._38BNc').click().wait(5000)

          cy.log("Check that the search input is visible")
          cy.get('._1vtL7').should('be.visible')
        })
      })
    })      

    it('insert input data', () => {
      cy.get('[id=content-wrapper]').within(() => {
        cy.get('[data-hook="search-input"]').within(() => {

          cy.log("Check that the search input is not visible")
          cy.get('._1vtL7').should('be.hidden')

          cy.log("Click on the search icon")
          cy.get('._38BNc').click().wait(5000)

          cy.log("Check that the search input is visible")
          cy.get('._1vtL7').should('be.visible')

          var searchText = "JWT"
          cy.log("Insert text in to the search input")
          cy.get('._1vtL7').focus().type(searchText)

          cy.log("Check the inserted value")
          cy.get('._1vtL7').should('have.value', searchText)
        })
      })
    })     

    it('search', () => {
      cy.get('[id=content-wrapper]').within(() => {
        cy.get('[data-hook="search-input"]').within(() => {

          cy.log("Check that the search input is not visible")
          cy.get('._1vtL7').should('be.hidden')

          cy.log("Click on the search icon")
          cy.get('._38BNc').click().wait(5000)

          cy.log("Check that the search input is visible")
          cy.get('._1vtL7').should('be.visible')

          cy.log("Insert text in to the search input and hit enter")
          cy.get('._1vtL7').focus().type("JWT").type('{enter}')

        })
      })

      cy.log('check that search page was accessed')
      cy.url().should('contain', "/search/jwt")
    })     
  })
})
