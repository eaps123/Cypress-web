
describe('Categories', { tags: ['@categories', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_categories.user, Cypress.env('login').login_categories.password)
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CLASSIFICATION][QA-1927][CT001] - Validate Functionality Classification -> Categories', {
    tags: ['@valid_functionality_categories', '@positive', '@ester_silva']}, () => {
    cy.validateCategories()
    cy.deleteCategories(`${Cypress.env('classification').categories.input_categories_1}`)
    cy.createCategories(`${Cypress.env('classification').categories.input_categories_1}`)
    cy.editeCategories(`${Cypress.env('classification').categories.input_categories_1}`)
  })
})