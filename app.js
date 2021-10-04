//The Computer Selection
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
}

const playGame = (playerSelection, cpuSelection) => {
    playerSelection = playerSelection.toLowerCase()
    let result;

    if (playerSelection === 'rock' && cpuSelection === 'scissors') {
        result = 'You win!'
    } else if (playerSelection === 'rock' && cpuSelection === 'paper') {
        result = 'You lose!'
    } else if (playerSelection === 'rock' && cpuSelection === 'rock') {
        result = 'It is a tie!'
    } else if (playerSelection === 'paper' && cpuSelection === 'scissors') {
        result = 'You lose!'
    } else if (playerSelection === 'paper' && cpuSelection === 'paper') {
        result = 'It is a tie!'
    } else if (playerSelection === 'paper' && cpuSelection === 'rock') {
        result = 'You win!'
    } else if (playerSelection === 'scissors' && cpuSelection === 'scissors') {
        result = 'It is a tie!'
    } else if (playerSelection === 'scissors' && cpuSelection === 'paper') {
        result = 'You win!'
    } else if (playerSelection === 'scissors' && cpuSelection === 'rock') {
        result = 'You lose!'
    } else {
        return 'error'
    }

    return result
}

// let playerSelection = 'rock'
// let cpuSelection = computerPlay()
// console.log(playGame(playerSelection, cpuSelection))




