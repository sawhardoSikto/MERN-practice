const readlineSync = require("readline-sync");

let secretNumber = 9;
const chance = 5;

for (let i = 0; i < chance; i++) {
  let userGuess = parseInt(readlineSync.question("Enter the guess: "));
  console.log(`Your guess is ${userGuess}`);

  if (userGuess === secretNumber) {
    console.log(`✅ The guess is correct: ${userGuess}`);
    break;
  } else if (userGuess > secretNumber) {
    console.log("⬆️ The guess is bigger than the secret number");
  } else {
    console.log("⬇️ The guess is lower than the secret number");
  }

  if (i === chance - 1) {
    console.log("❌ Game Over! You used all your chances.");
  }
}
