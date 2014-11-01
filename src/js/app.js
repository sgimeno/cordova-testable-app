angular.module('TestableApp', [
    'ngMaterial',
    'ui.router',
    'ngCordova',

    'TestableApp.home',
    'TestableApp.locales'
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

.filter('i18n', function($injector){
    
    return function(word, language){
        var dictionary, userLanguage;
        
        if (word && language){
            //Load translations map
            userLanguage = /^([a-z]{2})(?:-[A-Z]{2})?$/
                .exec(language)
                .pop();

            dictionary = $injector.get(userLanguage);
            return dictionary[word];
        }
        return word;
    };
})

;
