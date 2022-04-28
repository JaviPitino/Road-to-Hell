class Game {
  constructor() {
    this.bg = new Image(); // crear la propiedad
    this.bg.src = "./images/roadbg.png";
    this.angus = new Angus();
    this.fire = new Image();
    this.fire.src = "./images/fire.png";
    this.logo = new Image();
    this.logo.src = "./images/logo-peque.png";
    this.curaArr = [new Cura(400, "./images/cura.png")];
    this.beerArr = [new Beer(300, "./images/beer.png")];
    this.obispoArr = [new Obispo( canvas.width, "./images/obispo.png" )];
    this.rayo;
    this.isGameOn = true;
    this.score = 100;
    this.randomCura;
    this.randomBeer;
    this.randomObispo;
    this.nuevoCura = 0;
    this.newBeer = 0;
    this.thunder = new Audio('./sounds/thunder.mp3')
  }

  // NUEVOS ELEMENTOS
  // DIBUJAR RAYO
  addNewRayo = () => {

        if ( this.score % 200 === 0 && this.rayo === undefined ) {
            
            this.rayo = new Rayo( 170, 250 );
            this.thunder.play();
            this.thunder.volume = 0.4;
            this.score += 25;
            setTimeout(() => {

                this.rayo = undefined;
                this.curaArr.splice(0, this.curaArr.length);
                this.obispoArr.splice(0, this.obispoArr.length);

            }, 800);
        // } 
        }

  }


  addNewCuras = () => {
    if (
      this.curaArr.length === 0 ||
      this.curaArr[this.curaArr.length - 1].y < 450
    ) {
      this.randomCura = Math.random() * 620;
      this.nuevoCura = new Cura(this.randomCura, "./images/cura.png");
      this.curaArr.push(this.nuevoCura);
    }
  };

  addNewBeer = () => {
    if (
      this.beerArr.length === 0 ||
      this.beerArr[this.beerArr.length - 1].y < 550
    ) {
      this.randomBeer = Math.random() * 620;
      this.newBeer = new Beer(this.randomBeer, "./images/beer.png");
      this.beerArr.push(this.newBeer);
    }
  };

  addNewObispo = () => {
    if ( this.obispoArr.length === 0 || this.obispoArr[this.obispoArr.length - 1].y < -450) {
      this.randomObispo = Math.random() * 650;
      this.newObispo = new Obispo(this.randomObispo, "./images/obispo.png");
      this.obispoArr.push(this.newObispo);
    }
  };


  // COLISIONES
  collisionCura = () => {
    this.curaArr.forEach((eachCura, index) => {
      if (
        this.angus.x < eachCura.x + eachCura.w &&
        this.angus.x + this.angus.w > eachCura.x &&
        this.angus.y < eachCura.y + eachCura.h &&
        this.angus.h + this.angus.y > eachCura.y
      ) {

        this.curaArr.splice(index, 1);

        this.isGameOn = true;
        canvas.style.display = "block";

        this.score = this.score - 50;
      } else if (this.score < 0) {
        // finalizar el juego
        // 1. el juego se detiene
        this.isGameOn = false;
        // 2. el canvas desaparece
        canvas.style.display = "none";
        // 3. la pantalla final aparece
        gameOverScreen.style.display = "flex";
        puntosScreen.innerText = `${inputName()}, has muerto por empacho de curas!`;
      }
    });
  };

  collisionObispo = () => {
    this.obispoArr.forEach((eachObispo) => {
      if (
        this.angus.x < eachObispo.x + eachObispo.w &&
        this.angus.x + this.angus.w > eachObispo.x &&
        this.angus.y < eachObispo.y + eachObispo.h &&
        this.angus.h + this.angus.y > eachObispo.y
      ) {
        // GAME OVER
        // 1. el juego se detiene
        this.isGameOn = false;
        // 2. el canvas desaparece
        canvas.style.display = "none";
        // 3. la pantalla final aparece
        gameOverScreen.style.display = "flex";
        puntosScreen.innerText = `${inputName()}, your score is: ${this.score}`;
      }
    });
  };

  collisionBeer = () => {
    this.beerArr.forEach((eachBeer, index) => {
      if (
        this.angus.x < eachBeer.x + eachBeer.w &&
        this.angus.x + this.angus.w > eachBeer.x &&
        this.angus.y < eachBeer.y + eachBeer.h &&
        this.angus.h + this.angus.y > eachBeer.y
      ) {
        this.beerArr.splice(index, 1);

        this.isGameOn = true;
        canvas.style.display = "block";
        this.score = this.score + 25;
      }
    });
  };

  // GAME OVER CIELO
  upGameOver = () => {
    if (this.angus.y + this.angus.h <= 0) {
      this.isGameOn = false;
      canvas.style.display = "none";
      // 3. la pantalla final aparece
      gameOverScreen.style.display = "flex";
      puntosScreen.innerText = `${inputName()}, El cielo no es buen sitio para tí`;
    }
  };

  // SUBIR lA DIFICULTAD
  subirNivel = () => {
    if (this.score >= 500) {
        this.curaArr.forEach((eachElem) => {
            eachElem.speed = 9;
        });
        this.obispoArr.forEach((eachElem) => {
            eachElem.speed = 10;
        });
    } else if ( this.score >= 400 ) {
        this.curaArr.forEach((eachElem) => {
            eachElem.speed = 7;
        });
        this.obispoArr.forEach((eachElem) => {
            eachElem.speed = 9;
        });
    } else if ( this.score >= 300 ) {
        this.curaArr.forEach((eachElem) => {
            eachElem.speed = 5;
        });
        this.obispoArr.forEach((eachElem) => {
            eachElem.speed = 7;
        });
    } else if ( this.score >= 200 ) {
        this.curaArr.forEach((eachElem) => {
            eachElem.speed = 4;
        });
        this.obispoArr.forEach((eachElem) => {
            eachElem.speed = 5;
        });
    }
  };

  gameLoop = () => {
    // 1. Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Acciones o movimientos
    this.angus.gravityAngus();
    this.addNewBeer();
    this.addNewCuras();
    this.upGameOver();
    this.collisionCura();
    this.collisionBeer();
    this.collisionObispo();
    this.addNewObispo();
    this.subirNivel();
    
    this.addNewRayo();
    
   
// MOVIMIENTOS
    // if ( this.rayo !== undefined ) {
    //     this.rayo.moveRayo();
    // }
    
    

    // Mover curas
    this.curaArr.forEach((eachCura) => {
      eachCura.moveCura();
    });

    // Mover Cervezas
    this.beerArr.forEach((eachBeer) => {
      eachBeer.moveBeer();
    });

    // Mover obispo
    this.obispoArr.forEach((eachObispo) => {
      eachObispo.moveObispo();
    });



    // 3. Dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    this.angus.drawAngus();

    ctx.beginPath();
    ctx.drawImage(this.logo, 20, 20, 100, 60);

    ctx.fillStyle = "#eab202";
    ctx.fillRect(480, 30, 130, 30);
    ctx.lineWidth = 6;
    ctx.strokeRect(480, 30, 130, 30);

    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.closePath();

    // Dibujar Curas
    this.curaArr.forEach((eachCura) => {
      eachCura.drawCura();
    });

    // Dibujar Cervezas
    this.beerArr.forEach((eachBeer) => {
      eachBeer.drawBeer();
    });

    this.obispoArr.forEach((eachObispo) => {
      eachObispo.drawObispo();
    });

    // Dibujar Rayo
    if ( this.rayo !== undefined ) {
        this.rayo.drawRayo();
    };

    // Dibujar Score
    ctx.strokeText("EVIL LEVEL:", 500, 50);
    ctx.strokeText(this.score, 580, 50);
    
    // Dibuje el fuego
    ctx.drawImage(this.fire, 0, 690, canvas.width, 60);

    // 4. Control y Recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
