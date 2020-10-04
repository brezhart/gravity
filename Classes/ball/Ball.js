class Ball{
    constructor(pos,speed,mass,radius, color = "blue" , locked = false,attractOthers = true){

        this.pos = pos;
        this.speed = speed;
        this.mass = mass;
        this.radius = radius;
        this.locked = locked;
        this.color = color == "random" ? funcs.getRandomColor() : color;
        this.attractOthers = attractOthers;
        if (typeof attractOthers === 'undefined'){
            this.attractOthers = true;
        }
        this.world = {};
        this.visual = new BallVisual(this);
        this.id = Math.random();
    }
    updateSpeed() {
        if (!this.locked) {

            // toOptimize
            let x = Math.cos(this.speed.ang) * this.speed.val;
            let y = Math.sin(this.speed.ang) * this.speed.val;
            const thisX = this.pos.x;
            const thisY  = this.pos.y;
            const thisMass = this.mass;
            const thisId = this.id;
            for (var i = 0; i < this.world.balls.length; i++) {
                let secondBall = this.world.balls[i];
                if (secondBall.attractOthers && (thisId !== secondBall.id)) {
                    let        dist = Math.max(funcs.distPos(this.pos, secondBall.pos),(this.radius + secondBall.radius)/2);
                    let      newAng = funcs.angle360(thisX, thisY, secondBall.pos.x, secondBall.pos.y);
                    // let    newForce = (thisMass * secondBall.mass) / (dist*dist);
                    // let actualForce = (newForce / thisMass) * this.world.gravityCoef;
                    let    newForce = (secondBall.mass) / (dist*dist);
                    let actualForce = (newForce) * this.world.gravityCoef;

                    x += Math.cos(newAng) * actualForce;
                    y += Math.sin(newAng) * actualForce;

                }
            }
            this.speed.val = funcs.dist(0, 0, x, y);
            this.speed.ang = funcs.angle360(0, 0, x, y);
        }

    }

    updatePos(){
        this.pos.x += Math.cos(this.speed.ang)*this.speed.val/2;
        this.pos.y += Math.sin(this.speed.ang)*this.speed.val/2;
    }




}