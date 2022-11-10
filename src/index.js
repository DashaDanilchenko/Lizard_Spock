import ConfettiGenerator from "confetti-js"

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);

let computerChoice
const resultText = document.querySelector('.result-text')

function caseGame(choice) {
    switch (choice) {
        case 1: 
            choice = 'rock'; break
        case 2:
            choice = 'paper'; break 
        case 3:
            choice = 'scissors'; break
        case 4:
            choice = 'lizard'; break 
        case 5:
            choice = 'spock'; break
    }
    computerChoice = choice
}

function randomChoice() {
   let randomNum = Math.ceil(Math.random()*5)
   caseGame(randomNum)
}

function youDraw() {
    resultText.innerHTML = 'Draw!'
}

function youWon() {
    resultText.innerHTML = 'Won!'
    confetti.render()
}

function youLoss() {
    resultText.innerHTML = 'Loss!'
}

function determineWinner(gamer, computer) {
    console.log(gamer, computer)
    
    gamer ===  'rock' && computer === ('scissors' || 'lizard')  ||
    gamer === 'paper' && computer === ('rock' || 'spock') ||
    gamer === 'scissors' && computer === ('paper' || 'lizard') ||
    gamer === 'lizard' && computer === ('spock' || 'paper') ||
    gamer === 'spock' && computer === ('scissors' || 'rock')? youWon(): youLoss()
}

function comparison(myChoice) {
    if (myChoice !== computerChoice) {
        determineWinner(myChoice, computerChoice)
    }if (myChoice === computerChoice){
        youDraw() 
    }
}

function choice() {
    randomChoice()
    comparison(this.id)
}

const rock = document.querySelector('#rock')
rock.addEventListener('click', choice)
const paper = document.querySelector('#paper')
paper.addEventListener('click', choice)
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', choice)
const lizard = document.querySelector('#lizard')
lizard.addEventListener('click', choice)
const spock = document.querySelector('#spock')
spock.addEventListener('click', choice)

