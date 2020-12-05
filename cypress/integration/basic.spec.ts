/// <reference types="cypress" />

describe('Smoke Test', () => {
  it('renders fallback component', () => {
    cy.visit('http://localhost:1234')

    cy.get('[data-testid="privacy-manager-privacy-shield"]').contains(
      'Video Inc. is a popular service to share clips of cats.'
    )
  })

  it('renders form component', () => {
    const container = cy.get('[data-testid="privacy-manager-form-container"]')
    container.should('contain', 'Video Inc.')
    container.should('contain', 'Red Box Ltd.')
  })

  it('renders video component after making decision', () => {
    cy.get('[data-testid="privacy-manager-form-container"]')
      .contains('Video Inc.')
      .click()

    cy.get('[data-testid="privacy-manager-form-container"]')
      .contains('Submit')
      .click()

    cy.get('[data-testid="privacy-manager-privacy-shield"]').contains(
      'Video component with id rick-roll'
    )
  })
})
