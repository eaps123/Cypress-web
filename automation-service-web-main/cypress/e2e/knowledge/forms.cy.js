import { faker } from '@faker-js/faker'
describe('Forms', { tags: ['@forms', '@all_tests'] }, () => {

  before(() => {
    cy.validLoginType(Cypress.env('login').login_forms.user, Cypress.env('login').login_forms.password)
    cy.validadteAccessForms()
  }),

    after(() => {
      cy.logoutService()
    })

  it('[WEB][AUTOMATION][KNOWLEDGE BASE][FORMS][CT-001] Create forms with success', {
    tags: ['@add_forms', '@positive', '@everton_pedro']
  }, () => {
    cy.createForms(`${Cypress.env('knowledge_base').forms.nameForm}`)
    cy.validateForms(`${Cypress.env('knowledge_base').forms.nameForm}`)
    cy.fillForms(`${faker.lorem.text(20)}`)
    cy.validadteAccessForms()
    cy.validateForms(`${Cypress.env('knowledge_base').forms.nameForm}`)
    cy.deleteForms()
  })
})