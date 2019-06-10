/* 
GAME PROCESS:
1. Input - user enters a number between min and max (is there an error if they go outside of min and max?)
2. Parameter - user gets X # of guesses
3. Output / Feedback - Correct/incorrect & style appropriately
4. Output / Feedback - Number of guesses remaining
5. Option to Play again (input id="guess-value" has the value change from SUBMIT to PLAY AGAIN)
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
