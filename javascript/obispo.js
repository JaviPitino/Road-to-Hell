class Obispo {

    constructor( xParam, srcParam ) {
        this.x = xParam;
        this.y = canvas.height;
        this.w = 70;
        this.h = 120;
        this.img = new Image();
        this.img.src = srcParam;
        this.speed = 5;
    }
    drawObispo = () => {
        ctx.drawImage( this.img, this.x, this.y, this.w, this.h );
    };

    moveObispo = () => {
        this.y = this.y - this.speed;
    }
};
