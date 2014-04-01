angular.module('phraseApp').controller('StartController', [
    "$scope", "$location", "game", function ($scope, $location, game) {
        $scope.start = function () {
            game.round.startRound();
            $location.path('/round');
        };
    }
]);