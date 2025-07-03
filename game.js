function userChoice() {
  const input = prompt("Choose between 'Rock', 'Paper' and 'Scissor'");
  let userchoice = input.toUpperCase();
  return userchoice;
}

const userreturn = userChoice();

function computerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomchoice = Math.floor(Math.random() * choices.length); // Randomly generates a number (index) from 0 and the range of the array of items,and rounds off to the nearest number
  const selection = choices[randomchoice]; // Selects the array item at the particular index number generated above.
  console.log(selection);
  return selection;
}

const returnpc = computerChoice();

// Game Logic

let result = "";

if (returnpc == userreturn) {
  result = "Tie :|";
} else if (userreturn == "ROCK" && returnpc == "Scissor") {
  result = "You Win :)";
} else if (userreturn == "ROCK" && returnpc == "Paper") {
  result = "You Lose :)";
} else if (userreturn == "PAPER" && returnpc == "Scissor") {
  result = "You Lose :(";
} else if (userreturn == "PAPER" && returnpc == "Rock") {
  result = "You Win :)";
} else if (userreturn == "SCISSOR" && returnpc == "Rock") {
  result = "You Lose :(";
} else if (userreturn == "SCISSOR" && returnpc == "Paper") {
  result = "You Win :)";
} else {
  result = "Please enter a valid choice";
}

console.log(result);

// Score keeping logic for both human and pc.

let userScore = 0;
let pcScore = 0;

if (result == "You Win :)") {
  userScore++;
} else if (result == "You Lose :(") {
  pcScore++;
}

let score = `Your Score: ${userScore} and PC Score: ${pcScore}`;

console.log(score);
