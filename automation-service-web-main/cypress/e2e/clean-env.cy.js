
describe('Clean Enviroment', { tags: ['@clean_env', '@fabio_santos'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_clean_env.user, Cypress.env('login').login_clean_env.password)
  }),

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][CLEAN ENV][TAGS][CT001] - Validate clean at tags', {
    tags: ['@positive', '@clean_env_tags', '@fabio_santos']
  }, () => {
    cy.validateMenuTags()
    cy.validateDeleteTags(`${Cypress.env('classification').tags.edit_tags}`)
  })

  it('[WEB][AUTOMATION][CLEAN ENV][CONTRACTS][CT002] - Validate clean at contract', {
    tags: ['@clean_env_contracts', '@fabio_santos']
  }, () => {
    cy.accessTimeContract()
    cy.deleteTimeContractsSelect('AUTOMATION NAME')
  })

  it('[WEB][AUTOMATION][CLEAN ENV][PERSON][CT003] - Validate clean person', {
    tags: ['@clean_env_person', '@fabio_santos']
  }, () => {
    cy.validateAccessPerson()
    cy.validateDeletePerson(`${Cypress.env('person').person_name_client}`)
    cy.validateDeletePerson(`${Cypress.env('person').person_name_agent}`)
  })

  it('[WEB][AUTOMATION][CLEAN ENV][TICKETS][CT004] - Validate clean at tickets', {
    tags: ['@clean_env_tickets', '@fabio_santos']
  }, () => {
    cy.validateDeleteTicket(`${Cypress.env('ticket').ticket_name}`)
  })

  it('[WEB][AUTOMATION][CLEAN ENV][CONTRACT SLA][CT005] - Validate clean at contracts SLA', {
    tags: ['@add_sla_contracts_simple', '@positive', '@fabio_santos']
  }, () => {
    cy.slaAccess()
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
  })
})