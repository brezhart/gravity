class BallVisual{

    constructor(ball,color){
        this.ball = ball;
        this.posses = [];
        this.trailLength = 100;
        for (let i = 0; i < this.trailLength; i++){
            this.posses.push(new Pos(this.ball.pos.x, this.ball.pos.y))
        }
        this.iter = 0;
    }

    setLastPos(){

        this.posses[this.iter] = new Pos(this.ball.pos.x, this.ball.pos.y);

        this.iter++;
        this.iter%=this.trailLength;
    }

    getLastPos(){
        return this.lastPos;
    }

    drawBall(){
        let ctx = this.ball.world.visual.mainContext;
        this.ball.world.visual.arc(ctx,this.ball.pos.x,this.ball.pos.y, this.ball.radius, this.ball.color);
    }
    drawTail(){
        // this.ball.poses.push(new Pos(this.ball.pos.x, this.ball.pos.y));

        let ctx = this.ball.world.visual.fourthContext;
        ctx.beginPath();
        for (let i = this.iter; i < this.iter + this.trailLength - 1; i++) {

            ctx.moveTo(this.ball.world.visual.zoom.getVisualX(this.posses[i%this.trailLength].x), this.ball.world.visual.zoom.getVisualY(this.posses[i%this.trailLength].y));
            ctx.lineTo(this.ball.world.visual.zoom.getVisualX(this.posses[(i+1)%this.trailLength].x), this.ball.world.visual.zoom.getVisualY(this.posses[(i+1)%this.trailLength].y));
        }
        // for (let i = this.iter; i < this.trailLength-1; i++) {
        //     ctx.moveTo(this.ball.world.visual.zoom.getVisualX(this.posses[i%this.trailLength].x), this.ball.world.visual.zoom.getVisualY(this.posses[i%this.trailLength].y));
        //     ctx.lineTo(this.ball.world.visual.zoom.getVisualX(this.posses[(i+1)%this.trailLength].x), this.ball.world.visual.zoom.getVisualY(this.posses[(i+1)%this.trailLength].y));
        // }
        if (!this.ball.world.isPaused) {
            this.setLastPos();
        }

        let rgb = funcs.hexToRgb(this.ball.color);
        ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.2)`;
        ctx.stroke();
        ctx.closePath();
    }

}