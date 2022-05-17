var cursorX;
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

