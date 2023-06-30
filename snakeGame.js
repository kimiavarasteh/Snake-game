'use strict';
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

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

// Draw a part of the snake
function drawPartOfSnake(snakePart) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokestyle = 'black';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Draw the entire snake
function drawSnake() {
  snake.forEach(drawPartOfSnake);
}

// let dx = 0;
// let dy = -10;
let dx = 10;
let dy = 0;

function moveSnake() {

  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  snake.unshift(head);
  snake.pop();
}

// Call the moveSnake() and drawSnake() functions
// moveSnake();
// drawSnake();


function move() {
  setTimeout(function onTick() {
    drawCanvas();
    moveSnake();
    drawSnake();
    move();
  }, 100)
}

move();