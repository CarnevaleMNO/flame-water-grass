//The Computer 
const computerPlay = () => {
    let result;
    let random = Math.floor(Math.random() * 3) + 1

    if(random === 1) {
        result = 'Rock'
    } else if (random === 2) {
        result = 'Paper'
    } else if (random === 3) {
        result = 'Scissors'
    } else {
        return 'Error'
    }
    return result
}

