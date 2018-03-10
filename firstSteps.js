let canvasWidth = 900;
let canvasHeight = 800;
let startLineLength = 90;
let startStrokeWidth = 15;
let childBranchLengthRatio = 0.75;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(0);
    stroke(randomColor());
    strokeWeight(startStrokeWidth);
    noLoop()
    // /frameRate(8)
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
    if (lineLength > random(5, 30)) {
        stroke(randomColor());
        strokeWeight(map(lineLength, startLineLength, 10, startStrokeWidth, 1));
        drawLeftBranch(lineLength);
        drawRightBranch(lineLength);
    }
}

function draw() {
    push();
    translate(40 + startLineLength * 2, 0);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    translate(40 + startLineLength * 7, 0);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    translate(40 + startLineLength * 2, startLineLength * 4);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();

    push();
    translate(40 + startLineLength * 7, startLineLength * 4);
    line(0, 0, 0, startLineLength);
    translate(0, startLineLength);
    drawBranches(startLineLength * childBranchLengthRatio);
    pop();
}
