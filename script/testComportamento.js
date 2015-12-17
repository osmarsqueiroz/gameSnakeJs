var corpo = new Corpo();
corpo = ManipularDirecao.adicionarDirecao(corpo,new Direcao(1,0));

corpo = ManipularCorpo.adicionarComidaCorpo(corpo,MonipularComida.criarComida("feijao",1,1));
corpo = ManipularCorpo.adicionarComidaCorpo(corpo,MonipularComida.criarComida("farofa",2,1));
corpo = ManipularCorpo.adicionarComidaCorpo(corpo,MonipularComida.criarComida("frango",3,1));
//QUnit.test("Corpo é objeto", function (assert) {
//    assert.equal(typeof corpo, "object", "Objeto");
//    assert.equal(corpo.posicao, null, "Posicao indefinida");
//});
//console.log(corpo.lSegmento)
for( var i in corpo.lSegmento){
    console.log(corpo.lSegmento[i].posicao);
}
console.log("--------------------")
corpo = ManipularCorpo.processarDirecao(corpo);
corpo = ManipularDirecao.adicionarDirecao(corpo,new Direcao(0,1));
corpo = ManipularCorpo.processarDirecao(corpo);
corpo = ManipularCorpo.processarDirecao(corpo);
for( var i in corpo.lSegmento){
    console.log(corpo.lSegmento[i].posicao);
}