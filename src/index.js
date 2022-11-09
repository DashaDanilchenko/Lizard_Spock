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
    console.log(computerChoice)
}

function randomChoice() {
   let randomNum = Math.ceil(Math.random()*5)
   caseGame(randomNum)
}

function determineWinner(my, computer) {
    switch (my | computer) {
        case 'rock'| 'scissors' || 'lizard': 
            resultText.innerHTML = 'Won!'; break
        case 'paper'| 'rock' || 'spock': 
            resultText.innerHTML = 'Won!'; break
        case 'scissors'| 'paper' || 'lizard': 
            resultText.innerHTML = 'Won!'; break
        case 'lizard'| 'spock' || 'paper':
            resultText.innerHTML = 'Won!'; break
        case 'spock'| 'scissors' || 'rock':    
            resultText.innerHTML = 'Won!'; break

    }
}

function comparison(myChoice) {
    if (myChoice !== computerChoice) {
        determineWinner(myChoice, computerChoice)
    }if (myChoice === computerChoice){
        resultText.innerHTML = 'Draw!' 
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

