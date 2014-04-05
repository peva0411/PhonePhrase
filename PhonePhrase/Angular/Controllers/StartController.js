angular.module('phraseApp').controller('StartController', [
    "$scope", "$location", "game", "audio", function ($scope, $location, game, audio) {
        $scope.start = function () {

            audio.timer.muted = true;
            audio.buzzer.muted = true;
            audio.timer.play();
            audio.timer.pause();
            audio.buzzer.play();
            audio.buzzer.pause();
            audio.timer.muted = false;
            audio.buzzer.muted = false;

            game.round.startRound();
            $location.path('/round');
        };
    }
]);