
Cypress.Commands.add('AccessSettingsCustomField', () => {
	cy.get('.icon > .icon-mv-settings').click()
	cy.get('[data-name="Campos adicionais"] > ul > [data-name="Campos"] > .open-in-tab').click()
})

Cypress.Commands.add('validateAddCustomField', (name, option_fields) => {
	cy.wait(2000)
	cy.contains(name).click()
	cy.get(' div[class="title title-bolded"]').scrollIntoView().should('be.visible')
	cy.wait(2000)
	cy.get('.md-link > .icon-mv-add').last().should('be.visible').click()
	cy.wait(2000)
	cy.get('input[name="Items[1].Name"]').type(option_fields)
	cy.get('.btn-submit-and-close').click()
	cy.get('.validation-summary-title').should('be.visible')
})

Cypress.Commands.add('validateEditCustomField', (name, option_fields_edit) => {
	cy.contains(name).click()
	cy.wait(1000)
	cy.get('input[name="Items[1].Name"]').clear().type(option_fields_edit)
	cy.wait(1000)
	cy.get('.btn-submit-and-close').click()
	cy.get('.validation-summary-title').should('be.visible')
	cy.wait(2000)
})

Cypress.Commands.add('validateDeleteCustomField', (name_1) => {
	cy.get('input[type="search"]').should('be.visible').last().type(name_1)
	cy.wait(2000)
	cy.get('button[title="Pesquisar"]').should('be.visible').last().click()
	cy.wait(2000)
	cy.get('body').then($body => {
	  if ($body.find('.ui-widget-content').length > 0) {
		cy.contains(name_1).click()
		cy.wait(1000)
		cy.get(' div[class="title title-bolded"]').scrollIntoView().should('be.visible')
		cy.get('a[class="md-link delete hide-if-read-only"]').last().click()
		cy.wait(1000)
		cy.get('.btn-submit-and-close').click()
		cy.get('.validation-summary-title').should('be.visible')
		cy.wait(2000)
	  } else {
		cy.log('Custom Fields not found "delete_tags"')
	  }
	})
})
