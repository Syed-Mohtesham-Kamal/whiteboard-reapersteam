const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown',start);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',stop);

function stop(e){
isDrawing = true;
}

function draw({clientX: c, clientY: y}){
if(!isDrawing) return;

ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "#171717";

ctx.lineTo(x,y);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(x,y);
}

function stop (){
isDrawing = flase;
ctx.beginPath();
}

window.addEventListener('resize', resizeCanvas);
function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
}
resizeCanvas();
