class Rayo {
    constructor( posY, posX) {
        this.x = posX;
        this.y = posY;
        this.w = 20;
        this.h = 60;
        this.img = new Image();
        this.img.src = './images/rayo.png';
        this.speed = 10;
    }
    drawRayo = () => {
        ctx.drawImage( this.img, this.x, this.y, this.w, this.h );
    };

    moveRayo = () => {
        this.y = this.y + this.speed;
    }
}