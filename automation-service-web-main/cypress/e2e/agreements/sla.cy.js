
describe('SLA', { tags: ['@sla', '@all_tests'] }, () => {

  before(() => {
    cy.validLoginType(Cypress.env('login').login_sla.user, Cypress.env('login').login_sla.password)
    cy.slaAccess()
  })

  after(() => {
    cy.logoutService()
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-965][QA-925][CT001] - Validate Functionality Agreements -> SLA -> Add', {
    tags: ['@add_sla_contracts_simple', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractSimple(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1160][CT002] - Validate Functionality Agreements -> SLA -> Add -> Standard Agreement', {
    tags: ['@add_sla_contracts_standard_agreement', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1161][CT003] - Validate Functionality Agreements -> SLA -> Add -> Rules -> CHCPPR HPST HNMAAT', {
    tags: ['@add_sla_contracts', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateRule(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.input_time_start}`, `${Cypress.env('agreements').sla.input_time_end}`)
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1251][CT004] - Validate Agreements Functionality -> SLA -> Add -> Rules -> Options -> Enable Selected', {
    tags: ['@add_sla_contracts_rules_hcpst', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateRule(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.input_time_start}`, `${Cypress.env('agreements').sla.input_time_end}`)
    cy.slaDisableRule()
    cy.get('.btn-submit-and-close').should('be.visible').first().click()
    cy.slaEnableRule()
    cy.get('.btn-submit-and-close').should('be.visible').first().click()
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1252][CT005] - Validate Agreements Functionality -> SLA -> Add -> Rules -> Options -> Disable Selected', {
    tags: ['@add_sla_contracts', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateRule(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.input_time_start}`, `${Cypress.env('agreements').sla.input_time_end}`)
    cy.slaDisableRule()
    cy.get('.btn-submit-and-close').should('be.visible').first().click()
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1253][CT006] - Validate Agreements Functionality -> SLA -> Add -> Rules -> Options -> Delete Selected', {
    tags: ['exclude_rules', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateRule(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.input_time_start}`, `${Cypress.env('agreements').sla.input_time_end}`)
    cy.slaExcludeRule()
    cy.get('.btn-submit-and-close').should('be.visible').first().click()
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1254][CT007] - Validate Agreements Functionality -> SLA -> Add -> Rules -> Options -> Clone Rule', {
    tags: ['@add_sla_contracts', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateRule(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.input_time_start}`, `${Cypress.env('agreements').sla.input_time_end}`)
    cy.slaCloneRule()
    cy.get('.btn-submit-and-close').should('be.visible').first().click()
  })

  it('[WEB][AUTOMATION][AGREEMENTS][QA-1264][CT008] - Validate Agreements Functionality -> SLA -> Add -> Rules -> Options -> Export to Excel', {
    tags: ['@export_rules_excel', '@positive', '@fabio_santos']
  }, () => {
    cy.slaDeleteContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateContractStandart(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.text_description}`)
    cy.slaFindContract(`${Cypress.env('agreements').sla.text_new_rules_1}`)
    cy.slaCreateRule(`${Cypress.env('agreements').sla.text_new_rules_1}`, `${Cypress.env('agreements').sla.input_time_start}`, `${Cypress.env('agreements').sla.input_time_end}`)
    cy.slaExportExcelRule()
    cy.get('.btn-submit-and-close').should('be.visible').first().click()
  })
})