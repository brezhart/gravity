class World{
    constructor(){
        this.gravityCoef = 1;
        this.balls = [];
        this.isPaused = false;
    }
    initVisual(...args){
        console.log("THERE", ...args);
        this.visual = new WorldVisual(...args);
    }
    addBall(...args){
        let ball = new Ball(...args);
        ball.world = this;
        this.balls.push(ball);
    }
    addClaster(xPair,yPair,amount, speed,mass,radius,color, locked, attractOthers){
        for (let i = 0; i < amount; i++){
            let newSpeed = {};
            Object.assign(newSpeed,speed);
            let pos = new Pos( funcs.random(xPair.first,xPair.second),
                funcs.random(yPair.first,yPair.second));

            this.addBall(pos, newSpeed, mass, radius, color == "random" ? funcs.getRandomColor() : color,  locked,attractOthers);
        }
    }
    tick(){
        for (let i = 0; i < this.balls.length; i++){
            this.balls[i].updateSpeed()
        }
        for (let i = 0; i < this.balls.length; i++){
            this.balls[i].updatePos()
        }
    }
    continueGame(){
        console.log("CONTINUE");
        this.isPaused = false;

    }
    stopGame(){
        console.log("STOPPING");
        this.isPaused = true;
    }
}