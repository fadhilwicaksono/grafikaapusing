var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;
var $canvas=$("#canvas");
var canvasOffset=$canvas.offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
ctx.lineWidth=30;

var cx=canvas.width/2;
var cy=canvas.height/2;
var lineLength = 400;

$("#canvas").mousemove(function(e){handleMouseMove(e);});

function draw(angle){
    ctx.clearRect(0,0,cw,ch);
    ctx.save();
    // membuat garis lurus
    ctx.beginPath();
    ctx.moveTo(cx-lineLength/2,cy)
    ctx.lineTo(cx+lineLength/2,cy);
    ctx.strokeStyle='black';
    ctx.stroke();

    // Membuat garis rotasi
    ctx.translate(cx,cy);
    ctx.rotate(angle) ; 
    ctx.beginPath();
    ctx.moveTo(-lineLength/2,0)
    ctx.lineTo(lineLength/2,0);
    ctx.strokeStyle='gray';
    ctx.stroke();
    ctx.restore();
}

function handleMouseMove(e){
    e.preventDefault();
    e.stopPropagation();
    
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);
    
    // Put your mousemove stuff here
    var dx=mouseX-cx;
    var dy=mouseY-cy;
    var radianAngle=Math.atan2(dy,dx);
    draw(radianAngle);
    
}
