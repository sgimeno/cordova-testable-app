module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/bower_components/angular/angular.js',
      'src/bower_components/angular-ui-router/release/angular-ui-router.js',
      'src/bower_components/angular-mocks/angular-mocks.js',
      'src/bower_components/ngCordova/dist/ng-cordova-mocks.js',
      'src/js/**/*.js',
      'src/js/**/*.spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-jasmine',
      'karma-chrome-launcher'
    ]

  });
};