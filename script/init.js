/*
 * desenhar cobrinha
 * definir tamanho do quadro
 * desenhar frutas
 */

var Cenario = {
    mapa_width: 0,
    mapa_height: 0,
    box_tamanho: 25,
    limite_x: null,
    limite_y: null,
    imagem: null,
    canvas: null,
    ctx: null,
    definirMapa: function (canvasNome) {
        Cenario.canvas = document.getElementById(canvasNome);
        Cenario.ctx = Cenario.canvas.getContext("2d");
        Cenario.mapa_height = Cenario.canvas.height;
        Cenario.mapa_width = Cenario.canvas.width;
        Cenario.definirLimitesQuadros();
    },
    definirLimitesQuadros: function () {

        Cenario.limite_x = Math.floor(Cenario.mapa_width / Cenario.box_tamanho);
        Cenario.limite_y = Math.floor(Cenario.mapa_height / Cenario.box_tamanho);
    },
    desenharLinhasMapa: function () {
        if (localStorage.getItem("img_" + Cenario.box_tamanho + "_" + Cenario.limite_x + "_" + Cenario.limite_y) == null) {
            Cenario.ctx.fillStyle = "#ffffff";
            Cenario.ctx.fillRect(0, 0, Cenario.limite_x * Cenario.box_tamanho, Cenario.limite_y * Cenario.box_tamanho);
            Cenario.ctx.beginPath();
            Cenario.ctx.strokeStyle = "hsl(188, 51%, 84%)";
            for (var i = 0; i <= Cenario.limite_x; i++) {
                Cenario.ctx.moveTo(0, i * Cenario.box_tamanho);
                Cenario.ctx.lineTo(Cenario.limite_x * Cenario.box_tamanho, i * Cenario.box_tamanho);
                Cenario.ctx.moveTo(i * Cenario.box_tamanho, 0);
                Cenario.ctx.lineTo(i * Cenario.box_tamanho, Cenario.limite_y * Cenario.box_tamanho);
            }
            Cenario.ctx.moveTo(0, 0);
            Cenario.ctx.stroke();

            var dataURL = Cenario.canvas.toDataURL('image/jpeg', 1.0);
            localStorage.setItem("img_" + Cenario.box_tamanho + "_" + Cenario.limite_x + "_" + Cenario.limite_y, dataURL);
        } else {
            if (Cenario.imagem == null) {
                Cenario.imagem = new Image();
                Cenario.imagem.onload = function () {
                    Cenario.ctx.drawImage(Cenario.imagem, 0, 0, Cenario.limite_x * Cenario.box_tamanho, Cenario.limite_y * Cenario.box_tamanho);
                };
                Cenario.imagem.src = localStorage.getItem("img_" + Cenario.box_tamanho + "_" + Cenario.limite_x + "_" + Cenario.limite_y);
            } else {
                Cenario.ctx.drawImage(Cenario.imagem, 0, 0, Cenario.limite_x * Cenario.box_tamanho, Cenario.limite_y * Cenario.box_tamanho);
            }

        }
    },
    desenharPontuacao: function () {
        Cenario.ctx.beginPath();
        Cenario.ctx.fillStyle = "hsla(100,100%,25%,0.5)";
        Cenario.ctx.font = "20px Andikat";
        Cenario.ctx.fillText("Pontuação", 2, 20);
        Cenario.ctx.fill();
        Cenario.ctx.beginPath();
        Cenario.ctx.fillStyle = "hsla(0,100%,25%,0.5)";
        Cenario.ctx.font = "20px Andikat";
        Cenario.ctx.fillText(Processamento.segmentos, 112, 20);
        Cenario.ctx.fill();
    },
    desenharNivel: function () {
        Cenario.ctx.beginPath();
        Cenario.ctx.fillStyle = "hsla(100,100%,25%,0.5)";
        Cenario.ctx.font = "20px Andikat";
        Cenario.ctx.fillText("Nivel", 2, 45);
        Cenario.ctx.fill();
        Cenario.ctx.beginPath();
        Cenario.ctx.fillStyle = "hsla(0,100%,25%,0.5)";
        Cenario.ctx.font = "20px Andikat";
        Cenario.ctx.fillText(Processamento.nivel, 55, 45);
        Cenario.ctx.fill();
    },
    desenharProximoNivel: function () {
        Cenario.ctx.beginPath();
        Cenario.ctx.fillStyle = "hsla(100,100%,25%,0.5)";
        Cenario.ctx.font = "20px Andikat";
        Cenario.ctx.fillText("Proximo nivel", 2, 70);
        Cenario.ctx.fill();
        Cenario.ctx.beginPath();
        Cenario.ctx.fillStyle = "hsla(0,100%,25%,0.5)";
        Cenario.ctx.font = "20px Andikat";
        Cenario.ctx.fillText(Processamento.nivel * 5, 145, 70);
        Cenario.ctx.fill();
    },
    desenharPonto: function (cor, corLinha, segmento) {

        Cenario.ctx.beginPath();
        Cenario.ctx.fillStyle = cor;
        Cenario.ctx.fillRect(segmento.posicao.x * Cenario.box_tamanho, segmento.posicao.y * Cenario.box_tamanho, Cenario.box_tamanho, Cenario.box_tamanho);
        Cenario.ctx.fill();

        Cenario.ctx.beginPath();
        Cenario.ctx.lineWidth = "2";
        Cenario.ctx.strokeStyle = corLinha;
        Cenario.ctx.rect(segmento.posicao.x * Cenario.box_tamanho, segmento.posicao.y * Cenario.box_tamanho, Cenario.box_tamanho, Cenario.box_tamanho);
        Cenario.ctx.stroke();


    },
    desenharSegmentoPerdido: function (segmento) {
        Cenario.desenharPonto("hsl(0,100%,55%)", "hsl(0,100%,70%)", segmento);
    },
    desenharSegmento: function (segmento) {
        Cenario.desenharPonto("hsl(220,100%,55%)", "hsl(220,100%,70%)", segmento);
    },
    desenharComida: function (comida) {
        Cenario.desenharPonto("hsl(120,100%,55%)", "hsl(120,100%,70%)", comida);
    },
    desenharListaSegmentos: function (lSegmento, perdeu) {
        var total = lSegmento.length;
        for (var i = 0; i < total; i++) {
            if (perdeu) {
                Cenario.desenharSegmentoPerdido(lSegmento[i]);
            } else {
                Cenario.desenharSegmento(lSegmento[i]);
            }
        }
    }
};

var Processamento = {
    nome:"",
    corpo: null,
    segmentos: 3,
    direcaoExecutada: false,
    perdeu: false,
    velocidade: 200,
    nivel: 1,
    comida: null,
    listaMovimento: [],
    zerar:function(){
        Processamento.segmentos = 3;
        Processamento.velocidade = 200;
        Processamento.nivel = 1;
        Processamento.perdeu = false;
        Processamento.direcaoExecutada = false;
        Processamento.corpo = null;
        Processamento.comida = null;
        Processamento.listaMovimento = [];
    },
    iniciar: function (ponto_inicial_x, ponto_inicial_y) {
        Processamento.corpo = new Corpo();
        Processamento.corpo = ManipularDirecao.adicionarDirecaoDetalhada(Processamento.corpo, 1, 0);
        Processamento.processarCorpoInicial(ponto_inicial_x, ponto_inicial_y);
    },
    processarCorpoInicial: function (ponto_inicial_x, ponto_inicial_y) {
        var tSegmento = ManipularCorpo.criarSegmento(ponto_inicial_x, ponto_inicial_y);
        Processamento.corpo = ManipularCorpo.adicionarSegmento(Processamento.corpo, tSegmento);

        for (var i = 0; i < Processamento.segmentos - 1; i++) {
            Processamento.corpo = ManipularCorpo.adicionarUltimoSegmento(Processamento.corpo);
        }

    },
    aumentarNivel: function () {

        if (Processamento.segmentos >= Processamento.nivel * 5) {
            Processamento.nivel++;
        }
    },
    getVelocidade: function () {
        return Processamento.velocidade - (Processamento.nivel * 10);
    },
    padronizaInteracaoTablet: function (numero) {

    },
    padronizaInteracaoTeclado: function (numero) {

        //37 esquerda
        //38 cima
        //39 direta
        //40 baixo
        switch (numero) {
            case 37:
                return new Direcao(-1, 0);
                break;
            case 38:
                return new Direcao(0, -1);
                break;
            case 39:
                return new Direcao(1, 0);
                break;
            case 40:
                return new Direcao(0, 1);
                break;
            default:
                return false;
                break;
        }
    },
    buscarProximoMovimento: function () {

        if (typeof Processamento.listaMovimento[0] == 'undefined') {
            return false;
        }
        for (var i in Processamento.listaMovimento) {
            var direcao = Processamento.listaMovimento[i];
            var resultado = ManipularDirecao.validarDirecao(Processamento.corpo, direcao.x, direcao.y);
            Processamento.listaMovimento.shift();
            if (resultado) {
                return direcao;
            }
        }
        return false;
    },
    adicionaMovimentoFila: function (direcao) {
        //adicionado o os movimentos em menos de 200 milisegundos , registrar os movimentos diferentes

        Processamento.listaMovimento.push(direcao);
    },
    movimentacaoCursor: function (direcao) {
        var resultado = ManipularDirecao.validarDirecao(Processamento.corpo, direcao.x, direcao.y);

       // if (resultado) {
            Processamento.adicionaMovimentoFila(direcao);
       // }
        //  if (resultado && Processamento.direcaoExecutada) {
        //       Processamento.direcaoExecutada = false;
        //      Processamento.corpo = ManipularDirecao.adicionarDirecao(Processamento.corpo, direcao);
        //   }
    },
    processarMovimentacaoCorpo: function () {
        var direcao = Processamento.buscarProximoMovimento();
        if (direcao != false) {
            Processamento.corpo = ManipularDirecao.adicionarDirecao(Processamento.corpo, direcao);
        }
        Processamento.corpo = ManipularCorpo.processarDirecao(Processamento.corpo);
        Processamento.direcaoExecutada = true;
    },
    verificarPerdeu: function () {
        if (Colisor.checarColisaoMapa(Processamento.corpo, 0, 0, Cenario.limite_x, Cenario.limite_y)) {
            Processamento.perdeu = true;
        }
        if (Colisor.checarColisaoCorpo(Processamento.corpo)) {
            Processamento.perdeu = true;
        }
    },
    verificarPegouComida: function () {
        if (Colisor.checarColisaoComida(Processamento.corpo, Processamento.comida)) {
            Processamento.corpo = ManipularCorpo.adicionarUltimoSegmento(Processamento.corpo);
            Processamento.segmentos++;
            Processamento.aumentarNivel();
            Processamento.comida = null;
        }
    },
    gerarNumero: function (min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    },
    sortearPosicaoComidaValida: function () {
        var comida = null;
        var valido = false;
        do {
            var x = Processamento.gerarNumero(0, Cenario.limite_x - 1);
            var y = Processamento.gerarNumero(0, Cenario.limite_y - 1);
            var comida = MonipularComida.criarComida("fruta", x, y);
            var resultado = Colisor.checarColisaoComidaCorpo(Processamento.corpo, comida);
            if (resultado == false) {
                valido = true;
            }
        } while (valido == false);
        return comida;
    },
    adicionarAlimento: function () {
        if (Processamento.comida == null) {
            Processamento.comida = Processamento.sortearPosicaoComidaValida();

        }
//        console.log(Processamento.comida.posicao)
    },
    gerenciadorAnimacao: function () {

        Cenario.desenharLinhasMapa();
        if (Processamento.perdeu == false) {
            Processamento.processarMovimentacaoCorpo();
            Processamento.verificarPerdeu();
            Processamento.adicionarAlimento();
            Cenario.desenharComida(Processamento.comida);
            Processamento.verificarPegouComida();
        }
        Cenario.desenharListaSegmentos(Processamento.corpo.lSegmento, Processamento.perdeu);
        Cenario.desenharPontuacao();
        Cenario.desenharNivel();
        Cenario.desenharProximoNivel();

    }
};
