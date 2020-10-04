class World{
    constructor(){
        this.gravityCoef = 0.2;
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

            this.addBall(pos, newSpeed, mass, radius, color,  locked,attractOthers);
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

    getMovedForce(pos){ // Calculate where point with mass 1 will be after 1 tick
        const thisX = pos.x;
        const thisY  = pos.y;
        const thisMass = 1;
        for (var i = 0; i < this.balls.length; i++) {
            let secondBall = this.balls[i];
            let        dist = Math.max(funcs.distPos(pos, secondBall.pos),(secondBall.radius)/8);
            let      newAng = funcs.angle360(thisX, thisY, secondBall.pos.x, secondBall.pos.y);
            let    newForce = (thisMass * secondBall.mass) / (dist*dist);
            let actualForce = (newForce / thisMass) * this.gravityCoef;
            pos.x += Math.cos(newAng) * actualForce*20;
            pos.y += Math.sin(newAng) * actualForce*20;
        }
    }



    addGalaxy(pos,speed, mass,radius,color, amountOfMoons, maxOrbitSize, maxMoonMass){
        this.addBall(pos, speed, mass, 30, color);
        for (let i = 0; i < amountOfMoons; i++){

            let orbitSize = funcs.randomInt(radius+5,maxOrbitSize);
            let angleOfOrbit = Math.PI*2 * Math.random();

            let moonMass = funcs.random(maxMoonMass.first, maxMoonMass.second);

            let orbitSpeed = Math.sqrt(mass*this.gravityCoef*2/(orbitSize));
            let moonSpeed  = new Speed(orbitSpeed, angleOfOrbit+Math.PI/2);
            let MoonSpeed = funcs.addTwoSpeed(new Speed(orbitSpeed, angleOfOrbit+Math.PI/2),speed);


            this.addBall(
                new Pos(pos.x+orbitSize*Math.cos(angleOfOrbit), pos.y+orbitSize*Math.sin(angleOfOrbit)),
                MoonSpeed, moonMass,1*moonMass,color, false, false);
        }

    }
}