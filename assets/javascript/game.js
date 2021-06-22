$(document).ready(function() {
// Declare all the variables I will be using  in the game... These will be the initial values when new game starts

// Variable to track wins
let wins = 0;
// Variable to track losses
let losses = 0;
// Variable to track player score
let score = 0;
// Variable to store random goal number between 19-120
let randomNum = numGenerator(19, 120);
$("#random-number").text(randomNum);

// Functions!!

// Random number generator
function numGenerator(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};
// Give crystals random values
function crystalValues() {
    $("img").each(function() {
        // Give the crystals in the img tag a value attribute of a random number
        $(this).attr("data-value", numGenerator(1, 12))
    });
};
crystalValues();
// Start new game
function newGame() {
    score = 0;
    $("#score-counter").text(score);
    randomNum = numGenerator(19, 120);
    $("#random-number").text(randomNum);
    crystalValues();
}

// When user clicks a crystal image, its point value is added to the total score
$(".crystal").click(function() {
    score += parseInt($(this).attr("data-value"));
    $("#score-counter").text(score);

    if (score === randomNum) {
        alert("YOU WIN!");
        wins++;
        $("#wins").text(wins);
        newGame();
    }
    else if (score > randomNum) {
        alert("YOU LOSE");
        losses++;
        $("#losses").text(losses);
        newGame();
    }
});

})