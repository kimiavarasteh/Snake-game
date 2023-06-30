'use strict'
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//Draw the rectangle
ctx.fillStyle = "white";  // Set fill color to white
ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill the entire canvas with white
ctx.strokeStyle = "black";  // Set stroke color to black
ctx.strokeRect(0, 0, canvas.width, canvas.height);  // Draw a black border around the canvas

//representing the snake as a horizonatl line
let snake = [{ x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },];

//draw the snake using drawSnakePart function
function drawPartOfSnake(snakePart) {
  ctx.fillStyle = 'lightgreen'; ctx.strokestyle = 'black';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
  snake.forEach(drawPartOfSnake);
}

//drawSnake();

function moveVertically() {
  const head = { x: snake[0].x + dx, y: snake[0].y };
  //adding the new head value to the beginning of the snake array 
  snake.unshift(head);
  //removing the last element of the snake array
  snake.pop();
}