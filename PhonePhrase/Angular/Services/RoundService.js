angular.module('phraseApp')
        .factory('round', ['$interval', 'words', 'audio', 'vibrate', function ($interval, words, audio,vibrate) {

            var getRoundTime = function () {
                var min = 30000;
                var max = 60000;
                return Math.floor(Math.random() * (max - min + 1) + min);
            };
    return {
        roundOver: false,
        currentWord: '',
        getNextWord: function () {
           this.currentWord = words.wordSets[0].words.pop();
        },
        startRound: function () {
            vibrate.vibrate();
            var self = this;
            var timer;
            var i = 0;
            var interval = Math.floor(getRoundTime() / 3);
            console.log('started, interval time: ' + interval/1000);
            this.roundOver = false;
            audio.timer.play();

            function setTimerRate() {
                console.log("interval n: " + i);
                if (i === 0) {
                    vibrate.vibrate();
                    audio.timer.playbackRate = 1;
                    i++;
                } else if (i === 1) {
                    vibrate.vibrate();
                    audio.timer.playbackRate = 2;
                    i++;
                } else if (i === 2) {
                    audio.timer.pause();
                    audio.buzzer.play();
                    self.roundOver = true;
                    audio.timer.playbackRate = 0.5;
                    i = 0;
                    $interval.cancel(timer);
                }
            }
            timer = $interval(setTimerRate, interval, 3);
        }
    };
}]);