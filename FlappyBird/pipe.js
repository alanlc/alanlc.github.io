function Pipe() {
    
    colorMode(HSB, 360, 100, 100, 1);
    
    var hu = random(0, 360);
    var sat = random(0,88);    
    var spacing = random(122, height/2);
    var ymid = random(spacing, height - spacing);
    
    this.top = ymid - spacing / 2;
    this.bottom = height - (ymid + spacing / 2);
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.highlight = false;
    
    this.hits = function(bird){
        if (bird.y < this.top + 2*bird.r - 5 || bird.y > height - this.bottom - bird.r + 5) {
            if(bird.x > this.x - bird.r/2 + 5 && bird.x < this.x + this.w + bird.r/2 - 5 ){
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }
    
    this.show = function(){
        fill(hu, sat, 88, 1);
        if(this.highlight){
            fill(360,100,100, 1);
        }
        rect(this.x, 44, this.w, this.top, 20);
        rect(this.x, height-this.bottom, this.w, this.bottom, 20);

    }
    
    this.update = function() {
        this.x -= this.speed;
    }
    
    this.offscreen = function(){
        return (this.x < -this.w);
    }
}