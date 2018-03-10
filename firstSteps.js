let canvasWidth = 900;
let canvasHeight = 900;
let startLineLength = 120;
let startStrokeWidth = 15;
let childBranchLengthRatio = 0.8;

let maxRep = 25;
var currentRep = 0;
var gettingDarker = true;

function setup() {
    //noLoop()
    frameRate(maxRep / 15)
}

function randomColor() {
    x = map(currentRep, 0, maxRep, 0, 255);
    let a = random(50, 255) - x;
    let b = random(50, 255) - x;
    let c = random(50, 255) - x;
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

function loop_pulse() {
    if (gettingDarker) {
        currentRep += maxRep / 10;
        if (currentRep >= maxRep) {
            currentRep = maxRep;
            gettingDarker = false;
        }
    }
    else {
        currentRep -= maxRep / 25;
        if (currentRep <= 0) {
            currentRep = 0;
            gettingDarker = true;
        }
    }
}

function draw() {
    createCanvas(canvasWidth, canvasHeight);
    background(0);
    stroke(randomColor());
    strokeWeight(startStrokeWidth);

    translate(canvasWidth / 2, canvasHeight / 2);

    push();
    rotate(0);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    rotate(PI * 0.5);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    rotate(PI * 1);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    rotate(PI * 1.5);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    loop_pulse();
}
