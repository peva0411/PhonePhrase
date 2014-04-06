angular.module('phraseApp').factory('vibrate', [
    '$window', function($window) {
        return {
            vibrate: function() {
                $window.navigator.vibrate(1000);
            }
        };
    }
]);