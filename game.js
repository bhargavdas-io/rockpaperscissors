function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomchoice = Math.floor(Math.random() * choices.length); // Randomly generates a number (index) from 0 and the range of the array of items,and rounds off to the nearest number
  const selection = choices[randomchoice]; // Selects the array item at the particular index number generated above.
  return selection;
}

const returnpc = computerChoice();

function userChoice() {
  const userchoice = prompt("Choose between 'Rock', 'Paper' and 'Scissor'");
  return userchoice;
}

const userreturn = userChoice();

let result = "";

if (returnpc == userreturn) {
  result = "Tie";
} else {
  result = "Testline";
}

console.log(result);
