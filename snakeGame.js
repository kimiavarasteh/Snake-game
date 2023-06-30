'use strict';
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let foodX;
let foodY;

// Draw the rectangle
function drawCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}
drawCanvas();

// Representing the snake as a horizontal line
let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 }
];

// initialising users score
let score = 0;

// Draw a part of the snake
function drawPartOfSnake(snakePart) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokestyle = 'black';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event) {
    const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  //determining which key was pressed
  const keyPressed = event.keyCode;

  //determining the direction of the snake to prevent it from reversing
  const goingUp = dy === 10;
  const goingDown = dy === -10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

// Draw the entire snake
function drawSnake() {
  snake.forEach(drawPartOfSnake);
}

function endGame() {
  for (i = 4; i < snake.length; i++) {
    const hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (hasCollided) {
      //change the score to game over
      document.getElementById('score').innerHTML = "Game Over";
      return true;
    }
  }

  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > canvas.width - 10;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > canvas.height - 10;

  if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall) {
   //change the score to game over
    document.getElementById('score').innerHTML = "Game Over";
    return true;
  }
  return false;

}

let dx = 10;
let dy = 0;

function moveSnake() {
  
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;
  if (hasEatenFood) {
    createSnakeFood();
    score += 10;
    document.getElementById('score').innerHTML = score;
  } else {
    snake.pop();
  }
}

function move() {
  

  setTimeout(function onTick() {
    drawCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    move();
  }, 100);
}

document.addEventListener("keydown", changeDirection);

createSnakeFood();

function randomCoordinate(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function createSnakeFood() {
  foodX = randomCoordinate(0, canvas.width - 10);
  foodY = randomCoordinate(0, canvas.height - 10);
  snake.forEach(function isFoodOnSnake(part) {
    const foodIsOnSnake = part.x === foodX && part.y === foodY;
    if (foodIsOnSnake) {
      createSnakeFood();
    }
  });
}

function drawFood() {
  ctx.fillStyle = 'red';
  ctx.strokestyle = 'darkred';
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}

move();
