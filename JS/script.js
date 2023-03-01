window.onload = function(){ 
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    var spriteSheet = new Image();
    spriteSheet.src = "./imagens/mario.png";
    var mario = new Sprite(spriteSheet);


    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);

    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                mario.mvRight = true;
                mario.mvLeft = false;
                mario.mvUp = false;
                mario.mvDown = false;
                break;
            case LEFT:
                mario.mvRight = false;
                mario.mvLeft = true;
                mario.mvUp = false;
                mario.mvDown = false;
                break;
            case UP:
                mario.mvRight = false;
                mario.mvLeft = false;
                mario.mvUp = true;
                mario.mvDown = false;
                break;
            case DOWN:
                mario.mvRight = false;
                mario.mvLeft = false;
                mario.mvUp = false;
                mario.mvDown = true;
                break;
            
        }
    }
    }
 function keyupHandler(e){
    switch(e.keyCode){
        case RIGHT:
            mario.mvRight = false
        break;
        case LEFT:
            mario.mvLeft = false
            break;
        case UP:
            mario.mvUp = false
        break;
        case DOWN:
            mario.mvDown = false
        break;

    }
 }
    spriteSheet.onload = function(){
        inicializacao();
    }

    function inicializacao(){
        loop();
    }
    function update(){

    }
    function draw(){
        mario.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        draw();

    }
   
    /*
var altura = 0
var largura = 0
function ajustaTamanhoPalcoJogo(){
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

*/


/*

const WIDTH = 600;
const HEIGHT = 400;

var cam = {
    x: 0,
    y: 0,
    width: WIDTH,
    height: HEIGHT,
    innerLeftBoundary: function(){
        return this.x + (this.width*0.25);
    },

    innerRightBoundary: function(){
        return this.x + (this.width*0.75);
    },
    
}


// na parte de update você adiciona isso abaixo do bloqueio de objetos
if(player.x < cam.innerLeftBoundary()){
    cam.x = player.x - (cam.width * 0.25);
}

if(player.x < cam.innerRightBoundary()){
    cam.x = player.x + player.width - (cam.width * 0.75);
}


// na função de rederização você adiciona isso depois de ctx.save();
ctx.save();
ctx.translate(-cam.x,-cam.y);

*/
