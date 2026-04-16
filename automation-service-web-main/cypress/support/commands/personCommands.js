// Access Profiles
Cypress.Commands.add('validateAccessProfiles', () => {
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Perfis de acesso"]').first().click()
  cy.wait(2000)
  cy.contains('Administradores').should('be.visible')
})

Cypress.Commands.add('searchDelete', (input_name) => {
  cy.get('input[name="QueryExpression"]').first().type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('.ui-widget-content').click()
      cy.get('.btn-mv-delete').click()
      cy.get('button[data-value="yes"]').click()
      cy.log('Access profile successfully deleted "searchDelete"')
      cy.get('button[title="Remover filtros de busca"]').should('be.visible').click()
    } else {
      cy.log('Access profile not found "searchDelete"')
    }
  })
})

Cypress.Commands.add('createAccessProfiles', (input_name) => {
  cy.get('.button > .icon-mv-add').should('be.visible').click()
  cy.get('input[name="Name"]').should('be.visible').click().type(input_name)
  cy.get('label[class="btn-mv-bottom-border col-sm-6 "]').should('be.visible').first().click()
  cy.get('.right-group > .btn-mv-confirm').should('be.visible').click()
  cy.get('.grid-canvas').contains(input_name)
})

//Person

Cypress.Commands.add('validateAccessPerson', () => {
  cy.get('#sidebar-menu-users').last().click()
})

Cypress.Commands.add('validateCreatePersonClient', (input_name, input_email) => {
  cy.wait(2000)
  cy.get('button[title="Nova Pessoa"]').last().click()
  cy.wait(2000)
  cy.get('.BusinessName').type(input_name)
  cy.get('input[name="Emails[0].Email"]').first().type(input_email)
  cy.get('.btn-submit-and-close').first().should('be.visible').click()
  cy.get('.validation-summary-title').should('be.visible')
  cy.log('Person create with success "create_person_client"')
})

Cypress.Commands.add('validateCreatePersonAgent', (input_name) => {
  cy.wait(2000)
  cy.get('button[title="Nova Pessoa"]').last().click()
  cy.wait(1000)
  cy.get('.ProfileTypeLabel').first().click()
  cy.get('.BusinessName').type(input_name)
  cy.get('div[class="select2-container form-control team"]').click()
  cy.get('li[class="select2-results-dept-0 select2-result select2-result-selectable"]').first().click()
  cy.get('.btn-submit-and-close').first().should('be.visible').click()
  cy.get('.validation-summary-title').should('be.visible')
  cy.log('Person create with success "create_person_client"')
})

Cypress.Commands.add('validateSearchPerson', (input_name) => {
  cy.wait(2000)
  cy.get('.queryExpression').last().should('be.visible').type(input_name)
  cy.get('button[title="Pesquisar"]').last().should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.log('Person find with success "search_person"')
    } else {
      throw new Error('Person not found "search_person"')
    }
  })
})

Cypress.Commands.add('validateDeletePerson', (input_name) => {
  cy.get('.queryExpression').last().should('be.visible').type(input_name)
  cy.get('button[title="Pesquisar"]').last().should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('input[type="checkbox"]').should('be.visible').last().click()
      cy.get('.icon-mv-options').should('be.visible').last().click()
      cy.get('.btnDeleteSelected').last().should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.log('Person deleted with success "delete_person"')
    } else {
      cy.log('Person not found "delete_person"')
    }
  })
})

//Team

Cypress.Commands.add('validateAccessTeam', () => {
  cy.get('#menu-configurations').click()
  cy.xpath('//*[@id="tab-paneConfiguration"]/section/aside/div/div[2]/div[2]/ul/li[2]/a').should('be.visible').click()
})

Cypress.Commands.add('validateCreateTeam', (input_name) => {
  cy.wait(1000)
  cy.get('button[title="Nova equipe"]').last().click()
  cy.get('input[name="Name"]').should('be.visible').type(input_name)
  cy.wait(2000)
  cy.get('.confirm-message').last().should('be.visible')
})

Cypress.Commands.add('validateDeleteTeam', (input_name) => {
  cy.get('.queryExpression').last().type(input_name)
  cy.get('button[type="submit"]').last().click()
  cy.wait(1000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.wait(1000)
      cy.get('div[title="Marcar/Desmarcar todos"]').last().click()
      cy.get('.ui-widget-content').last().click()
      cy.get('.btn-mv-delete').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.log('Team delete with success "delet_team"')
    } else {
      cy.log('Team not found " delet_Team"')
    }
  })
})


