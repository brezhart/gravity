class WorldVisual {
    constructor(world, size, parentNode) {
        this.size = size;
        this.parentNode = parentNode;
        this.hasBalltoView = false;
        this.ballToView = false;
        this.zoom = new Zoom(this);
        this.size = size;
        this.world = world;


        let ctx = funcs.canvasCreator(size,parentNode);
        this.mainContext = ctx;
        let sctx = funcs.canvasCreator(size,parentNode);
        let tctx = funcs.canvasCreator(size,parentNode);
        this.thirdContext = tctx;

        let dctx = funcs.canvasCreator(size,parentNode);
        this.fourthContext = dctx;

        sctx.strokeStyle = "rgba(100,100,100,0.1)";
        this.secondContext = sctx;
    }

    arc(ctx, x, y, r, c = 'black') {
        let visualX = this.zoom.getVisualX(x);
        let visualY = this.zoom.getVisualY(y);
        let visualRadius = this.zoom.getVisualRadius(r);
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.arc(visualX, visualY, visualRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    clear(ctx){
        ctx.clearRect(0, 0, this.size.w, this.size.h);
    }
    line(ctx,pos1,pos2,c = 'black', w = 1){
        ctx.beginPath();
        let visualPos1 = this.zoom.getVisualPos(pos1);
        let visualPos2 = this.zoom.getVisualPos(pos2);

        ctx.moveTo(visualPos1.x, visualPos1.y);
        ctx.lineTo(visualPos2.x, visualPos2.y);
        ctx.strokeStyle = c;
        ctx.strokeWidth = w;
        ctx.stroke();
        ctx.closePath();

    };

    arcAround(ctx, x, y, r, c = 'red') {
        let visualX = this.zoom.getVisualX(x);
        let visualY = this.zoom.getVisualY(y);
        let visualRadius = this.zoom.getVisualRadius(r + 1);
        ctx.beginPath();
        ctx.arc(visualX, visualY, visualRadius, 0, Math.PI * 2);
        ctx.strokeStyle = c;
        ctx.stroke();
        ctx.closePath();
    }


    mainWorldDraw() {
        this.clear(this.mainContext);

        for (let i = 0; i < this.world.balls.length; i++) {
            this.world.balls[i].visual.drawBall();
            // this.world.balls[i].visual.drawTail();
        }
        if (this.hasBalltoView) {
            this.arc(this.mainContext, this.ballToView.pos.x, this.ballToView.pos.y, this.ballToView.radius, "pink");
            this.arcAround(this.mainContext, this.ballToView.pos.x, this.ballToView.pos.y, this.ballToView.radius, "pink");
        }
    }


}