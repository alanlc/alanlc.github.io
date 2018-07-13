var minval = -0.88;
var maxval = 0.88;

var minSlider;
var maxSlider;

var frDiv;

function setup() {
  createCanvas(333, 333);
  pixelDensity(1);

  minSlider = createSlider(-2.5, 0, -2.5, 0.01);
  maxSlider = createSlider(0, 2.5, 2.5, 0.01);

  frDiv = createDiv('');
}

function draw() {
  var maxiterations = 100;

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      minSlider.position(22,365)
      maxSlider.position(172,365)
      var a = map(x, 0, width, minSlider.value(), maxSlider.value());
      var b = map(y, 0, height, minSlider.value(), maxSlider.value());

      var aOg = a;
      var bOg = b;

      var n = 0;

      while (n < maxiterations) {
        var aNew = a * a - b * b;
        var bNew = 2 * a * b;
        a = aNew + aOg;
        b = bNew + bOg;
        if (a * a + b * b > 44) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, maxiterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      if (n == maxiterations) {
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright*2;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright*2;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();

}
