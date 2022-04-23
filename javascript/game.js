class Game {

    constructor() {
        this.bg = new Image(); // crear la propiedad
        this.bg.src = "./images/bg.png";
        this.angus = new Angus();
        this.isGameOn = true;
    } 

    upGameOver = () => {
        if ( this.angus.y + this.angus.h <= 0 ) {
            this.isGameOn = false;
            canvas.style.display = "none";
            // 3. la pantalla final aparece
            gameOverScreen.style.display = "flex";
        } 
    }


    gameLoop = () => {

    // 1. Borrar el canvas
    ctx.clearRect( 0, 0, canvas.width, canvas.height );

    // 2. Acciones o movimientos
    this.angus.gravityAngus();
    this.upGameOver();


    // 3. Dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
    this.angus.drawAngus();

    // 4. Control y Recursion
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop)
      }
    }
}