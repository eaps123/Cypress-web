import { faker } from '@faker-js/faker'
import 'cypress-iframe'
import 'cypress-xpath'

Cypress.Commands.add('validateAccessTicket', () => {
  cy.get('#menu-ticket').should('be.visible').click()
})

Cypress.Commands.add('validateCreateTicket', (input_name) => {
  cy.wait(2000)
  cy.get('.icon-mv-add').eq(0).click()
  cy.wait(2000)
  cy.get('.new-ticket').click()
  cy.contains(`${Cypress.env('ticket').search_requester}`).type(`${Cypress.env('ticket').text.automation_agente}`)
  cy.get('.md-select-client-name').click()
  cy.get('input[name="Subject"]').type(input_name)

  cy.iframe('[data-testid="description-ticket"]')
    .within(() => {
      cy.xpath('/html/body/p').then($p => { $p.text(`Automation web subject ${faker.lorem.text()}`) })
    })
  cy.get('.right-group', { timeout: 1000 }).first().trigger('click')
  cy.get('.right-group').first().click()
  cy.contains(`${Cypress.env('ticket').msg_ticket_OK}`)
  cy.get('button[class="btn-mv btn-mv-confirm btn-close pull-right"]').click({ force: true })
  cy.log('Ticket create with success "create_ticket"')
  cy.get('.protocol-ticket-content > .modal-footer > .btn-mv-confirm').last().click()
})

Cypress.Commands.add('validateSearchTicket', (input_name) => {
  cy.validateAccessTicket()
  cy.get('.queryExpression').last().type(input_name)
  cy.wait(5000)
  cy.get('button[title="Pesquisar"]').last().click()
  cy.wait(5000)
  cy.get('body').then($body => {
    if ($body.find('.slick-cell').length > 0) {
      cy.get('.icon-mv-erase').last().click()
        cy.contains(`${Cypress.env('ticket').ticket_name}`).should('be.visible')
    } else {
      cy.get('.icon-mv-erase').last().click()
      cy.wait(5000)
      cy.contains(`${Cypress.env('ticket').ticket_name}`).should('be.visible')
    }
  })
})

Cypress.Commands.add('validateCloneTicket', () => {
  cy.wait(2000)
  cy.get('a[data-id="777912"]').last().click()
  cy.get('.slick-cell').last().click()
  cy.get('.bnt-options-ticket').click()
  cy.get('.clone-ticket-link').click()
  cy.get('.btn-new-ticket').last().click()
  cy.wait(3000)
  cy.get('.btn-submit-and-close').click()
  cy.contains(`${Cypress.env('ticket').msg_ticket_OK}`)
  cy.wait(5000)
  cy.get('.protocol-ticket-content > .modal-footer > .btn-mv-confirm').last().click()
})

Cypress.Commands.add('validatePrintTicket', () => {
  cy.get('#menu-ticket').click()
  cy.get('.slick-cell').last().click()
  // cy.get('.bnt-options-ticket').click()
  // cy.get('.print-ticket').click()
  // cy.get(this.'.btn-print').should('be.visible')
})

Cypress.Commands.add('validateMessageInternalTicket', () => {
  cy.intercept('https://user.userguiding.com/sdk/event').as('getTickets')
  cy.get('#menu-ticket').click()
  cy.wait('@getTickets')
  cy.get('.slick-cell').last().click()
  cy.get('.bnt-options-ticket').click()
  cy.wait(2000)
  cy.get('.option-send-internal-message').click()
  cy.wait(2000)
  cy.get('.sendInternalMessageTo').first().click()
  cy.get('ul[class="select2-results"]').contains('[Engenharia] - QA Automation Test Service', { timeout: 2000 }).click()
  cy.wait(2000)

  cy.iframe().contains('Área de texto formatado').should('be.visible')
    .within(() => {
      cy.xpath('/html/body/p').then($p => { $p.text(`Automation web subject ${faker.lorem.text()}`) })
    })
  cy.wait(2000)
  cy.get('.internal-message').last().click()
})

Cypress.Commands.add('validateExcludeTicket', () => {
  cy.get('body').then($body => {
    if ($body.find('.slick-cell').length > 0) {
      cy.wait(2000)
      cy.get('.slick-cell').last().click({force: true})
      cy.wait(2000)
      cy.get('.bnt-options-ticket').last().click()
      cy.get('.delete-ticket').last().click()
      cy.get('.modal-dialog').should('be.visible')
      cy.get('.formAjax > .ticketDeleteModal > .modal-dialog > .modal-content > .modal-footer > .btn-mv-confirm').last().click()
      cy.intercept('https://session.app.movidesk.com/api/Session/UpdateSessionUser', { statusCode: 204 }).as('deleteTicketList')
    } else {
      cy.log('Ticket not found "delete_ticket"')
    }
  })
})

Cypress.Commands.add('validateDeleteTicket', (input_name) => {
  cy.get('#menu-ticket').click()
  cy.get('.queryExpression').last().type(input_name)
  cy.get('button[title="Pesquisar"]').last().click()
  cy.wait(2000)
  cy.get('a[data-id="777912"]').last().click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').last().click()
      cy.get('.icon-mv-options').last().click()
      cy.get('a[class="deleteSelected"]').should('be.visible').last().click()
      cy.get('.btn-mv-confirm').last().should('be.visible').click()
      cy.log('Ticket deleted with success "delete_ticket"')
    } else {
      cy.log('Ticket not found "delete_ticket"')
    }
  })
})

Cypress.Commands.add('validateDeleteAllTicket', () => {
  cy.get('#menu-ticket').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').last().click()
      cy.get('.icon-mv-options').last().click()
      cy.get('a[class="deleteSelected"]').should('be.visible').click()
      cy.get('.btn-mv-confirm').last().should('be.visible').click()
      cy.log('Ticket deleted with success "delete_ticket"')
    } else {
      cy.log('Ticket not found "delete_ticket"')
    }
  })
})

