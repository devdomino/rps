let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    const rock = 1;
    const paper = 2;
    const scissor = 3;
    console.log(randomNumber);
    switch (selectionTest) {
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
        console.log("a string");
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