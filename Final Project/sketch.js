var map;
var mapx = 50;
var mapy = -700;

function preload() {
    map = loadImage('MonsterBayMap.png', imageLoaded);
}

function setup() {
    createCanvas(1280, 720);
    background(0);
}

function draw() {
    fill(225, 225, 225);
    rect(0, 0, 1280, 720);
    imageMode(CENTER);
    if (map) {
        image(map, mapx, mapy);
    }
}

function imageLoaded() {
    console.log("Image loaded successfully");
}

function keyPressed(){
    if(keyCode == UP_ARROW)
    { mapy = mapy -5;
    }
}