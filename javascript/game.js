class Game {

    constructor() {
        this.bg = new Image(); // crear la propiedad
        this.bg.src = "./images/bg.png";
        this.angus = new Angus();
        this.isGameOn = true;
        this.logo = new Image();
        this.logo.src = "../images/logo-peque.png";
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
   

    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.angus.drawAngus();
    ctx.beginPath();
    ctx.drawImage(this.logo, 20, 20, 100, 60);
    ctx.fillStyle = '#eab202';
    ctx.fillRect( 480, 30, 130, 30 );
    ctx.lineWidth = 6;
    ctx.strokeRect(480, 30, 130, 30 );
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // ctx.font('bold 8px arial')
    ctx.strokeText( 'SCORE', 500, 50 );
    ctx.strokeText( '0', 590, 50 );
    
    
    ctx.closePath();
   
    // ctx.fillText( 'SCORE', 500, 50 );
    
    

    // 4. Control y Recursion
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop)
      }
    }
}