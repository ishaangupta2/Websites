console.log("js is linked!");

let backgroundImage;

let rainDrops = [];
let dropCount = 70;

let buttonWasPressed = false;

function preload(){
  backgroundImage = loadImage("outsideCar.png");

}

function setup() {
  let cnv = createCanvas(400,235);
  cnv.parent("canvasWrapper");

  }

function draw() {
  background(0);
  image(backgroundImage, -10, -10, 430, 260);

  if (buttonWasPressed == true) {
    for (let i = 0; i < dropCount; i++){
      rainDrops.push(new Rainfall(random(0, 400), -10));
  }
}

  if (rainDrops.length > 0) {
      for (let i = 0; i < dropCount; i++){
        let rainDrop = rainDrops[i];
        rainDrop.display();
        rainDrop.update();
        rainDrop.checkEdges();
    } 
  }
  for (let i = rainDrops.length -1; i >= 0; i--){
    let rainDrop = rainDrops[i];
    if (rainDrops.length > 0 && rainDrop.isDone){
      rainDrops.splice(i, rainDrops.length);
    }
  }

}

function pressedRaining() {
  buttonWasPressed = true;
}

class Rainfall{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.dropSpeed = random(1, 5);

    this.isDone = false;
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

  checkEdges(){
    if (this.y > height){
      this.isDone = true;
    }
  }
}