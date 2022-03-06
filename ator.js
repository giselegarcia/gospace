//Ator
let yAtor = 350;
let xAtor = 200;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor,yAtor, 50, 50);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
      yAtor += 3;
  }
}

function verificaColisao(){
  for(let i= 0; i <imagem.length; i++){
    colisao = collideRectCircle(xPersonagens[i], yPersonagens[i],comprimentoPersonagens, alturaPersonagens, xAtor, yAtor, 25)
    if(colisao){
      voltaAtorPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor =350;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,255));
  text(meusPontos,width/5,32);
}

function marcaPontos(){
  if(yAtor < 10){
    meusPontos +=1;
    somPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor <350;
}