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

var Corpo = function () {

}
var Cobra = function () {
    this.lCorpo = [];
    this.valor = 0;
}



var ManipularCobra = {
    adicionarComida: function (pCobra, pComida) {
        pCobra.lCorpo.push(pComida);
        return pCobra;
    },
    verificarTamanhoCobra: function(pCobra){
        return pCobra.lCorpo.length;
    }
}



