// origem da imag dos sprites
const sprites = new Image();
sprites.src = "/images/1sprite.png";

// origem da img do background

const back = new Image();
back.src = "/images/background.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");



//propriedades do background
let mapa = {
  spriteX: 0,
  spriteY: 0,
  largura: 1056,
  altura: 672,
  larguraTela: 1200,
  alturaTela: 600,
  x: 0,
  y: 0,
  desenha() {
    ctx.drawImage(
      back,
      mapa.spriteX, mapa.spriteY,
      mapa.largura, mapa.altura,
      mapa.x, mapa.y,
      mapa.larguraTela, mapa.alturaTela,
    );
  }
}



//propriedades do sprite
let player = {
  spriteX: 0,
  spriteY: 0,
  largura: 42,
  altura: 46,
  larguraTela: 100,
  alturaTela: 100,
  x: 100,
  y: 400, // 400 é o valor do chao 
  desenha() {
    ctx.drawImage(
      sprites,
      player.spriteX, player.spriteY,
      player.largura, player.altura,
      player.x, player.y,
      player.larguraTela, player.alturaTela,
    );
  }
}


function loop() {
  mapa.desenha();
  player.desenha();

  requestAnimationFrame(loop);
}
loop();
