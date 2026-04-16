
describe('Justifications', { tags: ['@justifications', '@all_tests'] }, () => {
  
  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_justifications.user, Cypress.env('login').login_justifications.password)
    cy.validateJustifications()
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CLASSIFICATION][QA-1951][CT001] - Validate Functionality Rating -> Justifications', {
    tags: ['@valid_functionality_Justifications', '@positive', '@ester_silva']
  }, () => {
    cy.createJustifications(`${Cypress.env('classification').justifications.name_justifications}`, 'Em atendimento')
    cy.searchJustifications(`${Cypress.env('classification').justifications.name_justifications}`)
    cy.deleteJustifications(`${Cypress.env('classification').justifications.name_justifications}`)
  })
})