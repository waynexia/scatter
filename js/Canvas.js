function setupCanvas(canvas, img) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = img.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    /*canvas.width = img.width * dpr;
    canvas.height = img.height * dpr;*/

    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);

    return ctx;
}

var ctx,canvas;

//read image
function readimg() {

    var img = document.getElementById('image');
    canvas = document.getElementById('img_output');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx = setupCanvas(document.querySelector('#Canvas'), img);
    //var ctx = document.getElementById("Canvas");
    ctx.width = img.width;
    ctx.height = img.height;
    ctx.clearRect(0, 0, img.width, img.height);
    //put white background
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,10000,10000);
    //alert(img);
    canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);

    setSpeed(3,ctx,canvas);
    /*setInterval(function () { drawLine(ctx, canvas); }, 50);
    setInterval(function () { drawLine(ctx, canvas); }, 50);
    setInterval(function () { drawLine(ctx, canvas); }, 50);*/
}

function aboutWidth(mode, value) {
    if (mode == "set") {
        base = Math.min(canvas.height,canvas.width);
        this.width = (value/100)*base/50
    }
    else if (mode == "get") {
        if (this.width == undefined) width = 3
        return width
    }
}

function aboutLength(mode, value) {
    if (mode == "set") {
        base = Math.min(canvas.height,canvas.width);
        this.length = (value/100)*base/10*1.5
    }
    else if (mode == "get") {
        if (this.length == undefined) this.length = 30
        return this.length
    }
}


function setSpeed(value) {
    if(this.intervals == undefined) this.intervals = [];
    intervals.forEach(clearInterval);
    var i = setInterval(function() {
        drawLine(ctx,canvas);
    }, 200/value);
    for(cnt=0;cnt<6;++cnt)
    {
        intervals.push(i);
    }
        
}

function drawLine(ctx, canvas) {
    ctx.lineWidth = aboutWidth("get", 0)
    ctx.lineCap = "round"
    var lineLength = aboutLength('get', 0);
    var beginX = Math.random() * ctx.canvas.width;
    var beginY = Math.random() * ctx.canvas.height;
    var radio = RandomRadio();
    var endX = beginX + Math.sin(radio) * lineLength;
    var endY = beginY + Math.cos(radio) * lineLength;
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = getColor(canvas, beginX, beginY, endX, endY);
    ctx.stroke();
    ctx.closePath();
}

function getColor(canvas, beginX, beginY, endX, endY) {
    pixel = canvas.getContext("2d").getImageData(beginX, beginY, 1, 1).data;
    return (rgbToHex(pixel[0], pixel[1], pixel[2]));
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function RandomRadio() {
    return Math.random() * 2 * Math.PI;
}

function saveImage(){
    var base64img = ctx.canvas.toDataURL();
    var oA = document.createElement('a');
    oA.href = base64img;
    date = new Date()
    oA.download = 'scatter' + date.getTime()

    var event = document.createEvent('MouseEvent');
    event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
    oA.dispatchEvent(event);
}

function resize(){
    container = document.getElementById('image');
    console.log(container.width);
    console.log(container.height);
    /*canvasContainer = document.getElementById("canvasContainer");
    canvasContainer.width = container.width+"px";
    canvasContainer.height = container.height+"px";*/
    ctx.canvas.width = container.width;
    ctx.canvas.height = container.height;
    canvas.width = container.width
    canvas.height = container.height;
    var img = document.getElementById('image');
    canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
}