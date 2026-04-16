import { faker } from '@faker-js/faker'

describe('Person', { tags: ['@person', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_person.user, Cypress.env('login').login_person.password)
    cy.validateAccessPerson()
  }),

    after(() => {
      cy.logoutService()
    })

  it('[WEB][AUTOMATION][PERSON][QA-1627][CT001] -  Validate Functionality People -> People ->Add -> Client', {
    tags: ['@valid_search_person', '@positive', '@ester_silva']
  }, () => {
    cy.validateCreatePersonClient(`${Cypress.env('person').person_name_client}`, `automation_person${faker.datatype.uuid()}@movi.com`)
    cy.validateSearchPerson(`${Cypress.env('person').person_name_client}`)
    cy.validateDeletePerson(`${Cypress.env('person').person_name_client}`)
  })

  it('[WEB][AUTOMATION][PERSON][QA-1628][CT002] - Validate People Functionality -> People -> Add -> Agent', {
    tags: ['@create_person', '@positive', '@ester_silva']
  }, () => {
    cy.validateCreatePersonAgent(`${Cypress.env('person').person_name_agent}`, `automation_person${faker.datatype.uuid()}@movi.com`)
    cy.validateDeletePerson(`${Cypress.env('person').person_name_agent}`)
  })
})
