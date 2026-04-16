
describe('timeType', { tags: ['@time_type', '@all_tests'] }, () => {
  before(() => {
    cy.validLoginType(Cypress.env('login').login_time_type.user, Cypress.env('login').login_time_type.password)
    cy.accessTimeType()
  }),

    after(() => {
      cy.logoutService()
    })

  it('[WEB][AUTOMATION][APPOINTMENTS][QA-1432][CT001] - Validate Functionality Notes -> Time Type -> Add -> Normal', {
    tags: ['@time_type', '@positive', '@ester_silva']
  }, () => {
    cy.createTimeType(`${Cypress.env('time_type').input_time_type}`, `${Cypress.env('time_type').attendance_time_start}`, `${Cypress.env('time_type').attendance_time_end}`)
  })

  it('[WEB][AUTOMATION][APPOINTMENTS][QA-1432][CT002] - Validate Functionality Notes -> Time Type -> Search -> Normal', {
    tags: ['@time_type', '@positive', '@ester_silva']
  }, () => {
    cy.searchTimeType(`${Cypress.env('time_type').input_time_type}`)
  })

  it('[WEB][AUTOMATION][APPOINTMENTS][QA-1432][CT003] - Validate Functionality Notes -> Time Type -> delete -> Normal', {
    tags: ['@time_type', '@positive', '@ester_silva']
  }, () => {
    cy.deleteTimeType(`${Cypress.env('time_type').input_time_type}`)
  })
})