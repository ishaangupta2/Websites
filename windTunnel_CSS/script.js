let NUM_OF_PARTICLES = 300;

let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, 400);
  canvas.parent("canvasWrapper");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(0, random(-500, 500));
  }
}

function draw() {
  background(200);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    //particles[i].checkOutOfCanvas();
    particles[i].update();
  }

  //for (let i = particles.length - 1; i >= 0; i--) {
  //  if (particles[i].onCanvas == false) {
  //    particles.splice(i, 1);
  //  }
  //}

  drawAircraft(width / 2 - 100, height / 2);
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.radius = 5;
    this.xSpeed = 10;
    this.ySpeed = random(-3, 3);
    //this.onCanvas = true;
  }

  //checkOutOfCanvas() {
  // horizontal
  //  if (this.x < 0 || this.x > 1200) {
  //    this.onCanvas = false;
  //  }
  //}
  update() {
    //this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;

    this.x = this.x + this.xSpeed;

    if (this.x > windowWidth) {
      this.x = random(-100, 100);
      this.y = random(-500, 500);
    }
  }
  display() {
    push();
    //translate(this.x, this.y);
    fill(255);
    ellipse(this.x, this.y, this.radius);

    pop();
  }
}

function drawAircraft(x, y) {
  fill(75, 100, 75);

  //cockpit crown
  beginShape();
  vertex(x, y);
  bezierVertex(x + 40, y - 40, x + 30, y - 40, x + 100, y - 40);
  endShape();

  //upper fuselage
  beginShape();
  line(width / 2 - 30, y - 40, width / 2 + 225, y - 40);
  endShape();

  //nose
  beginShape();
  vertex(x, y);
  bezierVertex(x - 80, y + 40, x - 50, y + 40, x, y + 70);
  vertex(width / 2 - 100, y + 70);
  endShape();

  //belly
  beginShape();
  //line(width / 2 - 100, y + 70, width / 2 + 225, y + 70);
  line(width / 2 - 100, y + 70, width / 2 + 50, y + 70);
  line(width / 2 + 165, y + 70, width / 2 + 225, y + 70);
  endShape();

  //upper fuselage - empennage
  beginShape();
  vertex(width / 2 + 225, y - 40);
  bezierVertex(x + 340, y - 40, x + 330, y - 40, x + 450, y - 10);
  endShape();

  //lower fuselage - empennage
  beginShape();
  vertex(width / 2 + 225, y + 70);
  bezierVertex(x + 340, y + 66, x + 330, y + 80, x + 450, y + 10);
  endShape();

  //tail cone
  beginShape();
  vertex(x + 450, y - 10);
  bezierVertex(x + 470, y, x + 450, y + 10, x + 450, y + 10);
  endShape();

  //wing
  beginShape();
  quad(width / 2 + 10, y + 45, width / 2 + 150, y + 45, width / 2 + 200, y + 130, width / 2 + 150, y + 130);
  endShape();

  //tail
  beginShape();
  quad(width / 2 + 295, y - 120, width / 2 + 345, y - 120, width / 2 + 345, y - 10, width / 2 + 245, y - 35);
  endShape();

  //leg mounts
  beginShape();
  fill(75);
  rect(width / 2 - 30, y + 70, 20, 400);
  rect(width / 2 + 200, y + 70, 20, 400);
  endShape();
}