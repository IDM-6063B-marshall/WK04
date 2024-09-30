function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  background(220, 120, 120);

  strokeWeight(2);
  let pitch = 100;
  let sqDim = 0.9 * pitch;
  translate(pitch / 2, pitch / 2);

  // draw a column of rows
  for (let y = 0; y < height; y += pitch+15) {
    // draw a row of squares
    for (let x = 0; x < width; x += pitch+15) {
      for (let dd = 100; dd > 0; dd -= 5) {
        print(100-dd);
        push();
        translate(x, y);
        //rotate
        rotate(100 - dd);
        rect(0, 0, dd);
        pop();
      }
    }
  }
}
function draw() {}
