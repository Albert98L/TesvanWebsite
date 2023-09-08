const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
    chromeWebSecurity: false,
    e2e: {
        setTimeout:16000,

        viewportWidth: 1920,
        viewportHeight: 1080,

        setupNodeEvents: async function (on, config) {
            allureWriter(on, config);
            return config;
        }
    }
});
