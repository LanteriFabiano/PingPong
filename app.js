// inserimento degli input
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

//inserimento delle variabili di controllo
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let point1 = 0;
let point2 = 0;
let winningScore = 3;
let gameIsOver = false;
const winningSelector = document.querySelector('#playto');
const reset = document.querySelector('#reset');

const btn = document.getElementById('btn');

player1.addEventListener('click', function() {
    if (!gameIsOver) {
        point1++;
        if (point1 === winningScore) {
            gameIsOver = true;
            score1.classList.add('winner');
            score2.classList.add('loser');
        }
    }
    score1.textContent = point1;
})

player2.addEventListener('click', function() {
    if (!gameIsOver) {
        point2++;
        if (point2 === winningScore) {
            gameIsOver = true;
            score2.classList.add('winner');
            score1.classList.add('loser');
        }
    }
    score2.textContent = point2;
})

if (gameIsOver == true) {
    if (point1 > point2) {
        score1.style.color = 'green';
        score2.style.color = 'red'
    }
}

winningSelector.addEventListener('change', function () {
    if (gameIsOver) {
        gameIsOver = false;
    }
    winningScore = parseInt(this.value);
    start();
})

reset.addEventListener('click', start);

function start () {
    gameIsOver = false;
    point1 = 0;
    score1.textContent = point1;
    point2 = 0;
    score2.textContent = point2;
    score2.classList.remove('winner', 'loser');
    score1.classList.remove('winner', 'loser');
}