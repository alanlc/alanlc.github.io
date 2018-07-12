var bird;
var pipes = [];
var score = 0;
function setup(){
    createCanvas (400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw(){
    
    if(keyCode === 82){
            pipes.splice(0, pipes.length);
            bird.y = height/2;
            bird.x = 50;
            bird.gravity = 0.5;
            bird.velocity = 0;
            bird.jump = -15;
            score = 0;
        }
    
    background(0);
    fill(51);
    rect(0,0,width,44);
    bird.fall();
    bird.show();
    fill(255,255,255);
    noStroke();
    textSize(22);
    text('Score: ' + score, width/2, 22);
    
    if(frameCount%100==0){
        pipes.push(new Pipe());

    }
    
    for(var i = pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();
        
        if((pipes[i].hits(bird) || pipes[i].highlight == true) && bird.x == pipes[i].x){
            score -= 1;
        }
        
        if(pipes[i].x == bird.x && pipes[i].highlight == false){
            score += 1
        }
        
        if (pipes[i].offscreen()){
            pipes.splice(i, 1);
        }

    }
            
}

function keyPressed(){
    if (keyCode === 32){
        bird.flap();
    }
}

function resetSketch(){
    bird.y = height/2;
    bird.x = 50;
    bird.gravity = 0.5;
    bird.velocity = 0;
    bird.jump = -15;
}

function point(){

            score += 1;

}
