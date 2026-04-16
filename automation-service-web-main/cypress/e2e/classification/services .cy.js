
describe('Services', { tags: ['@services', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_services.user, Cypress.env('login').login_services.password)
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CLASSIFICATION][QA-1888][CT001] - Validate Functionality Classification -> Services CRUD -> New Public Service VAEC SAEC', {
    tags: ['@create_sevice', '@positive', '@ester_silva']
  }, () => {
    cy.va
    cy.validateService()
    cy.deleteService(`${Cypress.env('classification').service.input_name}`)
    cy.createService(`${Cypress.env('classification').service.input_name}`, `${Cypress.env('classification').service.input_description}`)
    cy.searchService(`${Cypress.env('classification').service.input_name}`)
  })
})