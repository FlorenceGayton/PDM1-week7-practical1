function setup(){
    createCanvas(600, 600);
    background(0);
    let button = createButton('click me');
    button.position(0, height - 50);
    button.size(width, 50);
    const container = select("main");
    button.parent(container);
    button.mouseClicked(createShape);
}


function draw(){
}

function createShape(){
    x = random(0, width);
    y = random(0, height - 50);
    w = random(50, 100);
    r = random(0, 225);
    g = random(0, 225);
    b = random(0, 225);
    fill(r, g, b);    
    circle(x, y, w);
}
