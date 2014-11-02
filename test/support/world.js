require('path')
var appPath = __dirname + '/../../platforms/android/ant-build/TestableCordova-debug.apk';
var webdriver = require("selenium-webdriver");



var driver = new webdriver.Builder().
  
  withCapabilities({
    browserName: 'Android',
    platformName: 'Android',
    platformVersion: '4.4',
    deviceName: '05916461f0c9fa96',
    automationName: 'Selendroid',
    app: appPath
  }).
  usingServer('http://localhost:4723/wd/hub').
  build();


var World = function World(callback) {
    this.driver = driver;

    driver.getAllWindowHandles().then(function(handles) {
      driver.switchTo().window(handles[1]).then(function() {
        callback();
      });
    });

};

exports.World = World;