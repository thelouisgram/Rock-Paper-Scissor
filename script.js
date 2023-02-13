//Variables
const rockPlayer =document.querySelector('.rockPlayer')
const scissorsPlayer =document.querySelector('.scissorsPlayer')
const paperPlayer =document.querySelector('.paperPlayer')
const rockComputer =document.querySelector('.rockComputer')
const scissorsComputer =document.querySelector('.scissorsComputer')
const paperComputer =document.querySelector('.paperComputer')
const comment =document.querySelector('.comment')
const console =document.querySelector('.console')
const updateScore =document.querySelector('.updateScore')
const finalResult = document.querySelector('.finalResult')
const scoreContainer = document.querySelector('.scoreContainer')
const playAgain = document.querySelector('.play-again')


rockPlayer.addEventListener('click', function(){
    playerSelection = 'rock'
    game();
    stopGame()
    removeSign()
})

scissorsPlayer.addEventListener('click', function(){
    playerSelection = 'scissors'
    game();
    stopGame()
    removeSign()

})

paperPlayer.addEventListener('click', function(){
    playerSelection = 'paper'
    game();
    stopGame()
    removeSign()

})


playAgain.addEventListener('click', function(){
    location.reload();
 });



// define the game options



   
// function to randomly generate the computer's choice

  
  
  



   

    playerScore = 0;
    computerScore = 0;

    playRound(playerSelection, computerSelection);

    function playRound(playerSelection, computerSelection){

        if (playerSelection === computerSelection){
            comment.innerText = "It's a tie!"
            updateScore.innerText = playerScore + ' : ' + computerScore;
        }

        else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")
        ){
            comment.innerText = "You won! " + playerSelection + " beats " + computerSelection + ".";
            playerScore++
            updateScore.innerText = playerScore + ' : ' + computerScore;
    }
        else{
            comment.innerText = "You lost! " + computerSelection + " beats " + playerSelection + ".";
            computerScore++
            updateScore.innerText = playerScore + ' : ' + computerScore;
        }
        
    }
   
    

    function game(){

    const gameOptions = ["rock", "paper", "scissors"];

        function computerPlay() {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
    }
        
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    computerPlay();

            function compSign(){
            if (computerSelection == 'rock'){
        rockComputer.classList.add('cmp')
    } else if (computerSelection == 'paper'){
        paperComputer.classList.add('cmp')
    } else if (computerSelection == 'scissors'){
        scissorsComputer.classList.add('cmp')
    }
}

    compSign();

    function removeSign(){
        rockComputer.classList.remove('cmp')
        paperComputer.classList.remove('cmp')
        paperComputer.classList.remove('cmp')
    }
}


    

 function stopGame(){
    if (playerScore == 5){
        comment.innerText = "You Win, Congrats!"
        updateResult();
    } else if (computerScore == 5){
        comment.innerText = "You Lose, Do better!"
        updateResult();
    } else if ((playerScore == 5) && (computerScore == 5)) {
        comment.innerText = "It's A Draw, Try again!"
        updateResult();
    }

    
 }

 function updateResult(){
    console.style.display = 'none'
    playAgain.style.display = 'block'
 }


