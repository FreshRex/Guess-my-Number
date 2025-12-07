'use strict';

// "." = class
// "#" = id

/*
// "document.querySelector" kry info van html document af.
// ".textContent" gee die string van die object.
*/

// Math = preloaded math functions (random)
// ".trunc" = remove decimal places
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Btn "check" = as Btn "check" ge(click) word, DOEN function().
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(displayMessage('❌NO number!❌'));
  }
  // When Player Wins.
  else if (guess === number) {
    // document.querySelector('.message').textContent = '🥳Correct Number🥳';
    displayMessage('🥳Correct Number🥳');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > number ? 'Too High...' : 'Too Low..';
      displayMessage(guess > number ? 'Too High...' : 'Too Low..');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You Lost The Game💥');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000ff';
      document.querySelector('.number').textContent = number;
    }
  }
});

//Again btn = reset.
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
