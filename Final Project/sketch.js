let map;
let playerImage;
let BACKGROUND;
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    e: {
        pressed: false
    }
}

class Sprite {
    constructor(position, image) {
        this.position = position;
        this.image = image;
    }

    draw() {
       image(this.image, this.position.x, this.position.y);
    }

}

function preload() {
  map = loadImage('MonsterBayMap.png');
  playerImage = loadImage('PlayerDown.png');
}

function setup() {
  createCanvas(1280, 720);
  BACKGROUND = new Sprite(createVector(-2500, -2200), map);
}

function draw() {
 background(255);

// Draw the background
   BACKGROUND.draw();

 //player image crop
 let cropX = 65;
 let cropY = 0;
 let cropWidth = 55;
 let cropHeight = 68;

// Draw the player
  image(playerImage, width / 2 -playerImage.width / 2, height / 2 - playerImage.height / 2, cropWidth, cropHeight, cropX, cropY, cropWidth, cropHeight);

  if (keys.w.pressed && lastKey === 'w') BACKGROUND.position.y += 3
  else if (keys.a.pressed && lastKey === 'a') BACKGROUND.position.x += 3
  else if (keys.s.pressed && lastKey === 's') BACKGROUND.position.y -= 3
  else if (keys.d.pressed && lastKey === 'd') BACKGROUND.position.x -= 3
}


//movement
let lastKey = ''
function keyPressed() {
    switch (key) {
      case 'w':
       keys.w.pressed = true;
       lastKey = 'w'
        break;
      case 'a':
        keys.a.pressed = true;
        lastKey = 'a'
        break;
      case 's':
        keys.s.pressed = true;
        lastKey = 's'
        break;
      case 'd':
        keys.d.pressed = true;
        lastKey = 'd'
        break;
      case 'e':
        keys.e.pressed = true;
        break;
    }
    console.log(keys);
}

function keyReleased() {
    switch (key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
        case 'e':
            keys.e.pressed = false;
            break;
    }
    console.log(keys);
}