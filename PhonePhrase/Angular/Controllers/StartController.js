angular.module('phraseApp').controller('StartController', [
    "$scope", "$location", "game", "audio", function ($scope, $location, game, audio) {
        $scope.start = function () {
            game.round.startRound();
            $location.path('/round');
        };
    }
]);