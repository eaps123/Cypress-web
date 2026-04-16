
describe('Menu', { tags: ['@menu', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_knowledgeBase.user, Cypress.env('login').login_knowledgeBase.password)
    cy.validadteAccessMenu()
    cy.validateDeleteMenu(`${Cypress.env('knowledge_base').input_menu_start}`)
  }),

    after(() => {
      cy.logoutService()
    })

  it('[WEB][AUTOMATION][KNOWLEDGE-BASE][QA-1512][CT001] - Validate Functionality Knowledge Base -> Menus -> Options -> Enable Selected', {
    tags: ['@enable_selected_menu', '@positive', '@ester_silva']
  }, () => {
    cy.validateCreateMenu(`${Cypress.env('knowledge_base').input_menu_start}`)
    cy.validateDesableSelectMenu()
    cy.validateEnableSelectMenu()
  })
})