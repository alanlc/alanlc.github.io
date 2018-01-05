function Particle(x, y, hu, firework) {
colorMode(HSL);

  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;
  this.acc = createVector(0, 0);
  
  if (this.firework) {
    this.vel = createVector(random(-2,2), random(-12, -8));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 10));
  }
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    if (this.firework) {
            stroke(0,0,100,1);
            fill(0,0,100,1);
            strokeWeight(4);
            point(this.pos.x, this.pos.y);
    } else {
            stroke(hu,100,50,0.5);
            fill(hu,100,50,0.5);
            strokeWeight(2);
            point(this.pos.x, this.pos.y);

    }
    
  }
}
