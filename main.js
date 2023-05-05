let playerScore = 0
let computerScore = 0  

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }


  function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(); 
    if(playerSelection === computerSelection){
        console.log( `Its a tie! Current Score: ${playerScore} - ${computerScore}`)
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection ==="rock") {
      computerScore++  
      console.log( `You lose. Current Score: ${playerScore} - ${computerScore}`)
    }
    else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "rock" && computerSelection ==="scissors"){
      playerScore++  
      console.log(`You win. Current Score: ${playerScore} - ${computerScore}`)
  }    
    else {return "Invalid"}
}   
  function game(){
  for(let rounds =0; rounds<5; rounds++){
    playRound(prompt("Please enter your move"), getComputerChoice())}
    if(playerScore>computerScore){
      return console.log ("You won the game")
      }
      else if(playerScore === computerScore){
        return console.log ("Its a tie!")
      }
      else{
        return console.log("You lost the game")
      }
  }
  game()