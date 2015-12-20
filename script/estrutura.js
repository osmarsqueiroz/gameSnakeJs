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
    this.direcao = null;

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
    adicionarDirecaoDetalhada: function (pSegmento, x, y) {
        pSegmento = ManipularDirecao.adicionarDirecao(pSegmento, new Direcao(x, y))
        return pSegmento;
    },
    adicionarDirecao: function (pSegmento, pDirecao) {
        pSegmento.direcao = pDirecao;
        return pSegmento;
    },
    inverterDirecao: function (pSegmento) {
        var direcao = pSegmento.direcao;
        if (direcao.x != 0) {
            direcao.x = direcao.x * (-1);
        }

        if (direcao.y != 0) {
            direcao.y = direcao.y * (-1);
        }
        pSegmento.direcao = direcao;
        return pSegmento;
    },
    validarDirecao: function (pSegmento, direcao_x, direcao_y) {
        var base_x = pSegmento.direcao.x;
        var base_y = pSegmento.direcao.y;
        /*
         * x 1 != -1
         * x -1 != 1
         */

        if (direcao_x != 0 && base_y != 0) {
            if (direcao_x == 1 && base_x == 0 ||
                    direcao_x == -1 && base_x == 0 ||
                    direcao_x == 0 && base_x == 0

                    ) {
                return true;
            }
        }
        if (direcao_y != 0 && base_x != 0) {
            if (direcao_y == 1 && base_y == 0 ||
                    direcao_y == -1 && base_y == 0 ||
                    direcao_y == 0 && base_y == 0
                    ) {
                return true;
            }
        }

        return false;

    },
    processarDirecaoSegmento: function (segmento) {

        var posicao = segmento.posicao;
        var direcao = segmento.direcao;

        posicao.x = posicao.x + (direcao.x);
        posicao.y = posicao.y + (direcao.y);

        segmento.direcao = direcao;
        segmento.posicao = posicao;

        return segmento;
    }
};

var ManipularCorpo = {
    adicionarSegmento: function (pCorpo, pSegmento) {
        if (pSegmento.direcao == null) {
            pSegmento.direcao = pCorpo.direcao;
        }
        pCorpo.lSegmento.push(pSegmento);
        return pCorpo;
    },
    adicionarUltimoSegmento: function (pCorpo) {
        var final = pCorpo.lSegmento.length - 1;
        
        if (final >= 0) {
            var posicao_x = pCorpo.lSegmento[final].posicao.x;
            var posicao_y = pCorpo.lSegmento[final].posicao.y;
            var direcao_x = pCorpo.lSegmento[final].direcao.x;
            var direcao_y = pCorpo.lSegmento[final].direcao.y;

            var tmp_segmento = new Segmento();
            tmp_segmento = ManipularDirecao.adicionarDirecao(tmp_segmento, new Direcao(direcao_x, direcao_y));
            tmp_segmento = ManipularPosicao.adicionarPosicao(tmp_segmento, new Posicao(posicao_x, posicao_y));

            var tmp_segmento = ManipularCorpo.processarInversao(tmp_segmento);
            pCorpo = ManipularCorpo.adicionarSegmento(pCorpo, tmp_segmento);
        }
        return pCorpo;
    },
    processarInversao: function (pSegmento) {

        pSegmento = ManipularDirecao.inverterDirecao(pSegmento);
        pSegmento = ManipularDirecao.processarDirecaoSegmento(pSegmento);
        pSegmento = ManipularDirecao.inverterDirecao(pSegmento);

        return pSegmento;
        // pCorpo = ManipularCorpo.adicionarSegmento(pCorpo, temp_segmento);
    },
    criarSegmento: function (posicao_x, posicao_y) {
        var temp_segmento = new Segmento();
        temp_segmento = ManipularPosicao.adicionarPosicao(temp_segmento, new Posicao(posicao_x, posicao_y));
        return temp_segmento;
    },
    totalSegmento: function (pCorpo) {
        return pCorpo.lSegmento.length;
    },
    adicionarComidaCorpo: function (pCorpo, pComida) {
        var tmp_segmento = new Segmento();
        tmp_segmento = ManipularPosicao.adicionarPosicao(tmp_segmento, pComida.posicao)
        pCorpo = ManipularCorpo.adicionarSegmento(pCorpo, tmp_segmento);
        return pCorpo;
    },
    processarDirecao: function (pCorpo) {

        var lista = pCorpo.lSegmento;
        var total = lista.length - 1;

        for (var i = total; i >= 0; i--) {
            var ponteiro = i - 1;
            var direcao = null;
            if (typeof lista[ponteiro] !== "undefined") {
                direcao = lista[ponteiro].direcao;
            }
            if (direcao == null) {
                direcao = pCorpo.direcao;
            }

            lista[i].direcao = direcao;
            lista[i] = ManipularDirecao.processarDirecaoSegmento(lista[i]);
        }
        pCorpo.lSegmento = lista;
        return pCorpo;
    }
    //adicionar mais segnemtos, calcular nova posicao dos segmentos, mudar direcao dos segmentos a cada movimento
};
var Colisor = {
    checarColisaoCorpo: function (pCorpo) {
        var lista = pCorpo.lSegmento;
        var tamanho = lista.length;
        if (tamanho > 1) {
            var elementoBase = lista[0];
            for (var i = 1; i < tamanho; i++) {
                if (lista[i].posicao.x == elementoBase.posicao.x && lista[i].posicao.y == elementoBase.posicao.y) {
                    return true;
                }
            }
        }
        return false;
    },
    checarColisaoMapa: function (pCorpo, min_x, min_y, width, height) {
        var elementoBase = pCorpo.lSegmento[0];
        var max_x = min_x + width-1;
        var max_y = min_y + height-1;

        if ((min_x > elementoBase.posicao.x || elementoBase.posicao.x > max_x) &&
                (elementoBase.posicao.y >= min_y && elementoBase.posicao.y <= max_y)) {
            return true;
        }
        if ((min_y > elementoBase.posicao.y || elementoBase.posicao.y > max_y) &&
                (elementoBase.posicao.x >= min_x && elementoBase.posicao.x <= max_x)) {
            return true;
        }
        return false;
    },
    checarColisaoComida: function (pCorpo, pComida) {
        var elementoBase = pCorpo.lSegmento[0];
        if (pComida.posicao.x == elementoBase.posicao.x &&
                pComida.posicao.y == elementoBase.posicao.y) {
            return true;
        }
        return false;
    },
    checarColisaoComidaCorpo: function (pCorpo, pComida) {

        for (var i in pCorpo.lSegmento) {
            var elementoBase = pCorpo.lSegmento[i];
            if (pComida.posicao.x == elementoBase.posicao.x &&
                    pComida.posicao.y == elementoBase.posicao.y) {
                return true;
            }
        }
        return false;
    }
}

