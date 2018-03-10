let canvasWidth = 900;
let canvasHeight = 900;
let startLineLength = 120;
let startStrokeWidth = 15;
let childBranchLengthRatio = 0.8;

let maxRep = 10;
var currentRep = 0;

function setup() {
    //noLoop()
    frameRate(2)
}

function randomColor() {
    let a = random(50, 255);
    let b = random(50, 255);
    let c = random(50, 255);
    return color(a, b, c)
}

function drawLeftBranch(lineLength) {
    push();
    rotate(PI / 4);
    line(0, 0, 0, lineLength);
    translate(0, lineLength, 0);
    drawBranches(lineLength * childBranchLengthRatio);
    pop();
}

function drawRightBranch(lineLength) {
    push();
    rotate(-PI / 4);
    line(0, 0, 0, lineLength);
    translate(0, lineLength, 0);
    drawBranches(lineLength * childBranchLengthRatio);
    pop();
}

function drawBranches(lineLength) {
    if (lineLength > random(5, 100)) {
        stroke(randomColor());
        strokeWeight(map(lineLength, startLineLength, 10, startStrokeWidth, 1));
        drawLeftBranch(lineLength);
        drawRightBranch(lineLength);
    }
}

function draw() {
    /*
    blendMode(DARKEST);

    strokeWeight(0);
    fill(50);
    rect(0,0,300,300);

    strokeWeight(30);
    stroke(0, 0, 255);
    line(25, 25, 75, 75);
*/

    createCanvas(canvasWidth, canvasHeight);
    background(0);
    stroke(randomColor());
    strokeWeight(startStrokeWidth);

    translate(canvasWidth/2, canvasHeight/2);

    push();
    rotate(0);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    rotate(PI*0.5);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    rotate(PI*1);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    rotate(PI*1.5);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    currentRep += 1;
    if (currentRep >= maxRep) {
        currentRep = 0;
    }
}
