

describe('Team', { tags: ['@team', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_team.user, Cypress.env('login').login_team.password)
    cy.validateAccessTeam()
    cy.validateDeleteTeam(`${Cypress.env('person').team.name_team}`)
  }),

    after(() => {
      cy.logoutService()
    })

  it('[WEB][AUTOMATION][TEAM][QAS-3444][CT019] - Validate Functionality  ->  Add team', {
    tags: ['@add_team', '@positive', '@ester_silva']
  }, () => {
    cy.validateCreateTeam(`${Cypress.env('person').team.name_team}{enter}`)
  })

})