var x = 200;
var y = 180;
var a = 292;
var b = 250;
var c = 10;
var d = 250;
var e = 200;
var f = 150;
var g = 232;
var h = 262;
var j = 243;
var k = 280;
var m = 252;
var n = 262;

var diameter = 50;
var size = 35;
var sizeDirection = 2;
var count = 0;
var movementarm1;
var movementarm2;
var movementmouth;
var movementshirt;
var movementhead;

function setup() {
    createCanvas(500, 600);
    movementarm1 = floor(random() * 10) + 1;
    movementarm2 = floor(random() * 10) + 1;
    movementmouth = floor(random() * 10) + 1;
    movementshirt = floor(random() * 10) + 1;
    movementhead = floor(random() * 10) +1;
  }
  
  function draw() {
    background(16, 58, 120);
    textSize(size)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
      sizeDirection *=-1;
      count = 0;
    }
    text("Spring Breakin'", 120, 35);

    //head
    fill(225, 203, 160);
    circle(e, f, 150);
    if (e >= 300 || e <= 100) {
      movementhead *=-1;
     }
     e += movementhead;

    //eyes
    strokeWeight(15);
    fill(0, 150, 150);
    point(180, 110);
    point(220, 110);

    //nose
    strokeWeight(1);
    fill(0, 0, 0);
    triangle(192, 145, 200, 135, 208, 145);

    //mouth
    ellipse(x, y, 45, 30);
    if (x >= 250 || x <= 150) {
      movementmouth *=-1;
     }
     x += movementmouth;

    //hair
    line(130, 125, 175, 80);
    line(125, 120, 165, 80);
    line(135, 130, 180, 75);
    line(140, 125, 185, 75);
    line(150, 125, 195, 75);
    line(160, 125, 205, 75);
    line(170, 125, 215, 75);
    line(180, 125, 225, 78);
    line(190, 125, 235, 80);
    line(200, 125, 240, 86);
    line(260, 125, 240, 86);
    line(270, 125, 240, 86);
    line(280, 125, 245, 86);

    //body
    fill(64, 64, 64);
    rect(112, 225, 180, 200,);

    //left arm
    fill(0, 0, 0);
    rect(a, b, 100, 20);
    if (b >= 350 || b <= 230) {
      movementarm1 *=-1;
     }
     b += movementarm1;

    //right arm
    fill(0, 0, 0);
    rect(c, d, 102, 20);
    if (d >= 350 || d <= 230) {
      movementarm2 *=-1;
     }
     d += movementarm2;

    //left leg
    rect(252, 425, 32, 150);

    //right leg
    rect(122, 425, 32, 150);

    //shirt
    fill(0, 103, 103);
    circle(242, 270, 50);
    fill(0, 150, 103);
    triangle(g, h, j, k, m, n);
    if (g >= 300 || g <= 200 || h >= 300 || h <= 200 || j >= 300 || j <= 200 ||
      k >= 300 || k <= 200 || m >= 300 || m <= 200 || n >= 300 || n <= 200)
      {
      movementshirt *=-1;
     }
     g += movementshirt;
     h += movementshirt;
     j += movementshirt;
     k += movementshirt;
     m += movementshirt;
     n += movementshirt;

    fill(255);
    textSize(35);
    text("Alex Burland",290,520 );
  }
