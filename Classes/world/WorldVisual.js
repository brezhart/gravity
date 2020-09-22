class WorldVisual {
    constructor(world, size, parentNode) {


        let canvas = funcs.canvasCreator(size);
        let ctx = canvas.getContext('2d');

        this.size = size;

        this.parentNode = parentNode;
        this.hasBalltoView = false;
        this.ballToView = false;
        this.zoom = new Zoom(this);

        this.mainContext = ctx;
        this.size = size;
        this.world = world;

        let scanvas = funcs.canvasCreator(size);
        let sctx = scanvas.getContext('2d');
        sctx.strokeStyle = "rgba(100,100,100,0.1)";
        this.secondContext = sctx;

        let tcanvas = funcs.canvasCreator(size);

        let tctx = tcanvas.getContext('2d');
        this.thirdContext = tctx;

        parentNode.appendChild(scanvas);
        parentNode.appendChild(canvas);
        parentNode.appendChild(tcanvas);

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

        this.mainContext.clearRect(0, 0, this.size.w, this.size.h);

        for (let i = 0; i < this.world.balls.length; i++) {
            this.world.balls[i].visual.drawBall();
            this.world.balls[i].visual.drawTail();
        }
        if (this.hasBalltoView) {
            this.arc(this.mainContext, this.ballToView.pos.x, this.ballToView.pos.y, this.ballToView.radius, "pink");
            this.arcAround(this.mainContext, this.ballToView.pos.x, this.ballToView.pos.y, this.ballToView.radius, "pink");
        }
    }


}