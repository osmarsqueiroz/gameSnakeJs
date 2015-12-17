var Comida = function (pNome) {
    this.nome = pNome;
    this.posicao = null;
};

var Posicao = function (posicao_x, posicao_y) {
    this.x = posicao_x || 0;
    this.y = posicao_y || 0;
};

var Direcao = function (direcao_x, direcao_y) {
    this.x = direcao_x || 0; /* -1 0 +1*/
    this.y = direcao_y || 0;/* -1 0 +1*/
};

var Segmento = function () {
    this.posicao = null;
    this.direcao = null;
};
var Corpo = function () {
    this.lSegmento = [];
    this.valor = 0;
};

var MonipularCorpo = {
    adicionarSegmento: function (pCorpo, pSegmento) {
        pCorpo.lSegmento.push(pSegmento);
        return pCorpo;
    }
};

var MonipularComida = {
    criarComida: function (nome, posicao_x, posicao_y) {
        var comida = new Comida(nome);
        var posicao = new Posicao(posicao_x, posicao_y);
        comida = ManipularPosicao.adicionarPosicao(comida, posicao);
        return comida;
    }
}

var ManipularPosicao = {
    adicionarPosicao: function (pObjeto, pPosicao) {
        pObjeto.posicao = pPosicao;
        return pObjeto;
    }
};
var ManipularDirecao = {
    adicionarDirecao: function (pSegmento, pDirecao) {
        pSegmento.direcao = pDirecao;
        return pSegmento;
    }
};

var ManipularCorpo = {
    adicionarSegmento: function (pCorpo, pSegmento) {
        pCorpo.lSegmento.push(pSegmento);
        return pCorpo;
    },
    totalSegmento: function (pCorpo) {
        return pCorpo.lSegmento.length;
    },
    adicionarComidaCorpo: function (pCorpo, pComida) {
//precisa adicionara ultima posicao do array
        var tmp_segmento = new Segmento();
        tmp_segmento = ManipularPosicao.adicionarPosicao(tmp_segmento,pComida.posicao)

        pCorpo = ManipularCorpo.adicionarSegmento(pCorpo,tmp_segmento);
        return pCorpo;
    },
    processarDirecao: function (pCorpo) {

        var lista = pCorpo.lSegmento;
        var total = lista.length;
        for (var i = total; i > 0; i--) {
            var ponteiro = 0;
            if (i > 0) {
                ponteiro = i--;
            }

            var direcao = lista[ponteiro].direcao;
            var posicao = lista[i].posicao;

            posicao.x = posicao.x + (direcao.x);
            posicao.y = posicao.y + (direcao.y);

            lista[i].direcao = lista[ponteiro].direcao;
            lista[i].posicao = posicao;
        }
        pCorpo.lSegmento = lista;
        return pCorpo;
    }
    //adicionar mais segnemtos, calcular nova posicao dos segmentos, mudar direcao dos segmentos a cada movimento
};

