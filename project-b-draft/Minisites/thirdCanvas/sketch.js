console.log("js is linked!");

let backgroundImage;

let rainDrops = [];
let dropCount = 70;

function preload(){
  backgroundImage = loadImage("outsideCar.png");

}

function setup() {
  let cnv = createCanvas(400,235);
  cnv.parent("canvasWrapper");

  for (let i = 0; i < dropCount; i++){
    rainDrops[i] = new Rainfall(random(0, 400), -10);
  }

}

function draw() {
   background(0);
   image(backgroundImage, -10, -10, 430, 260);

    if (mouseIsPressed === true) {
    for (let i = 0; i < rainDrops.length; i++){
      rainDrops[i].display();
      rainDrops[i].update();
    }} else {
      background(0);
      image(backgroundImage, -10, -10, 430, 260);
    }

}

class Rainfall{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.dropLength = random(5, 10);
    this.dropSpeed = random(1, 5);
  }

  update(){
    this.y = this.y + this.dropSpeed;

    if(this.y > height){
      this.x = random(0, 400);
      this.y = -10;
    }
  }

  display(){
    push();
    fill(0, 204, 222);
    noStroke();
    ellipse(this.x, this.y, 2, 20);
    pop();
  }

}
