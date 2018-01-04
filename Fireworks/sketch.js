var fireworks = [];
var gravity;

function setup() {
  createCanvas(1000, 500);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  background(0,0,22,0.8);

}

function draw() {
    colorMode(HSB);
    background(0,0,22,0.8);

  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

}
