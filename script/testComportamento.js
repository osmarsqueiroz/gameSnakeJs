

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
QUnit.test("Colisao com o corpo, ele perde", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 6, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 5, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 4, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 3, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 4));
    corpo = ManipularCorpo.processarDirecao(corpo);
     
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);
    
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(-1, 0));
    corpo = ManipularCorpo.processarDirecao(corpo);
    
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0, -1));
    corpo = ManipularCorpo.processarDirecao(corpo);
   
    assert.equal(Colisor.checarColisaoCorpo(corpo), true, "Colidiu");
});
QUnit.test("Colisao do corpo com a comida", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 6, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 5, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 4, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 3, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 4));
    corpo = ManipularCorpo.processarDirecao(corpo);
     
    var comida = MonipularComida.criarComida("feijao", 8, 4);   
    assert.equal(Colisor.checarColisaoComida(corpo,comida), false, "não Colidiu");
    corpo = ManipularCorpo.processarDirecao(corpo);
    assert.equal(Colisor.checarColisaoComida(corpo,comida), true, "Colidiu");
});

QUnit.test("Colisao do corpo com a comida", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 6, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 5, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 4, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 3, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 4));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 4));
    corpo = ManipularCorpo.processarDirecao(corpo);
     
    var comida = MonipularComida.criarComida("feijao", 8, 4);   
    assert.equal(Colisor.checarColisaoComida(corpo,comida), false, "não Colidiu");
    corpo = ManipularCorpo.processarDirecao(corpo);
    assert.equal(Colisor.checarColisaoComida(corpo,comida), true, "Colidiu");
});




QUnit.test("Testar direção 1 0", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(1, 0));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 8, 1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 7, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);

    
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],-1,0), false, "1-0 = -1-0 errado");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,1), true, "1-0 = 0-1 CERto");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,-1), true, "1-0 = 0- -1 CERto");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,0), false, "1-0 = 0- 0 errado");
});
QUnit.test("Testar direção -1 0", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(-1, 0));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 8, 1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 7, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);

    
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],1,0), false, "-1 0 = 1-0 errado");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,1), true, "-1 0 = 0-1 CERto");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,-1), true, "-1 0 = 0 -1 CERto");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,0), false, "-1 0 = 0- 0 errado");
});
QUnit.test("Testar direção 0 1", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0,1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 1, 2));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);

    
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,-1), false, "0 1 = 0 -1 errado");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],1,0), true, "0 1 = 1 0 true");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],-1,0), true, "0 1 = -1 0 true");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,0), false, "0 1 = 0 0 errado");
});
QUnit.test("Testar direção 0 -1", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0,-1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 1, 2));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 1, 1));
    corpo = ManipularCorpo.processarDirecao(corpo);

    
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,1), false, "0 -1 = 0 1 errado");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],1,0), true, "0 -1 = 1 0 true");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],-1,0), true, "0 -1 = -1 0 true");
    assert.equal(ManipularDirecao.validarDirecao(corpo.lSegmento[0],0,0), false, "0 -1 = 0 0 errado");
});

QUnit.test("Colisao do corpo com o top", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0, -1));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 1));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 2, 2));
    corpo = ManipularCorpo.processarDirecao(corpo);

    assert.equal(Colisor.checarColisaoMapa(corpo,0,0,10,10), false, "não Colidiu");
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    assert.equal(Colisor.checarColisaoMapa(corpo,0,0,10,10), true, "Colidiu");
});
QUnit.test("Colisao do corpo com o bottom", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(0,1));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 2, 8));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 2, 7));
    corpo = ManipularCorpo.processarDirecao(corpo);

    assert.equal(Colisor.checarColisaoMapa(corpo,0,0,10,10), false, "não Colidiu");
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    assert.equal(Colisor.checarColisaoMapa(corpo,0,0,10,10), true, "Colidiu");
});
QUnit.test("Colisao do corpo com o esquerda", function (assert) {
    var corpo = new Corpo();
    corpo = ManipularDirecao.adicionarDirecao(corpo, new Direcao(-1,0));

    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("feijao", 1, 2));
    corpo = ManipularCorpo.adicionarComidaCorpo(corpo, MonipularComida.criarComida("farofa", 2, 2));
    corpo = ManipularCorpo.processarDirecao(corpo);

    assert.equal(Colisor.checarColisaoMapa(corpo,0,0,10,10), false, "não Colidiu");
    corpo = ManipularCorpo.processarDirecao(corpo);
    corpo = ManipularCorpo.processarDirecao(corpo);
    assert.equal(Colisor.checarColisaoMapa(corpo,0,0,10,10), true, "Colidiu");
});