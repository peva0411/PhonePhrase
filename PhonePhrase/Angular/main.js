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
    .otherwise({
        redirectTo:'/'
    });
}]);

app.factory('game', ['audio', '$rootScope', function(audio, $rootScope) {
    var game = {
        redTeamScore: 0,
        blueTeamScore: 0,
        roundCount: 0,
        newRound: function() {
            return {
                time: 5000,
                active: true,
                words:["cat", "dog", "bird"],
                start: function() {
                    var promise = $interval()
                }
        }
        }
};


}]);

app.controller('StartController', [
    "$scope", "$location", function($scope, $location) {
        $scope.start = function() {
            $location.path('/round');
        };
    }
]);

app.controller('RoundController', [
    "$scope", function($scope) {

        $scope.words = ["dog", "cat", "zebra"];
        $scope.currentWord = "";

        $scope.getNextWord = function() {
            //pop word from words array 
            $scope.currentWord = $scope.words.pop();
        };
    }
]);