console.log("Hello World!");

const values = ["rock", "paper", "scissors"];

function getComputerChoice(values) {
    return values[Math.floor(Math.random()*values.length)];
}

const playerSelection = prompt("Rock, paper or scissors?");

function playRound (playerSelection) {
    const computerSelection = getComputerChoice(values);
    const lowercasePlayerSelection = playerSelection.toLowerCase()
    if (lowercasePlayerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock."
    }
    else if (lowercasePlayerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie! Play again."
    }
    else if (lowercasePlayerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors."
    }
    else if (lowercasePlayerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie! Play again."
    }
    else if (lowercasePlayerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock."
    }
    else if (lowercasePlayerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper."
    }
    else if (lowercasePlayerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper."
    }
    else if (lowercasePlayerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats scissors."
    }
    else if (lowercasePlayerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie! Play again."
    }
}

function playGame () {
    let computerWins = 0;
    let playerWins = 0;
    for (let i = 0; i < 5; i++) {
        let consoleMessage = playRound(playerSelection);
        console.log(consoleMessage);
        if (consoleMessage.includes("win")) {
            playerWins++;
        }
        else if (consoleMessage.includes("lose")) {
            computerWins++;
        };
        console.log("The current score is: " + playerWins + " (you) vs " + computerWins + " (computer).")
    }
    if (computerWins > playerWins) {
        console.log("Bummer! Computer won.")
    }
    else if (playerWins > computerWins) {
        console.log("Congrats! You won the battle.")
    }
    else {
        console.log("It's a tie in the end")
    }
}

playGame();