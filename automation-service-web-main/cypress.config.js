const { defineConfig } = require('cypress')
const { verifyDownloadTasks } = require('cy-verify-downloads');

/**
 * @type {Cypress.PluginConfig}
 */
 const fs = require('fs-extra')
 const path = require('path')
 
function getConfigurationByFile(file) {
   const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`)
 
   return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  
  e2e: { 
    testIsolation: false,
    setupNodeEvents(on, config) {
        const file = config.env.configFile || 'canary'

        on('task', verifyDownloadTasks);
        return config, getConfigurationByFile(file)
    },
    retries: { "runMode": 2, "openMode": 0 },
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,
  },
})