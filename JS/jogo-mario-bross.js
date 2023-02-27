/*  var direita ;
 var esquerda;
 var velocidade;
 var objeto;
 var tempo;
 function iniciar(){
     direita=0;
     esquerda=0;
     velocidade= 10;
     objeto = document.getElementsById('mario-gif');
     document.addEventListener("keydown", 0);
     document.addEventListener("keyup", 0);
     tempo = setInterval(0, 20);
 }

 window.addEventListener("load",iniciar);
 var canva = document.querySelector ("canvas");
 var contexto = canva.getContext("2d");
 var cenario = new Image();
 function IniciarJogo(){
     cenario.src = "../imagens/SNES - Super Mario World - Yoshis Island 1.png"
     CriaCenario();
 }

 function CriaCenario(){
     requestAnimationFrame(CriaCenario);
     canva.drawImage(cenario,0,0,800,600);
 }

 CriaCenario();
  */


/*
var x = 0
var y = 0
window.addEventListener("keydown", function(event) {
    var tecla = event.keyCode
if ( tecla == "39") { 
    x = x + 5
this.document.getElementById("cenario").style.left=x+"px"
}
if ( tecla == "37") { 
    x = x - 5
this.document.getElementById("cenario").style.left=x+"px"
}
})


(function() {
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');

    //recursos do jogo
    //var cenario = new Image();
    //cenario.src = "cenario1-mario.png"
    const cenario = new Image(); // Image constructor
cenario.src = 'cenario-mario.png';

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        render();
    }

    function update(){

    }

    function render(){
        ctx.drawImage(cenario,0,0,5120,432,0,0,5120,432);
    }

    loop();
}());
*/

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
