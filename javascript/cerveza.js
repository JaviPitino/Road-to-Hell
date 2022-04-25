class Beer {
    constructor( xParam, srcParam ) {
        this.x = xParam;
        this.y = canvas.height;
        this.w = 30;
        this.h = 35;
        this.img = new Image();
        this.img.src = srcParam;
        this.speed = 3;

    }
    drawBeer = () => {
        // this.timer = setTimeout( this.beer, 50000 )
        ctx.drawImage( this.img, this.x, this.y, this.w, this.h )
    };

    moveBeer = () => {
        this.y = this.y - this.speed;
    }
};