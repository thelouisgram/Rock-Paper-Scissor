# Rock-Paper-Scissor
Rock Paper and scissor game for theodinproject

PSEUDOCODE:

define the game options
function to randomly generate the computer's choice
function computerPlay() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (gameOptions.indexOf(playerSelection) === -1) {
    return "Invalid selection. Please choose rock, paper, or scissors.";
  }
function to play multiple rounds of the game
start the game
} 
