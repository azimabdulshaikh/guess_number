'use strict';
const secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// Check botton DOM
document.querySelector('.check').addEventListener('click',
function (){
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
if(!guess){
    // document.querySelector('.message').textContent = '🚩No Number!';
    displayMessage('🚩No Number!');
// when guess is correct
} else if (guess === secretNumber){
   // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
        document.querySelector('.highscore').textContent = score;
    }

// when guess is wrong
} else if(guess !== secretNumber) {
    if(score>1){
        //document.querySelector('.message').textContent =
        // guess>secretNumber ? '📈Too High':'📉Too Low'
        displayMessage(guess>secretNumber ? '📈Too High':'📉Too Low');
        score--;
        document.querySelector('.score').textContent = score;
    } else{
        //document.querySelector('.message').textContent = '🎇You lost the game';
        displayMessage('🎇You lost the game');
        document.querySelector('.score').textContent = 0;
    }
}
});


// Again botton DOM
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = 'none';
    document.querySelector('.number').style.width = '15rem';   

});