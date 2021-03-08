const iterations = 7; 
draw();
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

// Draw border
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(500,0);
  ctx.lineTo(500,500);
  ctx.lineTo(0,500);
  ctx.closePath();
  ctx.stroke(); 


// step = 7
  drawF(iterations);
  }
    // Recursive draw 
    function drawF(step) {
      if (step > 0) {
        
    ctx.save();
    ctx.save();
    ctx.save();
    ctx.save();
    
    ctx.transform(0.5, 0, 0, 0.5, 250, 0);
    if(step == iterations) ctx.fillStyle = "#009933";
    drawF(step-1);
    ctx.restore();

    ctx.transform(0.5, 0, 0, -0.5, 0, 250);
    if(step == iterations) ctx.fillStyle = "#3366ff";
    drawF(step-1);
    ctx.restore();

    ctx.transform(0.25, 0, 0, 0.25, 125, 375);
    if(step == iterations) ctx.fillStyle = "#cc00ff";
    drawF(step-1);
    ctx.restore();

    ctx.transform(-0.5, 0, 0, 0.5, 500, 250);
    if(step == iterations) ctx.fillStyle = "#e6004c";
    drawF(step-1);
    ctx.restore();
      }
      else draw_L();
    }
    function draw_L() {
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(500,0);
      ctx.lineTo(500,250);
      ctx.lineTo(250,250);
      ctx.lineTo(250,500);
      ctx.lineTo(0,500);
      ctx.closePath();
      ctx.fill();
    }
}