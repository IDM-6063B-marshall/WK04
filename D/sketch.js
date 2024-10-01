// l indicates how many legs (how many times we rotates to make legs)
function star(x, y, w, c, l) {
  let r = w / 2;
  push();
  translate(x, y);

  for (let cnt = 0; cnt < l; cnt++) {
    line(c, -c, r, 0);
    line(c, c, r, 0);
    rotate(360 / l);

    // line(-c, c, 0, r);
    // line(c, c, 0, r);

    // line(-c, -c, -r, 0);
    // line(-c, c, -r, 0);

    // line(-c, -c, 0, -r);
    // line(c, -c, 0, -r);
  }
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(4);
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);

  for (let cnt = 0; cnt < 10; cnt++) {
    print(random(10, 100));
  }

noFill()
  // draw a column of rows
  for (let y = 0; y < height; y += pitch) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch) {
      // let dd = random(sqDim / 2, sqDim);
      // let vx = random(-10, 10);
      // let vy = random(-30, 30);
      let rn = random(0, 6);
      let rg = random(256);
      let rr = random(256);
      let rb = random(256);
// let rcc = random(["ff00ff", "ff0000","00ffff"])

      push();
      translate(x, y);
      stroke(rg, rr, rb)
      fill(rg, rr, rb);

      if (rn < 2) {
        rect(0, 0, sqDim);
      } else if (rn < 4) {
        ellipse(0, 0, sqDim);
      } else {
        star(0, 0, sqDim, 10, 4);
      }
    

    pop();
    }
  }
}

function draw() {}

function mouseClicked(){
  setup()
}