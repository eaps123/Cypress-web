// Menu
Cypress.Commands.add('validadteAccessMenu', () => {
  cy.get('#menu-configurations').click()
  cy.get('#kb-menu-config-link').first().should('be.visible').click()
})

Cypress.Commands.add('validateCreateMenu', (input_name) => {
  cy.get('button[title="Novo menu"]', { timeout: 5000 }).last().should('be.visible').click()
  cy.get('.field-name-multilingue').should('be.visible').type(input_name)
  cy.get('.select2-choice').should('be.visible').click()
  cy.get('#select2-result-label-4', { timeout: 5000 }).should('be.visible').click()
  cy.get('#select2-chosen-10', { timeout: 5000 }).click()
  cy.get('#select2-result-label-12 > :nth-child(1)', { timeou: 5000 }).click()
  cy.wait(2000)
  cy.get('.btn-submit-and-close').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.log(`${Cypress.env('knowledge_base').message_menu_create_success} "create_menu"`)
    } else {
      throw new Error(`${Cypress.env('knowledge_base').message_menu_create_erro} "create_menu"`)
    }
  })
})

Cypress.Commands.add('validateDeleteMenu', (input_name) => {
  cy.wait(2000)
  cy.get('.queryExpression').should('be.visible').type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').click()
      cy.get('.icon-mv-options').should('be.visible').click()
      cy.get('.btnDeleteSelected').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.log(`${Cypress.env('knowledge_base').message_menu_delete_success} "delete_menus"`)
    } else {
      cy.log(`${Cypress.env('knowledge_base').message_menu_not_find_success} "delete_menus"`)
    }
  })
})

Cypress.Commands.add('validateSearchMenu', (input_menu) => {
  cy.get('#menu-configurations').click()
  cy.get('#kb-menu-config-link').should('be.visible').click()
  cy.get('.queryExpression').should('be.visible').type(input_menu)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.log('Menu find with success " menu_search"')
    } else {
      cy.log(`${Cypress.env('knowledge_base').message_proccess_error_menu}`)
    }
  })
})

Cypress.Commands.add('validateEnableSelectMenu', () => {
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.wait(2000)
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').click()
      cy.get('.icon-mv-options').should('be.visible').click()
      cy.get('.btnEnableSelected').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.get('span[class="icon-mv-erase"]').should('be.visible').click()
      cy.get('.icon-mv-check').should('be.visible')
      cy.log(`${Cypress.env('knowledge_base').message_menu_enabled_success} "enable_selected_menu"`)
    } else {
      throw new Error(`${Cypress.env('knowledge_base').message_proccess_error_menu} "enable_selected_menu"`)
    }
  })
})

Cypress.Commands.add('validateDesableSelectMenu', () => {
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.wait(2000)
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').click()
      cy.get('.icon-mv-options').should('be.visible').click()
      cy.get('.btnDisableSelected').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.get('span[class="icon-mv-erase"]').should('be.visible').click()
      cy.get('.icon-mv-close').should('be.visible')
      cy.log(`${Cypress.env('knowledge_base').message_menu_disabled_success} "disable_selectd_menu"`)
    } else {
      throw new Error(`${Cypress.env('knowledge_base').message_proccess_error_menu} "disable_selectd_menu"`)
    }
  })
})

// Article
Cypress.Commands.add('validadteAccessArticle', () => {
  cy.get('#menu-configurations').click()
  cy.get('#kb-articles-config-link').first().should('be.visible').click()
  cy.wait(2000)
})

Cypress.Commands.add('validateCreateArticle', (input_nome, input_nome2) => {
  cy.wait(2000)
  cy.get('.icon-mv-add').last().should('be.visible').dblclick()
  cy.get('.field-title').first().should('be.visible').type(input_nome)
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('#mceu_28-open').length > 0) {
      cy.get('#mceu_28-open').should('be.visible').click()
      cy.contains('Código fonte').should('be.visible').click()
      cy.get('.mce-textbox').should('be.visible').click().type(input_nome2)
      cy.contains('Ok').should('be.visible').click()
      cy.get('.btn-publish').should('be.visible').click()
      cy.get('span[class="label label-alert"]').contains('Publicado. A versão mais recente do seu artigo está publicada.')
      cy.get(':nth-child(9) > .btn-goback').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.wait(2000)
    } else {
      cy.get('#pt > div.form-container > div > div > section > div > div.form-group.content-container > div > div.fr-wrapper.show-placeholder').first().should('be.visible').type(input_nome2)
      cy.get('.btn-publish').should('be.visible').click()
      cy.get('span[class="label label-alert"]').contains('Publicado. A versão mais recente do seu artigo está publicada.')
      cy.get(':nth-child(9) > .btn-goback').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
    }
  })
})

Cypress.Commands.add('validateDeletArticle', (input_nome) => {
  cy.get('input[type="search"]').should('be.visible').type(input_nome)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('div[class="slick-cell l1 r1"]').length > 0) {
      cy.contains('Create article with success').should('be.visible').click()
      cy.get('.btn-mv-delete').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.get('.validation-summary-title').should('be.visible')
      cy.get('button[title="Remover filtros de busca"]').should('be.visible').click()
      cy.log(`${Cypress.env('knowledge_base').article.message_article_delete_success} "delete_article"`)
    } else {
      cy.get('button[title="Remover filtros de busca"]').should('be.visible').click()
      cy.log(`${Cypress.env('knowledge_base').article.mmessage_article_not_find_success} "delete_article"`)
    }
  })
})

//Forms
Cypress.Commands.add('validadteAccessForms', () => {
  cy.get('#menu-configurations').click()
  cy.get('#kb-form-config-link').first().should('be.visible').click()
})

Cypress.Commands.add('createForms', (input_nameForm) => {
  cy.wait(2000)
  cy.get('button[title="Novo formulário"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('.field-name').should('be.visible').type(input_nameForm)
  cy.get('.btn-success').should('be.visible').click()
  cy.get('.validation-summary-title').should('be.visible')
})

Cypress.Commands.add('validateForms', (input_nameForm) => {
  cy.wait(2000)
  cy.get('.queryExpression').should('be.visible').type(input_nameForm)
  cy.get('button[title="Pesquisar"]').should('be.visible').click()
  cy.wait(2000)
  cy.get('.ui-widget-content').should('be.visible')
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div.slick-cell.l1.r1').first().click();
      cy.log('Forms sucess')
    } else {
      cy.log('Forms not found')
    }
  })
})

Cypress.Commands.add('fillForms', (input_descriptForm) => {
  cy.wait(2000)
  cy.get('.link-preview').should('be.visible').then(($el) => {
    const link = $el.attr('href')
    cy.visit(link)
    cy.wait(2000)
    cy.get('#Name').should('be.visible').type('QA Name person')
    cy.get('.input-mv-new').last().should('be.visible').type('e-mail.form@teste.com')
    cy.get('body').then($body => {
      if ($body.find('div.fr-element.fr-view > p').length > 0) {
        cy.iframeFroala('div.fr-element.fr-view > p', '/html/body/div[1]/div/div/form/div[3]/div/div/div/div[3]/div/p', input_descriptForm)
      } else {
        cy.iframeTinymce('#Description_ifr', '/html/body/p', input_descriptForm)
      }
    })
    cy.wait(1000)
    cy.get('#btn-submit').click()
    cy.wait(2000)
    cy.elementExists('#contact-success').should('be.visible')
  })
  cy.log('Formulário preenchido com sucesso')
  cy.visit(Cypress.env('urls').baseUrl)
})

Cypress.Commands.add('deleteForms', () => {
  cy.wait(2000)
  cy.get('.btn-mv-delete').should('be.visible').click()
  cy.wait(2000)
  cy.get('.md-confirm-action').last().should('be.visible').click()
  cy.log('Foms deleted with success "delete"')
})