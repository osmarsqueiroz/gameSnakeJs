var corpo = new Corpo();
corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 1));
corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 1));

QUnit.test("Lista com 2 segmentos", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 1));

    assert.equal(corpo.lSegmento[0].posicao.x, 2, "Segmento 0 Posicao X = 2");
    assert.equal(corpo.lSegmento[0].posicao.y, 1, "Segmento 0 Posicao Y = 1");

    assert.equal(corpo.lSegmento[1].posicao.x, 1, "Segmento 1 Posicao X = 1");
    assert.equal(corpo.lSegmento[1].posicao.y, 1, "Segmento 1 Posicao Y = 1");
});


QUnit.test("Lista com 2 segmentos movendo 2 passo", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    assert.equal(corpo.lSegmento[0].posicao.x, 4, "Segmento 0 Posicao X = 4");
    assert.equal(corpo.lSegmento[0].posicao.y, 1, "Segmento 0 Posicao Y = 1");

    assert.equal(corpo.lSegmento[1].posicao.x, 3, "Segmento 1 Posicao X = 3");
    assert.equal(corpo.lSegmento[1].posicao.y, 1, "Segmento 1 Posicao Y = 1");
});

QUnit.test("Lista com 2 segmentos movendo 2 passo direcao baixo", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    
    assert.equal(corpo.lSegmento[0].posicao.x, 4, "Segmento 0 Posicao X = 4");
    assert.equal(corpo.lSegmento[0].posicao.y, 3, "Segmento 0 Posicao Y = 3");

    assert.equal(corpo.lSegmento[1].posicao.x, 4, "Segmento 1 Posicao X = 4");
    assert.equal(corpo.lSegmento[1].posicao.y, 2, "Segmento 1 Posicao Y = 2");
});

QUnit.test("Lista com 2 segmentos movendo 2 passo direcao baixo", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0,-1));
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    
    assert.equal(corpo.lSegmento[0].posicao.x, 4, "Segmento 0 Posicao X = 4");
    assert.equal(corpo.lSegmento[0].posicao.y, -1, "Segmento 0 Posicao Y = -1");

    assert.equal(corpo.lSegmento[1].posicao.x, 4, "Segmento 1 Posicao X = 4");
    assert.equal(corpo.lSegmento[1].posicao.y, 0, "Segmento 1 Posicao Y = 0");
});

QUnit.test("Lista com 2 segmentos movendo 2 passo direcao baixo", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(-1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 5, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 6, 4));
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0,-1));
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    
    assert.equal(corpo.lSegmento[0].posicao.x, 3, "Segmento 0 Posicao X = 3");
    assert.equal(corpo.lSegmento[0].posicao.y, 2, "Segmento 0 Posicao Y = 2");

    assert.equal(corpo.lSegmento[1].posicao.x, 3, "Segmento 1 Posicao X = 3");
    assert.equal(corpo.lSegmento[1].posicao.y, 3, "Segmento 1 Posicao Y = 3");
});