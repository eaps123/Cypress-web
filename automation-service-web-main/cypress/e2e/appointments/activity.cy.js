
describe('Activity', { tags: ['@activity', '@all_tests'] }, () => {

  before(() => {
    cy.validLoginType(Cypress.env('login').login_activity.user, Cypress.env('login').login_activity.password)
    cy.accessActivity()
  }),

    after(() => {
      cy.logoutService()
    })

  it('[WEB][AUTOMATION][ACTIVITY][QA-2212][CT001] - Validade create activity', {
    tags: ['@activity_create_delete', '@positive', '@ester_silva']
  }, () => {
    cy.newActivity(Cypress.env('activity').name, Cypress.env('activity').valor_input)
  })

  it('[WEB][AUTOMATION][ACTIVITY][CT002] - Validate delete activity', {
    tags: ['@activity_create_delete', '@positive', '@ester_silva']
  }, () => {
    cy.deleteActivity(Cypress.env('activity').name)
  })
})