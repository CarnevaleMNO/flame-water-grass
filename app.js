//The Computer 
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

const playGame = (playerInput, cpu) => {
    playerInput = playerInput.toLowerCase()
    let result;

    if (playerInput === 'rock' && cpu === 'scissors') {
        result = 'You win!'
    } else if (playerInput === 'rock' && cpu === 'paper') {
        result = 'You lose!'
    } else if (playerInput === 'rock' && cpu === 'rock') {
        result = 'It is a tie!'
    } else if (playerInput === 'paper' && cpu === 'scissors') {
        result = 'You lose!'
    } else if (playerInput === 'paper' && cpu === 'paper') {
        result = 'It is a tie!'
    } else if (playerInput === 'paper' && cpu === 'rock') {
        result = 'You win!'
    } else if (playerInput === 'scissors' && cpu === 'scissors') {
        result = 'It is a tie!'
    } else if (playerInput === 'scissors' && cpu === 'paper') {
        result = 'You win!'
    } else if (playerInput === 'scissors' && cpu === 'rock') {
        result = 'You lose!'
    } else {
        return 'error'
    }

    return result
}

// let playerInput = 'rock'
// let cpu = computerPlay();
// console.log(playGame(playerInput, cpu))
// console.log(playerInput)
// console.log(cpu)

