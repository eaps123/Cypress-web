describe('Custom Field', { tags: ['@custom_filed', '@all_tests'] }, () => {
  
  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_customFields.user, Cypress.env('login').login_customFields.password)
    cy.AccessSettingsCustomField()
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CUSTOM-FIELDS][QA-65][CT001] - Validate option of custom fields', {
    tags: ['@validate_custom_field', '@positive', '@carol_hogler']
  }, () => {
    cy.validateAddCustomField(`${Cypress.env('customField').name}`, `${Cypress.env('customField').option_fields}`)
    cy.validateEditCustomField(`${Cypress.env('customField').name}`, `${Cypress.env('customField').option_fields_edit}`)
    cy.validateDeleteCustomField(`${Cypress.env('customField').name}`, `${Cypress.env('customField').option_fields_edit}`)
  })
})