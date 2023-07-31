/// <reference types="cypress" />

describe('Privacy Shield', () => {
  beforeEach(() => {
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
    cy.toggleIntegration('Video Inc.')

    cy.get('[data-testid="consent-manager-video-component"]').contains(
      'Video component with id rick-roll'
    )
  })

  it('renders privacy shield after revoking decision', () => {
    cy.toggleIntegration('Video Inc.')
    cy.toggleIntegration('Video Inc.')

    cy.get('[data-testid="consent-manager-privacy-shield"]').contains(
      'Video Inc. is a popular service to share clips of cats.'
    )
  })
})
