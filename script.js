// define the game options

const gameOptions = ["rock", "paper", "scissors"];

// function to randomly generate the computer's choice

function computerPlay() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}


const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (gameOptions.indexOf(playerSelection) === -1) {
        return "Invalid selection. Please choose rock, paper, or scissors.";
      }
    
    if (playerSelection === computerSelection){
        return "It's a tie!"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
}
    else{
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i <5 ; i++){
        const playerSelection = prompt("Make your selection: rock, paper, or scissors.");
        const result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You win")){
            playerScore++;
        } else if(result.startsWith("You lose")){
            computerScore++
        }
        console.log(result)
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
      } else if (playerScore < computerScore) {
        console.log("You lose the game.");
      } else {
        console.log("The game is a tie.");
      }
}

game()