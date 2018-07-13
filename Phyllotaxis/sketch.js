var n = 0;
var c = 7;
var rSlider, gSlider, bSlider;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    colorMode(RGB, 255, 255, 255, 255);
      textSize(15);
      rSlider = createSlider(0, 255, 100);
      rSlider.position(20, 522);
      gSlider = createSlider(0, 255, 0);
      gSlider.position(20, 552);
      bSlider = createSlider(0, 255, 255);
      bSlider.position(20, 582);
}

function draw(){
    background(88);
      var red = rSlider.value();
      var g = gSlider.value();
      var b = bSlider.value();
    if (n<=700){
        translate(width / 2, height / 2);
        rotate(n * 0.3);
        for (var i = 0; i < n; i++){
        var a = i * 137.5;
        var r = c * sqrt(i);
        var x = r * cos(a);
        var y = r * sin(a);
        fill(red,g,b);
        noStroke();
        ellipse(x, y, 8, 8);
        }
        n++;
    }else{n=10}
}
