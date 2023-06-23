const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Draw the rectangle
ctx.fillStyle = "white";  // Set fill color to white
ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill the entire canvas with white
ctx.strokeStyle = "black";  // Set stroke color to black
ctx.strokeRect(0, 0, canvas.width, canvas.height);  // Draw a black border around the canvas