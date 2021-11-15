function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

    stroke(255, 0, 0);
    fill(255, 0, 0);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);


    stroke(2, 153, 42);
    fill(2, 153, 42);

    rect(63, 27, 375, 17);
    rect(63, 347, 375, 17);
    rect(27, 63, 17, 275);
    rect(448, 63, 17, 275);
}

function take_snapshot(){
    save("frame.png");
}