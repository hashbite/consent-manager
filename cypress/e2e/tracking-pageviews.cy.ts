describe('Page View Tracking', () => {
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
    cy.get('script#red-box-ltd').should('not.exist')
  })

  it('initializes tracking on user consent and logs initial page view', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.window()
      .its('rbltd.trackEvent')
      .should('exist')
    cy.window()
      .its('rbltd.trackPageView')
      .should('exist')

    cy.get('script#red-box-ltd').should('exist')

    cy.get('@console.log')
      .should('be.calledWith', 'Initializing Red Box Ltd. tracking')
      .should('be.calledWith', 'page view: /')
      .should('not.be.calledWith', 'page view: /video')
      .should('be.calledTwice')
  })

  it('tracks page views when route changes to video and back', () => {
    cy.toggleIntegration('Red Box Ltd.')

    cy.get('@console.log')
      .should('be.calledWith', 'Initializing Red Box Ltd. tracking')
      .should('be.calledWith', 'page view: /')
      .should('be.calledTwice')

    cy.get('[data-testid=example-nav-video]').click()

    cy.get('@console.log')
      .should('be.calledWith', 'page view: /video')
      .should('be.calledThrice')

    cy.get('[data-testid=example-nav-home]').click()

    cy.get('@console.log').then(logSpy => {
      expect(logSpy.args[1][0]).to.equal(logSpy.args[3][0])
      expect(logSpy).to.have.callCount(4)
    })
  })

  it('disables tracking when user revokes consent', () => {
    cy.get('script#red-box-ltd').should('not.exist')

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('@console.log').should('be.calledTwice')
    cy.get('script#red-box-ltd').should('exist')

    cy.get('[data-testid=example-nav-video]').click()

    cy.get('@console.log')
      .should('be.calledWith', 'page view: /video')
      .should('be.calledThrice')

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('@console.log').should('be.calledThrice')
    cy.get('script#red-box-ltd').should('not.exist')

    cy.get('[data-testid=example-nav-home]').click()
    cy.get('@console.log').should('be.calledThrice')
  })
})
