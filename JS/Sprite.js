class Sprite {
    constructor(img) {
        //Atributos
        this.img = img;
        this.srcX = this.srcY = 0;
        this.width = img.width;
        this.height = img.height;
        this.posX = this.posY = 0;
        //Metodo
        this.draw = function (ctx) {
            ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX.this.posY, this.width, thist.height);

    
        }
    }
}
