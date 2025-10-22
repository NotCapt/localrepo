//rock paper scissors game in js
// 22/10/25

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    index = Math.floor(Math.random() * choices.length);
    console.log(`computer chose: ${choices[index]}`)
    return choices[index];
}

function getHumanChoice() {
    usrinpt =  prompt('Choose rock/paper/scissors').toLowerCase();
    console.log(`you chose: ${usrinpt}`);
    return usrinpt;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    //logic for score calc
    if (humanChoice == 'rock') {
        if(computerChoice == 'rock'){
            humanScore++;
            computerScore++;
        }
        if(computerChoice == 'paper') {
            computerScore++;
        }
        if(computerChoice == 'scissors') {
            humanScore++;
        }
    }

    if (humanChoice == 'paper'){
        if(computerChoice == 'rock'){
            humanScore++;
        }
        if(computerChoice == 'paper') {
            humanScore++;
            computerScore++;
        }
        if(computerChoice == 'scissors') {
            computerScore++;
        }
    }

    if (humanChoice == 'scissors'){
        if(computerChoice == 'rock'){
            computerScore++;
        }
        if(computerChoice == 'paper') {
            humanScore++;
        }
        if(computerChoice == 'scissors') {
            computerScore++;
            humanScore++;
        }
    }

    return [humanScore, computerScore];
}

function playGame() {
    for (let i =0; i < 5; i++){
        console.log(`ROUND ${i+1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('you won');
    }
    else if (humanScore < computerScore) {
        console.log('you lost');
    }
    else {
        console.log('tie');
    }
}

playGame();