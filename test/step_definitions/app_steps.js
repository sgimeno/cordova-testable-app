var appSteps = function () {
  this.World = require("../support/world.js").World;

  this.Given(/^I load the app$/, function(callback) {
    
        callback();
    
  });

  this.Then(/^I should see "([^"]*)"$/, function(text, callback) {
    this.driver.getPageSource().then(function(source) {
      if (source.match(new RegExp(text))) {
        callback();
      }
      else {
        callback.fail("Expected to see view with text: " + text + 'but text was ' + source);
      }
    });
  });
};

module.exports = appSteps;