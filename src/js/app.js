angular.module('TestableApp', [
    'ngMaterial',
    'ui.router',

    'TestableApp.home'
])

.config(function($urlRouterProvider, $stateProvider){
    
    $urlRouterProvider.otherwise('/');

})

.controller("AppController", function($scope, $state) {

    $scope.$on('$stateChangeSuccess', function(event, toState, toStateParams, fromState, fromStateParams){
        event.targetScope.state = toState.data || 'Cordova/AngularJS testable app';
    });
    
})

;
