/// <reference types="cypress" />

describe('Script Injector: script', () => {
  const selector = 'script#red-box-ltd'

  before(() => {
    cy.visit('http://localhost:1234/')
  })
  it('does not inject script by default', () => {
    cy.get(selector).should('not.exist')
  })

  it('injects script after making decision', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.get(selector).should('have.attr', 'async')
    cy.get(selector).should('have.attr', 'defer')
    cy.get(selector)
      .should('have.attr', 'type')
      .should('equals', 'text/javascript')

    cy.window()
      .its('rbltd.push')
      .should('exist')
  })

  it('removes script when revoking decision', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.get(selector).should('not.exist')
  })
})

describe('Script Injector: img tag', () => {
  const selector = 'img[src="/zero-pixel.png"]'

  before(() => {
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

    cy.get(selector).should('not.exist')
  })
})

describe('Script Injector: image and script tags', () => {
  const selectorImg = 'img[src="/zero-pixel.png"]'
  const selectorScript = 'script#red-box-ltd'

  before(() => {
    cy.visit('http://localhost:1234/')
  })
  it('does not inject by default', () => {
    cy.get(selectorImg).should('not.exist')
    cy.get(selectorScript).should('not.exist')
  })

  it('injects img and script after making decision', () => {
    cy.toggleIntegration('Red Box Ltd.')
    cy.toggleIntegration('Innocent Pixel')

    cy.get(selectorScript).should('exist')
    cy.get(selectorImg).should('exist')
  })

  it('removes script when revoking decision', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.get(selectorScript).should('not.exist')
    cy.get(selectorImg).should('exist')
  })

  it('removes img when revoking decision', () => {
    cy.toggleIntegration('Innocent Pixel')

    cy.get(selectorImg).should('not.exist')
    cy.get(selectorScript).should('not.exist')
  })
})
