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
            for (let i = 0; i < this.world.balls.length; i++) {
                let secondBall = this.world.balls[i];
                if (secondBall.attractOthers && (this.id !== secondBall.id)) {
                    let dist = Math.max(funcs.distPos(this.pos, secondBall.pos),(this.radius + secondBall.radius));
                    // if (dist > (this.radius + secondBall.radius)) {
                    if (true) {
                        let newAng = funcs.angle360(this.pos.x, this.pos.y, secondBall.pos.x, secondBall.pos.y);
                        let newForce = (this.mass * secondBall.mass) / (dist*dist);
                        let actualForce = (newForce / this.mass) * this.world.gravityCoef;
                        let x = Math.cos(this.speed.ang) * this.speed.val + Math.cos(newAng) * actualForce;
                        let y = Math.sin(this.speed.ang) * this.speed.val + Math.sin(newAng) * actualForce;
                        this.speed.val = funcs.dist(0, 0, x, y);
                        this.speed.ang = funcs.angle360(0, 0, x, y);
                        // console.log("VAL:", this.speed.val);
                    }
                }
            }
        }
    }
    updatePos(){
        this.pos.x += Math.cos(this.speed.ang)*this.speed.val/2;
        this.pos.y += Math.sin(this.speed.ang)*this.speed.val/2;
    }
}