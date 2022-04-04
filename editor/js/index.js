const cellSize = 50;

function draw(state){
   const canvas = document.getElementById("my-canvas");
   const context = canvas.getContext("2d");

  //  context.fillStyle = "white";
  //  context.fillRect(0, 150,150,0);
context.strokeStyle = "black";
context.lineWidth = 1;

const image = state.image;
const width = image.width();
const height = image.height();


const cells = image.cells();

for(let x = 0 ; x < width; x++){
    for(let y = 0 ; y < height; y++){ 
      const index = ((y * width) + x) * 3;
      const color = "rgb(${cells[index + 0]}, ${cells[index + 1]}, ${cells[index + 2]})";
      context.fillStyle = state.currentColor;
      context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
    } }

for(let x = 0 ; x <= width; x++){
context.beginPath();
context.moveTo(x*cellSize + 0.5, 0);
context.lineTo(x*cellSize + 0.5, height*cellSize);
context.stroke();
}
for(let y = 0 ; y <= height; y++){
    context.beginPath();
    context.moveTo(0, y * cellSize + 0.5);
    context.lineTo(width*cellSize, y * cellSize + 0.5);
    context.stroke();
    }
}

Document.getElementById("red").addEventListener("click", (event) => {
        state.currentColor = [255, 200, 200]
});
Document.getElementById("blue").addEventListener("click", (event) => {
  state.currentColor = [200, 200, 255]
});
Document.getElementById("green").addEventListener("click", (event) => {
  state.currentColor = [200, 255, 200]
});
function setupCanvas(image) {
 const canvas = document.getElementById("my-canvas");

 canvas.addEventListener('click', (event)=> {
  const rect = canvas.getBoundingClientRect();

  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  x = Math.floor(x / cellSize);
  y = Math.floor(y / cellSize);

  const image = state.image;
   image.brush(x, y,state.currentColor);
  draw(image);
 })

}
 
async function main()
{
const lib = await import("../pkg/index.js").catch(console.error);

const image = new lib.Image(10, 10);

const state = {
  image,
  currentColor: [200, 255, 200]
}
 setupCanvas(state);
draw(state);
}

main();