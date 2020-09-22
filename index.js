


let canvasCont = document.getElementById('canvasCont');
let w = window.innerWidth;
let h = window.innerHeight;
let viewH = window.innerHeight;
let viewW  = window.innerWidth;
canvasCont.style.width = w + "px";
canvasCont.style.height = h + "px";

let world = new World();
let clickGUI = new MainHandler(w,h,canvasCont);

world.initVisual(world, new Size(w,h), canvasCont);
world.addBall(new Pos( 0, -300 ), new Speed(0, 0 * Math.PI), 60000, 30,'black', false, true);
world.addClaster(new Pair(-100,100), new Pair(-100,100),50, new Speed(50, 0*Math.PI),10, 3, "random", false, true);
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






