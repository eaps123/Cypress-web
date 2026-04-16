
Cypress.Commands.add('accessHelpCentre', () => {
    cy.visit(Cypress.env('urls').kbUrl)
    cy.get('#kb-search-input').should('be.visible')
    cy.log(`${Cypress.env('helpcentre').message_success} "AccessHelpCentre"`)
})

Cypress.Commands.add('knowledgeBaseKb', () => {
    cy.get('.icon-mv-notebook').should('be.visible').click()
    cy.get('.fa-plus-square-o').should('be.visible').click()
    cy.wait(2000)
    cy.get('div > ol > li:nth-child(1)').should('be.visible').click()
    cy.log(`${Cypress.env('helpcentre').message_knowledgeBase_success} "knowledgeBaseKb"`)
})

Cypress.Commands.add('searchArticle', (input_article) => {
    cy.wait(2000)
    cy.get('#kb-search-input').should('be.visible').type(input_article)
    cy.get('.icon-mv-search').should('be.visible').click()
    cy.get(' div:nth-child(1) > a > h4').should('be.visible')
    cy.log(`${Cypress.env('helpcentre').message_knowledgeBase_success} "searchArticle"`)

})