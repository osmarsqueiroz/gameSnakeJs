var corpo = new Corpo();
var segmento = new Segmento();

var comidaMorango = new Comida("Morango");
var posicaoMorango = new Posicao(10, 10);
var posicaoSegmento = new Posicao(5, 5);
var direcaoSegmento = new Direcao(1, 0);

var comidaPera = MonipularComida.criarComida("Pera", 5, 6);

QUnit.test("Corpo é objeto", function (assert) {
    assert.equal(typeof corpo, "object", "Objeto");
    assert.equal(corpo.posicao, null, "Posicao indefinida");
});

QUnit.test("Comida Morango", function (assert) {
    assert.equal(typeof comidaMorango, "object", "Objeto");
    assert.equal(comidaMorango.nome, "Morango", "NOme Morango");
    assert.equal(comidaMorango.posicao, null, "POsicao Inexistente");
});

QUnit.test("Comida Morango adicionando posicao", function (assert) {
    comidaMorango = ManipularPosicao.adicionarPosicao(comidaMorango, posicaoMorango);
    assert.equal(typeof comidaMorango.posicao, "object", "Objeto posicao");
    assert.equal(comidaMorango.posicao.x, 10, "Posicao X 10");
    assert.equal(comidaMorango.posicao.y, 10, "Posicao Y 10");

});


QUnit.test("Comida Pera com posicao", function (assert) {
    assert.equal(comidaPera.nome, "Pera", "NOme Pera");
    assert.equal(comidaPera.posicao.x, 5, "Posicao X 5");
    assert.equal(comidaPera.posicao.y, 6, "Posicao Y 6");

});

QUnit.test("Segmento adicionando posicao", function (assert) {
    segmento = ManipularPosicao.adicionarPosicao(segmento, posicaoSegmento);
    assert.equal(typeof segmento.posicao, "object", "Objeto posicao");
    assert.equal(segmento.posicao.x, 5, "Posicao X 5");
    assert.equal(segmento.posicao.y, 5, "Posicao Y 5");

});

QUnit.test("Segmento adicionando direcaoSegmento", function (assert) {
    segmento = ManipularDirecao.adicionarDirecao(segmento, direcaoSegmento);
    assert.equal(typeof segmento.direcao, "object", "Objeto direcao");
    assert.equal(segmento.direcao.x, 1, "Direcao X 1");
    assert.equal(segmento.direcao.y, 0, "Direcao Y 0");

});

//    corpo = ManipularCorpo.adicionarSegmento(corpo, segmento);
QUnit.test("Corpo adicionando segmento", function (assert) {

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, comidaPera);
    assert.equal(typeof corpo.lSegmento, "object", "object de segmentos");
    assert.equal(ManipularCorpo.totalSegmento(corpo), 1, "Total Segmento 1");

});

QUnit.test("Corpo com segmentos", function (assert) {

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, comidaPera);
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, comidaPera);
    assert.equal(ManipularCorpo.totalSegmento(corpo), 3, "Total Segmento 3");
    
});