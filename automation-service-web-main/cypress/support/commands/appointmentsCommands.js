//ACTIVITY
Cypress.Commands.add('accessActivity', () => {
  cy.get('#sidebar-menu-settings').should('be.visible').click()
  cy.contains('Atividades').should('be.visible').click()
  cy.wait(3000)
})

Cypress.Commands.add('newActivity', (name, valor) => {
  cy.get('button[title="Nova atividade"]').should('be.visible').click()
  cy.wait(1000)
  cy.get('.field-name').should('be.visible').type(name)
  cy.get('input[name="ActivityWorkTime[0].ValueWorkTimeType"]').should('be.visible').type(valor)
  cy.get('.btn-submit-and-close').should('be.visible').click()
})

Cypress.Commands.add('deleteActivity', () => {
  cy.contains(Cypress.env('activity').name).should('be.visible').click()
  cy.get('.btn-mv-delete').should('be.visible').click()
  cy.contains('Sim').should('be.visible').click()
  cy.get('.validation-summary-title').should('be.visible')
})

//TIME TYPE
Cypress.Commands.add('accessTimeType', () => {
  cy.get('#menu-configurations').click()
  cy.get('a[href="/WorkTimeType"]').eq(0).should('be.visible').click()
})

Cypress.Commands.add('createTimeType', (input_name, input_time_start, input_time_end) => {
  cy.wait(3000)
  cy.get('.btn-insert').should('be.visible').last().click()
  cy.get('input[name="Name"]').should('be.visible').type(input_name)
  cy.get('input[tabindex="1"]').first().should('be.visible').type(input_time_start)
  cy.get('input[tabindex="1"]').last().should('be.visible').type(input_time_end)
  cy.get('.btn-submit-and-close').should('be.visible').click()
  cy.get('.validation-summary-title').should('be.visible')
})

Cypress.Commands.add('searchTimeType', (input_name) => {
  cy.get('.queryExpression').should('be.visible').type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.log('Appointments find with success "search_time_type"')
    } else {
      throw new Error('Appointments not found "search_time_type"')
    }
  })
})

Cypress.Commands.add('deleteTimeType', (input_name) => {
  cy.get('.queryExpression').should('be.visible').type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').click()
      cy.get('.icon-mv-options').should('be.visible').click()
      cy.get('.btnDeleteSelected').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.log('Time Type deleted with success "delete_time_type"')
    } else {
      throw new Error('Time Type not found "delete_time_type"')
    }
  })
})
