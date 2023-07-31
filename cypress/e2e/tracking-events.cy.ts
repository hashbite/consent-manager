describe('Events Tracking', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
        cy.spy(win, 'alert').as('alert')
      },
    })
  })

  it('enables and disables event tracking based on user consent', () => {
    cy.get('[data-testid=example-button]').should(
      'contain',
      'Do not click here - nothing will happen'
    )

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
