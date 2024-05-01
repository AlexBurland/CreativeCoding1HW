//player data
var playerX = 50;
var playerY = 375;
var playerWidth = 40;
var playerHeight = 64;
var step = 0;
var faceRight = true;
var faceLeft = false;

//enemy data
var g1Pos = 400;
var g2Pos = 580; 
var gSpeed = 2;
var gDirection = -1;
var gDistance = 200;
var g2Direction = 1;
var g2Distance = 50;

//objects
var platX = 150;
var platY = 300;
var plat2X = 550;
var plat2Y = 300;
var plat3X = 600;
var plat3Y = 150;
var platWidth = 200;
var platHeight = 40;
var w1Y = platY + 20;
var w2Y = plat2Y + 20;
var w3Y = plat3Y + 20;
var wHeight = 20;

var fruitX = 600;
var fruitY = 400;
var fruit2X = 500;
var fruit2Y = 260;
var fruit3X = 150;
var fruit3Y = 260;
var fruit4X = 600;
var fruit4Y = 110;
var fruitWidth = 30;
var fruitHeight= 30;

var goblinX = 400;
var goblinY = 388;
var goblin2X = 600;
var goblin2Y = 248;
var goblinWidth = 75;
var goblinHeight = 75;

//physics
var jump = false;
var direction = 1;
var velocity = 2;
var jumpStr = 14;
var fallSpeed = 12;
var minHeight = 385;
var maxHeight = 50;
var jumpCounter = 0;

var level = 0;
var points = 0;
var health = 3;

//level 2
var points2 = 0;
var health2 = 3;

var plat5X = 150;
var plat5Y = 200;
var plat6X = 350;
var plat6Y = 300;
var plat7X = 695;
var plat7Y = 300;
var platWidth2 = 200;
var platHeight2 = 100;
var w5Y = plat5Y + 30;
var w6Y = plat6Y + 10;
var w7Y = plat7Y + 20;
var w7X = plat7X - 20;
var wHeight2 = 50;

var fruit5X = 110;
var fruit5Y = 130;
var fruit6X = 750;
var fruit6Y = 230;
var fruit7X = 320;
var fruit7Y = 260;

var goblin3X = 400;
var goblin3Y = 388;
var goblin4X = 160;
var goblin4Y = 115;

var g3Pos = 400;
var g4Pos = 130; 
var gSpeed = 2;
var g3Direction = -1;
var g3Distance = 200;
var g4Direction = 1;
var g4Distance = 70;

//images
var fruit;
var goblin;
var platform;
var sky;
var pixelFont;

var kIdle;
var kleft1;
var kleft2;
var kleftJump;
var kright1;
var kright2;
var krightJump;

//sounds
var jumpSound;
var bgMusic;
var collectSound;
var hitSound;

function setup() {
    createCanvas(800, 500);
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);
    bgMusic.loop();
    bgMusic.setVolume(0.2);
    jumpSound.setVolume(0.3);
}

function draw() {

    movePlayer();

    gravity();

    if(level == 0) {
        splash();
    }

    if(level == 1) {
        game1();
    }

    if(level == 2) {
        win();
    }

    if(level == 3) {
        lose();
    }

    if(level == 4){
        game2();
    }
    if(mouseIsPressed == true) {
        level = 1;
    }
}

function splash() {
    background(125, 125, 125);
    image(sky, width/2, height/2, width, height);

    textFont(pixelFont);
    fill(255);
    stroke(0);
    strokeWeight(10);
    textSize(50);
    text('Squire Jumper', width/2, 120);
    strokeWeight(5);
    textSize(30);
    text('Use A and D keys to move', width/2, 190);
    text('W to jump', width/2, 230);
    text('Avoid Goblins', width/2, 290);
    strokeWeight(2);
    textSize(20);
    text('Click Anywhere to Start', width/2, 400);
    text('By Alex Burland', 660, 480);
}

function game1() {
    
    background(125, 125, 125);
    image(sky, width/2, height/2, width, height);

    image(platform, width/2, 450, width, 100);

    noFill();
    stroke(0);
    strokeWeight(10);
    rect(width/2, height/2, width, height);
    

stroke(0);
strokeWeight(5);
fill(200, 200, 5);
// platforms
image(platform, platX, platY, platWidth, platHeight);
image(platform, plat2X, plat2Y, platWidth, platHeight);
image(platform, plat3X, plat3Y, platWidth, platHeight);

stroke(0);
fill(50, 150, 150);

// player
player1();

//points
textFont(pixelFont);
    fill(255);
    stroke(0);
    strokeWeight(3);
    textSize(20);
    text('Fruit:', 55, 30);
    text(points, 115, 31);

    textFont(pixelFont);
    fill(255);
    stroke(0);
    strokeWeight(3);
    textSize(20);
    text('Hearts:', 200, 30);
    text(health, 270, 32);

   if(points >= 4) {
    level = 4;
    playerX = 50;
    playerY = 375;
   }

   if(health <= 0) {
    level = 3;
   }

//collisions platform 1
if(playerX >= platX-platWidth/2 && playerX <= platX+platWidth/2 && playerY+playerHeight/2 >= platY-platHeight/2 && playerY-playerHeight/2 <= platY+platHeight/2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
}

if(playerX >= platX-platWidth/2 && playerX <= platX+platWidth/2 && playerY+playerHeight/2 >= w1Y-wHeight/2 && playerY-playerHeight/2 <= w1Y+wHeight/2){
    jumpCounter = jumpStr;
    velocity = fallSpeed;
}

//collisions platform 2
if(playerX >= plat2X-platWidth/2 && playerX <= plat2X+platWidth/2 && playerY+playerHeight/2 >= plat2Y-platHeight/2 && playerY-playerHeight/2 <= plat2Y+platHeight/2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
}
if(playerX >= plat2X-platWidth/2 && playerX <= plat2X+platWidth/2 && playerY+playerHeight/2 >= w2Y-wHeight/2 && playerY-playerHeight/2 <= w2Y+wHeight/2){
    jumpCounter = jumpStr;
    velocity = fallSpeed;
}
//collisions platform 3
if(playerX >= plat3X-platWidth/2 && playerX <= plat3X+platWidth/2 && playerY+playerHeight/2 >= plat3Y-platHeight/2 && playerY-playerHeight/2 <= plat3Y+platHeight/2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
}
if(playerX >= plat3X-platWidth/2 && playerX <= plat3X+platWidth/2 && playerY+playerHeight/2 >= w3Y-wHeight/2 && playerY-playerHeight/2 <= w3Y+wHeight/2){
    jumpCounter = jumpStr;
    velocity = fallSpeed;
}
//fruit 1
image(fruit, fruitX, fruitY, fruitWidth, fruitHeight);
if(playerX >= fruitX-fruitWidth/2 && playerX <= fruitX+fruitWidth/2 && playerY >= fruitY-fruitHeight/2 && playerY <= fruitY+fruitHeight/2) {
    collectSound.play();
    points = points + 1;
    fruitX = -1000;
}
//fruit 2
image(fruit, fruit2X, fruit2Y, fruitWidth, fruitHeight);
if(playerX >= fruit2X-fruitWidth/2 && playerX <= fruit2X+fruitWidth/2 && playerY >= fruit2Y-fruitHeight/2 && playerY <= fruit2Y+fruitHeight/2) {
    collectSound.play();
    points = points + 1;
    fruit2X = -1000;
}
//fruit 3
image(fruit, fruit3X, fruit3Y, fruitWidth, fruitHeight);
if(playerX >= fruit3X-fruitWidth/2 && playerX <= fruit3X+fruitWidth/2 && playerY >= fruit3Y-fruitHeight/2 && playerY <= fruit3Y+fruitHeight/2) {
    collectSound.play();
    points = points + 1;
    fruit3X = -1000;
}

//fruit 4
image(fruit, fruit4X, fruit4Y, fruitWidth, fruitHeight);
if(playerX >= fruit4X-fruitWidth/2 && playerX <= fruit4X+fruitWidth/2 && playerY >= fruit4Y-fruitHeight/2 && playerY <= fruit4Y+fruitHeight/2) {
    collectSound.play();
    points = points + 1;
    fruit4X = -1000;
}

//enemies
//gobbo 1
image(goblin, goblinX, goblinY, goblinWidth, goblinHeight);
if(playerX >= goblinX-goblinWidth/2 && playerX <= goblinX+goblinWidth/2 && playerY >= goblinY-goblinHeight/2 && playerY <= goblinY+goblinHeight/2) {
    hitSound.play();
    health = health - 1;
    playerX = 50;
    playerY = 375;
}
goblinX = goblinX + (gSpeed*gDirection);
if(goblinX >= g1Pos+gDistance || goblinX <= g1Pos-gDistance) {
    gDirection = gDirection*-1;
}
//gobbo 2
image(goblin, goblin2X, goblin2Y, goblinWidth, goblinHeight);
if(playerX >= goblin2X-goblinWidth/2 && playerX <= goblin2X+goblinWidth/2 && playerY >= goblin2Y-goblinHeight/2 && playerY <= goblin2Y+goblinHeight/2) {
    hitSound.play();
    health = health - 1;
    playerX = 50;
    playerY = 375;
}
goblin2X = goblin2X + (gSpeed*g2Direction);
if(goblin2X >= g2Pos+g2Distance || goblin2X <= g2Pos-g2Distance) {
    g2Direction = g2Direction*-1;
}

}
// LEVEL 2
function game2() {
 
    background(125, 125, 125);
    image(sky, width/2, height/2, width, height);

    image(platform, width/2, 450, width, 100);

    noFill();
    stroke(0);
    strokeWeight(10);
    rect(width/2, height/2, width, height);

    // player
    player1();

    //points
textFont(pixelFont);
fill(255);
stroke(0);
strokeWeight(3);
textSize(20);
text('Fruit:', 55, 30);
text(points2, 115, 31);

textFont(pixelFont);
fill(255);
stroke(0);
strokeWeight(3);
textSize(20);
text('Hearts:', 200, 30);
text(health2, 270, 32);

image(platform, plat5X, plat5Y, platWidth2, platHeight2);

if(playerX >= plat5X-platWidth2/2 && playerX <= plat5X+platWidth2/2 && playerY+playerHeight/2 >= plat5Y-platHeight2/2 && playerY-playerHeight/2 <= plat5Y+platHeight2 /2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
}

if(playerX >= plat5X-platWidth2/2 && playerX <= plat5X+platWidth2/2 && playerY+playerHeight/2 >= w5Y-wHeight2/2 && playerY-playerHeight/2 <= w5Y+wHeight2/2){
    jumpCounter = jumpStr;
    velocity = fallSpeed;
}

image(platform, plat6X, plat6Y, platWidth, platHeight);

if(playerX >= plat6X-platWidth/2 && playerX <= plat6X+platWidth/2 && playerY+playerHeight/2 >= plat6Y-platHeight/2 && playerY-playerHeight/2 <= plat6Y+platHeight /2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
}

if(playerX >= plat6X-platWidth/2 && playerX <= plat6X+platWidth /2 && playerY+playerHeight/2 >= w6Y-wHeight/2 && playerY-playerHeight/2 <= w6Y+wHeight / 2){
    jumpCounter = jumpStr;
    velocity = fallSpeed;
}

image(fruit, fruit5X, fruit5Y, fruitWidth, fruitHeight);
if(playerX >= fruit5X-fruitWidth/2 && playerX <= fruit5X+fruitWidth/2 && playerY >= fruit5Y-fruitHeight/2 && playerY <= fruit5Y+fruitHeight/2) {
    collectSound.play();
    points2 = points2 + 1;
    fruit5X = -1000;
}
image(fruit, fruit6X, fruit6Y, fruitWidth, fruitHeight);
if(playerX >= fruit6X-fruitWidth/2 && playerX <= fruit6X+fruitWidth/2 && playerY >= fruit6Y-fruitHeight/2 && playerY <= fruit6Y+fruitHeight/2) {
    collectSound.play();
    points2 = points2 + 1;
    fruit6X = -1000;
}
image(fruit, fruit7X, fruit7Y, fruitWidth, fruitHeight);
if(playerX >= fruit7X-fruitWidth/2 && playerX <= fruit7X+fruitWidth/2 && playerY >= fruit7Y-fruitHeight/2 && playerY <= fruit7Y+fruitHeight/2) {
    collectSound.play();
    points2 = points2 + 1;
    fruit7X = -1000;
}

image(goblin, goblin3X, goblin3Y, goblinWidth, goblinHeight);
if(playerX >= goblin3X-goblinWidth/2 && playerX <= goblin3X+goblinWidth/2 && playerY >= goblin3Y-goblinHeight/2 && playerY <= goblin3Y+goblinHeight/2) {
    hitSound.play();
    health2 = health2 - 1;
    playerX = 50;
    playerY = 375;
}
goblin3X = goblin3X + (gSpeed*g3Direction);
if(goblin3X >= g3Pos+g3Distance || goblin3X <= g3Pos-g3Distance) {
    g3Direction = g3Direction*-1;
}
image(goblin, goblin4X, goblin4Y, goblinWidth, goblinHeight);
if(playerX >= goblin4X-goblinWidth/2 && playerX <= goblin4X+goblinWidth/2 && playerY >= goblin4Y-goblinHeight/2 && playerY <= goblin4Y+goblinHeight/2) {
    hitSound.play();
    health2 = health2 - 1;
    playerX = 50;
    playerY = 375;
}
goblin4X = goblin4X + (gSpeed*g4Direction);
if(goblin4X >= g4Pos+g4Distance || goblin4X <= g4Pos-g4Distance) {
    g4Direction = g4Direction*-1;
}

if(points2 >= 3) {
level = 2;
}

if(health2 <= 0) {
level = 3;
}
}

function win() {
    background(125, 125, 125);
    image(sky, width/2, height/2, width, height);

    textFont(pixelFont);
    fill(255);
    stroke(0);
    strokeWeight(10);
    textSize(50);
    text('Successful Journey', width/2, height/2);
}

function lose(){
    background(125, 125, 125);
    image(sky, width/2, height/2, width, height);

    textFont(pixelFont);
    fill(255);
    stroke(0);
    strokeWeight(10);
    textSize(50);
    text('You Dead', width/2, height/2);
}

function gravity() {

    if(playerY >= minHeight && jump == false){
    playerY = playerY;
    jumpCounter = 0;
  }
else{
    playerY = playerY + (direction*velocity);
    }
        if(jump == true) {
            if(playerY <= maxHeight || jumpCounter >= jumpStr) {
                if(playerY >= minHeight) {
                    playerY = minHeight;
                }
                else{
                    velocity = fallSpeed;
                }
                
            }
            else{
                velocity = -jumpStr;
                jumpCounter = jumpCounter +1;
            }
        }
        else{
            velocity = fallSpeed;
        }
}

function player1() {

    if(faceRight == true) {
        faceLeft = false;
        step = step + 1;
        if(step == 0) {
            image(kright1, playerX, playerY, playerWidth, playerHeight);
        }
        else if(step == 1) {
            image(kright1, playerX, playerY, playerWidth, playerHeight);
    }
    else if(step == 2) {
        image(kright1, playerX, playerY, playerWidth, playerHeight);
    }
else if(step == 3) {
    image(kright2, playerX, playerY, playerWidth, playerHeight);
    }
else if(step == 4) {
    image(kright2, playerX, playerY, playerWidth, playerHeight);
    }
  else if(step == 5) {
    image(kright2, playerX, playerY, playerWidth, playerHeight);
    step = 0;
    }
  }

  if(faceLeft == true) {
    faceRight = false;
    step = step + 1;
    if(step == 0) {
        image(kleft1, playerX, playerY, playerWidth, playerHeight);
    }
    else if(step == 1) {
        image(kleft1, playerX, playerY, playerWidth, playerHeight);
}
else if(step == 2) {
    image(kleft1, playerX, playerY, playerWidth, playerHeight);
}
else if(step == 3) {
image(kleft2, playerX, playerY, playerWidth, playerHeight);
}
else if(step == 4) {
image(kleft2, playerX, playerY, playerWidth, playerHeight);
}
else if(step == 5) {
image(kleft2, playerX, playerY, playerWidth, playerHeight);
step = 0;
}
}

  if(faceRight == false && faceLeft == false && jump == false) {
    image(kIdle, playerX, playerY, playerWidth, playerHeight);
  }

  else if(faceRight == false && faceLeft == false && jump == true) {
    image(krightJump, playerX, playerY, playerWidth, playerHeight);
  }
}

let keys = { w: { pressed: false },
a: { pressed: false },
d: { pressed: false },
 };

function keyPressed() {
    switch (key) {
        case 'w':
            jumpSound.play();
            jump = true;
            break;
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd':
            keys.d.pressed = true;
            break;
    }
}

function keyReleased() {
    switch (key) {
        case 'w':
            jump = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
}

function movePlayer() {
    if (keys.a.pressed && playerX > playerWidth / 2) {
        playerX -= 5;
        faceLeft = true;
    }
    else{
        faceLeft = false;
    }
    if (keys.d.pressed && playerX < width - playerWidth / 2) {
        playerX += 5;
        faceRight = true;
    }
    else{
        faceRight = false;
    }
}

function preload() {
kIdle = loadImage('knight_idle.png')
kleft1 = loadImage('knight_left1.png');
kleft2 = loadImage('knight_left2.png');
kleftJump = loadImage('knight_Ljump.png');
kright1 = loadImage('knight_right1.png');
kright2 = loadImage('knight_right2.png');
krightJump = loadImage('knight_Rjump.png');
platform = loadImage('platform.png');
sky = loadImage('sky.png');
jumpSound = loadSound('jump.wav');
collectSound = loadSound('coin.wav');
hitSound = loadSound('hurt.wav');
bgMusic = loadSound('time_for_adventure.mp3');
pixelFont = loadFont('PixelOperator8.ttf');
fruit = loadImage('fruit.png');
goblin = loadImage('goblin.png');
}