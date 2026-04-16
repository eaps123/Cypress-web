

describe('Tickets', { tags: ['@tickets', '@all_tests'] }, () => {

  before(() => {
    cy.loginServiceNew(Cypress.env('login').login_ticket.user, Cypress.env('login').login_ticket.password)
    cy.validateAccessTicket()
  }),

    after(() => {
      cy.logoutService()
    })

  it('[WEB][AUTOMATION][TICKET][CT001] - Validate create Ticket - Customer/Agent', {
    tags: ['@create_ticket', '@positive', '@fabio_santos']
  }, () => {
    cy.validateCreateTicket(`${Cypress.env('ticket').ticket_name}`)
    cy.validateSearchTicket(`${Cypress.env('ticket').ticket_name}`)
  })

  it('[WEB][AUTOMATION][TICKET][CT002] - Validate clone ticket', {
    tags: ['@clone_ticket', '@positive', '@fabio_santos']
  }, () => {
    cy.validateCloneTicket()
  })

  // ANALISAR COM DEV O PORQUE NÃO ESTA EXIBIND OS TICKET NA BUSCA DO MERGE
  // it('[WEB][AUTOMATION][TICKET][CT004] - Validate merge ticket', {
  //   tags: ['@merge_ticket', '@positive', '@fabio_santos']
  // }, () => {
  // ticket.merge_ticket()
  // })

  //ANALISAR COM DEV PARA ADICIONAR UM ID CAMPO TEXT
  // it('[WEB][AUTOMATION][TICKET][CT007] - Validate send internal message ticket', {
  //   tags: ['@message_internal_ticket', '@positive', '@fabio_santos']
  // }, () => {
  //   ticket.message_internal_ticket()
  // })

  // it('[WEB][AUTOMATION][TICKET][CT006] - Validate print ticke', {
  //   tags: ['@print_ticket', '@positive', '@fabio_santos']
  // }, () => {
  //   cy.validatePrintTicket()
  // })

  //Analise do processo com a equipe de desenvolvimento
  // it('[WEB][AUTOMATION][TICKET][CT005] - Validate exclude ticket', {
  //   tags: []
  // }, () => {
  //   cy.validateExcludeTicket()
  // })

})
