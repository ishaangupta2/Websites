console.log("js is linked!");

let panic = 0;
let timer = 0;
let reds = [];

function setup(){
    let cnv = createCanvas(600, 400);
    cnv.parent("canvasWrapper");
}

function draw(){
 
  // Draw sky
  background(135, 206, 235);

  // Draw sun
  fill(255, 255, 0);
  ellipse(100, 100, 80, 80);

  // Draw mountains
  fill(139, 69, 19);
  triangle(50, height - 50, width / 2, height / 2 - 50, width - 50, height - 50);
  
  if (panic < 100) {
    background(200, 200, 100);
    drawGoat(mouseX, mouseY);
    if (keyIsPressed) {
      panic++;
    }
    if (frameCount % 60 == 0) {
      timer++;
    }
    if (timer == 15) {
      panic = 100;
    }
  } else {
    background(0);
    drawGoat(width / 2, height / 2);
    for (let i = 0; i < reds.length; i++) {
      let r = reds[i];
      fill(redShade);
      ellipse(x, y, w, w);
      x += speedX;
      y += speedY;
      w -= speedW;
      if (w <= 0) {
        reds.splice(i, 1);
        i--;
      }
    }
    if (frameCount % 10 == 0) {
      let r = {};
      x = random(width);
      y = random(height);
      w = random(50, 100);
      redShade = color(random(200, 255), 0, 0);
      speedX = random(-5, 5);
      speedY = random(-5, 5);
      speedW = random(1, 3);
      reds.push(r);
    }
  }
}

function drawGoat(x, y) {
  push();

  translate(x, y);

  noStroke();

  fill(255);
  ellipse(0, -20, 40, 30);
  triangle(-10, -25, -20, -35, -15, -25);
  triangle(10, -25, 20, -35, 15, -25);

  fill(0);
  ellipse(-8, -18, 5, 5);
  ellipse(8, -18, 5, 5);
  ellipse(0, -12, 10, 5);

  fill(255);
  rect(-25, -10, 50, 40);

  fill(0);
  rect(-25, 30, 10, 20);
  rect(15, 30, 10, 20);
  rect(-25, -10, 10, 20);
  rect(15, -10, 10, 20);
  triangle(0, -30, -10, -40, 10, -40);

  pop();
}