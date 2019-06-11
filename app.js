/* 
GAME PROCESS:
1. Input - user enters a number
2. Parameter - the number has to be between min and max 
3. Parameter - user gets X # of guesses
4. Output / Feedback - Correct/incorrect & style appropriately
5. Output / Feedback - Number of guesses remaining
6. Option to Play again (input id="guess-value" has the value change from SUBMIT to PLAY AGAIN)
*/

// Global variables
let min = 1,
  max = 10,
  winningNum = 2,
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
  if (guess === winningNum) {
    guessInput.disabled = true;
    setMessage(`You\'ve WON\!\!\! ${winningNum} is correct\!`, `green`);
  } else {
    guessesLeft;
  }
});

// set Message
function setMessage(mssg, color) {
  message.textContent = mssg;
  message.style.color = color;
  guessInput.style.border = `1px solid ${color}`;
}
