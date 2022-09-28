const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hh63nf',
  e2e: {
    setupNodeEvents(on, config) {
            
    },

    baseUrl: "http://lojaebac.ebaconline.art.br/"

  },
});
