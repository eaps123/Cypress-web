//CATEGORIES
Cypress.Commands.add('validateCategories', () => {
  cy.get('#menu-configurations').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('a[href="/Category"]').length > 0) {
      cy.get('a[href="/Category"]').should('be.visible').eq(0).click()
      cy.contains('Categorias de tickets').should('be.visible')
      cy.log('Appointments find with success "validate_categories"')
    } else {
      cy.log('Appointments not found "validate_categories"')
    }
  })
})

Cypress.Commands.add('createCategories', (input_name) => {
  cy.get('#menu-configurations').click()
  cy.get('a[href="/Category"]').should('be.visible').eq(0).click()
  cy.wait(2000)
  cy.get('button[data-testid="add-category"]').should('be.visible').last().click()
  cy.get('input[name="name"]').should('be.visible').type(input_name)
  cy.wait(2000)
  cy.contains('Tickets Públicos').click()
  cy.get('button[data-testid="add-category"]').last().click()
})

Cypress.Commands.add('searchCategories', (input_name) => {
  cy.get('input[placeholder="Buscar"]').should('be.visible').type(input_name)
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('button[aria-label="edit category"]').length > 0) {
      cy.log('Appointments find with success "search_categories"')
    } else {
      cy.log('Appointments not found "search_categories"')
    }
  })
})

Cypress.Commands.add('editeCategories', (input_name) => {
  cy.wait(2000)
  cy.get('input[data-testid="header-search"]').should('be.visible').last().type(input_name)
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('button[aria-label="edit category"]').length > 0) {
      cy.get('button[aria-label="edit category"]').first().click()
      cy.wait(1000)
      cy.get('input[type="checkbox"]').first().click()
      cy.contains('Tickets Internos').click()
      cy.get('button[data-testid="button-testid"]').last().click()
      cy.log('Appointments find with success "edit_categories"')
    } else {
      cy.log('Appointments not found "search_categories"')
    }
  })
})

Cypress.Commands.add('deleteCategories', (input_name) => {
  cy.get('input[placeholder="Buscar"]').should('be.visible').type(input_name)
  cy.wait(1000)
  cy.get('body').then($body => {
    if ($body.find('button[aria-label="edit category"]').length > 0) {
      cy.wait(1000)
      cy.get('button[aria-label="delete category"]').should('be.visible').click()
      cy.xpath('/html/body/section/div[3]/section/div/div/div[2]/div[3]/div/div[3]/button[2]/span[1]').should('be.visible').click()
      cy.log('Appointments find with success "edit_categories"')
    } else {
      cy.log('Appointments not found "search_categories"')
    }
  })
})

Cypress.Commands.add('searchDelete', (input_name) => {
  cy.wait(2000)
  cy.get('input[placeholder="Buscar"]').should('be.visible').clear().type(input_name)
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('button[aria-label="edit category"]').length > 0) {
      cy.wait(1000)
      cy.get('button[aria-label="delete category"]').should('be.visible').click()
      cy.xpath('/html/body/section/div[3]/section/div/div/div[2]/div[3]/div/div[3]/button[2]/span[1]').should('be.visible').click()
      cy.log('Appointments find with success "search_delete"')
    } else {
      cy.log('Appointments not found "search_categories"')
    }
  })
})

//JUSTIFICATIONS

Cypress.Commands.add('validateJustifications', () => {
  cy.get('#menu-configurations').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('li[data-name="Justificativas"]').length > 0) {
      cy.log('Appointments find with success "validate_status"')

    }
  })
})

Cypress.Commands.add('createJustifications', (input_name, status) => {
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Justificativas"]').first().click()
  cy.get('button[data-testid="add-justification"]', { timeout: 3000 }).last().click()
  cy.get('input[name="name"]').should('be.visible').type(input_name)
  cy.wait(1000)
  cy.get('body').contains('Tickets Públicos').click()
  cy.get('div[role="combobox"]').click()
  cy.wait(2000)
  cy.get('body').contains(status).click()
  cy.get('button[data-testid="add-justification"]').last().click()
  cy.get('#notistack-snackbar', { timeout: 2000 }).should('be.visible')
})

Cypress.Commands.add('searchJustifications', (input_name) => {
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Justificativas"]').first().click()
  cy.wait(1000)
  cy.get('input[data-testid="header-search"]').last().type(input_name)
  cy.wait(2000)
})

Cypress.Commands.add('deleteJustifications', (input_name) => {
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Justificativas"]').first().click()
  cy.get('input[data-testid="header-search"]').last().type(input_name)
  cy.wait(2000)
  cy.get('button[aria-label="delete justification"]').last().click()
  cy.wait(2000)
  cy.get('button[data-testid="button-modal"]').click()
  cy.get('#notistack-snackbar', { timeout: 2000 }).should('be.visible')
})

//SERVICES

Cypress.Commands.add('validateService', () => {
  cy.get('#menu-configurations').click()
  cy.get('a[href="/Service"]').first().should('be.visible').click()
})

Cypress.Commands.add('createService', (name, description) => {
  cy.get('body').then($body => {
    cy.wait(3000)
    if ($body.find('.ui-widget-content').length < 1) {
      cy.wait(2000)
      cy.get('.btn-insert').last().click()
      cy.get('input[name="Name"]').should('be.visible').type(name)
      cy.get('textarea[name="Description"]').should('be.visible').type(description)
      cy.get('.btn-submit-and-close').should('be.visible').click()
      cy.log('Service create with success "create_sevice')
    } else {
      cy.log('Exist more service "create_sevice"')
    }
  })
})

Cypress.Commands.add('searchService', (name) => {
  cy.wait(2000)
  cy.get('.queryExpression').should('be.visible').type(name)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.contains(name)
      cy.log('Appointments find with success "search_service"')

    } else {
      cy.log('Appointments not found "searchService"')
    }
  })
})

Cypress.Commands.add('deleteService', (input_name) => {
  cy.wait(3000)
  cy.get('.queryExpression').should('be.visible').type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').click()
      cy.get('.icon-mv-options').should('be.visible').click()
      cy.wait(1000)
      cy.get('.btnDeleteSelected').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.get('.queryExpression').should('be.visible').type(input_name)
      cy.get('button[title="Remover filtros de busca"').should('be.visible').click()

      cy.log('Service deleted with success "delete_service"')
    } else {
      cy.log('service not found "delete_service"')
    }
  })
})

//STATUS

Cypress.Commands.add('validateStatus', () => {
  cy.get('#menu-configurations').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('li[data-name="Status"]').length > 0) {
      cy.get('li[data-name="Status"]').first().click()
      cy.log('Appointments find with success "validateStatus"')
    } else {
      cy.log('Appointments not found "validateStatus"')
    }
  })
})

Cypress.Commands.add('createStatusPublic', (name) => {
  cy.wait(2000)
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Status"]').first().click()
  cy.wait(1000)
  cy.get('button[data-testid="add-status"]').last().click()
  cy.get('input[name="name"]').should('be.visible').type(name)
  cy.contains('Tickets abertos, sem atendimento').click()
  cy.get('span[data-testid="type-public"]').last().click()
  cy.get('button[data-testid="add-status"]').should('be.visible').last().click()
  cy.wait(2000)
  cy.contains('Status adicionado com sucesso').should('be.visible')
})

Cypress.Commands.add('createStatusInternal', (name) => {
  cy.wait(2000)
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Status"]').first().click()
  cy.wait(1000)
  cy.get('button[data-testid="add-status"]').last().click()
  cy.get('input[name="name"]').should('be.visible').type(name)
  cy.contains('Tickets abertos, sem atendimento').click()
  cy.get('span[data-testid="type-internal"]').first().click()
  cy.get('button[data-testid="add-status"]').should('be.visible').last().click()
  cy.contains('Status adicionado com sucesso').should('be.visible')
})

Cypress.Commands.add('searchStatus', (name) => {
  cy.wait(1000)
  cy.get('input[data-testid="header-search"]').should('be.visible').last().type(name)
  cy.get('body').then($body => {
    if ($body.find('table[aria-label="list-status-ticket"]').length > 0) {
      cy.log('Status find with success "search_status"')
    } else {
      cy.log('Status not found "search_status"')
    }
  })
})

Cypress.Commands.add('editeStatus', (name, edit_name) => {
  cy.get('input[data-testid="header-search"]').should('be.visible').last().type(name)
  cy.wait(1000)
  cy.get('button[aria-label="edit status"]').should('be.visible').last().click()
  cy.wait(2000)
  cy.get('input[name="name"]').should('be.visible').clear()
  cy.wait(2000)
  cy.get('input[name="name"]').should('be.visible').type(edit_name)
  cy.get('button[data-testid="button-testid"]').should('be.visible').last().click()
  cy.get('#notistack-snackbar').should('be.visible')
  cy.get('button[data-testid="header-search.clear-button"]').last().click()
  cy.wait(2000)
  cy.contains('CT038', { timeout: 1000 })
})

Cypress.Commands.add('deleteSearchStatus', (name) => {
  cy.wait(2000)
  cy.get('input[data-testid="header-search"]').should('be.visible').last().type(name)
  cy.wait(1000)
  cy.get('body').then($body => {
    if ($body.find('button[title="Excluir"]').length == 0) {
      cy.log('Status find with success "search_status"')
      cy.get('input[data-testid="header-search"]').should('be.visible').clear()
    } else {
      cy.wait(2000)
      cy.get('button[title="Excluir"]').should('be.visible').click()
      cy.xpath('/html/body/section[1]/div[3]/section/div/div/div[2]/div[3]/div/div[2]/div').should('be.visible').click()
      cy.get('button[data-testid="button-testid"]').should('be.visible').eq(1).click()
      cy.get('input[data-testid="header-search"]').should('be.visible').clear()
      cy.log('Status not found "search_status"')
    }
  })
})

// Tags

Cypress.Commands.add('validateMenuTags', () => {
  cy.get('#menu-configurations').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('li[data-name="Tags"]').length > 0) {
      cy.get('li[data-name="Tags"]').first().should('be.visible').click()
      cy.get('.counter').should('be.visible').click()
      cy.log('Appointments find with success " validate_tags"')
    } else {
      cy.log('Appointments not found "tag"')
    }
  })
})

Cypress.Commands.add('validateCreateTags', (name) => {
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Tags"]').first().should('be.visible').click()
  cy.wait(2000)
  cy.get('button[title="Nova TAG"]').should('be.visible').last().click()
  cy.get('.lbl-input-text').should('be.visible').type(name)
  cy.get('.btn-submit-and-close').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.validation-summary-title').length > 0) {
      cy.log('Tag created with success "create_tags"')
    } else {
      cy.log('Tag not create "validateCreateTags"')
    }
  })

})

Cypress.Commands.add('validateDeleteTags', (name) => {
  cy.get('input[type="search"]').should('be.visible').type(name)
  cy.wait(2000)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('.ui-widget-content').click()
      cy.get('.btn-mv-delete').click()
      cy.get('button[data-value="yes"]').click()
      cy.get('.validation-summary-title').should('be.visible')
      cy.log('Tag find with success "delete_tags"')
    } else {
      cy.log('Tag not found "delete_tags"')
    }
  })
})

Cypress.Commands.add('validateDeleteAllTags', () => {
  cy.wait(2000)
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="Tags"]').first().should('be.visible').click()
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').last().click()
      cy.get('.icon-mv-options').last().click()
      cy.get('.btnDeleteSelected').last().should('be.visible').click()
      cy.get('button[data-value="yes"]').last().should('be.visible').click()
      cy.log('Tag excluded with success "validateDeleteAllTags"')
    } else {
      cy.log('Tag not found "delete_tags"')
    }
  })
})

Cypress.Commands.add('validateDeleteTag', (name) => {

  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').last().click()
      cy.get('.icon-mv-options').last().click()
      cy.get('.btnDeleteSelected').last().should('be.visible').click()
      cy.get('button[data-value="yes"]').last().should('be.visible').click()
      cy.log('Tag excluded with success "validateDeleteAllTags"')
    } else {
      cy.log('Tag not found "delete_tags"')
    }
  })
})

Cypress.Commands.add('validateEditTags', (name, edit) => {
  cy.get('body').then($body => {
    if ($body.find('.validation-summary-title').length > 0) {
      cy.get('.queryExpression').should('be.visible').last().type(name)
      cy.get('button[title="Pesquisar"]').should('be.visible').last().click()
      cy.wait(2000)
      cy.get('.ui-widget-content').click()
      cy.get('input[autofocus="autofocus"]').last().should('be.visible').clear()
      cy.get('input[autofocus="autofocus"]').last().should('be.visible').type(edit)
      cy.get('.btn-submit-and-close').should('be.visible').click()
      cy.get('.confirm-message').should('be.visible')
      cy.contains(Cypress.env('classification').tags.edit_tags).should('be.visible')
    } else {
      cy.log('Tag not found "edit_tags"')
    }
  })
})

Cypress.Commands.add('validateSearchTags', (name) => {
  cy.wait(1000)
  cy.get('input[type="search"]').should('be.visible').last().type(name)
  cy.get('button[title="Pesquisar"]').should('be.visible').last().click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.log('Tag find with success "search_tags"')
    } else {
      cy.log('Appointments not found "search_tags"')
    }
  })
})

//Urgency

Cypress.Commands.add('validateUrgency', () => {
  cy.get('#menu-configurations').click()
  cy.get('a[href="/Urgency"]').eq(0).should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('a[href="/Urgency"]').length > 0) {
      cy.log('Urgency find with success "validateUrgency"')
    } else {
      cy.log('Urgency not found "validateUrgency"')
    }
  })
})

Cypress.Commands.add('createUrgency', (urgency, color) => {
  cy.get('#menu-configurations').click()
  cy.get('a[href="/Urgency"]').eq(0).should('be.visible').click()
  cy.get('button[data-testid="add-urgency"]').should('be.visible').eq(1).click()
  cy.xpath('/html/body/section[1]/div[4]/section/div/div/form/div[1]/div/div[2]/div/div/input').should('be.visible').type(urgency)
  cy.get('#mui-component-select-backgroundColor').should('be.visible').type(color)
  cy.get('body').click()
  cy.get('button[data-testid="add-urgency"]').should('be.visible').eq(1).click()
})

Cypress.Commands.add('searchUrgency', (name) => {
  cy.wait(1000)
  cy.get('input[data-testid="header-search"]').should('be.visible').last().type(name)
  cy.get('body').then($body => {
    if ($body.find('tr').length > 0) {
      cy.log('Urgency find with success "Urgency"')
    } else {
      cy.log('Urgency not found "searchUrgency"')
    }
  })
})

Cypress.Commands.add('editUrgency', (input_urgency) => {
  cy.get('body').then($body => {
    if ($body.find('div[class="sc-bqyKOL fgMerd"]').length > 0) {
      cy.get('button[aria-label="edit urgency"]').should('be.visible').last().click()
      cy.xpath('/html/body/section[1]/div[4]/section/div/div/form/div[1]/div/div[2]/div/div/input').should('be.visible').clear()
      cy.xpath('/html/body/section[1]/div[4]/section/div/div/form/div[1]/div/div[2]/div/div/input').should('be.visible').type(input_urgency)
      cy.get('button[data-testid="button-testid"]').last().should('be.visible').click()
      cy.elementExists('#notistack-snackbar')
    } else {
      cy.log('Urgency not found "editUrgency"')
    }
  })
})

Cypress.Commands.add('deleteUrgency', (search_urgency) => {
  cy.get('input[data-testid="header-search"]').clear()
  cy.wait(2000)
  cy.xpath('/html/body/section/div[3]/section/div/div/div[2]/div[1]/div[2]/div/div/div/input').should('be.visible').type(search_urgency)
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('div[class="sc-bqyKOL fgMerd"]').length > 0) {
      cy.get('button[aria-label="delete urgency"]').should('be.visible').click()
      cy.wait(1000)
      cy.xpath('/html/body/section/div[3]/section/div/div/div[2]/div[3]/div/div[3]/button[2]/span[1]').should('be.visible').click()
      cy.log('Urgency find with success "deleteUrgency"')
    } else {
      cy.log('Urgency not found "deleteUrgency"')
    }
  })
})