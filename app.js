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

const playGame = (playerSelection, cpuSelection) => {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === 'rock' && cpuSelection === 'scissors') {
        console.log('You win!')
        return playerWins += 1;
    } else if (playerSelection === 'rock' && cpuSelection === 'paper') {
        console.log('You lose!')
        return cpuWins += 1;
    } else if (playerSelection === 'rock' && cpuSelection === 'rock') {
        console.log('It is a tie!')
        return;
    } else if (playerSelection === 'paper' && cpuSelection === 'scissors') {
        console.log('You lose!')
        return cpuWins += 1;
    } else if (playerSelection === 'paper' && cpuSelection === 'paper') {
        console.log('It is a tie!')
        return;
    } else if (playerSelection === 'paper' && cpuSelection === 'rock') {
        console.log('You win!')
        return playerWins += 1;
    } else if (playerSelection === 'scissors' && cpuSelection === 'scissors') {
        console.log('It is a tie!')
        return;
    } else if (playerSelection === 'scissors' && cpuSelection === 'paper') {
        console.log('You win!')
        return playerWins += 1;
    } else if (playerSelection === 'scissors' && cpuSelection === 'rock') {
        console.log('You lose!')
        return cpuWins += 1;
    } else {
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
console.log(`Player Score: ${playerWins}`);
console.log(`Computer Score: ${cpuWins}`);

btn.addEventListener('click', function() {
    let playerSelection = playerInput.value
    let cpuSelection = computerPlay();
    playGame(playerSelection, cpuSelection)
    console.log(`Player Score: ${playerWins}`);
    console.log(`Computer Score: ${cpuWins}`);
});


