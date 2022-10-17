// inserimento degli input
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

//inserimento delle variabili di controllo
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let point1 = 0;
let point2 = 0;
let winningScore = 5;
let gameIsOver = false;

const btn = document.getElementById('btn');

player1.addEventListener('click', function() {
    if (!gameIsOver) {
        point1++;
        if (point1 === winningScore) {
            gameIsOver = true;
        }
    }
    score1.textContent = point1;
})

player2.addEventListener('click', function() {
    if (!gameIsOver) {
        point2++;
        if (point2 === winningScore) {
            gameIsOver = true;
        }
    }
    score2.textContent = point2;
})

if (point1 === 1) {
    const winner = document.createElement("h1");
    const node = document.createTextNode("The winner is player 1!");

    winner.appendChild(node);
    document.body.appendChild(winner);
}