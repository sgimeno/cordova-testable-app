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
                title: 'Home'
            }
        });
})

.controller("HomeController", function($scope, $state) {
    
  $scope.state = $state.current.data;
    
});
