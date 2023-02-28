function Sprite(img){
    // Atributos
    this.mvRight = this.mvLeft = this.mvUp =this.mvDown = false;
    this.srcX = this.srcY = 0;
    this.width = 24;
    this.height = 32;
    this.posX = this.posY = 0;
    this.img = img;
    this.speed = 1.5;
    //L 39,2 A 36,75
    // Métodos
    //Desenha
    this.draw = function(ctx){
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height, this.posX.this.posY,this.width,this.height);
    }
    //Move
    this.move = function(){
        if(this.mvRight){
            this.posX += this.speed;
            this.srcY = this.height * 3
        }

    }
}