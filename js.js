const humanWins = "Humanity wins! ";
const computerWins = "The robot won";
let humanScore = 0;
let computerScore = 0;
let outcome;
const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const message = document.getElementById("message");
const humanScoreMsg = document.getElementById("humanScore");
const computerScoreMsg = document.getElementById("computerScore");


btnRock.addEventListener('click', function() {
    outcome = playRound('Rock', gc());
    console.log(`outcome ${outcome}`);
    showResult();
})

btnPaper.addEventListener('click', function() {
    outcome = playRound('Paper', gc());
    console.log(`outcome ${outcome}`);
    showResult();
})
btnScissors.addEventListener('click', function() {
    outcome = playRound('Scissors', gc());
    console.log(`outcome ${outcome}`);
    showResult();
})

const showResult = function() {
    if (!outcome) {
        // break;
    }
    
    switch (outcome) {           
        case "h":
            humanScore++;
            message.textContent = humanWins;
            humanScoreMsg.textContent = humanScore
            break;
        case "c":
            computerScore++;
            message.textContent = computerWins;
            computerScoreMsg.textContent = computerScore;
            break;
        default:
            message.textContent = "A tie - try again!"
    }   
    if (humanScore === 3) {
        message.style.backgroundColor = 'green';
        message.style.color = 'white';
        message.textContent = "You win! The machines retreat... for now"
    } else if (computerScore === 3) {
        message.style.backgroundColor = 'red';
        message.style.color = 'white';
        message.textContent = "You lose. The machines have become sentient"
    }
}

function playGame() {

    // for (let i = 1; ((humanScore + computerScore) < 6); i++) {
        outcome = playRound(getHumanChoice(), getComputerChoice());
        if (!outcome) {
            // break;
        }
        switch (outcome) {           
            case "h":
                humanScore++;
                break;
            case "c":
                computerScore++;
                break;             
        }
    // }
    if (humanScore > computerScore) {
        console.log("You win! The machines retreat... for now")
    } else if (computerScore > humanScore) {
        console.log("You lose. The machines have become sentient")
    } else {
        console.log("you lose, you win some")
    }
}

function playRound(humanChoice , computerChoice) {
    console.log('playRound starting')
    if (!humanChoice) {
        return false;
    }
    let message = "Humanity wins! "

    switch (true) {
        case (humanChoice === computerChoice): 
            message = "A tie!";        
            console.log(message);  
            return "t";
            break;
        case (humanChoice === "Rock" && computerChoice === "Scissors"):
            message += "Rock beats Scissors"; 
            console.log(message);              
            return "h";
            break;
        case (humanChoice === "Paper" && computerChoice === "Rock"):
            message += "Paper beats Rock"; 
            console.log(message);        
            return "h";
            break;
        case (humanChoice === "Scissors" && computerChoice === "Paper"):
            message += "Scissors beats Paper"; 
            console.log(message);        
            return "h";
            break;
        default:
            message = `Computer wins! ${computerChoice} beats ${humanChoice}`
            console.log(message);
            return "c";
        }

    }

let gc = function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    const rock = 1;
    const paper = 2;
    const scissor = 3;
    console.log("Computer gets: " + randomNumber);
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
            break;
    }
}

function getHumanChoice() {
    let entry;
    let bNumberEntered = false;
    const promptMSG = "Please Enter\nrock (or 1)\npaper (or 2)\nscissors (or 3)"
    let selection = prompt(promptMSG);
    if (!selection) {
        if (!confirm("Can't guess for you. Click OK to continue; Cancel to concede to the machines!")) {
            return false;            
        }
        
    }
    let selectionTest = Number(selection);
        
    if (!Number.isNaN(selectionTest)) {
        bNumberEntered = true;
        console.log("a number");
        if (selectionTest < 0 || selectionTest > 3) {
            alert("If feeling lazy then only 1 or 2 or 3");
            return false;
        };
        switch (selectionTest) {
            case 1:
                entry = "Rock";
                break;
            case 2:
                entry = "Paper";
                break;
            case 3:
                entry = "Scissors"
                break;
        }
    } else {
        // console.log("a string");
        entry = selection.toUpperCase();
        switch (entry) {
            case "ROCK":
                entry = "Rock";
                break;
            case "PAPER":
                entry = "Paper";
                break;
            case "SCISSORS":
                entry = "Scissors"
                break;
            default:
                alert("Feeling drowsy; couldn't figure out what you ented...")
                return false;
            }
    } 
        
    return entry;
}

function hello(inStr) {
    console.log(inStr);
}