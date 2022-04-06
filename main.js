function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_shape = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_shape);

}

function take_snapshot() {
    save('satvik.png');

}

function filter_tint() {
    tint_shape = document.getElementById("shape_name").value;

}