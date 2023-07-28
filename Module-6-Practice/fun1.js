// Function Expression...

const btnFun = document.getElementById('btn');

var startGame = function start() {
    console.log('Game is starting...');
};

btnFun.addEventListener('click', startGame);
