/*
 
 A cobra come a comida e isso se converte em seu corpo
 Nao pode colidir com seu proprio corpo
 
 */

var Comida = function (pNome, pValor) {
    this.nome = pNome;
    this.valor = pValor;
}
var Localizacao = function (pComida) {
    this.comida = pComida || null;
}

var Movimentacao = function (oCobra) {
    this.cobra = oCobra || null,
            
    this.posicaoX = 0,
    this.posicaoY = 0,
    
    this.direcaoX = 0,/* -1 0 +1*/ 
    this.direcaoY = 0/* -1 0 +1*/ 
}

var Corpo = function () {

}
var Cobra = function () {
    this.lCorpo = [];
    this.valor = 0;
}

var ManipularMovimentacaoCobra = {
    cenarioX: 0,
    cenarioY: 0,
    cenarioTamanhoX: 0,
    cenarioTamanhoY: 0,
    verificarColisaoMapa: function () {

    }
}

var ManipularCobra = {
    adicionarComida: function (pCobra, pComida) {
        pCobra.lCorpo.push(pComida);
        return pCobra;
    },
    verificarTamanhoCobra: function (pCobra) {
        return pCobra.lCorpo.length;
    },
}



