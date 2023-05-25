function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
//the Math.floor function rounds to a number that is not a decimal and the max -min+1 lets you create as many ranges as you wantt
}

function playGame() {
  const targetNumber = generateRandomNumber(1, 100);
  let attempts = 0;
  let guessedNumber = 0;
  let highScore = Infinity; // Initialize high score as infinity

  while (guessedNumber !== targetNumber) {
    guessedNumber = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guessedNumber)) {
      alert("Invalid input. Please enter a valid number.");
      continue;
    }

    attempts++;

    if (guessedNumber < targetNumber) {
      alert("Too low! Try again.");
    } else if (guessedNumber > targetNumber) {
      alert("Too high! Try again.");
    } else {
      alert("Congratulations! You guessed the correct number in " + attempts + " attempts!");

      if (!highScore || attempts < highScore) {
        highScore = attempts;
        alert("New high score! Your current high score is " + highScore + " attempts.");
      }
else {alert("The least attempts used " +highScore "attempts!")
}
    }
  }
}

// Start the game
playGame();
