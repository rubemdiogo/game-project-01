const sprites = new Image();
sprites.src = "/images/1sprite.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


//propriedades do sprite
let player = {
  spriteX: 0,
  spriteY: 0,
  largura: 42,
  altura: 46,
  larguraTela: 100,
  alturaTela: 100,
  x: 50,
  y: 400,
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
  player.desenha();
  requestAnimationFrame(loop);
}
loop();
