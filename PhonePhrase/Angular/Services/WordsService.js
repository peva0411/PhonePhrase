angular.module('phraseApp').factory('words', function () {
    return {
        wordSets: [{
            words: ["cat", "dog", "mouse", "Elephant", "Cow", "Duck", "Horse", "Bird"]
        }, {
            words: ["Spoon", "fork", "Plate", "Dish", "Knife", "Glass"]
        }]
    };
});
