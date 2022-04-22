class Game {
    constructor() {
        this.isGameOn = true;
    } 

    gameLoop = () => {

    // 1. Borrar el canvas
    ctx.clearRect( 0, 0, canvas.width, canvas.height );

    // 2. Acciones o movimientos

    // 3. Dibujar los elementos

    // 4. Control y Recursion
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop)
      }
    }
}