angular.module('phraseApp').controller('RoundController', [
    "$scope", 'game', '$location', function ($scope, game, $location) {

        $scope.game = game;
        $scope.round = game.round;

        $scope.$watch('round.roundOver', function (value) {
            if (value) {
                $location.path('/results');
            }
        });
    }
]);