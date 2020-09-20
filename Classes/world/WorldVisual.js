class WorldVisual{
    constructor(world,size,parentNode){


        let canvas = funcs.canvasCreator(size);
        let ctx = canvas.getContext('2d');

        this.size = size;

        this.parentNode = parentNode;
        this.hasBalltoView = false;
        this.ballToView = false;

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
    mainWorldDraw(){

        if (this.hasBalltoView){
            this.parentNode.style.left = (this.size.w/2 - this.ballToView.pos.x) + "px";
            this.parentNode.style.top = (this.size.h/2 - this.ballToView.pos.y) + "px";
            this.thirdContext.beginPath();
            this.thirdContext.fillStyle = "blue";
            this.thirdContext.arc(this.ballToView.pos.x,this.ballToView.pos.y,
                this.ballToView.radius, 0, Math.PI*2);
            this.thirdContext.fill()
            this.thirdContext.closePath();
        }

        this.mainContext.clearRect(0,0,this.size.w,this.size.h);
        for (let i = 0; i < this.world.balls.length; i++){
            this.world.balls[i].visual.drawBall();
            this.world.balls[i].visual.drawTail();
        }
    }
}