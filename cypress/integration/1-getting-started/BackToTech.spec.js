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
    cy.visit('https://www.backto.tech/')
  })

  it('check page title', () => {
    cy.title().should("eq", "Tehnologie, Comunitate, Inovare | România | Back to Tech")
  })

  context('search button', () => {
    it('check that content-wrapper exists', () => {
      cy.get('[id=content-wrapper]')
    })

    it('check that search-input exists', () => {
      cy.get('[id=content-wrapper]').within(() => {
        cy.get('[data-hook="search-input"]')
      })
    })   
    
    it('check that search icon exists', () => {
      cy.get('[id=content-wrapper]').within(() => {
        cy.get('[data-hook="search-input"]').within(() => {
          cy.get('svg').should('have.class', 'blog-desktop-header-search-icon-fill')
        })
      })
    })      

    it('check making the search input visble', () => {
      cy.get('[id=content-wrapper]').within(() => {
        cy.get('[data-hook="search-input"]').within(() => {
          cy.get('input').should('be.hidden')
          cy.get('[aria-label="Caută"]').click().then(() => { cy.get('input').should('be.visible') })
        })
      })
    })      
  })
})
