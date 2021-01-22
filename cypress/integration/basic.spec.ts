/// <reference types="cypress" />

describe('Wrapping Component', () => {
  before(() => {
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

  it('does not render wrapping component by default', () => {
    cy.get('[data-testid="consent-manager-wrapping-component"]').should(
      'not.exist'
    )
  })

  it('renders wrapping component after making decision', () => {
    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Red Box Ltd.')
      .click()

    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Submit')
      .click()

    cy.get('[data-testid="consent-manager-wrapping-component"]').should('exist')
  })

  it('removes wrapping component after revoking decision', () => {
    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Red Box Ltd.')
      .click()

    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Submit')
      .click()

    cy.get('[data-testid="consent-manager-wrapping-component"]').should(
      'not.exist'
    )
  })
})

describe('Privacy Shield', () => {
  before(() => {
    cy.visit('http://localhost:1234/video')
  })
  it('renders privacy shield', () => {
    cy.get('[data-testid="consent-manager-privacy-shield"]').contains(
      'Video Inc. is a popular service to share clips of cats.'
    )
  })

  it('renders form component', () => {
    const container = cy.get('[data-testid="consent-manager-form-container"]')
    container.should('contain', 'Video Inc.')
    container.should('contain', 'Red Box Ltd.')
  })

  it('renders video component after making decision', () => {
    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Video Inc.')
      .click()

    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Submit')
      .click()

    cy.get('[data-testid="consent-manager-video-component"]').contains(
      'Video component with id rick-roll'
    )
  })

  it('renders privacy shield after revoking decision', () => {
    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Video Inc.')
      .click()

    cy.get('[data-testid="consent-manager-form-container"]')
      .contains('Submit')
      .click()

    cy.get('[data-testid="consent-manager-privacy-shield"]').contains(
      'Video Inc. is a popular service to share clips of cats.'
    )
  })
})
