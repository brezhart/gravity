class BallVisual{

    constructor(ball,color){
        this.color = color || "#000000";
        let lastPos = {};
        this.ball = ball;
        Object.assign(lastPos,ball.pos);
        this.lastPos = lastPos;
    }

    setLastPos(){
        Object.assign(this.lastPos,this.ball.pos);
    }

    getLastPos(){
        return this.lastPos;
    }

    drawBall(){
        let ctx = this.ball.world.visual.mainContext;
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.arc(this.ball.pos.x, this.ball.pos.y, this.ball.radius, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
    drawTail(){
        let sctx = this.ball.world.visual.secondContext;
        sctx.beginPath();
        sctx.moveTo(this.lastPos.x,this.lastPos.y);
        sctx.lineTo(this.ball.pos.x,this.ball.pos.y);
        sctx.stroke();
        sctx.closePath();
        this.setLastPos();
    }

}