###Testable Cordova/Ionic boilerplate

### Dependencies
 + [npm](https://npmjs.org/)
 + [cordova 4.0.0](http://cordova.apache.org/)
 + [grunt-cli](http://gruntjs.com/)
 + [bower](http://bower.io/)


### Setup

```
npm install
bower install
grunt build
cordova build android
```

#####Notes on setup

 + bower_components under src (opinionated)
 + compile the JS app into the www directory
	 + execute ```cordova prepare``` after each change in src directory
 + test with protractor & ```cordova serve```
	+ point protractor to the browser platform



### Random useful commands

adb shell screenrecord /sdcard/FILENAME.mp4
adb pull /sdcard/FILENAME.mp4