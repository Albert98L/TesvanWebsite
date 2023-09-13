const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
    chromeWebSecurity: false,
    e2e: {
        setTimeout:16000,
        defaultCommandTimeout:16000,

        env: {
            "TesvanHomePage": "https://www.tesvan.com/en",
            "Customertimes":"https://www.tesvan.com/en/cases/customertimes",
            "Rocky-mountains":"https://www.tesvan.com/en/cases/rocky_mountains",
            "Summerize":"https://www.tesvan.com/en/cases/summerize",


        },

        viewportWidth: 1920,
        viewportHeight: 1080,

        setupNodeEvents: async function (on, config) {
            allureWriter(on, config);
            return config;
        }
    }
});
