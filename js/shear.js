var sx,sy;

function pergeseran(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    


    var rectWidth = 300;
    var rectHeight = 155;
    
    // matrik pergeseran:
    //  1  sx  0              
    //  sy  1  0
    //  0   0  1  
    var horizontal = document.getElementById("hori").value;
    console.log(horizontal);
    var vertikal = document.getElementById("verti").value;
    
    sx = horizontal; // 0.75 pergeseran horizontal
    sy = vertikal; // no pergeseran vertical 

    //menempatkan ditengah2
    context.translate(canvas.width / 2, canvas.height / 2);
    
    //mengaplikasikan hasil sy sx ke matrix
    context.transform(1, sy, sx, 1, 0, 0);
    
    context.fillStyle = "black";
    context.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
};    