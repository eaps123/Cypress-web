import './commands/commands'
import 'cypress-real-events/support'
import './commands/loginCommands'
import './commands/appointmentsCommands'
import './commands/agreementsCommands'
import './commands/classificationCommands'
import './commands/personCommands'
import './commands/customFieldCommands'
import './commands/knowledgeCommands'
import './commands/ticketCommands'
import './commands/helpCenter'

const registerCypressGrep = require('@cypress/grep')
const xpath = require('@cypress/xpath')
registerCypressGrep()
require('cy-verify-downloads').addCustomCommand()


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})