


let canvasCont = document.getElementById('canvasCont');
let w = window.innerWidth;
let h = window.innerHeight;
canvasCont.style.width = w + "px";
canvasCont.style.height = h + "px";

let world = new World();
let clickGUI = new MainHandler(w,h,canvasCont);

world.initVisual(world, new Size(w,h), canvasCont);
world.addBall(new Pos(  w/2,h/2), new Speed(3,Math.PI), 60000, 30, false, true);
world.addClaster(new Pair(w/2-(w/4)-w/50,w/2-(w/4)+w/50), new Pair(h/2-(h/5)-h/50,h/2-(h/5)+h/50),300, new Speed(50,0*Math.PI),10, 3, false, true);
clickGUI.connectToWorld(world);

iter = 0;



function loop(){
    if (!world.isPaused) {
        world.tick();
    }
    clickGUI.pickBall();
    world.visual.mainWorldDraw();
    iter++;
    window.requestAnimationFrame(loop)
};
loop();

//
// loop();






