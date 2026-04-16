describe('Login', { tags: ['@login', '@all_tests'] }, () => {
  it('[WEB][AUTOMATION][LOGIN][CT001] - Validate agent login', { tags: ['@valid_login_correct', '@positive', '@fabio_santos']}, () => {
    cy.loginServiceSSO(Cypress.env('login').login_login.user, Cypress.env('login').login_login.email, Cypress.env('login').login_login.password)
    cy.url().should('be.equal', Cypress.env('urls').baseUrl)
    cy.logoutService()
  }),

  it('[WEB][AUTOMATION][LOGIN]CT005] -  Validate new login', { tags: ['@login_new_success', '@positive', '@fabio_santos']}, () => {
    cy.loginServiceNew(Cypress.env('login').valid_user.user, Cypress.env('login').valid_user.password)
    cy.logoutService()
  })
})