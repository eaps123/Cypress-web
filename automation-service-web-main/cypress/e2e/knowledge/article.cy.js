import { faker } from '@faker-js/faker'
describe('Article', { tags: ['@article', '@all_tests'] }, () => {

    before(() => {
        cy.validLoginType(Cypress.env('login').login_article.user, Cypress.env('login').login_knowledgeBase.password)
        cy.validadteAccessArticle()
        cy.validateDeletArticle(`${Cypress.env('knowledge_base').article.title}`)
    }),

        after(() => {
            cy.logoutService()
        })

    it('[WEB][AUTOMATION][KNOWLEDGE-BASE][GST-5938][CT001] Validate Functionality Knowledge Base -> articles-> Add-> article', {
        tags: ['@add_article', '@positive', '@ester_silva']
    }, () => {
        cy.validateCreateArticle(`${Cypress.env('knowledge_base').article.title}`, `${faker.lorem.words(50)}`)
        cy.validateDeletArticle(`${Cypress.env('knowledge_base').article.title}`)
    })
})