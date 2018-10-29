var world = {
    startPosition: null,
    startVelocity: null,
    gravity: null
}

var ball = {
    position: null,
    velocity: null,
    acceleration: null
}

function setup() {
    createCanvas(640, 480);
    textSize(28)
    
    world.startPosition = createVector(300, 50);
    world.startVelocity = createVector(0, 0);
    world.gravity = createVector(0, 0.1);

    ball.position = world.startPosition.copy();
    ball.velocity = world.startVelocity.copy();
    ball.acceleration = world.gravity.copy();
}
  
function draw() {
    ball.position.add(ball.velocity);
    ball.velocity.add(ball.acceleration);

    
    if (ball.position.y >= height - 10) {
        ball.velocity.y *= -0.6;
        ball.position.y = height - 10;
    }
    
    background('#ddd');
    stroke(0);
    strokeWeight(2);
    fill(255,127);
    ellipse(ball.position.x, ball.position.y, 20, 20)

}

function mouseClicked() {
    ball.position = world.startPosition.copy();
    ball.velocity = world.startVelocity.copy();
    ball.acceleration = world.gravity.copy();
}

