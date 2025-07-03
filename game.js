function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomchoice = Math.floor(Math.random() * choices.length); // Randomly generates a number (index) from 0 and the range of the array of items,and rounds off to the nearest number
  const selection = choices[randomchoice]; // Selects the array item at the particular index number generated above.
  console.log(selection);
  return selection;
}

const returnpc = computerChoice();

function userChoice() {
  const userchoice = prompt("Choose between 'Rock', 'Paper' and 'Scissor'");
  return userchoice;
}

const userreturn = userChoice();

// Game Logic

let result = "";

if (returnpc == userreturn) {
  result = "Tie :|";
} else if (userreturn == "Rock" && returnpc == "Scissor") {
  result = "You Win :)";
} else if (userreturn == "Rock" && returnpc == "Paper") {
  result = "You Lose :)";
} else if (userreturn == "Paper" && returnpc == "Scissor") {
  result = "You Lose :(";
} else if (userreturn == "Paper" && returnpc == "Rock") {
  result = "You Win :)";
} else if (userreturn == "Scissor" && returnpc == "Rock") {
  result = "You Lose :(";
} else if (userreturn == "Scissor" && returnpc == "Paper") {
  result = "You Win :)";
} else {
  result = "Please enter a valid choice";
}

console.log(result);
