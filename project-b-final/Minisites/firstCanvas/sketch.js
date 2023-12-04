console.log("js is linked!");

let carSound;
let backgroundImage;

let buttonWasPressed = false;

let carX = 0;

function preload(){
  carSound = loadSound("speedingCar.mp3");
  backgroundImage = loadImage("horizontalField.png");

}

function setup() {
  let cnv = createCanvas(400,235);
  cnv.parent("canvasWrapper");

}

function draw() {
  background(0);
  image(backgroundImage, -10, -10, 430, 260);
  drawCar(carX, 60, 10);

  if(buttonWasPressed == true) {
    carX = carX +6;
  }
}

function pressedSpeeding(){
  carSound.play();

  buttonWasPressed = true;

    // carX = carX + 6;

}

function drawCar(xPos, yPos, speed) {
  push();
  translate(xPos, yPos);
    //body
    fill(200);
    rect(120, 60, 77, 40);
    rect(100, 100, 120, 40);
    
    //window
    fill(198,238,255);
    rect(123, 63, 34, 37, 5);
    rect(160, 63, 34, 37, 5);
  
    //wheels
    fill(0);
    drawWheel(130, 140, speed);
    drawWheel(190, 140, speed);
  
  pop();
}

function drawWheel(xPos, yPos, speed){
  push();
  translate(xPos, yPos);
    
    let wheelAngle = frameCount * speed;

    if (buttonWasPressed == true) {
      rotate(radians(wheelAngle));
    }
    
    fill("green");
    ellipse(0, 0, 35, 35);
    line(0,-17,0,17)
    line(-17,0,17,0)
    
    //wheel Center
    fill("black");
    circle(0, 0, 5);
  pop();
}
