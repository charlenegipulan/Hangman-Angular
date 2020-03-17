var app = angular.module("HangmanApp", []);

app.controller("GameController",['$scope',function($scope){

var words = ["apple","mango","strawberry","banana"];
$scope.incorrectLettersChosen = [];
$scope.correctLettersChosen = [];
$scope.guesses  = 6;
$scope.displayWord = '';
$scope.input = {
    letter : ''
} 

var selectRandomWord = function() {
    var index = Math.round(Math.random() * words.length);
    return words[index]
}

var newGame = function() {
    $scope.incorrectLettersChosen = [];
    $scope.incorrectLettersChosen = [];
    $scope.correctLettersChosen = [];
    $scope.guesses  = 6;
    $scope.displayWord = '';
    selectedWord = selectRandomWord();
    console.log(selectedWord);
}

newGame();

}]);