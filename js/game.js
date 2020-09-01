// origem da imag dos sprites
const sprites = new Image();
sprites.src = "../images/sprite.png";

// origem da img do background

const imgBack = new Image();
imgBack.src = "../images/background.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function updateCanvas() {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  player.desenha();
  obstaculos.desenha();
  obstaculos.onload = updateCanvas;
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

let obstaculos = {
  spriteX: 0,
  spriteY: 266,
  largura: 72,
  altura: 172,
  larguraTela: 100,
  alturaTela: 100,
  x: 400,
  y: 400, // 400 é o valor do chao
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

updateCanvas();
