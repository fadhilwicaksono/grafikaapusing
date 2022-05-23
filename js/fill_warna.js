
var s1 = new Konva.Stage({container: 'container1', width: 1000, height: 500});
var layer1 = new Konva.Layer({draggable: false});
s1.add(layer1);


var r1 = new Konva.Rect({x: 280, y: 120, width: 1000, height: 500, fill: 'white' })    
layer1.add(r1)


var r2 = new Konva.Rect({x: 0, y: 0, width: 0, height: 0, stroke: 'red', dash: [2,2]})    
r2.listening(false); // stop r2 catching our mouse events.
layer1.add(r2)

s1.draw() 
var posStart;
var posNow;
var mode = '';
function startDrag(posIn){
  posStart = {x: posIn.x, y: posIn.y};
  posNow = {x: posIn.x, y: posIn.y};
}

function updateDrag(posIn){ 
  

  posNow = {x: posIn.x, y: posIn.y};
  var posRect = reverse(posStart,posNow);
  r2.x(posRect.x1);
  r2.y(posRect.y1);
  r2.width(posRect.x2 - posRect.x1);
  r2.height(posRect.y2 - posRect.y1);
  r2.visible(true);  
   
  s1.draw();
  
}


r1.on('mousedown', function(e){ 
  mode = 'drawing';
  startDrag({x: e.evt.layerX, y: e.evt.layerY})
  })


r1.on('mousemove', function(e){ 
    if (mode === 'drawing'){
      updateDrag({x: e.evt.layerX, y: e.evt.layerY})
    }
})


r1.on('mouseup', function(e){ 
    mode = '';
    r2.visible(false);
    var newRect = new Konva.Rect({
      x: r2.x(),
      y: r2.y(),
      width: r2.width(),
      height: r2.height(),
      fill: 'red',
      listening: false
    })
    layer1.add(newRect);
    s1.draw();
})



function reverse(r1, r2){
  var r1x = r1.x, r1y = r1.y, r2x = r2.x,  r2y = r2.y, d;
  if (r1x > r2x ){
    d = Math.abs(r1x - r2x);
    r1x = r2x; r2x = r1x + d;
  }
  if (r1y > r2y ){
    d = Math.abs(r1y - r2y);
    r1y = r2y; r2y = r1y + d;
  }
    return ({x1: r1x, y1: r1y, x2: r2x, y2: r2y}); // return the corrected rect.     
}