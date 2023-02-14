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
const resultArea = document.querySelector('.resultArea')
const win = document.querySelector('.win')
const lose = document.querySelector('.lose')
const draw = document.querySelector('.draw')
const fire = document.querySelector('.fire')
const poop = document.querySelector('.poop')
const hands = document.querySelector('.hands')



rockPlayer.addEventListener('click', function(){
    playerSelection = 'rock'
    game();
    stopGame()
    rockPlayer.classList.add('draw')
    setTimeout(function(){rockPlayer.classList.remove('draw')}, 300)
})

scissorsPlayer.addEventListener('click', function(){
    playerSelection = 'scissors'
    game();
    stopGame()
    scissorsPlayer.classList.add('draw')
    setTimeout(function(){scissorsPlayer.classList.remove('draw')}, 300)
})

paperPlayer.addEventListener('click', function(){
    playerSelection = 'paper'
    game();
    stopGame()
    paperPlayer.classList.add('draw')
    setTimeout(function(){paperPlayer.classList.remove('draw')}, 300)
})


playAgain.addEventListener('click', function(){
    updateScore.innerText = "0 : 0";
    comment.innerText = "Make your Move"
    console.style.display = 'flex'
    resultArea.style.display = 'none'
    win.style.display = 'none'
    lose.style.display = 'none'
    playAgain.style.display = 'none'
    playerScore = 0;
    computerScore = 0;
    poop.style.display = 'none'
    hands.style.display = 'none'
    fire.style.display = 'none'
 });
  

    playerScore = 0;
    computerScore = 0;

    playRound(playerSelection, computerSelection);

    function playRound(playerSelection, computerSelection){

        if (playerSelection === computerSelection){
            comment.innerText = "It's a tie!"
            hands.style.display = 'block'
            updateScore.innerText = playerScore + ' : ' + computerScore;
        }

        else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")
        ){
            comment.innerText = "You won! " + playerSelection + " beats " + computerSelection + ".";
            fire.style.display = 'block'
            playerScore++
            updateScore.innerText = playerScore + ' : ' + computerScore;
    }
        else{
            comment.innerText = "You lost! " + computerSelection + " beats " + playerSelection + ".";
            computerScore++
            updateScore.innerText = playerScore + ' : ' + computerScore;
            poop.style.display = 'block'
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
        rockComputer.classList.add('draw')
        setTimeout(function(){rockComputer.classList.remove('draw')}, 300)
    } else if (computerSelection == 'paper'){
        paperComputer.classList.add('draw')
        setTimeout(function(){paperComputer.classList.remove('draw')}, 300)
    } else if (computerSelection == 'scissors'){
        scissorsComputer.classList.add('draw')
        setTimeout(function(){scissorsComputer.classList.remove('draw')}, 300)
    }
}

    compSign();

}



 function stopGame(){
    resultArea.style.display = 'block'
    if (playerScore == 5){
        win.style.display = 'block'
        updateResult();
    } else if (computerScore == 5){
        lose.style.display = 'block'
        updateResult();
    } else if ((playerScore == 5) && (computerScore == 5)) {
        draw.style.display = 'block'
        updateResult();
    }

    
 }

 function updateResult(){
    console.style.display = 'none'
    playAgain.style.display = 'block'
 }


