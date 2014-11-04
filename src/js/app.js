angular.module('TestableApp', [
    'ngMaterial',
    'ui.router',
    'ngCordova',

    'TestableApp.home',
    'TestableApp.filters.i18n'
])

.config(function($urlRouterProvider, $stateProvider){
    
    $urlRouterProvider.otherwise('/');

})

.controller("AppController", function($scope, $state, $document, $cordovaGlobalization) {

    $document[0].addEventListener('deviceready', function(){
        
        $cordovaGlobalization.getPreferredLanguage()
            .then(function(result){
                $scope.userLanguage = result.value;
            });
    });

    $scope.$on('$stateChangeSuccess', function(event, toState, toStateParams, fromState, fromStateParams){
        event.targetScope.state = toState.data || 'Cordova/AngularJS testable app';
    });
    
})

;
