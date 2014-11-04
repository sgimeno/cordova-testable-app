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
 
## E2E testing on device

Install appium and protractor (Use cordova@3.5.0-0.2.7 for appium tests)

```
$ npm install -g protractor appium
$ appium &
$ protractor test/support/android.world.js
```

## E2E testing on browser

Use cordova@4.0.0 for browser platform tests

```
$ npm install -g cordova
$ webdriver-manager start
$ protractor test/support/browser.world.js
```

## Unit testing on browser

```
$ npm install karma karma-jasmine karma-chrome-launcher --save-dev
$ ./node_modules/karma/bin/karma start karma.conf.js
```
