// origem da imag dos sprites

const startImg = new Image();
startImg.src = "./images/logo.jpg";

const sprites = new Image();
sprites.src = "./images/sprite.png";

const imgBack = new Image();
imgBack.src = "./images/background.png";
const gameOverimg = new Image();
gameOverimg.src = "./images/game-over.jpg";

const musicGame = new Audio();
musicGame.src = "./sounds/inGame2.wav";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let frames = 0;
let arrObstaculos = [];
let animationId;
let startAnimation = true;

function start() {
  ctx.clearRect(0, 0, 1400, 600);
  startImg.onload = function () {
    ctx.drawImage(startImg, 0, 0, 1400, 600);
  };
}

function updateCanvas() {
  backgroundImage.move();
  backgroundImage.draw();
  player.desenha();
  player.gravidede();
  criaObstaculos();
  score();
  moverObstaculos();
  for (let i = 0; i < arrObstaculos.length; i++) {
    if (crashWith(arrObstaculos[i])) {
      return gameOver();
    }
  }
  animationId = window.requestAnimationFrame(updateCanvas);
}

//propriedades do background
const backgroundImage = {
  imgBack: imgBack,
  x: 0,
  speed: -2,
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
  larguraTela: 117,
  alturaTela: 93,
  x: 100,
  y: 400,
  chao: 400,
  topo: 250,
  speedY: 1,
  top() {
    return this.y;
  },
  bottom() {
    return this.y + this.altura;
  },
  left() {
    return this.x;
  },
  right() {
    return this.x + this.largura;
  },
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
  top() {
    return this.y + 24;
  }
  bottom() {
    return this.y + this.altura;
  }
  left() {
    return this.x + 24;
  }
  right() {
    return this.x + this.largura;
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
    this.x -= 2;
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

function crashWith(Obstacle) {
  // Verifica se um dos lados do retangulo do objeto jogado "invade" algum dos lados ocupados pelos pixels do objeto obstaculo
  //console.log(Obstacle);
  return !(
    player.bottom() < Obstacle.top() ||
    player.top() > Obstacle.bottom() ||
    player.right() < Obstacle.left() ||
    player.left() > Obstacle.right()
  );
}

document.addEventListener("keypress", (event) => {
  if (startAnimation) {
    startAnimation = false;
    musicGame.play();
    console.log(musicGame.src);
    animationId = window.requestAnimationFrame(updateCanvas);
  }
  if (event.keyCode === 32) {
    player.pula(11);
  }
});

function gameOver() {
  cancelAnimationFrame(animationId);
  console.log(animationId);
  ctx.clearRect(0, 0, 1400, 600);
  ctx.drawImage(gameOverimg, 0, 0, 1400, 600);
  musicGame.pause();
}

function score() {
  const points = Math.floor(frames / 5);
  ctx.font = "50px serif";
  ctx.fillStyle = "yellow";
  ctx.fillText(`Score: ${points}`, 0, 50);
}

start();
