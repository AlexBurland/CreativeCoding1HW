let map;
let playerImage;
let BACKGROUND;
let testBoundary;
let player;
 //player image crop
 let cropX = 66;
 let cropY = 0;
 let cropWidth = 55;
 let cropHeight = 68;
const offset = {
  x: -2500,
  y: -2200
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


function preload() {
  console.log("Loading images...");
  map = loadImage('MonsterBayMap.png', () => console.log("Map image loaded"));
  playerImage = loadImage('PlayerDown.png', () => console.log("Player image loaded"));
}

class Sprite {
  constructor({position, velocity, image, frames = {max: 1 } }) {
    this.position = position;
    this.image = image;
    this.frames = frames;

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
      console.log(this.width);
      console.log(this.height);
    }  
}

draw() {
    image(
    this.image,
    this.position.x,
    this.position.y,
    this.image.width / this.frames.max,
    this.image.height,
    cropX,
    cropY,
    cropWidth,
    cropHeight
    );
    
}
}


class Overwolrd {
    constructor({position, image, frames = {max: 1 } }) {
        this.position = position;
        this.image = image;
        this.frames = frames;

        //Last spot this doesn't work at all. Is also duplicated in
        //Sprite class that I seperated player and map for.
        //Consider finding new video tutorial.
        this.image.onload = () => {
          this.width = this.image.width / this.frames.max;
          this.height = this.image.height;
          console.log(this.width);
          console.log(this.height);
    }
  }
    draw() {
      image(this.image, this.position.x, this.position.y);
    }
  
}

function setup() {
  createCanvas(1280, 720);
 
  BACKGROUND = new Overwolrd ({
    position: {
     x: offset.x,
     y: offset.y
    },
     image: map
  });

  player = new Sprite ({
    position: {
     x: width / 2 - 192 / 3 / 2,
     y: height / 2 - 68 / 2
 },
 image: playerImage,
 frames: {
   max : 3
   }
 });

  testBoundary = new Boundary({
    position: {
      x: 400,
      y: 200
    }
  });

   movables = [BACKGROUND, testBoundary];
}




function draw() {

  
// Draw the background
   BACKGROUND.draw();

   // Collisions
  // boundaries.forEach(boundary => {
   //boundary.draw();
   //})
    testBoundary.draw();

// Draw the player
 player.draw();

 if (player.position.x + player.width >= testBoundary.position.x) {
  console.log('colldiing');
 }


  if (keys.w.pressed && lastKey === 'w') {
    movables.forEach((movable) => {
      movable.position.y += 5;
    })
   
  } else if (keys.a.pressed && lastKey === 'a') {
    movables.forEach((movable) => {
    movable.position.x += 5;
  })
} else if (keys.s.pressed && lastKey === 's') {movables.forEach((movable) => {
    movable.position.y -= 5;
  })
} else if (keys.d.pressed && lastKey === 'd') {movables.forEach((movable) => {
    movable.position.x += -5;
  })
 }
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