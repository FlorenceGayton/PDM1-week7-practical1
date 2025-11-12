let fillPicker;
let bgPicker;


function setup(){
    createCanvas(600, 600);
    fillPicker = createColorPicker('white');
    fillPicker.position(width/2, 100);


    bgPicker = createColorPicker('black');
    bgPicker.position(100, 100)

    
    const container = select("main");
    fillPicker.parent(container);
    bgPicker.parent(container);
}

function draw(){
    background(bgPicker.value());
    textSize(50);
    fill(fillPicker.value());
    textAlign(CENTER, CENTER);
    text("Hello, World!", width/2, height/2);
}

