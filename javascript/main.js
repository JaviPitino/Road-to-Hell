// Variables GLOBALES
const startBtn = document.querySelector(".btn-bg");
const restartBtn = document.querySelector('#restart-btn');
const splashScreen = document.querySelector('#pantalla-inicio');
const startScreen = document.querySelector('#splash-screen');
const gameOverScreen = document.querySelector('#gameover-screen');
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const puntosScreen = document.querySelector('#puntos');
const audio = new Audio('./sounds/highway-hell2.mp3');


let game;

// Capturar el nombre
const inputName = () => {
    let placeholder = document.querySelector('#name').value;

    if ( !placeholder ) {
        placeholder = 'Satán';
    } 
    return placeholder;
};

const resetName = () => {
    let valorName = document.querySelector('#name');
    valorName.value = '';
}

const firstScreen = () => {
    startScreen.style.display = 'block';
    gameOverScreen.style.display = 'none';
    audio.pause();
    resetName();
};

// FUNCIONALIDAD
const startGame = () => {
    
    // Valor del nombre
    startScreen.style.display = "none"; // para el inicio del juego
    gameOverScreen.style.display = "none"; // esto para reiniciar el juego
    canvas.style.display = "block";

    // 1. borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    inputName();
    game = new Game() // crea el juego
    

    game.gameLoop(); // iniciar el loop del nuevo juego

    // Audio
    audio.play();
    audio.volume = 0.1;
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





