let panic = 0;
let timer = 30;

let a = 200;
let b = 200;

let diam = 0;

let wave;

function setup(){
    let cnv = createCanvas(600, 400);
    cnv.parent("canvasWrapper");
    angleMode(DEGREES);

}

function draw() {
  
  if (panic < 500) {
 background(159, 189, 237);
  
  // sky
  for(let i=0; i<=height; i++){
    stroke(255-i,255-i,255-i);
    line(0,200-i,width,200-i);
  }
  
  // sun
  noStroke();
  fill(250,186, 3);
  ellipse(200,100, 70, 70);
  
  // mountains
  fill(77, 61, 18);
  triangle(38, 208, 102, 63, 145, 200);
  triangle(175, 208, 205, 105, 250, 200);
  triangle(235, 208, 270, 63, 290, 200);
  triangle(300, 208, 320, 105, 340, 200);  
    
  // cloud
    for(let c=0; c<6; c++){
    fill(255, 255, 255);
    ellipse(50 + (5 * c), 100, 40 + c, 20);
    ellipse(100 + (4 * c), 120, 40 + c, 20);
    ellipse(175 + (5 * c), 110, 40 + c, 20);
    ellipse(432 + (5 * c), 110, 40 + c, 20);
    }
    
  // pasture
  noStroke();
  fill(0,100,0);
  rect(0,200,width,200);
  
  // trees
  fill(67, 51, 8); 
  rect(320,194,10,20); 
  fill(200, 255, 100);
  ellipse(326,172,54,20);
  ellipse(324,192,30,20);
  ellipse(330,182,30,20);

  push();
    translate(-40,-40);
    scale(1.5);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326, 192, 15, 20);
    ellipse(324,172,30,20);
    ellipse(330,182,20,20);
  pop();
    
  push();
    translate(-80,-80);
    scale(2);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326,192,20,20);
    ellipse(324,172,30,20);
    ellipse(330,182,20,20);
  pop();
    
  push();
    translate(-400,-120);
    scale(2);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326,192,16,20);
    ellipse(324,172,25,20);
    ellipse(330,182,8,20);
  pop();
    
  push();
    translate(-550,-80);
    scale(2);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326,192,20,20);
    ellipse(324,172,15,20);
    ellipse(330,182,15,20);
  pop();
    
    drawGoat(a, b);
    
      if (keyCode === LEFT_ARROW) {
      a = a - 3;
      panic++;
      } else if (keyCode === RIGHT_ARROW) {
      a = a + 3;
      panic++;
      } else if (keyCode === UP_ARROW) {
      b = b - 3;
      panic++;
      } else if (keyCode === DOWN_ARROW) {
      b = b + 3;
      panic++;
      }
    
    text('Use the arrow keys to control the goat.', width/2, height*0.10)
      if (a > width && a < 0) {
        a *= -1;
      }
      if (b > height && b < 200) {
        b *= -1;
      }
    
    //if (frameCount % 60 == 0) {
      //timer++;
    //}
    //if (timer == 15) {
      //panic = 100;
    //}
  } else {
    background(0);
    noFill();
    drawGoat(width / 2, height / 2);
    push();
  for (let i = 0; i < 10; i++) {
    let r = i * 10;
    stroke(255, 0, 0);
    ellipse(width/2, height/2, diam + r);
    
    rotate(sin(frameCount + i) * 100);
    wave = map(sin(frameCount), -1, 1, 50, 255);
    stroke(wave);
    
    stroke(255, 0, 0);
    strokeWeight(2);
    ellipse(width/2, height/2, diam + r);
    
    rotate(sin(frameCount + i) * 100);
    wave = map(cos(frameCount), -1, 1, 50, 255);
    stroke(wave);
    
    
    stroke(255, 0, 0);
    ellipse(random(width, height), random(width, height), diam + r);
    
  }
  
  diam += 10;
  
    if (diam > 500) {
    diam = 0;
  }
  pop();
  
  }
  push();
  text(timer, width/2, height * 0.9);
  pop();
  
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer == 0) {
    background(159, 189, 237);
  
    
  // sky
  for(let i=0; i<=height; i++){
    stroke(255-i,255-i,255);
    line(0,200-i,width,200-i);
  }
  
  // sun
  noStroke();
  fill(250,186, 3);
  ellipse(200,100, 70, 70);
  
  // mountains
  fill(77, 61, 18);
  triangle(38, 208, 102, 63, 145, 200);
  triangle(175, 208, 205, 105, 250, 200);
  triangle(235, 208, 270, 63, 290, 200);
  triangle(300, 208, 320, 105, 340, 200);  
    
  // cloud
    for(let c=0; c<6; c++){
    fill(255, 255, 255);
    ellipse(50 + (5 * c), 100, 40 + c, 20);
    ellipse(100 + (4 * c), 120, 40 + c, 20);
    ellipse(175 + (5 * c), 110, 40 + c, 20);
    ellipse(432 + (5 * c), 110, 40 + c, 20);
    }
    
  // pasture
  noStroke();
  fill(0,100,0);
  rect(0,200,width,200);
  
  // trees
  fill(67, 51, 8); 
  rect(320,194,10,20); 
  fill(200, 255, 100);
  ellipse(326,172,54,20);
  ellipse(324,192,30,20);
  ellipse(330,182,30,20);

  push();
    translate(-40,-40);
    scale(1.5);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326, 192, 15, 20);
    ellipse(324,172,30,20);
    ellipse(330,182,20,20);
  pop();
    
  push();
    translate(-80,-80);
    scale(2);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326,192,20,20);
    ellipse(324,172,30,20);
    ellipse(330,182,20,20);
  pop();
    
  push();
    translate(-400,-120);
    scale(2);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326,192,16,20);
    ellipse(324,172,25,20);
    ellipse(330,182,8,20);
  pop();
    
  push();
    translate(-550,-80);
    scale(2);
    fill(67, 51, 8); 
    rect(320,194,10,20); 
    fill(100, 255, 100);
    ellipse(326,192,20,20);
    ellipse(324,172,15,20);
    ellipse(330,182,15,20);
  pop();
    
    drawGoat(a, b);
    text('Congratulations, you made it!', width/2, height*0.12)
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