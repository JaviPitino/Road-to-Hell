class Angus {
    constructor() {
        this.x = 280;
        this.y = 250;
        this.w = 90; 
        this.h = 120;
        this.img = new Image();
        this.img.src = './images/angus-funko3.png';
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

    // Moviemiento de Angus
    moveAngus = ( event ) => {
        if ( event.code === 'ArrowLeft' && this.x > 0 ) {
            this.x = this.x - this.moveSpeed;
        } else if ( event.code === 'ArrowRight' && this.x < canvas.width - this.w) {
            this.x = this.x + this.moveSpeed;
        } else if ( event.code === 'ArrowDown' && this.y < canvas.height - this.h ) {
            this.y = this.y + this.moveSpeed * 2;
        } else if ( event.code === 'Space' && this.y < canvas.height - this.h ) {
            this.y = this.y + this.moveSpeed * 10;
        }
    };

    
};


