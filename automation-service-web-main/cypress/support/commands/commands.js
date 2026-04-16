/// <reference types="Cypress" />


Cypress.Commands.add('getById', (input) => {
  cy.get(`[data-test-id=${input}]`)
  //example: cy.getById('indigo')
})

Cypress.Commands.add('messageHaveText', (locator, message) => {
  cy.get(locator).should('have.text', message)
})

Cypress.Commands.add('messageContainsText', (locator, message) => {
  cy.contains(locator).should('have.text', message)
})

Cypress.Commands.add('iframeMessageHaveText', (locatorIframe, locator, message) => {
  cy.getIframeBody(locatorIframe)
    .find(locator)
    .contains(message)
})

Cypress.Commands.add('waitForMessageError', (locator, message) => {
  cy.get(locator)
    .should('be.visible')
    .should('to.be.have.text', message)
})

Cypress.Commands.add('waitForMessageReference', (locator, message) => {
  cy.get(locator)
    .should('be.visible')
    .should('to.be.have.text', message)
})

Cypress.Commands.add('captureText', (locator) => {
  cy.get(locator)
    .invoke('text')
    .as('capturedText')
})

// Cypress.Commands.add('closeAllPopup', () => {
//   function closeAllWindows() {
//     for (var i = 0; i < document.MyActiveWindows.length; i++)
//       document.MyActiveWindows[i].close()
//   }
// })

Cypress.Commands.add('waitForTextTwoIframe', (locatorFrameOne, locatorFrameTwo, locatorText, text) => {
  cy.frameLoaded(locatorFrameOne)
  cy.iframe(locatorFrameOne)
    .within(() => {

      cy.iframe(locatorFrameTwo)
        .find(locatorText)
        .should('to.be.visible')
        .contains(text)
    })
})

Cypress.Commands.add('accessTwoIframeClick', (locatorFrameOne, locatorFrameTwo) => {
  cy.frameLoaded(locatorFrameOne)
  cy.iframe(locatorFrameOne)
    .within(() => {

      cy.iframe(locatorFrameTwo)
        .find('.fa-pencil-square-o')
        .should('to.be.visible')
        .click()
    })
})

Cypress.Commands.add('getIframeBody', (locator) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get(locator)
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
})

Cypress.Commands.add('getIframeBody2', (a, b) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get(a)
    .its(b).should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
})

Cypress.Commands.add('elementExists', (selector) => {
  cy.get('body').then(($body) => {
    if ($body.find(selector).length > 0) {
      return cy.get(selector)
    } else {
      // Throws no error when element not found
      assert.isOk('OK', 'Element does not exist.')
    }
  })
})

Cypress.Commands.add('addTextElmentoIntoIframe', (locatorFrame, locatorElement) => {
  cy.iframe(locatorFrame)
    .within(() => {
      cy.get(locatorElement)
    })
})

Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
  return new Cypress.Promise(resolve => {
    $iframe.on('load', () => {
      resolve($iframe.contents().find('body'))
    })
  })
})

Cypress.Commands.add('getIframeElement', (iframeLocator, elementLocator) => {
  cy.get(iframeLocator).then($element => {
    const $body = $element.contents().find('body')
    let stripe = cy.wrap($body)
    stripe.find(elementLocator).eq(0)
  })
})
Cypress.Commands.add('messageContains', (messenger, locator) => {
  cy.get(locator).contains(messenger)
})

Cypress.Commands.add('textInvokeContain', (locator, text) => {
  cy.get(locator).invoke('text').should('contain', text)
})

Cypress.Commands.add('login_session', (
  username = Cypress.env('login').valid_user.user,
  password = Cypress.env('login').valid_user.password,

  { cacheSession = true } = {}
) => {
  const login = () => {
    cy.visit(Cypress.env('urls').baseUrl)
    cy.get('input[name="UserName"]').type(username, { log: false })
    cy.get('input[data-val-required="O campo senha deve ser informado."]').type(password, { log: false })
    cy.get('#btnSubmit').click()
    cy.url().should('be.equal', Cypress.env('urls').baseUrl)
  }
  if (cacheSession) {
    cy.session([username, password], login)
  } else {
    login()
  }
})

Cypress.Commands.add('FindVisibleElement', (locator) => {
  cy.get(locator).should('be.visible')
})

Cypress.Commands.add('ValidateDonwload', (locator, file) => {
  cy.get(locator)
    .then((el) => {
      el.attr('download', '')
    })
    .click()
  cy.verifyDownload(file, { contains: true })
})

Cypress.Commands.add('deleteAllTicket', () => {
  cy.get('#menu-ticket').should('be.visible').click()
  cy.wait(5000)
  cy.get('body').then($body => {
    if ($body.find('.ui-widget-content').length > 0) {
      cy.get('div[title="Marcar/Desmarcar todos"]').should('be.visible').last().click()
      cy.get('.icon-mv-options').last().click()
      cy.get('a[class="deleteSelected"]').last().should('be.visible').click()
      cy.get('.btn-mv-confirm').last().should('be.visible').last().click()
      cy.log('Ticket deleted with success "delete_ticket"')
    } else {
      cy.log('Ticket not found "delete_ticket"')
    }
  })
})

Cypress.Commands.add('iframeFroala', (locatorFrame, locatorXpath, input_descript_iFrame) => {
  cy.get(locatorFrame).should('be.visible').click()
    .within(() => {
      cy.xpath(locatorXpath).then($p => { $p.text(input_descript_iFrame) })
    })
})

Cypress.Commands.add('iframeTinymce', (locatorFrame, locatorXpath, input_descript_iFrame) => {
  cy.iframe(locatorFrame).should('be.visible').click()
    .within(() => {
      cy.xpath(locatorXpath).then($p => { $p.text(input_descript_iFrame) })
    })
})
