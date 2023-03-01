class Sprite {
    constructor(image) {
        //Atributos
        this.image = image;
        this.srcX = this.srcY = 0;
        this.width = image.width;
        this.height = image.height;
        this.posX = this.posY = 0;
        //Metodo
        this.draw = function (ctx) {
            ctx.drawImage(this.image, this.srcX, this.srcY, this.width, this.height, this.posX.this.posY, this.width, thist.height);

    
        }
    }
}
