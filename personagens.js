let yPersonagens = [40,280,200,130];
let xPersonagens = [-10,-10,-10,-10];
let velocidade = [2.5,3.2,4.0,4.5]
let comprimentoPersonagens = 50;
let alturaPersonagens = 40;



function mostraPersonagens(){
  for(let i = 0; i< imagem.length; i++){
    image(imagem[i], xPersonagens[i],yPersonagens[i],comprimentoPersonagens, alturaPersonagens);
  }
}

function movimentaPersonagens(){
  for(let i = 0; i< imagem.length; i++){
    xPersonagens[i] += velocidade[i];
  }
}

function voltaPosicaoInicial(){
  for(let i = 0; i< imagem.length; i++){
    if (passouTodaTela (xPersonagens[i] )){
      xPersonagens[i] = 0
    }
  }
}

function passouTodaTela(xPersonagens){
  return xPersonagens > 500;
}
