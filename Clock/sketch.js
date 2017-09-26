function setup() {
   createCanvas(800, 400);
   angleMode(DEGREES);
 }

 function draw() {
   background(0);
   translate(200, 200);
   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();
   var MilSec = millis();

     
   //SECONDS
   strokeWeight(8);
   stroke(255, 100, 150);
   noFill();
   let secondAngle = map(sc, 0, 60, 1, 360);
   arc(0, 0, 300, 300, 0, secondAngle);
   strokeWeight(2);
   fill(255,100,150);
   arc(-100, 300, 88, 88, -1*(180 + (secondAngle/2)), (180 + (secondAngle/2)), CHORD);
   arc(100, 300, 88, 88,((secondAngle/2))%180, (-1*(secondAngle/2))%180, CHORD);

   //MINUTES
   strokeWeight(8);
   noFill();
   stroke(150, 100, 255);
   let minuteAngle = map(mn, 0, 60, 1, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);
   fill(150,100,255);
   strokeWeight(2);
   arc(-100, 400, 88, 88, -1*(180 + (minuteAngle/2)), (180 + (minuteAngle/2)), CHORD);
   arc(100, 400, 88, 88,((minuteAngle/2))%180, (-1*(minuteAngle/2))%180, CHORD);

   //HOURS
   strokeWeight(8);
   noFill();
   stroke(150, 255, 100);
   let hourAngle = map(hr % 12, 0, 12, 1, 360);
   arc(0, 0, 260, 260, 0, hourAngle);
   fill(150,255,100);
   strokeWeight(2);
   arc(-100, 500, 88, 88, -1*(180 + (minuteAngle/2)), (180 + (minuteAngle/2)), CHORD);
   arc(100, 500, 88, 88,((hourAngle/2))%180, (-1*(hourAngle/2))%180, CHORD);
     
   push();
   rotate(secondAngle);
   stroke(255, 100, 150);
   line(0, 0, 100, 0);
   pop();

   push();
   rotate(minuteAngle);
   stroke(150, 100, 255);
   line(0, 0, 75, 0);
   pop();

   push();
   rotate(hourAngle);
   stroke(150, 255, 100);
   line(0, 0, 50, 0);
   pop();

   fill(255,255,255);
   point(0, 0);


   //  fill(255);
   //  noStroke();
   //  text(hr + ':' + mn + ':' + sc, 10, 200);


 }
