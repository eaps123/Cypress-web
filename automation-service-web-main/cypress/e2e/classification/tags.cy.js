describe('Tags', { tags: ['@tags', '@all_tests'] }, () => {
  
  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_tags.user, Cypress.env('login').login_tags.password)
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CLASSIFICATION ][QA-1964][CT001] - Validate Functionality Classification -> Tags -> Add', {
    tags: ['@valid_add_tag', '@positive', '@ester_silva']
  }, () => {
    cy.validateCreateTags(`${Cypress.env('classification').tags.name_tags}`)
    cy.validateSearchTags(`${Cypress.env('classification').tags.name_tags}`)
    cy.validateEditTags(`${Cypress.env('classification').tags.name_tags}`, `${Cypress.env('classification').tags.edit_tags}`)
  })
})