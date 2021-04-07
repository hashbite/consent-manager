describe('Pave View Tracking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
      },
    })
  })

  it('does not initialize tracking by default', () => {
    cy.get('@console.log')
      .should('not.be.calledWith', 'Initializing Red Box Ltd. tracking')
      .should('not.be.calledWith', 'page view: /')
      .should('not.be.called')
    cy.window()
      .its('rbltd')
      .should('not.exist')
    cy.get('[data-testid="consent-manager-wrapping-component"]').should(
      'not.exist'
    )
  })

  it('initializes tracking on user consent and logs initial page view', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.window()
      .its('rbltd.push')
      .should('exist')

    cy.get('@console.log')
      .should('be.calledWith', 'page view: /')
      .should('not.be.calledWith', 'page view: /video')
      .should('be.calledOnce')
  })

  it('tracks page views when route changes to video and back', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.get('@console.log')
      .should('be.calledWith', 'page view: /')
      .should('be.calledOnce')

    cy.get('[data-testid=example-nav-video]').click()

    cy.get('@console.log')
      .should('be.calledWith', 'page view: /video')
      .should('be.calledTwice')

    cy.get('[data-testid=example-nav-home]').click()

    cy.get('@console.log').then(logSpy => {
      expect(logSpy.args[0][0]).to.equal(logSpy.args[2][0])
    })
    cy.get('@console.log').should('be.calledThrice')
  })

  it('disables tracking when user revokes consent', () => {
    cy.get('[data-testid="consent-manager-wrapping-component"]').should(
      'not.exist'
    )

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('@console.log').should('be.calledOnce')

    cy.get('[data-testid=example-nav-video]').click()

    cy.get('@console.log')
      .should('be.calledWith', 'page view: /video')
      .should('be.calledTwice')

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('@console.log').should('be.calledTwice')

    cy.get('[data-testid=example-nav-home]').click()

    cy.get('@console.log').should('be.calledTwice')
  })
})
