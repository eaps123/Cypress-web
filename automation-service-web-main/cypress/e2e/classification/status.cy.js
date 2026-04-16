
describe('Status', { tags: ['@status', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_status.user, Cypress.env('login').login_status.password)
    cy.validateStatus()
    cy.deleteSearchStatus(`${Cypress.env('classification').status.name_status_public}`)
    cy.deleteSearchStatus(`${Cypress.env('classification').status.name_status_internal}`)
    cy.deleteSearchStatus(`CT038`)
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CLASSIFICATION][QA-1941][CT001] - Validate Functionality Classification -> Status -> Add Public', {
    tags: ['@add_status_public', '@positive', '@ester_silva']
  }, () => {
    cy.createStatusPublic(`${Cypress.env('classification').status.name_status_public}`, `${Cypress.env('classification').status.type_status}`)
    cy.searchStatus(`${Cypress.env('classification').status.name_status_public}`)
  })

  it('[WEB][AUTOMATION][CLASSIFICATION][QA-1942][CT002] - Validate Functionality Classification -> Status -> Add Internal', {
    tags: ['@add_status_internal', '@positive', '@ester_silva']
  }, () => {
    cy.createStatusInternal(`${Cypress.env('classification').status.name_status_internal}`, `${Cypress.env('classification').status.type_status}`)
    cy.editeStatus(`CT036 Internal`, `CT038`)
  })
})