// // origem da imag dos sprites
const sprites = new Image();
sprites.src = "/images/sprite.png";

// // origem da img do background

// const back = new Image();
// back.src = "/images/background.png";

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

const myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1400;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function updateGameArea() {
  myGameArea.clear();
  player.update();
}

class Component {
  constructor(width, height, img, x, y) {
    this.width = width;
    this.height = height;
    this.img = img;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
  update() {
    const ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const player = new Component(42, 46, sprites, 100, 400);

myGameArea.start();

//propriedades do background
// let mapa = {
//   spriteX: 0,
//   spriteY: 0,
//   largura: 1056,
//   altura: 672,
//   larguraTela: 1200,
//   alturaTela: 600,
//   x: 0,
//   y: 0,
//   desenha() {
//     ctx.drawImage(
//       back,
//       mapa.spriteX,
//       mapa.spriteY,
//       mapa.largura,
//       mapa.altura,
//       mapa.x,
//       mapa.y,
//       mapa.larguraTela,
//       mapa.alturaTela
//     );

//     ctx.drawImage(
//       back,
//       mapa.spriteX,
//       mapa.spriteY,
//       mapa.largura,
//       mapa.altura,
//       mapa.x + mapa.larguraTela,
//       mapa.y, // Loop background
//       mapa.larguraTela,
//       mapa.alturaTela
//     );
//   },
// };

// //propriedades do sprite
// let player = {
//   spriteX: 0,
//   spriteY: 0,
//   largura: 42,
//   altura: 46,
//   larguraTela: 100,
//   alturaTela: 100,
//   x: 100,
//   y: 400, // 400 é o valor do chao
//   desenha() {
//     ctx.drawImage(
//       sprites,
//       player.spriteX,
//       player.spriteY,
//       player.largura,
//       player.altura,
//       player.x,
//       player.y,
//       player.larguraTela,
//       player.alturaTela
//     );
//   },
// };

// function loop() {
//   mapa.desenha();
//   player.desenha();

//   requestAnimationFrame(loop);
// }
// loop();
