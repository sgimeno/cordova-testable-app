var env = require('./environment.js');

// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'cucumber',

  // Spec patterns are relative to this directory.
  specs: [
    './../**/*.feature'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  cucumberOpts: {
    require: ['./../step_definitions/browser.js', './../step_definitions/common.js'],
    //tags: '@dev',
    format: 'summary'
  }
};