angular.module('phraseApp')
        .factory('round', ['$timeout', 'words', 'audio', function ($timeout, words, audio) {

            var getRoundTime = function () {
                var min = 3000;
                var max = 6000;
                return Math.floor(Math.random() * (max - min + 1) + min);
            };
    return {
        roundOver: false,
        currentWord: '',
        getNextWord: function () {
           this.currentWord = words.wordSets[0].words.pop();
        },
        startRound: function() {
            var self = this;
            var timer;
            var i = 0;
            var interval = Math.floor(getRoundTime() / 3);
            console.log('started ' + interval);
            this.roundOver = false;
            audio.timer.play();

            $timeout(function () {
                console.log("stopped");
                self.roundOver = true;
                audio.timer.pause();
                audio.buzzer.play();
            }, interval);

            //timer = $interval(function () {
            //    if (i === 0) {
            //        audio.timer.playbackRate = 1;
            //    }else if (i === 1) {
            //        audio.timer.playbackRate = 2;
            //    }else if (i === 2) {
            //        audio.timer.pause();
            //        audio.timer.playbackRate = 0.25;
            //        i = 0;
            //    }
            //    i++;
            //}, interval);
        }
    };
}]);