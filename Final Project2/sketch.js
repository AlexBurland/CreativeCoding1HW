//player data
var playerX = 50;
var playerY = 375;
var playerWidth = 75;
var playerHeight = 75;

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

var fruitX = 600;
var fruitY = 400;
var fruit2X = 500;
var fruit2Y = 250;
var fruit3X = 150;
var fruit3Y = 250;
var fruit4X = 600;
var fruit4Y = 100;
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
var fallSpeed = 5;
var minHeight = 385;
var maxHeight = 50;
var jumpCounter = 0;

var level = 0;
var points = 0;
var health = 3;

//images
var knight;
var fruit;
var goblin;
var platform;
var sky;
var pixelFont;

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
        game();
    }

    if(level == 2) {
        win();
    }

    if(level == 3) {
        lose();
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
    text('Knightly Jumper', width/2, 120);
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

function game() {
    
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
image(knight, playerX, playerY, playerWidth, playerHeight);

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



//collisions platform 1
if(playerX >= platX-platWidth/2 && playerX <= platX+platWidth/2 && playerY+playerHeight/2 >= platY-platHeight/2 && playerY+playerHeight <= platY+platHeight/2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
}

//collisions platform 2
if(playerX >= plat2X-platWidth/2 && playerX <= plat2X+platWidth/2 && playerY+playerHeight/2 >= plat2Y-platHeight/2 && playerY+playerHeight <= plat2Y+platHeight/2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
}

//collisions platform 3
if(playerX >= plat3X-platWidth/2 && playerX <= plat3X+platWidth/2 && playerY+playerHeight/2 >= plat3Y-platHeight/2 && playerY+playerHeight <= plat3Y+platHeight/2 && jump == false){
    playerY = playerY;
    velocity = 0;
    jumpCounter = 0;
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
    }
    if (keys.d.pressed && playerX < width - playerWidth / 2) {
        playerX += 5;
    }
}

function preload() {
knight = loadImage('Knight.png');
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