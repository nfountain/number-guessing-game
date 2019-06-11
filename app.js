/* 
GAME PROCESS:
1. Input - user enters a number
2. Parameter - the number has to be between min and max 
3. Parameter - user gets X # of guesses
4. Output / Feedback - Correct/incorrect & style appropriately
5. Output / Feedback - Number of guesses remaining
6. Option to Play again (input id="guess-btn" has the value change from SUBMIT to PLAY AGAIN)
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
  // console.log(guessInput.value);// returns the number entered(black)
  // turn input from string to number
  let guess = parseInt(guessInput.value);
  console.log(guess); // output is blue

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, `red`);
  }
  // check if input matched random number
  else if (guess === winningNum) {
    gameOver(true, `You\'ve WON\!\!\! ${winningNum} is correct.`);
  } else {
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

function gameOver(won, mssg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  setMessage(mssg, color);
  guessInput.disabled = true;
  // change button value text to Play Again and set the button to reset the game
  guessBtn.value = `play again`;
  guessBtn.className += 'play-again'; // += appends it to the list of classes, as = would overwrite the classes
}

// get a randomized winning number
function getRandomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
