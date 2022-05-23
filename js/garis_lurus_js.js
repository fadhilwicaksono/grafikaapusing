var c = document.getElementById("canvas");

c.addEventListener('click',showCoords);
var ctx = c.getContext("2d");
ctx.fillStyle = "blue";

var x1, y1, x2, y2;
var isFirst = 0;

function getRealPosX(clientX) {
    // If border, remove it
    if (c.style['border-left-width']) {
        // As border size have 'px' at the end, remove non-numeric
        clientX -= parseInt(c.style['border-left-width'].replace(/[^0-9\.]/g, ''), 10);
    }
    // If margin, remove it
    if (c.style.marginLeft) {
        // As margin size have 'px' at the end, remove non-numeric
        clientX -= parseInt(c.style.marginLeft.replace(/[^0-9\.]/g, ''), 10);
    }
    // If offset, remove it
    if (c.offsetLeft) {
      clientX -= c.offsetLeft ;
    }
    return clientX;
}

function getRealPosY(clientY) {
    if (c.style['border-top-width']) {
        clientY -= parseInt(c.style['border-top-width'].replace(/[^0-9\.]/g, ''), 10);
    }
    if (c.style.marginTop) {
        clientY -= parseInt(c.style.marginTop.replace(/[^0-9\.]/g, ''), 10);
    }
    if (c.offsetTop) {
        clientY -= c.offsetTop
    }
    return clientY;
}


function showCoords(event) {

    //Menyimpan Klik pertama x1 y1
    if (isFirst == 0) {
        x1 = getRealPosX(event.clientX);
        y1 = getRealPosY(event.clientY);
        isFirst = 1;
    }
    //Menyimpan Klik pertama x2 y2
    else {
        x2 = getRealPosX(event.clientX);
        y2 = getRealPosY(event.clientY);


        bresenham(x1, y1, x2, y2);

        //x1=0; x2=0; y1=0; y2=0;
        isFirst = 0; //mengembalikan nilai 0 untuk klik selanjutnya
    }
}

function bresenham(x1, y1, x2, y2) {

    if (x1 == x2 && y1 == y2) {
        ctx.fillRect(x1, y1, 1, 1);
        return;
    }

    var dx = x2 - x1;
    var dy = y2 - y1;

    var steps = Math.max(Math.abs(dx), Math.abs(dy));
    var Xincrement = dx / steps;
    var Yincrement = dy / steps;


    var x = x1,
    y = y1;
    for (var v = 0; v < Math.round(steps); v++) {
        ctx.fillRect(x, y, 1, 1);
        x = x + Xincrement;
        y = y + Yincrement;
    }
}






























/*var cursorX;
var cursorY;
var canvas = document.getElementById("canvas"); 
var ctx = canvas.getContext("2d");
var klikPertama = [0,0]; //koordinat awal
var intervalLoop = null;
function membuatGaris(e) {
   klikPertama = [e.pageX, e.pageY]; //Menentukan Koordinat X dan Y

   intervalLoop = setInterval(function(){
       ctx.clearRect(0, 0, canvas.width, canvas.height); //Membersihkan Canvas
      
       ctx.beginPath(); //Deklarasi Gambar
       ctx.moveTo(klikPertama[0], klikPertama[1]);
       ctx.lineTo(cursorX, cursorY);

       ctx.strokeStyle = '#bd2e1e';
       ctx.stroke();
   },1); //Muncul setiap 1 millisecond
}
function stopGaris(){
   clearInterval(intervalLoop);
}

function init() {
   document.onmousemove = function(e){
       cursorX = e.pageX;
       cursorY = e.pageY;
   };
   canvas.addEventListener('mousedown', membuatGaris, false); //mouse click
   canvas.addEventListener('mouseup', stopGaris, false);//mouse release
}

init();

*/