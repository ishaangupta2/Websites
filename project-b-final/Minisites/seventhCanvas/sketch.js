console.log("js is linked!");

let backgroundImage;

let rainDrops = [];
let dropCount = 70;

let buttonWasPressed = false;

function preload(){
  backgroundImage = loadImage("prabhuClose.png");

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

    for (let i = 0; i < rainDrops.length; i++){
      rainDrops[i].display();
      rainDrops[i].update();
    }

    if (buttonWasPressed == true) {
      noStroke();
      fill(255, 255, 255);
      scale(0.5);
      ellipse(630, 95, 250, 160);
      scale(0.5);
      triangle(900, 300, 1300, 140, 1290, 45);

      let t = 'This has to be a joke!\nHow does he remember\nthe shirt?!'
      textSize(40);
      textAlign(CENTER);
      textFont("Comic Sans MS");
      fill(0);
      strokeWeight(4);
      text(t, 1260, 170);
    }

}

function pressedThoughtBubble() {
  buttonWasPressed = true;
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