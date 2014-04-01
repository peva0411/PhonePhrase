angular.module('phraseApp').factory('game', ['round', function (round) {
    var game = {
        redTeamScore: 0,
        blueTeamScore: 0,
        roundCount: 1, 
        round: round,
        addScore: function(team) {
            if (team == 'red') {
                this.redTeamScore ++;
            } else {
                this.blueTeamScore++;
            }
        },
        addRound:function() {
            this.roundCount++;
        }
    };
    return game;
}
]);