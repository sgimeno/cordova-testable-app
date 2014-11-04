# Testable Cordova/AngularJS app boilerplate

An opinionated kickstarter for Cordova/AngularJS testable projects.

***

## Quick Start

Install Node.js and then:

```
$ git clone git://github.com/joshdmiller/ng-boilerplate
$ cd ng-boilerplate
$ npm install -g bower cordova@3.5.0-0.2.7 grunt-cli
$ npm install
$ cordova platform add <platform>
$ grunt build
$ cordova build <platform>
```

Install de generated package in your device.

Happy hacking!
 
## Testing

 The test tools used in this project are:
 
  + karma: for running unit tests
  + protractor: for running E2E tests
  + appium: for running E2E tests against real devices


### Unit testing on browser

Unit tests are written using the syntax of your test framework, for example Jasmine and run with karma

```
$ ./node_modules/karma/bin/karma start karma.conf.js
```

### E2E testing on device

E2E tests are written with Cucumber using the [Gherkin syntax](https://github.com/cucumber/cucumber/wiki/Gherkin) for reusability across platforms and run with protractor

Install appium and protractor (Use cordova@3.5.0-0.2.7 for appium tests)

```
$ npm install -g protractor appium
$ appium &
$ protractor test/support/android.world.js
```

### E2E testing on browser

Use cordova@4.0.0 for browser platform tests (You will need to re-add the plugins for the browser platform)

```
$ npm install -g cordova
$ webdriver-manager start
$ protractor test/support/browser.world.js
```
