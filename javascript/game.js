class Game {

    constructor() {
        this.bg = new Image(); // crear la propiedad
        this.bg.src = "./images/roadbg.png";
        this.angus = new Angus();
        this.isGameOn = true;
        this.logo = new Image();
        this.logo.src = "../images/logo-peque.png";
        this.curaArr = [ new Cura( 400, './images/cura.png' ) ];
        this.beerArr = [ new Beer( 300, './images/beer.png' ) ];
        this.obispoArr = [ new Obispo( 300, './images/obispo.png' ) ]
        this.remove;
        this.score = 0;
        this.randomCura;
        this.randomBeer;
        this.randomObispo;
        this.nuevoCura = 0;
        this.newBeer = 0;
    };
  
    addNewCuras = () => {
        if (this.curaArr[this.curaArr.length - 1].y < 560 ) {

            // Deberia aparecer
            this.randomCura = Math.random() * 500;
            this.nuevoCura = new Cura( this.randomCura, './images/cura.png' );
            this.curaArr.push(this.nuevoCura);
        }
    };

    addNewBeer = () => {
        if (this.beerArr.length === 0 || this.beerArr[this.beerArr.length -1].y < 550 ) {
            this.randomBeer = Math.random() * 650;
            this.newBeer = new Beer( this.randomBeer, './images/beer.png' );
            this.beerArr.push(this.newBeer);
        }
    };

    addNewObispo = () => {
        if ( this.obispoArr[this.obispoArr.length - 1].y < -400 ) {
            this.randomObispo = Math.random() * 500;
            this.newObispo = new Obispo( this.randomObispo, './images/obispo.png' );
            this.obispoArr.push( this.newObispo )
        }
    }

    collisionCura = () => {
        this.curaArr.forEach((eachCura) => {
            if (this.angus.x < eachCura.x + eachCura.w &&
                this.angus.x + this.angus.w > eachCura.x &&
                this.angus.y < eachCura.y + eachCura.h &&
                this.angus.h + this.angus.y > eachCura.y) {
            
            this.remove = this.curaArr.indexOf(eachCura);
            this.curaArr.splice( this.remove, 1 );

            this.isGameOn = true;
            canvas.style.display = "block";
            
            this.score = this.score - 20;        
               
              } else if ( this.score < 0 ) {
                // finalizar el juego
                // 1. el juego se detiene
                this.isGameOn = false;
                // 2. el canvas desaparece
                canvas.style.display = "none";
                // 3. la pantalla final aparece
                gameOverScreen.style.display = "flex";

              }
        })
    };

    collisionBeer = () => {
        
        this.beerArr.forEach((eachBeer) => {
            if (this.angus.x < eachBeer.x + eachBeer.w &&
                this.angus.x + this.angus.w > eachBeer.x &&
                this.angus.y < eachBeer.y + eachBeer.h &&
                this.angus.h + this.angus.y > eachBeer.y) {
            
                    
            this.remove = this.beerArr.indexOf(eachBeer);
            this.beerArr.splice( this.remove, 1 );

            this.isGameOn = true;
            canvas.style.display = "block";
            this.score = this.score + 20;
        
            }
        });
    };



    upGameOver = () => {
        if ( this.angus.y + this.angus.h <= 0 ) {
            this.isGameOn = false;
            canvas.style.display = "none";
            // 3. la pantalla final aparece
            gameOverScreen.style.display = "flex";
        } 
    };


    gameLoop = () => {

    // 1. Borrar el canvas
    ctx.clearRect( 0, 0, canvas.width, canvas.height );

    // 2. Acciones o movimientos
    this.angus.gravityAngus();
    this.addNewBeer();
    this.addNewCuras();
    this.upGameOver();
    this.collisionCura();
    this.collisionBeer();
    this.addNewObispo();

    // Mover curas
    this.curaArr.forEach((eachCura) => {
        eachCura.moveCura()
    });

    // Mover Cervezas
    this.beerArr.forEach((eachBeer) => {
        eachBeer.moveBeer()
    });

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
    ctx.strokeText( this.score, 580, 50 );
    
    ctx.closePath();
   
    // Dibujar Curas
    this.curaArr.forEach((eachCura) => {
        eachCura.drawCura();
    });

    //Dibujar Cerveza
    this.beerArr.forEach((eachBeer) => {
        eachBeer.drawBeer();
    });
    

    // 4. Control y Recursion
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop)
      }
    }
}