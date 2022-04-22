// Variables GLOBALES
const startBtn = document.querySelector(".btn-bg");
const startScreen = document.querySelector('#splash-screen');
const gameOverScreen = document.querySelector('#gameover-screen');
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d")

let game;


// FUNCIONALIDAD
const startGame = () => {
    console.log('funcionando')
    startScreen.style.display = 'none';
    canvas.style.display = 'block';
    gameOverScreen.style.display = 'none';

    game = new Game();

    game.gameLoop()

};


// ADD EVENT LISTENERS
startBtn.addEventListener( 'click', startGame );




