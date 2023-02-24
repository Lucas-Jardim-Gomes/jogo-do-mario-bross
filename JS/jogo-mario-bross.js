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

        window.addEventListener("load",iniciar); */
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
        