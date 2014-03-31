angular.module('phraseApp').controller('ResultsController', [
    '$scope', '$location', 'game', function ($scope, $location, game) {
        $scope.game = game;

        $scope.roundScored = false;

        $scope.addScore = function(team) {
            $scope.roundScored = true;
            $scope.game.addScore(team);
        };

        $scope.isNextRound = function() {
            return ($scope.roundScored && $scope.game.roundCount < 10);
        };

        $scope.startNextRound = function () {
            $scope.game.addRound();
            $scope.game.round.startRound();
            $location.path('/round');
        };

    }
]);