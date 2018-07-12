function Bird(){
    this.y = height/2;
    this.x = 50;
    this.gravity = 0.5;
    this.velocity = 0;
    this.r = 32
    this.jump = -15;
    
    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, this.r, this.r);
    }
    
    this.flap = function(){
        this.velocity = (this.velocity) + 0.8*(this.jump);
    }
    
    this.fall = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.95;
        
        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }
        if(this.y < 44){
            this.y = 44;
            this.velocity = 0;
        }
    }
}