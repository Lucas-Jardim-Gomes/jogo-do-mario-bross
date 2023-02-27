var altura = 0
var largura = 0
function ajustaTamanhoPalcoJogo(){
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


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
