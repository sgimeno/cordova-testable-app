'use strict';

angular.module('TestableApp.home', [
    'ui.router'
])

.config(function($stateProvider){
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
            data: {
                title: 'home'
            }
        });
})

.controller("HomeController", function($scope, $http) {
    
    $http.get('http://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
        .then(function(resp){
            $scope.baconIpsum = resp.data[0];
        });
    
});
