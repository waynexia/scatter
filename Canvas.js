var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";

function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
  }

var ctx = setupCanvas(document.querySelector('#Canvas'));
ctx.lineWidth = 7;
ctx.lineCap = "round"
ctx.beginPath();
var lineLength = 77;

var image,canvas;
//read image
function readimg(){

    var img = document.getElementById('image');
    var canvas = document.getElementById('img_output');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.width = img.width;
    ctx.height = img.height;
    //alert(img);
    canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);

    setInterval(function(){drawLine(canvas);},50);
    setInterval(function(){drawLine(canvas);},50);
    setInterval(function(){drawLine(canvas);},50);
}

function drawLine(canvas)
{
    var beginX = Math.random()*ctx.width;
    var beginY = Math.random()*ctx.height;
    var radio = RandomRadio();
    var endX = beginX + Math.sin(radio) *lineLength;
    var endY = beginY + Math.cos(radio) *lineLength;
    ctx.beginPath();
    ctx.moveTo(beginX,beginY);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle=getColor(canvas,beginX,beginY,endX,endY);
    ctx.stroke();
    ctx.closePath();
}

function getColor(canvas,beginX,beginY,endX,endY){
    pixel = canvas.getContext("2d").getImageData(beginX,beginY,1,1).data;
    return (rgbToHex(pixel[0],pixel[1],pixel[2]));
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function RandomRadio(){
    return Math.random()*2*Math.PI;
}


/*setInterval(ctx.clearRect(0,0,ctx.width,ctx.height),2000);
ctx.clearRect(0,0,ctx.width,ctx.height)*/

