/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
let score = 0;

//document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//Reset
let scoreZero   = document.getElementById('score-0');
let scoreOne    = document.getElementById('score-1');
let currentZero = document.getElementById('current-0');
let currentOne  = document.getElementById('current-1');
let hold        = document.querySelector('.btn-hold');

scoreZero.textContent = '0';
scoreOne.textContent = '0';
currentZero.textContent = '0';
currentOne.textContent = '0';


document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    let diceDOM = document.querySelector('.dice');
    dice = Math.floor(Math.random() * 6) +1;
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    score += dice;
    currentZero.textContent = score;
    scores[0] = score;
    console.log(scores[0]);
    if(dice === 1) {
     scoreZero.textContent = '0';
     currentZero.textContent = '0';   
     score = 0;
    }
});
hold.addEventListener('click', function() {
if(scoreZero.textcontent !== '0'){
currentZero.textContent = '0';
score = 0;
let number = parseInt(scoreZero.textContent, 10);
scoreZero.textContent = scores[0] + number;    
}
});


