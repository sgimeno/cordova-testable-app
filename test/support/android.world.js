require('path');
var app_path = __dirname + '../../../platforms/android/ant-build/TestableCordova-debug.apk';

var env = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4723/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'Chrome',
    automationName: 'Selendroid',
    platformName: 'Android',
    platformVersion: '4.4',
    deviceName: '05916461f0c9fa96',
    app: app_path
  }

};

// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'cucumber',

  // Spec patterns are relative to this directory.
  specs: [
    './../**/*.feature'
  ],

  capabilities: env.capabilities,

  
  baseUrl: 'file:///android_asset/www/index.html#',

  cucumberOpts: {
    require: ['./../step_definitions/android.js', './../step_definitions/common.js'],
    //tags: '@dev',
    format: 'summary'
  }
};