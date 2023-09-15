function setup() {}
const color = ["BLUE", "RED", "YELLOW", "BLACK"];
let seize = 1000;

let rectX = 0;
let rectY = 0;
let rectLX = seize / 10;
let rectLY = seize / 10;
let randRectLX;
let randRectLY;

function draw() {
  infinity();
}

function keyPressed(ENTER) {
  if (keyCode === LEFT_ARROW) {
    seize = seize - 100;
  }
  if (keyCode === RIGHT_ARROW) {
    seize = seize + 100;
  }
  if (keyCode === UP_ARROW) {
    createCanvas(seize, seize);
    background(255);
    for (rectX = 0; rectX < seize; ) {
      randRect();
      randRectLX = rectLX * parseInt(Math.random() * 3) + rectLX;
      randRectLY = rectLY * parseInt(Math.random() * 3) + rectLY;
      if (rectX <= seize) {
        rectY = rectY + randRectLY;
        if (rectY > seize) {
          rectX = rectX + randRectLX;
          rectY = 0;
        }
      }
    }
    console.log(randRectLX);
  }
}

function infinity() {
  
}

function randRect() {
  randColor = color[parseInt(Math.random() * color.length)];
  fill(randColor);
  stroke("BLACK");
  rect(rectX, rectY, randRectLX, randRectLY);
  console.log(randRectLX, randRectLY);
}
