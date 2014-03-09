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

app.factory('audio', [
    '$document', function($document) {
        var timerAudio = $document[0].createElement('audio');
        timerAudio.src = '/Content/Sounds/TicTock.mp3';
        timerAudio.loop = true;
        var buzzerAudio = $document[0].createElement('audio');
        buzzerAudio.src = '/Content/Sounds/Buzzer.mp3';

        return {
            buzzer: buzzerAudio,
            timer: timerAudio
        };
    }
]);


app.factory('game', ['$timeout', '$rootScope', 'audio', function($timeout, $rootScope, audio) {
    var game = {
            audio: audio,
            redTeamScore: 0,
            blueTeamScore: 0,
            roundCount: 0,
            roundOver: false,
            gameIsActive: false,
            words: ["cat", "dog", "mouse", "Elephant", "Cow", "Duck", "Horse", "Bird"],
            startRound: function () {
                    game.roundOver = false;
                    game.audio.buzzer.muted = true;
                    game.audio.buzzer.play();
                    game.audio.timer.play();
                    $timeout(function () {
                        game.audio.buzzer.muted = false;
                        game.roundOver = true;
                        game.audio.timer.pause();
                        game.audio.buzzer.play();
                    }, 5000);
            },
            getNextWord: function() {
                game.currentWord = game.words.pop();
            },
            playBuzzer: function() {
                audio.buzzer.play();
            }
        };

        return game;
    }
]);

app.controller('StartController', [
    "$scope", "$location", "game", function($scope, $location, game) {
        $scope.start = function () {
            game.startRound();
            $location.path('/round');
        };
    }
]);

app.controller('RoundController', [
    "$scope", 'game', '$location', function($scope, game, $location) {
        $scope.game = game;

        $scope.$watch('game.roundOver', function(value) {
            if (value) {
                $location.path('/results');
            }
        });
    }
]);

app.controller('ResultsController', [
    '$scope', '$location', 'game', function($scope,$location, game) {
        $scope.redWon = function () {
            game.redTeamScore++;
            $location.path('/');
        };

        $scope.blueWon = function() {
            game.blueTeamScore++;
            $location.path('/');
        };
    }
]);