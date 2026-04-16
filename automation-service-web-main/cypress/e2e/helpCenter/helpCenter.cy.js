describe('helpCenter', { tags: ['@help_center', '@all_tests'] }, () => {

    before(() => {
        cy.accessHelpCentre()
    }),

        it('[WEB][AUTOMATION][KB][CT000] Validate help centre page', {
            tags: ['@Validate_help_centre', '@positive', '@ester_silva']
        }, () => {
            cy.knowledgeBaseKb()
            cy.searchArticle(`${Cypress.env('helpcentre').search_article}`)
        })

})