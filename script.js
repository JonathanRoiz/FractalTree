let canvas = document.getElementById('canvas');
let slider = document.getElementById('slider');
let ctx = canvas.getContext('2d');

slider.min = 0;
slider.max = Math.PI;
slider.value = Math.PI / 4;
slider.step = ".01";

let angle = Math.PI / 4;

canvas.width = 400;
canvas.height = 400;

ctx.translate(canvas.width / 2, canvas.height);

function drawLine(x1, y1, x2, y2) {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function branch(length, angle) {
  drawLine(0, 0, 0, -length);
  ctx.translate(0, -length);
  if (length > 5) {
    ctx.save();
    ctx.rotate(angle);
    branch(length * .67, angle);
    ctx.restore();
    ctx.rotate(-angle);
    branch(length * .67, angle);
  }
}

slider.oninput = function () {
  angle = this.value;
}

setInterval(function () {
  ctx.resetTransform();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.translate(canvas.width / 2, canvas.height);
  branch(115, angle);
}, 10);
