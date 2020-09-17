class Ball{
    constructor(pos,speed,mass,radius,locked,attractOthers){

        this.pos = pos;
        this.speed = speed;
        this.mass = mass;
        this.radius = radius;
        this.locked = locked || false;
        this.attractOthers = attractOthers;
        if (typeof attractOthers === 'undefined'){
            this.attractOthers = true;
        }
        this.world = {};
        this.visual = new BallVisual(this);
        this.id = funcs.randomInt(0,100);
    }
    updateSpeed() {
        if (!this.locked) {
            for (let i = 0; i < this.world.balls.length; i++) {
                let secondBall = this.world.balls[i];
                if (secondBall.attractOthers) {
                    let dist = funcs.distPos(this.pos, secondBall.pos);
                    if (dist > this.radius + secondBall.radius) {
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
        this.pos.x += Math.cos(this.speed.ang)*this.speed.val;
        this.pos.y += Math.sin(this.speed.ang)*this.speed.val
    }
    draw(){

        ctx.beginPath();
        ctx.fillStyle = 'rgba(200,2000,200,1)';
        ctx.arc(this.pos.x,this.pos.y,this.radius,0,Math.PI*2);
        ctx.strokeStyle = "rgba(200,2000,200,0.5)";
        ctx.fill();
        ctx.closePath();
    }
}