class ClickHandler{
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
    }
    // TODO: rewrite that shit coded code!
    updateMouseMove(event) {

        this.mousePos.x = event.offsetX;
        this.mousePos.y = event.offsetY;
    }
    setMousePosHandler(){
        console.log("123");
        window.addEventListener('mousemove',this.updateMouseMove.bind(this));
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
            let dist = funcs.dist(mouseX,mouseY,ball.pos.x,ball.pos.y);
            if (dist < ball.radius) {
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
            // console.log(this.wolrd.visual.size.x,this.wolrd.visual.size.y);
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(pickedBall.pos.x, pickedBall.pos.y, pickedBall.radius, 0, Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }
    }
    //TODO: Rewrite this part :downarrow:
    stopGameButtonHandler(event){
        console.log(event.keyCode);
        if (event.keyCode == 49){

           if (this.world.isPaused){
               this.world.continueGame();
           } else{
               this.world.stopGame();
           }
        } else if(event.keyCode == 50){
            this.world.visual.hasBalltoView = false;
            this.world.visual.parentNode.style.top = 0 + "px";
            this.world.visual.parentNode.style.left = 0 + "px";
        }
    }
    clickToSelect(){
        if (this.ball !== 0){
            this.world.visual.hasBalltoView = true;
            this.world.visual.ballToView = this.ball;
        }
    }

    setPauseKeyBind(){
        window.addEventListener('click', this.clickToSelect.bind(this));
        window.addEventListener('keypress', this.stopGameButtonHandler.bind(this));
    }
}