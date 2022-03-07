
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEspaço);
  mostraAtor();
  movimentaAtor();
  mostraPersonagens();
  movimentaPersonagens();
  voltaPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}