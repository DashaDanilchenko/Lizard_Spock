
function randomChoice() {
   let numRandom = Math.ceil(Math.random()*5)
   console.log(numRandom)
}

function choice() {
    console.log(this.id)
    randomChoice()
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

