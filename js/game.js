// origem da imag dos sprites
const sprites = new Image();
sprites.src = "../images/sprite.png";

// origem da img do background

const imgBack = new Image();
imgBack.src = "../images/background.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let frames = 0;
let arrObstaculos = [];

function updateCanvas() {
  backgroundImage.move();
  backgroundImage.draw();
  player.desenha();
  player.gravidede();
  criaObstaculos();
  moverObstaculos();
  // obstaculos.desenha();
  // obstaculos.onload = updateCanvas;
  imgBack.onload = updateCanvas;
  sprites.onload = updateCanvas;
  requestAnimationFrame(updateCanvas);
}
//propriedades do background
const backgroundImage = {
  imgBack: imgBack,
  x: 0,
  speed: -0.3,
  move: function () {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function () {
    ctx.drawImage(this.imgBack, this.x, 0, canvas.width, canvas.height);
    if (this.speed < 0) {
      ctx.drawImage(
        this.imgBack,
        this.x + canvas.width,
        0,
        canvas.width,
        canvas.height
      );
    } else {
      ctx.drawImage(
        this.imgBack,
        this.x - this.imgBack.width,
        0,
        canvas.width,
        canvas.height
      );
    }
  },
};

//propriedades do sprite
let player = {
  spriteX: 0,
  spriteY: 0,
  largura: 117,
  altura: 93,
  larguraTela: 100,
  alturaTela: 100,
  x: 100,
  y: 400, // 400 é o valor do chao
  chao: 400,
  topo: 250,
  speedY: 0,

  gravidede() {
    this.speedY += 0.19;
    this.y += this.speedY;
    if (this.y >= this.chao) {
      this.speedY = 0;
      this.y = this.chao;
    }
  },
  pula(valor) {
    this.speedY -= valor;
  },

  desenha() {
    ctx.drawImage(
      sprites,
      this.spriteX,
      this.spriteY,
      this.largura,
      this.altura,
      this.x,
      this.y,
      this.larguraTela,
      this.alturaTela
    );
  },
};

class Obstaculos {
  constructor(x) {
    this.x = x;
    this.y = 400;
    this.largura = 72;
    this.altura = 172;
    this.spriteX = 0;
    this.spriteY = 266;
    this.larguraTela = 100;
    this.alturaTela = 100;
  }
  desenha() {
    ctx.drawImage(
      sprites,
      this.spriteX,
      this.spriteY,
      this.largura,
      this.altura,
      this.x,
      this.y,
      this.larguraTela,
      this.alturaTela
    );
  }
  moverObstaculo() {
    this.x -= 1;
  }
}

function criaObstaculos() {
  frames += 1;
  if (frames % 500 === 0) {
    arrObstaculos.push(new Obstaculos(1390));
  }
}

function moverObstaculos() {
  arrObstaculos.forEach((element, index) => {
    element.desenha();
    element.moverObstaculo();
  });
}

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 32) {
    player.pula(11);
  }
});
updateCanvas();
