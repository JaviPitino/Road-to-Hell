class Cura {
    constructor( xParam, srcParam ) {
        this.x = xParam;
        this.y = canvas.height;
        this.w = 60;
        this.h = 90;
        this.img = new Image();
        this.img.src = srcParam;
        this.speed = 2;
    }
    drawCura =  () => {
        ctx.drawImage( this.img, this.x, this.y, this.w, this.h );
    };

    moveCura = () => {
        this.y = this.y - this.speed;
    }

};

