angular.module('phraseApp').factory('audio', [
    '$document', function ($document) {

        var timerAudio = $document[0].createElement('audio');
        timerAudio.src = '/Content/Sounds/TicTock.mp3';
        timerAudio.playbackRate = 0.5;
        timerAudio.loop = true;

        var buzzerAudio = $document[0].createElement('audio');
        buzzerAudio.src = '/Content/Sounds/Buzzer.mp3';

        return {
            buzzer: buzzerAudio,
            timer: timerAudio
        };
    }
]);
