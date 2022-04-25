// Variables GLOBALES
const startBtn = document.querySelector(".btn-bg");
const restartBtn = document.querySelector('#restart-btn');
const splashScreen = document.querySelector('#pantalla-inicio');
const startScreen = document.querySelector('#splash-screen');
const gameOverScreen = document.querySelector('#gameover-screen');
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d")

let game;

const firstScreen = () => {
    startScreen.style.display = 'block'
    gameOverScreen.style.display = 'none';
}

// FUNCIONALIDAD
const startGame = () => {
    // console.log("iniciando juego")
    startScreen.style.display = "none"; // para el inicio del juego
    gameOverScreen.style.display = "none"; // esto para reiniciar el juego
    canvas.style.display = "block";

    // 1. borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  
    game = new Game() // crea el juego
    // console.log(game) 
    
    game.gameLoop(); // iniciar el loop del nuevo juego
}

// MOVIMIENTOS Izquierda y derecha
const pressMoveAngus = (event) => {
    game.angus.moveAngus(event);
};

// ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
splashScreen.addEventListener( 'click', firstScreen );
window.addEventListener('keydown', pressMoveAngus );





