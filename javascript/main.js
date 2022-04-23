// Variables GLOBALES
const startBtn = document.querySelector(".btn-bg");
const restartBtn = document.querySelector('#restart-btn')
const startScreen = document.querySelector('#splash-screen');
const gameOverScreen = document.querySelector('#gameover-screen');
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d")

let game;


// FUNCIONALIDAD
const startGame = () => {
    // console.log("iniciando juego")
    startScreen.style.display = "none"; // para el inicio del juego
    gameOverScreen.style.display = "none"; // esto para reiniciar el juego
    canvas.style.display = "block";
  
    game = new Game() // crear un juego
    // console.log(game) 
    
    game.gameLoop(); // iniciar el loop del nuevo juego
}

// MOVIMIENTOS isquiera y derecha
const pressIzq = (event) => {
    if ( event.code === 'ArrowLeft' ) {
    game.angus.moveLeft();
    }
}

const pressDer = (event) => {
    if (event.code === 'ArrowRight') {
    game.angus.moveRight();
    }
};

const pressDown = (event) => {
    if ( event.code === 'ArrowDown') {
        game.angus.moveDown();
    }
};

const pressDown2 = (event) => {
    if ( event.code === 'Space') {
        game.angus.moveDown2();
    }    
};


// ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

window.addEventListener('keydown', pressIzq );
window.addEventListener('keydown', pressDer );
window.addEventListener('keydown', pressDown ); 
window.addEventListener('keydown', pressDown2 ); 




