//Time Contracts
Cypress.Commands.add('accessTimeContract', () => {
  cy.get('#menu-configurations').click()
  cy.get('a[href="/WorkingTimeAgreement"]').first().click()
  cy.wait(2000)
})

Cypress.Commands.add('deleteTimeContractsSelect', (input_name) => {
  cy.get('.queryExpression').should('be.visible').last().type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').last().click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.wait(2000)
      cy.get('div[title="Marcar/Desmarcar todos"]').last().click()
      cy.get('.btn-options-toolbox').last().click()
      cy.get('.btnDeleteSelected').last().click()
      cy.get('button[data-value="yes"]').click()
    } else {
      cy.log('Contract not existing "deleteTimeContractsSelect"')
    }
  })
})

// SLA
Cypress.Commands.add('slaAccess', () => {
  cy.get('#menu-configurations').click()
  cy.get('li[data-name="SLA"]').first().click()
})

Cypress.Commands.add('slaCreateContractSimple', (input_name, input_description) => {
  cy.get('button[title="Novo contrato"]').should('be.visible').click()
  cy.get('input[name="Name"]').should('be.visible').type(input_name)
  cy.get('textarea[name="Description"]').should('be.visible').type(input_description)
  cy.get('.btn-submit-and-close').should('be.visible').click()
  cy.get('.validation-summary-title').should('be.visible')
})

Cypress.Commands.add('slaCreateContractStandart', (input_name, input_description) => {
  cy.wait(2000)
  cy.get('.queryExpression').should('be.visible').last().type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').last().click()
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length < 1) {
      cy.get('button[title="Novo contrato', {timeout: 5000}).should('be.visible').click()
      cy.get('input[name="Name"]').should('be.visible').type(input_name)
      cy.get('textarea[name="Description"]').should('be.visible').type(input_description)
      cy.get('span[class="check-checkmark-box"]', {timeout: 1000}).should('be.visible').click()
      cy.get('.btn-submit-and-close').should('be.visible').click()
      cy.log('Contract create with success "create_contract_sla_standard"')
    } else {
      cy.log('Contract already existing at base "create_contract_sla_standard"')
    }
  })
})

Cypress.Commands.add('slaDeleteContract', (input_name) => {
  cy.wait(2000)
  cy.get('.queryExpression').should('be.visible').last().type(input_name)
  cy.get('button[title="Pesquisar"]').should('be.visible').last().click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.wait(3000)
      cy.get('div[title="Marcar/Desmarcar todos"]').last().click()
      cy.wait(3000)
      cy.get('.icon-mv-options').should('be.visible').last().click()
      cy.wait(2000)
      cy.get('.btnDeleteSelected').should('be.visible').last().click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.get('span[class="icon-mv-erase"]').should('be.visible').last().click()
      cy.log('Contract excluded with success "delete_sla_contracts"')
    } else {
      cy.log('Contract not existing "delete_sla_contracts"')
    }
  })
})

Cypress.Commands.add('slaFindContract', (input_name) => {
  cy.get('#menu-configurations').click()
  cy.contains('SLA').should('be.visible').click()
  cy.wait(1000)
  cy.get('.queryExpression', {timeout: 5000}).type(input_name)
  cy.get('button[title="Pesquisar"]').click()
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content', {timeout: 5000}).length > 0) {
      cy.log('Contract find with success "find_sla_contracts')
    } else {
      cy.log('Contract not found "find_sla_contracts"')
    }
  })
})

Cypress.Commands.add('slaCreateRule', (input_name, input_time_start, input_time_end) => {
  cy.wait(2000)
  cy.get('.ui-widget-content').click()
  cy.get('button[title="Nova regra"]').should('be.visible').click()
  cy.get('.name').should('be.visible').type(input_name)
  cy.contains('Dom').scrollIntoView().should('be.visible')
  cy.get('input[tabindex="1"]', {timeout: 5000}).type(input_time_start)
  cy.get('input[tabindex="2"]').should('be.visible').type(input_time_end)
  cy.get('.btn-submit-and-close').should('be.visible').last().click({force: true})
  cy.get('.btn-submit-and-close').should('be.visible').first().click({force: true})
  cy.wait(2000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[class="slick-cell l2 r2"]').contains('1')
      cy.log('Rule create with success "create_sla_rules"')
    } else {
      throw new Error('Error when creating a rule "create_sla_rules"')
    }
  })
})

Cypress.Commands.add('slaEnableRule', () => {
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('.ui-widget-content').first().click()
      cy.contains('SLA de Resposta').scrollIntoView()
      cy.wait(2000)
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').eq(1).click()
      cy.get('.icon-mv-options').should('be.visible').eq(1).click()
      cy.get('.rule-enable').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.log('Rule enabling with success "disable_sla_rule"')
    } else {
      throw new Error(cy.log('Error when enabling a rule "disable_sla_rule"'))
    }
  })
})

Cypress.Commands.add('slaDisableRule', () => {
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('.ui-widget-content').first().click()
      cy.contains('SLA de Resposta').scrollIntoView()
      cy.wait(2000)
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').eq(1).click()
      cy.get('.icon-mv-options').should('be.visible').eq(1).click()
      cy.get('.rule-disable').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.log('Rule disabling with success "disable_sla_rule"')
    } else {
      throw new Error('Error when disabling a rule "disable_sla_rule"')
    }
  })
})

Cypress.Commands.add('slaExcludeRule', () => {
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.wait(5000)
      cy.get('.ui-widget-content').first().click()
      cy.contains('SLA de Resposta').scrollIntoView()
      cy.wait(3000)
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').eq(1).click()
      cy.get('.icon-mv-options').should('be.visible').eq(1).click()
      cy.get('.rule-delete').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.contains('0', {timeout: 5000})
      cy.log('Rule exclude with success "exclude_sla_rules"')
    } else {
      throw new Error('Error when exclude a rule "exclude_sla_rules"')
    }
  })
})

Cypress.Commands.add('slaCloneRule', () => {
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('.ui-widget-content').first().click()
      cy.contains('SLA de Resposta').scrollIntoView()
      cy.wait(3000)
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').eq(1).click()
      cy.get('.icon-mv-options').should('be.visible').eq(1).click()
      cy.wait(1000)
      cy.get('.rule-clone').should('be.visible').click()
      cy.get('button[data-value="yes"]').should('be.visible').click()
      cy.contains('Cópia de CHCPPR HPST HNMAAT', {timeout: 5000})
    } else {
      throw new Error('Error when cloned a rule "clone_sla_rules"')
    }
  })
})

Cypress.Commands.add('slaExportExcelRule', () => {
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('.ui-widget-content').first().click()
      cy.contains('SLA de Resposta').scrollIntoView()
      cy.wait(1000)
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').eq(1).click()
      cy.get('.icon-mv-options').should('be.visible').eq(1).click()
      cy.ValidateDonwload('.rule-export', 'file.xlsx')
      cy.log('Export rule with success "export_sla_rule_excel"')
    } else {
      throw new Error('Error when exported a rule "export_sla_rule_excel"')
    }
  })
})

