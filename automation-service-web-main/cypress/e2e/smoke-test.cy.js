import { faker } from '@faker-js/faker'

describe('Smoke Tests', { tags: ['@all_smoke_tests', '@fabio_santos'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_smoke.user, Cypress.env('login').login_smoke.password)
  })

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1161][CT003] - Validate Functionality Agreements -> SLA -> Add -> Rules -> CHCPPR HPST HNMAAT', {
    tags: ['@smoke_test', '@fabio_santos']
  }, () => {
    cy.slaAccess()
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateRule(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.input_time_start}`, `${Cypress.env('agreements').sla.input_time_end}`)
  })

  it('[WEB][AUTOMATION][CUSTOM-FIELDS][QA-65][CT001] - Validate option of custom fields', {
    tags: ['@smoke_test', '@fabio_santos']
  }, () => {
    cy.AccessSettingsCustomField()
    cy.validateAddCustomField(`${Cypress.env('customField').name}`, `${Cypress.env('customField').option_fields}`)
    cy.validateEditCustomField(`${Cypress.env('customField').name}`, `${Cypress.env('customField').option_fields_edit}`)
    cy.validateDeleteCustomField(`${Cypress.env('customField').name}`, `${Cypress.env('customField').option_fields_edit}`)
  })

  it('[WEB][AUTOMATION][PERSON][QA-1627][CT001] -  Validate Functionality People -> People ->Add -> Client', {
    tags: ['@smoke_test', '@fabio_santos']
  }, () => {
    cy.validateAccessPerson()
    cy.validateCreatePersonClient(`${Cypress.env('person').person_name_client}`, `automation_person${faker.datatype.uuid()}@movi.com`)
    cy.validateSearchPerson(`${Cypress.env('person').person_name_client}`)
  })

  it('[WEB][AUTOMATION][PERSON][QA-1628][CT002] - Validate People Functionality -> People -> Add -> Agent', {
    tags: ['@smoke_test', '@fabio_santos']
  }, () => {
    cy.validateAccessPerson()
    cy.validateCreatePersonAgent(`${Cypress.env('person').person_name_agent}`, `automation_person${faker.datatype.uuid()}@movi.com`)
  })

  it('[WEB][AUTOMATION][TICKET][CT001] - Validate create Ticket - Customer/Agent', {
    tags: ['@smoke_test', '@fabio_santos']
  }, () => {
    cy.validateCreateTicket(`${Cypress.env('ticket').ticket_name}`)
    cy.validateSearchTicket(`${Cypress.env('ticket').ticket_name}`)
  })
})