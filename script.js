'use strict';
//QUERY SELECTOR - DOM MANIPULATION
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 30;

//EVENT LISTENER

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //0=falsey number =truthy -- if theres no number but 0, its evaluated to false. otherwise its evaluated
  //to true.
  //guess means if guess has a value already it is true. if it is !guess its the opposite meaning it is false
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
  //guess secret number correctly
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //guess too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset secretnumber, score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //restore message, number, score, guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
