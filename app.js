/* 
GAME PROCESS:
1. Input - user enters a number
2. Parameter - the number has to be between min and max 
3. Parameter - user gets X # of guesses
4. Output / Feedback - Correct/incorrect & style appropriately
5. Output / Feedback - Number of guesses remaining
6. Option to Play again
*/

// Global variables
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.getElementById('guess-btn'),
  guessInput = document.getElementById('guess-input'),
  message = document.querySelector('.message');

// Assign min and max values
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, `red`);
  }
  // check if input matched random number
  else if (guess === winningNum) {
    gameOver(true, `You\'ve WON\!\!\! ${winningNum} is correct.`);
  } else {
    // if input does not match random number, subtract a guess and return message
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(false, `Game Over\. The correct number was ${winningNum}\.`);
    } else if (guessesLeft === 1) {
      setMessage(`${guess} is not correct. ${guessesLeft} guess left\.`, `red`);
    } else {
      setMessage(
        `${guess} is not correct. ${guessesLeft} guesses left\.`,
        `red`
      );
    }
  }
});

// set Message
function setMessage(mssg, color) {
  message.textContent = mssg;
  message.style.color = color;
  guessInput.style.border = `1px solid ${color}`;
  guessInput.value = '';
}

// game over
function gameOver(won, mssg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  setMessage(mssg, color);
  guessInput.disabled = true;
  guessBtn.value = `play again`;
  guessBtn.className += 'play-again';
}

// get a randomized winning number
function getRandomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
