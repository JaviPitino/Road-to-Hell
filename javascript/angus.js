class Angus {
    constructor() {
        this.x = 280;
        this.y = 250;
        this.w = 80; 
        this.h = 100;
        this.img = new Image();
        this.img.src = './images/angus-funko.png';
        this.speed = 2;
        this.moveSpeed = 10;
    }

    // METODOS
    drawAngus = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    // Metodo para que Angus tenga gravedad
    gravityAngus = () => {
        this.y = this.y - this.speed;
    }    
    // Metodo para que Angus pierda gravedad

    // Metodo para que Angus se mueva hacia los lados
    moveLeft = () => {
        this.x = this.x - this.moveSpeed;
    }
    moveRight = () => {
        this.x = this.x + this.moveSpeed;
    }
    moveDown = () => {
        this.y = this.y + this.moveSpeed * 2;
    }
    moveDown2 = () => {
        this.y = this.y + this.moveSpeed * 10;
    }
};


