describe('pave view tracking', () => {
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
      .its('rbltd.trackEvent')
      .should('exist')
    cy.window()
      .its('rbltd.trackPageView')
      .should('exist')

    cy.get('[data-testid="consent-manager-wrapping-component"]').should('exist')

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
    cy.get('[data-testid="consent-manager-wrapping-component"]').should(
      'not.exist'
    )

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('[data-testid="consent-manager-wrapping-component"]').should('exist')

    cy.get('@console.log').should('be.calledTwice')

    cy.get('[data-testid=example-nav-video]').click()

    cy.get('[data-testid="consent-manager-wrapping-component"]').should('exist')
    cy.get('@console.log')
      .should('be.calledWith', 'page view: /video')
      .should('be.calledThrice')

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('@console.log').should('be.calledThrice')
    cy.get('[data-testid="consent-manager-wrapping-component"]').should(
      'not.exist'
    )

    cy.get('[data-testid=example-nav-home]').click()

    cy.get('@console.log').should('be.calledThrice')
    cy.get('[data-testid="consent-manager-wrapping-component"]').should(
      'not.exist'
    )
  })
})

describe('custom event tracking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
        cy.spy(win, 'alert').as('alert')
      },
    })
  })

  it('enables event tracking on on user consent', () => {
    cy.get('[data-testid=example-button]').should(
      'contain',
      'Do not click here - nothing will happen'
    )

    // wait one tick to mount wrapper components
    // @todo consider if we really need to wrap the whole thing on client again!
    cy.wait(0)

    cy.get('@console.log').should('not.be.called')

    cy.get('[data-testid=example-button]').click()

    cy.get('@console.log').should('not.be.called')
    cy.get('@alert').should('not.be.called')

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('[data-testid=example-button]').should(
      'contain',
      'Do not click here - we will track you'
    )

    cy.get('@console.log').should('be.calledTwice')

    cy.get('[data-testid=example-button]').click()

    cy.get('@console.log')
      .should('be.calledThrice')
      .should('be.calledWith', 'custom event tracked')

    cy.get('@alert')
      .should('be.calledOnce')
      .should('be.calledWith', 'told ya! click watching you closely')

    cy.toggleIntegration('Red Box Ltd.')

    cy.get('[data-testid=example-button]').click()

    cy.get('@alert').should('be.calledOnce')
    cy.get('@console.log').should('be.calledThrice')
    cy.get('[data-testid=example-button]').should(
      'contain',
      'Do not click here - nothing will happen'
    )
  })
})
