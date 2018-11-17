// Var

var can = {
    width: 700,
    height: 650,
}

// Colors

var colors = document.querySelectorAll("ul.colors > li");
var shades = document.querySelectorAll("ul.shades > li");

var redC = colors[0];
redC.style.backgroundColor = "#ff0000";
var orangeC = colors[1];
orangeC.style.backgroundColor = "#ffa500";
var yellowC = colors[2];
yellowC.style.backgroundColor = "#ffff00";
var greenC = colors[3];
greenC.style.backgroundColor = "#008000";
var blueC = colors[4];
blueC.style.backgroundColor = "#0000ff";
var indigoC = colors[5];
indigoC.style.backgroundColor = "#4B0082";
var purpleC = colors[6];
purpleC.style.backgroundColor = "#800080";
var blackC = shades[0];
blackC.style.backgroundColor = "#000000";
var greyC = shades[1];
greyC.style.backgroundColor = "#808080";
var whiteC = shades[2];
whiteC.style.backgroundColor = "#FFFFFF";

var currentColor = redC.style.backgroundColor;

function changeCurrentColor() {
    currentColor = this.style.backgroundColor;
}

for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", changeCurrentColor);
}

for (var i = 0; i < shades.length; i++) {
    shades[i].addEventListener("click", changeCurrentColor);
}

// Brush

var brush = document.querySelectorAll("ul.brush > li");

var bigger = brush[0];
var smaller = brush[1];
var sizeBrush = parseInt(brush[2].textContent);
var round = brush[3];
var square = brush[4];

var currentBrush = "round";

function changeCurrentBrush(){
    currentBrush = this.className;
}

function sizeBigger(){
    sizeBrush += 5;
    brush[2].textContent = sizeBrush;
}

function sizeSmaller(){
    if(sizeBrush > 0){
        sizeBrush -= 5;
        brush[2].textContent = sizeBrush;
    } else{
        sizeBrush = 0;
        brush[2].textContent = sizeBrush;
    }
}

round.addEventListener("click", changeCurrentBrush);
square.addEventListener("click", changeCurrentBrush);
bigger.addEventListener("click", sizeBigger);
smaller.addEventListener("click", sizeSmaller);


// Draw

function setup() { 
    createCanvas(can.height, can.width);
    frameRate(99999999999999);
    currentColor = blackC.style.backgroundColor;
} 
  
function draw() {
    if (mouseIsPressed == true && currentBrush == "round" && mouseY >= 0 && mouseY <= can.height && mouseX >= 0 && mouseX <= can.width) {
        fill(currentColor);
        noStroke();
        ellipse(mouseX, mouseY, sizeBrush,sizeBrush);
    }
    if (mouseIsPressed == true && currentBrush == "square" && mouseY >= 0 && mouseY <= can.height && mouseX >= 0 && mouseX <= can.width) {
        fill(currentColor);
        noStroke();
        rect(mouseX-sizeBrush/2, mouseY-sizeBrush/2, sizeBrush, sizeBrush);
    }
}