const { defineConfig } = require('cypress');


module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920, // Default viewport width
    viewportHeight: 1080, // Default viewport height
    // Other configuration options can go here

    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },

})
