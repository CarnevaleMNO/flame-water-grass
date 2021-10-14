const computerPlay = () => {
  let result;
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    result = "rock";
  } else if (random === 2) {
    result = "paper";
  } else if (random === 3) {
    result = "scissors";
  } else {
    return "error";
  }
  return result;
};

const result = document.querySelector("#results");
result.innerHTML = 'Choose Fire, Water or Grass';

const playGame = (playerSelection, cpuSelection) => {
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection === "rock" && cpuSelection === "scissors") {
    result.innerHTML = "You used Fire, It's super effective!";
    console.log("You win!");
    return (playerWins += 1);
  } else if (playerSelection === "rock" && cpuSelection === "paper") {
    result.innerHTML = "You used Fire, it's not very effective...";
    console.log("You lose!");
    return (cpuWins += 1);
  } else if (playerSelection === "rock" && cpuSelection === "rock") {
    result.innerHTML = "You used Fire, but nothing happened.";
    console.log("It is a tie!");
    return;
  } else if (playerSelection === "paper" && cpuSelection === "scissors") {
    result.innerHTML = "You used Water, it's not very effective...";
    console.log("You lose!");
    return (cpuWins += 1);
  } else if (playerSelection === "paper" && cpuSelection === "paper") {
    result.innerHTML = "You used Water, but nothing happened.";
    console.log("It is a tie!");
    return;
  } else if (playerSelection === "paper" && cpuSelection === "rock") {
    result.innerHTML = "You used Water, It's super effective!";
    console.log("You win!");
    return (playerWins += 1);
  } else if (playerSelection === "scissors" && cpuSelection === "scissors") {
    result.innerHTML = "You used Grass, but nothing happened.";
    console.log("It is a tie!");
    return;
  } else if (playerSelection === "scissors" && cpuSelection === "paper") {
    result.innerHTML = "You used Grass, It's super effective!";
    console.log("You win!");
    return (playerWins += 1);
  } else if (playerSelection === "scissors" && cpuSelection === "rock") {
    result.innerHTML = "You used Grass, it's not very effective...";
    console.log("You lose!");
    return (cpuWins += 1);
  } else {
    result.innerHTML = "Error. Please choose from Fire, Water, or Grass.";
    return "Error. Please choose from Fire, Water or Grass.";
  }
};

// let cpuSelection = computerPlay();
let playerInput = document.querySelector("#playerInput");
const btns = document.querySelectorAll("button");

const form = document.querySelector("#game-form");
form.addEventListener("submit", function (eventObject) {
  eventObject.preventDefault();
});

let playerWins = 0;
let cpuWins = 0;
const p1 = document.querySelector("#p1");
const c1 = document.querySelector("#c1");

const resetGame = () => {
  playerWins = 0;
  cpuWins = 0;
}

const body = document.querySelector('body');

for (let btn of btns) {
  btn.addEventListener("click", function () {
    let playerSelection = btn.value;
    let cpuSelection = computerPlay();
    playGame(playerSelection, cpuSelection);
    p1.innerHTML = `Player Score: ${playerWins}`;
    c1.innerHTML = `Monster Score: ${cpuWins}`;
    if(playerWins === 5){
      body.innerHTML = '<h1>You Win!!!!!!</h1><button class="btn-5" onClick="window.location.reload();">Play Again</button>'
    } else if (cpuWins === 5) {
      body.innerHTML = '<h3>You have lost, time to rest...</h3><button class="btn-5" onClick="window.location.reload();">Play Again</button>'
    }
  });
}

