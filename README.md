# Testable Cordova/AngularJS app boilerplate

An opinionated kickstarter for Cordova/AngularJS testable projects.

***

## Quick Start

Install Node.js and then:

```
$ git clone git://github.com/joshdmiller/ng-boilerplate
$ cd ng-boilerplate
$ npm install -g bower cordova grunt-cli
$ npm install
$ cordova platform add <platform>
$ grunt build
$ cordova build <platform>
```

Install de generated package in your device.

Happy hacking!
 
## E2E testing on device

Install appiun and protractor

```
$ npm install -g protractor appium
$ appium &
$ protractor test/support/android.world.js
```
