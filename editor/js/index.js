function draw(image){
   const canvas = document.getElementById("my-canvas");
   const context = canvas.getContext("2d");

//    context.fillStyle = "red";
//    context.fillRect(0,0, 150,150);
context.strokeStyle = "black";
context.lineWidth = 1;

const width = image.width();
const height = image.height();
const cellSize = 50;

// const cells = image.cells();


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

async function main()
{
const lib = await import("../pkg/index.js").catch(console.error);

const image = new lib.Image(10, 10);

console.log(image);
draw(image);
}

main();