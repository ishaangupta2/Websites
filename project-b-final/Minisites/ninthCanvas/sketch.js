console.log("js is linked!");

let carSound;
let backgroundImage;

function preload(){
  carSound = loadSound("emotionalSound.mp3");
  backgroundImage = loadImage("prabhuOffice.png");

}

function setup() {
  let cnv = createCanvas(400,235);
  cnv.parent("canvasWrapper");

}

function draw() {
  background(0);
  image(backgroundImage, -10, -10, 430, 260);

}

function pressedSong(){
  carSound.play();

}