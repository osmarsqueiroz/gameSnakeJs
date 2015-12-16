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
    }
    //adicionar mais segnemtos, calcular nova posicao dos segmentos, mudar direcao dos segmentos a cada movimento
};

