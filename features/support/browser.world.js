// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'cucumber',

  // Spec patterns are relative to this directory.
  specs: [
    './../**/*.feature'
  ],

  capabilities: {
    browserName: 'chrome',
    version: 'ANY'
  },

  baseUrl: 'http://localhost:8000',

  cucumberOpts: {
    require: ['./../step_definitions/browser.js', './../step_definitions/common.js'],
    //tags: '@dev',
    format: 'summary'
  }
};