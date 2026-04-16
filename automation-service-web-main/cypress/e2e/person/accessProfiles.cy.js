
describe('Access Profiles', { tags: ['@access_profiles', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_accessProfiles.user, Cypress.env('login').login_accessProfiles.password)
    cy.validateAccessProfiles()
    cy.searchDelete(`${Cypress.env('person').accessProfiles.input_accessProfiles}`)
  }),

  after(() => {
    cy.logoutService()
  })

    it('[QAS-3459][WEB][AUTOMATION][PERSON]  - CT033 - Validate Functionality People -> Access profiles', {
      tags: ['@valid_access_profiles', '@positive', '@ester_silva']
    }, () => {
      cy.createAccessProfiles(`${Cypress.env('person').accessProfiles.input_accessProfiles}`)
    })
})

