
describe('Urgency', { tags: ['@urgency', '@all_tests'] }, () => {
  
  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_urgency.user, Cypress.env('login').login_urgency.password)
    cy.validateUrgency()
    cy.deleteUrgency(`${Cypress.env('classification').urgency.edit_urgency}`)
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CLASSIFICATION][QA-1919][CT001] - Validate Functionality Classification -> Urgency -> Add', {
    tags: ['@add_urgency', '@positive', '@ester_silva']
  }, () => {
    cy.createUrgency(`${Cypress.env('classification').urgency.input_urgency}`, `${Cypress.env('classification').urgency.input_color}`)
    cy.editUrgency(`${Cypress.env('classification').urgency.edit_urgency}`)
    cy.searchUrgency(`${Cypress.env('classification').urgency.edit_urgency}`)
  })
})