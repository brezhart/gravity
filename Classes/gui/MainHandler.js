class MainHandler{
    constructor(w,h,parent){
        this.w = w;
        this.h = h;
        let div = document.createElement('div');
        this.element = div;
        this.mousePos = new Pos(0,0);
        this.ball = 0;
        div.style.height = h + "px";
        div.style.width = w + "px";
        parent.appendChild(div);

        window.addEventListener('keypress', handlerFunctions.keyBoardHandler.bind(this));
        parent.addEventListener('mousemove', this.updateMouseMove.bind(this));
    }
    // TODO: rewrite that shit coded code!
    setUpClick(){
        window.addEventListener('click', handlerActivationFunctions.clickHandler.bind(this));
    }
    removeClick(){
        console.log("REMOVED");
        window.removeEventListener('click', handlerActivationFunctions.clickHandler.bind(this));
    }



    updateMouseMove(event) {

        this.mousePos.x = event.offsetX;
        this.mousePos.y = event.offsetY;
    }
    connectToWorld(world){
        this.world = world;
    }

    pickBall(){
        let mouseX = this.mousePos.x;
        let mouseY = this.mousePos.y;
        let fl = false;
        let distToPickedBall;
        let pickedBall;


        for (let i = 0; i <  this.world.balls.length; i++){
            let ball = this.world.balls[i];
            let visaulX = this.world.visual.zoom.getVisualX(ball.pos.x);
            let visaulY = this.world.visual.zoom.getVisualY(ball.pos.y);
            let visaulRadius = this.world.visual.zoom.getVisualRadius(ball.radius);
            let dist = funcs.dist(mouseX,mouseY,visaulX,visaulY) -2;
            if (dist < visaulRadius) {
                if (!fl) {
                    pickedBall = ball;
                    distToPickedBall = dist;
                    fl = true;
                } else if (dist < distToPickedBall){
                    pickedBall = ball;
                    distToPickedBall = dist;
                }
            }
        }


        if (fl){
            this.ball = pickedBall;
        } else {
            this.ball = 0;
        }


        let ctx = this.world.visual.thirdContext;
        ctx.clearRect(0,0,this.world.visual.size.w,this.world.visual.size.h);
        if (fl){
            this.world.visual.arc(ctx,pickedBall.pos.x, pickedBall.pos.y, pickedBall.radius, 'red');
            this.world.visual.arcAround(ctx,pickedBall.pos.x, pickedBall.pos.y, pickedBall.radius, 'red');
        }
    }
}