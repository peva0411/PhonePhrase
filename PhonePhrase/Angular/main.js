var app = angular.module('phraseApp', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/Angular/views/start.html',
        controller: 'StartController'
    })
    .when('/round', {
        templateUrl: '/Angular/views/round.html',
        controller: 'RoundController'
    })
    .when('/results', {
        templateUrl: '/Angular/views/results.html',
        controller: 'ResultsController'
        })
    .otherwise({
        redirectTo:'/'
    });
}]);





