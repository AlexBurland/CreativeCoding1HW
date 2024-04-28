let map;
let playerImage;
let BACKGROUND;
const offset = {
  x:-2500,
  y:-2200
}
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

const collisionsMap = []
for (let i =0; i < collisions.length; i += 80) {
  collisionsMap.push(collisions.slice(i, 80 + i))
}



class Boundary {
  static width =64;
  static height =64;
  constructor({position}) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw() {
    fill(255, 0, 0);
    rect(this.position.x, this.position.y, this.width, this.height);
   }
}

const boundaries = []

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 856)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
      }
    })
   )
 })
})

console.log(boundaries);

function preload() {
  map = loadImage('MonsterBayMap.png');
  playerImage = loadImage('PlayerDown.png');
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


function setup() {
  createCanvas(1280, 720);
  // Last working spot 2:35 in vid something up with this don't forget
  //image in video = map for me
  BACKGROUND = new Sprite(createVector(offset.x, offset.y), map);
}

const testBoundary = new Boundary({
  position: {
    x: -2400,
    y: -2200
  }
})
function draw() {
// Draw the background
   BACKGROUND.draw();

   boundaries.forEach(boundary => {
   boundary.draw();
   })
    testBoundary.draw()
 //player image crop
 let cropX = 65;
 let cropY = 0;
 let cropWidth = 55;
 let cropHeight = 68;

// Draw the player
  image(playerImage, width / 2 -playerImage.width / 2, height / 2 - playerImage.height / 2, cropWidth, cropHeight, cropX, cropY, cropWidth, cropHeight);

  if (keys.w.pressed && lastKey === 'w') BACKGROUND.position.y += 5
  else if (keys.a.pressed && lastKey === 'a') BACKGROUND.position.x += 5
  else if (keys.s.pressed && lastKey === 's') BACKGROUND.position.y -= 5
  else if (keys.d.pressed && lastKey === 'd') BACKGROUND.position.x -= 5
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