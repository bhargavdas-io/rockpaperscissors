function userChoice() {
  let input = prompt("Choose between 'Rock', 'Paper' and 'Scissor'");
  return input.toUpperCase();
}

function computerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomchoice = Math.floor(Math.random() * choices.length); // Randomly generates a number (index) from 0 and the range of the array of items,and rounds off to the nearest number
  const selection = choices[randomchoice]; // Selects the array item at the particular index number generated above.
  console.log(selection);
  return selection.toUpperCase();
}

let userScore = 0;
let pcScore = 0;

// Game Logic

for (i = 1; i <= 5; i++) {
  const userreturn = userChoice();
  const returnpc = computerChoice();
  let result = "";

  if (returnpc === userreturn) {
    result = "Tie";
  } else if (userreturn === "ROCK" && returnpc === "SCISSOR") {
    result = "You Win";
    userScore++;
  } else if (userreturn == "ROCK" && returnpc == "PAPER") {
    result = "You Lose";
    pcScore++;
  } else if (userreturn == "PAPER" && returnpc == "SCISSOR") {
    result = "You Lose";
    pcScore++;
  } else if (userreturn == "PAPER" && returnpc == "ROCK") {
    result = "You Win";
    userScore++;
  } else if (userreturn == "SCISSOR" && returnpc == "ROCK") {
    result = "You Lose";
    pcScore++;
  } else if (userreturn == "SCISSOR" && returnpc == "PAPER") {
    result = "You Win";
    userScore++;
  } else {
    result = "Not a valid choice";
  }

  console.log(`Round ${i}: ${result}`);
  console.log(`Current Score => You: ${userScore} | PC: ${pcScore}`);
}

console.log("Final Scores:");
console.log(`You Scored: ${userScore} and PC Scored: ${pcScore}`);

if (userScore > pcScore) {
  console.log("Congrats! you win the match");
} else if (userScore < pcScore) {
  console.log("You Lost the match");
} else {
  console.log("You and PC tied the match");
}
