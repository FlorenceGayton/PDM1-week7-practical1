function setup(){
    createCanvas(800, 600);
    background(225);
    brushColour = createColorPicker('black');
    brushColour.position(150, 534);


    brushSlider = createSlider(1, 50, 10);
    brushSlider.position(350, 540);
    brushSlider.size(100);

    button = createButton('Clear canvas');
    button.position(600, 530);
    button.mousePressed(clearCanvas);

    
    const container = select("main");
    if (container){
        brushColour.parent(container);
        brushSlider.parent(container);
        button.parent(container);
    }
}

function draw(){
    noStroke();
    fill(220);
    rect(0, 500, width, 100);
    textSize(20);
    fill(0);
    textAlign(CORNER, CORNER);
    text("Brush colour:", 25, 555);


}


function mousePressed(){
    if (mouseY < 500){
        fill(brushColour.value());
        circle(mouseX, mouseY, brushSlider.value());
    }

}

function clearCanvas(){
    background(225);
}
