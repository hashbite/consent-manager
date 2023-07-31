/// <reference types="cypress" />

describe('Wrapper Component: script tag', () => {
  const selector = 'script#red-box-ltd'

  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  })
  it('does not inject Wrapper Component by default', () => {
    cy.get(selector).should('not.exist')
  })

  it('injects Wrapper Component after making decision', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.get(selector).should('have.attr', 'async')
    cy.get(selector).should('have.attr', 'defer')
    cy.get(selector)
      .should('have.attr', 'type')
      .should('equals', 'text/javascript')

    cy.window()
      .its('rbltd.trackEvent')
      .should('exist')
    cy.window()
      .its('rbltd.trackPageView')
      .should('exist')
  })

  it('removes Wrapper Component when revoking decision', () => {
    cy.toggleIntegration('Red Box Ltd.')
    cy.toggleIntegration('Red Box Ltd.')

    cy.get(selector).should('not.exist')
  })
})

describe('Wrapper Component: img tag', () => {
  const selector = 'img[src="/zero-pixel.png"]'

  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  })
  it('does not inject img by default', () => {
    cy.get(selector).should('not.exist')
  })

  it('injects img after making decision', () => {
    cy.toggleIntegration('Innocent Pixel')

    cy.get(selector).should('have.attr', 'height')
    cy.get(selector).should('have.attr', 'width')
  })

  it('removes img when revoking decision', () => {
    cy.toggleIntegration('Innocent Pixel')
    cy.toggleIntegration('Innocent Pixel')

    cy.get(selector).should('not.exist')
  })
})

describe('Wrapper Component: image and script tags', () => {
  const selectorImg = 'img[src="/zero-pixel.png"]'
  const selectorScript = 'script#red-box-ltd'

  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  })
  it('does not inject by default', () => {
    cy.get(selectorImg).should('not.exist')
    cy.get(selectorScript).should('not.exist')
  })

  it('injects img and Wrapper Component after making decision', () => {
    cy.toggleIntegration('Red Box Ltd.')
    cy.toggleIntegration('Innocent Pixel')

    cy.get(selectorScript).should('exist')
    cy.get(selectorImg).should('exist')
  })

  it('removes Wrapper Component when revoking decision', () => {
    cy.toggleIntegration('Red Box Ltd.')
    cy.toggleIntegration('Innocent Pixel')

    cy.toggleIntegration('Red Box Ltd.')

    cy.get(selectorScript).should('not.exist')
    cy.get(selectorImg).should('exist')
  })

  it('removes img when revoking decision', () => {
    cy.toggleIntegration('Innocent Pixel')
    cy.toggleIntegration('Red Box Ltd.')

    cy.toggleIntegration('Innocent Pixel')
    cy.toggleIntegration('Red Box Ltd.')

    cy.get(selectorImg).should('not.exist')
    cy.get(selectorScript).should('not.exist')
  })
})
