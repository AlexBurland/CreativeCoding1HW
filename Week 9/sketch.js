function setup() {
    createCanvas(500, 600);
  }
  
  function draw() {
    background(16, 58, 120);
    textSize(35)
    text("Spring Breakin'", 120, 35);

    //head
    fill(225, 203, 160);
    circle(200, 150, 150);

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
    ellipse(200, 180, 45, 30);

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
    rect(292, 250, 100, 20);

    //right arm
    fill(0, 0, 0);
    rect(10, 250, 102, 20);

    //left leg
    rect(252, 425, 32, 150);

    //right leg
    rect(122, 425, 32, 150);

    //shirt
    fill(0, 103, 103);
    circle(242, 270, 50);
    fill(0, 150, 103)
    triangle(232, 262, 243, 280, 252, 262)

    fill(255);
    textSize(35);
    text("Alex Burland",290,520 );
  }
