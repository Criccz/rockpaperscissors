let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const resultElement = document.getElementById("result");

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

function updateUI(result) {
  resultElement.innerHTML = result;
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore += 1;
    result = `You win! ${playerSelection} beats ${computerSelection}Player score: ${playerScore}Computer score: ${computerScore}`;

    if (playerScore === 5) {
      result += "You won the game! Reload the page to play again";
      disableButtons();
    }
  } else if (playerSelection === computerSelection) {
    result = `It's a tie. You both chose ${playerSelection}Player score: ${playerScore}Computer score: ${computerScore}`;
  } else {
    computerScore += 1;
    result = `You lose! ${computerSelection} beats ${playerSelection}Player score: ${playerScore}Computer score: ${computerScore}`;

    if (computerScore === 5) {
      result += "I won the game! Reload the page to play again";
      disableButtons();
    }
  }

  return result;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const result = playRound(button.value);
    updateUI(result);
  });
});

// function playRound(playerSelection, computerSelection) {
//   playerSelection = playerSelection.toLowerCase();
//   if (playerSelection === computerSelection) {
//     console.log(`Its a tie! Current Score: ${playerScore} - ${computerScore}`);
//   } else if (
//     (playerSelection === "rock" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "rock")
//   ) {
//     computerScore++;
//     console.log(`You lose. Current Score: ${playerScore} - ${computerScore}`);
//   } else if (
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper") ||
//     (playerSelection === "rock" && computerSelection === "scissors")
//   ) {
//     playerScore++;
//     console.log(`You win. Current Score: ${playerScore} - ${computerScore}`);
//   } else {
//     return "Invalid";
//   }
// }
// function game() {
//   for (let rounds = 0; rounds < 5; rounds++) {
//     playRound(prompt("Please enter your move"), getComputerChoice());
//   }
//   if (playerScore > computerScore) {
//     return console.log("You won the game");
//   } else if (playerScore === computerScore) {
//     return console.log("Its a tie!");
//   } else {
//     return console.log("You lost the game");
//   }
// }
// game();
