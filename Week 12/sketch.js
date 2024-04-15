//coordinates of player location
var characterX = 200;
var characterY = 200;
//Movement keys
var w = 87;
var s= 83;
var a = 65;
var d = 68;
//coordinates of enemey characters
var enemyX = 30;
var enemyY = 50;
var enemyXSpeed;
var enemyYSpeed;

var snakeX = 200;
var snakeY = 250;
var snakeXSpeed;
var snakeYSpeed;
//coordinates of object created by clicking mouse
var mouseShapeX;
var mouseShapeY;

function setup()
{
  createCanvas(800, 800);
  createCharacter(100,150);
  enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
}

function draw()
{
  background(45, 45, 45);
  stroke(0);
  fill(0);
  createBorders(10);
  finish("Escape", width -100, height - 80, 20, color(255));
  drawCharacter();
  characterMovement();
  createEnemy(color(255, 15, 15), 50);
  createSnake();
  mouseShape();
}

function finish(textContent, x, y, size, textColor)
{
  textSize(size);
  fill(textColor);
  text(textContent, x, y);
}

function createEnemy(enemyColor, enemySize)
{
  fill(enemyColor);
  square(enemyX, enemyY, enemySize);

  enemyX += enemyXSpeed;
  enemyY += enemyYSpeed;

  if(enemyX > width || enemyX < 0 || enemyY > height || enemyY < 0)
  {
  enemyX = Math.floor(Math.random() * width);
  enemyY = Math.floor(Math.random() * height);
  }
}

function createSnake()
{
  fill(155,155,15);
  square(snakeX, snakeY, 100);

  snakeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  snakeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  snakeX += snakeXSpeed;
  snakeY += snakeYSpeed;

  if(snakeX > width)
  {
      snakeX = 0;
  }
  else if(snakeX < 0)
  {
      snakeX = width;
  }
  if(snakeY > height)
  {
      snakeY = 0;
  }
  else if(snakeY < 0)
  {
      snakeY = height;
  }


  if(characterX > width && characterY > width-50)
  {
      fill(0);
      stroke(5);
      textSize(26);
      text("Winner", width/2-50, height/2-50);
  }
}

function characterMovement()
{
 
  if(keyIsDown(w))
  {
      characterY -= 5;   
  }
  if(keyIsDown(s))
  {
      characterY += 5;   
  }
  if(keyIsDown(a))
  {
      characterX -= 5;   
      console.log("movement: " + characterX);
  }
  if(keyIsDown(d))
  {
      characterX += 5;   
  }
}

function createCharacter(x,y)
{
  characterX = x;
  characterY = y;
  console.log(characterX);
}
 
function drawCharacter()
{
fill(15,140,223);
triangle(characterX,characterY,characterX + 20, characterY + 20, characterX +20, characterY);
}

function createBorders(thickness)
{
  rect(0,0,width,thickness);
  rect(0,0,thickness,height);
  rect(0, height-thickness,width, thickness);
  rect(width-thickness,0,thickness,height-50);
}

function mouseShape()
{fill(10,10,140);
  circle(mouseShapeX, mouseShapeY, 45);
}

function mouseClicked()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}