
describe('timeContracts', { tags: ['@timeContracts', '@all_tests'] }, () => {
  
  before(() => {
    cy.validLoginType(Cypress.env('login').login_timeContracts.user, Cypress.env('login').login_timeContracts.password)
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][TIME-CONTRACTS][CT001] - Validate delete time contracts', {
    tags: ['@delete_time_contracts', '@positive', '@fabio_santos']
  }, () => {
    cy.accessTimeContract()
    cy.deleteTimeContractsSelect('AUTOMATION NAME')
  })
})