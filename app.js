const computerPlay = () => {
    let result;
    let random = Math.floor(Math.random() * 3) + 1

    if(random === 1) {
        result = 'rock'
    } else if (random === 2) {
        result = 'paper'
    } else if (random === 3) {
        result = 'scissors'
    } else {
        return 'error'
    }
    return result
};

const result = document.querySelector('#results')

const playGame = (playerSelection, cpuSelection) => {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === 'rock' && cpuSelection === 'scissors') {
        result.innerHTML = 'You win!'
        console.log('You win!')
        return playerWins += 1;
    } else if (playerSelection === 'rock' && cpuSelection === 'paper') {
        result.innerHTML = 'You lose!'
        console.log('You lose!')
        return cpuWins += 1;
    } else if (playerSelection === 'rock' && cpuSelection === 'rock') {
        result.innerHTML = 'It is a tie!'
        console.log('It is a tie!')
        return;
    } else if (playerSelection === 'paper' && cpuSelection === 'scissors') {
        result.innerHTML = 'You lose!'
        console.log('You lose!')
        return cpuWins += 1;
    } else if (playerSelection === 'paper' && cpuSelection === 'paper') {
        result.innerHTML = 'It is a tie!'
        console.log('It is a tie!')
        return;
    } else if (playerSelection === 'paper' && cpuSelection === 'rock') {
        result.innerHTML = 'You win!'
        console.log('You win!')
        return playerWins += 1;
    } else if (playerSelection === 'scissors' && cpuSelection === 'scissors') {
        result.innerHTML = 'It is a tie!'
        console.log('It is a tie!')
        return;
    } else if (playerSelection === 'scissors' && cpuSelection === 'paper') {
        result.innerHTML = 'You win!'
        console.log('You win!')
        return playerWins += 1;
    } else if (playerSelection === 'scissors' && cpuSelection === 'rock') {
        result.innerHTML = 'You lose!'
        console.log('You lose!')
        return cpuWins += 1;
    } else {
        result.innerHTML = 'Error. Please choose from paper, rock, or scissors.'
        return 'Error. Please choose from paper, rock or scissors.'
    }
};

// let cpuSelection = computerPlay();
let playerInput = document.querySelector('#playerInput')
const btn = document.querySelector('button');

const form = document.querySelector('#game-form');
form.addEventListener('submit', function(eventObject){
    eventObject.preventDefault();
});

let playerWins = 0;
let cpuWins = 0;
const p1 = document.querySelector('#p1');
const c1 = document.querySelector('#c1');
console.log(`Player Score: ${playerWins}`);
console.log(`Computer Score: ${cpuWins}`);

btn.addEventListener('click', function() {
    let playerSelection = playerInput.value
    let cpuSelection = computerPlay();
    playGame(playerSelection, cpuSelection)
    p1.innerHTML = `Player Score: ${playerWins}`
    c1.innerHTML = `Computer Score: ${cpuWins}`
    console.log(`Player Score: ${playerWins}`);
    console.log(`Computer Score: ${cpuWins}`);
});


