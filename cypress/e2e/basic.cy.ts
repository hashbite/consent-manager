/// <reference types="cypress" />

describe('Basics', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  })
  it('properly renders home page', () => {
    cy.get('main').contains('Welcome to the example page')
  })

  it('renders form component', () => {
    const container = cy.get('[data-testid="consent-manager-form-container"]')
    container.should('contain', 'Video Inc.')
    container.should('contain', 'Red Box Ltd.')
  })
})
