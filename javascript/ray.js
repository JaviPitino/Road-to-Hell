class Rayo {
    constructor( posY, posX) {
        this.x = posX;
        this.y = posY;
        this.w = 200;
        this.h = 400;
        this.img = new Image();
        this.img.src = './images/rayo.png';
    }
    drawRayo = () => {
        ctx.drawImage( this.img, this.x, this.y, this.w, this.h );
    };

}