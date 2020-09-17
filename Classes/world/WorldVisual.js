class WorldVisual{
    constructor(world,size,parentNode){


        let canvas = funcs.canvasCreator(size);
        let ctx = canvas.getContext('2d');

        this.mainContext = ctx;
        this.size = size;
        this.world = world;

        let scanvas = funcs.canvasCreator(size);
        let sctx = scanvas.getContext('2d');
        sctx.strokeStyle = "rgba(100,100,100,0.1)";
        this.secondContext = sctx;

        parentNode.appendChild(scanvas);
        parentNode.appendChild(canvas);
    }
    mainWorldDraw(){
        this.mainContext.clearRect(0,0,this.size.w,this.size.h);
        for (let i = 0; i < this.world.balls.length; i++){
            this.world.balls[i].visual.drawBall();
            this.world.balls[i].visual.drawTail();
        }
    }
}